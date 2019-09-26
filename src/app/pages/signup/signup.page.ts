// import { CommandResourceService } from 'src/app/api/services';
import { KeycloakService } from './../../services/security/keycloak.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage implements OnInit {

 firstName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  confirm: string;

  ngOnInit(): void {

  }

  constructor(private navCtrl: NavController, private util: UtilService,
              private keycloakService: KeycloakService,) {

  }
  signup() {
    if (this.validatePhone() && this.validateEmail()) {
      if (this.passwordMatch()) {
    this.util.createLoader()
      .then(loader => {
        loader.present();
        const user = { username: this.email, email: this.email };
        this.keycloakService.createAccount(user, this.password,
          (res) => {
            loader.dismiss();
            this.createRider();
            this.navCtrl.navigateForward('/login');
          },
          (err) => {
            loader.dismiss();
            if (err.response.status === 409) {
              this.util.createToast('User Already Exists');
            } else {
              this.util.createToast('Cannot Register User. Please Try Later', err);
            }
          });
          // Remove this later
        });
      }
      }
  }


  createRider() {

    this.keycloakService.authenticate({ username: this.email, password: this.password },
      () => {
        console.log('user data ', this.email);
        // tslint:disable-next-line: max-line-length
        // this.commandResourceService.createRiderIfNotExistUsingPOST({idpcode: this.username, firstName: this.firstName, mobilenumber: this.phone,email:this.email}).subscribe(res => {
        //   console.log('created user in microservice ', res);
        //   this.keycloakService.logout();
        //   this.navCtrl.navigateForward('/login');
        // },
        // err => {
        //   console.log('created user in microservice ', err);
        // });
      },
      () => {
        this.util.createToast('an error occured');
      });
  }

  validateEmail() {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(this.email).toLowerCase())) {
      this.util.createToast('Invalid email ');
      return false;
    }
    return true;
  }

  validatePhone() {
    const re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    if (!re.test(String(this.phone).toLowerCase())) {
      this.util.createToast('Invalid Phone number ');
      return false;
    }
    return true;
  }
  passwordMatch() {
    if (!(this.password === this.confirm)) {
      this.util.createToast(' Password dont match ');
      this.confirm = '';
      return false;
    }
    return true;
  }
}


