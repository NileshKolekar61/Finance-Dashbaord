import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
    });
  }

  signIn() {
    this.notificationService.showSuccess('Login successful');
    this.signInForm.reset();
    this.router.navigate(['finance']);
  }

  signUp() {
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}
