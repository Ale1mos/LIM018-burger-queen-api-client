import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { MenuComponent } from './components/menu/menu.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

// const appRoutes : Routes =[
//   {path: 'login', component: LoginComponent}

// ]
@NgModule({
  declarations: [
  AppComponent,
  routingComponents,
    // LoginComponent,
    // MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
