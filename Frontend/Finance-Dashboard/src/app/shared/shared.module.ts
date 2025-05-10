import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { SideBarComponent } from './componets/side-bar/side-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavBarComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
