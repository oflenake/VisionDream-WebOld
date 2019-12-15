import { TestBed } from '@angular/core/testing';

import { FakeBackendInterceptor } from './fake-backend';

describe('FakeBackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const interceptor: FakeBackendInterceptor = TestBed.get(FakeBackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
