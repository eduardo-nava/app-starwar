import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarsService } from '../services/wars.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styles: []
})
export class DetallePersonaComponent implements OnInit {
  personaDetalles: any[] = [];
  constructor(private route: ActivatedRoute, private war: WarsService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getDetalle(param.id);
    });
  }

  public getDetalle( id ) {
    this.war.getDetallesPersona(id).subscribe(
      (res: any) => {
        this.personaDetalles = res;
      }
    );
  }

}
