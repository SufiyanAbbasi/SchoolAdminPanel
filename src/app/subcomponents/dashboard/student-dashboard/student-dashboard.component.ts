import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [ButtonModule, CalendarModule, FormsModule, ChartModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  date: Date[] | undefined;
  data: any;
  options: any;
  datatwo: any;
  optionstwo: any;
  chartPlugins: any;
  ngOnInit() {
    this.circlechart();
    this.secondchart();
  }

  students = [
    {
      name: "All Courses",
      ach: "04/06",
      img: "/assets/images/t1.svg"
    },
    {
      name: "Projects",
      ach: "40/60",
      img: "/assets/images/s2.svg"
    },
    {
      name: "Quiz",
      ach: "30/50",
      img: "/assets/images/s3.svg"
    },
    {
      name: "Passed",
      ach: "15/20",
      img: "/assets/images/s4.svg"
    },
    
  ]

  upcomingEvents = [
    {
     category: "10 Jan",
     data : [
       {  time: "8:00 am",subject: "Botony", para:"Lorem ipsum sit amet", sch:"08:00 - 09:00 am"  },
       {  time: "9:00 am",subject: "Botony", para:"Lorem ipsum sit amet", sch:"09:00 - 10:00 am"  },
       {  time: "10:00 am",subject: "Botony", para:"Lorem ipsum sit amet", sch:"10:00 - 11:00 am"  },
     ]
    },
    {
     category: "10 Jan",
     data : [
       {  time: "8:00 am",subject: "English", para:"Lorem ipsum sit amet", sch:"08:00 - 09:00 am"  },
       {  time: "9:00 am",subject: "Mathematics", para:"Lorem ipsum sit amet", sch:"09:00 - 10:00 am"  },
       {  time: "10:00 am",subject: "Botony", para:"Lorem ipsum sit amet", sch:"10:00 - 11:00 am"  },
       {  time: "11:00 am",subject: "Break", para:"Lorem ipsum sit amet", sch:"11:00 - 12:00 pm"  },
       {  time: "12:00 am",subject: "History", para:"Lorem ipsum sit amet", sch:"12:00 - 1:00 pm"  },
     ]
    },
 
   ]
   circlechart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      // labels: ['A', 'B'],
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#6E6BFA', '#E5E5E5'],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--grey-900')],
        }
      ]
    };


    this.options = {
      cutout: '80%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };


  }

  secondchart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.datatwo = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Teachers',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--blue-500')
        },
        {
          label: 'Students',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          // borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--teal-500')
        }
      ]
    };

    this.optionstwo = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
