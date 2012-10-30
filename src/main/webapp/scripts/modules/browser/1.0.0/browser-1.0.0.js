(function(define) {
    define(function(require, exports, module) {
    	
var clang=require('ceylon/language/0.4/ceylon.language-0.4');

var $document = function() { return document; };
exports.getDocument = $document;

function initBrowserType(nativeType, name) {
    var type = function(){};
    var args = [].slice.call(arguments, 0);
    args.unshift(type);
    clang.initExistingTypeProto.apply(this, args);
    return type;
}

if (typeof Node !== "undefined") { exports.Node=initBrowserType(Node, 'browser.dom::Node'); }
if (typeof Element !== "undefined") { exports.Element=initBrowserType(Element, 'browser.dom::Element', exports.Node); }
if (typeof TypeInfo !== "undefined") { exports.TypeInfo=initBrowserType(TypeInfo, 'browser.dom::TypeInfo'); }
if (typeof Attr !== "undefined") { exports.Attr=initBrowserType(Attr, 'browser.dom::Attr', exports.Node); }
if (typeof CharacterData !== "undefined") { exports.CharacterData=initBrowserType(CharacterData, 'browser.dom::CharacterData', exports.Node); }
if (typeof Text !== "undefined") { exports.Text=initBrowserType(Text, 'browser.dom::Text', exports.CharacterData); }
if (typeof CDATASection !== "undefined") { exports.CDATASection=initBrowserType(CDATASection, 'browser.dom::CDATASection', exports.Text); }
if (typeof Comment !== "undefined") { exports.Comment=initBrowserType(Comment, 'browser.dom::Comment', exports.CharacterData); }
if (typeof DOMConfiguration !== "undefined") { exports.DOMConfiguration=initBrowserType(DOMConfiguration, 'browser.dom::DOMConfiguration'); }
if (typeof DOMError !== "undefined") { exports.DOMError=initBrowserType(DOMError, 'browser.dom::DOMError'); }
if (typeof DOMErrorHandler !== "undefined") { exports.DOMErrorHandler=initBrowserType(DOMErrorHandler, 'browser.dom::DOMErrorHandler'); }
if (typeof DOMException !== "undefined") { exports.DOMException=initBrowserType(DOMException, 'browser.dom::DOMException'); }
if (typeof DOMImplementation !== "undefined") { exports.DOMImplementation=initBrowserType(DOMImplementation, 'browser.dom::DOMImplementation'); }
if (typeof DOMImplementationList !== "undefined") { exports.DOMImplementationList=initBrowserType(DOMImplementationList, 'browser.dom::DOMImplementationList'); }
if (typeof DOMImplementationSource !== "undefined") { exports.DOMImplementationSource=initBrowserType(DOMImplementationSource, 'browser.dom::DOMImplementationSource'); }
if (typeof DOMLocator !== "undefined") { exports.DOMLocator=initBrowserType(DOMLocator, 'browser.dom::DOMLocator'); }
if (typeof DOMStringList !== "undefined") { exports.DOMStringList=initBrowserType(DOMStringList, 'browser.dom::DOMStringList'); }
if (typeof DocumentType !== "undefined") { exports.DocumentType=initBrowserType(DocumentType, 'browser.dom::DocumentType', exports.Node); }
if (typeof DocumentFragment !== "undefined") { exports.DocumentFragment=initBrowserType(DocumentFragment, 'browser.dom::DocumentFragment', exports.Node); }
if (typeof ProcessingInstruction !== "undefined") { exports.ProcessingInstruction=initBrowserType(ProcessingInstruction, 'browser.dom::ProcessingInstruction', exports.Node); }
if (typeof EntityReference !== "undefined") { exports.EntityReference=initBrowserType(EntityReference, 'browser.dom::EntityReference', exports.Node); }
if (typeof NodeList !== "undefined") { exports.NodeList=initBrowserType(NodeList, 'browser.dom::NodeList'); }
if (typeof Document !== "undefined") { exports.Document=initBrowserType(Document, 'browser.dom::Document', exports.Node); }
if (typeof NamedNodeMap !== "undefined") { exports.NamedNodeMap=initBrowserType(NamedNodeMap, 'browser.dom::NamedNodeMap'); }
if (typeof Entity !== "undefined") { exports.Entity=initBrowserType(Entity, 'browser.dom::Entity', exports.Node); }
if (typeof NameList !== "undefined") { exports.NameList=initBrowserType(NameList, 'browser.dom::NameList'); }
if (typeof Notation !== "undefined") { exports.Notation=initBrowserType(Notation, 'browser.dom::Notation', exports.Node); }
if (typeof UserDataHandler !== "undefined") { exports.UserDataHandler=initBrowserType(UserDataHandler, 'browser.dom::UserDataHandler'); }
if (typeof HTMLElement !== "undefined") { exports.HTMLElement=initBrowserType(HTMLElement, 'browser.dom::HTMLElement', exports.Element); }
if (typeof HTMLAnchorElement !== "undefined") { exports.HTMLAnchorElement=initBrowserType(HTMLAnchorElement, 'browser.dom::HTMLAnchorElement', exports.HTMLElement); }
if (typeof HTMLAppletElement !== "undefined") { exports.HTMLAppletElement=initBrowserType(HTMLAppletElement, 'browser.dom::HTMLAppletElement', exports.HTMLElement); }
if (typeof HTMLAreaElement !== "undefined") { exports.HTMLAreaElement=initBrowserType(HTMLAreaElement, 'browser.dom::HTMLAreaElement', exports.HTMLElement); }
if (typeof HTMLBRElement !== "undefined") { exports.HTMLBRElement=initBrowserType(HTMLBRElement, 'browser.dom::HTMLBRElement', exports.HTMLElement); }
if (typeof HTMLBaseElement !== "undefined") { exports.HTMLBaseElement=initBrowserType(HTMLBaseElement, 'browser.dom::HTMLBaseElement', exports.HTMLElement); }
if (typeof HTMLBaseFontElement !== "undefined") { exports.HTMLBaseFontElement=initBrowserType(HTMLBaseFontElement, 'browser.dom::HTMLBaseFontElement', exports.HTMLElement); }
if (typeof HTMLBodyElement !== "undefined") { exports.HTMLBodyElement=initBrowserType(HTMLBodyElement, 'browser.dom::HTMLBodyElement', exports.HTMLElement); }
if (typeof HTMLFormElement !== "undefined") { exports.HTMLFormElement=initBrowserType(HTMLFormElement, 'browser.dom::HTMLFormElement', exports.HTMLElement); }
if (typeof HTMLButtonElement !== "undefined") { exports.HTMLButtonElement=initBrowserType(HTMLButtonElement, 'browser.dom::HTMLButtonElement', exports.HTMLElement); }
if (typeof HTMLCollection !== "undefined") { exports.HTMLCollection=initBrowserType(HTMLCollection, 'browser.dom::HTMLCollection'); }
if (typeof HTMLDListElement !== "undefined") { exports.HTMLDListElement=initBrowserType(HTMLDListElement, 'browser.dom::HTMLDListElement', exports.HTMLElement); }
if (typeof HTMLDocument !== "undefined") { exports.HTMLDocument=initBrowserType(HTMLDocument, 'browser.dom::HTMLDocument', exports.Document); }
if (typeof HTMLDOMImplementation !== "undefined") { exports.HTMLDOMImplementation=initBrowserType(HTMLDOMImplementation, 'browser.dom::HTMLDOMImplementation', exports.DOMImplementation); }
if (typeof HTMLDirectoryElement !== "undefined") { exports.HTMLDirectoryElement=initBrowserType(HTMLDirectoryElement, 'browser.dom::HTMLDirectoryElement', exports.HTMLElement); }
if (typeof HTMLDivElement !== "undefined") { exports.HTMLDivElement=initBrowserType(HTMLDivElement, 'browser.dom::HTMLDivElement', exports.HTMLElement); }
if (typeof HTMLFieldSetElement !== "undefined") { exports.HTMLFieldSetElement=initBrowserType(HTMLFieldSetElement, 'browser.dom::HTMLFieldSetElement', exports.HTMLElement); }
if (typeof HTMLFontElement !== "undefined") { exports.HTMLFontElement=initBrowserType(HTMLFontElement, 'browser.dom::HTMLFontElement', exports.HTMLElement); }
if (typeof HTMLFrameElement !== "undefined") { exports.HTMLFrameElement=initBrowserType(HTMLFrameElement, 'browser.dom::HTMLFrameElement', exports.HTMLElement); }
if (typeof HTMLFrameSetElement !== "undefined") { exports.HTMLFrameSetElement=initBrowserType(HTMLFrameSetElement, 'browser.dom::HTMLFrameSetElement', exports.HTMLElement); }
if (typeof HTMLHRElement !== "undefined") { exports.HTMLHRElement=initBrowserType(HTMLHRElement, 'browser.dom::HTMLHRElement', exports.HTMLElement); }
if (typeof HTMLHeadElement !== "undefined") { exports.HTMLHeadElement=initBrowserType(HTMLHeadElement, 'browser.dom::HTMLHeadElement', exports.HTMLElement); }
if (typeof HTMLHeadingElement !== "undefined") { exports.HTMLHeadingElement=initBrowserType(HTMLHeadingElement, 'browser.dom::HTMLHeadingElement', exports.HTMLElement); }
if (typeof HTMLHtmlElement !== "undefined") { exports.HTMLHtmlElement=initBrowserType(HTMLHtmlElement, 'browser.dom::HTMLHtmlElement', exports.HTMLElement); }
if (typeof HTMLIFrameElement !== "undefined") { exports.HTMLIFrameElement=initBrowserType(HTMLIFrameElement, 'browser.dom::HTMLIFrameElement', exports.HTMLElement); }
if (typeof HTMLImageElement !== "undefined") { exports.HTMLImageElement=initBrowserType(HTMLImageElement, 'browser.dom::HTMLImageElement', exports.HTMLElement); }
if (typeof HTMLInputElement !== "undefined") { exports.HTMLInputElement=initBrowserType(HTMLInputElement, 'browser.dom::HTMLInputElement', exports.HTMLElement); }
if (typeof HTMLIsIndexElement !== "undefined") { exports.HTMLIsIndexElement=initBrowserType(HTMLIsIndexElement, 'browser.dom::HTMLIsIndexElement', exports.HTMLElement); }
if (typeof HTMLLIElement !== "undefined") { exports.HTMLLIElement=initBrowserType(HTMLLIElement, 'browser.dom::HTMLLIElement', exports.HTMLElement); }
if (typeof HTMLLabelElement !== "undefined") { exports.HTMLLabelElement=initBrowserType(HTMLLabelElement, 'browser.dom::HTMLLabelElement', exports.HTMLElement); }
if (typeof HTMLLegendElement !== "undefined") { exports.HTMLLegendElement=initBrowserType(HTMLLegendElement, 'browser.dom::HTMLLegendElement', exports.HTMLElement); }
if (typeof HTMLLinkElement !== "undefined") { exports.HTMLLinkElement=initBrowserType(HTMLLinkElement, 'browser.dom::HTMLLinkElement', exports.HTMLElement); }
if (typeof HTMLMapElement !== "undefined") { exports.HTMLMapElement=initBrowserType(HTMLMapElement, 'browser.dom::HTMLMapElement', exports.HTMLElement); }
if (typeof HTMLMenuElement !== "undefined") { exports.HTMLMenuElement=initBrowserType(HTMLMenuElement, 'browser.dom::HTMLMenuElement', exports.HTMLElement); }
if (typeof HTMLMetaElement !== "undefined") { exports.HTMLMetaElement=initBrowserType(HTMLMetaElement, 'browser.dom::HTMLMetaElement', exports.HTMLElement); }
if (typeof HTMLModElement !== "undefined") { exports.HTMLModElement=initBrowserType(HTMLModElement, 'browser.dom::HTMLModElement', exports.HTMLElement); }
if (typeof HTMLOListElement !== "undefined") { exports.HTMLOListElement=initBrowserType(HTMLOListElement, 'browser.dom::HTMLOListElement', exports.HTMLElement); }
if (typeof HTMLObjectElement !== "undefined") { exports.HTMLObjectElement=initBrowserType(HTMLObjectElement, 'browser.dom::HTMLObjectElement', exports.HTMLElement); }
if (typeof HTMLOptGroupElement !== "undefined") { exports.HTMLOptGroupElement=initBrowserType(HTMLOptGroupElement, 'browser.dom::HTMLOptGroupElement', exports.HTMLElement); }
if (typeof HTMLOptionElement !== "undefined") { exports.HTMLOptionElement=initBrowserType(HTMLOptionElement, 'browser.dom::HTMLOptionElement', exports.HTMLElement); }
if (typeof HTMLParagraphElement !== "undefined") { exports.HTMLParagraphElement=initBrowserType(HTMLParagraphElement, 'browser.dom::HTMLParagraphElement', exports.HTMLElement); }
if (typeof HTMLParamElement !== "undefined") { exports.HTMLParamElement=initBrowserType(HTMLParamElement, 'browser.dom::HTMLParamElement', exports.HTMLElement); }
if (typeof HTMLPreElement !== "undefined") { exports.HTMLPreElement=initBrowserType(HTMLPreElement, 'browser.dom::HTMLPreElement', exports.HTMLElement); }
if (typeof HTMLQuoteElement !== "undefined") { exports.HTMLQuoteElement=initBrowserType(HTMLQuoteElement, 'browser.dom::HTMLQuoteElement', exports.HTMLElement); }
if (typeof HTMLScriptElement !== "undefined") { exports.HTMLScriptElement=initBrowserType(HTMLScriptElement, 'browser.dom::HTMLScriptElement', exports.HTMLElement); }
if (typeof HTMLSelectElement !== "undefined") { exports.HTMLSelectElement=initBrowserType(HTMLSelectElement, 'browser.dom::HTMLSelectElement', exports.HTMLElement); }
if (typeof HTMLStyleElement !== "undefined") { exports.HTMLStyleElement=initBrowserType(HTMLStyleElement, 'browser.dom::HTMLStyleElement', exports.HTMLElement); }
if (typeof HTMLTableCaptionElement !== "undefined") { exports.HTMLTableCaptionElement=initBrowserType(HTMLTableCaptionElement, 'browser.dom::HTMLTableCaptionElement', exports.HTMLElement); }
if (typeof HTMLTableCellElement !== "undefined") { exports.HTMLTableCellElement=initBrowserType(HTMLTableCellElement, 'browser.dom::HTMLTableCellElement', exports.HTMLElement); }
if (typeof HTMLTableColElement !== "undefined") { exports.HTMLTableColElement=initBrowserType(HTMLTableColElement, 'browser.dom::HTMLTableColElement', exports.HTMLElement); }
if (typeof HTMLTableSectionElement !== "undefined") { exports.HTMLTableSectionElement=initBrowserType(HTMLTableSectionElement, 'browser.dom::HTMLTableSectionElement', exports.HTMLElement); }
if (typeof HTMLTableElement !== "undefined") { exports.HTMLTableElement=initBrowserType(HTMLTableElement, 'browser.dom::HTMLTableElement', exports.HTMLElement); }
if (typeof HTMLTableRowElement !== "undefined") { exports.HTMLTableRowElement=initBrowserType(HTMLTableRowElement, 'browser.dom::HTMLTableRowElement', exports.HTMLElement); }
if (typeof HTMLTextAreaElement !== "undefined") { exports.HTMLTextAreaElement=initBrowserType(HTMLTextAreaElement, 'browser.dom::HTMLTextAreaElement', exports.HTMLElement); }
if (typeof HTMLTitleElement !== "undefined") { exports.HTMLTitleElement=initBrowserType(HTMLTitleElement, 'browser.dom::HTMLTitleElement', exports.HTMLElement); }
if (typeof HTMLUListElement !== "undefined") { exports.HTMLUListElement=initBrowserType(HTMLUListElement, 'browser.dom::HTMLUListElement', exports.HTMLElement); }

    });
}(typeof define==='function' && define.amd ? define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
