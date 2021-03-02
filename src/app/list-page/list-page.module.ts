import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from '../search.pipe';
import { MatButtonModule } from '@angular/material/button';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    ListPageComponent,
    SearchPipe  
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    SweetAlert2Module
  ]
})
export class ListPageModule { }
