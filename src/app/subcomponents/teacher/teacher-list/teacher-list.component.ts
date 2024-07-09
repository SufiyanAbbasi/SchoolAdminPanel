import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Teacher, TeacherService } from '../../../../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, TableModule, CommonModule, RouterLink],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
      this.teacherService.teachers$.subscribe(teachers => {
        this.teachers = teachers;
      });
    }
}
