import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(userStatus: number): string {
    const userStatusDescription: { [key: number]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    }

    return userStatusDescription[userStatus] ? userStatusDescription[userStatus] : 'Inválido';
  }

}
