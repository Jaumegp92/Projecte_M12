import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada.model';
import { EntradesService } from 'src/app/_services/entrades.service';

@Component({
  selector: 'app-add-entrada',
  templateUrl: './add-entrada.component.html',
  styleUrls: ['./add-entrada.component.css']
})
export class AddEntradaComponent implements OnInit {

    entrada: Entrada = {
    title: '',
    body: '',
    description: '',
    createdBy: ''
  };

  submitted = false;
  constructor(private entradesService: EntradesService) { }


  ngOnInit(): void {
  }
  
  saveEntrada(): void {
    const data = {
      title: this.entrada.title,
      description: this.entrada.description,
      body: this.entrada.body
    };
    this.entradesService.create(data)
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
      description: '',
      body: ''
    };
  }

}
