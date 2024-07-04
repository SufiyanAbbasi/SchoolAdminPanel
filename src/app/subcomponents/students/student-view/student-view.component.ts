import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { Student, StudentService } from '../../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [ImageModule, ButtonModule, PanelModule, ProgressBarModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.scss'
})
export class StudentViewComponent {
  student: Student | undefined;

  defaultStudent: Student = {
    id: '0',
    name: 'Default Student',
    class: 'Default Class',
    dob: '01 Jan 2000',
    mobile: '+91 00000 00000',
    // email: 'default@student.com',
    // gender: 'Unknown',
    // language: 'English',
    address: 'Default Address'
  };

  // personalDetails = [
  //   { 
  //     icon: "pi pi-user",
  //     title: "Name",
  //     subtitle: "Bruce Willis"
  //   },
  //   { 
  //     icon: "pi pi-building",
  //     title: "Department",
  //     subtitle: "Computer Science"
  //   },
  //   { 
  //     icon: "pi pi-phone",
  //     title: "Mobile",
  //     subtitle: "+91 89657 48512"
  //   },
  //   { 
  //     icon: "pi pi-envelope",
  //     title: "Email",
  //     subtitle: "daisy@gmail.com"
  //   },
  //   { 
  //     icon: "pi pi-user",
  //     title: "Gender",
  //     subtitle: "Male"
  //   },
  //   { 
  //     icon: "pi pi-calendar",
  //     title: "Date Of Birth",
  //     subtitle: "22 Apr 1995"
  //   },
  //   { 
  //     icon: "pi pi-info",
  //     title: "Language",
  //     subtitle: "English, French, Bangla"
  //   },
  //   { 
  //     icon: "pi pi-map-marker",
  //     title: "Address",
  //     subtitle: "480, Estern Avenue, New York"
  //   },

  // ]
  personalDetails: { icon: string; title: string; subtitle: string }[] = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.student = this.studentService.getStudentById(studentId);
    } else {
      this.student = this.defaultStudent;
    }

    if (this.student) {
      this.personalDetails = [
        { icon: "pi pi-user", title: "Name", subtitle: this.student.name },
        { icon: "pi pi-building", title: "Department", subtitle: this.student.class },
        { icon: "pi pi-phone", title: "Mobile", subtitle: this.student.mobile },
        // { icon: "pi pi-envelope", title: "Email", subtitle: this.student.email },
        // { icon: "pi pi-user", title: "Gender", subtitle: this.student.gender },
        { icon: "pi pi-calendar", title: "Date Of Birth", subtitle: this.student.dob },
        { icon: "pi pi-info", title: "Language", subtitle: "English, French, Bangla" },
        { icon: "pi pi-map-marker", title: "Address", subtitle: this.student.address }
      ];
    }
  }
}

