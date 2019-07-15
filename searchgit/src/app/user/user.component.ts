
import { Component, OnInit } from '@angular/core';


import { User } from '../user';
import { ProfileService } from '../profile.service';
import * as $ from "jquery";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[ProfileService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Gitsearch';
 
  response:any;

  user:User;
  // profile:any[];
  repos =[];
  clone = [];
  username:string = "";
  viewRepo:boolean = false;

  ngOnInit() {
  }

  constructor(private http:HttpClient,private profileService:ProfileService) { }
  users:User[] = []

  searchUser(){
    this.http.get('https://api.github.com/users/' + this.username + '?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794')
    .subscribe ((response) => {
      this.response = response;
      this.user = this.profileService.getProfileInfo(this.username);
    this.repos = this.profileService.getRepo(this.username);
      console.log(this.response);
    })
  }

  //   searchUser(){

  //     let userName = $("#name").val()
  //   this.user = this.profileService.getProfileInfo(userName);
  //   this.repos = this.profileService.getRepo(userName);
  //   this.clone = this.repos;
  //   $("#name").val("")
  //   this.viewRepo = false;
  //   console.log(this.repos)
  // }

  toggleRepos() {
    this.viewRepo = !this.viewRepo;
  }

  searchRepo() {
    let toSearch = $("#repoSearch").val();
    this.http.get('https://api.github.com/users'+this.username)
    this.repos.forEach(element => {
      element.name.indexOf(toSearch) === -1 ? element.display = false : element.display = true;
    });
    $("#repoSearch").val("")
    
  }
  viewAll() {
    this.repos.forEach(repo => {
      repo.display = true;
    })

    // this.profileService.updateProfile(this.username);
  	// this.profileService.getProfileInfo().subscribe(profile => {
    //   console.log(profile);
    // });
    // this.profileService.getProfileRepos().subscribe(repos => {
    //   console.log(repos);
    // })
}

  
  
}

