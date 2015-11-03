(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/redhat/ceylon/ide/client/runner/1.0.0/com.redhat.ceylon.ide.client.runner-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$wlt=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$wlt.$addmod$(m$wlt,'ceylon.language/1.2.0');
m$wlt.$addmod$(ex$,'com.redhat.ceylon.ide.client.runner/1.0.0');
ex$.$mod$ans$=function(){return[m$wlt.$_native(["js"].$sa$({t:m$wlt.$_String}))];};
ex$.$pkg$ans$com$redhat$ceylon$ide$client$runner=function(){return[m$wlt.shared()];};

//MethodDef getOutput at runner.ceylon (1:0-5:0)
function getOutput(){
/*BEG dynblock*/
return (typeof document==='undefined'||document===null?m$wlt.throwexc(m$wlt.Exception("Undefined or null reference: document"),'3:15-3:22','runner.ceylon'):document).getElementById("output");
/*END dynblock*/
};getOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','getOutput']};};
//MethodDef clearOutput at runner.ceylon (7:0-11:0)
function clearOutput(){
/*BEG dynblock*/
getOutput().innerHTML="";
/*END dynblock*/
}
ex$.clearOutput=clearOutput;
clearOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','clearOutput']};};
//MethodDef printOutputLine at runner.ceylon (13:0-20:0)
function printOutputLine($wlu){
/*BEG dynblock*/
var $wlv=getOutput();
$wlv.innerHTML=($wlw=($wly=$wlv.innerHTML,$wlz=escapeHtml($wlu),(m$wlt.nn$($wly)&&$wly.plus&&$wly.plus($wlz))||$wly+$wlz),$wlx="<br>",(m$wlt.nn$($wlw)&&$wlw.plus&&$wlw.plus($wlx))||$wlw+$wlx);
/*END dynblock*/
}
ex$.printOutputLine=printOutputLine;
printOutputLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutputLine']};};
//MethodDef printOutput at runner.ceylon (22:0-29:0)
function printOutput($wm0){
/*BEG dynblock*/
var $wm1=getOutput();
$wm1.innerHTML=($wm2=$wm1.innerHTML,$wm3=escapeHtml($wm0),(m$wlt.nn$($wm2)&&$wm2.plus&&$wm2.plus($wm3))||$wm2+$wm3);
/*END dynblock*/
}
ex$.printOutput=printOutput;
printOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutput']};};
//MethodDecl escapeHtml at runner.ceylon (31:0-35:33)
function escapeHtml($wm4){return $wm4.$_replace("&","&amp;").$_replace("<","&lt;").$_replace(">","&gt;");};
escapeHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.$_String},ps:[{nm:'html',mt:'prm',$t:{t:m$wlt.$_String}}],d:['com.redhat.ceylon.ide.client.runner','escapeHtml']};};
//MethodDecl highlight at runner.ceylon (37:0-40:44)
function highlight($wm5){return m$wlt.sum(m$wlt.interleave([escapeHtml($wm5).$_split(m$wlt.$JsCallable(($wm6=m$wlt.Character(39,true),m$wlt.JsCallable($wm6,m$wlt.nn$($wm6)?$wm6.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$wlt.$_Object}}],{Arguments$Callable:m$wlt.mtt$([{t:m$wlt.$_Object}]),Return$Callable:{t:m$wlt.$_Boolean}})),["<code>","</code>"].rt$({t:m$wlt.$_String},1).cycled].$sa$({t:m$wlt.Iterable,a:{Element$Iterable:{t:m$wlt.$_String},Absent$Iterable:{t:m$wlt.Nothing}}}),{Absent$interleave:{t:m$wlt.Nothing},Element$interleave:{t:m$wlt.$_String}}),{Value$sum:{t:m$wlt.$_String}});};
highlight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.$_String},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}}],d:['com.redhat.ceylon.ide.client.runner','highlight']};};
var $wm6;
//MethodDef createMessagesTable at runner.ceylon (42:0-49:0)
function createMessagesTable(){
/*BEG dynblock*/
if(!(typeof document==='undefined'||document===null?m$wlt.throwexc(m$wlt.Exception("Undefined or null reference: document"),'44:13-44:20','runner.ceylon'):document).getElementById("messages")){
getOutput().innerHTML="<table><tbody id=\'messages\'/></table>";
}
/*END dynblock*/
};createMessagesTable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','createMessagesTable']};};
//MethodDecl printSystem at runner.ceylon (51:0-52:50)
function printSystem($wm7,$wm8){return printFormatted($wm7,$wm8,"jsc_msg","");};
printSystem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wlt.Null},{t:m$wlt.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printSystem']};};
ex$.printSystem=printSystem;
//MethodDecl printWarning at runner.ceylon (54:0-56:46)
function printWarning($wm9,$wma){return printFormatted($wm9,$wma,"jsc_warn","images/warning.gif");};
printWarning.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wlt.Null},{t:m$wlt.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printWarning']};};
ex$.printWarning=printWarning;
//MethodDecl printError at runner.ceylon (58:0-60:45)
function printError($wmb,$wmc){return printFormatted($wmb,$wmc,"jsc_error","images/error.gif");};
printError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wlt.Null},{t:m$wlt.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printError']};};
ex$.printError=printError;
//MethodDef printFormatted at runner.ceylon (62:0-74:0)
function printFormatted($wmd,$wme,$wmf,$wmg){
createMessagesTable();
/*BEG dynblock*/
var $wmh=getOutput();
$wmh.innerHTML=($wmi=$wmh.innerHTML,$wmj="<tr>\n<td><img src=\'".plus($wmg).plus("\' alt=\'warning\'/>&nbsp;</td>\n<td>").plus(($wmk=$wme,m$wlt.nn$($wmk)?$wmk:"")).plus("</td><td> &mdash; </td>\n<td class=\'").plus($wmf).plus("\'>").plus(highlight($wmd)).plus("</td>\n</tr>"),(m$wlt.nn$($wmi)&&$wmi.plus&&$wmi.plus($wmj))||$wmi+$wmj);
/*END dynblock*/
var $wmk;
};printFormatted.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wlt.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wlt.Null},{t:m$wlt.$_String}]}},{nm:'cssClass',mt:'prm',$t:{t:m$wlt.$_String}},{nm:'image',mt:'prm',$t:{t:m$wlt.$_String}}],d:['com.redhat.ceylon.ide.client.runner','printFormatted']};};
//MethodDef scrollOutput at runner.ceylon (76:0-80:0)
function scrollOutput(){
/*BEG dynblock*/
(typeof window==='undefined'||window===null?m$wlt.throwexc(m$wlt.Exception("Undefined or null reference: window"),'78:8-78:13','runner.ceylon'):window).scrollTo(0,9999999);
/*END dynblock*/
}
ex$.scrollOutput=scrollOutput;
scrollOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wlt.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','scrollOutput']};};
ex$.$pkgunsh$com$redhat$ceylon$ide$client$runner={'getOutput':getOutput,'escapeHtml':escapeHtml,'highlight':highlight,'createMessagesTable':createMessagesTable,'printFormatted':printFormatted};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
