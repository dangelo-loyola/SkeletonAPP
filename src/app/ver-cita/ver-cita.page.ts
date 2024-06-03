import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.page.html',
  styleUrls: ['./ver-cita.page.scss'],
})
export class VerCitaPage implements OnInit {

  cita: {
    especialidad: string,
    medico: string,
    fechaHora: string
  } = {
    especialidad: '',
    medico: '',
    fechaHora: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener la información de la cita de los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      if (params && params['cita']) {
        this.cita = JSON.parse(params['cita']);
      }
    });
  }

}

