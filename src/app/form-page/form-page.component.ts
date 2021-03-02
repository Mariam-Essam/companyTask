import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';



const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class FormPageComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor(private _snackBar: MatSnackBar) { 
    this.maxDate = new Date();
  }
  flag: boolean = false;
  
  ngOnInit(): void {
  }
  valid(){
    this.flag = false;
  }
  companyName = new FormControl('', [Validators.required]);
  getNameErrorMessage() {
    this.flag = true;
    if (this.companyName.hasError('required')) {
      return 'You must enter a value';
    }
  }
  companyAddress = new FormControl()
  email = new FormControl('', [Validators.required, Validators.email]);
  getEmailErrorMessage() {
    this.flag = true;
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  phone = new FormControl('', [Validators.required]);
  getPhoneErrorMessage() {
    this.flag = true;
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }
    return this.phone.hasError('pattern') ? 'Not a valid phone' : '';
  }
  empNum = new FormControl('', [Validators.required]);
  getEmpNumErrorMessage(){
    this.flag = true;
    if (this.empNum.hasError('required')) {
      return 'You must enter a value';
    }
    return this.empNum.hasError('pattern') ? 'You must enter a number' : '';
  }
  Employees = [
    {
      empName:new FormControl('', [Validators.required]),
          designation:new FormControl(),
          joinDate:new FormControl(),
          email:new FormControl('', [Validators.required, Validators.email]),
          phone: new FormControl('', [Validators.required]), 
          skills:new FormControl('', [Validators.required]),
          rating:{
            Java:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Angular:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            CSS:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            HTML:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            JavaScript:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            UI:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            SQL:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            React:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            PHP:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            GIT:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            AWS:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Python:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            C:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            'C++':new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            'C#':new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Unity:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            R:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            AI:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            NLP:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Photoshop:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Nodejs:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
          },
          skillsRating: [],
          educationInfo:[
            {
              instituteName:new FormControl('', [Validators.required]),
              courseName:new FormControl('', [Validators.required]), 
              completedYear:new FormControl(moment()),
              educationNo: 0
            }
          ],
          empNum:0
    }
  ];
  addEmployee(){
    let count = this.Employees.length;
    this.Employees.push({
      empName:new FormControl('', [Validators.required]),
          designation:new FormControl(),
          joinDate:new FormControl(),
          email:new FormControl('', [Validators.required, Validators.email]),
          phone: new FormControl('', [Validators.required]), 
          skills:new FormControl('', [Validators.required]),
          rating:{
            Java:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Angular:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            CSS:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            HTML:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            JavaScript:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            UI:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            SQL:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            React:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            PHP:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            GIT:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            AWS:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Python:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            C:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            'C++':new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            'C#':new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Unity:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            R:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            AI:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            NLP:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Photoshop:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            Nodejs:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
          },
          skillsRating: [],
          educationInfo:[
            {
              instituteName:new FormControl('', [Validators.required]),
              courseName:new FormControl('', [Validators.required]), 
              completedYear:new FormControl(moment()),
              educationNo: 0
            }
          ],
          empNum:count
    })
  }
  addEducation(i){
    let count = this.Employees[i].educationInfo.length; 
    this.Employees[i].educationInfo.push({
      instituteName:new FormControl('', [Validators.required]),
      courseName:new FormControl('', [Validators.required]), 
      completedYear:new FormControl(moment()),
      educationNo: count
    })
  }
  chosenYearHandler(normalizedYear: Moment, i, num) {
    const ctrlValue = this.Employees[i].educationInfo[num].completedYear.value;
    ctrlValue.year(normalizedYear.year());
    this.Employees[i].educationInfo[num].completedYear.setValue(ctrlValue);
  }
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>,i, num) {
    const ctrlValue = this.Employees[i].educationInfo[num].completedYear.value;
    ctrlValue.month(normalizedMonth.month());
    this.Employees[i].educationInfo[num].completedYear.setValue(ctrlValue);
    datepicker.close();
  }
  skillsHandling(i){
    for(let j = 0; j < this.Employees[i].skills.value.length;j++){
      this.Employees[i].rating ={...this.Employees[i].rating, [this.Employees[i].skills.value[j]]:new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])};
    }
  }
  ratingHanling(i, skill, rate){
    for(let j = 0; j < this.Employees[i].skills.value.length;j++){
      if(this.Employees[i].skills.value[j] === skill){
        this.Employees[i].skillsRating.push({
          skillName: skill,
          skillsRating: rate
        })
      }
    }
  }
  skillsList: string[] = ['Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP', 'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI', 'NLP', 'Photoshop', 'Nodejs']
  getEmpSkillRateErrorMessage(i, skill){
    this.flag = true;
    if(this.Employees[i].rating[skill].hasError('required')){
      return 'You must enter a value';
    }
    else if(this.Employees[i].rating[skill].hasError('min')){
      this.flag = true;
      return 'You must not enter less than 1';
    }
    else if(this.Employees[i].rating[skill].hasError('max')){
      return 'You must not enter more than 5';
    }
    else
    return 'You must enter a number';
  }
  getEmpSkillsErrorMessage(i){
    this.flag = true;
    if (this.Employees[i].skills.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getEmpNameErrorMessage(i) {
    this.flag = true;
    if (this.Employees[i].empName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.Employees[i].empName.hasError('pattern') ? 'You must enter a string' : '';
  }
  designationList: string[] = ['Developer', 'Manager', 'System Admin', 'Team Lead', 'PM'];
  getEmpEmailErrorMessage(i) {
    this.flag = true;
    if (this.Employees[i].email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.Employees[i].email.hasError('email') ? 'Not a valid email' : '';
  }
  getEmpPhoneErrorMessage(i) {
    this.flag = true;
    if (this.Employees[i].phone.hasError('required')) {
      return 'You must enter a value';
    }
    return this.Employees[i].phone.hasError('pattern') ? 'Not a valid phone' : '';
  }
  getEmpEducationErrorMessage(i, name, num){
    if(name === "instituteName"){
      this.flag = true;
      if (this.Employees[i].educationInfo[num].instituteName.hasError('required')) {
        return 'You must enter a value';
      }
      return this.Employees[i].educationInfo[num].instituteName.hasError('pattern') ? 'Not a valid name' : '';
    }
    if(name === "courseName"){
      if (this.Employees[i].educationInfo[num].courseName.hasError('required')) {
        this.flag = true;
        return 'You must enter a value';
      }
      return this.Employees[i].educationInfo[num].courseName.hasError('pattern') ? 'Not a valid name' : '';
    }
  }
  addCompany(){
    if(this.flag === true){
      this._snackBar.open(`): Sorry, you did not complete the data`,`ok`, {
        duration: 5000,
      });
    }
    else{
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      let savedData = {
          companyName: this.companyName.value,  
          address: this.companyAddress.value,  
          email: this.email.value,  
          phoneNumber: this.phone.value,  
          empInfo: []  
        }
        for(let i = 0; i < this.Employees.length; i++){
          let newEmps = 
            {  
              empName: this.Employees[i].empName.value,  
              designation: this.Employees[i].designation.value,  
              joinDate: `${this.Employees[i].joinDate.value.date()}/${this.Employees[i].joinDate.value.month()}/${this.Employees[i].joinDate.value.year()}`,  
              email: this.Employees[i].email.value,  
              phoneNumber: this.Employees[i].phone.value,  
              skillInfo: this.Employees[i].skillsRating,  
              eductionInfo: []  
            }
            for(let j = 0; j < this.Employees[i].educationInfo.length; j++){
              newEmps.eductionInfo.push({ 
                instituteName: this.Employees[i].educationInfo[j].instituteName.value,
                courseName: this.Employees[i].educationInfo[j].courseName.value,
                completedYear: `${month[this.Employees[i].educationInfo[j].completedYear.value.month()]} ${this.Employees[i].educationInfo[j].completedYear.value.year()}`
              })
            } 
            savedData.empInfo.push(newEmps);
        }
        let data = JSON.stringify(savedData);
        localStorage.setItem('data', data);
        this._snackBar.open(`Company details saved successfully`,`ok`, {
          duration: 3000,
        });
        window.location.reload();
      }
  }
}
