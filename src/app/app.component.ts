import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarService } from '../services/sidebar.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent]
})
export class AppComponent {
  isSidebarVisible = true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(visible => {
      this.isSidebarVisible = visible;
    });
  }

  onSidebarHide() {
    this.isSidebarVisible = false;
  }

  onSidebarShow() {
    this.isSidebarVisible = true;
  }

}
