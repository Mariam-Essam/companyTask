import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements AfterViewInit  {
  data: Array<any>;
  searchTxt:any = new FormControl();
  constructor() { 
    this.data = [
      {
        companyName:"Dell", 
        companyAddress:"Nasr City", 
        phone:"01234567891", 
        email:"dell@mail.com", 
        createdAt:"11/1/1990",
      },
      {
        companyName:"NBE", 
        companyAddress:"Mohandseen", 
        phone:"0124444444", 
        email:"nbe@mail.com", 
        createdAt:"11/1/1970",
      },
      {
        companyName:"CBE", 
        companyAddress:"Cairo", 
        phone:"0123499999", 
        email:"cbe@mail.com", 
        createdAt:"12/5/1930",
      },
      {
        companyName:"Samsung", 
        companyAddress:"Nasr City", 
        phone:"1234567", 
        email:"samsung@mail.com", 
        createdAt:"1/1/1890",
      },
      {
        companyName:"Company", 
        companyAddress:"Shobra", 
        phone:"0122345661", 
        email:"company@mail.com", 
        createdAt:"12/4/1888",
      },
      {
        companyName:"Petrol Company", 
        companyAddress:"Nasr City", 
        phone:"01234567891", 
        email:"petrol@mail.com", 
        createdAt:"20/3/1920",
      },
      {
        companyName:"Coca Cola", 
        companyAddress:"Eltagamoa Alawal", 
        phone:"012333444", 
        email:"cocacola@mail.com", 
        createdAt:"11/1/1970",
      },
      {
        companyName:"Preshka", 
        companyAddress:"Cairo", 
        phone:"0123499876999", 
        email:"preshka@mail.com", 
        createdAt:"10/10/1910",
      },
      {
        companyName:"Chiclets", 
        companyAddress:"Nasr City", 
        phone:"1234569997", 
        email:"chiclets@mail.com", 
        createdAt:"1/1/1890",
      },
      {
        companyName:"Google", 
        companyAddress:"Smart Village", 
        phone:"01223554361", 
        email:"google@mail.com", 
        createdAt:"10/1/1888",
      },
      {
        companyName:"Microsoft", 
        companyAddress:"Smart Village", 
        phone:"09876543", 
        email:"microsoft@mail.com", 
        createdAt:"11/1/1920",
      },
      {
        companyName:"We", 
        companyAddress:"Smart Village", 
        phone:"0124444444", 
        email:"we@mail.com", 
        createdAt:"16/1/1999",
      },
      {
        companyName:"Chipsy", 
        companyAddress:"Cairo", 
        phone:"09876543", 
        email:"chipsy@mail.com", 
        createdAt:"12/5/1930",
      },
      {
        companyName:"H&M", 
        companyAddress:"6 of October", 
        phone:"1234567", 
        email:"hnm@mail.com", 
        createdAt:"1/1/1890",
      },
      {
        companyName:"Company", 
        companyAddress:"Shobra", 
        phone:"0122345661", 
        email:"company@mail.com", 
        createdAt:"10/1/1998",
      }
    ];
  }
  displayedColumns: string[] = ['companyName', 'companyAddress', 'phone', 'email', 'createdAt', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  handleDeletion(elem){
    Swal.fire({
      title: 'Do you want to delete company?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let newData = [];
        for(let i = 0; i < ELEMENT_DATA.length; i++){
          if(ELEMENT_DATA[i].companyName === elem.companyName){
            continue;
          }
          newData.push(ELEMENT_DATA[i]);
        }
        ELEMENT_DATA = newData;
        this.dataSource.data = ELEMENT_DATA;
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  async handleEdit(elem){
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        `<input id="swal-input1" class="swal2-input" value = ${elem.companyName}>
        <input id="swal-input2" class="swal2-input" value = ${elem.companyAddress}>
        <input id="swal-input3" class="swal2-input" value = ${elem.phone}>
        <input id="swal-input4" class="swal2-input" value = ${elem.email}>
        `,
      focusConfirm: false,
      preConfirm: () => {
        let compName =  <HTMLInputElement>document.getElementById('swal-input1');
        let address = <HTMLInputElement>document.getElementById('swal-input2');
        let phone = <HTMLInputElement>document.getElementById('swal-input3');
        let email = <HTMLInputElement>document.getElementById('swal-input4');
        let newData = [];
        for(let i = 0; i < ELEMENT_DATA.length; i++){
          if(ELEMENT_DATA[i].companyName === elem.companyName){
            newData.push({
              companyName: compName.value,
              companyAddress: address.value,
              phone: phone.value,
              email: email.value,
              createdAt: ELEMENT_DATA[i].createdAt
            });
          }
          else{
            newData.push(ELEMENT_DATA[i]);
          }
        }
        ELEMENT_DATA = newData;
        this.dataSource.data = ELEMENT_DATA;
        Swal.fire('Updated!', '', 'success')
      }
    })
  }
}
export interface PeriodicElement {
  companyName: string;
  companyAddress: string;
  phone: string;
  email: string;
  createdAt: string;
}
let ELEMENT_DATA: PeriodicElement[] = [
  {
    companyName:"Dell", 
    companyAddress:"Nasr City", 
    phone:"01234567891", 
    email:"dell@mail.com", 
    createdAt:"11/1/1990",
  },
  {
    companyName:"NBE", 
    companyAddress:"Mohandseen", 
    phone:"0124444444", 
    email:"nbe@mail.com", 
    createdAt:"11/1/1970",
  },
  {
    companyName:"CBE", 
    companyAddress:"Cairo", 
    phone:"0123499999", 
    email:"cbe@mail.com", 
    createdAt:"12/5/1930",
  },
  {
    companyName:"Samsung", 
    companyAddress:"Nasr City", 
    phone:"1234567", 
    email:"samsung@mail.com", 
    createdAt:"1/1/1890",
  },
  {
    companyName:"Company", 
    companyAddress:"Shobra", 
    phone:"0122345661", 
    email:"company@mail.com", 
    createdAt:"12/4/1888",
  },
  {
    companyName:"Petrol Company", 
    companyAddress:"Nasr City", 
    phone:"01234567891", 
    email:"petrol@mail.com", 
    createdAt:"20/3/1920",
  },
  {
    companyName:"Coca Cola", 
    companyAddress:"Eltagamoa Alawal", 
    phone:"012333444", 
    email:"cocacola@mail.com", 
    createdAt:"11/1/1970",
  },
  {
    companyName:"Preshka", 
    companyAddress:"Cairo", 
    phone:"0123499876999", 
    email:"preshka@mail.com", 
    createdAt:"10/10/1910",
  },
  {
    companyName:"Chiclets", 
    companyAddress:"Nasr City", 
    phone:"1234569997", 
    email:"chiclets@mail.com", 
    createdAt:"1/1/1890",
  },
  {
    companyName:"Google", 
    companyAddress:"Smart Village", 
    phone:"01223554361", 
    email:"google@mail.com", 
    createdAt:"10/1/1888",
  },
  {
    companyName:"Microsoft", 
    companyAddress:"Smart Village", 
    phone:"09876543", 
    email:"microsoft@mail.com", 
    createdAt:"11/1/1920",
  },
  {
    companyName:"We", 
    companyAddress:"Smart Village", 
    phone:"0124444444", 
    email:"we@mail.com", 
    createdAt:"16/1/1999",
  },
  {
    companyName:"Chipsy", 
    companyAddress:"Cairo", 
    phone:"09876543", 
    email:"chipsy@mail.com", 
    createdAt:"12/5/1930",
  },
  {
    companyName:"H&M", 
    companyAddress:"6 of October", 
    phone:"1234567", 
    email:"hnm@mail.com", 
    createdAt:"1/1/1890",
  },
  {
    companyName:"Company", 
    companyAddress:"Shobra", 
    phone:"0122345661", 
    email:"company@mail.com", 
    createdAt:"10/1/1998",
  }
];

