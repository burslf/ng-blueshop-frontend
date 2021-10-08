import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../../shared/utils/app-validator';
import { AuthService } from '../../services/auth.service'
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public token: string | null = this.cookieService.get('token');
  public isLoading = false;
  public errors = {
    message: ''
  }
  // private loginService: LoginService, private cookieService: CookieService
  constructor(public fb: FormBuilder, private cookieService: CookieService, public router: Router, private auth: AuthService, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {

  }
  
  onSubmit() {
    this.isLoading = true
    const isAdmin = this.form.get('email')?.value == 'admin@admin.com' && this.form.get('password')?.value == 'admin'
    if(isAdmin) {
      this.router.navigate(['/admin'])
    }else {
      this.isLoading = false
      this.errors.message = 'You are not admin'
    }
    // this.auth.login(this.form.value)
    // .subscribe(
    //   (data: any) => {
    //     console.log(data)
    //     this.token = data['token']      
    //     if(this.token) {
    //       this.isLoading = false
    //       this.cookieService.set('token', this.token)
    //       this._snackBar.open('Successfully logged in !', 'Close', {
    //         duration: 1300
    //       })
    //     }

    //   },
    //   err =>{
    //     console.log(err)
    //     this.isLoading = false
    //     this.errors.message = err.error.message
    //   }
    // )
  }

  logout() {
    this.cookieService.delete('token')
    this.token = null
  }
}
