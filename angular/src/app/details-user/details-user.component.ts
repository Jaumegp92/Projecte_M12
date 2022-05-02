import { Component, Input, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/_services/entrada.service';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from 'src/app/models/entrada.model';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEntrada: Entrada = {
    title: '',
    body: '',
  };
  
  message = '';

  constructor(
    private entradaService: EntradaService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEntrada(this.route.snapshot.params["id"]);
    }
  }

  getEntrada(id: string): void {
    this.entradaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEntrada = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
