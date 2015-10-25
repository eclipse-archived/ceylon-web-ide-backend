(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/promise/1.2.0/ceylon.promise-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.promise/1.2.0');
var $31q;function $valinit$$31q(){if($31q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'currentExecutionListeners\' before it was set"),'5:0-5:93','addGlobalExecutionListener.ceylon');
if($31q===undefined){$31q=m$1.INIT$;$31q=AtomicRef$internal(m$1.empty(),{Value$AtomicRef:{t:m$1.Sequential,a:{Element$Sequential:{t:ExecutionListener}}}})};return $31q;};
function currentExecutionListeners(){return $valinit$$31q();}
var $prop$getCurrentExecutionListeners={$crtmm$:function(){return{mod:$CCMM$,$t:{t:AtomicRef$internal,a:{Value$AtomicRef:{t:m$1.Sequential,a:{Element$Sequential:{t:ExecutionListener}}}}},d:['ceylon.promise','currentExecutionListeners']};}};
ex$.$prop$getCurrentExecutionListeners=$prop$getCurrentExecutionListeners;
$prop$getCurrentExecutionListeners.get=currentExecutionListeners;
function addGlobalExecutionListener($31r){
while(true){
var $31s=currentExecutionListeners().$_get();
var $31t=$31s.withTrailing($31r,{Other$withTrailing:{t:ExecutionListener}});
if(currentExecutionListeners().compareAndSet($31s,$31t)){
break;
}
}
function $31u(){
while(true){
var $31v=currentExecutionListeners().$_get();
var $31w=m$1.tpl$([],($31x=m$1.$JsCallable((function($31y){return (!$31y.equals($31r));}),[{nm:'element',mt:'prm',$t:{t:ExecutionListener}}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_Boolean}}),($31z=$31v,m$1.JsCallable($31z,m$1.nn$($31z)?$31z.$_filter:null))($31x)));
var $31x,$31z;
if(!($31v.size==$31w.size)){
break;
}
else{
if(currentExecutionListeners().compareAndSet($31v,$31w)){
break;
}
}
}
};$31u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:addGlobalExecutionListener,d:['ceylon.promise','addGlobalExecutionListener','$m','remove$fn7r6o']};};
return m$1.JsCallable(0,$31u);
}
ex$.addGlobalExecutionListener=addGlobalExecutionListener;
addGlobalExecutionListener.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},ps:[{nm:'onChild',mt:'prm',$t:{t:ExecutionListener}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:addGlobalExecutionListener')];},d:['ceylon.promise','addGlobalExecutionListener']};};
function Completable($$targs$$,completable$){
m$1.set_type_args(completable$,$$targs$$,Completable);
}
Completable.$crtmm$=function(){return{mod:$CCMM$,tp:{Value$Completable:{dv:'in'}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completable'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Completable']};};
ex$.Completable=Completable;
function $init$Completable(){
if(Completable.$$===undefined){
m$1.initTypeProtoI(Completable,'ceylon.promise::Completable');
(function(completable$){
completable$.fulfill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['Value$Completable',{t:Promise,a:{Value$Promise:'Value$Completable'}}]}}],$cont:Completable,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completable:$m:fulfill')];},d:['ceylon.promise','Completable','$m','fulfill']};}};completable$.reject={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}],$cont:Completable,pa:5,an:function(){return[m$1.doc("Rejects the promise with a reason.")];},d:['ceylon.promise','Completable','$m','reject']};}};completable$.complete=function($320){
var completable$=this;
var $321;
if(m$1.is$(($321=$320),m$1.mut$([completable$.$$targs$$.Value$Completable,{t:Promise,a:{Value$Promise:completable$.$$targs$$.Value$Completable}}]))){
completable$.fulfill($321);
}
else{
completable$.reject($321);
}
};completable$.complete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['Value$Completable',{t:Promise,a:{Value$Promise:'Value$Completable'}},{t:m$1.Throwable}]}}],$cont:Completable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completable:$m:complete')];},d:['ceylon.promise','Completable','$m','complete']};};
})(Completable.$$.prototype);
}
return Completable;
}
ex$.$init$Completable=$init$Completable;
$init$Completable();
function Completion($$targs$$,completion$){
m$1.set_type_args(completion$,$$targs$$,Completion);
Promised({Value$Promised:$$targs$$.T$Completion},completion$);
completion$.$_map$defs$onRejected=function($322,$323,$8ns9ed$){return m$1.JsCallable(completion$,rethrow);};
completion$.flatMap$defs$onRejected=function($324,$325,$3k5dpu$){return m$1.JsCallable(completion$,rethrow);};
}
Completion.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Completion:{dv:'out'},T$Completion:{dv:'out',sts:[{t:m$1.Sequential,a:{Element$Sequential:'Element$Completion'}}]}},sts:[{t:Promised,a:{Value$Promised:'T$Completion'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completion'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Completion']};};
ex$.Completion=Completion;
function $init$Completion(){
if(Completion.$$===undefined){
m$1.initTypeProtoI(Completion,'ceylon.promise::Completion',$init$Promised());
(function(completion$){
completion$.$_map={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:'T$Completion',Return$Callable:'Result$map'}},an:function(){return[m$1.doc("A function that is called when fulfilled.")];}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}},an:function(){return[m$1.doc("A function that is called when rejected.")];}}],$cont:Completion,tp:{Result$map:{}},pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completion:$m:map')];},d:['ceylon.promise','Completion','$m','map']};}};completion$.flatMap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:'T$Completion',Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}},an:function(){return[m$1.doc("A function that is called when fulfilled.")];}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}},an:function(){return[m$1.doc("A function that is called when rejected.")];}}],$cont:Completion,tp:{Result$flatMap:{}},pa:5,an:function(){return[m$1.doc("Compose and return a [[Promise]]")];},d:['ceylon.promise','Completion','$m','flatMap']};}};completion$.completed$defs$onRejected=function($326,$327){var completion$=this;
return m$1.JsCallable(completion$,rethrow);};
completion$.completed=function($326,$327){var completion$=this;
if($327===undefined){$327=completion$.completed$defs$onRejected($326,$327);}
return completion$.$_map(m$1.JsCallable(completion$,$326),m$1.JsCallable(completion$,$327),{Result$map:{t:m$1.Anything}});};
completion$.completed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:'T$Completion',Return$Callable:{t:m$1.Anything}}},an:function(){return[m$1.doc("A function that is called when fulfilled.")];}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:m$1.Anything}}},an:function(){return[m$1.doc("A function that is called when rejected.")];}}],$cont:Completion,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completion:$m:completed')];},d:['ceylon.promise','Completion','$m','completed']};};
completion$.and={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Completion,a:{T$Completion:{t:'T',l:['Other$and']},Element$Completion:{t:'u',l:['Element$Completion','Other$and']}}},ps:[{nm:'other',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Other$and'}}}],$cont:Completion,tp:{Other$and:{}},pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Completion:$m:and')];},d:['ceylon.promise','Completion','$m','and']};}};
})(Completion.$$.prototype);
}
return Completion;
}
ex$.$init$Completion=$init$Completion;
$init$Completion();
function Conjunction($8njqo1$328,$8njqo1$329,$$targs$$,conjunction$){
$init$Conjunction();
if(conjunction$===undefined)conjunction$=new Conjunction.$$;
m$1.set_type_args(conjunction$,$$targs$$);
conjunction$.$8njqo1$328_=$8njqo1$328;
conjunction$.$8njqo1$329_=$8njqo1$329;
Completion({T$Completion:{t:m$1.Tuple,a:{Element$Tuple:$$targs$$.Element$Conjunction,First$Tuple:$$targs$$.First$Conjunction,Rest$Tuple:$$targs$$.Rest$Conjunction}},Element$Completion:$$targs$$.Element$Conjunction},conjunction$);
conjunction$.$8njqo1$32a_=Deferred($8njqo1$328.context,{Value$Deferred:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}});
conjunction$.promise_=conjunction$.$8njqo1$32a.promise;
conjunction$.$8njqo1$32b_=null;
conjunction$.$8njqo1$32c_=null;
$8njqo1$329.$_map(m$1.$JsCallable(m$1.JsCallable(conjunction$,conjunction$.$8njqo1$32d),[{nm:'val',mt:'prm',$t:conjunction$.Rest$Conjunction}],{Arguments$Callable:m$1.mtt$([conjunction$.$$targs$$.Rest$Conjunction]),Return$Callable:{t:m$1.Anything}}),m$1.$JsCallable(m$1.JsCallable(conjunction$,conjunction$.$8njqo1$32e),[{nm:'e',mt:'prm',$t:{t:m$1.Throwable}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Throwable}]),Return$Callable:{t:m$1.Anything}}),{Result$map:{t:m$1.Anything}});
$8njqo1$328.$_map(m$1.$JsCallable(m$1.JsCallable(conjunction$,conjunction$.$8njqo1$32f),[{nm:'val',mt:'prm',$t:conjunction$.First$Conjunction}],{Arguments$Callable:m$1.mtt$([conjunction$.$$targs$$.First$Conjunction]),Return$Callable:{t:m$1.Anything}}),m$1.$JsCallable(m$1.JsCallable(conjunction$,conjunction$.$8njqo1$32e),[{nm:'e',mt:'prm',$t:{t:m$1.Throwable}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Throwable}]),Return$Callable:{t:m$1.Anything}}),{Result$map:{t:m$1.Anything}});
return conjunction$;
}
Conjunction.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'first',mt:'prm',$t:{t:Promise,a:{Value$Promise:'First$Conjunction'}},an:function(){return[m$1.doc("The second promise.")];}},{nm:'rest',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Rest$Conjunction'}},an:function(){return[m$1.doc("The first promise.")];}}],tp:{Element$Conjunction:{dv:'out'},First$Conjunction:{dv:'out',sts:['Element$Conjunction']},Rest$Conjunction:{sts:[{t:m$1.Sequential,a:{Element$Sequential:'Element$Conjunction'}}]}},sts:[{t:Completion,a:{T$Completion:{t:'T',l:['First$Conjunction']},Element$Completion:'Element$Conjunction'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Conjunction'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Conjunction']};};
ex$.Conjunction=Conjunction;
function $init$Conjunction(){
if(Conjunction.$$===undefined){
m$1.initTypeProto(Conjunction,'ceylon.promise::Conjunction',m$1.Basic,$init$Completion());
(function(conjunction$){
m$1.atr$(conjunction$,'$8njqo1$328',function(){return this.$8njqo1$328_;},undefined,function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'First$Conjunction'}},$cont:Conjunction,an:function(){return[m$1.doc("The second promise.")];},d:['ceylon.promise','Conjunction','$at','first$cutmjn']};});
m$1.atr$(conjunction$,'$8njqo1$329',function(){return this.$8njqo1$329_;},undefined,function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Rest$Conjunction'}},$cont:Conjunction,an:function(){return[m$1.doc("The first promise.")];},d:['ceylon.promise','Conjunction','$at','rest$8vq6sf']};});
m$1.atr$(conjunction$,'$8njqo1$32a',function(){return this.$8njqo1$32a_;},undefined,function(){return{mod:$CCMM$,$t:{t:Deferred,a:{Value$Deferred:{t:'T',l:['First$Conjunction']}}},$cont:Conjunction,d:['ceylon.promise','Conjunction','$at','deferred$jcmj90']};});
m$1.atr$(conjunction$,'promise',function(){return this.promise_;},undefined,function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:{t:'T',l:['First$Conjunction']}}},$cont:Conjunction,pa:3,d:['ceylon.promise','Conjunction','$at','promise']};});
m$1.atr$(conjunction$,'$8njqo1$32b',function(){return this.$8njqo1$32b_;},function($32g){return this.$8njqo1$32b_=$32g;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'First$Conjunction']},$cont:Conjunction,pa:1027,d:['ceylon.promise','Conjunction','$at','firstVal$yc995i']};});
m$1.atr$(conjunction$,'$8njqo1$32c',function(){return this.$8njqo1$32c_;},function($32h){return this.$8njqo1$32c_=$32h;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Rest$Conjunction']},$cont:Conjunction,pa:1027,d:['ceylon.promise','Conjunction','$at','restVal$tpulim']};});
conjunction$.$8njqo1$32i=function(){
var conjunction$=this;
var $32j,$32k;
if(m$1.nn$(($32j=conjunction$.$8njqo1$32b))&&m$1.nn$(($32k=conjunction$.$8njqo1$32c))){
conjunction$.$8njqo1$32a.fulfill(m$1.Tuple($32j,$32k,{First$Tuple:m$1.mit$([conjunction$.$$targs$$.First$Conjunction,{t:m$1.$_Object}]),Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}));
}
};conjunction$.$8njqo1$32i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Conjunction,d:['ceylon.promise','Conjunction','$m','check$5is4p7']};};
conjunction$.$8njqo1$32e=function($32l){
var conjunction$=this;
conjunction$.$8njqo1$32a.reject($32l);
};conjunction$.$8njqo1$32e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'e',mt:'prm',$t:{t:m$1.Throwable}}],$cont:Conjunction,d:['ceylon.promise','Conjunction','$m','onReject$lunxnf']};};
conjunction$.$8njqo1$32d=function($32m){
var conjunction$=this;
conjunction$.$8njqo1$32c=$32m;
conjunction$.$8njqo1$32i();
};conjunction$.$8njqo1$32d.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:'Rest$Conjunction'}],$cont:Conjunction,d:['ceylon.promise','Conjunction','$m','onRestFulfilled$7ns3mv']};};
conjunction$.$8njqo1$32f=function($32n){
var conjunction$=this;
conjunction$.$8njqo1$32b=$32n;
conjunction$.$8njqo1$32i();
};conjunction$.$8njqo1$32f.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:'First$Conjunction'}],$cont:Conjunction,d:['ceylon.promise','Conjunction','$m','onFirstFulfilled$1ghnlh']};};
conjunction$.and=function($32o,$dnfa9q$){var conjunction$=this;
return Conjunction($32o,conjunction$.promise,{Rest$Conjunction:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}},Element$Conjunction:m$1.mut$([$dnfa9q$.Other$and,conjunction$.$$targs$$.Element$Conjunction]),First$Conjunction:$dnfa9q$.Other$and});};
conjunction$.and.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Completion,a:{T$Completion:{t:'T',l:['Other$and','First$Conjunction']},Element$Completion:{t:'u',l:['Element$Conjunction','Other$and']}}},ps:[{nm:'other',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Other$and'}}}],$cont:Conjunction,tp:{Other$and:{}},pa:3,d:['ceylon.promise','Conjunction','$m','and']};};
conjunction$.$_map=function($32p,$32q,$dnfiv7$){var conjunction$=this;
if($32q===undefined){$32q=conjunction$.$_map$defs$onRejected($32p,$32q);}
return ($32r=m$1.$JsCallable((function($32s){return m$1.unflatten(m$1.JsCallable(conjunction$,$32p),{Return$unflatten:$dnfiv7$.Result$map,Args$unflatten:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}})($32s);}),[{nm:'args',mt:'prm',$t:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}]),Return$Callable:$dnfiv7$.Result$map}),$32t=m$1.JsCallable(conjunction$,$32q),($32u=conjunction$.promise,m$1.JsCallable($32u,$32u.$_map,{Result$map:$dnfiv7$.Result$map}))($32r,$32t,{Result$map:$dnfiv7$.Result$map}));};
conjunction$.$_map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['First$Conjunction']},Return$Callable:'Result$map'}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}}}],$cont:Conjunction,tp:{Result$map:{}},pa:3,d:['ceylon.promise','Conjunction','$m','map']};};
conjunction$.flatMap=function($32v,$32w,$dfpbhy$){var conjunction$=this;
if($32w===undefined){$32w=conjunction$.flatMap$defs$onRejected($32v,$32w);}
return ($32x=m$1.$JsCallable((function($32y){return m$1.unflatten(m$1.JsCallable(conjunction$,$32v),{Return$unflatten:{t:Promise,a:{Value$Promise:$dfpbhy$.Result$flatMap}},Args$unflatten:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}})($32y);}),[{nm:'args',mt:'prm',$t:{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Tuple,a:{Element$Tuple:conjunction$.$$targs$$.Element$Conjunction,First$Tuple:conjunction$.$$targs$$.First$Conjunction,Rest$Tuple:conjunction$.$$targs$$.Rest$Conjunction}}]),Return$Callable:{t:Promise,a:{Value$Promise:$dfpbhy$.Result$flatMap}}}),$32z=m$1.JsCallable(conjunction$,$32w),($330=conjunction$.promise,m$1.JsCallable($330,$330.flatMap,{Result$flatMap:$dfpbhy$.Result$flatMap}))($32x,$32z,{Result$flatMap:$dfpbhy$.Result$flatMap}));};
conjunction$.flatMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['First$Conjunction']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}}],$cont:Conjunction,tp:{Result$flatMap:{}},pa:3,d:['ceylon.promise','Conjunction','$m','flatMap']};};
})(Conjunction.$$.prototype);
}
return Conjunction;
}
ex$.$init$Conjunction=$init$Conjunction;
$init$Conjunction();
var $32r,$32t,$32u,$32x,$32z,$330;
function Deferred($8njqo1$331,$$targs$$,deferred$){
$init$Deferred();
if(deferred$===undefined)deferred$=new Deferred.$$;
m$1.set_type_args(deferred$,$$targs$$);
if($8njqo1$331===undefined){$8njqo1$331=globalExecutionContext();}
deferred$.$8njqo1$331_=$8njqo1$331;
Completable({Value$Completable:$$targs$$.Value$Deferred},deferred$);
Promised({Value$Promised:$$targs$$.Value$Deferred},deferred$);
deferred$.$8njqo1$332_=AtomicRef$internal(null,{Value$AtomicRef:m$1.mut$([{t:m$1.Null},{t:deferred$.State$Deferred}])});
deferred$.$8njqo1$333_=deferred$.$8njqo1$334();
return deferred$;
}
Deferred.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'context',mt:'prm',def:1,$t:{t:ExecutionContext},an:function(){return[m$1.doc("The current context")];}}],tp:{Value$Deferred:{}},sts:[{t:Completable,a:{Value$Completable:'Value$Deferred'}},{t:Promised,a:{Value$Promised:'Value$Deferred'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Deferred'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Deferred']};};
ex$.Deferred=Deferred;
function $init$Deferred(){
if(Deferred.$$===undefined){
m$1.initTypeProto(Deferred,'ceylon.promise::Deferred',m$1.Basic,$init$Completable(),$init$Promised());
(function(deferred$){
m$1.atr$(deferred$,'$8njqo1$331',function(){return this.$8njqo1$331_;},undefined,function(){return{mod:$CCMM$,$t:{t:ExecutionContext},$cont:Deferred,an:function(){return[m$1.doc("The current context")];},d:['ceylon.promise','Deferred','$at','context$tw7s7p']};});
m$1.atr$(deferred$,'$8njqo1$332',function(){return this.$8njqo1$332_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtomicRef$internal,a:{Value$AtomicRef:{t:'u',l:[{t:m$1.Null},{t:deferred$.State$Deferred,a:{Value$Deferred:'Value$Deferred'}}]}}},$cont:Deferred,an:function(){return[m$1.doc("The current state")];},d:['ceylon.promise','Deferred','$at','state$7silgn']};});
function $8njqo1$334(){
var deferred$=this;
var promise$Deferred$=new this.$8njqo1$334.$$;promise$Deferred$.outer$=this;
Promise({Value$Promise:deferred$.$$targs$$.Value$Deferred},promise$Deferred$);
return promise$Deferred$;
};$8njqo1$334.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Promise,a:{Value$Promise:'Value$Deferred'}},$cont:Deferred,d:['ceylon.promise','Deferred','$o','promise']};};
function $init$promise(){
if($8njqo1$334.$$===undefined){
m$1.initTypeProto($8njqo1$334,'ceylon.promise::Deferred.promise',$init$Promise());
Deferred.$8njqo1$334=$8njqo1$334;
(function(promise$Deferred$){
m$1.atr$(promise$Deferred$,'context',function(){
var promise$Deferred$=this,deferred$=promise$Deferred$.outer$;
return promise$Deferred$.outer$.$8njqo1$331;
},undefined,function(){return{mod:$CCMM$,$t:{t:ExecutionContext},$cont:deferred$.$8njqo1$334,pa:3,d:['ceylon.promise','Deferred','$o','promise','$at','context']};});
promise$Deferred$.$_map=function($335,$336,$yf0gth$){
var promise$Deferred$=this,deferred$=promise$Deferred$.outer$;
if($336===undefined){$336=promise$Deferred$.$_map$defs$onRejected($335,$336);}
var $337=currentExecutionListeners().$_get();
var $338;
if(!$337.empty){
$338=m$1.tpl$([],$337.$_map(m$1.$JsCallable((function($339){return $339.onChild();}),[{nm:'listener',mt:'prm',$t:{t:ExecutionListener}}],{Arguments$Callable:m$1.mtt$([{t:ExecutionListener}]),Return$Callable:{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]),Return$Callable:{t:m$1.Anything}}}}),{Result$map:{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]),Return$Callable:{t:m$1.Anything}}}}));
}
else{
$338=m$1.empty();
}
var $33a=promise$Deferred$.context.childContext();
var $33b=Deferred($33a,{Value$Deferred:$yf0gth$.Result$map});
function $33c($33d,$33e,$ljp1jc$){
var $33f=m$1.$JsCallable((function(){
var $33g;
$prop$get$33g={$crtmm$:function(){return{mod:$CCMM$,$t:'Result$map',$cont:$33c,pa:3,d:['ceylon.promise','Deferred','$o','promise','$m','map','$at','t$posqmo']};}};
$prop$get$33g.get=function(){return $33g};
try{
$33g=$33d($33e);
}
catch($33h){
if($33h.getT$name===undefined)$33h=m$1.NatErr($33h);
if(m$1.is$($33h,{t:m$1.Throwable})){
$33b.reject($33h);
return;
}else{throw $33h}
}
$33b.fulfill($33g);
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}});
if(!$337.empty){
var $33j;for(var $33i=$338.iterator();($33j=$33i.next())!==m$1.finished();){
var $33k=$33j;var $33l=(function(){var $33m=$33k;var $33n=m$1.JsCallable(promise$Deferred$,$33f);
$33f=m$1.$JsCallable((function(){
$33m(m$1.JsCallable(promise$Deferred$,$33n));
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}});
}());if($33l!==undefined){return $33l;}
}
}
promise$Deferred$.context.run(m$1.JsCallable(promise$Deferred$,$33f));
};$33c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'on',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$callback']},Return$Callable:'Result$map'}}},{nm:'val',mt:'prm',$t:'T$callback'}],$cont:promise$Deferred$.$_map,tp:{T$callback:{}},d:['ceylon.promise','Deferred','$o','promise','$m','map','$m','callback$pmlqpg']};};
($33o=m$1.$JsCallable((function($33p){return $33c(m$1.JsCallable(promise$Deferred$,$335),$33p,{T$callback:deferred$.$$targs$$.Value$Deferred});}),[{nm:'val',mt:'prm',$t:deferred$.Value$Deferred}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}),$33q=m$1.$JsCallable((function($33r){return $33c(m$1.JsCallable(promise$Deferred$,$336),$33r,{T$callback:{t:m$1.Throwable}});}),[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}),promise$Deferred$.$8njqo1$33s($33o,$33q));
var $33o,$33q;
return $33b.promise;
};promise$Deferred$.$_map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Deferred']},Return$Callable:'Result$map'}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}}}],$cont:deferred$.$8njqo1$334,tp:{Result$map:{}},pa:3,d:['ceylon.promise','Deferred','$o','promise','$m','map']};};
promise$Deferred$.flatMap=function($33t,$33u,$yz9qla$){
var promise$Deferred$=this,deferred$=promise$Deferred$.outer$;
if($33u===undefined){$33u=promise$Deferred$.flatMap$defs$onRejected($33t,$33u);}
var $33v=currentExecutionListeners().$_get();
var $33w;
if(!$33v.empty){
$33w=m$1.tpl$([],$33v.$_map(m$1.$JsCallable((function($33x){return $33x.onChild();}),[{nm:'listener',mt:'prm',$t:{t:ExecutionListener}}],{Arguments$Callable:m$1.mtt$([{t:ExecutionListener}]),Return$Callable:{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]),Return$Callable:{t:m$1.Anything}}}}),{Result$map:{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]),Return$Callable:{t:m$1.Anything}}}}));
}
else{
$33w=m$1.empty();
}
var $33y=promise$Deferred$.context.childContext();
var $33z=Deferred($33y,{Value$Deferred:$yz9qla$.Result$flatMap});
function $340($341,$342,$5ydtnz$){
var $343=m$1.$JsCallable((function(){
var $344;
$prop$get$344={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},$cont:$340,pa:3,d:['ceylon.promise','Deferred','$o','promise','$m','flatMap','$at','t$hev0re']};}};
$prop$get$344.get=function(){return $344};
try{
$344=$341($342);
}
catch($345){
if($345.getT$name===undefined)$345=m$1.NatErr($345);
if(m$1.is$($345,{t:m$1.Throwable})){
$33z.reject($345);
return;
}else{throw $345}
}
$33z.fulfill($344);
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}});
if(!$33v.empty){
var $347;for(var $346=$33w.iterator();($347=$346.next())!==m$1.finished();){
var $348=$347;var $349=(function(){var $34a=$348;var $34b=m$1.JsCallable(promise$Deferred$,$343);
$343=m$1.$JsCallable((function(){
$34a(m$1.JsCallable(promise$Deferred$,$34b));
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}});
}());if($349!==undefined){return $349;}
}
}
promise$Deferred$.context.run(m$1.JsCallable(promise$Deferred$,$343));
};$340.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'on',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$callback']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}},{nm:'val',mt:'prm',$t:'T$callback'}],$cont:promise$Deferred$.flatMap,tp:{T$callback:{}},d:['ceylon.promise','Deferred','$o','promise','$m','flatMap','$m','callback$6bx7hx']};};
($34c=m$1.$JsCallable((function($34d){return $340(m$1.JsCallable(promise$Deferred$,$33t),$34d,{T$callback:deferred$.$$targs$$.Value$Deferred});}),[{nm:'val',mt:'prm',$t:deferred$.Value$Deferred}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}),$34e=m$1.$JsCallable((function($34f){return $340(m$1.JsCallable(promise$Deferred$,$33u),$34f,{T$callback:{t:m$1.Throwable}});}),[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}),promise$Deferred$.$8njqo1$33s($34c,$34e));
var $34c,$34e;
return $33z.promise;
};promise$Deferred$.flatMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Deferred']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}}],$cont:deferred$.$8njqo1$334,tp:{Result$flatMap:{}},pa:3,d:['ceylon.promise','Deferred','$o','promise','$m','flatMap']};};
promise$Deferred$.$8njqo1$33s=function($34g,$34h){
var promise$Deferred$=this,deferred$=promise$Deferred$.outer$;
while(true){
var $34i=promise$Deferred$.outer$.$8njqo1$332.$_get();
var $34j=$34i;
if(m$1.is$($34j,{t:m$1.Null})) {
var $34k=promise$Deferred$.outer$.ListenerState$Deferred(m$1.JsCallable(promise$Deferred$,$34g),m$1.JsCallable(promise$Deferred$,$34h));
if(promise$Deferred$.outer$.$8njqo1$332.compareAndSet($34j,$34k)){
break;
}
}
else if(m$1.is$($34j,{t:Deferred.$$.prototype.ListenerState$Deferred},[{t:Deferred,a:{Value$Deferred:deferred$.$$targs$$.Value$Deferred}}])) {
var $34l=promise$Deferred$.outer$.ListenerState$Deferred(m$1.JsCallable(promise$Deferred$,$34g),m$1.JsCallable(promise$Deferred$,$34h),$34j);
if(promise$Deferred$.outer$.$8njqo1$332.compareAndSet($34j,$34l)){
break;
}
}
else if(m$1.is$($34j,{t:Deferred.$$.prototype.PromiseState$Deferred},[{t:Deferred,a:{Value$Deferred:deferred$.$$targs$$.Value$Deferred}}])) {
$34j.promise.$_map(m$1.JsCallable(promise$Deferred$,$34g),m$1.JsCallable(promise$Deferred$,$34h),{Result$map:{t:m$1.Anything}});
break;
}
}
};promise$Deferred$.$8njqo1$33s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'onFulfilledCallback',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Deferred']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:'Value$Deferred'}]},{nm:'onRejectedCallback',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}]}],$cont:deferred$.$8njqo1$334,d:['ceylon.promise','Deferred','$o','promise','$m','foobar$3evywg']};};
})($8njqo1$334.$$.prototype);
}
return $8njqo1$334;
}
deferred$.$init$promise=$init$promise;
m$1.atr$(deferred$,'promise',function(){return this.$8njqo1$333_;},undefined,function(){return{mod:$CCMM$,$t:{t:Deferred.$$.prototype.$init$promise()},$cont:Deferred,pa:3,an:function(){return[m$1.doc("The promise of this deferred.")];},d:['ceylon.promise','Deferred','$o','promise']};});
deferred$.$8njqo1$334=$8njqo1$334;deferred$.$8njqo1$334.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred.$$.prototype.$init$promise()},$cont:Deferred,pa:3,an:function(){return[m$1.doc("The promise of this deferred.")];},d:['ceylon.promise','Deferred','$o','promise']};};
deferred$.$8njqo1$34n=function($34o){
var deferred$=this;
while(true){
var $34p=deferred$.$8njqo1$332.$_get();
var $34q=$34p;
if(m$1.is$($34q,{t:m$1.Null})) {
var $34r=deferred$.PromiseState$Deferred($34o);
if(deferred$.$8njqo1$332.compareAndSet($34q,$34r)){
break;
}
}
else if(m$1.is$($34q,{t:deferred$.ListenerState$Deferred},[{t:Deferred,a:{Value$Deferred:deferred$.$$targs$$.Value$Deferred}}])) {
var $34s=deferred$.PromiseState$Deferred($34o);
if(deferred$.$8njqo1$332.compareAndSet($34q,$34s)){
$34q.update($34o);
break;
}
}
else if(m$1.is$($34q,{t:deferred$.PromiseState$Deferred},[{t:Deferred,a:{Value$Deferred:deferred$.$$targs$$.Value$Deferred}}])) {
break;
}
}
};deferred$.$8njqo1$34n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'promise',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Value$Deferred'}}}],$cont:Deferred,d:['ceylon.promise','Deferred','$m','update$hzef6p']};};
deferred$.fulfill=function($34t){
var deferred$=this;
var $34u;
if(m$1.is$(($34u=$34t),{t:Promise,a:{Value$Promise:deferred$.$$targs$$.Value$Deferred}})){
deferred$.$8njqo1$34n($34u);
}
else{
deferred$.$8njqo1$34n(deferred$.$8njqo1$331.fulfilledPromise($34u,{T$fulfilledPromise:deferred$.$$targs$$.Value$Deferred}));
}
};deferred$.fulfill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['Value$Deferred',{t:Promise,a:{Value$Promise:'Value$Deferred'}}]}}],$cont:Deferred,pa:3,d:['ceylon.promise','Deferred','$m','fulfill']};};
deferred$.reject=function($34v){var deferred$=this;
return deferred$.$8njqo1$34n(deferred$.$8njqo1$331.rejectedPromise($34v,{T$rejectedPromise:deferred$.$$targs$$.Value$Deferred}));};function State$Deferred($34w$){
$init$State$Deferred();
if($34w$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.promise::Deferred.State"),'?','?')
$34w$.outer$=this;
return $34w$;
}
State$Deferred.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],$cont:Deferred,of:[{t:Deferred.$$.prototype.ListenerState$Deferred,a:{Value$Deferred:'Value$Deferred'}},{t:Deferred.$$.prototype.PromiseState$Deferred,a:{Value$Deferred:'Value$Deferred'}}],pa:256,d:['ceylon.promise','Deferred','$c','State$m0vuux']};};
function $init$State$Deferred(){
if(State$Deferred.$$===undefined){
m$1.initTypeProto(State$Deferred,'ceylon.promise::Deferred.State',m$1.Basic);
Deferred.State$Deferred=State$Deferred;
}
return State$Deferred;
}
deferred$.$init$State$Deferred=$init$State$Deferred;
deferred$.State$Deferred=State$Deferred;
function PromiseState$Deferred(promise,$34x$){
$init$PromiseState$Deferred();
if($34x$===undefined)$34x$=new this.PromiseState$Deferred.$$;
$34x$.outer$=this;
$34x$.promise_=promise;
$34x$.outer$.State$Deferred($34x$);
return $34x$;
}
PromiseState$Deferred.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Deferred.$$.prototype.State$Deferred,a:{Value$Deferred:'Value$Deferred'}},ps:[{nm:'promise',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Value$Deferred'}},pa:1}],$cont:Deferred,d:['ceylon.promise','Deferred','$c','PromiseState$x87nac']};};
function $init$PromiseState$Deferred(){
if(PromiseState$Deferred.$$===undefined){
m$1.initTypeProto(PromiseState$Deferred,'ceylon.promise::Deferred.PromiseState',$init$State$Deferred());
Deferred.PromiseState$Deferred=PromiseState$Deferred;
(function($34x$){
m$1.atr$($34x$,'promise',function(){return this.promise_;},undefined,function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Value$Deferred'}},$cont:deferred$.PromiseState$Deferred,pa:1,d:['ceylon.promise','Deferred','$c','PromiseState$x87nac','$at','promise']};});
})(PromiseState$Deferred.$$.prototype);
}
return PromiseState$Deferred;
}
deferred$.$init$PromiseState$Deferred=$init$PromiseState$Deferred;
deferred$.PromiseState$Deferred=PromiseState$Deferred;
function ListenerState$Deferred($8njqo1$34y,$8njqo1$34z,$8njqo1$350,$351$){
$init$ListenerState$Deferred();
if($351$===undefined)$351$=new this.ListenerState$Deferred.$$;
$351$.outer$=this;
$351$.$8njqo1$34y_=$8njqo1$34y;
$351$.$8njqo1$34z_=$8njqo1$34z;
if($8njqo1$350===undefined){$8njqo1$350=null;}
$351$.$8njqo1$350_=$8njqo1$350;
$351$.outer$.State$Deferred($351$);
return $351$;
}
ListenerState$Deferred.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Deferred.$$.prototype.State$Deferred,a:{Value$Deferred:'Value$Deferred'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Deferred']},Return$Callable:{t:m$1.Anything}}}},{nm:'onRejected',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:m$1.Anything}}}},{nm:'previous',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Deferred.$$.prototype.ListenerState$Deferred,a:{Value$Deferred:'Value$Deferred'}}]}}],$cont:Deferred,d:['ceylon.promise','Deferred','$c','ListenerState$hm3npv']};};
function $init$ListenerState$Deferred(){
if(ListenerState$Deferred.$$===undefined){
m$1.initTypeProto(ListenerState$Deferred,'ceylon.promise::Deferred.ListenerState',$init$State$Deferred());
Deferred.ListenerState$Deferred=ListenerState$Deferred;
(function($351$){
m$1.atr$($351$,'$8njqo1$34y',function(){return this.$8njqo1$34y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Deferred']},Return$Callable:{t:m$1.Anything}}},$cont:deferred$.ListenerState$Deferred,d:['ceylon.promise','Deferred','$c','ListenerState$hm3npv','$at','onFulfilled$m8dcku']};});
m$1.atr$($351$,'$8njqo1$34z',function(){return this.$8njqo1$34z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:m$1.Anything}}},$cont:deferred$.ListenerState$Deferred,d:['ceylon.promise','Deferred','$c','ListenerState$hm3npv','$at','onRejected$z8sdb7']};});
m$1.atr$($351$,'$8njqo1$350',function(){return this.$8njqo1$350_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Deferred.$$.prototype.ListenerState$Deferred,a:{Value$Deferred:'Value$Deferred'}}]},$cont:deferred$.ListenerState$Deferred,d:['ceylon.promise','Deferred','$c','ListenerState$hm3npv','$at','previous$x7f1v7']};});
$351$.update=function($352){
var $351$=this;
var $353;
if(m$1.nn$(($353=$351$.$8njqo1$350))){
$353.update($352);
}
$352.$_map(m$1.$JsCallable(m$1.JsCallable($351$,$351$.$8njqo1$34y),[],{Arguments$Callable:m$1.mtt$([$351$.outer$.$$targs$$.Value$Deferred]),Return$Callable:{t:m$1.Anything}}),m$1.$JsCallable(m$1.JsCallable($351$,$351$.$8njqo1$34z),[],{Arguments$Callable:m$1.mtt$([{t:m$1.Throwable}]),Return$Callable:{t:m$1.Anything}}),{Result$map:{t:m$1.Anything}});
};$351$.update.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'promise',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Value$Deferred'}}}],$cont:deferred$.ListenerState$Deferred,pa:1,d:['ceylon.promise','Deferred','$c','ListenerState$hm3npv','$m','update']};};
})(ListenerState$Deferred.$$.prototype);
}
return ListenerState$Deferred;
}
deferred$.$init$ListenerState$Deferred=$init$ListenerState$Deferred;
deferred$.ListenerState$Deferred=ListenerState$Deferred;
$init$promise();
$init$State$Deferred();
$init$PromiseState$Deferred();
$init$ListenerState$Deferred();
})(Deferred.$$.prototype);
}
return Deferred;
}
ex$.$init$Deferred=$init$Deferred;
$init$Deferred();
function ExecutionContext(executionContext$){
}
ExecutionContext.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc("The execution context"),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','ExecutionContext']};};
ex$.ExecutionContext=ExecutionContext;
function $init$ExecutionContext(){
if(ExecutionContext.$$===undefined){
m$1.initTypeProtoI(ExecutionContext,'ceylon.promise::ExecutionContext');
(function(executionContext$){
executionContext$.deferred=function($elbd11$){var executionContext$=this;
return Deferred(executionContext$,{Value$Deferred:$elbd11$.Value$deferred});};
executionContext$.deferred.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred,a:{Value$Deferred:'Value$deferred'}},ps:[],$cont:ExecutionContext,tp:{Value$deferred:{}},pa:1,an:function(){return[m$1.doc("Create a new deferred running on this context")];},d:['ceylon.promise','ExecutionContext','$m','deferred']};};
executionContext$.fulfilledPromise=function($354,$tew3pu$){var executionContext$=this;
return function(){function $355(){
var $355$=new $355.$$;$355$.outer$=executionContext$;
Promise({Value$Promise:$tew3pu$.T$fulfilledPromise},$355$);
return $355$;
};$355.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Promise,a:{Value$Promise:'T$fulfilledPromise'}},$cont:executionContext$.fulfilledPromise,d:['ceylon.promise','ExecutionContext','$m','fulfilledPromise']};};
function $init$$355(){
if($355.$$===undefined){
m$1.initTypeProto($355,'ceylon.promise::ExecutionContext.anonymous#0',$init$Promise());
(function($355$){
m$1.atr$($355$,'context',function(){
var $355$=this;
return executionContext$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ExecutionContext},$cont:executionContext$.fulfilledPromise,pa:3,d:['ceylon.promise','ExecutionContext','$m','fulfilledPromise','$at','context']};});
$355$.$_map=function($356,$357,$p8wz6c$){
var $355$=this;
if($357===undefined){$357=$355$.$_map$defs$onRejected($356,$357);}
try{
return executionContext$.fulfilledPromise($356($354),{T$fulfilledPromise:$p8wz6c$.Result$map});
}
catch($358){
if($358.getT$name===undefined)$358=m$1.NatErr($358);
if(m$1.is$($358,{t:m$1.Throwable})){
return executionContext$.rejectedPromise($358,{T$rejectedPromise:$p8wz6c$.Result$map});
}else{throw $358}
}
};$355$.$_map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$fulfilledPromise']},Return$Callable:'Result$map'}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}}}],$cont:executionContext$.fulfilledPromise,tp:{Result$map:{}},pa:3,d:['ceylon.promise','ExecutionContext','$m','fulfilledPromise','$m','map']};};
$355$.flatMap=function($359,$35a,$ue4dot$){
var $355$=this;
if($35a===undefined){$35a=$355$.flatMap$defs$onRejected($359,$35a);}
try{
return $359($354);
}
catch($35b){
if($35b.getT$name===undefined)$35b=m$1.NatErr($35b);
if(m$1.is$($35b,{t:m$1.Throwable})){
return executionContext$.rejectedPromise($35b,{T$rejectedPromise:$ue4dot$.Result$flatMap});
}else{throw $35b}
}
};$355$.flatMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$fulfilledPromise']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}}],$cont:executionContext$.fulfilledPromise,tp:{Result$flatMap:{}},pa:3,d:['ceylon.promise','ExecutionContext','$m','fulfilledPromise','$m','flatMap']};};
})($355.$$.prototype);
}
return $355;
}
executionContext$.$init$$355=$init$$355;
$init$$355();
return $355();}();};
executionContext$.fulfilledPromise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'T$fulfilledPromise'}},ps:[{nm:'val',mt:'prm',$t:'T$fulfilledPromise'}],$cont:ExecutionContext,tp:{T$fulfilledPromise:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:ExecutionContext:$m:fulfilledPromise')];},d:['ceylon.promise','ExecutionContext','$m','fulfilledPromise']};};
executionContext$.rejectedPromise=function($35d,$k44rvr$){var executionContext$=this;
return function(){function $35e(){
var $35e$=new $35e.$$;$35e$.outer$=executionContext$;
Promise({Value$Promise:$k44rvr$.T$rejectedPromise},$35e$);
return $35e$;
};$35e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Promise,a:{Value$Promise:'T$rejectedPromise'}},$cont:executionContext$.rejectedPromise,d:['ceylon.promise','ExecutionContext','$m','rejectedPromise']};};
function $init$$35e(){
if($35e.$$===undefined){
m$1.initTypeProto($35e,'ceylon.promise::ExecutionContext.anonymous#1',$init$Promise());
(function($35e$){
m$1.atr$($35e$,'context',function(){
var $35e$=this;
return executionContext$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ExecutionContext},$cont:executionContext$.rejectedPromise,pa:3,d:['ceylon.promise','ExecutionContext','$m','rejectedPromise','$at','context']};});
$35e$.$_map=function($35f,$35g,$g9vcqm$){
var $35e$=this;
if($35g===undefined){$35g=$35e$.$_map$defs$onRejected($35f,$35g);}
try{
return executionContext$.fulfilledPromise($35g($35d),{T$fulfilledPromise:$g9vcqm$.Result$map});
}
catch($35h){
if($35h.getT$name===undefined)$35h=m$1.NatErr($35h);
if(m$1.is$($35h,{t:m$1.Throwable})){
return executionContext$.rejectedPromise($35h,{T$rejectedPromise:$g9vcqm$.Result$map});
}else{throw $35h}
}
};$35e$.$_map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$rejectedPromise']},Return$Callable:'Result$map'}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}}}],$cont:executionContext$.rejectedPromise,tp:{Result$map:{}},pa:3,d:['ceylon.promise','ExecutionContext','$m','rejectedPromise','$m','map']};};
$35e$.flatMap=function($35i,$35j,$dwnj3r$){
var $35e$=this;
if($35j===undefined){$35j=$35e$.flatMap$defs$onRejected($35i,$35j);}
try{
return $35j($35d);
}
catch($35k){
if($35k.getT$name===undefined)$35k=m$1.NatErr($35k);
if(m$1.is$($35k,{t:m$1.Throwable})){
return executionContext$.rejectedPromise($35k,{T$rejectedPromise:$dwnj3r$.Result$flatMap});
}else{throw $35k}
}
};$35e$.flatMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['T$rejectedPromise']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}},{nm:'onRejected',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}}}],$cont:executionContext$.rejectedPromise,tp:{Result$flatMap:{}},pa:3,d:['ceylon.promise','ExecutionContext','$m','rejectedPromise','$m','flatMap']};};
})($35e.$$.prototype);
}
return $35e;
}
executionContext$.$init$$35e=$init$$35e;
$init$$35e();
return $35e();}();};
executionContext$.rejectedPromise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'T$rejectedPromise'}},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}],$cont:ExecutionContext,tp:{T$rejectedPromise:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:ExecutionContext:$m:rejectedPromise')];},d:['ceylon.promise','ExecutionContext','$m','rejectedPromise']};};
executionContext$.run={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'task',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],$cont:ExecutionContext,pa:5,d:['ceylon.promise','ExecutionContext','$m','run']};}};executionContext$.childContext={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:ExecutionContext},ps:[],$cont:ExecutionContext,pa:5,d:['ceylon.promise','ExecutionContext','$m','childContext']};}};
})(ExecutionContext.$$.prototype);
}
return ExecutionContext;
}
ex$.$init$ExecutionContext=$init$ExecutionContext;
$init$ExecutionContext();
function ExecutionListener(executionListener$){
}
ExecutionListener.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.promise','ExecutionListener']};};
ex$.ExecutionListener=ExecutionListener;
function $init$ExecutionListener(){
if(ExecutionListener.$$===undefined){
m$1.initTypeProtoI(ExecutionListener,'ceylon.promise::ExecutionListener');
(function(executionListener$){
executionListener$.onChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]},Return$Callable:{t:m$1.Anything}}},ps:[],$cont:ExecutionListener,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:ExecutionListener:$m:onChild')];},d:['ceylon.promise','ExecutionListener','$m','onChild']};}};
})(ExecutionListener.$$.prototype);
}
return ExecutionListener;
}
ex$.$init$ExecutionListener=$init$ExecutionListener;
$init$ExecutionListener();
var $35m;function $valinit$$35m(){if($35m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'currentExecutionContext\' before it was set"),'6:0-7:53','globalExecutionContext.ceylon');
if($35m===undefined){$35m=m$1.INIT$;$35m=AtomicRef$internal(runtimeContext$internal(),{Value$AtomicRef:{t:ExecutionContext}})};return $35m;};
function currentExecutionContext(){return $valinit$$35m();}
var $prop$getCurrentExecutionContext={$crtmm$:function(){return{mod:$CCMM$,$t:{t:AtomicRef$internal,a:{Value$AtomicRef:{t:ExecutionContext}}},d:['ceylon.promise','currentExecutionContext']};}};
ex$.$prop$getCurrentExecutionContext=$prop$getCurrentExecutionContext;
$prop$getCurrentExecutionContext.get=currentExecutionContext;
function globalExecutionContext(){return currentExecutionContext().$_get();};
ex$.globalExecutionContext=globalExecutionContext;
var $prop$getGlobalExecutionContext={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ExecutionContext},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:globalExecutionContext')];},d:['ceylon.promise','globalExecutionContext']};}};
ex$.$prop$getGlobalExecutionContext=$prop$getGlobalExecutionContext;
$prop$getGlobalExecutionContext.get=globalExecutionContext;
globalExecutionContext.$crtmm$=$prop$getGlobalExecutionContext.$crtmm$;
function defineGlobalExecutionContext($35n){return currentExecutionContext().set($35n);};
defineGlobalExecutionContext.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:ExecutionContext}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:defineGlobalExecutionContext')];},d:['ceylon.promise','defineGlobalExecutionContext']};};
ex$.defineGlobalExecutionContext=defineGlobalExecutionContext;

