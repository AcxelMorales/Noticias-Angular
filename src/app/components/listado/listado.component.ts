import { Component, OnInit } from '@angular/core';

import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  noticias: any[] = [];

  constructor(
    private _noticiaService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.listData();
  }
  
  listData(value = 'general'): void {
    this._noticiaService.getDataApi(value).subscribe(
      resp => this.noticias = resp
    );
  }

}
