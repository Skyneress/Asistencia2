import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private animation!: Animation;
  weatherData: any;
  usuario:any;
  nombreUsuario:string = "";

  constructor(
      private alertController: AlertController,
      private router: Router,
      private animationCtrl: AnimationController,
      private auth: AuthService,
      private helper:HelperService,
      private storage:StorageService,
      private weatherService: WeatherService
      
      ) { }
  
  async logout(){
    var corfirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      this.auth.logout();
      this.router.navigate(['/login'])
    }
    }

  ngOnInit() {
    this.cargarUsuario();
    this.helper.showToast("Sesión iniciada correctamente")
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);
      this.animation.play();
  }


  async cargarUsuario() {
    console.log("USUARIO STORAGE", await this.storage.obtenerUsuario());
    console.log("PROPIEDAD SERVICE STORAGE", this.storage.usuarioCorreo);

    const currentUser = await this.auth.currentUser();
    
    if (currentUser) {
        const user = (await this.storage.obtenerUsuario()).find(e => e.correo === currentUser.email);
        
        if (user) {
            console.log("hola")
            this.usuario = user;
            this.nombreUsuario = user.nombre;
        } else {
            
        }
    } else {
        
    }
}


getWeather() {
  this.weatherService.getWeather().subscribe((data) => {
    this.weatherData = data;
  });
}
}
