import { ChamadoInc } from './../../../../views/chamados/ChamadoInc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadoService } from 'src/app/service/chamado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadoinc-update',
  templateUrl: './chamadoinc-update.component.html',
  styleUrls: ['./chamadoinc-update.component.css']
})
export class ChamadoincUpdateComponent implements OnInit {

  cadInc!: ChamadoInc;

  constructor(
    private chamadoService: ChamadoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.chamadoService.readByIdInc(id!).subscribe(cadInc =>{
      this.cadInc = cadInc
    })
  }

  updateChamadoInc(): void {
    this.chamadoService.updateInc(this.cadInc).subscribe(()=> {
      this.chamadoService.showMessage('Chamado Atualizado com Sucesso')
      this.router.navigate(['/chamados'])
    })
  }

  cancelbutton(): void {
    this.router.navigate(['/chamados'])
  }

}