function AtomicRef$internal($8njqo1$35o,$$targs$$,atomicRef$){
$init$AtomicRef$internal();
if(atomicRef$===undefined)atomicRef$=new AtomicRef$internal.$$;
m$1.set_type_args(atomicRef$,$$targs$$);
atomicRef$.$8njqo1$35o_=$8njqo1$35o;
atomicRef$.$8njqo1$35p_=atomicRef$.$8njqo1$35o;
return atomicRef$;
}
AtomicRef$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'val',mt:'prm',$t:'Value$AtomicRef'}],tp:{Value$AtomicRef:{}},pa:65,d:['ceylon.promise.internal','AtomicRef']};};
ex$.AtomicRef$internal=AtomicRef$internal;
function $init$AtomicRef$internal(){
if(AtomicRef$internal.$$===undefined){
m$1.initTypeProto(AtomicRef$internal,'ceylon.promise.internal::AtomicRef',m$1.Basic);
(function(atomicRef$){
m$1.atr$(atomicRef$,'$8njqo1$35o',function(){return this.$8njqo1$35o_;},undefined,function(){return{mod:$CCMM$,$t:'Value$AtomicRef',$cont:AtomicRef$internal,d:['ceylon.promise.internal','AtomicRef','$at','val$rz6byn']};});
m$1.atr$(atomicRef$,'$8njqo1$35p',function(){return this.$8njqo1$35p_;},function($35q){return this.$8njqo1$35p_=$35q;},function(){return{mod:$CCMM$,$t:'Value$AtomicRef',$cont:AtomicRef$internal,pa:1024,d:['ceylon.promise.internal','AtomicRef','$at','state$vp9qu7']};});
atomicRef$.$_get=function(){var atomicRef$=this;
return atomicRef$.$8njqo1$35p;};
atomicRef$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:'Value$AtomicRef',ps:[],$cont:AtomicRef$internal,pa:65,d:['ceylon.promise.internal','AtomicRef','$m','get']};};
atomicRef$.set=function($35r){
var atomicRef$=this;
atomicRef$.$8njqo1$35p=$35r;
};atomicRef$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:'Value$AtomicRef'}],$cont:AtomicRef$internal,pa:65,d:['ceylon.promise.internal','AtomicRef','$m','set']};};
atomicRef$.compareAndSet=function($35s,$35t){
var atomicRef$=this;
var $35u;
if(m$1.nn$(($35u=$35s))){
var $35v;
if(m$1.nn$(($35v=atomicRef$.$8njqo1$35p))&&$35u.equals($35v)){
atomicRef$.$8njqo1$35p=$35t;
return true;
}
}
else{
var $35w;
if(m$1.is$(($35w=atomicRef$.$8njqo1$35p),{t:m$1.Null})){
atomicRef$.$8njqo1$35p=$35t;
return true;
}
}
return false;
};atomicRef$.compareAndSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'expect',mt:'prm',$t:'Value$AtomicRef'},{nm:'update',mt:'prm',$t:'Value$AtomicRef'}],$cont:AtomicRef$internal,pa:65,d:['ceylon.promise.internal','AtomicRef','$m','compareAndSet']};};
})(AtomicRef$internal.$$.prototype);
}
return AtomicRef$internal;
}
ex$.$init$AtomicRef$internal=$init$AtomicRef$internal;
$init$AtomicRef$internal();
ex$.$pkg$ans$ceylon$promise$internal=[];

