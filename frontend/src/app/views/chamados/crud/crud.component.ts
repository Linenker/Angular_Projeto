import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'INC', cols: 1, rows: 1 },
          { title: 'SLA', cols: 1, rows: 1 },
          { title: 'RITM', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'INC', cols: 2, rows: 1 },
        { title: 'SLA', cols: 2, rows: 1 },
        { title: 'RITM', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit(): void {
  }

  navigateToChamadoIncCreate(): void {
    this.router.navigate(['chamados/cadastrar/inc'])
  }

  navigateToChamadoSlaCreate(): void {
    this.router.navigate(['chamados/cadastrar/sla'])
  }

  navigateToChamadoRitmCreate(): void {
    this.router.navigate(['chamados/cadastrar/ritm'])
  }

  navigateToChamadoIncRead(): void {
    this.router.navigate(['chamados/base/inc'])
  }
  navigateToChamadoSlaRead(): void {
    this.router.navigate(['chamados/base/sla'])
  }
  navigateToChamadoRITMRead(): void {
    this.router.navigate(['chamados/base/ritm'])
  }
}
