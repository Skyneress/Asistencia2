import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  email1: string = '';
  nombre1: string = '';
  password: string = '';


  form = this.formbuilder.group({
    nombre: ['',[Validators.minLength(3),Validators.required]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.minLength(6),Validators.required]]

  
  })

  constructor(
              private auth: AuthService,
              private router : Router,
              private formbuilder: FormBuilder,
              private helper: HelperService,
              private storage:StorageService,
              private alert: AlertController
              

  ) { }

  ngOnInit() {
  }

  async registro() {
    if (this.password.length < 6) {
      const alert = await this.helper.showAlert("Contraseña debe tener como minimo 6 digitos","Error de registro");
      await alert.present();
      return;
    }
  
    const loader = await this.helper.showLoader("Cargando");
  
    try {
      if (this.form.valid) {
        const { email, password } = this.form.getRawValue();
  

        this.auth.register(email, password)
          .then(async () => {
            var user = [{
              correo: this.email1,
              nombre: this.nombre1
            }]
            this.storage.guardarUsuario(user);
            console.log("CORREOASDASDASD", user)
            this.router.navigate(["/login"]);
            await loader.dismiss();
            await this.helper.showAlert("Usuario registrado correctamente", "Información");
          })
          .catch(async (registrationError) => {
            await loader.dismiss();
            console.error("Error en el registro:", registrationError);
            this.helper.showAlert("Error en el registro", "Información");
          });
      } else {
        await loader.dismiss();
        this.helper.showAlert("Por favor complete todos los campos correctamente", "Información");
      }
    } catch (error) {
      console.error("Error en la función de registro:", error);
    }
  }
  

  validateEmail(email: string): boolean {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
    


  
  }







