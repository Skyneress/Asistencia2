import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit  {

  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  @Input() dataQr:any;
  dataAsistencia:any;
  

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log("Propiedades recibidas-->",this.dataQr);
    this.dataAsistencia = JSON.parse(this.dataQr);
  }

}
