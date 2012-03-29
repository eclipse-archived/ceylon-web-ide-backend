(function(define) {
define(function(require, exports, module) {
//the Ceylon language module
function initType(type, typeName) {
var cons = function() {}
type.$$ = cons;
cons.T$name = typeName;
cons.T$all = {}
cons.T$all[typeName] = type;
for (var i=2; i<arguments.length; ++i) {
var superTypes = arguments[i].$$.T$all;
for (var $ in superTypes) {cons.T$all[$] = superTypes[$]}
}
}
function initExistingType(type, cons, typeName) {
type.$$ = cons;
cons.T$name = typeName;
cons.T$all = {}
cons.T$all[typeName] = type;
for (var i=3; i<arguments.length; ++i) {
var superTypes = arguments[i].$$.T$all;
for (var $ in superTypes) {cons.T$all[$] = superTypes[$]}
}
}
function inheritProto(type, superType, suffix) {
var proto = type.$$.prototype;
var superProto = superType.$$.prototype;
for(var $ in superProto){
var $m = superProto[$];
proto[$] = $m;
if($.charAt($.length-1)!=='$') {proto[$+suffix] = $m}
}
for (var i=3; i<arguments.length; ++i) {
superProto = arguments[i].$$.prototype;
for (var $ in superProto) {proto[$] = superProto[$]}
}
}
function inheritProtoI(type) {
var proto = type.$$.prototype;
for (var i=1; i<arguments.length; ++i) {
var superProto = arguments[i].$$.prototype;
for (var $ in superProto) {proto[$] = superProto[$]}
}
}
exports.initType=initType;
exports.inheritProto=inheritProto;
exports.inheritProtoI=inheritProtoI;
function Void(wat) {
return wat;
}
initType(Void, 'ceylon.language.Void');
function Object$(wat) {
return wat;
}
initType(Object$, 'ceylon.language.Object', Void);
var Object$proto = Object$.$$.prototype;
Object$proto.getString=function() { String$(Object.prototype.toString.apply(this)) };
Object$proto.toString=function() { return this.getString().value };
var identifiableObjectID=1;
function IdentifiableObject(obj) {
obj.identifiableObjectID=Integer(identifiableObjectID++);
return obj;
}
initType(IdentifiableObject, 'ceylon.language.IdentifiableObject', Object$);
inheritProto(IdentifiableObject, Object$, '$Object$');
var IdentifiableObject$proto = IdentifiableObject.$$.prototype;
IdentifiableObject$proto.getHash = function() { return this.identifiableObjectID; }
IdentifiableObject$proto.getString = function() { return String$(className(this).value + "@" + this.getHash().value); }
IdentifiableObject$proto.equals = function(other) {
if (isOfType(other, 'ceylon.language.IdentifiableObject')) {
return Boolean$(other===this);
}
return false;
}
//INTERFACES
function Cloneable(wat) {
return wat;
}
initType(Cloneable, 'ceylon.language.Cloneable');
exports.Cloneable=Cloneable;
function Callable(wat) {
return wat;
}
initType(Callable, 'ceylon.language.Callable');
exports.Callable=Callable;
//This is used for plain method references
function JsCallable(o,f) {
var c = function() {
if (o === null) return null;
var al=[];
if (arguments !== undefined && arguments.length > 0) {
for (var i=0; i<arguments.length;i++) {
al.push(arguments[i]);
}
}
return f.apply(o,al);
};
c.getString = function() { return String$('ceylon.language.Callable'); }
initType(c, 'ceylon.language.JsCallable', Callable);
return c;
}
//This is used for spread method references
function JsCallableList(value) {
var c = function() {
var al=[];
if (arguments !== undefined && arguments.length > 0) {
for (var i=0; i<arguments.length;i++) {
al.push(arguments[i]);
}
}
var rval = [];
for (var i = 0; i < value.length; i++) {
var c = value[i];
rval.push(c.f.apply(c.o, al));
}
return ArraySequence(rval);
};
c.getString = function() { return String$('ceylon.language.Callable[]'); }
initType(c, 'ceylon.language.JsCallableList', Callable);
return c;
}
exports.JsCallableList=JsCallableList;
exports.JsCallable=JsCallable;
function Castable(wat) {
return wat;
}
initType(Castable, 'ceylon.language.Castable');
exports.Castable=Castable;
function Closeable(wat) {
return wat;
}
initType(Closeable, 'ceylon.language.Closeable');
exports.Closeable=Closeable;
function Comparable(wat) {
return wat;
}
initType(Comparable, 'ceylon.language.Comparable');
/*var Comparable$proto = Comparable.$$.prototype;
Comparable$proto.largerThan = function(other) {
return Boolean$(this.compare(other)===$larger);
}
Comparable$proto.smallerThan = function(other) {
return Boolean$(this.compare(other)===$smaller);
}
Comparable$proto.asLargeAs = function(other) {
return Boolean$(this.compare(other)!=$smaller);
}
Comparable$proto.asSmallAs = function(other) {
return Boolean$(this.compare(other)!=$larger);
}*/
exports.Comparable=Comparable;
function Container(wat) {
return wat;
}
initType(Container, 'ceylon.language.Container');
exports.Container=Container;
function Correspondence(wat) {
return wat;
}
initType(Correspondence, 'ceylon.language.Correspondence');
var Correspondence$proto=Correspondence.$$.prototype;
Correspondence$proto.defines = function(key) {
return exists(this.item(key));
}
Correspondence$proto.definesEvery = function(keys) {
for (var i=0; i<keys.value.length; i++) {
if (this.defines(keys.value[i]) === $false) {
return $false;
}
}
return $true;
}
Correspondence$proto.definesAny = function(keys) {
for (var i=0; i<keys.value.length; i++) {
if (this.defines(keys.value[i]) === $true) {
return $true;
}
}
return $false;
}
Correspondence$proto.items = function(keys) {
if (nonempty(keys)) {
var r=[];
for (var i = 0; i < keys.value.length; i++) {
r.push(this.item(keys.value[i]));
}
return ArraySequence(r);
}
return $empty;
}
Correspondence$proto.keys = function() {
return TypeCategory(this, 'ceylon.language.Integer');
}
exports.Correspondence=Correspondence;
function Sized(wat) {
return wat;
}
initType(Sized, 'ceylon.language.Sized', Container);
Sized.$$.prototype.getEmpty = function() {
return Boolean$(this.getSize().value === 0);
}
exports.Sized=Sized;
function Iterable(wat) {
return wat;
}
initType(Iterable, 'ceylon.language.Iterable', Container);
Iterable.$$.prototype.getEmpty = function() {
return Boolean$(this.getIterator().next() === $finished);
}
exports.Iterable=Iterable;
function Category(wat) {
return wat;
}
initType(Category, 'ceylon.language.Category');
Category.$$.prototype.containsEvery = function(keys) {
for (var i = 0; i < keys.value.length; i++) {
if (this.contains(keys.value[i]) === $false) {
return $false;
}
}
return $true;
}
Category.$$.prototype.containsAny = function(keys) {
for (var i = 0; i < keys.value.length; i++) {
if (this.contains(keys.value[i]) === $true) {
return $true;
}
}
return $false;
}
exports.Category=Category;
function Iterator(wat) {
return wat;
}
initType(Iterator, 'ceylon.language.Iterator');
exports.Iterator=Iterator;
function Collection(wat) {
return wat;
}
initType(Collection, 'ceylon.language.Collection', Iterable, Sized, Category, Cloneable);
inheritProto(Collection, Sized, '$Sized$');
inheritProto(Collection, Category, '$Category$');
var Collection$proto = Collection.$$.prototype;
Collection$proto.contains = function(obj) {
var iter = this.getIterator();
var item;
while ((item = iter.next()) !== $finished) {
if (exists(item) === $true && item.equals(obj) === $true) {
return $true;
}
}
return $false;
}
Collection$proto.count = function(obj) {
var iter = this.getIterator();
var item;
var count = 0;
while ((item = iter.next()) !== $finished) {
if (exists(item) === $true && item.equals(obj) === $true) {
count++;
}
}
return Integer(count);
}
exports.Collection=Collection;
function FixedSized(wat) {
return wat;
}
initType(FixedSized, 'ceylon.language.FixedSized', Collection);
inheritProto(FixedSized, Collection, '$Collection$');
var FixedSized$proto = FixedSized.$$.prototype;
FixedSized$proto.getFirst = function() {
var e = this.getIterator().next();
return e === $finished ? null : e;
}
exports.FixedSized=FixedSized;
function Some(wat) {
return wat;
}
initType(Some, 'ceylon.language.Some', FixedSized);
inheritProto(Some, FixedSized, '$FixedSized$');
//we can skip inheritProto because we override the only inherited method
var $Some = Some.$$;
$Some.prototype.getFirst = function() {
var e = this.getIterator().next();
if (e === $finished) throw Exception();
return e;
}
$Some.prototype.getEmpty = function() { return $false; }
exports.Some=Some;
function None(wat) {
return wat;
}
initType(None, 'ceylon.language.None', FixedSized);
inheritProto(Some, FixedSized, '$FixedSized$');
//we can skip inheritProto because we override the only inherited method
var None$proto = None.$$.prototype;
None$proto.getFirst = function() { return null; }
None$proto.getIterator = function() { return emptyIterator; }
None$proto.getSize = function() { return Integer(0); }
None$proto.getEmpty = function() { return $true; }
exports.None=None;
function Ranged(wat) {
return wat;
}
initType(Ranged, 'ceylon.language.Ranged');
exports.Ranged=Ranged;
function List(wat) {
return wat;
}
initType(List, 'ceylon.language.List', Collection, Correspondence, Ranged, Cloneable);
inheritProto(List, Collection, '$Collection$');
inheritProto(List, Correspondence, '$Correspondence$');
var List$proto = List.$$.prototype;
List$proto.getSize = function() {
var li = this.getLastIndex();
return li === null ? Integer(0) : li.getSuccessor();
}
List$proto.defines = function(idx) {
var li = this.getLastIndex();
if (li === null) li = Integer(-1);
return Boolean$(li.compare(idx) !== smaller);
}
List$proto.getIterator = function() {
return ListIterator(this);
}
List$proto.equals = function(other) {
if (isOfType(other, 'ceylon.language.List') === $true && other.getSize().equals(this.getSize()) === $true) {
for (var i = 0; i < this.getSize().value; i++) {
var mine = this.item(Integer(i));
var theirs = other.item(Integer(i));
if (((mine === null) && theirs) || !(mine && mine.equals(theirs) === $true)) {
return $false;
}
}
return $true;
}
return $false;
}
List$proto.getHash = function() {
var hc=1;
var iter=this.getIterator();
var e; while ((e = iter.next()) != $finished) {
hc*=31;
if (e !== null) {
hc += e.getHash().value;
}
}
return Integer(hc);
}
List$proto.getString = function() {
var s = '{';
var first = true;
var iter = this.getIterator();
var item;
while ((item = iter.next()) !== $finished) {
s += first ? ' ' : ', ';
if (exists(item) === $true) {
s += item.getString().value;
} else {
s += 'null';
}
first = false;
}
if (!first) {
s += ' ';
}
s += '}';
return String$(s);
}
exports.List=List;
function ListIterator(list) {
var that = new ListIterator.$$;
that.list=list;
that.index=0;
that.lastIndex=list.getLastIndex();
if (that.lastIndex === null) {
that.lastIndex = -1;
} else {
that.lastIndex = that.lastIndex.value;
}
return that;
}
initType(ListIterator, 'ceylon.language.ListIterator', Iterator);
ListIterator.$$.prototype.next = function() {
if (this.index <= this.lastIndex) {
return this.list.item(Integer(this.index++));
}
return $finished;
}
function Map(wat) {
return wat;
}
initType(Map, 'ceylon.language.Map', Collection, Correspondence, Cloneable);
inheritProto(Map, Collection, '$Collection$');
inheritProto(Map, Correspondence, '$Correspondence$');
var Map$proto = Map.$$.prototype;
Map$proto.count = function(elem) {
if (isOfType(elem,'ceylon.language.Entry') === $true) {
var item = this.item(elem.getKey());
if (item !== null && item.equals(elem.getItem()) === $true) {
return Integer(1);
}
}
return Integer(0);
}
Map$proto.equals = function(other) {
if (isOfType(other, 'ceylon.language.Map') === $true && other.getSize().equals(this.getSize())) {
var iter = this.getIterator();
var entry; while ((entry = iter.next()) !== $finished) {
var oi = other.item(entry.getKey());
if (oi === null || entry.getItem().equals(oi.getItem()) === $false) {
return $false;
}
}
return $true;
}
return $false;
}
Map$proto.getHash = function() { return this.getSize(); }
//TODO implement methods: getKeys, getValues, getInverse
exports.Map=Map;
function Set(wat) {
return wat;
}
initType(Set, 'ceylon.language.Set', Collection, Cloneable);
inheritProto(Set, Collection, '$Collection$');
var Set$proto = Set.$$.prototype;
Set$proto.count = function(elem) {
return this.contains(elem) === $true ? Integer(1) : Integer(0);
}
Set$proto.superset = function(set) {
var iter = set.getIterator();
var elem; while ((elem = iter.next()) !== $finished) {
if (this.contains(elem) === $false) {
return $false;
}
}
return $true;
}
Set$proto.subset = function(set) {
var iter = this.getIterator();
var elem; while ((elem = iter.next()) !== $finished) {
if (set.contains(elem) === $false) {
return $false;
}
}
return $true;
}
Set$proto.equals = function(other) {
if (isOfType(other, 'ceylon.language.Set') === $true) {
if (other.getSize().equals(this.getSize())) {
var iter = this.getIterator();
var elem; while ((elem = iter.next()) !== $finished) {
if (other.contains(elem) === $false) {
return $false;
}
}
return $true;
}
}
return $false;
}
Set$proto.getHash = function() { return this.getSize(); }
exports.Set=Set;
function Array$() {
var that = new Array$.$$;
return that;
}
initType(Array$, 'ceylon.language.Array', Object$, List, FixedSized, Cloneable, Ranged);
inheritProto(Array$, Object$, '$Object$');
inheritProto(Array$, List, '$List$');
inheritProto(Array$, FixedSized, '$FixedSized$');
exports.Array=Array$;
function Empty() {
var that = new Empty.$$;
that.value = [];
return that;
}
initType(Empty, 'ceylon.language.Empty', List, None, Ranged, Cloneable);
inheritProto(Empty, List, '$List$');
inheritProto(Empty, None, '$None$');
var Empty$proto = Empty.$$.prototype;
Empty$proto.getEmpty = function() { return $true; }
Empty$proto.defines = function(x) { return $false; }
Empty$proto.getKeys = function() { return TypeCategory(this, 'ceylon.language.Integer'); }
Empty$proto.definesEvery = function(x) { return $false; }
Empty$proto.definesAny = function(x) { return $false; }
Empty$proto.items = function(x) { return this; }
Empty$proto.getSize = function() { return Integer(0); }
Empty$proto.item = function(x) { return null; }
Empty$proto.getFirst = function() { return null; }
Empty$proto.segment = function(a,b) { return this; }
Empty$proto.span = function(a,b) { return this; }
Empty$proto.getIterator = function() { return emptyIterator; }
Empty$proto.getString = function() { return String$("{}"); }
Empty$proto.contains = function(x) { return $false; }
Empty$proto.getLastIndex = function() { return null; }
Empty$proto.getClone = function() { return this; }
Empty$proto.count = function(x) { return Integer(0); }
var $empty = Empty();
function EmptyIterator() {
var that = new EmptyIterator.$$;
return that;
}
initType(EmptyIterator, 'ceylon.language.EmptyIterator', IdentifiableObject, Iterator);
inheritProto(EmptyIterator, IdentifiableObject, '$IdentifiableObject$');
var EmptyIterator$proto = EmptyIterator.$$.prototype;
EmptyIterator$proto.next = function() { return $finished; }
var emptyIterator=EmptyIterator();
exports.empty=$empty;
exports.emptyIterator=emptyIterator;
function EmptyArray() {
var that = new EmptyArray.$$;
return that;
}
initType(EmptyArray, 'ceylon.language.EmptyArray', Array$, None);
inheritProto(EmptyArray, Array$, '$Array$');
inheritProto(EmptyArray, None, '$None$');
EmptyArray.$$.prototype.setItem = function(i,e) {}
EmptyArray.$$.prototype.item = function(x) { return null; }
exports.EmptyArray=EmptyArray;
function ArrayList(items) {
var that = new ArrayList.$$;
that.value=items;
that.size=new Integer(items.length);
that.lastIndex=new Integer(items.length-1);
return that;
}
initType(ArrayList, 'ceylon.language.ArrayList', Array$, List);
inheritProto(ArrayList, Array$, '$Array$');
inheritProto(ArrayList, List, '$List$');
var ArrayList$proto = ArrayList.$$.prototype;
ArrayList$proto.getSize = function() { return this.size; }
ArrayList$proto.setItem = function(idx,elem) {
if (idx.value >= 0 && idx.value < this.size.value) {
this.value[idx.value] = elem;
}
}
ArrayList$proto.item = function(idx) {
if (idx.value >= 0 && idx.value < this.size.value) {
return this.value[idx.value];
}
return null;
}
ArrayList$proto.getLastIndex = function() {
return this.lastIndex;
}
exports.ArrayList=ArrayList;
exports.arrayOfNone=function() { return EmptyArray(); }
exports.arrayOfSome=function(elems) { //receives an ArraySequence
return ArrayList(elems.value);
}
exports.array=function(elems) {
if (elems === null || elems === undefined || elems.getSize().value === 0) {
return EmptyArray();
} else {
return ArrayList(elems.value);
}
}
function Summable(wat) {
return wat;
}
initType(Summable, 'ceylon.language.Summable');
exports.Summable=Summable;
function Number$(wat) {
return wat;
}
initType(Number$, 'ceylon.language.Number');
exports.Number=Number$;
function Invertable(wat) {
return wat;
}
initType(Invertable, 'ceylon.language.Invertable');
exports.Invertable=Invertable;
function Numeric(wat) {
return wat;
}
initType(Numeric, 'ceylon.language.Numeric', Number$, Comparable, Summable, Invertable);
exports.Numeric=Numeric;
function Ordinal(wat) {
return wat;
}
initType(Ordinal, 'ceylon.language.Ordinal');
exports.Ordinal=Ordinal;
function Integral(wat) {
return wat;
}
initType(Integral, 'ceylon.language.Integral', Numeric, Ordinal);
exports.Integral=Integral;
function Exception(description, cause, wat) {
if (wat===undefined) {wat=new Exception.$$;}
wat.description = description;
wat.cause = cause;
return wat;
}
initType(Exception, 'ceylon.language.Exception', IdentifiableObject);
inheritProto(Exception, IdentifiableObject, '$IdentifiableObject$');
var Exception$proto = Exception.$$.prototype;
Exception$proto.getCause = function() {return this.cause;}
Exception$proto.getMessage = function() {
return this.description ? this.description
: (this.cause ? this.cause.getMessage() : String$("", 0));
}
Exception$proto.getString = function() {
return String$(className(this).value + ' "' + this.getMessage().value + '"');
}
function Integer(value) {
var that = new Integer.$$;
that.value = value;
return that;
}
initType(Integer, 'ceylon.language.Integer', Object$, Castable, Integral, Numeric);
inheritProto(Integer, Object$, '$Object$');
var Integer$proto = Integer.$$.prototype;
Integer$proto.getString = function() { return String$(this.value.toString()) }
Integer$proto.plus = function(other) { return Integer(this.value+other.value) }
Integer$proto.minus = function(other) { return Integer(this.value-other.value) }
Integer$proto.times = function(other) { return Integer(this.value*other.value) }
Integer$proto.divided = function(other) {
var exact = this.value/other.value;
return Integer((exact<0) ? Math.ceil(exact) : Math.floor(exact));
}
Integer$proto.remainder = function(other) { return Integer(this.value%other.value) }
Integer$proto.power = function(exp) {
if (exp.getSign().value < 0) {
if (this.value===1 || this.value===-1) {
return this;
}
throw Exception(String$("Negative exponent"));
}
var exact = Math.pow(this.value, exp.value);
return Integer((exact<0) ? Math.ceil(exact) : Math.floor(exact));
}
Integer$proto.getNegativeValue = function() { return Integer(-this.value) }
Integer$proto.getPositiveValue = function() { return this }
Integer$proto.equals = function(other) { return Boolean$(other && other.value===this.value) }
Integer$proto.compare = function(other) {
return this.value===other.value ? equal
: (this.value<other.value ? smaller:larger);
}
Integer$proto.getFloat = function() { return Float(this.value) }
Integer$proto.getInteger = function() { return this }
Integer$proto.getCharacter = function() { return Character(this.value); }
Integer$proto.getSuccessor = function() { return Integer(this.value+1) }
Integer$proto.getPredecessor = function() { return Integer(this.value-1) }
Integer$proto.getUnit = function() { return Boolean$(this.value === 1) }
Integer$proto.getZero = function() { return Boolean$(this.value === 0) }
Integer$proto.getFractionalPart = function() { return Integer(0); }
Integer$proto.getWholePart = function() { return this; }
Integer$proto.getSign = function() { return this.value > 0 ? Integer(1) : this.value < 0 ? Integer(-1) : Integer(0); }
Integer$proto.getHash = function() { return this; }
function $parseInteger(s) {
var x = s.value;
//xkcd.com/208/
if ((x.indexOf('_') >= 0 ? x.match(/^[+-]?\d{1,3}(_\d{3})+[kMGPT]?$/g) : x.match(/^[+-]?\d+[kMGPT]?$/g)) === null) {
return null;
}
x = x.replace("_", "");
var mag = null;
if (x.match(/[kMGTP]$/g) !== null) {
mag = x[x.length-1];
x = x.slice(0,-1);
}
var i = parseInt(x);
var factor=1;
switch(mag) {
case 'P':factor*=1000;
case 'T':factor*=1000;
case 'G':factor*=1000;
case 'M':factor*=1000;
case 'k':factor*=1000;
}
return isNaN(i) ? null : Integer(i*factor);
}
function $parseFloat(s) { return Float(parseFloat(s.value)); }
function Float(value) {
var that = new Float.$$;
that.value = value;
return that;
}
initType(Float, 'ceylon.language.Float', Object$, Castable, Numeric);
inheritProto(Float, Object$, '$Object$');
var Float$proto = Float.$$.prototype;
Float$proto.getString = function() { return String$(this.value.toString()) }
Float$proto.plus = function(other) { return Float(this.value+other.value) }
Float$proto.minus = function(other) { return Float(this.value-other.value) }
Float$proto.times = function(other) { return Float(this.value*other.value) }
Float$proto.divided = function(other) { return Float(this.value/other.value) }
Float$proto.power = function(other) { return Float(Math.pow(this.value, other.value)) }
Float$proto.getNegativeValue = function() { return Float(-this.value) }
Float$proto.getPositiveValue = function() { return this }
Float$proto.equals = function(other) { return Boolean$(other && other.value===this.value) }
Float$proto.compare = function(other) {
if (other === null || other === undefined) { return larger; }
return this.value===other.value ? equal
: (this.value<other.value ? smaller:larger);
}
Float$proto.getFloat = function() { return this; }
Float$proto.getInteger = function() { return Integer(this.value >= 0.0 ? Math.floor(this.value) : Math.ceil(this.value)); }
Float$proto.getWholePart = function() {
var _p = this.value.toPrecision();
var dot = _p.indexOf('.');
return dot >= 0 ? Float(parseFloat(_p.slice(0, dot))) : this;
}
Float$proto.getFractionalPart = function() {
var _p = this.value.toPrecision();
var dot = _p.indexOf('.');
return dot >= 0 ? Float(parseFloat(_p.slice(dot))) : Float(0.0);
}
Float$proto.getSign = function() { return this.value > 0 ? Integer(1) : this.value < 0 ? Integer(-1) : Integer(0); }
Float$proto.getHash = function() { return String$(this.value.toPrecision()).getHash(); }
Float$proto.getUndefined = function() { return isNaN(this.value) ? $true : $false; }
Float$proto.getFinite = function() { return this.value!==Infinity && this.value!==-Infinity && !isNaN(this.value) ? $true : $false; }
Float$proto.getInfinite = function() { return this.value===Infinity || this.value===-Infinity ? $true : $false; }
function getInfinity() { return Float(Infinity); }
//function getNegativeInfinity() { return Float(-Infinity); }
exports.Integer=Integer;
exports.Float=Float;
exports.getInfinity=getInfinity;
exports.parseInteger=$parseInteger;
exports.parseFloat=$parseFloat;
function String$(value,size) {
var that = new String$.$$;
that.value = value;
that.codePoints = size;
return that;
}
initType(String$, 'ceylon.language.String', Object$, List, Comparable, Ranged, FixedSized,
Summable, Castable, Cloneable);
inheritProto(String$, Object$, '$Object$');
var String$proto = String$.$$.prototype;
String$proto.getString = function() { return this }
String$proto.toString = function() { return this.value }
String$proto.plus = function(other) {
var size = this.codePoints + other.codePoints;
return String$(this.value+other.value, isNaN(size)?undefined:size);
}
String$proto.equals = function(other) { return Boolean$(other && other.value===this.value) }
String$proto.compare = function(other) {
var cmp = this.value.localeCompare(other.value);
return cmp===0 ? equal : (cmp<0 ? smaller:larger);
}
String$proto.getUppercased = function() { return String$(this.value.toUpperCase()) }
String$proto.getLowercased = function() { return String$(this.value.toLowerCase()) }
String$proto.getSize = function() {
if (this.codePoints===undefined) {
this.codePoints = countCodepoints(this.value);
}
return Integer(this.codePoints);
}
String$proto.getLastIndex = function() { return this.getSize().equals(Integer(0)) === $true ? null : this.getSize().getPredecessor(); }
String$proto.span = function(from, to) {
var fromIndex = from.value;
var toIndex = (to===null || to===undefined) ? 0x7fffffff : to.value;
if (fromIndex > toIndex) {
//TODO: should we return an empty string or a reverse string in this case?
return String$("", 0);
}
return this.segment(from, Integer(toIndex-fromIndex+1));
}
String$proto.segment = function(from, len) {
var fromIndex = from.value;
var maxCount = len.value + fromIndex;
if (fromIndex < 0) {fromIndex = 0;}
var i1 = 0;
var count = 0;
for (; i1<this.value.length && count<fromIndex; ++i1, ++count) {
if ((this.value.charCodeAt(i1)&0xfc00) === 0xd800) {++i1}
}
var i2 = i1;
for (; i2<this.value.length && count<maxCount; ++i2, ++count) {
if ((this.value.charCodeAt(i2)&0xfc00) === 0xd800) {++i2}
}
if (i2 >= this.value.length) {
this.codePoints = count;
if (fromIndex === 0) {return this;}
}
return String$(this.value.substring(i1, i2), count-fromIndex);
}
String$proto.getEmpty = function() {
return Boolean$(this.value.length===0);
}
String$proto.longerThan = function(length) {
if (this.codePoints!==undefined) {return Boolean$(this.codePoints>length.value)}
if (this.value.length <= length.value) {return $false}
if (this.value.length<<1 > length.value) {return $true}
this.codePoints = countCodepoints(this.value);
return Boolean$(this.codePoints>length.value);
}
String$proto.shorterThan = function(length) {
if (this.codePoints!==undefined) {return Boolean$(this.codePoints<length.value)}
if (this.value.length < length.value) {return $true}
if (this.value.length<<1 >= length.value) {return $false}
this.codePoints = countCodepoints(this.value);
return Boolean$(this.codePoints<length.value);
}
String$proto.getIterator = function() { return StringIterator(this.value) }
String$proto.item = function(index) {
if (index<0 || index>=this.value.length) {return null}
var i = 0;
for (var count=0; count<index; count++) {
if ((this.value.charCodeAt(i)&0xfc00) === 0xd800) {++i}
if (++i >= this.value.length) {return null}
}
return Character(codepointFromString(this.value, i));
}
String$proto.getTrimmed = function() {
// make use of the fact that all WS characters are single UTF-16 code units
var from = 0;
while (from<this.value.length && (this.value.charCodeAt(from) in $WS)) {++from}
var to = this.value.length;
if (from < to) {
do {--to} while (from<to && (this.value.charCodeAt(to) in $WS));
++to;
}
if (from===0 && to===this.value.length) {return this}
var result = String$(this.value.substring(from, to));
if (this.codePoints !== undefined) {
result.codePoints = this.codePoints - from - this.value.length + to;
}
return result;
}
String$proto.initial = function(length) {
if (length.value >= this.codePoints) {return this}
var count = 0;
var i = 0;
for (; i<this.value.length && count<length.value; ++i, ++count) {
if ((this.value.charCodeAt(i)&0xfc00) === 0xd800) {++i}
}
if (i >= this.value.length) {
this.codePoints = count;
return this;
}
return String$(this.value.substr(0, i), count);
}
String$proto.terminal = function(length) {
if (length.value >= this.codePoints) {return this}
var count = 0;
var i = this.value.length;
for (; i>0 && count<length.value; ++count) {
if ((this.value.charCodeAt(--i)&0xfc00) === 0xdc00) {--i}
}
if (i <= 0) {
this.codePoints = count;
return this;
}
return String$(this.value.substr(i), count);
}
String$proto.getHash = function() {
if (this._hash === undefined) {
for (var i = 0; i < this.value.length; i++) {
var c = this.value.charCodeAt(i);
this._hash += c + (this._hash << 10);
this._hash ^= this._hash >> 6;
}
this._hash += this._hash << 3;
this._hash ^= this._hash >> 11;
this._hash += this._hash << 15;
this._hash = this._hash & ((1 << 29) - 1);
}
return Integer(this._hash);
}
String$proto.getFirst = function() {
return this.item(Integer(0));
}
function cmpSubString(str, subStr, offset) {
for (var i=0; i<subStr.length; ++i) {
if (str.charCodeAt(offset+i)!==subStr.charCodeAt(i)) {return $false}
}
return $true;
}
String$proto.startsWith = function(str) {
if (str.value.length > this.value.length) {return $false}
return cmpSubString(this.value, str.value, 0);
}
String$proto.endsWith = function(str) {
var start = this.value.length - str.value.length
if (start < 0) {return $false}
return cmpSubString(this.value, str.value, start);
}
String$proto.contains = function(sub) {
var str;
if (sub.constructor === String$.$$) {str = sub.value}
else if (sub.constructor !== Character.$$) {return $false}
else {str = codepointToString(sub.value)}
return Boolean$(this.value.indexOf(str) >= 0);
}
String$proto.getNormalized = function() {
// make use of the fact that all WS characters are single UTF-16 code units
var result = "";
var len = 0;
var first = true;
var i1 = 0;
while (i1 < this.value.length) {
while (this.value.charCodeAt(i1) in $WS) {
if (++i1 >= this.value.length) {return String$(result)}
}
var i2 = i1;
var cc = this.value.charCodeAt(i2);
do {
++i2;
if ((cc&0xfc00) === 0xd800) {++i2}
++len;
cc = this.value.charCodeAt(i2);
} while (i2<this.value.length && !(cc in $WS));
if (!first) {
result += " ";
++len;
}
first = false;
result += this.value.substring(i1, i2);
i1 = i2+1;
}
return String$(result, len);
}
String$proto.firstOccurrence = function(sub) {
if (sub.value.length == 0) {return Integer(0)}
var bound = this.value.length - sub.value.length;
for (var i=0, count=0; i<=bound; ++count) {
if (cmpSubString(this.value, sub.value, i) === $true) {return Integer(count)}
if ((this.value.charCodeAt(i++)&0xfc00) === 0xd800) {++i}
}
return null;
}
String$proto.lastOccurrence = function(sub) {
if (sub.value.length == 0) {return Integer(this.value.length>0 ? this.value.length-1 : 0)}
for (var i=this.value.length-sub.value.length; i>=0; --i) {
if (cmpSubString(this.value, sub.value, i) === $true) {
for (var count=0; i>0; ++count) {
if ((this.value.charCodeAt(--i)&0xfc00) === 0xdc00) {--i}
}
return Integer(count);
}
}
return null;
}
String$proto.firstCharacterOccurrence = function(subc) {
for (var i=0, count=0; i<this.value.length; count++) {
var cp = this.value.charCodeAt(i++);
if (((cp&0xfc00) === 0xd800) && i<this.value.length) {
cp = (cp<<10) + this.value.charCodeAt(i++) - 0x35fdc00;
}
if (cp === subc.value) {return Integer(count)}
}
this.codePoints = count;
return null;
}
String$proto.lastCharacterOccurrence = function(subc) {
for (var i=this.value.length-1, count=0; i>=0; count++) {
var cp = this.value.charCodeAt(i--);
if (((cp%0xfc00) === 0xdc00) && i>=0) {
cp = (this.value.charCodeAt(i--)<<10) + cp - 0x35fdc00;
}
if (cp === subc.value) {
if (this.codePoints === undefined) {this.codePoints = countCodepoints(this.value)}
return Integer(this.codePoints - count - 1);
}
}
this.codePoints = count;
return null;
}
String$proto.getCharacters = function() {
//we can cheat and add the required behavior to String, avoiding the need to create a Sequence...
//TODO: this probably doesn't work completely because String doesn't satisfy
//      all required interfaces, so "if(is ...)" will be false when it shouldn't.
return this.value.length>0 ? this:$empty;
}
String$proto.getFirst = function() { return this.getSize().value>0?this.item(Integer(0)):null; }
String$proto.getLast = function() { return this.getSize().value>0?this.item(Integer(this.getSize().getPredecessor())):null; }
String$proto.getKeys = function() {
//TODO implement!!!
return this.getSize().value > 0 ? Range(Integer(0), this.getSize().getPredecessor()) : $empty;
}
String$proto.join = function(strings) {
if (strings===undefined || strings.value.length===0) {return String$("", 0)}
if (this.codePoints === undefined) {this.codePoints = countCodepoints(this.value)}
var str = strings.value[0];
var result = str.value;
var len = str.codePoints;
for (var i=1; i<strings.value.length; ++i) {
str = strings.value[i];
result += this.value;
result += str.value;
len += this.codePoints + str.codePoints;
}
return String$(result, isNaN(len)?undefined:len);
}
String$proto.split = function(seps, discard) {
if (this.getEmpty() === $true) {
return Singleton(this);
}
var sepChars = $WS;
if (seps!==undefined && seps!==null) {
sepChars = {}
var it = seps.getIterator();
var c; while ((c=it.next()) !== $finished) {sepChars[c.value] = true}
}
if (discard === undefined) {discard = false}
//TODO: return an iterable which determines the next token on demand
var tokens = [];
var tokenBegin = 0;
var tokenBeginCount = 0;
for (var i=0, count=0; i<this.value.length;) {
var j = i;
var cp = this.value.charCodeAt(i++);
if ((cp&0xfc00)===0xd800 && i<this.value.length) {
cp = (cp<<10) + this.value.charCodeAt(i++) - 0x35fdc00;
}
++count;
if (cp in sepChars) {
if (tokenBegin != j) {
tokens.push(String$(this.value.substring(tokenBegin, j), count-tokenBeginCount-1))
}
if (!discard) {tokens.push(String$(this.value.substring(j, i), 1))}
tokenBegin = i;
tokenBeginCount = count;
}
}
if (tokenBegin != i) {
tokens.push(String$(this.value.substring(tokenBegin, i), count-tokenBeginCount))
}
this.codePoints = count;
return ArraySequence(tokens);
}
String$proto.getReversed = function() {
var result = "";
for (var i=this.value.length; i>0;) {
var cc = this.value.charCodeAt(--i);
if ((cc&0xfc00)!==0xdc00 || i===0) {
result += this.value.charAt(i);
} else {
result += this.value.substr(--i, 2);
}
}
return String$(result);
}
String$proto.replace = function(sub, repl) {
return String$(this.value.replace(new RegExp(sub.value, 'g'), repl.value));
}
String$proto.repeat = function(times) {
var sb = StringBuilder();
for (var i = 0; i < times.value; i++) {
sb.append(this);
}
return sb.getString();
}
function StringIterator(string) {
var that = new StringIterator.$$;
that.string = string;
that.index = 0;
return that;
}
initType(StringIterator, 'ceylon.language.StringIterator', IdentifiableObject, Iterator);
inheritProto(StringIterator, IdentifiableObject, '$IdentifiableObject$');
var StringIterator$proto = StringIterator.$$.prototype;
StringIterator$proto.next = function() {
if (this.index >= this.string.length) { return $finished }
var first = this.string.charCodeAt(this.index++);
if ((first&0xfc00) !== 0xd800 || this.index >= this.string.length) {
return Character(first);
}
return Character((first<<10) + this.string.charCodeAt(this.index++) - 0x35fdc00);
}
function countCodepoints(str) {
var count = 0;
for (var i=0; i<str.length; ++i) {
++count;
if ((str.charCodeAt(i)&0xfc00) === 0xd800) {++i}
}
return count;
}
function codepointToString(cp) {
if (cp <= 0xffff) {
return String.fromCharCode(cp);
}
return String.fromCharCode((cp>>10)+0xd7c0, (cp&0x3ff)+0xdc00);
}
function codepointFromString(str, index) {
var first = str.charCodeAt(index);
if ((first&0xfc00) !== 0xd800) {return first}
var second = str.charCodeAt(index+1);
return isNaN(second) ? first : ((first<<10) + second - 0x35fdc00);
}
function Character(value) {
var that = new Character.$$;
that.value = value;
return that;
}
initType(Character, 'ceylon.language.Character', Object$, Comparable);
inheritProto(Character, Object$, '$Object$');
var Character$proto = Character.$$.prototype;
Character$proto.getString = function() { return String$(codepointToString(this.value)) }
Character$proto.equals = function(other) {
return Boolean$(other.constructor===Character.$$ && other.value===this.value);
}
Character$proto.getHash = function() {return Integer(this.value)}
Character$proto.compare = function(other) {
return this.value===other.value ? equal
: (this.value<other.value ? smaller:larger);
}
Character$proto.getUppercased = function() {
var ucstr = codepointToString(this.value).toUpperCase();
return Character(codepointFromString(ucstr, 0));
}
Character$proto.getLowercased = function() {
var lcstr = codepointToString(this.value).toLowerCase();
return Character(codepointFromString(lcstr, 0));
}
Character$proto.getTitlecased = function() {
var tc = $toTitlecase[this.value];
return tc===undefined ? this.getUppercased() : Character(tc);
}
var $WS={0x9:true, 0xa:true, 0xb:true, 0xc:true, 0xd:true, 0x20:true, 0x85:true, 0xa0:true,
0x1680:true, 0x180e:true, 0x2028:true, 0x2029:true, 0x202f:true, 0x205f:true, 0x3000:true}
for (var i=0x2000; i<=0x200a; i++) { $WS[i]=true }
var $digit={0x30:true, 0x660:true, 0x6f0:true, 0x7c0:true, 0x966:true, 0x9e6:true, 0xa66:true,
0xae6:true, 0xb66:true, 0xbe6:true, 0xc66:true, 0xce6:true, 0xd66:true, 0xe50:true,
0xed0:true, 0xf20:true, 0x1040:true, 0x1090:true, 0x17e0:true, 0x1810:true, 0x1946:true,
0x19d0:true, 0x1a80:true, 0x1a90:true, 0x1b50:true, 0x1bb0:true, 0x1c40:true, 0x1c50:true,
0xa620:true, 0xa8d0:true, 0xa900:true, 0xa9d0:true, 0xaa50:true, 0xabf0:true, 0xff10:true,
0x104a0:true, 0x11066:true, 0x110f0:true, 0x11136:true, 0x111d0:true, 0x116c0:true}
var $titlecase={
0x1c5: [0x1c4, 0x1c6], 0x1c8: [0x1c7, 0x1c9], 0x1cb: [0x1ca, 0x1cc], 0x1f2: [0x1f1, 0x1f3],
0x1f88: [undefined, 0x1f80], 0x1f89: [undefined, 0x1f81], 0x1f8a: [undefined, 0x1f82],
0x1f8b: [undefined, 0x1f83], 0x1f8c: [undefined, 0x1f84], 0x1f8d: [undefined, 0x1f85],
0x1f8e: [undefined, 0x1f86], 0x1f8f: [undefined, 0x1f87], 0x1f98: [undefined, 0x1f90],
0x1f99: [undefined, 0x1f91], 0x1f9a: [undefined, 0x1f92], 0x1f9b: [undefined, 0x1f93],
0x1f9c: [undefined, 0x1f94], 0x1f9d: [undefined, 0x1f95], 0x1f9e: [undefined, 0x1f96],
0x1f9f: [undefined, 0x1f97], 0x1fa8: [undefined, 0x1fa0], 0x1fa9: [undefined, 0x1fa1],
0x1faa: [undefined, 0x1fa2], 0x1fab: [undefined, 0x1fa3], 0x1fac: [undefined, 0x1fa4],
0x1fad: [undefined, 0x1fa5], 0x1fae: [undefined, 0x1fa6], 0x1faf: [undefined, 0x1fa7],
0x1fbc: [undefined, 0x1fb3], 0x1fcc: [undefined, 0x1fc3], 0x1ffc: [undefined, 0x1ff3]
}
var $toTitlecase={
0x1c6:0x1c5, 0x1c7:0x1c8, 0x1ca:0x1cb, 0x1f1:0x1f2,
0x1c4:0x1c5, 0x1c9:0x1c8, 0x1cc:0x1cb, 0x1f3:0x1f2, 0x1f80:0x1f88, 0x1f81:0x1f89, 0x1f82:0x1f8a,
0x1f83:0x1f8b, 0x1f84:0x1f8c, 0x1f85:0x1f8d, 0x1f86:0x1f8e, 0x1f87:0x1f8f, 0x1f90:0x1f98,
0x1f91:0x1f99, 0x1f92:0x1f9a, 0x1f93:0x1f9b, 0x1f94:0x1f9c, 0x1f95:0x1f9d, 0x1f96:0x1f9e,
0x1f97:0x1f9f, 0x1fa0:0x1fa8, 0x1fa1:0x1fa9, 0x1fa2:0x1faa, 0x1fa3:0x1fab, 0x1fa4:0x1fac,
0x1fa5:0x1fad, 0x1fa6:0x1fae, 0x1fa7:0x1faf, 0x1fb3:0x1fbc, 0x1fc3:0x1fcc, 0x1ff3:0x1ffc
}
Character$proto.getWhitespace = function() { return Boolean$(this.value in $WS) }
Character$proto.getControl = function() { return Boolean$(this.value<32 || this.value===127) }
Character$proto.getDigit = function() {
var check = this.value & 0xfffffff0;
if (check in $digit) {
return Boolean$((this.value&0xf) <= 9);
}
if ((check|6) in $digit) {
return Boolean$((this.value&0xf) >= 6);
}
return Boolean$(this.value>=0x1d7ce && this.value<=0x1d7ff);
}
Character$proto.getInteger = function() { return Integer(this.value); }
Character$proto.getUppercase = function() {
var str = codepointToString(this.value);
return Boolean$(str.toLowerCase()!==str && !(this.value in $titlecase));
}
Character$proto.getLowercase = function() {
var str = codepointToString(this.value);
return Boolean$(str.toUpperCase()!==str && !(this.value in $titlecase));
}
Character$proto.getTitlecase = function() {return Boolean$(this.value in $titlecase)}
Character$proto.getLetter = function() {
//TODO: this captures only letters that have case
var str = codepointToString(this.value);
return Boolean$(str.toUpperCase()!==str || str.toLowerCase()!==str || (this.value in $titlecase));
}
Character$proto.getSuccessor = function() {
var succ = this.value+1;
if ((succ&0xf800) === 0xd800) {return Character(0xe000)}
return Character((succ<=0x10ffff) ? succ:0);
}
Character$proto.getPredecessor = function() {
var succ = this.value-1;
if ((succ&0xf800) === 0xd800) {return Character(0xd7ff)}
return Character((succ>=0) ? succ:0x10ffff);
}
function StringBuilder() {
var that = new StringBuilder.$$;
that.value = "";
return that;
}
initType(StringBuilder, 'ceylon.language.StringBuilder', IdentifiableObject);
inheritProto(StringBuilder, IdentifiableObject, '$IdentifiableObject$');
var StringBuilder$proto = StringBuilder.$$.prototype;
StringBuilder$proto.getString = function() { return String$(this.value); }
StringBuilder$proto.append = function(s) {
this.value = this.value + s.value;
return this;
}
StringBuilder$proto.appendAll = function(strings) {
if (strings === null || strings === undefined) { return this; }
for (var i = 0; i < strings.value.length; i++) {
var _s = strings.value[i];
this.value += _s?_s.value:"null";
}
return this;
}
StringBuilder$proto.appendCharacter = function(c) {
this.append(c.getString());
return this;
}
StringBuilder$proto.appendNewline = function() {
this.value = this.value + "\n";
return this;
}
StringBuilder$proto.appendSpace = function() {
this.value = this.value + " ";
return this;
}
exports.String=String$;
exports.Character=Character;
exports.StringBuilder=StringBuilder;
function getNull() { return null }
//function Boolean$(value) {
//    return value ? $true : $false;
//}
//initType(Boolean$, 'ceylon.language.Boolean', IdentifiableObject);
//inheritProto(Boolean$, IdentifiableObject, '$IdentifiableObject$');
//var $true = new Boolean$.$$;
//$true.string = String$("true");
//$true.getString = function() {return this.string}
//function getTrue() { return $true; }
//var $false = new Boolean$.$$;
//$false.string = String$("false");
//$false.getString = function() {return this.string}
//function getFalse() { return $false; }
function Boolean$(value) {return Boolean(value)}
initExistingType(Boolean$, Boolean, 'ceylon.language.Boolean', IdentifiableObject);
inheritProto(Boolean$, IdentifiableObject, '$IdentifiableObject$');
Boolean.prototype.equals = function(other) {return other.constructor===Boolean && other==this;}
var trueString = String$("true", 4);
var falseString = String$("false", 5);
Boolean.prototype.getString = function() {return this.valueOf()?trueString:falseString;}
function getTrue() {return true}
function getFalse() {return false}
var $true = true;
var $false = false;
function Finished() {}
initType(Finished, 'ceylon.language.Finished', IdentifiableObject);
inheritProto(Finished, IdentifiableObject, '$IdentifiableObject$');
var $finished = new Finished.$$;
$finished.string = String$("exhausted", 9);
$finished.getString = function() { return this.string; }
function getExhausted() { return $finished; }
function Comparison(name) {
var that = new Comparison.$$;
that.name = String$(name);
return that;
}
initType(Comparison, 'ceylon.language.Comparison', IdentifiableObject);
inheritProto(Comparison, IdentifiableObject, '$IdentifiableObject$');
var Comparison$proto = Comparison.$$.prototype;
Comparison$proto.getString = function() { return this.name; }
function print(line) { console.log(line.getString().value) }
exports.print=print;
var larger = Comparison("larger");
function getLarger() { return larger }
var smaller = Comparison("smaller");
function getSmaller() { return smaller }
var equal = Comparison("equal");
function getEqual() { return equal }
function largest(x, y) { return x.compare(y) === larger ? x : y }
function smallest(x, y) { return x.compare(y) === smaller ? x : y }
exports.getLarger=getLarger;
exports.getSmaller=getSmaller;
exports.getEqual=getEqual;
exports.largest=largest;
exports.smallest=smallest;
//receives ArraySequence, returns element
function min(seq) {
var v = seq.value[0];
if (seq.value.length > 1) {
for (var i = 1; i < seq.value.length; i++) {
v = smallest(v, seq.value[i]);
}
}
return v;
}
//receives ArraySequence, returns element
function max(seq) {
var v = seq.value[0];
if (seq.value.length > 1) {
for (var i = 1; i < seq.value.length; i++) {
v = largest(v, seq.value[i]);
}
}
return v;
}
//receives ArraySequence of ArraySequences, returns flat ArraySequence
function join(seqs) {
var builder = [];
for (var i = 0; i < seqs.value.length; i++) {
builder = builder.concat(seqs.value[i].value);
}
return ArraySequence(builder);
}
//receives ArraySequences, returns ArraySequence
function zip(keys, items) {
var entries = []
var numEntries = Math.min(keys.value.length, items.value.length);
for (var i = 0; i < numEntries; i++) {
entries[i] = Entry(keys.value[i], items.value[i]);
}
return ArraySequence(entries);
}
//receives and returns ArraySequence
function coalesce(seq) {
var newseq = [];
for (var i = 0; i < seq.value.length; i++) {
if (seq.value[i]) {
newseq = newseq.concat(seq.value[i]);
}
}
return ArraySequence(newseq);
}
//receives ArraySequence and CeylonObject, returns new ArraySequence
function append(seq, elem) {
return ArraySequence(seq.value.concat(elem));
}
function prepend(seq, elem) {
if (seq.getEmpty() === $true) {
return Singleton(elem);
} else {
var sb = SequenceBuilder();
sb.append(elem);
sb.appendAll(seq);
return sb.getSequence();
}
}
//Receives ArraySequence, returns ArraySequence (with Entries)
function entries(seq) {
var e = [];
for (var i = 0; i < seq.value.length; i++) {
e.push(Entry(Integer(i), seq.value[i]));
}
return ArraySequence(e);
}
exports.min=min;
exports.max=max;
exports.join=join;
exports.zip=zip;
exports.coalesce=coalesce;
exports.append=append;
exports.prepend=prepend;
exports.entries=entries;
//These are operators for handling nulls
function exists(value) {
return value === null || value === undefined ? $false : $true;
}
function nonempty(value) {
return value === null || value === undefined ? $false : Boolean$(value.getEmpty() === $false);
}
function isOfType(obj, typeName) {
if (obj === null) return Boolean$(typeName==="ceylon.language.Nothing" || typeName==="ceylon.language.Void");
var cons = obj.$$;
if (cons === undefined) cons = obj.constructor;
return Boolean$(typeName in cons.T$all);
}
function isOfTypes(obj, types) {
if (obj===null) { //TODO check if this is right
return types.l.indexOf('ceylon.language.Nothing')>=0 || types.l.indexOf('ceylon.language.Void')>=0;
}
var unions = false;
var inters = true;
var _ints=false;
var cons = obj.$$;
if (cons === undefined) cons = obj.constructor;
for (var i = 0; i < types.l.length; i++) {
var t = types.l[i];
var partial = false;
if (typeof t === 'string') {
partial = t in cons.T$all;
} else {
partial = isOfTypes(obj, t);
}
if (types.t==='u') {
unions = partial || unions;
} else {
inters = partial && inters;
_ints=true;
}
}
return _ints ? inters||unions : unions;
}
function className(obj) {
if (obj === null) return String$('ceylon.language.Nothing');
var cons = obj.$$;
if (cons === undefined) cons = obj.constructor;
return String$(cons.T$name);
}
function identityHash(obj) {
return obj.identifiableObjectID;
}
exports.exists=exists;
exports.nonempty=nonempty;
exports.isOfType=isOfType;
exports.isOfTypes=isOfTypes;
exports.className=className;
exports.identityHash=identityHash;
function Sequence($$sequence) {
return $$sequence;
}
initType(Sequence, 'ceylon.language.Sequence', List, Some, Cloneable, Ranged);
inheritProto(Sequence, List, '$List$');
inheritProto(Sequence, Some, '$Some$');
var Sequence$proto = Sequence.$$.prototype;
Sequence$proto.getLast = function() {
var last = this.item(this.getLastIndex());
if (last === null) throw Exception();
return last;
}
function ArraySequence(value) {
var that = new ArraySequence.$$;
that.value = value;
return that;
}
initType(ArraySequence, 'ceylon.language.ArraySequence', IdentifiableObject, Sequence);
inheritProto(ArraySequence, IdentifiableObject, '$IdentifiableObject$', Sequence);
var ArraySequence$proto = ArraySequence.$$.prototype;
ArraySequence$proto.item = function(index) {
var result = this.value[index.value];
return result!==undefined ? result:null;
}
ArraySequence$proto.getSize = function() { return Integer(this.value.length) }
ArraySequence$proto.getEmpty = function() { return this.value.length > 0 ? $false : $true; }
ArraySequence$proto.getLastIndex = function() { return this.getSize().getPredecessor(); }
ArraySequence$proto.getFirst = function() { return this.item(Integer(0)); }
ArraySequence$proto.getLast = function() { return this.item(this.getLastIndex()); }
ArraySequence$proto.segment = function(from, len) {
var seq = [];
if (len.compare(Integer(0)) === larger) {
var stop = from.plus(len).value;
for (var i=from.value; i < stop; i++) {
var x = this.item(Integer(i));
if (x !== null) { seq.push(x); }
}
}
return ArraySequence(seq);
}
ArraySequence$proto.span = function(from, to) {
var fromIndex = largest(Integer(0),from).value;
var toIndex = to === null || to === undefined ? this.getLastIndex().value : smallest(to, this.getLastIndex()).value;
var seq = [];
if (fromIndex === toIndex) {
return Singleton(this.item(from));
} else if (toIndex > fromIndex) {
for (var i = fromIndex; i <= toIndex && this.defines(Integer(i)) === $true; i++) {
seq.push(this.item(Integer(i)));
}
} else {
//Negative span, reverse seq returned
for (var i = fromIndex; i >= toIndex && this.defines(Integer(i)) === $true; i--) {
seq.push(this.item(Integer(i)));
}
}
return ArraySequence(seq);
}
ArraySequence$proto.getRest = function() {
return this.getSize().equals(Integer(1)) === $true ? $empty : ArraySequence(this.value.slice(1));
}
ArraySequence$proto.items = function(keys) {
var seq = [];
for (var i = 0; i < keys.getSize().value; i++) {
var key = keys.item(Integer(i));
seq.push(this.item(key));
}
return ArraySequence(seq);
}
ArraySequence$proto.getKeys = function() { return TypeCategory(this, 'ceylon.language.Integer'); }
ArraySequence$proto.contains = function(elem) {
for (var i=0; i<this.value.length; i++) {
if (elem.equals(this.value[i])) {
return $true;
}
}
return $false;
}
function TypeCategory(seq, type) {
var that = new TypeCategory.$$;
that.type = type;
that.seq = seq;
return that;
}
initType(TypeCategory, 'ceylon.language.TypeCategory', IdentifiableObject, Category);
inheritProto(TypeCategory, IdentifiableObject, '$IdentifiableObject$', Category);
var TypeCategory$proto = TypeCategory.$$.prototype;
TypeCategory$proto.contains = function(k) {
return Boolean$(isOfType(k, this.type) === $true && this.seq.defines(k) === $true);
}
function SequenceBuilder() {
var that = new SequenceBuilder.$$;
that.seq = [];
return that;
}
initType(SequenceBuilder, 'ceylon.language.SequenceBuilder', IdentifiableObject, Sized);
inheritProto(SequenceBuilder, IdentifiableObject, '$IdentifiableObject$', Sized);
var SequenceBuilder$proto = SequenceBuilder.$$.prototype;
SequenceBuilder$proto.getSequence = function() { return ArraySequence(this.seq); }
SequenceBuilder$proto.append = function(e) { this.seq.push(e); }
SequenceBuilder$proto.appendAll = function(arr) {
if (arr && arr.value && arr.value.length) {
for (var i = 0; i < arr.value.length; i++) {
this.seq.push(arr.value[i]);
}
}
}
SequenceBuilder$proto.getSize = function() { return Integer(this.seq.length); }
function SequenceAppender(other) {
var that = new SequenceAppender.$$;
that.seq = [];
that.appendAll(other);
return that;
}
initType(SequenceAppender, 'ceylon.language.SequenceAppender', SequenceBuilder);
inheritProto(SequenceAppender, SequenceBuilder, '$SequenceBuilder$');
function Singleton(elem) {
var that = new Singleton.$$;
that.value = [elem];
that.elem = elem;
return that;
}
initType(Singleton, 'ceylon.language.Singleton', Object$, Sequence);
inheritProto(Singleton, Object$, '$Object$', Sequence);
var Singleton$proto = Singleton.$$.prototype;
Singleton$proto.getString = function() { return String$("{ " + this.elem.getString().value + " }") }
Singleton$proto.item = function(index) {
return index.value===0 ? this.value[0] : null;
}
Singleton$proto.getSize = function() { return Integer(1); }
Singleton$proto.getLastIndex = function() { return Integer(0); }
Singleton$proto.getFirst = function() { return this.elem; }
Singleton$proto.getLast = function() { return this.elem; }
Singleton$proto.getEmpty = function() { return $false; }
Singleton$proto.getRest = function() { return $empty; }
Singleton$proto.defines = function(idx) { return idx.equals(Integer(0)); }
Singleton$proto.getKeys = function() { return TypeCategory(this, 'ceylon.language.Integer'); }
Singleton$proto.span = function(from, to) {
if (to === undefined || to === null) to = from;
return (from.equals(Integer(0)) === $true || to.equals(Integer(0)) === $true) ? this : $empty;
}
Singleton$proto.segment = function(idx, len) {
if (idx.equals(Integer(0)) === $true && len.compare(Integer(0)) === larger) {
return this;
}
return $empty;
}
Singleton$proto.getIterator = function() { return SingletonIterator(this.elem); }
function SingletonIterator(elem) {
var that = new SingletonIterator.$$;
that.elem = elem;
that.done = false;
return that;
}
initType(SingletonIterator, 'ceylon.language.SingletonIterator', IdentifiableObject, Iterator);
inheritProto(SingletonIterator, IdentifiableObject, '$IdentifiableObject$');
var $SingletonIterator$proto = SingletonIterator.$$.prototype;
$SingletonIterator$proto.next = function() {
if (this.done) {
return $finished;
}
this.done = true;
return this.elem;
}
exports.Sequence=Sequence;
exports.SequenceBuilder=SequenceBuilder;
exports.SequenceAppender=SequenceAppender;
exports.ArraySequence=ArraySequence;
exports.Singleton=Singleton;
function Range(first, last) {
var that = new Range.$$;
that.first = first;
that.last = last;
var index = 0;
var x = first;
var dec = first.compare(last) === larger;
while (x.equals(last) === getFalse()) { //some replicated code because we don't yet have the functions here
index++;
x = dec ? x.getPredecessor() : x.getSuccessor();
}
that.size = Integer(index+1);
return that;
}
initType(Range, 'ceylon.language.Range', Object$, Sequence, Category);
inheritProto(Range, Object$, '$Object$');
inheritProto(Range, Sequence, '$Sequence$');
inheritProto(Range, Category, '$Category$');
var Range$proto = Range.$$.prototype;
Range$proto.getFirst = function() { return this.first; }
Range$proto.getLast = function() { return this.last; }
Range$proto.getEmpty = function() { return getFalse(); }
Range$proto.getDecreasing = function() {
return Boolean$(this.first.compare(this.last) === larger);
}
Range$proto.next = function(x) {
return this.getDecreasing() === getTrue() ? x.getPredecessor() : x.getSuccessor();
}
Range$proto.getSize = function() { return this.size; }
Range$proto.getLastIndex = function() { return Integer(this.size-1); }
Range$proto.item = function(index) {
var idx = 0;
var x = this.first;
while (idx < index.value) {
if (x.equals(this.last) === getTrue()) { return getNull(); }
else {
idx++;
x = this.next(x);
}
}
return x;
}
Range$proto.includes = function(x) {
var compf = x.compare(this.first);
var compl = x.compare(this.last);
var rval = this.getDecreasing() === getTrue() ? ((compf === equal || compf === smaller) && (compl === equal || compl === larger)) : ((compf === equal || compf === larger) && (compl === equal || compl === smaller));
return Boolean$(rval);
}
Range$proto.contains = function(x) {
if (typeof x.compare==='function' || (x.prototype && typeof x.prototype.compare==='function')) {
return this.includes(x);
}
return $false;
}
Range$proto.getRest = function() {
if (this.first.equals(this.last) === $true) return $empty;
var n = this.next(this.first);
return Range(n, this.last);
}
Range$proto.by = function(step) {
if (step.compare(Integer(0)) !== larger) {
//throw
}
if (this.first.equals(this.last) === getTrue() || step.equals(Integer(1)) === getTrue()) {
return this;
}
var seq = [];
var x = this.first;
while (this.includes(x) === getTrue()) {
seq.push(x);
for (var i = 0; i < step.value; i++) { x = this.next(x); }
}
return ArraySequence(seq);
}
Range$proto.segment = function(from, len) {
//only positive length for now
if (len.compare(Integer(0)) !== larger) return $empty;
if (this.defines(from) === $false) return $empty;
var x = this.first;
for (var i=0; i < from.value; i++) { x = this.next(x); }
var y = x;
for (var i=1; i < len.value; i++) { y = this.next(y); }
if (this.includes(y) === $false) { y = this.last; }
return Range(x, y);
}
Range$proto.span = function(from, to) {
from = largest(Integer(0),from);
if (to === getNull() || to === undefined) {
to = this.getLastIndex();
}
if (this.defines(from) === $false) {
//If it's an inverse range, adjust the "from" (upper bound)
if (from.compare(to) === larger && this.defines(to) === $true) {
//Decrease the upper bound
while (this.defines(from) === $false) {
from = from.getPredecessor();
}
} else {
return $empty;
}
} else while (this.defines(to) === $false) {
//decrease the upper bound
to = to.getPredecessor();
}
return Range(this.item(from), this.item(to));
}
Range$proto.definesEvery = function(keys) {
for (var i = 0; i < keys.getSize().value; i++) {
if (this.defines(keys.item(Integer(i))) === getFalse()) {
return getFalse();
}
}
return getTrue();
}
Range$proto.definesAny = function(keys) {
for (var i = 0; i < keys.getSize().value; i++) {
if (this.defines(keys.item(Integer(i))) === getTrue()) {
return getTrue();
}
}
return getFalse();
}
Range$proto.defines = function(idx) { return Boolean$(idx.compare(this.getSize()) === smaller); }
Range$proto.getString = function() { return String$(this.first.getString().value + ".." + this.last.getString().value); }
Range$proto.equals = function(other) {
if (!other) { return getFalse(); }
var eqf = this.first.equals(other.getFirst());
var eql = this.last.equals(other.getLast());
return Boolean$(eqf === getTrue() && eql === getTrue());
}
Range$proto.getIterator = function() { return RangeIterator(this); }
function RangeIterator(range) {
var that = new RangeIterator.$$;
that.range = range;
that.current = range.getFirst();
return that;
}
initType(RangeIterator, 'ceylon.language.RangeIterator', IdentifiableObject, Iterator);
inheritProto(RangeIterator, IdentifiableObject, '$IdentifiableObject$');
var RangeIterator$proto = RangeIterator.$$.prototype;
RangeIterator$proto.next = function() {
var rval = this.current;
if (rval.equals($finished) === getTrue()) {
return rval;
} else if (rval.equals(this.range.getLast()) === getTrue()) {
this.current = $finished;
} else {
this.current = this.range.next(this.current);
}
return rval;
}
function Entry(key, item) {
var that = new Entry.$$;
Object$(that);
Void(that);
that.key = key;
that.item = item;
return that;
}
initType(Entry, 'ceylon.language.Entry', Object$);
inheritProto(Entry, Object$, '$Object$');
var Entry$proto = Entry.$$.prototype;
Entry$proto.getString = function() {
return String$(this.key.getString().value + "->" + this.item.getString().value);
}
Entry$proto.getKey = function() { return this.key; }
Entry$proto.getItem = function() { return this.item; }
Entry$proto.equals = function(other) {
return Boolean$(other && this.getKey().equals(other.getKey()) === $true && this.getItem().equals(other.getItem()) === $true);
}
Entry$proto.getHash = function() { Integer(this.key.getHash().value ^ this.item.getHash().value); }
exports.Exception=Exception;
exports.IdentifiableObject=IdentifiableObject;
exports.Object=Object$;
exports.Boolean=Boolean$;
exports.Comparison=Comparison;
exports.getNull=getNull;
exports.getTrue=getTrue;
exports.getFalse=getFalse;
exports.getExhausted=getExhausted;
exports.Range=Range;
exports.Entry=Entry;
});
}(typeof define==='function' && define.amd ?
define : function (factory) {
if (typeof exports!=='undefined') {
factory(require, exports, module);
} else {
throw "no module loader";
}
}));
