import { Component } from '@angular/core';
import {AuthService } from './services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
              private auth: AuthService,
              private router: Router

  ) {}


/*   logout(){
    this.auth.logout();
    this.router.navigate(['/login'])
  } */



/*   no entendi por que pone el cerrar sesion en el app.component sdkjfsd */
}
