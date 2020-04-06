import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: componente[]=[
    {
      icon: ' ../../../assets/icon/svg/Premium.svg ',
      name: 'Premium',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '',
      name: '',
      redirectTo: '/',
      divider: 'none'
    },
    {
      icon: '../../../assets/icon/svg/TodosEjercicios.svg',
      name: 'Todos los ejercicios',
      redirectTo: '/ejercicios',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/EjerciciosGustados.svg',
      name: 'Ejercicios gustados',
      redirectTo: '/ejercicios',
      divider: 'block'
    },
    {
      icon: '',
      name: '',
      redirectTo: '/',
      divider: 'none'
    },
    {
      icon: '../../../assets/icon/svg/PlanesEntrenamiento.svg',
      name: 'Planes de entrenamiento',
      redirectTo: '/rutina',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/MisPlanes.svg',
      name: 'Mis planes de entrenamiento',
      redirectTo: '/rutina',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/RetoDiario.svg',
      name: 'Reto Diario',
      redirectTo: '/reto',
      divider: 'block'
    },
    {
      icon: '',
      name: '',
      redirectTo: '/',
      divider: 'none'
    },
    {
      icon: '../../../assets/icon/svg/TodaAlimentacion.svg',
      name: 'Toda la alimentación',
      redirectTo: '/alimentacion',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/AlimentacionGustada.svg',
      name: 'Alimentación gustada',
      redirectTo: '/alimentacion',
      divider: 'block'
    },
    {
      icon: '',
      name: '',
      redirectTo: '/',
      divider: 'none'
    },
    {
      icon: '../../../assets/icon/svg/Idioma.svg',
      name: 'Idioma',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/Notificaciones.svg',
      name: 'Notificaciones',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '',
      name: '',
      redirectTo: '/',
      divider: 'none'
    },
    {
      icon: '../../../assets/icon/svg/Comentarios.svg',
      name: 'Comentarios',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/Politica.svg',
      name: 'Politica de privacidad',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/AcercaNosotros.svg',
      name: 'Acerca de nosotros',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/Version.svg',
      name: 'Versión',
      redirectTo: '/',
      divider: 'block'
    },
    {
      icon: '../../../assets/icon/svg/Restaurar.svg',
      name: 'Restaurar BeFit de fabrica',
      redirectTo: '/',
      divider: 'block'
    },
  ];

  constructor() { }

  ngOnInit() {}

}

interface componente{
  icon: string;
  name: string;
  redirectTo: string;
  divider: string;
}
