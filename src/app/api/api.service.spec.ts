import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientModule, HttpModule]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('call getList', inject([ApiService], (service: ApiService) => {
    service.getList(0)
      .subscribe( carList => expect(carList.length).toBeGreaterThan(0));
  }));

});
