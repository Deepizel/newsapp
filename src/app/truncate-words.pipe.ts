import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords',
})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, words: number = 10): string {
    const wordArray = value.split(' ');
    if (wordArray.length > words) {
      return wordArray.slice(0, words).join(' ') + '...';
    }
    return value;
  }
}
