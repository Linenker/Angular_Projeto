import { ChamadoService } from 'src/app/service/chamado.service';
import { ChamadoSla } from 'src/app/views/chamados/Chamadosla.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadosla-read',
  templateUrl: './chamadosla-read.component.html',
  styleUrls: ['./chamadosla-read.component.css']
})
export class ChamadoslaReadComponent implements OnInit {

  readsla: ChamadoSla[] = []

  displayedColumn = ['action','nrsla', 'nomesuper', 'agencia', 'motivo', 'submotivo', 'datainicio', 
                    'horainicio', 'descricao', 'reincidente', 'datafim', 'horafim', 'status',
                      'observacao', 'deletar']

  constructor(private ChamadoService: ChamadoService) { }

  ngOnInit(): void {
      this.ChamadoService.readsla().subscribe(readsla =>{
      this.readsla = readsla
    })
  }

}
