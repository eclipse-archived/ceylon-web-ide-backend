(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/logging/1.2.0/ceylon.logging-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.logging/1.2.0');
var m$2=require('ceylon/collection/1.2.0/ceylon.collection-1.2.0');
m$1.$addmod$(m$2,'ceylon.collection/1.2.0');
function Category(){var $4fr=m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}]);$4fr.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Category'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getLogger),m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$init$Logger().$$.prototype.$prop$getCategory)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.logging','Category']};};return $4fr;}
ex$.Category=Category;
function Logger(logger$){
logger$.log$defs$throwable=function($4fs,$4ft,$4fu){return null;};
}
Logger.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getLogger)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.logging','Logger']};};
ex$.Logger=Logger;
function $init$Logger(){
if(Logger.$$===undefined){
m$1.initTypeProtoI(Logger,'ceylon.logging::Logger');
(function(logger$){
logger$.Message$Logger=function(){var $4fv=m$1.mut$([{t:m$1.$_String},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_String}}}]);$4fv.$crtmm$=function(){return{mod:$CCMM$,$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:Message')];},d:['ceylon.logging','Logger','$at','Message']};};return $4fv;};
logger$.$prop$getCategory={$crtmm$:function(){return{mod:$CCMM$,$t:Category(),$cont:Logger,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:category')];},d:['ceylon.logging','Logger','$at','category']};}};
logger$.$prop$getPriority={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Priority},$cont:Logger,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:priority'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getDefaultPriority),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.logging'),$init$Logger().$$.prototype.enabled)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.logging','Logger','$at','priority']};}};
logger$.render=function($4fw){
var logger$=this;
var $4fx=$4fw;
if(m$1.is$($4fx,{t:m$1.$_String})) {
return $4fx;
}
else if(m$1.is$($4fx,{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_String}}})) {
return $4fx();
}
};logger$.render.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:render')];},d:['ceylon.logging','Logger','$m','render']};};
logger$.enabled=function($4fy){var logger$=this;
return (logger$.priority.compare($4fy)!==m$1.larger());};
logger$.enabled.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:enabled')];},d:['ceylon.logging','Logger','$m','enabled']};};
logger$.log={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}},{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:log')];},d:['ceylon.logging','Logger','$m','log']};}};logger$.fatal$defs$throwable=function($4fz,$4g0){return null;};
logger$.fatal=function($4fz,$4g0){var logger$=this;
if($4g0===undefined){$4g0=logger$.fatal$defs$throwable($4fz,$4g0);}
return logger$.log(fatal(),$4fz,$4g0);};
logger$.fatal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:fatal')];},d:['ceylon.logging','Logger','$m','fatal']};};
logger$.error$defs$throwable=function($4g1,$4g2){return null;};
logger$.error=function($4g1,$4g2){var logger$=this;
if($4g2===undefined){$4g2=logger$.error$defs$throwable($4g1,$4g2);}
return logger$.log(error(),$4g1,$4g2);};
logger$.error.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:error')];},d:['ceylon.logging','Logger','$m','error']};};
logger$.warn$defs$throwable=function($4g3,$4g4){return null;};
logger$.warn=function($4g3,$4g4){var logger$=this;
if($4g4===undefined){$4g4=logger$.warn$defs$throwable($4g3,$4g4);}
return logger$.log(warn(),$4g3,$4g4);};
logger$.warn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:warn')];},d:['ceylon.logging','Logger','$m','warn']};};
logger$.info$defs$throwable=function($4g5,$4g6){return null;};
logger$.info=function($4g5,$4g6){var logger$=this;
if($4g6===undefined){$4g6=logger$.info$defs$throwable($4g5,$4g6);}
return logger$.log(info(),$4g5,$4g6);};
logger$.info.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:info')];},d:['ceylon.logging','Logger','$m','info']};};
logger$.debug$defs$throwable=function($4g7,$4g8){return null;};
logger$.debug=function($4g7,$4g8){var logger$=this;
if($4g8===undefined){$4g8=logger$.debug$defs$throwable($4g7,$4g8);}
return logger$.log(debug(),$4g7,$4g8);};
logger$.debug.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:debug')];},d:['ceylon.logging','Logger','$m','debug']};};
logger$.trace$defs$throwable=function($4g9,$4ga){return null;};
logger$.trace=function($4g9,$4ga){var logger$=this;
if($4ga===undefined){$4ga=logger$.trace$defs$throwable($4g9,$4ga);}
return logger$.log(trace(),$4g9,$4ga);};
logger$.trace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:logger$.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:trace')];},d:['ceylon.logging','Logger','$m','trace']};};
})(Logger.$$.prototype);
}
return Logger;
}
ex$.$init$Logger=$init$Logger;
$init$Logger();
var $4gb;function $valinit$$4gb(){if($4gb===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'logger\' before it was set"),'96:0-113:1','Logger.ceylon');
if($4gb===undefined){$4gb=m$1.INIT$;$4gb=m$1.$JsCallable((function($4gc){
var $4gd;
if(m$1.nn$(($4gd=loggers().$_get($4gc.name)))){
return $4gd;
}
else{
var $4ge=LoggerImpl($4gc);
$prop$get$4ge={$crtmm$:function(){return{mod:$CCMM$,$t:{t:LoggerImpl},$cont:0,d:['ceylon.logging','logger','$at','logger$fu7bc6']};}};
$prop$get$4ge.get=function(){return $4ge};
loggers().put($4gc.name,$4ge);
return $4ge;
}
}),[{nm:'p2',mt:'prm',$t:Category()}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}])]),Return$Callable:{t:Logger}})};return $4gb;};
function logger(){return $valinit$$4gb();}
ex$.logger=logger;
function setLogger($4gf){if($4gb===undefined||$4gb===m$1.INIT$)$valinit$$4gb();return $4gb=$4gf;};
ex$.setLogger=setLogger;
var $prop$getLogger={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[Category()]},Return$Callable:{t:Logger}}},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:logger')];},d:['ceylon.logging','logger']};}};
ex$.$prop$getLogger=$prop$getLogger;
$prop$getLogger.get=logger;
logger.$crtmm$=$prop$getLogger.$crtmm$;
$prop$getLogger.set=setLogger;
if(setLogger.$crtmm$===undefined)setLogger.$crtmm$=$prop$getLogger.$crtmm$;
var $4gg;function $valinit$$4gg(){if($4gg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'loggers\' before it was set"),'115:0-115:60','Logger.ceylon');
if($4gg===undefined){$4gg=m$1.INIT$;$4gg=m$2.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$1.$_String},Item$HashMap:{t:Logger}})};return $4gg;};
function loggers(){return $valinit$$4gg();}
var $prop$getLoggers={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.MutableMap,a:{Key$MutableMap:{t:m$1.$_String},Item$MutableMap:{t:Logger}}},d:['ceylon.logging','loggers']};}};
ex$.$prop$getLoggers=$prop$getLoggers;
$prop$getLoggers.get=loggers;
function LoggerImpl(category,loggerImpl$){
$init$LoggerImpl();
if(loggerImpl$===undefined)loggerImpl$=new LoggerImpl.$$;
loggerImpl$.category_=category;
Logger(loggerImpl$);
loggerImpl$.$jffls5$4gh_=null;
return loggerImpl$;
}
LoggerImpl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'category',mt:'prm',$t:Category(),pa:3}],sts:[{t:Logger}],d:['ceylon.logging','LoggerImpl']};};
ex$.LoggerImpl=LoggerImpl;
function $init$LoggerImpl(){
if(LoggerImpl.$$===undefined){
m$1.initTypeProto(LoggerImpl,'ceylon.logging::LoggerImpl',m$1.Basic,$init$Logger());
(function(loggerImpl$){
m$1.atr$(loggerImpl$,'category',function(){return this.category_;},undefined,function(){return{mod:$CCMM$,$t:Category(),$cont:LoggerImpl,pa:3,d:['ceylon.logging','LoggerImpl','$at','category']};});
m$1.atr$(loggerImpl$,'$jffls5$4gh',function(){return this.$jffls5$4gh_;},function($4gi){return this.$jffls5$4gh_=$4gi;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Priority}]},$cont:LoggerImpl,pa:1027,d:['ceylon.logging','LoggerImpl','$at','explicitPriority$jm0rg3']};});
m$1.atr$(loggerImpl$,'priority',function(){
var loggerImpl$=this;
return ($4gj=loggerImpl$.$jffls5$4gh,m$1.nn$($4gj)?$4gj:defaultPriority());
var $4gj;
},function($4gk){
var loggerImpl$=this;
loggerImpl$.$jffls5$4gh=$4gk;
},function(){return{mod:$CCMM$,$t:{t:Priority},$cont:LoggerImpl,pa:1027,d:['ceylon.logging','LoggerImpl','$at','priority']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:LoggerImpl,d:['ceylon.logging','LoggerImpl','$at','priority','$set']};});loggerImpl$.log=function($4gl,$4gm,$4gn){
var loggerImpl$=this;
if($4gn===undefined){$4gn=loggerImpl$.log$defs$throwable($4gl,$4gm,$4gn);}
if(loggerImpl$.enabled($4gl)){
var $4gp;for(var $4go=logWriters().iterator();($4gp=$4go.next())!==m$1.finished();){
$4gp($4gl,loggerImpl$.category,loggerImpl$.render($4gm),$4gn);
}
}
};loggerImpl$.log.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}},{nm:'message',mt:'prm',$t:Logger.$$.prototype.Message$Logger()},{nm:'throwable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:LoggerImpl,pa:3,d:['ceylon.logging','LoggerImpl','$m','log']};};
})(LoggerImpl.$$.prototype);
}
return LoggerImpl;
}
ex$.$init$LoggerImpl=$init$LoggerImpl;
$init$LoggerImpl();
function LogWriter(){var $4gq={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:Priority},m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}]),{t:m$1.$_String},m$1.mut$([{t:m$1.Null},{t:m$1.Throwable}])]),Return$Callable:{t:m$1.Anything}}};$4gq.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:LogWriter'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.logging'),addLogWriter)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.logging','LogWriter']};};return $4gq;}
ex$.LogWriter=LogWriter;
function addLogWriter($4gr){return logWriters().add($4gr);};
addLogWriter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'log',mt:'prm',$t:LogWriter()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:addLogWriter')];},d:['ceylon.logging','addLogWriter']};};
ex$.addLogWriter=addLogWriter;
var $4gs;function $valinit$$4gs(){if($4gs===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'logWriters\' before it was set"),'19:0-20:32','LogWriter.ceylon');
if($4gs===undefined){$4gs=m$1.INIT$;$4gs=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:Priority},m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}]),{t:m$1.$_String},m$1.mut$([{t:m$1.Null},{t:m$1.Throwable}])]),Return$Callable:{t:m$1.Anything}}}})};return $4gs;};
function logWriters(){return $valinit$$4gs();}
var $prop$getLogWriters={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.MutableList,a:{Element$MutableList:LogWriter()}},d:['ceylon.logging','logWriters']};}};
ex$.$prop$getLogWriters=$prop$getLogWriters;
$prop$getLogWriters.get=logWriters;
function writeSimpleLog($4gt,$4gu,$4gv,$4gw){
var $4gx=m$1.$JsCallable(($4gy=(($4gt.compare(info())!==m$1.larger())?m$1.$JsCallable(($4gz=m$1.$_process(),m$1.JsCallable($4gz,m$1.nn$($4gz)?$4gz.write:null)),[{nm:'p2',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Anything}}):null),m$1.nn$($4gy)?$4gy:m$1.$JsCallable(($4h0=m$1.$_process(),m$1.JsCallable($4h0,m$1.nn$($4h0)?$4h0.writeError:null)),[{nm:'p2',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Anything}})),[{nm:'p2',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Anything}});
var $4gy,$4gz,$4h0;
$4gx("[".plus(m$1.system().milliseconds.string).plus("] ").plus($4gt.string).plus(" ").plus($4gv).plus(""));
$4gx(m$1.operatingSystem().newline);
var $4h1;
if(m$1.nn$(($4h1=$4gw))){
m$1.printStackTrace($4h1,m$1.JsCallable(0,$4gx));
}
}
ex$.writeSimpleLog=writeSimpleLog;
writeSimpleLog.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}},{nm:'category',mt:'prm',$t:Category()},{nm:'message',mt:'prm',$t:{t:m$1.$_String}},{nm:'throwable',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:writeSimpleLog')];},d:['ceylon.logging','writeSimpleLog']};};
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns')];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.2.0':[]
};};
ex$.$pkg$ans$ceylon$logging=function(){return[m$1.shared()];};
function Priority(string,$jffls5$4h2,priority$){
$init$Priority();
if(priority$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.logging::Priority"),'?','?')
priority$.$$targs$$={Other$Comparable:{t:Priority}};
priority$.string_=string;
priority$.$jffls5$4h2_=$jffls5$4h2;
m$1.Comparable({Other$Comparable:{t:Priority}},priority$);
return priority$;
}
Priority.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String},pa:3,an:function(){return[m$1.doc("The name of this priority.")];}},{nm:'integer',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority:$at:integer$cyjscj')];}}],sts:[{t:m$1.Comparable,a:{Other$Comparable:{t:Priority}}}],of:[$prop$getFatal,$prop$getError,$prop$getWarn,$prop$getInfo,$prop$getDebug,$prop$getTrace],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority')];},d:['ceylon.logging','Priority']};};
ex$.Priority=Priority;
function $init$Priority(){
if(Priority.$$===undefined){
m$1.initTypeProto(Priority,'ceylon.logging::Priority',m$1.Basic,m$1.Comparable);
(function(priority$){
m$1.atr$(priority$,'string',function(){return this.string_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Priority,pa:3,an:function(){return[m$1.doc("The name of this priority.")];},d:['ceylon.logging','Priority','$at','string']};});
m$1.atr$(priority$,'$jffls5$4h2',function(){return this.$jffls5$4h2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Priority,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority:$at:integer$cyjscj')];},d:['ceylon.logging','Priority','$at','integer$cyjscj']};});
priority$.compare=function($4h3){var priority$=this;
return priority$.$jffls5$4h2.compare($4h3.$jffls5$4h2);};
})(Priority.$$.prototype);
}
return Priority;
}
ex$.$init$Priority=$init$Priority;
$init$Priority();
function $4h4(){
var fatal$=new $4h4.$$;Priority("FATAL",100,fatal$);
return fatal$;
};$4h4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','fatal']};};
function $init$fatal(){
if($4h4.$$===undefined){
m$1.initTypeProto($4h4,'ceylon.logging::fatal',$init$Priority());
}
return $4h4;
}
ex$.$init$fatal=$init$fatal;
$init$fatal();
var $4h6;
function fatal(){
if($4h6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'fatal\' before it was set"),'13:0-14:51','Priority.ceylon');
if($4h6===undefined){$4h6=m$1.INIT$;$4h6=$init$fatal()();$4h6.$crtmm$=fatal.$crtmm$;}
return $4h6;
}
ex$.fatal=fatal;
fatal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$fatal()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:fatal')];},d:['ceylon.logging','fatal']};};
$prop$getFatal=fatal;
ex$.$prop$getFatal=$prop$getFatal;
function $4h7(){
var error$=new $4h7.$$;Priority("ERROR",90,error$);
return error$;
};$4h7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','error']};};
function $init$error(){
if($4h7.$$===undefined){
m$1.initTypeProto($4h7,'ceylon.logging::error',$init$Priority());
}
return $4h7;
}
ex$.$init$error=$init$error;
$init$error();
var $4h9;
function error(){
if($4h9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'error\' before it was set"),'16:0-18:50','Priority.ceylon');
if($4h9===undefined){$4h9=m$1.INIT$;$4h9=$init$error()();$4h9.$crtmm$=error.$crtmm$;}
return $4h9;
}
ex$.error=error;
error.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$error()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:error')];},d:['ceylon.logging','error']};};
$prop$getError=error;
ex$.$prop$getError=$prop$getError;
function $4ha(){
var warn$=new $4ha.$$;Priority("WARN",80,warn$);
return warn$;
};$4ha.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','warn']};};
function $init$warn(){
if($4ha.$$===undefined){
m$1.initTypeProto($4ha,'ceylon.logging::warn',$init$Priority());
}
return $4ha;
}
ex$.$init$warn=$init$warn;
$init$warn();
var $4hc;
function warn(){
if($4hc===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'warn\' before it was set"),'20:0-22:48','Priority.ceylon');
if($4hc===undefined){$4hc=m$1.INIT$;$4hc=$init$warn()();$4hc.$crtmm$=warn.$crtmm$;}
return $4hc;
}
ex$.warn=warn;
warn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$warn()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:warn')];},d:['ceylon.logging','warn']};};
$prop$getWarn=warn;
ex$.$prop$getWarn=$prop$getWarn;
function $4hd(){
var info$=new $4hd.$$;Priority("INFO",70,info$);
return info$;
};$4hd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','info']};};
function $init$info(){
if($4hd.$$===undefined){
m$1.initTypeProto($4hd,'ceylon.logging::info',$init$Priority());
}
return $4hd;
}
ex$.$init$info=$init$info;
$init$info();
var $4hf;
function info(){
if($4hf===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'info\' before it was set"),'24:0-25:48','Priority.ceylon');
if($4hf===undefined){$4hf=m$1.INIT$;$4hf=$init$info()();$4hf.$crtmm$=info.$crtmm$;}
return $4hf;
}
ex$.info=info;
info.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$info()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:info')];},d:['ceylon.logging','info']};};
$prop$getInfo=info;
ex$.$prop$getInfo=$prop$getInfo;
function $4hg(){
var debug$=new $4hg.$$;Priority("DEBUG",60,debug$);
return debug$;
};$4hg.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','debug']};};
function $init$debug(){
if($4hg.$$===undefined){
m$1.initTypeProto($4hg,'ceylon.logging::debug',$init$Priority());
}
return $4hg;
}
ex$.$init$debug=$init$debug;
$init$debug();
var $4hi;
function debug(){
if($4hi===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'debug\' before it was set"),'27:0-29:50','Priority.ceylon');
if($4hi===undefined){$4hi=m$1.INIT$;$4hi=$init$debug()();$4hi.$crtmm$=debug.$crtmm$;}
return $4hi;
}
ex$.debug=debug;
debug.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$debug()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:debug')];},d:['ceylon.logging','debug']};};
$prop$getDebug=debug;
ex$.$prop$getDebug=$prop$getDebug;
function $4hj(){
var trace$=new $4hj.$$;Priority("TRACE",50,trace$);
return trace$;
};$4hj.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},d:['ceylon.logging','trace']};};
function $init$trace(){
if($4hj.$$===undefined){
m$1.initTypeProto($4hj,'ceylon.logging::trace',$init$Priority());
}
return $4hj;
}
ex$.$init$trace=$init$trace;
$init$trace();
var $4hl;
function trace(){
if($4hl===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'trace\' before it was set"),'31:0-33:50','Priority.ceylon');
if($4hl===undefined){$4hl=m$1.INIT$;$4hl=$init$trace()();$4hl.$crtmm$=trace.$crtmm$;}
return $4hl;
}
ex$.trace=trace;
trace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$trace()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:trace')];},d:['ceylon.logging','trace']};};
$prop$getTrace=trace;
ex$.$prop$getTrace=$prop$getTrace;
var $4hm;function $valinit$$4hm(){if($4hm===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'defaultPriority\' before it was set"),'35:0-39:55','Priority.ceylon');
if($4hm===undefined){$4hm=m$1.INIT$;$4hm=info()};return $4hm;};
function defaultPriority(){return $valinit$$4hm();}
ex$.defaultPriority=defaultPriority;
function setDefaultPriority($4hn){if($4hm===undefined||$4hm===m$1.INIT$)$valinit$$4hm();return $4hm=$4hn;};
ex$.setDefaultPriority=setDefaultPriority;
var $prop$getDefaultPriority={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Priority},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:defaultPriority')];},d:['ceylon.logging','defaultPriority']};}};
ex$.$prop$getDefaultPriority=$prop$getDefaultPriority;
$prop$getDefaultPriority.get=defaultPriority;
defaultPriority.$crtmm$=$prop$getDefaultPriority.$crtmm$;
$prop$getDefaultPriority.set=setDefaultPriority;
if(setDefaultPriority.$crtmm$===undefined)setDefaultPriority.$crtmm$=$prop$getDefaultPriority.$crtmm$;
ex$.$pkgunsh$ceylon$logging={'loggers':$prop$getLoggers,'LoggerImpl':LoggerImpl,'logWriters':$prop$getLogWriters};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
