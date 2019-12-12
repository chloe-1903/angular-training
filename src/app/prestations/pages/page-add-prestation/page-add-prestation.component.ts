import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  constructor(private ps: PrestationsService, private router: Router) { }

  // item is not a Prestation object, it a a JSON object
  public add(item: any) {
    this.ps.add(item).subscribe((res) => {
      console.log(res);
      this.router.navigate(['prestations']);
      // same as '/prestations'
      // redirection relative : this.router.navigate(['prestations'], {relativeTo: this.route}); + import ActivatedRoute
    }
    );
  }

  ngOnInit() {
  }

}
