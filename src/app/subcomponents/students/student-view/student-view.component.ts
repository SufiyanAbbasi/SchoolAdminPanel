import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [ImageModule, ButtonModule, PanelModule, ProgressBarModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.scss'
})
export class StudentViewComponent {

  personalDetails = [
    { 
      icon: "pi pi-user",
      title: "Name",
      subtitle: "Bruce Willis"
    },
    { 
      icon: "pi pi-building",
      title: "Department",
      subtitle: "Computer Science"
    },
    { 
      icon: "pi pi-phone",
      title: "Mobile",
      subtitle: "+91 89657 48512"
    },
    { 
      icon: "pi pi-envelope",
      title: "Email",
      subtitle: "daisy@gmail.com"
    },
    { 
      icon: "pi pi-user",
      title: "Gender",
      subtitle: "Male"
    },
    { 
      icon: "pi pi-calendar",
      title: "Date Of Birth",
      subtitle: "22 Apr 1995"
    },
    { 
      icon: "pi pi-info",
      title: "Language",
      subtitle: "English, French, Bangla"
    },
    { 
      icon: "pi pi-map-marker",
      title: "Address",
      subtitle: "480, Estern Avenue, New York"
    },

  ]

}
