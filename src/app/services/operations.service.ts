import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OperationsListResponse } from '../types/operations-list-response.type';
import { OPERATIONS_LIST_BD } from '../mocks/operations-list-response.mock';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

constructor() { }
  getOperations(): Observable<OperationsListResponse>  {
    return of(OPERATIONS_LIST_BD);
  }
}
