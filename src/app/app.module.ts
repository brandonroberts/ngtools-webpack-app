// Code generated by angular2-stress-test
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
