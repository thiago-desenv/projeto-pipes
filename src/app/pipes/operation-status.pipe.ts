import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operationStatus',
  standalone: true
})
export class OperationStatusPipe implements PipeTransform {

  transform(status: number): any {
    const icon: { [key: number]: string  } = {
      1: 'assets/icons/active-icon.png',
      2: 'assets/icons/inactive-icon.png'
    }

    return icon[status];
  }
}
