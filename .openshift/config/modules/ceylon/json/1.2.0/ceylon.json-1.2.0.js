(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/json/1.2.0/ceylon.json-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.json/1.2.0');
var m$2=require('ceylon/collection/1.2.0/ceylon.collection-1.2.0');
m$1.$addmod$(m$2,'ceylon.collection/1.2.0');
function $_Array($wghd6m$2pl,array$){
$init$$_Array();
if(array$===undefined)array$=new $_Array.$$;
array$.$$targs$$={Element$MutableList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])};
if($wghd6m$2pl===undefined){$wghd6m$2pl=m$1.empty();}
array$.$wghd6m$2pl_=$wghd6m$2pl;
m$2.MutableList({Element$MutableList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])},array$);
array$.$wghd6m$2pm_=m$2.LinkedList(array$.$wghd6m$2pl,{Element$LinkedList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])});
return array$;
}
$_Array.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'values',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:Value(),Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:m$2.MutableList,a:{Element$MutableList:Value()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Array']};};
ex$.$_Array=$_Array;
function $init$$_Array(){
if($_Array.$$===undefined){
m$1.initTypeProto($_Array,'ceylon.json::Array',m$1.Basic,m$2.MutableList);
(function(array$){
m$1.atr$(array$,'$wghd6m$2pl',function(){return this.$wghd6m$2pl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:Value(),Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,d:['ceylon.json','Array','$at','values$vcoj45']};});
m$1.atr$(array$,'$wghd6m$2pm',function(){return this.$wghd6m$2pm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:Value()}},$cont:$_Array,d:['ceylon.json','Array','$at','list$eh7yhj']};});
array$.iterator=function(){var array$=this;
return array$.$wghd6m$2pm.iterator();};array$.getFromFirst=function($2pn){var array$=this;
return array$.$wghd6m$2pm.getFromFirst($2pn);};array$.add=function($2po){var array$=this;
return array$.$wghd6m$2pm.add($2po);};
array$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$m:add')];},d:['ceylon.json','Array','$m','add']};};
m$1.atr$(array$,'size',function(){
var array$=this;
return array$.$wghd6m$2pm.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:size')];},d:['ceylon.json','Array','$at','size']};});
m$1.atr$(array$,'string',function(){
var array$=this;
var $2pp=StringEmitter();
visit(array$,$2pp);
return $2pp.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Array,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:string')];},d:['ceylon.json','Array','$at','string']};});m$1.atr$(array$,'pretty',function(){
var array$=this;
var $2pq=StringEmitter(true);
visit(array$,$2pq,true);
return $2pq.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:pretty')];},d:['ceylon.json','Array','$at','pretty']};});array$.clone=function(){var array$=this;
return $_Array(array$.$wghd6m$2pm);};
array$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','clone']};};
m$1.atr$(array$,'lastIndex',function(){
var array$=this;
return array$.$wghd6m$2pm.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','lastIndex']};});
m$1.atr$(array$,'reversed',function(){
var array$=this;
return $_Array(array$.$wghd6m$2pm.reversed);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Array},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','reversed']};});
m$1.atr$(array$,'rest',function(){
var array$=this;
return $_Array(array$.$wghd6m$2pm.rest);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Array},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','rest']};});
array$.measure=function($2pr,$2ps){var array$=this;
return $_Array(array$.$wghd6m$2pm.measure($2pr,$2ps));};
array$.measure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','measure']};};
array$.span=function($2pt,$2pu){var array$=this;
return $_Array(array$.$wghd6m$2pm.span($2pt,$2pu));};
array$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','span']};};
array$.spanFrom=function($2pv){var array$=this;
return $_Array(array$.$wghd6m$2pm.spanFrom($2pv));};
array$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','spanFrom']};};
array$.spanTo=function($2pw){var array$=this;
return $_Array(array$.$wghd6m$2pm.spanTo($2pw));};
array$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','spanTo']};};
array$.addAll=function($2px){var array$=this;
return array$.$wghd6m$2pm.addAll($2px);};array$.clear=function(){var array$=this;
return array$.$wghd6m$2pm.clear();};array$.insert=function($2py,$2pz){var array$=this;
return array$.$wghd6m$2pm.insert($2py,$2pz);};array$.insertAll=function($2q0,$2q1){var array$=this;
return array$.$wghd6m$2pm.insertAll($2q0,$2q1);};array$.$_delete=function($2q2){var array$=this;
return array$.$wghd6m$2pm.$_delete($2q2);};array$.deleteMeasure=function($2q3,$2q4){var array$=this;
return array$.$wghd6m$2pm.deleteMeasure($2q3,$2q4);};array$.deleteSpan=function($2q5,$2q6){var array$=this;
return array$.$wghd6m$2pm.deleteSpan($2q5,$2q6);};array$.remove=function($2q7){var array$=this;
return array$.$wghd6m$2pm.remove($2q7);};array$.removeAll=function($2q8){var array$=this;
return array$.$wghd6m$2pm.removeAll($2q8);};array$.removeFirst=function($2q9){var array$=this;
return array$.$wghd6m$2pm.removeFirst($2q9);};array$.removeLast=function($2qa){var array$=this;
return array$.$wghd6m$2pm.removeLast($2qa);};array$.prune=function(){var array$=this;
return array$.$wghd6m$2pm.prune();};array$.truncate=function($2qb){var array$=this;
return array$.$wghd6m$2pm.truncate($2qb);};array$.$_replace=function($2qc,$2qd){var array$=this;
return array$.$wghd6m$2pm.$_replace($2qc,$2qd);};array$.replaceFirst=function($2qe,$2qf){var array$=this;
return array$.$wghd6m$2pm.replaceFirst($2qe,$2qf);};array$.replaceLast=function($2qg,$2qh){var array$=this;
return array$.$wghd6m$2pm.replaceLast($2qg,$2qh);};array$.infill=function($2qi){var array$=this;
return array$.$wghd6m$2pm.infill($2qi);};array$.set=function($2qj,$2qk){var array$=this;
return array$.$wghd6m$2pm.set($2qj,$2qk);};m$1.atr$(array$,'hash',function(){
var array$=this;
return array$.$wghd6m$2pm.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Array,pa:3,d:['ceylon.json','Array','$at','hash']};});
array$.equals=function($2ql){
var array$=this;
var $2qm;
if(m$1.is$(($2qm=$2ql),{t:$_Array})){
return (($2qm===array$)||array$.$wghd6m$2pm.equals($2qm.$wghd6m$2pm));
}
function $2qn(){return $2ql;}
return false;
};array$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Array,pa:3,d:['ceylon.json','Array','$m','equals']};};
array$.$wghd6m$2qo=function($2qp){
var array$=this;
var $2qq;
if(m$1.is$(($2qq=$2qp),{t:$_Object})){
return $2qq;
}
function $2qr(){return $2qp;}
throw m$1.wrapexc(InvalidTypeException("Expecting Object but got ".plus(($2qs=$2qr(),m$1.nn$($2qs)?$2qs:"null").string).plus("")),'118:8-119:61','ceylon/json/Array.ceylon');
var $2qs;
};array$.$wghd6m$2qo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkObject$ioowmw']};};
m$1.atr$(array$,'objects',function(){
var array$=this;
return m$1.for$(function(){
var $2qt=array$.$wghd6m$2pm.iterator(),$2qu=m$1.finished();
var n$2qu=function(){return $2qu=$2qt.next();}
return function(){
if(n$2qu()!==m$1.finished()){
var $2qv=$2qu,$2qw=array$.$wghd6m$2qo($2qv);
return $2qw;
}
return m$1.finished();
}
},{Element$Iterable:{t:$_Object},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:$_Object},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:objects'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not an [[Object]].")];},d:['ceylon.json','Array','$at','objects']};});
array$.$wghd6m$2qx=function($2qy){
var array$=this;
var $2qz;
if(m$1.is$(($2qz=$2qy),{t:m$1.$_String})){
return $2qz;
}
function $2r0(){return $2qy;}
throw m$1.wrapexc(InvalidTypeException("Expecting String but got ".plus(($2r1=$2r0(),m$1.nn$($2r1)?$2r1:"null").string).plus("")),'133:8-134:61','ceylon/json/Array.ceylon');
var $2r1;
};array$.$wghd6m$2qx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkString$9ziptm']};};
m$1.atr$(array$,'strings',function(){
var array$=this;
return m$1.for$(function(){
var $2r2=array$.$wghd6m$2pm.iterator(),$2r3=m$1.finished();
var n$2r3=function(){return $2r3=$2r2.next();}
return function(){
if(n$2r3()!==m$1.finished()){
var $2r4=$2r3,$2r5=array$.$wghd6m$2qx($2r4);
return $2r5;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:strings'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[String]].")];},d:['ceylon.json','Array','$at','strings']};});
array$.$wghd6m$2r6=function($2r7){
var array$=this;
var $2r8;
if(m$1.is$(($2r8=$2r7),{t:m$1.Integer})){
return $2r8;
}
function $2r9(){return $2r7;}
throw m$1.wrapexc(InvalidTypeException("Expecting Integer but got ".plus(($2ra=$2r9(),m$1.nn$($2ra)?$2ra:"null").string).plus("")),'148:8-149:62','ceylon/json/Array.ceylon');
var $2ra;
};array$.$wghd6m$2r6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkInteger$4waw35']};};
m$1.atr$(array$,'integers',function(){
var array$=this;
return m$1.for$(function(){
var $2rb=array$.$wghd6m$2pm.iterator(),$2rc=m$1.finished();
var n$2rc=function(){return $2rc=$2rb.next();}
return function(){
if(n$2rc()!==m$1.finished()){
var $2rd=$2rc,$2re=array$.$wghd6m$2r6($2rd);
return $2re;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.Integer},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Integer},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:integers'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Integer]].")];},d:['ceylon.json','Array','$at','integers']};});
array$.$wghd6m$2rf=function($2rg){
var array$=this;
var $2rh;
if(m$1.is$(($2rh=$2rg),{t:m$1.Float})){
return $2rh;
}
function $2ri(){return $2rg;}
throw m$1.wrapexc(InvalidTypeException("Expecting Float but got ".plus(($2rj=$2ri(),m$1.nn$($2rj)?$2rj:"null").string).plus("")),'163:8-164:60','ceylon/json/Array.ceylon');
var $2rj;
};array$.$wghd6m$2rf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Float},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkFloat$zgce4d']};};
m$1.atr$(array$,'floats',function(){
var array$=this;
return m$1.for$(function(){
var $2rk=array$.$wghd6m$2pm.iterator(),$2rl=m$1.finished();
var n$2rl=function(){return $2rl=$2rk.next();}
return function(){
if(n$2rl()!==m$1.finished()){
var $2rm=$2rl,$2rn=array$.$wghd6m$2rf($2rm);
return $2rn;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.Float},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Float},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:floats'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Float]].")];},d:['ceylon.json','Array','$at','floats']};});
array$.$wghd6m$2ro=function($2rp){
var array$=this;
var $2rq;
if(m$1.is$(($2rq=$2rp),{t:m$1.$_Boolean})){
return $2rq;
}
function $2rr(){return $2rp;}
throw m$1.wrapexc(InvalidTypeException("Expecting Boolean but got ".plus(($2rs=$2rr(),m$1.nn$($2rs)?$2rs:"null").string).plus("")),'178:8-179:62','ceylon/json/Array.ceylon');
var $2rs;
};array$.$wghd6m$2ro.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkBoolean$v3xsa1']};};
m$1.atr$(array$,'booleans',function(){
var array$=this;
return m$1.for$(function(){
var $2rt=array$.$wghd6m$2pm.iterator(),$2ru=m$1.finished();
var n$2ru=function(){return $2ru=$2rt.next();}
return function(){
if(n$2ru()!==m$1.finished()){
var $2rv=$2ru,$2rw=array$.$wghd6m$2ro($2rv);
return $2rw;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.$_Boolean},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.$_Boolean},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:booleans'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not a [[Boolean]].")];},d:['ceylon.json','Array','$at','booleans']};});
array$.$wghd6m$2rx=function($2ry){
var array$=this;
var $2rz;
if(m$1.is$(($2rz=$2ry),{t:$_Array})){
return $2rz;
}
function $2s0(){return $2ry;}
throw m$1.wrapexc(InvalidTypeException("Expecting Array but got ".plus(($2s1=$2s0(),m$1.nn$($2s1)?$2s1:"null").string).plus("")),'193:8-194:60','ceylon/json/Array.ceylon');
var $2s1;
};array$.$wghd6m$2rx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:$_Array,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkArray$61ubg2']};};
m$1.atr$(array$,'arrays',function(){
var array$=this;
return m$1.for$(function(){
var $2s2=array$.$wghd6m$2pm.iterator(),$2s3=m$1.finished();
var n$2s3=function(){return $2s3=$2s2.next();}
return function(){
if(n$2s3()!==m$1.finished()){
var $2s4=$2s3,$2s5=array$.$wghd6m$2rx($2s4);
return $2s5;
}
return m$1.finished();
}
},{Element$Iterable:{t:$_Array},Absent$Iterable:{t:m$1.Null}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:$_Array},Absent$Iterable:{t:m$1.Null}}},$cont:$_Array,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Array:$at:arrays'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If one element in this array is not an [[Array]].")];},d:['ceylon.json','Array','$at','arrays']};});
})($_Array.$$.prototype);
}
return $_Array;
}
ex$.$init$$_Array=$init$$_Array;
$init$$_Array();
function Builder(builder$){
$init$Builder();
if(builder$===undefined)builder$=new Builder.$$;
Visitor(builder$);
builder$.$wghd6m$2s6_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])});
builder$.$wghd6m$2s7_=null;
return builder$;
}
Builder.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Visitor}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Builder'),m$1.by(["Tom Bentley"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Builder']};};
ex$.Builder=Builder;
function $init$Builder(){
if(Builder.$$===undefined){
m$1.initTypeProto(Builder,'ceylon.json::Builder',m$1.Basic,$init$Visitor());
(function(builder$){
m$1.atr$(builder$,'$wghd6m$2s6',function(){return this.$wghd6m$2s6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:Value()}},$cont:Builder,d:['ceylon.json','Builder','$at','stack$utn8fx']};});
m$1.atr$(builder$,'$wghd6m$2s7',function(){return this.$wghd6m$2s7_;},function($2s8){return this.$wghd6m$2s7_=$2s8;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Builder,pa:1027,d:['ceylon.json','Builder','$at','currentKey$xesi29']};});
m$1.atr$(builder$,'result',function(){
var builder$=this;
if(((builder$.$wghd6m$2s6.size).valueOf()==(1).valueOf())&&!m$1.nn$(builder$.$wghd6m$2s7)){
return builder$.$wghd6m$2s6.$_pop();
}
else{
throw m$1.wrapexc(m$1.AssertionError("currenyKey=".plus(($2s9=builder$.$wghd6m$2s7,m$1.nn$($2s9)?$2s9:"null")).plus(", stack=").plus(builder$.$wghd6m$2s6.string).plus("")),'27:12-27:91','ceylon/json/Builder.ceylon');
var $2s9;
}
},undefined,function(){return{mod:$CCMM$,$t:Value(),$cont:Builder,pa:1,an:function(){return[m$1.doc("The constructed [[Value]]."),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"The builder has not yet seen enough input to return a fully formed JSON value.")];},d:['ceylon.json','Builder','$at','result']};});builder$.$wghd6m$2sa=function($2sb){
var builder$=this;
var $2sc=builder$.$wghd6m$2s6.last;
var $2sd=$2sc;
if(m$1.is$($2sd,{t:$_Object})) {
var $2se;
if(m$1.nn$(($2se=builder$.$wghd6m$2s7))){
var $2sf;
if(m$1.nn$(($2sf=$2sd.put($2se,$2sb)))){
throw m$1.wrapexc(m$1.AssertionError("duplicate key ".plus($2se).plus("")),'37:20-37:64','ceylon/json/Builder.ceylon');
}
builder$.$wghd6m$2s7=null;
}
else{
m$1.asrt$((false),"value within object without key: \'false\' at Builder.ceylon (42:22-42:28)",'41:16-42:29','Builder.ceylon');
}
}
else if(m$1.is$($2sd,{t:$_Array})) {
$2sd.add($2sb);
}
else if(m$1.is$($2sd,{t:m$1.Null})) {
}
else{
throw m$1.wrapexc(m$1.AssertionError("cannot add value to ".plus(m$1.type$meta($2sd,{Type$type:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float}])}).string).plus("")),'52:12-52:73','ceylon/json/Builder.ceylon');
}
};builder$.$wghd6m$2sa.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:Value()}],$cont:Builder,d:['ceylon.json','Builder','$m','addToCurrent$lxw5io']};};
builder$.$wghd6m$2sg=function($2sh){
var builder$=this;
if(builder$.$wghd6m$2s6.empty){
builder$.$wghd6m$2s6.$_push($2sh);
}
if(m$1.is$($2sh,m$1.mut$([{t:$_Object},{t:$_Array}]))){
builder$.$wghd6m$2s6.$_push($2sh);
}
};builder$.$wghd6m$2sg.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:Value()}],$cont:Builder,d:['ceylon.json','Builder','$m','push$ml0ud7']};};
builder$.$wghd6m$2si=function(){
var builder$=this;
builder$.$wghd6m$2s6.$_pop();
};builder$.$wghd6m$2si.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,d:['ceylon.json','Builder','$m','pop$r7gvbw']};};
builder$.onStartObject=function(){
var builder$=this;
var $2sj=($_Object(undefined));
builder$.$wghd6m$2sa($2sj);
builder$.$wghd6m$2sg($2sj);
};builder$.onStartObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onStartObject']};};
builder$.onKey=function($2sk){
var builder$=this;
builder$.$wghd6m$2s7=$2sk;
};builder$.onKey.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onKey']};};
builder$.onEndObject=function(){
var builder$=this;
builder$.$wghd6m$2si();
};builder$.onEndObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onEndObject']};};
builder$.onStartArray=function(){
var builder$=this;
var $2sl=$_Array();
builder$.$wghd6m$2sa($2sl);
builder$.$wghd6m$2sg($2sl);
};builder$.onStartArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onStartArray']};};
builder$.onEndArray=function(){
var builder$=this;
builder$.$wghd6m$2si();
};builder$.onEndArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onEndArray']};};
builder$.onNumber=function($2sm){
var builder$=this;
builder$.$wghd6m$2sa($2sm);
builder$.$wghd6m$2sg($2sm);
};builder$.onNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'num',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onNumber']};};
builder$.onBoolean=function($2sn){
var builder$=this;
builder$.$wghd6m$2sa($2sn);
builder$.$wghd6m$2sg($2sn);
};builder$.onBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'bool',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onBoolean']};};
builder$.onNull=function(){
var builder$=this;
builder$.$wghd6m$2sa(null);
builder$.$wghd6m$2sg(null);
};builder$.onNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onNull']};};
builder$.onString=function($2so){
var builder$=this;
builder$.$wghd6m$2sa($2so);
builder$.$wghd6m$2sg($2so);
};builder$.onString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Builder,pa:3,d:['ceylon.json','Builder','$m','onString']};};
})(Builder.$$.prototype);
}
return Builder;
}
ex$.$init$Builder=$init$Builder;
$init$Builder();
function Emitter($wghd6m$2sp,emitter$){
$init$Emitter();
if(emitter$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Emitter"),'?','?')
emitter$.$wghd6m$2sp_=$wghd6m$2sp;
Visitor(emitter$);
emitter$.$wghd6m$2sq_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Integer}});
return emitter$;
}
Emitter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'pretty',mt:'prm',$t:{t:m$1.$_Boolean}}],sts:[{t:Visitor}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter'),m$1.by(["Tom Bentley"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Emitter']};};
ex$.Emitter=Emitter;
function $init$Emitter(){
if(Emitter.$$===undefined){
m$1.initTypeProto(Emitter,'ceylon.json::Emitter',m$1.Basic,$init$Visitor());
(function(emitter$){
m$1.atr$(emitter$,'$wghd6m$2sp',function(){return this.$wghd6m$2sp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Emitter,d:['ceylon.json','Emitter','$at','pretty$8sysk4']};});
m$1.atr$(emitter$,'$wghd6m$2sq',function(){return this.$wghd6m$2sq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:m$1.Integer}}},$cont:Emitter,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$at:state$ilnlu7')];},d:['ceylon.json','Emitter','$at','state$ilnlu7']};});
m$1.atr$(emitter$,'$wghd6m$2sr',function(){
var emitter$=this;
return emitter$.$wghd6m$2sq.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Emitter,d:['ceylon.json','Emitter','$at','level$4mlxvu']};});
emitter$.$wghd6m$2ss=function(){
var emitter$=this;
if(emitter$.$wghd6m$2sp){
emitter$.print("\n");
if((emitter$.$wghd6m$2sr>0)){
var $2su=(0),$2st=emitter$.$wghd6m$2sr.minus(1),$2sv=$2su.compare($2st),$2sw=$2sv===m$1.smaller()?'successor':'predecessor';for(var $2sx=m$1.eorl$($2sv);$2sx($2st,$2su);$2su=$2su[$2sw]){
emitter$.print(" ");
}
}
}
};emitter$.$wghd6m$2ss.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,d:['ceylon.json','Emitter','$m','indent$dqjjny']};};
emitter$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$m:print')];},d:['ceylon.json','Emitter','$m','print']};}};emitter$.$wghd6m$2sy=function(){
var emitter$=this;
var $2sz;
if(m$1.nn$(($2sz=emitter$.$wghd6m$2sq.last))){
if(($2sz<(-1))){
emitter$.print(",");
emitter$.$wghd6m$2ss();
}
else{
if((($2sz).valueOf()==((-1)).valueOf())){
emitter$.$wghd6m$2ss();
}
}
if(($2sz<0)){
emitter$.$wghd6m$2sq.set(emitter$.$wghd6m$2sq.size.minus(1),$2sz.minus(1));
}
else{
emitter$.$wghd6m$2sq.set(emitter$.$wghd6m$2sq.size.minus(1),$2sz.plus(1));
}
}
};emitter$.$wghd6m$2sy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Emitter:$m:emitValue$jk96z8')];},d:['ceylon.json','Emitter','$m','emitValue$jk96z8']};};
emitter$.onStartObject=function(){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.print("{");
emitter$.$wghd6m$2sq.$_push(1);
};emitter$.onStartObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,an:function(){return[m$1.doc("Prints an `Object`")];},d:['ceylon.json','Emitter','$m','onStartObject']};};
emitter$.onKey=function($2t0){
var emitter$=this;
var $2t1;
if(m$1.nn$(($2t1=emitter$.$wghd6m$2sq.last))&&($2t1>1)){
emitter$.print(",");
}
emitter$.$wghd6m$2ss();
emitter$.$wghd6m$2t2($2t0);
emitter$.print(":");
if(emitter$.$wghd6m$2sp){
emitter$.print(" ");
}
};emitter$.onKey.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onKey']};};
emitter$.onEndObject=function(){
var emitter$=this;
var $2t3;
if(m$1.nn$(($2t3=emitter$.$wghd6m$2sq.$_pop()))&&!($2t3==1)){
emitter$.$wghd6m$2ss();
}
emitter$.print("}");
};emitter$.onEndObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onEndObject']};};
emitter$.onStartArray=function(){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.print("[");
emitter$.$wghd6m$2sq.$_push((-1));
};emitter$.onStartArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onStartArray']};};
emitter$.onEndArray=function(){
var emitter$=this;
var $2t4;
if(m$1.nn$(($2t4=emitter$.$wghd6m$2sq.$_pop()))&&!($2t4==(-1))){
emitter$.$wghd6m$2ss();
}
emitter$.print("]");
};emitter$.onEndArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onEndArray']};};
emitter$.onString=function($2t5){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.$wghd6m$2t2($2t5);
};emitter$.onString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onString']};};
emitter$.$wghd6m$2t2=function($2t6){
var emitter$=this;
emitter$.print("\"");
var $2t8;for(var $2t7=$2t6.iterator();($2t8=$2t7.next())!==m$1.finished();){
if($2t8.equals(m$1.Character(34,true))){
emitter$.print("\\".plus("\""));
}
else{
if($2t8.equals(m$1.Character(92,true))){
emitter$.print("\\\\");
}
else{
if($2t8.equals(m$1.Character(47,true))){
emitter$.print("\\".plus("/"));
}
else{
if($2t8.equals((8).character)){
emitter$.print("\\".plus("b"));
}
else{
if($2t8.equals((12).character)){
emitter$.print("\\".plus("f"));
}
else{
if($2t8.equals((10).character)){
emitter$.print("\\".plus("n"));
}
else{
if($2t8.equals((13).character)){
emitter$.print("\\".plus("r"));
}
else{
if($2t8.equals((9).character)){
emitter$.print("\\".plus("t"));
}
else{
emitter$.print($2t8.string);
}
}
}
}
}
}
}
}
}
emitter$.print("\"");
};emitter$.$wghd6m$2t2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Emitter,an:function(){return[m$1.doc("Prints a `String`")];},d:['ceylon.json','Emitter','$m','printString$38as7o']};};
emitter$.onNumber=function($2t9){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.print($2t9.string);
};emitter$.onNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'n',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onNumber']};};
emitter$.onBoolean=function($2ta){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.print($2ta.string);
};emitter$.onBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onBoolean']};};
emitter$.onNull=function(){
var emitter$=this;
emitter$.$wghd6m$2sy();
emitter$.print("null");
};emitter$.onNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Emitter,pa:3,d:['ceylon.json','Emitter','$m','onNull']};};
})(Emitter.$$.prototype);
}
return Emitter;
}
ex$.$init$Emitter=$init$Emitter;
$init$Emitter();
function StringEmitter($wghd6m$2tb,stringEmitter$){
$init$StringEmitter();
if(stringEmitter$===undefined)stringEmitter$=new StringEmitter.$$;
if($wghd6m$2tb===undefined){$wghd6m$2tb=false;}
stringEmitter$.$wghd6m$2tb_=$wghd6m$2tb;
Emitter($wghd6m$2tb,stringEmitter$);
stringEmitter$.$wghd6m$2tc_=m$1.StringBuilder();
return stringEmitter$;
}
StringEmitter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Emitter},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringEmitter'),m$1.by(["Tom Bentley"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','StringEmitter']};};
ex$.StringEmitter=StringEmitter;
function $init$StringEmitter(){
if(StringEmitter.$$===undefined){
m$1.initTypeProto(StringEmitter,'ceylon.json::StringEmitter',$init$Emitter());
(function(stringEmitter$){
m$1.atr$(stringEmitter$,'$wghd6m$2tb',function(){return this.$wghd6m$2tb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringEmitter,d:['ceylon.json','StringEmitter','$at','pretty$c2sib1']};});
m$1.atr$(stringEmitter$,'$wghd6m$2tc',function(){return this.$wghd6m$2tc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:StringEmitter,d:['ceylon.json','StringEmitter','$at','builder$b3xuq8']};});
stringEmitter$.print=function($2td){var stringEmitter$=this;
return stringEmitter$.$wghd6m$2tc.append($2td);};
stringEmitter$.print.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringEmitter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringEmitter:$m:print')];},d:['ceylon.json','StringEmitter','$m','print']};};
m$1.atr$(stringEmitter$,'string',function(){
var stringEmitter$=this;
return stringEmitter$.$wghd6m$2tc.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringEmitter,pa:11,an:function(){return[m$1.doc("Returns the printed JSON")];},d:['ceylon.json','StringEmitter','$at','string']};});
})(StringEmitter.$$.prototype);
}
return StringEmitter;
}
ex$.$init$StringEmitter=$init$StringEmitter;
$init$StringEmitter();
function InvalidTypeException($wghd6m$2te,invalidTypeException$){
$init$InvalidTypeException();
if(invalidTypeException$===undefined)invalidTypeException$=new InvalidTypeException.$$;
invalidTypeException$.$wghd6m$2te_=$wghd6m$2te;
m$1.Exception($wghd6m$2te,undefined,invalidTypeException$);
return invalidTypeException$;
}
InvalidTypeException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:InvalidTypeException')];},d:['ceylon.json','InvalidTypeException']};};
ex$.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
if(InvalidTypeException.$$===undefined){
m$1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',m$1.Exception);
(function(invalidTypeException$){
m$1.atr$(invalidTypeException$,'$wghd6m$2te',function(){return this.$wghd6m$2te_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InvalidTypeException,d:['ceylon.json','InvalidTypeException','$at','message$jqbjmt']};});
})(InvalidTypeException.$$.prototype);
}
return InvalidTypeException;
}
ex$.$init$InvalidTypeException=$init$InvalidTypeException;
$init$InvalidTypeException();
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Stéphane Épardaud","Tom Bentley"].$sa$({t:m$1.$_String})),m$1.license("Apache Software License")];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.2.0':function(){return[m$1.shared()];}
};};
function $_Object($wghd6m$2tf,object$){
$init$$_Object();
if(object$===undefined)object$=new $_Object.$$;
object$.$$targs$$={Key$MutableMap:{t:m$1.$_String},Item$MutableMap:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])};
if($wghd6m$2tf===undefined){$wghd6m$2tf=m$1.empty();}
object$.$wghd6m$2tf_=$wghd6m$2tf;
m$2.MutableMap({Key$MutableMap:{t:m$1.$_String},Item$MutableMap:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])},object$);
object$.$wghd6m$2tg_=($2th=object$.$wghd6m$2tf,m$2.HashMap(undefined,undefined,$2th,{Key$HashMap:{t:m$1.$_String},Item$HashMap:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}));
var $2th;
return object$;
}
$_Object.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'values',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:m$2.MutableMap,a:{Key$MutableMap:{t:m$1.$_String},Item$MutableMap:Value()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Object']};};
ex$.$_Object=$_Object;
function $init$$_Object(){
if($_Object.$$===undefined){
m$1.initTypeProto($_Object,'ceylon.json::Object',m$1.Basic,m$2.MutableMap);
(function(object$){
m$1.atr$(object$,'$wghd6m$2tf',function(){return this.$wghd6m$2tf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}},$cont:$_Object,d:['ceylon.json','Object','$at','values$6zuosx']};});
m$1.atr$(object$,'$wghd6m$2tg',function(){return this.$wghd6m$2tg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.HashMap,a:{Key$HashMap:{t:m$1.$_String},Item$HashMap:Value()}},$cont:$_Object,d:['ceylon.json','Object','$at','contents$adyvg7']};});
m$1.atr$(object$,'string',function(){
var object$=this;
var $2ti=StringEmitter();
visit(object$,$2ti);
return $2ti.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Object,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$at:string')];},d:['ceylon.json','Object','$at','string']};});m$1.atr$(object$,'pretty',function(){
var object$=this;
var $2tj=StringEmitter(true);
visit(object$,$2tj,true);
return $2tj.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$at:pretty')];},d:['ceylon.json','Object','$at','pretty']};});object$.clear=function(){var object$=this;
return object$.$wghd6m$2tg.clear();};
object$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','clear']};};
object$.clone=function(){var object$=this;
return $_Object(object$.$wghd6m$2tg);};
object$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','clone']};};
object$.$_get=function($2tk){var object$=this;
return object$.$wghd6m$2tg.$_get($2tk);};object$.defines=function($2tl){var object$=this;
return object$.$wghd6m$2tg.defines($2tl);};object$.iterator=function(){var object$=this;
return object$.$wghd6m$2tg.iterator();};object$.put=function($2tm,$2tn){var object$=this;
return object$.$wghd6m$2tg.put($2tm,$2tn);};object$.putAll=function($2to){var object$=this;
return object$.$wghd6m$2tg.putAll($2to);};object$.remove=function($2tp){var object$=this;
return object$.$wghd6m$2tg.remove($2tp);};m$1.atr$(object$,'size',function(){
var object$=this;
return object$.$wghd6m$2tg.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Object,pa:3,d:['ceylon.json','Object','$at','size']};});
m$1.atr$(object$,'hash',function(){
var object$=this;
return object$.$wghd6m$2tg.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Object,pa:3,d:['ceylon.json','Object','$at','hash']};});
object$.equals=function($2tq){
var object$=this;
var $2tr;
if(m$1.is$(($2tr=$2tq),{t:$_Object})){
return ((object$===$2tr)||object$.$wghd6m$2tg.equals($2tr.$wghd6m$2tg));
}
function $2ts(){return $2tq;}
return false;
};object$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Object,pa:3,d:['ceylon.json','Object','$m','equals']};};
object$.getInteger=function($2tt){
var object$=this;
var $2tu=object$.$_get($2tt);
var $2tv;
if(m$1.is$(($2tv=$2tu),{t:m$1.Integer})){
return $2tv;
}
function $2tw(){return $2tu;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Integer but got: ".plus(($2tx=$2tw(),m$1.nn$($2tx)?$2tx:"null").string).plus("")),'69:8-71:32','ceylon/json/Object.ceylon');
var $2tx;
};object$.getInteger.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Integer]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Integer]].")];},d:['ceylon.json','Object','$m','getInteger']};};
object$.getFloat=function($2ty){
var object$=this;
var $2tz=object$.$_get($2ty);
var $2u0;
if(m$1.is$(($2u0=$2tz),{t:m$1.Float})){
return $2u0;
}
function $2u1(){return $2tz;}
throw m$1.wrapexc(InvalidTypeException("Expecting a Float but got: ".plus(($2u2=$2u1(),m$1.nn$($2u2)?$2u2:"null").string).plus("")),'83:8-85:32','ceylon/json/Object.ceylon');
var $2u2;
};object$.getFloat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Float},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Float]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Float]].")];},d:['ceylon.json','Object','$m','getFloat']};};
object$.getBoolean=function($2u3){
var object$=this;
var $2u4=object$.$_get($2u3);
var $2u5;
if(m$1.is$(($2u5=$2u4),{t:m$1.$_Boolean})){
return $2u5;
}
function $2u6(){return $2u4;}
throw m$1.wrapexc(InvalidTypeException("Expecting a Boolean but got: ".plus(($2u7=$2u6(),m$1.nn$($2u7)?$2u7:"null").string).plus("")),'97:8-99:32','ceylon/json/Object.ceylon');
var $2u7;
};object$.getBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Boolean]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Boolean]].")];},d:['ceylon.json','Object','$m','getBoolean']};};
object$.getString=function($2u8){
var object$=this;
var $2u9=object$.$_get($2u8);
var $2ua;
if(m$1.is$(($2ua=$2u9),{t:m$1.$_String})){
return $2ua;
}
function $2ub(){return $2u9;}
throw m$1.wrapexc(InvalidTypeException("Expecting a String but got: ".plus(($2uc=$2ub(),m$1.nn$($2uc)?$2uc:"null").string).plus("")),'111:8-113:32','ceylon/json/Object.ceylon');
var $2uc;
};object$.getString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[String]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[String]].")];},d:['ceylon.json','Object','$m','getString']};};
object$.getObject=function($2ud){
var object$=this;
var $2ue=object$.$_get($2ud);
var $2uf;
if(m$1.is$(($2uf=$2ue),{t:$_Object})){
return $2uf;
}
function $2ug(){return $2ue;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Object but got: ".plus(($2uh=$2ug(),m$1.nn$($2uh)?$2uh:"null").string).plus("")),'125:8-127:32','ceylon/json/Object.ceylon');
var $2uh;
};object$.getObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Object]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Object]].")];},d:['ceylon.json','Object','$m','getObject']};};
object$.getArray=function($2ui){
var object$=this;
var $2uj=object$.$_get($2ui);
var $2uk;
if(m$1.is$(($2uk=$2uj),{t:$_Array})){
return $2uk;
}
function $2ul(){return $2uj;}
throw m$1.wrapexc(InvalidTypeException("Expecting an Array but got: ".plus(($2um=$2ul(),m$1.nn$($2um)?$2um:"null").string).plus("")),'139:8-141:32','ceylon/json/Object.ceylon');
var $2um;
};object$.getArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc("Returns an [[Array]] value."),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key dot not exist or points to a type that \nis not [[Array]].")];},d:['ceylon.json','Object','$m','getArray']};};
object$.getIntegerOrNull=function($2un){
var object$=this;
var $2uo=object$.$_get($2un);
var $2up;
if(m$1.is$(($2up=$2uo),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]))){
return $2up;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Integer but got: ".plus($2up.string).plus("")),'157:12-158:56','ceylon/json/Object.ceylon');
}
};object$.getIntegerOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getIntegerOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Integer]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getIntegerOrNull']};};
object$.getFloatOrNull=function($2uq){
var object$=this;
var $2ur=object$.$_get($2uq);
var $2us;
if(m$1.is$(($2us=$2ur),m$1.mut$([{t:m$1.Null},{t:m$1.Float}]))){
return $2us;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a Float but got: ".plus($2us.string).plus("")),'173:12-174:53','ceylon/json/Object.ceylon');
}
};object$.getFloatOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getFloatOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Float]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getFloatOrNull']};};
object$.getBooleanOrNull=function($2ut){
var object$=this;
var $2uu=object$.$_get($2ut);
var $2uv;
if(m$1.is$(($2uv=$2uu),m$1.mut$([{t:m$1.Null},{t:m$1.$_Boolean}]))){
return $2uv;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a Boolean but got: ".plus($2uv.string).plus("")),'189:12-190:55','ceylon/json/Object.ceylon');
}
};object$.getBooleanOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getBooleanOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Boolean]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getBooleanOrNull']};};
object$.getStringOrNull=function($2uw){
var object$=this;
var $2ux=object$.$_get($2uw);
var $2uy;
if(m$1.is$(($2uy=$2ux),m$1.mut$([{t:m$1.$_String},{t:m$1.Null}]))){
return $2uy;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting a String but got: ".plus($2uy.string).plus("")),'205:12-206:54','ceylon/json/Object.ceylon');
}
};object$.getStringOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getStringOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[String]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getStringOrNull']};};
object$.getObjectOrNull=function($2uz){
var object$=this;
var $2v0=object$.$_get($2uz);
var $2v1;
if(m$1.is$(($2v1=$2v0),m$1.mut$([{t:m$1.Null},{t:$_Object}]))){
return $2v1;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Object but got: ".plus($2v1.string).plus("")),'221:12-222:55','ceylon/json/Object.ceylon');
}
};object$.getObjectOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Object}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getObjectOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Object]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getObjectOrNull']};};
object$.getArrayOrNull=function($2v2){
var object$=this;
var $2v3=object$.$_get($2v2);
var $2v4;
if(m$1.is$(($2v4=$2v3),m$1.mut$([{t:m$1.Null},{t:$_Array}]))){
return $2v4;
}
else{
throw m$1.wrapexc(InvalidTypeException("Expecting an Array but got: ".plus($2v4.string).plus("")),'237:12-238:54','ceylon/json/Object.ceylon');
}
};object$.getArrayOrNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Array}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:$_Object,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Object:$m:getArrayOrNull'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),InvalidTypeException),"If the key points to a type that is neither \n[[Array]] nor [[Null]].")];},d:['ceylon.json','Object','$m','getArrayOrNull']};};
})($_Object.$$.prototype);
}
return $_Object;
}
ex$.$init$$_Object=$init$$_Object;
$init$$_Object();
ex$.$pkg$ans$ceylon$json=function(){return[m$1.doc$($CCMM$,'ceylon.json','$pkg-anns'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String})),m$1.shared()];};
function parseTrue($2v5){
$2v5.eatSpacesUntil(m$1.Character(116,true));
$2v5.eat(m$1.Character(114,true));
$2v5.eat(m$1.Character(117,true));
$2v5.eat(m$1.Character(101,true));
return true;
}
ex$.parseTrue=parseTrue;
parseTrue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseTrue')];},d:['ceylon.json','parseTrue']};};
function parseFalse($2v6){
$2v6.eatSpacesUntil(m$1.Character(102,true));
$2v6.eat(m$1.Character(97,true));
$2v6.eat(m$1.Character(108,true));
$2v6.eat(m$1.Character(115,true));
$2v6.eat(m$1.Character(101,true));
return false;
}
ex$.parseFalse=parseFalse;
parseFalse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseFalse')];},d:['ceylon.json','parseFalse']};};
function parseNull($2v7){
$2v7.eatSpacesUntil(m$1.Character(110,true));
$2v7.eat(m$1.Character(117,true));
$2v7.eat(m$1.Character(108,true));
$2v7.eat(m$1.Character(108,true));
return null;
}
ex$.parseNull=parseNull;
parseNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Null},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseNull')];},d:['ceylon.json','parseNull']};};
function parseKeyOrString($2v8){
$2v8.eatSpacesUntil(m$1.Character(34,true));
var $2v9=m$1.StringBuilder();
while(!$2v8.check(m$1.Character(34,true))){
var $2va=$2v8.eatChar();
if($2va.equals(m$1.Character(92,true))){
$2v9.append(parseStringEscape($2v8).string);
}
else{
$2v9.append($2va.string);
}
}
return $2v9.string;
}
ex$.parseKeyOrString=parseKeyOrString;
parseKeyOrString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseKeyOrString')];},d:['ceylon.json','parseKeyOrString']};};
function parseStringEscape($2vb){
var $2vc=$2vb.eatChar();
if((($2vc.equals(m$1.Character(34,true))||$2vc.equals(m$1.Character(92,true)))||$2vc.equals(m$1.Character(47,true)))){
return $2vc;
}
if($2vc.equals(m$1.Character(98,true))){
return m$1.Character(8,true);
}
if($2vc.equals(m$1.Character(102,true))){
return m$1.Character(12,true);
}
if($2vc.equals(m$1.Character(114,true))){
return m$1.Character(13,true);
}
if($2vc.equals(m$1.Character(110,true))){
return m$1.Character(10,true);
}
if($2vc.equals(m$1.Character(116,true))){
return m$1.Character(9,true);
}
if($2vc.equals(m$1.Character(117,true))){
return parseStringUnicode($2vb);
}
throw m$1.wrapexc(ParseException("Expected String escape sequence, got ".plus($2vc.string).plus(" TERM "),$2vb.line,$2vb.column),'66:4-68:41','ceylon/json/parse.ceylon');
};parseStringEscape.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseStringEscape']};};
function parseStringUnicode($2vd){
var $2ve=parseHex($2vd).times((16).power(3)).plus(parseHex($2vd).times((16).power(2))).plus(parseHex($2vd).times(16)).plus(parseHex($2vd));
return $2ve.character;
};parseStringUnicode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseStringUnicode']};};
function parseHex($2vf){
var $2vg=$2vf.eatChar();
var $2vh=$2vg.integer;
if((($2vh>=m$1.Character(48,true).integer)&&($2vh<=m$1.Character(57,true).integer))){
return $2vh.minus(m$1.Character(48,true).integer);
}
if((($2vh>=m$1.Character(97,true).integer)&&($2vh<=m$1.Character(102,true).integer))){
return (10).plus($2vh).minus(m$1.Character(97,true).integer);
}
if((($2vh>=m$1.Character(65,true).integer)&&($2vh<=m$1.Character(70,true).integer))){
return (10).plus($2vh).minus(m$1.Character(65,true).integer);
}
throw m$1.wrapexc(ParseException("Expecting hex number, got ".plus($2vg.string).plus(""),$2vf.line,$2vf.column),'93:4-95:41','ceylon/json/parse.ceylon');
};parseHex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseHex']};};
function parseNumber($2vi){
$2vi.eatSpaces();
var $2vj=$2vi.check(m$1.Character(45,true));
var $2vk=parseDigits($2vi);
if(($2vi.hasMore&&$2vi.check(m$1.Character(46,true)))){
var $2vl=$2vi.position;
var $2vm=parseDigits($2vi);
var $2vn=$2vi.position.minus($2vl);
var $2vo=$2vk.$_float.plus($2vm.$_float.divided((10).power($2vn).$_float));
var $2vp=($2vq=($2vj?$2vo.negated:null),m$1.nn$($2vq)?$2vq:$2vo);
var $2vq;
var $2vr=parseExponent($2vi);
var $2vs;
if(m$1.nn$(($2vs=$2vr))){
return $2vp.times((10).$_float.power($2vs.$_float));
}
function $2vt(){return $2vr;}
return $2vp;
}
var $2vu=($2vv=($2vj?(-$2vk):null),m$1.nn$($2vv)?$2vv:$2vk);
var $2vv;
var $2vw=parseExponent($2vi);
var $2vx;
if(m$1.nn$(($2vx=$2vw))){
return $2vu.$_float.times((10).$_float.power($2vx.$_float));
}
function $2vy(){return $2vw;}
return $2vu;
}
ex$.parseNumber=parseNumber;
parseNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parseNumber')];},d:['ceylon.json','parseNumber']};};
function parseDigits($2vz){
var $2w0=$2vz.eatChar();
if(!$2vz.isDigit($2w0)){
throw m$1.wrapexc(ParseException("Expected digit, got: ".plus($2w0.string).plus(""),$2vz.line,$2vz.column),'129:8-131:45','ceylon/json/parse.ceylon');
}
var $2w1=parseDigit($2w0);
while(($2vz.hasMore&&$2vz.isDigit($2vz.character()))){
($2w1=$2w1.times(10));
($2w1=$2w1.plus(parseDigit($2vz.eatChar())));
}
return $2w1;
};parseDigits.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseDigits']};};
function parseDigit($2w2){return $2w2.integer.minus(m$1.Character(48,true).integer);};
parseDigit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],d:['ceylon.json','parseDigit']};};
function parseExponent($2w3){
if(($2w3.hasMore&&($2w3.check(m$1.Character(101,true))||$2w3.check(m$1.Character(69,true))))){
var $2w4;
if($2w3.check(m$1.Character(45,true))){
$2w4=true;
}
else{
if($2w3.check(m$1.Character(43,true))){
$2w4=false;
}
else{
$2w4=false;
}
}
var $2w5=parseDigits($2w3);
return ($2w6=($2w4?(-$2w5):null),m$1.nn$($2w6)?$2w6:$2w5);
var $2w6;
}
return null;
};parseExponent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer}}],d:['ceylon.json','parseExponent']};};
function Parser($wghd6m$2w7,visitor,parser$){
$init$Parser();
if(parser$===undefined)parser$=new Parser.$$;
parser$.$wghd6m$2w7_=$wghd6m$2w7;
parser$.visitor_=visitor;
return parser$;
}
Parser.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'tokenizer',mt:'prm',$t:{t:Tokenizer},an:function(){return[m$1.doc("The data to be parsed.")];}},{nm:'visitor',mt:'prm',$t:{t:Visitor},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser:$at:visitor')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Parser']};};
ex$.Parser=Parser;
function $init$Parser(){
if(Parser.$$===undefined){
m$1.initTypeProto(Parser,'ceylon.json::Parser',m$1.Basic);
(function(parser$){
m$1.atr$(parser$,'$wghd6m$2w7',function(){return this.$wghd6m$2w7_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tokenizer},$cont:Parser,an:function(){return[m$1.doc("The data to be parsed.")];},d:['ceylon.json','Parser','$at','tokenizer$6turdq']};});
m$1.atr$(parser$,'visitor',function(){return this.visitor_;},undefined,function(){return{mod:$CCMM$,$t:{t:Visitor},$cont:Parser,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Parser:$at:visitor')];},d:['ceylon.json','Parser','$at','visitor']};});
parser$.$wghd6m$2w8=function(){
var parser$=this;
parser$.visitor.onStartObject();
parser$.$wghd6m$2w7.eatSpacesUntil(m$1.Character(123,true));
parser$.$wghd6m$2w7.eatSpaces();
if(!parser$.$wghd6m$2w7.check(m$1.Character(125,true))){
while(true){
var $2w9=parseKeyOrString(parser$.$wghd6m$2w7);
parser$.$wghd6m$2w7.eatSpacesUntil(m$1.Character(58,true));
parser$.visitor.onKey($2w9);
parser$.parseValue();
parser$.$wghd6m$2w7.eatSpaces();
if(parser$.$wghd6m$2w7.check(m$1.Character(125,true))){
break;
}
if(!parser$.$wghd6m$2w7.check(m$1.Character(44,true))){
throw m$1.wrapexc(ParseException("Expected \'}\' or \',\' but got ".plus(parser$.$wghd6m$2w7.character().string).plus(""),parser$.$wghd6m$2w7.line,parser$.$wghd6m$2w7.column),'192:20-194:57','ceylon/json/parse.ceylon');
}
}
}
parser$.visitor.onEndObject();
};parser$.$wghd6m$2w8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseObject$jwd68v']};};
parser$.$wghd6m$2wa=function(){
var parser$=this;
parser$.visitor.onStartArray();
parser$.$wghd6m$2w7.eatSpacesUntil(m$1.Character(91,true));
parser$.$wghd6m$2w7.eatSpaces();
if(!parser$.$wghd6m$2w7.check(m$1.Character(93,true))){
while(true){
parser$.parseValue();
parser$.$wghd6m$2w7.eatSpaces();
if(parser$.$wghd6m$2w7.check(m$1.Character(93,true))){
break;
}
if(!parser$.$wghd6m$2w7.check(m$1.Character(44,true))){
throw m$1.wrapexc(ParseException("Expected \']\' or \',\' but got ".plus(parser$.$wghd6m$2w7.character().string).plus(""),parser$.$wghd6m$2w7.line,parser$.$wghd6m$2w7.column),'214:20-216:57','ceylon/json/parse.ceylon');
}
}
}
parser$.visitor.onEndArray();
};parser$.$wghd6m$2wa.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseArray$qjniqd']};};
parser$.parseValue=function(){
var parser$=this;
parser$.$wghd6m$2w7.eatSpaces();
var $2wb=parser$.$wghd6m$2w7.character();
if($2wb.equals(m$1.Character(123,true))){
parser$.$wghd6m$2w8();
return;
}
if($2wb.equals(m$1.Character(91,true))){
parser$.$wghd6m$2wa();
return;
}
if($2wb.equals(m$1.Character(34,true))){
parser$.$wghd6m$2wc();
return;
}
if($2wb.equals(m$1.Character(116,true))){
parser$.visitor.onBoolean(parseTrue(parser$.$wghd6m$2w7));
return;
}
if($2wb.equals(m$1.Character(102,true))){
parser$.visitor.onBoolean(parseFalse(parser$.$wghd6m$2w7));
return;
}
if($2wb.equals(m$1.Character(110,true))){
parseNull(parser$.$wghd6m$2w7);
parser$.visitor.onNull();
return;
}
if((parser$.$wghd6m$2w7.isDigit($2wb)||$2wb.equals(m$1.Character(45,true)))){
parser$.visitor.onNumber(parseNumber(parser$.$wghd6m$2w7));
return;
}
throw m$1.wrapexc(ParseException("Invalid value: expecting object, array, string, ".plus("number, true, false, null but got ".plus($2wb.string).plus("")),parser$.$wghd6m$2w7.line,parser$.$wghd6m$2w7.column),'258:8-261:45','ceylon/json/parse.ceylon');
};parser$.parseValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,pa:1,an:function(){return[m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),ParseException),"If the specified string cannot be parsed")];},d:['ceylon.json','Parser','$m','parseValue']};};
parser$.$wghd6m$2wc=function(){
var parser$=this;
parser$.visitor.onString(parseKeyOrString(parser$.$wghd6m$2w7));
};parser$.$wghd6m$2wc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseString$sljd25']};};
parser$.parse=function(){
var parser$=this;
parser$.parseValue();
parser$.$wghd6m$2w7.eatSpaces();
if(parser$.$wghd6m$2w7.hasMore){
throw m$1.wrapexc(ParseException("Unexpected extra characters",parser$.$wghd6m$2w7.line,parser$.$wghd6m$2w7.column),'271:12-271:97','ceylon/json/parse.ceylon');
}
};parser$.parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Parser,pa:1,d:['ceylon.json','Parser','$m','parse']};};
})(Parser.$$.prototype);
}
return Parser;
}
ex$.$init$Parser=$init$Parser;
$init$Parser();
function StringParser($wghd6m$2wd,$wghd6m$2we,stringParser$){
$init$StringParser();
if(stringParser$===undefined)stringParser$=new StringParser.$$;
stringParser$.$wghd6m$2wd_=$wghd6m$2wd;
stringParser$.$wghd6m$2we_=$wghd6m$2we;
Parser(StringTokenizer($wghd6m$2wd),$wghd6m$2we,stringParser$);
return stringParser$;
}
StringParser.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Parser},ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String},an:function(){return[m$1.doc("The string of JSON data to be parsed.")];}},{nm:'visitor',mt:'prm',$t:{t:Visitor}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringParser'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','StringParser']};};
ex$.StringParser=StringParser;
function $init$StringParser(){
if(StringParser.$$===undefined){
m$1.initTypeProto(StringParser,'ceylon.json::StringParser',$init$Parser());
(function(stringParser$){
m$1.atr$(stringParser$,'$wghd6m$2wd',function(){return this.$wghd6m$2wd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringParser,an:function(){return[m$1.doc("The string of JSON data to be parsed.")];},d:['ceylon.json','StringParser','$at','str$puzo67']};});
m$1.atr$(stringParser$,'$wghd6m$2we',function(){return this.$wghd6m$2we_;},undefined,function(){return{mod:$CCMM$,$t:{t:Visitor},$cont:StringParser,d:['ceylon.json','StringParser','$at','visitor$qsoxsm']};});
})(StringParser.$$.prototype);
}
return StringParser;
}
ex$.$init$StringParser=$init$StringParser;
$init$StringParser();
function parse($2wf){
var $2wg=Builder();
var $2wh=StringParser($2wf,$2wg);
$2wh.parse();
return $2wg.result;
}
ex$.parse=parse;
parse.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'str',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:parse'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String})),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Exception),"If the JSON string is invalid")];},d:['ceylon.json','parse']};};
function ParseException($wghd6m$2wi,line,column,parseException$){
$init$ParseException();
if(parseException$===undefined)parseException$=new ParseException.$$;
parseException$.$wghd6m$2wi_=$wghd6m$2wi;
parseException$.line_=line;
parseException$.column_=column;
m$1.Exception("".plus($wghd6m$2wi).plus(" at ").plus(line.string).plus(":").plus(column.string).plus(" (line:column)"),undefined,parseException$);
return parseException$;
}
ParseException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}},{nm:'line',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The error line (1-based)")];}},{nm:'column',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The error column (1-based)")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:ParseException')];},d:['ceylon.json','ParseException']};};
ex$.ParseException=ParseException;
function $init$ParseException(){
if(ParseException.$$===undefined){
m$1.initTypeProto(ParseException,'ceylon.json::ParseException',m$1.Exception);
(function(parseException$){
m$1.atr$(parseException$,'$wghd6m$2wi',function(){return this.$wghd6m$2wi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ParseException,d:['ceylon.json','ParseException','$at','message$55bchf']};});
m$1.atr$(parseException$,'line',function(){return this.line_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParseException,pa:1,an:function(){return[m$1.doc("The error line (1-based)")];},d:['ceylon.json','ParseException','$at','line']};});
m$1.atr$(parseException$,'column',function(){return this.column_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParseException,pa:1,an:function(){return[m$1.doc("The error column (1-based)")];},d:['ceylon.json','ParseException','$at','column']};});
})(ParseException.$$.prototype);
}
return ParseException;
}
ex$.$init$ParseException=$init$ParseException;
$init$ParseException();
function Printer($wghd6m$2wj,printer$){
$init$Printer();
if(printer$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Printer"),'?','?')
if($wghd6m$2wj===undefined){$wghd6m$2wj=false;}
printer$.$wghd6m$2wj_=$wghd6m$2wj;
printer$.$wghd6m$2wk_=(0);
return printer$;
}
Printer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:257,an:function(){return[m$1.doc("A JSON Printer"),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Printer']};};
ex$.Printer=Printer;
function $init$Printer(){
if(Printer.$$===undefined){
m$1.initTypeProto(Printer,'ceylon.json::Printer',m$1.Basic);
(function(printer$){
m$1.atr$(printer$,'$wghd6m$2wj',function(){return this.$wghd6m$2wj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Printer,d:['ceylon.json','Printer','$at','pretty$6ma7eg']};});
m$1.atr$(printer$,'$wghd6m$2wk',function(){return this.$wghd6m$2wk_;},function($2wl){return this.$wghd6m$2wk_=$2wl;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Printer,pa:1024,d:['ceylon.json','Printer','$at','level$k1uxue']};});
printer$.$wghd6m$2wm=function(){
var printer$=this;
($2wn=printer$.$wghd6m$2wk,printer$.$wghd6m$2wk=$2wn.successor,$2wn);
var $2wn;
};printer$.$wghd6m$2wm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','enter$lrxp1m']};};
printer$.$wghd6m$2wo=function(){
var printer$=this;
($2wp=printer$.$wghd6m$2wk,printer$.$wghd6m$2wk=$2wp.predecessor,$2wp);
var $2wp;
};printer$.$wghd6m$2wo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','leave$jlu1e9']};};
printer$.$wghd6m$2wq=function(){
var printer$=this;
if(printer$.$wghd6m$2wj){
printer$.print("\n");
if((printer$.$wghd6m$2wk>0)){
var $2ws=(0),$2wr=printer$.$wghd6m$2wk.minus(1),$2wt=$2ws.compare($2wr),$2wu=$2wt===m$1.smaller()?'successor':'predecessor';for(var $2wv=m$1.eorl$($2wt);$2wv($2wr,$2ws);$2ws=$2ws[$2wu]){
printer$.print(" ");
}
}
}
};printer$.$wghd6m$2wq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','indent$1opgam']};};
printer$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Printer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Printer:$m:print')];},d:['ceylon.json','Printer','$m','print']};}};printer$.printObject=function($2ww){
var printer$=this;
printer$.print("{");
printer$.$wghd6m$2wm();
var $2wx=true;
var $2wz;for(var $2wy=$2ww.$_sort(m$1.JsCallable(printer$,compareKeys)).iterator();($2wz=$2wy.next())!==m$1.finished();){
if($2wx){
$2wx=false;
}
else{
printer$.print(",");
}
printer$.$wghd6m$2wq();
printer$.printString($2wz.key);
printer$.print(":");
if(printer$.$wghd6m$2wj){
printer$.print(" ");
}
printer$.printValue($2wz.item);
}
printer$.$wghd6m$2wo();
if(!$2wx){
printer$.$wghd6m$2wq();
}
printer$.print("}");
};printer$.printObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'o',mt:'prm',$t:{t:$_Object}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Object`")];},d:['ceylon.json','Printer','$m','printObject']};};
printer$.printArray=function($2x0){
var printer$=this;
printer$.print("[");
printer$.$wghd6m$2wm();
var $2x1=true;
var $2x3;for(var $2x2=$2x0.iterator();($2x3=$2x2.next())!==m$1.finished();){
if($2x1){
$2x1=false;
}
else{
printer$.print(",");
}
printer$.$wghd6m$2wq();
printer$.printValue($2x3);
}
printer$.$wghd6m$2wo();
if(!$2x1){
printer$.$wghd6m$2wq();
}
printer$.print("]");
};printer$.printArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'o',mt:'prm',$t:{t:$_Array}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Array`")];},d:['ceylon.json','Printer','$m','printArray']};};
printer$.printString=function($2x4){
var printer$=this;
printer$.print("\"");
var $2x6;for(var $2x5=$2x4.iterator();($2x6=$2x5.next())!==m$1.finished();){
if($2x6.equals(m$1.Character(34,true))){
printer$.print("\\".plus("\""));
}
else{
if($2x6.equals(m$1.Character(92,true))){
printer$.print("\\\\");
}
else{
if($2x6.equals(m$1.Character(47,true))){
printer$.print("\\".plus("/"));
}
else{
if($2x6.equals((8).character)){
printer$.print("\\".plus("b"));
}
else{
if($2x6.equals((12).character)){
printer$.print("\\".plus("f"));
}
else{
if($2x6.equals((10).character)){
printer$.print("\\".plus("n"));
}
else{
if($2x6.equals((13).character)){
printer$.print("\\".plus("r"));
}
else{
if($2x6.equals((9).character)){
printer$.print("\\".plus("t"));
}
else{
printer$.print($2x6.string);
}
}
}
}
}
}
}
}
}
printer$.print("\"");
};printer$.printString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'s',mt:'prm',$t:{t:m$1.$_String}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a `String`")];},d:['ceylon.json','Printer','$m','printString']};};
printer$.printNumber=function($2x7){var printer$=this;
return printer$.print($2x7.string);};
printer$.printNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'n',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints an `Integer|Float`")];},d:['ceylon.json','Printer','$m','printNumber']};};
printer$.printBoolean=function($2x8){var printer$=this;
return printer$.print($2x8.string);};
printer$.printBoolean.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'v',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a `Boolean`")];},d:['ceylon.json','Printer','$m','printBoolean']};};
printer$.printNull=function(){var printer$=this;
return printer$.print("null");};
printer$.printNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints `null`")];},d:['ceylon.json','Printer','$m','printNull']};};
printer$.printValue=function($2x9){
var printer$=this;
var $2xa=$2x9;
if(m$1.is$($2xa,{t:m$1.$_String})) {
printer$.printString($2xa);
}
else if(m$1.is$($2xa,{t:m$1.Integer})) {
printer$.printNumber($2xa);
}
else if(m$1.is$($2xa,{t:m$1.Float})) {
printer$.printNumber($2xa);
}
else if(m$1.is$($2xa,{t:m$1.$_Boolean})) {
printer$.printBoolean($2xa);
}
else if(m$1.is$($2xa,{t:$_Object})) {
printer$.printObject($2xa);
}
else if(m$1.is$($2xa,{t:$_Array})) {
printer$.printArray($2xa);
}
else if(m$1.is$($2xa,{t:m$1.Null})) {
printer$.printNull();
}
};printer$.printValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:Value()}],$cont:Printer,pa:9,an:function(){return[m$1.doc("Prints a JSON value")];},d:['ceylon.json','Printer','$m','printValue']};};
})(Printer.$$.prototype);
}
return Printer;
}
ex$.$init$Printer=$init$Printer;
$init$Printer();
function compareKeys($2xb,$2xc){return $2xb.key.compare($2xc.key);};
compareKeys.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}}},{nm:'y',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}}}],d:['ceylon.json','compareKeys']};};
function parse$stream($2xd){
return buildValue$stream(StreamParser$stream(StringTokenizer($2xd)));
};parse$stream.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'json',mt:'prm',$t:{t:m$1.$_String}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:parse')];},d:['ceylon.json.stream','parse']};};
function buildValue$stream($2xe){
var $2xf=$2xe.next();
var $2xg=$2xf;
if(m$1.is$($2xg,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
return $2xg;
}
else if(m$1.is$($2xg,{t:ObjectStartEvent$stream})) {
return buildObject$stream($2xe);
}
else if(m$1.is$($2xg,{t:KeyEvent$stream})) {
m$1.asrt$((false),"unexpected key: \'false\' at Builder.ceylon (28:14-28:20)",'27:8-28:21','Builder.ceylon');
}
else if(m$1.is$($2xg,{t:ObjectEndEvent$stream})) {
m$1.asrt$((false),"unexpected object end: \'false\' at Builder.ceylon (32:14-32:20)",'31:8-32:21','Builder.ceylon');
}
else if(m$1.is$($2xg,{t:ArrayStartEvent$stream})) {
return buildArray$stream($2xe);
}
else if(m$1.is$($2xg,{t:ArrayEndEvent$stream})) {
m$1.asrt$((false),"unexpected array end: \'false\' at Builder.ceylon (39:14-39:20)",'38:8-39:21','Builder.ceylon');
}
else if(m$1.is$($2xg,{t:m$1.Finished})) {
m$1.asrt$((false),"unexpected end of input: \'false\' at Builder.ceylon (43:14-43:20)",'42:8-43:21','Builder.ceylon');
}
};buildValue$stream.$crtmm$=function(){return{mod:$CCMM$,$t:Value(),ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:buildValue')];},d:['ceylon.json.stream','buildValue']};};
function buildObject$stream($2xh){
var $2xi=$_Object();
var $2xj=null;
while(true){
var $2xk=$2xh.next();
var $2xl=$2xk;
if(m$1.is$($2xl,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
var $2xm;
m$1.asrt$((m$1.nn$(($2xm=$2xj))),"no key in object: \'exists k=key\' at Builder.ceylon (55:18-55:31)",'54:12-55:32','Builder.ceylon');
$2xi.put($2xm,$2xl);
$2xj=null;
}
else if(m$1.is$($2xl,{t:ObjectStartEvent$stream})) {
var $2xn;
m$1.asrt$((m$1.nn$(($2xn=$2xj))),"no key in object: \'exists k=key\' at Builder.ceylon (61:18-61:31)",'60:12-61:32','Builder.ceylon');
$2xi.put($2xn,buildObject$stream($2xh));
$2xj=null;
}
else if(m$1.is$($2xl,{t:KeyEvent$stream})) {
m$1.asrt$((!m$1.nn$($2xj)),"two consecutive keys in object: \'!key exists\' at Builder.ceylon (67:18-67:30)",'66:12-67:31','Builder.ceylon');
$2xj=$2xl.key;
}
else if(m$1.is$($2xl,{t:ObjectEndEvent$stream})) {
return $2xi;
}
else if(m$1.is$($2xl,{t:ArrayStartEvent$stream})) {
var $2xo;
m$1.asrt$((m$1.nn$(($2xo=$2xj))),"no key in object: \'exists k=key\' at Builder.ceylon (75:18-75:31)",'74:12-75:32','Builder.ceylon');
$2xi.put($2xo,buildArray$stream($2xh));
$2xj=null;
}
else if(m$1.is$($2xl,{t:ArrayEndEvent$stream})) {
m$1.asrt$((false),"object ended by array end: \'false\' at Builder.ceylon (81:18-81:24)",'80:12-81:25','Builder.ceylon');
}
else if(m$1.is$($2xl,{t:m$1.Finished})) {
m$1.asrt$((false),"unexpected end of input: \'false\' at Builder.ceylon (85:18-85:24)",'84:12-85:25','Builder.ceylon');
}
}
};buildObject$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Object},ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],d:['ceylon.json.stream','buildObject']};};
function buildArray$stream($2xp){
var $2xq=$_Array();
while(true){
var $2xr=$2xp.next();
var $2xs=$2xr;
if(m$1.is$($2xs,m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
$2xq.add($2xs);
}
else if(m$1.is$($2xs,{t:ObjectStartEvent$stream})) {
$2xq.add(buildObject$stream($2xp));
}
else if(m$1.is$($2xs,{t:KeyEvent$stream})) {
m$1.asrt$((false),"key unexpected in array: \'false\' at Builder.ceylon (102:18-102:24)",'101:12-102:25','Builder.ceylon');
}
else if(m$1.is$($2xs,{t:ObjectEndEvent$stream})) {
m$1.asrt$((false),"array ended by object end: \'false\' at Builder.ceylon (106:18-106:24)",'105:12-106:25','Builder.ceylon');
}
else if(m$1.is$($2xs,{t:ArrayStartEvent$stream})) {
$2xq.add(buildArray$stream($2xp));
}
else if(m$1.is$($2xs,{t:ArrayEndEvent$stream})) {
return $2xq;
}
else if(m$1.is$($2xs,{t:m$1.Finished})) {
m$1.asrt$((false),"unexpected end of input: \'false\' at Builder.ceylon (116:18-116:24)",'115:12-116:25','Builder.ceylon');
}
}
};buildArray$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Array},ps:[{nm:'events',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}]}}],d:['ceylon.json.stream','buildArray']};};
function NestingEvent$stream($$targs$$,nestingEvent$){
m$1.set_type_args(nestingEvent$,$$targs$$,NestingEvent$stream);
}
NestingEvent$stream.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$NestingEvent:{sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:'Other$NestingEvent',Self$NestingEvent:'Self$NestingEvent'}}]},Other$NestingEvent:{dv:'out',sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:'Self$NestingEvent',Self$NestingEvent:'Other$NestingEvent'}}]}},pa:17,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:NestingEvent')];},d:['ceylon.json.stream','NestingEvent']};};
ex$.NestingEvent$stream=NestingEvent$stream;
function $init$NestingEvent$stream(){
if(NestingEvent$stream.$$===undefined){
m$1.initTypeProtoI(NestingEvent$stream,'ceylon.json.stream::NestingEvent');
(function(nestingEvent$){
nestingEvent$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:'Other$NestingEvent',$cont:NestingEvent$stream,pa:5,an:function(){return[m$1.doc("The value associated with this event")];},d:['ceylon.json.stream','NestingEvent','$at','other']};}};
})(NestingEvent$stream.$$.prototype);
}
return NestingEvent$stream;
}
ex$.$init$NestingEvent$stream=$init$NestingEvent$stream;
$init$NestingEvent$stream();
function ObjectStartEvent$stream(objectStartEvent$){
$init$ObjectStartEvent$stream();
if(objectStartEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ObjectStartEvent"),'?','?')
objectStartEvent$.$$targs$$={Other$NestingEvent:{t:ObjectEndEvent$stream},Self$NestingEvent:{t:ObjectStartEvent$stream}};
NestingEvent$stream({Other$NestingEvent:{t:ObjectEndEvent$stream},Self$NestingEvent:{t:ObjectStartEvent$stream}},objectStartEvent$);
return objectStartEvent$;
}
ObjectStartEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ObjectEndEvent$stream},Self$NestingEvent:{t:ObjectStartEvent$stream}}}],of:[$prop$getObjectStart$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ObjectStartEvent')];},d:['ceylon.json.stream','ObjectStartEvent']};};
ex$.ObjectStartEvent$stream=ObjectStartEvent$stream;
function $init$ObjectStartEvent$stream(){
if(ObjectStartEvent$stream.$$===undefined){
m$1.initTypeProto(ObjectStartEvent$stream,'ceylon.json.stream::ObjectStartEvent',m$1.Basic,$init$NestingEvent$stream());
}
return ObjectStartEvent$stream;
}
ex$.$init$ObjectStartEvent$stream=$init$ObjectStartEvent$stream;
$init$ObjectStartEvent$stream();
function $2xt$stream(){
var objectStart$=new $2xt$stream.$$;ObjectStartEvent$stream(objectStart$);
objectStart$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xt$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','string']};}};
objectStart$.$prop$getString.get=function(){return string};
objectStart$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ObjectEndEvent$stream},$cont:$2xt$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','other']};}};
objectStart$.$prop$getOther.get=function(){return other};
return objectStart$;
};$2xt$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ObjectStartEvent$stream},d:['ceylon.json.stream','objectStart']};};
function $init$objectStart$stream(){
if($2xt$stream.$$===undefined){
m$1.initTypeProto($2xt$stream,'ceylon.json.stream::objectStart',$init$ObjectStartEvent$stream());
(function(objectStart$){
m$1.atr$(objectStart$,'string',function(){
return "{";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xt$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','string']};});
m$1.atr$(objectStart$,'other',function(){
var objectStart$=this;
return objectEnd$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ObjectEndEvent$stream},$cont:$2xt$stream,pa:3,d:['ceylon.json.stream','objectStart','$at','other']};});
})($2xt$stream.$$.prototype);
}
return $2xt$stream;
}
ex$.$init$objectStart$stream=$init$objectStart$stream;
$init$objectStart$stream();
var $2xv;
function objectStart$stream(){
if($2xv===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'objectStart\' before it was set"),'14:0-19:0','events.ceylon');
if($2xv===undefined){$2xv=m$1.INIT$;$2xv=$init$objectStart$stream()();$2xv.$crtmm$=objectStart$stream.$crtmm$;}
return $2xv;
}
ex$.objectStart$stream=objectStart$stream;
objectStart$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$objectStart$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:objectStart')];},d:['ceylon.json.stream','objectStart']};};
$prop$getObjectStart$stream=objectStart$stream;
ex$.$prop$getObjectStart$stream=$prop$getObjectStart$stream;
function ObjectEndEvent$stream(objectEndEvent$){
$init$ObjectEndEvent$stream();
if(objectEndEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ObjectEndEvent"),'?','?')
objectEndEvent$.$$targs$$={Other$NestingEvent:{t:ObjectStartEvent$stream},Self$NestingEvent:{t:ObjectEndEvent$stream}};
NestingEvent$stream({Other$NestingEvent:{t:ObjectStartEvent$stream},Self$NestingEvent:{t:ObjectEndEvent$stream}},objectEndEvent$);
return objectEndEvent$;
}
ObjectEndEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ObjectStartEvent$stream},Self$NestingEvent:{t:ObjectEndEvent$stream}}}],of:[$prop$getObjectEnd$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ObjectEndEvent')];},d:['ceylon.json.stream','ObjectEndEvent']};};
ex$.ObjectEndEvent$stream=ObjectEndEvent$stream;
function $init$ObjectEndEvent$stream(){
if(ObjectEndEvent$stream.$$===undefined){
m$1.initTypeProto(ObjectEndEvent$stream,'ceylon.json.stream::ObjectEndEvent',m$1.Basic,$init$NestingEvent$stream());
}
return ObjectEndEvent$stream;
}
ex$.$init$ObjectEndEvent$stream=$init$ObjectEndEvent$stream;
$init$ObjectEndEvent$stream();
function $2xw$stream(){
var objectEnd$=new $2xw$stream.$$;ObjectEndEvent$stream(objectEnd$);
objectEnd$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xw$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','string']};}};
objectEnd$.$prop$getString.get=function(){return string};
objectEnd$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ObjectStartEvent$stream},$cont:$2xw$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','other']};}};
objectEnd$.$prop$getOther.get=function(){return other};
return objectEnd$;
};$2xw$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ObjectEndEvent$stream},d:['ceylon.json.stream','objectEnd']};};
function $init$objectEnd$stream(){
if($2xw$stream.$$===undefined){
m$1.initTypeProto($2xw$stream,'ceylon.json.stream::objectEnd',$init$ObjectEndEvent$stream());
(function(objectEnd$){
m$1.atr$(objectEnd$,'string',function(){
return "}";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xw$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','string']};});
m$1.atr$(objectEnd$,'other',function(){
var objectEnd$=this;
return objectStart$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ObjectStartEvent$stream},$cont:$2xw$stream,pa:3,d:['ceylon.json.stream','objectEnd','$at','other']};});
})($2xw$stream.$$.prototype);
}
return $2xw$stream;
}
ex$.$init$objectEnd$stream=$init$objectEnd$stream;
$init$objectEnd$stream();
var $2xy;
function objectEnd$stream(){
if($2xy===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'objectEnd\' before it was set"),'26:0-31:0','events.ceylon');
if($2xy===undefined){$2xy=m$1.INIT$;$2xy=$init$objectEnd$stream()();$2xy.$crtmm$=objectEnd$stream.$crtmm$;}
return $2xy;
}
ex$.objectEnd$stream=objectEnd$stream;
objectEnd$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$objectEnd$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:objectEnd')];},d:['ceylon.json.stream','objectEnd']};};
$prop$getObjectEnd$stream=objectEnd$stream;
ex$.$prop$getObjectEnd$stream=$prop$getObjectEnd$stream;
function ArrayStartEvent$stream(arrayStartEvent$){
$init$ArrayStartEvent$stream();
if(arrayStartEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ArrayStartEvent"),'?','?')
arrayStartEvent$.$$targs$$={Other$NestingEvent:{t:ArrayEndEvent$stream},Self$NestingEvent:{t:ArrayStartEvent$stream}};
NestingEvent$stream({Other$NestingEvent:{t:ArrayEndEvent$stream},Self$NestingEvent:{t:ArrayStartEvent$stream}},arrayStartEvent$);
return arrayStartEvent$;
}
ArrayStartEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ArrayEndEvent$stream},Self$NestingEvent:{t:ArrayStartEvent$stream}}}],of:[$prop$getArrayStart$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ArrayStartEvent')];},d:['ceylon.json.stream','ArrayStartEvent']};};
ex$.ArrayStartEvent$stream=ArrayStartEvent$stream;
function $init$ArrayStartEvent$stream(){
if(ArrayStartEvent$stream.$$===undefined){
m$1.initTypeProto(ArrayStartEvent$stream,'ceylon.json.stream::ArrayStartEvent',m$1.Basic,$init$NestingEvent$stream());
}
return ArrayStartEvent$stream;
}
ex$.$init$ArrayStartEvent$stream=$init$ArrayStartEvent$stream;
$init$ArrayStartEvent$stream();
function $2xz$stream(){
var arrayStart$=new $2xz$stream.$$;ArrayStartEvent$stream(arrayStart$);
arrayStart$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xz$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','string']};}};
arrayStart$.$prop$getString.get=function(){return string};
arrayStart$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ArrayEndEvent$stream},$cont:$2xz$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','other']};}};
arrayStart$.$prop$getOther.get=function(){return other};
return arrayStart$;
};$2xz$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ArrayStartEvent$stream},d:['ceylon.json.stream','arrayStart']};};
function $init$arrayStart$stream(){
if($2xz$stream.$$===undefined){
m$1.initTypeProto($2xz$stream,'ceylon.json.stream::arrayStart',$init$ArrayStartEvent$stream());
(function(arrayStart$){
m$1.atr$(arrayStart$,'string',function(){
return "[";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2xz$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','string']};});
m$1.atr$(arrayStart$,'other',function(){
var arrayStart$=this;
return arrayEnd$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ArrayEndEvent$stream},$cont:$2xz$stream,pa:3,d:['ceylon.json.stream','arrayStart','$at','other']};});
})($2xz$stream.$$.prototype);
}
return $2xz$stream;
}
ex$.$init$arrayStart$stream=$init$arrayStart$stream;
$init$arrayStart$stream();
var $2y1;
function arrayStart$stream(){
if($2y1===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'arrayStart\' before it was set"),'38:0-43:0','events.ceylon');
if($2y1===undefined){$2y1=m$1.INIT$;$2y1=$init$arrayStart$stream()();$2y1.$crtmm$=arrayStart$stream.$crtmm$;}
return $2y1;
}
ex$.arrayStart$stream=arrayStart$stream;
arrayStart$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$arrayStart$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:arrayStart')];},d:['ceylon.json.stream','arrayStart']};};
$prop$getArrayStart$stream=arrayStart$stream;
ex$.$prop$getArrayStart$stream=$prop$getArrayStart$stream;
function ArrayEndEvent$stream(arrayEndEvent$){
$init$ArrayEndEvent$stream();
if(arrayEndEvent$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::ArrayEndEvent"),'?','?')
arrayEndEvent$.$$targs$$={Other$NestingEvent:{t:ArrayStartEvent$stream},Self$NestingEvent:{t:ArrayEndEvent$stream}};
NestingEvent$stream({Other$NestingEvent:{t:ArrayStartEvent$stream},Self$NestingEvent:{t:ArrayEndEvent$stream}},arrayEndEvent$);
return arrayEndEvent$;
}
ArrayEndEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:NestingEvent$stream,a:{Other$NestingEvent:{t:ArrayStartEvent$stream},Self$NestingEvent:{t:ArrayEndEvent$stream}}}],of:[$prop$getArrayEnd$stream],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:ArrayEndEvent')];},d:['ceylon.json.stream','ArrayEndEvent']};};
ex$.ArrayEndEvent$stream=ArrayEndEvent$stream;
function $init$ArrayEndEvent$stream(){
if(ArrayEndEvent$stream.$$===undefined){
m$1.initTypeProto(ArrayEndEvent$stream,'ceylon.json.stream::ArrayEndEvent',m$1.Basic,$init$NestingEvent$stream());
}
return ArrayEndEvent$stream;
}
ex$.$init$ArrayEndEvent$stream=$init$ArrayEndEvent$stream;
$init$ArrayEndEvent$stream();
function $2y2$stream(){
var arrayEnd$=new $2y2$stream.$$;ArrayEndEvent$stream(arrayEnd$);
arrayEnd$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2y2$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','string']};}};
arrayEnd$.$prop$getString.get=function(){return string};
arrayEnd$.$prop$getOther={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ArrayStartEvent$stream},$cont:$2y2$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','other']};}};
arrayEnd$.$prop$getOther.get=function(){return other};
return arrayEnd$;
};$2y2$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ArrayEndEvent$stream},d:['ceylon.json.stream','arrayEnd']};};
function $init$arrayEnd$stream(){
if($2y2$stream.$$===undefined){
m$1.initTypeProto($2y2$stream,'ceylon.json.stream::arrayEnd',$init$ArrayEndEvent$stream());
(function(arrayEnd$){
m$1.atr$(arrayEnd$,'string',function(){
return "]";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$2y2$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','string']};});
m$1.atr$(arrayEnd$,'other',function(){
var arrayEnd$=this;
return arrayStart$stream();
},undefined,function(){return{mod:$CCMM$,$t:{t:ArrayStartEvent$stream},$cont:$2y2$stream,pa:3,d:['ceylon.json.stream','arrayEnd','$at','other']};});
})($2y2$stream.$$.prototype);
}
return $2y2$stream;
}
ex$.$init$arrayEnd$stream=$init$arrayEnd$stream;
$init$arrayEnd$stream();
var $2y4;
function arrayEnd$stream(){
if($2y4===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'arrayEnd\' before it was set"),'50:0-55:0','events.ceylon');
if($2y4===undefined){$2y4=m$1.INIT$;$2y4=$init$arrayEnd$stream()();$2y4.$crtmm$=arrayEnd$stream.$crtmm$;}
return $2y4;
}
ex$.arrayEnd$stream=arrayEnd$stream;
arrayEnd$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$arrayEnd$stream()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:arrayEnd')];},d:['ceylon.json.stream','arrayEnd']};};
$prop$getArrayEnd$stream=arrayEnd$stream;
ex$.$prop$getArrayEnd$stream=$prop$getArrayEnd$stream;
function KeyEvent$stream(key,keyEvent$){
$init$KeyEvent$stream();
if(keyEvent$===undefined)keyEvent$=new KeyEvent$stream.$$;
keyEvent$.key_=key;
return keyEvent$;
}
KeyEvent$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:17,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:KeyEvent')];},d:['ceylon.json.stream','KeyEvent']};};
ex$.KeyEvent$stream=KeyEvent$stream;
function $init$KeyEvent$stream(){
if(KeyEvent$stream.$$===undefined){
m$1.initTypeProto(KeyEvent$stream,'ceylon.json.stream::KeyEvent',m$1.Basic);
(function(keyEvent$){
m$1.atr$(keyEvent$,'key',function(){return this.key_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:KeyEvent$stream,pa:1,d:['ceylon.json.stream','KeyEvent','$at','key']};});
m$1.atr$(keyEvent$,'string',function(){
var keyEvent$=this;
return "\"".plus(keyEvent$.key).plus("\":");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:KeyEvent$stream,pa:3,d:['ceylon.json.stream','KeyEvent','$at','string']};});
})(KeyEvent$stream.$$.prototype);
}
return KeyEvent$stream;
}
ex$.$init$KeyEvent$stream=$init$KeyEvent$stream;
$init$KeyEvent$stream();
function Event$stream(){var $2y5=m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}]);$2y5.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:Event')];},d:['ceylon.json.stream','Event']};};return $2y5;}
ex$.Event$stream=Event$stream;
ex$.$pkg$ans$ceylon$json$stream=function(){return[m$1.doc$($CCMM$,'ceylon.json.stream','$pkg-anns'),m$1.shared()];};
function streamToVisitor$stream($2y6,$2y7){
var $2y8;
while(!m$1.is$(($2y8=$2y6.next()),{t:m$1.Finished})){
var $2y9=$2y8;
if(m$1.is$($2y9,{t:ObjectStartEvent$stream})) {
$2y7.onStartObject();
}
else if(m$1.is$($2y9,{t:KeyEvent$stream})) {
$2y7.onKey($2y9.key);
}
else if(m$1.is$($2y9,{t:ObjectEndEvent$stream})) {
$2y7.onEndObject();
}
else if(m$1.is$($2y9,{t:ArrayStartEvent$stream})) {
$2y7.onStartArray();
}
else if(m$1.is$($2y9,{t:ArrayEndEvent$stream})) {
$2y7.onEndArray();
}
else if(m$1.is$($2y9,{t:m$1.$_String})) {
$2y7.onString($2y9);
}
else if(m$1.is$($2y9,{t:m$1.$_Boolean})) {
$2y7.onBoolean($2y9);
}
else if(m$1.is$($2y9,m$1.mut$([{t:m$1.Integer},{t:m$1.Float}]))) {
$2y7.onNumber($2y9);
}
else if($2y9===null) {
$2y7.onNull();
}
}
}
ex$.streamToVisitor$stream=streamToVisitor$stream;
streamToVisitor$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'stream',mt:'prm',$t:{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}}},{nm:'visitor',mt:'prm',$t:{t:Visitor}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:streamToVisitor')];},d:['ceylon.json.stream','streamToVisitor']};};
function None$stream(none$){
$init$None$stream();
if(none$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json.stream::None"),'?','?')
return none$;
}
None$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getNone$stream],pa:256,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:None')];},d:['ceylon.json.stream','None']};};
ex$.None$stream=None$stream;
function $init$None$stream(){
if(None$stream.$$===undefined){
m$1.initTypeProto(None$stream,'ceylon.json.stream::None',m$1.Basic);
}
return None$stream;
}
ex$.$init$None$stream=$init$None$stream;
$init$None$stream();
function $2ya$stream(){
var none$=new $2ya$stream.$$;None$stream(none$);
return none$;
};$2ya$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:None$stream},d:['ceylon.json.stream','none']};};
function $init$none$stream(){
if($2ya$stream.$$===undefined){
m$1.initTypeProto($2ya$stream,'ceylon.json.stream::none',$init$None$stream());
}
return $2ya$stream;
}
ex$.$init$none$stream=$init$none$stream;
$init$none$stream();
var $2yc;
function none$stream(){
if($2yc===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'none\' before it was set"),'46:0-46:28','StreamingVisitor.ceylon');
if($2yc===undefined){$2yc=m$1.INIT$;$2yc=$init$none$stream()();$2yc.$crtmm$=none$stream.$crtmm$;}
return $2yc;
}
none$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$none$stream()},d:['ceylon.json.stream','none']};};
$prop$getNone$stream=none$stream;
ex$.$prop$getNone$stream=$prop$getNone$stream;
function PushIterator$stream($wghd6m$2yd,$$targs$$,pushIterator$){
$init$PushIterator$stream();
if(pushIterator$===undefined)pushIterator$=new PushIterator$stream.$$;
m$1.set_type_args(pushIterator$,$$targs$$);
pushIterator$.$wghd6m$2yd_=$wghd6m$2yd;
m$1.Iterator({Element$Iterator:$$targs$$.T$PushIterator},pushIterator$);
pushIterator$.$wghd6m$2ye_=none$stream();
return pushIterator$;
}
PushIterator$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'it',mt:'prm',$t:{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}}}],tp:{T$PushIterator:{dv:'out'}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}}],d:['ceylon.json.stream','PushIterator']};};
ex$.PushIterator$stream=PushIterator$stream;
function $init$PushIterator$stream(){
if(PushIterator$stream.$$===undefined){
m$1.initTypeProto(PushIterator$stream,'ceylon.json.stream::PushIterator',m$1.Basic,m$1.Iterator);
(function(pushIterator$){
m$1.atr$(pushIterator$,'$wghd6m$2yd',function(){return this.$wghd6m$2yd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'T$PushIterator'}},$cont:PushIterator$stream,d:['ceylon.json.stream','PushIterator','$at','it$vje6a5']};});
m$1.atr$(pushIterator$,'$wghd6m$2ye',function(){return this.$wghd6m$2ye_;},function($2yf){return this.$wghd6m$2ye_=$2yf;},function(){return{mod:$CCMM$,$t:{t:'u',l:['T$PushIterator',{t:None$stream}]},$cont:PushIterator$stream,pa:1027,d:['ceylon.json.stream','PushIterator','$at','pushed$3u4iln']};});
pushIterator$.$_push=function($2yg){
var pushIterator$=this;
var $2yh;
m$1.asrt$((m$1.is$(($2yh=$2yg),{t:None$stream})),"cannot push more than one item: \'is None p=pushed\' at StreamingVisitor.ceylon (52:15-52:32)",'51:8-52:33','StreamingVisitor.ceylon');
var $2yi;
m$1.asrt$((m$1.is$(($2yi=$2yh),pushIterator$.$$targs$$.T$PushIterator)),"Assertion failed: \'is T p\' at StreamingVisitor.ceylon (53:15-53:22)",'53:8-53:23','StreamingVisitor.ceylon');
pushIterator$.$wghd6m$2ye=$2yi;
};pushIterator$.$_push.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'pushed',mt:'prm',$t:{t:m$1.Anything}}],$cont:PushIterator$stream,pa:1,d:['ceylon.json.stream','PushIterator','$m','push']};};
pushIterator$.next=function(){
var pushIterator$=this;
var $2yj;
if(!m$1.is$(($2yj=pushIterator$.$wghd6m$2ye),{t:None$stream})){
pushIterator$.$wghd6m$2ye=none$stream();
return $2yj;
}
else{
return pushIterator$.$wghd6m$2yd.next();
}
};pushIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$PushIterator',{t:m$1.Finished}]},ps:[],$cont:PushIterator$stream,pa:3,d:['ceylon.json.stream','PushIterator','$m','next']};};
})(PushIterator$stream.$$.prototype);
}
return PushIterator$stream;
}
ex$.$init$PushIterator$stream=$init$PushIterator$stream;
$init$PushIterator$stream();
function StreamingVisitor$stream($wghd6m$2yk,streamingVisitor$){
$init$StreamingVisitor$stream();
if(streamingVisitor$===undefined)streamingVisitor$=new StreamingVisitor$stream.$$;
streamingVisitor$.$$targs$$={Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])};
streamingVisitor$.$wghd6m$2yk_=$wghd6m$2yk;
m$1.Iterator({Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])},streamingVisitor$);
streamingVisitor$.$wghd6m$2yl_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:PushIterator$stream,a:{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}]),Key$Entry:{t:m$1.$_String}}}])}}});
streamingVisitor$.$wghd6m$2ym_=PushIterator$stream(m$1.emptyIterator(),{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}]),Key$Entry:{t:m$1.$_String}}}])});
streamingVisitor$.$wghd6m$2ym.$_push($wghd6m$2yk);
streamingVisitor$.$wghd6m$2yl.$_push(streamingVisitor$.$wghd6m$2ym);
return streamingVisitor$;
}
StreamingVisitor$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'root',mt:'prm',$t:Value()}],sts:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamingVisitor')];},d:['ceylon.json.stream','StreamingVisitor']};};
ex$.StreamingVisitor$stream=StreamingVisitor$stream;
function $init$StreamingVisitor$stream(){
if(StreamingVisitor$stream.$$===undefined){
m$1.initTypeProto(StreamingVisitor$stream,'ceylon.json.stream::StreamingVisitor',m$1.Basic,m$1.Iterator);
(function(streamingVisitor$){
m$1.atr$(streamingVisitor$,'$wghd6m$2yk',function(){return this.$wghd6m$2yk_;},undefined,function(){return{mod:$CCMM$,$t:Value(),$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','root$tvqdbk']};});
m$1.atr$(streamingVisitor$,'$wghd6m$2yl',function(){return this.$wghd6m$2yl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:PushIterator$stream,a:{T$PushIterator:{t:'u',l:[Value(),{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}}]}}}}},$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','stack$vozhl2']};});
m$1.atr$(streamingVisitor$,'$wghd6m$2ym',function(){return this.$wghd6m$2ym_;},undefined,function(){return{mod:$CCMM$,$t:{t:PushIterator$stream,a:{T$PushIterator:{t:'u',l:[Value(),{t:m$1.Entry,a:{Item$Entry:Value(),Key$Entry:{t:m$1.$_String}}}]}}},$cont:StreamingVisitor$stream,d:['ceylon.json.stream','StreamingVisitor','$at','pi$wvgdfz']};});
streamingVisitor$.next=function(){
var streamingVisitor$=this;
var $2yn;
if(m$1.nn$(($2yn=streamingVisitor$.$wghd6m$2yl.$_pop()))){
var $2yo=$2yn.next();
var $2yp=$2yo;
if(m$1.is$($2yp,m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Null}]))) {
return $2yp;
}
else if(m$1.is$($2yp,{t:$_Object})) {
streamingVisitor$.$wghd6m$2yl.$_push(PushIterator$stream($2yp.iterator(),{T$PushIterator:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}]),Key$Entry:{t:m$1.$_String}}}}));
return objectStart$stream();
}
else if(m$1.is$($2yp,{t:$_Array})) {
streamingVisitor$.$wghd6m$2yl.$_push(PushIterator$stream($2yp.iterator(),{T$PushIterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}));
return arrayStart$stream();
}
else if(m$1.is$($2yp,{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}]),Key$Entry:{t:m$1.$_String}}})) {
$2yn.$_push($2yp.item);
return KeyEvent$stream($2yp.key);
}
else if(m$1.is$($2yp,{t:m$1.Finished})) {
var $2yq=$2yn;
if(m$1.is$($2yq,{t:m$1.Iterator,a:{Element$Iterator:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array},{t:m$1.Null}])}})) {
return arrayEnd$stream();
}
else{
return objectEnd$stream();
}
}
}
else{
return m$1.finished();
}
};streamingVisitor$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[],$cont:StreamingVisitor$stream,pa:3,d:['ceylon.json.stream','StreamingVisitor','$m','next']};};
})(StreamingVisitor$stream.$$.prototype);
}
return StreamingVisitor$stream;
}
ex$.$init$StreamingVisitor$stream=$init$StreamingVisitor$stream;
$init$StreamingVisitor$stream();
function StreamState$stream(parent,last,keys,streamState$){
$init$StreamState$stream();
if(streamState$===undefined)streamState$=new StreamState$stream.$$;
streamState$.parent_=parent;
streamState$.last_=last;
streamState$.keys_=keys;
streamState$.$wghd6m$2yr_=(0);
return streamState$;
}
StreamState$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'parent',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]},pa:1},{nm:'last',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},Event$stream()]},pa:1025},{nm:'keys',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.$_String}}}]},pa:1}],an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamState')];},d:['ceylon.json.stream','StreamState']};};
ex$.StreamState$stream=StreamState$stream;
function $init$StreamState$stream(){
if(StreamState$stream.$$===undefined){
m$1.initTypeProto(StreamState$stream,'ceylon.json.stream::StreamState',m$1.Basic);
(function(streamState$){
m$1.atr$(streamState$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]},$cont:StreamState$stream,pa:1,d:['ceylon.json.stream','StreamState','$at','parent']};});
m$1.atr$(streamState$,'last',function(){return this.last_;},function($2ys){return this.last_=$2ys;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},Event$stream()]},$cont:StreamState$stream,pa:1025,d:['ceylon.json.stream','StreamState','$at','last']};});
m$1.atr$(streamState$,'keys',function(){return this.keys_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.$_String}}}]},$cont:StreamState$stream,pa:1,d:['ceylon.json.stream','StreamState','$at','keys']};});
m$1.atr$(streamState$,'num',function(){return this.$wghd6m$2yr_;},function($2yt){return this.$wghd6m$2yr_=$2yt;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamState$stream,pa:1025,an:function(){return[m$1.doc("The number of events yielded so far")];},d:['ceylon.json.stream','StreamState','$at','num']};});
m$1.atr$(streamState$,'string',function(){
var streamState$=this;
return "".plus(($2yu=streamState$.parent,m$1.nn$($2yu)?$2yu:"<top>").string).plus(", ").plus(($2yv=streamState$.last,m$1.nn$($2yv)?$2yv:"<null>").string).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StreamState$stream,pa:3,d:['ceylon.json.stream','StreamState','$at','string']};});
})(StreamState$stream.$$.prototype);
}
return StreamState$stream;
}
ex$.$init$StreamState$stream=$init$StreamState$stream;
$init$StreamState$stream();
var $2yu,$2yv;
function StreamParser$stream($wghd6m$2yw,$wghd6m$2yx,streamParser$){
$init$StreamParser$stream();
if(streamParser$===undefined)streamParser$=new StreamParser$stream.$$;
streamParser$.$$targs$$={Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])};
streamParser$.$wghd6m$2yw_=$wghd6m$2yw;
if($wghd6m$2yx===undefined){$wghd6m$2yx=false;}
streamParser$.$wghd6m$2yx_=$wghd6m$2yx;
m$1.Iterator({Element$Iterator:m$1.mut$([{t:ObjectStartEvent$stream},{t:ObjectEndEvent$stream},{t:ArrayStartEvent$stream},{t:ArrayEndEvent$stream},{t:KeyEvent$stream},{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}])},streamParser$);
Positioned(streamParser$);
streamParser$.$wghd6m$2yy_=streamParser$.$wghd6m$2yz(null,null);
return streamParser$;
}
StreamParser$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'input',mt:'prm',$t:{t:Tokenizer},an:function(){return[m$1.doc("The tokenizer to read input from")];}},{nm:'trackKeys',mt:'prm',def:1,$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("Whether to validate the uniqueness of keys")];}}],sts:[{t:m$1.Iterator,a:{Element$Iterator:Event$stream()}},{t:Positioned}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser')];},d:['ceylon.json.stream','StreamParser']};};
ex$.StreamParser$stream=StreamParser$stream;
function $init$StreamParser$stream(){
if(StreamParser$stream.$$===undefined){
m$1.initTypeProto(StreamParser$stream,'ceylon.json.stream::StreamParser',m$1.Basic,m$1.Iterator,$init$Positioned());
(function(streamParser$){
m$1.atr$(streamParser$,'$wghd6m$2yw',function(){return this.$wghd6m$2yw_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tokenizer},$cont:StreamParser$stream,an:function(){return[m$1.doc("The tokenizer to read input from")];},d:['ceylon.json.stream','StreamParser','$at','input$rh2j6r']};});
m$1.atr$(streamParser$,'$wghd6m$2yx',function(){return this.$wghd6m$2yx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StreamParser$stream,an:function(){return[m$1.doc("Whether to validate the uniqueness of keys")];},d:['ceylon.json.stream','StreamParser','$at','trackKeys$4hlw5s']};});
streamParser$.$wghd6m$2yz=function($2z0,$2z1){
var streamParser$=this;
var $2z2;
if((streamParser$.$wghd6m$2yx&&m$1.is$($2z1,{t:ObjectStartEvent$stream}))){
$2z2=m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.$_String}});
}
else{
$2z2=null;
}
var $2z3=StreamState$stream($2z0,$2z1,$2z2);
var $2z4;
if(streamParser$.$wghd6m$2yx&&m$1.is$(($2z4=$2z1),{t:KeyEvent$stream})){
var $2z5;
m$1.asrt$((m$1.nn$(($2z5=$2z0))),"Assertion failed: \'exists p=parent\' at StreamParser.ceylon (235:19-235:35)",'235:12-235:36','StreamParser.ceylon');
var $2z6;
if(m$1.nn$(($2z6=$2z5.keys))&&!$2z6.add($2z4.key)){
throw m$1.wrapexc(ParseException("Duplicate key: \'".plus($2z4.key).plus("\'"),streamParser$.$wghd6m$2yw.line,streamParser$.$wghd6m$2yw.column),'237:16-237:92','ceylon/json/stream/StreamParser.ceylon');
}
}
return $2z3;
};streamParser$.$wghd6m$2yz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StreamState$stream},ps:[{nm:'parent',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:StreamState$stream}]}},{nm:'last',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},Event$stream()]}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','pushState$9cmfiw']};};
m$1.atr$(streamParser$,'$wghd6m$2yy',function(){return this.$wghd6m$2yy_;},function($2z7){return this.$wghd6m$2yy_=$2z7;},function(){return{mod:$CCMM$,$t:{t:StreamState$stream},$cont:StreamParser$stream,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser:$at:state$r6yb4i')];},d:['ceylon.json.stream','StreamParser','$at','state$r6yb4i']};});
streamParser$.$wghd6m$2z8=function(){
var streamParser$=this;
streamParser$.$wghd6m$2yw.eatSpaces();
var $2z9=streamParser$.$wghd6m$2yw.character();
if($2z9.equals(m$1.Character(123,true))) {
streamParser$.$wghd6m$2yw.moveOne();
return objectStart$stream();
}
else if($2z9.equals(m$1.Character(91,true))) {
streamParser$.$wghd6m$2yw.moveOne();
return arrayStart$stream();
}
else if($2z9.equals(m$1.Character(34,true))) {
return parseKeyOrString(streamParser$.$wghd6m$2yw);
}
else if($2z9.equals(m$1.Character(110,true))) {
parseNull(streamParser$.$wghd6m$2yw);
streamParser$.$wghd6m$2za("null");
return null;
}
else if($2z9.equals(m$1.Character(116,true))) {
parseTrue(streamParser$.$wghd6m$2yw);
streamParser$.$wghd6m$2za("true");
return true;
}
else if($2z9.equals(m$1.Character(102,true))) {
parseFalse(streamParser$.$wghd6m$2yw);
streamParser$.$wghd6m$2za("false");
return false;
}
else if($2z9.equals(m$1.Character(45,true)) || $2z9.equals(m$1.Character(48,true)) || $2z9.equals(m$1.Character(49,true)) || $2z9.equals(m$1.Character(50,true)) || $2z9.equals(m$1.Character(51,true)) || $2z9.equals(m$1.Character(52,true)) || $2z9.equals(m$1.Character(53,true)) || $2z9.equals(m$1.Character(54,true)) || $2z9.equals(m$1.Character(55,true)) || $2z9.equals(m$1.Character(56,true)) || $2z9.equals(m$1.Character(57,true))) {
return parseNumber(streamParser$.$wghd6m$2yw);
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter("a value"),'283:12-283:54','ceylon/json/stream/StreamParser.ceylon');
}
};streamParser$.$wghd6m$2z8.$crtmm$=function(){return{mod:$CCMM$,$t:Event$stream(),ps:[],$cont:StreamParser$stream,an:function(){return[m$1.doc("Parse any JSON value and return an event")];},d:['ceylon.json.stream','StreamParser','$m','parseValue$abikp']};};
streamParser$.$wghd6m$2za=function($2zb){
var streamParser$=this;
if(streamParser$.$wghd6m$2yw.hasMore){
var $2zc=streamParser$.$wghd6m$2yw.character();
if(((((!$2zc.equals(m$1.Character(44,true)))&&(!$2zc.equals(m$1.Character(125,true))))&&(!$2zc.equals(m$1.Character(93,true))))&&!streamParser$.$wghd6m$2yw.isSpace($2zc))){
throw m$1.wrapexc(ParseException("Expected ".plus($2zb).plus(" but got ").plus($2zb).plus("").plus($2zc.string).plus(""),streamParser$.$wghd6m$2yw.line,streamParser$.$wghd6m$2yw.column),'294:16-294:125','ceylon/json/stream/StreamParser.ceylon');
}
}
};streamParser$.$wghd6m$2za.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'expectedIdent',mt:'prm',$t:{t:m$1.$_String}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','checkNext$rguf2k']};};
streamParser$.next=function(){
var streamParser$=this;
streamParser$.$wghd6m$2yw.eatSpaces();
var $2zd;
if(streamParser$.$wghd6m$2yw.hasMore){
var $2ze=streamParser$.$wghd6m$2yw.character();
if($2ze.equals(m$1.Character(93,true))) {
streamParser$.$wghd6m$2yw.moveOne();
$2zd=arrayEnd$stream();
}
else if($2ze.equals(m$1.Character(125,true))) {
streamParser$.$wghd6m$2yw.moveOne();
$2zd=objectEnd$stream();
}
else if($2ze.equals(m$1.Character(44,true))) {
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:ObjectStartEvent$stream})){
streamParser$.$wghd6m$2yw.moveOne();
streamParser$.$wghd6m$2yw.eatSpaces();
if(streamParser$.$wghd6m$2yw.character().equals(m$1.Character(34,true))){
$2zd=KeyEvent$stream(parseKeyOrString(streamParser$.$wghd6m$2yw));
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter("a key"),'321:24-321:64','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:ArrayStartEvent$stream})){
streamParser$.$wghd6m$2yw.moveOne();
streamParser$.$wghd6m$2yw.eatSpaces();
$2zd=streamParser$.$wghd6m$2z8();
}
else{
if(m$1.nn$(streamParser$.$wghd6m$2yy.last)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter("a value"),'328:20-328:62','ceylon/json/stream/StreamParser.ceylon');
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter((((streamParser$.$wghd6m$2yy.num).valueOf()==(0).valueOf()))?"a value":"end of input"),'330:20-330:107','ceylon/json/stream/StreamParser.ceylon');
}
}
}
}
else if($2ze.equals(m$1.Character(58,true))) {
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:KeyEvent$stream})){
streamParser$.$wghd6m$2yw.moveOne();
streamParser$.$wghd6m$2yw.eatSpaces();
$2zd=streamParser$.$wghd6m$2z8();
}
else{
if(m$1.nn$(streamParser$.$wghd6m$2yy.last)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter((((streamParser$.$wghd6m$2yy.num).valueOf()==(0).valueOf()))?"a value":m$1.Character(44,true)),'339:20-339:96','ceylon/json/stream/StreamParser.ceylon');
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter((((streamParser$.$wghd6m$2yy.num).valueOf()==(0).valueOf()))?"a value":"end of input"),'341:20-341:107','ceylon/json/stream/StreamParser.ceylon');
}
}
}
else{
if(!m$1.nn$(streamParser$.$wghd6m$2yy.last)&&(streamParser$.$wghd6m$2yy.num>0)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter("end of input"),'347:20-347:67','ceylon/json/stream/StreamParser.ceylon');
}
else{
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:ObjectStartEvent$stream})){
if((streamParser$.$wghd6m$2yy.num>0)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(m$1.Character(44,true)),'350:24-350:60','ceylon/json/stream/StreamParser.ceylon');
}
$2zd=KeyEvent$stream(parseKeyOrString(streamParser$.$wghd6m$2yw));
}
else{
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:ArrayStartEvent$stream})){
if((streamParser$.$wghd6m$2yy.num>0)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(m$1.Character(44,true)),'355:24-355:60','ceylon/json/stream/StreamParser.ceylon');
}
$2zd=streamParser$.$wghd6m$2z8();
}
else{
if(m$1.is$(streamParser$.$wghd6m$2yy.last,{t:KeyEvent$stream})){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(m$1.Character(58,true)),'361:24-361:60','ceylon/json/stream/StreamParser.ceylon');
}
$2zd=streamParser$.$wghd6m$2z8();
}
}
}
}
}
else{
$2zd=m$1.finished();
}
return streamParser$.$wghd6m$2zf($2zd);
};streamParser$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[],$cont:StreamParser$stream,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:StreamParser:$m:next'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.json'),ParseException))];},d:['ceylon.json.stream','StreamParser','$m','next']};};
streamParser$.$wghd6m$2zf=function($2zg){
var streamParser$=this;
var $2zh=streamParser$.$wghd6m$2yy.last;
($2zi=streamParser$.$wghd6m$2yy,$2zj=$2zi.num,$2zi.num=$2zj.successor,$2zj);
var $2zi,$2zj;
var $2zk=$2zg;
if(m$1.is$($2zk,{t:ObjectStartEvent$stream})) {
var $2zl;
if(m$1.is$(($2zl=$2zh),{t:KeyEvent$stream})){
var $2zm;
if(m$1.nn$(($2zm=streamParser$.$wghd6m$2yy.parent))){
streamParser$.$wghd6m$2yy=$2zm;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(streamParser$.$wghd6m$2yw.character()),'381:20-381:70','ceylon/json/stream/StreamParser.ceylon');
}
}
streamParser$.$wghd6m$2yy=streamParser$.$wghd6m$2yz(streamParser$.$wghd6m$2yy,$2zk);
}
else if(m$1.is$($2zk,{t:KeyEvent$stream})) {
var $2zn;
if(!m$1.is$(($2zn=$2zh),{t:ObjectStartEvent$stream})){
throw m$1.wrapexc(ParseException("Key not expected",streamParser$.$wghd6m$2yw.line,streamParser$.$wghd6m$2yw.column),'388:16-388:82','ceylon/json/stream/StreamParser.ceylon');
}
function $2zo(){return $2zh;}
streamParser$.$wghd6m$2yy=streamParser$.$wghd6m$2yz(streamParser$.$wghd6m$2yy,$2zk);
}
else if(m$1.is$($2zk,{t:ObjectEndEvent$stream})) {
var $2zp;
if(m$1.is$(($2zp=$2zh),{t:ObjectStartEvent$stream})){
var $2zq;
if(m$1.nn$(($2zq=streamParser$.$wghd6m$2yy.parent))){
streamParser$.$wghd6m$2yy=$2zq;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(streamParser$.$wghd6m$2yw.character()),'397:20-397:70','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
throw m$1.wrapexc(ParseException("Got \'".plus($2zk.string).plus("\' but in ").plus(($2zr=$2zp,m$1.nn$($2zr)?$2zr:"null").string).plus(" not in object"),streamParser$.$wghd6m$2yw.line,streamParser$.$wghd6m$2yw.column),'400:16-401:45','ceylon/json/stream/StreamParser.ceylon');
var $2zr;
}
}
else if(m$1.is$($2zk,{t:ArrayStartEvent$stream})) {
var $2zs;
if(m$1.is$(($2zs=$2zh),{t:KeyEvent$stream})){
var $2zt;
if(m$1.nn$(($2zt=streamParser$.$wghd6m$2yy.parent))){
streamParser$.$wghd6m$2yy=$2zt;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(streamParser$.$wghd6m$2yw.character()),'409:20-409:70','ceylon/json/stream/StreamParser.ceylon');
}
}
streamParser$.$wghd6m$2yy=streamParser$.$wghd6m$2yz(streamParser$.$wghd6m$2yy,$2zk);
}
else if(m$1.is$($2zk,{t:ArrayEndEvent$stream})) {
var $2zu;
if(m$1.is$(($2zu=$2zh),{t:ArrayStartEvent$stream})){
var $2zv;
if(m$1.nn$(($2zv=streamParser$.$wghd6m$2yy.parent))){
streamParser$.$wghd6m$2yy=$2zv;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(streamParser$.$wghd6m$2yw.character()),'419:20-419:70','ceylon/json/stream/StreamParser.ceylon');
}
}
else{
throw m$1.wrapexc(ParseException("Got \'".plus($2zk.string).plus("\' but in ").plus(($2zw=$2zu,m$1.nn$($2zw)?$2zw:"null").string).plus(" not array"),streamParser$.$wghd6m$2yw.line,streamParser$.$wghd6m$2yw.column),'422:16-423:45','ceylon/json/stream/StreamParser.ceylon');
var $2zw;
}
}
else if(m$1.is$($2zk,m$1.mut$([{t:m$1.$_String},{t:m$1.Float},{t:m$1.Integer},{t:m$1.$_Boolean},{t:m$1.Null}]))) {
var $2zx;
if(m$1.is$(($2zx=$2zh),{t:KeyEvent$stream})){
var $2zy;
if(m$1.nn$(($2zy=streamParser$.$wghd6m$2yy.parent))){
streamParser$.$wghd6m$2yy=$2zy;
}
else{
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedCharacter(streamParser$.$wghd6m$2yw.character()),'431:20-431:70','ceylon/json/stream/StreamParser.ceylon');
}
}
}
else if($2zk===m$1.finished()) {
if(m$1.nn$(streamParser$.$wghd6m$2yy.parent)){
throw m$1.wrapexc(streamParser$.$wghd6m$2yw.unexpectedEnd,'437:16-437:41','ceylon/json/stream/StreamParser.ceylon');
}
}
return $2zg;
};streamParser$.$wghd6m$2zf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]},ps:[{nm:'yielding',mt:'prm',$t:{t:'u',l:[Event$stream(),{t:m$1.Finished}]}}],$cont:StreamParser$stream,d:['ceylon.json.stream','StreamParser','$m','yield$38y73i']};};
m$1.atr$(streamParser$,'string',function(){
var streamParser$=this;
return streamParser$.$wghd6m$2yw.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','string']};});
m$1.atr$(streamParser$,'column',function(){
var streamParser$=this;
return streamParser$.$wghd6m$2yw.column;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','column']};});
m$1.atr$(streamParser$,'line',function(){
var streamParser$=this;
return streamParser$.$wghd6m$2yw.line;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','line']};});
m$1.atr$(streamParser$,'position',function(){
var streamParser$=this;
return streamParser$.$wghd6m$2yw.position;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StreamParser$stream,pa:3,d:['ceylon.json.stream','StreamParser','$at','position']};});
})(StreamParser$stream.$$.prototype);
}
return StreamParser$stream;
}
ex$.$init$StreamParser$stream=$init$StreamParser$stream;
$init$StreamParser$stream();
function LookAhead$stream($wghd6m$2zz,$wghd6m$300,$$targs$$,lookAhead$){
$init$LookAhead$stream();
if(lookAhead$===undefined)lookAhead$=new LookAhead$stream.$$;
m$1.set_type_args(lookAhead$,$$targs$$);
lookAhead$.$wghd6m$2zz_=$wghd6m$2zz;
if($wghd6m$300===undefined){$wghd6m$300=(1);}
lookAhead$.$wghd6m$300_=$wghd6m$300;
m$1.Iterator({Element$Iterator:$$targs$$.T$LookAhead},lookAhead$);
Positioned(lookAhead$);
lookAhead$.$wghd6m$301_=m$2.ArrayList(($302=lookAhead$.$wghd6m$300,m$1.nn$($302)?$302:(2)),undefined,undefined,{Element$ArrayList:m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}])});
var $302;
return lookAhead$;
}
LookAhead$stream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stream',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}]}},{nm:'lookAhead',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lookAhead$xft3nu')];}}],tp:{T$LookAhead:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead')];},d:['ceylon.json.stream','LookAhead']};};
ex$.LookAhead$stream=LookAhead$stream;
function $init$LookAhead$stream(){
if(LookAhead$stream.$$===undefined){
m$1.initTypeProto(LookAhead$stream,'ceylon.json.stream::LookAhead',m$1.Basic,m$1.Iterator,$init$Positioned());
(function(lookAhead$){
m$1.atr$(lookAhead$,'$wghd6m$2zz',function(){return this.$wghd6m$2zz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$LookAhead'}},{t:Positioned}]},$cont:LookAhead$stream,d:['ceylon.json.stream','LookAhead','$at','stream$4v9nbw']};});
m$1.atr$(lookAhead$,'$wghd6m$300',function(){return this.$wghd6m$300_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LookAhead$stream,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lookAhead$xft3nu')];},d:['ceylon.json.stream','LookAhead','$at','lookAhead$xft3nu']};});
m$1.atr$(lookAhead$,'$wghd6m$301',function(){return this.$wghd6m$301_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]}}},$cont:LookAhead$stream,an:function(){return[m$1.doc("The buffer")];},d:['ceylon.json.stream','LookAhead','$at','peeked$1afwi6']};});
m$1.atr$(lookAhead$,'$wghd6m$303',function(){if(this.$wghd6m$303_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$wghd6m$303»');return this.$wghd6m$303_;},function($304){return this.$wghd6m$303_=$304;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:col$jx4yhw')];},d:['ceylon.json.stream','LookAhead','$at','col$jx4yhw']};});
m$1.atr$(lookAhead$,'$wghd6m$305',function(){if(this.$wghd6m$305_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$wghd6m$305»');return this.$wghd6m$305_;},function($306){return this.$wghd6m$305_=$306;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:lin$k41cb1')];},d:['ceylon.json.stream','LookAhead','$at','lin$k41cb1']};});
m$1.atr$(lookAhead$,'$wghd6m$307',function(){if(this.$wghd6m$307_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute «$wghd6m$307»');return this.$wghd6m$307_;},function($308){return this.$wghd6m$307_=$308;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:1155,an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:LookAhead:$at:pos$k7bql4')];},d:['ceylon.json.stream','LookAhead','$at','pos$k7bql4']};});
lookAhead$.peek$defs$n=function($309){return 1;};
lookAhead$.peek=function($309){
var lookAhead$=this;
if($309===undefined){$309=lookAhead$.peek$defs$n($309);}
m$1.asrt$((($309>=1)),"Assertion failed: \'n >= 1\' at StreamParser.ceylon (468:14-468:21)",'468:8-468:22','StreamParser.ceylon');
var $30a;
if(m$1.nn$(($30a=lookAhead$.$wghd6m$300))&&($309>$30a)){
throw m$1.wrapexc(m$1.AssertionError("lookahead limited to ".plus($30a.string).plus(" elements")),'470:12-470:79','ceylon/json/stream/StreamParser.ceylon');
}
while((lookAhead$.$wghd6m$301.size<$309)){
lookAhead$.$wghd6m$301.offer(lookAhead$.$wghd6m$2zz.next());
}
var $30b;
m$1.asrt$((m$1.is$(($30b=lookAhead$.$wghd6m$301.$_get($309.minus(1))),m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}]))),"Assertion failed: \'is T|Finished p=peeked[n-1]\' at StreamParser.ceylon (475:14-475:42)",'475:8-475:43','StreamParser.ceylon');
return $30b;
};lookAhead$.peek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:LookAhead$stream,pa:1,an:function(){return[m$1.doc("Get the *n*th element ahead")];},d:['ceylon.json.stream','LookAhead','$m','peek']};};
lookAhead$.next=function(){
var lookAhead$=this;
var $30c;
if((lookAhead$.$wghd6m$301.size>0)){
var $30d;
m$1.asrt$((m$1.is$(($30d=lookAhead$.$wghd6m$301.accept()),m$1.mut$([lookAhead$.$$targs$$.T$LookAhead,{t:m$1.Finished}]))),"Assertion failed: \'is T|Finished p=peeked.accept()\' at StreamParser.ceylon (482:18-482:50)",'482:12-482:51','StreamParser.ceylon');
$30c=$30d;
}
else{
$30c=lookAhead$.$wghd6m$2zz.next();
}
lookAhead$.$wghd6m$303=lookAhead$.$wghd6m$2zz.column;
lookAhead$.$wghd6m$305=lookAhead$.$wghd6m$2zz.line;
lookAhead$.$wghd6m$307=lookAhead$.$wghd6m$2zz.position;
return $30c;
};lookAhead$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$LookAhead',{t:m$1.Finished}]},ps:[],$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$m','next']};};
m$1.atr$(lookAhead$,'column',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$303;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','column']};});
m$1.atr$(lookAhead$,'line',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$305;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','line']};});
m$1.atr$(lookAhead$,'position',function(){
var lookAhead$=this;
return lookAhead$.$wghd6m$307;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LookAhead$stream,pa:3,d:['ceylon.json.stream','LookAhead','$at','position']};});
})(LookAhead$stream.$$.prototype);
}
return LookAhead$stream;
}
ex$.$init$LookAhead$stream=$init$LookAhead$stream;
$init$LookAhead$stream();
function errorReporting$stream($30e,$yfvm0i$){return function(){function $30f($$targs$$){
var $30f$=new $30f.$$;$30f$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:m$1.mut$([$yfvm0i$.T$errorReporting,{t:m$1.Exception}])},$30f$);
Positioned($30f$);
$30f$.$wghd6m$30g_=null;
$30f$.$prop$get$wghd6m$30g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]},$cont:errorReporting$stream,pa:1024,d:['ceylon.json.stream','errorReporting','$at','error$u00e7j']};}};
$30f$.$prop$get$wghd6m$30g.get=function(){return $wghd6m$30g};
$30f$.$prop$getColumn={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','column']};}};
$30f$.$prop$getColumn.get=function(){return column};
$30f$.$prop$getLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','line']};}};
$30f$.$prop$getLine.get=function(){return line};
$30f$.$prop$getPosition={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','position']};}};
$30f$.$prop$getPosition.get=function(){return position};
return $30f$;
};$30f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:errorReporting$stream,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:['T$errorReporting',{t:m$1.Exception}]}}},{t:Positioned}],d:['ceylon.json.stream','errorReporting']};};
function $init$$30f(){
if($30f.$$===undefined){
m$1.initTypeProto($30f,'ceylon.json.stream::anonymous#0',m$1.Basic,m$1.Iterator,$init$Positioned());
(function($30f$){
m$1.atr$($30f$,'$wghd6m$30g',function(){return this.$wghd6m$30g_;},function($30h){return this.$wghd6m$30g_=$30h;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]},$cont:errorReporting$stream,pa:1024,d:['ceylon.json.stream','errorReporting','$at','error$u00e7j']};});
$30f$.next=function(){
var $30f$=this;
var $30i;
if(m$1.nn$(($30i=$30f$.$wghd6m$30g))){
return $30i;
}
else{
try{
return $30e.next();
}
catch($30j){
if($30j.getT$name===undefined)$30j=m$1.NatErr($30j);
if(m$1.is$($30j,{t:m$1.Exception})){
return ($30f$.$wghd6m$30g=$30j);
}else{throw $30j}
}
}
};$30f$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$errorReporting',{t:m$1.Exception},{t:m$1.Finished}]},ps:[],$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$m','next']};};
m$1.atr$($30f$,'column',function(){
var $30f$=this;
return $30e.column;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','column']};});
m$1.atr$($30f$,'line',function(){
var $30f$=this;
return $30e.line;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','line']};});
m$1.atr$($30f$,'position',function(){
var $30f$=this;
return $30e.position;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:errorReporting$stream,pa:3,d:['ceylon.json.stream','errorReporting','$at','position']};});
})($30f.$$.prototype);
}
return $30f;
}
$init$$30f();
return $30f();}();};
errorReporting$stream.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:['T$errorReporting',{t:m$1.Exception}]}}},{t:Positioned}]},ps:[{nm:'stream',mt:'prm',$t:{t:'i',l:[{t:m$1.Iterator,a:{Element$Iterator:'T$errorReporting'}},{t:Positioned}]}}],tp:{T$errorReporting:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.json.stream:errorReporting')];},d:['ceylon.json.stream','errorReporting']};};
function StringPrinter($wghd6m$30l,stringPrinter$){
$init$StringPrinter();
if(stringPrinter$===undefined)stringPrinter$=new StringPrinter.$$;
if($wghd6m$30l===undefined){$wghd6m$30l=false;}
stringPrinter$.$wghd6m$30l_=$wghd6m$30l;
Printer($wghd6m$30l,stringPrinter$);
stringPrinter$.$wghd6m$30m_=m$1.StringBuilder();
return stringPrinter$;
}
StringPrinter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Printer},ps:[{nm:'pretty',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringPrinter'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','StringPrinter']};};
ex$.StringPrinter=StringPrinter;
function $init$StringPrinter(){
if(StringPrinter.$$===undefined){
m$1.initTypeProto(StringPrinter,'ceylon.json::StringPrinter',$init$Printer());
(function(stringPrinter$){
m$1.atr$(stringPrinter$,'$wghd6m$30l',function(){return this.$wghd6m$30l_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','pretty$3cghnj']};});
m$1.atr$(stringPrinter$,'$wghd6m$30m',function(){return this.$wghd6m$30m_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder$4bb58c']};});
stringPrinter$.print=function($30n){var stringPrinter$=this;
return stringPrinter$.$wghd6m$30m.append($30n);};
stringPrinter$.print.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringPrinter,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringPrinter:$m:print')];},d:['ceylon.json','StringPrinter','$m','print']};};
m$1.atr$(stringPrinter$,'string',function(){
var stringPrinter$=this;
return stringPrinter$.$wghd6m$30m.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringPrinter,pa:11,an:function(){return[m$1.doc("Returns the printed JSON")];},d:['ceylon.json','StringPrinter','$at','string']};});
})(StringPrinter.$$.prototype);
}
return StringPrinter;
}
ex$.$init$StringPrinter=$init$StringPrinter;
$init$StringPrinter();
function Positioned(positioned$){
}
Positioned.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned')];},d:['ceylon.json','Positioned']};};
ex$.Positioned=Positioned;
function $init$Positioned(){
if(Positioned.$$===undefined){
m$1.initTypeProtoI(Positioned,'ceylon.json::Positioned');
(function(positioned$){
positioned$.$prop$getPosition={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:position')];},d:['ceylon.json','Positioned','$at','position']};}};
positioned$.$prop$getLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc("The line number within the input.")];},d:['ceylon.json','Positioned','$at','line']};}};
positioned$.$prop$getColumn={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Positioned,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:column')];},d:['ceylon.json','Positioned','$at','column']};}};
m$1.atr$(positioned$,'location',function(){
var positioned$=this;
return "".plus(positioned$.line.string).plus(":").plus(positioned$.column.string).plus(" (line:column)");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Positioned,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Positioned:$at:location')];},d:['ceylon.json','Positioned','$at','location']};});
})(Positioned.$$.prototype);
}
return Positioned;
}
ex$.$init$Positioned=$init$Positioned;
$init$Positioned();
function Tokenizer(tokenizer$){
$init$Tokenizer();
if(tokenizer$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.json::Tokenizer"),'?','?')
Positioned(tokenizer$);
tokenizer$.$wghd6m$30o_=(0);
tokenizer$.$wghd6m$30p_=(1);
tokenizer$.$wghd6m$30q_=(1);
return tokenizer$;
}
Tokenizer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Positioned}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer')];},d:['ceylon.json','Tokenizer']};};
ex$.Tokenizer=Tokenizer;
function $init$Tokenizer(){
if(Tokenizer.$$===undefined){
m$1.initTypeProto(Tokenizer,'ceylon.json::Tokenizer',m$1.Basic,$init$Positioned());
(function(tokenizer$){
m$1.atr$(tokenizer$,'$wghd6m$30o',function(){return this.$wghd6m$30o_;},function($30r){return this.$wghd6m$30o_=$30r;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1024,d:['ceylon.json','Tokenizer','$at','index$axh4m1']};});
m$1.atr$(tokenizer$,'$wghd6m$30p',function(){return this.$wghd6m$30p_;},function($30s){return this.$wghd6m$30p_=$30s;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1024,d:['ceylon.json','Tokenizer','$at','line_$j1cqe']};});
m$1.atr$(tokenizer$,'$wghd6m$30q',function(){return this.$wghd6m$30q_;},function($30t){return this.$wghd6m$30q_=$30t;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:1027,d:['ceylon.json','Tokenizer','$at','column_$7ybrm0']};});
m$1.atr$(tokenizer$,'position',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$30o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','position']};});
m$1.atr$(tokenizer$,'line',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$30p;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','line']};});
m$1.atr$(tokenizer$,'column',function(){
var tokenizer$=this;
return tokenizer$.$wghd6m$30q;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Tokenizer,pa:3,d:['ceylon.json','Tokenizer','$at','column']};});
tokenizer$.$prop$getHasMore={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Tokenizer,pa:5,an:function(){return[m$1.doc("Whether there is another character")];},d:['ceylon.json','Tokenizer','$at','hasMore']};}};
tokenizer$.character={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:Tokenizer,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:character')];},d:['ceylon.json','Tokenizer','$m','character']};}};tokenizer$.moveOne=function(){
var tokenizer$=this;
var $30u=tokenizer$.character();
var $30v=$30u;
if($30v.equals(m$1.Character(10,true))) {
($30w=tokenizer$.$wghd6m$30p,tokenizer$.$wghd6m$30p=$30w.successor,$30w);
var $30w;
tokenizer$.$wghd6m$30q=(1);
}
else if($30v.equals(m$1.Character(13,true))) {
tokenizer$.$wghd6m$30q=(1);
}
else{
($30x=tokenizer$.$wghd6m$30q,tokenizer$.$wghd6m$30q=$30x.successor,$30x);
var $30x;
}
($30y=tokenizer$.$wghd6m$30o,tokenizer$.$wghd6m$30o=$30y.successor,$30y);
var $30y;
};tokenizer$.moveOne.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc("Move to the next character")];},d:['ceylon.json','Tokenizer','$m','moveOne']};};
tokenizer$.eatSpaces=function(){
var tokenizer$=this;
while((tokenizer$.hasMore&&tokenizer$.isSpace(tokenizer$.character()))){
tokenizer$.moveOne();
}
};tokenizer$.eatSpaces.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatSpaces')];},d:['ceylon.json','Tokenizer','$m','eatSpaces']};};
tokenizer$.eatSpacesUntil=function($30z){
var tokenizer$=this;
tokenizer$.eatSpaces();
tokenizer$.eat($30z);
};tokenizer$.eatSpacesUntil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatSpacesUntil')];},d:['ceylon.json','Tokenizer','$m','eatSpacesUntil']};};
tokenizer$.check=function($310){
var tokenizer$=this;
if((!tokenizer$.character().equals($310))){
return false;
}
tokenizer$.moveOne();
return true;
};tokenizer$.check.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:check')];},d:['ceylon.json','Tokenizer','$m','check']};};
tokenizer$.eat=function($311){
var tokenizer$=this;
if((!tokenizer$.character().equals($311))){
throw m$1.wrapexc(tokenizer$.unexpectedCharacter($311),'83:12-83:40','ceylon/json/tokenize.ceylon');
}
tokenizer$.moveOne();
};tokenizer$.eat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eat')];},d:['ceylon.json','Tokenizer','$m','eat']};};
tokenizer$.eatChar=function(){
var tokenizer$=this;
var $312=tokenizer$.character();
tokenizer$.moveOne();
return $312;
};tokenizer$.eatChar.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:eatChar')];},d:['ceylon.json','Tokenizer','$m','eatChar']};};
tokenizer$.isSpace=function($313){var tokenizer$=this;
return ((($313.equals(m$1.Character(32,true))||$313.equals(m$1.Character(10,true)))||$313.equals(m$1.Character(13,true)))||$313.equals(m$1.Character(9,true)));};
tokenizer$.isSpace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:isSpace')];},d:['ceylon.json','Tokenizer','$m','isSpace']};};
tokenizer$.isDigit=function($314){
var tokenizer$=this;
var $315=$314.integer;
return (($315>=m$1.Character(48,true).integer)&&($315<=m$1.Character(57,true).integer));
};tokenizer$.isDigit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],$cont:Tokenizer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Tokenizer:$m:isDigit')];},d:['ceylon.json','Tokenizer','$m','isDigit']};};
tokenizer$.exception=function($316){var tokenizer$=this;
return ParseException($316,tokenizer$.line,tokenizer$.column);};
tokenizer$.exception.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ParseException},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String}}],$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$m','exception']};};
m$1.atr$(tokenizer$,'unexpectedEnd',function(){
var tokenizer$=this;
return tokenizer$.exception("Unexpected end of input");
},undefined,function(){return{mod:$CCMM$,$t:{t:ParseException},$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$at','unexpectedEnd']};});
tokenizer$.unexpectedCharacter=function($317){var tokenizer$=this;
return tokenizer$.exception("Expected ".plus(($318=$317,m$1.nn$($318)?$318:"end of input").string).plus(" but got ").plus(tokenizer$.character().string).plus(""));};
tokenizer$.unexpectedCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ParseException},ps:[{nm:'expected',mt:'prm',$t:{t:'u',l:[{t:m$1.Character},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]}}],$cont:Tokenizer,pa:1,d:['ceylon.json','Tokenizer','$m','unexpectedCharacter']};};
})(Tokenizer.$$.prototype);
}
return Tokenizer;
}
ex$.$init$Tokenizer=$init$Tokenizer;
$init$Tokenizer();
var $318;
function StringTokenizer($wghd6m$319,stringTokenizer$){
$init$StringTokenizer();
if(stringTokenizer$===undefined)stringTokenizer$=new StringTokenizer.$$;
stringTokenizer$.$wghd6m$319_=$wghd6m$319;
Tokenizer(stringTokenizer$);
stringTokenizer$.$wghd6m$31a_=m$1.$_Array(stringTokenizer$.$wghd6m$319,{Element$Array:{t:m$1.Character}});
return stringTokenizer$;
}
StringTokenizer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Tokenizer},ps:[{nm:'chars',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringTokenizer')];},d:['ceylon.json','StringTokenizer']};};
ex$.StringTokenizer=StringTokenizer;
function $init$StringTokenizer(){
if(StringTokenizer.$$===undefined){
m$1.initTypeProto(StringTokenizer,'ceylon.json::StringTokenizer',$init$Tokenizer());
(function(stringTokenizer$){
m$1.atr$(stringTokenizer$,'$wghd6m$319',function(){return this.$wghd6m$319_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringTokenizer,d:['ceylon.json','StringTokenizer','$at','chars$3ibitv']};});
m$1.atr$(stringTokenizer$,'$wghd6m$31a',function(){return this.$wghd6m$31a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:StringTokenizer,d:['ceylon.json','StringTokenizer','$at','array$v7foi9']};});
m$1.atr$(stringTokenizer$,'hasMore',function(){
var stringTokenizer$=this;
return (stringTokenizer$.position<stringTokenizer$.$wghd6m$31a.size);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:StringTokenizer,pa:3,an:function(){return[m$1.doc("Whether there is another character")];},d:['ceylon.json','StringTokenizer','$at','hasMore']};});
stringTokenizer$.character=function(){
var stringTokenizer$=this;
var $31b;
if(m$1.nn$(($31b=stringTokenizer$.$wghd6m$31a.getFromFirst(stringTokenizer$.position)))){
return $31b;
}
else{
throw m$1.wrapexc(stringTokenizer$.unexpectedEnd,'136:12-136:31','ceylon/json/tokenize.ceylon');
}
};stringTokenizer$.character.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:StringTokenizer,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:StringTokenizer:$m:character')];},d:['ceylon.json','StringTokenizer','$m','character']};};
})(StringTokenizer.$$.prototype);
}
return StringTokenizer;
}
ex$.$init$StringTokenizer=$init$StringTokenizer;
$init$StringTokenizer();
function Value(){var $31c=m$1.mut$([ObjectValue(),{t:m$1.Null}]);$31c.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Value')];},d:['ceylon.json','Value']};};return $31c;}
ex$.Value=Value;
function ObjectValue(){var $31d=m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:$_Object},{t:$_Array}]);$31d.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:ObjectValue')];},d:['ceylon.json','ObjectValue']};};return $31d;}
ex$.ObjectValue=ObjectValue;
function Visitor(visitor$){
}
Visitor.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor'),m$1.by(["Tom Bentley"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','Visitor']};};
ex$.Visitor=Visitor;
function $init$Visitor(){
if(Visitor.$$===undefined){
m$1.initTypeProtoI(Visitor,'ceylon.json::Visitor');
(function(visitor$){
visitor$.onStartObject={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onStartObject')];},d:['ceylon.json','Visitor','$m','onStartObject']};}};visitor$.onKey={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onKey')];},d:['ceylon.json','Visitor','$m','onKey']};}};visitor$.onEndObject={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc("Called at the end of an object.")];},d:['ceylon.json','Visitor','$m','onEndObject']};}};visitor$.onStartArray={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onStartArray')];},d:['ceylon.json','Visitor','$m','onStartArray']};}};visitor$.onEndArray={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc("Called at the end of an array.")];},d:['ceylon.json','Visitor','$m','onEndArray']};}};visitor$.onNumber={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'number',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onNumber')];},d:['ceylon.json','Visitor','$m','onNumber']};}};visitor$.onBoolean={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'boolean',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onBoolean')];},d:['ceylon.json','Visitor','$m','onBoolean']};}};visitor$.onNull={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onNull')];},d:['ceylon.json','Visitor','$m','onNull']};}};visitor$.onString={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:Visitor,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:Visitor:$m:onString')];},d:['ceylon.json','Visitor','$m','onString']};}};
})(Visitor.$$.prototype);
}
return Visitor;
}
ex$.$init$Visitor=$init$Visitor;
$init$Visitor();
function visit($31e,$31f,$31g){
if($31g===undefined){$31g=false;}
var $31h=$31e;
if(m$1.is$($31h,{t:$_Object})) {
$31f.onStartObject();
var $31i=($31j=($31g?$31h:null),m$1.nn$($31j)?$31j:$31h.$_sort(m$1.JsCallable(0,compareKeys)));
var $31j;
var $31l;for(var $31k=$31i.iterator();($31l=$31k.next())!==m$1.finished();){
var $31m=$31l.key,$31n=$31l.item;
$31f.onKey($31m);
visit($31n,$31f);
}
$31f.onEndObject();
}
else if(m$1.is$($31h,{t:$_Array})) {
$31f.onStartArray();
var $31p;for(var $31o=$31h.iterator();($31p=$31o.next())!==m$1.finished();){
visit($31p,$31f);
}
$31f.onEndArray();
}
else if(m$1.is$($31h,{t:m$1.$_String})) {
$31f.onString($31h);
}
else if(m$1.is$($31h,m$1.mut$([{t:m$1.Float},{t:m$1.Integer}]))) {
$31f.onNumber($31h);
}
else if(m$1.is$($31h,{t:m$1.$_Boolean})) {
$31f.onBoolean($31h);
}
else if(m$1.is$($31h,{t:m$1.Null})) {
$31f.onNull();
}
}
ex$.visit=visit;
visit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'subject',mt:'prm',$t:Value(),an:function(){return[m$1.doc("The value to visit.")];}},{nm:'visitor',mt:'prm',$t:{t:Visitor},an:function(){return[m$1.doc("The visitor to apply.")];}},{nm:'sortedKeys',mt:'prm',def:1,$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc$($CCMM$,'ceylon.json:visit:$at:sortedKeys$7m1j64')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.json:visit'),m$1.by(["Tom Bentley"].$sa$({t:m$1.$_String}))];},d:['ceylon.json','visit']};};
ex$.$pkgunsh$ceylon$json={'parseStringEscape':parseStringEscape,'parseStringUnicode':parseStringUnicode,'parseHex':parseHex,'parseDigits':parseDigits,'parseDigit':parseDigit,'parseExponent':parseExponent,'compareKeys':compareKeys};
ex$.$pkgunsh$ceylon$json$stream={'parse':parse$stream,'buildValue':buildValue$stream,'buildObject':buildObject$stream,'buildArray':buildArray$stream,'None':None$stream,'none':$prop$getNone$stream,'PushIterator':PushIterator$stream,'StreamState':StreamState$stream,'errorReporting':errorReporting$stream};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
