/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Apache License, Version 2.0 which is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: Apache-2.0 
 ********************************************************************************/
shared Null nativejs() { return null; }
shared nativejs interface Node {
    shared formal Integer \iATTRIBUTE_NODE;
    shared formal Integer \iCDATA_SECTION_NODE;
    shared formal Integer \iCOMMENT_NODE;
    shared formal Integer \iDOCUMENT_FRAGMENT_NODE;
    shared formal Integer \iDOCUMENT_NODE;
    shared formal Integer \iDOCUMENT_POSITION_CONTAINED_BY;
    shared formal Integer \iDOCUMENT_POSITION_CONTAINS;
    shared formal Integer \iDOCUMENT_POSITION_DISCONNECTED;
    shared formal Integer \iDOCUMENT_POSITION_FOLLOWING;
    shared formal Integer \iDOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    shared formal Integer \iDOCUMENT_POSITION_PRECEDING;
    shared formal Integer \iDOCUMENT_TYPE_NODE;
    shared formal Integer \iELEMENT_NODE;
    shared formal Integer \iENTITY_NODE;
    shared formal Integer \iENTITY_REFERENCE_NODE;
    shared formal Integer \iNOTATION_NODE;
    shared formal Integer \iPROCESSING_INSTRUCTION_NODE;
    shared formal Integer \iTEXT_NODE;
    shared formal Node appendChild(Node? node0);
    shared formal NamedNodeMap attributes;
    shared formal String baseURI;
    shared formal NodeList childNodes;
    shared formal Node cloneNode(Boolean boolean0);
    shared formal Integer compareDocumentPosition(Node? node0);
    shared formal Node firstChild;
    shared formal Object getFeature(String? string0, String? string1);
    shared formal Object getUserData(String? string0);
    shared formal Boolean hasAttributes();
    shared formal Boolean hasChildNodes();
    shared formal Node insertBefore(Node? node0, Node? node1);
    shared formal Boolean isDefaultNamespace(String? string0);
    shared formal Boolean isEqualNode(Node? node0);
    shared formal Boolean isSameNode(Node? node0);
    shared formal Boolean isSupported(String? string0, String? string1);
    shared formal Node lastChild;
    shared formal String localName;
    shared formal String lookupNamespaceURI(String? string0);
    shared formal String lookupPrefix(String? string0);
    shared formal String namespaceURI;
    shared formal Node nextSibling;
    shared formal String nodeName;
    shared formal Integer nodeType;
    shared formal variable String nodeValue;
    shared formal void normalize();
    shared formal Document ownerDocument;
    shared formal Node parentNode;
    shared formal variable String prefix;
    shared formal Node previousSibling;
    shared formal Node removeChild(Node? node0);
    shared formal Node replaceChild(Node? node0, Node? node1);
    shared formal Object setUserData(String? string0, Object? object1, UserDataHandler? userDataHandler2);
    shared formal variable String textContent;
}
shared nativejs interface Element satisfies Node {
    shared formal String getAttribute(String? string0);
    shared formal String getAttributeNS(String? string0, String? string1);
    shared formal Attr getAttributeNode(String? string0);
    shared formal Attr getAttributeNodeNS(String? string0, String? string1);
    shared formal NodeList getElementsByTagName(String? string0);
    shared formal NodeList getElementsByTagNameNS(String? string0, String? string1);
    shared formal Boolean hasAttribute(String? string0);
    shared formal Boolean hasAttributeNS(String? string0, String? string1);
    shared formal void removeAttribute(String? string0);
    shared formal void removeAttributeNS(String? string0, String? string1);
    shared formal Attr removeAttributeNode(Attr? attr0);
    shared formal TypeInfo schemaTypeInfo;
    shared formal void setAttribute(String? string0, String? string1);
    shared formal void setAttributeNS(String? string0, String? string1, String? string2);
    shared formal Attr setAttributeNode(Attr? attr0);
    shared formal Attr setAttributeNodeNS(Attr? attr0);
    shared formal void setIdAttribute(String? string0, Boolean boolean1);
    shared formal void setIdAttributeNS(String? string0, String? string1, Boolean boolean2);
    shared formal void setIdAttributeNode(Attr? attr0, Boolean boolean1);
    shared formal String tagName;
}
shared nativejs interface TypeInfo {
    shared formal Integer \iDERIVATION_EXTENSION;
    shared formal Integer \iDERIVATION_LIST;
    shared formal Integer \iDERIVATION_RESTRICTION;
    shared formal Integer \iDERIVATION_UNION;
    shared formal Boolean isDerivedFrom(String? string0, String? string1, Integer integer2);
    shared formal String typeName;
    shared formal String typeNamespace;
}
shared nativejs interface Attr satisfies Node {
    shared formal Boolean id;
    shared formal String name;
    shared formal Element ownerElement;
    shared formal TypeInfo schemaTypeInfo;
    shared formal Boolean specified;
    shared formal variable String \ivalue;
}
shared nativejs interface CharacterData satisfies Node {
    shared formal void appendData(String? string0);
    shared formal variable String data;
    shared formal void deleteData(Integer integer0, Integer integer1);
    shared formal void insertData(Integer integer0, String? string1);
    shared formal Integer length;
    shared formal void replaceData(Integer integer0, Integer integer1, String? string2);
    shared formal String substringData(Integer integer0, Integer integer1);
}
shared nativejs interface Text satisfies CharacterData {
    shared formal Boolean elementContentWhitespace;
    shared formal Text replaceWholeText(String? string0);
    shared formal Text splitText(Integer integer0);
    shared formal String wholeText;
}
shared nativejs interface CDATASection satisfies Text {
}
shared nativejs interface Comment satisfies CharacterData {
}
shared nativejs interface DOMConfiguration {
    shared formal Boolean canSetParameter(String? string0, Object? object1);
    shared formal Object getParameter(String? string0);
    shared formal DOMStringList parameterNames;
    shared formal void setParameter(String? string0, Object? object1);
}
shared nativejs interface DOMError {
    shared formal Integer \iSEVERITY_ERROR;
    shared formal Integer \iSEVERITY_FATAL_ERROR;
    shared formal Integer \iSEVERITY_WARNING;
    shared formal DOMLocator location;
    shared formal String message;
    shared formal Object relatedData;
    shared formal Object relatedException;
    shared formal Integer severity;
    shared formal String type;
}
shared nativejs interface DOMErrorHandler {
    shared formal Boolean handleError(DOMError? dOMError0);
}
shared nativejs interface DOMException {
    shared formal Integer \iDOMSTRING_SIZE_ERR;
    shared formal Integer \iHIERARCHY_REQUEST_ERR;
    shared formal Integer \iINDEX_SIZE_ERR;
    shared formal Integer \iINUSE_ATTRIBUTE_ERR;
    shared formal Integer \iINVALID_ACCESS_ERR;
    shared formal Integer \iINVALID_CHARACTER_ERR;
    shared formal Integer \iINVALID_MODIFICATION_ERR;
    shared formal Integer \iINVALID_STATE_ERR;
    shared formal Integer \iNAMESPACE_ERR;
    shared formal Integer \iNOT_FOUND_ERR;
    shared formal Integer \iNOT_SUPPORTED_ERR;
    shared formal Integer \iNO_DATA_ALLOWED_ERR;
    shared formal Integer \iNO_MODIFICATION_ALLOWED_ERR;
    shared formal Integer \iSYNTAX_ERR;
    shared formal Integer \iTYPE_MISMATCH_ERR;
    shared formal Integer \iVALIDATION_ERR;
    shared formal Integer \iWRONG_DOCUMENT_ERR;
    shared formal variable Integer code;
}
shared nativejs interface DOMImplementation {
    shared formal Document createDocument(String? string0, String? string1, DocumentType? documentType2);
    shared formal DocumentType createDocumentType(String? string0, String? string1, String? string2);
    shared formal Object getFeature(String? string0, String? string1);
    shared formal Boolean hasFeature(String? string0, String? string1);
}
shared nativejs interface DOMImplementationList {
    shared formal DOMImplementation item(Integer integer0);
    shared formal Integer length;
}
shared nativejs interface DOMImplementationSource {
    shared formal DOMImplementation getDOMImplementation(String? string0);
    shared formal DOMImplementationList getDOMImplementationList(String? string0);
}
shared nativejs interface DOMLocator {
    shared formal Integer byteOffset;
    shared formal Integer columnNumber;
    shared formal Integer lineNumber;
    shared formal Node relatedNode;
    shared formal String uri;
    shared formal Integer utf16Offset;
}
shared nativejs interface DOMStringList {
    shared formal Boolean contains(String? string0);
    shared formal String item(Integer integer0);
    shared formal Integer length;
}
shared nativejs interface DocumentType satisfies Node {
    shared formal NamedNodeMap entities;
    shared formal String internalSubset;
    shared formal String name;
    shared formal NamedNodeMap notations;
    shared formal String publicId;
    shared formal String systemId;
}
shared nativejs interface DocumentFragment satisfies Node {
}
shared nativejs interface ProcessingInstruction satisfies Node {
    shared formal variable String data;
    shared formal String target;
}
shared nativejs interface EntityReference satisfies Node {
}
shared nativejs interface NodeList {
    shared formal Node item(Integer integer0);
    shared formal Integer length;
}
shared nativejs interface Document satisfies Node {
    shared formal Node adoptNode(Node? node0);
    shared formal Attr createAttribute(String? string0);
    shared formal Attr createAttributeNS(String? string0, String? string1);
    shared formal CDATASection createCDATASection(String? string0);
    shared formal Comment createComment(String? string0);
    shared formal DocumentFragment createDocumentFragment();
    shared formal Element createElement(String? string0);
    shared formal Element createElementNS(String? string0, String? string1);
    shared formal EntityReference createEntityReference(String? string0);
    shared formal ProcessingInstruction createProcessingInstruction(String? string0, String? string1);
    shared formal Text createTextNode(String? string0);
    shared formal DocumentType doctype;
    shared formal Element documentElement;
    shared formal variable String documentURI;
    shared formal DOMConfiguration domConfig;
    shared formal Element getElementById(String? string0);
    shared formal NodeList getElementsByTagName(String? string0);
    shared formal NodeList getElementsByTagNameNS(String? string0, String? string1);
    shared formal DOMImplementation implementation;
    shared formal Node importNode(Node? node0, Boolean boolean1);
    shared formal String inputEncoding;
    shared formal void normalizeDocument();
    shared formal Node renameNode(Node? node0, String? string1, String? string2);
    shared formal variable Boolean strictErrorChecking;
    shared formal String xmlEncoding;
    shared formal variable Boolean xmlStandalone;
    shared formal variable String xmlVersion;
}
shared nativejs interface NamedNodeMap {
    shared formal Node getNamedItem(String? string0);
    shared formal Node getNamedItemNS(String? string0, String? string1);
    shared formal Node item(Integer integer0);
    shared formal Integer length;
    shared formal Node removeNamedItem(String? string0);
    shared formal Node removeNamedItemNS(String? string0, String? string1);
    shared formal Node setNamedItem(Node? node0);
    shared formal Node setNamedItemNS(Node? node0);
}
shared nativejs interface Entity satisfies Node {
    shared formal String inputEncoding;
    shared formal String notationName;
    shared formal String publicId;
    shared formal String systemId;
    shared formal String xmlEncoding;
    shared formal String xmlVersion;
}
shared nativejs interface NameList {
    shared formal Boolean contains(String? string0);
    shared formal Boolean containsNS(String? string0, String? string1);
    shared formal String getName(Integer integer0);
    shared formal String getNamespaceURI(Integer integer0);
    shared formal Integer length;
}
shared nativejs interface Notation satisfies Node {
    shared formal String publicId;
    shared formal String systemId;
}
shared nativejs interface UserDataHandler {
    shared formal Integer \iNODE_ADOPTED;
    shared formal Integer \iNODE_CLONED;
    shared formal Integer \iNODE_DELETED;
    shared formal Integer \iNODE_IMPORTED;
    shared formal Integer \iNODE_RENAMED;
    shared formal void handle(Integer integer0, String? string1, Object? object2, Node? node3, Node? node4);
}
shared nativejs interface HTMLElement satisfies Element {
    shared formal variable String className;
    shared formal variable String dir;
    shared formal variable String id;
    shared formal variable String lang;
    shared formal variable String title;
}
shared nativejs interface HTMLAnchorElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal void blur();
    shared formal variable String charset;
    shared formal variable String coords;
    shared formal void focus();
    shared formal variable String href;
    shared formal variable String hreflang;
    shared formal variable String name;
    shared formal variable String rel;
    shared formal variable String rev;
    shared formal variable String shape;
    shared formal variable Integer tabIndex;
    shared formal variable String target;
    shared formal variable String type;
}
shared nativejs interface HTMLAppletElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String alt;
    shared formal variable String archive;
    shared formal variable String code;
    shared formal variable String codeBase;
    shared formal variable String height;
    shared formal variable String hspace;
    shared formal variable String name;
    shared formal variable String \iobject;
    shared formal variable String vspace;
    shared formal variable String width;
}
shared nativejs interface HTMLAreaElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal variable String alt;
    shared formal variable String coords;
    shared formal variable String href;
    shared formal variable Boolean noHref;
    shared formal variable String shape;
    shared formal variable Integer tabIndex;
    shared formal variable String target;
}
shared nativejs interface HTMLBRElement satisfies HTMLElement {
    shared formal variable String clear;
}
shared nativejs interface HTMLBaseElement satisfies HTMLElement {
    shared formal variable String href;
    shared formal variable String target;
}
shared nativejs interface HTMLBaseFontElement satisfies HTMLElement {
    shared formal variable String color;
    shared formal variable String face;
    shared formal variable String size;
}
shared nativejs interface HTMLBodyElement satisfies HTMLElement {
    shared formal variable String aLink;
    shared formal variable String background;
    shared formal variable String bgColor;
    shared formal variable String link;
    shared formal variable String text;
    shared formal variable String vLink;
}
shared nativejs interface HTMLFormElement satisfies HTMLElement {
    shared formal variable String acceptCharset;
    shared formal variable String action;
    shared formal HTMLCollection elements;
    shared formal variable String enctype;
    shared formal Integer length;
    shared formal variable String method;
    shared formal variable String name;
    shared formal void reset();
    shared formal void submit();
    shared formal variable String target;
}
shared nativejs interface HTMLButtonElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal variable Boolean disabled;
    shared formal HTMLFormElement form;
    shared formal variable String name;
    shared formal variable Integer tabIndex;
    shared formal String type;
    shared formal variable String \ivalue;
}
shared nativejs interface HTMLCollection {
    shared formal Node item(Integer integer0);
    shared formal Integer length;
    shared formal Node namedItem(String? string0);
}
shared nativejs interface HTMLDListElement satisfies HTMLElement {
    shared formal variable Boolean compact;
}
shared nativejs interface HTMLDocument satisfies Document {
    shared formal HTMLCollection anchors;
    shared formal HTMLCollection applets;
    shared formal variable HTMLElement body;
    shared formal void close();
    shared formal variable String cookie;
    shared formal String domain;
    shared formal HTMLCollection forms;
    shared formal NodeList getElementsByName(String? string0);
    shared formal HTMLCollection images;
    shared formal HTMLCollection links;
    shared formal void open();
    shared formal String referrer;
    shared formal variable String title;
    shared formal String url;
    shared formal void write(String? string0);
    shared formal void writeln(String? string0);
}
shared nativejs interface HTMLDOMImplementation satisfies DOMImplementation {
    shared formal HTMLDocument createHTMLDocument(String? string0);
}
shared nativejs interface HTMLDirectoryElement satisfies HTMLElement {
    shared formal variable Boolean compact;
}
shared nativejs interface HTMLDivElement satisfies HTMLElement {
    shared formal variable String align;
}
shared nativejs interface HTMLFieldSetElement satisfies HTMLElement {
    shared formal HTMLFormElement form;
}
shared nativejs interface HTMLFontElement satisfies HTMLElement {
    shared formal variable String color;
    shared formal variable String face;
    shared formal variable String size;
}
shared nativejs interface HTMLFrameElement satisfies HTMLElement {
    shared formal Document contentDocument;
    shared formal variable String frameBorder;
    shared formal variable String longDesc;
    shared formal variable String marginHeight;
    shared formal variable String marginWidth;
    shared formal variable String name;
    shared formal variable Boolean noResize;
    shared formal variable String scrolling;
    shared formal variable String src;
}
shared nativejs interface HTMLFrameSetElement satisfies HTMLElement {
    shared formal variable String cols;
    shared formal variable String rows;
}
shared nativejs interface HTMLHRElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable Boolean noShade;
    shared formal variable String size;
    shared formal variable String width;
}
shared nativejs interface HTMLHeadElement satisfies HTMLElement {
    shared formal variable String profile;
}
shared nativejs interface HTMLHeadingElement satisfies HTMLElement {
    shared formal variable String align;
}
shared nativejs interface HTMLHtmlElement satisfies HTMLElement {
    shared formal variable String version;
}
shared nativejs interface HTMLIFrameElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal Document contentDocument;
    shared formal variable String frameBorder;
    shared formal variable String height;
    shared formal variable String longDesc;
    shared formal variable String marginHeight;
    shared formal variable String marginWidth;
    shared formal variable String name;
    shared formal variable String scrolling;
    shared formal variable String src;
    shared formal variable String width;
}
shared nativejs interface HTMLImageElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String alt;
    shared formal variable String border;
    shared formal variable String height;
    shared formal variable String hspace;
    shared formal variable Boolean isMap;
    shared formal variable String longDesc;
    shared formal variable String lowSrc;
    shared formal variable String name;
    shared formal variable String src;
    shared formal variable String useMap;
    shared formal variable String vspace;
    shared formal variable String width;
}
shared nativejs interface HTMLInputElement satisfies HTMLElement {
    shared formal variable String accept;
    shared formal variable String accessKey;
    shared formal variable String align;
    shared formal variable String alt;
    shared formal void blur();
    shared formal variable Boolean checked;
    shared formal void click();
    shared formal variable Boolean defaultChecked;
    shared formal variable String defaultValue;
    shared formal variable Boolean disabled;
    shared formal void focus();
    shared formal HTMLFormElement form;
    shared formal variable Integer maxLength;
    shared formal variable String name;
    shared formal variable Boolean readOnly;
    shared formal void select();
    shared formal variable String size;
    shared formal variable String src;
    shared formal variable Integer tabIndex;
    shared formal String type;
    shared formal variable String useMap;
    shared formal variable String \ivalue;
}
shared nativejs interface HTMLIsIndexElement satisfies HTMLElement {
    shared formal HTMLFormElement form;
    shared formal variable String prompt;
}
shared nativejs interface HTMLLIElement satisfies HTMLElement {
    shared formal variable String type;
    shared formal variable Integer \ivalue;
}
shared nativejs interface HTMLLabelElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal HTMLFormElement form;
    shared formal variable String htmlFor;
}
shared nativejs interface HTMLLegendElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal variable String align;
    shared formal HTMLFormElement form;
}
shared nativejs interface HTMLLinkElement satisfies HTMLElement {
    shared formal variable String charset;
    shared formal variable Boolean disabled;
    shared formal variable String href;
    shared formal variable String hreflang;
    shared formal variable String media;
    shared formal variable String rel;
    shared formal variable String rev;
    shared formal variable String target;
    shared formal variable String type;
}
shared nativejs interface HTMLMapElement satisfies HTMLElement {
    shared formal HTMLCollection areas;
    shared formal variable String name;
}
shared nativejs interface HTMLMenuElement satisfies HTMLElement {
    shared formal variable Boolean compact;
}
shared nativejs interface HTMLMetaElement satisfies HTMLElement {
    shared formal variable String content;
    shared formal variable String httpEquiv;
    shared formal variable String name;
    shared formal variable String scheme;
}
shared nativejs interface HTMLModElement satisfies HTMLElement {
    shared formal variable String cite;
    shared formal variable String dateTime;
}
shared nativejs interface HTMLOListElement satisfies HTMLElement {
    shared formal variable Boolean compact;
    shared formal variable Integer start;
    shared formal variable String type;
}
shared nativejs interface HTMLObjectElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String archive;
    shared formal variable String border;
    shared formal variable String code;
    shared formal variable String codeBase;
    shared formal variable String codeType;
    shared formal Document contentDocument;
    shared formal variable String data;
    shared formal variable Boolean declare;
    shared formal HTMLFormElement form;
    shared formal variable String height;
    shared formal variable String hspace;
    shared formal variable String name;
    shared formal variable String standby;
    shared formal variable Integer tabIndex;
    shared formal variable String type;
    shared formal variable String useMap;
    shared formal variable String vspace;
    shared formal variable String width;
}
shared nativejs interface HTMLOptGroupElement satisfies HTMLElement {
    shared formal variable Boolean disabled;
    shared formal variable String label;
}
shared nativejs interface HTMLOptionElement satisfies HTMLElement {
    shared formal variable Boolean defaultSelected;
    shared formal variable Boolean disabled;
    shared formal HTMLFormElement form;
    shared formal Integer index;
    shared formal variable String label;
    shared formal variable Boolean selected;
    shared formal String text;
    shared formal variable String \ivalue;
}
shared nativejs interface HTMLParagraphElement satisfies HTMLElement {
    shared formal variable String align;
}
shared nativejs interface HTMLParamElement satisfies HTMLElement {
    shared formal variable String name;
    shared formal variable String type;
    shared formal variable String \ivalue;
    shared formal variable String valueType;
}
shared nativejs interface HTMLPreElement satisfies HTMLElement {
    shared formal variable Integer width;
}
shared nativejs interface HTMLQuoteElement satisfies HTMLElement {
    shared formal variable String cite;
}
shared nativejs interface HTMLScriptElement satisfies HTMLElement {
    shared formal variable String charset;
    shared formal variable Boolean defer;
    shared formal variable String event;
    shared formal variable String htmlFor;
    shared formal variable String src;
    shared formal variable String text;
    shared formal variable String type;
}
shared nativejs interface HTMLSelectElement satisfies HTMLElement {
    shared formal void add(HTMLElement? hTMLElement0, HTMLElement? hTMLElement1);
    shared formal void blur();
    shared formal variable Boolean disabled;
    shared formal void focus();
    shared formal HTMLFormElement form;
    shared formal Integer length;
    shared formal variable Boolean multiple;
    shared formal variable String name;
    shared formal HTMLCollection options;
    shared formal void remove(Integer integer0);
    shared formal variable Integer selectedIndex;
    shared formal variable Integer size;
    shared formal variable Integer tabIndex;
    shared formal String type;
    shared formal variable String \ivalue;
}
shared nativejs interface HTMLStyleElement satisfies HTMLElement {
    shared formal variable Boolean disabled;
    shared formal variable String media;
    shared formal variable String type;
}
shared nativejs interface HTMLTableCaptionElement satisfies HTMLElement {
    shared formal variable String align;
}
shared nativejs interface HTMLTableCellElement satisfies HTMLElement {
    shared formal variable String abbr;
    shared formal variable String align;
    shared formal variable String axis;
    shared formal variable String bgColor;
    shared formal Integer cellIndex;
    shared formal variable String ch;
    shared formal variable String chOff;
    shared formal variable Integer colSpan;
    shared formal variable String headers;
    shared formal variable String height;
    shared formal variable Boolean noWrap;
    shared formal variable Integer rowSpan;
    shared formal variable String scope;
    shared formal variable String vAlign;
    shared formal variable String width;
}
shared nativejs interface HTMLTableColElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String ch;
    shared formal variable String chOff;
    shared formal variable Integer span;
    shared formal variable String vAlign;
    shared formal variable String width;
}
shared nativejs interface HTMLTableSectionElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String ch;
    shared formal variable String chOff;
    shared formal void deleteRow(Integer integer0);
    shared formal HTMLElement insertRow(Integer integer0);
    shared formal HTMLCollection rows;
    shared formal variable String vAlign;
}
shared nativejs interface HTMLTableElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String bgColor;
    shared formal variable String border;
    shared formal variable HTMLTableCaptionElement caption;
    shared formal variable String cellPadding;
    shared formal variable String cellSpacing;
    shared formal HTMLElement createCaption();
    shared formal HTMLElement createTFoot();
    shared formal HTMLElement createTHead();
    shared formal void deleteCaption();
    shared formal void deleteRow(Integer integer0);
    shared formal void deleteTFoot();
    shared formal void deleteTHead();
    shared formal variable String frame;
    shared formal HTMLElement insertRow(Integer integer0);
    shared formal HTMLCollection rows;
    shared formal variable String rules;
    shared formal variable String summary;
    shared formal HTMLCollection tBodies;
    shared formal variable HTMLTableSectionElement tFoot;
    shared formal variable HTMLTableSectionElement tHead;
    shared formal variable String width;
}
shared nativejs interface HTMLTableRowElement satisfies HTMLElement {
    shared formal variable String align;
    shared formal variable String bgColor;
    shared formal HTMLCollection cells;
    shared formal variable String ch;
    shared formal variable String chOff;
    shared formal void deleteCell(Integer integer0);
    shared formal HTMLElement insertCell(Integer integer0);
    shared formal Integer rowIndex;
    shared formal Integer sectionRowIndex;
    shared formal variable String vAlign;
}
shared nativejs interface HTMLTextAreaElement satisfies HTMLElement {
    shared formal variable String accessKey;
    shared formal void blur();
    shared formal variable Integer cols;
    shared formal variable String defaultValue;
    shared formal variable Boolean disabled;
    shared formal void focus();
    shared formal HTMLFormElement form;
    shared formal variable String name;
    shared formal variable Boolean readOnly;
    shared formal variable Integer rows;
    shared formal void select();
    shared formal variable Integer tabIndex;
    shared formal String type;
    shared formal variable String \ivalue;
}
shared nativejs interface HTMLTitleElement satisfies HTMLElement {
    shared formal variable String text;
}
shared nativejs interface HTMLUListElement satisfies HTMLElement {
    shared formal variable Boolean compact;
    shared formal variable String type;
}
