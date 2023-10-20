import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],

})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit()  {
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });


    const imageUrl = image.dataUrl;
  }
}
