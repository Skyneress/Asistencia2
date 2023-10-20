import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(
              private auth: AuthService, 
              private router: Router,
              private modal: ModalController
  ) { }

  ngOnInit() {
  }

  email: string = '';

  async reinicioCon() {
    try {
      console.log(this.email);
      await this.auth.resetPassword(this.email);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

  closeModal(){
    this.modal.dismiss();
  }

}
