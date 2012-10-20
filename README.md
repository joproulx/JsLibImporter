JsLibImporter
=============

Example on how to load Javascript library with AMD in TypeScript

Strong-typed (need to declare all Underscore methods in underscoreLib)

	import underscore = module('underscoreLib');
	var _:underscore = underscore;

	export class Test {
	    executeTest() {
	        _.each([1, 2, 3], function (num) { alert(num); });
	    }
	}
 
Loose-typed (DON'T need to declare all Underscore methods in underscoreLib)

	import underscore = module('underscoreLib');
	var _:any = underscore;

	