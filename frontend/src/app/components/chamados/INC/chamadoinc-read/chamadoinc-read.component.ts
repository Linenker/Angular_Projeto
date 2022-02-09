import { ChamadoService } from 'src/app/service/chamado.service';
import { Component, OnInit } from '@angular/core';
import { ChamadoInc } from 'src/app/views/chamados/ChamadoInc.model';

@Component({
  selector: 'app-chamadoinc-read',
  templateUrl: './chamadoinc-read.component.html',
  styleUrls: ['./chamadoinc-read.component.css']
})
export class ChamadoincReadComponent implements OnInit {

  readinc: ChamadoInc[] = []

  displayedColumn = ['action','nrinc', 'nomesuper', 'agencia', 'motivo', 'submotivo', 'datainicio', 
                    'horainicio', 'descricao', 'reincidente', 'datafim', 'horafim', 'status',
                      'observacao', 'grupoatrib', 'deletar']
 
  constructor(private ChamadoService: ChamadoService) { 
  }

  ngOnInit(): void {
    this.ChamadoService.readinc().subscribe(readinc =>{
      this.readinc = readinc
    })
  }

}
