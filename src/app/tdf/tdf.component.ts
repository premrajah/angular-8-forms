import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('', 'Man', 936467684979, '', 'morning', true);

  constructor() { }

  ngOnInit() {
  }



}
