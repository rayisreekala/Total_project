import { Component } from '@angular/core';
// import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidationsService } from 'src/app/shared/services/form-validations.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService] 
})
export class LoginComponent {
  loginForm: any;
  userName: any;
  password: any;
  isvalid:any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private fv: FormValidationsService,
    private messageService: MessageService 
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [this.fv.required, this.fv.email]],
      password: ['', [this.fv.required]],
    });
  }
public signIn() {
  this.userName = this.loginForm.controls.username.value;
  this.password = this.loginForm.controls.password.value;
  if (this.userName === 'sreekala@miraclesoft.com' && this.password === 'Miracle') {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.loginForm.value));
    localStorage.setItem('username', this.userName); // Store the username
    // this.route.navigate(['/main/dashboard']);
  
    this.messageService.add({severity:'success', summary:'Login Successful', detail:'You have successfully logged in!'});
    // Delay navigation to dashboard
    setTimeout(() => {
      this.route.navigate(['/main/home']);
    }, 1500); 
  } else if (this.userName === '' && this.password === '') {
    this.messageService.add({severity:'warn', summary:'Missing Credentials', detail:'Username and password cannot be empty.'});
  } else {
    this.messageService.add({severity:'error', summary:'Invalid Credentials', detail:'The username or password you entered is incorrect.'});
    this.isvalid = false;
  }
}

}
