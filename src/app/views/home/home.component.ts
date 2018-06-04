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

  constructor(private fileService: FilesService) {

    fileService.collectionObserver.
      subscribe(data => {
        if (data) {
          this.ColeccionLenguajes = [];
          for (const _doc of data) {
            const element = Object.assign(_doc);
            this.ColeccionLenguajes.push(element);
          }
        }
      });
  }

  ngOnInit() {
  }

}
