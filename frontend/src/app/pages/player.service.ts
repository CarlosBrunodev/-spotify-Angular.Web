import { EMPTY ,Observable } from 'rxjs';
import { Usuario } from './usuario.Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl = "http://localhost:3001/usuario";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  create(usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl,usuario).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)))
  }
}
