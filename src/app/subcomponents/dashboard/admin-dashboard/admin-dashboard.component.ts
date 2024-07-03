import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ChartModule, TableModule, SelectButtonModule, ButtonModule, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  admin = [
    {
      name: "Students",
      ach: "50055",
      img: "/assets/images/admin1.svg"
    },
    {
      name: "Awards",
      ach: "50 +",
      img: "/assets/images/admin2.svg"
    },
    {
      name: "Departments",
      ach: "30 +",
      img: "/assets/images/admin3.svg"
    },
    {
      name: "Revenue",
      ach: "$500",
      img: "/assets/images/admin4.svg"
    },
    
  ]
  
  socialMedia =[
    {
        context:"Like us On facebook",
        num: "50,095",
        img: "/assets/images/fb.svg",
        bgColor: "#3b82f6"
    },
    {
        context:"Follow us on Twitter",
        num: "48,095",
        img: "/assets/images/twitter.svg",
        bgColor:"#1D9BF0"
    },
    {
        context:"Follow us on Insta",
        num: "52,095",
        img: "/assets/images/insta.svg",
        bgColor:"#FE643B"
    },
    {
        context:"Follow us on linkedin",
        num: "68,095",
        img: "/assets/images/linkedin.svg",
        bgColor:"#0A66C2"
    }
  ]

  studentActivity = [
    {
        img: "/assets/images/admin5.svg",
        position:"1st Place in 'Chess'",
        participation:"John Doe won 1st place in 'Chess'",
        time: "1 day ago"
    },
    {
        img: "/assets/images/admin6.svg",
        position:"Participated in 'Carrom'",
        participation:"Justin Lee participated in 'Carrom'",
        time: "2 hours ago"
    },
    {
        img: "/assets/images/admin7.svg",
        position:"International in 'St.John School'",
        participation:"Justin  conference in 'St.John School'",
        time: "2 day ago"
    },
    {
        img: "/assets/images/admin8.svg",
        position:"1st Place in 'Chess'",
        participation:"John Doe won 1st place in 'Chess'",
        time: "3 days ago"
    },

  ]

  tableData = [
    { id: 'PRE2209', name: 'John Smith', marks: 1155, percentage: '80%', year: 2020 },
    { id: 'PRE2209', name: 'Will Smith', marks: 1155, percentage: '80%', year: 2020 },
    { id: 'PRE2209', name: 'John Smith', marks: 1155, percentage: '80%', year: 2020 },
    { id: 'PRE2209', name: 'Will Smith', marks: 1155, percentage: '80%', year: 2020 },
    { id: 'PRE2209', name: 'John Smith', marks: 1155, percentage: '80%', year: 2020 },
    // Add more objects for each row you want to display
  ];

  ngOnInit() {
      this.chartOne();
      this.chartTwo(); 
  }


  
  //first chart
  data: any;

  options: any;
  chartOne() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Teacher',
                data: [35, 59, 40, 41, 26, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Student',
                data: [28, 48, 40, 19, 46, 27, 50],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.9,
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
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
  }

  //second chart
  datatwo: any;

  optionstwo: any;
  chartTwo(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.datatwo = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Girls',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Boys',
                backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    this.optionstwo = {
        maintainAspectRatio: false,
        aspectRatio: 0.9,
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
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }

        }
    };
  }
 
 
}
