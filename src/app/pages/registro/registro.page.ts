import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  email1: string = '';
  nombre1: string = '';


  form = this.formbuilder.group({
    nombre: ['',[Validators.minLength(3),Validators.required]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.minLength(5),Validators.required]]

  
  })

  constructor(
              private auth: AuthService,
              private router : Router,
              private formbuilder: FormBuilder,
              private helper: HelperService,
              private storage:StorageService,
              

  ) { }

  ngOnInit() {
  }

  async registro(){

  const loader = await this.helper.showLoader("Cargando");

  try {
    if (this.form.valid){
      const {email,password}=this.form.getRawValue();
      this.auth.register(email, password)
      .then(async ()=> {
      var user = [{
        correo: this.email1,
        nombre: this.nombre1
      }]
      this.storage.guardarUsuario(user);
      console.log("CORREOASDASDASD",user)
      this.router.navigate(["/login"]);
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente", "Información");
      })
    } else {
      await loader.dismiss();
      this.helper.showAlert("Por favor complete todo los campos","Informacion");
    }
  } catch (error) {
    console.log(error);
  } 

}







}

