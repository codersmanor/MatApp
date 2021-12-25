import { TestBed } from '@angular/core/testing';

import { AuthrGuard } from './authr.guard';

describe('AuthrGuard', () => {
  let guard: AuthrGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthrGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
