(function(define) {
    define(function(require, exports, module) {
    	
var clang=require('ceylon/language/0.2/ceylon.language');

clang.initType(Node, 'browser.dom.Node', clang.Object);
clang.initType(Element, 'browser.dom.Element', clang.Object, Node);
//clang.initType(TypeInfo, 'browser.dom.TypeInfo', clang.Object);
clang.initType(Attr, 'browser.dom.Attr', clang.Object, Node);
clang.initType(CharacterData, 'browser.dom.CharacterData', clang.Object, Node);
clang.initType(Text, 'browser.dom.Text', clang.Object, CharacterData);
clang.initType(CDATASection, 'browser.dom.CDATASection', clang.Object, Text);
clang.initType(Comment, 'browser.dom.Comment', clang.Object, CharacterData);
//clang.initType(DOMConfiguration, 'browser.dom.DOMConfiguration', clang.Object);
//clang.initType(DOMError, 'browser.dom.DOMError', clang.Object);
//clang.initType(DOMErrorHandler, 'browser.dom.DOMErrorHandler', clang.Object);
clang.initType(DOMException, 'browser.dom.DOMException', clang.Object);
clang.initType(DOMImplementation, 'browser.dom.DOMImplementation', clang.Object);
//clang.initType(DOMImplementationList, 'browser.dom.DOMImplementationList', clang.Object);
//clang.initType(DOMImplementationSource, 'browser.dom.DOMImplementationSource', clang.Object);
//clang.initType(DOMLocator, 'browser.dom.DOMLocator', clang.Object);
clang.initType(DOMStringList, 'browser.dom.DOMStringList', clang.Object);
clang.initType(DocumentType, 'browser.dom.DocumentType', clang.Object, Node);
clang.initType(DocumentFragment, 'browser.dom.DocumentFragment', clang.Object, Node);
clang.initType(ProcessingInstruction, 'browser.dom.ProcessingInstruction', clang.Object, Node);
clang.initType(EntityReference, 'browser.dom.EntityReference', clang.Object, Node);
clang.initType(NodeList, 'browser.dom.NodeList', clang.Object);
clang.initType(Document, 'browser.dom.Document', clang.Object, Node);
clang.initType(NamedNodeMap, 'browser.dom.NamedNodeMap', clang.Object);
clang.initType(Entity, 'browser.dom.Entity', clang.Object, Node);
//clang.initType(NameList, 'browser.dom.NameList', clang.Object);
clang.initType(Notation, 'browser.dom.Notation', clang.Object, Node);
//clang.initType(UserDataHandler, 'browser.dom.UserDataHandler', clang.Object);
clang.initType(HTMLElement, 'browser.dom.HTMLElement', clang.Object, Element);
clang.initType(HTMLAnchorElement, 'browser.dom.HTMLAnchorElement', clang.Object, HTMLElement);
clang.initType(HTMLAppletElement, 'browser.dom.HTMLAppletElement', clang.Object, HTMLElement);
clang.initType(HTMLAreaElement, 'browser.dom.HTMLAreaElement', clang.Object, HTMLElement);
clang.initType(HTMLBRElement, 'browser.dom.HTMLBRElement', clang.Object, HTMLElement);
clang.initType(HTMLBaseElement, 'browser.dom.HTMLBaseElement', clang.Object, HTMLElement);
clang.initType(HTMLBaseFontElement, 'browser.dom.HTMLBaseFontElement', clang.Object, HTMLElement);
clang.initType(HTMLBodyElement, 'browser.dom.HTMLBodyElement', clang.Object, HTMLElement);
clang.initType(HTMLFormElement, 'browser.dom.HTMLFormElement', clang.Object, HTMLElement);
clang.initType(HTMLButtonElement, 'browser.dom.HTMLButtonElement', clang.Object, HTMLElement);
clang.initType(HTMLCollection, 'browser.dom.HTMLCollection', clang.Object);
clang.initType(HTMLDListElement, 'browser.dom.HTMLDListElement', clang.Object, HTMLElement);
clang.initType(HTMLDocument, 'browser.dom.HTMLDocument', clang.Object, Document);
//clang.initType(HTMLDOMImplementation, 'browser.dom.HTMLDOMImplementation', clang.Object, DOMImplementation);
clang.initType(HTMLDirectoryElement, 'browser.dom.HTMLDirectoryElement', clang.Object, HTMLElement);
clang.initType(HTMLDivElement, 'browser.dom.HTMLDivElement', clang.Object, HTMLElement);
clang.initType(HTMLFieldSetElement, 'browser.dom.HTMLFieldSetElement', clang.Object, HTMLElement);
clang.initType(HTMLFontElement, 'browser.dom.HTMLFontElement', clang.Object, HTMLElement);
clang.initType(HTMLFrameElement, 'browser.dom.HTMLFrameElement', clang.Object, HTMLElement);
clang.initType(HTMLFrameSetElement, 'browser.dom.HTMLFrameSetElement', clang.Object, HTMLElement);
clang.initType(HTMLHRElement, 'browser.dom.HTMLHRElement', clang.Object, HTMLElement);
clang.initType(HTMLHeadElement, 'browser.dom.HTMLHeadElement', clang.Object, HTMLElement);
clang.initType(HTMLHeadingElement, 'browser.dom.HTMLHeadingElement', clang.Object, HTMLElement);
clang.initType(HTMLHtmlElement, 'browser.dom.HTMLHtmlElement', clang.Object, HTMLElement);
clang.initType(HTMLIFrameElement, 'browser.dom.HTMLIFrameElement', clang.Object, HTMLElement);
clang.initType(HTMLImageElement, 'browser.dom.HTMLImageElement', clang.Object, HTMLElement);
clang.initType(HTMLInputElement, 'browser.dom.HTMLInputElement', clang.Object, HTMLElement);
clang.initType(HTMLIsIndexElement, 'browser.dom.HTMLIsIndexElement', clang.Object, HTMLElement);
clang.initType(HTMLLIElement, 'browser.dom.HTMLLIElement', clang.Object, HTMLElement);
clang.initType(HTMLLabelElement, 'browser.dom.HTMLLabelElement', clang.Object, HTMLElement);
clang.initType(HTMLLegendElement, 'browser.dom.HTMLLegendElement', clang.Object, HTMLElement);
clang.initType(HTMLLinkElement, 'browser.dom.HTMLLinkElement', clang.Object, HTMLElement);
clang.initType(HTMLMapElement, 'browser.dom.HTMLMapElement', clang.Object, HTMLElement);
clang.initType(HTMLMenuElement, 'browser.dom.HTMLMenuElement', clang.Object, HTMLElement);
clang.initType(HTMLMetaElement, 'browser.dom.HTMLMetaElement', clang.Object, HTMLElement);
clang.initType(HTMLModElement, 'browser.dom.HTMLModElement', clang.Object, HTMLElement);
clang.initType(HTMLOListElement, 'browser.dom.HTMLOListElement', clang.Object, HTMLElement);
clang.initType(HTMLObjectElement, 'browser.dom.HTMLObjectElement', clang.Object, HTMLElement);
clang.initType(HTMLOptGroupElement, 'browser.dom.HTMLOptGroupElement', clang.Object, HTMLElement);
clang.initType(HTMLOptionElement, 'browser.dom.HTMLOptionElement', clang.Object, HTMLElement);
clang.initType(HTMLParagraphElement, 'browser.dom.HTMLParagraphElement', clang.Object, HTMLElement);
clang.initType(HTMLParamElement, 'browser.dom.HTMLParamElement', clang.Object, HTMLElement);
clang.initType(HTMLPreElement, 'browser.dom.HTMLPreElement', clang.Object, HTMLElement);
clang.initType(HTMLQuoteElement, 'browser.dom.HTMLQuoteElement', clang.Object, HTMLElement);
clang.initType(HTMLScriptElement, 'browser.dom.HTMLScriptElement', clang.Object, HTMLElement);
clang.initType(HTMLSelectElement, 'browser.dom.HTMLSelectElement', clang.Object, HTMLElement);
clang.initType(HTMLStyleElement, 'browser.dom.HTMLStyleElement', clang.Object, HTMLElement);
clang.initType(HTMLTableCaptionElement, 'browser.dom.HTMLTableCaptionElement', clang.Object, HTMLElement);
clang.initType(HTMLTableCellElement, 'browser.dom.HTMLTableCellElement', clang.Object, HTMLElement);
clang.initType(HTMLTableColElement, 'browser.dom.HTMLTableColElement', clang.Object, HTMLElement);
clang.initType(HTMLTableSectionElement, 'browser.dom.HTMLTableSectionElement', clang.Object, HTMLElement);
clang.initType(HTMLTableElement, 'browser.dom.HTMLTableElement', clang.Object, HTMLElement);
clang.initType(HTMLTableRowElement, 'browser.dom.HTMLTableRowElement', clang.Object, HTMLElement);
clang.initType(HTMLTextAreaElement, 'browser.dom.HTMLTextAreaElement', clang.Object, HTMLElement);
clang.initType(HTMLTitleElement, 'browser.dom.HTMLTitleElement', clang.Object, HTMLElement);
clang.initType(HTMLUListElement, 'browser.dom.HTMLUListElement', clang.Object, HTMLElement);

    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
