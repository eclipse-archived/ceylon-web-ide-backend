(function(define) {
    define(function(require, exports, module) {
    	
var clang=require('ceylon/language/0.2/ceylon.language');

if (typeof Node !== "undefined") { clang.initType(Node, 'browser.dom.Node', clang.Object); clang.inheritProto(Node, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Element !== "undefined") { clang.initType(Element, 'browser.dom.Element', clang.Object, Node); clang.inheritProto(Element, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof TypeInfo !== "undefined") { clang.initType(TypeInfo, 'browser.dom.TypeInfo', clang.Object); clang.inheritProto(TypeInfo, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Attr !== "undefined") { clang.initType(Attr, 'browser.dom.Attr', clang.Object, Node); clang.inheritProto(Attr, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof CharacterData !== "undefined") { clang.initType(CharacterData, 'browser.dom.CharacterData', clang.Object, Node); clang.inheritProto(CharacterData, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Text !== "undefined") { clang.initType(Text, 'browser.dom.Text', clang.Object, CharacterData); clang.inheritProto(Text, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof CDATASection !== "undefined") { clang.initType(CDATASection, 'browser.dom.CDATASection', clang.Object, Text); clang.inheritProto(CDATASection, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Comment !== "undefined") { clang.initType(Comment, 'browser.dom.Comment', clang.Object, CharacterData); clang.inheritProto(Comment, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMConfiguration !== "undefined") { clang.initType(DOMConfiguration, 'browser.dom.DOMConfiguration', clang.Object); clang.inheritProto(DOMConfiguration, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMError !== "undefined") { clang.initType(DOMError, 'browser.dom.DOMError', clang.Object); clang.inheritProto(DOMError, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMErrorHandler !== "undefined") { clang.initType(DOMErrorHandler, 'browser.dom.DOMErrorHandler', clang.Object); clang.inheritProto(DOMErrorHandler, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMException !== "undefined") { clang.initType(DOMException, 'browser.dom.DOMException', clang.Object); clang.inheritProto(DOMException, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMImplementation !== "undefined") { clang.initType(DOMImplementation, 'browser.dom.DOMImplementation', clang.Object); clang.inheritProto(DOMImplementation, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMImplementationList !== "undefined") { clang.initType(DOMImplementationList, 'browser.dom.DOMImplementationList', clang.Object); clang.inheritProto(DOMImplementationList, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMImplementationSource !== "undefined") { clang.initType(DOMImplementationSource, 'browser.dom.DOMImplementationSource', clang.Object); clang.inheritProto(DOMImplementationSource, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMLocator !== "undefined") { clang.initType(DOMLocator, 'browser.dom.DOMLocator', clang.Object); clang.inheritProto(DOMLocator, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DOMStringList !== "undefined") { clang.initType(DOMStringList, 'browser.dom.DOMStringList', clang.Object); clang.inheritProto(DOMStringList, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DocumentType !== "undefined") { clang.initType(DocumentType, 'browser.dom.DocumentType', clang.Object, Node); clang.inheritProto(DocumentType, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof DocumentFragment !== "undefined") { clang.initType(DocumentFragment, 'browser.dom.DocumentFragment', clang.Object, Node); clang.inheritProto(DocumentFragment, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof ProcessingInstruction !== "undefined") { clang.initType(ProcessingInstruction, 'browser.dom.ProcessingInstruction', clang.Object, Node); clang.inheritProto(ProcessingInstruction, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof EntityReference !== "undefined") { clang.initType(EntityReference, 'browser.dom.EntityReference', clang.Object, Node); clang.inheritProto(EntityReference, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof NodeList !== "undefined") { clang.initType(NodeList, 'browser.dom.NodeList', clang.Object); clang.inheritProto(NodeList, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Document !== "undefined") { clang.initType(Document, 'browser.dom.Document', clang.Object, Node); clang.inheritProto(Document, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof NamedNodeMap !== "undefined") { clang.initType(NamedNodeMap, 'browser.dom.NamedNodeMap', clang.Object); clang.inheritProto(NamedNodeMap, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Entity !== "undefined") { clang.initType(Entity, 'browser.dom.Entity', clang.Object, Node); clang.inheritProto(Entity, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof NameList !== "undefined") { clang.initType(NameList, 'browser.dom.NameList', clang.Object); clang.inheritProto(NameList, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof Notation !== "undefined") { clang.initType(Notation, 'browser.dom.Notation', clang.Object, Node); clang.inheritProto(Notation, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof UserDataHandler !== "undefined") { clang.initType(UserDataHandler, 'browser.dom.UserDataHandler', clang.Object); clang.inheritProto(UserDataHandler, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLElement !== "undefined") { clang.initType(HTMLElement, 'browser.dom.HTMLElement', clang.Object, Element); clang.inheritProto(HTMLElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLAnchorElement !== "undefined") { clang.initType(HTMLAnchorElement, 'browser.dom.HTMLAnchorElement', clang.Object, HTMLElement); clang.inheritProto(HTMLAnchorElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLAppletElement !== "undefined") { clang.initType(HTMLAppletElement, 'browser.dom.HTMLAppletElement', clang.Object, HTMLElement); clang.inheritProto(HTMLAppletElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLAreaElement !== "undefined") { clang.initType(HTMLAreaElement, 'browser.dom.HTMLAreaElement', clang.Object, HTMLElement); clang.inheritProto(HTMLAreaElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLBRElement !== "undefined") { clang.initType(HTMLBRElement, 'browser.dom.HTMLBRElement', clang.Object, HTMLElement); clang.inheritProto(HTMLBRElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLBaseElement !== "undefined") { clang.initType(HTMLBaseElement, 'browser.dom.HTMLBaseElement', clang.Object, HTMLElement); clang.inheritProto(HTMLBaseElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLBaseFontElement !== "undefined") { clang.initType(HTMLBaseFontElement, 'browser.dom.HTMLBaseFontElement', clang.Object, HTMLElement); clang.inheritProto(HTMLBaseFontElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLBodyElement !== "undefined") { clang.initType(HTMLBodyElement, 'browser.dom.HTMLBodyElement', clang.Object, HTMLElement); clang.inheritProto(HTMLBodyElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLFormElement !== "undefined") { clang.initType(HTMLFormElement, 'browser.dom.HTMLFormElement', clang.Object, HTMLElement); clang.inheritProto(HTMLFormElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLButtonElement !== "undefined") { clang.initType(HTMLButtonElement, 'browser.dom.HTMLButtonElement', clang.Object, HTMLElement); clang.inheritProto(HTMLButtonElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLCollection !== "undefined") { clang.initType(HTMLCollection, 'browser.dom.HTMLCollection', clang.Object); clang.inheritProto(HTMLCollection, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLDListElement !== "undefined") { clang.initType(HTMLDListElement, 'browser.dom.HTMLDListElement', clang.Object, HTMLElement); clang.inheritProto(HTMLDListElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLDocument !== "undefined") { clang.initType(HTMLDocument, 'browser.dom.HTMLDocument', clang.Object, Document); clang.inheritProto(HTMLDocument, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLDOMImplementation !== "undefined") { clang.initType(HTMLDOMImplementation, 'browser.dom.HTMLDOMImplementation', clang.Object, DOMImplementation); clang.inheritProto(HTMLDOMImplementation, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLDirectoryElement !== "undefined") { clang.initType(HTMLDirectoryElement, 'browser.dom.HTMLDirectoryElement', clang.Object, HTMLElement); clang.inheritProto(HTMLDirectoryElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLDivElement !== "undefined") { clang.initType(HTMLDivElement, 'browser.dom.HTMLDivElement', clang.Object, HTMLElement); clang.inheritProto(HTMLDivElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLFieldSetElement !== "undefined") { clang.initType(HTMLFieldSetElement, 'browser.dom.HTMLFieldSetElement', clang.Object, HTMLElement); clang.inheritProto(HTMLFieldSetElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLFontElement !== "undefined") { clang.initType(HTMLFontElement, 'browser.dom.HTMLFontElement', clang.Object, HTMLElement); clang.inheritProto(HTMLFontElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLFrameElement !== "undefined") { clang.initType(HTMLFrameElement, 'browser.dom.HTMLFrameElement', clang.Object, HTMLElement); clang.inheritProto(HTMLFrameElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLFrameSetElement !== "undefined") { clang.initType(HTMLFrameSetElement, 'browser.dom.HTMLFrameSetElement', clang.Object, HTMLElement); clang.inheritProto(HTMLFrameSetElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLHRElement !== "undefined") { clang.initType(HTMLHRElement, 'browser.dom.HTMLHRElement', clang.Object, HTMLElement); clang.inheritProto(HTMLHRElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLHeadElement !== "undefined") { clang.initType(HTMLHeadElement, 'browser.dom.HTMLHeadElement', clang.Object, HTMLElement); clang.inheritProto(HTMLHeadElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLHeadingElement !== "undefined") { clang.initType(HTMLHeadingElement, 'browser.dom.HTMLHeadingElement', clang.Object, HTMLElement); clang.inheritProto(HTMLHeadingElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLHtmlElement !== "undefined") { clang.initType(HTMLHtmlElement, 'browser.dom.HTMLHtmlElement', clang.Object, HTMLElement); clang.inheritProto(HTMLHtmlElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLIFrameElement !== "undefined") { clang.initType(HTMLIFrameElement, 'browser.dom.HTMLIFrameElement', clang.Object, HTMLElement); clang.inheritProto(HTMLIFrameElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLImageElement !== "undefined") { clang.initType(HTMLImageElement, 'browser.dom.HTMLImageElement', clang.Object, HTMLElement); clang.inheritProto(HTMLImageElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLInputElement !== "undefined") { clang.initType(HTMLInputElement, 'browser.dom.HTMLInputElement', clang.Object, HTMLElement); clang.inheritProto(HTMLInputElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLIsIndexElement !== "undefined") { clang.initType(HTMLIsIndexElement, 'browser.dom.HTMLIsIndexElement', clang.Object, HTMLElement); clang.inheritProto(HTMLIsIndexElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLLIElement !== "undefined") { clang.initType(HTMLLIElement, 'browser.dom.HTMLLIElement', clang.Object, HTMLElement); clang.inheritProto(HTMLLIElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLLabelElement !== "undefined") { clang.initType(HTMLLabelElement, 'browser.dom.HTMLLabelElement', clang.Object, HTMLElement); clang.inheritProto(HTMLLabelElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLLegendElement !== "undefined") { clang.initType(HTMLLegendElement, 'browser.dom.HTMLLegendElement', clang.Object, HTMLElement); clang.inheritProto(HTMLLegendElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLLinkElement !== "undefined") { clang.initType(HTMLLinkElement, 'browser.dom.HTMLLinkElement', clang.Object, HTMLElement); clang.inheritProto(HTMLLinkElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLMapElement !== "undefined") { clang.initType(HTMLMapElement, 'browser.dom.HTMLMapElement', clang.Object, HTMLElement); clang.inheritProto(HTMLMapElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLMenuElement !== "undefined") { clang.initType(HTMLMenuElement, 'browser.dom.HTMLMenuElement', clang.Object, HTMLElement); clang.inheritProto(HTMLMenuElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLMetaElement !== "undefined") { clang.initType(HTMLMetaElement, 'browser.dom.HTMLMetaElement', clang.Object, HTMLElement); clang.inheritProto(HTMLMetaElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLModElement !== "undefined") { clang.initType(HTMLModElement, 'browser.dom.HTMLModElement', clang.Object, HTMLElement); clang.inheritProto(HTMLModElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLOListElement !== "undefined") { clang.initType(HTMLOListElement, 'browser.dom.HTMLOListElement', clang.Object, HTMLElement); clang.inheritProto(HTMLOListElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLObjectElement !== "undefined") { clang.initType(HTMLObjectElement, 'browser.dom.HTMLObjectElement', clang.Object, HTMLElement); clang.inheritProto(HTMLObjectElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLOptGroupElement !== "undefined") { clang.initType(HTMLOptGroupElement, 'browser.dom.HTMLOptGroupElement', clang.Object, HTMLElement); clang.inheritProto(HTMLOptGroupElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLOptionElement !== "undefined") { clang.initType(HTMLOptionElement, 'browser.dom.HTMLOptionElement', clang.Object, HTMLElement); clang.inheritProto(HTMLOptionElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLParagraphElement !== "undefined") { clang.initType(HTMLParagraphElement, 'browser.dom.HTMLParagraphElement', clang.Object, HTMLElement); clang.inheritProto(HTMLParagraphElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLParamElement !== "undefined") { clang.initType(HTMLParamElement, 'browser.dom.HTMLParamElement', clang.Object, HTMLElement); clang.inheritProto(HTMLParamElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLPreElement !== "undefined") { clang.initType(HTMLPreElement, 'browser.dom.HTMLPreElement', clang.Object, HTMLElement); clang.inheritProto(HTMLPreElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLQuoteElement !== "undefined") { clang.initType(HTMLQuoteElement, 'browser.dom.HTMLQuoteElement', clang.Object, HTMLElement); clang.inheritProto(HTMLQuoteElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLScriptElement !== "undefined") { clang.initType(HTMLScriptElement, 'browser.dom.HTMLScriptElement', clang.Object, HTMLElement); clang.inheritProto(HTMLScriptElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLSelectElement !== "undefined") { clang.initType(HTMLSelectElement, 'browser.dom.HTMLSelectElement', clang.Object, HTMLElement); clang.inheritProto(HTMLSelectElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLStyleElement !== "undefined") { clang.initType(HTMLStyleElement, 'browser.dom.HTMLStyleElement', clang.Object, HTMLElement); clang.inheritProto(HTMLStyleElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableCaptionElement !== "undefined") { clang.initType(HTMLTableCaptionElement, 'browser.dom.HTMLTableCaptionElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableCaptionElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableCellElement !== "undefined") { clang.initType(HTMLTableCellElement, 'browser.dom.HTMLTableCellElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableCellElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableColElement !== "undefined") { clang.initType(HTMLTableColElement, 'browser.dom.HTMLTableColElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableColElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableSectionElement !== "undefined") { clang.initType(HTMLTableSectionElement, 'browser.dom.HTMLTableSectionElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableSectionElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableElement !== "undefined") { clang.initType(HTMLTableElement, 'browser.dom.HTMLTableElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTableRowElement !== "undefined") { clang.initType(HTMLTableRowElement, 'browser.dom.HTMLTableRowElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTableRowElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTextAreaElement !== "undefined") { clang.initType(HTMLTextAreaElement, 'browser.dom.HTMLTextAreaElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTextAreaElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLTitleElement !== "undefined") { clang.initType(HTMLTitleElement, 'browser.dom.HTMLTitleElement', clang.Object, HTMLElement); clang.inheritProto(HTMLTitleElement, clang.IdentifiableObject, "$IdentifiableObject$"); }
if (typeof HTMLUListElement !== "undefined") { clang.initType(HTMLUListElement, 'browser.dom.HTMLUListElement', clang.Object, HTMLElement); clang.inheritProto(HTMLUListElement, clang.IdentifiableObject, "$IdentifiableObject$"); }

    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
