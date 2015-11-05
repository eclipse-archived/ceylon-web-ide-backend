(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/redhat/ceylon/ide/client/runner/1.0.0/com.redhat.ceylon.ide.client.runner-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$x4v=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$x4v.$addmod$(m$x4v,'ceylon.language/1.2.0');
m$x4v.$addmod$(ex$,'com.redhat.ceylon.ide.client.runner/1.0.0');
ex$.$mod$ans$=function(){return[m$x4v.$_native(["js"].$sa$({t:m$x4v.$_String}))];};
ex$.$pkg$ans$com$redhat$ceylon$ide$client$runner=function(){return[m$x4v.shared()];};
var $x4w;function $valinit$$x4w(){if($x4w===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'spinCount\' before it was set"),'1:0-1:37','repl.ceylon');
if($x4w===undefined){$x4w=m$x4v.INIT$;$x4w=(0)};return $x4w;};
function spinCount(){return $valinit$$x4w();}
ex$.spinCount=spinCount;
function setSpinCount($x4x){if($x4w===undefined||$x4w===m$x4v.INIT$)$valinit$$x4w();return $x4w=$x4x;};
ex$.setSpinCount=setSpinCount;
var $prop$getSpinCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.Integer},pa:1025,d:['com.redhat.ceylon.ide.client.runner','spinCount']};}};
ex$.$prop$getSpinCount=$prop$getSpinCount;
$prop$getSpinCount.get=spinCount;
spinCount.$crtmm$=$prop$getSpinCount.$crtmm$;
$prop$getSpinCount.set=setSpinCount;
if(setSpinCount.$crtmm$===undefined)setSpinCount.$crtmm$=$prop$getSpinCount.$crtmm$;
var $x4y;function $valinit$$x4y(){if($x4y===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'wrappedTag\' before it was set"),'3:0-4:29','repl.ceylon');
if($x4y===undefined){$x4y=m$x4v.INIT$;$x4y="//$webrun_wrapped\n"};return $x4y;};
function wrappedTag(){return $valinit$$x4y();}
ex$.wrappedTag=wrappedTag;
var $prop$getWrappedTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','wrappedTag']};}};
ex$.$prop$getWrappedTag=$prop$getWrappedTag;
$prop$getWrappedTag.get=wrappedTag;
wrappedTag.$crtmm$=$prop$getWrappedTag.$crtmm$;
var $x4z;function $valinit$$x4z(){if($x4z===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'codePrefix\' before it was set"),'5:0-6:29','repl.ceylon');
if($x4z===undefined){$x4z=m$x4v.INIT$;$x4z="shared void run() {\n"};return $x4z;};
function codePrefix(){return $valinit$$x4z();}
ex$.codePrefix=codePrefix;
var $prop$getCodePrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','codePrefix']};}};
ex$.$prop$getCodePrefix=$prop$getCodePrefix;
$prop$getCodePrefix.get=codePrefix;
codePrefix.$crtmm$=$prop$getCodePrefix.$crtmm$;
var $x50;function $valinit$$x50(){if($x50===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'codePostfix\' before it was set"),'7:0-8:31','repl.ceylon');
if($x50===undefined){$x50=m$x4v.INIT$;$x50="\n}"};return $x50;};
function codePostfix(){return $valinit$$x50();}
ex$.codePostfix=codePostfix;
var $prop$getCodePostfix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','codePostfix']};}};
ex$.$prop$getCodePostfix=$prop$getCodePostfix;
$prop$getCodePostfix.get=codePostfix;
codePostfix.$crtmm$=$prop$getCodePostfix.$crtmm$;
var $x51;function $valinit$$x51(){if($x51===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'modulePrefix\' before it was set"),'9:0-10:31','repl.ceylon');
if($x51===undefined){$x51=m$x4v.INIT$;$x51="module web_ide_script \"1.0.0\" {\n"};return $x51;};
function modulePrefix(){return $valinit$$x51();}
ex$.modulePrefix=modulePrefix;
var $prop$getModulePrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','modulePrefix']};}};
ex$.$prop$getModulePrefix=$prop$getModulePrefix;
$prop$getModulePrefix.get=modulePrefix;
modulePrefix.$crtmm$=$prop$getModulePrefix.$crtmm$;
var $x52;function $valinit$$x52(){if($x52===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'modulePostfix\' before it was set"),'11:0-12:33','repl.ceylon');
if($x52===undefined){$x52=m$x4v.INIT$;$x52="\n}"};return $x52;};
function modulePostfix(){return $valinit$$x52();}
ex$.modulePostfix=modulePostfix;
var $prop$getModulePostfix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','modulePostfix']};}};
ex$.$prop$getModulePostfix=$prop$getModulePostfix;
$prop$getModulePostfix.get=modulePostfix;
modulePostfix.$crtmm$=$prop$getModulePostfix.$crtmm$;
var $x53;function $valinit$$x53(){if($x53===m$x4v.INIT$)m$x4v.throwexc(m$x4v.InitializationError("Cyclic initialization trying to read the value of \'defaultImportSrc\' before it was set"),'13:0-13:98','repl.ceylon');
if($x53===undefined){$x53=m$x4v.INIT$;$x53="".plus(modulePrefix()).plus("    // Add module imports here").plus(modulePostfix()).plus("")};return $x53;};
function defaultImportSrc(){return $valinit$$x53();}
ex$.defaultImportSrc=defaultImportSrc;
var $prop$getDefaultImportSrc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},pa:1,d:['com.redhat.ceylon.ide.client.runner','defaultImportSrc']};}};
ex$.$prop$getDefaultImportSrc=$prop$getDefaultImportSrc;
$prop$getDefaultImportSrc.get=defaultImportSrc;
defaultImportSrc.$crtmm$=$prop$getDefaultImportSrc.$crtmm$;

//MethodDef getOutput at runner.ceylon (1:0-5:0)
function getOutput(){
/*BEG dynblock*/
return (typeof document==='undefined'||document===null?m$x4v.throwexc(m$x4v.Exception("Undefined or null reference: document"),'3:15-3:22','runner.ceylon'):document).getElementById("output");
/*END dynblock*/
};getOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','getOutput']};};
//MethodDef clearOutput at runner.ceylon (7:0-11:0)
function clearOutput(){
/*BEG dynblock*/
getOutput().innerHTML="";
/*END dynblock*/
}
ex$.clearOutput=clearOutput;
clearOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','clearOutput']};};
//MethodDef printOutputLine at runner.ceylon (13:0-20:0)
function printOutputLine($x54){
/*BEG dynblock*/
var $x55=getOutput();
$x55.innerHTML=($x56=($x58=$x55.innerHTML,$x59=escapeHtml($x54),(m$x4v.nn$($x58)&&$x58.plus&&$x58.plus($x59))||$x58+$x59),$x57="<br>",(m$x4v.nn$($x56)&&$x56.plus&&$x56.plus($x57))||$x56+$x57);
/*END dynblock*/
}
ex$.printOutputLine=printOutputLine;
printOutputLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutputLine']};};
//MethodDef printOutput at runner.ceylon (22:0-29:0)
function printOutput($x5a){
/*BEG dynblock*/
var $x5b=getOutput();
$x5b.innerHTML=($x5c=$x5b.innerHTML,$x5d=escapeHtml($x5a),(m$x4v.nn$($x5c)&&$x5c.plus&&$x5c.plus($x5d))||$x5c+$x5d);
/*END dynblock*/
}
ex$.printOutput=printOutput;
printOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutput']};};
//MethodDecl escapeHtml at runner.ceylon (31:0-35:33)
function escapeHtml($x5e){return $x5e.$_replace("&","&amp;").$_replace("<","&lt;").$_replace(">","&gt;");};
escapeHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},ps:[{nm:'html',mt:'prm',$t:{t:m$x4v.$_String}}],d:['com.redhat.ceylon.ide.client.runner','escapeHtml']};};
//MethodDecl highlight at runner.ceylon (37:0-40:44)
function highlight($x5f){return m$x4v.sum(m$x4v.interleave([escapeHtml($x5f).$_split(m$x4v.$JsCallable(($x5g=m$x4v.Character(39,true),m$x4v.JsCallable($x5g,m$x4v.nn$($x5g)?$x5g.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$x4v.$_Object}}],{Arguments$Callable:m$x4v.mtt$([{t:m$x4v.$_Object}]),Return$Callable:{t:m$x4v.$_Boolean}})),["<code>","</code>"].rt$({t:m$x4v.$_String},1).cycled].$sa$({t:m$x4v.Iterable,a:{Element$Iterable:{t:m$x4v.$_String},Absent$Iterable:{t:m$x4v.Nothing}}}),{Absent$interleave:{t:m$x4v.Nothing},Element$interleave:{t:m$x4v.$_String}}),{Value$sum:{t:m$x4v.$_String}});};
highlight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.$_String},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}}],d:['com.redhat.ceylon.ide.client.runner','highlight']};};
var $x5g;
//MethodDef createMessagesTable at runner.ceylon (42:0-49:0)
function createMessagesTable(){
/*BEG dynblock*/
if(!m$x4v.nn$((typeof document==='undefined'||document===null?m$x4v.throwexc(m$x4v.Exception("Undefined or null reference: document"),'44:13-44:20','runner.ceylon'):document).getElementById("messages"))){
getOutput().innerHTML="<table><tbody id=\'messages\'/></table>";
}
/*END dynblock*/
};createMessagesTable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','createMessagesTable']};};
//MethodDecl printSystem at runner.ceylon (51:0-52:50)
function printSystem($x5h,$x5i){return printFormatted($x5h,$x5i,"jsc_msg","");};
printSystem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$x4v.Null},{t:m$x4v.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printSystem']};};
ex$.printSystem=printSystem;
//MethodDecl printWarning at runner.ceylon (54:0-56:46)
function printWarning($x5j,$x5k){return printFormatted($x5j,$x5k,"jsc_warn","images/warning.gif");};
printWarning.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$x4v.Null},{t:m$x4v.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printWarning']};};
ex$.printWarning=printWarning;
//MethodDecl printError at runner.ceylon (58:0-60:45)
function printError($x5l,$x5m){return printFormatted($x5l,$x5m,"jsc_error","images/error.gif");};
printError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$x4v.Null},{t:m$x4v.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printError']};};
ex$.printError=printError;
//MethodDef printFormatted at runner.ceylon (62:0-74:0)
function printFormatted($x5n,$x5o,$x5p,$x5q){
createMessagesTable();
/*BEG dynblock*/
var $x5r=(typeof document==='undefined'||document===null?m$x4v.throwexc(m$x4v.Exception("Undefined or null reference: document"),'65:25-65:32','runner.ceylon'):document).getElementById("messages");
$x5r.innerHTML=($x5s=$x5r.innerHTML,$x5t="<tr>\n<td><img src=\'".plus($x5q).plus("\' alt=\'warning\'/>&nbsp;</td>\n<td>").plus(($x5u=$x5o,m$x4v.nn$($x5u)?$x5u:"")).plus("</td><td> &mdash; </td>\n<td class=\'").plus($x5p).plus("\'>").plus(highlight($x5n)).plus("</td>\n</tr>"),(m$x4v.nn$($x5s)&&$x5s.plus&&$x5s.plus($x5t))||$x5s+$x5t);
/*END dynblock*/
var $x5u;
};printFormatted.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$x4v.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$x4v.Null},{t:m$x4v.$_String}]}},{nm:'cssClass',mt:'prm',$t:{t:m$x4v.$_String}},{nm:'image',mt:'prm',$t:{t:m$x4v.$_String}}],d:['com.redhat.ceylon.ide.client.runner','printFormatted']};};
//MethodDef scrollOutput at runner.ceylon (76:0-80:0)
function scrollOutput(){
/*BEG dynblock*/
(typeof window==='undefined'||window===null?m$x4v.throwexc(m$x4v.Exception("Undefined or null reference: window"),'78:8-78:13','runner.ceylon'):window).scrollTo(0,9999999);
/*END dynblock*/
}
ex$.scrollOutput=scrollOutput;
scrollOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$x4v.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','scrollOutput']};};
ex$.$pkgunsh$com$redhat$ceylon$ide$client$runner={'getOutput':getOutput,'escapeHtml':escapeHtml,'highlight':highlight,'createMessagesTable':createMessagesTable,'printFormatted':printFormatted};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
