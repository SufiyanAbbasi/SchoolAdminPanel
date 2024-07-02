import { Routes } from '@angular/router';
import { TeacherDashboardComponent } from './subcomponents/dashboard/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './subcomponents/dashboard/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: "admindashboard", component:AdminDashboardComponent, },
    {path: "",  redirectTo:"admindashboard", pathMatch:'full' },
    {path: "teacherdashboard", component: TeacherDashboardComponent}
];
