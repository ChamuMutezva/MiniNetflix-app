import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MylistComponent } from './mylist/mylist.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from 'src/routes';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MoviesComponent,
    MylistComponent,
    LoginComponent,
    MovieDetailComponent,
   
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule.forRoot(appRoutes),
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
