import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorComponent } from './validator/validator.component';

const routes: Routes = [
  { path: '', component: ValidatorComponent, pathMatch: 'full'},
  { path: '**', component: ValidatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
