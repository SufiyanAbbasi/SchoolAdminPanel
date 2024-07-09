import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Teacher, TeacherService } from '../../../../services/teacher.service';
interface data {
  option: string;
}
@Component({
  selector: 'app-teacher-edit',
  standalone: true,
  imports: [FieldsetModule, FormsModule, InputTextModule, DropdownModule, CalendarModule, FileUploadModule, RouterLink],
  templateUrl: './teacher-edit.component.html',
  styleUrl: './teacher-edit.component.scss'
})
export class TeacherEditComponent {
  teachers: Teacher | undefined;
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
    private teachersService: TeacherService,
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
    const teachersId = this.route.snapshot.paramMap.get('id');
    if (teachersId) {
      this.teachers = this.teachersService.getteachersById(teachersId);
      if (this.teachers) {
        this.value = this.teachers.name.split(' ')[0];
        this.value2 = this.teachers.name.split(' ')[1];
        this.value3 = this.teachers.subject;
        this.value4 = this.teachers.mobile;
        this.value5 = this.teachers.id;
        this.date = new Date(this.teachers.dob);
      }
    }
  }
   
  onSubmit() {
    if (this.teachers) {
      this.teachers.name = `${this.value} ${this.value2}`;
      this.teachers.subject = this.value3;
      this.teachers.dob = this.date ? this.date.toISOString().split('T')[0] : '';
      this.teachers.mobile = this.value4;
      // Update the student in the service (you may need to implement an update method in the service)
      // this.teachersService.updateStudent(this.student);
      this.router.navigate(['/teacherslist']);
    }
  }

}
