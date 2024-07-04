import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
interface data {
  option: string;
}
@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FieldsetModule, FormsModule, InputTextModule, DropdownModule, CalendarModule, FileUploadModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.scss'
})
export class StudentEditComponent {
  value: string = "";
  value2: string = "";
  value3: string = "";
  value4: string = "";
  value5: string = "";
  value6: string = "";

  date: Date | undefined;


  gender: data[] | undefined;

  selectedGender: data | undefined;

  bloodGroup: data[] | undefined;

  selectedBlood: data | undefined;

  Rel: data[] | undefined;

  selectedRel: data | undefined;


  ngOnInit() {
      this.gender = [
          { option: 'Male' },
          { option: 'Female' },
          { option: 'Others' },
     
      ];

      this.bloodGroup = [
        { option: 'A+' },
        { option: 'A-' },
        { option: 'B+' },
        { option: 'B-' },
        { option: 'O-' },
        { option: 'O+' },
      ];

      this.Rel =[
        { option: 'Islam' },
        { option: 'Christian' },
        { option: 'Others' },
      ]
  }
  onUpload(){
    
  }

}
