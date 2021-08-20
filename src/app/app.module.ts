import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentess/header/header.component';
import { NavbarComponent } from './componentess/navbar/navbar.component';
import { FooterComponent } from './componentess/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from'@angular/material/card';
import { BaseComponent } from './views/base/base.component';
import { HabilidadesComponent } from './views/habilidades/habilidades.component';
import { ExperienciaComponent } from './views/experiencia/experiencia.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormacaoComponent } from './views/formacao/formacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ContatosComponent,
    FormacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
