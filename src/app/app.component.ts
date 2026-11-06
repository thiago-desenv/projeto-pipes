import { OperationsListResponse } from './types/operations-list-response.type';
import { Component, inject, OnInit } from '@angular/core';
import { OperationsService } from './services/operations.service';
import { Observable } from 'rxjs';
import { StatusPipe } from './pipes/status.pipe';
import { OperationStatusPipe } from './pipes/operation-status.pipe';
import { CurrencyPipe, DatePipe, PercentPipe, NgForOf, CommonModule, AsyncPipe } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StatusPipe,
    OperationStatusPipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    NgForOf,
    FilterPipe,
    AsyncPipe,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly _operationService = inject(OperationsService);

  searchTerm: string = '';

  operations$: Observable<OperationsListResponse> | undefined;

  ngOnInit(): void {
    this.operations$ = this.getOperations();
  }

  getOperations(): Observable<OperationsListResponse> {
    return this._operationService.getOperations();
  }
}
