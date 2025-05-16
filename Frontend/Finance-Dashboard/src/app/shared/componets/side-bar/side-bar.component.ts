import { Component, EventEmitter, Output } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: false
})
export class SideBarComponent {

  isSidebarOpen: boolean = true;
  sideBarList: any;

  @Output() SidebarToggle = new EventEmitter<boolean>;
  @Output() SidebarItem = new EventEmitter<string>;

  constructor(
    private readonly configService: ConfigService
  ) {
    this.configService.getConfigFile().subscribe((file: any) => {
      this.sideBarList = Object.entries(file.SideBarItems);
    })
   }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.SidebarToggle.emit(this.isSidebarOpen);
  }

  selectedListItem(item: string) {
    this.SidebarItem.emit(item);
  }

}
