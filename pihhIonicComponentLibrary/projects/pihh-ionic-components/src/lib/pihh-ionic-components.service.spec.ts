import { TestBed } from '@angular/core/testing';

import { PihhIonicComponentsService } from './pihh-ionic-components.service';

describe('PihhIonicComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PihhIonicComponentsService = TestBed.get(PihhIonicComponentsService);
    expect(service).toBeTruthy();
  });
});
