import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch:'full'},
  { path: 'list', loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule) },
  { path: 'form', loadChildren: () => import('./form-page/form-page.module').then(m => m.FormPageModule) },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
