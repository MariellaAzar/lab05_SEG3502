import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EmployeeComponent],
    providers: [
      provideRouter([]),
      // Mock service so the test never reaches Firestore
      { provide: EmployeeService, useValue: { $: of([]), addEmployee: () => Promise.resolve() } }
    ]
});
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
