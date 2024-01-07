import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DataTableComponent } from './datatable/datatable.component'; // Adjust the path as needed

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    RegisterComponent,
    DataTableComponent // Declare DataTableComponent here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule // Add HttpClientModule here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
