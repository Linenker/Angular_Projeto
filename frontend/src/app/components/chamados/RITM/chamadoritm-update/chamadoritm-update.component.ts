import { ChamadoRitm } from 'src/app/views/chamados/Chamadoritm.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ChamadoService } from 'src/app/service/chamado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamadoritm-update',
  templateUrl: './chamadoritm-update.component.html',
  styleUrls: ['./chamadoritm-update.component.css']
})
export class ChamadoritmUpdateComponent implements OnInit {

  cadRitm!: ChamadoRitm

  constructor(
    private chamadoService: ChamadoService,
    private router: Router, 
    private route: ActivatedRoute, 
     ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.chamadoService.readByIdRitm(id!).subscribe(cadRitm =>{
      this.cadRitm = cadRitm
    })
  }


  updateChamadoRitm(): void {
    this.chamadoService.updateRitm(this.cadRitm).subscribe(()=> {
      this.chamadoService.showMessage('Produto Atualizado com Sucesso')
      this.router.navigate(['/chamados'])
    })
  }

  cancelbutton(): void {
    this.router.navigate(['/chamados'])
  }

}
