import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPageRoutingModule } from './form-page-routing.module';
import { FormPageComponent } from './form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [FormPageComponent],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule
  ]
})
export class FormPageModule { }
