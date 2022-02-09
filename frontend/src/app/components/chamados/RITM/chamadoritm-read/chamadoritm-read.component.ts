import { ChamadoService } from './../../../../service/chamado.service';
import { ChamadoRitm } from 'src/app/views/chamados/Chamadoritm.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadoritm-read',
  templateUrl: './chamadoritm-read.component.html',
  styleUrls: ['./chamadoritm-read.component.css']
})
export class ChamadoritmReadComponent implements OnInit {

  readritm: ChamadoRitm[] = []

  displayedColumn = ['action','nrritm', 'nomesuper', 'agencia', 'motivo', 'datainicio', 
                    'horainicio', 'descricao', 'datafim', 'horafim', 'status',
                      'observacao', 'deletar']

  constructor(private ChamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.ChamadoService.readritm().subscribe(readritm =>{
      this.readritm = readritm
    })
  }

}
