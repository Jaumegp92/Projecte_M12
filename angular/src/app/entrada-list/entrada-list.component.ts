import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada.model';
import { EntradaService } from 'src/app/_services/entrada.service';
@Component({
  selector: 'app-entrada-list',
  templateUrl: './entrada-list.component.html',
  styleUrls: ['./entrada-list.component.css']
})
export class EntradaListComponent implements OnInit {
  entrades?: Entrada[];
  currentEntrada: Entrada = {};
  currentIndex = -1;
  title = '';
  constructor(private entradaService: EntradaService) { }
  ngOnInit(): void {
    this.retrieveEntrada();
  }
  retrieveEntrada(): void {
    this.entradaService.getAll()
      .subscribe({
        next: (data) => {
          this.entrades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveEntrada();
    this.currentEntrada = {};
    this.currentIndex = -1;
  }
  setActiveEntrada(entrada: Entrada, index: number): void {
    this.currentEntrada = entrada;
    this.currentIndex = index;
  }
  removeAllEntrada(): void {
    this.entradaService.deleteAll()
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
    this.entradaService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.entrades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

