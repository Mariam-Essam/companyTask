import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchTxt:string): any {
    if(searchTxt==undefined){
      return data;
    }
    if(searchTxt == ""){
      return data;
    }
    return data.data.filter(function(data){
      return data.companyName.toLowerCase().includes(searchTxt.toLowerCase());
    })
  }

}
