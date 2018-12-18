import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestlagiComponent } from './test/testlagi.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:"test",component:TestComponent},
  {path:"testlagi",component:TestlagiComponent},
  {path:"customers",component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
