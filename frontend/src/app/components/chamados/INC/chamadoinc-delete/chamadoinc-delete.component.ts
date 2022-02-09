import { ChamadoInc } from 'src/app/views/chamados/ChamadoInc.model';
import { ChamadoService } from 'src/app/service/chamado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadoinc-delete',
  templateUrl: './chamadoinc-delete.component.html',
  styleUrls: ['./chamadoinc-delete.component.css']
})
export class ChamadoincDeleteComponent implements OnInit {

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

  deleteChamadoInc(): void {
    this.chamadoService.deleteInc(this.cadInc).subscribe(()=> {
      this.chamadoService.showMessage('Chamado Deletado com Sucesso')
      this.router.navigate(['/chamados'])
    })
  }

  cancelbutton(): void {
    this.router.navigate(['/chamados'])
  }

}
