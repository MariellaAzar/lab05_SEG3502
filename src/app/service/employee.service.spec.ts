import { TestBed } from '@angular/core/testing';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Dummy project: creating the service does not contact Firestore
        provideFirebaseApp(() => initializeApp({ projectId: 'test-project', apiKey: 'test' })),
        provideFirestore(() => getFirestore())
      ]
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
