import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  standalone: false
})
export class SideBarComponent implements OnInit {

  isSidebarOpen: boolean = true;
  sideBarList: any;
  selectedKey: string = '';

  @Output() SidebarToggle = new EventEmitter<boolean>;
  @Output() SidebarItem = new EventEmitter<string>;

  constructor(
    private router: Router,
    private readonly configService: ConfigService
  ) {}

  ngOnInit() {
    this.configService.getConfigFile().subscribe((file: any) => {
      this.sideBarList = Object.entries(file.SideBarItems);
      this.setSelectedKeyFromUrl(this.router.url);
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setSelectedKeyFromUrl(event.urlAfterRedirects);
      });
  }

  setSelectedKeyFromUrl(url: string) {
    const segments = url.split('/');
    const key = segments[2];

    if (key && this.sideBarList.some(([k]: [string, string]) => k === key)) {
      this.selectedKey = key;
    } else {
      this.selectedKey = '';
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.SidebarToggle.emit(this.isSidebarOpen);
  }

  selectedListItem(item: string) {
    this.selectedKey = item;
    this.SidebarItem.emit(item);
  }

}
