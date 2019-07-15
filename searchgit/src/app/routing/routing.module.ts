import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileService } from '../profile.service';
import { HttpClientModule } from '@angular/common/http';
// import { UserComponent } from '../user/user.component';
// import { RepositoryComponent } from '../repository/repository.component';
//import { NotFoundComponent } from '../not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

//const routes:Routes=[
  // {path:"repository",component:RepositoryComponent},
  // {path:"user",component:UserComponent},
  // {path:"",redirectTo:"/",pathMatch:"full"},
  // {path:'**',component:NotFoundComponent}
//]


@NgModule({
  declarations: [
    // UserComponent,
    // RepositoryComponent,
   // NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class RoutingModule { }
