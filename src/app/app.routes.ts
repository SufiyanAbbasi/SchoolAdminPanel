import { Routes } from '@angular/router';
import { TeacherDashboardComponent } from './subcomponents/dashboard/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './subcomponents/dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './subcomponents/dashboard/student-dashboard/student-dashboard.component';
import { StudentListComponent } from './subcomponents/students/student-list/student-list.component';
import { StudentViewComponent } from './subcomponents/students/student-view/student-view.component';
import { StudentAddComponent } from './subcomponents/students/student-add/student-add.component';
import { StudentEditComponent } from './subcomponents/students/student-edit/student-edit.component';
import { TeacherListComponent } from './subcomponents/teacher/teacher-list/teacher-list.component';
import { TeacherViewComponent } from './subcomponents/teacher/teacher-view/teacher-view.component';
import { TeacherAddComponent } from './subcomponents/teacher/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './subcomponents/teacher/teacher-edit/teacher-edit.component';

export const routes: Routes = [
    {path: "admindashboard", component:AdminDashboardComponent, },
    {path: "",  redirectTo:"admindashboard", pathMatch:'full' },
    {path: "teacherdashboard", component: TeacherDashboardComponent},
    {path: "studentdashboard", component: StudentDashboardComponent},
    {path: "studentlist", component: StudentListComponent},
    {path: "studentview", component: StudentViewComponent},
    {path: "studentview/:id", component: StudentViewComponent},
    {path: "studentadd", component: StudentAddComponent},
    {path: "studentedit", component: StudentEditComponent},
    {path: "studentedit/:id", component: StudentEditComponent},
    {path: "teacherslist", component: TeacherListComponent}, 
    {path: "teachersview", component: TeacherViewComponent},
    {path: "teachersview/:id", component: TeacherViewComponent},
    {path: "teachersadd", component:TeacherAddComponent},
    {path: "teachersedit", component: TeacherEditComponent},
    {path: "teachersedit/:id", component: TeacherEditComponent},
];
