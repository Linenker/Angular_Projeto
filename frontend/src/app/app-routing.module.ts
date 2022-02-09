import { InforComponent } from './info/infor/infor.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

//Chamados
import { CrudComponent } from './views/chamados/crud/crud.component';

//inc
import { ChamadosCreateIncComponent } from './components/chamados/INC/chamadoinc-create/chamadoinc-create.component';
import { ChamadoincReadComponent } from './components/chamados/INC/chamadoinc-read/chamadoinc-read.component';
import { ChamadoincUpdateComponent } from './components/chamados/INC/chamadoinc-update/chamadoinc-update.component';
import { ChamadoincDeleteComponent } from './components/chamados/INC/chamadoinc-delete/chamadoinc-delete.component';


//sla
import { ChamadoslaCreateComponent } from './components/chamados/SLA/chamadosla-create/chamadosla-create.component';
import { ChamadoslaReadComponent } from './components/chamados/SLA/chamadosla-read/chamadosla-read.component';

//ritm
import { ChamadoritmCreateComponent } from './components/chamados/RITM/chamadoritm-create/chamadoritm-create.component';
import { ChamadoritmReadComponent } from './components/chamados/RITM/chamadoritm-read/chamadoritm-read.component';
import { ChamadoritmUpdateComponent } from './components/chamados/RITM/chamadoritm-update/chamadoritm-update.component';


const routes: Routes = [
  
{
  path: "",
  component: HomeComponent  
},

{
  path: "info/sobre",
  component: InforComponent 
},



//Rotas do Chamados
{
  path: "chamados",
  component: CrudComponent  
},

{
  path: "chamados/cadastrar/inc",
  component: ChamadosCreateIncComponent 
},
{
  path: "chamados/base/inc",
  component: ChamadoincReadComponent 
},
{
  path: "chamados/update/inc/:id",
  component:  ChamadoincUpdateComponent
},
{
  path: "chamados/delete/inc/:id",
  component: ChamadoincDeleteComponent
},




{
  path: "chamados/cadastrar/sla",
  component: ChamadoslaCreateComponent  
},
{
  path: "chamados/base/sla",
  component: ChamadoslaReadComponent 
},


{
  path: "chamados/cadastrar/ritm",
  component: ChamadoritmCreateComponent  
},
{
  path: "chamados/base/ritm",
  component: ChamadoritmReadComponent 
},
{
  path: "chamados/update/ritm/:id",
  component:  ChamadoritmUpdateComponent 

},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
