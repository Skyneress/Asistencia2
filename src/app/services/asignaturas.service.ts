import { Injectable } from '@angular/core';
import { Asignatura } from '../models/asignatura';


@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor() { }

  arrayAsig : Asignatura[] = [

    {
      asignatura : "ENG4567",
      docente   :   "Carlos Fernández",
      fecha : "24-09-2023",
      hora  :  "10:45", 
      leccion  : "Inglés Avanzado",
      sala :   "Aula 205",
      seccion   :   "002D"
    },

    {
      asignatura : "HIS7890",
      docente   :   "Isabel Gómez",
      fecha : "25-09-2023",
      hora  :  "13:20", 
      leccion  : "Historia Contemporánea",
      sala :   "Aula 301",
      seccion   :   "002D"
    },

    {
      asignatura : "BIO2345",
      docente   :   "Luis Ramirez",
      fecha : "26-09-2023",
      hora  :  "15:00", 
      leccion  : "Biología Celular",
      sala :   "Laboratorio 7",
      seccion   :   "002D"
    }


  ] 



}

