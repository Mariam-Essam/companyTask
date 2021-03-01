import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page.component';

const routes: Routes = [{ path: '', component: FormPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPageRoutingModule { }
