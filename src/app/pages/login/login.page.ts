import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallesPage } from 'src/app/modals/detalles/detalles.page';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form = this.formbuilder.group({
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.minLength(5),Validators.required]]
  
  })

  usuario:string ="";

  constructor(
              private router:Router,
              private auth: AuthService,
              private formbuilder: FormBuilder,
              private helper: HelperService,
              private modalControlador: ModalController
    ) {}

  ngOnInit() {
  }

  menu(){
    var parametro = 123;
    this.router.navigateByUrl(parametro + "/menu");
  }


  login(){

    try {
      if (this.form.valid){
        const {email,password}=this.form.getRawValue();
        this.auth.login(email,password)
        .then(()=> {
          this.router.navigate(["/menu"]);
          })
      } else {
        
        }
    } catch (error) {
      console.log(error);
      this.helper.showAlert("datos incorrectos","Informacion")
    }
  } 



  async openModal() {
    const modal = await this.modalControlador.create({
      component: DetallesPage,
    });
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
  }

  
}
