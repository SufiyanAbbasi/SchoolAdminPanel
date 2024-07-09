import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { Teacher, TeacherService } from '../../../../services/teacher.service';

interface data {
  option: string;
}

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [FieldsetModule, FormsModule, InputTextModule, DropdownModule, CalendarModule, FileUploadModule],
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.scss'
})
export class TeacherAddComponent {
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

  constructor(private teachersService: TeacherService, private router: Router) { }
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
    const newTeacher: Teacher = {
      id: this.value5, // Assuming Admission ID is used as the teacher ID
      name: `${this.value} ${this.value2}`,
      subject: this.value3, // Assuming roll number as class
      dob: this.date ? this.date.toISOString().split('T')[0] : '',
      mobile: this.value4,
      address: '' // Add address field if required
    };
    this.teachersService.addTeacher(newTeacher);
    this.router.navigate(['/teacherslist']);
  }
}
