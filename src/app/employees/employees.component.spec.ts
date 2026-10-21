import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EmployeesComponent],
    providers: [
      provideRouter([]),
      // Mock service so the test never reaches Firestore
      { provide: EmployeeService, useValue: { $: of([]), addEmployee: () => Promise.resolve() } }
    ]
});
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
