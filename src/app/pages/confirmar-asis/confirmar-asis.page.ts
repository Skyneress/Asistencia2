import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { ScannerPage } from 'src/app/modals/scanner/scanner.page';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HelperService } from 'src/app/services/helper.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-confirmar-asis',
  templateUrl: './confirmar-asis.page.html',
  styleUrls: ['./confirmar-asis.page.scss'],
})
export class ConfirmarAsisPage implements OnInit {

  constructor(
    private helper:HelperService,
    private asistenciaService:AsistenciaService,
    private router:Router
  ) { }


  infoQr:any[]=[];
  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  ngOnInit() {
  }
  async scan(){
    var resultadoQr = (await BarcodeScanner.scan()).code;
     
    if (resultadoQr) {
      const infoQr = JSON.parse(resultadoQr);

      const parametros = {dataQr:infoQr};
    
      this.helper.showModal(ScannerPage,parametros);
    }
    var infoQr = 
    [
    
      {
        asignatura:this.asignatura,
        docente:this.docente,
        fecha:this.fecha,
        hora:this.hora,
        leccion:this.leccion,
        sala:this.sala,
        seccion:this.seccion


      
        }
      ];


  }

  


}
