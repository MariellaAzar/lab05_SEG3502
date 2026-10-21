import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  collectionData
} from '@angular/fire/firestore';
import { Employee } from '../model/employee';

/**
 * Persists employees in the Cloud Firestore collection "employees".
 * Each employee is one document; Firestore generates the document id.
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  private employeesRef = collection(this.firestore, 'employees');

  /** Live stream of all employees stored in Firestore (used by the table). */
  get $(): Observable<readonly Employee[]> {
    return collectionData(this.employeesRef, { idField: 'id' }).pipe(
      map(docs => docs.map(d => new Employee(
        d['name'],
        // Firestore stores dates as Timestamp, convert back to a JS Date
        d['dateOfBirth'] instanceof Timestamp ? d['dateOfBirth'].toDate() : new Date(d['dateOfBirth']),
        d['city'],
        d['salary'],
        d['gender'],
        d['email'],
        d['id']
      )))
    );
  }

  /** Saves a new employee document. Resolves once Firestore has accepted the write. */
  addEmployee(employee: Employee): Promise<void> {
    // Firestore rejects `undefined` values, so store missing optional fields as null.
    const data = {
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      city: employee.city,
      salary: employee.salary,
      gender: employee.gender ?? null,
      email: employee.email ?? null
    };
    return addDoc(this.employeesRef, data).then(() => {});
  }
}
