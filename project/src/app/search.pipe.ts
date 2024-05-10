import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(allusers: any[], searchText: string): any[] {
    if (!allusers) {
      return [];
    }
    if (!searchText) {
      return allusers;
    }

    searchText = searchText.toLowerCase();

    return allusers.filter(item=> {
      // Modify this condition based on your data structure
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
