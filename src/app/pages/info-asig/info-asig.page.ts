import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-info-asig',
  templateUrl: './info-asig.page.html',
  styleUrls: ['./info-asig.page.scss'],
})
export class InfoAsigPage implements OnInit {

  arrayAsig: Asignatura[] = this.asis.arrayAsig;

  constructor(
              private asis: AsignaturasService,
              private activatedRoute: ActivatedRoute

  ) { }

  index: number = 0;
  nombre: string = "";
  docente: string = "";
  sala: string = "";

  ngOnInit() {

    this.index = this.activatedRoute.snapshot.params ["index"]
    this.nombre = this.arrayAsig[this.index].leccion
    this.docente = this.arrayAsig[this.index].docente
    this.sala = this.arrayAsig[this.index].sala

  }



}
