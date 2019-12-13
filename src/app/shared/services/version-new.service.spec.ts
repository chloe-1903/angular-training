import { TestBed } from '@angular/core/testing';

import { VersionNewService } from './version-new.service';

describe('VersionNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionNewService = TestBed.get(VersionNewService);
    expect(service).toBeTruthy();
  });
});
