import { OperationsListResponse } from './types/operations-list-response.type';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationsService } from './services/operations.service';
import { take } from 'rxjs';
import { StatusPipe } from './pipes/status.pipe';
import { OperationStatusPipe } from './pipes/operation-status.pipe';
import { AsyncPipe, CurrencyPipe, DatePipe, PercentPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    StatusPipe,
    OperationStatusPipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    NgForOf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly _operationService = inject(OperationsService);

  operations: OperationsListResponse = [];

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this._operationService.getOperations()
    .pipe(take(1))
    .subscribe((operationsListResponse) => {
        this.operations  = operationsListResponse;
    });

    setTimeout(() => {
      console.log(this.operations);
    }, 3000);
  }
}
