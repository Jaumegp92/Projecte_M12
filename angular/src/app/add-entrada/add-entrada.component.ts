import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada.model';
import { EntradaService } from 'src/app/_services/entrada.service';
@Component({
  selector: 'app-add-entrada',
  templateUrl: './add-entrada.component.html',
  styleUrls: ['./add-entrada.component.css']
})
export class AddEntradaComponent implements OnInit {
    entrada: Entrada = {
    title: '',
    body: '',
  };
  submitted = false;
  constructor(private entradaService: EntradaService) { }
  ngOnInit(): void {
  }
  saveEntrada(): void {
    const data = {
      title: this.entrada.title,
      body: this.entrada.body
    };
    this.entradaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newEntrada(): void {
    this.submitted = false;
    this.entrada = {
      title: '',
      body: '',
    };
  }
}

