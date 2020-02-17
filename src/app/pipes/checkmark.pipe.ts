import { Pipe, PipeTransform } from '@angular/core';

/* There is no upgrade method to convert filters into pipes */
@Pipe({name: 'checkmark'})
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    return input ? '\u2713' : '\u2718';
  }
}
