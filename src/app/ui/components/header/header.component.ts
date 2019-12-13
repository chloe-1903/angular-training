import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { VersionNewService } from 'src/app/shared/services/version-new.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version$: BehaviorSubject<number>;
  public title: string;

  constructor(public vs: VersionService, private vsn: VersionNewService) { }

  ngOnInit() {
    this.title = 'My app';
    this.version$ = this.vsn.version$;
  }

}
