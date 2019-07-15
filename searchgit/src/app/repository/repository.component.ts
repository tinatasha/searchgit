import { Component, OnInit,Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor() { }
  @Input() repos:Repository;
  ngOnInit() {
  }

}
