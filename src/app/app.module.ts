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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from'@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule}from '@angular/material/progress-bar';
import {MatTooltipModule } from'@angular/material/tooltip'

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
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
 FormsModule,MatInputModule,
 MatSnackBarModule,
 MatProgressBarModule
 ,MatTooltipModule,
 MatDialogModule,
 MatFormFieldModule
,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
