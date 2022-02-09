import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';


//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { InforComponent } from './info/infor/infor.component';

  
//chamados
import { CrudComponent } from './views/chamados/crud/crud.component';

//inc
import { ChamadosCreateIncComponent } from './components/chamados/INC/chamadoinc-create/chamadoinc-create.component';
import { ChamadoincReadComponent } from './components/chamados/INC/chamadoinc-read/chamadoinc-read.component';
import { ChamadoincUpdateComponent } from './components/chamados/INC/chamadoinc-update/chamadoinc-update.component';


//ritm
import { ChamadoritmCreateComponent } from './components/chamados/RITM/chamadoritm-create/chamadoritm-create.component';
import { ChamadoritmReadComponent } from './components/chamados/RITM/chamadoritm-read/chamadoritm-read.component';
import { ChamadoritmUpdateComponent } from './components/chamados/RITM/chamadoritm-update/chamadoritm-update.component';
import { ChamadoritmDeleteComponent } from './components/chamados/RITM/chamadoritm-delete/chamadoritm-delete.component';

//sla
import { ChamadoslaCreateComponent } from './components/chamados/SLA/chamadosla-create/chamadosla-create.component';
import { ChamadoslaReadComponent } from './components/chamados/SLA/chamadosla-read/chamadosla-read.component';
import { ChamadoincDeleteComponent } from './components/chamados/INC/chamadoinc-delete/chamadoinc-delete.component';
import { ChamadoslaUpdateComponent } from './components/chamados/SLA/chamadosla-update/chamadosla-update.component';
import { ChamadoslaDeleteComponent } from './components/chamados/SLA/chamadosla-delete/chamadosla-delete.component';

//checklist


//Monitorias

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudComponent,
    ChamadosCreateIncComponent,
    ChamadoslaCreateComponent,
    ChamadoritmCreateComponent,
    ChamadoritmReadComponent,
    ChamadoslaReadComponent,
    ChamadoincReadComponent,
    InforComponent,
    ChamadoincUpdateComponent,
    ChamadoritmUpdateComponent,
    ChamadoritmDeleteComponent,
    ChamadoincDeleteComponent,
    ChamadoslaUpdateComponent,
    ChamadoslaDeleteComponent,

    


  

    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule, 
    MatIconModule,
    MatMenuModule,

    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
