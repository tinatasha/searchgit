import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  user:User;
  username:string = "";
  response:any;
  repos= [];
  // users=[];
  viewRepo:boolean=false;


  constructor(private profileService:ProfileService,private http:HttpClient) { 

    
// toggleRepos() {
//   this.viewRepo = !this.viewRepo;
// }
}

 
  getMyProfile(){
    this.http.get('https://api.github.com/users/liciolentimo?access_token=addbdbd1509d13599c0df3ca811a8afdc25a7794')
    .subscribe ((response) => {
      this.response = response;
      // this.user = this.profileService.getProfileInfo(this.username);
      // this.repos = this.profileService.getRepo(this.username);
        console.log(this.response);
  })
}
ngOnInit() {
  this.profileService.getMyProfile(this.username);
  // this.user = this.profileService.repos;
}

}
