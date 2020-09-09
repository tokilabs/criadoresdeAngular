import { PreviewComponent } from './components/addservico/preview/preview.component';
import { PageServComponent } from './components/addservico/page-serv/page-serv.component';
import { CriadorCadastroComponent } from './components/criador/criador-cadastro/criador-cadastro.component';
import { CriadorEntrarComponent } from './components/criador/criador-entrar/criador-entrar.component';
import { EntrarComponent } from './components/cadastro/entrar/entrar.component';
// import { LoginComponent } from './components/cadastro/login/login.component';
import { AddservicoComponent } from './components/addservico/addservico.component';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ContatoComponent } from './components/contato/contato.component';
import { PrecosComponent } from './components/precos/precos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
// canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'precos', component: PrecosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'addserv', component: AddservicoComponent, canActivate: [AuthGuard] },
  { path: 'pageservs', component: PageServComponent },
  { path: 'preserv', component: PreviewComponent },

  { path: 'login', component: EntrarComponent },
  { path: 'criadorlogin', component: CriadorEntrarComponent },
  { path: 'criadorCadastro', component: CriadorCadastroComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
