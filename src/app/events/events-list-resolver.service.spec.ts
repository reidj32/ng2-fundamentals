import { TestBed, inject } from '@angular/core/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsListResolverService],
    });
  });

  it(
    'should be created',
    inject([EventsListResolverService], (service: EventsListResolverService) => {
      expect(service).toBeTruthy();
    }),
  );
});
