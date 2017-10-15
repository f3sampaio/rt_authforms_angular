import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  usernameControl;passwordControl: FormControl;
  constructor(private fb: FormBuilder) {
    this.buildFormControls();
    this.loginForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl
    })
  }

  ngOnInit() {
  }

  buildFormControls() {
    this.usernameControl = new FormControl('', Validators.compose([
      Validators.email
    ]));

    this.passwordControl = new FormControl('', Validators.compose([
      Validators.required
    ]))
  }

  submitForm() {
    console.log(this.loginForm.value);
  }


}
