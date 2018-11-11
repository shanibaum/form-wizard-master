import { TestBed } from '@angular/core/testing';

import { FormWizardService } from './form-wizard.service';

describe('FormWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormWizardService = TestBed.get(FormWizardService);
    expect(service).toBeTruthy();
  });
});
