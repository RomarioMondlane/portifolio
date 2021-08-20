import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from 'src/app/views/base/base.component';
import {ContatosComponent} from 'src/app/views/contatos/contatos.component'
import {ExperienciaComponent} from 'src/app/views/experiencia/experiencia.component'
import {HabilidadesComponent} from 'src/app/views/habilidades/habilidades.component'
import {FormacaoComponent} from'src/app/views/formacao/formacao.component'
const routes: Routes = [
  {
    path: "",
    component: BaseComponent
    
    },
    {
      path: "formacao",
      component: 
      FormacaoComponent
  
      
      },    {
      path: "contatos",
      component: ContatosComponent      
      },
      {
        path: "experiencia",
        component: ExperienciaComponent
        
        },
        {
          path: "habilidades",
          component:HabilidadesComponent 
          
          }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
