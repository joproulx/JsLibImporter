import l = module('libraryImporter');
export class Test {
    executeTest() {
        l._.each([1, 2, 3], function (num) { alert(num); });
    }
}