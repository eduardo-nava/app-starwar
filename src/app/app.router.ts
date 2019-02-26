import { Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

export const ROUTES: Routes = [
    { path: '' , component: PersonasComponent },
    { path: 'personas' , component: PersonasComponent },
    { path: 'detalle/:id', component: DetallePersonaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'persona' }
];
