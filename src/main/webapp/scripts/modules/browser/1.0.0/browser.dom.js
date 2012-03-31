(function(define) {
    define(function(require, exports, module) {
    	
var clang=require('ceylon/language/0.2/ceylon.language');

if (typeof Node !== "undefined") clang.initType(Node, 'browser.dom.Node', clang.Object);
if (typeof Element !== "undefined") clang.initType(Element, 'browser.dom.Element', clang.Object, Node);
if (typeof TypeInfo !== "undefined") clang.initType(TypeInfo, 'browser.dom.TypeInfo', clang.Object);
if (typeof Attr !== "undefined") clang.initType(Attr, 'browser.dom.Attr', clang.Object, Node);
if (typeof CharacterData !== "undefined") clang.initType(CharacterData, 'browser.dom.CharacterData', clang.Object, Node);
if (typeof Text !== "undefined") clang.initType(Text, 'browser.dom.Text', clang.Object, CharacterData);
if (typeof CDATASection !== "undefined") clang.initType(CDATASection, 'browser.dom.CDATASection', clang.Object, Text);
if (typeof Comment !== "undefined") clang.initType(Comment, 'browser.dom.Comment', clang.Object, CharacterData);
if (typeof DOMConfiguration !== "undefined") clang.initType(DOMConfiguration, 'browser.dom.DOMConfiguration', clang.Object);
if (typeof DOMError !== "undefined") clang.initType(DOMError, 'browser.dom.DOMError', clang.Object);
if (typeof DOMErrorHandler !== "undefined") clang.initType(DOMErrorHandler, 'browser.dom.DOMErrorHandler', clang.Object);
if (typeof DOMException !== "undefined") clang.initType(DOMException, 'browser.dom.DOMException', clang.Object);
if (typeof DOMImplementation !== "undefined") clang.initType(DOMImplementation, 'browser.dom.DOMImplementation', clang.Object);
if (typeof DOMImplementationList !== "undefined") clang.initType(DOMImplementationList, 'browser.dom.DOMImplementationList', clang.Object);
if (typeof DOMImplementationSource !== "undefined") clang.initType(DOMImplementationSource, 'browser.dom.DOMImplementationSource', clang.Object);
if (typeof DOMLocator !== "undefined") clang.initType(DOMLocator, 'browser.dom.DOMLocator', clang.Object);
if (typeof DOMStringList !== "undefined") clang.initType(DOMStringList, 'browser.dom.DOMStringList', clang.Object);
if (typeof DocumentType !== "undefined") clang.initType(DocumentType, 'browser.dom.DocumentType', clang.Object, Node);
if (typeof DocumentFragment !== "undefined") clang.initType(DocumentFragment, 'browser.dom.DocumentFragment', clang.Object, Node);
if (typeof ProcessingInstruction !== "undefined") clang.initType(ProcessingInstruction, 'browser.dom.ProcessingInstruction', clang.Object, Node);
if (typeof EntityReference !== "undefined") clang.initType(EntityReference, 'browser.dom.EntityReference', clang.Object, Node);
if (typeof NodeList !== "undefined") clang.initType(NodeList, 'browser.dom.NodeList', clang.Object);
if (typeof Document !== "undefined") clang.initType(Document, 'browser.dom.Document', clang.Object, Node);
if (typeof NamedNodeMap !== "undefined") clang.initType(NamedNodeMap, 'browser.dom.NamedNodeMap', clang.Object);
if (typeof Entity !== "undefined") clang.initType(Entity, 'browser.dom.Entity', clang.Object, Node);
if (typeof NameList !== "undefined") clang.initType(NameList, 'browser.dom.NameList', clang.Object);
if (typeof Notation !== "undefined") clang.initType(Notation, 'browser.dom.Notation', clang.Object, Node);
if (typeof UserDataHandler !== "undefined") clang.initType(UserDataHandler, 'browser.dom.UserDataHandler', clang.Object);
if (typeof HTMLElement !== "undefined") clang.initType(HTMLElement, 'browser.dom.HTMLElement', clang.Object, Element);
if (typeof HTMLAnchorElement !== "undefined") clang.initType(HTMLAnchorElement, 'browser.dom.HTMLAnchorElement', clang.Object, HTMLElement);
if (typeof HTMLAppletElement !== "undefined") clang.initType(HTMLAppletElement, 'browser.dom.HTMLAppletElement', clang.Object, HTMLElement);
if (typeof HTMLAreaElement !== "undefined") clang.initType(HTMLAreaElement, 'browser.dom.HTMLAreaElement', clang.Object, HTMLElement);
if (typeof HTMLBRElement !== "undefined") clang.initType(HTMLBRElement, 'browser.dom.HTMLBRElement', clang.Object, HTMLElement);
if (typeof HTMLBaseElement !== "undefined") clang.initType(HTMLBaseElement, 'browser.dom.HTMLBaseElement', clang.Object, HTMLElement);
if (typeof HTMLBaseFontElement !== "undefined") clang.initType(HTMLBaseFontElement, 'browser.dom.HTMLBaseFontElement', clang.Object, HTMLElement);
if (typeof HTMLBodyElement !== "undefined") clang.initType(HTMLBodyElement, 'browser.dom.HTMLBodyElement', clang.Object, HTMLElement);
if (typeof HTMLFormElement !== "undefined") clang.initType(HTMLFormElement, 'browser.dom.HTMLFormElement', clang.Object, HTMLElement);
if (typeof HTMLButtonElement !== "undefined") clang.initType(HTMLButtonElement, 'browser.dom.HTMLButtonElement', clang.Object, HTMLElement);
if (typeof HTMLCollection !== "undefined") clang.initType(HTMLCollection, 'browser.dom.HTMLCollection', clang.Object);
if (typeof HTMLDListElement !== "undefined") clang.initType(HTMLDListElement, 'browser.dom.HTMLDListElement', clang.Object, HTMLElement);
if (typeof HTMLDocument !== "undefined") clang.initType(HTMLDocument, 'browser.dom.HTMLDocument', clang.Object, Document);
if (typeof HTMLDOMImplementation !== "undefined") clang.initType(HTMLDOMImplementation, 'browser.dom.HTMLDOMImplementation', clang.Object, DOMImplementation);
if (typeof HTMLDirectoryElement !== "undefined") clang.initType(HTMLDirectoryElement, 'browser.dom.HTMLDirectoryElement', clang.Object, HTMLElement);
if (typeof HTMLDivElement !== "undefined") clang.initType(HTMLDivElement, 'browser.dom.HTMLDivElement', clang.Object, HTMLElement);
if (typeof HTMLFieldSetElement !== "undefined") clang.initType(HTMLFieldSetElement, 'browser.dom.HTMLFieldSetElement', clang.Object, HTMLElement);
if (typeof HTMLFontElement !== "undefined") clang.initType(HTMLFontElement, 'browser.dom.HTMLFontElement', clang.Object, HTMLElement);
if (typeof HTMLFrameElement !== "undefined") clang.initType(HTMLFrameElement, 'browser.dom.HTMLFrameElement', clang.Object, HTMLElement);
if (typeof HTMLFrameSetElement !== "undefined") clang.initType(HTMLFrameSetElement, 'browser.dom.HTMLFrameSetElement', clang.Object, HTMLElement);
if (typeof HTMLHRElement !== "undefined") clang.initType(HTMLHRElement, 'browser.dom.HTMLHRElement', clang.Object, HTMLElement);
if (typeof HTMLHeadElement !== "undefined") clang.initType(HTMLHeadElement, 'browser.dom.HTMLHeadElement', clang.Object, HTMLElement);
if (typeof HTMLHeadingElement !== "undefined") clang.initType(HTMLHeadingElement, 'browser.dom.HTMLHeadingElement', clang.Object, HTMLElement);
if (typeof HTMLHtmlElement !== "undefined") clang.initType(HTMLHtmlElement, 'browser.dom.HTMLHtmlElement', clang.Object, HTMLElement);
if (typeof HTMLIFrameElement !== "undefined") clang.initType(HTMLIFrameElement, 'browser.dom.HTMLIFrameElement', clang.Object, HTMLElement);
if (typeof HTMLImageElement !== "undefined") clang.initType(HTMLImageElement, 'browser.dom.HTMLImageElement', clang.Object, HTMLElement);
if (typeof HTMLInputElement !== "undefined") clang.initType(HTMLInputElement, 'browser.dom.HTMLInputElement', clang.Object, HTMLElement);
if (typeof HTMLIsIndexElement !== "undefined") clang.initType(HTMLIsIndexElement, 'browser.dom.HTMLIsIndexElement', clang.Object, HTMLElement);
if (typeof HTMLLIElement !== "undefined") clang.initType(HTMLLIElement, 'browser.dom.HTMLLIElement', clang.Object, HTMLElement);
if (typeof HTMLLabelElement !== "undefined") clang.initType(HTMLLabelElement, 'browser.dom.HTMLLabelElement', clang.Object, HTMLElement);
if (typeof HTMLLegendElement !== "undefined") clang.initType(HTMLLegendElement, 'browser.dom.HTMLLegendElement', clang.Object, HTMLElement);
if (typeof HTMLLinkElement !== "undefined") clang.initType(HTMLLinkElement, 'browser.dom.HTMLLinkElement', clang.Object, HTMLElement);
if (typeof HTMLMapElement !== "undefined") clang.initType(HTMLMapElement, 'browser.dom.HTMLMapElement', clang.Object, HTMLElement);
if (typeof HTMLMenuElement !== "undefined") clang.initType(HTMLMenuElement, 'browser.dom.HTMLMenuElement', clang.Object, HTMLElement);
if (typeof HTMLMetaElement !== "undefined") clang.initType(HTMLMetaElement, 'browser.dom.HTMLMetaElement', clang.Object, HTMLElement);
if (typeof HTMLModElement !== "undefined") clang.initType(HTMLModElement, 'browser.dom.HTMLModElement', clang.Object, HTMLElement);
if (typeof HTMLOListElement !== "undefined") clang.initType(HTMLOListElement, 'browser.dom.HTMLOListElement', clang.Object, HTMLElement);
if (typeof HTMLObjectElement !== "undefined") clang.initType(HTMLObjectElement, 'browser.dom.HTMLObjectElement', clang.Object, HTMLElement);
if (typeof HTMLOptGroupElement !== "undefined") clang.initType(HTMLOptGroupElement, 'browser.dom.HTMLOptGroupElement', clang.Object, HTMLElement);
if (typeof HTMLOptionElement !== "undefined") clang.initType(HTMLOptionElement, 'browser.dom.HTMLOptionElement', clang.Object, HTMLElement);
if (typeof HTMLParagraphElement !== "undefined") clang.initType(HTMLParagraphElement, 'browser.dom.HTMLParagraphElement', clang.Object, HTMLElement);
if (typeof HTMLParamElement !== "undefined") clang.initType(HTMLParamElement, 'browser.dom.HTMLParamElement', clang.Object, HTMLElement);
if (typeof HTMLPreElement !== "undefined") clang.initType(HTMLPreElement, 'browser.dom.HTMLPreElement', clang.Object, HTMLElement);
if (typeof HTMLQuoteElement !== "undefined") clang.initType(HTMLQuoteElement, 'browser.dom.HTMLQuoteElement', clang.Object, HTMLElement);
if (typeof HTMLScriptElement !== "undefined") clang.initType(HTMLScriptElement, 'browser.dom.HTMLScriptElement', clang.Object, HTMLElement);
if (typeof HTMLSelectElement !== "undefined") clang.initType(HTMLSelectElement, 'browser.dom.HTMLSelectElement', clang.Object, HTMLElement);
if (typeof HTMLStyleElement !== "undefined") clang.initType(HTMLStyleElement, 'browser.dom.HTMLStyleElement', clang.Object, HTMLElement);
if (typeof HTMLTableCaptionElement !== "undefined") clang.initType(HTMLTableCaptionElement, 'browser.dom.HTMLTableCaptionElement', clang.Object, HTMLElement);
if (typeof HTMLTableCellElement !== "undefined") clang.initType(HTMLTableCellElement, 'browser.dom.HTMLTableCellElement', clang.Object, HTMLElement);
if (typeof HTMLTableColElement !== "undefined") clang.initType(HTMLTableColElement, 'browser.dom.HTMLTableColElement', clang.Object, HTMLElement);
if (typeof HTMLTableSectionElement !== "undefined") clang.initType(HTMLTableSectionElement, 'browser.dom.HTMLTableSectionElement', clang.Object, HTMLElement);
if (typeof HTMLTableElement !== "undefined") clang.initType(HTMLTableElement, 'browser.dom.HTMLTableElement', clang.Object, HTMLElement);
if (typeof HTMLTableRowElement !== "undefined") clang.initType(HTMLTableRowElement, 'browser.dom.HTMLTableRowElement', clang.Object, HTMLElement);
if (typeof HTMLTextAreaElement !== "undefined") clang.initType(HTMLTextAreaElement, 'browser.dom.HTMLTextAreaElement', clang.Object, HTMLElement);
if (typeof HTMLTitleElement !== "undefined") clang.initType(HTMLTitleElement, 'browser.dom.HTMLTitleElement', clang.Object, HTMLElement);
if (typeof HTMLUListElement !== "undefined") clang.initType(HTMLUListElement, 'browser.dom.HTMLUListElement', clang.Object, HTMLElement);

    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
