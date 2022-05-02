import { Component, Input, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/_services/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from 'src/app/models/entrada.model';

@Component({
  selector: 'app-entrada-details',
  templateUrl: './entrada-details.component.html',
  styleUrls: ['./entrada-details.component.css']
})
export class EntradaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEntrada: Entrada = {
    title: '',
    body: '',
  };
  
  message = '';

  constructor(
    private entradaService: EntradaService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  updateEntrada(): void {
    this.message = '';

    this.entradaService.update(this.currentEntrada.id, this.currentEntrada)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEntrada(): void {
    this.entradaService.delete(this.currentEntrada.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin']);
        },
        error: (e) => console.error(e)
      });
  }

}
