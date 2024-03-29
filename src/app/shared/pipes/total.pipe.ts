import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, isTTC?: boolean): any {
    if (value) {
      if (isTTC) {
        return value.totalTtc();
      }
      return value.totalHt();
    }
    return null;
  }

}
