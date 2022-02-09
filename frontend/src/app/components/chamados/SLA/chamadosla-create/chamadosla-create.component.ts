import { Component, OnInit } from '@angular/core';
import { ChamadoSla } from 'src/app/views/chamados/Chamadosla.model';
import { ChamadoService } from 'src/app/service/chamado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamadosla-create',
  templateUrl: './chamadosla-create.component.html',
  styleUrls: ['./chamadosla-create.component.css']
})
export class ChamadoslaCreateComponent implements OnInit {

  cadsla: ChamadoSla = {


    nrsla: "",
    nomesuper: "",
    agencia: "",
    motivo: "",
    submotivo: "",
    datainicio: "",
    horainicio: "",
    descricao: "",
    reincidente: "",
    datafim: "",
    horafim: "",
    status: "",
    observacao: "",
    
  }
  constructor(private ChamadoService: ChamadoService, 
    private router: Router) {}
  
  ngOnInit(): void {
  }
  
  cancelbutton (): void {
    this.router.navigate(['chamados'])
  }
  
  cadastroChamadoSla(): void {
    this.ChamadoService.createChamadoSla(this.cadsla).subscribe( () => {
      this.ChamadoService.showMessage('Cadastro com sucesso')
      this.router.navigate(['chamados'])
    })  
  }
  
  
  }