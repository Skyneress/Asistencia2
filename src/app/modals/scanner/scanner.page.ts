import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HelperService } from 'src/app/services/helper.service';

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

  infoQr:any;
  dataAsistencia:any;
  
@Input() asistencias:any;

  constructor(private modalController: ModalController,
              private asistenciaService : AsistenciaService,
              private navParams: NavParams,
              private helperService : HelperService
    ) { 
       this.infoQr = this.navParams.get('dataQr');
                  console.log('Info QR:', this.infoQr)}
    

  ngOnInit() {
    this.vistaAsistencia();
  }


  async vistaAsistencia(){
    console.log("ASISTENCIA STORAGE",await this.asistenciaService.obtenerAsistencia());
  }


  async guardarAsistencia(){

    this.modalController.dismiss({
      infoQr: this.infoQr
    });

    this.asistenciaService.guardarAsistencia(this.infoQr);
    await this.helperService.showAlert("Debe revisar su asistencia","Información");
    

  }






}
