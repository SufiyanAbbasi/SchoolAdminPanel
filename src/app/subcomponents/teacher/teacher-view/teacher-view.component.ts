import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
// import { Student, StudentService } from '../../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Teacher, TeacherService } from '../../../../services/teacher.service';

@Component({
  selector: 'app-teacher-view',
  standalone: true,
  imports: [ImageModule, ButtonModule, PanelModule, ProgressBarModule],
  templateUrl: './teacher-view.component.html',
  styleUrl: './teacher-view.component.scss'
})
export class TeacherViewComponent {
  teachers: Teacher | undefined;

  defaultTeachers: Teacher = {
    id: '0',
    name: 'Default Student',
    subject: "Default Subject",
    dob: '01 Jan 2000',
    mobile: '+91 00000 00000',
    // email: 'default@student.com',
    // gender: 'Unknown',
    // language: 'English',
    address: 'Default Address'
  };


  personalDetails: { icon: string; title: string; subtitle: string }[] = [];

  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit() {
    const teachersId = this.route.snapshot.paramMap.get('id');
    if (teachersId) {
      this.teachers = this.teacherService.getteachersById(teachersId);
    } else {
      this.teachers = this.defaultTeachers;
    }

    if (this.teachers) {
      this.personalDetails = [
        { icon: "pi pi-user", title: "Name", subtitle: this.teachers.name },
        { icon: "pi pi-building", title: "Subject", subtitle: this.teachers.subject },
        { icon: "pi pi-phone", title: "Mobile", subtitle: this.teachers.mobile },
        // { icon: "pi pi-envelope", title: "Email", subtitle: this.teachers.email },
        // { icon: "pi pi-user", title: "Gender", subtitle: this.teachers.gender },
        { icon: "pi pi-calendar", title: "Date Of Birth", subtitle: this.teachers.dob },
        { icon: "pi pi-info", title: "Language", subtitle: "English, French, Bangla" },
        { icon: "pi pi-map-marker", title: "Address", subtitle: this.teachers.address }
      ];
    }
  }

}
