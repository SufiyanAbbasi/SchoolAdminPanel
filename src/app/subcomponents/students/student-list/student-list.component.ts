import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Student, StudentService } from '../../../../services/student.service';



@Component({
    selector: 'app-student-list',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, TableModule, CommonModule, RouterLink],
    templateUrl: './student-list.component.html',
    styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
    students: Student[] = [];

    constructor(private studentService: StudentService) {}

    ngOnInit() {
        this.studentService.students$.subscribe(students => {
          this.students = students;
        });
      }
}



