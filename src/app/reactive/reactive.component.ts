import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  registerationForm = new FormGroup({
    username: new FormControl('Bruce.wayne@batman.com'),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}
}