function $35x$internal(){
var runtimeContext$=new $35x$internal.$$;ExecutionContext(runtimeContext$);
return runtimeContext$;
};$35x$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:ExecutionContext}],d:['ceylon.promise.internal','runtimeContext']};};
function $init$runtimeContext$internal(){
if($35x$internal.$$===undefined){
m$1.initTypeProto($35x$internal,'ceylon.promise.internal::runtimeContext',m$1.Basic,$init$ExecutionContext());
(function(runtimeContext$){
runtimeContext$.run=function($35z){
var runtimeContext$=this;
(typeof setTimeout==='undefined'||setTimeout===null?m$1.throwexc(m$1.Exception("Undefined or null reference: setTimeout"),'35:12-35:21','runtimeContext.ceylon'):setTimeout)(m$1.JsCallable(runtimeContext$,$35z),1);
};runtimeContext$.run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'task',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],$cont:$35x$internal,pa:67,d:['ceylon.promise.internal','runtimeContext','$m','run']};};
runtimeContext$.childContext=function(){var runtimeContext$=this;
return runtimeContext$;};
runtimeContext$.childContext.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ExecutionContext},ps:[],$cont:$35x$internal,pa:67,d:['ceylon.promise.internal','runtimeContext','$m','childContext']};};
})($35x$internal.$$.prototype);
}
return $35x$internal;
}
ex$.$init$runtimeContext$internal=$init$runtimeContext$internal;
$init$runtimeContext$internal();
var $360;
function runtimeContext$internal(){
if($360===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'runtimeContext\' before it was set"),'31:0-39:0','runtimeContext.ceylon');
if($360===undefined){$360=m$1.INIT$;$360=$init$runtimeContext$internal()();$360.$crtmm$=runtimeContext$internal.$crtmm$;}
return $360;
}
ex$.runtimeContext$internal=runtimeContext$internal;
runtimeContext$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$runtimeContext$internal()},pa:65,d:['ceylon.promise.internal','runtimeContext']};};
$prop$getRuntimeContext$internal=runtimeContext$internal;
ex$.$prop$getRuntimeContext$internal=$prop$getRuntimeContext$internal;
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String})),m$1.license("Apache Software License")];};
ex$.$mod$imps=function(){return{
'java.base/7':function(){return[m$1.$_native("jvm")];}
};};
ex$.$pkg$ans$ceylon$promise=function(){return[m$1.shared()];};
function Promise($$targs$$,promise$){
$init$Promise();
if(promise$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.promise::Promise"),'?','?')
m$1.set_type_args(promise$,$$targs$$);
Completion({T$Completion:m$1.mtt$([$$targs$$.Value$Promise]),Element$Completion:$$targs$$.Value$Promise},promise$);
promise$.$8njqo1$361_=null;
return promise$;
}
Promise.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],tp:{Value$Promise:{dv:'out'}},sts:[{t:Completion,a:{T$Completion:{t:'T',l:['Value$Promise']},Element$Completion:'Value$Promise'}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Promise'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Promise']};};
ex$.Promise=Promise;
function $init$Promise(){
if(Promise.$$===undefined){
m$1.initTypeProto(Promise,'ceylon.promise::Promise',m$1.Basic,$init$Completion());
(function(promise$){
promise$.$prop$getContext={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ExecutionContext},$cont:Promise,pa:5,an:function(){return[m$1.doc("The context of this promise")];},d:['ceylon.promise','Promise','$at','context']};}};
m$1.atr$(promise$,'$8njqo1$361',function(){return this.$8njqo1$361_;},function($362){return this.$8njqo1$361_=$362;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Conjunction,a:{First$Conjunction:'Value$Promise',Rest$Conjunction:{t:m$1.Empty},Element$Conjunction:'Value$Promise'}}]},$cont:Promise,pa:1024,d:['ceylon.promise','Promise','$at','conjunction$co33sw']};});
promise$.$8njqo1$363=function(){
var promise$=this;
var $364;
if(m$1.nn$(($364=promise$.$8njqo1$361))){
return $364;
}
else{
var $365=promise$.context.fulfilledPromise(m$1.empty(),{T$fulfilledPromise:{t:m$1.Empty}});
return (promise$.$8njqo1$361=Conjunction(promise$,$365,{Rest$Conjunction:{t:m$1.Empty},Element$Conjunction:promise$.$$targs$$.Value$Promise,First$Conjunction:promise$.$$targs$$.Value$Promise}));
}
};promise$.$8njqo1$363.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Conjunction,a:{First$Conjunction:'Value$Promise',Rest$Conjunction:{t:m$1.Empty},Element$Conjunction:'Value$Promise'}},ps:[],$cont:Promise,d:['ceylon.promise','Promise','$m','conj$wmrssi']};};
promise$.$_map={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$map'}},ps:[{nm:'onFulfilled',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Promise']},Return$Callable:'Result$map'}},$rt:'Result$map',ps:[{nm:'val',mt:'prm',$t:'Value$Promise'}]},{nm:'onRejected',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:'Result$map'}},$rt:'Result$map',ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}]}],$cont:Promise,tp:{Result$map:{}},pa:7,d:['ceylon.promise','Promise','$m','map']};}};promise$.flatMap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'onFulfilled',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Promise']},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}},$rt:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'val',mt:'prm',$t:'Value$Promise'}]},{nm:'onRejected',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:Promise,a:{Value$Promise:'Result$flatMap'}}}},$rt:{t:Promise,a:{Value$Promise:'Result$flatMap'}},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}]}],$cont:Promise,tp:{Result$flatMap:{}},pa:7,d:['ceylon.promise','Promise','$m','flatMap']};}};promise$.completed=function($366,$367){var promise$=this;
if($367===undefined){$367=promise$.completed$defs$onRejected($366,$367);}
return promise$.$_map(m$1.JsCallable(promise$,$366),m$1.JsCallable(promise$,$367),{Result$map:{t:m$1.Anything}});};
promise$.completed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'onFulfilled',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Value$Promise']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:'Value$Promise'}]},{nm:'onRejected',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Throwable}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.Throwable}}]}],$cont:Promise,pa:3,d:['ceylon.promise','Promise','$m','completed']};};
promise$.onComplete=function($368){var promise$=this;
return promise$.$_map(m$1.JsCallable(promise$,$368),m$1.JsCallable(promise$,$368),{Result$map:{t:m$1.Anything}});};
promise$.onComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'completed',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Value$Promise',{t:m$1.Throwable}]}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'completion',mt:'prm',$t:{t:'u',l:['Value$Promise',{t:m$1.Throwable}]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Promise:$m:onComplete:$m:completed$r43fww')];}}],$cont:Promise,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Promise:$m:onComplete')];},d:['ceylon.promise','Promise','$m','onComplete']};};
promise$.and=function($369,$y32i9p$){var promise$=this;
return promise$.$8njqo1$363().and($369,{Other$and:$y32i9p$.Other$and});};
promise$.and.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Completion,a:{T$Completion:{t:'T',l:['Other$and','Value$Promise']},Element$Completion:{t:'u',l:['Value$Promise','Other$and']}}},ps:[{nm:'other',mt:'prm',$t:{t:Promise,a:{Value$Promise:'Other$and'}}}],$cont:Promise,tp:{Other$and:{}},pa:3,d:['ceylon.promise','Promise','$m','and']};};
m$1.atr$(promise$,'promise',function(){
var promise$=this;
return promise$.$8njqo1$363().promise;
},undefined,function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:{t:'T',l:['Value$Promise']}}},$cont:Promise,pa:3,d:['ceylon.promise','Promise','$at','promise']};});
})(Promise.$$.prototype);
}
return Promise;
}
ex$.$init$Promise=$init$Promise;
$init$Promise();
function Promised($$targs$$,promised$){
m$1.set_type_args(promised$,$$targs$$,Promised);
}
Promised.$crtmm$=function(){return{mod:$CCMM$,tp:{Value$Promised:{dv:'out'}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.promise:Promised'),m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','Promised']};};
ex$.Promised=Promised;
function $init$Promised(){
if(Promised.$$===undefined){
m$1.initTypeProtoI(Promised,'ceylon.promise::Promised');
(function(promised$){
promised$.$prop$getPromise={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Promise,a:{Value$Promise:'Value$Promised'}},$cont:Promised,pa:5,an:function(){return[m$1.doc("The promise.")];},d:['ceylon.promise','Promised','$at','promise']};}};
})(Promised.$$.prototype);
}
return Promised;
}
ex$.$init$Promised=$init$Promised;
$init$Promised();
function rethrow($36a){
throw m$1.wrapexc($36a,'3:4-3:11','ceylon/promise/Utils.ceylon');
};rethrow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Nothing},ps:[{nm:'e',mt:'prm',$t:{t:m$1.Throwable}}],an:function(){return[m$1.by(["Julien Viet"].$sa$({t:m$1.$_String}))];},d:['ceylon.promise','rethrow']};};
ex$.$pkgunsh$ceylon$promise={'currentExecutionListeners':$prop$getCurrentExecutionListeners,'Conjunction':Conjunction,'currentExecutionContext':$prop$getCurrentExecutionContext,'rethrow':rethrow};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
