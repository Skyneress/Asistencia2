import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asig-asis',
  templateUrl: './asig-asis.page.html',
  styleUrls: ['./asig-asis.page.scss'],
})
export class AsigAsisPage implements OnInit {


  arrayAsig: Asignatura[] = this.asis.arrayAsig;

  constructor(
              private asis: AsignaturasService,
              private router: Router

  ) { }

  ngOnInit() {

  }

enviar (item: any, index: number){
  this.router.navigate(["/info-asig", index, item.asignatura])

}


  
}
