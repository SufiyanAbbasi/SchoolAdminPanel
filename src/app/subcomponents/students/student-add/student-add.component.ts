import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { Student, StudentService } from '../../../../services/student.service';
import { Router } from '@angular/router';
interface data {
  option: string;
}
@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FieldsetModule, FormsModule, InputTextModule, DropdownModule, CalendarModule, FileUploadModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.scss'
})
export class StudentAddComponent {
  //form
  value: string = "";
  value2: string = "";
  value3: string = "";
  value4: string = "";
  value5: string = "";
  date: Date | undefined;


  gender: data[] | undefined;

  selectedGender: data | undefined;

  bloodGroup: data[] | undefined;

  selectedBlood: data | undefined;

  Rel: data[] | undefined;

  selectedRel: data | undefined;

  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit() {
    this.gender = [
      { option: 'Male' },
      { option: 'Female' },
      { option: 'Others' },

    ];

    this.bloodGroup = [
      { option: 'A+' },
      { option: 'A-' },
      { option: 'B+' },
      { option: 'B-' },
      { option: 'O-' },
      { option: 'O+' },
    ];

    this.Rel = [
      { option: 'Islam' },
      { option: 'Christian' },
      { option: 'Others' },
    ]
  }
  onSubmit() {
    const newStudent: Student = {
      id: this.value5, // Assuming Admission ID is used as the student ID
      name: `${this.value} ${this.value2}`,
      class: this.value3, // Assuming roll number as class
      dob: this.date ? this.date.toISOString().split('T')[0] : '',
      mobile: this.value4,
      address: '' // Add address field if required
    };
    this.studentService.addStudent(newStudent);
    this.router.navigate(['/studentlist']);
  }
}
