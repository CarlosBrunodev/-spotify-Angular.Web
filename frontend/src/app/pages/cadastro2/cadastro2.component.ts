import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  criarUsuario(): void {
    this.router.navigate(["Inscrevase"])
  }
  
}


