// Step 7: Setup Routing
// Modify app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiMappingComponent } from './component/api-mapping/api-mapping.component';
import { FormControl } from '@angular/forms';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  { path: 'api-mapping', component: ApiMappingComponent },
  { path: '', redirectTo: 'api-mapping', pathMatch: 'full' },
  { path: 'form', component: FormComponent }
  // Modify app.component.html to add a link to the form:
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Modify app.component.html