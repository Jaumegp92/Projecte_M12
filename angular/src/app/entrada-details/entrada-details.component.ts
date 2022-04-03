import { Component, Input, OnInit } from '@angular/core';
import { EntradesService } from 'src/app/_services/entrades.service';
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
    description: '',
    body: '',
    createdBy: ''
  };
  
  message = '';
  constructor(
    private entradesService: EntradesService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEntrada(this.route.snapshot.params["id"]);
    }
  }
  getEntrada(id: string): void {
    this.entradesService.get(id)
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
    this.entradesService.update(this.currentEntrada.id, this.currentEntrada)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Entrada actualitzada correctament';
        },
        error: (e) => console.error(e)
      });
  }
  deleteEntrada(): void {
    this.entradesService.delete(this.currentEntrada.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/entrades']);
        },
        error: (e) => console.error(e)
      });
  }
}

