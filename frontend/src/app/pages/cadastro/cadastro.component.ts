import { Router } from '@angular/router';
import { Usuario } from '../usuario.Model';
import { Component, OnInit } from '@angular/core';
import { PlayerService} from './../player.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    email: '',
    senha: ''
  }

  constructor(private playerService: PlayerService ,private router: Router) {}
   
  ngOnInit(): void {}

  criarUsuario(): void {
    this.playerService.create(this.usuario).subscribe(() => {
      this.playerService.showMessage('Usuario cadastrado com sucesso !')
      this.router.navigate(["Inscrevase"])
    })
  }

  entrarNaConta():void{
    this.router.navigate(["cadastro2"])
  }
}


/*
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
*/ 
