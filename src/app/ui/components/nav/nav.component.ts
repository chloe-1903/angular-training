import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { VersionNewService } from 'src/app/shared/services/version-new.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // vs is public so that we can access to the latest value on the template
  constructor(public vs: VersionService, private vsn: VersionNewService) { }

  public increaseNewVersion() {
    this.vsn.increaseVersion();
  }

  ngOnInit() {
  }

}
