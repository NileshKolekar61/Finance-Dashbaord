import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: false
})
export class MainComponent {
  
  isSidebarOpen: boolean = true;
  currentPage: string = '';

  constructor(
    private readonly router: Router
  ) {}

  panelToggle(value: boolean) {
    this.isSidebarOpen = value;
  }

  SelectedSidebarItem(item: string) {
    this.router.navigate([`finance/${item}`])
  }

}
