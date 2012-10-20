define(["require", "exports", 'libraryImporter'], function(require, exports, __l__) {
    var l = __l__;

    var Test = (function () {
        function Test() { }
        Test.prototype.executeTest = function () {
            l._.each([
                1, 
                2, 
                3
            ], function (num) {
                alert(num);
            });
        };
        return Test;
    })();
    exports.Test = Test;    
})

