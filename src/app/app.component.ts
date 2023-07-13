import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { IForm } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false;
  showTable:boolean = false;
  
  
  formData:IForm = {
    fname:'',
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false,

  }

  

  forms:IForm [] = [
    {
    fname:"",
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false
  },
  ];




  test(form:any){
    console.log('form: ', form);

    // console.log("The value is:",this.formData);
    if(this.formData && this.formData.fname === '' ){
      this.fNameValid = true;
    } else if(this.formData && this.formData.fname && this.formData.fname?.length > 0){
      this.fNameValid = false;
    }

    console.log("The value is:",this.formData);
    if(this.formData && this.formData.lname === '')
    {
      this.lNameValid = true; 
    }
    else if(this.formData && this.formData.lname && this.formData.lname?.length > 0)
    {
      this.lNameValid = false;
    }

    console.log("The vlue is: ", this.formData);
    if(this.formData && this.formData.dropdown === '')
    {
      this.selectValid = true;
    }
    else if(this.formData && this.formData.dropdown)
    {
      this.selectValid = false
    }
    
    console.log("The value is:",this.formData);
    if(this.formData && this.formData.religion === '')
    {
      this.religionValid = true;
    }
    else if(this.formData && this.formData.religion && this.formData.religion?.length > 0)
    {
      this.religionValid = false
    }
    


    console.log("The value is:",this.formData);
    if(this.formData && this.formData.date === '')
    {
      this.dateValid = true;
    }
    else if(this.formData && this.formData.date && this.formData.date?.length > 0)
    {
      this.dateValid = false;
    }

    console.log("The value is:",this.formData);
    if(this.formData && this.formData.box === false)
    {
      this.boxValid = true;
    }
    else if(this.formData && this.formData.box && this.formData.box)
    {
      this.dateValid = true;
    }

    this.showTable = true;

    this.formArr.push(form)
    console.log('Array: ', this.formArr);
    
}


}
