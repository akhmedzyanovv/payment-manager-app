import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rowPrice'})
export class MockRowPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}

@Pipe({name: 'totalPrice'})
export class MockTotalPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}
