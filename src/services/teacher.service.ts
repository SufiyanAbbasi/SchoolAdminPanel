import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  dob: string;
  mobile: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  private teachersSubject = new BehaviorSubject<Teacher[]>([
    { id: "1", name: 'John Smith', subject: 'Mathematics', dob: '1985-05-20', mobile: '1234567890', address: '123 Main St' },
    { id: "2", name: 'Jane Doe', subject: 'Physics', dob: '1978-11-11', mobile: '0987654321', address: '456 Elm St' },
    { id: "3", name: 'Alice Johnson', subject: 'Chemistry', dob: '1980-07-15', mobile: '2345678901', address: '789 Oak St' },
    { id: "4", name: 'Robert Brown', subject: 'Biology', dob: '1982-09-25', mobile: '3456789012', address: '101 Pine St' },
    { id: "5", name: 'Mary Davis', subject: 'History', dob: '1975-03-10', mobile: '4567890123', address: '202 Maple St' },
    { id: "6", name: 'James Wilson', subject: 'Geography', dob: '1988-12-05', mobile: '5678901234', address: '303 Birch St' },
    { id: "7", name: 'Patricia Miller', subject: 'English', dob: '1979-04-22', mobile: '6789012345', address: '404 Cedar St' },
    { id: "8", name: 'Michael Anderson', subject: 'Physical Education', dob: '1983-08-14', mobile: '7890123456', address: '505 Walnut St' },
    { id: "9", name: 'Linda Jackson', subject: 'Art', dob: '1976-01-30', mobile: '8901234567', address: '606 Poplar St' },
    { id: "10", name: 'William Martinez', subject: 'Music', dob: '1981-06-17', mobile: '9012345678', address: '707 Redwood St' }
]);


  teachers$ = this.teachersSubject.asObservable();

  getTeachers(): Observable<Teacher[]> {
    return this.teachersSubject.asObservable();
  }

  // getTeacherById(id: number): Observable<Teacher | undefined> {
  //   return this.teachersSubject.asObservable().pipe(
  //     map(teachers => teachers.find(teacher => teacher.id === id))
  //   );
  // }


  addTeacher(teacher: Teacher): void {
    const currentTeachers = this.teachersSubject.value;
    this.teachersSubject.next([...currentTeachers, teacher]);
  }

  updateTeacher(updatedTeacher: Teacher): void {
    const currentTeachers = this.teachersSubject.value;
    const teacherIndex = currentTeachers.findIndex(t => t.id === updatedTeacher.id);
    if (teacherIndex !== -1) {
      currentTeachers[teacherIndex] = updatedTeacher;
      this.teachersSubject.next([...currentTeachers]);
    }
  }


  getteachersById(id: string): Teacher | undefined {
    return this.teachersSubject.getValue().find(teacher => teacher.id === id);
  }

}
