import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public editedPrestation$: Observable<any>;
  private id: string;

  constructor(private ps: PrestationsService, private router: Router, private route: ActivatedRoute) { }

  // item is not a Prestation object, it a a JSON object
  public update(item: any) {
    item.id = this.id;
    this.ps.update(item).subscribe((res) => {
      this.router.navigate(['prestations']);
    }
    );
  }

  ngOnInit() {
    this.editedPrestation$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.ps.getItemById(params.get('id'));
      }
    ));
  }

}
