import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../servicios/files.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilesService]
})
export class HomeComponent implements OnInit {

  public ColeccionLenguajes = [];
  public AngularDocs = [];

  constructor(private fileService: FilesService) {

    // Guias tiene un Array de Documentos. Uno para cada lenguaje.
    fileService.collectionObserver.
      subscribe(data => {
        if (data) {
          this.ColeccionLenguajes = [];
          for (const _doc of data) {
            const element = Object.assign(_doc);
            this.ColeccionLenguajes.push(element);
          }
        } else {
          this.ColeccionLenguajes = [];
        }
      });

    // Guias/Angular/Angular = Array de Objetos con Titulo y pdf como keys.
    fileService.getDocument('Angular').
      subscribe(data => {
        if (data) {
          const _obj = Object.assign(data);
          if ('Angular' in _obj.keys()) {
            this.AngularDocs = _obj['Angular']; // Object.assign(data);
          } else {
            this.AngularDocs = [];
          }
          /*
          this.AngularDocs.forEach(element => {
            console.log('***', element);
          });
          */
        } else {
          this.AngularDocs = [];
        }
      });
  }

  ngOnInit() {
  }

}
