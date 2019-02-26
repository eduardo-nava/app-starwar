import { Component, OnInit } from '@angular/core';
import { WarsService } from '../services/wars.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {
  personas: any[] = [];
  contenidopersonas: any[] = [];
  personaDetalles: any[] = [];
  constructor(private war: WarsService, private router: Router) { }

  ngOnInit() {
    this.getPersonas();

  }

  async getPersonas() {
    this.war.getPersonas().subscribe(
      res => {
        this.personas = [];
        for (const persona of res) {
          const numero: any = persona.url.split('/').reverse();
          const valor: any =  numero[1];
          this.war.ordenPlanetas(persona.homeworld).subscribe((planet: any) => {
            this.war.getDetallesPersona(valor).subscribe((person: any) => {
              this.personas.push({name : persona.name, id : valor, planeta: planet, mass: person.mass, height: person.height});
            });
          });
        }
      }
    );
  }

  detallePersona( id: string ) {
    this.router.navigate(['detalle', id]);
  }

  ordenarNombre() {
    const orden = this.personas.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.personas = orden;
  }

  ordenarPeso() {
    const orden = this.personas.sort((obj1, obj2) => {
      return obj1.mass - obj2.mass;
    });

    this.personas = orden;
  }

  ordenarAltura() {
    const orden = this.personas.sort((obj1, obj2) => {
      return obj1.height - obj2.height;
    });
    this.personas = orden;
  }

  ordenarPlaneta()  {
    const orden = this.personas.sort((a, b) => {
      return a.planeta.localeCompare(b.planeta);
    });
    this.personas = orden;
  }
}
