import { CommandResourceService } from 'src/app/api/services';
import { CurrentUserService } from './../../services/current-user.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { KeycloakService } from 'src/app/services/security/keycloak.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email= '';
  password= '';
  constructor(private oauthService: OAuthService,
              private navCtrl: NavController,
              private toastController: ToastController,
              private util: UtilService,
              private keycloakService: KeycloakService,
              private currentUserService:CurrentUserService,
              private commandResourceService:CommandResourceService) { }

  ngOnInit() {
    if (this.oauthService.hasValidAccessToken()) {
   //   this.navCtrl.navigateRoot('/home');
      this.navCtrl.navigateRoot('/login');

    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'toast'
    });
    toast.present();
  }
  login() {
    if (this.validateEmail() && this.validatePassword()) {
    this.util.createLoader()
      .then(loader => {
        loader.present();
        this.keycloakService.authenticate({ username: this.email, password: this.password },
          () => {
            loader.dismiss();
            console.log('slsklkslkks');
            //writen to get and store the current user in current user for further use
            this.currentUserService.getCurrentUser(true).then(res=>{});
            this.commandResourceService.createcustomerIfnotExistUsingPOST({customerIdpCode:this.email}).subscribe();
            this.navCtrl.navigateForward('/home');
          },
          () => {
            loader.dismiss();
            this.util.createToast('Invalid Username or Password');
          });
      });
    }
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

  validatePassword() {
    return (!(this.password === ''));
  }


}
