import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitaciones = [
  {
    nombre: 'Habitación Individual',
    descripcion: 'Ideal para una persona. Cómoda y funcional.',
    imagen: 'assets/img/habIndividual.jpg'
  },
  {
    nombre: 'Habitación Matrimonial',
    descripcion: 'Espacio adicional, cama doble y zona de amplio espacio.',
    imagen: 'assets/img/habMatrimonial.jpg'
  },
  {
    nombre: 'Habitación King',
    descripcion: 'Perfecta para quien busca un espacio adicional, cama extra grande de 2 mts y zona de amplio espacio para el descanso',
    imagen: 'assets/img/habKing.jpg'
  },
  {
    nombre: 'Habitación Doble Twin',
    descripcion: 'Espacio confortable, dos camas sencillas y zona de amplio espacio.',
    imagen: 'assets/img/habDobleTwin.jpg'
  },  
  {
    nombre: 'Habitación Familiar',
    descripcion: 'Espacio adicional, cama doble y zona de amplio espacio para la familia.',
    imagen: 'assets/img/habFamiliar.jpg'
  },  
  {
    nombre: 'Espacio del Baño',
    descripcion: 'Espacio amplio, con buena iluminacion con agua caliente.',
    imagen: 'assets/img/baño.jpg'
  }
];

}

