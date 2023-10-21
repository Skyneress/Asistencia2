import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { DetallesPage } from 'src/app/modals/detalles/detalles.page';
import { ScannerPage } from 'src/app/modals/scanner/scanner.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  resultQr:any[]=[];

  constructor(private helper: HelperService) { }

  ngOnInit() {
  }

  /* async scanner(){
    this.resultQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.resultQr));
    await this.modalResultQr();
  } */

  async scanner(){
    var resultadoQr = (await BarcodeScanner.scan()).code;

    if (resultadoQr) {
      console.log("QR", JSON.parse(resultadoQr));
    }
    var infoQr = [];
    infoQr.push(
      {

        },

              );

              const parametros = {dataQr:infoQr};

    this.helper.showModal(parametros,DetallesPage);

  }

  async scan(){
    var resultadoQr = (await BarcodeScanner.scan()).code;

    if (resultadoQr) {
      console.log("QR", JSON.parse(resultadoQr));
    }
    var infoQr = [];
    infoQr.push(
      {
        asignatura:this.asignatura,
        docente:this.docente,
        fecha:this.fecha,
        hora:this.hora,
        leccion:this.leccion,
        sala:this.sala,
        seccion:this.seccion,



        },

              );

              const parametros = {dataQr:infoQr};

    this.helper.showModal(ScannerPage,parametros);

  }

  /* async modalResultQr(){
    var qr = [];
    qr.push(this.resultQr);
    const parametros={dataQr: this.resultQr}
    await this.helper.showModal(this.scanner,parametros,false); 
  } */
  
}
