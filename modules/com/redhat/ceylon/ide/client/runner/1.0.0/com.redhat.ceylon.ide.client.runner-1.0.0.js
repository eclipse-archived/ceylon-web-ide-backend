(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/redhat/ceylon/ide/client/runner/1.0.0/com.redhat.ceylon.ide.client.runner-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$wx3=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$wx3.$addmod$(m$wx3,'ceylon.language/1.2.0');
m$wx3.$addmod$(ex$,'com.redhat.ceylon.ide.client.runner/1.0.0');
ex$.$mod$ans$=function(){return[m$wx3.$_native(["js"].$sa$({t:m$wx3.$_String}))];};
ex$.$pkg$ans$com$redhat$ceylon$ide$client$runner=function(){return[m$wx3.shared()];};

//MethodDef getOutput at runner.ceylon (1:0-5:0)
function getOutput(){
/*BEG dynblock*/
return (typeof document==='undefined'||document===null?m$wx3.throwexc(m$wx3.Exception("Undefined or null reference: document"),'3:15-3:22','runner.ceylon'):document).getElementById("output");
/*END dynblock*/
};getOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','getOutput']};};
//MethodDef clearOutput at runner.ceylon (7:0-11:0)
function clearOutput(){
/*BEG dynblock*/
getOutput().innerHTML="";
/*END dynblock*/
}
ex$.clearOutput=clearOutput;
clearOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','clearOutput']};};
//MethodDef printOutputLine at runner.ceylon (13:0-20:0)
function printOutputLine($wx4){
/*BEG dynblock*/
var $wx5=getOutput();
$wx5.innerHTML=($wx6=($wx8=$wx5.innerHTML,$wx9=escapeHtml($wx4),(m$wx3.nn$($wx8)&&$wx8.plus&&$wx8.plus($wx9))||$wx8+$wx9),$wx7="<br>",(m$wx3.nn$($wx6)&&$wx6.plus&&$wx6.plus($wx7))||$wx6+$wx7);
/*END dynblock*/
}
ex$.printOutputLine=printOutputLine;
printOutputLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutputLine']};};
//MethodDef printOutput at runner.ceylon (22:0-29:0)
function printOutput($wxa){
/*BEG dynblock*/
var $wxb=getOutput();
$wxb.innerHTML=($wxc=$wxb.innerHTML,$wxd=escapeHtml($wxa),(m$wx3.nn$($wxc)&&$wxc.plus&&$wxc.plus($wxd))||$wxc+$wxd);
/*END dynblock*/
}
ex$.printOutput=printOutput;
printOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutput']};};
//MethodDecl escapeHtml at runner.ceylon (31:0-35:33)
function escapeHtml($wxe){return $wxe.$_replace("&","&amp;").$_replace("<","&lt;").$_replace(">","&gt;");};
escapeHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.$_String},ps:[{nm:'html',mt:'prm',$t:{t:m$wx3.$_String}}],d:['com.redhat.ceylon.ide.client.runner','escapeHtml']};};
//MethodDecl highlight at runner.ceylon (37:0-40:44)
function highlight($wxf){return m$wx3.sum(m$wx3.interleave([escapeHtml($wxf).$_split(m$wx3.$JsCallable(($wxg=m$wx3.Character(39,true),m$wx3.JsCallable($wxg,m$wx3.nn$($wxg)?$wxg.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$wx3.$_Object}}],{Arguments$Callable:m$wx3.mtt$([{t:m$wx3.$_Object}]),Return$Callable:{t:m$wx3.$_Boolean}})),["<code>","</code>"].rt$({t:m$wx3.$_String},1).cycled].$sa$({t:m$wx3.Iterable,a:{Element$Iterable:{t:m$wx3.$_String},Absent$Iterable:{t:m$wx3.Nothing}}}),{Absent$interleave:{t:m$wx3.Nothing},Element$interleave:{t:m$wx3.$_String}}),{Value$sum:{t:m$wx3.$_String}});};
highlight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.$_String},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}}],d:['com.redhat.ceylon.ide.client.runner','highlight']};};
var $wxg;
//MethodDef createMessagesTable at runner.ceylon (42:0-49:0)
function createMessagesTable(){
/*BEG dynblock*/
if(!(typeof document==='undefined'||document===null?m$wx3.throwexc(m$wx3.Exception("Undefined or null reference: document"),'44:13-44:20','runner.ceylon'):document).getElementById("messages")){
getOutput().innerHTML="<table><tbody id=\'messages\'/></table>";
}
/*END dynblock*/
};createMessagesTable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','createMessagesTable']};};
//MethodDecl printSystem at runner.ceylon (51:0-52:50)
function printSystem($wxh,$wxi){return printFormatted($wxh,$wxi,"jsc_msg","");};
printSystem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wx3.Null},{t:m$wx3.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printSystem']};};
ex$.printSystem=printSystem;
//MethodDecl printWarning at runner.ceylon (54:0-56:46)
function printWarning($wxj,$wxk){return printFormatted($wxj,$wxk,"jsc_warn","images/warning.gif");};
printWarning.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wx3.Null},{t:m$wx3.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printWarning']};};
ex$.printWarning=printWarning;
//MethodDecl printError at runner.ceylon (58:0-60:45)
function printError($wxl,$wxm){return printFormatted($wxl,$wxm,"jsc_error","images/error.gif");};
printError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wx3.Null},{t:m$wx3.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printError']};};
ex$.printError=printError;
//MethodDef printFormatted at runner.ceylon (62:0-74:0)
function printFormatted($wxn,$wxo,$wxp,$wxq){
createMessagesTable();
/*BEG dynblock*/
var $wxr=getOutput();
$wxr.innerHTML=($wxs=$wxr.innerHTML,$wxt="<tr>\n<td><img src=\'".plus($wxq).plus("\' alt=\'warning\'/>&nbsp;</td>\n<td>").plus(($wxu=$wxo,m$wx3.nn$($wxu)?$wxu:"")).plus("</td><td> &mdash; </td>\n<td class=\'").plus($wxp).plus("\'>").plus(highlight($wxn)).plus("</td>\n</tr>"),(m$wx3.nn$($wxs)&&$wxs.plus&&$wxs.plus($wxt))||$wxs+$wxt);
/*END dynblock*/
var $wxu;
};printFormatted.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$wx3.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$wx3.Null},{t:m$wx3.$_String}]}},{nm:'cssClass',mt:'prm',$t:{t:m$wx3.$_String}},{nm:'image',mt:'prm',$t:{t:m$wx3.$_String}}],d:['com.redhat.ceylon.ide.client.runner','printFormatted']};};
//MethodDef scrollOutput at runner.ceylon (76:0-80:0)
function scrollOutput(){
/*BEG dynblock*/
(typeof window==='undefined'||window===null?m$wx3.throwexc(m$wx3.Exception("Undefined or null reference: window"),'78:8-78:13','runner.ceylon'):window).scrollTo(0,9999999);
/*END dynblock*/
}
ex$.scrollOutput=scrollOutput;
scrollOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$wx3.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','scrollOutput']};};
ex$.$pkgunsh$com$redhat$ceylon$ide$client$runner={'getOutput':getOutput,'escapeHtml':escapeHtml,'highlight':highlight,'createMessagesTable':createMessagesTable,'printFormatted':printFormatted};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
