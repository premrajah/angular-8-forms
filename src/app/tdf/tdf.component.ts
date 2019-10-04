import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrolmentService } from './enrolment.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMessage = '';

  userModel = new User(
    'Spider',
    'man',
    1928374650,
    'default',
    'morning',
    false
  );

  constructor(private enrolmentService: EnrolmentService) {}

  ngOnInit() {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(tdfForm) {
    // console.log(tdfForm);
    this.submitted = true;
    this.enrolmentService.enroll(this.userModel).subscribe(
      data => {
        console.log('Success!: ', data);
      },
      error => this.errorMessage = error.statusText
    );
  }
}
