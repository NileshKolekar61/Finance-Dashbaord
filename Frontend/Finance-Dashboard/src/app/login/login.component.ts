import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  signUpForm: FormGroup;

  selectedTab: string = 'Sign In';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.signUpForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
    });
  }

  signIn() {
    console.log(this.signInForm.value);
    this.signInForm.reset();
    // this.router.navigate(['finance']);
  }

  signUp() {
    console.log(this.signUpForm.value);
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}
