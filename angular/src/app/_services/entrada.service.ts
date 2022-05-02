import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrada } from '../models/entrada.model';
const baseUrl = 'http://localhost:8080/api/entrades';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(baseUrl);
  }
  get(id: any): Observable<Entrada> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(`${baseUrl}?title=${title}`);
  }
}

