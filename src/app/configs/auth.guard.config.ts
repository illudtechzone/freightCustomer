import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
    issuer: 'http://dev.servers.divisosofttech.com:8888/auth/realms/freight',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email',
    dummyClientSecret: '861f1081-2b85-48a9-82eb-62b38a31be64',
    tokenEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/freight/protocol/openid-connect/token',
    userinfoEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/freight/protocol/openid-connect/userinfo',
    oidc: false,
    requireHttps: false
  };

@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();


        // Optional
        this.oauthService.setupAutomaticSilentRefresh();

        // this.oauthService.events.subscribe(e => {
        //   // tslint:disable-next-line:no-console
        //   console.debug('oauth/oidc event', e);
        // });

        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'session_terminated'))
        //   .subscribe(e => {
        //     console.debug('Your session has been terminated!');
        //   });

        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'token_received'))
        //   .subscribe(e => {
        //     // this.oauthService.loadUserProfile();
        //   });
    }
}
