import { TestBed, inject } from '@angular/core/testing';

import { ListsResolver } from './lists-resolver.service';

describe('ListsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListsResolver]
    });
  });

  it('should be created', inject([ListsResolver], (service: ListsResolver) => {
    expect(service).toBeTruthy();
  }));
});
