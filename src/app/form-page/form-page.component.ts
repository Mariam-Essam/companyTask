import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor() { 
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date();
  }
  
  ngOnInit(): void {
  }
  companyName = new FormControl('', [Validators.required]);
  companyAddress;
  getNameErrorMessage() {
    if (this.companyName.hasError('required')) {
      return 'You must enter a value';
    }
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  phone = new FormControl('', [Validators.required]);
  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }
  }
  Employees = [
    {
      empName:new FormControl('', [Validators.required]),
      designation:new FormControl(),
      joinDate:new FormControl(),
      email:new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]), 
      skills:[
        {
          name:"",
          rating:0
        }
      ],
      educationInfo:[
        {
          collageName:"",
          courseName:"", 
          completedYear:""
        }
      ]
    }
  ];
  getEmpNameErrorMessage() {
    if (this.Employees[0].empName.hasError('required')) {
      return 'You must enter a value';
    }
  }
  designationList: string[] = ['Developer', 'Manager', 'System Admin', 'Team Lead', 'PM'];
  getEmpEmailErrorMessage() {
    if (this.Employees[0].email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.Employees[0].email.hasError('email') ? 'Not a valid email' : '';
  }
  getEmpPhoneErrorMessage() {
    if (this.Employees[0].phone.hasError('required')) {
      return 'You must enter a value';
    }
  }
  newSkills = new FormControl('', [Validators.required])
  skillsList: string[] = ['Java', 'Angular','CSS','HTML','JavaScript','UI','SQL','React','PHP','GIT','AWS','Python','Django','C','C++','C#','Unity','R','AI','NLP','Photoshop','Nodejs']
  addSkills(){
    let i = 0;
    if(this.newSkills.value.length){
      for(let i = 0; i < this.newSkills.value.length; i++){
        
      }
    }
  }
  ratingNum = new FormControl('', [Validators.required,Validators.min(1),Validators.max(5)]);
  getEmpSkillRateErrorMessage(skill){
    if(this.ratingNum.hasError('required')){
      return 'You must enter a value';
    }
    else if(this.ratingNum.hasError('min')){
      return 'You must not enter less than 1';
    }
    else if(this.ratingNum.hasError('max')){
      return 'You must not enter more than 5';
    }
    else
    return 'Wrong value';
  }
  getEmpSkillsErrorMessage(){
    if (this.newSkills.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
