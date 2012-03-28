(function(define) {
    define(function(require, exports, module) {
	
var $document = function() { return document; };
exports.getDocument = $document;

    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
