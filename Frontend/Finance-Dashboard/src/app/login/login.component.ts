import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  signUpForm: FormGroup;
  selectedTab: string = 'Sign In';

  constructor(
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.signUpForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    });
  }

  signIn() {
    this.notificationService.showSuccess('Login successful');
    this.signInForm.reset();
    this.router.navigate(['finance']);
  }

  signUp() {
    this.notificationService.showSuccess('SignUp successful');
    this.signUpForm.reset();
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  get firstname() {
    return this.signUpForm.get('firstname');
  }

  get lastname() {
    return this.signUpForm.get('lastname');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get number() {
    return this.signUpForm.get('number');
  }

}
