import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada.model';
import { EntradesService } from 'src/app/_services/entrades.service';

@Component({
  selector: 'app-entrades-list',
  templateUrl: './entrades-list.component.html',
  styleUrls: ['./entrades-list.component.css']
})
export class EntradesListComponent implements OnInit {
  entrades?: Entrada[];
  currentEntrada: Entrada = {};
  currentIndex = -1;
  title = '';

  constructor(private entradesService: EntradesService) { }

  ngOnInit(): void {
    this.retrieveEntrades();
  }

  retrieveEntrades(): void {
    this.entradesService.getAll()
      .subscribe({
        next: (data) => {
          this.entrades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveEntrades();
    this.currentEntrada = {};
    this.currentIndex = -1;
  }
  setActiveEntrada(entrada: Entrada, index: number): void {
    this.currentEntrada = entrada;
    this.currentIndex = index;
  }
  removeAllEntrades(): void {
    this.entradesService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchTitle(): void {
    this.currentEntrada = {};
    this.currentIndex = -1;
    this.entradesService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.entrades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
