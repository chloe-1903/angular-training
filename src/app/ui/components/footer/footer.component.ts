import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';
import { VersionNewService } from 'src/app/shared/services/version-new.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyright: string;
  public version$: BehaviorSubject<number>;
  public versionTable$: BehaviorSubject<number[]>;

  // vs is public so that we can access to the latest value on the template without using observable (cf what we do with vsn)
  constructor(public vs: VersionService, private vsn: VersionNewService) { }

  ngOnInit() {
    this.copyright = 'Copyright 2019 Chloé';
    this.version$ = this.vsn.version$;
    // we can't loop with ngFor [version] times -> we need a table containting [version] element
    this.versionTable$ = this.vsn.versionTable$;
  }

}
