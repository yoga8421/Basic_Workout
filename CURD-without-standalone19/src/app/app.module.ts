// Step 5: Add HttpClientModule in app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiMappingComponent } from './component/api-mapping/api-mapping.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApiMappingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add HttpClientModule here
    HttpClientModule ,
    // Step 8: Create a Form with Reactive Forms
    // add  ReactiveFormsModule here
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Step 6: Display API Data in Home Component
// Modify api-mapping.component.ts