import { Component, OnInit, ViewChild } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  constructor() { }

  @ViewChild(ListadoComponent, null) f: ListadoComponent;

  ngOnInit(): void {
  }

  public change(value): void {
    this.f.listData(value);
  }

}
