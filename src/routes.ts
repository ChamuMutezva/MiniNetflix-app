import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { MylistComponent } from './app/mylist/mylist.component';
import { MoviesComponent } from './app/movies/movies.component';

export const appRoutes: Routes =[
    {path: "home" , component: HomeComponent},
    {path: "login", component: LoginComponent },
    {path: "mylist", component: MylistComponent},
    {path: "movies", component: MoviesComponent},
    {path: "", redirectTo: "home", pathMatch: "full"}
]