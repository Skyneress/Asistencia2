import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { DetallesPage } from 'src/app/modals/detalles/detalles.page';
import { ScannerPage } from 'src/app/modals/scanner/scanner.page';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias: any;
  nasignatura:string = "";
  ndocente:string = "";
  nfecha:string = "";
  nhora:string = "";
  nleccion:string = "";
  nsala:string = "";
  nseccion:string = "";


  constructor(private helper: HelperService,
              private asistencia: AsistenciaService
    ) { }

  ngOnInit() {
    this.cargarAsistencia();
  }

  /* async scanner(){
    this.resultQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.resultQr));
    await this.modalResultQr();
  } */


  
  async cargarAsistencia(){
    console.log("ASISTENCIA GUARDADA",await this.asistencia.obtenerAsistencia());
    this.asistencias = (await this.asistencia.obtenerAsistencia());
    this.nasignatura =  this.asistencias[0].asignatura;
    this.ndocente =  this.asistencias[0].docente;
    this.nfecha =  this.asistencias[0].fecha;
    this.nhora =  this.asistencias[0].hora;
    this.nleccion =  this.asistencias[0].leccion;
    this.nsala =  this.asistencias[0].sala;
    this.nseccion =  this.asistencias[0].seccion;
    
  }
  
}
