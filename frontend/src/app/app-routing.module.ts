import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PlayerComponent } from './pages/player/player.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { InscrevaseComponent } from './pages/inscrevase/inscrevase.component';
import { Cadastro2Component } from './pages/cadastro2/cadastro2.component';



const routes: Routes = [
  { path:"cadastro2", component:Cadastro2Component},
  { path:"cadastro", component: CadastroComponent},
  { path:"player", component: PlayerComponent },
  { path:"Inscrevase", component:InscrevaseComponent},
  { path:"ajuda", component:FaqComponent},
  { path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
