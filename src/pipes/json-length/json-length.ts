import { Pipe, PipeTransform } from '@angular/core';

/**
 * The pipe used to process json data.
 *
 */
@Pipe({
  name: 'jsonLength',
})
export class JsonLengthPipe implements PipeTransform {

  /*
   * Takes a value and makes it lowercase.
   */
  transform(value: {}[], ...args) {
    return value.length;
  }
}
