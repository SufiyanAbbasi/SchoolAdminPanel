import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar.service';
interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, ImageModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  //sidebar
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  items: MenuItem[] | undefined;
  currentOpenDropdown: string | null = null;

  toggleDropdown(dropdown: string) {
    this.currentOpenDropdown = this.currentOpenDropdown === dropdown ? null : dropdown;
  }

  displayDialog: boolean = false;
  showChatbox: boolean = false;
  profileBox: boolean = false;

  toggleDialog() {
    this.displayDialog = !this.displayDialog;
  }
  chatbox() {
    this.showChatbox = !this.showChatbox;
  }
  toggleProfile() {
    this.profileBox = !this.profileBox;
  }
  // constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }



}
