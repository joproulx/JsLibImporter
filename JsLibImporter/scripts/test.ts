import underscore = module('underscoreLib');
var _:underscore = underscore.underscore;

export class Test {
    executeTest() {
        _.each([1, 2, 3], function (num) { alert(num); });
    }
}