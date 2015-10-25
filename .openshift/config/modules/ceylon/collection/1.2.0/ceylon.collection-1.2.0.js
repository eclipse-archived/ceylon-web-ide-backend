(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.2.0/ceylon.collection-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.collection/1.2.0');
function ArrayList$$c($$targs$$,arrayList$){
m$1.set_type_args(arrayList$,$$targs$$);
m$1.SearchableList({Element$SearchableList:$$targs$$.Element$ArrayList},arrayList$);
MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
}
function ArrayList(){return ArrayList_$c$.apply(undefined,arguments);}
function ArrayList_$c$$$a($6,$7,$8,$$targs$$,arrayList$){
if($6===undefined){$6=(0);}
if($7===undefined){$7=m$1.Float(1.5);}
if($8===undefined){$8=m$1.empty();}
arrayList$.$1dkeuw$9_=$6;
m$1.atr$(arrayList$,'$1dkeuw$9',function(){return this.$1dkeuw$9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$a_=$7;
m$1.atr$(arrayList$,'$1dkeuw$a',function(){return this.$1dkeuw$a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$b_=m$1.$_Array($8,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$b',function(){return this.$1dkeuw$b_;},function($c){return this.$1dkeuw$b_=$c;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList_$c$($6,$7,$8,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($6===undefined){$6=(0);}
if($7===undefined){$7=m$1.Float(1.5);}
if($8===undefined){$8=m$1.empty();}
ArrayList$$c($$targs$$,arrayList$);
ArrayList_$c$$$a($6,$7,$8,$$targs$$,arrayList$);
arrayList$.$1dkeuw$d_=arrayList$.$1dkeuw$b.size;
m$1.asrt$(((arrayList$.$1dkeuw$9>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$9<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$a.compare(m$1.Float(1.0))!==m$1.smaller())),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$d;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$d<arrayList$.$1dkeuw$9)){
var $e=arrayList$.$1dkeuw$f(arrayList$.$1dkeuw$9);
arrayList$.$1dkeuw$b.copyTo($e,0,0,arrayList$.$1dkeuw$d);
arrayList$.$1dkeuw$b=$e;
}
arrayList$.getFromFirst=function($g){return (($h=$g,$h.compare((0))!==m$1.smaller()&&$h.compare(arrayList$.$1dkeuw$d)===m$1.smaller()))?arrayList$.$1dkeuw$b.getFromFirst($g):null;};
arrayList$.iterator=function(){return function(){function $i($$targs$$){
var $i$=new $i.$$;$i$.outer$=arrayList$;
$i$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$i$);
$i$.$1dkeuw$j_=(0);
$i$.$prop$get$1dkeuw$j={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};}};
$i$.$prop$get$1dkeuw$j.get=function(){return $1dkeuw$j};
return $i$;
};$i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$i(){
if($i.$$===undefined){
m$1.initTypeProto($i,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($i$){
m$1.atr$($i$,'$1dkeuw$j',function(){return this.$1dkeuw$j_;},function($k){return this.$1dkeuw$j_=$k;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$i$.next=function(){
var $i$=this;
if(($i$.$1dkeuw$j<arrayList$.$1dkeuw$d)){
var $l;
if(m$1.nn$(($l=arrayList$.$1dkeuw$b.getFromFirst(($m=$i$.$1dkeuw$j,$i$.$1dkeuw$j=$m.successor,$m))))){
return $l;
}
else{
var $n;
m$1.asrt$((m$1.is$(($n=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (202:27-202:43)",'202:20-202:44','ArrayList.ceylon');
return $n;
}
var $m;
}
else{
return m$1.finished();
}
};$i$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($i.$$.prototype);
}
return $i;
}
arrayList$.$init$$i=$init$$i;
$init$$i();
return $i();}();};
arrayList$.measure=function($p,$q){return arrayList$.span(($r=measureToSpan($p,$q),$r.$_get(0)),$r.$_get(1));};
arrayList$.deleteMeasure=function($s,$t){return arrayList$.deleteSpan(($u=measureToSpan($s,$t),$u.$_get(0)),$u.$_get(1));};
arrayList$.spanFrom=function($v){return ($w=(($v>=arrayList$.$1dkeuw$d)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($w)?$w:arrayList$.span($v,arrayList$.$1dkeuw$d.minus(1)));};
var $w;
arrayList$.spanTo=function($x){return ($y=(($x<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($y)?$y:arrayList$.span(0,$x));};
var $y;
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$d>0))?arrayList$.$1dkeuw$b.$_get(0):null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$d>=1)?arrayList$.$1dkeuw$d.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($z){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$z);};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($10){return arrayList$.add($10);};
arrayList$.$_pop=function(){return arrayList$.deleteLast();};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($11){return arrayList$.add($11);};
arrayList$.accept=function(){return arrayList$.deleteFirst();};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($12,$13){return (($12<arrayList$.$1dkeuw$d))?arrayList$.$1dkeuw$b.occursAt($12,$13):false;};
arrayList$.firstOccurrence=function($14,$15,$16){if($15===undefined){$15=arrayList$.firstOccurrence$defs$from($14,$15,$16);}
if($16===undefined){$16=arrayList$.firstOccurrence$defs$length($14,$15,$16);}
return function(){var $17;
if(m$1.nn$(($17=($18=$14,$19=$15,$1a=smallest($15.plus($16),arrayList$.size).minus($15),($1b=arrayList$.$1dkeuw$b,m$1.JsCallable($1b,m$1.nn$($1b)?$1b.firstOccurrence:null))($18,$19,$1a)))))return $17;else return null}();};
var $18,$19,$1a,$1b;
arrayList$.lastOccurrence=function($1c,$1d,$1e){if($1d===undefined){$1d=arrayList$.lastOccurrence$defs$from($1c,$1d,$1e);}
if($1e===undefined){$1e=arrayList$.lastOccurrence$defs$length($1c,$1d,$1e);}
return function(){var $1f;
if(m$1.nn$(($1f=($1g=$1c,$1h=largest($1d,arrayList$.$1dkeuw$b.size.minus(arrayList$.size)),$1i=$1e,($1j=arrayList$.$1dkeuw$b,m$1.JsCallable($1j,m$1.nn$($1j)?$1j.lastOccurrence:null))($1g,$1h,$1i)))))return $1f;else return null}();};
var $1g,$1h,$1i,$1j;
arrayList$.occurs=function($1k,$1l,$1m){if($1l===undefined){$1l=arrayList$.occurs$defs$from($1k,$1l,$1m);}
if($1m===undefined){$1m=arrayList$.occurs$defs$length($1k,$1l,$1m);}
return ($1n=$1k,$1o=$1l,$1p=smallest($1l.plus($1m),arrayList$.size).minus($1l),($1q=arrayList$.$1dkeuw$b,m$1.JsCallable($1q,m$1.nn$($1q)?$1q.occurs:null))($1n,$1o,$1p));};
var $1n,$1o,$1p,$1q;
arrayList$.occurrences=function($1r,$1s,$1t){if($1s===undefined){$1s=arrayList$.occurrences$defs$from($1r,$1s,$1t);}
if($1t===undefined){$1t=arrayList$.occurrences$defs$length($1r,$1s,$1t);}
return ($1u=$1r,$1v=$1s,$1w=smallest($1s.plus($1t),arrayList$.size).minus($1s),($1x=arrayList$.$1dkeuw$b,m$1.JsCallable($1x,m$1.nn$($1x)?$1x.occurrences:null))($1u,$1v,$1w));};
var $1u,$1v,$1w,$1x;
return arrayList$;
};
ArrayList_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def')];},d:['ceylon.collection','ArrayList','$cn','$def']};};
ArrayList.ArrayList_$c$=ArrayList_$c$;
ex$.ArrayList_$c$=ArrayList_$c$;
function ArrayList_copy$$a($1y,$1z,$$targs$$,arrayList$){
if($1z===undefined){$1z=m$1.Float(1.5);}
arrayList$.$1dkeuw$9_=$1y.size;
m$1.atr$(arrayList$,'$1dkeuw$9',function(){return this.$1dkeuw$9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$a_=$1z;
m$1.atr$(arrayList$,'$1dkeuw$a',function(){return this.$1dkeuw$a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$b_=$1y.$1dkeuw$b.clone();
m$1.atr$(arrayList$,'$1dkeuw$b',function(){return this.$1dkeuw$b_;},function($20){return this.$1dkeuw$b_=$20;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList_copy($1y,$1z,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1z===undefined){$1z=m$1.Float(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList_copy$$a($1y,$1z,$$targs$$,arrayList$);
arrayList$.$1dkeuw$d_=arrayList$.$1dkeuw$b.size;
m$1.asrt$(((arrayList$.$1dkeuw$9>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$9<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$a.compare(m$1.Float(1.0))!==m$1.smaller())),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$d;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$d<arrayList$.$1dkeuw$9)){
var $e=arrayList$.$1dkeuw$f(arrayList$.$1dkeuw$9);
arrayList$.$1dkeuw$b.copyTo($e,0,0,arrayList$.$1dkeuw$d);
arrayList$.$1dkeuw$b=$e;
}
arrayList$.getFromFirst=function($g){return (($21=$g,$21.compare((0))!==m$1.smaller()&&$21.compare(arrayList$.$1dkeuw$d)===m$1.smaller()))?arrayList$.$1dkeuw$b.getFromFirst($g):null;};
arrayList$.iterator=function(){return function(){function $i($$targs$$){
var $i$=new $i.$$;$i$.outer$=arrayList$;
$i$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$i$);
$i$.$1dkeuw$j_=(0);
$i$.$prop$get$1dkeuw$j.get=function(){return $1dkeuw$j};
return $i$;
};$i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$i(){
if($i.$$===undefined){
m$1.initTypeProto($i,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($i$){
m$1.atr$($i$,'$1dkeuw$j',function(){return this.$1dkeuw$j_;},function($22){return this.$1dkeuw$j_=$22;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$i$.next=function(){
var $i$=this;
if(($i$.$1dkeuw$j<arrayList$.$1dkeuw$d)){
var $l;
if(m$1.nn$(($l=arrayList$.$1dkeuw$b.getFromFirst(($23=$i$.$1dkeuw$j,$i$.$1dkeuw$j=$23.successor,$23))))){
return $l;
}
else{
var $n;
m$1.asrt$((m$1.is$(($n=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (202:27-202:43)",'202:20-202:44','ArrayList.ceylon');
return $n;
}
var $23;
}
else{
return m$1.finished();
}
};$i$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($i.$$.prototype);
}
return $i;
}
arrayList$.$init$$i=$init$$i;
$init$$i();
return $i();}();};
arrayList$.measure=function($p,$q){return arrayList$.span(($25=measureToSpan($p,$q),$25.$_get(0)),$25.$_get(1));};
arrayList$.deleteMeasure=function($s,$t){return arrayList$.deleteSpan(($26=measureToSpan($s,$t),$26.$_get(0)),$26.$_get(1));};
arrayList$.spanFrom=function($v){return ($27=(($v>=arrayList$.$1dkeuw$d)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($27)?$27:arrayList$.span($v,arrayList$.$1dkeuw$d.minus(1)));};
var $27;
arrayList$.spanTo=function($x){return ($28=(($x<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($28)?$28:arrayList$.span(0,$x));};
var $28;
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$d>0))?arrayList$.$1dkeuw$b.$_get(0):null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$d>=1)?arrayList$.$1dkeuw$d.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($z){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$z);};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($10){return arrayList$.add($10);};
arrayList$.$_pop=function(){return arrayList$.deleteLast();};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($11){return arrayList$.add($11);};
arrayList$.accept=function(){return arrayList$.deleteFirst();};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($12,$13){return (($12<arrayList$.$1dkeuw$d))?arrayList$.$1dkeuw$b.occursAt($12,$13):false;};
arrayList$.firstOccurrence=function($14,$15,$16){if($15===undefined){$15=arrayList$.firstOccurrence$defs$from($14,$15,$16);}
if($16===undefined){$16=arrayList$.firstOccurrence$defs$length($14,$15,$16);}
return function(){var $17;
if(m$1.nn$(($17=($29=$14,$2a=$15,$2b=smallest($15.plus($16),arrayList$.size).minus($15),($2c=arrayList$.$1dkeuw$b,m$1.JsCallable($2c,m$1.nn$($2c)?$2c.firstOccurrence:null))($29,$2a,$2b)))))return $17;else return null}();};
var $29,$2a,$2b,$2c;
arrayList$.lastOccurrence=function($1c,$1d,$1e){if($1d===undefined){$1d=arrayList$.lastOccurrence$defs$from($1c,$1d,$1e);}
if($1e===undefined){$1e=arrayList$.lastOccurrence$defs$length($1c,$1d,$1e);}
return function(){var $1f;
if(m$1.nn$(($1f=($2d=$1c,$2e=largest($1d,arrayList$.$1dkeuw$b.size.minus(arrayList$.size)),$2f=$1e,($2g=arrayList$.$1dkeuw$b,m$1.JsCallable($2g,m$1.nn$($2g)?$2g.lastOccurrence:null))($2d,$2e,$2f)))))return $1f;else return null}();};
var $2d,$2e,$2f,$2g;
arrayList$.occurs=function($1k,$1l,$1m){if($1l===undefined){$1l=arrayList$.occurs$defs$from($1k,$1l,$1m);}
if($1m===undefined){$1m=arrayList$.occurs$defs$length($1k,$1l,$1m);}
return ($2h=$1k,$2i=$1l,$2j=smallest($1l.plus($1m),arrayList$.size).minus($1l),($2k=arrayList$.$1dkeuw$b,m$1.JsCallable($2k,m$1.nn$($2k)?$2k.occurs:null))($2h,$2i,$2j));};
var $2h,$2i,$2j,$2k;
arrayList$.occurrences=function($1r,$1s,$1t){if($1s===undefined){$1s=arrayList$.occurrences$defs$from($1r,$1s,$1t);}
if($1t===undefined){$1t=arrayList$.occurrences$defs$length($1r,$1s,$1t);}
return ($2l=$1r,$2m=$1s,$2n=smallest($1s.plus($1t),arrayList$.size).minus($1s),($2o=arrayList$.$1dkeuw$b,m$1.JsCallable($2o,m$1.nn$($2o)?$2o.occurrences:null))($2l,$2m,$2n));};
var $2l,$2m,$2n,$2o;
return arrayList$;
};
ArrayList_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'arrayList',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},an:function(){return[m$1.doc("The `ArrayList` to copy.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy:$at:growthFactor$o4kg6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy')];},d:['ceylon.collection','ArrayList','$cn','copy']};};
ArrayList.ArrayList_copy=ArrayList_copy;
ex$.ArrayList_copy=ArrayList_copy;
function ArrayList_ofSize$$a($2p,$2q,$2r,$$targs$$,arrayList$){
if($2r===undefined){$2r=m$1.Float(1.5);}
arrayList$.$1dkeuw$9_=($2s=(($2p<0)?0:null),m$1.nn$($2s)?$2s:$2p);
m$1.atr$(arrayList$,'$1dkeuw$9',function(){return this.$1dkeuw$9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
var $2s;
arrayList$.$1dkeuw$a_=$2r;
m$1.atr$(arrayList$,'$1dkeuw$a',function(){return this.$1dkeuw$a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$b_=m$1.$_Array_ofSize($2p,$2q,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$b',function(){return this.$1dkeuw$b_;},function($2t){return this.$1dkeuw$b_=$2t;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList_ofSize($2p,$2q,$2r,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($2r===undefined){$2r=m$1.Float(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList_ofSize$$a($2p,$2q,$2r,$$targs$$,arrayList$);
arrayList$.$1dkeuw$d_=arrayList$.$1dkeuw$b.size;
m$1.asrt$(((arrayList$.$1dkeuw$9>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$9<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$a.compare(m$1.Float(1.0))!==m$1.smaller())),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$d;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$d<arrayList$.$1dkeuw$9)){
var $e=arrayList$.$1dkeuw$f(arrayList$.$1dkeuw$9);
arrayList$.$1dkeuw$b.copyTo($e,0,0,arrayList$.$1dkeuw$d);
arrayList$.$1dkeuw$b=$e;
}
arrayList$.getFromFirst=function($g){return (($2u=$g,$2u.compare((0))!==m$1.smaller()&&$2u.compare(arrayList$.$1dkeuw$d)===m$1.smaller()))?arrayList$.$1dkeuw$b.getFromFirst($g):null;};
arrayList$.iterator=function(){return function(){function $i($$targs$$){
var $i$=new $i.$$;$i$.outer$=arrayList$;
$i$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$i$);
$i$.$1dkeuw$j_=(0);
$i$.$prop$get$1dkeuw$j.get=function(){return $1dkeuw$j};
return $i$;
};$i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$i(){
if($i.$$===undefined){
m$1.initTypeProto($i,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($i$){
m$1.atr$($i$,'$1dkeuw$j',function(){return this.$1dkeuw$j_;},function($2v){return this.$1dkeuw$j_=$2v;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$i$.next=function(){
var $i$=this;
if(($i$.$1dkeuw$j<arrayList$.$1dkeuw$d)){
var $l;
if(m$1.nn$(($l=arrayList$.$1dkeuw$b.getFromFirst(($2w=$i$.$1dkeuw$j,$i$.$1dkeuw$j=$2w.successor,$2w))))){
return $l;
}
else{
var $n;
m$1.asrt$((m$1.is$(($n=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (202:27-202:43)",'202:20-202:44','ArrayList.ceylon');
return $n;
}
var $2w;
}
else{
return m$1.finished();
}
};$i$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($i.$$.prototype);
}
return $i;
}
arrayList$.$init$$i=$init$$i;
$init$$i();
return $i();}();};
arrayList$.measure=function($p,$q){return arrayList$.span(($2y=measureToSpan($p,$q),$2y.$_get(0)),$2y.$_get(1));};
arrayList$.deleteMeasure=function($s,$t){return arrayList$.deleteSpan(($2z=measureToSpan($s,$t),$2z.$_get(0)),$2z.$_get(1));};
arrayList$.spanFrom=function($v){return ($30=(($v>=arrayList$.$1dkeuw$d)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($30)?$30:arrayList$.span($v,arrayList$.$1dkeuw$d.minus(1)));};
var $30;
arrayList$.spanTo=function($x){return ($31=(($x<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($31)?$31:arrayList$.span(0,$x));};
var $31;
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$d>0))?arrayList$.$1dkeuw$b.$_get(0):null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$d>=1)?arrayList$.$1dkeuw$d.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($z){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$z);};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($10){return arrayList$.add($10);};
arrayList$.$_pop=function(){return arrayList$.deleteLast();};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($11){return arrayList$.add($11);};
arrayList$.accept=function(){return arrayList$.deleteFirst();};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($12,$13){return (($12<arrayList$.$1dkeuw$d))?arrayList$.$1dkeuw$b.occursAt($12,$13):false;};
arrayList$.firstOccurrence=function($14,$15,$16){if($15===undefined){$15=arrayList$.firstOccurrence$defs$from($14,$15,$16);}
if($16===undefined){$16=arrayList$.firstOccurrence$defs$length($14,$15,$16);}
return function(){var $17;
if(m$1.nn$(($17=($32=$14,$33=$15,$34=smallest($15.plus($16),arrayList$.size).minus($15),($35=arrayList$.$1dkeuw$b,m$1.JsCallable($35,m$1.nn$($35)?$35.firstOccurrence:null))($32,$33,$34)))))return $17;else return null}();};
var $32,$33,$34,$35;
arrayList$.lastOccurrence=function($1c,$1d,$1e){if($1d===undefined){$1d=arrayList$.lastOccurrence$defs$from($1c,$1d,$1e);}
if($1e===undefined){$1e=arrayList$.lastOccurrence$defs$length($1c,$1d,$1e);}
return function(){var $1f;
if(m$1.nn$(($1f=($36=$1c,$37=largest($1d,arrayList$.$1dkeuw$b.size.minus(arrayList$.size)),$38=$1e,($39=arrayList$.$1dkeuw$b,m$1.JsCallable($39,m$1.nn$($39)?$39.lastOccurrence:null))($36,$37,$38)))))return $1f;else return null}();};
var $36,$37,$38,$39;
arrayList$.occurs=function($1k,$1l,$1m){if($1l===undefined){$1l=arrayList$.occurs$defs$from($1k,$1l,$1m);}
if($1m===undefined){$1m=arrayList$.occurs$defs$length($1k,$1l,$1m);}
return ($3a=$1k,$3b=$1l,$3c=smallest($1l.plus($1m),arrayList$.size).minus($1l),($3d=arrayList$.$1dkeuw$b,m$1.JsCallable($3d,m$1.nn$($3d)?$3d.occurs:null))($3a,$3b,$3c));};
var $3a,$3b,$3c,$3d;
arrayList$.occurrences=function($1r,$1s,$1t){if($1s===undefined){$1s=arrayList$.occurrences$defs$from($1r,$1s,$1t);}
if($1t===undefined){$1t=arrayList$.occurrences$defs$length($1r,$1s,$1t);}
return ($3e=$1r,$3f=$1s,$3g=smallest($1s.plus($1t),arrayList$.size).minus($1s),($3h=arrayList$.$1dkeuw$b,m$1.JsCallable($3h,m$1.nn$($3h)?$3h.occurrences:null))($3e,$3f,$3g));};
var $3e,$3f,$3g,$3h;
return arrayList$;
};
ArrayList_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:size$g4dtg8')];}},{nm:'element',mt:'prm',$t:'Element$ArrayList',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:element$qjcx79')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:growthFactor$6i6pjp')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize')];},d:['ceylon.collection','ArrayList','$cn','ofSize']};};
ArrayList.ArrayList_ofSize=ArrayList_ofSize;
ex$.ArrayList_ofSize=ArrayList_ofSize;
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:m$1.SearchableList,a:{Element$SearchableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
if(ArrayList.$$===undefined){
m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,m$1.SearchableList,$init$MutableList(),$init$Stack(),$init$Queue());
(function(arrayList$){
m$1.atr$(arrayList$,'$1dkeuw$9',function(){return this.$1dkeuw$9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
m$1.atr$(arrayList$,'$1dkeuw$a',function(){return this.$1dkeuw$a_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
m$1.atr$(arrayList$,'$1dkeuw$b',function(){return this.$1dkeuw$b_;},function($3i){return this.$1dkeuw$b_=$3i;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
m$1.atr$(arrayList$,'$1dkeuw$d',function(){return this.$1dkeuw$d_;},function($3j){return this.$1dkeuw$d_=$3j;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
arrayList$.$1dkeuw$f=function($3k){var arrayList$=this;
return m$1.$_Array_ofSize($3k,null,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});};
arrayList$.$1dkeuw$f.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
m$1.atr$(arrayList$,'size',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$d;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
arrayList$.$1dkeuw$3l=function($3m){
var arrayList$=this;
var $3n=arrayList$.$1dkeuw$d.plus($3m);
var $3o=m$1.runtime().maxArraySize;
if(($3n>$3o)){
throw m$1.wrapexc(m$1.OverflowException(),'107:12-107:37','ceylon/collection/ArrayList.ceylon');
}
if(($3n>arrayList$.$1dkeuw$b.size)){
var $3p=$3n.times(arrayList$.$1dkeuw$a).integer;
var $3q=($3r=((($3p<$3n)||($3p>$3o))?$3n:null),m$1.nn$($3r)?$3r:$3p);
var $3r;
var $3s=arrayList$.$1dkeuw$f($3q);
arrayList$.$1dkeuw$b.copyTo($3s);
arrayList$.$1dkeuw$b=$3s;
}
};arrayList$.$1dkeuw$3l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
arrayList$.add=function($3t){
var arrayList$=this;
arrayList$.$1dkeuw$3l(1);
arrayList$.$1dkeuw$b.set(($3u=arrayList$.$1dkeuw$d,arrayList$.$1dkeuw$d=$3u.successor,$3u),$3t);
var $3u;
};arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
arrayList$.addAll=function($3v){
var arrayList$=this;
var $3w=$3v.sequence();
arrayList$.$1dkeuw$3l($3w.size);
var $3y;for(var $3x=$3w.iterator();($3y=$3x.next())!==m$1.finished();){
arrayList$.$1dkeuw$b.set(($3z=arrayList$.$1dkeuw$d,arrayList$.$1dkeuw$d=$3z.successor,$3z),$3y);
var $3z;
}
};arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
arrayList$.swap=function($40,$41){
var arrayList$=this;
m$1.asrt$((($42=$40,$42.compare((0))!==m$1.smaller()&&$42.compare(arrayList$.$1dkeuw$d)===m$1.smaller())&&($43=$41,$43.compare((0))!==m$1.smaller()&&$43.compare(arrayList$.$1dkeuw$d)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (142:15-142:40)",'140:8-142:41','ArrayList.ceylon');
arrayList$.$1dkeuw$b.swap($40,$40);
};arrayList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','swap']};};
arrayList$.move=function($44,$45){
var arrayList$=this;
m$1.asrt$((($46=$44,$46.compare((0))!==m$1.smaller()&&$46.compare(arrayList$.$1dkeuw$d)===m$1.smaller())&&($47=$45,$47.compare((0))!==m$1.smaller()&&$47.compare(arrayList$.$1dkeuw$d)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (150:15-150:40)",'148:8-150:41','ArrayList.ceylon');
arrayList$.$1dkeuw$b.move($44,$44);
};arrayList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','move']};};
arrayList$.clear=function(){
var arrayList$=this;
arrayList$.$1dkeuw$d=(0);
arrayList$.$1dkeuw$b=arrayList$.$1dkeuw$f(arrayList$.$1dkeuw$9);
};arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
m$1.atr$(arrayList$,'capacity',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$b.size;
},function($48){
var arrayList$=this;
m$1.asrt$((($48>=arrayList$.size)),"capacity must be at least as large as list size: \'capacity >= size\' at ArrayList.ceylon (165:15-165:32)",'164:8-165:33','ArrayList.ceylon');
m$1.asrt$((($48<=m$1.runtime().maxArraySize)),"capacity too large: \'capacity <= runtime.maxArraySize\' at ArrayList.ceylon (167:15-167:48)",'166:8-167:49','ArrayList.ceylon');
var $49=arrayList$.$1dkeuw$f($48);
arrayList$.$1dkeuw$b.copyTo($49,0,0,arrayList$.$1dkeuw$d);
arrayList$.$1dkeuw$b=$49;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
arrayList$.getFromFirst=function($g){var arrayList$=this;
return (($4a=$g,$4a.compare((0))!==m$1.smaller()&&$4a.compare(arrayList$.$1dkeuw$d)===m$1.smaller()))?arrayList$.$1dkeuw$b.getFromFirst($g):null;};arrayList$.contains=function($4b){
var arrayList$=this;
var $4d;for(var $4c=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($4d=$4c.next())!==m$1.finished();){
var $4e;
if(m$1.nn$(($4e=arrayList$.$1dkeuw$b.getFromFirst($4d)))){
if($4e.equals($4b)){
return true;
}
}
}
if(m$1.finished()===$4d){
return false;
}
};arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
arrayList$.iterator=function(){var arrayList$=this;
return function(){function $i($$targs$$){
var $i$=new $i.$$;$i$.outer$=arrayList$;
$i$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$i$);
$i$.$1dkeuw$j_=(0);
$i$.$prop$get$1dkeuw$j.get=function(){return $1dkeuw$j};
return $i$;
};$i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$i(){
if($i.$$===undefined){
m$1.initTypeProto($i,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($i$){
m$1.atr$($i$,'$1dkeuw$j',function(){return this.$1dkeuw$j_;},function($4f){return this.$1dkeuw$j_=$4f;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$i$.next=function(){
var $i$=this;
if(($i$.$1dkeuw$j<arrayList$.$1dkeuw$d)){
var $l;
if(m$1.nn$(($l=arrayList$.$1dkeuw$b.getFromFirst(($4g=$i$.$1dkeuw$j,$i$.$1dkeuw$j=$4g.successor,$4g))))){
return $l;
}
else{
var $n;
m$1.asrt$((m$1.is$(($n=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (202:27-202:43)",'202:20-202:44','ArrayList.ceylon');
return $n;
}
var $4g;
}
else{
return m$1.finished();
}
};$i$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($i.$$.prototype);
}
return $i;
}
arrayList$.$init$$i=$init$$i;
$init$$i();
return $i();}();};arrayList$.insert=function($4i,$4j){
var arrayList$=this;
m$1.asrt$((($4k=$4i,$4k.compare((0))!==m$1.smaller()&&$4k.compare(arrayList$.$1dkeuw$d)!==m$1.larger())),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (216:15-216:36)",'214:8-216:37','ArrayList.ceylon');
arrayList$.$1dkeuw$3l(1);
if(($4i<arrayList$.$1dkeuw$d)){
arrayList$.$1dkeuw$b.copyTo(arrayList$.$1dkeuw$b,$4i,$4i.plus(1),arrayList$.$1dkeuw$d.minus($4i));
}
($4l=arrayList$.$1dkeuw$d,arrayList$.$1dkeuw$d=$4l.successor,$4l);
var $4l;
arrayList$.$1dkeuw$b.set($4i,$4j);
};arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
arrayList$.insertAll=function($4m,$4n){
var arrayList$=this;
m$1.asrt$((($4o=$4m,$4o.compare((0))!==m$1.smaller()&&$4o.compare(arrayList$.$1dkeuw$d)!==m$1.larger())),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (230:15-230:36)",'228:8-230:37','ArrayList.ceylon');
var $4p=$4n.sequence();
var $4q=$4p.size;
if(($4q>0)){
arrayList$.$1dkeuw$3l($4q);
if(($4m<arrayList$.$1dkeuw$d)){
arrayList$.$1dkeuw$b.copyTo(arrayList$.$1dkeuw$b,$4m,$4m.plus($4q),arrayList$.$1dkeuw$d.minus($4m));
}
var $4r=$4m;
var $4t;for(var $4s=$4p.iterator();($4t=$4s.next())!==m$1.finished();){
arrayList$.$1dkeuw$b.set(($4u=$4r,$4r=$4u.successor,$4u),$4t);
var $4u;
}
(arrayList$.$1dkeuw$d=arrayList$.$1dkeuw$d.plus($4q));
}
};arrayList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insertAll']};};
arrayList$.$_delete=function($4v){
var arrayList$=this;
if(($4w=$4v,$4w.compare((0))!==m$1.smaller()&&$4w.compare(arrayList$.$1dkeuw$d)===m$1.smaller())){
var $4x=arrayList$.$1dkeuw$b.$_get($4v);
arrayList$.$1dkeuw$b.copyTo(arrayList$.$1dkeuw$b,$4v.plus(1),$4v,arrayList$.$1dkeuw$d.minus($4v).minus(1));
($4y=arrayList$.$1dkeuw$d,arrayList$.$1dkeuw$d=$4y.predecessor,$4y);
var $4y;
arrayList$.$1dkeuw$b.set(arrayList$.$1dkeuw$d,null);
return $4x;
}
else{
return null;
}
};arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
arrayList$.remove=function($4z){
var arrayList$=this;
var $50=(0);
var $51=(0);
while(($50<arrayList$.$1dkeuw$d)){
var $52;
if(m$1.nn$(($52=arrayList$.$1dkeuw$b.$_get(($53=$50,$50=$53.successor,$53))))){
if((!$52.equals($4z))){
arrayList$.$1dkeuw$b.set(($54=$51,$51=$54.successor,$54),$52);
var $54;
}
}
else{
arrayList$.$1dkeuw$b.set(($55=$51,$51=$55.successor,$55),null);
var $55;
}
var $53;
}
arrayList$.$1dkeuw$d=$51;
while(($51<$50)){
arrayList$.$1dkeuw$b.set(($56=$51,$51=$56.successor,$56),null);
var $56;
}
return $50.minus(arrayList$.$1dkeuw$d);
};arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
arrayList$.removeAll=function($57){
var arrayList$=this;
var $58=($59=$57,HashSet(undefined,undefined,$59,{Element$HashSet:m$1.mit$([arrayList$.$$targs$$.Element$ArrayList,{t:m$1.$_Object}])}));
var $59;
var $5a=(0);
var $5b=(0);
while(($5a<arrayList$.$1dkeuw$d)){
var $5c;
if(m$1.nn$(($5c=arrayList$.$1dkeuw$b.$_get(($5d=$5a,$5a=$5d.successor,$5d))))){
if(!$58.contains($5c)){
arrayList$.$1dkeuw$b.set(($5e=$5b,$5b=$5e.successor,$5e),$5c);
var $5e;
}
}
else{
arrayList$.$1dkeuw$b.set(($5f=$5b,$5b=$5f.successor,$5f),null);
var $5f;
}
var $5d;
}
arrayList$.$1dkeuw$d=$5b;
while(($5b<$5a)){
arrayList$.$1dkeuw$b.set(($5g=$5b,$5b=$5g.successor,$5g),null);
var $5g;
}
return $5a.minus(arrayList$.$1dkeuw$d);
};arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
arrayList$.removeFirst=function($5h){
var arrayList$=this;
var $5i;
if(m$1.nn$(($5i=arrayList$.firstOccurrence($5h)))){
arrayList$.$_delete($5i);
return true;
}
else{
return false;
}
};arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
arrayList$.removeLast=function($5j){
var arrayList$=this;
var $5k;
if(m$1.nn$(($5k=arrayList$.lastOccurrence($5j)))){
arrayList$.$_delete($5k);
return true;
}
else{
return false;
}
};arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
arrayList$.prune=function(){
var arrayList$=this;
var $5l=(0);
var $5m=(0);
while(($5l<arrayList$.$1dkeuw$d)){
var $5n;
if(m$1.nn$(($5n=arrayList$.$1dkeuw$b.$_get(($5o=$5l,$5l=$5o.successor,$5o))))){
arrayList$.$1dkeuw$b.set(($5p=$5m,$5m=$5p.successor,$5p),$5n);
var $5p;
}
var $5o;
}
arrayList$.$1dkeuw$d=$5m;
while(($5m<$5l)){
arrayList$.$1dkeuw$b.set(($5q=$5m,$5m=$5q.successor,$5q),null);
var $5q;
}
};arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
arrayList$.$_replace=function($5r,$5s){
var arrayList$=this;
var $5t=(0);
while(($5t<arrayList$.$1dkeuw$d)){
var $5u;
if(m$1.nn$(($5u=arrayList$.$1dkeuw$b.$_get($5t)))&&$5u.equals($5r)){
arrayList$.$1dkeuw$b.set($5t,$5s);
}
($5v=$5t,$5t=$5v.successor,$5v);
var $5v;
}
};arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
arrayList$.replaceFirst=function($5w,$5x){
var arrayList$=this;
var $5y;
if(m$1.nn$(($5y=arrayList$.firstOccurrence($5w)))){
arrayList$.set($5y,$5x);
return true;
}
else{
return false;
}
};arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
arrayList$.replaceLast=function($5z,$60){
var arrayList$=this;
var $61;
if(m$1.nn$(($61=arrayList$.lastOccurrence($5z)))){
arrayList$.set($61,$60);
return true;
}
else{
return false;
}
};arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
arrayList$.infill=function($62){
var arrayList$=this;
var $63=(0);
while(($63<arrayList$.$1dkeuw$d)){
if(!m$1.nn$(arrayList$.$1dkeuw$b.$_get($63))){
arrayList$.$1dkeuw$b.set($63,$62);
}
($64=$63,$63=$64.successor,$64);
var $64;
}
};arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
arrayList$.set=function($65,$66){
var arrayList$=this;
m$1.asrt$((($67=$65,$67.compare((0))!==m$1.smaller()&&$67.compare(arrayList$.$1dkeuw$d)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at ArrayList.ceylon (398:15-398:31)",'396:8-398:32','ArrayList.ceylon');
arrayList$.$1dkeuw$b.set($65,$66);
};arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
arrayList$.span=function($68,$69){
var arrayList$=this;
var $6a=spanToMeasure($68,$69,arrayList$.$1dkeuw$d),$6b=$6a.$_get(0),$6c=$6a.$_get(1),$6d=$6a.$_get(2);
var $6e=($6f=$6c,$6g=arrayList$.$1dkeuw$a,$6h=arrayList$.skip($6b).take($6c),ArrayList($6f,$6g,$6h,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
var $6f,$6g,$6h;
return ($6i=($6d?$6e.reversed:null),m$1.nn$($6i)?$6i:$6e);
var $6i;
};arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
arrayList$.deleteSpan=function($6j,$6k){
var arrayList$=this;
var $6l=spanToMeasure($6j,$6k,arrayList$.$1dkeuw$d),$6m=$6l.$_get(0),$6n=$6l.$_get(1),$6o=$6l.$_get(2);
if((($6m<arrayList$.$1dkeuw$d)&&($6n>0))){
var $6p=$6m.plus($6n);
arrayList$.$1dkeuw$b.copyTo(arrayList$.$1dkeuw$b,$6p,$6m,arrayList$.$1dkeuw$d.minus($6p));
var $6q=arrayList$.$1dkeuw$d.minus($6n);
while(($6q<arrayList$.$1dkeuw$d)){
arrayList$.$1dkeuw$b.set(($6r=$6q,$6q=$6r.successor,$6r),null);
var $6r;
}
(arrayList$.$1dkeuw$d=arrayList$.$1dkeuw$d.minus($6n));
}
};arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
arrayList$.measure=function($p,$q){var arrayList$=this;
return arrayList$.span(($6s=measureToSpan($p,$q),$6s.$_get(0)),$6s.$_get(1));};arrayList$.deleteMeasure=function($s,$t){var arrayList$=this;
return arrayList$.deleteSpan(($6t=measureToSpan($s,$t),$6t.$_get(0)),$6t.$_get(1));};arrayList$.truncate=function($6u){
var arrayList$=this;
m$1.asrt$((($6u>=0)),"Assertion failed: \'size >= 0\' at ArrayList.ceylon (438:15-438:25)",'438:8-438:26','ArrayList.ceylon');
if(($6u<arrayList$.$1dkeuw$d)){
var $6v=$6u;
while(($6v<arrayList$.$1dkeuw$d)){
arrayList$.$1dkeuw$b.set(($6w=$6v,$6v=$6w.successor,$6w),null);
var $6w;
}
arrayList$.$1dkeuw$d=$6u;
}
};arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
arrayList$.spanFrom=function($v){var arrayList$=this;
return ($6x=(($v>=arrayList$.$1dkeuw$d)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($6x)?$6x:arrayList$.span($v,arrayList$.$1dkeuw$d.minus(1)));};arrayList$.spanTo=function($x){var arrayList$=this;
return ($6y=(($x<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($6y)?$6y:arrayList$.span(0,$x));};m$1.atr$(arrayList$,'first',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$d>0))?arrayList$.$1dkeuw$b.$_get(0):null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$d>=1)?arrayList$.$1dkeuw$d.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($z){var arrayList$=this;
return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$z);};m$1.atr$(arrayList$,'hash',function(){
var arrayList$=this;
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($10){var arrayList$=this;
return arrayList$.add($10);};arrayList$.$_pop=function(){var arrayList$=this;
return arrayList$.deleteLast();};m$1.atr$(arrayList$,'top',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($11){var arrayList$=this;
return arrayList$.add($11);};arrayList$.accept=function(){var arrayList$=this;
return arrayList$.deleteFirst();};m$1.atr$(arrayList$,'back',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
var arrayList$=this;
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.clone=function(){var arrayList$=this;
return ArrayList_copy(arrayList$,undefined,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});};
arrayList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clone']};};
arrayList$.sortInPlace=function($6z){
var arrayList$=this;
arrayList$.$1dkeuw$b.sortInPlace(m$1.$JsCallable((function($70,$71){
var $72,$73;
if(m$1.nn$(($72=$70))&&m$1.nn$(($73=$71))){
return $6z($72,$73);
}
else{
if((m$1.nn$($70)&&!m$1.nn$($71))){
return m$1.smaller();
}
else{
if((m$1.nn$($71)&&!m$1.nn$($70))){
return m$1.larger();
}
else{
return m$1.equal();
}
}
}
}),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Comparison}}));
};arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'y',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace:$m:comparing$6r94m6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
arrayList$.each=function($74){
var arrayList$=this;
var $75;
if(m$1.is$(($75=null),arrayList$.$$targs$$.Element$ArrayList)){
var $76=(function(){var $77=$75;arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).each(m$1.$JsCallable((function($78){
$74(($79=$78,m$1.nn$($79)?$79:$77));
var $79;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}());if($76!==undefined){return $76;}
}
else{
arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).each(m$1.$JsCallable((function($7a){
var $7b;
m$1.asrt$((m$1.nn$(($7b=$7a))),"Assertion failed: \'exists e\' at ArrayList.ceylon (520:23-520:32)",'520:16-520:33','ArrayList.ceylon');
$74($7b);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}
};arrayList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','each']};};
arrayList$.count=function($7c){
var arrayList$=this;
var $7d;
if(m$1.is$(($7d=null),arrayList$.$$targs$$.Element$ArrayList)){
var $7e=(function(){var $7f=$7d;return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).count(m$1.$JsCallable((function($7g){return $7c(($7h=$7g,m$1.nn$($7h)?$7h:$7f));}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
var $7h;
}());if($7e!==undefined){return $7e;}
}
else{
return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).count(m$1.$JsCallable((function($7i){
var $7j;
m$1.asrt$((m$1.nn$(($7j=$7i))),"Assertion failed: \'exists e\' at ArrayList.ceylon (535:23-535:32)",'535:16-535:33','ArrayList.ceylon');
return $7c($7j);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','count']};};
arrayList$.$_every=function($7k){
var arrayList$=this;
var $7l;
if(m$1.is$(($7l=null),arrayList$.$$targs$$.Element$ArrayList)){
var $7m=(function(){var $7n=$7l;return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).$_every(m$1.$JsCallable((function($7o){return $7k(($7p=$7o,m$1.nn$($7p)?$7p:$7n));}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
var $7p;
}());if($7m!==undefined){return $7m;}
}
else{
return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).$_every(m$1.$JsCallable((function($7q){
var $7r;
m$1.asrt$((m$1.nn$(($7r=$7q))),"Assertion failed: \'exists e\' at ArrayList.ceylon (550:23-550:32)",'550:16-550:33','ArrayList.ceylon');
return $7k($7r);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','every']};};
arrayList$.any=function($7s){
var arrayList$=this;
var $7t;
if(m$1.is$(($7t=null),arrayList$.$$targs$$.Element$ArrayList)){
var $7u=(function(){var $7v=$7t;return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).any(m$1.$JsCallable((function($7w){return $7s(($7x=$7w,m$1.nn$($7x)?$7x:$7v));}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
var $7x;
}());if($7u!==undefined){return $7u;}
}
else{
return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).any(m$1.$JsCallable((function($7y){
var $7z;
m$1.asrt$((m$1.nn$(($7z=$7y))),"Assertion failed: \'exists e\' at ArrayList.ceylon (565:23-565:32)",'565:16-565:33','ArrayList.ceylon');
return $7s($7z);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','any']};};
arrayList$.find=function($80){var arrayList$=this;
return arrayList$.$1dkeuw$b.find(m$1.JsCallable(arrayList$,$80));};
arrayList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','find']};};
arrayList$.findLast=function($81){var arrayList$=this;
return arrayList$.$1dkeuw$b.findLast(m$1.JsCallable(arrayList$,$81));};
arrayList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findLast']};};
arrayList$.$_reduce=function($82,$g1hi5x$){
var arrayList$=this;
var $83;
if(m$1.is$(($83=null),arrayList$.$$targs$$.Element$ArrayList)){
var $84=(function(){var $85=$83;return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).$_reduce(m$1.$JsCallable((function($86,$87){return $82(($88=$86,m$1.nn$($88)?$88:$85),($89=$87,m$1.nn$($89)?$89:$85));}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce}),{Result$reduce:$g1hi5x$.Result$reduce});
var $88,$89;
}());if($84!==undefined){return $84;}
}
else{
return arrayList$.$1dkeuw$b.take(arrayList$.$1dkeuw$d).$_reduce(m$1.$JsCallable((function($8a,$8b){
var $8c,$8d;
m$1.asrt$((m$1.nn$(($8c=$8a))&&m$1.nn$(($8d=$8b))),"Assertion failed: \'exists partial, exists element\' at ArrayList.ceylon (592:23-592:54)",'592:16-592:55','ArrayList.ceylon');
return $82($8c,$8d);
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce}),{Result$reduce:$g1hi5x$.Result$reduce});
}
};arrayList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$ArrayList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$ArrayList']},'Element$ArrayList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$ArrayList']}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','ArrayList','$m','reduce']};};
arrayList$.occursAt=function($12,$13){var arrayList$=this;
return (($12<arrayList$.$1dkeuw$d))?arrayList$.$1dkeuw$b.occursAt($12,$13):false;};arrayList$.firstOccurrence=function($14,$15,$16){var arrayList$=this;
if($15===undefined){$15=arrayList$.firstOccurrence$defs$from($14,$15,$16);}
if($16===undefined){$16=arrayList$.firstOccurrence$defs$length($14,$15,$16);}
return function(){var $17;
if(m$1.nn$(($17=($8e=$14,$8f=$15,$8g=smallest($15.plus($16),arrayList$.size).minus($15),($8h=arrayList$.$1dkeuw$b,m$1.JsCallable($8h,m$1.nn$($8h)?$8h.firstOccurrence:null))($8e,$8f,$8g)))))return $17;else return null}();};arrayList$.lastOccurrence=function($1c,$1d,$1e){var arrayList$=this;
if($1d===undefined){$1d=arrayList$.lastOccurrence$defs$from($1c,$1d,$1e);}
if($1e===undefined){$1e=arrayList$.lastOccurrence$defs$length($1c,$1d,$1e);}
return function(){var $1f;
if(m$1.nn$(($1f=($8i=$1c,$8j=largest($1d,arrayList$.$1dkeuw$b.size.minus(arrayList$.size)),$8k=$1e,($8l=arrayList$.$1dkeuw$b,m$1.JsCallable($8l,m$1.nn$($8l)?$8l.lastOccurrence:null))($8i,$8j,$8k)))))return $1f;else return null}();};arrayList$.occurs=function($1k,$1l,$1m){var arrayList$=this;
if($1l===undefined){$1l=arrayList$.occurs$defs$from($1k,$1l,$1m);}
if($1m===undefined){$1m=arrayList$.occurs$defs$length($1k,$1l,$1m);}
return ($8m=$1k,$8n=$1l,$8o=smallest($1l.plus($1m),arrayList$.size).minus($1l),($8p=arrayList$.$1dkeuw$b,m$1.JsCallable($8p,m$1.nn$($8p)?$8p.occurs:null))($8m,$8n,$8o));};arrayList$.occurrences=function($1r,$1s,$1t){var arrayList$=this;
if($1s===undefined){$1s=arrayList$.occurrences$defs$from($1r,$1s,$1t);}
if($1t===undefined){$1t=arrayList$.occurrences$defs$length($1r,$1s,$1t);}
return ($8q=$1r,$8r=$1s,$8s=smallest($1s.plus($1t),arrayList$.size).minus($1s),($8t=arrayList$.$1dkeuw$b,m$1.JsCallable($8t,m$1.nn$($8t)?$8t.occurrences:null))($8q,$8r,$8s));};arrayList$.copyTo$defs$sourcePosition=function($8u,$8v,$8w,$8x){return 0;};
arrayList$.copyTo$defs$destinationPosition=function($8u,$8v,$8w,$8x){return 0;};
arrayList$.copyTo$defs$length=function($8u,$8v,$8w,$8x){var arrayList$=this;
return smallest(arrayList$.size.minus($8v),$8u.size.minus($8w));};
arrayList$.copyTo=function($8u,$8v,$8w,$8x){
var arrayList$=this;
if($8v===undefined){$8v=arrayList$.copyTo$defs$sourcePosition($8u,$8v,$8w,$8x);}
if($8w===undefined){$8w=arrayList$.copyTo$defs$destinationPosition($8u,$8v,$8w,$8x);}
if($8x===undefined){$8x=arrayList$.copyTo$defs$length($8u,$8v,$8w,$8x);}
m$1.asrt$((($8x>=0)),"length may not be negative: \'length>=0\' at ArrayList.ceylon (658:15-658:25)",'657:8-658:26','ArrayList.ceylon');
m$1.asrt$((($8y=$8v,$8y.compare((0))!==m$1.smaller()&&$8y.compare(arrayList$.size.minus($8x))===m$1.smaller())),"illegal starting position in source list: \'0<=sourcePosition<size-length\' at ArrayList.ceylon (660:15-660:45)",'659:8-660:46','ArrayList.ceylon');
m$1.asrt$((($8z=$8w,$8z.compare((0))!==m$1.smaller()&&$8z.compare($8u.size.minus($8x))===m$1.smaller())),"illegal starting position in destination list: \'0<=destinationPosition<destination.size-length\' at ArrayList.ceylon (662:15-662:62)",'661:8-662:63','ArrayList.ceylon');
($90=$8x,$91=$8v,$92=$8w,$93=function($94){if(m$1.is$($94,{t:m$1.$_Array,a:{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}))return $94;else if(m$1.is$($94,{t:ArrayList,a:{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}}))return $94.$1dkeuw$b;}($8u),($95=arrayList$.$1dkeuw$b,m$1.JsCallable($95,m$1.nn$($95)?$95.copyTo:null))($93,$91,$92,$90));
var $90,$91,$92,$93,$95;
};arrayList$.copyTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'destination',mt:'prm',$t:{t:'u',l:[{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}}]},an:function(){return[m$1.doc("The list into which to copy the elements.")];}},{nm:'sourcePosition',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The index of the first element in this array to \ncopy.")];}},{nm:'destinationPosition',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The index in the given array into which to copy the \nfirst element.")];}},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The number of elements to copy.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:copyTo')];},d:['ceylon.collection','ArrayList','$m','copyTo']};};
})(ArrayList.$$.prototype);
}
return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;
$init$ArrayList();
var $6x,$6y,$8e,$8f,$8g,$8h,$8i,$8j,$8k,$8l,$8m,$8n,$8o,$8p,$8q,$8r,$8s,$8t;
function Cell(element,rest,$$targs$$,cell$){
$init$Cell();
if(cell$===undefined)cell$=new Cell.$$;
m$1.set_type_args(cell$,$$targs$$);
cell$.element_=element;
cell$.rest_=rest;
return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
ex$.Cell=Cell;
function $init$Cell(){
if(Cell.$$===undefined){
m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
(function(cell$){
m$1.atr$(cell$,'element',function(){return this.element_;},function($96){return this.element_=$96;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
m$1.atr$(cell$,'rest',function(){return this.rest_;},function($97){return this.rest_=$97;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
cell$.clone=function(){var cell$=this;
return Cell(cell$.element,($98=cell$.rest,m$1.JsCallable($98,m$1.nn$($98)?$98.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});};
cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
})(Cell.$$.prototype);
}
return Cell;
}
ex$.$init$Cell=$init$Cell;
$init$Cell();
var $98;
function CellIterator($1dkeuw$99,$$targs$$,cellIterator$){
$init$CellIterator();
if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
m$1.set_type_args(cellIterator$,$$targs$$);
cellIterator$.$1dkeuw$99_=$1dkeuw$99;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator},cellIterator$);
return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
ex$.CellIterator=CellIterator;
function $init$CellIterator(){
if(CellIterator.$$===undefined){
m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
(function(cellIterator$){
m$1.atr$(cellIterator$,'$1dkeuw$99',function(){return this.$1dkeuw$99_;},function($9a){return this.$1dkeuw$99_=$9a;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
cellIterator$.next=function(){
var cellIterator$=this;
var $9b;
if(m$1.nn$(($9b=cellIterator$.$1dkeuw$99))){
cellIterator$.$1dkeuw$99=$9b.rest;
return $9b.element;
}
return m$1.finished();
};cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
})(CellIterator.$$.prototype);
}
return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function frequencies($9c,$a5yoou$){
var $9d=HashMap(undefined,undefined,undefined,{Key$HashMap:$a5yoou$.Element$frequencies,Item$HashMap:{t:Counter}});
var $9f;for(var $9e=$9c.iterator();($9f=$9e.next())!==m$1.finished();){
var $9g;
if(m$1.nn$(($9g=$9d.$_get($9f)))){
($9h=$9g,$9i=$9h.count,$9h.count=$9i.successor,$9i);
var $9h,$9i;
}
else{
$9d.put($9f,Counter(1));
}
}
return $9d.mapItems(m$1.$JsCallable((function($9j,$9k){return $9k.count;}),[{nm:'e',mt:'prm',$t:$a5yoou$.Element$frequencies},{nm:'c',mt:'prm',$t:{t:Counter}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$a5yoou$.Element$frequencies,{t:Counter}]),First$Tuple:$a5yoou$.Element$frequencies,Rest$Tuple:m$1.mtt$([{t:Counter}])}},Return$Callable:{t:m$1.Integer}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$frequencies',Absent$Iterable:{t:m$1.Null}}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
$init$Counter();
if(counter$===undefined)counter$=new Counter.$$;
counter$.count_=count;
return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
ex$.Counter=Counter;
function $init$Counter(){
if(Counter.$$===undefined){
m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
(function(counter$){
m$1.atr$(counter$,'count',function(){return this.count_;},function($9l){return this.count_=$9l;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
})(Counter.$$.prototype);
}
return Counter;
}
ex$.$init$Counter=$init$Counter;
$init$Counter();
function group($9m,$9n,$bkwzr$){
var $9o=HashMap(undefined,undefined,undefined,{Key$HashMap:$bkwzr$.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}});
var $9q;for(var $9p=$9m.iterator();($9q=$9p.next())!==m$1.finished();){
var $9r=$9n($9q);
var $9s;
if(m$1.nn$(($9s=$9o.$_get($9r)))){
$9s.add($9q);
}
else{
var $9t=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bkwzr$.Element$group});
$9t.add($9q);
$9o.put($9r,$9t);
}
}
function $9u($9v,$9w){
var $9x;
m$1.asrt$((m$1.is$(($9x=$9w.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}})),"Assertion failed: \'is [Element+] result = list.sequence()\' at group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
return $9x;
};$9u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}},ps:[{nm:'group',mt:'prm',$t:'Group$group'},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$group'}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
return $9o.mapItems(m$1.JsCallable(0,$9u),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$group',Absent$Iterable:{t:m$1.Null}}}},{nm:'grouping',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$group']},Return$Callable:'Group$group'}},$rt:'Group$group',ps:[{nm:'element',mt:'prm',$t:'Element$group'}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group:$m:grouping$h95l9c')];}}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
function HashMap$$c($$targs$$,hashMap$){
m$1.set_type_args(hashMap$,$$targs$$);
MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
}
function HashMap(){return HashMap_$c$.apply(undefined,arguments);}
function HashMap_$c$$$a($9y,$9z,$a0,$$targs$$,hashMap$){
if($9y===undefined){$9y=linked();}
if($9z===undefined){$9z=Hashtable();}
if($a0===undefined){$a0=m$1.empty();}
hashMap$.$1dkeuw$a1_=null;
hashMap$.$1dkeuw$a2_=null;
hashMap$.$1dkeuw$a3_=$9y;
m$1.atr$(hashMap$,'$1dkeuw$a3',function(){return this.$1dkeuw$a3_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$a4_=$9z;
m$1.atr$(hashMap$,'$1dkeuw$a4',function(){return this.$1dkeuw$a4_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$a5_=$a0;
m$1.atr$(hashMap$,'$1dkeuw$a5',function(){return this.$1dkeuw$a5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
hashMap$.$1dkeuw$a6_=(0);
m$1.atr$(hashMap$,'$1dkeuw$a6',function(){return this.$1dkeuw$a6_;},function($a7){return this.$1dkeuw$a6_=$a7;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
hashMap$.$1dkeuw$a8_=m$1.is$($a0,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashMap$,'$1dkeuw$a8',function(){return this.$1dkeuw$a8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
var $a9=($aa=(hashMap$.$1dkeuw$a8?$9z.initialCapacityForSize($a0.size):null),m$1.nn$($aa)?$aa:$9z.initialCapacityForUnknownSize());
$prop$get$a9={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,d:['ceylon.collection','HashMap','$cn','$def','$at','initialCapacity$vvzb8c']};}};
$prop$get$a9.get=function(){return $a9};
var $aa;
hashMap$.$1dkeuw$ab_=entryStore($a9,{Key$entryStore:hashMap$.$$targs$$.Key$HashMap,Item$entryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$ab',function(){return this.$1dkeuw$ab_;},function($ac){return this.$1dkeuw$ab_=$ac;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
return hashMap$;
};
function HashMap_$c$($9y,$9z,$a0,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($9y===undefined){$9y=linked();}
if($9z===undefined){$9z=Hashtable();}
if($a0===undefined){$a0=m$1.empty();}
HashMap$$c($$targs$$,hashMap$);
HashMap_$c$$$a($9y,$9z,$a0,$$targs$$,hashMap$);
var $ae;for(var $ad=hashMap$.$1dkeuw$a5.iterator();($ae=$ad.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$af(hashMap$.$1dkeuw$ab,$ae)){
($ag=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$ag.successor,$ag);
var $ag;
}
}
if(!hashMap$.$1dkeuw$a8){
hashMap$.$1dkeuw$ah();
}
return hashMap$;
};
HashMap_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def')];},d:['ceylon.collection','HashMap','$cn','$def']};};
HashMap.HashMap_$c$=HashMap_$c$;
ex$.HashMap_$c$=HashMap_$c$;
function HashMap_copy$$a($ai,$aj,$ak,$$targs$$,hashMap$){
if($aj===undefined){$aj=$ai.$1dkeuw$a3;}
if($ak===undefined){$ak=Hashtable();}
hashMap$.$1dkeuw$a1_=null;
hashMap$.$1dkeuw$a2_=null;
hashMap$.$1dkeuw$a3_=$aj;
m$1.atr$(hashMap$,'$1dkeuw$a3',function(){return this.$1dkeuw$a3_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$a4_=$ak;
m$1.atr$(hashMap$,'$1dkeuw$a4',function(){return this.$1dkeuw$a4_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$a8_=true;
m$1.atr$(hashMap$,'$1dkeuw$a8',function(){return this.$1dkeuw$a8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
hashMap$.$1dkeuw$ab_=entryStore($ai.$1dkeuw$ab.size,{Key$entryStore:hashMap$.$$targs$$.Key$HashMap,Item$entryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$ab',function(){return this.$1dkeuw$ab_;},function($al){return this.$1dkeuw$ab_=$al;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
if($aj.equals(unlinked())){
hashMap$.$1dkeuw$a5_=m$1.empty();
hashMap$.$1dkeuw$a6=$ai.$1dkeuw$a6;
var $am=(0);
$prop$get$am={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1024,d:['ceylon.collection','HashMap','$cn','copy','$at','index$3a26oa']};}};
$prop$get$am.get=function(){return $am};
while(($am<$ai.$1dkeuw$ab.size)){
var $an;
if(m$1.nn$(($an=$ai.$1dkeuw$ab.getFromFirst($am)))){
hashMap$.$1dkeuw$ab.set($am,$an.clone());
}
($ao=$am,$am=$ao.successor,$ao);
var $ao;
}
}
else{
hashMap$.$1dkeuw$a6=(0);
hashMap$.$1dkeuw$a5_=$ai;
}
return hashMap$;
};
function HashMap_copy($ai,$aj,$ak,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($aj===undefined){$aj=$ai.$1dkeuw$a3;}
if($ak===undefined){$ak=Hashtable();}
HashMap$$c($$targs$$,hashMap$);
HashMap_copy$$a($ai,$aj,$ak,$$targs$$,hashMap$);
var $ae;for(var $ap=hashMap$.$1dkeuw$a5.iterator();($ae=$ap.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$af(hashMap$.$1dkeuw$ab,$ae)){
($aq=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$aq.successor,$aq);
var $aq;
}
}
if(!hashMap$.$1dkeuw$a8){
hashMap$.$1dkeuw$ah();
}
return hashMap$;
};
HashMap_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashMap',mt:'prm',$t:{t:HashMap,a:{Key$HashMap:'Key$HashMap',Item$HashMap:'Item$HashMap'}},an:function(){return[m$1.doc("The `HashMap` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy:$at:stability$gbelws')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy')];},d:['ceylon.collection','HashMap','$cn','copy']};};
HashMap.HashMap_copy=HashMap_copy;
ex$.HashMap_copy=HashMap_copy;
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
if(HashMap.$$===undefined){
m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
(function(hashMap$){
m$1.atr$(hashMap$,'$1dkeuw$a3',function(){return this.$1dkeuw$a3_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
m$1.atr$(hashMap$,'$1dkeuw$a5',function(){return this.$1dkeuw$a5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
m$1.atr$(hashMap$,'$1dkeuw$a4',function(){return this.$1dkeuw$a4_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
m$1.atr$(hashMap$,'$1dkeuw$a8',function(){return this.$1dkeuw$a8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
m$1.atr$(hashMap$,'$1dkeuw$ab',function(){return this.$1dkeuw$ab_;},function($ar){return this.$1dkeuw$ab_=$ar;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
m$1.atr$(hashMap$,'$1dkeuw$a6',function(){return this.$1dkeuw$a6_;},function($as){return this.$1dkeuw$a6_=$as;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
m$1.atr$(hashMap$,'$1dkeuw$a1',function(){return this.$1dkeuw$a1_;},function($at){return this.$1dkeuw$a1_=$at;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
m$1.atr$(hashMap$,'$1dkeuw$a2',function(){return this.$1dkeuw$a2_;},function($au){return this.$1dkeuw$a2_=$au;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
hashMap$.$1dkeuw$av=function($aw){var hashMap$=this;
return function(){var $ax=$aw.hash;return $ax.xor($ax.rightLogicalShift(16));}();};
hashMap$.$1dkeuw$av.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','hashCode$39nm0x']};};
hashMap$.$1dkeuw$ay=function($az,$b0){var hashMap$=this;
return hashMap$.$1dkeuw$av($az).and($b0.size.minus(1));};
hashMap$.$1dkeuw$ay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
hashMap$.$1dkeuw$b1=function($b2,$b3){
var hashMap$=this;
if(hashMap$.$1dkeuw$a3.equals(linked())){
var $b4=LinkedCell($b2,$b3,hashMap$.$1dkeuw$a2,{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}});
var $b5;
if(m$1.nn$(($b5=hashMap$.$1dkeuw$a2))){
($b5.next=$b4);
}
hashMap$.$1dkeuw$a2=$b4;
if(!m$1.nn$(hashMap$.$1dkeuw$a1)){
hashMap$.$1dkeuw$a1=$b4;
}
return $b4;
}
else{
return Cell($b2,$b3,{Element$Cell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}});
}
};hashMap$.$1dkeuw$b1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
hashMap$.$1dkeuw$b6=function($b7){
var hashMap$=this;
if(hashMap$.$1dkeuw$a3.equals(linked())){
var $b8;
m$1.asrt$((m$1.is$(($b8=$b7),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}})),"Assertion failed: \'is LinkedCell<Key->Item> cell\' at HashMap.ceylon (163:19-163:49)",'163:12-163:50','HashMap.ceylon');
var $b9;
if(m$1.nn$(($b9=$b8.previous))){
($b9.next=$b8.next);
}
else{
hashMap$.$1dkeuw$a1=$b8.next;
}
var $ba;
if(m$1.nn$(($ba=$b8.next))){
($ba.previous=$b8.previous);
}
else{
hashMap$.$1dkeuw$a2=$b8.previous;
}
}
};hashMap$.$1dkeuw$b6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
hashMap$.$1dkeuw$af=function($bb,$bc){
var hashMap$=this;
var $bd=hashMap$.$1dkeuw$ay($bc.key,$bb);
var $be=$bb.getFromFirst($bd);
var $bf;
while(m$1.nn$(($bf=$be))){
if($bf.element.key.equals($bc.key)){
($bf.element=$bc);
return false;
}
$be=$bf.rest;
}
$bb.set($bd,hashMap$.$1dkeuw$b1($bc,$bb.getFromFirst($bd)));
return true;
};hashMap$.$1dkeuw$af.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
hashMap$.$1dkeuw$ah=function(){
var hashMap$=this;
if(hashMap$.$1dkeuw$a4.rehash(hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$ab.size)){
var $bg=entryStore(hashMap$.$1dkeuw$a4.capacity(hashMap$.$1dkeuw$a6),{Key$entryStore:hashMap$.$$targs$$.Key$HashMap,Item$entryStore:hashMap$.$$targs$$.Item$HashMap});
var $bh=(0);
while(($bh<hashMap$.$1dkeuw$ab.size)){
var $bi=hashMap$.$1dkeuw$ab.getFromFirst($bh);
var $bj;
while(m$1.nn$(($bj=$bi))){
$bi=$bj.rest;
var $bk=hashMap$.$1dkeuw$ay($bj.element.key,$bg);
var $bl=$bg.$_get($bk);
($bj.rest=$bl);
$bg.set($bk,$bj);
}
($bm=$bh,$bh=$bm.successor,$bm);
var $bm;
}
hashMap$.$1dkeuw$ab=$bg;
}
};hashMap$.$1dkeuw$ah.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
hashMap$.put=function($bn,$bo){
var hashMap$=this;
var $bp=hashMap$.$1dkeuw$ay($bn,hashMap$.$1dkeuw$ab);
var $bq=m$1.Entry($bn,$bo,{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap});
var $br=hashMap$.$1dkeuw$ab.getFromFirst($bp);
var $bs=$br;
var $bt;
while(m$1.nn$(($bt=$bs))){
if($bt.element.key.equals($bn)){
var $bu=$bt.element.item;
($bt.element=$bq);
return $bu;
}
$bs=$bt.rest;
}
hashMap$.$1dkeuw$ab.set($bp,hashMap$.$1dkeuw$b1($bq,$br));
($bv=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$bv.successor,$bv);
var $bv;
hashMap$.$1dkeuw$ah();
return null;
};hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
hashMap$.replaceEntry=function($bw,$bx,$by){
var hashMap$=this;
var $bz=hashMap$.$1dkeuw$ay($bw,hashMap$.$1dkeuw$ab);
var $c0=hashMap$.$1dkeuw$ab.getFromFirst($bz);
var $c1;
while(m$1.nn$(($c1=$c0))){
if($c1.element.key.equals($bw)){
var $c2;
if(m$1.nn$(($c2=$c1.element.item))&&$c2.equals($bx)){
($c1.element=m$1.Entry($bw,$by,{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}));
return true;
}
else{
return false;
}
}
$c0=$c1.rest;
}
return false;
};hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
hashMap$.putAll=function($c3){
var hashMap$=this;
var $c5;for(var $c4=$c3.iterator();($c5=$c4.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$af(hashMap$.$1dkeuw$ab,$c5)){
($c6=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$c6.successor,$c6);
var $c6;
}
}
hashMap$.$1dkeuw$ah();
};hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
hashMap$.remove=function($c7){
var hashMap$=this;
var $c8=hashMap$.$1dkeuw$ay($c7,hashMap$.$1dkeuw$ab);
var $c9;
if(m$1.nn$(($c9=hashMap$.$1dkeuw$ab.getFromFirst($c8)))&&$c9.element.key.equals($c7)){
hashMap$.$1dkeuw$ab.set($c8,$c9.rest);
hashMap$.$1dkeuw$b6($c9);
($ca=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$ca.predecessor,$ca);
var $ca;
return $c9.element.item;
}
var $cb=hashMap$.$1dkeuw$ab.getFromFirst($c8);
var $cc;
while(m$1.nn$(($cc=$cb))){
var $cd=$cc.rest;
var $ce;
if(m$1.nn$(($ce=$cd))&&$ce.element.key.equals($c7)){
($cc.rest=$ce.rest);
hashMap$.$1dkeuw$b6($ce);
($cf=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$cf.predecessor,$cf);
var $cf;
return $ce.element.item;
}
else{
$cb=$cd;
}
}
return null;
};hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
hashMap$.removeEntry=function($cg,$ch){
var hashMap$=this;
var $ci=hashMap$.$1dkeuw$ay($cg,hashMap$.$1dkeuw$ab);
var $cj;
while(m$1.nn$(($cj=hashMap$.$1dkeuw$ab.getFromFirst($ci)))&&$cj.element.key.equals($cg)){
var $ck;
if(m$1.nn$(($ck=$cj.element.item))&&$ck.equals($ch)){
hashMap$.$1dkeuw$ab.set($ci,$cj.rest);
($cl=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$cl.predecessor,$cl);
var $cl;
return true;
}
else{
return false;
}
}
var $cm=hashMap$.$1dkeuw$ab.getFromFirst($ci);
var $cn;
while(m$1.nn$(($cn=$cm))){
var $co=$cn.rest;
var $cp;
if(m$1.nn$(($cp=$co))&&$cp.element.key.equals($cg)){
var $cq;
if(m$1.nn$(($cq=$cp.element.item))&&$cq.equals($ch)){
($cn.rest=$cp.rest);
hashMap$.$1dkeuw$b6($cp);
($cr=hashMap$.$1dkeuw$a6,hashMap$.$1dkeuw$a6=$cr.predecessor,$cr);
var $cr;
return true;
}
else{
return false;
}
}
else{
$cm=$co;
}
}
return false;
};hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
hashMap$.clear=function(){
var hashMap$=this;
var $cs=(0);
while(($cs<hashMap$.$1dkeuw$ab.size)){
hashMap$.$1dkeuw$ab.set(($ct=$cs,$cs=$ct.successor,$ct),null);
var $ct;
}
hashMap$.$1dkeuw$a6=(0);
hashMap$.$1dkeuw$a1=null;
hashMap$.$1dkeuw$a2=null;
};hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
m$1.atr$(hashMap$,'size',function(){
var hashMap$=this;
return hashMap$.$1dkeuw$a6;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
m$1.atr$(hashMap$,'empty',function(){
var hashMap$=this;
return ((hashMap$.$1dkeuw$a6).valueOf()==(0).valueOf());
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','empty']};});
hashMap$.$_get=function($cu){
var hashMap$=this;
if(hashMap$.empty){
return null;
}
var $cv=hashMap$.$1dkeuw$ay($cu,hashMap$.$1dkeuw$ab);
var $cw=hashMap$.$1dkeuw$ab.getFromFirst($cv);
var $cx;
while(m$1.nn$(($cx=$cw))){
if($cx.element.key.equals($cu)){
return $cx.element.item;
}
$cw=$cx.rest;
}
return null;
};hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
hashMap$.getOrDefault=function($cy,$cz,$6rx8ao$){
var hashMap$=this;
if(hashMap$.empty){
return $cz;
}
var $d0=hashMap$.$1dkeuw$ay($cy,hashMap$.$1dkeuw$ab);
var $d1=hashMap$.$1dkeuw$ab.getFromFirst($d0);
var $d2;
while(m$1.nn$(($d2=$d1))){
if($d2.element.key.equals($cy)){
return $d2.element.item;
}
$d1=$d2.rest;
}
return $cz;
};hashMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$HashMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:HashMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','HashMap','$m','getOrDefault']};};
m$1.atr$(hashMap$,'first',function(){
var hashMap$=this;
return (hashMap$.$1dkeuw$a3.equals(linked()))?($d3=hashMap$.$1dkeuw$a1,m$1.nn$($d3)?$d3.element:null):($d4=hashMap$.$1dkeuw$ab.$_get(0),m$1.nn$($d4)?$d4.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});
hashMap$.iterator=function(){var hashMap$=this;
return ($d5=(hashMap$.$1dkeuw$a3.equals(linked())?LinkedCellIterator(hashMap$.$1dkeuw$a1,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}):null),m$1.nn$($d5)?$d5:StoreIterator(hashMap$.$1dkeuw$ab,{Element$StoreIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}));};hashMap$.count=function($d6){
var hashMap$=this;
var $d7=(0);
var $d8=(0);
while(($d7<hashMap$.$1dkeuw$ab.size)){
var $d9=hashMap$.$1dkeuw$ab.getFromFirst($d7);
var $da;
while(m$1.nn$(($da=$d9))){
if($d6($da.element)){
($db=$d8,$d8=$db.successor,$db);
var $db;
}
$d9=$da.rest;
}
($dc=$d7,$d7=$dc.successor,$dc);
var $dc;
}
return $d8;
};hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
hashMap$.each=function($dd){
var hashMap$=this;
hashMap$.$1dkeuw$ab.each(m$1.$JsCallable((function($de){
var $df=$de;
$prop$get$df={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:hashMap$.each,pa:1027,d:['ceylon.collection','HashMap','$m','each','$at','iter$edjelw']};}};
$prop$get$df.get=function(){return $df};
var $dg;
while(m$1.nn$(($dg=$df))){
$dd($dg.element);
$df=$dg.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:hashMap$.Item$HashMap,Key$Entry:hashMap$.Key$HashMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}}])]),Return$Callable:{t:m$1.Anything}}));
};hashMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','each']};};
m$1.atr$(hashMap$,'hash',function(){
var hashMap$=this;
var $dh=(0);
var $di=(0);
while(($dh<hashMap$.$1dkeuw$ab.size)){
var $dj=hashMap$.$1dkeuw$ab.getFromFirst($dh);
var $dk;
while(m$1.nn$(($dk=$dj))){
($di=$di.plus($dk.element.hash));
$dj=$dk.rest;
}
($dl=$dh,$dh=$dl.successor,$dl);
var $dl;
}
return $di;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($dm){
var hashMap$=this;
var $dn;
if(m$1.is$(($dn=$dm),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&((hashMap$.size).valueOf()==($dn.size).valueOf())){
var $do=(0);
while(($do<hashMap$.$1dkeuw$ab.size)){
var $dp=hashMap$.$1dkeuw$ab.getFromFirst($do);
var $dq;
while(m$1.nn$(($dq=$dp))){
var $dr=$dn.$_get($dq.element.key);
var $ds;
if(m$1.nn$(($ds=$dq.element.item))){
var $dt;
if(m$1.nn$(($dt=$dr))){
if((!$dt.equals($ds))){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($dr)){
return false;
}
}
$dp=$dq.rest;
}
($du=$do,$do=$du.successor,$du);
var $du;
}
return true;
}
return false;
};hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
hashMap$.clone=function(){var hashMap$=this;
return HashMap_copy(hashMap$,undefined,undefined,{Key$HashMap:hashMap$.$$targs$$.Key$HashMap,Item$HashMap:hashMap$.$$targs$$.Item$HashMap});};
hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashMap,a:{Key$HashMap:'Key$HashMap',Item$HashMap:'Item$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
hashMap$.defines=function($dv){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $dw=hashMap$.$1dkeuw$ay($dv,hashMap$.$1dkeuw$ab);
var $dx=hashMap$.$1dkeuw$ab.getFromFirst($dw);
var $dy;
while(m$1.nn$(($dy=$dx))){
if($dy.element.key.equals($dv)){
return true;
}
$dx=$dy.rest;
}
return false;
}
};hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
hashMap$.contains=function($dz){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $e0;
if(m$1.is$(($e0=$dz),{t:m$1.Entry,a:{Item$Entry:{t:m$1.Anything},Key$Entry:{t:m$1.$_Object}}})){
var $e1=$e0.key;
var $e2=hashMap$.$1dkeuw$ay($e1,hashMap$.$1dkeuw$ab);
var $e3=hashMap$.$1dkeuw$ab.getFromFirst($e2);
var $e4;
while(m$1.nn$(($e4=$e3))){
if($e4.element.key.equals($e1)){
var $e5;
if(m$1.nn$(($e5=$e4.element.item))){
var $e6;
if(m$1.nn$(($e6=$e0.item))){
return $e5.equals($e6);
}
else{
return false;
}
}
else{
return !m$1.nn$($e0.item);
}
}
$e3=$e4.rest;
}
return false;
}
else{
return false;
}
}
};hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
})(HashMap.$$.prototype);
}
return HashMap;
}
ex$.$init$HashMap=$init$HashMap;
$init$HashMap();
var $d3,$d4,$d5;
function HashSet$$c($$targs$$,hashSet$){
m$1.set_type_args(hashSet$,$$targs$$);
MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
}
function HashSet(){return HashSet_$c$.apply(undefined,arguments);}
function HashSet_$c$$$a($e7,$e8,$e9,$$targs$$,hashSet$){
if($e7===undefined){$e7=linked();}
if($e8===undefined){$e8=Hashtable();}
if($e9===undefined){$e9=m$1.empty();}
hashSet$.$1dkeuw$ea_=null;
hashSet$.$1dkeuw$eb_=null;
hashSet$.$1dkeuw$ec_=$e7;
m$1.atr$(hashSet$,'$1dkeuw$ec',function(){return this.$1dkeuw$ec_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$ed_=$e8;
m$1.atr$(hashSet$,'$1dkeuw$ed',function(){return this.$1dkeuw$ed_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$ee_=$e9;
m$1.atr$(hashSet$,'$1dkeuw$ee',function(){return this.$1dkeuw$ee_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
hashSet$.$1dkeuw$ef_=(0);
m$1.atr$(hashSet$,'$1dkeuw$ef',function(){return this.$1dkeuw$ef_;},function($eg){return this.$1dkeuw$ef_=$eg;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
hashSet$.$1dkeuw$eh_=m$1.is$($e9,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashSet$,'$1dkeuw$eh',function(){return this.$1dkeuw$eh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
var $ei=($ej=(hashSet$.$1dkeuw$eh?$e8.initialCapacityForSize($e9.size):null),m$1.nn$($ej)?$ej:$e8.initialCapacityForUnknownSize());
$prop$get$ei={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,d:['ceylon.collection','HashSet','$cn','$def','$at','initialCapacity$l7lsqi']};}};
$prop$get$ei.get=function(){return $ei};
var $ej;
hashSet$.$1dkeuw$ek_=elementStore($ei,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$ek',function(){return this.$1dkeuw$ek_;},function($el){return this.$1dkeuw$ek_=$el;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
return hashSet$;
};
function HashSet_$c$($e7,$e8,$e9,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($e7===undefined){$e7=linked();}
if($e8===undefined){$e8=Hashtable();}
if($e9===undefined){$e9=m$1.empty();}
HashSet$$c($$targs$$,hashSet$);
HashSet_$c$$$a($e7,$e8,$e9,$$targs$$,hashSet$);
var $en;for(var $em=hashSet$.$1dkeuw$ee.iterator();($en=$em.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$eo(hashSet$.$1dkeuw$ek,$en)){
($ep=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$ep.successor,$ep);
var $ep;
}
}
if(!hashSet$.$1dkeuw$eh){
hashSet$.$1dkeuw$eq();
}
return hashSet$;
};
HashSet_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def')];},d:['ceylon.collection','HashSet','$cn','$def']};};
HashSet.HashSet_$c$=HashSet_$c$;
ex$.HashSet_$c$=HashSet_$c$;
function HashSet_copy$$a($er,$es,$et,$$targs$$,hashSet$){
if($es===undefined){$es=$er.$1dkeuw$ec;}
if($et===undefined){$et=Hashtable();}
hashSet$.$1dkeuw$ea_=null;
hashSet$.$1dkeuw$eb_=null;
hashSet$.$1dkeuw$ec_=$es;
m$1.atr$(hashSet$,'$1dkeuw$ec',function(){return this.$1dkeuw$ec_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$ed_=$et;
m$1.atr$(hashSet$,'$1dkeuw$ed',function(){return this.$1dkeuw$ed_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$eh_=true;
m$1.atr$(hashSet$,'$1dkeuw$eh',function(){return this.$1dkeuw$eh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$ek_=elementStore($er.$1dkeuw$ek.size,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$ek',function(){return this.$1dkeuw$ek_;},function($eu){return this.$1dkeuw$ek_=$eu;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
if($es.equals(unlinked())){
hashSet$.$1dkeuw$ee_=m$1.empty();
hashSet$.$1dkeuw$ef=$er.$1dkeuw$ef;
var $ev=(0);
$prop$get$ev={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1024,d:['ceylon.collection','HashSet','$cn','copy','$at','index$fnnc8k']};}};
$prop$get$ev.get=function(){return $ev};
while(($ev<$er.$1dkeuw$ek.size)){
var $ew;
if(m$1.nn$(($ew=$er.$1dkeuw$ek.getFromFirst($ev)))){
hashSet$.$1dkeuw$ek.set($ev,$ew.clone());
}
($ex=$ev,$ev=$ex.successor,$ex);
var $ex;
}
}
else{
hashSet$.$1dkeuw$ef=(0);
hashSet$.$1dkeuw$ee_=$er;
}
return hashSet$;
};
function HashSet_copy($er,$es,$et,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($es===undefined){$es=$er.$1dkeuw$ec;}
if($et===undefined){$et=Hashtable();}
HashSet$$c($$targs$$,hashSet$);
HashSet_copy$$a($er,$es,$et,$$targs$$,hashSet$);
var $en;for(var $ey=hashSet$.$1dkeuw$ee.iterator();($en=$ey.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$eo(hashSet$.$1dkeuw$ek,$en)){
($ez=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$ez.successor,$ez);
var $ez;
}
}
if(!hashSet$.$1dkeuw$eh){
hashSet$.$1dkeuw$eq();
}
return hashSet$;
};
HashSet_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashSet',mt:'prm',$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},an:function(){return[m$1.doc("The `HashSet` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy:$at:stability$y8xjx2')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy')];},d:['ceylon.collection','HashSet','$cn','copy']};};
HashSet.HashSet_copy=HashSet_copy;
ex$.HashSet_copy=HashSet_copy;
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(["Stéphane Épardaud","Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
if(HashSet.$$===undefined){
m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
(function(hashSet$){
m$1.atr$(hashSet$,'$1dkeuw$ec',function(){return this.$1dkeuw$ec_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
m$1.atr$(hashSet$,'$1dkeuw$ed',function(){return this.$1dkeuw$ed_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
m$1.atr$(hashSet$,'$1dkeuw$ek',function(){return this.$1dkeuw$ek_;},function($f0){return this.$1dkeuw$ek_=$f0;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
m$1.atr$(hashSet$,'$1dkeuw$ee',function(){return this.$1dkeuw$ee_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
m$1.atr$(hashSet$,'$1dkeuw$ef',function(){return this.$1dkeuw$ef_;},function($f1){return this.$1dkeuw$ef_=$f1;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
m$1.atr$(hashSet$,'$1dkeuw$ea',function(){return this.$1dkeuw$ea_;},function($f2){return this.$1dkeuw$ea_=$f2;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
m$1.atr$(hashSet$,'$1dkeuw$eb',function(){return this.$1dkeuw$eb_;},function($f3){return this.$1dkeuw$eb_=$f3;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
m$1.atr$(hashSet$,'$1dkeuw$eh',function(){return this.$1dkeuw$eh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$f4=function($f5){var hashSet$=this;
return function(){var $f6=$f5.hash;return $f6.xor($f6.rightLogicalShift(16));}();};
hashSet$.$1dkeuw$f4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','hashCode$6dtk7f']};};
hashSet$.$1dkeuw$f7=function($f8,$f9){var hashSet$=this;
return hashSet$.$1dkeuw$f4($f8).and($f9.size.minus(1));};
hashSet$.$1dkeuw$f7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
hashSet$.$1dkeuw$fa=function($fb,$fc){
var hashSet$=this;
if(hashSet$.$1dkeuw$ec.equals(linked())){
var $fd=LinkedCell($fb,$fc,hashSet$.$1dkeuw$eb,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
var $fe;
if(m$1.nn$(($fe=hashSet$.$1dkeuw$eb))){
($fe.next=$fd);
}
hashSet$.$1dkeuw$eb=$fd;
if(!m$1.nn$(hashSet$.$1dkeuw$ea)){
hashSet$.$1dkeuw$ea=$fd;
}
return $fd;
}
else{
return Cell($fb,$fc,{Element$Cell:hashSet$.$$targs$$.Element$HashSet});
}
};hashSet$.$1dkeuw$fa.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
hashSet$.$1dkeuw$ff=function($fg){
var hashSet$=this;
if(hashSet$.$1dkeuw$ec.equals(linked())){
var $fh;
m$1.asrt$((m$1.is$(($fh=$fg),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}})),"Assertion failed: \'is LinkedCell<Element> cell\' at HashSet.ceylon (161:19-161:47)",'161:12-161:48','HashSet.ceylon');
var $fi;
if(m$1.nn$(($fi=$fh.previous))){
($fi.next=$fh.next);
}
else{
hashSet$.$1dkeuw$ea=$fh.next;
}
var $fj;
if(m$1.nn$(($fj=$fh.next))){
($fj.previous=$fh.previous);
}
else{
hashSet$.$1dkeuw$eb=$fh.previous;
}
}
};hashSet$.$1dkeuw$ff.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
hashSet$.$1dkeuw$eo=function($fk,$fl){
var hashSet$=this;
var $fm=hashSet$.$1dkeuw$f7($fl,$fk);
var $fn=$fk.getFromFirst($fm);
var $fo=$fn;
var $fp;
while(m$1.nn$(($fp=$fo))){
if($fp.element.equals($fl)){
($fp.element=$fl);
return false;
}
$fo=$fp.rest;
}
$fk.set($fm,hashSet$.$1dkeuw$fa($fl,$fn));
return true;
};hashSet$.$1dkeuw$eo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
hashSet$.$1dkeuw$eq=function(){
var hashSet$=this;
if(hashSet$.$1dkeuw$ed.rehash(hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ek.size)){
var $fq=elementStore(hashSet$.$1dkeuw$ed.capacity(hashSet$.$1dkeuw$ef),{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
var $fr=(0);
while(($fr<hashSet$.$1dkeuw$ek.size)){
var $fs=hashSet$.$1dkeuw$ek.getFromFirst($fr);
var $ft;
while(m$1.nn$(($ft=$fs))){
$fs=$ft.rest;
var $fu=hashSet$.$1dkeuw$f7($ft.element,$fq);
var $fv=$fq.$_get($fu);
var $fw;
while(m$1.nn$(($fw=($fx=$fv,m$1.nn$($fx)?$fx.rest:null)))){
$fv=$fw;
}
var $fx;
($ft.rest=$fv);
$fq.set($fu,$ft);
}
($fy=$fr,$fr=$fy.successor,$fy);
var $fy;
}
hashSet$.$1dkeuw$ek=$fq;
}
};hashSet$.$1dkeuw$eq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
hashSet$.add=function($fz){
var hashSet$=this;
if(hashSet$.$1dkeuw$eo(hashSet$.$1dkeuw$ek,$fz)){
($g0=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$g0.successor,$g0);
var $g0;
hashSet$.$1dkeuw$eq();
return true;
}
return false;
};hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
hashSet$.addAll=function($g1){
var hashSet$=this;
var $g2=false;
var $g4;for(var $g3=$g1.iterator();($g4=$g3.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$eo(hashSet$.$1dkeuw$ek,$g4)){
($g5=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$g5.successor,$g5);
var $g5;
$g2=true;
}
}
if($g2){
hashSet$.$1dkeuw$eq();
}
return $g2;
};hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
hashSet$.remove=function($g6){
var hashSet$=this;
var $g7=hashSet$.$1dkeuw$f7($g6,hashSet$.$1dkeuw$ek);
var $g8;
if(m$1.nn$(($g8=hashSet$.$1dkeuw$ek.getFromFirst($g7)))&&$g8.element.equals($g6)){
hashSet$.$1dkeuw$ek.set($g7,$g8.rest);
hashSet$.$1dkeuw$ff($g8);
($g9=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$g9.predecessor,$g9);
var $g9;
return true;
}
var $ga=hashSet$.$1dkeuw$ek.getFromFirst($g7);
var $gb;
while(m$1.nn$(($gb=$ga))){
var $gc=$gb.rest;
var $gd;
if(m$1.nn$(($gd=$gc))&&$gd.element.equals($g6)){
($gb.rest=$gd.rest);
hashSet$.$1dkeuw$ff($gd);
($ge=hashSet$.$1dkeuw$ef,hashSet$.$1dkeuw$ef=$ge.predecessor,$ge);
var $ge;
return true;
}
else{
$ga=$gc;
}
}
return false;
};hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
hashSet$.clear=function(){
var hashSet$=this;
var $gf=(0);
while(($gf<hashSet$.$1dkeuw$ek.size)){
hashSet$.$1dkeuw$ek.set(($gg=$gf,$gf=$gg.successor,$gg),null);
var $gg;
}
hashSet$.$1dkeuw$ef=(0);
hashSet$.$1dkeuw$ea=null;
hashSet$.$1dkeuw$eb=null;
};hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
m$1.atr$(hashSet$,'size',function(){
var hashSet$=this;
return hashSet$.$1dkeuw$ef;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
hashSet$.iterator=function(){var hashSet$=this;
return ($gh=(hashSet$.$1dkeuw$ec.equals(linked())?LinkedCellIterator(hashSet$.$1dkeuw$ea,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($gh)?$gh:StoreIterator(hashSet$.$1dkeuw$ek,{Element$StoreIterator:hashSet$.$$targs$$.Element$HashSet}));};hashSet$.count=function($gi){
var hashSet$=this;
var $gj=(0);
var $gk=(0);
while(($gk<hashSet$.$1dkeuw$ek.size)){
var $gl=hashSet$.$1dkeuw$ek.getFromFirst($gk);
var $gm;
while(m$1.nn$(($gm=$gl))){
if($gi($gm.element)){
($gn=$gj,$gj=$gn.successor,$gn);
var $gn;
}
$gl=$gm.rest;
}
($go=$gk,$gk=$go.successor,$go);
var $go;
}
return $gj;
};hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$HashSet']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
hashSet$.each=function($gp){
var hashSet$=this;
hashSet$.$1dkeuw$ek.each(m$1.$JsCallable((function($gq){
var $gr=$gq;
$prop$get$gr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]},$cont:hashSet$.each,pa:1027,d:['ceylon.collection','HashSet','$m','each','$at','iter$e3zwaq']};}};
$prop$get$gr.get=function(){return $gr};
var $gs;
while(m$1.nn$(($gs=$gr))){
$gp($gs.element);
$gr=$gs.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:hashSet$.Element$HashSet}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:hashSet$.$$targs$$.Element$HashSet}}])]),Return$Callable:{t:m$1.Anything}}));
};hashSet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$HashSet']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','each']};};
m$1.atr$(hashSet$,'hash',function(){
var hashSet$=this;
var $gt=(0);
var $gu=(0);
while(($gt<hashSet$.$1dkeuw$ek.size)){
var $gv=hashSet$.$1dkeuw$ek.getFromFirst($gt);
var $gw;
while(m$1.nn$(($gw=$gv))){
($gu=$gu.plus($gw.element.hash));
$gv=$gw.rest;
}
($gx=$gt,$gt=$gx.successor,$gx);
var $gx;
}
return $gu;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($gy){
var hashSet$=this;
var $gz;
if(m$1.is$(($gz=$gy),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&((hashSet$.size).valueOf()==($gz.size).valueOf())){
var $h0=(0);
while(($h0<hashSet$.$1dkeuw$ek.size)){
var $h1=hashSet$.$1dkeuw$ek.getFromFirst($h0);
var $h2;
while(m$1.nn$(($h2=$h1))){
if(!$gz.contains($h2.element)){
return false;
}
$h1=$h2.rest;
}
($h3=$h0,$h0=$h3.successor,$h3);
var $h3;
}
return true;
}
return false;
};hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
hashSet$.clone=function(){var hashSet$=this;
return HashSet_copy(hashSet$,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});};
hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
hashSet$.contains=function($h4){
var hashSet$=this;
if(hashSet$.empty){
return false;
}
else{
var $h5=hashSet$.$1dkeuw$f7($h4,hashSet$.$1dkeuw$ek);
var $h6=hashSet$.$1dkeuw$ek.getFromFirst($h5);
var $h7;
while(m$1.nn$(($h7=$h6))){
if($h7.element.equals($h4)){
return true;
}
$h6=$h7.rest;
}
return false;
}
};hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
hashSet$.complement=function($h8,$4pzcs8$){
var hashSet$=this;
var $h9=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
var $hb;for(var $ha=hashSet$.iterator();($hb=$ha.next())!==m$1.finished();){
if((!$h8.contains($hb))){
$h9.add($hb);
}
}
return $h9;
};hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
hashSet$.exclusiveUnion=function($hc,$rk6eqr$){
var hashSet$=this;
var $hd=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$rk6eqr$.Other$exclusiveUnion])});
var $hf;for(var $he=hashSet$.iterator();($hf=$he.next())!==m$1.finished();){
if((!$hc.contains($hf))){
$hd.add($hf);
}
}
var $hh;for(var $hg=$hc.iterator();($hh=$hg.next())!==m$1.finished();){
if((!hashSet$.contains($hh))){
$hd.add($hh);
}
}
return $hd;
};hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
hashSet$.intersection=function($hi,$4hlnq3$){
var hashSet$=this;
var $hj=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([hashSet$.$$targs$$.Element$HashSet,$4hlnq3$.Other$intersection])});
var $hl;for(var $hk=hashSet$.iterator();($hl=$hk.next())!==m$1.finished();){
var $hm;
if($hi.contains($hl)&&m$1.is$(($hm=$hl),$4hlnq3$.Other$intersection,$4hlnq3$)){
$hj.add($hm);
}
}
return $hj;
};hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
hashSet$.union=function($hn,$hc5war$){
var hashSet$=this;
var $ho=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$hc5war$.Other$union])});
$ho.addAll(hashSet$);
$ho.addAll($hn);
return $ho;
};hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
m$1.atr$(hashSet$,'first',function(){
var hashSet$=this;
return (hashSet$.$1dkeuw$ec.equals(linked()))?($hp=hashSet$.$1dkeuw$ea,m$1.nn$($hp)?$hp.element:null):($hq=hashSet$.$1dkeuw$ek.coalesced.first,m$1.nn$($hq)?$hq.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});
m$1.atr$(hashSet$,'last',function(){
var hashSet$=this;
if(hashSet$.$1dkeuw$ec.equals(linked())){
return ($hr=hashSet$.$1dkeuw$eb,m$1.nn$($hr)?$hr.element:null);
var $hr;
}
else{
var $hs=hashSet$.$1dkeuw$ek.coalesced.last;
var $ht;
while(m$1.nn$(($ht=($hu=$hs,m$1.nn$($hu)?$hu.rest:null)))){
$hs=$ht;
}
var $hu;
return ($hv=$hs,m$1.nn$($hv)?$hv.element:null);
var $hv;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});
})(HashSet.$$.prototype);
}
return HashSet;
}
ex$.$init$HashSet=$init$HashSet;
$init$HashSet();
var $gh,$hp,$hq;
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
$init$Hashtable();
if(hashtable$===undefined)hashtable$=new Hashtable.$$;
if(initialCapacity===undefined){initialCapacity=(16);}
hashtable$.initialCapacity_=initialCapacity;
if(loadFactor===undefined){loadFactor=m$1.Float(0.75);}
hashtable$.loadFactor_=loadFactor;
if(growthFactor===undefined){growthFactor=m$1.Float(2.0);}
hashtable$.growthFactor_=growthFactor;
m$1.asrt$(((hashtable$.initialCapacity>=0)),"initial capacity cannot be negative: \'initialCapacity>=0\' at Hashtable.ceylon (32:11-32:30)",'31:4-32:31','Hashtable.ceylon');
m$1.asrt$(((hashtable$.initialCapacity<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity<=runtime.maxArraySize\' at Hashtable.ceylon (35:11-35:49)",'34:4-35:50','Hashtable.ceylon');
m$1.asrt$((hashtable$.loadFactor.compare(m$1.Float(0.0)).equals(m$1.larger())),"load factor must be positive: \'loadFactor>0.0\' at Hashtable.ceylon (38:11-38:26)",'37:4-38:27','Hashtable.ceylon');
m$1.asrt$(((hashtable$.growthFactor.compare(m$1.Float(1.0))!==m$1.smaller())),"growth factor must be at least 1.0: \'growthFactor>=1.0\' at Hashtable.ceylon (41:11-41:29)",'40:4-41:30','Hashtable.ceylon');
return hashtable$;
}
Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
if(Hashtable.$$===undefined){
m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
(function(hashtable$){
m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
hashtable$.rehash=function($hw,$hx){var hashtable$=this;
return (($hw>$hx.times(hashtable$.loadFactor).integer)&&(hashtable$.capacity($hw)>$hx));};
hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
hashtable$.capacity=function($hy){var hashtable$=this;
return hashtable$.$1dkeuw$hz($hy.times(hashtable$.growthFactor).integer);};
hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
hashtable$.initialCapacityForSize=function($i0){var hashtable$=this;
return hashtable$.$1dkeuw$hz(largest(hashtable$.initialCapacity,$i0.divided(hashtable$.loadFactor).plus(1).integer));};
hashtable$.initialCapacityForSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForSize']};};
hashtable$.initialCapacityForUnknownSize=function(){var hashtable$=this;
return hashtable$.$1dkeuw$hz(hashtable$.initialCapacity);};
hashtable$.initialCapacityForUnknownSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForUnknownSize']};};
hashtable$.$1dkeuw$hz=function($i1){
var hashtable$=this;
var $i2=$i1.minus(1);
$i2=$i2.rightLogicalShift(1).or($i2);
$i2=$i2.rightLogicalShift(2).or($i2);
$i2=$i2.rightLogicalShift(4).or($i2);
$i2=$i2.rightLogicalShift(8).or($i2);
$i2=$i2.rightLogicalShift(16).or($i2);
if(($i2<0)){
return 1;
}
else{
if(($i2>=maximumCapacity())){
return maximumCapacity();
}
else{
return $i2.plus(1);
}
}
};hashtable$.$1dkeuw$hz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,d:['ceylon.collection','Hashtable','$m','powerOf2$bh7ri4']};};
})(Hashtable.$$.prototype);
}
return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;
$init$Hashtable();
var $i3;function $valinit$$i3(){if($i3===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'maximumCapacity\' before it was set"),'77:0-77:48','Hashtable.ceylon');
if($i3===undefined){$i3=m$1.INIT$;$i3=(1).leftLogicalShift(30)};return $i3;};
function maximumCapacity(){return $valinit$$i3();}
var $prop$getMaximumCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},d:['ceylon.collection','maximumCapacity']};}};
ex$.$prop$getMaximumCapacity=$prop$getMaximumCapacity;
$prop$getMaximumCapacity.get=maximumCapacity;
function IdentityMap($1dkeuw$i4,$1dkeuw$i5,$$targs$$,identityMap$){
$init$IdentityMap();
if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,$$targs$$);
if($1dkeuw$i4===undefined){$1dkeuw$i4=Hashtable();}
identityMap$.$1dkeuw$i4_=$1dkeuw$i4;
if($1dkeuw$i5===undefined){$1dkeuw$i5=m$1.empty();}
identityMap$.$1dkeuw$i5_=$1dkeuw$i5;
m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap,Key$Correspondence:$$targs$$.Key$IdentityMap},identityMap$);
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap,Key$Entry:$$targs$$.Key$IdentityMap}},Absent$Iterable:{t:m$1.Null}},identityMap$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap,Key$Entry:$$targs$$.Key$IdentityMap}}},identityMap$);
identityMap$.$1dkeuw$i6_=entryStore(identityMap$.$1dkeuw$i4.initialCapacity,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
identityMap$.$1dkeuw$i7_=(0);
var $i9;for(var $i8=$1dkeuw$i5.iterator();($i9=$i8.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$ia(identityMap$.$1dkeuw$i6,$i9)){
($ib=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$ib.successor,$ib);
var $ib;
}
}
identityMap$.$1dkeuw$ic();
return identityMap$;
}
IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
if(IdentityMap.$$===undefined){
m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
(function(identityMap$){
m$1.atr$(identityMap$,'$1dkeuw$i4',function(){return this.$1dkeuw$i4_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
m$1.atr$(identityMap$,'$1dkeuw$i5',function(){return this.$1dkeuw$i5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
m$1.atr$(identityMap$,'$1dkeuw$i6',function(){return this.$1dkeuw$i6_;},function($id){return this.$1dkeuw$i6_=$id;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
m$1.atr$(identityMap$,'$1dkeuw$i7',function(){return this.$1dkeuw$i7_;},function($ie){return this.$1dkeuw$i7_=$ie;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
identityMap$.$1dkeuw$if=function($ig,$ih){var identityMap$=this;
return m$1.identityHash($ig).remainder($ih.size).magnitude;};
identityMap$.$1dkeuw$if.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
identityMap$.$1dkeuw$ia=function($ii,$ij){
var identityMap$=this;
var $ik=identityMap$.$1dkeuw$if($ij.key,$ii);
var $il=$ii.$_get($ik);
var $im;
while(m$1.nn$(($im=$il))){
if(($im.element.key===$ij.key)){
($im.element=$ij);
return false;
}
$il=$im.rest;
}
$ii.set($ik,Cell($ij,$ii.$_get($ik),{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}}));
return true;
};identityMap$.$1dkeuw$ia.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
identityMap$.$1dkeuw$ic=function(){
var identityMap$=this;
if(identityMap$.$1dkeuw$i4.rehash(identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i6.size)){
var $in=entryStore(identityMap$.$1dkeuw$i4.capacity(identityMap$.$1dkeuw$i7),{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
var $io=(0);
while(($io<identityMap$.$1dkeuw$i6.size)){
var $ip=identityMap$.$1dkeuw$i6.$_get($io);
var $iq;
while(m$1.nn$(($iq=$ip))){
$ip=$iq.rest;
var $ir=identityMap$.$1dkeuw$if($iq.element.key,$in);
var $is=$in.$_get($ir);
var $it;
while(m$1.nn$(($it=($iu=$is,m$1.nn$($iu)?$iu.rest:null)))){
$is=$it;
}
var $iu;
($iq.rest=$is);
$in.set($ir,$iq);
}
($iv=$io,$io=$iv.successor,$iv);
var $iv;
}
identityMap$.$1dkeuw$i6=$in;
}
};identityMap$.$1dkeuw$ic.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
identityMap$.put=function($iw,$ix){
var identityMap$=this;
var $iy=identityMap$.$1dkeuw$if($iw,identityMap$.$1dkeuw$i6);
var $iz=m$1.Entry($iw,$ix,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap});
var $j0=identityMap$.$1dkeuw$i6.$_get($iy);
var $j1;
while(m$1.nn$(($j1=$j0))){
if(($j1.element.key===$iw)){
var $j2=$j1.element.item;
($j1.element=$iz);
return $j2;
}
$j0=$j1.rest;
}
identityMap$.$1dkeuw$i6.set($iy,Cell($iz,identityMap$.$1dkeuw$i6.$_get($iy),{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}}));
($j3=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$j3.successor,$j3);
var $j3;
identityMap$.$1dkeuw$ic();
return null;
};identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
identityMap$.putAll=function($j4){
var identityMap$=this;
var $j6;for(var $j5=$j4.iterator();($j6=$j5.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$ia(identityMap$.$1dkeuw$i6,$j6)){
($j7=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$j7.successor,$j7);
var $j7;
}
}
identityMap$.$1dkeuw$ic();
};identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
identityMap$.replaceEntry=function($j8,$j9,$ja){
var identityMap$=this;
var $jb=identityMap$.$1dkeuw$if($j8,identityMap$.$1dkeuw$i6);
var $jc=identityMap$.$1dkeuw$i6.$_get($jb);
var $jd;
while(m$1.nn$(($jd=$jc))){
if(($jd.element.key===$j8)){
var $je;
if(m$1.nn$(($je=$jd.element.item))&&$je.equals($j9)){
($jd.element=m$1.Entry($j8,$ja,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}));
return true;
}
else{
return false;
}
}
$jc=$jd.rest;
}
return false;
};identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
identityMap$.remove=function($jf){
var identityMap$=this;
var $jg=identityMap$.$1dkeuw$if($jf,identityMap$.$1dkeuw$i6);
var $jh;
if(m$1.nn$(($jh=identityMap$.$1dkeuw$i6.$_get($jg)))&&($jh.element.key===$jf)){
identityMap$.$1dkeuw$i6.set($jg,$jh.rest);
($ji=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$ji.predecessor,$ji);
var $ji;
return $jh.element.item;
}
var $jj=identityMap$.$1dkeuw$i6.$_get($jg);
var $jk;
while(m$1.nn$(($jk=$jj))){
var $jl=$jk.rest;
var $jm;
if(m$1.nn$(($jm=$jl))&&($jm.element.key===$jf)){
($jk.rest=$jm.rest);
($jn=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$jn.predecessor,$jn);
var $jn;
return $jm.element.item;
}
else{
$jj=$jl;
}
}
return null;
};identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
identityMap$.removeAll=function($jo){
var identityMap$=this;
var $jq;for(var $jp=$jo.iterator();($jq=$jp.next())!==m$1.finished();){
identityMap$.remove($jq);
}
};identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Key$IdentityMap',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
identityMap$.removeEntry=function($jr,$js){
var identityMap$=this;
var $jt=identityMap$.$1dkeuw$if($jr,identityMap$.$1dkeuw$i6);
var $ju;
while(m$1.nn$(($ju=identityMap$.$1dkeuw$i6.$_get($jt)))&&($ju.element.key===$jr)){
var $jv;
if(m$1.nn$(($jv=$ju.element.item))&&$jv.equals($js)){
identityMap$.$1dkeuw$i6.set($jt,$ju.rest);
($jw=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$jw.predecessor,$jw);
var $jw;
return true;
}
else{
return false;
}
}
var $jx=identityMap$.$1dkeuw$i6.$_get($jt);
var $jy;
while(m$1.nn$(($jy=$jx))){
var $jz=$jy.rest;
var $k0;
if(m$1.nn$(($k0=$jz))&&($k0.element.key===$jr)){
var $k1;
if(m$1.nn$(($k1=$k0.element.item))&&$k1.equals($js)){
($jy.rest=$k0.rest);
($k2=identityMap$.$1dkeuw$i7,identityMap$.$1dkeuw$i7=$k2.predecessor,$k2);
var $k2;
return true;
}
else{
return false;
}
}
else{
$jx=$jz;
}
}
return false;
};identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
identityMap$.clear=function(){
var identityMap$=this;
var $k3=(0);
while(($k3<identityMap$.$1dkeuw$i6.size)){
identityMap$.$1dkeuw$i6.set(($k4=$k3,$k3=$k4.successor,$k4),null);
var $k4;
}
identityMap$.$1dkeuw$i7=(0);
};identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
m$1.atr$(identityMap$,'size',function(){
var identityMap$=this;
return identityMap$.$1dkeuw$i7;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
identityMap$.$_get=function($k5){
var identityMap$=this;
if(identityMap$.empty){
return null;
}
var $k6=identityMap$.$1dkeuw$if($k5,identityMap$.$1dkeuw$i6);
var $k7=identityMap$.$1dkeuw$i6.$_get($k6);
var $k8;
while(m$1.nn$(($k8=$k7))){
if(($k8.element.key===$k5)){
return $k8.element.item;
}
$k7=$k8.rest;
}
return null;
};identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
identityMap$.iterator=function(){var identityMap$=this;
return StoreIterator(identityMap$.$1dkeuw$i6,{Element$StoreIterator:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}});};identityMap$.count=function($k9){
var identityMap$=this;
var $ka=(0);
var $kb=(0);
while(($ka<identityMap$.$1dkeuw$i6.size)){
var $kc=identityMap$.$1dkeuw$i6.$_get($ka);
var $kd;
while(m$1.nn$(($kd=$kc))){
if($k9($kd.element)){
($ke=$kb,$kb=$ke.successor,$ke);
var $ke;
}
$kc=$kd.rest;
}
($kf=$ka,$ka=$kf.successor,$kf);
var $kf;
}
return $kb;
};identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
identityMap$.each=function($kg){
var identityMap$=this;
identityMap$.$1dkeuw$i6.each(m$1.$JsCallable((function($kh){
var $ki=$kh;
$prop$get$ki={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]},$cont:identityMap$.each,pa:1027,d:['ceylon.collection','IdentityMap','$m','each','$at','iter$4io6c']};}};
$prop$get$ki.get=function(){return $ki};
var $kj;
while(m$1.nn$(($kj=$ki))){
$kg($kj.element);
$ki=$kj.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.Item$IdentityMap,Key$Entry:identityMap$.Key$IdentityMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}}}])]),Return$Callable:{t:m$1.Anything}}));
};identityMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','each']};};
m$1.atr$(identityMap$,'hash',function(){
var identityMap$=this;
var $kk=(0);
var $kl=(17);
while(($kk<identityMap$.$1dkeuw$i6.size)){
var $km=identityMap$.$1dkeuw$i6.$_get($kk);
var $kn;
while(m$1.nn$(($kn=$km))){
$kl=$kl.times(31).plus(m$1.identityHash($kn.element.key)).times(31);
var $ko;
if(m$1.nn$(($ko=$kn.element.item))){
($kl=$kl.plus($ko.hash));
}
$km=$kn.rest;
}
($kp=$kk,$kk=$kp.successor,$kp);
var $kp;
}
return $kl;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($kq){
var identityMap$=this;
var $kr;
if(m$1.is$(($kr=$kq),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&((identityMap$.size).valueOf()==($kr.size).valueOf())){
var $ks=(0);
while(($ks<identityMap$.$1dkeuw$i6.size)){
var $kt=identityMap$.$1dkeuw$i6.$_get($ks);
var $ku;
while(m$1.nn$(($ku=$kt))){
var $kv=$kr.$_get($ku.element.key);
var $kw;
if(m$1.nn$(($kw=$ku.element.item))){
var $kx;
if(m$1.nn$(($kx=$kv))){
if((!$kx.equals($kw))){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($kv)){
return false;
}
}
$kt=$ku.rest;
}
($ky=$ks,$ks=$ky.successor,$ky);
var $ky;
}
return true;
}
return false;
};identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
identityMap$.clone=function(){
var identityMap$=this;
var $kz=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
($kz.$1dkeuw$i7=identityMap$.$1dkeuw$i7);
($kz.$1dkeuw$i6=entryStore(identityMap$.$1dkeuw$i6.size,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap}));
var $l0=(0);
while(($l0<identityMap$.$1dkeuw$i6.size)){
var $l1;
if(m$1.nn$(($l1=identityMap$.$1dkeuw$i6.$_get($l0)))){
$kz.$1dkeuw$i6.set($l0,$l1.clone());
}
($l2=$l0,$l0=$l2.successor,$l2);
var $l2;
}
return $kz;
};identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
identityMap$.defines=function($l3){
var identityMap$=this;
var $l4=(0);
while(($l4<identityMap$.$1dkeuw$i6.size)){
var $l5=identityMap$.$1dkeuw$i6.$_get($l4);
var $l6;
while(m$1.nn$(($l6=$l5))){
if(($l6.element.key===$l3)){
return true;
}
$l5=$l6.rest;
}
($l7=$l4,$l4=$l7.successor,$l7);
var $l7;
}
return false;
};identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
identityMap$.contains=function($l8){
var identityMap$=this;
var $l9=(0);
while(($l9<identityMap$.$1dkeuw$i6.size)){
var $la=identityMap$.$1dkeuw$i6.$_get($l9);
var $lb;
while(m$1.nn$(($lb=$la))){
var $lc;
if(m$1.nn$(($lc=$lb.element.item))&&$lc.equals($l8)){
return true;
}
$la=$lb.rest;
}
($ld=$l9,$l9=$ld.successor,$ld);
var $ld;
}
return false;
};identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
})(IdentityMap.$$.prototype);
}
return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;
$init$IdentityMap();
function IdentitySet($1dkeuw$le,$1dkeuw$lf,$$targs$$,identitySet$){
$init$IdentitySet();
if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,$$targs$$);
if($1dkeuw$le===undefined){$1dkeuw$le=Hashtable();}
identitySet$.$1dkeuw$le_=$1dkeuw$le;
if($1dkeuw$lf===undefined){$1dkeuw$lf=m$1.empty();}
identitySet$.$1dkeuw$lf_=$1dkeuw$lf;
m$1.Iterable({Element$Iterable:$$targs$$.Element$IdentitySet,Absent$Iterable:{t:m$1.Null}},identitySet$);
m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet},identitySet$);
identitySet$.$1dkeuw$lg_=elementStore(identitySet$.$1dkeuw$le.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
identitySet$.$1dkeuw$lh_=(0);
var $lj;for(var $li=$1dkeuw$lf.iterator();($lj=$li.next())!==m$1.finished();){
if(identitySet$.$1dkeuw$lk(identitySet$.$1dkeuw$lg,$lj)){
($ll=identitySet$.$1dkeuw$lh,identitySet$.$1dkeuw$lh=$ll.successor,$ll);
var $ll;
}
}
identitySet$.$1dkeuw$lm();
return identitySet$;
}
IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
if(IdentitySet.$$===undefined){
m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
(function(identitySet$){
m$1.atr$(identitySet$,'$1dkeuw$le',function(){return this.$1dkeuw$le_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
m$1.atr$(identitySet$,'$1dkeuw$lf',function(){return this.$1dkeuw$lf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
m$1.atr$(identitySet$,'$1dkeuw$lg',function(){return this.$1dkeuw$lg_;},function($ln){return this.$1dkeuw$lg_=$ln;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
m$1.atr$(identitySet$,'$1dkeuw$lh',function(){return this.$1dkeuw$lh_;},function($lo){return this.$1dkeuw$lh_=$lo;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
identitySet$.$1dkeuw$lp=function($lq,$lr){var identitySet$=this;
return m$1.identityHash($lq).remainder($lr.size).magnitude;};
identitySet$.$1dkeuw$lp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
identitySet$.$1dkeuw$lk=function($ls,$lt){
var identitySet$=this;
var $lu=identitySet$.$1dkeuw$lp($lt,$ls);
var $lv=$ls.$_get($lu);
var $lw;
while(m$1.nn$(($lw=$lv))){
if(($lw.element===$lt)){
($lw.element=$lt);
return false;
}
$lv=$lw.rest;
}
$ls.set($lu,Cell($lt,$ls.$_get($lu),{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}));
return true;
};identitySet$.$1dkeuw$lk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
identitySet$.$1dkeuw$lm=function(){
var identitySet$=this;
if(identitySet$.$1dkeuw$le.rehash(identitySet$.$1dkeuw$lh,identitySet$.$1dkeuw$lg.size)){
var $lx=elementStore(identitySet$.$1dkeuw$le.capacity(identitySet$.$1dkeuw$lh),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
var $ly=(0);
while(($ly<identitySet$.$1dkeuw$lg.size)){
var $lz=identitySet$.$1dkeuw$lg.$_get($ly);
var $m0;
while(m$1.nn$(($m0=$lz))){
$lz=$m0.rest;
var $m1=identitySet$.$1dkeuw$lp($m0.element,$lx);
var $m2=$lx.$_get($m1);
var $m3;
while(m$1.nn$(($m3=($m4=$m2,m$1.nn$($m4)?$m4.rest:null)))){
$m2=$m3;
}
var $m4;
($m0.rest=$m2);
$lx.set($m1,$m0);
}
($m5=$ly,$ly=$m5.successor,$m5);
var $m5;
}
identitySet$.$1dkeuw$lg=$lx;
}
};identitySet$.$1dkeuw$lm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
identitySet$.add=function($m6){
var identitySet$=this;
if(identitySet$.$1dkeuw$lk(identitySet$.$1dkeuw$lg,$m6)){
($m7=identitySet$.$1dkeuw$lh,identitySet$.$1dkeuw$lh=$m7.successor,$m7);
var $m7;
identitySet$.$1dkeuw$lm();
return true;
}
return false;
};identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
identitySet$.addAll=function($m8){
var identitySet$=this;
var $m9=false;
var $mb;for(var $ma=$m8.iterator();($mb=$ma.next())!==m$1.finished();){
($m9=$m9||identitySet$.add($mb));
}
if($m9){
identitySet$.$1dkeuw$lm();
}
return $m9;
};identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
identitySet$.remove=function($mc){
var identitySet$=this;
var $md=identitySet$.$1dkeuw$lp($mc,identitySet$.$1dkeuw$lg);
var $me;
if(m$1.nn$(($me=identitySet$.$1dkeuw$lg.$_get($md)))&&($me.element===$mc)){
identitySet$.$1dkeuw$lg.set($md,$me.rest);
($mf=identitySet$.$1dkeuw$lh,identitySet$.$1dkeuw$lh=$mf.predecessor,$mf);
var $mf;
return true;
}
var $mg=identitySet$.$1dkeuw$lg.$_get($md);
var $mh;
while(m$1.nn$(($mh=$mg))){
var $mi=$mh.rest;
var $mj;
if(m$1.nn$(($mj=$mi))&&($mj.element===$mc)){
($mh.rest=$mj.rest);
($mk=identitySet$.$1dkeuw$lh,identitySet$.$1dkeuw$lh=$mk.predecessor,$mk);
var $mk;
return true;
}
else{
$mg=$mi;
}
}
return false;
};identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
identitySet$.removeAll=function($ml){
var identitySet$=this;
var $mm=false;
var $mo;for(var $mn=$ml.iterator();($mo=$mn.next())!==m$1.finished();){
if(identitySet$.remove($mo)){
$mm=true;
}
}
return $mm;
};identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
identitySet$.clear=function(){
var identitySet$=this;
var $mp=(0);
while(($mp<identitySet$.$1dkeuw$lg.size)){
identitySet$.$1dkeuw$lg.set(($mq=$mp,$mp=$mq.successor,$mq),null);
var $mq;
}
identitySet$.$1dkeuw$lh=(0);
};identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
m$1.atr$(identitySet$,'size',function(){
var identitySet$=this;
return identitySet$.$1dkeuw$lh;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
identitySet$.iterator=function(){var identitySet$=this;
return StoreIterator(identitySet$.$1dkeuw$lg,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});};identitySet$.count=function($mr){
var identitySet$=this;
var $ms=(0);
var $mt=(0);
while(($mt<identitySet$.$1dkeuw$lg.size)){
var $mu=identitySet$.$1dkeuw$lg.$_get($mt);
var $mv;
while(m$1.nn$(($mv=$mu))){
if($mr($mv.element)){
($mw=$ms,$ms=$mw.successor,$mw);
var $mw;
}
$mu=$mv.rest;
}
($mx=$mt,$mt=$mx.successor,$mx);
var $mx;
}
return $ms;
};identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
identitySet$.each=function($my){
var identitySet$=this;
identitySet$.$1dkeuw$lg.each(m$1.$JsCallable((function($mz){
var $n0=$mz;
$prop$get$n0={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.each,pa:1027,d:['ceylon.collection','IdentitySet','$m','each','$at','iter$sd0mqa']};}};
$prop$get$n0.get=function(){return $n0};
var $n1;
while(m$1.nn$(($n1=$n0))){
$my($n1.element);
$n0=$n1.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.Element$IdentitySet}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}])]),Return$Callable:{t:m$1.Anything}}));
};identitySet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','each']};};
m$1.atr$(identitySet$,'hash',function(){
var identitySet$=this;
var $n2=(0);
var $n3=(17);
while(($n2<identitySet$.$1dkeuw$lg.size)){
var $n4=identitySet$.$1dkeuw$lg.$_get($n2);
var $n5;
while(m$1.nn$(($n5=$n4))){
$n3=$n3.times(31).plus(m$1.identityHash($n5));
$n4=$n5.rest;
}
($n6=$n2,$n2=$n6.successor,$n6);
var $n6;
}
return $n3;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($n7){
var identitySet$=this;
var $n8;
if(m$1.is$(($n8=$n7),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&((identitySet$.size).valueOf()==($n8.size).valueOf())){
var $n9=(0);
while(($n9<identitySet$.$1dkeuw$lg.size)){
var $na=identitySet$.$1dkeuw$lg.$_get($n9);
var $nb;
while(m$1.nn$(($nb=$na))){
if(!$n8.contains($nb.element)){
return false;
}
$na=$nb.rest;
}
($nc=$n9,$n9=$nc.successor,$nc);
var $nc;
}
return true;
}
return false;
};identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
identitySet$.clone=function(){
var identitySet$=this;
var $nd=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
($nd.$1dkeuw$lh=identitySet$.$1dkeuw$lh);
($nd.$1dkeuw$lg=elementStore(identitySet$.$1dkeuw$lg.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
var $ne=(0);
while(($ne<identitySet$.$1dkeuw$lg.size)){
var $nf;
if(m$1.nn$(($nf=identitySet$.$1dkeuw$lg.$_get($ne)))){
$nd.$1dkeuw$lg.set($ne,$nf.clone());
}
($ng=$ne,$ne=$ng.successor,$ng);
var $ng;
}
return $nd;
};identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
identitySet$.contains=function($nh){
var identitySet$=this;
var $ni;
if(m$1.is$(($ni=$nh),{t:m$1.Identifiable})){
var $nj=(0);
while(($nj<identitySet$.$1dkeuw$lg.size)){
var $nk=identitySet$.$1dkeuw$lg.$_get($nj);
var $nl;
while(m$1.nn$(($nl=$nk))){
if(($nl.element===$ni)){
return true;
}
$nk=$nl.rest;
}
($nm=$nj,$nj=$nm.successor,$nm);
var $nm;
}
}
return false;
};identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
identitySet$.superset=function($nn,$1dp37t$){
var identitySet$=this;
var $np;for(var $no=$nn.iterator();($np=$no.next())!==m$1.finished();){
if(!identitySet$.contains($np)){
return false;
}
}
if(m$1.finished()===$np){
return true;
}
};identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
identitySet$.subset=function($nq,$emo084$){
var identitySet$=this;
var $ns;for(var $nr=identitySet$.iterator();($ns=$nr.next())!==m$1.finished();){
if(!$nq.contains($ns)){
return false;
}
}
if(m$1.finished()===$ns){
return true;
}
};identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
identitySet$.complement=function($nt,$3sj2l4$){
var identitySet$=this;
var $nu=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
var $nw;for(var $nv=identitySet$.iterator();($nw=$nv.next())!==m$1.finished();){
if(!$nt.contains($nw)){
$nu.add($nw);
}
}
return $nu;
};identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
identitySet$.exclusiveUnion=function($nx,$iggrmb$){
var identitySet$=this;
var $ny=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$iggrmb$.Other$exclusiveUnion])});
var $o0;for(var $nz=identitySet$.iterator();($o0=$nz.next())!==m$1.finished();){
if(!$nx.contains($o0)){
$ny.add($o0);
}
}
var $o2;for(var $o1=$nx.iterator();($o2=$o1.next())!==m$1.finished();){
if(!identitySet$.contains($o2)){
$ny.add($o2);
}
}
return $ny;
};identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
identitySet$.intersection=function($o3,$94cc1h$){
var identitySet$=this;
var $o4=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mit$([identitySet$.$$targs$$.Element$IdentitySet,$94cc1h$.Other$intersection])});
var $o6;for(var $o5=identitySet$.iterator();($o6=$o5.next())!==m$1.finished();){
var $o7;
if($o3.contains($o6)&&m$1.is$(($o7=$o6),$94cc1h$.Other$intersection,$94cc1h$)){
$o4.add($o7);
}
}
return $o4;
};identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
identitySet$.union=function($o8,$mewmlv$){
var identitySet$=this;
var $o9=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$mewmlv$.Other$union])});
$o9.addAll(identitySet$);
$o9.addAll($o8);
return $o9;
};identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
})(IdentitySet.$$.prototype);
}
return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;
$init$IdentitySet();
function invert($oa,$av0mdq$){
var $ob=HashMap(undefined,undefined,undefined,{Key$HashMap:$av0mdq$.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}});
var $od;for(var $oc=$oa.iterator();($od=$oc.next())!==m$1.finished();){
var $oe=$od.key,$of=$od.item;
var $og;
if(m$1.nn$(($og=$ob.$_get($of)))){
$og.add($oe);
}
else{
var $oh=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$av0mdq$.Key$invert});
$oh.add($oe);
$ob.put($of,$oh);
}
}
function $oi($oj,$ok){
var $ol;
m$1.asrt$((m$1.is$(($ol=$ok.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert}})),"Assertion failed: \'is [Key+] result = sa.sequence()\' at invert.ceylon (21:14-21:47)",'21:8-21:48','invert.ceylon');
return $ol;
};$oi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}},ps:[{nm:'item',mt:'prm',$t:'Item$invert'},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Key$invert'}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
return $ob.mapItems(m$1.JsCallable(0,$oi),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function LinkedCell($1dkeuw$om,$1dkeuw$on,previous,$$targs$$,linkedCell$){
$init$LinkedCell();
if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,$$targs$$);
linkedCell$.$1dkeuw$om_=$1dkeuw$om;
linkedCell$.$1dkeuw$on_=$1dkeuw$on;
linkedCell$.previous_=previous;
Cell($1dkeuw$om,$1dkeuw$on,{Element$Cell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
linkedCell$.$1dkeuw$oo_=null;
return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Cell,a:{Element$Cell:'Element$LinkedCell'}},ps:[{nm:'car',mt:'prm',$t:'Element$LinkedCell'},{nm:'cdr',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
ex$.LinkedCell=LinkedCell;
function $init$LinkedCell(){
if(LinkedCell.$$===undefined){
m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$Cell());
(function(linkedCell$){
m$1.atr$(linkedCell$,'$1dkeuw$om',function(){return this.$1dkeuw$om_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','car$c10yed']};});
m$1.atr$(linkedCell$,'$1dkeuw$on',function(){return this.$1dkeuw$on_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','cdr$c13omy']};});
m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($op){return this.previous_=$op;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
m$1.atr$(linkedCell$,'next',function(){return this.$1dkeuw$oo_;},function($oq){return this.$1dkeuw$oo_=$oq;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
})(LinkedCell.$$.prototype);
}
return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;
$init$LinkedCell();
function LinkedCellIterator($1dkeuw$or,$$targs$$,linkedCellIterator$){
$init$LinkedCellIterator();
if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
m$1.set_type_args(linkedCellIterator$,$$targs$$);
linkedCellIterator$.$1dkeuw$or_=$1dkeuw$or;
m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator},linkedCellIterator$);
return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
ex$.LinkedCellIterator=LinkedCellIterator;
function $init$LinkedCellIterator(){
if(LinkedCellIterator.$$===undefined){
m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
(function(linkedCellIterator$){
m$1.atr$(linkedCellIterator$,'$1dkeuw$or',function(){return this.$1dkeuw$or_;},function($os){return this.$1dkeuw$or_=$os;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
linkedCellIterator$.next=function(){
var linkedCellIterator$=this;
var $ot;
if(m$1.nn$(($ot=linkedCellIterator$.$1dkeuw$or))){
linkedCellIterator$.$1dkeuw$or=$ot.next;
return $ot.element;
}
return m$1.finished();
};linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
})(LinkedCellIterator.$$.prototype);
}
return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;
$init$LinkedCellIterator();
function LinkedList$$c($$targs$$,linkedList$){
m$1.set_type_args(linkedList$,$$targs$$);
MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
}
function LinkedList(){return LinkedList_$c$.apply(undefined,arguments);}
function LinkedList_$c$$$a($ou,$$targs$$,linkedList$){
if($ou===undefined){$ou=m$1.empty();}
linkedList$.$1dkeuw$ov_=null;
linkedList$.$1dkeuw$ow_=null;
linkedList$.$1dkeuw$ox_=(0);
var $oz;for(var $oy=$ou.iterator();($oz=$oy.next())!==m$1.finished();){
linkedList$.$1dkeuw$p0($oz);
}
return linkedList$;
};
function LinkedList_$c$($ou,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
if($ou===undefined){$ou=m$1.empty();}
LinkedList$$c($$targs$$,linkedList$);
LinkedList_$c$$$a($ou,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:$def')];},d:['ceylon.collection','LinkedList','$cn','$def']};};
LinkedList.LinkedList_$c$=LinkedList_$c$;
ex$.LinkedList_$c$=LinkedList_$c$;
function LinkedList_copy$$a($p1,$$targs$$,linkedList$){
linkedList$.$1dkeuw$ov_=null;
linkedList$.$1dkeuw$ow_=null;
linkedList$.$1dkeuw$ox_=(0);
var $p2=$p1.$1dkeuw$ov;
$prop$get$p2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$cn','copy','$at','iter$vnorsk']};}};
$prop$get$p2.get=function(){return $p2};
var $p3;
while(m$1.nn$(($p3=$p2))){
linkedList$.$1dkeuw$p0($p3.element);
$p2=$p3.rest;
}
return linkedList$;
};
function LinkedList_copy($p1,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
LinkedList$$c($$targs$$,linkedList$);
LinkedList_copy$$a($p1,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'linkedList',mt:'prm',$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},an:function(){return[m$1.doc("The `LinkedList` to copy.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:copy')];},d:['ceylon.collection','LinkedList','$cn','copy']};};
LinkedList.LinkedList_copy=LinkedList_copy;
ex$.LinkedList_copy=LinkedList_copy;
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
if(LinkedList.$$===undefined){
m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
(function(linkedList$){
m$1.atr$(linkedList$,'$1dkeuw$ov',function(){return this.$1dkeuw$ov_;},function($p4){return this.$1dkeuw$ov_=$p4;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
m$1.atr$(linkedList$,'$1dkeuw$ow',function(){return this.$1dkeuw$ow_;},function($p5){return this.$1dkeuw$ow_=$p5;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
m$1.atr$(linkedList$,'$1dkeuw$ox',function(){return this.$1dkeuw$ox_;},function($p6){return this.$1dkeuw$ox_=$p6;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
linkedList$.$1dkeuw$p0=function($p7){
var linkedList$=this;
var $p8=Cell($p7,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
var $p9;
if(m$1.nn$(($p9=linkedList$.$1dkeuw$ow))){
($p9.rest=$p8);
linkedList$.$1dkeuw$ow=$p8;
}
else{
linkedList$.$1dkeuw$ow=(linkedList$.$1dkeuw$ov=$p8);
}
($pa=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$pa.successor,$pa);
var $pa;
};linkedList$.$1dkeuw$p0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
linkedList$.set=function($pb,$pc){
var linkedList$=this;
m$1.asrt$((($pd=$pb,$pd.compare((0))!==m$1.smaller()&&$pd.compare(linkedList$.$1dkeuw$ox)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at LinkedList.ceylon (61:15-61:31)",'59:8-61:32','LinkedList.ceylon');
var $pe=linkedList$.$1dkeuw$ov;
var $pf=(0);
var $pg;
while(m$1.nn$(($pg=$pe))){
if(((($ph=$pf,$pf=$ph.successor,$ph)).valueOf()==($pb).valueOf())){
($pg.element=$pc);
return;
}
var $ph;
$pe=$pg.rest;
}
};linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
linkedList$.insert=function($pi,$pj){
var linkedList$=this;
m$1.asrt$((($pk=$pi,$pk.compare((0))!==m$1.smaller()&&$pk.compare(linkedList$.$1dkeuw$ox)!==m$1.larger())),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (77:15-77:32)",'75:8-77:33','LinkedList.ceylon');
if((($pi).valueOf()==(linkedList$.$1dkeuw$ox).valueOf())){
linkedList$.add($pj);
}
else{
if((($pi).valueOf()==(0).valueOf())){
linkedList$.$1dkeuw$ov=Cell($pj,linkedList$.$1dkeuw$ov,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
($pl=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$pl.successor,$pl);
var $pl;
}
else{
var $pm=linkedList$.$1dkeuw$ov;
var $pn=(0);
var $po;
while(m$1.nn$(($po=$pm))){
var $pp=$po.rest;
if(((($pn=$pn.successor)).valueOf()==($pi).valueOf())){
($po.rest=Cell($pj,$pp,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
($pq=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$pq.successor,$pq);
var $pq;
return;
}
$pm=$pp;
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (99:23-99:29)",'99:16-99:30','LinkedList.ceylon');
}
}
};linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
linkedList$.insertAll=function($pr,$ps){
var linkedList$=this;
m$1.asrt$((($pt=$pr,$pt.compare((0))!==m$1.smaller()&&$pt.compare(linkedList$.$1dkeuw$ox)!==m$1.larger())),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (109:15-109:32)",'107:8-109:33','LinkedList.ceylon');
if((($pr).valueOf()==(linkedList$.$1dkeuw$ox).valueOf())){
linkedList$.addAll($ps);
}
else{
var $pu=m$1.$_Array($ps,{Element$Array:linkedList$.$$targs$$.Element$LinkedList});
$pu.reverseInPlace();
if((($pr).valueOf()==(0).valueOf())){
linkedList$.$1dkeuw$ov=$pu.fold(linkedList$.$1dkeuw$ov,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.$JsCallable((function($pv,$pw){return Cell($pw,$pv,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.Element$LinkedList}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]),Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList])}},Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}}));
(linkedList$.$1dkeuw$ox=linkedList$.$1dkeuw$ox.plus($pu.size));
}
else{
var $px=linkedList$.$1dkeuw$ov;
var $py=(0);
var $pz;
while(m$1.nn$(($pz=$px))){
var $q0=$pz.rest;
if(((($py=$py.successor)).valueOf()==($pr).valueOf())){
($pz.rest=$pu.fold($q0,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.$JsCallable((function($q1,$q2){return Cell($q2,$q1,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.Element$LinkedList}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]),Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList])}},Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}})));
(linkedList$.$1dkeuw$ox=linkedList$.$1dkeuw$ox.plus($pu.size));
return;
}
$px=$q0;
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (135:23-135:29)",'135:16-135:30','LinkedList.ceylon');
}
}
};linkedList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insertAll']};};
linkedList$.add=function($q3){var linkedList$=this;
return linkedList$.$1dkeuw$p0($q3);};
linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
linkedList$.addAll=function($q4){
var linkedList$=this;
var $q6;for(var $q5=$q4.iterator();($q6=$q5.next())!==m$1.finished();){
linkedList$.add($q6);
}
};linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
linkedList$.$_delete=function($q7){
var linkedList$=this;
if((($q7).valueOf()==(0).valueOf())){
var $q8;
if(m$1.nn$(($q8=linkedList$.$1dkeuw$ov))){
var $q9;
if(m$1.nn$(($q9=$q8.rest))){
linkedList$.$1dkeuw$ov=$q9;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
}
($qa=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$qa.predecessor,$qa);
var $qa;
return $q8.element;
}
else{
return null;
}
}
else{
if(($qb=$q7,$qb.compare((0))===m$1.larger()&&$qb.compare(linkedList$.$1dkeuw$ox)===m$1.smaller())){
var $qc=linkedList$.$1dkeuw$ov;
var $qd=(0);
var $qe;
while(m$1.nn$(($qe=$qc))){
var $qf=$qe.rest;
if(((($qd=$qd.successor)).valueOf()==($q7).valueOf())){
var $qg;
if(m$1.nn$(($qg=($qh=$qf,m$1.nn$($qh)?$qh.rest:null)))){
($qe.rest=$qg);
}
else{
linkedList$.$1dkeuw$ow=$qe;
($qe.rest=null);
}
var $qh;
($qi=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$qi.predecessor,$qi);
var $qi;
return ($qj=$qf,m$1.nn$($qj)?$qj.element:null);
var $qj;
}
else{
$qc=$qf;
}
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (187:19-187:25)",'187:12-187:26','LinkedList.ceylon');
}
else{
return null;
}
}
};linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
linkedList$.remove=function($qk){
var linkedList$=this;
var $ql=(0);
var $qm,$qn;
while(m$1.nn$(($qm=linkedList$.$1dkeuw$ov))&&m$1.nn$(($qn=$qm.element))&&$qn.equals($qk)){
var $qo;
if(m$1.nn$(($qo=$qm.rest))){
linkedList$.$1dkeuw$ov=$qo;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
}
($qp=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$qp.predecessor,$qp);
var $qp;
($qq=$ql,$ql=$qq.successor,$qq);
var $qq;
}
var $qr=linkedList$.$1dkeuw$ov;
var $qs;
while(m$1.nn$(($qs=$qr))){
var $qt=$qs.rest;
var $qu,$qv;
if(m$1.nn$(($qu=$qt))&&m$1.nn$(($qv=$qu.element))&&$qv.equals($qk)){
var $qw;
if(m$1.nn$(($qw=$qu.rest))){
($qs.rest=$qw);
}
else{
($qs.rest=(linkedList$.$1dkeuw$ow=null));
}
($qx=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$qx.predecessor,$qx);
var $qx;
($qy=$ql,$ql=$qy.successor,$qy);
var $qy;
}
else{
$qr=$qt;
}
}
return $ql;
};linkedList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','remove']};};
linkedList$.removeAll=function($qz){
var linkedList$=this;
var $r0=($r1=$qz,HashSet(undefined,undefined,$r1,{Element$HashSet:m$1.mit$([linkedList$.$$targs$$.Element$LinkedList,{t:m$1.$_Object}])}));
var $r1;
var $r2=(0);
var $r3,$r4;
while(m$1.nn$(($r3=linkedList$.$1dkeuw$ov))&&m$1.nn$(($r4=$r3.element))&&$r0.contains($r4)){
var $r5;
if(m$1.nn$(($r5=$r3.rest))){
linkedList$.$1dkeuw$ov=$r5;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
}
($r6=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$r6.predecessor,$r6);
var $r6;
($r7=$r2,$r2=$r7.successor,$r7);
var $r7;
}
var $r8=linkedList$.$1dkeuw$ov;
var $r9;
while(m$1.nn$(($r9=$r8))){
var $ra=$r9.rest;
var $rb,$rc;
if(m$1.nn$(($rb=$ra))&&m$1.nn$(($rc=$rb.element))&&$r0.contains($rc)){
var $rd;
if(m$1.nn$(($rd=$rb.rest))){
($r9.rest=$rd);
}
else{
($r9.rest=(linkedList$.$1dkeuw$ow=null));
}
($re=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$re.predecessor,$re);
var $re;
($rf=$r2,$r2=$rf.successor,$rf);
var $rf;
}
else{
$r8=$ra;
}
}
return $r2;
};linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
linkedList$.removeFirst=function($rg){
var linkedList$=this;
var $rh,$ri;
if(m$1.nn$(($rh=linkedList$.$1dkeuw$ov))&&m$1.nn$(($ri=$rh.element))&&$ri.equals($rg)){
var $rj;
if(m$1.nn$(($rj=$rh.rest))){
linkedList$.$1dkeuw$ov=$rj;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
}
($rk=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$rk.predecessor,$rk);
var $rk;
return true;
}
var $rl=linkedList$.$1dkeuw$ov;
var $rm;
while(m$1.nn$(($rm=$rl))){
var $rn=$rm.rest;
var $ro,$rp;
if(m$1.nn$(($ro=$rn))&&m$1.nn$(($rp=$ro.element))&&$rp.equals($rg)){
var $rq;
if(m$1.nn$(($rq=$ro.rest))){
($rm.rest=$rq);
}
else{
($rm.rest=(linkedList$.$1dkeuw$ow=null));
}
($rr=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$rr.predecessor,$rr);
var $rr;
return true;
}
$rl=$rn;
}
return false;
};linkedList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeFirst']};};
linkedList$.removeLast=function($rs){
var linkedList$=this;
var $rt=null;
var $ru,$rv;
while(m$1.nn$(($ru=linkedList$.$1dkeuw$ov))&&m$1.nn$(($rv=$ru.element))&&$rv.equals($rs)){
var $rw;
if(m$1.nn$(($rw=$ru.rest))){
$rt=$ru;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
($rx=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$rx.predecessor,$rx);
var $rx;
return true;
}
}
var $ry=linkedList$.$1dkeuw$ov;
var $rz;
while(m$1.nn$(($rz=$ry))){
var $s0=$rz.rest;
var $s1,$s2;
if(m$1.nn$(($s1=$s0))&&m$1.nn$(($s2=$s1.element))&&$s2.equals($rs)){
var $s3;
if(m$1.nn$(($s3=$s1.rest))){
$rt=$rz;
}
else{
($rz.rest=(linkedList$.$1dkeuw$ow=null));
($s4=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$s4.predecessor,$s4);
var $s4;
return true;
}
}
else{
$ry=$s0;
}
}
var $s5;
if(m$1.nn$(($s5=$rt))){
var $s6;
m$1.asrt$((m$1.nn$(($s6=linkedList$.$1dkeuw$ov))),"Assertion failed: \'exists cell=head\' at LinkedList.ceylon (338:19-338:36)",'338:12-338:37','LinkedList.ceylon');
if(($s5===$s6)){
linkedList$.$1dkeuw$ov=$s5.rest;
}
else{
var $s7;
m$1.asrt$((m$1.nn$(($s7=($s8=$s5.rest,m$1.nn$($s8)?$s8.rest:null)))),"Assertion failed: \'exists more = last.rest?.rest\' at LinkedList.ceylon (343:23-343:53)",'343:16-343:54','LinkedList.ceylon');
var $s8;
($s6.rest=$s7);
}
($s9=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$s9.predecessor,$s9);
var $s9;
return true;
}
else{
return false;
}
};linkedList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeLast']};};
linkedList$.prune=function(){
var linkedList$=this;
var $sa;
while(m$1.nn$(($sa=linkedList$.$1dkeuw$ov))&&!m$1.nn$($sa.element)){
var $sb;
if(m$1.nn$(($sb=$sa.rest))){
linkedList$.$1dkeuw$ov=$sb;
}
else{
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
}
($sc=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$sc.predecessor,$sc);
var $sc;
}
var $sd=linkedList$.$1dkeuw$ov;
var $se;
while(m$1.nn$(($se=$sd))){
var $sf=$se.rest;
var $sg;
if(m$1.nn$(($sg=$sf))&&!m$1.nn$($sg.element)){
var $sh;
if(m$1.nn$(($sh=$sg.rest))){
($se.rest=$sh);
}
else{
($se.rest=(linkedList$.$1dkeuw$ow=null));
}
($si=linkedList$.$1dkeuw$ox,linkedList$.$1dkeuw$ox=$si.predecessor,$si);
var $si;
}
else{
$sd=$sf;
}
}
};linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
linkedList$.$_replace=function($sj,$sk){
var linkedList$=this;
var $sl=linkedList$.$1dkeuw$ov;
var $sm;
while(m$1.nn$(($sm=$sl))){
var $sn;
if(m$1.nn$(($sn=$sm.element))&&$sn.equals($sj)){
($sm.element=$sk);
}
$sl=$sm.rest;
}
};linkedList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replace']};};
linkedList$.replaceFirst=function($so,$sp){
var linkedList$=this;
var $sq=linkedList$.$1dkeuw$ov;
var $sr;
while(m$1.nn$(($sr=$sq))){
var $ss;
if(m$1.nn$(($ss=$sr.element))&&$ss.equals($so)){
($sr.element=$sp);
return true;
}
$sq=$sr.rest;
}
return false;
};linkedList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceFirst']};};
linkedList$.replaceLast=function($st,$su){
var linkedList$=this;
var $sv=null;
var $sw=linkedList$.$1dkeuw$ov;
var $sx;
while(m$1.nn$(($sx=$sw))){
var $sy;
if(m$1.nn$(($sy=$sx.element))&&$sy.equals($st)){
$sv=$sx;
}
$sw=$sx.rest;
}
var $sz;
if(m$1.nn$(($sz=$sv))){
($sz.element=$su);
return true;
}
else{
return false;
}
};linkedList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceLast']};};
linkedList$.infill=function($t0){
var linkedList$=this;
var $t1=linkedList$.$1dkeuw$ov;
var $t2;
while(m$1.nn$(($t2=$t1))){
if(!m$1.nn$($t2.element)){
($t2.element=$t0);
}
$t1=$t2.rest;
}
};linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
linkedList$.clear=function(){
var linkedList$=this;
linkedList$.$1dkeuw$ox=(0);
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
};linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
linkedList$.getFromFirst=function($t3){
var linkedList$=this;
var $t4=linkedList$.$1dkeuw$ov;
var $t5=(0);
var $t6;
while(m$1.nn$(($t6=$t4))){
if(((($t7=$t5,$t5=$t7.successor,$t7)).valueOf()==($t3).valueOf())){
return $t6.element;
}
var $t7;
$t4=$t6.rest;
}
return null;
};linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
linkedList$.spanFrom=function($t8){
var linkedList$=this;
var $t9=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $ta=linkedList$.$1dkeuw$ov;
var $tb=(0);
var $tc;
while(m$1.nn$(($tc=$ta))){
if(($tb>=$t8)){
$t9.add($tc.element);
}
($td=$tb,$tb=$td.successor,$td);
var $td;
$ta=$tc.rest;
}
return $t9;
};linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
linkedList$.spanTo=function($te){
var linkedList$=this;
var $tf=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $tg=linkedList$.$1dkeuw$ov;
var $th=(0);
var $ti;
while(m$1.nn$(($ti=$tg))){
if(($th>$te)){
break;
}
$tf.add($ti.element);
($tj=$th,$th=$tj.successor,$tj);
var $tj;
$tg=$ti.rest;
}
return $tf;
};linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
linkedList$.span=function($tk,$tl){
var linkedList$=this;
var $tm=spanToMeasure($tk,$tl,linkedList$.$1dkeuw$ox),$tn=$tm.$_get(0),$to=$tm.$_get(1),$tp=$tm.$_get(2);
var $tq=LinkedList(linkedList$.skip($tn).take($to),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
return ($tr=($tp?$tq.reversed:null),m$1.nn$($tr)?$tr:$tq);
var $tr;
};linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
linkedList$.deleteSpan=function($ts,$tt){
var linkedList$=this;
var $tu=spanToMeasure($ts,$tt,linkedList$.$1dkeuw$ox),$tv=$tu.$_get(0),$tw=$tu.$_get(1),$tx=$tu.$_get(2);
if((($tv<linkedList$.$1dkeuw$ox)&&($tw>0))){
var $ty=($tv>0);
var $tz=linkedList$.$1dkeuw$u0($tv.minus(1),linkedList$.$1dkeuw$ov);
var $u1=$tw.plus(($u2=($ty?1:null),m$1.nn$($u2)?$u2:(0)));
var $u2;
var $u3=linkedList$.$1dkeuw$u0($u1,($u4=$tz,m$1.nn$($u4)?$u4:linkedList$.$1dkeuw$ov));
var $u4;
if(!$ty){
linkedList$.$1dkeuw$ov=($u5=$tz,m$1.nn$($u5)?$u5:$u3);
var $u5;
}
var $u6;
if(m$1.nn$(($u6=$tz))){
($u6.rest=$u3);
}
if(($tw>=linkedList$.$1dkeuw$ox)){
linkedList$.$1dkeuw$ow=null;
}
(linkedList$.$1dkeuw$ox=linkedList$.$1dkeuw$ox.minus($tw));
}
};linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
linkedList$.$1dkeuw$u0=function($u7,$u8){
var linkedList$=this;
if(($u7<0)){
return null;
}
var $u9=$u8;
var $ua;
if(m$1.nn$(($ua=$u8))&&($u7>0)){
var $uc=(1),$ub=$u7,$ud=$uc.compare($ub),$ue=$ud===m$1.smaller()?'successor':'predecessor';for(var $uf=m$1.eorl$($ud);$uf($ub,$uc);$uc=$uc[$ue]){
$u9=($ug=$u9,m$1.nn$($ug)?$ug.rest:null);
var $ug;
}
}
return $u9;
};linkedList$.$1dkeuw$u0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
linkedList$.measure=function($uh,$ui){var linkedList$=this;
return linkedList$.span(($uj=measureToSpan($uh,$ui),$uj.$_get(0)),$uj.$_get(1));};linkedList$.deleteMeasure=function($uk,$ul){var linkedList$=this;
return linkedList$.deleteSpan(($um=measureToSpan($uk,$ul),$um.$_get(0)),$um.$_get(1));};linkedList$.defines=function($un){var linkedList$=this;
return (($un>=0)&&($un<linkedList$.$1dkeuw$ox));};linkedList$.contains=function($uo){
var linkedList$=this;
var $up=linkedList$.$1dkeuw$ov;
var $uq;
while(m$1.nn$(($uq=$up))){
var $ur;
if(m$1.nn$(($ur=$uq.element))){
if($ur.equals($uo)){
return true;
}
}
$up=$uq.rest;
}
return false;
};linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
m$1.atr$(linkedList$,'size',function(){
var linkedList$=this;
return linkedList$.$1dkeuw$ox;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
linkedList$.count=function($us){
var linkedList$=this;
var $ut=linkedList$.$1dkeuw$ov;
var $uu=(0);
var $uv;
while(m$1.nn$(($uv=$ut))){
if($us($uv.element)){
($uw=$uu,$uu=$uw.successor,$uw);
var $uw;
}
$ut=$uv.rest;
}
return $uu;
};linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
m$1.atr$(linkedList$,'lastIndex',function(){
var linkedList$=this;
return (!linkedList$.empty?linkedList$.$1dkeuw$ox.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
linkedList$.iterator=function(){var linkedList$=this;
return CellIterator(linkedList$.$1dkeuw$ov,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});};linkedList$.clone=function(){var linkedList$=this;
return LinkedList_copy(linkedList$,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});};
linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
linkedList$.each=function($ux){
var linkedList$=this;
var $uy=linkedList$.$1dkeuw$ov;
var $uz;
while(m$1.nn$(($uz=$uy))){
$ux($uz.element);
$uy=$uz.rest;
}
};linkedList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','each']};};
linkedList$.find=function($v0){
var linkedList$=this;
var $v1=linkedList$.$1dkeuw$ov;
var $v2;
while(m$1.nn$(($v2=$v1))){
var $v3=$v2.element;
var $v4;
if(m$1.nn$(($v4=$v3))&&$v0($v4)){
return $v4;
}
$v1=$v2.rest;
}
return null;
};linkedList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','find']};};
linkedList$.findLast=function($v5){
var linkedList$=this;
var $v6=null;
var $v7=linkedList$.$1dkeuw$ov;
var $v8;
while(m$1.nn$(($v8=$v7))){
var $v9=$v8.element;
var $va;
if(m$1.nn$(($va=$v9))&&$v5($va)){
$v6=$va;
}
$v7=$v8.rest;
}
return $v6;
};linkedList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findLast']};};
linkedList$.$_every=function($vb){
var linkedList$=this;
var $vc=linkedList$.$1dkeuw$ov;
var $vd;
while(m$1.nn$(($vd=$vc))){
if(!$vb($vd.element)){
return false;
}
$vc=$vd.rest;
}
return true;
};linkedList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','every']};};
linkedList$.any=function($ve){
var linkedList$=this;
var $vf=linkedList$.$1dkeuw$ov;
var $vg;
while(m$1.nn$(($vg=$vf))){
if($ve($vg.element)){
return true;
}
$vf=$vg.rest;
}
return false;
};linkedList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','any']};};
linkedList$.$_reduce=function($vh,$z4x6x1$){
var linkedList$=this;
var $vi;
if(m$1.nn$(($vi=linkedList$.$1dkeuw$ov))){
var $vj=$vi.element;
var $vk=$vi.rest;
var $vl;
while(m$1.nn$(($vl=$vk))){
$vj=$vh($vj,$vl.element);
$vk=$vl.rest;
}
return $vj;
}
else{
return null;
}
};linkedList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$LinkedList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$LinkedList']},'Element$LinkedList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$LinkedList']}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','LinkedList','$m','reduce']};};
m$1.atr$(linkedList$,'hash',function(){
var linkedList$=this;
var $vm=(17);
var $vn=linkedList$.$1dkeuw$ov;
var $vo;
while(m$1.nn$(($vo=$vn))){
var $vp;
if(m$1.nn$(($vp=$vo.element))){
$vm=$vm.times(31).plus($vp.hash);
}
else{
$vm=$vm.times(31);
}
$vn=$vo.rest;
}
return $vm;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($vq){
var linkedList$=this;
var $vr;
if(m$1.is$(($vr=$vq),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&((linkedList$.$1dkeuw$ox).valueOf()==($vr.size).valueOf())){
var $vs=linkedList$.$1dkeuw$ov;
var $vt=$vr.iterator();
var $vu;
while(m$1.nn$(($vu=$vs))){
var $vv;
if(!m$1.is$(($vv=$vt.next()),{t:m$1.Finished})){
var $vw=$vu.element;
var $vx;
if(m$1.nn$(($vx=$vv))){
var $vy;
if(m$1.nn$(($vy=$vw))&&$vy.equals($vx)){
$vs=$vu.rest;
}
else{
return false;
}
}
else{
var $vz;
if(m$1.nn$(($vz=$vw))){
return false;
}
else{
$vs=$vu.rest;
}
}
}
else{
return false;
}
}
return true;
}
return false;
};linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
linkedList$.truncate=function($w0){
var linkedList$=this;
m$1.asrt$((($w0>=0)),"Assertion failed: \'size>=0\' at LinkedList.ceylon (748:15-748:23)",'748:8-748:24','LinkedList.ceylon');
if((($w0).valueOf()==(0).valueOf())){
linkedList$.$1dkeuw$ov=(linkedList$.$1dkeuw$ow=null);
linkedList$.$1dkeuw$ox=(0);
}
else{
var $w1=(0);
var $w2=linkedList$.$1dkeuw$ov;
var $w3;
while((($w1=$w1.successor)<$w0)&&m$1.nn$(($w3=$w2))){
$w2=$w3.rest;
}
var $w4;
if(m$1.nn$(($w4=$w2))){
($w4.rest=null);
linkedList$.$1dkeuw$ow=$w4;
linkedList$.$1dkeuw$ox=$w0;
}
}
};linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
linkedList$.firstIndexWhere=function($w5){
var linkedList$=this;
var $w6=(0);
var $w8;for(var $w7=linkedList$.iterator();($w8=$w7.next())!==m$1.finished();){
var $w9;
if(m$1.nn$(($w9=$w8))&&$w5($w9)){
return $w6;
}
($wa=$w6,$w6=$wa.successor,$wa);
var $wa;
}
return null;
};linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
linkedList$.lastIndexWhere=function($wb){
var linkedList$=this;
var $wc=(0);
var $wd=null;
var $wf;for(var $we=linkedList$.iterator();($wf=$we.next())!==m$1.finished();){
var $wg;
if(m$1.nn$(($wg=$wf))&&$wb($wg)){
$wd=$wc;
}
($wh=$wc,$wc=$wh.successor,$wh);
var $wh;
}
return $wd;
};linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy.")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
linkedList$.collect=function($wi,$ljywq3$){var linkedList$=this;
return m$1.tpl$([],m$1.for$(function(){
var $wj=linkedList$.iterator(),$wk=m$1.finished();
var n$wk=function(){return $wk=$wj.next();}
return function(){
if(n$wk()!==m$1.finished()){
var $wl=$wk,$wm=$wi($wl);
return $wm;
}
return m$1.finished();
}
},{Element$Iterable:$ljywq3$.Result$collect,Absent$Iterable:{t:m$1.Null}}));};
linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Result$collect'}},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:'Result$collect'}},$rt:'Result$collect',ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],an:function(){return[m$1.doc("The transformation applied to the elements.")];}}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
m$1.atr$(linkedList$,'first',function(){
var linkedList$=this;
return ($wn=linkedList$.$1dkeuw$ov,m$1.nn$($wn)?$wn.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
m$1.atr$(linkedList$,'last',function(){
var linkedList$=this;
return ($wo=linkedList$.$1dkeuw$ow,m$1.nn$($wo)?$wo.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
linkedList$.$_push=function($wp){var linkedList$=this;
return linkedList$.insert(0,$wp);};linkedList$.$_pop=function(){var linkedList$=this;
return linkedList$.deleteFirst();};m$1.atr$(linkedList$,'top',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
linkedList$.offer=function($wq){var linkedList$=this;
return linkedList$.add($wq);};linkedList$.accept=function(){var linkedList$=this;
return linkedList$.deleteFirst();};m$1.atr$(linkedList$,'back',function(){
var linkedList$=this;
return linkedList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
m$1.atr$(linkedList$,'front',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
linkedList$.sequence=function(){var linkedList$=this;
return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();};
})(LinkedList.$$.prototype);
}
return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
var $wn,$wo;
function entryStore($wr,$leqrr$){return m$1.$_Array_ofSize($wr,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:$leqrr$.Item$entryStore,Key$Entry:$leqrr$.Key$entryStore}}}}])});};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$entryStore',Key$Entry:'Key$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
function elementStore($ws,$9ap29p$){return m$1.$_Array_ofSize($ws,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:$9ap29p$.Element$elementStore}}])});};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String})),m$1.license("Apache Software License")];};
function MutableList($$targs$$,mutableList$){
m$1.set_type_args(mutableList$,$$targs$$,MutableList);
ListMutator({Element$ListMutator:$$targs$$.Element$MutableList},mutableList$);
m$1.List({Element$List:$$targs$$.Element$MutableList},mutableList$);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)].$sa$({t:m$1.Declaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
if(MutableList.$$===undefined){
m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',$init$ListMutator(),m$1.List);
(function(mutableList$){
mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){var mutableList$=this;
return mutableList$.$_delete(0);};
mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
mutableList$.deleteLast=function(){var mutableList$=this;
return mutableList$.$_delete(mutableList$.size.minus(1));};
mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};mutableList$.swap=function($wt,$wu){
var mutableList$=this;
m$1.asrt$((($wv=$wt,$wv.compare((0))!==m$1.smaller()&&$wv.compare(mutableList$.size)===m$1.smaller())&&($ww=$wu,$ww.compare((0))!==m$1.smaller()&&$ww.compare(mutableList$.size)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (30:15-30:36)",'28:8-30:37','MutableList.ceylon');
if(!($wt==$wu)){
var $wx,$wy;
m$1.asrt$((m$1.is$(($wx=mutableList$.getFromFirst($wt)),mutableList$.$$targs$$.Element$MutableList)&&m$1.is$(($wy=mutableList$.getFromFirst($wu)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = getFromFirst(i),\n                    is Element y = getFromFirst(j)\' at MutableList.ceylon (32:19-33:50)",'32:12-33:51','MutableList.ceylon');
mutableList$.set($wt,$wy);
mutableList$.set($wu,$wx);
}
};mutableList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','swap']};};
mutableList$.move=function($wz,$x0){
var mutableList$=this;
m$1.asrt$((($x1=$wz,$x1.compare((0))!==m$1.smaller()&&$x1.compare(mutableList$.size)===m$1.smaller())&&($x2=$x0,$x2.compare((0))!==m$1.smaller()&&$x2.compare(mutableList$.size)===m$1.smaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (42:15-42:36)",'40:8-42:37','MutableList.ceylon');
if(!($wz==$x0)){
var $x3;
m$1.asrt$((m$1.is$(($x3=mutableList$.$_delete($wz)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = delete(i)\' at MutableList.ceylon (44:19-44:44)",'44:12-44:45','MutableList.ceylon');
mutableList$.insert($x0,$x3);
}
};mutableList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','move']};};
})(MutableList.$$.prototype);
}
return MutableList;
}
ex$.$init$MutableList=$init$MutableList;
$init$MutableList();
function ListMutator($$targs$$,listMutator$){
m$1.set_type_args(listMutator$,$$targs$$,ListMutator);
m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in'}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
if(ListMutator.$$===undefined){
m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.List);
(function(listMutator$){
listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll=function($x4){
var listMutator$=this;
var $x6;for(var $x5=$x4.iterator();($x6=$x5.next())!==m$1.finished();){
listMutator$.add($x6);
}
};listMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};};
listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.insertAll=function($x7,$x8){
var listMutator$=this;
var $x9=$x7;
var $xb;for(var $xa=$x8.iterator();($xb=$xa.next())!==m$1.finished();){
listMutator$.insert(($xc=$x9,$x9=$xc.successor,$xc),$xb);
var $xc;
}
};listMutator$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insertAll'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insertAll']};};
listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll=function($xd){
var listMutator$=this;
var $xe=(0);
var $xg;for(var $xf=$xd.iterator();($xg=$xf.next())!==m$1.finished();){
($xe=$xe.plus(listMutator$.remove($xg)));
}
return $xe;
};listMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The non-null values to remove")];}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};};
listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.swap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("The index of the first element.")];}},{nm:'j',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("The index of the second element.")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:swap'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','swap']};}};listMutator$.move={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("The source index of the element to move.")];}},{nm:'j',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("The destination index to which the element is\nmoved.")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:move'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','move']};}};listMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};}};listMutator$.deleteFirst=function(){var listMutator$=this;
return listMutator$.$_delete(0);};
listMutator$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};};
listMutator$.deleteLast=function(){var listMutator$=this;
return listMutator$.$_delete(listMutator$.size.minus(1));};
listMutator$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};};
listMutator$.deleteSpan={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};}};listMutator$.deleteMeasure={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};}};listMutator$.truncate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws("AssertionError","if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};}};
})(ListMutator.$$.prototype);
}
return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;
$init$ListMutator();
function measureToSpan($xh,$xi){return ($xj=(($xi<=0)?m$1.tpl$([(-1),(-1)]):null),m$1.nn$($xj)?$xj:m$1.tpl$([$xh,$xh.plus($xi).minus(1)]));};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
var $xj;
function spanToMeasure($xk,$xl,$xm){
if(((($xm).valueOf()==(0).valueOf())||(($xk<0)&&($xl<0)))){
return m$1.tpl$([0,0,false]);
}
var $xn=($xk>$xl);
var $xo=largest(0,($xp=($xn?$xl:null),m$1.nn$($xp)?$xp:$xk));
var $xp;
var $xq=smallest($xm.minus(1),($xr=($xn?$xk:null),m$1.nn$($xr)?$xr:$xl));
var $xr;
return m$1.tpl$([$xo,(1).plus($xq).minus($xo),$xn]);
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($xs,$xt){return ($xu=(($xs>$xt)?$xs:null),m$1.nn$($xu)?$xu:$xt);};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
var $xu;
function smallest($xv,$xw){return ($xx=(($xv<$xw)?$xv:null),m$1.nn$($xx)?$xx:$xw);};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
var $xx;
function MutableMap($$targs$$,mutableMap$){
m$1.set_type_args(mutableMap$,$$targs$$,MutableMap);
MapMutator({Key$MapMutator:$$targs$$.Key$MutableMap,Item$MapMutator:$$targs$$.Item$MutableMap},mutableMap$);
m$1.Map({Key$Map:$$targs$$.Key$MutableMap,Item$Map:$$targs$$.Item$MutableMap},mutableMap$);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}]},Item$MutableMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Key$MapMutator:'Key$MutableMap',Item$MapMutator:'Item$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)].$sa$({t:m$1.Declaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
if(MutableMap.$$===undefined){
m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',$init$MapMutator(),m$1.Map);
(function(mutableMap$){
mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};
})(MutableMap.$$.prototype);
}
return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
m$1.set_type_args(mapMutator$,$$targs$$,MapMutator);
m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}},mapMutator$);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}]},Item$MapMutator:{dv:'in'}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
if(MapMutator.$$===undefined){
m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.Map);
(function(mapMutator$){
mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($xy){
var mapMutator$=this;
var $y0;for(var $xz=$xy.iterator();($y0=$xz.next())!==m$1.finished();){
var $y1=$y0.key,$y2=$y0.item;
mapMutator$.put($y1,$y2);
}
};mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$MapMutator',Key$Entry:'Key$MapMutator'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($y3,$y4){
var mapMutator$=this;
var $y5;
if(m$1.nn$(($y5=mapMutator$.$_get($y3)))&&$y5.equals($y4)){
mapMutator$.remove($y3);
return true;
}
else{
return false;
}
};mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The item currently associated with the given [[key]]")];}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
mapMutator$.replaceEntry=function($y6,$y7,$y8){
var mapMutator$=this;
var $y9;
if(m$1.nn$(($y9=mapMutator$.$_get($y6)))&&$y9.equals($y7)){
mapMutator$.put($y6,$y7);
return true;
}
else{
return false;
}
};mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The item currently associated with the given [[key]]")];}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator',an:function(){return[m$1.doc("The new item to associate with the given [[key]]")];}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
mapMutator$.removeAll=function($ya){
var mapMutator$=this;
var $yc;for(var $yb=$ya.iterator();($yc=$yb.next())!==m$1.finished();){
mapMutator$.remove($yc);
}
};mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Key$MapMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};
})(MapMutator.$$.prototype);
}
return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;
$init$MapMutator();
function MutableSet($$targs$$,mutableSet$){
m$1.set_type_args(mutableSet$,$$targs$$,MutableSet);
SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet},mutableSet$);
m$1.Set({Element$Set:$$targs$$.Element$MutableSet},mutableSet$);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(["Stéphane Épardaud"].$sa$({t:m$1.$_String})),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
if(MutableSet.$$===undefined){
m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',$init$SetMutator(),m$1.Set);
(function(mutableSet$){
mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};
})(MutableSet.$$.prototype);
}
return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
m$1.set_type_args(setMutator$,$$targs$$,SetMutator);
m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
if(SetMutator.$$===undefined){
m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
(function(setMutator$){
setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($yd){
var setMutator$=this;
var $ye=false;
var $yg;for(var $yf=$yd.iterator();($yg=$yf.next())!==m$1.finished();){
if(setMutator$.add($yg)){
$ye=true;
}
}
return $ye;
};setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SetMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($yh){
var setMutator$=this;
var $yi=false;
var $yk;for(var $yj=$yh.iterator();($yk=$yj.next())!==m$1.finished();){
if(setMutator$.remove($yk)){
$yi=true;
}
}
return $yi;
};setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SetMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};
})(SetMutator.$$.prototype);
}
return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;
$init$SetMutator();
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
function partition($yl,$ym,$zgqkqa$){
var $yn=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $yo=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $yq;for(var $yp=$yl.iterator();($yq=$yp.next())!==m$1.finished();){
if($ym($yq)){
$yn.add($yq);
}
else{
$yo.add($yq);
}
}
return m$1.tpl$([$yn.sequence(),$yo.sequence()]);
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}},{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$partition',Absent$Iterable:{t:m$1.Null}}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$partition']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$partition'}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition:$m:selecting$1pd776')];}}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
function PriorityQueue($1dkeuw$yr,$1dkeuw$ys,$1dkeuw$yt,$1dkeuw$yu,$$targs$$,priorityQueue$){
$init$PriorityQueue();
if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,$$targs$$);
priorityQueue$.$1dkeuw$yr_=$1dkeuw$yr;
if($1dkeuw$ys===undefined){$1dkeuw$ys=(0);}
priorityQueue$.$1dkeuw$ys_=$1dkeuw$ys;
if($1dkeuw$yt===undefined){$1dkeuw$yt=m$1.Float(1.5);}
priorityQueue$.$1dkeuw$yt_=$1dkeuw$yt;
if($1dkeuw$yu===undefined){$1dkeuw$yu=m$1.empty();}
priorityQueue$.$1dkeuw$yu_=$1dkeuw$yu;
Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue},priorityQueue$);
priorityQueue$.$1dkeuw$yr=$1dkeuw$yr;
if(priorityQueue$.$1dkeuw$yv(priorityQueue$.$1dkeuw$yu)){
priorityQueue$.$1dkeuw$yw=priorityQueue$.$1dkeuw$yu.size;
priorityQueue$.$1dkeuw$yx=priorityQueue$.$1dkeuw$yy(($yz=((priorityQueue$.$1dkeuw$yw>$1dkeuw$ys)?priorityQueue$.$1dkeuw$yw:null),m$1.nn$($yz)?$yz:$1dkeuw$ys));
var $yz;
}
else{
priorityQueue$.$1dkeuw$yw=(0);
priorityQueue$.$1dkeuw$yx=priorityQueue$.$1dkeuw$yy($1dkeuw$ys);
}
priorityQueue$.$1dkeuw$z0();
return priorityQueue$;
}
PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$PriorityQueue','Element$PriorityQueue']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(["Loic Rouchon"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
if(PriorityQueue.$$===undefined){
m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
(function(priorityQueue$){
m$1.atr$(priorityQueue$,'$1dkeuw$yr',function(){return this.$1dkeuw$yr_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,an:function(){return[m$1.doc("A comparator function used to order elements.")];},d:['ceylon.collection','PriorityQueue','$m','compare$gs4c5s']};});
m$1.atr$(priorityQueue$,'$1dkeuw$ys',function(){return this.$1dkeuw$ys_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
m$1.atr$(priorityQueue$,'$1dkeuw$yt',function(){return this.$1dkeuw$yt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
m$1.atr$(priorityQueue$,'$1dkeuw$yu',function(){return this.$1dkeuw$yu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
priorityQueue$.$1dkeuw$yy=function($z1){var priorityQueue$=this;
return m$1.$_Array_ofSize($z1,null,{Element$Array:m$1.mut$([{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue])});};
priorityQueue$.$1dkeuw$yy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
priorityQueue$.$1dkeuw$yv=function($z2){var priorityQueue$=this;
return m$1.is$($z2,m$1.mut$([{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue}}]));};
priorityQueue$.$1dkeuw$yv.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
m$1.atr$(priorityQueue$,'$1dkeuw$yx',function(){return this.$1dkeuw$yx_;},function($z3){return this.$1dkeuw$yx_=$z3;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
m$1.atr$(priorityQueue$,'$1dkeuw$yw',function(){return this.$1dkeuw$yw_;},function($z4){return this.$1dkeuw$yw_=$z4;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
priorityQueue$.$1dkeuw$z5=function($z6){
var priorityQueue$=this;
var $z7=priorityQueue$.$1dkeuw$yw.plus($z6);
var $z8=m$1.runtime().maxArraySize;
if(($z7>$z8)){
throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
}
if(($z7>priorityQueue$.$1dkeuw$yx.size)){
var $z9=$z7.times(priorityQueue$.$1dkeuw$yt).integer;
var $za=($zb=((($z9<$z7)||($z9>$z8))?$z8:null),m$1.nn$($zb)?$zb:$z9);
var $zb;
var $zc=priorityQueue$.$1dkeuw$yy($za);
priorityQueue$.$1dkeuw$yx.copyTo($zc);
priorityQueue$.$1dkeuw$yx=$zc;
}
};priorityQueue$.$1dkeuw$z5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
priorityQueue$.$1dkeuw$zd=function($ze){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$z5(1);
priorityQueue$.$1dkeuw$yx.set(priorityQueue$.$1dkeuw$yw,$ze);
($zf=priorityQueue$.$1dkeuw$yw,priorityQueue$.$1dkeuw$yw=$zf.successor,$zf);
var $zf;
};priorityQueue$.$1dkeuw$zd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
priorityQueue$.$1dkeuw$zg=function($zh){var priorityQueue$=this;
return $zh.plus(1).divided(2).minus(1);};
priorityQueue$.$1dkeuw$zg.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
priorityQueue$.$1dkeuw$zi=function($zj){var priorityQueue$=this;
return $zj.times(2).plus(1);};
priorityQueue$.$1dkeuw$zi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
priorityQueue$.$1dkeuw$zk=function($zl){var priorityQueue$=this;
return $zl.times(2).plus(2);};
priorityQueue$.$1dkeuw$zk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
priorityQueue$.$1dkeuw$zm=function($zn){
var priorityQueue$=this;
var $zo;
m$1.asrt$((m$1.nn$(($zo=priorityQueue$.$1dkeuw$yx.$_get($zn)))),"Assertion failed: \'exists element = array[index]\' at PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
return $zo;
};priorityQueue$.$1dkeuw$zm.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
priorityQueue$.$1dkeuw$zp=function($zq,$zr){var priorityQueue$=this;
return priorityQueue$.$1dkeuw$yr(priorityQueue$.$1dkeuw$zm($zq),priorityQueue$.$1dkeuw$zm($zr));};
priorityQueue$.$1dkeuw$zp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
priorityQueue$.$1dkeuw$zs=function($zt,$zu){
var priorityQueue$=this;
var $zv=priorityQueue$.$1dkeuw$yx.$_get($zt);
priorityQueue$.$1dkeuw$yx.set($zt,priorityQueue$.$1dkeuw$yx.$_get($zu));
priorityQueue$.$1dkeuw$yx.set($zu,$zv);
};priorityQueue$.$1dkeuw$zs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
priorityQueue$.$1dkeuw$zw=function($zx){
var priorityQueue$=this;
if((($zx).valueOf()==(0).valueOf())){
return;
}
var $zy=priorityQueue$.$1dkeuw$zg($zx);
if(priorityQueue$.$1dkeuw$zp($zx,$zy).equals(m$1.smaller())){
priorityQueue$.$1dkeuw$zs($zx,$zy);
priorityQueue$.$1dkeuw$zw($zy);
}
};priorityQueue$.$1dkeuw$zw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
priorityQueue$.$1dkeuw$zz=function($100){
var priorityQueue$=this;
var $101=priorityQueue$.$1dkeuw$zi($100);
if(($101>=priorityQueue$.$1dkeuw$yw)){
return null;
}
var $102=priorityQueue$.$1dkeuw$zk($100);
if(($102>=priorityQueue$.$1dkeuw$yw)){
return $101;
}
var $103=priorityQueue$.$1dkeuw$zp($101,$102);
if($103.equals(m$1.smaller())){
return $101;
}
return $102;
};priorityQueue$.$1dkeuw$zz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
priorityQueue$.$1dkeuw$104=function($105){
var priorityQueue$=this;
var $106;
if(m$1.nn$(($106=priorityQueue$.$1dkeuw$zz($105)))&&priorityQueue$.$1dkeuw$zp($106,$105).equals(m$1.smaller())){
priorityQueue$.$1dkeuw$zs($105,$106);
priorityQueue$.$1dkeuw$104($106);
}
};priorityQueue$.$1dkeuw$104.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
priorityQueue$.$1dkeuw$z0=function(){
var priorityQueue$=this;
if(priorityQueue$.$1dkeuw$yv(priorityQueue$.$1dkeuw$yu)){
var $107=(0);
var $109;for(var $108=priorityQueue$.$1dkeuw$yu.iterator();($109=$108.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$yx.set(($10a=$107,$107=$10a.successor,$10a),$109);
var $10a;
}
}
else{
var $10c;for(var $10b=priorityQueue$.$1dkeuw$yu.iterator();($10c=$10b.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$zd($10c);
}
}
if((priorityQueue$.$1dkeuw$yw>0)){
var $10e=priorityQueue$.$1dkeuw$zg(priorityQueue$.$1dkeuw$yw.minus(1)),$10d=(0),$10f=$10e.compare($10d),$10g=$10f===m$1.smaller()?'successor':'predecessor';for(var $10h=m$1.eorl$($10f);$10h($10d,$10e);$10e=$10e[$10g]){
priorityQueue$.$1dkeuw$104($10e);
}
}
};priorityQueue$.$1dkeuw$z0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
m$1.atr$(priorityQueue$,'size',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$yw;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
m$1.atr$(priorityQueue$,'front',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$yx.$_get(0);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
m$1.atr$(priorityQueue$,'last',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$yx.$_get(priorityQueue$.$1dkeuw$yw.minus(1));
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
m$1.atr$(priorityQueue$,'back',function(){
var priorityQueue$=this;
return priorityQueue$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
priorityQueue$.offer=function($10i){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$zd($10i);
priorityQueue$.$1dkeuw$zw(priorityQueue$.$1dkeuw$yw.minus(1));
};priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
priorityQueue$.accept=function(){
var priorityQueue$=this;
var $10j=priorityQueue$.front;
if((priorityQueue$.$1dkeuw$yw>0)){
priorityQueue$.$1dkeuw$yx.set(0,priorityQueue$.last);
priorityQueue$.$1dkeuw$yx.set((priorityQueue$.$1dkeuw$yw=priorityQueue$.$1dkeuw$yw.predecessor),null);
priorityQueue$.$1dkeuw$104(0);
}
return $10j;
};priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
priorityQueue$.iterator=function(){
var priorityQueue$=this;
if((priorityQueue$.$1dkeuw$yw>0)){
var $10k=(function(){function $10l($$targs$$){
var $10l$=new $10l.$$;$10l$.outer$=priorityQueue$;
$10l$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue},$10l$);
$10l$.$1dkeuw$10n_=(0);
$10l$.$prop$get$1dkeuw$10n={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10l,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
$10l$.$prop$get$1dkeuw$10n.get=function(){return $1dkeuw$10n};
return $10l$;
};$10l.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
function $init$$10l(){
if($10l.$$===undefined){
m$1.initTypeProto($10l,'ceylon.collection::PriorityQueue.it',m$1.Basic,m$1.Iterator);
(function($10l$){
m$1.atr$($10l$,'$1dkeuw$10n',function(){return this.$1dkeuw$10n_;},function($10o){return this.$1dkeuw$10n_=$10o;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$10l,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
$10l$.next=function(){
var $10l$=this;
var $10p=priorityQueue$.$1dkeuw$yx.$_get($10l$.$1dkeuw$10n);
var $10q;
if(m$1.nn$(($10q=$10p))){
($10r=$10l$.$1dkeuw$10n,$10l$.$1dkeuw$10n=$10r.successor,$10r);
var $10r;
return $10q;
}
function $10s(){return $10p;}
m$1.asrt$(((($10l$.$1dkeuw$10n).valueOf()==(priorityQueue$.$1dkeuw$yw).valueOf())),"Assertion failed: \'index == length\' at PriorityQueue.ceylon (208:26-208:42)",'208:20-208:43','PriorityQueue.ceylon');
return m$1.finished();
};$10l$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$10l,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
})($10l.$$.prototype);
}
return $10l;
}
priorityQueue$.$init$$10l=$init$$10l;
$init$$10l();
var $10t;
function $10m(){
if($10t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'200:12-212:12','PriorityQueue.ceylon');
if($10t===undefined){$10t=m$1.INIT$;$10t=$init$$10l()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue});$10t.$crtmm$=$10m.$crtmm$;}
return $10t;
}
$10m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$10l()},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
$prop$get$10l=$10m;
$10m();
return $10m();
}());if($10k!==undefined){return $10k;}
}
else{
return m$1.emptyIterator();
}
};priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
priorityQueue$.clone=function(){
var priorityQueue$=this;
var $10u=($10v=m$1.$JsCallable(m$1.JsCallable(priorityQueue$,priorityQueue$.$1dkeuw$yr),[{nm:'x',mt:'prm',$t:priorityQueue$.Element$PriorityQueue},{nm:'y',mt:'prm',$t:priorityQueue$.Element$PriorityQueue}],{Arguments$Callable:m$1.mtt$([priorityQueue$.$$targs$$.Element$PriorityQueue,priorityQueue$.$$targs$$.Element$PriorityQueue]),Return$Callable:{t:m$1.Comparison}}),$10w=priorityQueue$.$1dkeuw$yw,$10x=priorityQueue$.$1dkeuw$yt,PriorityQueue($10v,$10w,$10x,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
var $10v,$10w,$10x;
($10u.$1dkeuw$yw=priorityQueue$.$1dkeuw$yw);
($10u.$1dkeuw$yx=priorityQueue$.$1dkeuw$yx.clone());
return $10u;
};priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PriorityQueue,a:{Element$PriorityQueue:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
})(PriorityQueue.$$.prototype);
}
return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;
$init$PriorityQueue();
function Queue($$targs$$,queue$){
m$1.set_type_args(queue$,$$targs$$,Queue);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
if(Queue.$$===undefined){
m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
(function(queue$){
queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
})(Queue.$$.prototype);
}
return Queue;
}
ex$.$init$Queue=$init$Queue;
$init$Queue();
function SingletonMap(entry,$$targs$$,singletonMap$){
$init$SingletonMap();
if(singletonMap$===undefined)singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,$$targs$$);
singletonMap$.entry_=entry;
m$1.Map({Key$Map:$$targs$$.Key$SingletonMap,Item$Map:$$targs$$.Item$SingletonMap},singletonMap$);
return singletonMap$;
}
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$SingletonMap',Key$Entry:'Key$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Singleton)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
ex$.SingletonMap=SingletonMap;
function $init$SingletonMap(){
if(SingletonMap.$$===undefined){
m$1.initTypeProto(SingletonMap,'ceylon.collection::SingletonMap',m$1.Basic,m$1.Map);
(function(singletonMap$){
m$1.atr$(singletonMap$,'entry',function(){return this.entry_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Entry,a:{Item$Entry:'Item$SingletonMap',Key$Entry:'Key$SingletonMap'}},$cont:SingletonMap,pa:1,d:['ceylon.collection','SingletonMap','$at','entry']};});
singletonMap$.defines=function($10y){var singletonMap$=this;
return singletonMap$.entry.key.equals($10y);};singletonMap$.$_get=function($10z){
var singletonMap$=this;
if(singletonMap$.entry.key.equals($10z)){
return singletonMap$.entry.item;
}
else{
return null;
}
};singletonMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$SingletonMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','get']};};
singletonMap$.contains=function($110){var singletonMap$=this;
return singletonMap$.entry.equals($110);};singletonMap$.iterator=function(){var singletonMap$=this;
return m$1.Singleton(singletonMap$.entry,{Element$Singleton:{t:m$1.Entry,a:{Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap,Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap}}}).iterator();};singletonMap$.equals=function($111){var singletonMap$=this;
return singletonMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(singletonMap$,$111);};m$1.atr$(singletonMap$,'hash',function(){
var singletonMap$=this;
return m$1.attrGetter(singletonMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$at','hash']};});
singletonMap$.each=function($112){var singletonMap$=this;
return $112(singletonMap$.entry);};singletonMap$.clone=function(){var singletonMap$=this;
return singletonMap$;};
singletonMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonMap,a:{Key$SingletonMap:'Key$SingletonMap',Item$SingletonMap:'Item$SingletonMap'}},ps:[],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','clone']};};
})(SingletonMap.$$.prototype);
}
return SingletonMap;
}
ex$.$init$SingletonMap=$init$SingletonMap;
$init$SingletonMap();
function SingletonSet(element,$$targs$$,singletonSet$){
$init$SingletonSet();
if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,$$targs$$);
singletonSet$.element_=element;
m$1.Set({Element$Set:$$targs$$.Element$SingletonSet},singletonSet$);
return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Singleton)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
ex$.SingletonSet=SingletonSet;
function $init$SingletonSet(){
if(SingletonSet.$$===undefined){
m$1.initTypeProto(SingletonSet,'ceylon.collection::SingletonSet',m$1.Basic,m$1.Set);
(function(singletonSet$){
m$1.atr$(singletonSet$,'element',function(){return this.element_;},undefined,function(){return{mod:$CCMM$,$t:'Element$SingletonSet',$cont:SingletonSet,pa:1,d:['ceylon.collection','SingletonSet','$at','element']};});
singletonSet$.contains=function($113){var singletonSet$=this;
return singletonSet$.element.equals($113);};singletonSet$.complement=function($114,$4ycb5n$){var singletonSet$=this;
return ($115=($114.contains(singletonSet$.element)?m$1.emptySet():null),m$1.nn$($115)?$115:singletonSet$);};
singletonSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:SingletonSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','complement']};};
singletonSet$.intersection=function($116,$b7yrl4$){
var singletonSet$=this;
var $117;
if(m$1.is$(($117=singletonSet$.element),$b7yrl4$.Other$intersection,$b7yrl4$)&&$116.contains($117)){
return SingletonSet($117,{Element$SingletonSet:m$1.mit$([singletonSet$.$$targs$$.Element$SingletonSet,$b7yrl4$.Other$intersection])});
}
else{
return m$1.emptySet();
}
};singletonSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$SingletonSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:SingletonSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','intersection']};};
singletonSet$.union=function($118,$t5idbk$){
var singletonSet$=this;
var $119=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
$119.addAll($118);
$119.add(singletonSet$.element);
return UnmodifiableSet($119,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
};singletonSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:SingletonSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','union']};};
singletonSet$.exclusiveUnion=function($11a,$xiti9c$){
var singletonSet$=this;
var $11b=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
$11b.addAll($11a);
if($11a.contains(singletonSet$.element)){
$11b.remove(singletonSet$.element);
}
else{
$11b.add(singletonSet$.element);
}
return UnmodifiableSet($11b,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
};singletonSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:SingletonSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','exclusiveUnion']};};
singletonSet$.iterator=function(){var singletonSet$=this;
return m$1.Singleton(singletonSet$.element,{Element$Singleton:singletonSet$.$$targs$$.Element$SingletonSet}).iterator();};singletonSet$.equals=function($11c){var singletonSet$=this;
return singletonSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(singletonSet$,$11c);};m$1.atr$(singletonSet$,'hash',function(){
var singletonSet$=this;
return m$1.attrGetter(singletonSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$at','hash']};});
singletonSet$.each=function($11d){var singletonSet$=this;
return $11d(singletonSet$.element);};singletonSet$.clone=function(){var singletonSet$=this;
return singletonSet$;};
singletonSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonSet,a:{Element$SingletonSet:'Element$SingletonSet'}},ps:[],$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$m','clone']};};
})(SingletonSet.$$.prototype);
}
return SingletonSet;
}
ex$.$init$SingletonSet=$init$SingletonSet;
$init$SingletonSet();
var $115;
function SortedMap($$targs$$,sortedMap$){
m$1.set_type_args(sortedMap$,$$targs$$,SortedMap);
m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:$$targs$$.Key$SortedMap,Item$SortedMap:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap,Element$Ranged:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$SortedMap,Key$Entry:$$targs$$.Key$SortedMap}}},sortedMap$);
m$1.Map({Key$Map:$$targs$$.Key$SortedMap,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:'Key$SortedMap',Item$SortedMap:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap',Element$Ranged:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
if(SortedMap.$$===undefined){
m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
(function(sortedMap$){
sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};sortedMap$.ascendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:ascendingEntries')];},d:['ceylon.collection','SortedMap','$m','ascendingEntries']};}};sortedMap$.descendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:descendingEntries')];},d:['ceylon.collection','SortedMap','$m','descendingEntries']};}};
})(SortedMap.$$.prototype);
}
return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;
$init$SortedMap();
function SortedSet($$targs$$,sortedSet$){
m$1.set_type_args(sortedSet$,$$targs$$,SortedSet);
m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Index$Ranged:$$targs$$.Element$SortedSet,Element$Ranged:$$targs$$.Element$SortedSet},sortedSet$);
m$1.Set({Element$Set:$$targs$$.Element$SortedSet},sortedSet$);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Index$Ranged:'Element$SortedSet',Element$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
if(SortedSet.$$===undefined){
m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
(function(sortedSet$){
sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};sortedSet$.ascendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:ascendingElements')];},d:['ceylon.collection','SortedSet','$m','ascendingElements']};}};sortedSet$.descendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:descendingElements')];},d:['ceylon.collection','SortedSet','$m','descendingElements']};}};
})(SortedSet.$$.prototype);
}
return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;
$init$SortedSet();
function Stability(stability$){
$init$Stability();
if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.collection::Stability"),'?','?')
return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
if(Stability.$$===undefined){
m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
}
return Stability;
}
ex$.$init$Stability=$init$Stability;
$init$Stability();
function $11e(){
var unlinked$=new $11e.$$;Stability(unlinked$);
return unlinked$;
};$11e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','unlinked']};};
function $init$unlinked(){
if($11e.$$===undefined){
m$1.initTypeProto($11e,'ceylon.collection::unlinked',$init$Stability());
}
return $11e;
}
ex$.$init$unlinked=$init$unlinked;
$init$unlinked();
var $11g;
function unlinked(){
if($11g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
if($11g===undefined){$11g=m$1.INIT$;$11g=$init$unlinked()();$11g.$crtmm$=unlinked.$crtmm$;}
return $11g;
}
ex$.unlinked=unlinked;
unlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unlinked()},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked=unlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $11h(){
var linked$=new $11h.$$;Stability(linked$);
return linked$;
};$11h.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','linked']};};
function $init$linked(){
if($11h.$$===undefined){
m$1.initTypeProto($11h,'ceylon.collection::linked',$init$Stability());
}
return $11h;
}
ex$.$init$linked=$init$linked;
$init$linked();
var $11j;
function linked(){
if($11j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
if($11j===undefined){$11j=m$1.INIT$;$11j=$init$linked()();$11j.$crtmm$=linked.$crtmm$;}
return $11j;
}
ex$.linked=linked;
linked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$linked()},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked=linked;
ex$.$prop$getLinked=$prop$getLinked;
function Stack($$targs$$,stack$){
m$1.set_type_args(stack$,$$targs$$,Stack);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
if(Stack.$$===undefined){
m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
(function(stack$){
stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
})(Stack.$$.prototype);
}
return Stack;
}
ex$.$init$Stack=$init$Stack;
$init$Stack();
function StoreIterator($1dkeuw$11k,$$targs$$,storeIterator$){
$init$StoreIterator();
if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
m$1.set_type_args(storeIterator$,$$targs$$);
storeIterator$.$1dkeuw$11k_=$1dkeuw$11k;
m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator},storeIterator$);
storeIterator$.$1dkeuw$11l_=(0);
storeIterator$.$1dkeuw$11m_=storeIterator$.$1dkeuw$11k.$_get(storeIterator$.$1dkeuw$11l);
return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
ex$.StoreIterator=StoreIterator;
function $init$StoreIterator(){
if(StoreIterator.$$===undefined){
m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
(function(storeIterator$){
m$1.atr$(storeIterator$,'$1dkeuw$11k',function(){return this.$1dkeuw$11k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
m$1.atr$(storeIterator$,'$1dkeuw$11l',function(){return this.$1dkeuw$11l_;},function($11n){return this.$1dkeuw$11l_=$11n;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
m$1.atr$(storeIterator$,'$1dkeuw$11m',function(){return this.$1dkeuw$11m_;},function($11o){return this.$1dkeuw$11m_=$11o;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
storeIterator$.next=function(){
var storeIterator$=this;
if(!m$1.nn$(storeIterator$.$1dkeuw$11m)){
while(((storeIterator$.$1dkeuw$11l=storeIterator$.$1dkeuw$11l.successor)<storeIterator$.$1dkeuw$11k.size)){
storeIterator$.$1dkeuw$11m=storeIterator$.$1dkeuw$11k.$_get(storeIterator$.$1dkeuw$11l);
if(m$1.nn$(storeIterator$.$1dkeuw$11m)){
break;
}
}
}
var $11p;
if(m$1.nn$(($11p=storeIterator$.$1dkeuw$11m))){
var $11q=$11p.element;
storeIterator$.$1dkeuw$11m=$11p.rest;
return $11q;
}
return m$1.finished();
};storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
})(StoreIterator.$$.prototype);
}
return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;
$init$StoreIterator();
function TreeMap$$c($$targs$$,treeMap$){
m$1.set_type_args(treeMap$,$$targs$$);
SortedMap({Key$SortedMap:$$targs$$.Key$TreeMap,Item$SortedMap:$$targs$$.Item$TreeMap},treeMap$);
MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Index$Ranged:$$targs$$.Key$TreeMap,Element$Ranged:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$TreeMap,Key$Entry:$$targs$$.Key$TreeMap}}},treeMap$);
}
function TreeMap(){return TreeMap_$c$.apply(undefined,arguments);}
function TreeMap_$c$$$a($11r,$11s,$$targs$$,treeMap$){
if($11s===undefined){$11s=m$1.empty();}
treeMap$.$1dkeuw$11t_=null;
treeMap$.$1dkeuw$11u_=m$1.JsCallable(treeMap$,$11r);
m$1.atr$(treeMap$,'$1dkeuw$11u',function(){return this.$1dkeuw$11u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
treeMap$.$1dkeuw$11v_=$11s;
m$1.atr$(treeMap$,'$1dkeuw$11v',function(){return this.$1dkeuw$11v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$11w_=null;
m$1.atr$(treeMap$,'$1dkeuw$11w',function(){return this.$1dkeuw$11w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap_$c$($11r,$11s,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
if($11s===undefined){$11s=m$1.empty();}
TreeMap$$c($$targs$$,treeMap$);
TreeMap_$c$$$a($11r,$11s,$$targs$$,treeMap$);
treeMap$.$1dkeuw$11t=function(){var $11x;
if(m$1.nn$(($11x=treeMap$.$1dkeuw$11w)))return treeMap$.$1dkeuw$11y($11x);else return null}();
var $120;for(var $11z=treeMap$.$1dkeuw$11v.iterator();($120=$11z.next())!==m$1.finished();){
var $121=$120.key,$122=$120.item;
treeMap$.put($121,$122);
}
treeMap$.$1dkeuw$123_=treeMap$.$1dkeuw$124();
return treeMap$;
};
TreeMap_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:$def')];},d:['ceylon.collection','TreeMap','$cn','$def']};};
TreeMap.TreeMap_$c$=TreeMap_$c$;
ex$.TreeMap_$c$=TreeMap_$c$;
function TreeMap_copy$$a($125,$$targs$$,treeMap$){
treeMap$.$1dkeuw$11t_=null;
treeMap$.$1dkeuw$11u_=($126=$125,m$1.JsCallable($126,m$1.nn$($126)?$126.$1dkeuw$11u:null));
m$1.atr$(treeMap$,'$1dkeuw$11u',function(){return this.$1dkeuw$11u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
var $126;
treeMap$.$1dkeuw$11v_=m$1.empty();
m$1.atr$(treeMap$,'$1dkeuw$11v',function(){return this.$1dkeuw$11v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$11w_=$125.$1dkeuw$11t;
m$1.atr$(treeMap$,'$1dkeuw$11w',function(){return this.$1dkeuw$11w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap_copy($125,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
TreeMap$$c($$targs$$,treeMap$);
TreeMap_copy$$a($125,$$targs$$,treeMap$);
treeMap$.$1dkeuw$11t=function(){var $11x;
if(m$1.nn$(($11x=treeMap$.$1dkeuw$11w)))return treeMap$.$1dkeuw$11y($11x);else return null}();
var $128;for(var $127=treeMap$.$1dkeuw$11v.iterator();($128=$127.next())!==m$1.finished();){
var $121=$128.key,$122=$128.item;
treeMap$.put($121,$122);
}
treeMap$.$1dkeuw$123_=treeMap$.$1dkeuw$124();
return treeMap$;
};
TreeMap_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:copy')];},d:['ceylon.collection','TreeMap','$cn','copy']};};
TreeMap.TreeMap_copy=TreeMap_copy;
ex$.TreeMap_copy=TreeMap_copy;
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Key$SortedMap:'Key$TreeMap',Item$SortedMap:'Item$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap',Element$Ranged:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)].$sa$({t:m$1.Declaration$meta$declaration})),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
if(TreeMap.$$===undefined){
m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
(function(treeMap$){
m$1.atr$(treeMap$,'$1dkeuw$11t',function(){return this.$1dkeuw$11t_;},function($129){return this.$1dkeuw$11t_=$129;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:1027,an:function(){return[m$1.doc("The root node of the tree.")];},d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
m$1.atr$(treeMap$,'$1dkeuw$11v',function(){return this.$1dkeuw$11v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
m$1.atr$(treeMap$,'$1dkeuw$11w',function(){return this.$1dkeuw$11w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
treeMap$.$1dkeuw$11y=function($12a){
var treeMap$=this;
var $12b=($12c=$12a.key,$12d=$12a.item,$12e=$12a.red,treeMap$.Node$TreeMap($12c,$12d,$12e));
var $12c,$12d,$12e;
var $12f;
if(m$1.nn$(($12f=$12a.left))){
var $12g=treeMap$.$1dkeuw$11y($12f);
($12g.parent=$12b);
($12b.left=$12g);
}
var $12h;
if(m$1.nn$(($12h=$12a.right))){
var $12i=treeMap$.$1dkeuw$11y($12h);
($12i.parent=$12b);
($12b.right=$12i);
}
return $12b;
};treeMap$.$1dkeuw$11y.$crtmm$=function(){return{mod:$CCMM$,$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','copyNode$paf63']};};
treeMap$.$1dkeuw$12j=function($12k){var treeMap$=this;
return function(){var $12l;
if(m$1.nn$(($12l=$12k)))return $12l.red;else return false}();};
treeMap$.$1dkeuw$12j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
treeMap$.$1dkeuw$12m=function($12n){
var treeMap$=this;
var $12o=treeMap$.$1dkeuw$11t;
var $12p;
while(m$1.nn$(($12p=$12o))){
var $12q=treeMap$.$1dkeuw$11u($12n,$12p.key);
if($12q===m$1.equal()) {
return $12p;
}
else if($12q===m$1.smaller()) {
$12o=$12p.left;
}
else if($12q===m$1.larger()) {
$12o=$12p.right;
}
}
return $12o;
};treeMap$.$1dkeuw$12m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
treeMap$.$1dkeuw$12r=function($12s){
var treeMap$=this;
var $12t=treeMap$.$1dkeuw$11t;
var $12u;
while(m$1.nn$(($12u=$12t))){
var $12v=treeMap$.$1dkeuw$11u($12s,$12u.key);
if($12v===m$1.equal()) {
return $12u;
}
else if($12v===m$1.smaller()) {
if(!m$1.nn$($12u.left)){
var $12w=$12u;
var $12x;
while(m$1.nn$(($12x=$12w.parent))&&$12w.onLeft){
$12w=$12x;
}
return $12w.parent;
}
$12t=$12u.left;
}
else if($12v===m$1.larger()) {
if(!m$1.nn$($12u.right)){
return $12u;
}
$12t=$12u.right;
}
}
return $12t;
};treeMap$.$1dkeuw$12r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
treeMap$.$1dkeuw$12y=function($12z){
var treeMap$=this;
var $130=treeMap$.$1dkeuw$11t;
var $131;
while(m$1.nn$(($131=$130))){
var $132=treeMap$.$1dkeuw$11u($12z,$131.key);
if($132===m$1.equal()) {
return $131;
}
else if($132===m$1.smaller()) {
if(!m$1.nn$($131.left)){
return $131;
}
$130=$131.left;
}
else if($132===m$1.larger()) {
if(!m$1.nn$($131.right)){
var $133=$131;
var $134;
while(m$1.nn$(($134=$133.parent))&&$133.onRight){
$133=$134;
}
return $133.parent;
}
$130=$131.right;
}
}
return $130;
};treeMap$.$1dkeuw$12y.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
treeMap$.$1dkeuw$135=function($136,$137){
var treeMap$=this;
var $138;
if(m$1.nn$(($138=$136.parent))){
if($136.onLeft){
($138.left=$137);
}
else{
if($136.onRight){
($138.right=$137);
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (242:23-242:29)",'242:16-242:30','TreeMap.ceylon');
}
}
}
else{
treeMap$.$1dkeuw$11t=$137;
}
var $139;
if(m$1.nn$(($139=$137))){
($139.parent=$136.parent);
}
};treeMap$.$1dkeuw$135.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
treeMap$.$1dkeuw$13a=function($13b,$13c){
var treeMap$=this;
($13b.left=$13c);
var $13d;
if(m$1.nn$(($13d=$13c))){
($13d.parent=$13b);
}
};treeMap$.$1dkeuw$13a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
treeMap$.$1dkeuw$13e=function($13f,$13g){
var treeMap$=this;
($13f.right=$13g);
var $13h;
if(m$1.nn$(($13h=$13g))){
($13h.parent=$13f);
}
};treeMap$.$1dkeuw$13e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
treeMap$.$1dkeuw$13i=function($13j){
var treeMap$=this;
var $13k;
m$1.asrt$((m$1.nn$(($13k=$13j.right))),"Assertion failed: \'exists right = node.right\' at TreeMap.ceylon (268:15-268:41)",'268:8-268:42','TreeMap.ceylon');
treeMap$.$1dkeuw$135($13j,$13k);
var $13l=$13k.left;
treeMap$.$1dkeuw$13e($13j,$13l);
treeMap$.$1dkeuw$13a($13k,$13j);
};treeMap$.$1dkeuw$13i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
treeMap$.$1dkeuw$13m=function($13n){
var treeMap$=this;
var $13o;
m$1.asrt$((m$1.nn$(($13o=$13n.left))),"Assertion failed: \'exists left = node.left\' at TreeMap.ceylon (276:15-276:39)",'276:8-276:40','TreeMap.ceylon');
var $13p=$13o.right;
treeMap$.$1dkeuw$135($13n,$13o);
treeMap$.$1dkeuw$13a($13n,$13p);
treeMap$.$1dkeuw$13e($13o,$13n);
};treeMap$.$1dkeuw$13m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
treeMap$.$1dkeuw$13q=function($13r){
var treeMap$=this;
var $13s;
if(m$1.nn$(($13s=$13r.parent))){
if(treeMap$.$1dkeuw$12j($13s)){
var $13t;
if(m$1.nn$(($13t=$13r.uncle))&&treeMap$.$1dkeuw$12j($13t)){
($13s.red=false);
($13t.red=false);
var $13u;
m$1.asrt$((m$1.nn$(($13u=$13r.grandparent))),"Assertion failed: \'exists grandparent=newNode.grandparent\' at TreeMap.ceylon (293:27-293:66)",'293:20-293:67','TreeMap.ceylon');
($13u.red=true);
treeMap$.$1dkeuw$13q($13u);
}
else{
var $13v;
if(($13r.onRight&&$13s.onLeft)){
treeMap$.$1dkeuw$13i($13s);
var $13w;
m$1.asrt$((m$1.nn$(($13w=$13r.left))),"Assertion failed: \'exists nl=newNode.left\' at TreeMap.ceylon (302:31-302:54)",'302:24-302:55','TreeMap.ceylon');
$13v=$13w;
}
else{
if(($13r.onLeft&&$13s.onRight)){
treeMap$.$1dkeuw$13m($13s);
var $13x;
m$1.asrt$((m$1.nn$(($13x=$13r.right))),"Assertion failed: \'exists nr=newNode.right\' at TreeMap.ceylon (307:31-307:55)",'307:24-307:56','TreeMap.ceylon');
$13v=$13x;
}
else{
$13v=$13r;
}
}
var $13y;
m$1.asrt$((m$1.nn$(($13y=$13v.parent))),"Assertion failed: \'exists adjustedParent=adjustedNode.parent\' at TreeMap.ceylon (314:27-314:69)",'314:20-314:70','TreeMap.ceylon');
($13y.red=false);
var $13z;
m$1.asrt$((m$1.nn$(($13z=$13v.grandparent))),"Assertion failed: \'exists grandparent=adjustedNode.grandparent\' at TreeMap.ceylon (316:27-316:71)",'316:20-316:72','TreeMap.ceylon');
($13z.red=true);
if(($13v.onLeft&&$13y.onLeft)){
treeMap$.$1dkeuw$13m($13z);
}
else{
if(($13v.onRight&&$13y.onRight)){
treeMap$.$1dkeuw$13i($13z);
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (325:31-325:37)",'325:24-325:38','TreeMap.ceylon');
}
}
}
}
}
else{
($13r.red=false);
}
};treeMap$.$1dkeuw$13q.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
treeMap$.put=function($140,$141){
var treeMap$=this;
var $142=treeMap$.Node$TreeMap($140,$141,true);
var $143;
if(m$1.nn$(($143=treeMap$.$1dkeuw$11t))){
var $144=$143;
while(true){
var $145=treeMap$.$1dkeuw$11u($140,$144.key);
if($145===m$1.larger()) {
var $146;
if(m$1.nn$(($146=$144.right))){
$144=$146;
}
else{
($144.right=$142);
break;
}
}
else if($145===m$1.smaller()) {
var $147;
if(m$1.nn$(($147=$144.left))){
$144=$147;
}
else{
($144.left=$142);
break;
}
}
else if($145===m$1.equal()) {
var $148=$144.item;
($144.item=$141);
return $148;
}
}
($142.parent=$144);
}
else{
treeMap$.$1dkeuw$11t=$142;
}
treeMap$.$1dkeuw$13q($142);
return null;
};treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
function $1dkeuw$124(){
var treeMap$=this;
var $124$=new this.$1dkeuw$124.$$;$124$.outer$=this;
return $124$;
};$1dkeuw$124.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
function $init$removeCases(){
if($1dkeuw$124.$$===undefined){
m$1.initTypeProto($1dkeuw$124,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
TreeMap.$1dkeuw$124=$1dkeuw$124;
(function($124$){
$124$.$1dkeuw$149=function($14a){
var $124$=this;
var $14b;
if(m$1.nn$(($14b=$14a.left))){
m$1.asrt$((!m$1.nn$($14a.right)),"Assertion failed: \'!node.right exists\' at TreeMap.ceylon (389:23-389:42)",'389:16-389:43','TreeMap.ceylon');
return $14b;
}
else{
var $14c;
if(m$1.nn$(($14c=$14a.right))){
m$1.asrt$((!m$1.nn$($14a.left)),"Assertion failed: \'!node.left exists\' at TreeMap.ceylon (393:23-393:41)",'393:16-393:42','TreeMap.ceylon');
return $14c;
}
else{
return null;
}
}
};$124$.$1dkeuw$149.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
$124$.removeNodeWithAtMostOneChild=function($14d){
var $124$=this,treeMap$=$124$.outer$;
var $14e=$124$.$1dkeuw$149($14d);
if(!$14d.red&&$124$.outer$.$1dkeuw$12j($14e)){
var $14f;
m$1.asrt$((m$1.nn$(($14f=$14e))),"Assertion failed: \'exists child\' at TreeMap.ceylon (404:22-404:35)",'404:16-404:36','TreeMap.ceylon');
($14f.red=false);
}
else{
if(!$14d.red){
$124$.$1dkeuw$14g($14d,$14d.sibling);
}
}
$124$.outer$.$1dkeuw$135($14d,$14e);
};$124$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$124,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
$124$.$1dkeuw$14g=function($14h,$14i){
var $124$=this,treeMap$=$124$.outer$;
var $14j;
if(m$1.nn$(($14j=$124$.outer$.$1dkeuw$11t))&&!($14j===$14h)){
$124$.$1dkeuw$14k($14h,$14i);
}
};$124$.$1dkeuw$14g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
$124$.$1dkeuw$14k=function($14l,$14m){
var $124$=this,treeMap$=$124$.outer$;
var $14n;
m$1.asrt$((m$1.nn$(($14n=$14l.parent))),"Assertion failed: \'exists p = node.parent\' at TreeMap.ceylon (421:18-421:41)",'421:12-421:42','TreeMap.ceylon');
var $14o;
if(m$1.nn$(($14o=$14m))&&$14o.red){
($14n.red=true);
($14o.red=false);
if($14l.onLeft){
$124$.outer$.$1dkeuw$13i($14n);
}
else{
$124$.outer$.$1dkeuw$13m($14n);
}
}
var $14p;
m$1.asrt$((m$1.nn$(($14p=$14l.parent))),"Assertion failed: \'exists newParent = node.parent\' at TreeMap.ceylon (432:18-432:49)",'432:12-432:50','TreeMap.ceylon');
$124$.$1dkeuw$14q($14l,$14p,$14l.sibling);
};$124$.$1dkeuw$14k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
$124$.$1dkeuw$14q=function($14r,$14s,$14t){
var $124$=this,treeMap$=$124$.outer$;
var $14u;
m$1.asrt$((m$1.nn$(($14u=$14t))),"Assertion failed: \'exists s\' at TreeMap.ceylon (437:18-437:27)",'437:12-437:28','TreeMap.ceylon');
var $14v=$124$.outer$.$1dkeuw$12j($14u.left);
var $14w=$124$.outer$.$1dkeuw$12j($14u.right);
if(!$14u.red&&!$14s.red&&!$14v&&!$14w){
($14u.red=true);
$124$.$1dkeuw$14g($14s,$14s.sibling);
}
else{
$124$.$1dkeuw$14x($14r,$14s,$14u,$14v,$14w);
}
};$124$.$1dkeuw$14q.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
$124$.$1dkeuw$14x=function($14y,$14z,$150,$151,$152){
var $124$=this,treeMap$=$124$.outer$;
if(!$150.red&&$14z.red&&!$151&&!$152){
($150.red=true);
($14z.red=false);
}
else{
$124$.$1dkeuw$153($14y,$14z,$150,$151,$152);
}
};$124$.$1dkeuw$14x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
$124$.$1dkeuw$153=function($154,$155,$156,$157,$158){
var $124$=this,treeMap$=$124$.outer$;
if(!$156.red&&$157&&!$158&&$154.onLeft){
($156.red=true);
var $159;
m$1.asrt$((m$1.nn$(($159=$156.left))),"Assertion failed: \'exists sl = s.left\' at TreeMap.ceylon (462:23-462:42)",'462:16-462:43','TreeMap.ceylon');
($159.red=false);
$124$.outer$.$1dkeuw$13m($156);
}
else{
if(!$156.red&&!$157&&$158&&$154.onRight){
($156.red=true);
var $15a;
m$1.asrt$((m$1.nn$(($15a=$156.right))),"Assertion failed: \'exists sr = s.right\' at TreeMap.ceylon (468:23-468:43)",'468:16-468:44','TreeMap.ceylon');
($15a.red=false);
$124$.outer$.$1dkeuw$13i($156);
}
}
var $15b,$15c;
m$1.asrt$((m$1.nn$(($15b=$154.parent))&&m$1.nn$(($15c=$154.sibling))),"Assertion failed: \'exists newParent = node.parent, exists newS = node.sibling\' at TreeMap.ceylon (472:18-472:77)",'472:12-472:78','TreeMap.ceylon');
$124$.$1dkeuw$15d($154,$15b,$15c);
};$124$.$1dkeuw$153.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
$124$.$1dkeuw$15d=function($15e,$15f,$15g){
var $124$=this,treeMap$=$124$.outer$;
($15g.red=$15f.red);
($15f.red=false);
var $15h;
if($15e.onLeft&&m$1.nn$(($15h=$15g.right))){
($15h.red=false);
$124$.outer$.$1dkeuw$13i($15f);
}
else{
var $15i;
if(m$1.nn$(($15i=$15g.left))){
($15i.red=false);
$124$.outer$.$1dkeuw$13m($15f);
}
}
};$124$.$1dkeuw$15d.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$124,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
})($1dkeuw$124.$$.prototype);
}
return $1dkeuw$124;
}
treeMap$.$init$removeCases=$init$removeCases;
m$1.atr$(treeMap$,'$1dkeuw$123',function(){return this.$1dkeuw$123_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
treeMap$.$1dkeuw$124=$1dkeuw$124;treeMap$.$1dkeuw$124.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
treeMap$.remove=function($15k){
var treeMap$=this;
var $15l;
if(m$1.nn$(($15l=treeMap$.$1dkeuw$12m($15k)))){
var $15m;
var $15n,$15o;
if(m$1.nn$(($15n=$15l.left))&&m$1.nn$(($15o=$15l.right))){
$15m=$15n.rightmostChild;
($15l.key=$15m.key);
($15l.item=$15m.item);
}
else{
$15m=$15l;
}
treeMap$.$1dkeuw$123.removeNodeWithAtMostOneChild($15m);
return $15l.item;
}
else{
return null;
}
};treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
treeMap$.removeEntry=function($15p,$15q){
var treeMap$=this;
var $15r,$15s;
if(m$1.nn$(($15r=treeMap$.$1dkeuw$12m($15p)))&&m$1.nn$(($15s=$15r.item))&&$15s.equals($15q)){
var $15t;
var $15u,$15v;
if(m$1.nn$(($15u=$15r.left))&&m$1.nn$(($15v=$15r.right))){
$15t=$15u.rightmostChild;
($15r.key=$15t.key);
($15r.item=$15t.item);
}
else{
$15t=$15r;
}
treeMap$.$1dkeuw$123.removeNodeWithAtMostOneChild($15t);
return true;
}
else{
return false;
}
};treeMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','removeEntry']};};
treeMap$.replaceEntry=function($15w,$15x,$15y){
var treeMap$=this;
var $15z;
if(m$1.nn$(($15z=treeMap$.$1dkeuw$11t))){
var $160=$15z;
while(true){
var $161=treeMap$.$1dkeuw$11u($15w,$160.key);
if($161===m$1.larger()) {
var $162;
if(m$1.nn$(($162=$160.right))){
$160=$162;
}
else{
break;
}
}
else if($161===m$1.smaller()) {
var $163;
if(m$1.nn$(($163=$160.left))){
$160=$163;
}
else{
break;
}
}
else if($161===m$1.equal()) {
var $164;
if(m$1.nn$(($164=$160.item))&&$164.equals($15x)){
($160.item=$15y);
return true;
}
else{
return false;
}
}
}
}
return false;
};treeMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','replaceEntry']};};
treeMap$.iterator=function(){var treeMap$=this;
return treeMap$.NodeIterator$TreeMap();};treeMap$.$_get=function($165){var treeMap$=this;
return function(){var $166;
if(m$1.is$(($166=$165),treeMap$.$$targs$$.Key$TreeMap))return ($167=treeMap$.$1dkeuw$12m($166),m$1.nn$($167)?$167.item:null);else return ($168=treeMap$.find(m$1.forKey(m$1.$JsCallable(($169=$166,m$1.JsCallable($169,m$1.nn$($169)?$169.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}]),Return$Callable:{t:m$1.$_Boolean}}),{Result$forKey:{t:m$1.$_Boolean},Key$forKey:{t:m$1.$_Object}})),m$1.nn$($168)?$168.item:null)}();};treeMap$.defines=function($16a){var treeMap$=this;
return function(){var $16b;
if(m$1.is$(($16b=$16a),treeMap$.$$targs$$.Key$TreeMap))return m$1.nn$(treeMap$.$1dkeuw$12m($16b));else return treeMap$.keys.any(m$1.$JsCallable(($16c=$16b,m$1.JsCallable($16c,m$1.nn$($16c)?$16c.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}]),Return$Callable:{t:m$1.$_Boolean}}))}();};treeMap$.getOrDefault=function($16d,$16e,$608kkw$){
var treeMap$=this;
var $16f;
if(m$1.is$(($16f=$16d),treeMap$.$$targs$$.Key$TreeMap)){
return function(){var $16g;
if(m$1.nn$(($16g=treeMap$.$1dkeuw$12m($16f))))return $16g.item;else return $16e}();
}
else{
return function(){var $16h;
if(m$1.nn$(($16h=treeMap$.find(m$1.forKey(m$1.$JsCallable(($16i=$16f,m$1.JsCallable($16i,m$1.nn$($16i)?$16i.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}]),Return$Callable:{t:m$1.$_Boolean}}),{Result$forKey:{t:m$1.$_Boolean},Key$forKey:{t:m$1.$_Object}})))))return $16h.item;else return $16e}();
var $16i;
}
};treeMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$TreeMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:TreeMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','TreeMap','$m','getOrDefault']};};
treeMap$.higherEntries=function($16j){var treeMap$=this;
return function(){function $16k($$targs$$){
var $16k$=new $16k.$$;$16k$.outer$=treeMap$;
$16k$.$$targs$$=$$targs$$;
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}},Absent$Iterable:{t:m$1.Null}},$16k$);
return $16k$;
};$16k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}}],d:['ceylon.collection','TreeMap']};};
function $init$$16k(){
if($16k.$$===undefined){
m$1.initTypeProto($16k,'ceylon.collection::TreeMap.anonymous#0',m$1.Basic,m$1.Iterable);
(function($16k$){
$16k$.iterator=function(){var $16k$=this;
return treeMap$.NodeIterator$TreeMap(treeMap$.$1dkeuw$12y($16j));};
})($16k.$$.prototype);
}
return $16k;
}
treeMap$.$init$$16k=$init$$16k;
$init$$16k();
return $16k();}();};treeMap$.lowerEntries=function($16m){var treeMap$=this;
return function(){function $16n($$targs$$){
var $16n$=new $16n.$$;$16n$.outer$=treeMap$;
$16n$.$$targs$$=$$targs$$;
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}},Absent$Iterable:{t:m$1.Null}},$16n$);
return $16n$;
};$16n.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}}],d:['ceylon.collection','TreeMap']};};
function $init$$16n(){
if($16n.$$===undefined){
m$1.initTypeProto($16n,'ceylon.collection::TreeMap.anonymous#1',m$1.Basic,m$1.Iterable);
(function($16n$){
$16n$.iterator=function(){var $16n$=this;
return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$1dkeuw$12r($16m));};
})($16n.$$.prototype);
}
return $16n;
}
treeMap$.$init$$16n=$init$$16n;
$init$$16n();
return $16n();}();};treeMap$.ascendingEntries=function($16p,$16q){var treeMap$=this;
return treeMap$.higherEntries($16p).takeWhile(m$1.$JsCallable((function($16r){return (!treeMap$.$1dkeuw$11u($16r.key,$16q).equals(m$1.larger()));}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.Item$TreeMap,Key$Entry:treeMap$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}]),Return$Callable:{t:m$1.$_Boolean}}));};treeMap$.descendingEntries=function($16s,$16t){var treeMap$=this;
return treeMap$.lowerEntries($16s).takeWhile(m$1.$JsCallable((function($16u){return (!treeMap$.$1dkeuw$11u($16u.key,$16t).equals(m$1.smaller()));}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.Item$TreeMap,Key$Entry:treeMap$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}]),Return$Callable:{t:m$1.$_Boolean}}));};treeMap$.contains=function($16v){
var treeMap$=this;
var $16w,$16x;
if(m$1.is$(($16w=$16v),{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}})&&m$1.nn$(($16x=treeMap$.$1dkeuw$12m($16w.key)))){
var $16y;
if(m$1.nn$(($16y=$16x.item))){
var $16z;
if(m$1.nn$(($16z=$16w.item))){
return $16z.equals($16y);
}
else{
return false;
}
}
else{
return !m$1.nn$($16w.item);
}
}
else{
return false;
}
};treeMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','contains']};};
treeMap$.clear=function(){var treeMap$=this;
return (treeMap$.$1dkeuw$11t=null);};m$1.atr$(treeMap$,'size',function(){
var treeMap$=this;
return ($170=($171=treeMap$.$1dkeuw$11t,m$1.nn$($171)?$171.size:null),m$1.nn$($170)?$170:(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
m$1.atr$(treeMap$,'first',function(){
var treeMap$=this;
return function(){var $172;
if(m$1.nn$(($172=($173=treeMap$.$1dkeuw$11t,m$1.nn$($173)?$173.leftmostChild:null))))return m$1.Entry($172.key,$172.item,{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});
m$1.atr$(treeMap$,'last',function(){
var treeMap$=this;
return function(){var $174;
if(m$1.nn$(($174=($175=treeMap$.$1dkeuw$11t,m$1.nn$($175)?$175.rightmostChild:null))))return m$1.Entry($174.key,$174.item,{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});
treeMap$.measure=function($176,$177){var treeMap$=this;
return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$1dkeuw$11u),[{nm:'x',mt:'prm',$t:treeMap$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.Key$TreeMap}],{Arguments$Callable:m$1.mtt$([treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]),Return$Callable:{t:m$1.Comparison}}),treeMap$.higherEntries($176).take($177),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});};treeMap$.span=function($178,$179){var treeMap$=this;
return function(){var $17a=treeMap$.$1dkeuw$11u($178,$179).equals(m$1.larger());return ($17b=m$1.$JsCallable((function($17c,$17d){return ($17e=($17a?treeMap$.$1dkeuw$11u($17d,$17c):null),m$1.nn$($17e)?$17e:treeMap$.$1dkeuw$11u($17c,$17d));}),[{nm:'x',mt:'prm',$t:treeMap$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.Key$TreeMap}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Comparison}}),$17f=($17g=($17a?treeMap$.descendingEntries($178,$179):null),m$1.nn$($17g)?$17g:treeMap$.ascendingEntries($178,$179)),TreeMap($17b,$17f,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}));}();};treeMap$.spanFrom=function($17h){var treeMap$=this;
return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$1dkeuw$11u),[{nm:'x',mt:'prm',$t:treeMap$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.Key$TreeMap}],{Arguments$Callable:m$1.mtt$([treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]),Return$Callable:{t:m$1.Comparison}}),treeMap$.higherEntries($17h),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});};treeMap$.spanTo=function($17i){var treeMap$=this;
return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$1dkeuw$11u),[{nm:'x',mt:'prm',$t:treeMap$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.Key$TreeMap}],{Arguments$Callable:m$1.mtt$([treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]),Return$Callable:{t:m$1.Comparison}}),treeMap$.takeWhile(m$1.$JsCallable((function($17j){return (!treeMap$.$1dkeuw$11u($17j.key,$17i).equals(m$1.larger()));}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.Item$TreeMap,Key$Entry:treeMap$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}]),Return$Callable:{t:m$1.$_Boolean}})),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});};treeMap$.clone=function(){var treeMap$=this;
return TreeMap_copy(treeMap$,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});};
treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
m$1.atr$(treeMap$,'string',function(){
var treeMap$=this;
return function(){var $17k;
if(m$1.nn$(($17k=treeMap$.$1dkeuw$11t)))return "{ ".plus($17k.string).plus(" }");else return "{}"}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});
treeMap$.equals=function($17l){var treeMap$=this;
return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(treeMap$,$17l);};m$1.atr$(treeMap$,'hash',function(){
var treeMap$=this;
return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
treeMap$.assertInvariants=function(){
var treeMap$=this;
treeMap$.$1dkeuw$17m();
treeMap$.$1dkeuw$17n();
treeMap$.$1dkeuw$17o();
};treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
treeMap$.$1dkeuw$17m=function(){
var treeMap$=this;
m$1.asrt$((!treeMap$.$1dkeuw$12j(treeMap$.$1dkeuw$11t)),"Assertion failed: \'!isRed(root)\' at TreeMap.ceylon (749:15-749:28)",'749:8-749:29','TreeMap.ceylon');
};treeMap$.$1dkeuw$17m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
treeMap$.$1dkeuw$17n$defs$node=function($17p){var treeMap$=this;
return treeMap$.$1dkeuw$11t;};
treeMap$.$1dkeuw$17n=function($17p){
var treeMap$=this;
if($17p===undefined){$17p=treeMap$.$1dkeuw$17n$defs$node($17p);}
var $17q;
if(m$1.nn$(($17q=$17p))){
if(treeMap$.$1dkeuw$12j($17q)){
m$1.asrt$((!treeMap$.$1dkeuw$12j($17q.left)),"Assertion failed: \'!isRed(node.left)\' at TreeMap.ceylon (755:23-755:41)",'755:16-755:42','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$12j($17q.right)),"Assertion failed: \'!isRed(node.right)\' at TreeMap.ceylon (756:23-756:42)",'756:16-756:43','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$12j($17q.parent)),"Assertion failed: \'!isRed(node.parent)\' at TreeMap.ceylon (757:23-757:43)",'757:16-757:44','TreeMap.ceylon');
}
treeMap$.$1dkeuw$17n($17q.left);
treeMap$.$1dkeuw$17n($17q.right);
}
};treeMap$.$1dkeuw$17n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
treeMap$.$1dkeuw$17o$defs$node=function($17r,$17s,$17t){var treeMap$=this;
return treeMap$.$1dkeuw$11t;};
treeMap$.$1dkeuw$17o$defs$blackCount=function($17r,$17s,$17t){return 0;};
treeMap$.$1dkeuw$17o$defs$pathBlackCount=function($17r,$17s,$17t){return null;};
treeMap$.$1dkeuw$17o=function($17r,$17s,$17t){
var treeMap$=this;
if($17r===undefined){$17r=treeMap$.$1dkeuw$17o$defs$node($17r,$17s,$17t);}
if($17s===undefined){$17s=treeMap$.$1dkeuw$17o$defs$blackCount($17r,$17s,$17t);}
if($17t===undefined){$17t=treeMap$.$1dkeuw$17o$defs$pathBlackCount($17r,$17s,$17t);}
if(!treeMap$.$1dkeuw$12j($17r)){
($17u=$17s,$17s=$17u.successor,$17u);
var $17u;
}
var $17v;
if(m$1.nn$(($17v=$17r))){
$17t=treeMap$.$1dkeuw$17o($17v.left,$17s,$17t);
$17t=treeMap$.$1dkeuw$17o($17v.right,$17s,$17t);
return $17t;
}
else{
var $17w;
if(m$1.nn$(($17w=$17t))){
m$1.asrt$(((($17s).valueOf()==($17w).valueOf())),"Assertion failed: \'blackCount == count\' at TreeMap.ceylon (781:23-781:43)",'781:16-781:44','TreeMap.ceylon');
}
else{
$17t=$17s;
}
return $17t;
}
};treeMap$.$1dkeuw$17o.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1024},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1027}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
function Node$TreeMap$$c($17x$){
}
function Node$TreeMap(){return Node$TreeMap_$c$.apply(this,arguments);}
function Node$TreeMap_$c$$$a($17y,$17z,$180,$17x$){
$17x$.$1dkeuw$181_=null;
$17x$.$1dkeuw$182_=null;
$17x$.$1dkeuw$183_=null;
$17x$.key_=$17y;
m$1.atr$($17x$,'key',function(){return this.key_;},function($184){return this.key_=$184;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
$17x$.item_=$17z;
m$1.atr$($17x$,'item',function(){return this.item_;},function($185){return this.item_=$185;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
$17x$.red_=$180;
m$1.atr$($17x$,'red',function(){return this.red_;},function($186){return this.red_=$186;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
return $17x$;
};
function Node$TreeMap_$c$($17y,$17z,$180,$17x$){
$init$Node$TreeMap();
if($17x$===undefined)$17x$=new this.Node$TreeMap.$$;
$17x$.outer$=this;
Node$TreeMap$$c($17x$);
Node$TreeMap_$c$$$a($17y,$17z,$180,$17x$);
return $17x$;
};
Node$TreeMap_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$cn','$def']};};
Node$TreeMap.Node$TreeMap_$c$=Node$TreeMap_$c$;
treeMap$.Node$TreeMap_$c$=Node$TreeMap_$c$;
Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
function $init$Node$TreeMap(){
if(Node$TreeMap.$$===undefined){
m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
TreeMap.Node$TreeMap=Node$TreeMap;
(function($17x$){
m$1.atr$($17x$,'key',function(){return this.key_;},function($187){return this.key_=$187;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
m$1.atr$($17x$,'item',function(){return this.item_;},function($188){return this.item_=$188;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
m$1.atr$($17x$,'left',function(){return this.$1dkeuw$181_;},function($189){return this.$1dkeuw$181_=$189;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
m$1.atr$($17x$,'right',function(){return this.$1dkeuw$182_;},function($18a){return this.$1dkeuw$182_=$18a;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
m$1.atr$($17x$,'parent',function(){return this.$1dkeuw$183_;},function($18b){return this.$1dkeuw$183_=$18b;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
m$1.atr$($17x$,'red',function(){return this.red_;},function($18c){return this.red_=$18c;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
m$1.atr$($17x$,'onLeft',function(){
var $17x$=this;
return function(){var $18d;
if(m$1.nn$(($18d=($18e=$17x$.parent,m$1.nn$($18e)?$18e.left:null))))return $17x$.equals($18d);else return false}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});
m$1.atr$($17x$,'onRight',function(){
var $17x$=this;
return function(){var $18f;
if(m$1.nn$(($18f=($18g=$17x$.parent,m$1.nn$($18g)?$18g.right:null))))return $17x$.equals($18f);else return false}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});
m$1.atr$($17x$,'grandparent',function(){
var $17x$=this;
return ($18h=$17x$.parent,m$1.nn$($18h)?$18h.parent:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
m$1.atr$($17x$,'sibling',function(){
var $17x$=this;
var $18i;
if(m$1.nn$(($18i=$17x$.parent))){
if($17x$.onLeft){
return $18i.right;
}
else{
if($17x$.onRight){
return $18i.left;
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (81:27-81:33)",'81:20-81:34','TreeMap.ceylon');
}
}
}
else{
return null;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($17x$,'uncle',function(){
var $17x$=this;
return ($18j=$17x$.parent,m$1.nn$($18j)?$18j.sibling:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
m$1.atr$($17x$,'rightmostChild',function(){
var $17x$=this;
var $18k=$17x$;
var $18l;
while(m$1.nn$(($18l=$18k.right))){
$18k=$18l;
}
return $18k;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($17x$,'leftmostChild',function(){
var $17x$=this;
var $18m=$17x$;
var $18n;
while(m$1.nn$(($18n=$18m.left))){
$18m=$18n;
}
return $18m;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($17x$,'string',function(){
var $17x$=this;
var $18o=m$1.StringBuilder();
var $18p;
if(m$1.nn$(($18p=$17x$.left))){
$18o.append($18p.string).append(", ");
}
$18o.append($17x$.key.string).append("->").append(($18q=($18r=$17x$.item,m$1.nn$($18r)?$18r.string:null),m$1.nn$($18q)?$18q:"<null>"));
var $18q,$18r;
var $18s;
if(m$1.nn$(($18s=$17x$.right))){
$18o.append(", ").append($18s.string);
}
return $18o.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});m$1.atr$($17x$,'size',function(){
var $17x$=this;
var $18t=(1);
var $18u;
if(m$1.nn$(($18u=$17x$.left))){
($18t=$18t.plus($18u.size));
}
var $18v;
if(m$1.nn$(($18v=$17x$.right))){
($18t=$18t.plus($18v.size));
}
return $18t;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});
})(Node$TreeMap.$$.prototype);
}
return Node$TreeMap;
}
treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;
treeMap$.Node$TreeMap=Node$TreeMap;
function NodeIterator$TreeMap($1dkeuw$18w,$18x$){
$init$NodeIterator$TreeMap();
if($18x$===undefined)$18x$=new this.NodeIterator$TreeMap.$$;
$18x$.outer$=this;
$18x$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$18x$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$18x$.outer$.$$targs$$.Key$TreeMap}}};
if($1dkeuw$18w===undefined){$1dkeuw$18w=($18y=$18x$.outer$.$1dkeuw$11t,m$1.nn$($18y)?$18y.leftmostChild:null);}
$18x$.$1dkeuw$18w_=$1dkeuw$18w;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$18x$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$18x$.outer$.$$targs$$.Key$TreeMap}}},$18x$);
return $18x$;
}
NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
function $init$NodeIterator$TreeMap(){
if(NodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
(function($18x$){
m$1.atr$($18x$,'$1dkeuw$18w',function(){return this.$1dkeuw$18w_;},function($18z){return this.$1dkeuw$18w_=$18z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
$18x$.next=function(){
var $18x$=this;
var $190=function(){var $191;
if(m$1.nn$(($191=$18x$.$1dkeuw$18w)))return m$1.Entry($191.key,$191.item,{Item$Entry:$18x$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$18x$.outer$.$$targs$$.Key$TreeMap});else return m$1.finished()}();
var $192,$193;
if(m$1.nn$(($192=$18x$.$1dkeuw$18w))&&m$1.nn$(($193=$192.right))){
$18x$.$1dkeuw$18w=$193;
var $194;
while(m$1.nn$(($194=($195=$18x$.$1dkeuw$18w,m$1.nn$($195)?$195.left:null)))){
$18x$.$1dkeuw$18w=$194;
}
var $195;
}
else{
var $196;
if(m$1.nn$(($196=$18x$.$1dkeuw$18w))){
var $197=$196;
var $198;
while(m$1.nn$(($198=$197.parent))&&$197.onRight){
$197=$198;
}
$18x$.$1dkeuw$18w=$197.parent;
}
else{
$18x$.$1dkeuw$18w=null;
}
}
return $190;
};$18x$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
})(NodeIterator$TreeMap.$$.prototype);
}
return NodeIterator$TreeMap;
}
treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;
treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
function ReverseNodeIterator$TreeMap($1dkeuw$199,$19a$){
$init$ReverseNodeIterator$TreeMap();
if($19a$===undefined)$19a$=new this.ReverseNodeIterator$TreeMap.$$;
$19a$.outer$=this;
$19a$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$19a$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$19a$.outer$.$$targs$$.Key$TreeMap}}};
if($1dkeuw$199===undefined){$1dkeuw$199=($19b=$19a$.outer$.$1dkeuw$11t,m$1.nn$($19b)?$19b.rightmostChild:null);}
$19a$.$1dkeuw$199_=$1dkeuw$199;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$19a$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$19a$.outer$.$$targs$$.Key$TreeMap}}},$19a$);
return $19a$;
}
ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
function $init$ReverseNodeIterator$TreeMap(){
if(ReverseNodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
(function($19a$){
m$1.atr$($19a$,'$1dkeuw$199',function(){return this.$1dkeuw$199_;},function($19c){return this.$1dkeuw$199_=$19c;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
$19a$.next=function(){
var $19a$=this;
var $19d=function(){var $19e;
if(m$1.nn$(($19e=$19a$.$1dkeuw$199)))return m$1.Entry($19e.key,$19e.item,{Item$Entry:$19a$.outer$.$$targs$$.Item$TreeMap,Key$Entry:$19a$.outer$.$$targs$$.Key$TreeMap});else return m$1.finished()}();
var $19f,$19g;
if(m$1.nn$(($19f=$19a$.$1dkeuw$199))&&m$1.nn$(($19g=$19f.left))){
$19a$.$1dkeuw$199=$19g;
var $19h;
while(m$1.nn$(($19h=($19i=$19a$.$1dkeuw$199,m$1.nn$($19i)?$19i.right:null)))){
$19a$.$1dkeuw$199=$19h;
}
var $19i;
}
else{
var $19j;
if(m$1.nn$(($19j=$19a$.$1dkeuw$199))){
$19a$.$1dkeuw$199=$19j.parent;
var $19k=$19j;
var $19l;
while(m$1.nn$(($19l=$19a$.$1dkeuw$199))&&$19k.onLeft){
$19k=$19l;
$19a$.$1dkeuw$199=$19l.parent;
}
}
else{
$19a$.$1dkeuw$199=null;
}
}
return $19d;
};$19a$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
})(ReverseNodeIterator$TreeMap.$$.prototype);
}
return ReverseNodeIterator$TreeMap;
}
treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;
treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
$init$removeCases();
$init$Node$TreeMap();
$init$NodeIterator$TreeMap();
$init$ReverseNodeIterator$TreeMap();
})(TreeMap.$$.prototype);
}
return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;
$init$TreeMap();
var $167,$168,$169,$16c,$170,$171,$173,$175,$17b,$17e,$17f,$17g,$18e,$18g,$18h,$18j,$18y,$19b;
function naturalOrderTreeMap($19m,$fl191b$){return TreeMap(m$1.$JsCallable((function($19n,$19o){return $19n.compare($19o);}),[{nm:'x',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap},{nm:'y',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap}],{Arguments$Callable:m$1.mtt$([$fl191b$.Key$naturalOrderTreeMap,$fl191b$.Key$naturalOrderTreeMap]),Return$Callable:{t:m$1.Comparison}}),$19m,{Key$TreeMap:$fl191b$.Key$naturalOrderTreeMap,Item$TreeMap:$fl191b$.Item$naturalOrderTreeMap});};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$naturalOrderTreeMap',Key$Entry:'Key$naturalOrderTreeMap'}},Absent$Iterable:{t:m$1.Null}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function TreeSet$$c($$targs$$,treeSet$){
m$1.set_type_args(treeSet$,$$targs$$);
SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Index$Ranged:$$targs$$.Element$TreeSet,Element$Ranged:$$targs$$.Element$TreeSet},treeSet$);
}
function TreeSet(){return TreeSet_$c$.apply(undefined,arguments);}
function TreeSet_$c$$$a($19p,$19q,$$targs$$,treeSet$){
if($19q===undefined){$19q=m$1.empty();}
treeSet$.$1dkeuw$19r_=m$1.JsCallable(treeSet$,$19p);
m$1.atr$(treeSet$,'$1dkeuw$19r',function(){return this.$1dkeuw$19r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
treeSet$.$1dkeuw$19s_=($19t=m$1.JsCallable(treeSet$,$19p),$19u=$19q.$_map(m$1.$JsCallable((function($19v){return m$1.Entry($19v,$19v,{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet});}),[{nm:'elem',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}}),{Result$map:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}}),TreeMap($19t,$19u,{Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet,Item$TreeMap:treeSet$.$$targs$$.Element$TreeSet}));
m$1.atr$(treeSet$,'$1dkeuw$19s',function(){return this.$1dkeuw$19s_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
var $19t,$19u;
return treeSet$;
};
function TreeSet_$c$($19p,$19q,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
if($19q===undefined){$19q=m$1.empty();}
TreeSet$$c($$targs$$,treeSet$);
TreeSet_$c$$$a($19p,$19q,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$TreeSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:$def')];},d:['ceylon.collection','TreeSet','$cn','$def']};};
TreeSet.TreeSet_$c$=TreeSet_$c$;
ex$.TreeSet_$c$=TreeSet_$c$;
function TreeSet_copy$$a($19w,$$targs$$,treeSet$){
treeSet$.$1dkeuw$19r_=($19x=$19w,m$1.JsCallable($19x,m$1.nn$($19x)?$19x.$1dkeuw$19r:null));
m$1.atr$(treeSet$,'$1dkeuw$19r',function(){return this.$1dkeuw$19r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
var $19x;
treeSet$.$1dkeuw$19s_=$19w.$1dkeuw$19s.clone();
m$1.atr$(treeSet$,'$1dkeuw$19s',function(){return this.$1dkeuw$19s_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
return treeSet$;
};
function TreeSet_copy($19w,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
TreeSet$$c($$targs$$,treeSet$);
TreeSet_copy$$a($19w,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeSet',mt:'prm',$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:copy')];},d:['ceylon.collection','TreeSet','$cn','copy']};};
TreeSet.TreeSet_copy=TreeSet_copy;
ex$.TreeSet_copy=TreeSet_copy;
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$TreeSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Index$Ranged:'Element$TreeSet',Element$Ranged:'Element$TreeSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)].$sa$({t:m$1.Declaration$meta$declaration})),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
if(TreeSet.$$===undefined){
m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
(function(treeSet$){
m$1.atr$(treeSet$,'$1dkeuw$19s',function(){return this.$1dkeuw$19s_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
treeSet$.contains=function($19y){var treeSet$=this;
return treeSet$.$1dkeuw$19s.defines($19y);};treeSet$.add=function($19z){var treeSet$=this;
return !m$1.nn$(treeSet$.$1dkeuw$19s.put($19z,$19z));};treeSet$.remove=function($1a0){var treeSet$=this;
return m$1.nn$(treeSet$.$1dkeuw$19s.remove($1a0));};treeSet$.clear=function(){var treeSet$=this;
return treeSet$.$1dkeuw$19s.clear();};treeSet$.iterator=function(){var treeSet$=this;
return treeSet$.$1dkeuw$19s.keys.iterator();};m$1.atr$(treeSet$,'first',function(){
var treeSet$=this;
return ($1a1=treeSet$.$1dkeuw$19s.first,m$1.nn$($1a1)?$1a1.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
m$1.atr$(treeSet$,'last',function(){
var treeSet$=this;
return ($1a2=treeSet$.$1dkeuw$19s.last,m$1.nn$($1a2)?$1a2.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
treeSet$.higherElements=function($1a3){var treeSet$=this;
return treeSet$.$1dkeuw$19s.higherEntries($1a3).$_map(m$1.$JsCallable(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeSet$.Element$TreeSet,Key$Entry:treeSet$.Element$TreeSet}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}]),Return$Callable:treeSet$.$$targs$$.Element$TreeSet}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});};treeSet$.lowerElements=function($1a4){var treeSet$=this;
return treeSet$.$1dkeuw$19s.lowerEntries($1a4).$_map(m$1.$JsCallable(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeSet$.Element$TreeSet,Key$Entry:treeSet$.Element$TreeSet}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}]),Return$Callable:treeSet$.$$targs$$.Element$TreeSet}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});};treeSet$.ascendingElements=function($1a5,$1a6){var treeSet$=this;
return treeSet$.higherElements($1a5).takeWhile(m$1.$JsCallable((function($1a7){return (!treeSet$.$1dkeuw$19r($1a7,$1a6).equals(m$1.larger()));}),[{nm:'element',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}}));};treeSet$.descendingElements=function($1a8,$1a9){var treeSet$=this;
return treeSet$.lowerElements($1a8).takeWhile(m$1.$JsCallable((function($1aa){return (!treeSet$.$1dkeuw$19r($1aa,$1a9).equals(m$1.smaller()));}),[{nm:'element',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}}));};treeSet$.measure=function($1ab,$1ac){var treeSet$=this;
return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$1dkeuw$19r),[{nm:'x',mt:'prm',$t:treeSet$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.Comparison}}),treeSet$.higherElements($1ab).take($1ac),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});};treeSet$.span=function($1ad,$1ae){var treeSet$=this;
return function(){var $1af=treeSet$.$1dkeuw$19r($1ad,$1ae).equals(m$1.larger());return ($1ag=m$1.$JsCallable((function($1ah,$1ai){return ($1aj=($1af?treeSet$.$1dkeuw$19r($1ai,$1ah):null),m$1.nn$($1aj)?$1aj:treeSet$.$1dkeuw$19r($1ah,$1ai));}),[{nm:'x',mt:'prm',$t:treeSet$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Comparison}}),$1ak=($1al=($1af?treeSet$.descendingElements($1ad,$1ae):null),m$1.nn$($1al)?$1al:treeSet$.ascendingElements($1ad,$1ae)),TreeSet($1ag,$1ak,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}));}();};treeSet$.spanFrom=function($1am){var treeSet$=this;
return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$1dkeuw$19r),[{nm:'x',mt:'prm',$t:treeSet$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.Comparison}}),treeSet$.higherElements($1am),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});};treeSet$.spanTo=function($1an){var treeSet$=this;
return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$1dkeuw$19r),[{nm:'x',mt:'prm',$t:treeSet$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.Comparison}}),treeSet$.takeWhile(m$1.$JsCallable((function($1ao){return (!treeSet$.$1dkeuw$19r($1ao,$1an).equals(m$1.larger()));}),[{nm:'element',mt:'prm',$t:treeSet$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});};treeSet$.clone=function(){var treeSet$=this;
return TreeSet_copy(treeSet$,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});};
treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
treeSet$.complement=function($1ap,$hn5pfs$){
var treeSet$=this;
var $1aq=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
var $1as;for(var $1ar=treeSet$.iterator();($1as=$1ar.next())!==m$1.finished();){
if((!$1ap.contains($1as))){
$1aq.add($1as);
}
}
return $1aq;
};treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
treeSet$.exclusiveUnion=function($1at,$w5s243$){
var treeSet$=this;
var $1au=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$w5s243$.Other$exclusiveUnion])});
var $1aw;for(var $1av=treeSet$.iterator();($1aw=$1av.next())!==m$1.finished();){
if((!$1at.contains($1aw))){
$1au.add($1aw);
}
}
var $1ay;for(var $1ax=$1at.iterator();($1ay=$1ax.next())!==m$1.finished();){
if((!treeSet$.contains($1ay))){
$1au.add($1ay);
}
}
return $1au;
};treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
treeSet$.intersection=function($1az,$8ak55h$){
var treeSet$=this;
var $1b0=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([treeSet$.$$targs$$.Element$TreeSet,$8ak55h$.Other$intersection])});
var $1b2;for(var $1b1=treeSet$.iterator();($1b2=$1b1.next())!==m$1.finished();){
var $1b3;
if($1az.contains($1b2)&&m$1.is$(($1b3=$1b2),$8ak55h$.Other$intersection,$8ak55h$)){
$1b0.add($1b3);
}
}
return $1b0;
};treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
treeSet$.union=function($1b4,$vdkdyl$){
var treeSet$=this;
var $1b5=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$vdkdyl$.Other$union])});
$1b5.addAll(treeSet$);
$1b5.addAll($1b4);
return $1b5;
};treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
treeSet$.equals=function($1b6){var treeSet$=this;
return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(treeSet$,$1b6);};m$1.atr$(treeSet$,'hash',function(){
var treeSet$=this;
return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
})(TreeSet.$$.prototype);
}
return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;
$init$TreeSet();
var $1a1,$1a2,$1ag,$1aj,$1ak,$1al;
function naturalOrderTreeSet($1b7,$fl14hl$){return TreeSet(m$1.$JsCallable((function($1b8,$1b9){return $1b8.compare($1b9);}),[{nm:'x',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet},{nm:'y',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet}],{Arguments$Callable:m$1.mtt$([$fl14hl$.Element$naturalOrderTreeSet,$fl14hl$.Element$naturalOrderTreeSet]),Return$Callable:{t:m$1.Comparison}}),$1b7,{Element$TreeSet:$fl14hl$.Element$naturalOrderTreeSet});};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$naturalOrderTreeSet',Absent$Iterable:{t:m$1.Null}}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
function UnmodifiableList($1dkeuw$1ba,$$targs$$,unmodifiableList$){
$init$UnmodifiableList();
if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,$$targs$$);
unmodifiableList$.$1dkeuw$1ba_=$1dkeuw$1ba;
m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
ex$.UnmodifiableList=UnmodifiableList;
function $init$UnmodifiableList(){
if(UnmodifiableList.$$===undefined){
m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
(function(unmodifiableList$){
m$1.atr$(unmodifiableList$,'$1dkeuw$1ba',function(){return this.$1dkeuw$1ba_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
unmodifiableList$.getFromFirst=function($1bb){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.getFromFirst($1bb);};m$1.atr$(unmodifiableList$,'size',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
m$1.atr$(unmodifiableList$,'lastIndex',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
m$1.atr$(unmodifiableList$,'first',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
m$1.atr$(unmodifiableList$,'rest',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$1ba.rest,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
unmodifiableList$.iterator=function(){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.iterator();};m$1.atr$(unmodifiableList$,'reversed',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$1ba.reversed,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
unmodifiableList$.measure=function($1bc,$1bd){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.measure($1bc,$1bd);};unmodifiableList$.span=function($1be,$1bf){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.span($1be,$1bf);};unmodifiableList$.spanFrom=function($1bg){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.spanFrom($1bg);};unmodifiableList$.spanTo=function($1bh){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.spanTo($1bh);};unmodifiableList$.equals=function($1bi){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.equals($1bi);};m$1.atr$(unmodifiableList$,'hash',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
unmodifiableList$.clone=function(){var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$1ba.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});};unmodifiableList$.each=function($1bj){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$1ba.each(m$1.JsCallable(unmodifiableList$,$1bj));};
})(UnmodifiableList.$$.prototype);
}
return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;
$init$UnmodifiableList();
function unmodifiableList($1bk,$apctt9$){return UnmodifiableList($1bk,{Element$UnmodifiableList:$apctt9$.Element$unmodifiableList});};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function UnmodifiableMap($1dkeuw$1bl,$$targs$$,unmodifiableMap$){
$init$UnmodifiableMap();
if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,$$targs$$);
unmodifiableMap$.$1dkeuw$1bl_=$1dkeuw$1bl;
m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
unmodifiableMap$.items_=unmodifiableMap$.$1dkeuw$1bl.items;
return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
ex$.UnmodifiableMap=UnmodifiableMap;
function $init$UnmodifiableMap(){
if(UnmodifiableMap.$$===undefined){
m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
(function(unmodifiableMap$){
m$1.atr$(unmodifiableMap$,'$1dkeuw$1bl',function(){return this.$1dkeuw$1bl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
unmodifiableMap$.$_get=function($1bm){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.$_get($1bm);};unmodifiableMap$.defines=function($1bn){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.defines($1bn);};unmodifiableMap$.iterator=function(){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.iterator();};m$1.atr$(unmodifiableMap$,'size',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
m$1.atr$(unmodifiableMap$,'keys',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.keys;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
m$1.atr$(unmodifiableMap$,'items',function(){return this.items_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
unmodifiableMap$.equals=function($1bo){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.equals($1bo);};m$1.atr$(unmodifiableMap$,'hash',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
unmodifiableMap$.clone=function(){var unmodifiableMap$=this;
return UnmodifiableMap(unmodifiableMap$.$1dkeuw$1bl.clone(),{Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap});};unmodifiableMap$.each=function($1bp){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1bl.each(m$1.JsCallable(unmodifiableMap$,$1bp));};
})(UnmodifiableMap.$$.prototype);
}
return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;
$init$UnmodifiableMap();
function unmodifiableMap($1bq,$pjsjp5$){return UnmodifiableMap($1bq,{Item$UnmodifiableMap:$pjsjp5$.Item$unmodifiableMap,Key$UnmodifiableMap:$pjsjp5$.Key$unmodifiableMap});};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
function UnmodifiableSet($1dkeuw$1br,$$targs$$,unmodifiableSet$){
$init$UnmodifiableSet();
if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,$$targs$$);
unmodifiableSet$.$1dkeuw$1br_=$1dkeuw$1br;
m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(["Gavin King"].$sa$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
ex$.UnmodifiableSet=UnmodifiableSet;
function $init$UnmodifiableSet(){
if(UnmodifiableSet.$$===undefined){
m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
(function(unmodifiableSet$){
m$1.atr$(unmodifiableSet$,'$1dkeuw$1br',function(){return this.$1dkeuw$1br_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
unmodifiableSet$.iterator=function(){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.iterator();};m$1.atr$(unmodifiableSet$,'size',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
unmodifiableSet$.contains=function($1bs){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.contains($1bs);};unmodifiableSet$.complement=function($1bt,$rdd3zt$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.complement($1bt,{Other$complement:$rdd3zt$.Other$complement});};
unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
unmodifiableSet$.exclusiveUnion=function($1bu,$acz99u$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.exclusiveUnion($1bu,{Other$exclusiveUnion:$acz99u$.Other$exclusiveUnion});};
unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
unmodifiableSet$.intersection=function($1bv,$9faf6e$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.intersection($1bv,{Other$intersection:$9faf6e$.Other$intersection});};
unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
unmodifiableSet$.union=function($1bw,$tnhkj6$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.union($1bw,{Other$union:$tnhkj6$.Other$union});};
unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
unmodifiableSet$.superset=function($1bx){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.superset($1bx);};unmodifiableSet$.subset=function($1by){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.subset($1by);};unmodifiableSet$.equals=function($1bz){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.equals($1bz);};m$1.atr$(unmodifiableSet$,'hash',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
unmodifiableSet$.clone=function(){var unmodifiableSet$=this;
return UnmodifiableSet(unmodifiableSet$.$1dkeuw$1br.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});};unmodifiableSet$.each=function($1c0){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$1br.each(m$1.JsCallable(unmodifiableSet$,$1c0));};
})(UnmodifiableSet.$$.prototype);
}
return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;
$init$UnmodifiableSet();
function unmodifiableSet($1c1,$pjsf5f$){return UnmodifiableSet($1c1,{Element$UnmodifiableSet:$pjsf5f$.Element$unmodifiableSet});};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
ex$.$pkgunsh$ceylon$collection={'Cell':Cell,'CellIterator':CellIterator,'Counter':Counter,'maximumCapacity':$prop$getMaximumCapacity,'invert':invert,'LinkedCell':LinkedCell,'LinkedCellIterator':LinkedCellIterator,'entryStore':entryStore,'elementStore':elementStore,'measureToSpan':measureToSpan,'spanToMeasure':spanToMeasure,'largest':largest,'smallest':smallest,'StoreIterator':StoreIterator,'UnmodifiableList':UnmodifiableList,'UnmodifiableMap':UnmodifiableMap,'UnmodifiableSet':UnmodifiableSet};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
