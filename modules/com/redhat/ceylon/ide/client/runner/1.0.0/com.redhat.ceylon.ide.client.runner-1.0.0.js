(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/redhat/ceylon/ide/client/runner/1.0.0/com.redhat.ceylon.ide.client.runner-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$oi6=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$oi6.$addmod$(m$oi6,'ceylon.language/1.2.0');
m$oi6.$addmod$(ex$,'com.redhat.ceylon.ide.client.runner/1.0.0');
ex$.$mod$ans$=function(){return[m$oi6.$_native(["js"].$sa$({t:m$oi6.$_String}))];};
ex$.$pkg$ans$com$redhat$ceylon$ide$client$runner=function(){return[m$oi6.shared()];};

//MethodDef getOutput at runner.ceylon (1:0-5:0)
function getOutput(){
/*BEG dynblock*/
return (typeof document==='undefined'||document===null?m$oi6.throwexc(m$oi6.Exception("Undefined or null reference: document"),'3:15-3:22','runner.ceylon'):document).getElementById("output");
/*END dynblock*/
};getOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','getOutput']};};
//MethodDef clearOutput at runner.ceylon (7:0-11:0)
function clearOutput(){
/*BEG dynblock*/
getOutput().innerHTML="";
/*END dynblock*/
}
ex$.clearOutput=clearOutput;
clearOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','clearOutput']};};
//MethodDef printOutputLine at runner.ceylon (13:0-20:0)
function printOutputLine($oi7){
/*BEG dynblock*/
var $oi8=getOutput();
$oi8.innerHTML=($oi9=($oib=$oi8.innerHTML,$oic=escapeHtml($oi7),(m$oi6.nn$($oib)&&$oib.plus&&$oib.plus($oic))||$oib+$oic),$oia="<br>",(m$oi6.nn$($oi9)&&$oi9.plus&&$oi9.plus($oia))||$oi9+$oia);
/*END dynblock*/
}
ex$.printOutputLine=printOutputLine;
printOutputLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutputLine']};};
//MethodDef printOutput at runner.ceylon (22:0-29:0)
function printOutput($oid){
/*BEG dynblock*/
var $oie=getOutput();
$oie.innerHTML=($oif=$oie.innerHTML,$oig=escapeHtml($oid),(m$oi6.nn$($oif)&&$oif.plus&&$oif.plus($oig))||$oif+$oig);
/*END dynblock*/
}
ex$.printOutput=printOutput;
printOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printOutput']};};
//MethodDecl escapeHtml at runner.ceylon (31:0-35:33)
function escapeHtml($oih){return $oih.$_replace("&","&amp;").$_replace("<","&lt;").$_replace(">","&gt;");};
escapeHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.$_String},ps:[{nm:'html',mt:'prm',$t:{t:m$oi6.$_String}}],d:['com.redhat.ceylon.ide.client.runner','escapeHtml']};};
//MethodDecl highlight at runner.ceylon (37:0-40:44)
function highlight($oii){return m$oi6.sum(m$oi6.interleave([escapeHtml($oii).$_split(m$oi6.$JsCallable(($oij=m$oi6.Character(39,true),m$oi6.JsCallable($oij,m$oi6.nn$($oij)?$oij.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$oi6.$_Object}}],{Arguments$Callable:m$oi6.mtt$([{t:m$oi6.$_Object}]),Return$Callable:{t:m$oi6.$_Boolean}})),["<code>","</code>"].rt$({t:m$oi6.$_String},1).cycled].$sa$({t:m$oi6.Iterable,a:{Element$Iterable:{t:m$oi6.$_String},Absent$Iterable:{t:m$oi6.Nothing}}}),{Absent$interleave:{t:m$oi6.Nothing},Element$interleave:{t:m$oi6.$_String}}),{Value$sum:{t:m$oi6.$_String}});};
highlight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.$_String},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}}],d:['com.redhat.ceylon.ide.client.runner','highlight']};};
var $oij;
//MethodDef createMessagesTable at runner.ceylon (42:0-49:0)
function createMessagesTable(){
/*BEG dynblock*/
if(!(typeof document==='undefined'||document===null?m$oi6.throwexc(m$oi6.Exception("Undefined or null reference: document"),'44:13-44:20','runner.ceylon'):document).getElementById("messages")){
getOutput().innerHTML="<table><tbody id=\'messages\'/></table>";
}
/*END dynblock*/
};createMessagesTable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[],d:['com.redhat.ceylon.ide.client.runner','createMessagesTable']};};
//MethodDecl printSystem at runner.ceylon (51:0-52:50)
function printSystem($oik,$oil){return printFormatted($oik,$oil,"jsc_msg","");};
printSystem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$oi6.Null},{t:m$oi6.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printSystem']};};
ex$.printSystem=printSystem;
//MethodDecl printWarning at runner.ceylon (54:0-56:46)
function printWarning($oim,$oin){return printFormatted($oim,$oin,"jsc_warn","images/warning.gif");};
printWarning.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$oi6.Null},{t:m$oi6.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printWarning']};};
ex$.printWarning=printWarning;
//MethodDecl printError at runner.ceylon (58:0-60:45)
function printError($oio,$oip){return printFormatted($oio,$oip,"jsc_error","images/error.gif");};
printError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$oi6.Null},{t:m$oi6.$_String}]}}],pa:1,d:['com.redhat.ceylon.ide.client.runner','printError']};};
ex$.printError=printError;
//MethodDef printFormatted at runner.ceylon (62:0-74:0)
function printFormatted($oiq,$oir,$ois,$oit){
createMessagesTable();
/*BEG dynblock*/
var $oiu=getOutput();
$oiu.innerHTML=($oiv=$oiu.innerHTML,$oiw="<tr>\n<td><img src=\'".plus($oit).plus("\' alt=\'warning\'/>&nbsp;</td>\n<td>").plus(($oix=$oir,m$oi6.nn$($oix)?$oix:"")).plus("</td><td> &mdash; </td>\n<td class=\'").plus($ois).plus("\'>").plus(highlight($oiq)).plus("</td>\n</tr>"),(m$oi6.nn$($oiv)&&$oiv.plus&&$oiv.plus($oiw))||$oiv+$oiw);
/*END dynblock*/
var $oix;
};printFormatted.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[{nm:'txt',mt:'prm',$t:{t:m$oi6.$_String}},{nm:'loc',mt:'prm',$t:{t:'u',l:[{t:m$oi6.Null},{t:m$oi6.$_String}]}},{nm:'cssClass',mt:'prm',$t:{t:m$oi6.$_String}},{nm:'image',mt:'prm',$t:{t:m$oi6.$_String}}],d:['com.redhat.ceylon.ide.client.runner','printFormatted']};};
//MethodDef scrollOutput at runner.ceylon (76:0-80:0)
function scrollOutput(){
/*BEG dynblock*/
(typeof window==='undefined'||window===null?m$oi6.throwexc(m$oi6.Exception("Undefined or null reference: window"),'78:8-78:13','runner.ceylon'):window).scrollTo(0,9999999);
/*END dynblock*/
}
ex$.scrollOutput=scrollOutput;
scrollOutput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$oi6.Anything},ps:[],pa:1,d:['com.redhat.ceylon.ide.client.runner','scrollOutput']};};
ex$.$pkgunsh$com$redhat$ceylon$ide$client$runner={'getOutput':getOutput,'escapeHtml':escapeHtml,'highlight':highlight,'createMessagesTable':createMessagesTable,'printFormatted':printFormatted};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
