// student.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: string;
  name: string;
  class: string;
  dob: string;
  mobile: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([
    {
      id: '1',
      name: 'John Doe',
      class: 'A',
      dob: '2000-01-01',
      mobile: '1234567890',
      address: '1234 Elm Street',
    },
    {
      id: '2',
      name: 'Jane Smith',
      class: 'B',
      dob: '1999-05-15',
      mobile: '0987654321',
      address: '5678 Oak Street',
    },
    {
      id: "3",
      name: "Alice Johnson",
      class: "A",
      dob: "1998-03-22",
      mobile: "2345678901",
      address: "9101 Maple Avenue"
  },
  {
      id: "4",
      name: "Bob Brown",
      class: "C",
      dob: "2001-07-30",
      mobile: "3456789012",
      address: "2345 Pine Street"
  },
  {
      id: "5",
      name: "Carol White",
      class: "B",
      dob: "1997-12-10",
      mobile: "4567890123",
      address: "6789 Birch Road"
  },
  {
      id: "6",
      name: "David Black",
      class: "A",
      dob: "2000-05-25",
      mobile: "5678901234",
      address: "1012 Cedar Lane"
  },
  {
      id: "7",
      name: "Eva Green",
      class: "C",
      dob: "1999-11-15",
      mobile: "6789012345",
      address: "3456 Spruce Street"
  },
  {
      id: "8",
      name: "Frank Blue",
      class: "B",
      dob: "1998-08-08",
      mobile: "7890123456",
      address: "7890 Oakwood Drive"
  },
  {
      id: "9",
      name: "Grace Yellow",
      class: "A",
      dob: "2001-02-20",
      mobile: "8901234567",
      address: "1234 Pinecone Avenue"
  },
  {
      id: "10",
      name: "Hank Purple",
      class: "C",
      dob: "1997-09-10",
      mobile: "9012345678",
      address: "5678 Maplewood Road"
  }

    // Add initial student data here
  ]);

  students$ = this.studentsSubject.asObservable();

  addStudent(student: Student) {
    const currentStudents = this.studentsSubject.getValue();
    this.studentsSubject.next([...currentStudents, student]);
  }

  getStudentById(id: string): Student | undefined {
    return this.studentsSubject.getValue().find(student => student.id === id);
  }
}
