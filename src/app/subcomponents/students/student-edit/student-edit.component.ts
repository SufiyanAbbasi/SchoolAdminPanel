import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Student, StudentService } from '../../../../services/student.service';
interface data {
  option: string;
}
@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FieldsetModule, FormsModule, InputTextModule, DropdownModule, CalendarModule, FileUploadModule, RouterLink],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.scss'
})
export class StudentEditComponent {
  student: Student | undefined;
  value: string = "";
  value2: string = "";
  value3: string = "";
  value4: string = "";
  value5: string = "";
  value6: string = "";

  date: Date | undefined;


  gender: data[] | undefined;

  selectedGender: data | undefined;

  bloodGroup: data[] | undefined;

  selectedBlood: data | undefined;

  Rel: data[] | undefined;

  selectedRel: data | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}


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

      this.Rel =[
        { option: 'Islam' },
        { option: 'Christian' },
        { option: 'Others' },
      ]

      this.studentData();
  }
  onUpload(){
    
  }

  studentData(){
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.student = this.studentService.getStudentById(studentId);
      if (this.student) {
        this.value = this.student.name.split(' ')[0];
        this.value2 = this.student.name.split(' ')[1];
        this.value3 = this.student.class;
        this.value4 = this.student.mobile;
        this.value5 = this.student.id;
        this.date = new Date(this.student.dob);
      }
    }
  }
   
  onSubmit() {
    if (this.student) {
      this.student.name = `${this.value} ${this.value2}`;
      this.student.class = this.value3;
      this.student.dob = this.date ? this.date.toISOString().split('T')[0] : '';
      this.student.mobile = this.value4;
      // Update the student in the service (you may need to implement an update method in the service)
      // this.studentService.updateStudent(this.student);
      this.router.navigate(['/studentlist']);
    }
  }

}
