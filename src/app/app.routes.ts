import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'habitaciones', component: HabitacionesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'servicios', component: ServiciosComponent }
];
