import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculatePrice'})
export class MockPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}
