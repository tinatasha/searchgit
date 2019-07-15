import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gitsearch';

  response:any;

  user:User;
  profile:any[];
  repos =[];
  username:string;
  viewProfile:boolean=false;

  constructor(private profileService:ProfileService,private http:HttpClient) { 
    // this.http.get('https://api.github.com/users/liciolentimo/?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794')
    // .subscribe ((response) => {
    //   this.response = response;
    // this.profileService.getProfileInfo(this.username);
  	// this.profileService.getProfileInfo(name).subscribe(profile => {
    //   console.log(profile);
    // })
  }

    // searchUser(){
    // this.profileService.getProfileInfo(this.username);
  	// this.profileService.getProfileInfo(name).subscribe(profile => {
    //   console.log(profile);
    // });
    // this.profileService.getProfileRepos(name).subscribe(repos => {
    //   console.log(repos);
    // })
    // toggleProfile(){
    // this.viewProfile = !this.viewProfile;
    // this.http.get('https://api.github.com/users/liciolentimo/?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794')
    // .subscribe ((response) => {
    //   this.response = response;
    // })
    // }
  
  ngOnInit() {
  }
}
