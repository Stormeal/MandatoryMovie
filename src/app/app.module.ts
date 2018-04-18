import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRouterModule } from './app-router/app-router.module';
import { HttpService } from './http-service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
