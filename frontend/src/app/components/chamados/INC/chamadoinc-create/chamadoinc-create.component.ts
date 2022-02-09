import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChamadoService } from './../../../../service/chamado.service';
import { ChamadoInc } from 'src/app/views/chamados/ChamadoInc.model';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';

@Component({
  selector: 'app-chamadoinc-create',
  templateUrl: './chamadoinc-create.component.html',
  styleUrls: ['./chamadoinc-create.component.css']
})
export class ChamadosCreateIncComponent implements OnInit {

  cadInc: ChamadoInc = {

    nrinc: "",
    nomesuper: "",
    agencia: "",
    motivo: "",
    submotivo: "",
    descricao: "",
    reincidente: "",
    status: "",
    observacao: "",
    grupoatrib: "",
    datainicio: "",
    horainicio: "",
    datafim: "",
    horafim: ""


  }

constructor(private ChamadoService: ChamadoService, 
  private router: Router) {}

ngOnInit(): void {
}

cancelbutton (): void {
  this.router.navigate(['chamados'])
}

cadastroChamadoInc(): void {
  this.ChamadoService.createChamadoInc(this.cadInc).subscribe( () => {
    this.ChamadoService.showMessage('Chamado Cadastrado com sucesso')
    this.router.navigate(['chamados'])
  })  
}


}