import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }
  email: string = '';

  async resetPassword() {
    try {
      console.log(this.email);
      await this.auth.resetPassword(this.email);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
