import { Pipe, PipeTransform } from '@angular/core';

/**
 * The pipe used to process text format for student name.
 *
 */
@Pipe({
  name: 'studentName',
})
export class StudentNamePipe implements PipeTransform {

  /*
   * Takes a value and makes it get the first capital letter.
   */
  transform(value: string, ...args) {
    return value.toLowerCase().split(/\s+/).map(function (item, index) {
      return item.slice(0, 1).toUpperCase();
    }).join('');
  }

}
