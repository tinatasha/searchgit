import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

 import {map} from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  complete:boolean = false;

  username:string;
  repos:string;
  // private clientid = 'a427cef0d946c7f7df23';
  // private clientsecret = '9a2bab196c8c42c6984eb0f85c68bcac01e04556';

  constructor(private http:HttpClient) { 
    
     console.log("service is now ready!");
    
    //this.username = '';
   
  }

  getProfileInfo(username){
    interface ApiData {
      name:string;
      avatar:string;
      bio:string;
      followers:number;
      following:number;
    }
    let user = new User("","",0,0,"","",0,"");
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>('https://api.github.com/users/'+ username+  '?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794').toPromise().then(data => {
        user.name = data["login"];
        user.url = data["html_url"]
        user.created_at = data["created_at"]
        user.repos = data["public_repos"]
        user.avatar = data["avatar_url"];
        user.bio = data["bio"]; 
        user.followers = data["followers"];
        user.following = data["following"];
        if(data["bio"] === null) {
          user.bio = "Github user"
        }
        resolve();
      },err => {
        user.name = "User not found";
        reject(err);
      })
    })
    return user;
  }

  getMyProfile(username){
    interface ApiData{
      name:string;
      avatar:string;
      bio:string;
      followers:number;
      following:number;
  }
  

  let user = new User("","",0,0,"","",0,"");
  let promise = new Promise(() => {
    this.http.get<ApiData>('https://api.github.com/users/liciolentimo?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794').toPromise().then(data => {
      user.name = data["login"];
      user.url = data["html_url"]
      user.created_at = data["created_at"]
      user.repos = data["public_repos"]
      user.avatar = data["avatar_url"];
      user.bio = data["bio"]; 
      user.followers = data["followers"];
      user.following = data["following"];
      // if(data["bio"] === null) {
      //   user.bio = "Github user"
      // }
    //   resolve();
    // },err => {
    //   user.name = "User not found";
    //   reject(err);
    })
  })
  return user;
}

  getRepo(name) {
    interface ApiData {
      name:string;
      description:string;
      forks:number;
      language:string;
      watches:string;
      url:string;
      stars:number
    }
    let repos = [];
   
    let repo = new Repository("","",0,0,"","",0);
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>('https://api.github.com/users/'+ name +'/repos?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794').toPromise().then(response => {
        for(let i = 0; i < response["length"];i++) {
          let newRepo = new Repository("","",0,0,"","",0)
          newRepo.name = response[i]["name"];
          newRepo.forks = response[i]["forks"];
          newRepo.language = response[i]["language"];
          newRepo.stars = response[i]["stargazers_count"];
          newRepo.watches = response[i]["watchers"];
          newRepo.url = response[i]["html_url"];
          repos.push(newRepo)
        }
      }, err => {
        console.log("Repo not found");
        reject(err);
      })
    })
    return repos
  }
}



  


