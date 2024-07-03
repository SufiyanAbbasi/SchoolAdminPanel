import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../../../services/sidebar.service';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, ImageModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  @Output() onHide = new EventEmitter<void>();
  @Output() onShow = new EventEmitter<void>();

  sidebarVisible = true;
  getIcon(menuItem: any): string {
    return menuItem.icon || 'pi pi-th-large'; // Default icon if none specified
  }

  constructor(private sidebarService: SidebarService, private router: Router) { }

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(visible => {
      this.sidebarVisible = visible;
    });

  }
  onSidebarHide() {
    this.sidebarVisible = false;
    this.onHide.emit();
  }

  onSidebarShow() {
    this.sidebarVisible = true;
    this.onShow.emit();
  }

  closeCallback() {
    this.sidebarService.setSidebarVisibility(false);
    this.onHide.emit();
  }
  trackByFn(index: number, item: any) {
    return item.id;
  }

  sidebar = [
    {
      category: "Main Menu",
      items: [
        { id: 1, name: "Dashboard", icon: "pi pi-th-large", sublist: ['Admin dashboard', 'Teacher Dashboard', 'Student Dashboard'] },
        { id: 2, name: "Students", icon: "pi pi-graduation-cap", sublist: ['Student List', 'Student View', 'Student Add', 'Student Edit'] },
        { id: 3, name: "Teachers", icon: "pi pi-user", sublist: ['Teachers List', 'Teachers View', 'Teachers Add', 'Teachers Edit'] },
        { id: 4, name: "Department", icon: "pi pi-building", sublist: ['Department List', 'Department Add', 'Department Edit'] },
        { id: 5, name: "Subjects", icon: "pi pi-building", sublist: ['Subjects List', 'Subjects Add', 'Subjects Edit'] },
      ],
    },
    {
      category: "Managements",
      items: [
        { id: 6, name: "Accounts", icon: "pi pi-address-book", sublist: ['Fees Collection', 'Salary', 'Add Fees'] },
        { id: 7, name: "Holiday", icon: "pi pi-graduation-cap", sublist: [] },
        { id: 8, name: "Fees", icon: "pi pi-user", sublist: [] },
        { id: 9, name: "Exam List", icon: "pi pi-building", sublist: [] },
        { id: 10, name: "Time Table", icon: "pi pi-building", sublist: [] },
      ],
    }

  ]

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  onItemClicked(item: any) {
    if (!item.sublist || item.sublist.length === 0) {
      this.navigateToRoute(item.name);
    }
  }

  onSublistItemClicked(item: any, subitem: string) {
    this.navigateToRoute(subitem);
  }

  navigateToRoute(name: string) {
    let routePath = this.getRoutePath(name);
    if (routePath) {
      this.router.navigate([routePath]);
    }
  }

  getRoutePath(name: string): string | null {
    switch (name.toLowerCase()) {
      case 'dashboard':
        return '/dashboard';
      case 'admin dashboard':
        return '/admindashboard';
      case 'teacher dashboard':
        return '/teacherdashboard';
      case 'student dashboard':
        return '/studentdashboard';
      case 'student list':
        return '/students/list';
      case 'student view':
        return '/students/view';
      case 'student add':
        return '/students/add';
      case 'student edit':
        return '/students/edit';
      // Add more cases as needed
      default:
        return null;
    }
  }
}
