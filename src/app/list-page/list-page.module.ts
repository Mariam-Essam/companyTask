import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';


@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
