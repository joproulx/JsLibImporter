define(["require", "exports", 'underscoreLib'], function(require, exports, __underscore__) {
    var underscore = __underscore__;

    var _ = underscore;
    var Test = (function () {
        function Test() { }
        Test.prototype.executeTest = function () {
            _.each([
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

