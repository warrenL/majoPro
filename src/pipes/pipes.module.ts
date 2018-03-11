import { NgModule } from '@angular/core';
import { StudentNamePipe } from './student-name/student-name';
import { JsonLengthPipe } from './json-length/json-length';

/**
 * The module class used to declare custom pipes.
 *
 */
@NgModule({
	declarations: [
		StudentNamePipe,
    JsonLengthPipe
	],
	imports: [],
	exports: [
		StudentNamePipe,
    JsonLengthPipe
	]
})
export class PipesModule { }
