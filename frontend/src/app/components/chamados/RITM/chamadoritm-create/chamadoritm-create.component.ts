import { Component, OnInit } from '@angular/core';
import { ChamadoRitm } from 'src/app/views/chamados/Chamadoritm.model';
import { ChamadoService } from 'src/app/service/chamado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamadoritm-create',
  templateUrl: './chamadoritm-create.component.html',
  styleUrls: ['./chamadoritm-create.component.css']
})
export class ChamadoritmCreateComponent implements OnInit {


  cadRitm: ChamadoRitm = {

    nrritm: "",
    nomesuper: "",
    agencia: "",
    motivo: "",
    datainicio: "",
    horainicio: "",
    descricao: "",
    reincidente: "",
    datafim: "",
    horafim: "",
    status: "",
    
  }


  constructor(private ChamadoService: ChamadoService, 
    private router: Router) {}
  
  ngOnInit(): void {
  }
  
  cancelbutton (): void {
    this.router.navigate(['chamados'])
  }
  
  cadastroChamadoRitm(): void {
    this.ChamadoService.createChamadoRitm(this.cadRitm).subscribe( () => {
      this.ChamadoService.showMessage('Cadastro com sucesso')
      this.router.navigate(['chamados'])
    })  
  }
  
  
  }