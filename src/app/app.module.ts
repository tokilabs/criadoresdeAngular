import { AdminService } from './services/admin.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/firebase/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServService } from './services/serv.service';
import { NavbarComponent } from './navbar/navbar.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GeneralBgComponent } from './components/general-bg/general-bg.component';
import { AnimaservComponent } from './components/animaserv/animaserv.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PrecosComponent } from './components/precos/precos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftIndexComponent } from './components/left-index/left-index.component';
import { PrecosContainComponent } from './components/precos/precos-contain/precos-contain.component';
import { AddservicoComponent } from './components/addservico/addservico.component';
import { AudiovisualComponent } from './components/audiovisual/audiovisual.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { ImplementBgComponent } from './components/general-bg/implement-bg/implement-bg.component';
import { PreviewComponent } from './components/addservico/preview/preview.component';
import { PostServComponent } from './components/addservico/post-serv/post-serv.component';
import { PageServComponent } from './components/addservico/page-serv/page-serv.component';
import { AdmBarComponent } from './navbar/adm-bar/adm-bar.component';
import { ServBarComponent } from './navbar/serv-bar/serv-bar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/cadastro/login/login.component';
import { BgloginComponent } from './components/cadastro/bglogin/bglogin.component';
import { EntrarComponent } from './components/cadastro/entrar/entrar.component';
import { CriadorEntrarComponent } from './components/criador/criador-entrar/criador-entrar.component';
import { CriadorCadastroComponent } from './components/criador/criador-cadastro/criador-cadastro.component';
import { CriadorIdComponent } from './components/criador/criador-id/criador-id.component';
import { UserAdminComponent } from './components/criador/user-admin/user-admin.component';
import { GeneralNavComponent } from './navbar/general-nav/general-nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { PrecosBgComponent } from './components/general-bg/precos-bg/precos-bg.component';
import { NgbModule, NgbPagination, NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


const firebaseConfig = {
  apiKey: 'AIzaSyCoOYhqls1rJtW2DH0R2Suf32_P5fZ3dHQ',
  authDomain: 'criadores-b8998.firebaseapp.com',
  databaseURL: 'https://criadores-b8998.firebaseio.com',
  projectId: 'criadores-b8998',
  storageBucket: 'criadores-b8998.appspot.com',
  messagingSenderId: '949964734987',
  appId: '1:949964734987:web:dd7b980c075510decf3d0e',
  measurementId: 'G-WYVF9RLTRK'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralBgComponent,
    AnimaservComponent,
    SobreComponent,
    PrecosComponent,
    ContatoComponent,
    CarrinhoComponent,
    NotFoundComponent,
    IndexComponent,
    FooterComponent,
    LeftIndexComponent,
    PrecosContainComponent,
    AddservicoComponent,
    AudiovisualComponent,
    ProgramaComponent,
    ConteudoComponent,
    ImplementBgComponent,
    PreviewComponent,
    PostServComponent,
    PageServComponent,
    AdmBarComponent,
    ServBarComponent,
    LoginComponent,
    BgloginComponent,
    EntrarComponent,
    CriadorEntrarComponent,
    CriadorCadastroComponent,
    CriadorIdComponent,
    UserAdminComponent,
    GeneralNavComponent,
    PrecosBgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CarouselModule.forRoot(),
    NgxPaginationModule,
    JwPaginationModule,
    MatSelectModule,
    MatNativeDateModule,
    NgbModule,
    NgbPagination,
    NgbPaginationConfig,
    NgbPaginationModule,
  ],

  providers: [
    ServService,
    AuthService,
    AuthGuard,
    AdminService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
