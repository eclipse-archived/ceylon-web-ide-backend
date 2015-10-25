(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/html/1.2.0/ceylon.html-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.html/1.2.0');
var m$2=require('ceylon/collection/1.2.0/ceylon.collection-1.2.0');
m$1.$addmod$(m$2,'ceylon.collection/1.2.0');
function A(text,href,target,download,hrefLang,rel,type,$wgimgr$1c2,$wgimgr$1c3,$wgimgr$1c4,$wgimgr$1c5,$wgimgr$1c6,$wgimgr$1c7,$wgimgr$1c8,$wgimgr$1c9,$wgimgr$1ca,$wgimgr$1cb,$wgimgr$1cc,$wgimgr$1cd,$wgimgr$1ce,$wgimgr$1cf,$wgimgr$1cg,$wgimgr$1ch,$wgimgr$1ci,$wgimgr$1cj,children,a$){
$init$A();
if(a$===undefined)a$=new A.$$;
a$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
a$.text_=text;
if(href===undefined){href="#";}
a$.href_=href;
if(target===undefined){target=null;}
a$.target_=target;
if(download===undefined){download=null;}
a$.download_=download;
if(hrefLang===undefined){hrefLang=null;}
a$.hrefLang_=hrefLang;
if(rel===undefined){rel=null;}
a$.rel_=rel;
if(type===undefined){type=null;}
a$.type_=type;
if($wgimgr$1c2===undefined){$wgimgr$1c2=null;}
a$.$wgimgr$1c2_=$wgimgr$1c2;
if($wgimgr$1c3===undefined){$wgimgr$1c3=m$1.empty();}
a$.$wgimgr$1c3_=$wgimgr$1c3;
if($wgimgr$1c4===undefined){$wgimgr$1c4=null;}
a$.$wgimgr$1c4_=$wgimgr$1c4;
if($wgimgr$1c5===undefined){$wgimgr$1c5=null;}
a$.$wgimgr$1c5_=$wgimgr$1c5;
if($wgimgr$1c6===undefined){$wgimgr$1c6=null;}
a$.$wgimgr$1c6_=$wgimgr$1c6;
if($wgimgr$1c7===undefined){$wgimgr$1c7=null;}
a$.$wgimgr$1c7_=$wgimgr$1c7;
if($wgimgr$1c8===undefined){$wgimgr$1c8=null;}
a$.$wgimgr$1c8_=$wgimgr$1c8;
if($wgimgr$1c9===undefined){$wgimgr$1c9=null;}
a$.$wgimgr$1c9_=$wgimgr$1c9;
if($wgimgr$1ca===undefined){$wgimgr$1ca=null;}
a$.$wgimgr$1ca_=$wgimgr$1ca;
if($wgimgr$1cb===undefined){$wgimgr$1cb=null;}
a$.$wgimgr$1cb_=$wgimgr$1cb;
if($wgimgr$1cc===undefined){$wgimgr$1cc=null;}
a$.$wgimgr$1cc_=$wgimgr$1cc;
if($wgimgr$1cd===undefined){$wgimgr$1cd=null;}
a$.$wgimgr$1cd_=$wgimgr$1cd;
if($wgimgr$1ce===undefined){$wgimgr$1ce=null;}
a$.$wgimgr$1ce_=$wgimgr$1ce;
if($wgimgr$1cf===undefined){$wgimgr$1cf=null;}
a$.$wgimgr$1cf_=$wgimgr$1cf;
if($wgimgr$1cg===undefined){$wgimgr$1cg=null;}
a$.$wgimgr$1cg_=$wgimgr$1cg;
if($wgimgr$1ch===undefined){$wgimgr$1ch=null;}
a$.$wgimgr$1ch_=$wgimgr$1ch;
if($wgimgr$1ci===undefined){$wgimgr$1ci=m$1.empty();}
a$.$wgimgr$1ci_=$wgimgr$1ci;
if($wgimgr$1cj===undefined){$wgimgr$1cj=m$1.empty();}
a$.$wgimgr$1cj_=$wgimgr$1cj;
if(children===undefined){children=m$1.empty();}
a$.children_=children;
TextNode(a$);
InlineElement(a$);
ParentNode({Child$ParentNode:{t:InlineElement}},a$);
BaseElement($wgimgr$1c2,$wgimgr$1c3,$wgimgr$1c4,$wgimgr$1c5,$wgimgr$1c6,$wgimgr$1c7,$wgimgr$1c8,$wgimgr$1c9,$wgimgr$1ca,$wgimgr$1cb,$wgimgr$1cc,$wgimgr$1cd,$wgimgr$1ce,$wgimgr$1cf,$wgimgr$1cg,$wgimgr$1ch,$wgimgr$1ci,$wgimgr$1cj,a$);
a$.tag_=Tag("a");
return a$;
}
A.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'href',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:href')];}},{nm:'target',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:target')];}},{nm:'download',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:download')];}},{nm:'hrefLang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:hrefLang')];}},{nm:'rel',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:rel')];}},{nm:'type',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:type')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A')];},d:['ceylon.html','A']};};
ex$.A=A;
function $init$A(){
if(A.$$===undefined){
m$1.initTypeProto(A,'ceylon.html::A',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(a$){
m$1.atr$(a$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:A,pa:3,d:['ceylon.html','A','$at','text']};});
m$1.atr$(a$,'href',function(){return this.href_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:href')];},d:['ceylon.html','A','$at','href']};});
m$1.atr$(a$,'target',function(){return this.target_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:target')];},d:['ceylon.html','A','$at','target']};});
m$1.atr$(a$,'download',function(){return this.download_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:download')];},d:['ceylon.html','A','$at','download']};});
m$1.atr$(a$,'hrefLang',function(){return this.hrefLang_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:hrefLang')];},d:['ceylon.html','A','$at','hrefLang']};});
m$1.atr$(a$,'rel',function(){return this.rel_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:rel')];},d:['ceylon.html','A','$at','rel']};});
m$1.atr$(a$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:A:$at:type')];},d:['ceylon.html','A','$at','type']};});
m$1.atr$(a$,'$wgimgr$1c2',function(){return this.$wgimgr$1c2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','id$40hmd3']};});
m$1.atr$(a$,'$wgimgr$1c3',function(){return this.$wgimgr$1c3_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:A,d:['ceylon.html','A','$at','classNames$offio4']};});
m$1.atr$(a$,'$wgimgr$1c4',function(){return this.$wgimgr$1c4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','style$3d80il']};});
m$1.atr$(a$,'$wgimgr$1c5',function(){return this.$wgimgr$1c5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','accessKey$7qwvgp']};});
m$1.atr$(a$,'$wgimgr$1c6',function(){return this.$wgimgr$1c6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','contextMenu$efc902']};});
m$1.atr$(a$,'$wgimgr$1c7',function(){return this.$wgimgr$1c7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:A,d:['ceylon.html','A','$at','dir$66tu6x']};});
m$1.atr$(a$,'$wgimgr$1c8',function(){return this.$wgimgr$1c8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:A,d:['ceylon.html','A','$at','draggable$9a7fd']};});
m$1.atr$(a$,'$wgimgr$1c9',function(){return this.$wgimgr$1c9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:A,d:['ceylon.html','A','$at','dropZone$h94o7r']};});
m$1.atr$(a$,'$wgimgr$1ca',function(){return this.$wgimgr$1ca_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:A,d:['ceylon.html','A','$at','inert$2w1uqu']};});
m$1.atr$(a$,'$wgimgr$1cb',function(){return this.$wgimgr$1cb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:A,d:['ceylon.html','A','$at','hidden$wovyq']};});
m$1.atr$(a$,'$wgimgr$1cc',function(){return this.$wgimgr$1cc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','lang$7xwjiq']};});
m$1.atr$(a$,'$wgimgr$1cd',function(){return this.$wgimgr$1cd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:A,d:['ceylon.html','A','$at','spellcheck$8ttfd8']};});
m$1.atr$(a$,'$wgimgr$1ce',function(){return this.$wgimgr$1ce_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:A,d:['ceylon.html','A','$at','tabIndex$ugnjgp']};});
m$1.atr$(a$,'$wgimgr$1cf',function(){return this.$wgimgr$1cf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:A,d:['ceylon.html','A','$at','title$gqxtpo']};});
m$1.atr$(a$,'$wgimgr$1cg',function(){return this.$wgimgr$1cg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:A,d:['ceylon.html','A','$at','translate$pj51vy']};});
m$1.atr$(a$,'$wgimgr$1ch',function(){return this.$wgimgr$1ch_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:A,d:['ceylon.html','A','$at','aria$vzn79']};});
m$1.atr$(a$,'$wgimgr$1ci',function(){return this.$wgimgr$1ci_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:A,d:['ceylon.html','A','$at','nonstandardAttributes$hu3imr']};});
m$1.atr$(a$,'$wgimgr$1cj',function(){return this.$wgimgr$1cj_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:A,d:['ceylon.html','A','$at','data$2jspbi']};});
m$1.atr$(a$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:A,pa:3,d:['ceylon.html','A','$at','children']};});
m$1.atr$(a$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:A,pa:3,d:['ceylon.html','A','$at','tag']};});
m$1.atr$(a$,'attributes',function(){
var a$=this;
var $1ck=AttributeSequenceBuilder();
$1ck.addAttribute("href",a$.href);
$1ck.addAttribute("target",a$.target);
$1ck.addAll(m$1.attrGetter(a$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
$1ck.addAttribute("download",a$.download);
$1ck.addAttribute("rel",a$.rel);
$1ck.addAttribute("hreflang",a$.hrefLang);
$1ck.addAttribute("type",a$.type);
return $1ck.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:A,pa:3,d:['ceylon.html','A','$at','attributes']};});
})(A.$$.prototype);
}
return A;
}
ex$.$init$A=$init$A;
$init$A();
function Aria(labeledBy,describedBy,aria$){
$init$Aria();
if(aria$===undefined)aria$=new Aria.$$;
if(labeledBy===undefined){labeledBy=null;}
aria$.labeledBy_=labeledBy;
if(describedBy===undefined){describedBy=null;}
aria$.describedBy_=describedBy;
return aria$;
}
Aria.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'labeledBy',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1},{nm:'describedBy',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1}],pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','Aria']};};
ex$.Aria=Aria;
function $init$Aria(){
if(Aria.$$===undefined){
m$1.initTypeProto(Aria,'ceylon.html::Aria',m$1.Basic);
(function(aria$){
m$1.atr$(aria$,'labeledBy',function(){return this.labeledBy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aria,pa:1,d:['ceylon.html','Aria','$at','labeledBy']};});
m$1.atr$(aria$,'describedBy',function(){return this.describedBy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aria,pa:1,d:['ceylon.html','Aria','$at','describedBy']};});
})(Aria.$$.prototype);
}
return Aria;
}
ex$.$init$Aria=$init$Aria;
$init$Aria();
function NonstandardAttributes(){var $1cl={t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}};$1cl.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:NonstandardAttributes')];},d:['ceylon.html','NonstandardAttributes']};};return $1cl;}
ex$.NonstandardAttributes=NonstandardAttributes;
function DataContainer(){var $1cm={t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}};$1cm.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:DataContainer')];},d:['ceylon.html','DataContainer']};};return $1cm;}
ex$.DataContainer=DataContainer;
function CssClass(){var $1cn=m$1.mut$([{t:m$1.$_String},{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}}]);$1cn.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:CssClass')];},d:['ceylon.html','CssClass']};};return $1cn;}
ex$.CssClass=CssClass;
function TextDirection(textDirection$){
$init$TextDirection();
if(textDirection$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::TextDirection"),'?','?')
return textDirection$;
}
TextDirection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getLeftToRight,$prop$getRightToLeft,$prop$getAutoDirection],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextDirection')];},d:['ceylon.html','TextDirection']};};
ex$.TextDirection=TextDirection;
function $init$TextDirection(){
if(TextDirection.$$===undefined){
m$1.initTypeProto(TextDirection,'ceylon.html::TextDirection',m$1.Basic);
}
return TextDirection;
}
ex$.$init$TextDirection=$init$TextDirection;
$init$TextDirection();
function $1co(){
var leftToRight$=new $1co.$$;TextDirection(leftToRight$);
return leftToRight$;
};$1co.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextDirection},d:['ceylon.html','leftToRight']};};
function $init$leftToRight(){
if($1co.$$===undefined){
m$1.initTypeProto($1co,'ceylon.html::leftToRight',$init$TextDirection());
(function(leftToRight$){
m$1.atr$(leftToRight$,'string',function(){
var leftToRight$=this;
return "ltr";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1co,pa:3,d:['ceylon.html','leftToRight','$at','string']};});
})($1co.$$.prototype);
}
return $1co;
}
ex$.$init$leftToRight=$init$leftToRight;
$init$leftToRight();
var $1cq;
function leftToRight(){
if($1cq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'leftToRight\' before it was set"),'20:0-24:0','attributes.ceylon');
if($1cq===undefined){$1cq=m$1.INIT$;$1cq=$init$leftToRight()();$1cq.$crtmm$=leftToRight.$crtmm$;}
return $1cq;
}
ex$.leftToRight=leftToRight;
leftToRight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$leftToRight()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:leftToRight')];},d:['ceylon.html','leftToRight']};};
$prop$getLeftToRight=leftToRight;
ex$.$prop$getLeftToRight=$prop$getLeftToRight;
function $1cr(){
var rightToLeft$=new $1cr.$$;TextDirection(rightToLeft$);
return rightToLeft$;
};$1cr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextDirection},d:['ceylon.html','rightToLeft']};};
function $init$rightToLeft(){
if($1cr.$$===undefined){
m$1.initTypeProto($1cr,'ceylon.html::rightToLeft',$init$TextDirection());
(function(rightToLeft$){
m$1.atr$(rightToLeft$,'string',function(){
var rightToLeft$=this;
return "rtl";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1cr,pa:3,d:['ceylon.html','rightToLeft','$at','string']};});
})($1cr.$$.prototype);
}
return $1cr;
}
ex$.$init$rightToLeft=$init$rightToLeft;
$init$rightToLeft();
var $1ct;
function rightToLeft(){
if($1ct===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rightToLeft\' before it was set"),'26:0-30:0','attributes.ceylon');
if($1ct===undefined){$1ct=m$1.INIT$;$1ct=$init$rightToLeft()();$1ct.$crtmm$=rightToLeft.$crtmm$;}
return $1ct;
}
ex$.rightToLeft=rightToLeft;
rightToLeft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$rightToLeft()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:rightToLeft')];},d:['ceylon.html','rightToLeft']};};
$prop$getRightToLeft=rightToLeft;
ex$.$prop$getRightToLeft=$prop$getRightToLeft;
function $1cu(){
var autoDirection$=new $1cu.$$;TextDirection(autoDirection$);
return autoDirection$;
};$1cu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextDirection},d:['ceylon.html','autoDirection']};};
function $init$autoDirection(){
if($1cu.$$===undefined){
m$1.initTypeProto($1cu,'ceylon.html::autoDirection',$init$TextDirection());
(function(autoDirection$){
m$1.atr$(autoDirection$,'string',function(){
var autoDirection$=this;
return "auto";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1cu,pa:3,d:['ceylon.html','autoDirection','$at','string']};});
})($1cu.$$.prototype);
}
return $1cu;
}
ex$.$init$autoDirection=$init$autoDirection;
$init$autoDirection();
var $1cw;
function autoDirection(){
if($1cw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'autoDirection\' before it was set"),'32:0-38:0','attributes.ceylon');
if($1cw===undefined){$1cw=m$1.INIT$;$1cw=$init$autoDirection()();$1cw.$crtmm$=autoDirection.$crtmm$;}
return $1cw;
}
ex$.autoDirection=autoDirection;
autoDirection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$autoDirection()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:autoDirection')];},d:['ceylon.html','autoDirection']};};
$prop$getAutoDirection=autoDirection;
ex$.$prop$getAutoDirection=$prop$getAutoDirection;
function DropZone(dropZone$){
$init$DropZone();
if(dropZone$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::DropZone"),'?','?')
return dropZone$;
}
DropZone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getCopy,$prop$getLink,$prop$getMove],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:DropZone')];},d:['ceylon.html','DropZone']};};
ex$.DropZone=DropZone;
function $init$DropZone(){
if(DropZone.$$===undefined){
m$1.initTypeProto(DropZone,'ceylon.html::DropZone',m$1.Basic);
}
return DropZone;
}
ex$.$init$DropZone=$init$DropZone;
$init$DropZone();
function $1cx(){
var copy$=new $1cx.$$;DropZone(copy$);
return copy$;
};$1cx.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DropZone},d:['ceylon.html','copy']};};
function $init$copy(){
if($1cx.$$===undefined){
m$1.initTypeProto($1cx,'ceylon.html::copy',$init$DropZone());
}
return $1cx;
}
ex$.$init$copy=$init$copy;
$init$copy();
var $1cz;
function copy(){
if($1cz===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'copy\' before it was set"),'44:0-46:39','attributes.ceylon');
if($1cz===undefined){$1cz=m$1.INIT$;$1cz=$init$copy()();$1cz.$crtmm$=copy.$crtmm$;}
return $1cz;
}
ex$.copy=copy;
copy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$copy()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:copy')];},d:['ceylon.html','copy']};};
$prop$getCopy=copy;
ex$.$prop$getCopy=$prop$getCopy;
function $1d0(){
var link$=new $1d0.$$;DropZone(link$);
return link$;
};$1d0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DropZone},d:['ceylon.html','link']};};
function $init$$_link(){
if($1d0.$$===undefined){
m$1.initTypeProto($1d0,'ceylon.html::link',$init$DropZone());
}
return $1d0;
}
ex$.$init$$_link=$init$$_link;
$init$$_link();
var $1d2;
function $_link(){
if($1d2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'link\' before it was set"),'48:0-50:39','attributes.ceylon');
if($1d2===undefined){$1d2=m$1.INIT$;$1d2=$init$$_link()();$1d2.$crtmm$=$_link.$crtmm$;}
return $1d2;
}
ex$.$_link=$_link;
$_link.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$_link()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:link')];},d:['ceylon.html','link']};};
$prop$getLink=$_link;
ex$.$prop$getLink=$prop$getLink;
function $1d3(){
var move$=new $1d3.$$;DropZone(move$);
return move$;
};$1d3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DropZone},d:['ceylon.html','move']};};
function $init$move(){
if($1d3.$$===undefined){
m$1.initTypeProto($1d3,'ceylon.html::move',$init$DropZone());
}
return $1d3;
}
ex$.$init$move=$init$move;
$init$move();
var $1d5;
function move(){
if($1d5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'move\' before it was set"),'52:0-54:39','attributes.ceylon');
if($1d5===undefined){$1d5=m$1.INIT$;$1d5=$init$move()();$1d5.$crtmm$=move.$crtmm$;}
return $1d5;
}
ex$.move=move;
move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$move()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:move')];},d:['ceylon.html','move']};};
$prop$getMove=move;
ex$.$prop$getMove=$prop$getMove;
function AttributeSequenceBuilder(attributeSequenceBuilder$){
$init$AttributeSequenceBuilder();
if(attributeSequenceBuilder$===undefined)attributeSequenceBuilder$=new AttributeSequenceBuilder.$$;
attributeSequenceBuilder$.$wgimgr$1d6_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}});
return attributeSequenceBuilder$;
}
AttributeSequenceBuilder.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],an:function(){return[m$1.doc$($CCMM$,'ceylon.html:AttributeSequenceBuilder')];},d:['ceylon.html','AttributeSequenceBuilder']};};
ex$.AttributeSequenceBuilder=AttributeSequenceBuilder;
function $init$AttributeSequenceBuilder(){
if(AttributeSequenceBuilder.$$===undefined){
m$1.initTypeProto(AttributeSequenceBuilder,'ceylon.html::AttributeSequenceBuilder',m$1.Basic);
(function(attributeSequenceBuilder$){
m$1.atr$(attributeSequenceBuilder$,'$wgimgr$1d6',function(){return this.$wgimgr$1d6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:AttributeSequenceBuilder,d:['ceylon.html','AttributeSequenceBuilder','$at','list$nr8ra1']};});
attributeSequenceBuilder$.addAttribute=function($1d7,$1d8){
var attributeSequenceBuilder$=this;
var $1d9;
if(m$1.nn$(($1d9=$1d8))){
attributeSequenceBuilder$.$wgimgr$1d6.add(m$1.Entry($1d7,$1d9,{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}));
}
};attributeSequenceBuilder$.addAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}}],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','addAttribute']};};
attributeSequenceBuilder$.addNamedBooleanAttribute=function($1da,$1db){
var attributeSequenceBuilder$=this;
var $1dc;
if(m$1.nn$(($1dc=$1db))&&$1dc){
attributeSequenceBuilder$.$wgimgr$1d6.add(m$1.Entry($1da,$1da,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}));
}
};attributeSequenceBuilder$.addNamedBooleanAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}}],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','addNamedBooleanAttribute']};};
attributeSequenceBuilder$.addYesNoBooleanAttribute=function($1dd,$1de){
var attributeSequenceBuilder$=this;
var $1df;
if(m$1.nn$(($1df=$1de))){
attributeSequenceBuilder$.addAttribute($1dd,($1dg=($1df?"yes":null),m$1.nn$($1dg)?$1dg:"no"));
var $1dg;
}
};attributeSequenceBuilder$.addYesNoBooleanAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}}],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','addYesNoBooleanAttribute']};};
attributeSequenceBuilder$.addOnOffBooleanAttribute=function($1dh,$1di){
var attributeSequenceBuilder$=this;
var $1dj;
if(m$1.nn$(($1dj=$1di))){
attributeSequenceBuilder$.addAttribute($1dh,($1dk=($1dj?"on":null),m$1.nn$($1dk)?$1dk:"off"));
var $1dk;
}
};attributeSequenceBuilder$.addOnOffBooleanAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}}],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','addOnOffBooleanAttribute']};};
attributeSequenceBuilder$.sequence=function(){var attributeSequenceBuilder$=this;
return attributeSequenceBuilder$.$wgimgr$1d6.sequence();};
attributeSequenceBuilder$.sequence.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},ps:[],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','sequence']};};
attributeSequenceBuilder$.addAll=function($1dl){var attributeSequenceBuilder$=this;
return attributeSequenceBuilder$.$wgimgr$1d6.addAll($1dl);};
attributeSequenceBuilder$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'attributes',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}}],$cont:AttributeSequenceBuilder,pa:1,d:['ceylon.html','AttributeSequenceBuilder','$m','addAll']};};
})(AttributeSequenceBuilder.$$.prototype);
}
return AttributeSequenceBuilder;
}
ex$.$init$AttributeSequenceBuilder=$init$AttributeSequenceBuilder;
$init$AttributeSequenceBuilder();
function Blockquote(text,$wgimgr$1dm,$wgimgr$1dn,$wgimgr$1do,$wgimgr$1dp,$wgimgr$1dq,$wgimgr$1dr,$wgimgr$1ds,$wgimgr$1dt,$wgimgr$1du,$wgimgr$1dv,$wgimgr$1dw,$wgimgr$1dx,$wgimgr$1dy,$wgimgr$1dz,$wgimgr$1e0,$wgimgr$1e1,$wgimgr$1e2,$wgimgr$1e3,children,blockquote$){
$init$Blockquote();
if(blockquote$===undefined)blockquote$=new Blockquote.$$;
blockquote$.$$targs$$={Child$ParentNode:{t:BlockElement}};
if(text===undefined){text="";}
blockquote$.text_=text;
if($wgimgr$1dm===undefined){$wgimgr$1dm=null;}
blockquote$.$wgimgr$1dm_=$wgimgr$1dm;
if($wgimgr$1dn===undefined){$wgimgr$1dn=m$1.empty();}
blockquote$.$wgimgr$1dn_=$wgimgr$1dn;
if($wgimgr$1do===undefined){$wgimgr$1do=null;}
blockquote$.$wgimgr$1do_=$wgimgr$1do;
if($wgimgr$1dp===undefined){$wgimgr$1dp=null;}
blockquote$.$wgimgr$1dp_=$wgimgr$1dp;
if($wgimgr$1dq===undefined){$wgimgr$1dq=null;}
blockquote$.$wgimgr$1dq_=$wgimgr$1dq;
if($wgimgr$1dr===undefined){$wgimgr$1dr=null;}
blockquote$.$wgimgr$1dr_=$wgimgr$1dr;
if($wgimgr$1ds===undefined){$wgimgr$1ds=null;}
blockquote$.$wgimgr$1ds_=$wgimgr$1ds;
if($wgimgr$1dt===undefined){$wgimgr$1dt=null;}
blockquote$.$wgimgr$1dt_=$wgimgr$1dt;
if($wgimgr$1du===undefined){$wgimgr$1du=null;}
blockquote$.$wgimgr$1du_=$wgimgr$1du;
if($wgimgr$1dv===undefined){$wgimgr$1dv=null;}
blockquote$.$wgimgr$1dv_=$wgimgr$1dv;
if($wgimgr$1dw===undefined){$wgimgr$1dw=null;}
blockquote$.$wgimgr$1dw_=$wgimgr$1dw;
if($wgimgr$1dx===undefined){$wgimgr$1dx=null;}
blockquote$.$wgimgr$1dx_=$wgimgr$1dx;
if($wgimgr$1dy===undefined){$wgimgr$1dy=null;}
blockquote$.$wgimgr$1dy_=$wgimgr$1dy;
if($wgimgr$1dz===undefined){$wgimgr$1dz=null;}
blockquote$.$wgimgr$1dz_=$wgimgr$1dz;
if($wgimgr$1e0===undefined){$wgimgr$1e0=null;}
blockquote$.$wgimgr$1e0_=$wgimgr$1e0;
if($wgimgr$1e1===undefined){$wgimgr$1e1=null;}
blockquote$.$wgimgr$1e1_=$wgimgr$1e1;
if($wgimgr$1e2===undefined){$wgimgr$1e2=m$1.empty();}
blockquote$.$wgimgr$1e2_=$wgimgr$1e2;
if($wgimgr$1e3===undefined){$wgimgr$1e3=m$1.empty();}
blockquote$.$wgimgr$1e3_=$wgimgr$1e3;
if(children===undefined){children=m$1.empty();}
blockquote$.children_=children;
TextNode(blockquote$);
BlockElement(blockquote$);
ParentNode({Child$ParentNode:{t:BlockElement}},blockquote$);
BaseElement($wgimgr$1dm,$wgimgr$1dn,$wgimgr$1do,$wgimgr$1dp,$wgimgr$1dq,$wgimgr$1dr,$wgimgr$1ds,$wgimgr$1dt,$wgimgr$1du,$wgimgr$1dv,$wgimgr$1dw,$wgimgr$1dx,$wgimgr$1dy,$wgimgr$1dz,$wgimgr$1e0,$wgimgr$1e1,$wgimgr$1e2,$wgimgr$1e3,blockquote$);
blockquote$.tag_=Tag("blockquote");
return blockquote$;
}
Blockquote.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:BlockElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:BlockElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:BlockElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:BlockElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Blockquote')];},d:['ceylon.html','Blockquote']};};
ex$.Blockquote=Blockquote;
function $init$Blockquote(){
if(Blockquote.$$===undefined){
m$1.initTypeProto(Blockquote,'ceylon.html::Blockquote',$init$TextNode(),$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(blockquote$){
m$1.atr$(blockquote$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Blockquote,pa:3,d:['ceylon.html','Blockquote','$at','text']};});
m$1.atr$(blockquote$,'$wgimgr$1dm',function(){return this.$wgimgr$1dm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','id$1c5jrp']};});
m$1.atr$(blockquote$,'$wgimgr$1dn',function(){return this.$wgimgr$1dn_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Blockquote,d:['ceylon.html','Blockquote','$at','classNames$lr3g2q']};});
m$1.atr$(blockquote$,'$wgimgr$1do',function(){return this.$wgimgr$1do_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','style$ovxx7']};});
m$1.atr$(blockquote$,'$wgimgr$1dp',function(){return this.$wgimgr$1dp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','accessKey$af8y23']};});
m$1.atr$(blockquote$,'$wgimgr$1dq',function(){return this.$wgimgr$1dq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','contextMenu$br06eo']};});
m$1.atr$(blockquote$,'$wgimgr$1dr',function(){return this.$wgimgr$1dr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','dir$3ihrlj']};});
m$1.atr$(blockquote$,'$wgimgr$1ds',function(){return this.$wgimgr$1ds_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','draggable$2f1v61']};});
m$1.atr$(blockquote$,'$wgimgr$1dt',function(){return this.$wgimgr$1dt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','dropZone$ekslmd']};});
m$1.atr$(blockquote$,'$wgimgr$1du',function(){return this.$wgimgr$1du_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','inert$7ps5g']};});
m$1.atr$(blockquote$,'$wgimgr$1dv',function(){return this.$wgimgr$1dv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','hidden$3l0yk4']};});
m$1.atr$(blockquote$,'$wgimgr$1dw',function(){return this.$wgimgr$1dw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','lang$59kgxc']};});
m$1.atr$(blockquote$,'$wgimgr$1dx',function(){return this.$wgimgr$1dx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','spellcheck$bi5hym']};});
m$1.atr$(blockquote$,'$wgimgr$1dy',function(){return this.$wgimgr$1dy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','tabIndex$rsbgvb']};});
m$1.atr$(blockquote$,'$wgimgr$1dz',function(){return this.$wgimgr$1dz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','title$e2lr4a']};});
m$1.atr$(blockquote$,'$wgimgr$1e0',function(){return this.$wgimgr$1e0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','translate$s7h4hc']};});
m$1.atr$(blockquote$,'$wgimgr$1e1',function(){return this.$wgimgr$1e1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Blockquote,d:['ceylon.html','Blockquote','$at','aria$1scfe5']};});
m$1.atr$(blockquote$,'$wgimgr$1e2',function(){return this.$wgimgr$1e2_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Blockquote,d:['ceylon.html','Blockquote','$at','nonstandardAttributes$kifl85']};});
m$1.atr$(blockquote$,'$wgimgr$1e3',function(){return this.$wgimgr$1e3_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Blockquote,d:['ceylon.html','Blockquote','$at','data$4jd9w']};});
m$1.atr$(blockquote$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:BlockElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:BlockElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:BlockElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Blockquote,pa:3,d:['ceylon.html','Blockquote','$at','children']};});
m$1.atr$(blockquote$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Blockquote,pa:3,d:['ceylon.html','Blockquote','$at','tag']};});
})(Blockquote.$$.prototype);
}
return Blockquote;
}
ex$.$init$Blockquote=$init$Blockquote;
$init$Blockquote();
function Body($wgimgr$1e4,$wgimgr$1e5,$wgimgr$1e6,$wgimgr$1e7,$wgimgr$1e8,$wgimgr$1e9,$wgimgr$1ea,$wgimgr$1eb,$wgimgr$1ec,$wgimgr$1ed,$wgimgr$1ee,$wgimgr$1ef,$wgimgr$1eg,$wgimgr$1eh,$wgimgr$1ei,$wgimgr$1ej,$wgimgr$1ek,$wgimgr$1el,children,body$){
$init$Body();
if(body$===undefined)body$=new Body.$$;
body$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement},{t:Script}])};
if($wgimgr$1e4===undefined){$wgimgr$1e4=null;}
body$.$wgimgr$1e4_=$wgimgr$1e4;
if($wgimgr$1e5===undefined){$wgimgr$1e5=m$1.empty();}
body$.$wgimgr$1e5_=$wgimgr$1e5;
if($wgimgr$1e6===undefined){$wgimgr$1e6=null;}
body$.$wgimgr$1e6_=$wgimgr$1e6;
if($wgimgr$1e7===undefined){$wgimgr$1e7=null;}
body$.$wgimgr$1e7_=$wgimgr$1e7;
if($wgimgr$1e8===undefined){$wgimgr$1e8=null;}
body$.$wgimgr$1e8_=$wgimgr$1e8;
if($wgimgr$1e9===undefined){$wgimgr$1e9=null;}
body$.$wgimgr$1e9_=$wgimgr$1e9;
if($wgimgr$1ea===undefined){$wgimgr$1ea=null;}
body$.$wgimgr$1ea_=$wgimgr$1ea;
if($wgimgr$1eb===undefined){$wgimgr$1eb=null;}
body$.$wgimgr$1eb_=$wgimgr$1eb;
if($wgimgr$1ec===undefined){$wgimgr$1ec=null;}
body$.$wgimgr$1ec_=$wgimgr$1ec;
if($wgimgr$1ed===undefined){$wgimgr$1ed=null;}
body$.$wgimgr$1ed_=$wgimgr$1ed;
if($wgimgr$1ee===undefined){$wgimgr$1ee=null;}
body$.$wgimgr$1ee_=$wgimgr$1ee;
if($wgimgr$1ef===undefined){$wgimgr$1ef=null;}
body$.$wgimgr$1ef_=$wgimgr$1ef;
if($wgimgr$1eg===undefined){$wgimgr$1eg=null;}
body$.$wgimgr$1eg_=$wgimgr$1eg;
if($wgimgr$1eh===undefined){$wgimgr$1eh=null;}
body$.$wgimgr$1eh_=$wgimgr$1eh;
if($wgimgr$1ei===undefined){$wgimgr$1ei=null;}
body$.$wgimgr$1ei_=$wgimgr$1ei;
if($wgimgr$1ej===undefined){$wgimgr$1ej=null;}
body$.$wgimgr$1ej_=$wgimgr$1ej;
if($wgimgr$1ek===undefined){$wgimgr$1ek=m$1.empty();}
body$.$wgimgr$1ek_=$wgimgr$1ek;
if($wgimgr$1el===undefined){$wgimgr$1el=m$1.empty();}
body$.$wgimgr$1el_=$wgimgr$1el;
if(children===undefined){children=m$1.empty();}
body$.children_=children;
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement},{t:Script}])},body$);
BaseElement($wgimgr$1e4,$wgimgr$1e5,$wgimgr$1e6,$wgimgr$1e7,$wgimgr$1e8,$wgimgr$1e9,$wgimgr$1ea,$wgimgr$1eb,$wgimgr$1ec,$wgimgr$1ed,$wgimgr$1ee,$wgimgr$1ef,$wgimgr$1eg,$wgimgr$1eh,$wgimgr$1ei,$wgimgr$1ej,$wgimgr$1ek,$wgimgr$1el,body$);
body$.tag_=Tag("body");
return body$;
}
Body.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Null},{t:Script},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[BlockOrInline(),{t:Script}]}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Body')];},d:['ceylon.html','Body']};};
ex$.Body=Body;
function $init$Body(){
if(Body.$$===undefined){
m$1.initTypeProto(Body,'ceylon.html::Body',$init$ParentNode(),$init$BaseElement());
(function(body$){
m$1.atr$(body$,'$wgimgr$1e4',function(){return this.$wgimgr$1e4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','id$6jiugw']};});
m$1.atr$(body$,'$wgimgr$1e5',function(){return this.$wgimgr$1e5_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Body,d:['ceylon.html','Body','$at','classNames$qygqrx']};});
m$1.atr$(body$,'$wgimgr$1e6',function(){return this.$wgimgr$1e6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','style$5w98me']};});
m$1.atr$(body$,'$wgimgr$1e7',function(){return this.$wgimgr$1e7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','accessKey$57vncw']};});
m$1.atr$(body$,'$wgimgr$1e8',function(){return this.$wgimgr$1e8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','contextMenu$gydh3v']};});
m$1.atr$(body$,'$wgimgr$1e9',function(){return this.$wgimgr$1e9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Body,d:['ceylon.html','Body','$at','dir$8pv2aq']};});
m$1.atr$(body$,'$wgimgr$1ea',function(){return this.$wgimgr$1ea_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Body,d:['ceylon.html','Body','$at','draggable$2sbfj6']};});
m$1.atr$(body$,'$wgimgr$1eb',function(){return this.$wgimgr$1eb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Body,d:['ceylon.html','Body','$at','dropZone$js5wbk']};});
m$1.atr$(body$,'$wgimgr$1ec',function(){return this.$wgimgr$1ec_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Body,d:['ceylon.html','Body','$at','inert$5f32un']};});
m$1.atr$(body$,'$wgimgr$1ed',function(){return this.$wgimgr$1ed_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Body,d:['ceylon.html','Body','$at','hidden$1mcc53']};});
m$1.atr$(body$,'$wgimgr$1ee',function(){return this.$wgimgr$1ee_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','lang$agxrmj']};});
m$1.atr$(body$,'$wgimgr$1ef',function(){return this.$wgimgr$1ef_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Body,d:['ceylon.html','Body','$at','spellcheck$6as79f']};});
m$1.atr$(body$,'$wgimgr$1eg',function(){return this.$wgimgr$1eg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Body,d:['ceylon.html','Body','$at','tabIndex$wzorki']};});
m$1.atr$(body$,'$wgimgr$1eh',function(){return this.$wgimgr$1eh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Body,d:['ceylon.html','Body','$at','title$j9z1th']};});
m$1.atr$(body$,'$wgimgr$1ei',function(){return this.$wgimgr$1ei_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Body,d:['ceylon.html','Body','$at','translate$n03ts5']};});
m$1.atr$(body$,'$wgimgr$1ej',function(){return this.$wgimgr$1ej_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Body,d:['ceylon.html','Body','$at','aria$3f0vb2']};});
m$1.atr$(body$,'$wgimgr$1ek',function(){return this.$wgimgr$1ek_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Body,d:['ceylon.html','Body','$at','nonstandardAttributes$fb2aiy']};});
m$1.atr$(body$,'$wgimgr$1el',function(){return this.$wgimgr$1el_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Body,d:['ceylon.html','Body','$at','data$52txfb']};});
m$1.atr$(body$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Null},{t:Script},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}}]},Absent$Iterable:{t:m$1.Null}}},$cont:Body,pa:3,d:['ceylon.html','Body','$at','children']};});
m$1.atr$(body$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Body,pa:3,d:['ceylon.html','Body','$at','tag']};});
})(Body.$$.prototype);
}
return Body;
}
ex$.$init$Body=$init$Body;
$init$Body();
function Br($wgimgr$1em,$wgimgr$1en,$wgimgr$1eo,$wgimgr$1ep,$wgimgr$1eq,$wgimgr$1er,$wgimgr$1es,$wgimgr$1et,$wgimgr$1eu,$wgimgr$1ev,$wgimgr$1ew,$wgimgr$1ex,$wgimgr$1ey,$wgimgr$1ez,$wgimgr$1f0,$wgimgr$1f1,$wgimgr$1f2,$wgimgr$1f3,br$){
$init$Br();
if(br$===undefined)br$=new Br.$$;
if($wgimgr$1em===undefined){$wgimgr$1em=null;}
br$.$wgimgr$1em_=$wgimgr$1em;
if($wgimgr$1en===undefined){$wgimgr$1en=m$1.empty();}
br$.$wgimgr$1en_=$wgimgr$1en;
if($wgimgr$1eo===undefined){$wgimgr$1eo=null;}
br$.$wgimgr$1eo_=$wgimgr$1eo;
if($wgimgr$1ep===undefined){$wgimgr$1ep=null;}
br$.$wgimgr$1ep_=$wgimgr$1ep;
if($wgimgr$1eq===undefined){$wgimgr$1eq=null;}
br$.$wgimgr$1eq_=$wgimgr$1eq;
if($wgimgr$1er===undefined){$wgimgr$1er=null;}
br$.$wgimgr$1er_=$wgimgr$1er;
if($wgimgr$1es===undefined){$wgimgr$1es=null;}
br$.$wgimgr$1es_=$wgimgr$1es;
if($wgimgr$1et===undefined){$wgimgr$1et=null;}
br$.$wgimgr$1et_=$wgimgr$1et;
if($wgimgr$1eu===undefined){$wgimgr$1eu=null;}
br$.$wgimgr$1eu_=$wgimgr$1eu;
if($wgimgr$1ev===undefined){$wgimgr$1ev=null;}
br$.$wgimgr$1ev_=$wgimgr$1ev;
if($wgimgr$1ew===undefined){$wgimgr$1ew=null;}
br$.$wgimgr$1ew_=$wgimgr$1ew;
if($wgimgr$1ex===undefined){$wgimgr$1ex=null;}
br$.$wgimgr$1ex_=$wgimgr$1ex;
if($wgimgr$1ey===undefined){$wgimgr$1ey=null;}
br$.$wgimgr$1ey_=$wgimgr$1ey;
if($wgimgr$1ez===undefined){$wgimgr$1ez=null;}
br$.$wgimgr$1ez_=$wgimgr$1ez;
if($wgimgr$1f0===undefined){$wgimgr$1f0=null;}
br$.$wgimgr$1f0_=$wgimgr$1f0;
if($wgimgr$1f1===undefined){$wgimgr$1f1=null;}
br$.$wgimgr$1f1_=$wgimgr$1f1;
if($wgimgr$1f2===undefined){$wgimgr$1f2=m$1.empty();}
br$.$wgimgr$1f2_=$wgimgr$1f2;
if($wgimgr$1f3===undefined){$wgimgr$1f3=m$1.empty();}
br$.$wgimgr$1f3_=$wgimgr$1f3;
InlineElement(br$);
BaseElement($wgimgr$1em,$wgimgr$1en,$wgimgr$1eo,$wgimgr$1ep,$wgimgr$1eq,$wgimgr$1er,$wgimgr$1es,$wgimgr$1et,$wgimgr$1eu,$wgimgr$1ev,$wgimgr$1ew,$wgimgr$1ex,$wgimgr$1ey,$wgimgr$1ez,$wgimgr$1f0,$wgimgr$1f1,$wgimgr$1f2,$wgimgr$1f3,br$);
br$.tag_=Tag("br",emptyTag());
return br$;
}
Br.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Br')];},d:['ceylon.html','Br']};};
ex$.Br=Br;
function $init$Br(){
if(Br.$$===undefined){
m$1.initTypeProto(Br,'ceylon.html::Br',$init$InlineElement(),$init$BaseElement());
(function(br$){
m$1.atr$(br$,'$wgimgr$1em',function(){return this.$wgimgr$1em_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','id$ur4exu']};});
m$1.atr$(br$,'$wgimgr$1en',function(){return this.$wgimgr$1en_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Br,d:['ceylon.html','Br','$at','classNames$ac6imt']};});
m$1.atr$(br$,'$wgimgr$1eo',function(){return this.$wgimgr$1eo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','style$vee0sc']};});
m$1.atr$(br$,'$wgimgr$1ep',function(){return this.$wgimgr$1ep_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','accessKey$sil57i']};});
m$1.atr$(br$,'$wgimgr$1eq',function(){return this.$wgimgr$1eq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','contextMenu$kc9sav']};});
m$1.atr$(br$,'$wgimgr$1er',function(){return this.$wgimgr$1er_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Br,d:['ceylon.html','Br','$at','dir$sks740']};});
m$1.atr$(br$,'$wgimgr$1es',function(){return this.$wgimgr$1es_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Br,d:['ceylon.html','Br','$at','draggable$yibtvk']};});
m$1.atr$(br$,'$wgimgr$1et',function(){return this.$wgimgr$1et_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Br,d:['ceylon.html','Br','$at','dropZone$hihd36']};});
m$1.atr$(br$,'$wgimgr$1eu',function(){return this.$wgimgr$1eu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Br,d:['ceylon.html','Br','$at','inert$vvk6k3']};});
m$1.atr$(br$,'$wgimgr$1ev',function(){return this.$wgimgr$1ev_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Br,d:['ceylon.html','Br','$at','hidden$zct4ph']};});
m$1.atr$(br$,'$wgimgr$1ew',function(){return this.$wgimgr$1ew_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','lang$qtphs7']};});
m$1.atr$(br$,'$wgimgr$1ex',function(){return this.$wgimgr$1ex_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Br,d:['ceylon.html','Br','$at','spellcheck$rfolaz']};});
m$1.atr$(br$,'$wgimgr$1ey',function(){return this.$wgimgr$1ey_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Br,d:['ceylon.html','Br','$at','tabIndex$4ayhu8']};});
m$1.atr$(br$,'$wgimgr$1ez',function(){return this.$wgimgr$1ez_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Br,d:['ceylon.html','Br','$at','title$i0o7l9']};});
m$1.atr$(br$,'$wgimgr$1f0',function(){return this.$wgimgr$1f0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Br,d:['ceylon.html','Br','$at','translate$aqcys9']};});
m$1.atr$(br$,'$wgimgr$1f1',function(){return this.$wgimgr$1f1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Br,d:['ceylon.html','Br','$at','aria$xvme3o']};});
m$1.atr$(br$,'$wgimgr$1f2',function(){return this.$wgimgr$1f2_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Br,d:['ceylon.html','Br','$at','nonstandardAttributes$ifei1g']};});
m$1.atr$(br$,'$wgimgr$1f3',function(){return this.$wgimgr$1f3_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Br,d:['ceylon.html','Br','$at','data$w7tbzf']};});
m$1.atr$(br$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Br,pa:3,d:['ceylon.html','Br','$at','tag']};});
})(Br.$$.prototype);
}
return Br;
}
ex$.$init$Br=$init$Br;
$init$Br();
function Hr($wgimgr$1f4,$wgimgr$1f5,$wgimgr$1f6,$wgimgr$1f7,$wgimgr$1f8,$wgimgr$1f9,$wgimgr$1fa,$wgimgr$1fb,$wgimgr$1fc,$wgimgr$1fd,$wgimgr$1fe,$wgimgr$1ff,$wgimgr$1fg,$wgimgr$1fh,$wgimgr$1fi,$wgimgr$1fj,$wgimgr$1fk,$wgimgr$1fl,hr$){
$init$Hr();
if(hr$===undefined)hr$=new Hr.$$;
if($wgimgr$1f4===undefined){$wgimgr$1f4=null;}
hr$.$wgimgr$1f4_=$wgimgr$1f4;
if($wgimgr$1f5===undefined){$wgimgr$1f5=m$1.empty();}
hr$.$wgimgr$1f5_=$wgimgr$1f5;
if($wgimgr$1f6===undefined){$wgimgr$1f6=null;}
hr$.$wgimgr$1f6_=$wgimgr$1f6;
if($wgimgr$1f7===undefined){$wgimgr$1f7=null;}
hr$.$wgimgr$1f7_=$wgimgr$1f7;
if($wgimgr$1f8===undefined){$wgimgr$1f8=null;}
hr$.$wgimgr$1f8_=$wgimgr$1f8;
if($wgimgr$1f9===undefined){$wgimgr$1f9=null;}
hr$.$wgimgr$1f9_=$wgimgr$1f9;
if($wgimgr$1fa===undefined){$wgimgr$1fa=null;}
hr$.$wgimgr$1fa_=$wgimgr$1fa;
if($wgimgr$1fb===undefined){$wgimgr$1fb=null;}
hr$.$wgimgr$1fb_=$wgimgr$1fb;
if($wgimgr$1fc===undefined){$wgimgr$1fc=null;}
hr$.$wgimgr$1fc_=$wgimgr$1fc;
if($wgimgr$1fd===undefined){$wgimgr$1fd=null;}
hr$.$wgimgr$1fd_=$wgimgr$1fd;
if($wgimgr$1fe===undefined){$wgimgr$1fe=null;}
hr$.$wgimgr$1fe_=$wgimgr$1fe;
if($wgimgr$1ff===undefined){$wgimgr$1ff=null;}
hr$.$wgimgr$1ff_=$wgimgr$1ff;
if($wgimgr$1fg===undefined){$wgimgr$1fg=null;}
hr$.$wgimgr$1fg_=$wgimgr$1fg;
if($wgimgr$1fh===undefined){$wgimgr$1fh=null;}
hr$.$wgimgr$1fh_=$wgimgr$1fh;
if($wgimgr$1fi===undefined){$wgimgr$1fi=null;}
hr$.$wgimgr$1fi_=$wgimgr$1fi;
if($wgimgr$1fj===undefined){$wgimgr$1fj=null;}
hr$.$wgimgr$1fj_=$wgimgr$1fj;
if($wgimgr$1fk===undefined){$wgimgr$1fk=m$1.empty();}
hr$.$wgimgr$1fk_=$wgimgr$1fk;
if($wgimgr$1fl===undefined){$wgimgr$1fl=m$1.empty();}
hr$.$wgimgr$1fl_=$wgimgr$1fl;
BlockElement(hr$);
BaseElement($wgimgr$1f4,$wgimgr$1f5,$wgimgr$1f6,$wgimgr$1f7,$wgimgr$1f8,$wgimgr$1f9,$wgimgr$1fa,$wgimgr$1fb,$wgimgr$1fc,$wgimgr$1fd,$wgimgr$1fe,$wgimgr$1ff,$wgimgr$1fg,$wgimgr$1fh,$wgimgr$1fi,$wgimgr$1fj,$wgimgr$1fk,$wgimgr$1fl,hr$);
hr$.tag_=Tag("hr",emptyTag());
return hr$;
}
Hr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:BlockElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Hr')];},d:['ceylon.html','Hr']};};
ex$.Hr=Hr;
function $init$Hr(){
if(Hr.$$===undefined){
m$1.initTypeProto(Hr,'ceylon.html::Hr',$init$BlockElement(),$init$BaseElement());
(function(hr$){
m$1.atr$(hr$,'$wgimgr$1f4',function(){return this.$wgimgr$1f4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','id$mr4520']};});
m$1.atr$(hr$,'$wgimgr$1f5',function(){return this.$wgimgr$1f5_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Hr,d:['ceylon.html','Hr','$at','classNames$2c68qz']};});
m$1.atr$(hr$,'$wgimgr$1f6',function(){return this.$wgimgr$1f6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','style$nedqwi']};});
m$1.atr$(hr$,'$wgimgr$1f7',function(){return this.$wgimgr$1f7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','accessKey$yiimvs']};});
m$1.atr$(hr$,'$wgimgr$1f8',function(){return this.$wgimgr$1f8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','contextMenu$cc9if1']};});
m$1.atr$(hr$,'$wgimgr$1f9',function(){return this.$wgimgr$1f9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Hr,d:['ceylon.html','Hr','$at','dir$kkrx86']};});
m$1.atr$(hr$,'$wgimgr$1fa',function(){return this.$wgimgr$1fa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Hr,d:['ceylon.html','Hr','$at','draggable$qibjzq']};});
m$1.atr$(hr$,'$wgimgr$1fb',function(){return this.$wgimgr$1fb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Hr,d:['ceylon.html','Hr','$at','dropZone$9ih37c']};});
m$1.atr$(hr$,'$wgimgr$1fc',function(){return this.$wgimgr$1fc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Hr,d:['ceylon.html','Hr','$at','inert$nvjwo9']};});
m$1.atr$(hr$,'$wgimgr$1fd',function(){return this.$wgimgr$1fd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Hr,d:['ceylon.html','Hr','$at','hidden$roandt']};});
m$1.atr$(hr$,'$wgimgr$1fe',function(){return this.$wgimgr$1fe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','lang$itp7wd']};});
m$1.atr$(hr$,'$wgimgr$1ff',function(){return this.$wgimgr$1ff_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Hr,d:['ceylon.html','Hr','$at','spellcheck$zfov6t']};});
m$1.atr$(hr$,'$wgimgr$1fg',function(){return this.$wgimgr$1fg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Hr,d:['ceylon.html','Hr','$at','tabIndex$3p1s1m']};});
m$1.atr$(hr$,'$wgimgr$1fh',function(){return this.$wgimgr$1fh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Hr,d:['ceylon.html','Hr','$at','title$a0nxpf']};});
m$1.atr$(hr$,'$wgimgr$1fi',function(){return this.$wgimgr$1fi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Hr,d:['ceylon.html','Hr','$at','translate$iqd8o3']};});
m$1.atr$(hr$,'$wgimgr$1fj',function(){return this.$wgimgr$1fj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Hr,d:['ceylon.html','Hr','$at','aria$pvm47u']};});
m$1.atr$(hr$,'$wgimgr$1fk',function(){return this.$wgimgr$1fk_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Hr,d:['ceylon.html','Hr','$at','nonstandardAttributes$qferxa']};});
m$1.atr$(hr$,'$wgimgr$1fl',function(){return this.$wgimgr$1fl_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Hr,d:['ceylon.html','Hr','$at','data$o7t23l']};});
m$1.atr$(hr$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Hr,pa:3,d:['ceylon.html','Hr','$at','tag']};});
})(Hr.$$.prototype);
}
return Hr;
}
ex$.$init$Hr=$init$Hr;
$init$Hr();
function Wbr($wgimgr$1fm,$wgimgr$1fn,$wgimgr$1fo,$wgimgr$1fp,$wgimgr$1fq,$wgimgr$1fr,$wgimgr$1fs,$wgimgr$1ft,$wgimgr$1fu,$wgimgr$1fv,$wgimgr$1fw,$wgimgr$1fx,$wgimgr$1fy,$wgimgr$1fz,$wgimgr$1g0,$wgimgr$1g1,$wgimgr$1g2,$wgimgr$1g3,wbr$){
$init$Wbr();
if(wbr$===undefined)wbr$=new Wbr.$$;
if($wgimgr$1fm===undefined){$wgimgr$1fm=null;}
wbr$.$wgimgr$1fm_=$wgimgr$1fm;
if($wgimgr$1fn===undefined){$wgimgr$1fn=m$1.empty();}
wbr$.$wgimgr$1fn_=$wgimgr$1fn;
if($wgimgr$1fo===undefined){$wgimgr$1fo=null;}
wbr$.$wgimgr$1fo_=$wgimgr$1fo;
if($wgimgr$1fp===undefined){$wgimgr$1fp=null;}
wbr$.$wgimgr$1fp_=$wgimgr$1fp;
if($wgimgr$1fq===undefined){$wgimgr$1fq=null;}
wbr$.$wgimgr$1fq_=$wgimgr$1fq;
if($wgimgr$1fr===undefined){$wgimgr$1fr=null;}
wbr$.$wgimgr$1fr_=$wgimgr$1fr;
if($wgimgr$1fs===undefined){$wgimgr$1fs=null;}
wbr$.$wgimgr$1fs_=$wgimgr$1fs;
if($wgimgr$1ft===undefined){$wgimgr$1ft=null;}
wbr$.$wgimgr$1ft_=$wgimgr$1ft;
if($wgimgr$1fu===undefined){$wgimgr$1fu=null;}
wbr$.$wgimgr$1fu_=$wgimgr$1fu;
if($wgimgr$1fv===undefined){$wgimgr$1fv=null;}
wbr$.$wgimgr$1fv_=$wgimgr$1fv;
if($wgimgr$1fw===undefined){$wgimgr$1fw=null;}
wbr$.$wgimgr$1fw_=$wgimgr$1fw;
if($wgimgr$1fx===undefined){$wgimgr$1fx=null;}
wbr$.$wgimgr$1fx_=$wgimgr$1fx;
if($wgimgr$1fy===undefined){$wgimgr$1fy=null;}
wbr$.$wgimgr$1fy_=$wgimgr$1fy;
if($wgimgr$1fz===undefined){$wgimgr$1fz=null;}
wbr$.$wgimgr$1fz_=$wgimgr$1fz;
if($wgimgr$1g0===undefined){$wgimgr$1g0=null;}
wbr$.$wgimgr$1g0_=$wgimgr$1g0;
if($wgimgr$1g1===undefined){$wgimgr$1g1=null;}
wbr$.$wgimgr$1g1_=$wgimgr$1g1;
if($wgimgr$1g2===undefined){$wgimgr$1g2=m$1.empty();}
wbr$.$wgimgr$1g2_=$wgimgr$1g2;
if($wgimgr$1g3===undefined){$wgimgr$1g3=m$1.empty();}
wbr$.$wgimgr$1g3_=$wgimgr$1g3;
InlineElement(wbr$);
BaseElement($wgimgr$1fm,$wgimgr$1fn,$wgimgr$1fo,$wgimgr$1fp,$wgimgr$1fq,$wgimgr$1fr,$wgimgr$1fs,$wgimgr$1ft,$wgimgr$1fu,$wgimgr$1fv,$wgimgr$1fw,$wgimgr$1fx,$wgimgr$1fy,$wgimgr$1fz,$wgimgr$1g0,$wgimgr$1g1,$wgimgr$1g2,$wgimgr$1g3,wbr$);
wbr$.tag_=Tag("wbr",emptyTag());
return wbr$;
}
Wbr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Wbr')];},d:['ceylon.html','Wbr']};};
ex$.Wbr=Wbr;
function $init$Wbr(){
if(Wbr.$$===undefined){
m$1.initTypeProto(Wbr,'ceylon.html::Wbr',$init$InlineElement(),$init$BaseElement());
(function(wbr$){
m$1.atr$(wbr$,'$wgimgr$1fm',function(){return this.$wgimgr$1fm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','id$ky5ozx']};});
m$1.atr$(wbr$,'$wgimgr$1fn',function(){return this.$wgimgr$1fn_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Wbr,d:['ceylon.html','Wbr','$at','classNames$to0go6']};});
m$1.atr$(wbr$,'$wgimgr$1fo',function(){return this.$wgimgr$1fo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','style$kaw35f']};});
m$1.atr$(wbr$,'$wgimgr$1fp',function(){return this.$wgimgr$1fp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','accessKey$96r765']};});
m$1.atr$(wbr$,'$wgimgr$1fq',function(){return this.$wgimgr$1fq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','contextMenu$vd0bmw']};});
m$1.atr$(wbr$,'$wgimgr$1fr',function(){return this.$wgimgr$1fr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','dir$n4hwtr']};});
m$1.atr$(wbr$,'$wgimgr$1fs',function(){return this.$wgimgr$1fs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','draggable$h6ya27']};});
m$1.atr$(wbr$,'$wgimgr$1ft',function(){return this.$wgimgr$1ft_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','dropZone$y6squl']};});
m$1.atr$(wbr$,'$wgimgr$1fu',function(){return this.$wgimgr$1fu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','inert$jtpxdo']};});
m$1.atr$(wbr$,'$wgimgr$1fv',function(){return this.$wgimgr$1fv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','hidden$g0z6o4']};});
m$1.atr$(wbr$,'$wgimgr$1fw',function(){return this.$wgimgr$1fw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','lang$ovkm5k']};});
m$1.atr$(wbr$,'$wgimgr$1fx',function(){return this.$wgimgr$1fx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','spellcheck$83un9m']};});
m$1.atr$(wbr$,'$wgimgr$1fy',function(){return this.$wgimgr$1fy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','tabIndex$nmsfvl']};});
m$1.atr$(wbr$,'$wgimgr$1fz',function(){return this.$wgimgr$1fz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','title$xolwci']};});
m$1.atr$(wbr$,'$wgimgr$1g0',function(){return this.$wgimgr$1g0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','translate$8lgz94']};});
m$1.atr$(wbr$,'$wgimgr$1g1',function(){return this.$wgimgr$1g1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Wbr,d:['ceylon.html','Wbr','$at','aria$htnpu3']};});
m$1.atr$(wbr$,'$wgimgr$1g2',function(){return this.$wgimgr$1g2_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Wbr,d:['ceylon.html','Wbr','$at','nonstandardAttributes$wffzx']};});
m$1.atr$(wbr$,'$wgimgr$1g3',function(){return this.$wgimgr$1g3_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Wbr,d:['ceylon.html','Wbr','$at','data$jhgryc']};});
m$1.atr$(wbr$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Wbr,pa:3,d:['ceylon.html','Wbr','$at','tag']};});
})(Wbr.$$.prototype);
}
return Wbr;
}
ex$.$init$Wbr=$init$Wbr;
$init$Wbr();
function Button(text,type,$wgimgr$1g4,$wgimgr$1g5,$wgimgr$1g6,$wgimgr$1g7,$wgimgr$1g8,$wgimgr$1g9,$wgimgr$1ga,$wgimgr$1gb,$wgimgr$1gc,$wgimgr$1gd,$wgimgr$1ge,$wgimgr$1gf,$wgimgr$1gg,$wgimgr$1gh,$wgimgr$1gi,$wgimgr$1gj,$wgimgr$1gk,$wgimgr$1gl,$wgimgr$1gm,$wgimgr$1gn,$wgimgr$1go,$wgimgr$1gp,$wgimgr$1gq,children,button$){
$init$Button();
if(button$===undefined)button$=new Button.$$;
button$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
button$.text_=text;
if(type===undefined){type=button();}
button$.type_=type;
if($wgimgr$1g4===undefined){$wgimgr$1g4=null;}
button$.$wgimgr$1g4_=$wgimgr$1g4;
if($wgimgr$1g5===undefined){$wgimgr$1g5=null;}
button$.$wgimgr$1g5_=$wgimgr$1g5;
if($wgimgr$1g6===undefined){$wgimgr$1g6=null;}
button$.$wgimgr$1g6_=$wgimgr$1g6;
if($wgimgr$1g7===undefined){$wgimgr$1g7=null;}
button$.$wgimgr$1g7_=$wgimgr$1g7;
if($wgimgr$1g8===undefined){$wgimgr$1g8=null;}
button$.$wgimgr$1g8_=$wgimgr$1g8;
if($wgimgr$1g9===undefined){$wgimgr$1g9=null;}
button$.$wgimgr$1g9_=$wgimgr$1g9;
if($wgimgr$1ga===undefined){$wgimgr$1ga=m$1.empty();}
button$.$wgimgr$1ga_=$wgimgr$1ga;
if($wgimgr$1gb===undefined){$wgimgr$1gb=null;}
button$.$wgimgr$1gb_=$wgimgr$1gb;
if($wgimgr$1gc===undefined){$wgimgr$1gc=null;}
button$.$wgimgr$1gc_=$wgimgr$1gc;
if($wgimgr$1gd===undefined){$wgimgr$1gd=null;}
button$.$wgimgr$1gd_=$wgimgr$1gd;
if($wgimgr$1ge===undefined){$wgimgr$1ge=null;}
button$.$wgimgr$1ge_=$wgimgr$1ge;
if($wgimgr$1gf===undefined){$wgimgr$1gf=null;}
button$.$wgimgr$1gf_=$wgimgr$1gf;
if($wgimgr$1gg===undefined){$wgimgr$1gg=null;}
button$.$wgimgr$1gg_=$wgimgr$1gg;
if($wgimgr$1gh===undefined){$wgimgr$1gh=null;}
button$.$wgimgr$1gh_=$wgimgr$1gh;
if($wgimgr$1gi===undefined){$wgimgr$1gi=null;}
button$.$wgimgr$1gi_=$wgimgr$1gi;
if($wgimgr$1gj===undefined){$wgimgr$1gj=null;}
button$.$wgimgr$1gj_=$wgimgr$1gj;
if($wgimgr$1gk===undefined){$wgimgr$1gk=null;}
button$.$wgimgr$1gk_=$wgimgr$1gk;
if($wgimgr$1gl===undefined){$wgimgr$1gl=null;}
button$.$wgimgr$1gl_=$wgimgr$1gl;
if($wgimgr$1gm===undefined){$wgimgr$1gm=null;}
button$.$wgimgr$1gm_=$wgimgr$1gm;
if($wgimgr$1gn===undefined){$wgimgr$1gn=null;}
button$.$wgimgr$1gn_=$wgimgr$1gn;
if($wgimgr$1go===undefined){$wgimgr$1go=null;}
button$.$wgimgr$1go_=$wgimgr$1go;
if($wgimgr$1gp===undefined){$wgimgr$1gp=m$1.empty();}
button$.$wgimgr$1gp_=$wgimgr$1gp;
if($wgimgr$1gq===undefined){$wgimgr$1gq=m$1.empty();}
button$.$wgimgr$1gq_=$wgimgr$1gq;
if(children===undefined){children=m$1.empty();}
button$.children_=children;
TextNode(button$);
InlineElement(button$);
ParentNode({Child$ParentNode:{t:InlineElement}},button$);
FormElement($wgimgr$1g4,$wgimgr$1g5,$wgimgr$1g6,$wgimgr$1g7,null,null,null,$wgimgr$1g8,$wgimgr$1g9,$wgimgr$1ga,$wgimgr$1gb,$wgimgr$1gc,$wgimgr$1gd,$wgimgr$1ge,$wgimgr$1gf,$wgimgr$1gg,$wgimgr$1gh,$wgimgr$1gi,$wgimgr$1gj,$wgimgr$1gk,$wgimgr$1gl,$wgimgr$1gm,$wgimgr$1gn,$wgimgr$1go,$wgimgr$1gp,$wgimgr$1gq,button$);
button$.tag_=Tag("button");
return button$;
}
Button.$crtmm$=function(){return{mod:$CCMM$,'super':{t:FormElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'type',mt:'prm',def:1,$t:{t:ButtonType},pa:1,an:function(){return[m$1.doc("Specifies the type of button.")];}},{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Button')];},d:['ceylon.html','Button']};};
ex$.Button=Button;
function $init$Button(){
if(Button.$$===undefined){
m$1.initTypeProto(Button,'ceylon.html::Button',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$FormElement());
(function(button$){
m$1.atr$(button$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Button,pa:3,d:['ceylon.html','Button','$at','text']};});
m$1.atr$(button$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:ButtonType},$cont:Button,pa:1,an:function(){return[m$1.doc("Specifies the type of button.")];},d:['ceylon.html','Button','$at','type']};});
m$1.atr$(button$,'$wgimgr$1g4',function(){return this.$wgimgr$1g4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','name$k23ups']};});
m$1.atr$(button$,'$wgimgr$1g5',function(){return this.$wgimgr$1g5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','autoFocus$gql1ci']};});
m$1.atr$(button$,'$wgimgr$1g6',function(){return this.$wgimgr$1g6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','disabled$8hoqx']};});
m$1.atr$(button$,'$wgimgr$1g7',function(){return this.$wgimgr$1g7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','form$p59f1r']};});
m$1.atr$(button$,'$wgimgr$1g8',function(){return this.$wgimgr$1g8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','valueOf$x1nuj9']};});
m$1.atr$(button$,'$wgimgr$1g9',function(){return this.$wgimgr$1g9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','id$pc233k']};});
m$1.atr$(button$,'$wgimgr$1ga',function(){return this.$wgimgr$1ga_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Button,d:['ceylon.html','Button','$at','classNames$4x46sj']};});
m$1.atr$(button$,'$wgimgr$1gb',function(){return this.$wgimgr$1gb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','style$pzboy2']};});
m$1.atr$(button$,'$wgimgr$1gc',function(){return this.$wgimgr$1gc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','accessKey$xxnh1s']};});
m$1.atr$(button$,'$wgimgr$1gd',function(){return this.$wgimgr$1gd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','contextMenu$ex7ggl']};});
m$1.atr$(button$,'$wgimgr$1ge',function(){return this.$wgimgr$1ge_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Button,d:['ceylon.html','Button','$at','dir$n5pv9q']};});
m$1.atr$(button$,'$wgimgr$1gf',function(){return this.$wgimgr$1gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','draggable$t39i1a']};});
m$1.atr$(button$,'$wgimgr$1gg',function(){return this.$wgimgr$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Button,d:['ceylon.html','Button','$at','dropZone$c3f18w']};});
m$1.atr$(button$,'$wgimgr$1gh',function(){return this.$wgimgr$1gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','inert$qghupt']};});
m$1.atr$(button$,'$wgimgr$1gi',function(){return this.$wgimgr$1gi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','hidden$u98lfd']};});
m$1.atr$(button$,'$wgimgr$1gj',function(){return this.$wgimgr$1gj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','lang$len5xx']};});
m$1.atr$(button$,'$wgimgr$1gk',function(){return this.$wgimgr$1gk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','spellcheck$wuqx59']};});
m$1.atr$(button$,'$wgimgr$1gl',function(){return this.$wgimgr$1gl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Button,d:['ceylon.html','Button','$at','tabIndex$143u02']};});
m$1.atr$(button$,'$wgimgr$1gm',function(){return this.$wgimgr$1gm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Button,d:['ceylon.html','Button','$at','title$cllvqz']};});
m$1.atr$(button$,'$wgimgr$1gn',function(){return this.$wgimgr$1gn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Button,d:['ceylon.html','Button','$at','translate$g5famj']};});
m$1.atr$(button$,'$wgimgr$1go',function(){return this.$wgimgr$1go_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Button,d:['ceylon.html','Button','$at','aria$sgk29e']};});
m$1.atr$(button$,'$wgimgr$1gp',function(){return this.$wgimgr$1gp_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Button,d:['ceylon.html','Button','$at','nonstandardAttributes$nugtvq']};});
m$1.atr$(button$,'$wgimgr$1gq',function(){return this.$wgimgr$1gq_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Button,d:['ceylon.html','Button','$at','data$qsr055']};});
m$1.atr$(button$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Button,pa:3,d:['ceylon.html','Button','$at','children']};});
m$1.atr$(button$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Button,pa:3,d:['ceylon.html','Button','$at','tag']};});
m$1.atr$(button$,'attributes',function(){
var button$=this;
var $1gr=AttributeSequenceBuilder();
$1gr.addAttribute("type",button$.type);
$1gr.addAll(m$1.attrGetter(button$.getT$all()['ceylon.html::FormElement'],'attributes').call(this));
return $1gr.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Button,pa:3,d:['ceylon.html','Button','$at','attributes']};});
})(Button.$$.prototype);
}
return Button;
}
ex$.$init$Button=$init$Button;
$init$Button();
function ButtonType($wgimgr$1gs,buttonType$){
$init$ButtonType();
if(buttonType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::ButtonType"),'?','?')
buttonType$.$wgimgr$1gs_=$wgimgr$1gs;
return buttonType$;
}
ButtonType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getButton,$prop$getReset,$prop$getSubmit],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:ButtonType')];},d:['ceylon.html','ButtonType']};};
ex$.ButtonType=ButtonType;
function $init$ButtonType(){
if(ButtonType.$$===undefined){
m$1.initTypeProto(ButtonType,'ceylon.html::ButtonType',m$1.Basic);
(function(buttonType$){
m$1.atr$(buttonType$,'$wgimgr$1gs',function(){return this.$wgimgr$1gs_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ButtonType,d:['ceylon.html','ButtonType','$at','type$n5wsh']};});
m$1.atr$(buttonType$,'string',function(){
var buttonType$=this;
return buttonType$.$wgimgr$1gs;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ButtonType,pa:3,d:['ceylon.html','ButtonType','$at','string']};});
})(ButtonType.$$.prototype);
}
return ButtonType;
}
ex$.$init$ButtonType=$init$ButtonType;
$init$ButtonType();
function $1gt(){
var button$=new $1gt.$$;ButtonType("button",button$);
return button$;
};$1gt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ButtonType},d:['ceylon.html','button']};};
function $init$button(){
if($1gt.$$===undefined){
m$1.initTypeProto($1gt,'ceylon.html::button',$init$ButtonType());
}
return $1gt;
}
ex$.$init$button=$init$button;
$init$button();
var $1gv;
function button(){
if($1gv===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'button\' before it was set"),'54:0-55:51','Button.ceylon');
if($1gv===undefined){$1gv=m$1.INIT$;$1gv=$init$button()();$1gv.$crtmm$=button.$crtmm$;}
return $1gv;
}
ex$.button=button;
button.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$button()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:button')];},d:['ceylon.html','button']};};
$prop$getButton=button;
ex$.$prop$getButton=$prop$getButton;
function $1gw(){
var reset$=new $1gw.$$;ButtonType("reset",reset$);
return reset$;
};$1gw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ButtonType},d:['ceylon.html','reset']};};
function $init$reset(){
if($1gw.$$===undefined){
m$1.initTypeProto($1gw,'ceylon.html::reset',$init$ButtonType());
}
return $1gw;
}
ex$.$init$reset=$init$reset;
$init$reset();
var $1gy;
function reset(){
if($1gy===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'reset\' before it was set"),'57:0-59:49','Button.ceylon');
if($1gy===undefined){$1gy=m$1.INIT$;$1gy=$init$reset()();$1gy.$crtmm$=reset.$crtmm$;}
return $1gy;
}
ex$.reset=reset;
reset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$reset()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:reset')];},d:['ceylon.html','reset']};};
$prop$getReset=reset;
ex$.$prop$getReset=$prop$getReset;
function $1gz(){
var submit$=new $1gz.$$;ButtonType("submit",submit$);
return submit$;
};$1gz.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ButtonType},d:['ceylon.html','submit']};};
function $init$submit(){
if($1gz.$$===undefined){
m$1.initTypeProto($1gz,'ceylon.html::submit',$init$ButtonType());
}
return $1gz;
}
ex$.$init$submit=$init$submit;
$init$submit();
var $1h1;
function submit(){
if($1h1===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'submit\' before it was set"),'61:0-63:51','Button.ceylon');
if($1h1===undefined){$1h1=m$1.INIT$;$1h1=$init$submit()();$1h1.$crtmm$=submit.$crtmm$;}
return $1h1;
}
ex$.submit=submit;
submit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$submit()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:submit')];},d:['ceylon.html','submit']};};
$prop$getSubmit=submit;
ex$.$prop$getSubmit=$prop$getSubmit;
function DataList($wgimgr$1h2,$wgimgr$1h3,$wgimgr$1h4,$wgimgr$1h5,$wgimgr$1h6,$wgimgr$1h7,$wgimgr$1h8,$wgimgr$1h9,$wgimgr$1ha,$wgimgr$1hb,$wgimgr$1hc,$wgimgr$1hd,$wgimgr$1he,$wgimgr$1hf,$wgimgr$1hg,$wgimgr$1hh,$wgimgr$1hi,$wgimgr$1hj,children,dataList$){
$init$DataList();
if(dataList$===undefined)dataList$=new DataList.$$;
dataList$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Select},{t:Option}])};
if($wgimgr$1h2===undefined){$wgimgr$1h2=null;}
dataList$.$wgimgr$1h2_=$wgimgr$1h2;
if($wgimgr$1h3===undefined){$wgimgr$1h3=m$1.empty();}
dataList$.$wgimgr$1h3_=$wgimgr$1h3;
if($wgimgr$1h4===undefined){$wgimgr$1h4=null;}
dataList$.$wgimgr$1h4_=$wgimgr$1h4;
if($wgimgr$1h5===undefined){$wgimgr$1h5=null;}
dataList$.$wgimgr$1h5_=$wgimgr$1h5;
if($wgimgr$1h6===undefined){$wgimgr$1h6=null;}
dataList$.$wgimgr$1h6_=$wgimgr$1h6;
if($wgimgr$1h7===undefined){$wgimgr$1h7=null;}
dataList$.$wgimgr$1h7_=$wgimgr$1h7;
if($wgimgr$1h8===undefined){$wgimgr$1h8=null;}
dataList$.$wgimgr$1h8_=$wgimgr$1h8;
if($wgimgr$1h9===undefined){$wgimgr$1h9=null;}
dataList$.$wgimgr$1h9_=$wgimgr$1h9;
if($wgimgr$1ha===undefined){$wgimgr$1ha=null;}
dataList$.$wgimgr$1ha_=$wgimgr$1ha;
if($wgimgr$1hb===undefined){$wgimgr$1hb=null;}
dataList$.$wgimgr$1hb_=$wgimgr$1hb;
if($wgimgr$1hc===undefined){$wgimgr$1hc=null;}
dataList$.$wgimgr$1hc_=$wgimgr$1hc;
if($wgimgr$1hd===undefined){$wgimgr$1hd=null;}
dataList$.$wgimgr$1hd_=$wgimgr$1hd;
if($wgimgr$1he===undefined){$wgimgr$1he=null;}
dataList$.$wgimgr$1he_=$wgimgr$1he;
if($wgimgr$1hf===undefined){$wgimgr$1hf=null;}
dataList$.$wgimgr$1hf_=$wgimgr$1hf;
if($wgimgr$1hg===undefined){$wgimgr$1hg=null;}
dataList$.$wgimgr$1hg_=$wgimgr$1hg;
if($wgimgr$1hh===undefined){$wgimgr$1hh=null;}
dataList$.$wgimgr$1hh_=$wgimgr$1hh;
if($wgimgr$1hi===undefined){$wgimgr$1hi=m$1.empty();}
dataList$.$wgimgr$1hi_=$wgimgr$1hi;
if($wgimgr$1hj===undefined){$wgimgr$1hj=m$1.empty();}
dataList$.$wgimgr$1hj_=$wgimgr$1hj;
if(children===undefined){children=m$1.empty();}
dataList$.children_=children;
InlineElement(dataList$);
ParentNode({Child$ParentNode:m$1.mut$([{t:Select},{t:Option}])},dataList$);
BaseElement($wgimgr$1h2,$wgimgr$1h3,$wgimgr$1h4,$wgimgr$1h5,$wgimgr$1h6,$wgimgr$1h7,$wgimgr$1h8,$wgimgr$1h9,$wgimgr$1ha,$wgimgr$1hb,$wgimgr$1hc,$wgimgr$1hd,$wgimgr$1he,$wgimgr$1hf,$wgimgr$1hg,$wgimgr$1hh,$wgimgr$1hi,$wgimgr$1hj,dataList$);
dataList$.tag_=Tag("datalist");
return dataList$;
}
DataList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Select},{t:Option},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Select},{t:Option}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Select},{t:Option}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[{t:Select},{t:Option}]}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:DataList')];},d:['ceylon.html','DataList']};};
ex$.DataList=DataList;
function $init$DataList(){
if(DataList.$$===undefined){
m$1.initTypeProto(DataList,'ceylon.html::DataList',$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(dataList$){
m$1.atr$(dataList$,'$wgimgr$1h2',function(){return this.$wgimgr$1h2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','id$mvvnwq']};});
m$1.atr$(dataList$,'$wgimgr$1h3',function(){return this.$wgimgr$1h3_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:DataList,d:['ceylon.html','DataList','$at','classNames$2gxrlp']};});
m$1.atr$(dataList$,'$wgimgr$1h4',function(){return this.$wgimgr$1h4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','style$nj59r8']};});
m$1.atr$(dataList$,'$wgimgr$1h5',function(){return this.$wgimgr$1h5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','accessKey$yna5qi']};});
m$1.atr$(dataList$,'$wgimgr$1h6',function(){return this.$wgimgr$1h6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','contextMenu$ch119r']};});
m$1.atr$(dataList$,'$wgimgr$1h7',function(){return this.$wgimgr$1h7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:DataList,d:['ceylon.html','DataList','$at','dir$kpjg2w']};});
m$1.atr$(dataList$,'$wgimgr$1h8',function(){return this.$wgimgr$1h8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:DataList,d:['ceylon.html','DataList','$at','draggable$qn32ug']};});
m$1.atr$(dataList$,'$wgimgr$1h9',function(){return this.$wgimgr$1h9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:DataList,d:['ceylon.html','DataList','$at','dropZone$9n8m22']};});
m$1.atr$(dataList$,'$wgimgr$1ha',function(){return this.$wgimgr$1ha_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:DataList,d:['ceylon.html','DataList','$at','inert$o0bfiz']};});
m$1.atr$(dataList$,'$wgimgr$1hb',function(){return this.$wgimgr$1hb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:DataList,d:['ceylon.html','DataList','$at','hidden$rt268j']};});
m$1.atr$(dataList$,'$wgimgr$1hc',function(){return this.$wgimgr$1hc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','lang$iygqr3']};});
m$1.atr$(dataList$,'$wgimgr$1hd',function(){return this.$wgimgr$1hd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:DataList,d:['ceylon.html','DataList','$at','spellcheck$zaxcc3']};});
m$1.atr$(dataList$,'$wgimgr$1he',function(){return this.$wgimgr$1he_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:DataList,d:['ceylon.html','DataList','$at','tabIndex$3ka96w']};});
m$1.atr$(dataList$,'$wgimgr$1hf',function(){return this.$wgimgr$1hf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DataList,d:['ceylon.html','DataList','$at','title$a5fgk5']};});
m$1.atr$(dataList$,'$wgimgr$1hg',function(){return this.$wgimgr$1hg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:DataList,d:['ceylon.html','DataList','$at','translate$illptd']};});
m$1.atr$(dataList$,'$wgimgr$1hh',function(){return this.$wgimgr$1hh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:DataList,d:['ceylon.html','DataList','$at','aria$q0dn2k']};});
m$1.atr$(dataList$,'$wgimgr$1hi',function(){return this.$wgimgr$1hi_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:DataList,d:['ceylon.html','DataList','$at','nonstandardAttributes$qan92k']};});
m$1.atr$(dataList$,'$wgimgr$1hj',function(){return this.$wgimgr$1hj_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:DataList,d:['ceylon.html','DataList','$at','data$ockkyb']};});
m$1.atr$(dataList$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Select},{t:Option},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Select},{t:Option}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Select},{t:Option}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:DataList,pa:3,d:['ceylon.html','DataList','$at','children']};});
m$1.atr$(dataList$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:DataList,pa:3,d:['ceylon.html','DataList','$at','tag']};});
})(DataList.$$.prototype);
}
return DataList;
}
ex$.$init$DataList=$init$DataList;
$init$DataList();
function Div(text,$wgimgr$1hk,$wgimgr$1hl,$wgimgr$1hm,$wgimgr$1hn,$wgimgr$1ho,$wgimgr$1hp,$wgimgr$1hq,$wgimgr$1hr,$wgimgr$1hs,$wgimgr$1ht,$wgimgr$1hu,$wgimgr$1hv,$wgimgr$1hw,$wgimgr$1hx,$wgimgr$1hy,$wgimgr$1hz,$wgimgr$1i0,$wgimgr$1i1,children,div$){
$init$Div();
if(div$===undefined)div$=new Div.$$;
div$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(text===undefined){text="";}
div$.text_=text;
if($wgimgr$1hk===undefined){$wgimgr$1hk=null;}
div$.$wgimgr$1hk_=$wgimgr$1hk;
if($wgimgr$1hl===undefined){$wgimgr$1hl=m$1.empty();}
div$.$wgimgr$1hl_=$wgimgr$1hl;
if($wgimgr$1hm===undefined){$wgimgr$1hm=null;}
div$.$wgimgr$1hm_=$wgimgr$1hm;
if($wgimgr$1hn===undefined){$wgimgr$1hn=null;}
div$.$wgimgr$1hn_=$wgimgr$1hn;
if($wgimgr$1ho===undefined){$wgimgr$1ho=null;}
div$.$wgimgr$1ho_=$wgimgr$1ho;
if($wgimgr$1hp===undefined){$wgimgr$1hp=null;}
div$.$wgimgr$1hp_=$wgimgr$1hp;
if($wgimgr$1hq===undefined){$wgimgr$1hq=null;}
div$.$wgimgr$1hq_=$wgimgr$1hq;
if($wgimgr$1hr===undefined){$wgimgr$1hr=null;}
div$.$wgimgr$1hr_=$wgimgr$1hr;
if($wgimgr$1hs===undefined){$wgimgr$1hs=null;}
div$.$wgimgr$1hs_=$wgimgr$1hs;
if($wgimgr$1ht===undefined){$wgimgr$1ht=null;}
div$.$wgimgr$1ht_=$wgimgr$1ht;
if($wgimgr$1hu===undefined){$wgimgr$1hu=null;}
div$.$wgimgr$1hu_=$wgimgr$1hu;
if($wgimgr$1hv===undefined){$wgimgr$1hv=null;}
div$.$wgimgr$1hv_=$wgimgr$1hv;
if($wgimgr$1hw===undefined){$wgimgr$1hw=null;}
div$.$wgimgr$1hw_=$wgimgr$1hw;
if($wgimgr$1hx===undefined){$wgimgr$1hx=null;}
div$.$wgimgr$1hx_=$wgimgr$1hx;
if($wgimgr$1hy===undefined){$wgimgr$1hy=null;}
div$.$wgimgr$1hy_=$wgimgr$1hy;
if($wgimgr$1hz===undefined){$wgimgr$1hz=null;}
div$.$wgimgr$1hz_=$wgimgr$1hz;
if($wgimgr$1i0===undefined){$wgimgr$1i0=m$1.empty();}
div$.$wgimgr$1i0_=$wgimgr$1i0;
if($wgimgr$1i1===undefined){$wgimgr$1i1=m$1.empty();}
div$.$wgimgr$1i1_=$wgimgr$1i1;
if(children===undefined){children=m$1.empty();}
div$.children_=children;
TextNode(div$);
BlockElement(div$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},div$);
BaseElement($wgimgr$1hk,$wgimgr$1hl,$wgimgr$1hm,$wgimgr$1hn,$wgimgr$1ho,$wgimgr$1hp,$wgimgr$1hq,$wgimgr$1hr,$wgimgr$1hs,$wgimgr$1ht,$wgimgr$1hu,$wgimgr$1hv,$wgimgr$1hw,$wgimgr$1hx,$wgimgr$1hy,$wgimgr$1hz,$wgimgr$1i0,$wgimgr$1i1,div$);
div$.tag_=Tag("div");
return div$;
}
Div.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Div')];},d:['ceylon.html','Div']};};
ex$.Div=Div;
function $init$Div(){
if(Div.$$===undefined){
m$1.initTypeProto(Div,'ceylon.html::Div',$init$TextNode(),$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(div$){
m$1.atr$(div$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Div,pa:3,d:['ceylon.html','Div','$at','text']};});
m$1.atr$(div$,'$wgimgr$1hk',function(){return this.$wgimgr$1hk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','id$h3etax']};});
m$1.atr$(div$,'$wgimgr$1hl',function(){return this.$wgimgr$1hl_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Div,d:['ceylon.html','Div','$at','classNames$3bj304']};});
m$1.atr$(div$,'$wgimgr$1hm',function(){return this.$wgimgr$1hm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','style$hqof5f']};});
m$1.atr$(div$,'$wgimgr$1hn',function(){return this.$wgimgr$1hn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','accessKey$sutb4p']};});
m$1.atr$(div$,'$wgimgr$1ho',function(){return this.$wgimgr$1ho_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','contextMenu$6ok6ny']};});
m$1.atr$(div$,'$wgimgr$1hp',function(){return this.$wgimgr$1hp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Div,d:['ceylon.html','Div','$at','dir$ex2lh3']};});
m$1.atr$(div$,'$wgimgr$1hq',function(){return this.$wgimgr$1hq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Div,d:['ceylon.html','Div','$at','draggable$kum88n']};});
m$1.atr$(div$,'$wgimgr$1hr',function(){return this.$wgimgr$1hr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Div,d:['ceylon.html','Div','$at','dropZone$3urrg9']};});
m$1.atr$(div$,'$wgimgr$1hs',function(){return this.$wgimgr$1hs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Div,d:['ceylon.html','Div','$at','inert$i7ukx6']};});
m$1.atr$(div$,'$wgimgr$1ht',function(){return this.$wgimgr$1ht_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Div,d:['ceylon.html','Div','$at','hidden$m0lbmq']};});
m$1.atr$(div$,'$wgimgr$1hu',function(){return this.$wgimgr$1hu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','lang$d5zw5a']};});
m$1.atr$(div$,'$wgimgr$1hv',function(){return this.$wgimgr$1hv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Div,d:['ceylon.html','Div','$at','spellcheck$txpv18']};});
m$1.atr$(div$,'$wgimgr$1hw',function(){return this.$wgimgr$1hw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Div,d:['ceylon.html','Div','$at','tabIndex$9cr3sp']};});
m$1.atr$(div$,'$wgimgr$1hx',function(){return this.$wgimgr$1hx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Div,d:['ceylon.html','Div','$at','title$4cylyc']};});
m$1.atr$(div$,'$wgimgr$1hy',function(){return this.$wgimgr$1hy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Div,d:['ceylon.html','Div','$at','translate$oe2kf6']};});
m$1.atr$(div$,'$wgimgr$1hz',function(){return this.$wgimgr$1hz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Div,d:['ceylon.html','Div','$at','aria$k7wsgr']};});
m$1.atr$(div$,'$wgimgr$1i0',function(){return this.$wgimgr$1i0_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Div,d:['ceylon.html','Div','$at','nonstandardAttributes$w343od']};});
m$1.atr$(div$,'$wgimgr$1i1',function(){return this.$wgimgr$1i1_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Div,d:['ceylon.html','Div','$at','data$ik3qci']};});
m$1.atr$(div$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Div,pa:3,d:['ceylon.html','Div','$at','children']};});
m$1.atr$(div$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Div,pa:3,d:['ceylon.html','Div','$at','tag']};});
})(Div.$$.prototype);
}
return Div;
}
ex$.$init$Div=$init$Div;
$init$Div();
function $1i2(){
var html4Strict$=new $1i2.$$;Doctype(html4Strict$);
html4Strict$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i2,pa:3,d:['ceylon.html','html4Strict','$at','string']};}};
html4Strict$.$prop$getString.get=function(){return string};
return html4Strict$;
};$1i2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','html4Strict']};};
function $init$html4Strict(){
if($1i2.$$===undefined){
m$1.initTypeProto($1i2,'ceylon.html::html4Strict',$init$Doctype());
(function(html4Strict$){
m$1.atr$(html4Strict$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD HTML 4.01EN\"\n\"http:www.w3.org/TR/html4/strict.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i2,pa:3,d:['ceylon.html','html4Strict','$at','string']};});
})($1i2.$$.prototype);
}
return $1i2;
}
ex$.$init$html4Strict=$init$html4Strict;
$init$html4Strict();
var $1i4;
function html4Strict(){
if($1i4===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'html4Strict\' before it was set"),'2:0-6:0','Doctype.ceylon');
if($1i4===undefined){$1i4=m$1.INIT$;$1i4=$init$html4Strict()();$1i4.$crtmm$=html4Strict.$crtmm$;}
return $1i4;
}
ex$.html4Strict=html4Strict;
html4Strict.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$html4Strict()},pa:1,d:['ceylon.html','html4Strict']};};
$prop$getHtml4Strict=html4Strict;
ex$.$prop$getHtml4Strict=$prop$getHtml4Strict;
function $1i5(){
var html4Transitional$=new $1i5.$$;Doctype(html4Transitional$);
html4Transitional$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i5,pa:3,d:['ceylon.html','html4Transitional','$at','string']};}};
html4Transitional$.$prop$getString.get=function(){return string};
return html4Transitional$;
};$1i5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','html4Transitional']};};
function $init$html4Transitional(){
if($1i5.$$===undefined){
m$1.initTypeProto($1i5,'ceylon.html::html4Transitional',$init$Doctype());
(function(html4Transitional$){
m$1.atr$(html4Transitional$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD HTML 4.01 TransitionalEN\"\n\"http:www.w3.org/TR/html4/loose.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i5,pa:3,d:['ceylon.html','html4Transitional','$at','string']};});
})($1i5.$$.prototype);
}
return $1i5;
}
ex$.$init$html4Transitional=$init$html4Transitional;
$init$html4Transitional();
var $1i7;
function html4Transitional(){
if($1i7===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'html4Transitional\' before it was set"),'8:0-12:0','Doctype.ceylon');
if($1i7===undefined){$1i7=m$1.INIT$;$1i7=$init$html4Transitional()();$1i7.$crtmm$=html4Transitional.$crtmm$;}
return $1i7;
}
ex$.html4Transitional=html4Transitional;
html4Transitional.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$html4Transitional()},pa:1,d:['ceylon.html','html4Transitional']};};
$prop$getHtml4Transitional=html4Transitional;
ex$.$prop$getHtml4Transitional=$prop$getHtml4Transitional;
function $1i8(){
var html4Frameset$=new $1i8.$$;Doctype(html4Frameset$);
html4Frameset$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i8,pa:3,d:['ceylon.html','html4Frameset','$at','string']};}};
html4Frameset$.$prop$getString.get=function(){return string};
return html4Frameset$;
};$1i8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','html4Frameset']};};
function $init$html4Frameset(){
if($1i8.$$===undefined){
m$1.initTypeProto($1i8,'ceylon.html::html4Frameset',$init$Doctype());
(function(html4Frameset$){
m$1.atr$(html4Frameset$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD HTML 4.01 FramesetEN\"\n\"http:www.w3.org/TR/html4/frameset.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1i8,pa:3,d:['ceylon.html','html4Frameset','$at','string']};});
})($1i8.$$.prototype);
}
return $1i8;
}
ex$.$init$html4Frameset=$init$html4Frameset;
$init$html4Frameset();
var $1ia;
function html4Frameset(){
if($1ia===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'html4Frameset\' before it was set"),'14:0-18:0','Doctype.ceylon');
if($1ia===undefined){$1ia=m$1.INIT$;$1ia=$init$html4Frameset()();$1ia.$crtmm$=html4Frameset.$crtmm$;}
return $1ia;
}
ex$.html4Frameset=html4Frameset;
html4Frameset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$html4Frameset()},pa:1,d:['ceylon.html','html4Frameset']};};
$prop$getHtml4Frameset=html4Frameset;
ex$.$prop$getHtml4Frameset=$prop$getHtml4Frameset;
function $1ib(){
var xhtml1Strict$=new $1ib.$$;Doctype(xhtml1Strict$);
xhtml1Strict$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ib,pa:3,d:['ceylon.html','xhtml1Strict','$at','string']};}};
xhtml1Strict$.$prop$getString.get=function(){return string};
return xhtml1Strict$;
};$1ib.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','xhtml1Strict']};};
function $init$xhtml1Strict(){
if($1ib.$$===undefined){
m$1.initTypeProto($1ib,'ceylon.html::xhtml1Strict',$init$Doctype());
(function(xhtml1Strict$){
m$1.atr$(xhtml1Strict$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD XHTML 1.0 StrictEN\"\n\"http:www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ib,pa:3,d:['ceylon.html','xhtml1Strict','$at','string']};});
})($1ib.$$.prototype);
}
return $1ib;
}
ex$.$init$xhtml1Strict=$init$xhtml1Strict;
$init$xhtml1Strict();
var $1id;
function xhtml1Strict(){
if($1id===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtml1Strict\' before it was set"),'20:0-24:0','Doctype.ceylon');
if($1id===undefined){$1id=m$1.INIT$;$1id=$init$xhtml1Strict()();$1id.$crtmm$=xhtml1Strict.$crtmm$;}
return $1id;
}
ex$.xhtml1Strict=xhtml1Strict;
xhtml1Strict.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$xhtml1Strict()},pa:1,d:['ceylon.html','xhtml1Strict']};};
$prop$getXhtml1Strict=xhtml1Strict;
ex$.$prop$getXhtml1Strict=$prop$getXhtml1Strict;
function $1ie(){
var xhtml1Transitional$=new $1ie.$$;Doctype(xhtml1Transitional$);
xhtml1Transitional$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ie,pa:3,d:['ceylon.html','xhtml1Transitional','$at','string']};}};
xhtml1Transitional$.$prop$getString.get=function(){return string};
return xhtml1Transitional$;
};$1ie.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','xhtml1Transitional']};};
function $init$xhtml1Transitional(){
if($1ie.$$===undefined){
m$1.initTypeProto($1ie,'ceylon.html::xhtml1Transitional',$init$Doctype());
(function(xhtml1Transitional$){
m$1.atr$(xhtml1Transitional$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD XHTML 1.0 TransitionalEN\"\n\"http:www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ie,pa:3,d:['ceylon.html','xhtml1Transitional','$at','string']};});
})($1ie.$$.prototype);
}
return $1ie;
}
ex$.$init$xhtml1Transitional=$init$xhtml1Transitional;
$init$xhtml1Transitional();
var $1ig;
function xhtml1Transitional(){
if($1ig===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtml1Transitional\' before it was set"),'26:0-30:0','Doctype.ceylon');
if($1ig===undefined){$1ig=m$1.INIT$;$1ig=$init$xhtml1Transitional()();$1ig.$crtmm$=xhtml1Transitional.$crtmm$;}
return $1ig;
}
ex$.xhtml1Transitional=xhtml1Transitional;
xhtml1Transitional.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$xhtml1Transitional()},pa:1,d:['ceylon.html','xhtml1Transitional']};};
$prop$getXhtml1Transitional=xhtml1Transitional;
ex$.$prop$getXhtml1Transitional=$prop$getXhtml1Transitional;
function $1ih(){
var xhtml1Frameset$=new $1ih.$$;Doctype(xhtml1Frameset$);
xhtml1Frameset$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ih,pa:3,d:['ceylon.html','xhtml1Frameset','$at','string']};}};
xhtml1Frameset$.$prop$getString.get=function(){return string};
return xhtml1Frameset$;
};$1ih.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','xhtml1Frameset']};};
function $init$xhtml1Frameset(){
if($1ih.$$===undefined){
m$1.initTypeProto($1ih,'ceylon.html::xhtml1Frameset',$init$Doctype());
(function(xhtml1Frameset$){
m$1.atr$(xhtml1Frameset$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD XHTML 1.0 FramesetEN\"\n\"http:www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ih,pa:3,d:['ceylon.html','xhtml1Frameset','$at','string']};});
})($1ih.$$.prototype);
}
return $1ih;
}
ex$.$init$xhtml1Frameset=$init$xhtml1Frameset;
$init$xhtml1Frameset();
var $1ij;
function xhtml1Frameset(){
if($1ij===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtml1Frameset\' before it was set"),'32:0-36:0','Doctype.ceylon');
if($1ij===undefined){$1ij=m$1.INIT$;$1ij=$init$xhtml1Frameset()();$1ij.$crtmm$=xhtml1Frameset.$crtmm$;}
return $1ij;
}
ex$.xhtml1Frameset=xhtml1Frameset;
xhtml1Frameset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$xhtml1Frameset()},pa:1,d:['ceylon.html','xhtml1Frameset']};};
$prop$getXhtml1Frameset=xhtml1Frameset;
ex$.$prop$getXhtml1Frameset=$prop$getXhtml1Frameset;
function $1ik(){
var xhtml11$=new $1ik.$$;Doctype(xhtml11$);
xhtml11$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ik,pa:3,d:['ceylon.html','xhtml11','$at','string']};}};
xhtml11$.$prop$getString.get=function(){return string};
return xhtml11$;
};$1ik.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','xhtml11']};};
function $init$xhtml11(){
if($1ik.$$===undefined){
m$1.initTypeProto($1ik,'ceylon.html::xhtml11',$init$Doctype());
(function(xhtml11$){
m$1.atr$(xhtml11$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD XHTML 1.1EN\"\n\"http:www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1ik,pa:3,d:['ceylon.html','xhtml11','$at','string']};});
})($1ik.$$.prototype);
}
return $1ik;
}
ex$.$init$xhtml11=$init$xhtml11;
$init$xhtml11();
var $1im;
function xhtml11(){
if($1im===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtml11\' before it was set"),'38:0-42:0','Doctype.ceylon');
if($1im===undefined){$1im=m$1.INIT$;$1im=$init$xhtml11()();$1im.$crtmm$=xhtml11.$crtmm$;}
return $1im;
}
ex$.xhtml11=xhtml11;
xhtml11.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$xhtml11()},pa:1,d:['ceylon.html','xhtml11']};};
$prop$getXhtml11=xhtml11;
ex$.$prop$getXhtml11=$prop$getXhtml11;
function $1in(){
var xhtml11Basic$=new $1in.$$;Doctype(xhtml11Basic$);
xhtml11Basic$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1in,pa:3,d:['ceylon.html','xhtml11Basic','$at','string']};}};
xhtml11Basic$.$prop$getString.get=function(){return string};
return xhtml11Basic$;
};$1in.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','xhtml11Basic']};};
function $init$xhtml11Basic(){
if($1in.$$===undefined){
m$1.initTypeProto($1in,'ceylon.html::xhtml11Basic',$init$Doctype());
(function(xhtml11Basic$){
m$1.atr$(xhtml11Basic$,'string',function(){
return "<!DOCTYPE HTML PUBLIC \"-W3CDTD XHTML Basic 1.1EN\"\n\"http:www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd\">";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1in,pa:3,d:['ceylon.html','xhtml11Basic','$at','string']};});
})($1in.$$.prototype);
}
return $1in;
}
ex$.$init$xhtml11Basic=$init$xhtml11Basic;
$init$xhtml11Basic();
var $1ip;
function xhtml11Basic(){
if($1ip===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtml11Basic\' before it was set"),'44:0-48:0','Doctype.ceylon');
if($1ip===undefined){$1ip=m$1.INIT$;$1ip=$init$xhtml11Basic()();$1ip.$crtmm$=xhtml11Basic.$crtmm$;}
return $1ip;
}
ex$.xhtml11Basic=xhtml11Basic;
xhtml11Basic.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$xhtml11Basic()},pa:1,d:['ceylon.html','xhtml11Basic']};};
$prop$getXhtml11Basic=xhtml11Basic;
ex$.$prop$getXhtml11Basic=$prop$getXhtml11Basic;
function $1iq(){
var html5$=new $1iq.$$;Doctype(html5$);
html5$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1iq,pa:3,d:['ceylon.html','html5','$at','string']};}};
html5$.$prop$getString.get=function(){return string};
return html5$;
};$1iq.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Doctype},d:['ceylon.html','html5']};};
function $init$html5(){
if($1iq.$$===undefined){
m$1.initTypeProto($1iq,'ceylon.html::html5',$init$Doctype());
(function(html5$){
m$1.atr$(html5$,'string',function(){
return "<!DOCTYPE html>";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$1iq,pa:3,d:['ceylon.html','html5','$at','string']};});
})($1iq.$$.prototype);
}
return $1iq;
}
ex$.$init$html5=$init$html5;
$init$html5();
var $1is;
function html5(){
if($1is===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'html5\' before it was set"),'50:0-52:0','Doctype.ceylon');
if($1is===undefined){$1is=m$1.INIT$;$1is=$init$html5()();$1is.$crtmm$=html5.$crtmm$;}
return $1is;
}
ex$.html5=html5;
html5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$html5()},pa:1,d:['ceylon.html','html5']};};
$prop$getHtml5=html5;
ex$.$prop$getHtml5=$prop$getHtml5;
var $1it;function $valinit$$1it(){if($1it===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'allDoctypes\' before it was set"),'54:0-57:1','Doctype.ceylon');
if($1it===undefined){$1it=m$1.INIT$;$1it=m$1.sarg$(function($1iu){switch($1iu){case 0:return html5();case 1:return html4Strict();case 2:return html4Transitional();case 3:return html4Frameset();case 4:return xhtml11();case 5:return xhtml11Basic();case 6:return xhtml1Strict();case 7:return xhtml1Transitional();case 8:return xhtml1Frameset();}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:$init$html5()},{t:$init$html4Strict()},{t:$init$html4Transitional()},{t:$init$html4Frameset()},{t:$init$xhtml11()},{t:$init$xhtml11Basic()},{t:$init$xhtml1Strict()},{t:$init$xhtml1Transitional()},{t:$init$xhtml1Frameset()}]),Absent$Iterable:{t:m$1.Nothing}})};return $1it;};
function allDoctypes(){return $valinit$$1it();}
ex$.allDoctypes=allDoctypes;
var $prop$getAllDoctypes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:Doctype},Absent$Iterable:{t:m$1.Nothing}}},pa:1,d:['ceylon.html','allDoctypes']};}};
ex$.$prop$getAllDoctypes=$prop$getAllDoctypes;
$prop$getAllDoctypes.get=allDoctypes;
allDoctypes.$crtmm$=$prop$getAllDoctypes.$crtmm$;
var $1iv;function $valinit$$1iv(){if($1iv===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xhtmlDoctypes\' before it was set"),'59:0-62:1','Doctype.ceylon');
if($1iv===undefined){$1iv=m$1.INIT$;$1iv=m$1.sarg$(function($1iw){switch($1iw){case 0:return xhtml11();case 1:return xhtml11Basic();case 2:return xhtml1Strict();case 3:return xhtml1Transitional();case 4:return xhtml1Frameset();}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:$init$xhtml11()},{t:$init$xhtml11Basic()},{t:$init$xhtml1Strict()},{t:$init$xhtml1Transitional()},{t:$init$xhtml1Frameset()}]),Absent$Iterable:{t:m$1.Nothing}})};return $1iv;};
function xhtmlDoctypes(){return $valinit$$1iv();}
ex$.xhtmlDoctypes=xhtmlDoctypes;
var $prop$getXhtmlDoctypes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:Doctype},Absent$Iterable:{t:m$1.Nothing}}},pa:1,d:['ceylon.html','xhtmlDoctypes']};}};
ex$.$prop$getXhtmlDoctypes=$prop$getXhtmlDoctypes;
$prop$getXhtmlDoctypes.get=xhtmlDoctypes;
xhtmlDoctypes.$crtmm$=$prop$getXhtmlDoctypes.$crtmm$;
function Doctype(doctype$){
$init$Doctype();
if(doctype$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::Doctype"),'?','?')
return doctype$;
}
Doctype.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getHtml4Transitional,$prop$getHtml4Strict,$prop$getHtml4Frameset,$prop$getXhtml1Transitional,$prop$getXhtml1Strict,$prop$getXhtml1Frameset,$prop$getXhtml11,$prop$getXhtml11Basic,$prop$getHtml5],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Doctype')];},d:['ceylon.html','Doctype']};};
ex$.Doctype=Doctype;
function $init$Doctype(){
if(Doctype.$$===undefined){
m$1.initTypeProto(Doctype,'ceylon.html::Doctype',m$1.Basic);
}
return Doctype;
}
ex$.$init$Doctype=$init$Doctype;
$init$Doctype();
function Element(id,element$){
$init$Element();
if(element$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::Element"),'?','?')
if(id===undefined){id=null;}
element$.id_=id;
Node(element$);
return element$;
}
Element.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Element:$at:id')];}}],sts:[{t:Node}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Element')];},d:['ceylon.html','Element']};};
ex$.Element=Element;
function $init$Element(){
if(Element.$$===undefined){
m$1.initTypeProto(Element,'ceylon.html::Element',m$1.Basic,$init$Node());
(function(element$){
m$1.atr$(element$,'id',function(){return this.id_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Element,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Element:$at:id')];},d:['ceylon.html','Element','$at','id']};});
m$1.atr$(element$,'attributes',function(){
var element$=this;
var $1ix=AttributeSequenceBuilder();
$1ix.addAttribute("id",element$.id);
return $1ix.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Element,pa:11,d:['ceylon.html','Element','$at','attributes']};});
})(Element.$$.prototype);
}
return Element;
}
ex$.$init$Element=$init$Element;
$init$Element();
function StyledElement($wgimgr$1iy,classNames,style,styledElement$){
$init$StyledElement();
if(styledElement$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::StyledElement"),'?','?')
styledElement$.$wgimgr$1iy_=$wgimgr$1iy;
if(classNames===undefined){classNames=m$1.empty();}
styledElement$.classNames_=classNames;
if(style===undefined){style=null;}
styledElement$.style_=style;
Element($wgimgr$1iy,styledElement$);
return styledElement$;
}
StyledElement.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'id',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass(),pa:1,an:function(){return[m$1.doc("CSS class names.")];}},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("CSS style properties.")];}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:StyledElement')];},d:['ceylon.html','StyledElement']};};
ex$.StyledElement=StyledElement;
function $init$StyledElement(){
if(StyledElement.$$===undefined){
m$1.initTypeProto(StyledElement,'ceylon.html::StyledElement',$init$Element());
(function(styledElement$){
m$1.atr$(styledElement$,'$wgimgr$1iy',function(){return this.$wgimgr$1iy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:StyledElement,d:['ceylon.html','StyledElement','$at','id$fg835r']};});
m$1.atr$(styledElement$,'classNames',function(){return this.classNames_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:StyledElement,pa:1,an:function(){return[m$1.doc("CSS class names.")];},d:['ceylon.html','StyledElement','$at','classNames']};});
m$1.atr$(styledElement$,'style',function(){return this.style_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:StyledElement,pa:1,an:function(){return[m$1.doc("CSS style properties.")];},d:['ceylon.html','StyledElement','$at','style']};});
m$1.atr$(styledElement$,'attributes',function(){
var styledElement$=this;
var $1iz=AttributeSequenceBuilder();
$1iz.addAll(m$1.attrGetter(styledElement$.getT$all()['ceylon.html::Element'],'attributes').call(this));
var $1j0;
if(m$1.is$(($1j0=styledElement$.classNames),{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}})){
$1iz.addAttribute("class"," ".$_join($1j0));
}
else{
$1iz.addAttribute("class",$1j0);
}
$1iz.addAttribute("style",styledElement$.style);
return $1iz.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:StyledElement,pa:11,d:['ceylon.html','StyledElement','$at','attributes']};});
})(StyledElement.$$.prototype);
}
return StyledElement;
}
ex$.$init$StyledElement=$init$StyledElement;
$init$StyledElement();
function BaseElement($wgimgr$1j1,$wgimgr$1j2,$wgimgr$1j3,accessKey,contextMenu,dir,draggable,dropZone,inert,hidden,lang,spellcheck,tabIndex,title,translate,aria,nonstandardAttributes,data,baseElement$){
$init$BaseElement();
if(baseElement$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::BaseElement"),'?','?')
if($wgimgr$1j1===undefined){$wgimgr$1j1=null;}
baseElement$.$wgimgr$1j1_=$wgimgr$1j1;
if($wgimgr$1j2===undefined){$wgimgr$1j2=m$1.empty();}
baseElement$.$wgimgr$1j2_=$wgimgr$1j2;
if($wgimgr$1j3===undefined){$wgimgr$1j3=null;}
baseElement$.$wgimgr$1j3_=$wgimgr$1j3;
if(accessKey===undefined){accessKey=null;}
baseElement$.accessKey_=accessKey;
if(contextMenu===undefined){contextMenu=null;}
baseElement$.contextMenu_=contextMenu;
if(dir===undefined){dir=null;}
baseElement$.dir_=dir;
if(draggable===undefined){draggable=null;}
baseElement$.draggable_=draggable;
if(dropZone===undefined){dropZone=null;}
baseElement$.dropZone_=dropZone;
if(inert===undefined){inert=null;}
baseElement$.inert_=inert;
if(hidden===undefined){hidden=null;}
baseElement$.hidden_=hidden;
if(lang===undefined){lang=null;}
baseElement$.lang_=lang;
if(spellcheck===undefined){spellcheck=null;}
baseElement$.spellcheck_=spellcheck;
if(tabIndex===undefined){tabIndex=null;}
baseElement$.tabIndex_=tabIndex;
if(title===undefined){title=null;}
baseElement$.title_=title;
if(translate===undefined){translate=null;}
baseElement$.translate_=translate;
if(aria===undefined){aria=null;}
baseElement$.aria_=aria;
if(nonstandardAttributes===undefined){nonstandardAttributes=m$1.empty();}
baseElement$.nonstandardAttributes_=nonstandardAttributes;
if(data===undefined){data=m$1.empty();}
baseElement$.data_=data;
StyledElement($wgimgr$1j1,$wgimgr$1j2,$wgimgr$1j3,baseElement$);
return baseElement$;
}
BaseElement.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StyledElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:accessKey')];}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:contextMenu')];}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:dir')];}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:draggable')];}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:dropZone')];}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:inert')];}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:hidden')];}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:lang')];}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:spellcheck')];}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:tabIndex')];}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:title')];}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:translate')];}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},pa:1},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes(),pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:nonstandardAttributes')];}},{nm:'data',mt:'prm',def:1,$t:DataContainer(),pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:data')];}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement')];},d:['ceylon.html','BaseElement']};};
ex$.BaseElement=BaseElement;
function $init$BaseElement(){
if(BaseElement.$$===undefined){
m$1.initTypeProto(BaseElement,'ceylon.html::BaseElement',$init$StyledElement());
(function(baseElement$){
m$1.atr$(baseElement$,'$wgimgr$1j1',function(){return this.$wgimgr$1j1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,d:['ceylon.html','BaseElement','$at','id$5nwiq9']};});
m$1.atr$(baseElement$,'$wgimgr$1j2',function(){return this.$wgimgr$1j2_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:BaseElement,d:['ceylon.html','BaseElement','$at','classNames$q2uf1a']};});
m$1.atr$(baseElement$,'$wgimgr$1j3',function(){return this.$wgimgr$1j3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,d:['ceylon.html','BaseElement','$at','style$50mwvr']};});
m$1.atr$(baseElement$,'accessKey',function(){return this.accessKey_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:accessKey')];},d:['ceylon.html','BaseElement','$at','accessKey']};});
m$1.atr$(baseElement$,'contextMenu',function(){return this.contextMenu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:contextMenu')];},d:['ceylon.html','BaseElement','$at','contextMenu']};});
m$1.atr$(baseElement$,'dir',function(){return this.dir_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:dir')];},d:['ceylon.html','BaseElement','$at','dir']};});
m$1.atr$(baseElement$,'draggable',function(){return this.draggable_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:draggable')];},d:['ceylon.html','BaseElement','$at','draggable']};});
m$1.atr$(baseElement$,'dropZone',function(){return this.dropZone_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:dropZone')];},d:['ceylon.html','BaseElement','$at','dropZone']};});
m$1.atr$(baseElement$,'inert',function(){return this.inert_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:inert')];},d:['ceylon.html','BaseElement','$at','inert']};});
m$1.atr$(baseElement$,'hidden',function(){return this.hidden_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:hidden')];},d:['ceylon.html','BaseElement','$at','hidden']};});
m$1.atr$(baseElement$,'lang',function(){return this.lang_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:lang')];},d:['ceylon.html','BaseElement','$at','lang']};});
m$1.atr$(baseElement$,'spellcheck',function(){return this.spellcheck_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:spellcheck')];},d:['ceylon.html','BaseElement','$at','spellcheck']};});
m$1.atr$(baseElement$,'tabIndex',function(){return this.tabIndex_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:tabIndex')];},d:['ceylon.html','BaseElement','$at','tabIndex']};});
m$1.atr$(baseElement$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:title')];},d:['ceylon.html','BaseElement','$at','title']};});
m$1.atr$(baseElement$,'translate',function(){return this.translate_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:translate')];},d:['ceylon.html','BaseElement','$at','translate']};});
m$1.atr$(baseElement$,'aria',function(){return this.aria_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:BaseElement,pa:1,d:['ceylon.html','BaseElement','$at','aria']};});
m$1.atr$(baseElement$,'nonstandardAttributes',function(){return this.nonstandardAttributes_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:nonstandardAttributes')];},d:['ceylon.html','BaseElement','$at','nonstandardAttributes']};});
m$1.atr$(baseElement$,'data',function(){return this.data_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:BaseElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BaseElement:$at:data')];},d:['ceylon.html','BaseElement','$at','data']};});
m$1.atr$(baseElement$,'attributes',function(){
var baseElement$=this;
var $1j4=AttributeSequenceBuilder();
$1j4.addAll(m$1.attrGetter(baseElement$.getT$all()['ceylon.html::StyledElement'],'attributes').call(this));
$1j4.addAttribute("accesskey",baseElement$.accessKey);
$1j4.addAttribute("contextmenu",baseElement$.contextMenu);
$1j4.addAttribute("draggable",baseElement$.draggable);
$1j4.addAttribute("addne",baseElement$.dropZone);
$1j4.addAttribute("hidden",baseElement$.hidden);
$1j4.addAttribute("inert",baseElement$.inert);
$1j4.addAttribute("lang",baseElement$.lang);
$1j4.addAttribute("spellcheck",baseElement$.spellcheck);
$1j4.addAttribute("tabindex",baseElement$.tabIndex);
$1j4.addAttribute("title",baseElement$.title);
$1j4.addYesNoBooleanAttribute("translate",baseElement$.translate);
$1j4.addAll(baseElement$.nonstandardAttributes);
$1j4.addAll(baseElement$.data.$_map(m$1.$JsCallable((function($1j5){return m$1.Entry("data-".plus($1j5.key).plus(""),$1j5.item,{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}});}),[{nm:'elem',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}]),Return$Callable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}),{Result$map:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}));
return $1j4.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:BaseElement,pa:11,d:['ceylon.html','BaseElement','$at','attributes']};});
})(BaseElement.$$.prototype);
}
return BaseElement;
}
ex$.$init$BaseElement=$init$BaseElement;
$init$BaseElement();
function ElementType(elementType$){
Node(elementType$);
}
ElementType.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:Node}],of:[{t:BlockElement},{t:InlineElement},{t:TableElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:ElementType')];},d:['ceylon.html','ElementType']};};
ex$.ElementType=ElementType;
function $init$ElementType(){
if(ElementType.$$===undefined){
m$1.initTypeProtoI(ElementType,'ceylon.html::ElementType',$init$Node());
}
return ElementType;
}
ex$.$init$ElementType=$init$ElementType;
$init$ElementType();
function BlockElement(blockElement$){
ElementType(blockElement$);
}
BlockElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ElementType}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BlockElement'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Div),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),P)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','BlockElement']};};
ex$.BlockElement=BlockElement;
function $init$BlockElement(){
if(BlockElement.$$===undefined){
m$1.initTypeProtoI(BlockElement,'ceylon.html::BlockElement',$init$ElementType());
}
return BlockElement;
}
ex$.$init$BlockElement=$init$BlockElement;
$init$BlockElement();
function InlineElement(inlineElement$){
ElementType(inlineElement$);
}
InlineElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ElementType}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:InlineElement'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Span)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','InlineElement']};};
ex$.InlineElement=InlineElement;
function $init$InlineElement(){
if(InlineElement.$$===undefined){
m$1.initTypeProtoI(InlineElement,'ceylon.html::InlineElement',$init$ElementType());
}
return InlineElement;
}
ex$.$init$InlineElement=$init$InlineElement;
$init$InlineElement();
function TableElement(tableElement$){
ElementType(tableElement$);
}
TableElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ElementType}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TableElement'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Tr),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Td)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','TableElement']};};
ex$.TableElement=TableElement;
function $init$TableElement(){
if(TableElement.$$===undefined){
m$1.initTypeProtoI(TableElement,'ceylon.html::TableElement',$init$ElementType());
}
return TableElement;
}
ex$.$init$TableElement=$init$TableElement;
$init$TableElement();
function BlockOrInline(){var $1j6=m$1.mut$([{t:BlockElement},{t:InlineElement}]);$1j6.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:BlockOrInline')];},d:['ceylon.html','BlockOrInline']};};return $1j6;}
ex$.BlockOrInline=BlockOrInline;
function FieldSet(legend,$wgimgr$1j7,$wgimgr$1j8,$wgimgr$1j9,$wgimgr$1ja,$wgimgr$1jb,$wgimgr$1jc,$wgimgr$1jd,$wgimgr$1je,$wgimgr$1jf,$wgimgr$1jg,$wgimgr$1jh,$wgimgr$1ji,$wgimgr$1jj,$wgimgr$1jk,$wgimgr$1jl,$wgimgr$1jm,$wgimgr$1jn,$wgimgr$1jo,children,fieldSet$){
$init$FieldSet();
if(fieldSet$===undefined)fieldSet$=new FieldSet.$$;
fieldSet$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(legend===undefined){legend=null;}
fieldSet$.legend_=legend;
if($wgimgr$1j7===undefined){$wgimgr$1j7=null;}
fieldSet$.$wgimgr$1j7_=$wgimgr$1j7;
if($wgimgr$1j8===undefined){$wgimgr$1j8=m$1.empty();}
fieldSet$.$wgimgr$1j8_=$wgimgr$1j8;
if($wgimgr$1j9===undefined){$wgimgr$1j9=null;}
fieldSet$.$wgimgr$1j9_=$wgimgr$1j9;
if($wgimgr$1ja===undefined){$wgimgr$1ja=null;}
fieldSet$.$wgimgr$1ja_=$wgimgr$1ja;
if($wgimgr$1jb===undefined){$wgimgr$1jb=null;}
fieldSet$.$wgimgr$1jb_=$wgimgr$1jb;
if($wgimgr$1jc===undefined){$wgimgr$1jc=null;}
fieldSet$.$wgimgr$1jc_=$wgimgr$1jc;
if($wgimgr$1jd===undefined){$wgimgr$1jd=null;}
fieldSet$.$wgimgr$1jd_=$wgimgr$1jd;
if($wgimgr$1je===undefined){$wgimgr$1je=null;}
fieldSet$.$wgimgr$1je_=$wgimgr$1je;
if($wgimgr$1jf===undefined){$wgimgr$1jf=null;}
fieldSet$.$wgimgr$1jf_=$wgimgr$1jf;
if($wgimgr$1jg===undefined){$wgimgr$1jg=null;}
fieldSet$.$wgimgr$1jg_=$wgimgr$1jg;
if($wgimgr$1jh===undefined){$wgimgr$1jh=null;}
fieldSet$.$wgimgr$1jh_=$wgimgr$1jh;
if($wgimgr$1ji===undefined){$wgimgr$1ji=null;}
fieldSet$.$wgimgr$1ji_=$wgimgr$1ji;
if($wgimgr$1jj===undefined){$wgimgr$1jj=null;}
fieldSet$.$wgimgr$1jj_=$wgimgr$1jj;
if($wgimgr$1jk===undefined){$wgimgr$1jk=null;}
fieldSet$.$wgimgr$1jk_=$wgimgr$1jk;
if($wgimgr$1jl===undefined){$wgimgr$1jl=null;}
fieldSet$.$wgimgr$1jl_=$wgimgr$1jl;
if($wgimgr$1jm===undefined){$wgimgr$1jm=null;}
fieldSet$.$wgimgr$1jm_=$wgimgr$1jm;
if($wgimgr$1jn===undefined){$wgimgr$1jn=m$1.empty();}
fieldSet$.$wgimgr$1jn_=$wgimgr$1jn;
if($wgimgr$1jo===undefined){$wgimgr$1jo=m$1.empty();}
fieldSet$.$wgimgr$1jo_=$wgimgr$1jo;
if(children===undefined){children=m$1.empty();}
fieldSet$.children_=children;
BlockElement(fieldSet$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},fieldSet$);
BaseElement($wgimgr$1j7,$wgimgr$1j8,$wgimgr$1j9,$wgimgr$1ja,$wgimgr$1jb,$wgimgr$1jc,$wgimgr$1jd,$wgimgr$1je,$wgimgr$1jf,$wgimgr$1jg,$wgimgr$1jh,$wgimgr$1ji,$wgimgr$1jj,$wgimgr$1jk,$wgimgr$1jl,$wgimgr$1jm,$wgimgr$1jn,$wgimgr$1jo,fieldSet$);
fieldSet$.tag_=Tag("fieldset");
return fieldSet$;
}
FieldSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'legend',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Legend}]},pa:1},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FieldSet')];},d:['ceylon.html','FieldSet']};};
ex$.FieldSet=FieldSet;
function $init$FieldSet(){
if(FieldSet.$$===undefined){
m$1.initTypeProto(FieldSet,'ceylon.html::FieldSet',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(fieldSet$){
m$1.atr$(fieldSet$,'legend',function(){return this.legend_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Legend}]},$cont:FieldSet,pa:1,d:['ceylon.html','FieldSet','$at','legend']};});
m$1.atr$(fieldSet$,'$wgimgr$1j7',function(){return this.$wgimgr$1j7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','id$c6stzq']};});
m$1.atr$(fieldSet$,'$wgimgr$1j8',function(){return this.$wgimgr$1j8_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:FieldSet,d:['ceylon.html','FieldSet','$at','classNames$wlqqar']};});
m$1.atr$(fieldSet$,'$wgimgr$1j9',function(){return this.$wgimgr$1j9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','style$bjj858']};});
m$1.atr$(fieldSet$,'$wgimgr$1ja',function(){return this.$wgimgr$1ja_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','accessKey$fec5y']};});
m$1.atr$(fieldSet$,'$wgimgr$1jb',function(){return this.$wgimgr$1jb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','contextMenu$mlngmp']};});
m$1.atr$(fieldSet$,'$wgimgr$1jc',function(){return this.$wgimgr$1jc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','dir$ed51tk']};});
m$1.atr$(fieldSet$,'$wgimgr$1jd',function(){return this.$wgimgr$1jd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','draggable$8flf20']};});
m$1.atr$(fieldSet$,'$wgimgr$1je',function(){return this.$wgimgr$1je_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','dropZone$pffvue']};});
m$1.atr$(fieldSet$,'$wgimgr$1jf',function(){return this.$wgimgr$1jf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','inert$b2d2dh']};});
m$1.atr$(fieldSet$,'$wgimgr$1jg',function(){return this.$wgimgr$1jg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','hidden$79mbnx']};});
m$1.atr$(fieldSet$,'$wgimgr$1jh',function(){return this.$wgimgr$1jh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','lang$g47r5d']};});
m$1.atr$(fieldSet$,'$wgimgr$1ji',function(){return this.$wgimgr$1ji_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','spellcheck$ni7ql']};});
m$1.atr$(fieldSet$,'$wgimgr$1jj',function(){return this.$wgimgr$1jj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','tabIndex$we5avs']};});
m$1.atr$(fieldSet$,'$wgimgr$1jk',function(){return this.$wgimgr$1jk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','title$ox91cb']};});
m$1.atr$(fieldSet$,'$wgimgr$1jl',function(){return this.$wgimgr$1jl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','translate$hctu9b']};});
m$1.atr$(fieldSet$,'$wgimgr$1jm',function(){return this.$wgimgr$1jm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:FieldSet,d:['ceylon.html','FieldSet','$at','aria$92autw']};});
m$1.atr$(fieldSet$,'$wgimgr$1jn',function(){return this.$wgimgr$1jn_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:FieldSet,d:['ceylon.html','FieldSet','$at','nonstandardAttributes$9nsb04']};});
m$1.atr$(fieldSet$,'$wgimgr$1jo',function(){return this.$wgimgr$1jo_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:FieldSet,d:['ceylon.html','FieldSet','$at','data$aq3wy5']};});
m$1.atr$(fieldSet$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:FieldSet,pa:3,d:['ceylon.html','FieldSet','$at','children']};});
m$1.atr$(fieldSet$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:FieldSet,pa:3,d:['ceylon.html','FieldSet','$at','tag']};});
})(FieldSet.$$.prototype);
}
return FieldSet;
}
ex$.$init$FieldSet=$init$FieldSet;
$init$FieldSet();
function Legend(text,$wgimgr$1jp,$wgimgr$1jq,$wgimgr$1jr,$wgimgr$1js,$wgimgr$1jt,$wgimgr$1ju,$wgimgr$1jv,$wgimgr$1jw,$wgimgr$1jx,$wgimgr$1jy,$wgimgr$1jz,$wgimgr$1k0,$wgimgr$1k1,$wgimgr$1k2,$wgimgr$1k3,$wgimgr$1k4,$wgimgr$1k5,$wgimgr$1k6,children,legend$){
$init$Legend();
if(legend$===undefined)legend$=new Legend.$$;
legend$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
legend$.text_=text;
if($wgimgr$1jp===undefined){$wgimgr$1jp=null;}
legend$.$wgimgr$1jp_=$wgimgr$1jp;
if($wgimgr$1jq===undefined){$wgimgr$1jq=m$1.empty();}
legend$.$wgimgr$1jq_=$wgimgr$1jq;
if($wgimgr$1jr===undefined){$wgimgr$1jr=null;}
legend$.$wgimgr$1jr_=$wgimgr$1jr;
if($wgimgr$1js===undefined){$wgimgr$1js=null;}
legend$.$wgimgr$1js_=$wgimgr$1js;
if($wgimgr$1jt===undefined){$wgimgr$1jt=null;}
legend$.$wgimgr$1jt_=$wgimgr$1jt;
if($wgimgr$1ju===undefined){$wgimgr$1ju=null;}
legend$.$wgimgr$1ju_=$wgimgr$1ju;
if($wgimgr$1jv===undefined){$wgimgr$1jv=null;}
legend$.$wgimgr$1jv_=$wgimgr$1jv;
if($wgimgr$1jw===undefined){$wgimgr$1jw=null;}
legend$.$wgimgr$1jw_=$wgimgr$1jw;
if($wgimgr$1jx===undefined){$wgimgr$1jx=null;}
legend$.$wgimgr$1jx_=$wgimgr$1jx;
if($wgimgr$1jy===undefined){$wgimgr$1jy=null;}
legend$.$wgimgr$1jy_=$wgimgr$1jy;
if($wgimgr$1jz===undefined){$wgimgr$1jz=null;}
legend$.$wgimgr$1jz_=$wgimgr$1jz;
if($wgimgr$1k0===undefined){$wgimgr$1k0=null;}
legend$.$wgimgr$1k0_=$wgimgr$1k0;
if($wgimgr$1k1===undefined){$wgimgr$1k1=null;}
legend$.$wgimgr$1k1_=$wgimgr$1k1;
if($wgimgr$1k2===undefined){$wgimgr$1k2=null;}
legend$.$wgimgr$1k2_=$wgimgr$1k2;
if($wgimgr$1k3===undefined){$wgimgr$1k3=null;}
legend$.$wgimgr$1k3_=$wgimgr$1k3;
if($wgimgr$1k4===undefined){$wgimgr$1k4=null;}
legend$.$wgimgr$1k4_=$wgimgr$1k4;
if($wgimgr$1k5===undefined){$wgimgr$1k5=m$1.empty();}
legend$.$wgimgr$1k5_=$wgimgr$1k5;
if($wgimgr$1k6===undefined){$wgimgr$1k6=m$1.empty();}
legend$.$wgimgr$1k6_=$wgimgr$1k6;
if(children===undefined){children=m$1.empty();}
legend$.children_=children;
TextNode(legend$);
ParentNode({Child$ParentNode:{t:InlineElement}},legend$);
BaseElement($wgimgr$1jp,$wgimgr$1jq,$wgimgr$1jr,$wgimgr$1js,$wgimgr$1jt,$wgimgr$1ju,$wgimgr$1jv,$wgimgr$1jw,$wgimgr$1jx,$wgimgr$1jy,$wgimgr$1jz,$wgimgr$1k0,$wgimgr$1k1,$wgimgr$1k2,$wgimgr$1k3,$wgimgr$1k4,$wgimgr$1k5,$wgimgr$1k6,legend$);
legend$.tag_=Tag("legend");
return legend$;
}
Legend.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Legend')];},d:['ceylon.html','Legend']};};
ex$.Legend=Legend;
function $init$Legend(){
if(Legend.$$===undefined){
m$1.initTypeProto(Legend,'ceylon.html::Legend',$init$TextNode(),$init$ParentNode(),$init$BaseElement());
(function(legend$){
m$1.atr$(legend$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Legend,pa:3,d:['ceylon.html','Legend','$at','text']};});
m$1.atr$(legend$,'$wgimgr$1jp',function(){return this.$wgimgr$1jp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','id$tr3gal']};});
m$1.atr$(legend$,'$wgimgr$1jq',function(){return this.$wgimgr$1jq_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Legend,d:['ceylon.html','Legend','$at','classNames$9c5jzk']};});
m$1.atr$(legend$,'$wgimgr$1jr',function(){return this.$wgimgr$1jr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','style$ued253']};});
m$1.atr$(legend$,'$wgimgr$1js',function(){return this.$wgimgr$1js_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','accessKey$tim3ur']};});
m$1.atr$(legend$,'$wgimgr$1jt',function(){return this.$wgimgr$1jt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','contextMenu$jc8tnm']};});
m$1.atr$(legend$,'$wgimgr$1ju',function(){return this.$wgimgr$1ju_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Legend,d:['ceylon.html','Legend','$at','dir$rkr8gr']};});
m$1.atr$(legend$,'$wgimgr$1jv',function(){return this.$wgimgr$1jv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Legend,d:['ceylon.html','Legend','$at','draggable$xiav8b']};});
m$1.atr$(legend$,'$wgimgr$1jw',function(){return this.$wgimgr$1jw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Legend,d:['ceylon.html','Legend','$at','dropZone$gigefx']};});
m$1.atr$(legend$,'$wgimgr$1jx',function(){return this.$wgimgr$1jx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Legend,d:['ceylon.html','Legend','$at','inert$uvj7wu']};});
m$1.atr$(legend$,'$wgimgr$1jy',function(){return this.$wgimgr$1jy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Legend,d:['ceylon.html','Legend','$at','hidden$yo9yme']};});
m$1.atr$(legend$,'$wgimgr$1jz',function(){return this.$wgimgr$1jz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','lang$ptoj4y']};});
m$1.atr$(legend$,'$wgimgr$1k0',function(){return this.$wgimgr$1k0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Legend,d:['ceylon.html','Legend','$at','spellcheck$sfpjy8']};});
m$1.atr$(legend$,'$wgimgr$1k1',function(){return this.$wgimgr$1k1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Legend,d:['ceylon.html','Legend','$at','tabIndex$3axj6z']};});
m$1.atr$(legend$,'$wgimgr$1k2',function(){return this.$wgimgr$1k2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Legend,d:['ceylon.html','Legend','$at','title$h0n8y0']};});
m$1.atr$(legend$,'$wgimgr$1k3',function(){return this.$wgimgr$1k3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Legend,d:['ceylon.html','Legend','$at','translate$bqdxfi']};});
m$1.atr$(legend$,'$wgimgr$1k4',function(){return this.$wgimgr$1k4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Legend,d:['ceylon.html','Legend','$at','aria$wvlfgf']};});
m$1.atr$(legend$,'$wgimgr$1k5',function(){return this.$wgimgr$1k5_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Legend,d:['ceylon.html','Legend','$at','nonstandardAttributes$jffgop']};});
m$1.atr$(legend$,'$wgimgr$1k6',function(){return this.$wgimgr$1k6_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Legend,d:['ceylon.html','Legend','$at','data$v7sdc6']};});
m$1.atr$(legend$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Legend,pa:3,d:['ceylon.html','Legend','$at','children']};});
m$1.atr$(legend$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Legend,pa:3,d:['ceylon.html','Legend','$at','tag']};});
})(Legend.$$.prototype);
}
return Legend;
}
ex$.$init$Legend=$init$Legend;
$init$Legend();
function Form(action,method,acceptCharset,autoComplete,encType,name,noValidate,target,$wgimgr$1k7,$wgimgr$1k8,$wgimgr$1k9,$wgimgr$1ka,$wgimgr$1kb,$wgimgr$1kc,$wgimgr$1kd,$wgimgr$1ke,$wgimgr$1kf,$wgimgr$1kg,$wgimgr$1kh,$wgimgr$1ki,$wgimgr$1kj,$wgimgr$1kk,$wgimgr$1kl,$wgimgr$1km,$wgimgr$1kn,$wgimgr$1ko,children,form$){
$init$Form();
if(form$===undefined)form$=new Form.$$;
form$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
form$.action_=action;
if(method===undefined){method="";}
form$.method_=method;
if(acceptCharset===undefined){acceptCharset=null;}
form$.acceptCharset_=acceptCharset;
if(autoComplete===undefined){autoComplete=null;}
form$.autoComplete_=autoComplete;
if(encType===undefined){encType=null;}
form$.encType_=encType;
if(name===undefined){name=null;}
form$.name_=name;
if(noValidate===undefined){noValidate=null;}
form$.noValidate_=noValidate;
if(target===undefined){target=null;}
form$.target_=target;
if($wgimgr$1k7===undefined){$wgimgr$1k7=null;}
form$.$wgimgr$1k7_=$wgimgr$1k7;
if($wgimgr$1k8===undefined){$wgimgr$1k8=m$1.empty();}
form$.$wgimgr$1k8_=$wgimgr$1k8;
if($wgimgr$1k9===undefined){$wgimgr$1k9=null;}
form$.$wgimgr$1k9_=$wgimgr$1k9;
if($wgimgr$1ka===undefined){$wgimgr$1ka=null;}
form$.$wgimgr$1ka_=$wgimgr$1ka;
if($wgimgr$1kb===undefined){$wgimgr$1kb=null;}
form$.$wgimgr$1kb_=$wgimgr$1kb;
if($wgimgr$1kc===undefined){$wgimgr$1kc=null;}
form$.$wgimgr$1kc_=$wgimgr$1kc;
if($wgimgr$1kd===undefined){$wgimgr$1kd=null;}
form$.$wgimgr$1kd_=$wgimgr$1kd;
if($wgimgr$1ke===undefined){$wgimgr$1ke=null;}
form$.$wgimgr$1ke_=$wgimgr$1ke;
if($wgimgr$1kf===undefined){$wgimgr$1kf=null;}
form$.$wgimgr$1kf_=$wgimgr$1kf;
if($wgimgr$1kg===undefined){$wgimgr$1kg=null;}
form$.$wgimgr$1kg_=$wgimgr$1kg;
if($wgimgr$1kh===undefined){$wgimgr$1kh=null;}
form$.$wgimgr$1kh_=$wgimgr$1kh;
if($wgimgr$1ki===undefined){$wgimgr$1ki=null;}
form$.$wgimgr$1ki_=$wgimgr$1ki;
if($wgimgr$1kj===undefined){$wgimgr$1kj=null;}
form$.$wgimgr$1kj_=$wgimgr$1kj;
if($wgimgr$1kk===undefined){$wgimgr$1kk=null;}
form$.$wgimgr$1kk_=$wgimgr$1kk;
if($wgimgr$1kl===undefined){$wgimgr$1kl=null;}
form$.$wgimgr$1kl_=$wgimgr$1kl;
if($wgimgr$1km===undefined){$wgimgr$1km=null;}
form$.$wgimgr$1km_=$wgimgr$1km;
if($wgimgr$1kn===undefined){$wgimgr$1kn=m$1.empty();}
form$.$wgimgr$1kn_=$wgimgr$1kn;
if($wgimgr$1ko===undefined){$wgimgr$1ko=m$1.empty();}
form$.$wgimgr$1ko_=$wgimgr$1ko;
if(children===undefined){children=m$1.empty();}
form$.children_=children;
BlockElement(form$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},form$);
BaseElement($wgimgr$1k7,$wgimgr$1k8,$wgimgr$1k9,$wgimgr$1ka,$wgimgr$1kb,$wgimgr$1kc,$wgimgr$1kd,$wgimgr$1ke,$wgimgr$1kf,$wgimgr$1kg,$wgimgr$1kh,$wgimgr$1ki,$wgimgr$1kj,$wgimgr$1kk,$wgimgr$1kl,$wgimgr$1km,$wgimgr$1kn,$wgimgr$1ko,form$);
form$.tag_=Tag("form");
return form$;
}
Form.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'action',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:action')];}},{nm:'method',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:method')];}},{nm:'acceptCharset',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:acceptCharset')];}},{nm:'autoComplete',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:autoComplete')];}},{nm:'encType',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:encType')];}},{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:name')];}},{nm:'noValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:noValidate')];}},{nm:'target',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:target')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form')];},d:['ceylon.html','Form']};};
ex$.Form=Form;
function $init$Form(){
if(Form.$$===undefined){
m$1.initTypeProto(Form,'ceylon.html::Form',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(form$){
m$1.atr$(form$,'action',function(){return this.action_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:action')];},d:['ceylon.html','Form','$at','action']};});
m$1.atr$(form$,'method',function(){return this.method_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:method')];},d:['ceylon.html','Form','$at','method']};});
m$1.atr$(form$,'acceptCharset',function(){return this.acceptCharset_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:acceptCharset')];},d:['ceylon.html','Form','$at','acceptCharset']};});
m$1.atr$(form$,'autoComplete',function(){return this.autoComplete_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:autoComplete')];},d:['ceylon.html','Form','$at','autoComplete']};});
m$1.atr$(form$,'encType',function(){return this.encType_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:encType')];},d:['ceylon.html','Form','$at','encType']};});
m$1.atr$(form$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:name')];},d:['ceylon.html','Form','$at','name']};});
m$1.atr$(form$,'noValidate',function(){return this.noValidate_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:noValidate')];},d:['ceylon.html','Form','$at','noValidate']};});
m$1.atr$(form$,'target',function(){return this.target_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Form:$at:target')];},d:['ceylon.html','Form','$at','target']};});
m$1.atr$(form$,'$wgimgr$1k7',function(){return this.$wgimgr$1k7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','id$oharn6']};});
m$1.atr$(form$,'$wgimgr$1k8',function(){return this.$wgimgr$1k8_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Form,d:['ceylon.html','Form','$at','classNames$q4ve0x']};});
m$1.atr$(form$,'$wgimgr$1k9',function(){return this.$wgimgr$1k9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','style$nu15so']};});
m$1.atr$(form$,'$wgimgr$1ka',function(){return this.$wgimgr$1ka_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','accessKey$cpw9te']};});
m$1.atr$(form$,'$wgimgr$1kb',function(){return this.$wgimgr$1kb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','contextMenu$yw5ea5']};});
m$1.atr$(form$,'$wgimgr$1kc',function(){return this.$wgimgr$1kc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Form,d:['ceylon.html','Form','$at','dir$qnmzh0']};});
m$1.atr$(form$,'$wgimgr$1kd',function(){return this.$wgimgr$1kd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,d:['ceylon.html','Form','$at','draggable$kq3cpg']};});
m$1.atr$(form$,'$wgimgr$1ke',function(){return this.$wgimgr$1ke_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Form,d:['ceylon.html','Form','$at','dropZone$xb68ha']};});
m$1.atr$(form$,'$wgimgr$1kf',function(){return this.$wgimgr$1kf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,d:['ceylon.html','Form','$at','inert$ncv00x']};});
m$1.atr$(form$,'$wgimgr$1kg',function(){return this.$wgimgr$1kg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,d:['ceylon.html','Form','$at','hidden$jk49bd']};});
m$1.atr$(form$,'$wgimgr$1kh',function(){return this.$wgimgr$1kh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','lang$sepost']};});
m$1.atr$(form$,'$wgimgr$1ki',function(){return this.$wgimgr$1ki_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,d:['ceylon.html','Form','$at','spellcheck$bmzpwv']};});
m$1.atr$(form$,'$wgimgr$1kj',function(){return this.$wgimgr$1kj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Form,d:['ceylon.html','Form','$at','tabIndex$k3nd8c']};});
m$1.atr$(form$,'$wgimgr$1kk',function(){return this.$wgimgr$1kk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Form,d:['ceylon.html','Form','$at','title$xtd2zd']};});
m$1.atr$(form$,'$wgimgr$1kl',function(){return this.$wgimgr$1kl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Form,d:['ceylon.html','Form','$at','translate$52bwlv']};});
m$1.atr$(form$,'$wgimgr$1km',function(){return this.$wgimgr$1km_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Form,d:['ceylon.html','Form','$at','aria$lcsshc']};});
m$1.atr$(form$,'$wgimgr$1kn',function(){return this.$wgimgr$1kn_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Form,d:['ceylon.html','Form','$at','nonstandardAttributes$2mpmnc']};});
m$1.atr$(form$,'$wgimgr$1ko',function(){return this.$wgimgr$1ko_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Form,d:['ceylon.html','Form','$at','data$n0lull']};});
m$1.atr$(form$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Form,pa:3,d:['ceylon.html','Form','$at','children']};});
m$1.atr$(form$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Form,pa:3,d:['ceylon.html','Form','$at','tag']};});
m$1.atr$(form$,'attributes',function(){
var form$=this;
var $1kp=AttributeSequenceBuilder();
$1kp.addAttribute("action",form$.action);
$1kp.addAttribute("method",form$.method);
$1kp.addAttribute("name",form$.name);
$1kp.addAll(m$1.attrGetter(form$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
$1kp.addAttribute("accept-charset",form$.acceptCharset);
$1kp.addOnOffBooleanAttribute("autocomplete",form$.autoComplete);
$1kp.addAttribute("enctype",form$.encType);
$1kp.addNamedBooleanAttribute("novalidate",form$.noValidate);
$1kp.addAttribute("target",form$.target);
return $1kp.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Form,pa:3,d:['ceylon.html','Form','$at','attributes']};});
})(Form.$$.prototype);
}
return Form;
}
ex$.$init$Form=$init$Form;
$init$Form();
function FormElement(name,autoFocus,disabled,form,formNoValidate,readOnly,required,$_valueOf,$wgimgr$1kq,$wgimgr$1kr,$wgimgr$1ks,$wgimgr$1kt,$wgimgr$1ku,$wgimgr$1kv,$wgimgr$1kw,$wgimgr$1kx,$wgimgr$1ky,$wgimgr$1kz,$wgimgr$1l0,$wgimgr$1l1,$wgimgr$1l2,$wgimgr$1l3,$wgimgr$1l4,$wgimgr$1l5,$wgimgr$1l6,$wgimgr$1l7,formElement$){
$init$FormElement();
if(formElement$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::FormElement"),'?','?')
if(name===undefined){name=null;}
formElement$.name_=name;
if(autoFocus===undefined){autoFocus=null;}
formElement$.autoFocus_=autoFocus;
if(disabled===undefined){disabled=null;}
formElement$.disabled_=disabled;
if(form===undefined){form=null;}
formElement$.form_=form;
if(formNoValidate===undefined){formNoValidate=null;}
formElement$.formNoValidate_=formNoValidate;
if(readOnly===undefined){readOnly=null;}
formElement$.readOnly_=readOnly;
if(required===undefined){required=null;}
formElement$.required_=required;
if($_valueOf===undefined){$_valueOf=null;}
formElement$.$_valueOf_=$_valueOf;
if($wgimgr$1kq===undefined){$wgimgr$1kq=null;}
formElement$.$wgimgr$1kq_=$wgimgr$1kq;
if($wgimgr$1kr===undefined){$wgimgr$1kr=m$1.empty();}
formElement$.$wgimgr$1kr_=$wgimgr$1kr;
if($wgimgr$1ks===undefined){$wgimgr$1ks=null;}
formElement$.$wgimgr$1ks_=$wgimgr$1ks;
if($wgimgr$1kt===undefined){$wgimgr$1kt=null;}
formElement$.$wgimgr$1kt_=$wgimgr$1kt;
if($wgimgr$1ku===undefined){$wgimgr$1ku=null;}
formElement$.$wgimgr$1ku_=$wgimgr$1ku;
if($wgimgr$1kv===undefined){$wgimgr$1kv=null;}
formElement$.$wgimgr$1kv_=$wgimgr$1kv;
if($wgimgr$1kw===undefined){$wgimgr$1kw=null;}
formElement$.$wgimgr$1kw_=$wgimgr$1kw;
if($wgimgr$1kx===undefined){$wgimgr$1kx=null;}
formElement$.$wgimgr$1kx_=$wgimgr$1kx;
if($wgimgr$1ky===undefined){$wgimgr$1ky=null;}
formElement$.$wgimgr$1ky_=$wgimgr$1ky;
if($wgimgr$1kz===undefined){$wgimgr$1kz=null;}
formElement$.$wgimgr$1kz_=$wgimgr$1kz;
if($wgimgr$1l0===undefined){$wgimgr$1l0=null;}
formElement$.$wgimgr$1l0_=$wgimgr$1l0;
if($wgimgr$1l1===undefined){$wgimgr$1l1=null;}
formElement$.$wgimgr$1l1_=$wgimgr$1l1;
if($wgimgr$1l2===undefined){$wgimgr$1l2=null;}
formElement$.$wgimgr$1l2_=$wgimgr$1l2;
if($wgimgr$1l3===undefined){$wgimgr$1l3=null;}
formElement$.$wgimgr$1l3_=$wgimgr$1l3;
if($wgimgr$1l4===undefined){$wgimgr$1l4=null;}
formElement$.$wgimgr$1l4_=$wgimgr$1l4;
if($wgimgr$1l5===undefined){$wgimgr$1l5=null;}
formElement$.$wgimgr$1l5_=$wgimgr$1l5;
if($wgimgr$1l6===undefined){$wgimgr$1l6=m$1.empty();}
formElement$.$wgimgr$1l6_=$wgimgr$1l6;
if($wgimgr$1l7===undefined){$wgimgr$1l7=m$1.empty();}
formElement$.$wgimgr$1l7_=$wgimgr$1l7;
InlineElement(formElement$);
BaseElement($wgimgr$1kq,$wgimgr$1kr,$wgimgr$1ks,$wgimgr$1kt,$wgimgr$1ku,$wgimgr$1kv,$wgimgr$1kw,$wgimgr$1kx,$wgimgr$1ky,$wgimgr$1kz,$wgimgr$1l0,$wgimgr$1l1,$wgimgr$1l2,$wgimgr$1l3,$wgimgr$1l4,$wgimgr$1l5,$wgimgr$1l6,$wgimgr$1l7,formElement$);
return formElement$;
}
FormElement.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:name')];}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:autoFocus')];}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:disabled')];}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:form')];}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:formNoValidate')];}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:readOnly')];}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:required')];}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc("Specifies the value of this input.")];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement')];},d:['ceylon.html','FormElement']};};
ex$.FormElement=FormElement;
function $init$FormElement(){
if(FormElement.$$===undefined){
m$1.initTypeProto(FormElement,'ceylon.html::FormElement',$init$InlineElement(),$init$BaseElement());
(function(formElement$){
m$1.atr$(formElement$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:name')];},d:['ceylon.html','FormElement','$at','name']};});
m$1.atr$(formElement$,'autoFocus',function(){return this.autoFocus_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:autoFocus')];},d:['ceylon.html','FormElement','$at','autoFocus']};});
m$1.atr$(formElement$,'disabled',function(){return this.disabled_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:disabled')];},d:['ceylon.html','FormElement','$at','disabled']};});
m$1.atr$(formElement$,'form',function(){return this.form_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:form')];},d:['ceylon.html','FormElement','$at','form']};});
m$1.atr$(formElement$,'formNoValidate',function(){return this.formNoValidate_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:formNoValidate')];},d:['ceylon.html','FormElement','$at','formNoValidate']};});
m$1.atr$(formElement$,'readOnly',function(){return this.readOnly_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:readOnly')];},d:['ceylon.html','FormElement','$at','readOnly']};});
m$1.atr$(formElement$,'required',function(){return this.required_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:FormElement:$at:required')];},d:['ceylon.html','FormElement','$at','required']};});
m$1.atr$(formElement$,'$_valueOf',function(){return this.$_valueOf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,pa:1,an:function(){return[m$1.doc("Specifies the value of this input.")];},d:['ceylon.html','FormElement','$at','valueOf']};});
m$1.atr$(formElement$,'$wgimgr$1kq',function(){return this.$wgimgr$1kq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','id$9oitzu']};});
m$1.atr$(formElement$,'$wgimgr$1kr',function(){return this.$wgimgr$1kr_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:FormElement,d:['ceylon.html','FormElement','$at','classNames$aqf2b7']};});
m$1.atr$(formElement$,'$wgimgr$1ks',function(){return this.$wgimgr$1ks_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','style$absfuc']};});
m$1.atr$(formElement$,'$wgimgr$1kt',function(){return this.$wgimgr$1kt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','accessKey$lfxbtm']};});
m$1.atr$(formElement$,'$wgimgr$1ku',function(){return this.$wgimgr$1ku_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','contextMenu$qbsn5']};});
m$1.atr$(formElement$,'$wgimgr$1kv',function(){return this.$wgimgr$1kv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','dir$7i6m60']};});
m$1.atr$(formElement$,'$wgimgr$1kw',function(){return this.$wgimgr$1kw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','draggable$dfq8xk']};});
m$1.atr$(formElement$,'$wgimgr$1kx',function(){return this.$wgimgr$1kx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','dropZone$3k47uu']};});
m$1.atr$(formElement$,'$wgimgr$1ky',function(){return this.$wgimgr$1ky_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','inert$asylm3']};});
m$1.atr$(formElement$,'$wgimgr$1kz',function(){return this.$wgimgr$1kz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','hidden$elpcbn']};});
m$1.atr$(formElement$,'$wgimgr$1l0',function(){return this.$wgimgr$1l0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','lang$5r3wu7']};});
m$1.atr$(formElement$,'$wgimgr$1l1',function(){return this.$wgimgr$1l1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','spellcheck$mitvq5']};});
m$1.atr$(formElement$,'$wgimgr$1l2',function(){return this.$wgimgr$1l2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','tabIndex$grn33s']};});
m$1.atr$(formElement$,'$wgimgr$1l3',function(){return this.$wgimgr$1l3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','title$31xdcr']};});
m$1.atr$(formElement$,'$wgimgr$1l4',function(){return this.$wgimgr$1l4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','translate$vsyjq9']};});
m$1.atr$(formElement$,'$wgimgr$1l5',function(){return this.$wgimgr$1l5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:FormElement,d:['ceylon.html','FormElement','$at','aria$ct0t5o']};});
m$1.atr$(formElement$,'$wgimgr$1l6',function(){return this.$wgimgr$1l6_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:FormElement,d:['ceylon.html','FormElement','$at','nonstandardAttributes$vj3yzo']};});
m$1.atr$(formElement$,'$wgimgr$1l7',function(){return this.$wgimgr$1l7_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:FormElement,d:['ceylon.html','FormElement','$at','data$b57r1f']};});
m$1.atr$(formElement$,'attributes',function(){
var formElement$=this;
var $1l8=AttributeSequenceBuilder();
$1l8.addAttribute("name",formElement$.name);
$1l8.addAttribute("value",formElement$.$_valueOf);
$1l8.addNamedBooleanAttribute("autofocus",formElement$.autoFocus);
$1l8.addNamedBooleanAttribute("disabled",formElement$.disabled);
$1l8.addNamedBooleanAttribute("formnovalidate",formElement$.formNoValidate);
$1l8.addAttribute("form",formElement$.form);
$1l8.addNamedBooleanAttribute("readonly",formElement$.readOnly);
$1l8.addNamedBooleanAttribute("required",formElement$.required);
$1l8.addAll(m$1.attrGetter(formElement$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
return $1l8.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:FormElement,pa:11,d:['ceylon.html','FormElement','$at','attributes']};});
})(FormElement.$$.prototype);
}
return FormElement;
}
ex$.$init$FormElement=$init$FormElement;
$init$FormElement();
function TextInput($wgimgr$1l9,$wgimgr$1la,$wgimgr$1lb,$wgimgr$1lc,$wgimgr$1ld,$wgimgr$1le,$wgimgr$1lf,$wgimgr$1lg,$wgimgr$1lh,$wgimgr$1li,$wgimgr$1lj,$wgimgr$1lk,$wgimgr$1ll,$wgimgr$1lm,$wgimgr$1ln,$wgimgr$1lo,$wgimgr$1lp,$wgimgr$1lq,$wgimgr$1lr,$wgimgr$1ls,$wgimgr$1lt,$wgimgr$1lu,$wgimgr$1lv,$wgimgr$1lw,$wgimgr$1lx,$wgimgr$1ly,$wgimgr$1lz,$wgimgr$1m0,$wgimgr$1m1,$wgimgr$1m2,$wgimgr$1m3,$wgimgr$1m4,$wgimgr$1m5,$wgimgr$1m6,$wgimgr$1m7,$wgimgr$1m8,$wgimgr$1m9,$wgimgr$1ma,textInput$){
$init$TextInput();
if(textInput$===undefined)textInput$=new TextInput.$$;
textInput$.$wgimgr$1l9_=$wgimgr$1l9;
if($wgimgr$1la===undefined){$wgimgr$1la=null;}
textInput$.$wgimgr$1la_=$wgimgr$1la;
if($wgimgr$1lb===undefined){$wgimgr$1lb=text();}
textInput$.$wgimgr$1lb_=$wgimgr$1lb;
if($wgimgr$1lc===undefined){$wgimgr$1lc=null;}
textInput$.$wgimgr$1lc_=$wgimgr$1lc;
if($wgimgr$1ld===undefined){$wgimgr$1ld=null;}
textInput$.$wgimgr$1ld_=$wgimgr$1ld;
if($wgimgr$1le===undefined){$wgimgr$1le=null;}
textInput$.$wgimgr$1le_=$wgimgr$1le;
if($wgimgr$1lf===undefined){$wgimgr$1lf=null;}
textInput$.$wgimgr$1lf_=$wgimgr$1lf;
if($wgimgr$1lg===undefined){$wgimgr$1lg=null;}
textInput$.$wgimgr$1lg_=$wgimgr$1lg;
if($wgimgr$1lh===undefined){$wgimgr$1lh=null;}
textInput$.$wgimgr$1lh_=$wgimgr$1lh;
if($wgimgr$1li===undefined){$wgimgr$1li=null;}
textInput$.$wgimgr$1li_=$wgimgr$1li;
if($wgimgr$1lj===undefined){$wgimgr$1lj=null;}
textInput$.$wgimgr$1lj_=$wgimgr$1lj;
if($wgimgr$1lk===undefined){$wgimgr$1lk=null;}
textInput$.$wgimgr$1lk_=$wgimgr$1lk;
if($wgimgr$1ll===undefined){$wgimgr$1ll=null;}
textInput$.$wgimgr$1ll_=$wgimgr$1ll;
if($wgimgr$1lm===undefined){$wgimgr$1lm=null;}
textInput$.$wgimgr$1lm_=$wgimgr$1lm;
if($wgimgr$1ln===undefined){$wgimgr$1ln=null;}
textInput$.$wgimgr$1ln_=$wgimgr$1ln;
if($wgimgr$1lo===undefined){$wgimgr$1lo=null;}
textInput$.$wgimgr$1lo_=$wgimgr$1lo;
if($wgimgr$1lp===undefined){$wgimgr$1lp=null;}
textInput$.$wgimgr$1lp_=$wgimgr$1lp;
if($wgimgr$1lq===undefined){$wgimgr$1lq=null;}
textInput$.$wgimgr$1lq_=$wgimgr$1lq;
if($wgimgr$1lr===undefined){$wgimgr$1lr=null;}
textInput$.$wgimgr$1lr_=$wgimgr$1lr;
if($wgimgr$1ls===undefined){$wgimgr$1ls=null;}
textInput$.$wgimgr$1ls_=$wgimgr$1ls;
if($wgimgr$1lt===undefined){$wgimgr$1lt=null;}
textInput$.$wgimgr$1lt_=$wgimgr$1lt;
if($wgimgr$1lu===undefined){$wgimgr$1lu=m$1.empty();}
textInput$.$wgimgr$1lu_=$wgimgr$1lu;
if($wgimgr$1lv===undefined){$wgimgr$1lv=null;}
textInput$.$wgimgr$1lv_=$wgimgr$1lv;
if($wgimgr$1lw===undefined){$wgimgr$1lw=null;}
textInput$.$wgimgr$1lw_=$wgimgr$1lw;
if($wgimgr$1lx===undefined){$wgimgr$1lx=null;}
textInput$.$wgimgr$1lx_=$wgimgr$1lx;
if($wgimgr$1ly===undefined){$wgimgr$1ly=null;}
textInput$.$wgimgr$1ly_=$wgimgr$1ly;
if($wgimgr$1lz===undefined){$wgimgr$1lz=null;}
textInput$.$wgimgr$1lz_=$wgimgr$1lz;
if($wgimgr$1m0===undefined){$wgimgr$1m0=null;}
textInput$.$wgimgr$1m0_=$wgimgr$1m0;
if($wgimgr$1m1===undefined){$wgimgr$1m1=null;}
textInput$.$wgimgr$1m1_=$wgimgr$1m1;
if($wgimgr$1m2===undefined){$wgimgr$1m2=null;}
textInput$.$wgimgr$1m2_=$wgimgr$1m2;
if($wgimgr$1m3===undefined){$wgimgr$1m3=null;}
textInput$.$wgimgr$1m3_=$wgimgr$1m3;
if($wgimgr$1m4===undefined){$wgimgr$1m4=null;}
textInput$.$wgimgr$1m4_=$wgimgr$1m4;
if($wgimgr$1m5===undefined){$wgimgr$1m5=null;}
textInput$.$wgimgr$1m5_=$wgimgr$1m5;
if($wgimgr$1m6===undefined){$wgimgr$1m6=null;}
textInput$.$wgimgr$1m6_=$wgimgr$1m6;
if($wgimgr$1m7===undefined){$wgimgr$1m7=null;}
textInput$.$wgimgr$1m7_=$wgimgr$1m7;
if($wgimgr$1m8===undefined){$wgimgr$1m8=null;}
textInput$.$wgimgr$1m8_=$wgimgr$1m8;
if($wgimgr$1m9===undefined){$wgimgr$1m9=m$1.empty();}
textInput$.$wgimgr$1m9_=$wgimgr$1m9;
if($wgimgr$1ma===undefined){$wgimgr$1ma=m$1.empty();}
textInput$.$wgimgr$1ma_=$wgimgr$1ma;
Input($wgimgr$1l9,textInput$.$wgimgr$1lb,$wgimgr$1lc,$wgimgr$1ld,$wgimgr$1le,null,$wgimgr$1lf,$wgimgr$1lg,$wgimgr$1lh,null,null,null,null,$wgimgr$1li,$wgimgr$1lj,$wgimgr$1lk,$wgimgr$1ll,$wgimgr$1lm,null,null,$wgimgr$1ln,$wgimgr$1lo,$wgimgr$1lp,$wgimgr$1lq,$wgimgr$1lr,$wgimgr$1ls,null,$wgimgr$1la,null,null,null,null,$wgimgr$1lt,$wgimgr$1lu,$wgimgr$1lv,$wgimgr$1lw,$wgimgr$1lx,$wgimgr$1ly,$wgimgr$1lz,$wgimgr$1m0,$wgimgr$1m1,$wgimgr$1m2,$wgimgr$1m3,$wgimgr$1m4,$wgimgr$1m5,$wgimgr$1m6,$wgimgr$1m7,$wgimgr$1m8,$wgimgr$1m9,$wgimgr$1ma,textInput$);
m$1.asrt$((m$1.sarg$(function($1mb){switch($1mb){case 0:return text();case 1:return password();case 2:return email();case 3:return url();case 4:return searchInput();}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:$init$text()},{t:$init$password()},{t:$init$email()},{t:$init$url()},{t:$init$searchInput()}]),Absent$Iterable:{t:m$1.Nothing}}).contains(textInput$.$wgimgr$1lb)),"Only text types are accepted: text, password, email, url, search: \'type in {text, password, email, url, searchInput}\' at FormInputs.ceylon (33:11-33:61)",'32:4-33:62','FormInputs.ceylon');
return textInput$;
}
TextInput.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Input},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'type',mt:'prm',def:1,$t:{t:InputType}},{nm:'accept',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'autoComplete',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dirName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'inputMode',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]}},{nm:'list',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'maxLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'minLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'multiple',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'pattern',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'placeholder',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'size',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],pa:1,d:['ceylon.html','TextInput']};};
ex$.TextInput=TextInput;
function $init$TextInput(){
if(TextInput.$$===undefined){
m$1.initTypeProto(TextInput,'ceylon.html::TextInput',$init$Input());
(function(textInput$){
m$1.atr$(textInput$,'$wgimgr$1l9',function(){return this.$wgimgr$1l9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TextInput,d:['ceylon.html','TextInput','$at','name$gx8vp9']};});
m$1.atr$(textInput$,'$wgimgr$1la',function(){return this.$wgimgr$1la_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','valueOf$yul8fc']};});
m$1.atr$(textInput$,'$wgimgr$1lb',function(){return this.$wgimgr$1lb_;},undefined,function(){return{mod:$CCMM$,$t:{t:InputType},$cont:TextInput,d:['ceylon.html','TextInput','$at','type$ccok2u']};});
m$1.atr$(textInput$,'$wgimgr$1lc',function(){return this.$wgimgr$1lc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','accept$2hc1s8']};});
m$1.atr$(textInput$,'$wgimgr$1ld',function(){return this.$wgimgr$1ld_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','autoComplete$e6p9fc']};});
m$1.atr$(textInput$,'$wgimgr$1le',function(){return this.$wgimgr$1le_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','autoFocus$dlq2bz']};});
m$1.atr$(textInput$,'$wgimgr$1lf',function(){return this.$wgimgr$1lf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','dirName$4s9n14']};});
m$1.atr$(textInput$,'$wgimgr$1lg',function(){return this.$wgimgr$1lg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','disabled$3dcnrg']};});
m$1.atr$(textInput$,'$wgimgr$1lh',function(){return this.$wgimgr$1lh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','form$m0eg18']};});
m$1.atr$(textInput$,'$wgimgr$1li',function(){return this.$wgimgr$1li_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','formNoValidate$v84iwd']};});
m$1.atr$(textInput$,'$wgimgr$1lj',function(){return this.$wgimgr$1lj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','inputMode$ksf1sb']};});
m$1.atr$(textInput$,'$wgimgr$1lk',function(){return this.$wgimgr$1lk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','list$i3dof6']};});
m$1.atr$(textInput$,'$wgimgr$1ll',function(){return this.$wgimgr$1ll_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','maxLength$un9q16']};});
m$1.atr$(textInput$,'$wgimgr$1lm',function(){return this.$wgimgr$1lm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','minLength$ohk794']};});
m$1.atr$(textInput$,'$wgimgr$1ln',function(){return this.$wgimgr$1ln_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','multiple$6hrwlc']};});
m$1.atr$(textInput$,'$wgimgr$1lo',function(){return this.$wgimgr$1lo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','pattern$xdc3wg']};});
m$1.atr$(textInput$,'$wgimgr$1lp',function(){return this.$wgimgr$1lp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','placeholder$qm0pij']};});
m$1.atr$(textInput$,'$wgimgr$1lq',function(){return this.$wgimgr$1lq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','readOnly$89nvpe']};});
m$1.atr$(textInput$,'$wgimgr$1lr',function(){return this.$wgimgr$1lr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','required$qnajjr']};});
m$1.atr$(textInput$,'$wgimgr$1ls',function(){return this.$wgimgr$1ls_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','size$dd8rqv']};});
m$1.atr$(textInput$,'$wgimgr$1lt',function(){return this.$wgimgr$1lt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','id$m77431']};});
m$1.atr$(textInput$,'$wgimgr$1lu',function(){return this.$wgimgr$1lu_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:TextInput,d:['ceylon.html','TextInput','$at','classNames$1s97s0']};});
m$1.atr$(textInput$,'$wgimgr$1lv',function(){return this.$wgimgr$1lv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','style$mugpxj']};});
m$1.atr$(textInput$,'$wgimgr$1lw',function(){return this.$wgimgr$1lw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','accessKey$xyllwt']};});
m$1.atr$(textInput$,'$wgimgr$1lx',function(){return this.$wgimgr$1lx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','contextMenu$bschg2']};});
m$1.atr$(textInput$,'$wgimgr$1ly',function(){return this.$wgimgr$1ly_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','dir$k0uw97']};});
m$1.atr$(textInput$,'$wgimgr$1lz',function(){return this.$wgimgr$1lz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','draggable$pyej0r']};});
m$1.atr$(textInput$,'$wgimgr$1m0',function(){return this.$wgimgr$1m0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','dropZone$8yk28d']};});
m$1.atr$(textInput$,'$wgimgr$1m1',function(){return this.$wgimgr$1m1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','inert$nbmvpa']};});
m$1.atr$(textInput$,'$wgimgr$1m2',function(){return this.$wgimgr$1m2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','hidden$r4dmeu']};});
m$1.atr$(textInput$,'$wgimgr$1m3',function(){return this.$wgimgr$1m3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','lang$i9s6xe']};});
m$1.atr$(textInput$,'$wgimgr$1m4',function(){return this.$wgimgr$1m4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','spellcheck$z1i5tc']};});
m$1.atr$(textInput$,'$wgimgr$1m5',function(){return this.$wgimgr$1m5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','tabIndex$48yt0l']};});
m$1.atr$(textInput$,'$wgimgr$1m6',function(){return this.$wgimgr$1m6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','title$9gqwqg']};});
m$1.atr$(textInput$,'$wgimgr$1m7',function(){return this.$wgimgr$1m7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','translate$jaa9n2']};});
m$1.atr$(textInput$,'$wgimgr$1m8',function(){return this.$wgimgr$1m8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:TextInput,d:['ceylon.html','TextInput','$at','aria$pbp38v']};});
m$1.atr$(textInput$,'$wgimgr$1m9',function(){return this.$wgimgr$1m9_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:TextInput,d:['ceylon.html','TextInput','$at','nonstandardAttributes$qzbsw9']};});
m$1.atr$(textInput$,'$wgimgr$1ma',function(){return this.$wgimgr$1ma_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:TextInput,d:['ceylon.html','TextInput','$at','data$nnw14m']};});
})(TextInput.$$.prototype);
}
return TextInput;
}
ex$.$init$TextInput=$init$TextInput;
$init$TextInput();
function HiddenInput($wgimgr$1mc,$wgimgr$1md,$wgimgr$1me,$wgimgr$1mf,$wgimgr$1mg,$wgimgr$1mh,$wgimgr$1mi,hiddenInput$){
$init$HiddenInput();
if(hiddenInput$===undefined)hiddenInput$=new HiddenInput.$$;
hiddenInput$.$wgimgr$1mc_=$wgimgr$1mc;
if($wgimgr$1md===undefined){$wgimgr$1md=null;}
hiddenInput$.$wgimgr$1md_=$wgimgr$1md;
if($wgimgr$1me===undefined){$wgimgr$1me=null;}
hiddenInput$.$wgimgr$1me_=$wgimgr$1me;
if($wgimgr$1mf===undefined){$wgimgr$1mf=null;}
hiddenInput$.$wgimgr$1mf_=$wgimgr$1mf;
if($wgimgr$1mg===undefined){$wgimgr$1mg=null;}
hiddenInput$.$wgimgr$1mg_=$wgimgr$1mg;
if($wgimgr$1mh===undefined){$wgimgr$1mh=m$1.empty();}
hiddenInput$.$wgimgr$1mh_=$wgimgr$1mh;
if($wgimgr$1mi===undefined){$wgimgr$1mi=m$1.empty();}
hiddenInput$.$wgimgr$1mi_=$wgimgr$1mi;
Input($wgimgr$1mc,hidden(),null,null,null,null,null,null,$wgimgr$1mf,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,$wgimgr$1md,null,null,null,null,$wgimgr$1me,m$1.empty(),null,null,null,null,null,null,null,null,null,null,null,null,null,$wgimgr$1mg,$wgimgr$1mh,$wgimgr$1mi,hiddenInput$);
return hiddenInput$;
}
HiddenInput.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Input},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],pa:1,d:['ceylon.html','HiddenInput']};};
ex$.HiddenInput=HiddenInput;
function $init$HiddenInput(){
if(HiddenInput.$$===undefined){
m$1.initTypeProto(HiddenInput,'ceylon.html::HiddenInput',$init$Input());
(function(hiddenInput$){
m$1.atr$(hiddenInput$,'$wgimgr$1mc',function(){return this.$wgimgr$1mc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','name$hms8zm']};});
m$1.atr$(hiddenInput$,'$wgimgr$1md',function(){return this.$wgimgr$1md_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','valueOf$zgzg9f']};});
m$1.atr$(hiddenInput$,'$wgimgr$1me',function(){return this.$wgimgr$1me_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','id$mwqhde']};});
m$1.atr$(hiddenInput$,'$wgimgr$1mf',function(){return this.$wgimgr$1mf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','form$mpxtbl']};});
m$1.atr$(hiddenInput$,'$wgimgr$1mg',function(){return this.$wgimgr$1mg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','aria$q18gj8']};});
m$1.atr$(hiddenInput$,'$wgimgr$1mh',function(){return this.$wgimgr$1mh_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','nonstandardAttributes$q9sflw']};});
m$1.atr$(hiddenInput$,'$wgimgr$1mi',function(){return this.$wgimgr$1mi_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:HiddenInput,d:['ceylon.html','HiddenInput','$at','data$odfeez']};});
})(HiddenInput.$$.prototype);
}
return HiddenInput;
}
ex$.$init$HiddenInput=$init$HiddenInput;
$init$HiddenInput();
function PasswordInput($wgimgr$1mj,$wgimgr$1mk,$wgimgr$1ml,$wgimgr$1mm,$wgimgr$1mn,$wgimgr$1mo,$wgimgr$1mp,$wgimgr$1mq,$wgimgr$1mr,$wgimgr$1ms,$wgimgr$1mt,$wgimgr$1mu,$wgimgr$1mv,$wgimgr$1mw,$wgimgr$1mx,$wgimgr$1my,$wgimgr$1mz,$wgimgr$1n0,$wgimgr$1n1,$wgimgr$1n2,$wgimgr$1n3,$wgimgr$1n4,$wgimgr$1n5,$wgimgr$1n6,$wgimgr$1n7,$wgimgr$1n8,$wgimgr$1n9,$wgimgr$1na,$wgimgr$1nb,$wgimgr$1nc,$wgimgr$1nd,$wgimgr$1ne,$wgimgr$1nf,$wgimgr$1ng,$wgimgr$1nh,$wgimgr$1ni,$wgimgr$1nj,passwordInput$){
$init$PasswordInput();
if(passwordInput$===undefined)passwordInput$=new PasswordInput.$$;
passwordInput$.$wgimgr$1mj_=$wgimgr$1mj;
if($wgimgr$1mk===undefined){$wgimgr$1mk=null;}
passwordInput$.$wgimgr$1mk_=$wgimgr$1mk;
if($wgimgr$1ml===undefined){$wgimgr$1ml=null;}
passwordInput$.$wgimgr$1ml_=$wgimgr$1ml;
if($wgimgr$1mm===undefined){$wgimgr$1mm=null;}
passwordInput$.$wgimgr$1mm_=$wgimgr$1mm;
if($wgimgr$1mn===undefined){$wgimgr$1mn=null;}
passwordInput$.$wgimgr$1mn_=$wgimgr$1mn;
if($wgimgr$1mo===undefined){$wgimgr$1mo=null;}
passwordInput$.$wgimgr$1mo_=$wgimgr$1mo;
if($wgimgr$1mp===undefined){$wgimgr$1mp=null;}
passwordInput$.$wgimgr$1mp_=$wgimgr$1mp;
if($wgimgr$1mq===undefined){$wgimgr$1mq=null;}
passwordInput$.$wgimgr$1mq_=$wgimgr$1mq;
if($wgimgr$1mr===undefined){$wgimgr$1mr=null;}
passwordInput$.$wgimgr$1mr_=$wgimgr$1mr;
if($wgimgr$1ms===undefined){$wgimgr$1ms=null;}
passwordInput$.$wgimgr$1ms_=$wgimgr$1ms;
if($wgimgr$1mt===undefined){$wgimgr$1mt=null;}
passwordInput$.$wgimgr$1mt_=$wgimgr$1mt;
if($wgimgr$1mu===undefined){$wgimgr$1mu=null;}
passwordInput$.$wgimgr$1mu_=$wgimgr$1mu;
if($wgimgr$1mv===undefined){$wgimgr$1mv=null;}
passwordInput$.$wgimgr$1mv_=$wgimgr$1mv;
if($wgimgr$1mw===undefined){$wgimgr$1mw=null;}
passwordInput$.$wgimgr$1mw_=$wgimgr$1mw;
if($wgimgr$1mx===undefined){$wgimgr$1mx=null;}
passwordInput$.$wgimgr$1mx_=$wgimgr$1mx;
if($wgimgr$1my===undefined){$wgimgr$1my=null;}
passwordInput$.$wgimgr$1my_=$wgimgr$1my;
if($wgimgr$1mz===undefined){$wgimgr$1mz=null;}
passwordInput$.$wgimgr$1mz_=$wgimgr$1mz;
if($wgimgr$1n0===undefined){$wgimgr$1n0=null;}
passwordInput$.$wgimgr$1n0_=$wgimgr$1n0;
if($wgimgr$1n1===undefined){$wgimgr$1n1=null;}
passwordInput$.$wgimgr$1n1_=$wgimgr$1n1;
if($wgimgr$1n2===undefined){$wgimgr$1n2=null;}
passwordInput$.$wgimgr$1n2_=$wgimgr$1n2;
if($wgimgr$1n3===undefined){$wgimgr$1n3=m$1.empty();}
passwordInput$.$wgimgr$1n3_=$wgimgr$1n3;
if($wgimgr$1n4===undefined){$wgimgr$1n4=null;}
passwordInput$.$wgimgr$1n4_=$wgimgr$1n4;
if($wgimgr$1n5===undefined){$wgimgr$1n5=null;}
passwordInput$.$wgimgr$1n5_=$wgimgr$1n5;
if($wgimgr$1n6===undefined){$wgimgr$1n6=null;}
passwordInput$.$wgimgr$1n6_=$wgimgr$1n6;
if($wgimgr$1n7===undefined){$wgimgr$1n7=null;}
passwordInput$.$wgimgr$1n7_=$wgimgr$1n7;
if($wgimgr$1n8===undefined){$wgimgr$1n8=null;}
passwordInput$.$wgimgr$1n8_=$wgimgr$1n8;
if($wgimgr$1n9===undefined){$wgimgr$1n9=null;}
passwordInput$.$wgimgr$1n9_=$wgimgr$1n9;
if($wgimgr$1na===undefined){$wgimgr$1na=null;}
passwordInput$.$wgimgr$1na_=$wgimgr$1na;
if($wgimgr$1nb===undefined){$wgimgr$1nb=null;}
passwordInput$.$wgimgr$1nb_=$wgimgr$1nb;
if($wgimgr$1nc===undefined){$wgimgr$1nc=null;}
passwordInput$.$wgimgr$1nc_=$wgimgr$1nc;
if($wgimgr$1nd===undefined){$wgimgr$1nd=null;}
passwordInput$.$wgimgr$1nd_=$wgimgr$1nd;
if($wgimgr$1ne===undefined){$wgimgr$1ne=null;}
passwordInput$.$wgimgr$1ne_=$wgimgr$1ne;
if($wgimgr$1nf===undefined){$wgimgr$1nf=null;}
passwordInput$.$wgimgr$1nf_=$wgimgr$1nf;
if($wgimgr$1ng===undefined){$wgimgr$1ng=null;}
passwordInput$.$wgimgr$1ng_=$wgimgr$1ng;
if($wgimgr$1nh===undefined){$wgimgr$1nh=null;}
passwordInput$.$wgimgr$1nh_=$wgimgr$1nh;
if($wgimgr$1ni===undefined){$wgimgr$1ni=m$1.empty();}
passwordInput$.$wgimgr$1ni_=$wgimgr$1ni;
if($wgimgr$1nj===undefined){$wgimgr$1nj=m$1.empty();}
passwordInput$.$wgimgr$1nj_=$wgimgr$1nj;
Input($wgimgr$1mj,password(),$wgimgr$1ml,$wgimgr$1mm,$wgimgr$1mn,null,$wgimgr$1mo,$wgimgr$1mp,$wgimgr$1mq,null,null,null,null,$wgimgr$1mr,$wgimgr$1ms,$wgimgr$1mt,$wgimgr$1mu,$wgimgr$1mv,null,null,$wgimgr$1mw,$wgimgr$1mx,$wgimgr$1my,$wgimgr$1mz,$wgimgr$1n0,$wgimgr$1n1,null,$wgimgr$1mk,null,null,null,null,$wgimgr$1n2,$wgimgr$1n3,$wgimgr$1n4,$wgimgr$1n5,$wgimgr$1n6,$wgimgr$1n7,$wgimgr$1n8,$wgimgr$1n9,$wgimgr$1na,$wgimgr$1nb,$wgimgr$1nc,$wgimgr$1nd,$wgimgr$1ne,$wgimgr$1nf,$wgimgr$1ng,$wgimgr$1nh,$wgimgr$1ni,$wgimgr$1nj,passwordInput$);
return passwordInput$;
}
PasswordInput.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Input},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accept',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'autoComplete',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dirName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'inputMode',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]}},{nm:'list',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'maxLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'minLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'multiple',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'pattern',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'placeholder',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'size',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],pa:1,d:['ceylon.html','PasswordInput']};};
ex$.PasswordInput=PasswordInput;
function $init$PasswordInput(){
if(PasswordInput.$$===undefined){
m$1.initTypeProto(PasswordInput,'ceylon.html::PasswordInput',$init$Input());
(function(passwordInput$){
m$1.atr$(passwordInput$,'$wgimgr$1mj',function(){return this.$wgimgr$1mj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','name$vvkaaj']};});
m$1.atr$(passwordInput$,'$wgimgr$1mk',function(){return this.$wgimgr$1mk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','valueOf$l87eyi']};});
m$1.atr$(passwordInput$,'$wgimgr$1ml',function(){return this.$wgimgr$1ml_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','accept$hfngdi']};});
m$1.atr$(passwordInput$,'$wgimgr$1mm',function(){return this.$wgimgr$1mm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','autoComplete$rm55y']};});
m$1.atr$(passwordInput$,'$wgimgr$1mn',function(){return this.$wgimgr$1mn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','autoFocus$sk1gx9']};});
m$1.atr$(passwordInput$,'$wgimgr$1mo',function(){return this.$wgimgr$1mo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','dirName$jql1me']};});
m$1.atr$(passwordInput$,'$wgimgr$1mp',function(){return this.$wgimgr$1mp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','disabled$bkyqtu']};});
m$1.atr$(passwordInput$,'$wgimgr$1mq',function(){return this.$wgimgr$1mq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','form$y2e7cm']};});
m$1.atr$(passwordInput$,'$wgimgr$1mr',function(){return this.$wgimgr$1mr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','formNoValidate$ouo4hh']};});
m$1.atr$(passwordInput$,'$wgimgr$1ms',function(){return this.$wgimgr$1ms_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','inputMode$zadllj']};});
m$1.atr$(passwordInput$,'$wgimgr$1mt',function(){return this.$wgimgr$1mt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','list$x1p30g']};});
m$1.atr$(passwordInput$,'$wgimgr$1mu',function(){return this.$wgimgr$1mu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','maxLength$foybfw']};});
m$1.atr$(passwordInput$,'$wgimgr$1mv',function(){return this.$wgimgr$1mv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','minLength$vl8g4q']};});
m$1.atr$(passwordInput$,'$wgimgr$1mw',function(){return this.$wgimgr$1mw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','multiple$8gjhzy']};});
m$1.atr$(passwordInput$,'$wgimgr$1mx',function(){return this.$wgimgr$1mx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','pattern$mpgjhe']};});
m$1.atr$(passwordInput$,'$wgimgr$1my',function(){return this.$wgimgr$1my_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','placeholder$bnpax9']};});
m$1.atr$(passwordInput$,'$wgimgr$1mz',function(){return this.$wgimgr$1mz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','readOnly$6onivw']};});
m$1.atr$(passwordInput$,'$wgimgr$1n0',function(){return this.$wgimgr$1n0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','required$boz4yh']};});
m$1.atr$(passwordInput$,'$wgimgr$1n1',function(){return this.$wgimgr$1n1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','size$sbk6c5']};});
m$1.atr$(passwordInput$,'$wgimgr$1n2',function(){return this.$wgimgr$1n2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','id$xvljat']};});
m$1.atr$(passwordInput$,'$wgimgr$1n3',function(){return this.$wgimgr$1n3_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','classNames$gqkmda']};});
m$1.atr$(passwordInput$,'$wgimgr$1n4',function(){return this.$wgimgr$1n4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','style$x8bxgb']};});
m$1.atr$(passwordInput$,'$wgimgr$1n5',function(){return this.$wgimgr$1n5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','accessKey$m471h1']};});
m$1.atr$(passwordInput$,'$wgimgr$1n6',function(){return this.$wgimgr$1n6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','contextMenu$qqnw1c']};});
m$1.atr$(passwordInput$,'$wgimgr$1n7',function(){return this.$wgimgr$1n7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','dir$yz6auh']};});
m$1.atr$(passwordInput$,'$wgimgr$1n8',function(){return this.$wgimgr$1n8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','draggable$u4e4d3']};});
m$1.atr$(passwordInput$,'$wgimgr$1n9',function(){return this.$wgimgr$1n9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','dropZone$nwvgtn']};});
m$1.atr$(passwordInput$,'$wgimgr$1na',function(){return this.$wgimgr$1na_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','inert$wr5rok']};});
m$1.atr$(passwordInput$,'$wgimgr$1nb',function(){return this.$wgimgr$1nb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','hidden$syf0z0']};});
m$1.atr$(passwordInput$,'$wgimgr$1nc',function(){return this.$wgimgr$1nc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','lang$x83lio']};});
m$1.atr$(passwordInput$,'$wgimgr$1nd',function(){return this.$wgimgr$1nd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','spellcheck$l1ahki']};});
m$1.atr$(passwordInput$,'$wgimgr$1ne',function(){return this.$wgimgr$1ne_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','tabIndex$apclkp']};});
m$1.atr$(passwordInput$,'$wgimgr$1nf',function(){return this.$wgimgr$1nf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','title$of2bbq']};});
m$1.atr$(passwordInput$,'$wgimgr$1ng',function(){return this.$wgimgr$1ng_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','translate$4byv1s']};});
m$1.atr$(passwordInput$,'$wgimgr$1nh',function(){return this.$wgimgr$1nh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','aria$ur3k4z']};});
m$1.atr$(passwordInput$,'$wgimgr$1ni',function(){return this.$wgimgr$1ni_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','nonstandardAttributes$c10eaz']};});
m$1.atr$(passwordInput$,'$wgimgr$1nj',function(){return this.$wgimgr$1nj_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:PasswordInput,d:['ceylon.html','PasswordInput','$at','data$wewm98']};});
})(PasswordInput.$$.prototype);
}
return PasswordInput;
}
ex$.$init$PasswordInput=$init$PasswordInput;
$init$PasswordInput();
function HeadElements(){var $1nk=m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}]);$1nk.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.html','HeadElements']};};return $1nk;}
ex$.HeadElements=HeadElements;
function Head(title,$wgimgr$1nl,$wgimgr$1nm,head$){
$init$Head();
if(head$===undefined)head$=new Head.$$;
head$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])};
if(title===undefined){title="";}
head$.title_=title;
if($wgimgr$1nl===undefined){$wgimgr$1nl=null;}
head$.$wgimgr$1nl_=$wgimgr$1nl;
if($wgimgr$1nm===undefined){$wgimgr$1nm=m$1.empty();}
head$.$wgimgr$1nm_=$wgimgr$1nm;
ParentNode({Child$ParentNode:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])},head$);
Element($wgimgr$1nl,head$);
head$.tag_=Tag("head");
return head$;
}
Head.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'title',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Head:$at:title')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'headChildren',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[HeadElements(),{t:m$1.Null},{t:Snippet,a:{Result$Snippet:HeadElements()}}]},Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:ParentNode,a:{Child$ParentNode:HeadElements()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Head')];},d:['ceylon.html','Head']};};
ex$.Head=Head;
function $init$Head(){
if(Head.$$===undefined){
m$1.initTypeProto(Head,'ceylon.html::Head',$init$ParentNode(),$init$Element());
(function(head$){
m$1.atr$(head$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Head,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Head:$at:title')];},d:['ceylon.html','Head','$at','title']};});
m$1.atr$(head$,'$wgimgr$1nl',function(){return this.$wgimgr$1nl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Head,d:['ceylon.html','Head','$at','id$t1ymb2']};});
m$1.atr$(head$,'$wgimgr$1nm',function(){return this.$wgimgr$1nm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[HeadElements(),{t:m$1.Null},{t:Snippet,a:{Result$Snippet:HeadElements()}}]},Absent$Iterable:{t:m$1.Null}}},$cont:Head,d:['ceylon.html','Head','$at','headChildren$m2rosu']};});
m$1.atr$(head$,'children',function(){
var head$=this;
return m$1.concatenate([m$1.sarg$(function($1nn){switch($1nn){case 0:return Title(head$.title);}return m$1.finished();},undefined,{Element$Iterable:{t:Title},Absent$Iterable:{t:m$1.Nothing}}),head$.$wgimgr$1nm].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script},{t:m$1.Null},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])}}]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script},{t:m$1.Null},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])}}]),Absent$Iterable:{t:m$1.Null}}}])),{Element$concatenate:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script},{t:m$1.Null},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])}}])});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[HeadElements(),{t:m$1.Null},{t:Snippet,a:{Result$Snippet:HeadElements()}}]},Absent$Iterable:{t:m$1.Null}}},$cont:Head,pa:3,d:['ceylon.html','Head','$at','children']};});
m$1.atr$(head$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Head,pa:3,d:['ceylon.html','Head','$at','tag']};});
})(Head.$$.prototype);
}
return Head;
}
ex$.$init$Head=$init$Head;
$init$Head();
function Title($wgimgr$1no,title$){
$init$Title();
if(title$===undefined)title$=new Title.$$;
title$.$wgimgr$1no_=$wgimgr$1no;
TextNode(title$);
title$.$wgimgr$1np_=title$.$wgimgr$1no;
title$.tag_=Tag("title");
return title$;
}
Title.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'content',mt:'prm',$t:{t:m$1.$_String},an:function(){return[m$1.doc("The page title text.")];}}],sts:[{t:TextNode}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Title')];},d:['ceylon.html','Title']};};
ex$.Title=Title;
function $init$Title(){
if(Title.$$===undefined){
m$1.initTypeProto(Title,'ceylon.html::Title',m$1.Basic,$init$TextNode());
(function(title$){
m$1.atr$(title$,'$wgimgr$1no',function(){return this.$wgimgr$1no_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Title,an:function(){return[m$1.doc("The page title text.")];},d:['ceylon.html','Title','$at','content$6j7aj8']};});
m$1.atr$(title$,'text',function(){return this.$wgimgr$1np_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Title,pa:3,d:['ceylon.html','Title','$at','text']};});
m$1.atr$(title$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Title,pa:3,d:['ceylon.html','Title','$at','tag']};});
})(Title.$$.prototype);
}
return Title;
}
ex$.$init$Title=$init$Title;
$init$Title();
function Heading(text,$wgimgr$1nq,$wgimgr$1nr,$wgimgr$1ns,$wgimgr$1nt,$wgimgr$1nu,$wgimgr$1nv,$wgimgr$1nw,$wgimgr$1nx,$wgimgr$1ny,$wgimgr$1nz,$wgimgr$1o0,$wgimgr$1o1,$wgimgr$1o2,$wgimgr$1o3,$wgimgr$1o4,$wgimgr$1o5,$wgimgr$1o6,$wgimgr$1o7,children,heading$){
$init$Heading();
if(heading$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::Heading"),'?','?')
heading$.$$targs$$={Child$ParentNode:{t:InlineElement}};
heading$.$$targs$$={Other$Comparable:{t:Heading}};
if(text===undefined){text="";}
heading$.text_=text;
if($wgimgr$1nq===undefined){$wgimgr$1nq=null;}
heading$.$wgimgr$1nq_=$wgimgr$1nq;
if($wgimgr$1nr===undefined){$wgimgr$1nr=m$1.empty();}
heading$.$wgimgr$1nr_=$wgimgr$1nr;
if($wgimgr$1ns===undefined){$wgimgr$1ns=null;}
heading$.$wgimgr$1ns_=$wgimgr$1ns;
if($wgimgr$1nt===undefined){$wgimgr$1nt=null;}
heading$.$wgimgr$1nt_=$wgimgr$1nt;
if($wgimgr$1nu===undefined){$wgimgr$1nu=null;}
heading$.$wgimgr$1nu_=$wgimgr$1nu;
if($wgimgr$1nv===undefined){$wgimgr$1nv=null;}
heading$.$wgimgr$1nv_=$wgimgr$1nv;
if($wgimgr$1nw===undefined){$wgimgr$1nw=null;}
heading$.$wgimgr$1nw_=$wgimgr$1nw;
if($wgimgr$1nx===undefined){$wgimgr$1nx=null;}
heading$.$wgimgr$1nx_=$wgimgr$1nx;
if($wgimgr$1ny===undefined){$wgimgr$1ny=null;}
heading$.$wgimgr$1ny_=$wgimgr$1ny;
if($wgimgr$1nz===undefined){$wgimgr$1nz=null;}
heading$.$wgimgr$1nz_=$wgimgr$1nz;
if($wgimgr$1o0===undefined){$wgimgr$1o0=null;}
heading$.$wgimgr$1o0_=$wgimgr$1o0;
if($wgimgr$1o1===undefined){$wgimgr$1o1=null;}
heading$.$wgimgr$1o1_=$wgimgr$1o1;
if($wgimgr$1o2===undefined){$wgimgr$1o2=null;}
heading$.$wgimgr$1o2_=$wgimgr$1o2;
if($wgimgr$1o3===undefined){$wgimgr$1o3=null;}
heading$.$wgimgr$1o3_=$wgimgr$1o3;
if($wgimgr$1o4===undefined){$wgimgr$1o4=null;}
heading$.$wgimgr$1o4_=$wgimgr$1o4;
if($wgimgr$1o5===undefined){$wgimgr$1o5=null;}
heading$.$wgimgr$1o5_=$wgimgr$1o5;
if($wgimgr$1o6===undefined){$wgimgr$1o6=m$1.empty();}
heading$.$wgimgr$1o6_=$wgimgr$1o6;
if($wgimgr$1o7===undefined){$wgimgr$1o7=m$1.empty();}
heading$.$wgimgr$1o7_=$wgimgr$1o7;
if(children===undefined){children=m$1.empty();}
heading$.children_=children;
TextNode(heading$);
BlockElement(heading$);
ParentNode({Child$ParentNode:{t:InlineElement}},heading$);
m$1.Comparable({Other$Comparable:{t:Heading}},heading$);
BaseElement($wgimgr$1nq,$wgimgr$1nr,$wgimgr$1ns,$wgimgr$1nt,$wgimgr$1nu,$wgimgr$1nv,$wgimgr$1nw,$wgimgr$1nx,$wgimgr$1ny,$wgimgr$1nz,$wgimgr$1o0,$wgimgr$1o1,$wgimgr$1o2,$wgimgr$1o3,$wgimgr$1o4,$wgimgr$1o5,$wgimgr$1o6,$wgimgr$1o7,heading$);
return heading$;
}
Heading.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Heading}}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Heading'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),H1)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Heading']};};
ex$.Heading=Heading;
function $init$Heading(){
if(Heading.$$===undefined){
m$1.initTypeProto(Heading,'ceylon.html::Heading',$init$TextNode(),$init$BlockElement(),$init$ParentNode(),$init$BaseElement(),m$1.Comparable);
(function(heading$){
m$1.atr$(heading$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Heading,pa:3,d:['ceylon.html','Heading','$at','text']};});
m$1.atr$(heading$,'$wgimgr$1nq',function(){return this.$wgimgr$1nq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','id$94aw4g']};});
m$1.atr$(heading$,'$wgimgr$1nr',function(){return this.$wgimgr$1nr_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Heading,d:['ceylon.html','Heading','$at','classNames$ban06l']};});
m$1.atr$(heading$,'$wgimgr$1ns',function(){return this.$wgimgr$1ns_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','style$9rkhyy']};});
m$1.atr$(heading$,'$wgimgr$1nt',function(){return this.$wgimgr$1nt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','accessKey$kvpdy8']};});
m$1.atr$(heading$,'$wgimgr$1nu',function(){return this.$wgimgr$1nu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','contextMenu$1ajqij']};});
m$1.atr$(heading$,'$wgimgr$1nv',function(){return this.$wgimgr$1nv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Heading,d:['ceylon.html','Heading','$at','dir$6xyoam']};});
m$1.atr$(heading$,'$wgimgr$1nw',function(){return this.$wgimgr$1nw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Heading,d:['ceylon.html','Heading','$at','draggable$cvib26']};});
m$1.atr$(heading$,'$wgimgr$1nx',function(){return this.$wgimgr$1nx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Heading,d:['ceylon.html','Heading','$at','dropZone$44c5q8']};});
m$1.atr$(heading$,'$wgimgr$1ny',function(){return this.$wgimgr$1ny_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Heading,d:['ceylon.html','Heading','$at','inert$a8qnqp']};});
m$1.atr$(heading$,'$wgimgr$1nz',function(){return this.$wgimgr$1nz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Heading,d:['ceylon.html','Heading','$at','hidden$e1heg9']};});
m$1.atr$(heading$,'$wgimgr$1o0',function(){return this.$wgimgr$1o0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','lang$56vyyt']};});
m$1.atr$(heading$,'$wgimgr$1o1',function(){return this.$wgimgr$1o1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Heading,d:['ceylon.html','Heading','$at','spellcheck$lylxur']};});
m$1.atr$(heading$,'$wgimgr$1o2',function(){return this.$wgimgr$1o2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Heading,d:['ceylon.html','Heading','$at','tabIndex$hbv0z6']};});
m$1.atr$(heading$,'$wgimgr$1o3',function(){return this.$wgimgr$1o3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Heading,d:['ceylon.html','Heading','$at','title$3m5b85']};});
m$1.atr$(heading$,'$wgimgr$1o4',function(){return this.$wgimgr$1o4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Heading,d:['ceylon.html','Heading','$at','translate$wd6hln']};});
m$1.atr$(heading$,'$wgimgr$1o5',function(){return this.$wgimgr$1o5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Heading,d:['ceylon.html','Heading','$at','aria$c8svaa']};});
m$1.atr$(heading$,'$wgimgr$1o6',function(){return this.$wgimgr$1o6_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Heading,d:['ceylon.html','Heading','$at','nonstandardAttributes$uyw14a']};});
m$1.atr$(heading$,'$wgimgr$1o7',function(){return this.$wgimgr$1o7_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Heading,d:['ceylon.html','Heading','$at','data$akzt61']};});
m$1.atr$(heading$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Heading,pa:3,d:['ceylon.html','Heading','$at','children']};});
heading$.$prop$getLevel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Heading,pa:5,d:['ceylon.html','Heading','$at','level']};}};
m$1.atr$(heading$,'tag',function(){
var heading$=this;
return Tag("h".plus(heading$.level.string).plus(""));
},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Heading,pa:3,d:['ceylon.html','Heading','$at','tag']};});
heading$.compare=function($1o8){var heading$=this;
return heading$.level.compare($1o8.level);};
heading$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Heading}}],$cont:Heading,pa:3,d:['ceylon.html','Heading','$m','compare']};};
})(Heading.$$.prototype);
}
return Heading;
}
ex$.$init$Heading=$init$Heading;
$init$Heading();
function H1($wgimgr$1o9,$wgimgr$1oa,$wgimgr$1ob,$wgimgr$1oc,$wgimgr$1od,$wgimgr$1oe,$wgimgr$1of,$wgimgr$1og,$wgimgr$1oh,$wgimgr$1oi,$wgimgr$1oj,$wgimgr$1ok,$wgimgr$1ol,$wgimgr$1om,$wgimgr$1on,$wgimgr$1oo,$wgimgr$1op,$wgimgr$1oq,$wgimgr$1or,$wgimgr$1os,h1$){
$init$H1();
if(h1$===undefined)h1$=new H1.$$;
if($wgimgr$1o9===undefined){$wgimgr$1o9="";}
h1$.$wgimgr$1o9_=$wgimgr$1o9;
if($wgimgr$1oa===undefined){$wgimgr$1oa=null;}
h1$.$wgimgr$1oa_=$wgimgr$1oa;
if($wgimgr$1ob===undefined){$wgimgr$1ob=m$1.empty();}
h1$.$wgimgr$1ob_=$wgimgr$1ob;
if($wgimgr$1oc===undefined){$wgimgr$1oc=null;}
h1$.$wgimgr$1oc_=$wgimgr$1oc;
if($wgimgr$1od===undefined){$wgimgr$1od=null;}
h1$.$wgimgr$1od_=$wgimgr$1od;
if($wgimgr$1oe===undefined){$wgimgr$1oe=null;}
h1$.$wgimgr$1oe_=$wgimgr$1oe;
if($wgimgr$1of===undefined){$wgimgr$1of=null;}
h1$.$wgimgr$1of_=$wgimgr$1of;
if($wgimgr$1og===undefined){$wgimgr$1og=null;}
h1$.$wgimgr$1og_=$wgimgr$1og;
if($wgimgr$1oh===undefined){$wgimgr$1oh=null;}
h1$.$wgimgr$1oh_=$wgimgr$1oh;
if($wgimgr$1oi===undefined){$wgimgr$1oi=null;}
h1$.$wgimgr$1oi_=$wgimgr$1oi;
if($wgimgr$1oj===undefined){$wgimgr$1oj=null;}
h1$.$wgimgr$1oj_=$wgimgr$1oj;
if($wgimgr$1ok===undefined){$wgimgr$1ok=null;}
h1$.$wgimgr$1ok_=$wgimgr$1ok;
if($wgimgr$1ol===undefined){$wgimgr$1ol=null;}
h1$.$wgimgr$1ol_=$wgimgr$1ol;
if($wgimgr$1om===undefined){$wgimgr$1om=null;}
h1$.$wgimgr$1om_=$wgimgr$1om;
if($wgimgr$1on===undefined){$wgimgr$1on=null;}
h1$.$wgimgr$1on_=$wgimgr$1on;
if($wgimgr$1oo===undefined){$wgimgr$1oo=null;}
h1$.$wgimgr$1oo_=$wgimgr$1oo;
if($wgimgr$1op===undefined){$wgimgr$1op=null;}
h1$.$wgimgr$1op_=$wgimgr$1op;
if($wgimgr$1oq===undefined){$wgimgr$1oq=m$1.empty();}
h1$.$wgimgr$1oq_=$wgimgr$1oq;
if($wgimgr$1or===undefined){$wgimgr$1or=m$1.empty();}
h1$.$wgimgr$1or_=$wgimgr$1or;
if($wgimgr$1os===undefined){$wgimgr$1os=m$1.empty();}
h1$.$wgimgr$1os_=$wgimgr$1os;
Heading($wgimgr$1o9,$wgimgr$1oa,$wgimgr$1ob,$wgimgr$1oc,$wgimgr$1od,$wgimgr$1oe,$wgimgr$1of,$wgimgr$1og,$wgimgr$1oh,$wgimgr$1oi,$wgimgr$1oj,$wgimgr$1ok,$wgimgr$1ol,$wgimgr$1om,$wgimgr$1on,$wgimgr$1oo,$wgimgr$1op,$wgimgr$1oq,$wgimgr$1or,$wgimgr$1os,h1$);
h1$.level_=(1);
return h1$;
}
H1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H1')];},d:['ceylon.html','H1']};};
ex$.H1=H1;
function $init$H1(){
if(H1.$$===undefined){
m$1.initTypeProto(H1,'ceylon.html::H1',$init$Heading());
(function(h1$){
m$1.atr$(h1$,'$wgimgr$1o9',function(){return this.$wgimgr$1o9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H1,d:['ceylon.html','H1','$at','text$18j2ov']};});
m$1.atr$(h1$,'$wgimgr$1oa',function(){return this.$wgimgr$1oa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','id$anldwh']};});
m$1.atr$(h1$,'$wgimgr$1ob',function(){return this.$wgimgr$1ob_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H1,d:['ceylon.html','H1','$at','classNames$9rciek']};});
m$1.atr$(h1$,'$wgimgr$1oc',function(){return this.$wgimgr$1oc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','style$bauzqz']};});
m$1.atr$(h1$,'$wgimgr$1od',function(){return this.$wgimgr$1od_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','accessKey$mezvq9']};});
m$1.atr$(h1$,'$wgimgr$1oe',function(){return this.$wgimgr$1oe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','contextMenu$8qr9i']};});
m$1.atr$(h1$,'$wgimgr$1of',function(){return this.$wgimgr$1of_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H1,d:['ceylon.html','H1','$at','dir$8h962n']};});
m$1.atr$(h1$,'$wgimgr$1og',function(){return this.$wgimgr$1og_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H1,d:['ceylon.html','H1','$at','draggable$eessu7']};});
m$1.atr$(h1$,'$wgimgr$1oh',function(){return this.$wgimgr$1oh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H1,d:['ceylon.html','H1','$at','dropZone$2l1ny7']};});
m$1.atr$(h1$,'$wgimgr$1oi',function(){return this.$wgimgr$1oi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H1,d:['ceylon.html','H1','$at','inert$bs15iq']};});
m$1.atr$(h1$,'$wgimgr$1oj',function(){return this.$wgimgr$1oj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H1,d:['ceylon.html','H1','$at','hidden$fkrw8a']};});
m$1.atr$(h1$,'$wgimgr$1ok',function(){return this.$wgimgr$1ok_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','lang$6q6gqu']};});
m$1.atr$(h1$,'$wgimgr$1ol',function(){return this.$wgimgr$1ol_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H1,d:['ceylon.html','H1','$at','spellcheck$nhwfms']};});
m$1.atr$(h1$,'$wgimgr$1om',function(){return this.$wgimgr$1om_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H1,d:['ceylon.html','H1','$at','tabIndex$fskj75']};});
m$1.atr$(h1$,'$wgimgr$1on',function(){return this.$wgimgr$1on_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H1,d:['ceylon.html','H1','$at','title$22utg4']};});
m$1.atr$(h1$,'$wgimgr$1oo',function(){return this.$wgimgr$1oo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H1,d:['ceylon.html','H1','$at','translate$utvztm']};});
m$1.atr$(h1$,'$wgimgr$1op',function(){return this.$wgimgr$1op_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H1,d:['ceylon.html','H1','$at','aria$ds3d2b']};});
m$1.atr$(h1$,'$wgimgr$1oq',function(){return this.$wgimgr$1oq_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H1,d:['ceylon.html','H1','$at','nonstandardAttributes$wi6iwb']};});
m$1.atr$(h1$,'$wgimgr$1or',function(){return this.$wgimgr$1or_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H1,d:['ceylon.html','H1','$at','data$c4aay2']};});
m$1.atr$(h1$,'$wgimgr$1os',function(){return this.$wgimgr$1os_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H1,d:['ceylon.html','H1','$at','children$d52vkt']};});
m$1.atr$(h1$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H1,pa:3,d:['ceylon.html','H1','$at','level']};});
})(H1.$$.prototype);
}
return H1;
}
ex$.$init$H1=$init$H1;
$init$H1();
function H2($wgimgr$1ot,$wgimgr$1ou,$wgimgr$1ov,$wgimgr$1ow,$wgimgr$1ox,$wgimgr$1oy,$wgimgr$1oz,$wgimgr$1p0,$wgimgr$1p1,$wgimgr$1p2,$wgimgr$1p3,$wgimgr$1p4,$wgimgr$1p5,$wgimgr$1p6,$wgimgr$1p7,$wgimgr$1p8,$wgimgr$1p9,$wgimgr$1pa,$wgimgr$1pb,$wgimgr$1pc,h2$){
$init$H2();
if(h2$===undefined)h2$=new H2.$$;
if($wgimgr$1ot===undefined){$wgimgr$1ot="";}
h2$.$wgimgr$1ot_=$wgimgr$1ot;
if($wgimgr$1ou===undefined){$wgimgr$1ou=null;}
h2$.$wgimgr$1ou_=$wgimgr$1ou;
if($wgimgr$1ov===undefined){$wgimgr$1ov=m$1.empty();}
h2$.$wgimgr$1ov_=$wgimgr$1ov;
if($wgimgr$1ow===undefined){$wgimgr$1ow=null;}
h2$.$wgimgr$1ow_=$wgimgr$1ow;
if($wgimgr$1ox===undefined){$wgimgr$1ox=null;}
h2$.$wgimgr$1ox_=$wgimgr$1ox;
if($wgimgr$1oy===undefined){$wgimgr$1oy=null;}
h2$.$wgimgr$1oy_=$wgimgr$1oy;
if($wgimgr$1oz===undefined){$wgimgr$1oz=null;}
h2$.$wgimgr$1oz_=$wgimgr$1oz;
if($wgimgr$1p0===undefined){$wgimgr$1p0=null;}
h2$.$wgimgr$1p0_=$wgimgr$1p0;
if($wgimgr$1p1===undefined){$wgimgr$1p1=null;}
h2$.$wgimgr$1p1_=$wgimgr$1p1;
if($wgimgr$1p2===undefined){$wgimgr$1p2=null;}
h2$.$wgimgr$1p2_=$wgimgr$1p2;
if($wgimgr$1p3===undefined){$wgimgr$1p3=null;}
h2$.$wgimgr$1p3_=$wgimgr$1p3;
if($wgimgr$1p4===undefined){$wgimgr$1p4=null;}
h2$.$wgimgr$1p4_=$wgimgr$1p4;
if($wgimgr$1p5===undefined){$wgimgr$1p5=null;}
h2$.$wgimgr$1p5_=$wgimgr$1p5;
if($wgimgr$1p6===undefined){$wgimgr$1p6=null;}
h2$.$wgimgr$1p6_=$wgimgr$1p6;
if($wgimgr$1p7===undefined){$wgimgr$1p7=null;}
h2$.$wgimgr$1p7_=$wgimgr$1p7;
if($wgimgr$1p8===undefined){$wgimgr$1p8=null;}
h2$.$wgimgr$1p8_=$wgimgr$1p8;
if($wgimgr$1p9===undefined){$wgimgr$1p9=null;}
h2$.$wgimgr$1p9_=$wgimgr$1p9;
if($wgimgr$1pa===undefined){$wgimgr$1pa=m$1.empty();}
h2$.$wgimgr$1pa_=$wgimgr$1pa;
if($wgimgr$1pb===undefined){$wgimgr$1pb=m$1.empty();}
h2$.$wgimgr$1pb_=$wgimgr$1pb;
if($wgimgr$1pc===undefined){$wgimgr$1pc=m$1.empty();}
h2$.$wgimgr$1pc_=$wgimgr$1pc;
Heading($wgimgr$1ot,$wgimgr$1ou,$wgimgr$1ov,$wgimgr$1ow,$wgimgr$1ox,$wgimgr$1oy,$wgimgr$1oz,$wgimgr$1p0,$wgimgr$1p1,$wgimgr$1p2,$wgimgr$1p3,$wgimgr$1p4,$wgimgr$1p5,$wgimgr$1p6,$wgimgr$1p7,$wgimgr$1p8,$wgimgr$1p9,$wgimgr$1pa,$wgimgr$1pb,$wgimgr$1pc,h2$);
h2$.level_=(2);
return h2$;
}
H2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H2')];},d:['ceylon.html','H2']};};
ex$.H2=H2;
function $init$H2(){
if(H2.$$===undefined){
m$1.initTypeProto(H2,'ceylon.html::H2',$init$Heading());
(function(h2$){
m$1.atr$(h2$,'$wgimgr$1ot',function(){return this.$wgimgr$1ot_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H2,d:['ceylon.html','H2','$at','text$tu2phy']};});
m$1.atr$(h2$,'$wgimgr$1ou',function(){return this.$wgimgr$1ou_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','id$vrz19k']};});
m$1.atr$(h2$,'$wgimgr$1ov',function(){return this.$wgimgr$1ov_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H2,d:['ceylon.html','H2','$at','classNames$iu74ej']};});
m$1.atr$(h2$,'$wgimgr$1ow',function(){return this.$wgimgr$1ow_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','style$v4pff2']};});
m$1.atr$(h2$,'$wgimgr$1ox',function(){return this.$wgimgr$1ox_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','accessKey$k0kjfs']};});
m$1.atr$(h2$,'$wgimgr$1oy',function(){return this.$wgimgr$1oy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','contextMenu$suae2l']};});
m$1.atr$(h2$,'$wgimgr$1oz',function(){return this.$wgimgr$1oz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H2,d:['ceylon.html','H2','$at','dir$xyb93e']};});
m$1.atr$(h2$,'$wgimgr$1p0',function(){return this.$wgimgr$1p0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H2,d:['ceylon.html','H2','$at','draggable$s0rmbu']};});
m$1.atr$(h2$,'$wgimgr$1p1',function(){return this.$wgimgr$1p1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H2,d:['ceylon.html','H2','$at','dropZone$q0hyuw']};});
m$1.atr$(h2$,'$wgimgr$1p2',function(){return this.$wgimgr$1p2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H2,d:['ceylon.html','H2','$at','inert$unj9nb']};});
m$1.atr$(h2$,'$wgimgr$1p3',function(){return this.$wgimgr$1p3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H2,d:['ceylon.html','H2','$at','hidden$qusixr']};});
m$1.atr$(h2$,'$wgimgr$1p4',function(){return this.$wgimgr$1p4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','lang$zbq3jx']};});
m$1.atr$(h2$,'$wgimgr$1p5',function(){return this.$wgimgr$1p5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H2,d:['ceylon.html','H2','$at','spellcheck$ixnzj9']};});
m$1.atr$(h2$,'$wgimgr$1p6',function(){return this.$wgimgr$1p6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H2,d:['ceylon.html','H2','$at','tabIndex$csz3ly']};});
m$1.atr$(h2$,'$wgimgr$1p7',function(){return this.$wgimgr$1p7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H2,d:['ceylon.html','H2','$at','title$qiotcz']};});
m$1.atr$(h2$,'$wgimgr$1p8',function(){return this.$wgimgr$1p8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H2,d:['ceylon.html','H2','$at','translate$28cd0j']};});
m$1.atr$(h2$,'$wgimgr$1p9',function(){return this.$wgimgr$1p9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H2,d:['ceylon.html','H2','$at','aria$snh23q']};});
m$1.atr$(h2$,'$wgimgr$1pa',function(){return this.$wgimgr$1pa_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H2,d:['ceylon.html','H2','$at','nonstandardAttributes$9xdw9q']};});
m$1.atr$(h2$,'$wgimgr$1pb',function(){return this.$wgimgr$1pb_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H2,d:['ceylon.html','H2','$at','data$uba47z']};});
m$1.atr$(h2$,'$wgimgr$1pc',function(){return this.$wgimgr$1pc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H2,d:['ceylon.html','H2','$at','children$tahjl8']};});
m$1.atr$(h2$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H2,pa:3,d:['ceylon.html','H2','$at','level']};});
})(H2.$$.prototype);
}
return H2;
}
ex$.$init$H2=$init$H2;
$init$H2();
function H3($wgimgr$1pd,$wgimgr$1pe,$wgimgr$1pf,$wgimgr$1pg,$wgimgr$1ph,$wgimgr$1pi,$wgimgr$1pj,$wgimgr$1pk,$wgimgr$1pl,$wgimgr$1pm,$wgimgr$1pn,$wgimgr$1po,$wgimgr$1pp,$wgimgr$1pq,$wgimgr$1pr,$wgimgr$1ps,$wgimgr$1pt,$wgimgr$1pu,$wgimgr$1pv,$wgimgr$1pw,h3$){
$init$H3();
if(h3$===undefined)h3$=new H3.$$;
if($wgimgr$1pd===undefined){$wgimgr$1pd="";}
h3$.$wgimgr$1pd_=$wgimgr$1pd;
if($wgimgr$1pe===undefined){$wgimgr$1pe=null;}
h3$.$wgimgr$1pe_=$wgimgr$1pe;
if($wgimgr$1pf===undefined){$wgimgr$1pf=m$1.empty();}
h3$.$wgimgr$1pf_=$wgimgr$1pf;
if($wgimgr$1pg===undefined){$wgimgr$1pg=null;}
h3$.$wgimgr$1pg_=$wgimgr$1pg;
if($wgimgr$1ph===undefined){$wgimgr$1ph=null;}
h3$.$wgimgr$1ph_=$wgimgr$1ph;
if($wgimgr$1pi===undefined){$wgimgr$1pi=null;}
h3$.$wgimgr$1pi_=$wgimgr$1pi;
if($wgimgr$1pj===undefined){$wgimgr$1pj=null;}
h3$.$wgimgr$1pj_=$wgimgr$1pj;
if($wgimgr$1pk===undefined){$wgimgr$1pk=null;}
h3$.$wgimgr$1pk_=$wgimgr$1pk;
if($wgimgr$1pl===undefined){$wgimgr$1pl=null;}
h3$.$wgimgr$1pl_=$wgimgr$1pl;
if($wgimgr$1pm===undefined){$wgimgr$1pm=null;}
h3$.$wgimgr$1pm_=$wgimgr$1pm;
if($wgimgr$1pn===undefined){$wgimgr$1pn=null;}
h3$.$wgimgr$1pn_=$wgimgr$1pn;
if($wgimgr$1po===undefined){$wgimgr$1po=null;}
h3$.$wgimgr$1po_=$wgimgr$1po;
if($wgimgr$1pp===undefined){$wgimgr$1pp=null;}
h3$.$wgimgr$1pp_=$wgimgr$1pp;
if($wgimgr$1pq===undefined){$wgimgr$1pq=null;}
h3$.$wgimgr$1pq_=$wgimgr$1pq;
if($wgimgr$1pr===undefined){$wgimgr$1pr=null;}
h3$.$wgimgr$1pr_=$wgimgr$1pr;
if($wgimgr$1ps===undefined){$wgimgr$1ps=null;}
h3$.$wgimgr$1ps_=$wgimgr$1ps;
if($wgimgr$1pt===undefined){$wgimgr$1pt=null;}
h3$.$wgimgr$1pt_=$wgimgr$1pt;
if($wgimgr$1pu===undefined){$wgimgr$1pu=m$1.empty();}
h3$.$wgimgr$1pu_=$wgimgr$1pu;
if($wgimgr$1pv===undefined){$wgimgr$1pv=m$1.empty();}
h3$.$wgimgr$1pv_=$wgimgr$1pv;
if($wgimgr$1pw===undefined){$wgimgr$1pw=m$1.empty();}
h3$.$wgimgr$1pw_=$wgimgr$1pw;
Heading($wgimgr$1pd,$wgimgr$1pe,$wgimgr$1pf,$wgimgr$1pg,$wgimgr$1ph,$wgimgr$1pi,$wgimgr$1pj,$wgimgr$1pk,$wgimgr$1pl,$wgimgr$1pm,$wgimgr$1pn,$wgimgr$1po,$wgimgr$1pp,$wgimgr$1pq,$wgimgr$1pr,$wgimgr$1ps,$wgimgr$1pt,$wgimgr$1pu,$wgimgr$1pv,$wgimgr$1pw,h3$);
h3$.level_=(3);
return h3$;
}
H3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H3')];},d:['ceylon.html','H3']};};
ex$.H3=H3;
function $init$H3(){
if(H3.$$===undefined){
m$1.initTypeProto(H3,'ceylon.html::H3',$init$Heading());
(function(h3$){
m$1.atr$(h3$,'$wgimgr$1pd',function(){return this.$wgimgr$1pd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H3,d:['ceylon.html','H3','$at','text$clhpo3']};});
m$1.atr$(h3$,'$wgimgr$1pe',function(){return this.$wgimgr$1pe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','id$36fegh']};});
m$1.atr$(h3$,'$wgimgr$1pf',function(){return this.$wgimgr$1pf_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H3,d:['ceylon.html','H3','$at','classNames$nldari']};});
m$1.atr$(h3$,'$wgimgr$1pg',function(){return this.$wgimgr$1pg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','style$2j5slz']};});
m$1.atr$(h3$,'$wgimgr$1ph',function(){return this.$wgimgr$1ph_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','accessKey$8kz3db']};});
m$1.atr$(h3$,'$wgimgr$1pi',function(){return this.$wgimgr$1pi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','contextMenu$dla13g']};});
m$1.atr$(h3$,'$wgimgr$1pj',function(){return this.$wgimgr$1pj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H3,d:['ceylon.html','H3','$at','dir$5crmab']};});
m$1.atr$(h3$,'$wgimgr$1pk',function(){return this.$wgimgr$1pk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H3,d:['ceylon.html','H3','$at','draggable$ks0h9']};});
m$1.atr$(h3$,'$wgimgr$1pl',function(){return this.$wgimgr$1pl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H3,d:['ceylon.html','H3','$at','dropZone$gf2gb5']};});
m$1.atr$(h3$,'$wgimgr$1pm',function(){return this.$wgimgr$1pm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H3,d:['ceylon.html','H3','$at','inert$21zmu8']};});
m$1.atr$(h3$,'$wgimgr$1pn',function(){return this.$wgimgr$1pn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H3,d:['ceylon.html','H3','$at','hidden$1qr3vc']};});
m$1.atr$(h3$,'$wgimgr$1po',function(){return this.$wgimgr$1po_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','lang$73ubm4']};});
m$1.atr$(h3$,'$wgimgr$1pp',function(){return this.$wgimgr$1pp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H3,d:['ceylon.html','H3','$at','spellcheck$9nvn9u']};});
m$1.atr$(h3$,'$wgimgr$1pq',function(){return this.$wgimgr$1pq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H3,d:['ceylon.html','H3','$at','tabIndex$tmlbk3']};});
m$1.atr$(h3$,'$wgimgr$1pr',function(){return this.$wgimgr$1pr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H3,d:['ceylon.html','H3','$at','title$fwvlt2']};});
m$1.atr$(h3$,'$wgimgr$1ps',function(){return this.$wgimgr$1ps_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H3,d:['ceylon.html','H3','$at','translate$qd79sk']};});
m$1.atr$(h3$,'$wgimgr$1pt',function(){return this.$wgimgr$1pt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H3,d:['ceylon.html','H3','$at','aria$1xfan']};});
m$1.atr$(h3$,'$wgimgr$1pu',function(){return this.$wgimgr$1pu_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H3,d:['ceylon.html','H3','$at','nonstandardAttributes$io5qjd']};});
m$1.atr$(h3$,'$wgimgr$1pv',function(){return this.$wgimgr$1pv_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H3,d:['ceylon.html','H3','$at','data$1pqhew']};});
m$1.atr$(h3$,'$wgimgr$1pw',function(){return this.$wgimgr$1pw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H3,d:['ceylon.html','H3','$at','children$oxws5']};});
m$1.atr$(h3$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H3,pa:3,d:['ceylon.html','H3','$at','level']};});
})(H3.$$.prototype);
}
return H3;
}
ex$.$init$H3=$init$H3;
$init$H3();
function H4($wgimgr$1px,$wgimgr$1py,$wgimgr$1pz,$wgimgr$1q0,$wgimgr$1q1,$wgimgr$1q2,$wgimgr$1q3,$wgimgr$1q4,$wgimgr$1q5,$wgimgr$1q6,$wgimgr$1q7,$wgimgr$1q8,$wgimgr$1q9,$wgimgr$1qa,$wgimgr$1qb,$wgimgr$1qc,$wgimgr$1qd,$wgimgr$1qe,$wgimgr$1qf,$wgimgr$1qg,h4$){
$init$H4();
if(h4$===undefined)h4$=new H4.$$;
if($wgimgr$1px===undefined){$wgimgr$1px="";}
h4$.$wgimgr$1px_=$wgimgr$1px;
if($wgimgr$1py===undefined){$wgimgr$1py=null;}
h4$.$wgimgr$1py_=$wgimgr$1py;
if($wgimgr$1pz===undefined){$wgimgr$1pz=m$1.empty();}
h4$.$wgimgr$1pz_=$wgimgr$1pz;
if($wgimgr$1q0===undefined){$wgimgr$1q0=null;}
h4$.$wgimgr$1q0_=$wgimgr$1q0;
if($wgimgr$1q1===undefined){$wgimgr$1q1=null;}
h4$.$wgimgr$1q1_=$wgimgr$1q1;
if($wgimgr$1q2===undefined){$wgimgr$1q2=null;}
h4$.$wgimgr$1q2_=$wgimgr$1q2;
if($wgimgr$1q3===undefined){$wgimgr$1q3=null;}
h4$.$wgimgr$1q3_=$wgimgr$1q3;
if($wgimgr$1q4===undefined){$wgimgr$1q4=null;}
h4$.$wgimgr$1q4_=$wgimgr$1q4;
if($wgimgr$1q5===undefined){$wgimgr$1q5=null;}
h4$.$wgimgr$1q5_=$wgimgr$1q5;
if($wgimgr$1q6===undefined){$wgimgr$1q6=null;}
h4$.$wgimgr$1q6_=$wgimgr$1q6;
if($wgimgr$1q7===undefined){$wgimgr$1q7=null;}
h4$.$wgimgr$1q7_=$wgimgr$1q7;
if($wgimgr$1q8===undefined){$wgimgr$1q8=null;}
h4$.$wgimgr$1q8_=$wgimgr$1q8;
if($wgimgr$1q9===undefined){$wgimgr$1q9=null;}
h4$.$wgimgr$1q9_=$wgimgr$1q9;
if($wgimgr$1qa===undefined){$wgimgr$1qa=null;}
h4$.$wgimgr$1qa_=$wgimgr$1qa;
if($wgimgr$1qb===undefined){$wgimgr$1qb=null;}
h4$.$wgimgr$1qb_=$wgimgr$1qb;
if($wgimgr$1qc===undefined){$wgimgr$1qc=null;}
h4$.$wgimgr$1qc_=$wgimgr$1qc;
if($wgimgr$1qd===undefined){$wgimgr$1qd=null;}
h4$.$wgimgr$1qd_=$wgimgr$1qd;
if($wgimgr$1qe===undefined){$wgimgr$1qe=m$1.empty();}
h4$.$wgimgr$1qe_=$wgimgr$1qe;
if($wgimgr$1qf===undefined){$wgimgr$1qf=m$1.empty();}
h4$.$wgimgr$1qf_=$wgimgr$1qf;
if($wgimgr$1qg===undefined){$wgimgr$1qg=m$1.empty();}
h4$.$wgimgr$1qg_=$wgimgr$1qg;
Heading($wgimgr$1px,$wgimgr$1py,$wgimgr$1pz,$wgimgr$1q0,$wgimgr$1q1,$wgimgr$1q2,$wgimgr$1q3,$wgimgr$1q4,$wgimgr$1q5,$wgimgr$1q6,$wgimgr$1q7,$wgimgr$1q8,$wgimgr$1q9,$wgimgr$1qa,$wgimgr$1qb,$wgimgr$1qc,$wgimgr$1qd,$wgimgr$1qe,$wgimgr$1qf,$wgimgr$1qg,h4$);
h4$.level_=(4);
return h4$;
}
H4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H4')];},d:['ceylon.html','H4']};};
ex$.H4=H4;
function $init$H4(){
if(H4.$$===undefined){
m$1.initTypeProto(H4,'ceylon.html::H4',$init$Heading());
(function(h4$){
m$1.atr$(h4$,'$wgimgr$1px',function(){return this.$wgimgr$1px_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H4,d:['ceylon.html','H4','$at','text$g01x50']};});
m$1.atr$(h4$,'$wgimgr$1py',function(){return this.$wgimgr$1py_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','id$pf48cm']};});
m$1.atr$(h4$,'$wgimgr$1pz',function(){return this.$wgimgr$1pz_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H4,d:['ceylon.html','H4','$at','classNames$506c1l']};});
m$1.atr$(h4$,'$wgimgr$1q0',function(){return this.$wgimgr$1q0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','style$q2du74']};});
m$1.atr$(h4$,'$wgimgr$1q1',function(){return this.$wgimgr$1q1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','accessKey$xulbsq']};});
m$1.atr$(h4$,'$wgimgr$1q2',function(){return this.$wgimgr$1q2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','contextMenu$f09lpn']};});
m$1.atr$(h4$,'$wgimgr$1q3',function(){return this.$wgimgr$1q3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H4,d:['ceylon.html','H4','$at','dir$n8s0is']};});
m$1.atr$(h4$,'$wgimgr$1q4',function(){return this.$wgimgr$1q4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H4,d:['ceylon.html','H4','$at','draggable$t6bnac']};});
m$1.atr$(h4$,'$wgimgr$1q5',function(){return this.$wgimgr$1q5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H4,d:['ceylon.html','H4','$at','dropZone$c6h6hy']};});
m$1.atr$(h4$,'$wgimgr$1q6',function(){return this.$wgimgr$1q6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H4,d:['ceylon.html','H4','$at','inert$qjjzyv']};});
m$1.atr$(h4$,'$wgimgr$1q7',function(){return this.$wgimgr$1q7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H4,d:['ceylon.html','H4','$at','hidden$ucaqof']};});
m$1.atr$(h4$,'$wgimgr$1q8',function(){return this.$wgimgr$1q8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','lang$lhpb6z']};});
m$1.atr$(h4$,'$wgimgr$1q9',function(){return this.$wgimgr$1q9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H4,d:['ceylon.html','H4','$at','spellcheck$wrorw7']};});
m$1.atr$(h4$,'$wgimgr$1qa',function(){return this.$wgimgr$1qa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H4,d:['ceylon.html','H4','$at','tabIndex$111or0']};});
m$1.atr$(h4$,'$wgimgr$1qb',function(){return this.$wgimgr$1qb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H4,d:['ceylon.html','H4','$at','title$coo101']};});
m$1.atr$(h4$,'$wgimgr$1qc',function(){return this.$wgimgr$1qc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H4,d:['ceylon.html','H4','$at','translate$g2d5dh']};});
m$1.atr$(h4$,'$wgimgr$1qd',function(){return this.$wgimgr$1qd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H4,d:['ceylon.html','H4','$at','aria$sjm7ig']};});
m$1.atr$(h4$,'$wgimgr$1qe',function(){return this.$wgimgr$1qe_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H4,d:['ceylon.html','H4','$at','nonstandardAttributes$nreomo']};});
m$1.atr$(h4$,'$wgimgr$1qf',function(){return this.$wgimgr$1qf_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H4,d:['ceylon.html','H4','$at','data$qvt5e7']};});
m$1.atr$(h4$,'$wgimgr$1qg',function(){return this.$wgimgr$1qg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H4,d:['ceylon.html','H4','$at','children$rwlq0y']};});
m$1.atr$(h4$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H4,pa:3,d:['ceylon.html','H4','$at','level']};});
})(H4.$$.prototype);
}
return H4;
}
ex$.$init$H4=$init$H4;
$init$H4();
function H5($wgimgr$1qh,$wgimgr$1qi,$wgimgr$1qj,$wgimgr$1qk,$wgimgr$1ql,$wgimgr$1qm,$wgimgr$1qn,$wgimgr$1qo,$wgimgr$1qp,$wgimgr$1qq,$wgimgr$1qr,$wgimgr$1qs,$wgimgr$1qt,$wgimgr$1qu,$wgimgr$1qv,$wgimgr$1qw,$wgimgr$1qx,$wgimgr$1qy,$wgimgr$1qz,$wgimgr$1r0,h5$){
$init$H5();
if(h5$===undefined)h5$=new H5.$$;
if($wgimgr$1qh===undefined){$wgimgr$1qh="";}
h5$.$wgimgr$1qh_=$wgimgr$1qh;
if($wgimgr$1qi===undefined){$wgimgr$1qi=null;}
h5$.$wgimgr$1qi_=$wgimgr$1qi;
if($wgimgr$1qj===undefined){$wgimgr$1qj=m$1.empty();}
h5$.$wgimgr$1qj_=$wgimgr$1qj;
if($wgimgr$1qk===undefined){$wgimgr$1qk=null;}
h5$.$wgimgr$1qk_=$wgimgr$1qk;
if($wgimgr$1ql===undefined){$wgimgr$1ql=null;}
h5$.$wgimgr$1ql_=$wgimgr$1ql;
if($wgimgr$1qm===undefined){$wgimgr$1qm=null;}
h5$.$wgimgr$1qm_=$wgimgr$1qm;
if($wgimgr$1qn===undefined){$wgimgr$1qn=null;}
h5$.$wgimgr$1qn_=$wgimgr$1qn;
if($wgimgr$1qo===undefined){$wgimgr$1qo=null;}
h5$.$wgimgr$1qo_=$wgimgr$1qo;
if($wgimgr$1qp===undefined){$wgimgr$1qp=null;}
h5$.$wgimgr$1qp_=$wgimgr$1qp;
if($wgimgr$1qq===undefined){$wgimgr$1qq=null;}
h5$.$wgimgr$1qq_=$wgimgr$1qq;
if($wgimgr$1qr===undefined){$wgimgr$1qr=null;}
h5$.$wgimgr$1qr_=$wgimgr$1qr;
if($wgimgr$1qs===undefined){$wgimgr$1qs=null;}
h5$.$wgimgr$1qs_=$wgimgr$1qs;
if($wgimgr$1qt===undefined){$wgimgr$1qt=null;}
h5$.$wgimgr$1qt_=$wgimgr$1qt;
if($wgimgr$1qu===undefined){$wgimgr$1qu=null;}
h5$.$wgimgr$1qu_=$wgimgr$1qu;
if($wgimgr$1qv===undefined){$wgimgr$1qv=null;}
h5$.$wgimgr$1qv_=$wgimgr$1qv;
if($wgimgr$1qw===undefined){$wgimgr$1qw=null;}
h5$.$wgimgr$1qw_=$wgimgr$1qw;
if($wgimgr$1qx===undefined){$wgimgr$1qx=null;}
h5$.$wgimgr$1qx_=$wgimgr$1qx;
if($wgimgr$1qy===undefined){$wgimgr$1qy=m$1.empty();}
h5$.$wgimgr$1qy_=$wgimgr$1qy;
if($wgimgr$1qz===undefined){$wgimgr$1qz=m$1.empty();}
h5$.$wgimgr$1qz_=$wgimgr$1qz;
if($wgimgr$1r0===undefined){$wgimgr$1r0=m$1.empty();}
h5$.$wgimgr$1r0_=$wgimgr$1r0;
Heading($wgimgr$1qh,$wgimgr$1qi,$wgimgr$1qj,$wgimgr$1qk,$wgimgr$1ql,$wgimgr$1qm,$wgimgr$1qn,$wgimgr$1qo,$wgimgr$1qp,$wgimgr$1qq,$wgimgr$1qr,$wgimgr$1qs,$wgimgr$1qt,$wgimgr$1qu,$wgimgr$1qv,$wgimgr$1qw,$wgimgr$1qx,$wgimgr$1qy,$wgimgr$1qz,$wgimgr$1r0,h5$);
h5$.level_=(5);
return h5$;
}
H5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H5')];},d:['ceylon.html','H5']};};
ex$.H5=H5;
function $init$H5(){
if(H5.$$===undefined){
m$1.initTypeProto(H5,'ceylon.html::H5',$init$Heading());
(function(h5$){
m$1.atr$(h5$,'$wgimgr$1qh',function(){return this.$wgimgr$1qh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H5,d:['ceylon.html','H5','$at','text$qfii11']};});
m$1.atr$(h5$,'$wgimgr$1qi',function(){return this.$wgimgr$1qi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','id$h0g6tf']};});
m$1.atr$(h5$,'$wgimgr$1qj',function(){return this.$wgimgr$1qj_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H5,d:['ceylon.html','H5','$at','classNames$xlpyuo']};});
m$1.atr$(h5$,'$wgimgr$1qk',function(){return this.$wgimgr$1qk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','style$gd6kyx']};});
m$1.atr$(h5$,'$wgimgr$1ql',function(){return this.$wgimgr$1ql_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','accessKey$591ozn']};});
m$1.atr$(h5$,'$wgimgr$1qm',function(){return this.$wgimgr$1qm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','contextMenu$rfatge']};});
m$1.atr$(h5$,'$wgimgr$1qn',function(){return this.$wgimgr$1qn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H5,d:['ceylon.html','H5','$at','dir$j6sen9']};});
m$1.atr$(h5$,'$wgimgr$1qo',function(){return this.$wgimgr$1qo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H5,d:['ceylon.html','H5','$at','draggable$d98rvp']};});
m$1.atr$(h5$,'$wgimgr$1qp',function(){return this.$wgimgr$1qp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H5,d:['ceylon.html','H5','$at','dropZone$u938o3']};});
m$1.atr$(h5$,'$wgimgr$1qq',function(){return this.$wgimgr$1qq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H5,d:['ceylon.html','H5','$at','inert$fw0f76']};});
m$1.atr$(h5$,'$wgimgr$1qr',function(){return this.$wgimgr$1qr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H5,d:['ceylon.html','H5','$at','hidden$c39ohm']};});
m$1.atr$(h5$,'$wgimgr$1qs',function(){return this.$wgimgr$1qs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','lang$kxv3z2']};});
m$1.atr$(h5$,'$wgimgr$1qt',function(){return this.$wgimgr$1qt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H5,d:['ceylon.html','H5','$at','spellcheck$465534']};});
m$1.atr$(h5$,'$wgimgr$1qu',function(){return this.$wgimgr$1qu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H5,d:['ceylon.html','H5','$at','tabIndex$rkhy23']};});
m$1.atr$(h5$,'$wgimgr$1qv',function(){return this.$wgimgr$1qv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H5,d:['ceylon.html','H5','$at','title$tqwe60']};});
m$1.atr$(h5$,'$wgimgr$1qw',function(){return this.$wgimgr$1qw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H5,d:['ceylon.html','H5','$at','translate$cj6hfm']};});
m$1.atr$(h5$,'$wgimgr$1qx',function(){return this.$wgimgr$1qx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H5,d:['ceylon.html','H5','$at','aria$dvy7nl']};});
m$1.atr$(h5$,'$wgimgr$1qy',function(){return this.$wgimgr$1qy_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H5,d:['ceylon.html','H5','$at','nonstandardAttributes$4u4y6f']};});
m$1.atr$(h5$,'$wgimgr$1qz',function(){return this.$wgimgr$1qz_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H5,d:['ceylon.html','H5','$at','data$fjr9ru']};});
m$1.atr$(h5$,'$wgimgr$1r0',function(){return this.$wgimgr$1r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H5,d:['ceylon.html','H5','$at','children$eiyp53']};});
m$1.atr$(h5$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H5,pa:3,d:['ceylon.html','H5','$at','level']};});
})(H5.$$.prototype);
}
return H5;
}
ex$.$init$H5=$init$H5;
$init$H5();
function H6($wgimgr$1r1,$wgimgr$1r2,$wgimgr$1r3,$wgimgr$1r4,$wgimgr$1r5,$wgimgr$1r6,$wgimgr$1r7,$wgimgr$1r8,$wgimgr$1r9,$wgimgr$1ra,$wgimgr$1rb,$wgimgr$1rc,$wgimgr$1rd,$wgimgr$1re,$wgimgr$1rf,$wgimgr$1rg,$wgimgr$1rh,$wgimgr$1ri,$wgimgr$1rj,$wgimgr$1rk,h6$){
$init$H6();
if(h6$===undefined)h6$=new H6.$$;
if($wgimgr$1r1===undefined){$wgimgr$1r1="";}
h6$.$wgimgr$1r1_=$wgimgr$1r1;
if($wgimgr$1r2===undefined){$wgimgr$1r2=null;}
h6$.$wgimgr$1r2_=$wgimgr$1r2;
if($wgimgr$1r3===undefined){$wgimgr$1r3=m$1.empty();}
h6$.$wgimgr$1r3_=$wgimgr$1r3;
if($wgimgr$1r4===undefined){$wgimgr$1r4=null;}
h6$.$wgimgr$1r4_=$wgimgr$1r4;
if($wgimgr$1r5===undefined){$wgimgr$1r5=null;}
h6$.$wgimgr$1r5_=$wgimgr$1r5;
if($wgimgr$1r6===undefined){$wgimgr$1r6=null;}
h6$.$wgimgr$1r6_=$wgimgr$1r6;
if($wgimgr$1r7===undefined){$wgimgr$1r7=null;}
h6$.$wgimgr$1r7_=$wgimgr$1r7;
if($wgimgr$1r8===undefined){$wgimgr$1r8=null;}
h6$.$wgimgr$1r8_=$wgimgr$1r8;
if($wgimgr$1r9===undefined){$wgimgr$1r9=null;}
h6$.$wgimgr$1r9_=$wgimgr$1r9;
if($wgimgr$1ra===undefined){$wgimgr$1ra=null;}
h6$.$wgimgr$1ra_=$wgimgr$1ra;
if($wgimgr$1rb===undefined){$wgimgr$1rb=null;}
h6$.$wgimgr$1rb_=$wgimgr$1rb;
if($wgimgr$1rc===undefined){$wgimgr$1rc=null;}
h6$.$wgimgr$1rc_=$wgimgr$1rc;
if($wgimgr$1rd===undefined){$wgimgr$1rd=null;}
h6$.$wgimgr$1rd_=$wgimgr$1rd;
if($wgimgr$1re===undefined){$wgimgr$1re=null;}
h6$.$wgimgr$1re_=$wgimgr$1re;
if($wgimgr$1rf===undefined){$wgimgr$1rf=null;}
h6$.$wgimgr$1rf_=$wgimgr$1rf;
if($wgimgr$1rg===undefined){$wgimgr$1rg=null;}
h6$.$wgimgr$1rg_=$wgimgr$1rg;
if($wgimgr$1rh===undefined){$wgimgr$1rh=null;}
h6$.$wgimgr$1rh_=$wgimgr$1rh;
if($wgimgr$1ri===undefined){$wgimgr$1ri=m$1.empty();}
h6$.$wgimgr$1ri_=$wgimgr$1ri;
if($wgimgr$1rj===undefined){$wgimgr$1rj=m$1.empty();}
h6$.$wgimgr$1rj_=$wgimgr$1rj;
if($wgimgr$1rk===undefined){$wgimgr$1rk=m$1.empty();}
h6$.$wgimgr$1rk_=$wgimgr$1rk;
Heading($wgimgr$1r1,$wgimgr$1r2,$wgimgr$1r3,$wgimgr$1r4,$wgimgr$1r5,$wgimgr$1r6,$wgimgr$1r7,$wgimgr$1r8,$wgimgr$1r9,$wgimgr$1ra,$wgimgr$1rb,$wgimgr$1rc,$wgimgr$1rd,$wgimgr$1re,$wgimgr$1rf,$wgimgr$1rg,$wgimgr$1rh,$wgimgr$1ri,$wgimgr$1rj,$wgimgr$1rk,h6$);
h6$.level_=(6);
return h6$;
}
H6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Heading},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:H6')];},d:['ceylon.html','H6']};};
ex$.H6=H6;
function $init$H6(){
if(H6.$$===undefined){
m$1.initTypeProto(H6,'ceylon.html::H6',$init$Heading());
(function(h6$){
m$1.atr$(h6$,'$wgimgr$1r1',function(){return this.$wgimgr$1r1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:H6,d:['ceylon.html','H6','$at','text$2614s2']};});
m$1.atr$(h6$,'$wgimgr$1r2',function(){return this.$wgimgr$1r2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','id$bl3fzo']};});
m$1.atr$(h6$,'$wgimgr$1r3',function(){return this.$wgimgr$1r3_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:H6,d:['ceylon.html','H6','$at','classNames$8tugbd']};});
m$1.atr$(h6$,'$wgimgr$1r4',function(){return this.$wgimgr$1r4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','style$c8d1u6']};});
m$1.atr$(h6$,'$wgimgr$1r5',function(){return this.$wgimgr$1r5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','accessKey$nchxtg']};});
m$1.atr$(h6$,'$wgimgr$1r6',function(){return this.$wgimgr$1r6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','contextMenu$168tcp']};});
m$1.atr$(h6$,'$wgimgr$1r7',function(){return this.$wgimgr$1r7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:H6,d:['ceylon.html','H6','$at','dir$9er85u']};});
m$1.atr$(h6$,'$wgimgr$1r8',function(){return this.$wgimgr$1r8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H6,d:['ceylon.html','H6','$at','draggable$fcauxe']};});
m$1.atr$(h6$,'$wgimgr$1r9',function(){return this.$wgimgr$1r9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:H6,d:['ceylon.html','H6','$at','dropZone$1njlv0']};});
m$1.atr$(h6$,'$wgimgr$1ra',function(){return this.$wgimgr$1ra_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H6,d:['ceylon.html','H6','$at','inert$cpj7lx']};});
m$1.atr$(h6$,'$wgimgr$1rb',function(){return this.$wgimgr$1rb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H6,d:['ceylon.html','H6','$at','hidden$gi9ybh']};});
m$1.atr$(h6$,'$wgimgr$1rc',function(){return this.$wgimgr$1rc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','lang$7noiu1']};});
m$1.atr$(h6$,'$wgimgr$1rd',function(){return this.$wgimgr$1rd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H6,d:['ceylon.html','H6','$at','spellcheck$ofehpz']};});
m$1.atr$(h6$,'$wgimgr$1re',function(){return this.$wgimgr$1re_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:H6,d:['ceylon.html','H6','$at','tabIndex$ev2h3y']};});
m$1.atr$(h6$,'$wgimgr$1rf',function(){return this.$wgimgr$1rf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:H6,d:['ceylon.html','H6','$at','title$15crcx']};});
m$1.atr$(h6$,'$wgimgr$1rg',function(){return this.$wgimgr$1rg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:H6,d:['ceylon.html','H6','$at','translate$twdxqf']};});
m$1.atr$(h6$,'$wgimgr$1rh',function(){return this.$wgimgr$1rh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:H6,d:['ceylon.html','H6','$at','aria$eplf5i']};});
m$1.atr$(h6$,'$wgimgr$1ri',function(){return this.$wgimgr$1ri_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:H6,d:['ceylon.html','H6','$at','nonstandardAttributes$xfokzi']};});
m$1.atr$(h6$,'$wgimgr$1rj',function(){return this.$wgimgr$1rj_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:H6,d:['ceylon.html','H6','$at','data$d1sd19']};});
m$1.atr$(h6$,'$wgimgr$1rk',function(){return this.$wgimgr$1rk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:H6,d:['ceylon.html','H6','$at','children$e2kxo0']};});
m$1.atr$(h6$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:H6,pa:3,d:['ceylon.html','H6','$at','level']};});
})(H6.$$.prototype);
}
return H6;
}
ex$.$init$H6=$init$H6;
$init$H6();
function Html(doctype,head,body,$wgimgr$1rl,html$){
$init$Html();
if(html$===undefined)html$=new Html.$$;
html$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Head},{t:Body}])};
if(doctype===undefined){doctype=html5();}
html$.doctype_=doctype;
if(head===undefined){head=Head();}
html$.head_=head;
if(body===undefined){body=Body();}
html$.body_=body;
if($wgimgr$1rl===undefined){$wgimgr$1rl=null;}
html$.$wgimgr$1rl_=$wgimgr$1rl;
ParentNode({Child$ParentNode:m$1.mut$([{t:Head},{t:Body}])},html$);
Document(html$);
Element($wgimgr$1rl,html$);
html$.$wgimgr$1rm_=m$1.sarg$(function($1rn){switch($1rn){case 0:return head;case 1:return body;}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:Head},{t:Body}]),Absent$Iterable:{t:m$1.Nothing}});
html$.tag_=Tag("html");
return html$;
}
Html.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'doctype',mt:'prm',def:1,$t:{t:Doctype},pa:3},{nm:'head',mt:'prm',def:1,$t:{t:Head},pa:1},{nm:'body',mt:'prm',def:1,$t:{t:Body},pa:1},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[{t:Head},{t:Body}]}}},{t:Document}],pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','Html']};};
ex$.Html=Html;
function $init$Html(){
if(Html.$$===undefined){
m$1.initTypeProto(Html,'ceylon.html::Html',$init$ParentNode(),$init$Document(),$init$Element());
(function(html$){
m$1.atr$(html$,'doctype',function(){return this.doctype_;},undefined,function(){return{mod:$CCMM$,$t:{t:Doctype},$cont:Html,pa:3,d:['ceylon.html','Html','$at','doctype']};});
m$1.atr$(html$,'head',function(){return this.head_;},undefined,function(){return{mod:$CCMM$,$t:{t:Head},$cont:Html,pa:1,d:['ceylon.html','Html','$at','head']};});
m$1.atr$(html$,'body',function(){return this.body_;},undefined,function(){return{mod:$CCMM$,$t:{t:Body},$cont:Html,pa:1,d:['ceylon.html','Html','$at','body']};});
m$1.atr$(html$,'$wgimgr$1rl',function(){return this.$wgimgr$1rl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Html,d:['ceylon.html','Html','$at','id$pf0z73']};});
m$1.atr$(html$,'children',function(){return this.$wgimgr$1rm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Head},{t:Body}]},Absent$Iterable:{t:m$1.Null}}},$cont:Html,pa:3,d:['ceylon.html','Html','$at','children']};});
m$1.atr$(html$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Html,pa:3,d:['ceylon.html','Html','$at','tag']};});
})(Html.$$.prototype);
}
return Html;
}
ex$.$init$Html=$init$Html;
$init$Html();
function Img(src,alt,useMap,isMap,width,height,$wgimgr$1ro,$wgimgr$1rp,$wgimgr$1rq,$wgimgr$1rr,$wgimgr$1rs,$wgimgr$1rt,$wgimgr$1ru,$wgimgr$1rv,$wgimgr$1rw,$wgimgr$1rx,$wgimgr$1ry,$wgimgr$1rz,$wgimgr$1s0,$wgimgr$1s1,$wgimgr$1s2,$wgimgr$1s3,$wgimgr$1s4,$wgimgr$1s5,img$){
$init$Img();
if(img$===undefined)img$=new Img.$$;
img$.src_=src;
if(alt===undefined){alt="";}
img$.alt_=alt;
if(useMap===undefined){useMap=null;}
img$.useMap_=useMap;
if(isMap===undefined){isMap=null;}
img$.isMap_=isMap;
if(width===undefined){width=null;}
img$.width_=width;
if(height===undefined){height=null;}
img$.height_=height;
if($wgimgr$1ro===undefined){$wgimgr$1ro=null;}
img$.$wgimgr$1ro_=$wgimgr$1ro;
if($wgimgr$1rp===undefined){$wgimgr$1rp=m$1.empty();}
img$.$wgimgr$1rp_=$wgimgr$1rp;
if($wgimgr$1rq===undefined){$wgimgr$1rq=null;}
img$.$wgimgr$1rq_=$wgimgr$1rq;
if($wgimgr$1rr===undefined){$wgimgr$1rr=null;}
img$.$wgimgr$1rr_=$wgimgr$1rr;
if($wgimgr$1rs===undefined){$wgimgr$1rs=null;}
img$.$wgimgr$1rs_=$wgimgr$1rs;
if($wgimgr$1rt===undefined){$wgimgr$1rt=null;}
img$.$wgimgr$1rt_=$wgimgr$1rt;
if($wgimgr$1ru===undefined){$wgimgr$1ru=null;}
img$.$wgimgr$1ru_=$wgimgr$1ru;
if($wgimgr$1rv===undefined){$wgimgr$1rv=null;}
img$.$wgimgr$1rv_=$wgimgr$1rv;
if($wgimgr$1rw===undefined){$wgimgr$1rw=null;}
img$.$wgimgr$1rw_=$wgimgr$1rw;
if($wgimgr$1rx===undefined){$wgimgr$1rx=null;}
img$.$wgimgr$1rx_=$wgimgr$1rx;
if($wgimgr$1ry===undefined){$wgimgr$1ry=null;}
img$.$wgimgr$1ry_=$wgimgr$1ry;
if($wgimgr$1rz===undefined){$wgimgr$1rz=null;}
img$.$wgimgr$1rz_=$wgimgr$1rz;
if($wgimgr$1s0===undefined){$wgimgr$1s0=null;}
img$.$wgimgr$1s0_=$wgimgr$1s0;
if($wgimgr$1s1===undefined){$wgimgr$1s1=null;}
img$.$wgimgr$1s1_=$wgimgr$1s1;
if($wgimgr$1s2===undefined){$wgimgr$1s2=null;}
img$.$wgimgr$1s2_=$wgimgr$1s2;
if($wgimgr$1s3===undefined){$wgimgr$1s3=null;}
img$.$wgimgr$1s3_=$wgimgr$1s3;
if($wgimgr$1s4===undefined){$wgimgr$1s4=m$1.empty();}
img$.$wgimgr$1s4_=$wgimgr$1s4;
if($wgimgr$1s5===undefined){$wgimgr$1s5=m$1.empty();}
img$.$wgimgr$1s5_=$wgimgr$1s5;
InlineElement(img$);
BaseElement($wgimgr$1ro,$wgimgr$1rp,$wgimgr$1rq,$wgimgr$1rr,$wgimgr$1rs,$wgimgr$1rt,$wgimgr$1ru,$wgimgr$1rv,$wgimgr$1rw,$wgimgr$1rx,$wgimgr$1ry,$wgimgr$1rz,$wgimgr$1s0,$wgimgr$1s1,$wgimgr$1s2,$wgimgr$1s3,$wgimgr$1s4,$wgimgr$1s5,img$);
img$.tag_=Tag("img",emptyTag());
return img$;
}
Img.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'src',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:src')];}},{nm:'alt',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:alt')];}},{nm:'useMap',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:useMap')];}},{nm:'isMap',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1},{nm:'width',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1},{nm:'height',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img')];},d:['ceylon.html','Img']};};
ex$.Img=Img;
function $init$Img(){
if(Img.$$===undefined){
m$1.initTypeProto(Img,'ceylon.html::Img',$init$InlineElement(),$init$BaseElement());
(function(img$){
m$1.atr$(img$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Img,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:src')];},d:['ceylon.html','Img','$at','src']};});
m$1.atr$(img$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Img,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:alt')];},d:['ceylon.html','Img','$at','alt']};});
m$1.atr$(img$,'useMap',function(){return this.useMap_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Img:$at:useMap')];},d:['ceylon.html','Img','$at','useMap']};});
m$1.atr$(img$,'isMap',function(){return this.isMap_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,pa:1,d:['ceylon.html','Img','$at','isMap']};});
m$1.atr$(img$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Img,pa:1,d:['ceylon.html','Img','$at','width']};});
m$1.atr$(img$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Img,pa:1,d:['ceylon.html','Img','$at','height']};});
m$1.atr$(img$,'$wgimgr$1ro',function(){return this.$wgimgr$1ro_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','id$k4ihyh']};});
m$1.atr$(img$,'$wgimgr$1rp',function(){return this.$wgimgr$1rp_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Img,d:['ceylon.html','Img','$at','classNames$uhnnpm']};});
m$1.atr$(img$,'$wgimgr$1rq',function(){return this.$wgimgr$1rq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','style$jh8w3z']};});
m$1.atr$(img$,'$wgimgr$1rr',function(){return this.$wgimgr$1rr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','accessKey$8d404p']};});
m$1.atr$(img$,'$wgimgr$1rs',function(){return this.$wgimgr$1rs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','contextMenu$ujd4lg']};});
m$1.atr$(img$,'$wgimgr$1rt',function(){return this.$wgimgr$1rt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Img,d:['ceylon.html','Img','$at','dir$maupsb']};});
m$1.atr$(img$,'$wgimgr$1ru',function(){return this.$wgimgr$1ru_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,d:['ceylon.html','Img','$at','draggable$gdb30r']};});
m$1.atr$(img$,'$wgimgr$1rv',function(){return this.$wgimgr$1rv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Img,d:['ceylon.html','Img','$at','dropZone$xd5jt5']};});
m$1.atr$(img$,'$wgimgr$1rw',function(){return this.$wgimgr$1rw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,d:['ceylon.html','Img','$at','inert$j02qc8']};});
m$1.atr$(img$,'$wgimgr$1rx',function(){return this.$wgimgr$1rx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,d:['ceylon.html','Img','$at','hidden$f7bzmo']};});
m$1.atr$(img$,'$wgimgr$1ry',function(){return this.$wgimgr$1ry_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','lang$o1xf44']};});
m$1.atr$(img$,'$wgimgr$1rz',function(){return this.$wgimgr$1rz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,d:['ceylon.html','Img','$at','spellcheck$7a7g86']};});
m$1.atr$(img$,'$wgimgr$1s0',function(){return this.$wgimgr$1s0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Img,d:['ceylon.html','Img','$at','tabIndex$ogfmx1']};});
m$1.atr$(img$,'$wgimgr$1s1',function(){return this.$wgimgr$1s1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Img,d:['ceylon.html','Img','$at','title$wuypb2']};});
m$1.atr$(img$,'$wgimgr$1s2',function(){return this.$wgimgr$1s2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Img,d:['ceylon.html','Img','$at','translate$9f46ak']};});
m$1.atr$(img$,'$wgimgr$1s3',function(){return this.$wgimgr$1s3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Img,d:['ceylon.html','Img','$at','aria$h00isn']};});
m$1.atr$(img$,'$wgimgr$1s4',function(){return this.$wgimgr$1s4_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Img,d:['ceylon.html','Img','$at','nonstandardAttributes$1q2n1d']};});
m$1.atr$(img$,'$wgimgr$1s5',function(){return this.$wgimgr$1s5_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Img,d:['ceylon.html','Img','$at','data$intkww']};});
m$1.atr$(img$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Img,pa:3,d:['ceylon.html','Img','$at','tag']};});
m$1.atr$(img$,'attributes',function(){
var img$=this;
var $1s6=AttributeSequenceBuilder();
$1s6.addAttribute("src",img$.src);
$1s6.addAttribute("alt",img$.alt);
$1s6.addAll(m$1.attrGetter(img$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
$1s6.addAttribute("usemap",img$.useMap);
$1s6.addAttribute("ismap",img$.isMap);
$1s6.addAttribute("height",img$.height);
$1s6.addAttribute("width",img$.width);
return $1s6.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Img,pa:3,d:['ceylon.html','Img','$at','attributes']};});
})(Img.$$.prototype);
}
return Img;
}
ex$.$init$Img=$init$Img;
$init$Img();
function Input($wgimgr$1s7,type,accept,autoComplete,$wgimgr$1s8,checked,dirName,$wgimgr$1s9,$wgimgr$1sa,formAction,formEnctype,formMethod,formTarget,$wgimgr$1sb,inputMode,list,maxLength,minLength,max,min,multiple,pattern,placeholder,$wgimgr$1sc,$wgimgr$1sd,size,step,$wgimgr$1se,alt,src,height,width,$wgimgr$1sf,$wgimgr$1sg,$wgimgr$1sh,$wgimgr$1si,$wgimgr$1sj,$wgimgr$1sk,$wgimgr$1sl,$wgimgr$1sm,$wgimgr$1sn,$wgimgr$1so,$wgimgr$1sp,$wgimgr$1sq,$wgimgr$1sr,$wgimgr$1ss,$wgimgr$1st,$wgimgr$1su,$wgimgr$1sv,$wgimgr$1sw,input$){
$init$Input();
if(input$===undefined)input$=new Input.$$;
if($wgimgr$1s7===undefined){$wgimgr$1s7=null;}
input$.$wgimgr$1s7_=$wgimgr$1s7;
if(type===undefined){type=text();}
input$.type_=type;
if(accept===undefined){accept=null;}
input$.accept_=accept;
if(autoComplete===undefined){autoComplete=null;}
input$.autoComplete_=autoComplete;
if($wgimgr$1s8===undefined){$wgimgr$1s8=null;}
input$.$wgimgr$1s8_=$wgimgr$1s8;
if(checked===undefined){checked=null;}
input$.checked_=checked;
if(dirName===undefined){dirName=null;}
input$.dirName_=dirName;
if($wgimgr$1s9===undefined){$wgimgr$1s9=null;}
input$.$wgimgr$1s9_=$wgimgr$1s9;
if($wgimgr$1sa===undefined){$wgimgr$1sa=null;}
input$.$wgimgr$1sa_=$wgimgr$1sa;
if(formAction===undefined){formAction=null;}
input$.formAction_=formAction;
if(formEnctype===undefined){formEnctype=null;}
input$.formEnctype_=formEnctype;
if(formMethod===undefined){formMethod=null;}
input$.formMethod_=formMethod;
if(formTarget===undefined){formTarget=null;}
input$.formTarget_=formTarget;
if($wgimgr$1sb===undefined){$wgimgr$1sb=null;}
input$.$wgimgr$1sb_=$wgimgr$1sb;
if(inputMode===undefined){inputMode=null;}
input$.inputMode_=inputMode;
if(list===undefined){list=null;}
input$.list_=list;
if(maxLength===undefined){maxLength=null;}
input$.maxLength_=maxLength;
if(minLength===undefined){minLength=null;}
input$.minLength_=minLength;
if(max===undefined){max=null;}
input$.max_=max;
if(min===undefined){min=null;}
input$.min_=min;
if(multiple===undefined){multiple=null;}
input$.multiple_=multiple;
if(pattern===undefined){pattern=null;}
input$.pattern_=pattern;
if(placeholder===undefined){placeholder=null;}
input$.placeholder_=placeholder;
if($wgimgr$1sc===undefined){$wgimgr$1sc=null;}
input$.$wgimgr$1sc_=$wgimgr$1sc;
if($wgimgr$1sd===undefined){$wgimgr$1sd=null;}
input$.$wgimgr$1sd_=$wgimgr$1sd;
if(size===undefined){size=null;}
input$.size_=size;
if(step===undefined){step=null;}
input$.step_=step;
if($wgimgr$1se===undefined){$wgimgr$1se=null;}
input$.$wgimgr$1se_=$wgimgr$1se;
if(alt===undefined){alt=null;}
input$.alt_=alt;
if(src===undefined){src=null;}
input$.src_=src;
if(height===undefined){height=null;}
input$.height_=height;
if(width===undefined){width=null;}
input$.width_=width;
if($wgimgr$1sf===undefined){$wgimgr$1sf=null;}
input$.$wgimgr$1sf_=$wgimgr$1sf;
if($wgimgr$1sg===undefined){$wgimgr$1sg=m$1.empty();}
input$.$wgimgr$1sg_=$wgimgr$1sg;
if($wgimgr$1sh===undefined){$wgimgr$1sh=null;}
input$.$wgimgr$1sh_=$wgimgr$1sh;
if($wgimgr$1si===undefined){$wgimgr$1si=null;}
input$.$wgimgr$1si_=$wgimgr$1si;
if($wgimgr$1sj===undefined){$wgimgr$1sj=null;}
input$.$wgimgr$1sj_=$wgimgr$1sj;
if($wgimgr$1sk===undefined){$wgimgr$1sk=null;}
input$.$wgimgr$1sk_=$wgimgr$1sk;
if($wgimgr$1sl===undefined){$wgimgr$1sl=null;}
input$.$wgimgr$1sl_=$wgimgr$1sl;
if($wgimgr$1sm===undefined){$wgimgr$1sm=null;}
input$.$wgimgr$1sm_=$wgimgr$1sm;
if($wgimgr$1sn===undefined){$wgimgr$1sn=null;}
input$.$wgimgr$1sn_=$wgimgr$1sn;
if($wgimgr$1so===undefined){$wgimgr$1so=null;}
input$.$wgimgr$1so_=$wgimgr$1so;
if($wgimgr$1sp===undefined){$wgimgr$1sp=null;}
input$.$wgimgr$1sp_=$wgimgr$1sp;
if($wgimgr$1sq===undefined){$wgimgr$1sq=null;}
input$.$wgimgr$1sq_=$wgimgr$1sq;
if($wgimgr$1sr===undefined){$wgimgr$1sr=null;}
input$.$wgimgr$1sr_=$wgimgr$1sr;
if($wgimgr$1ss===undefined){$wgimgr$1ss=null;}
input$.$wgimgr$1ss_=$wgimgr$1ss;
if($wgimgr$1st===undefined){$wgimgr$1st=null;}
input$.$wgimgr$1st_=$wgimgr$1st;
if($wgimgr$1su===undefined){$wgimgr$1su=null;}
input$.$wgimgr$1su_=$wgimgr$1su;
if($wgimgr$1sv===undefined){$wgimgr$1sv=m$1.empty();}
input$.$wgimgr$1sv_=$wgimgr$1sv;
if($wgimgr$1sw===undefined){$wgimgr$1sw=m$1.empty();}
input$.$wgimgr$1sw_=$wgimgr$1sw;
InlineElement(input$);
FormElement($wgimgr$1s7,$wgimgr$1s8,$wgimgr$1s9,$wgimgr$1sa,$wgimgr$1sb,$wgimgr$1sc,$wgimgr$1sd,$wgimgr$1se,$wgimgr$1sf,$wgimgr$1sg,$wgimgr$1sh,$wgimgr$1si,$wgimgr$1sj,$wgimgr$1sk,$wgimgr$1sl,$wgimgr$1sm,$wgimgr$1sn,$wgimgr$1so,$wgimgr$1sp,$wgimgr$1sq,$wgimgr$1sr,$wgimgr$1ss,$wgimgr$1st,$wgimgr$1su,$wgimgr$1sv,$wgimgr$1sw,input$);
input$.$wgimgr$1sx_=Tag("input",emptyTag());
return input$;
}
Input.$crtmm$=function(){return{mod:$CCMM$,'super':{t:FormElement},ps:[{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'type',mt:'prm',def:1,$t:{t:'u',l:[{t:InputType},{t:ButtonType}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:type')];}},{nm:'accept',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:accept')];}},{nm:'autoComplete',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:autoComplete')];}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'checked',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:checked')];}},{nm:'dirName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:dirName')];}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'formAction',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formAction')];}},{nm:'formEnctype',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formEnctype')];}},{nm:'formMethod',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formMethod')];}},{nm:'formTarget',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formTarget')];}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'inputMode',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:inputMode')];}},{nm:'list',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:list')];}},{nm:'maxLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:maxLength')];}},{nm:'minLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:minLength')];}},{nm:'max',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:max')];}},{nm:'min',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:min')];}},{nm:'multiple',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:multiple')];}},{nm:'pattern',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:pattern')];}},{nm:'placeholder',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:placeholder')];}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'size',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:size')];}},{nm:'step',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:step')];}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'alt',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:alt')];}},{nm:'src',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:src')];}},{nm:'height',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:height')];}},{nm:'width',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:width')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input')];},d:['ceylon.html','Input']};};
ex$.Input=Input;
function $init$Input(){
if(Input.$$===undefined){
m$1.initTypeProto(Input,'ceylon.html::Input',$init$InlineElement(),$init$FormElement());
(function(input$){
m$1.atr$(input$,'$wgimgr$1s7',function(){return this.$wgimgr$1s7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','name$8r233c']};});
m$1.atr$(input$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:InputType},{t:ButtonType}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:type')];},d:['ceylon.html','Input','$at','type']};});
m$1.atr$(input$,'accept',function(){return this.accept_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:accept')];},d:['ceylon.html','Input','$at','accept']};});
m$1.atr$(input$,'autoComplete',function(){return this.autoComplete_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:autoComplete')];},d:['ceylon.html','Input','$at','autoComplete']};});
m$1.atr$(input$,'$wgimgr$1s8',function(){return this.$wgimgr$1s8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','autoFocus$5fj9q2']};});
m$1.atr$(input$,'checked',function(){return this.checked_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:checked')];},d:['ceylon.html','Input','$at','checked']};});
m$1.atr$(input$,'dirName',function(){return this.dirName_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:dirName')];},d:['ceylon.html','Input','$at','dirName']};});
m$1.atr$(input$,'$wgimgr$1s9',function(){return this.$wgimgr$1s9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','disabled$bjjgdd']};});
m$1.atr$(input$,'$wgimgr$1sa',function(){return this.$wgimgr$1sa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','form$du7nfb']};});
m$1.atr$(input$,'formAction',function(){return this.formAction_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formAction')];},d:['ceylon.html','Input','$at','formAction']};});
m$1.atr$(input$,'formEnctype',function(){return this.formEnctype_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formEnctype')];},d:['ceylon.html','Input','$at','formEnctype']};});
m$1.atr$(input$,'formMethod',function(){return this.formMethod_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formMethod')];},d:['ceylon.html','Input','$at','formMethod']};});
m$1.atr$(input$,'formTarget',function(){return this.formTarget_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:formTarget')];},d:['ceylon.html','Input','$at','formTarget']};});
m$1.atr$(input$,'$wgimgr$1sb',function(){return this.$wgimgr$1sb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','formNoValidate$n1xqag']};});
m$1.atr$(input$,'inputMode',function(){return this.inputMode_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:InputMode}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:inputMode')];},d:['ceylon.html','Input','$at','inputMode']};});
m$1.atr$(input$,'list',function(){return this.list_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:list')];},d:['ceylon.html','Input','$at','list']};});
m$1.atr$(input$,'maxLength',function(){return this.maxLength_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:maxLength')];},d:['ceylon.html','Input','$at','maxLength']};});
m$1.atr$(input$,'minLength',function(){return this.minLength_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:minLength')];},d:['ceylon.html','Input','$at','minLength']};});
m$1.atr$(input$,'max',function(){return this.max_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:max')];},d:['ceylon.html','Input','$at','max']};});
m$1.atr$(input$,'min',function(){return this.min_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:min')];},d:['ceylon.html','Input','$at','min']};});
m$1.atr$(input$,'multiple',function(){return this.multiple_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:multiple')];},d:['ceylon.html','Input','$at','multiple']};});
m$1.atr$(input$,'pattern',function(){return this.pattern_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:pattern')];},d:['ceylon.html','Input','$at','pattern']};});
m$1.atr$(input$,'placeholder',function(){return this.placeholder_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:placeholder')];},d:['ceylon.html','Input','$at','placeholder']};});
m$1.atr$(input$,'$wgimgr$1sc',function(){return this.$wgimgr$1sc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','readOnly$gfuobb']};});
m$1.atr$(input$,'$wgimgr$1sd',function(){return this.$wgimgr$1sd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','required$ythc5o']};});
m$1.atr$(input$,'size',function(){return this.size_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:size')];},d:['ceylon.html','Input','$at','size']};});
m$1.atr$(input$,'step',function(){return this.step_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:step')];},d:['ceylon.html','Input','$at','step']};});
m$1.atr$(input$,'$wgimgr$1se',function(){return this.$wgimgr$1se_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','valueOf$qoeftf']};});
m$1.atr$(input$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:alt')];},d:['ceylon.html','Input','$at','alt']};});
m$1.atr$(input$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:src')];},d:['ceylon.html','Input','$at','src']};});
m$1.atr$(input$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:height')];},d:['ceylon.html','Input','$at','height']};});
m$1.atr$(input$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Input:$at:width')];},d:['ceylon.html','Input','$at','width']};});
m$1.atr$(input$,'$wgimgr$1sf',function(){return this.$wgimgr$1sf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','id$e10bh4']};});
m$1.atr$(input$,'$wgimgr$1sg',function(){return this.$wgimgr$1sg_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Input,d:['ceylon.html','Input','$at','classNames$6dxktx']};});
m$1.atr$(input$,'$wgimgr$1sh',function(){return this.$wgimgr$1sh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','style$eo9xbm']};});
m$1.atr$(input$,'$wgimgr$1si',function(){return this.$wgimgr$1si_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','accessKey$psetaw']};});
m$1.atr$(input$,'$wgimgr$1sj',function(){return this.$wgimgr$1sj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','contextMenu$3m5ou5']};});
m$1.atr$(input$,'$wgimgr$1sk',function(){return this.$wgimgr$1sk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Input,d:['ceylon.html','Input','$at','dir$buo3na']};});
m$1.atr$(input$,'$wgimgr$1sl',function(){return this.$wgimgr$1sl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','draggable$hs7qeu']};});
m$1.atr$(input$,'$wgimgr$1sm',function(){return this.$wgimgr$1sm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Input,d:['ceylon.html','Input','$at','dropZone$sd9mg']};});
m$1.atr$(input$,'$wgimgr$1sn',function(){return this.$wgimgr$1sn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','inert$f5g33d']};});
m$1.atr$(input$,'$wgimgr$1so',function(){return this.$wgimgr$1so_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','hidden$iy6tsx']};});
m$1.atr$(input$,'$wgimgr$1sp',function(){return this.$wgimgr$1sp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','lang$a3lebh']};});
m$1.atr$(input$,'$wgimgr$1sq',function(){return this.$wgimgr$1sq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','spellcheck$qvbd7f']};});
m$1.atr$(input$,'$wgimgr$1sr',function(){return this.$wgimgr$1sr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Input,d:['ceylon.html','Input','$at','tabIndex$cf5lmi']};});
m$1.atr$(input$,'$wgimgr$1ss',function(){return this.$wgimgr$1ss_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Input,d:['ceylon.html','Input','$at','title$1ak44j']};});
m$1.atr$(input$,'$wgimgr$1st',function(){return this.$wgimgr$1st_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Input,d:['ceylon.html','Input','$at','translate$rgh28z']};});
m$1.atr$(input$,'$wgimgr$1su',function(){return this.$wgimgr$1su_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Input,d:['ceylon.html','Input','$at','aria$h5iamy']};});
m$1.atr$(input$,'$wgimgr$1sv',function(){return this.$wgimgr$1sv_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Input,d:['ceylon.html','Input','$at','nonstandardAttributes$z5ili6']};});
m$1.atr$(input$,'$wgimgr$1sw',function(){return this.$wgimgr$1sw_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Input,d:['ceylon.html','Input','$at','data$fhp8ip']};});
m$1.atr$(input$,'tag',function(){return this.$wgimgr$1sx_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Input,pa:11,d:['ceylon.html','Input','$at','tag']};});
m$1.atr$(input$,'attributes',function(){
var input$=this;
var $1sy=AttributeSequenceBuilder();
$1sy.addAttribute("type",input$.type);
$1sy.addNamedBooleanAttribute("checked",input$.checked);
$1sy.addAttribute("placeholder",input$.placeholder);
$1sy.addAll(m$1.attrGetter(input$.getT$all()['ceylon.html::FormElement'],'attributes').call(this));
$1sy.addAttribute("accept",input$.accept);
$1sy.addOnOffBooleanAttribute("autocomplete",input$.autoComplete);
$1sy.addAttribute("dirname",input$.dirName);
$1sy.addAttribute("formaction",input$.formAction);
$1sy.addAttribute("formenctype",input$.formEnctype);
$1sy.addAttribute("formmethod",input$.formMethod);
$1sy.addAttribute("formtarget",input$.formTarget);
$1sy.addAttribute("inputmode",input$.inputMode);
$1sy.addAttribute("list",input$.list);
$1sy.addAttribute("maxlength",input$.maxLength);
$1sy.addAttribute("minlength",input$.minLength);
$1sy.addAttribute("max",input$.max);
$1sy.addAttribute("min",input$.min);
$1sy.addNamedBooleanAttribute("multiple",input$.multiple);
$1sy.addAttribute("pattern",input$.pattern);
$1sy.addAttribute("size",input$.size);
$1sy.addAttribute("step",input$.step);
$1sy.addAttribute("src",input$.src);
$1sy.addAttribute("alt",input$.alt);
$1sy.addAttribute("height",input$.height);
$1sy.addAttribute("width",input$.width);
return $1sy.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Input,pa:11,d:['ceylon.html','Input','$at','attributes']};});
})(Input.$$.prototype);
}
return Input;
}
ex$.$init$Input=$init$Input;
$init$Input();
function InputType($wgimgr$1sz,inputType$){
$init$InputType();
if(inputType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::InputType"),'?','?')
inputType$.$wgimgr$1sz_=$wgimgr$1sz;
return inputType$;
}
InputType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getCheckbox,$prop$getColor,$prop$getDate,$prop$getDatetime,$prop$getDatetimeLocal,$prop$getEmail,$prop$getFile,$prop$getHidden,$prop$getImage,$prop$getMonth,$prop$getNumber,$prop$getPassword,$prop$getRadio,$prop$getRange,$prop$getSearchInput,$prop$getTel,$prop$getText,$prop$getTime,$prop$getUrl,$prop$getWeek],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:InputType')];},d:['ceylon.html','InputType']};};
ex$.InputType=InputType;
function $init$InputType(){
if(InputType.$$===undefined){
m$1.initTypeProto(InputType,'ceylon.html::InputType',m$1.Basic);
(function(inputType$){
m$1.atr$(inputType$,'$wgimgr$1sz',function(){return this.$wgimgr$1sz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InputType,d:['ceylon.html','InputType','$at','type$4jkwx3']};});
m$1.atr$(inputType$,'string',function(){
var inputType$=this;
return inputType$.$wgimgr$1sz;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InputType,pa:3,d:['ceylon.html','InputType','$at','string']};});
})(InputType.$$.prototype);
}
return InputType;
}
ex$.$init$InputType=$init$InputType;
$init$InputType();
function $1t0(){
var checkbox$=new $1t0.$$;InputType("checkbox",checkbox$);
return checkbox$;
};$1t0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','checkbox']};};
function $init$checkbox(){
if($1t0.$$===undefined){
m$1.initTypeProto($1t0,'ceylon.html::checkbox',$init$InputType());
}
return $1t0;
}
ex$.$init$checkbox=$init$checkbox;
$init$checkbox();
var $1t2;
function checkbox(){
if($1t2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'checkbox\' before it was set"),'183:0-185:54','Input.ceylon');
if($1t2===undefined){$1t2=m$1.INIT$;$1t2=$init$checkbox()();$1t2.$crtmm$=checkbox.$crtmm$;}
return $1t2;
}
ex$.checkbox=checkbox;
checkbox.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$checkbox()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:checkbox')];},d:['ceylon.html','checkbox']};};
$prop$getCheckbox=checkbox;
ex$.$prop$getCheckbox=$prop$getCheckbox;
function $1t3(){
var color$=new $1t3.$$;InputType("color",color$);
return color$;
};$1t3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','color']};};
function $init$color(){
if($1t3.$$===undefined){
m$1.initTypeProto($1t3,'ceylon.html::color',$init$InputType());
}
return $1t3;
}
ex$.$init$color=$init$color;
$init$color();
var $1t5;
function color(){
if($1t5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'color\' before it was set"),'187:0-189:48','Input.ceylon');
if($1t5===undefined){$1t5=m$1.INIT$;$1t5=$init$color()();$1t5.$crtmm$=color.$crtmm$;}
return $1t5;
}
ex$.color=color;
color.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$color()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:color')];},d:['ceylon.html','color']};};
$prop$getColor=color;
ex$.$prop$getColor=$prop$getColor;
function $1t6(){
var date$=new $1t6.$$;InputType("date",date$);
return date$;
};$1t6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','date']};};
function $init$date(){
if($1t6.$$===undefined){
m$1.initTypeProto($1t6,'ceylon.html::date',$init$InputType());
}
return $1t6;
}
ex$.$init$date=$init$date;
$init$date();
var $1t8;
function date(){
if($1t8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'date\' before it was set"),'191:0-193:46','Input.ceylon');
if($1t8===undefined){$1t8=m$1.INIT$;$1t8=$init$date()();$1t8.$crtmm$=date.$crtmm$;}
return $1t8;
}
ex$.date=date;
date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$date()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:date')];},d:['ceylon.html','date']};};
$prop$getDate=date;
ex$.$prop$getDate=$prop$getDate;
function $1t9(){
var datetime$=new $1t9.$$;InputType("datetime",datetime$);
return datetime$;
};$1t9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','datetime']};};
function $init$datetime(){
if($1t9.$$===undefined){
m$1.initTypeProto($1t9,'ceylon.html::datetime',$init$InputType());
}
return $1t9;
}
ex$.$init$datetime=$init$datetime;
$init$datetime();
var $1tb;
function datetime(){
if($1tb===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'datetime\' before it was set"),'195:0-198:54','Input.ceylon');
if($1tb===undefined){$1tb=m$1.INIT$;$1tb=$init$datetime()();$1tb.$crtmm$=datetime.$crtmm$;}
return $1tb;
}
ex$.datetime=datetime;
datetime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$datetime()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:datetime')];},d:['ceylon.html','datetime']};};
$prop$getDatetime=datetime;
ex$.$prop$getDatetime=$prop$getDatetime;
function $1tc(){
var datetimeLocal$=new $1tc.$$;InputType("datetime-local",datetimeLocal$);
return datetimeLocal$;
};$1tc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','datetimeLocal']};};
function $init$datetimeLocal(){
if($1tc.$$===undefined){
m$1.initTypeProto($1tc,'ceylon.html::datetimeLocal',$init$InputType());
}
return $1tc;
}
ex$.$init$datetimeLocal=$init$datetimeLocal;
$init$datetimeLocal();
var $1te;
function datetimeLocal(){
if($1te===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'datetimeLocal\' before it was set"),'200:0-203:65','Input.ceylon');
if($1te===undefined){$1te=m$1.INIT$;$1te=$init$datetimeLocal()();$1te.$crtmm$=datetimeLocal.$crtmm$;}
return $1te;
}
ex$.datetimeLocal=datetimeLocal;
datetimeLocal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$datetimeLocal()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:datetimeLocal')];},d:['ceylon.html','datetimeLocal']};};
$prop$getDatetimeLocal=datetimeLocal;
ex$.$prop$getDatetimeLocal=$prop$getDatetimeLocal;
function $1tf(){
var email$=new $1tf.$$;InputType("email",email$);
return email$;
};$1tf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','email']};};
function $init$email(){
if($1tf.$$===undefined){
m$1.initTypeProto($1tf,'ceylon.html::email',$init$InputType());
}
return $1tf;
}
ex$.$init$email=$init$email;
$init$email();
var $1th;
function email(){
if($1th===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'email\' before it was set"),'205:0-206:48','Input.ceylon');
if($1th===undefined){$1th=m$1.INIT$;$1th=$init$email()();$1th.$crtmm$=email.$crtmm$;}
return $1th;
}
ex$.email=email;
email.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$email()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:email')];},d:['ceylon.html','email']};};
$prop$getEmail=email;
ex$.$prop$getEmail=$prop$getEmail;
function $1ti(){
var file$=new $1ti.$$;InputType("file",file$);
return file$;
};$1ti.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','file']};};
function $init$file(){
if($1ti.$$===undefined){
m$1.initTypeProto($1ti,'ceylon.html::file',$init$InputType());
}
return $1ti;
}
ex$.$init$file=$init$file;
$init$file();
var $1tk;
function file(){
if($1tk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'file\' before it was set"),'208:0-210:46','Input.ceylon');
if($1tk===undefined){$1tk=m$1.INIT$;$1tk=$init$file()();$1tk.$crtmm$=file.$crtmm$;}
return $1tk;
}
ex$.file=file;
file.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$file()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:file')];},d:['ceylon.html','file']};};
$prop$getFile=file;
ex$.$prop$getFile=$prop$getFile;
function $1tl(){
var hidden$=new $1tl.$$;InputType("hidden",hidden$);
return hidden$;
};$1tl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','hidden']};};
function $init$hidden(){
if($1tl.$$===undefined){
m$1.initTypeProto($1tl,'ceylon.html::hidden',$init$InputType());
}
return $1tl;
}
ex$.$init$hidden=$init$hidden;
$init$hidden();
var $1tn;
function hidden(){
if($1tn===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hidden\' before it was set"),'212:0-214:50','Input.ceylon');
if($1tn===undefined){$1tn=m$1.INIT$;$1tn=$init$hidden()();$1tn.$crtmm$=hidden.$crtmm$;}
return $1tn;
}
ex$.hidden=hidden;
hidden.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$hidden()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:hidden')];},d:['ceylon.html','hidden']};};
$prop$getHidden=hidden;
ex$.$prop$getHidden=$prop$getHidden;
function $1to(){
var image$=new $1to.$$;InputType("image",image$);
return image$;
};$1to.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','image']};};
function $init$image(){
if($1to.$$===undefined){
m$1.initTypeProto($1to,'ceylon.html::image',$init$InputType());
}
return $1to;
}
ex$.$init$image=$init$image;
$init$image();
var $1tq;
function image(){
if($1tq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'image\' before it was set"),'216:0-217:48','Input.ceylon');
if($1tq===undefined){$1tq=m$1.INIT$;$1tq=$init$image()();$1tq.$crtmm$=image.$crtmm$;}
return $1tq;
}
ex$.image=image;
image.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$image()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:image')];},d:['ceylon.html','image']};};
$prop$getImage=image;
ex$.$prop$getImage=$prop$getImage;
function $1tr(){
var month$=new $1tr.$$;InputType("month",month$);
return month$;
};$1tr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','month']};};
function $init$month(){
if($1tr.$$===undefined){
m$1.initTypeProto($1tr,'ceylon.html::month',$init$InputType());
}
return $1tr;
}
ex$.$init$month=$init$month;
$init$month();
var $1tt;
function month(){
if($1tt===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'month\' before it was set"),'219:0-221:48','Input.ceylon');
if($1tt===undefined){$1tt=m$1.INIT$;$1tt=$init$month()();$1tt.$crtmm$=month.$crtmm$;}
return $1tt;
}
ex$.month=month;
month.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$month()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:month')];},d:['ceylon.html','month']};};
$prop$getMonth=month;
ex$.$prop$getMonth=$prop$getMonth;
function $1tu(){
var number$=new $1tu.$$;InputType("number",number$);
return number$;
};$1tu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','number']};};
function $init$number(){
if($1tu.$$===undefined){
m$1.initTypeProto($1tu,'ceylon.html::number',$init$InputType());
}
return $1tu;
}
ex$.$init$number=$init$number;
$init$number();
var $1tw;
function number(){
if($1tw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'number\' before it was set"),'223:0-224:50','Input.ceylon');
if($1tw===undefined){$1tw=m$1.INIT$;$1tw=$init$number()();$1tw.$crtmm$=number.$crtmm$;}
return $1tw;
}
ex$.number=number;
number.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$number()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','number']};};
$prop$getNumber=number;
ex$.$prop$getNumber=$prop$getNumber;
function $1tx(){
var password$=new $1tx.$$;InputType("password",password$);
return password$;
};$1tx.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','password']};};
function $init$password(){
if($1tx.$$===undefined){
m$1.initTypeProto($1tx,'ceylon.html::password',$init$InputType());
}
return $1tx;
}
ex$.$init$password=$init$password;
$init$password();
var $1tz;
function password(){
if($1tz===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'password\' before it was set"),'226:0-227:54','Input.ceylon');
if($1tz===undefined){$1tz=m$1.INIT$;$1tz=$init$password()();$1tz.$crtmm$=password.$crtmm$;}
return $1tz;
}
ex$.password=password;
password.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$password()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','password']};};
$prop$getPassword=password;
ex$.$prop$getPassword=$prop$getPassword;
function $1u0(){
var radio$=new $1u0.$$;InputType("radio",radio$);
return radio$;
};$1u0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','radio']};};
function $init$radio(){
if($1u0.$$===undefined){
m$1.initTypeProto($1u0,'ceylon.html::radio',$init$InputType());
}
return $1u0;
}
ex$.$init$radio=$init$radio;
$init$radio();
var $1u2;
function radio(){
if($1u2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'radio\' before it was set"),'229:0-230:48','Input.ceylon');
if($1u2===undefined){$1u2=m$1.INIT$;$1u2=$init$radio()();$1u2.$crtmm$=radio.$crtmm$;}
return $1u2;
}
ex$.radio=radio;
radio.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$radio()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','radio']};};
$prop$getRadio=radio;
ex$.$prop$getRadio=$prop$getRadio;
function $1u3(){
var range$=new $1u3.$$;InputType("range",range$);
return range$;
};$1u3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','range']};};
function $init$range(){
if($1u3.$$===undefined){
m$1.initTypeProto($1u3,'ceylon.html::range',$init$InputType());
}
return $1u3;
}
ex$.$init$range=$init$range;
$init$range();
var $1u5;
function range(){
if($1u5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'range\' before it was set"),'232:0-233:48','Input.ceylon');
if($1u5===undefined){$1u5=m$1.INIT$;$1u5=$init$range()();$1u5.$crtmm$=range.$crtmm$;}
return $1u5;
}
ex$.range=range;
range.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$range()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','range']};};
$prop$getRange=range;
ex$.$prop$getRange=$prop$getRange;
function $1u6(){
var searchInput$=new $1u6.$$;InputType("search",searchInput$);
return searchInput$;
};$1u6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','searchInput']};};
function $init$searchInput(){
if($1u6.$$===undefined){
m$1.initTypeProto($1u6,'ceylon.html::searchInput',$init$InputType());
}
return $1u6;
}
ex$.$init$searchInput=$init$searchInput;
$init$searchInput();
var $1u8;
function searchInput(){
if($1u8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'searchInput\' before it was set"),'235:0-236:55','Input.ceylon');
if($1u8===undefined){$1u8=m$1.INIT$;$1u8=$init$searchInput()();$1u8.$crtmm$=searchInput.$crtmm$;}
return $1u8;
}
ex$.searchInput=searchInput;
searchInput.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$searchInput()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','searchInput']};};
$prop$getSearchInput=searchInput;
ex$.$prop$getSearchInput=$prop$getSearchInput;
function $1u9(){
var tel$=new $1u9.$$;InputType("tel",tel$);
return tel$;
};$1u9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','tel']};};
function $init$tel(){
if($1u9.$$===undefined){
m$1.initTypeProto($1u9,'ceylon.html::tel',$init$InputType());
}
return $1u9;
}
ex$.$init$tel=$init$tel;
$init$tel();
var $1ub;
function tel(){
if($1ub===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tel\' before it was set"),'238:0-239:44','Input.ceylon');
if($1ub===undefined){$1ub=m$1.INIT$;$1ub=$init$tel()();$1ub.$crtmm$=tel.$crtmm$;}
return $1ub;
}
ex$.tel=tel;
tel.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$tel()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','tel']};};
$prop$getTel=tel;
ex$.$prop$getTel=$prop$getTel;
function $1uc(){
var text$=new $1uc.$$;InputType("text",text$);
return text$;
};$1uc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','text']};};
function $init$text(){
if($1uc.$$===undefined){
m$1.initTypeProto($1uc,'ceylon.html::text',$init$InputType());
}
return $1uc;
}
ex$.$init$text=$init$text;
$init$text();
var $1ue;
function text(){
if($1ue===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'text\' before it was set"),'241:0-242:46','Input.ceylon');
if($1ue===undefined){$1ue=m$1.INIT$;$1ue=$init$text()();$1ue.$crtmm$=text.$crtmm$;}
return $1ue;
}
ex$.text=text;
text.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$text()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','text']};};
$prop$getText=text;
ex$.$prop$getText=$prop$getText;
function $1uf(){
var time$=new $1uf.$$;InputType("time",time$);
return time$;
};$1uf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','time']};};
function $init$time(){
if($1uf.$$===undefined){
m$1.initTypeProto($1uf,'ceylon.html::time',$init$InputType());
}
return $1uf;
}
ex$.$init$time=$init$time;
$init$time();
var $1uh;
function time(){
if($1uh===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'time\' before it was set"),'244:0-247:46','Input.ceylon');
if($1uh===undefined){$1uh=m$1.INIT$;$1uh=$init$time()();$1uh.$crtmm$=time.$crtmm$;}
return $1uh;
}
ex$.time=time;
time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$time()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:time')];},d:['ceylon.html','time']};};
$prop$getTime=time;
ex$.$prop$getTime=$prop$getTime;
function $1ui(){
var url$=new $1ui.$$;InputType("url",url$);
return url$;
};$1ui.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','url']};};
function $init$url(){
if($1ui.$$===undefined){
m$1.initTypeProto($1ui,'ceylon.html::url',$init$InputType());
}
return $1ui;
}
ex$.$init$url=$init$url;
$init$url();
var $1uk;
function url(){
if($1uk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'url\' before it was set"),'249:0-250:44','Input.ceylon');
if($1uk===undefined){$1uk=m$1.INIT$;$1uk=$init$url()();$1uk.$crtmm$=url.$crtmm$;}
return $1uk;
}
ex$.url=url;
url.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$url()},pa:1,an:function(){return[m$1.doc("")];},d:['ceylon.html','url']};};
$prop$getUrl=url;
ex$.$prop$getUrl=$prop$getUrl;
function $1ul(){
var week$=new $1ul.$$;InputType("week",week$);
return week$;
};$1ul.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputType},d:['ceylon.html','week']};};
function $init$week(){
if($1ul.$$===undefined){
m$1.initTypeProto($1ul,'ceylon.html::week',$init$InputType());
}
return $1ul;
}
ex$.$init$week=$init$week;
$init$week();
var $1un;
function week(){
if($1un===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'week\' before it was set"),'252:0-254:46','Input.ceylon');
if($1un===undefined){$1un=m$1.INIT$;$1un=$init$week()();$1un.$crtmm$=week.$crtmm$;}
return $1un;
}
ex$.week=week;
week.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$week()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:week')];},d:['ceylon.html','week']};};
$prop$getWeek=week;
ex$.$prop$getWeek=$prop$getWeek;
function InputMode($wgimgr$1uo,inputMode$){
$init$InputMode();
if(inputMode$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::InputMode"),'?','?')
inputMode$.$wgimgr$1uo_=$wgimgr$1uo;
return inputMode$;
}
InputMode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'mode',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getVerbatim,$prop$getLatin,$prop$getLatinName,$prop$getLatinProse,$prop$getFullWidthLatin,$prop$getKana,$prop$getKatakana],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:InputMode')];},d:['ceylon.html','InputMode']};};
ex$.InputMode=InputMode;
function $init$InputMode(){
if(InputMode.$$===undefined){
m$1.initTypeProto(InputMode,'ceylon.html::InputMode',m$1.Basic);
(function(inputMode$){
m$1.atr$(inputMode$,'$wgimgr$1uo',function(){return this.$wgimgr$1uo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InputMode,d:['ceylon.html','InputMode','$at','mode$36rwwb']};});
m$1.atr$(inputMode$,'string',function(){
var inputMode$=this;
return inputMode$.$wgimgr$1uo;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:InputMode,pa:3,d:['ceylon.html','InputMode','$at','string']};});
})(InputMode.$$.prototype);
}
return InputMode;
}
ex$.$init$InputMode=$init$InputMode;
$init$InputMode();
function $1up(){
var verbatim$=new $1up.$$;InputMode("verbatim",verbatim$);
return verbatim$;
};$1up.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','verbatim']};};
function $init$verbatim(){
if($1up.$$===undefined){
m$1.initTypeProto($1up,'ceylon.html::verbatim',$init$InputMode());
}
return $1up;
}
ex$.$init$verbatim=$init$verbatim;
$init$verbatim();
var $1ur;
function verbatim(){
if($1ur===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'verbatim\' before it was set"),'268:0-270:54','Input.ceylon');
if($1ur===undefined){$1ur=m$1.INIT$;$1ur=$init$verbatim()();$1ur.$crtmm$=verbatim.$crtmm$;}
return $1ur;
}
ex$.verbatim=verbatim;
verbatim.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$verbatim()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:verbatim')];},d:['ceylon.html','verbatim']};};
$prop$getVerbatim=verbatim;
ex$.$prop$getVerbatim=$prop$getVerbatim;
function $1us(){
var latin$=new $1us.$$;InputMode("latin",latin$);
return latin$;
};$1us.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','latin']};};
function $init$latin(){
if($1us.$$===undefined){
m$1.initTypeProto($1us,'ceylon.html::latin',$init$InputMode());
}
return $1us;
}
ex$.$init$latin=$init$latin;
$init$latin();
var $1uu;
function latin(){
if($1uu===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'latin\' before it was set"),'272:0-274:48','Input.ceylon');
if($1uu===undefined){$1uu=m$1.INIT$;$1uu=$init$latin()();$1uu.$crtmm$=latin.$crtmm$;}
return $1uu;
}
ex$.latin=latin;
latin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$latin()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:latin')];},d:['ceylon.html','latin']};};
$prop$getLatin=latin;
ex$.$prop$getLatin=$prop$getLatin;
function $1uv(){
var latinName$=new $1uv.$$;InputMode("latin-name",latinName$);
return latinName$;
};$1uv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','latinName']};};
function $init$latinName(){
if($1uv.$$===undefined){
m$1.initTypeProto($1uv,'ceylon.html::latinName',$init$InputMode());
}
return $1uv;
}
ex$.$init$latinName=$init$latinName;
$init$latinName();
var $1ux;
function latinName(){
if($1ux===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'latinName\' before it was set"),'276:0-280:57','Input.ceylon');
if($1ux===undefined){$1ux=m$1.INIT$;$1ux=$init$latinName()();$1ux.$crtmm$=latinName.$crtmm$;}
return $1ux;
}
ex$.latinName=latinName;
latinName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$latinName()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:latinName')];},d:['ceylon.html','latinName']};};
$prop$getLatinName=latinName;
ex$.$prop$getLatinName=$prop$getLatinName;
function $1uy(){
var latinProse$=new $1uy.$$;InputMode("latin-prose",latinProse$);
return latinProse$;
};$1uy.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','latinProse']};};
function $init$latinProse(){
if($1uy.$$===undefined){
m$1.initTypeProto($1uy,'ceylon.html::latinProse',$init$InputMode());
}
return $1uy;
}
ex$.$init$latinProse=$init$latinProse;
$init$latinProse();
var $1v0;
function latinProse(){
if($1v0===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'latinProse\' before it was set"),'282:0-286:59','Input.ceylon');
if($1v0===undefined){$1v0=m$1.INIT$;$1v0=$init$latinProse()();$1v0.$crtmm$=latinProse.$crtmm$;}
return $1v0;
}
ex$.latinProse=latinProse;
latinProse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$latinProse()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:latinProse')];},d:['ceylon.html','latinProse']};};
$prop$getLatinProse=latinProse;
ex$.$prop$getLatinProse=$prop$getLatinProse;
function $1v1(){
var fullWidthLatin$=new $1v1.$$;InputMode("full-width-latin",fullWidthLatin$);
return fullWidthLatin$;
};$1v1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','fullWidthLatin']};};
function $init$fullWidthLatin(){
if($1v1.$$===undefined){
m$1.initTypeProto($1v1,'ceylon.html::fullWidthLatin',$init$InputMode());
}
return $1v1;
}
ex$.$init$fullWidthLatin=$init$fullWidthLatin;
$init$fullWidthLatin();
var $1v3;
function fullWidthLatin(){
if($1v3===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'fullWidthLatin\' before it was set"),'288:0-292:68','Input.ceylon');
if($1v3===undefined){$1v3=m$1.INIT$;$1v3=$init$fullWidthLatin()();$1v3.$crtmm$=fullWidthLatin.$crtmm$;}
return $1v3;
}
ex$.fullWidthLatin=fullWidthLatin;
fullWidthLatin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$fullWidthLatin()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:fullWidthLatin')];},d:['ceylon.html','fullWidthLatin']};};
$prop$getFullWidthLatin=fullWidthLatin;
ex$.$prop$getFullWidthLatin=$prop$getFullWidthLatin;
function $1v4(){
var kana$=new $1v4.$$;InputMode("kana",kana$);
return kana$;
};$1v4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','kana']};};
function $init$kana(){
if($1v4.$$===undefined){
m$1.initTypeProto($1v4,'ceylon.html::kana',$init$InputMode());
}
return $1v4;
}
ex$.$init$kana=$init$kana;
$init$kana();
var $1v6;
function kana(){
if($1v6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'kana\' before it was set"),'294:0-298:46','Input.ceylon');
if($1v6===undefined){$1v6=m$1.INIT$;$1v6=$init$kana()();$1v6.$crtmm$=kana.$crtmm$;}
return $1v6;
}
ex$.kana=kana;
kana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$kana()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:kana'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.html'),$prop$getKatakana)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','kana']};};
$prop$getKana=kana;
ex$.$prop$getKana=$prop$getKana;
function $1v7(){
var katakana$=new $1v7.$$;InputMode("katakana",katakana$);
return katakana$;
};$1v7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputMode},d:['ceylon.html','katakana']};};
function $init$katakana(){
if($1v7.$$===undefined){
m$1.initTypeProto($1v7,'ceylon.html::katakana',$init$InputMode());
}
return $1v7;
}
ex$.$init$katakana=$init$katakana;
$init$katakana();
var $1v9;
function katakana(){
if($1v9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'katakana\' before it was set"),'300:0-303:54','Input.ceylon');
if($1v9===undefined){$1v9=m$1.INIT$;$1v9=$init$katakana()();$1v9.$crtmm$=katakana.$crtmm$;}
return $1v9;
}
ex$.katakana=katakana;
katakana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$katakana()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:katakana'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.html'),$prop$getKana)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','katakana']};};
$prop$getKatakana=katakana;
ex$.$prop$getKatakana=$prop$getKatakana;
function Label(text,forControl,form,$wgimgr$1va,$wgimgr$1vb,$wgimgr$1vc,$wgimgr$1vd,$wgimgr$1ve,$wgimgr$1vf,$wgimgr$1vg,$wgimgr$1vh,$wgimgr$1vi,$wgimgr$1vj,$wgimgr$1vk,$wgimgr$1vl,$wgimgr$1vm,$wgimgr$1vn,$wgimgr$1vo,$wgimgr$1vp,$wgimgr$1vq,$wgimgr$1vr,children,label$){
$init$Label();
if(label$===undefined)label$=new Label.$$;
label$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
label$.text_=text;
if(forControl===undefined){forControl=null;}
label$.forControl_=forControl;
if(form===undefined){form=null;}
label$.form_=form;
if($wgimgr$1va===undefined){$wgimgr$1va=null;}
label$.$wgimgr$1va_=$wgimgr$1va;
if($wgimgr$1vb===undefined){$wgimgr$1vb=m$1.empty();}
label$.$wgimgr$1vb_=$wgimgr$1vb;
if($wgimgr$1vc===undefined){$wgimgr$1vc=null;}
label$.$wgimgr$1vc_=$wgimgr$1vc;
if($wgimgr$1vd===undefined){$wgimgr$1vd=null;}
label$.$wgimgr$1vd_=$wgimgr$1vd;
if($wgimgr$1ve===undefined){$wgimgr$1ve=null;}
label$.$wgimgr$1ve_=$wgimgr$1ve;
if($wgimgr$1vf===undefined){$wgimgr$1vf=null;}
label$.$wgimgr$1vf_=$wgimgr$1vf;
if($wgimgr$1vg===undefined){$wgimgr$1vg=null;}
label$.$wgimgr$1vg_=$wgimgr$1vg;
if($wgimgr$1vh===undefined){$wgimgr$1vh=null;}
label$.$wgimgr$1vh_=$wgimgr$1vh;
if($wgimgr$1vi===undefined){$wgimgr$1vi=null;}
label$.$wgimgr$1vi_=$wgimgr$1vi;
if($wgimgr$1vj===undefined){$wgimgr$1vj=null;}
label$.$wgimgr$1vj_=$wgimgr$1vj;
if($wgimgr$1vk===undefined){$wgimgr$1vk=null;}
label$.$wgimgr$1vk_=$wgimgr$1vk;
if($wgimgr$1vl===undefined){$wgimgr$1vl=null;}
label$.$wgimgr$1vl_=$wgimgr$1vl;
if($wgimgr$1vm===undefined){$wgimgr$1vm=null;}
label$.$wgimgr$1vm_=$wgimgr$1vm;
if($wgimgr$1vn===undefined){$wgimgr$1vn=null;}
label$.$wgimgr$1vn_=$wgimgr$1vn;
if($wgimgr$1vo===undefined){$wgimgr$1vo=null;}
label$.$wgimgr$1vo_=$wgimgr$1vo;
if($wgimgr$1vp===undefined){$wgimgr$1vp=null;}
label$.$wgimgr$1vp_=$wgimgr$1vp;
if($wgimgr$1vq===undefined){$wgimgr$1vq=m$1.empty();}
label$.$wgimgr$1vq_=$wgimgr$1vq;
if($wgimgr$1vr===undefined){$wgimgr$1vr=m$1.empty();}
label$.$wgimgr$1vr_=$wgimgr$1vr;
if(children===undefined){children=m$1.empty();}
label$.children_=children;
TextNode(label$);
InlineElement(label$);
ParentNode({Child$ParentNode:{t:InlineElement}},label$);
BaseElement($wgimgr$1va,$wgimgr$1vb,$wgimgr$1vc,$wgimgr$1vd,$wgimgr$1ve,$wgimgr$1vf,$wgimgr$1vg,$wgimgr$1vh,$wgimgr$1vi,$wgimgr$1vj,$wgimgr$1vk,$wgimgr$1vl,$wgimgr$1vm,$wgimgr$1vn,$wgimgr$1vo,$wgimgr$1vp,$wgimgr$1vq,$wgimgr$1vr,label$);
label$.tag_=Tag("label");
return label$;
}
Label.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'forControl',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Label:$at:forControl')];}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Label:$at:form')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Label')];},d:['ceylon.html','Label']};};
ex$.Label=Label;
function $init$Label(){
if(Label.$$===undefined){
m$1.initTypeProto(Label,'ceylon.html::Label',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(label$){
m$1.atr$(label$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Label,pa:3,d:['ceylon.html','Label','$at','text']};});
m$1.atr$(label$,'forControl',function(){return this.forControl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Label:$at:forControl')];},d:['ceylon.html','Label','$at','forControl']};});
m$1.atr$(label$,'form',function(){return this.form_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Label:$at:form')];},d:['ceylon.html','Label','$at','form']};});
m$1.atr$(label$,'$wgimgr$1va',function(){return this.$wgimgr$1va_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','id$ibgoim']};});
m$1.atr$(label$,'$wgimgr$1vb',function(){return this.$wgimgr$1vb_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Label,d:['ceylon.html','Label','$at','classNames$23h7sf']};});
m$1.atr$(label$,'$wgimgr$1vc',function(){return this.$wgimgr$1vc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','style$iyqad4']};});
m$1.atr$(label$,'$wgimgr$1vd',function(){return this.$wgimgr$1vd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','accessKey$u2v6ce']};});
m$1.atr$(label$,'$wgimgr$1ve',function(){return this.$wgimgr$1ve_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','contextMenu$7wm1vn']};});
m$1.atr$(label$,'$wgimgr$1vf',function(){return this.$wgimgr$1vf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Label,d:['ceylon.html','Label','$at','dir$g54gos']};});
m$1.atr$(label$,'$wgimgr$1vg',function(){return this.$wgimgr$1vg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Label,d:['ceylon.html','Label','$at','draggable$m2o3gc']};});
m$1.atr$(label$,'$wgimgr$1vh',function(){return this.$wgimgr$1vh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Label,d:['ceylon.html','Label','$at','dropZone$52tmny']};});
m$1.atr$(label$,'$wgimgr$1vi',function(){return this.$wgimgr$1vi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Label,d:['ceylon.html','Label','$at','inert$jfwg4v']};});
m$1.atr$(label$,'$wgimgr$1vj',function(){return this.$wgimgr$1vj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Label,d:['ceylon.html','Label','$at','hidden$n8n6uf']};});
m$1.atr$(label$,'$wgimgr$1vk',function(){return this.$wgimgr$1vk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','lang$ee1rcz']};});
m$1.atr$(label$,'$wgimgr$1vl',function(){return this.$wgimgr$1vl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Label,d:['ceylon.html','Label','$at','spellcheck$v5rq8x']};});
m$1.atr$(label$,'$wgimgr$1vm',function(){return this.$wgimgr$1vm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Label,d:['ceylon.html','Label','$at','tabIndex$84p8l0']};});
m$1.atr$(label$,'$wgimgr$1vn',function(){return this.$wgimgr$1vn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Label,d:['ceylon.html','Label','$at','title$5l0h61']};});
m$1.atr$(label$,'$wgimgr$1vo',function(){return this.$wgimgr$1vo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Label,d:['ceylon.html','Label','$at','translate$n60p7h']};});
m$1.atr$(label$,'$wgimgr$1vp',function(){return this.$wgimgr$1vp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Label,d:['ceylon.html','Label','$at','aria$lfynog']};});
m$1.atr$(label$,'$wgimgr$1vq',function(){return this.$wgimgr$1vq_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Label,d:['ceylon.html','Label','$at','nonstandardAttributes$uv28go']};});
m$1.atr$(label$,'$wgimgr$1vr',function(){return this.$wgimgr$1vr_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Label,d:['ceylon.html','Label','$at','data$js5lk7']};});
m$1.atr$(label$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Label,pa:3,d:['ceylon.html','Label','$at','children']};});
m$1.atr$(label$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Label,pa:3,d:['ceylon.html','Label','$at','tag']};});
m$1.atr$(label$,'attributes',function(){
var label$=this;
var $1vs=AttributeSequenceBuilder();
$1vs.addAttribute("for",label$.forControl);
$1vs.addAttribute("form",label$.form);
$1vs.addAll(m$1.attrGetter(label$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
return $1vs.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Label,pa:3,d:['ceylon.html','Label','$at','attributes']};});
})(Label.$$.prototype);
}
return Label;
}
ex$.$init$Label=$init$Label;
$init$Label();
function BaseLayout$layout(title,body,baseLayout$){
$init$BaseLayout$layout();
if(baseLayout$===undefined)baseLayout$=new BaseLayout$layout.$$;
baseLayout$.title_=title;
if(body===undefined){body=Div();}
baseLayout$.body_=body;
Layout$layout(baseLayout$);
baseLayout$.$wgimgr$1vt_="";
baseLayout$.$wgimgr$1vu_=m$1.empty();
baseLayout$.$wgimgr$1vv_=m$1.empty();
return baseLayout$;
}
BaseLayout$layout.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'title',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The page title.")];}},{nm:'body',mt:'prm',def:1,$t:{t:'u',l:[{t:BlockElement},{t:m$1.Null},{t:m$1.Iterable,a:{Element$Iterable:{t:BlockElement},Absent$Iterable:{t:m$1.Null}}}]},pa:1,an:function(){return[m$1.doc("The page body _block_.")];}}],sts:[{t:Layout$layout}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.layout:BaseLayout')];},d:['ceylon.html.layout','BaseLayout']};};
ex$.BaseLayout$layout=BaseLayout$layout;
function $init$BaseLayout$layout(){
if(BaseLayout$layout.$$===undefined){
m$1.initTypeProto(BaseLayout$layout,'ceylon.html.layout::BaseLayout',m$1.Basic,$init$Layout$layout());
(function(baseLayout$){
m$1.atr$(baseLayout$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BaseLayout$layout,pa:1,an:function(){return[m$1.doc("The page title.")];},d:['ceylon.html.layout','BaseLayout','$at','title']};});
m$1.atr$(baseLayout$,'body',function(){return this.body_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:BlockElement},{t:m$1.Null},{t:m$1.Iterable,a:{Element$Iterable:{t:BlockElement},Absent$Iterable:{t:m$1.Null}}}]},$cont:BaseLayout$layout,pa:1,an:function(){return[m$1.doc("The page body _block_.")];},d:['ceylon.html.layout','BaseLayout','$at','body']};});
m$1.atr$(baseLayout$,'description',function(){return this.$wgimgr$1vt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BaseLayout$layout,pa:9,an:function(){return[m$1.doc("The page meta description.")];},d:['ceylon.html.layout','BaseLayout','$at','description']};});
m$1.atr$(baseLayout$,'headScripts',function(){return this.$wgimgr$1vu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}},$cont:BaseLayout$layout,pa:9,d:['ceylon.html.layout','BaseLayout','$at','headScripts']};});
m$1.atr$(baseLayout$,'bodyScripts',function(){return this.$wgimgr$1vv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}},$cont:BaseLayout$layout,pa:9,d:['ceylon.html.layout','BaseLayout','$at','bodyScripts']};});
m$1.atr$(baseLayout$,'footer',function(){
return m$1.empty();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:BlockElement},{t:m$1.Null},{t:m$1.Iterable,a:{Element$Iterable:{t:BlockElement},Absent$Iterable:{t:m$1.Null}}}]},$cont:BaseLayout$layout,pa:9,d:['ceylon.html.layout','BaseLayout','$at','footer']};});
m$1.atr$(baseLayout$,'html',function(){
var baseLayout$=this;
return ($1vw=html5(),$1vx=($1vy=baseLayout$.title,$1vz=m$1.concatenate([m$1.sarg$(function($1w0){switch($1w0){case 0:return CharsetMeta();case 1:return Meta("description",baseLayout$.description);}return m$1.finished();},undefined,{Element$Iterable:{t:Meta},Absent$Iterable:{t:m$1.Nothing}}),baseLayout$.headScripts].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:Meta},{t:Script}]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}}])),{Element$concatenate:m$1.mut$([{t:Meta},{t:Script}])}),Head($1vy,undefined,$1vz)),$1w1=($1w2=[baseLayout$.body,($1w3="footer",$1w4=[baseLayout$.footer].$sa$(m$1.mut$([{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:BlockElement},{t:InlineElement}]),Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:BlockElement},{t:InlineElement}])}},{t:m$1.Null}]),1),Div(undefined,$1w3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1w4)),baseLayout$.bodyScripts].$sa$(m$1.mut$([{t:m$1.$_String},BlockOrInline(),{t:m$1.Null},{t:Script},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:BlockElement},{t:InlineElement}])}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:BlockElement},{t:InlineElement}]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}}]),1),Body(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1w2)),Html($1vw,$1vx,$1w1,undefined));
},undefined,function(){return{mod:$CCMM$,$t:{t:Html},$cont:BaseLayout$layout,pa:3,d:['ceylon.html.layout','BaseLayout','$at','html']};});
})(BaseLayout$layout.$$.prototype);
}
return BaseLayout$layout;
}
ex$.$init$BaseLayout$layout=$init$BaseLayout$layout;
$init$BaseLayout$layout();
var $1vw,$1vx,$1vy,$1vz,$1w1,$1w2,$1w3,$1w4;
function Layout$layout(layout$){
}
Layout$layout.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.layout:Layout'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html.layout'),BaseLayout$layout)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html.layout','Layout']};};
ex$.Layout$layout=Layout$layout;
function $init$Layout$layout(){
if(Layout$layout.$$===undefined){
m$1.initTypeProtoI(Layout$layout,'ceylon.html.layout::Layout');
(function(layout$){
layout$.$prop$getHtml={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Html},$cont:Layout$layout,pa:5,d:['ceylon.html.layout','Layout','$at','html']};}};
})(Layout$layout.$$.prototype);
}
return Layout$layout;
}
ex$.$init$Layout$layout=$init$Layout$layout;
$init$Layout$layout();
ex$.$pkg$ans$ceylon$html$layout=function(){return[m$1.shared()];};
function Link(rel,href,type,$wgimgr$1w5,link$){
$init$Link();
if(link$===undefined)link$=new Link.$$;
link$.rel_=rel;
link$.href_=href;
if(type===undefined){type=null;}
link$.type_=type;
if($wgimgr$1w5===undefined){$wgimgr$1w5=null;}
link$.$wgimgr$1w5_=$wgimgr$1w5;
Element($wgimgr$1w5,link$);
link$.tag_=Tag("link",emptyTag());
return link$;
}
Link.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'rel',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},{t:LinkRel}]},pa:1,an:function(){return[m$1.doc("The relationship type.")];}},{nm:'href',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Link:$at:href')];}},{nm:'type',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.$_String},{t:LinkType},{t:m$1.Null}]},pa:1,an:function(){return[m$1.doc("The content mime type.")];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Link')];},d:['ceylon.html','Link']};};
ex$.Link=Link;
function $init$Link(){
if(Link.$$===undefined){
m$1.initTypeProto(Link,'ceylon.html::Link',$init$Element());
(function(link$){
m$1.atr$(link$,'rel',function(){return this.rel_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.$_String},{t:LinkRel}]},$cont:Link,pa:1,an:function(){return[m$1.doc("The relationship type.")];},d:['ceylon.html','Link','$at','rel']};});
m$1.atr$(link$,'href',function(){return this.href_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Link,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Link:$at:href')];},d:['ceylon.html','Link','$at','href']};});
m$1.atr$(link$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.$_String},{t:LinkType},{t:m$1.Null}]},$cont:Link,pa:1,an:function(){return[m$1.doc("The content mime type.")];},d:['ceylon.html','Link','$at','type']};});
m$1.atr$(link$,'$wgimgr$1w5',function(){return this.$wgimgr$1w5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Link,d:['ceylon.html','Link','$at','id$cqgmco']};});
m$1.atr$(link$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Link,pa:3,d:['ceylon.html','Link','$at','tag']};});
m$1.atr$(link$,'attributes',function(){
var link$=this;
var $1w6=AttributeSequenceBuilder();
$1w6.addAttribute("rel",link$.rel);
$1w6.addAttribute("href",link$.href);
$1w6.addAttribute("type",link$.type);
$1w6.addAll(m$1.attrGetter(link$.getT$all()['ceylon.html::Element'],'attributes').call(this));
return $1w6.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Link,pa:11,d:['ceylon.html','Link','$at','attributes']};});
})(Link.$$.prototype);
}
return Link;
}
ex$.$init$Link=$init$Link;
$init$Link();
function LinkRel(name,linkRel$){
$init$LinkRel();
if(linkRel$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::LinkRel"),'?','?')
linkRel$.name_=name;
return linkRel$;
}
LinkRel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The name of the relationship.")];}}],of:[$prop$getExternal,$prop$getSearch,$prop$getStylesheet,$prop$getTag],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:LinkRel')];},d:['ceylon.html','LinkRel']};};
ex$.LinkRel=LinkRel;
function $init$LinkRel(){
if(LinkRel.$$===undefined){
m$1.initTypeProto(LinkRel,'ceylon.html::LinkRel',m$1.Basic);
(function(linkRel$){
m$1.atr$(linkRel$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:LinkRel,pa:1,an:function(){return[m$1.doc("The name of the relationship.")];},d:['ceylon.html','LinkRel','$at','name']};});
m$1.atr$(linkRel$,'string',function(){
var linkRel$=this;
return linkRel$.name;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:LinkRel,pa:3,d:['ceylon.html','LinkRel','$at','string']};});
})(LinkRel.$$.prototype);
}
return LinkRel;
}
ex$.$init$LinkRel=$init$LinkRel;
$init$LinkRel();
function $1w7(){
var external$=new $1w7.$$;LinkRel("external",external$);
return external$;
};$1w7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LinkRel},d:['ceylon.html','external']};};
function $init$external(){
if($1w7.$$===undefined){
m$1.initTypeProto($1w7,'ceylon.html::external',$init$LinkRel());
}
return $1w7;
}
ex$.$init$external=$init$external;
$init$external();
var $1w9;
function external(){
if($1w9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'external\' before it was set"),'40:0-40:52','Link.ceylon');
if($1w9===undefined){$1w9=m$1.INIT$;$1w9=$init$external()();$1w9.$crtmm$=external.$crtmm$;}
return $1w9;
}
ex$.external=external;
external.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$external()},pa:1,d:['ceylon.html','external']};};
$prop$getExternal=external;
ex$.$prop$getExternal=$prop$getExternal;
function $1wa(){
var search$=new $1wa.$$;LinkRel("search",search$);
return search$;
};$1wa.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LinkRel},d:['ceylon.html','search']};};
function $init$$_search(){
if($1wa.$$===undefined){
m$1.initTypeProto($1wa,'ceylon.html::search',$init$LinkRel());
}
return $1wa;
}
ex$.$init$$_search=$init$$_search;
$init$$_search();
var $1wc;
function $_search(){
if($1wc===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'search\' before it was set"),'42:0-42:48','Link.ceylon');
if($1wc===undefined){$1wc=m$1.INIT$;$1wc=$init$$_search()();$1wc.$crtmm$=$_search.$crtmm$;}
return $1wc;
}
ex$.$_search=$_search;
$_search.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$_search()},pa:1,d:['ceylon.html','search']};};
$prop$getSearch=$_search;
ex$.$prop$getSearch=$prop$getSearch;
function $1wd(){
var stylesheet$=new $1wd.$$;LinkRel("stylesheet",stylesheet$);
return stylesheet$;
};$1wd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LinkRel},d:['ceylon.html','stylesheet']};};
function $init$stylesheet(){
if($1wd.$$===undefined){
m$1.initTypeProto($1wd,'ceylon.html::stylesheet',$init$LinkRel());
}
return $1wd;
}
ex$.$init$stylesheet=$init$stylesheet;
$init$stylesheet();
var $1wf;
function stylesheet(){
if($1wf===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'stylesheet\' before it was set"),'44:0-44:56','Link.ceylon');
if($1wf===undefined){$1wf=m$1.INIT$;$1wf=$init$stylesheet()();$1wf.$crtmm$=stylesheet.$crtmm$;}
return $1wf;
}
ex$.stylesheet=stylesheet;
stylesheet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$stylesheet()},pa:1,d:['ceylon.html','stylesheet']};};
$prop$getStylesheet=stylesheet;
ex$.$prop$getStylesheet=$prop$getStylesheet;
function $1wg(){
var tag$=new $1wg.$$;LinkRel("tag",tag$);
return tag$;
};$1wg.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LinkRel},d:['ceylon.html','tag']};};
function $init$tag(){
if($1wg.$$===undefined){
m$1.initTypeProto($1wg,'ceylon.html::tag',$init$LinkRel());
}
return $1wg;
}
ex$.$init$tag=$init$tag;
$init$tag();
var $1wi;
function tag(){
if($1wi===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tag\' before it was set"),'46:0-46:42','Link.ceylon');
if($1wi===undefined){$1wi=m$1.INIT$;$1wi=$init$tag()();$1wi.$crtmm$=tag.$crtmm$;}
return $1wi;
}
ex$.tag=tag;
tag.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$tag()},pa:1,d:['ceylon.html','tag']};};
$prop$getTag=tag;
ex$.$prop$getTag=$prop$getTag;
function LinkType(type,linkType$){
$init$LinkType();
if(linkType$===undefined)linkType$=new LinkType.$$;
linkType$.type_=type;
return linkType$;
}
LinkType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.html','LinkType']};};
ex$.LinkType=LinkType;
function $init$LinkType(){
if(LinkType.$$===undefined){
m$1.initTypeProto(LinkType,'ceylon.html::LinkType',m$1.Basic);
(function(linkType$){
m$1.atr$(linkType$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:LinkType,pa:1,d:['ceylon.html','LinkType','$at','type']};});
m$1.atr$(linkType$,'string',function(){
var linkType$=this;
return linkType$.type;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:LinkType,pa:3,d:['ceylon.html','LinkType','$at','string']};});
})(LinkType.$$.prototype);
}
return LinkType;
}
ex$.$init$LinkType=$init$LinkType;
$init$LinkType();
function $1wj(){
var css$=new $1wj.$$;LinkType("text/css",css$);
return css$;
};$1wj.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LinkType},d:['ceylon.html','css']};};
function $init$css(){
if($1wj.$$===undefined){
m$1.initTypeProto($1wj,'ceylon.html::css',$init$LinkType());
}
return $1wj;
}
ex$.$init$css=$init$css;
$init$css();
var $1wl;
function css(){
if($1wl===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'css\' before it was set"),'57:0-57:48','Link.ceylon');
if($1wl===undefined){$1wl=m$1.INIT$;$1wl=$init$css()();$1wl.$crtmm$=css.$crtmm$;}
return $1wl;
}
ex$.css=css;
css.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$css()},pa:1,d:['ceylon.html','css']};};
$prop$getCss=css;
ex$.$prop$getCss=$prop$getCss;
function CssLink($wgimgr$1wm,$wgimgr$1wn,cssLink$){
$init$CssLink();
if(cssLink$===undefined)cssLink$=new CssLink.$$;
cssLink$.$wgimgr$1wm_=$wgimgr$1wm;
if($wgimgr$1wn===undefined){$wgimgr$1wn=null;}
cssLink$.$wgimgr$1wn_=$wgimgr$1wn;
Link(stylesheet(),$wgimgr$1wm,css(),$wgimgr$1wn,cssLink$);
return cssLink$;
}
CssLink.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Link},ps:[{nm:'href',mt:'prm',$t:{t:m$1.$_String}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:CssLink')];},d:['ceylon.html','CssLink']};};
ex$.CssLink=CssLink;
function $init$CssLink(){
if(CssLink.$$===undefined){
m$1.initTypeProto(CssLink,'ceylon.html::CssLink',$init$Link());
(function(cssLink$){
m$1.atr$(cssLink$,'$wgimgr$1wm',function(){return this.$wgimgr$1wm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:CssLink,d:['ceylon.html','CssLink','$at','href$oh01r1']};});
m$1.atr$(cssLink$,'$wgimgr$1wn',function(){return this.$wgimgr$1wn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:CssLink,d:['ceylon.html','CssLink','$at','id$q2dk6l']};});
})(CssLink.$$.prototype);
}
return CssLink;
}
ex$.$init$CssLink=$init$CssLink;
$init$CssLink();
function Ul($wgimgr$1wo,$wgimgr$1wp,$wgimgr$1wq,$wgimgr$1wr,$wgimgr$1ws,$wgimgr$1wt,$wgimgr$1wu,$wgimgr$1wv,$wgimgr$1ww,$wgimgr$1wx,$wgimgr$1wy,$wgimgr$1wz,$wgimgr$1x0,$wgimgr$1x1,$wgimgr$1x2,$wgimgr$1x3,$wgimgr$1x4,$wgimgr$1x5,children,ul$){
$init$Ul();
if(ul$===undefined)ul$=new Ul.$$;
ul$.$$targs$$={Child$ParentNode:{t:Li}};
if($wgimgr$1wo===undefined){$wgimgr$1wo=null;}
ul$.$wgimgr$1wo_=$wgimgr$1wo;
if($wgimgr$1wp===undefined){$wgimgr$1wp=m$1.empty();}
ul$.$wgimgr$1wp_=$wgimgr$1wp;
if($wgimgr$1wq===undefined){$wgimgr$1wq=null;}
ul$.$wgimgr$1wq_=$wgimgr$1wq;
if($wgimgr$1wr===undefined){$wgimgr$1wr=null;}
ul$.$wgimgr$1wr_=$wgimgr$1wr;
if($wgimgr$1ws===undefined){$wgimgr$1ws=null;}
ul$.$wgimgr$1ws_=$wgimgr$1ws;
if($wgimgr$1wt===undefined){$wgimgr$1wt=null;}
ul$.$wgimgr$1wt_=$wgimgr$1wt;
if($wgimgr$1wu===undefined){$wgimgr$1wu=null;}
ul$.$wgimgr$1wu_=$wgimgr$1wu;
if($wgimgr$1wv===undefined){$wgimgr$1wv=null;}
ul$.$wgimgr$1wv_=$wgimgr$1wv;
if($wgimgr$1ww===undefined){$wgimgr$1ww=null;}
ul$.$wgimgr$1ww_=$wgimgr$1ww;
if($wgimgr$1wx===undefined){$wgimgr$1wx=null;}
ul$.$wgimgr$1wx_=$wgimgr$1wx;
if($wgimgr$1wy===undefined){$wgimgr$1wy=null;}
ul$.$wgimgr$1wy_=$wgimgr$1wy;
if($wgimgr$1wz===undefined){$wgimgr$1wz=null;}
ul$.$wgimgr$1wz_=$wgimgr$1wz;
if($wgimgr$1x0===undefined){$wgimgr$1x0=null;}
ul$.$wgimgr$1x0_=$wgimgr$1x0;
if($wgimgr$1x1===undefined){$wgimgr$1x1=null;}
ul$.$wgimgr$1x1_=$wgimgr$1x1;
if($wgimgr$1x2===undefined){$wgimgr$1x2=null;}
ul$.$wgimgr$1x2_=$wgimgr$1x2;
if($wgimgr$1x3===undefined){$wgimgr$1x3=null;}
ul$.$wgimgr$1x3_=$wgimgr$1x3;
if($wgimgr$1x4===undefined){$wgimgr$1x4=m$1.empty();}
ul$.$wgimgr$1x4_=$wgimgr$1x4;
if($wgimgr$1x5===undefined){$wgimgr$1x5=m$1.empty();}
ul$.$wgimgr$1x5_=$wgimgr$1x5;
if(children===undefined){children=m$1.empty();}
ul$.children_=children;
BlockElement(ul$);
ParentNode({Child$ParentNode:{t:Li}},ul$);
BaseElement($wgimgr$1wo,$wgimgr$1wp,$wgimgr$1wq,$wgimgr$1wr,$wgimgr$1ws,$wgimgr$1wt,$wgimgr$1wu,$wgimgr$1wv,$wgimgr$1ww,$wgimgr$1wx,$wgimgr$1wy,$wgimgr$1wz,$wgimgr$1x0,$wgimgr$1x1,$wgimgr$1x2,$wgimgr$1x3,$wgimgr$1x4,$wgimgr$1x5,ul$);
ul$.tag_=Tag("ul");
return ul$;
}
Ul.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Li},{t:m$1.Iterable,a:{Element$Iterable:{t:Li},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Li}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:Li}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Ul')];},d:['ceylon.html','Ul']};};
ex$.Ul=Ul;
function $init$Ul(){
if(Ul.$$===undefined){
m$1.initTypeProto(Ul,'ceylon.html::Ul',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(ul$){
m$1.atr$(ul$,'$wgimgr$1wo',function(){return this.$wgimgr$1wo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','id$belvqb']};});
m$1.atr$(ul$,'$wgimgr$1wp',function(){return this.$wgimgr$1wp_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Ul,d:['ceylon.html','Ul','$at','classNames$90c0kq']};});
m$1.atr$(ul$,'$wgimgr$1wq',function(){return this.$wgimgr$1wq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','style$c1vhkt']};});
m$1.atr$(ul$,'$wgimgr$1wr',function(){return this.$wgimgr$1wr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','accessKey$n60dk3']};});
m$1.atr$(ul$,'$wgimgr$1ws',function(){return this.$wgimgr$1ws_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','contextMenu$zr93c']};});
m$1.atr$(ul$,'$wgimgr$1wt',function(){return this.$wgimgr$1wt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Ul,d:['ceylon.html','Ul','$at','dir$989nwh']};});
m$1.atr$(ul$,'$wgimgr$1wu',function(){return this.$wgimgr$1wu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ul,d:['ceylon.html','Ul','$at','draggable$f5tao1']};});
m$1.atr$(ul$,'$wgimgr$1wv',function(){return this.$wgimgr$1wv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Ul,d:['ceylon.html','Ul','$at','dropZone$1u164d']};});
m$1.atr$(ul$,'$wgimgr$1ww',function(){return this.$wgimgr$1ww_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ul,d:['ceylon.html','Ul','$at','inert$cj1nck']};});
m$1.atr$(ul$,'$wgimgr$1wx',function(){return this.$wgimgr$1wx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ul,d:['ceylon.html','Ul','$at','hidden$gbse24']};});
m$1.atr$(ul$,'$wgimgr$1wy',function(){return this.$wgimgr$1wy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','lang$7h6yko']};});
m$1.atr$(ul$,'$wgimgr$1wz',function(){return this.$wgimgr$1wz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ul,d:['ceylon.html','Ul','$at','spellcheck$o8wxgm']};});
m$1.atr$(ul$,'$wgimgr$1x0',function(){return this.$wgimgr$1x0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Ul,d:['ceylon.html','Ul','$at','tabIndex$f1k1db']};});
m$1.atr$(ul$,'$wgimgr$1x1',function(){return this.$wgimgr$1x1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ul,d:['ceylon.html','Ul','$at','title$1bubma']};});
m$1.atr$(ul$,'$wgimgr$1x2',function(){return this.$wgimgr$1x2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ul,d:['ceylon.html','Ul','$at','translate$u2vhzs']};});
m$1.atr$(ul$,'$wgimgr$1x3',function(){return this.$wgimgr$1x3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Ul,d:['ceylon.html','Ul','$at','aria$ej3uw5']};});
m$1.atr$(ul$,'$wgimgr$1x4',function(){return this.$wgimgr$1x4_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Ul,d:['ceylon.html','Ul','$at','nonstandardAttributes$x970q5']};});
m$1.atr$(ul$,'$wgimgr$1x5',function(){return this.$wgimgr$1x5_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Ul,d:['ceylon.html','Ul','$at','data$cvasrw']};});
m$1.atr$(ul$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Li},{t:m$1.Iterable,a:{Element$Iterable:{t:Li},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Li}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Ul,pa:3,d:['ceylon.html','Ul','$at','children']};});
m$1.atr$(ul$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Ul,pa:3,d:['ceylon.html','Ul','$at','tag']};});
})(Ul.$$.prototype);
}
return Ul;
}
ex$.$init$Ul=$init$Ul;
$init$Ul();
function Ol($wgimgr$1x6,$wgimgr$1x7,$wgimgr$1x8,$wgimgr$1x9,$wgimgr$1xa,$wgimgr$1xb,$wgimgr$1xc,$wgimgr$1xd,$wgimgr$1xe,$wgimgr$1xf,$wgimgr$1xg,$wgimgr$1xh,$wgimgr$1xi,$wgimgr$1xj,$wgimgr$1xk,$wgimgr$1xl,$wgimgr$1xm,$wgimgr$1xn,children,ol$){
$init$Ol();
if(ol$===undefined)ol$=new Ol.$$;
ol$.$$targs$$={Child$ParentNode:{t:Li}};
if($wgimgr$1x6===undefined){$wgimgr$1x6=null;}
ol$.$wgimgr$1x6_=$wgimgr$1x6;
if($wgimgr$1x7===undefined){$wgimgr$1x7=m$1.empty();}
ol$.$wgimgr$1x7_=$wgimgr$1x7;
if($wgimgr$1x8===undefined){$wgimgr$1x8=null;}
ol$.$wgimgr$1x8_=$wgimgr$1x8;
if($wgimgr$1x9===undefined){$wgimgr$1x9=null;}
ol$.$wgimgr$1x9_=$wgimgr$1x9;
if($wgimgr$1xa===undefined){$wgimgr$1xa=null;}
ol$.$wgimgr$1xa_=$wgimgr$1xa;
if($wgimgr$1xb===undefined){$wgimgr$1xb=null;}
ol$.$wgimgr$1xb_=$wgimgr$1xb;
if($wgimgr$1xc===undefined){$wgimgr$1xc=null;}
ol$.$wgimgr$1xc_=$wgimgr$1xc;
if($wgimgr$1xd===undefined){$wgimgr$1xd=null;}
ol$.$wgimgr$1xd_=$wgimgr$1xd;
if($wgimgr$1xe===undefined){$wgimgr$1xe=null;}
ol$.$wgimgr$1xe_=$wgimgr$1xe;
if($wgimgr$1xf===undefined){$wgimgr$1xf=null;}
ol$.$wgimgr$1xf_=$wgimgr$1xf;
if($wgimgr$1xg===undefined){$wgimgr$1xg=null;}
ol$.$wgimgr$1xg_=$wgimgr$1xg;
if($wgimgr$1xh===undefined){$wgimgr$1xh=null;}
ol$.$wgimgr$1xh_=$wgimgr$1xh;
if($wgimgr$1xi===undefined){$wgimgr$1xi=null;}
ol$.$wgimgr$1xi_=$wgimgr$1xi;
if($wgimgr$1xj===undefined){$wgimgr$1xj=null;}
ol$.$wgimgr$1xj_=$wgimgr$1xj;
if($wgimgr$1xk===undefined){$wgimgr$1xk=null;}
ol$.$wgimgr$1xk_=$wgimgr$1xk;
if($wgimgr$1xl===undefined){$wgimgr$1xl=null;}
ol$.$wgimgr$1xl_=$wgimgr$1xl;
if($wgimgr$1xm===undefined){$wgimgr$1xm=m$1.empty();}
ol$.$wgimgr$1xm_=$wgimgr$1xm;
if($wgimgr$1xn===undefined){$wgimgr$1xn=m$1.empty();}
ol$.$wgimgr$1xn_=$wgimgr$1xn;
if(children===undefined){children=m$1.empty();}
ol$.children_=children;
BlockElement(ol$);
ParentNode({Child$ParentNode:{t:Li}},ol$);
BaseElement($wgimgr$1x6,$wgimgr$1x7,$wgimgr$1x8,$wgimgr$1x9,$wgimgr$1xa,$wgimgr$1xb,$wgimgr$1xc,$wgimgr$1xd,$wgimgr$1xe,$wgimgr$1xf,$wgimgr$1xg,$wgimgr$1xh,$wgimgr$1xi,$wgimgr$1xj,$wgimgr$1xk,$wgimgr$1xl,$wgimgr$1xm,$wgimgr$1xn,ol$);
ol$.tag_=Tag("ol");
return ol$;
}
Ol.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Li},{t:m$1.Iterable,a:{Element$Iterable:{t:Li},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Li}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:Li}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Ol')];},d:['ceylon.html','Ol']};};
ex$.Ol=Ol;
function $init$Ol(){
if(Ol.$$===undefined){
m$1.initTypeProto(Ol,'ceylon.html::Ol',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(ol$){
m$1.atr$(ol$,'$wgimgr$1x6',function(){return this.$wgimgr$1x6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','id$jem5m5']};});
m$1.atr$(ol$,'$wgimgr$1x7',function(){return this.$wgimgr$1x7_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Ol,d:['ceylon.html','Ol','$at','classNames$10bqow']};});
m$1.atr$(ol$,'$wgimgr$1x8',function(){return this.$wgimgr$1x8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','style$k1vrgn']};});
m$1.atr$(ol$,'$wgimgr$1x9',function(){return this.$wgimgr$1x9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','accessKey$v60nfx']};});
m$1.atr$(ol$,'$wgimgr$1xa',function(){return this.$wgimgr$1xa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','contextMenu$8zriz6']};});
m$1.atr$(ol$,'$wgimgr$1xb',function(){return this.$wgimgr$1xb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Ol,d:['ceylon.html','Ol','$at','dir$h89xsb']};});
m$1.atr$(ol$,'$wgimgr$1xc',function(){return this.$wgimgr$1xc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ol,d:['ceylon.html','Ol','$at','draggable$n5tkjv']};});
m$1.atr$(ol$,'$wgimgr$1xd',function(){return this.$wgimgr$1xd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Ol,d:['ceylon.html','Ol','$at','dropZone$65z3rh']};});
m$1.atr$(ol$,'$wgimgr$1xe',function(){return this.$wgimgr$1xe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ol,d:['ceylon.html','Ol','$at','inert$kj1x8e']};});
m$1.atr$(ol$,'$wgimgr$1xf',function(){return this.$wgimgr$1xf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ol,d:['ceylon.html','Ol','$at','hidden$obsnxy']};});
m$1.atr$(ol$,'$wgimgr$1xg',function(){return this.$wgimgr$1xg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','lang$fh78gi']};});
m$1.atr$(ol$,'$wgimgr$1xh',function(){return this.$wgimgr$1xh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ol,d:['ceylon.html','Ol','$at','spellcheck$w8x7cg']};});
m$1.atr$(ol$,'$wgimgr$1xi',function(){return this.$wgimgr$1xi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Ol,d:['ceylon.html','Ol','$at','tabIndex$71jrhh']};});
m$1.atr$(ol$,'$wgimgr$1xj',function(){return this.$wgimgr$1xj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ol,d:['ceylon.html','Ol','$at','title$6o5y9k']};});
m$1.atr$(ol$,'$wgimgr$1xk',function(){return this.$wgimgr$1xk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ol,d:['ceylon.html','Ol','$at','translate$m2v83y']};});
m$1.atr$(ol$,'$wgimgr$1xl',function(){return this.$wgimgr$1xl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Ol,d:['ceylon.html','Ol','$at','aria$mj44rz']};});
m$1.atr$(ol$,'$wgimgr$1xm',function(){return this.$wgimgr$1xm_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Ol,d:['ceylon.html','Ol','$at','nonstandardAttributes$trwrd5']};});
m$1.atr$(ol$,'$wgimgr$1xn',function(){return this.$wgimgr$1xn_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Ol,d:['ceylon.html','Ol','$at','data$kvb2nq']};});
m$1.atr$(ol$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Li},{t:m$1.Iterable,a:{Element$Iterable:{t:Li},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Li}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Ol,pa:3,d:['ceylon.html','Ol','$at','children']};});
m$1.atr$(ol$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Ol,pa:3,d:['ceylon.html','Ol','$at','tag']};});
})(Ol.$$.prototype);
}
return Ol;
}
ex$.$init$Ol=$init$Ol;
$init$Ol();
function Li(text,$wgimgr$1xo,$wgimgr$1xp,$wgimgr$1xq,$wgimgr$1xr,$wgimgr$1xs,$wgimgr$1xt,$wgimgr$1xu,$wgimgr$1xv,$wgimgr$1xw,$wgimgr$1xx,$wgimgr$1xy,$wgimgr$1xz,$wgimgr$1y0,$wgimgr$1y1,$wgimgr$1y2,$wgimgr$1y3,$wgimgr$1y4,$wgimgr$1y5,children,li$){
$init$Li();
if(li$===undefined)li$=new Li.$$;
li$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(text===undefined){text="";}
li$.text_=text;
if($wgimgr$1xo===undefined){$wgimgr$1xo=null;}
li$.$wgimgr$1xo_=$wgimgr$1xo;
if($wgimgr$1xp===undefined){$wgimgr$1xp=m$1.empty();}
li$.$wgimgr$1xp_=$wgimgr$1xp;
if($wgimgr$1xq===undefined){$wgimgr$1xq=null;}
li$.$wgimgr$1xq_=$wgimgr$1xq;
if($wgimgr$1xr===undefined){$wgimgr$1xr=null;}
li$.$wgimgr$1xr_=$wgimgr$1xr;
if($wgimgr$1xs===undefined){$wgimgr$1xs=null;}
li$.$wgimgr$1xs_=$wgimgr$1xs;
if($wgimgr$1xt===undefined){$wgimgr$1xt=null;}
li$.$wgimgr$1xt_=$wgimgr$1xt;
if($wgimgr$1xu===undefined){$wgimgr$1xu=null;}
li$.$wgimgr$1xu_=$wgimgr$1xu;
if($wgimgr$1xv===undefined){$wgimgr$1xv=null;}
li$.$wgimgr$1xv_=$wgimgr$1xv;
if($wgimgr$1xw===undefined){$wgimgr$1xw=null;}
li$.$wgimgr$1xw_=$wgimgr$1xw;
if($wgimgr$1xx===undefined){$wgimgr$1xx=null;}
li$.$wgimgr$1xx_=$wgimgr$1xx;
if($wgimgr$1xy===undefined){$wgimgr$1xy=null;}
li$.$wgimgr$1xy_=$wgimgr$1xy;
if($wgimgr$1xz===undefined){$wgimgr$1xz=null;}
li$.$wgimgr$1xz_=$wgimgr$1xz;
if($wgimgr$1y0===undefined){$wgimgr$1y0=null;}
li$.$wgimgr$1y0_=$wgimgr$1y0;
if($wgimgr$1y1===undefined){$wgimgr$1y1=null;}
li$.$wgimgr$1y1_=$wgimgr$1y1;
if($wgimgr$1y2===undefined){$wgimgr$1y2=null;}
li$.$wgimgr$1y2_=$wgimgr$1y2;
if($wgimgr$1y3===undefined){$wgimgr$1y3=null;}
li$.$wgimgr$1y3_=$wgimgr$1y3;
if($wgimgr$1y4===undefined){$wgimgr$1y4=m$1.empty();}
li$.$wgimgr$1y4_=$wgimgr$1y4;
if($wgimgr$1y5===undefined){$wgimgr$1y5=m$1.empty();}
li$.$wgimgr$1y5_=$wgimgr$1y5;
if(children===undefined){children=m$1.empty();}
li$.children_=children;
TextNode(li$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},li$);
BaseElement($wgimgr$1xo,$wgimgr$1xp,$wgimgr$1xq,$wgimgr$1xr,$wgimgr$1xs,$wgimgr$1xt,$wgimgr$1xu,$wgimgr$1xv,$wgimgr$1xw,$wgimgr$1xx,$wgimgr$1xy,$wgimgr$1xz,$wgimgr$1y0,$wgimgr$1y1,$wgimgr$1y2,$wgimgr$1y3,$wgimgr$1y4,$wgimgr$1y5,li$);
li$.tag_=Tag("li");
return li$;
}
Li.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Li')];},d:['ceylon.html','Li']};};
ex$.Li=Li;
function $init$Li(){
if(Li.$$===undefined){
m$1.initTypeProto(Li,'ceylon.html::Li',$init$TextNode(),$init$ParentNode(),$init$BaseElement());
(function(li$){
m$1.atr$(li$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Li,pa:3,d:['ceylon.html','Li','$at','text']};});
m$1.atr$(li$,'$wgimgr$1xo',function(){return this.$wgimgr$1xo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','id$qvgkvn']};});
m$1.atr$(li$,'$wgimgr$1xp',function(){return this.$wgimgr$1xp_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Li,d:['ceylon.html','Li','$at','classNames$nqpksg']};});
m$1.atr$(li$,'$wgimgr$1xq',function(){return this.$wgimgr$1xq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','style$q86z15']};});
m$1.atr$(li$,'$wgimgr$1xr',function(){return this.$wgimgr$1xr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','accessKey$f4231v']};});
m$1.atr$(li$,'$wgimgr$1xs',function(){return this.$wgimgr$1xs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','contextMenu$xqsugi']};});
m$1.atr$(li$,'$wgimgr$1xt',function(){return this.$wgimgr$1xt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Li,d:['ceylon.html','Li','$at','dir$t1ssph']};});
m$1.atr$(li$,'$wgimgr$1xu',function(){return this.$wgimgr$1xu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Li,d:['ceylon.html','Li','$at','draggable$n495xx']};});
m$1.atr$(li$,'$wgimgr$1xv',function(){return this.$wgimgr$1xv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Li,d:['ceylon.html','Li','$at','dropZone$ux0f8t']};});
m$1.atr$(li$,'$wgimgr$1xw',function(){return this.$wgimgr$1xw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Li,d:['ceylon.html','Li','$at','inert$pr0t9e']};});
m$1.atr$(li$,'$wgimgr$1xx',function(){return this.$wgimgr$1xx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Li,d:['ceylon.html','Li','$at','hidden$lya2ju']};});
m$1.atr$(li$,'$wgimgr$1xy',function(){return this.$wgimgr$1xy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','lang$usvi1a']};});
m$1.atr$(li$,'$wgimgr$1xz',function(){return this.$wgimgr$1xz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Li,d:['ceylon.html','Li','$at','spellcheck$e15j5c']};});
m$1.atr$(li$,'$wgimgr$1y0',function(){return this.$wgimgr$1y0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Li,d:['ceylon.html','Li','$at','tabIndex$hphjzv']};});
m$1.atr$(li$,'$wgimgr$1y1',function(){return this.$wgimgr$1y1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Li,d:['ceylon.html','Li','$at','title$vf79qw']};});
m$1.atr$(li$,'$wgimgr$1y2',function(){return this.$wgimgr$1y2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Li,d:['ceylon.html','Li','$at','translate$2o63de']};});
m$1.atr$(li$,'$wgimgr$1y3',function(){return this.$wgimgr$1y3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Li,d:['ceylon.html','Li','$at','aria$nqylpt']};});
m$1.atr$(li$,'$wgimgr$1y4',function(){return this.$wgimgr$1y4_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Li,d:['ceylon.html','Li','$at','nonstandardAttributes$50vfvt']};});
m$1.atr$(li$,'$wgimgr$1y5',function(){return this.$wgimgr$1y5_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Li,d:['ceylon.html','Li','$at','data$pernu2']};});
m$1.atr$(li$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Li,pa:3,d:['ceylon.html','Li','$at','children']};});
m$1.atr$(li$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Li,pa:3,d:['ceylon.html','Li','$at','tag']};});
})(Li.$$.prototype);
}
return Li;
}
ex$.$init$Li=$init$Li;
$init$Li();
function Dl($wgimgr$1y6,$wgimgr$1y7,$wgimgr$1y8,$wgimgr$1y9,$wgimgr$1ya,$wgimgr$1yb,$wgimgr$1yc,$wgimgr$1yd,$wgimgr$1ye,$wgimgr$1yf,$wgimgr$1yg,$wgimgr$1yh,$wgimgr$1yi,$wgimgr$1yj,$wgimgr$1yk,$wgimgr$1yl,$wgimgr$1ym,$wgimgr$1yn,children,dl$){
$init$Dl();
if(dl$===undefined)dl$=new Dl.$$;
dl$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Dt},{t:Dd}])};
if($wgimgr$1y6===undefined){$wgimgr$1y6=null;}
dl$.$wgimgr$1y6_=$wgimgr$1y6;
if($wgimgr$1y7===undefined){$wgimgr$1y7=m$1.empty();}
dl$.$wgimgr$1y7_=$wgimgr$1y7;
if($wgimgr$1y8===undefined){$wgimgr$1y8=null;}
dl$.$wgimgr$1y8_=$wgimgr$1y8;
if($wgimgr$1y9===undefined){$wgimgr$1y9=null;}
dl$.$wgimgr$1y9_=$wgimgr$1y9;
if($wgimgr$1ya===undefined){$wgimgr$1ya=null;}
dl$.$wgimgr$1ya_=$wgimgr$1ya;
if($wgimgr$1yb===undefined){$wgimgr$1yb=null;}
dl$.$wgimgr$1yb_=$wgimgr$1yb;
if($wgimgr$1yc===undefined){$wgimgr$1yc=null;}
dl$.$wgimgr$1yc_=$wgimgr$1yc;
if($wgimgr$1yd===undefined){$wgimgr$1yd=null;}
dl$.$wgimgr$1yd_=$wgimgr$1yd;
if($wgimgr$1ye===undefined){$wgimgr$1ye=null;}
dl$.$wgimgr$1ye_=$wgimgr$1ye;
if($wgimgr$1yf===undefined){$wgimgr$1yf=null;}
dl$.$wgimgr$1yf_=$wgimgr$1yf;
if($wgimgr$1yg===undefined){$wgimgr$1yg=null;}
dl$.$wgimgr$1yg_=$wgimgr$1yg;
if($wgimgr$1yh===undefined){$wgimgr$1yh=null;}
dl$.$wgimgr$1yh_=$wgimgr$1yh;
if($wgimgr$1yi===undefined){$wgimgr$1yi=null;}
dl$.$wgimgr$1yi_=$wgimgr$1yi;
if($wgimgr$1yj===undefined){$wgimgr$1yj=null;}
dl$.$wgimgr$1yj_=$wgimgr$1yj;
if($wgimgr$1yk===undefined){$wgimgr$1yk=null;}
dl$.$wgimgr$1yk_=$wgimgr$1yk;
if($wgimgr$1yl===undefined){$wgimgr$1yl=null;}
dl$.$wgimgr$1yl_=$wgimgr$1yl;
if($wgimgr$1ym===undefined){$wgimgr$1ym=m$1.empty();}
dl$.$wgimgr$1ym_=$wgimgr$1ym;
if($wgimgr$1yn===undefined){$wgimgr$1yn=m$1.empty();}
dl$.$wgimgr$1yn_=$wgimgr$1yn;
if(children===undefined){children=m$1.empty();}
dl$.children_=children;
BlockElement(dl$);
ParentNode({Child$ParentNode:m$1.mut$([{t:Dt},{t:Dd}])},dl$);
BaseElement($wgimgr$1y6,$wgimgr$1y7,$wgimgr$1y8,$wgimgr$1y9,$wgimgr$1ya,$wgimgr$1yb,$wgimgr$1yc,$wgimgr$1yd,$wgimgr$1ye,$wgimgr$1yf,$wgimgr$1yg,$wgimgr$1yh,$wgimgr$1yi,$wgimgr$1yj,$wgimgr$1yk,$wgimgr$1yl,$wgimgr$1ym,$wgimgr$1yn,dl$);
dl$.tag_=Tag("dl");
return dl$;
}
Dl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Dt},{t:Dd},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Dt},{t:Dd}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Dt},{t:Dd}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[{t:Dt},{t:Dd}]}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Dl')];},d:['ceylon.html','Dl']};};
ex$.Dl=Dl;
function $init$Dl(){
if(Dl.$$===undefined){
m$1.initTypeProto(Dl,'ceylon.html::Dl',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(dl$){
m$1.atr$(dl$,'$wgimgr$1y6',function(){return this.$wgimgr$1y6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','id$1fxd92']};});
m$1.atr$(dl$,'$wgimgr$1y7',function(){return this.$wgimgr$1y7_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Dl,d:['ceylon.html','Dl','$at','classNames$luv9k3']};});
m$1.atr$(dl$,'$wgimgr$1y8',function(){return this.$wgimgr$1y8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','style$snrek']};});
m$1.atr$(dl$,'$wgimgr$1y9',function(){return this.$wgimgr$1y9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','accessKey$abh4kq']};});
m$1.atr$(dl$,'$wgimgr$1ya',function(){return this.$wgimgr$1ya_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','contextMenu$burzw1']};});
m$1.atr$(dl$,'$wgimgr$1yb',function(){return this.$wgimgr$1yb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Dl,d:['ceylon.html','Dl','$at','dir$3m9l2w']};});
m$1.atr$(dl$,'$wgimgr$1yc',function(){return this.$wgimgr$1yc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dl,d:['ceylon.html','Dl','$at','draggable$2ba1oo']};});
m$1.atr$(dl$,'$wgimgr$1yd',function(){return this.$wgimgr$1yd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Dl,d:['ceylon.html','Dl','$at','dropZone$eokf3q']};});
m$1.atr$(dl$,'$wgimgr$1ye',function(){return this.$wgimgr$1ye_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dl,d:['ceylon.html','Dl','$at','inert$bhlmt']};});
m$1.atr$(dl$,'$wgimgr$1yf',function(){return this.$wgimgr$1yf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dl,d:['ceylon.html','Dl','$at','hidden$3h952r']};});
m$1.atr$(dl$,'$wgimgr$1yg',function(){return this.$wgimgr$1yg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','lang$5dcaep']};});
m$1.atr$(dl$,'$wgimgr$1yh',function(){return this.$wgimgr$1yh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dl,d:['ceylon.html','Dl','$at','spellcheck$bedoh9']};});
m$1.atr$(dl$,'$wgimgr$1yi',function(){return this.$wgimgr$1yi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Dl,d:['ceylon.html','Dl','$at','tabIndex$rw3aco']};});
m$1.atr$(dl$,'$wgimgr$1yj',function(){return this.$wgimgr$1yj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dl,d:['ceylon.html','Dl','$at','title$e6dkln']};});
m$1.atr$(dl$,'$wgimgr$1yk',function(){return this.$wgimgr$1yk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dl,d:['ceylon.html','Dl','$at','translate$s3pazz']};});
m$1.atr$(dl$,'$wgimgr$1yl',function(){return this.$wgimgr$1yl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Dl,d:['ceylon.html','Dl','$at','aria$1oklws']};});
m$1.atr$(dl$,'$wgimgr$1ym',function(){return this.$wgimgr$1ym_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Dl,d:['ceylon.html','Dl','$at','nonstandardAttributes$kenrqs']};});
m$1.atr$(dl$,'$wgimgr$1yn',function(){return this.$wgimgr$1yn_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Dl,d:['ceylon.html','Dl','$at','data$rjsj']};});
m$1.atr$(dl$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Dt},{t:Dd},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Dt},{t:Dd}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Dt},{t:Dd}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Dl,pa:3,d:['ceylon.html','Dl','$at','children']};});
m$1.atr$(dl$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Dl,pa:3,d:['ceylon.html','Dl','$at','tag']};});
})(Dl.$$.prototype);
}
return Dl;
}
ex$.$init$Dl=$init$Dl;
$init$Dl();
function Dt(text,$wgimgr$1yo,$wgimgr$1yp,$wgimgr$1yq,$wgimgr$1yr,$wgimgr$1ys,$wgimgr$1yt,$wgimgr$1yu,$wgimgr$1yv,$wgimgr$1yw,$wgimgr$1yx,$wgimgr$1yy,$wgimgr$1yz,$wgimgr$1z0,$wgimgr$1z1,$wgimgr$1z2,$wgimgr$1z3,$wgimgr$1z4,$wgimgr$1z5,children,dt$){
$init$Dt();
if(dt$===undefined)dt$=new Dt.$$;
dt$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
dt$.text_=text;
if($wgimgr$1yo===undefined){$wgimgr$1yo=null;}
dt$.$wgimgr$1yo_=$wgimgr$1yo;
if($wgimgr$1yp===undefined){$wgimgr$1yp=m$1.empty();}
dt$.$wgimgr$1yp_=$wgimgr$1yp;
if($wgimgr$1yq===undefined){$wgimgr$1yq=null;}
dt$.$wgimgr$1yq_=$wgimgr$1yq;
if($wgimgr$1yr===undefined){$wgimgr$1yr=null;}
dt$.$wgimgr$1yr_=$wgimgr$1yr;
if($wgimgr$1ys===undefined){$wgimgr$1ys=null;}
dt$.$wgimgr$1ys_=$wgimgr$1ys;
if($wgimgr$1yt===undefined){$wgimgr$1yt=null;}
dt$.$wgimgr$1yt_=$wgimgr$1yt;
if($wgimgr$1yu===undefined){$wgimgr$1yu=null;}
dt$.$wgimgr$1yu_=$wgimgr$1yu;
if($wgimgr$1yv===undefined){$wgimgr$1yv=null;}
dt$.$wgimgr$1yv_=$wgimgr$1yv;
if($wgimgr$1yw===undefined){$wgimgr$1yw=null;}
dt$.$wgimgr$1yw_=$wgimgr$1yw;
if($wgimgr$1yx===undefined){$wgimgr$1yx=null;}
dt$.$wgimgr$1yx_=$wgimgr$1yx;
if($wgimgr$1yy===undefined){$wgimgr$1yy=null;}
dt$.$wgimgr$1yy_=$wgimgr$1yy;
if($wgimgr$1yz===undefined){$wgimgr$1yz=null;}
dt$.$wgimgr$1yz_=$wgimgr$1yz;
if($wgimgr$1z0===undefined){$wgimgr$1z0=null;}
dt$.$wgimgr$1z0_=$wgimgr$1z0;
if($wgimgr$1z1===undefined){$wgimgr$1z1=null;}
dt$.$wgimgr$1z1_=$wgimgr$1z1;
if($wgimgr$1z2===undefined){$wgimgr$1z2=null;}
dt$.$wgimgr$1z2_=$wgimgr$1z2;
if($wgimgr$1z3===undefined){$wgimgr$1z3=null;}
dt$.$wgimgr$1z3_=$wgimgr$1z3;
if($wgimgr$1z4===undefined){$wgimgr$1z4=m$1.empty();}
dt$.$wgimgr$1z4_=$wgimgr$1z4;
if($wgimgr$1z5===undefined){$wgimgr$1z5=m$1.empty();}
dt$.$wgimgr$1z5_=$wgimgr$1z5;
if(children===undefined){children=m$1.empty();}
dt$.children_=children;
TextNode(dt$);
ParentNode({Child$ParentNode:{t:InlineElement}},dt$);
BaseElement($wgimgr$1yo,$wgimgr$1yp,$wgimgr$1yq,$wgimgr$1yr,$wgimgr$1ys,$wgimgr$1yt,$wgimgr$1yu,$wgimgr$1yv,$wgimgr$1yw,$wgimgr$1yx,$wgimgr$1yy,$wgimgr$1yz,$wgimgr$1z0,$wgimgr$1z1,$wgimgr$1z2,$wgimgr$1z3,$wgimgr$1z4,$wgimgr$1z5,dt$);
dt$.tag_=Tag("dt");
return dt$;
}
Dt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Dt'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Dl)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Dt']};};
ex$.Dt=Dt;
function $init$Dt(){
if(Dt.$$===undefined){
m$1.initTypeProto(Dt,'ceylon.html::Dt',$init$TextNode(),$init$ParentNode(),$init$BaseElement());
(function(dt$){
m$1.atr$(dt$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Dt,pa:3,d:['ceylon.html','Dt','$at','text']};});
m$1.atr$(dt$,'$wgimgr$1yo',function(){return this.$wgimgr$1yo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','id$e93jaa']};});
m$1.atr$(dt$,'$wgimgr$1yp',function(){return this.$wgimgr$1yp_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Dt,d:['ceylon.html','Dt','$at','classNames$65ud0r']};});
m$1.atr$(dt$,'$wgimgr$1yq',function(){return this.$wgimgr$1yq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','style$ewd54s']};});
m$1.atr$(dt$,'$wgimgr$1yr',function(){return this.$wgimgr$1yr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','accessKey$q0i142']};});
m$1.atr$(dt$,'$wgimgr$1ys',function(){return this.$wgimgr$1ys_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','contextMenu$3u8wnb']};});
m$1.atr$(dt$,'$wgimgr$1yt',function(){return this.$wgimgr$1yt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Dt,d:['ceylon.html','Dt','$at','dir$c2rbgg']};});
m$1.atr$(dt$,'$wgimgr$1yu',function(){return this.$wgimgr$1yu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dt,d:['ceylon.html','Dt','$at','draggable$i0ay80']};});
m$1.atr$(dt$,'$wgimgr$1yv',function(){return this.$wgimgr$1yv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Dt,d:['ceylon.html','Dt','$at','dropZone$10ghfm']};});
m$1.atr$(dt$,'$wgimgr$1yw',function(){return this.$wgimgr$1yw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dt,d:['ceylon.html','Dt','$at','inert$fdjawj']};});
m$1.atr$(dt$,'$wgimgr$1yx',function(){return this.$wgimgr$1yx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dt,d:['ceylon.html','Dt','$at','hidden$j6a1m3']};});
m$1.atr$(dt$,'$wgimgr$1yy',function(){return this.$wgimgr$1yy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','lang$abom4n']};});
m$1.atr$(dt$,'$wgimgr$1yz',function(){return this.$wgimgr$1yz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dt,d:['ceylon.html','Dt','$at','spellcheck$r3el0l']};});
m$1.atr$(dt$,'$wgimgr$1z0',function(){return this.$wgimgr$1z0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Dt,d:['ceylon.html','Dt','$at','tabIndex$c72dtc']};});
m$1.atr$(dt$,'$wgimgr$1z1',function(){return this.$wgimgr$1z1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dt,d:['ceylon.html','Dt','$at','title$1inbxp']};});
m$1.atr$(dt$,'$wgimgr$1z2',function(){return this.$wgimgr$1z2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dt,d:['ceylon.html','Dt','$at','translate$r8duft']};});
m$1.atr$(dt$,'$wgimgr$1z3',function(){return this.$wgimgr$1z3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Dt,d:['ceylon.html','Dt','$at','aria$hdlig4']};});
m$1.atr$(dt$,'$wgimgr$1z4',function(){return this.$wgimgr$1z4_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Dt,d:['ceylon.html','Dt','$at','nonstandardAttributes$yxfdp0']};});
m$1.atr$(dt$,'$wgimgr$1z5',function(){return this.$wgimgr$1z5_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Dt,d:['ceylon.html','Dt','$at','data$fpsgbv']};});
m$1.atr$(dt$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Dt,pa:3,d:['ceylon.html','Dt','$at','children']};});
m$1.atr$(dt$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Dt,pa:3,d:['ceylon.html','Dt','$at','tag']};});
})(Dt.$$.prototype);
}
return Dt;
}
ex$.$init$Dt=$init$Dt;
$init$Dt();
function Dd(text,$wgimgr$1z6,$wgimgr$1z7,$wgimgr$1z8,$wgimgr$1z9,$wgimgr$1za,$wgimgr$1zb,$wgimgr$1zc,$wgimgr$1zd,$wgimgr$1ze,$wgimgr$1zf,$wgimgr$1zg,$wgimgr$1zh,$wgimgr$1zi,$wgimgr$1zj,$wgimgr$1zk,$wgimgr$1zl,$wgimgr$1zm,$wgimgr$1zn,children,dd$){
$init$Dd();
if(dd$===undefined)dd$=new Dd.$$;
dd$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(text===undefined){text="";}
dd$.text_=text;
if($wgimgr$1z6===undefined){$wgimgr$1z6=null;}
dd$.$wgimgr$1z6_=$wgimgr$1z6;
if($wgimgr$1z7===undefined){$wgimgr$1z7=m$1.empty();}
dd$.$wgimgr$1z7_=$wgimgr$1z7;
if($wgimgr$1z8===undefined){$wgimgr$1z8=null;}
dd$.$wgimgr$1z8_=$wgimgr$1z8;
if($wgimgr$1z9===undefined){$wgimgr$1z9=null;}
dd$.$wgimgr$1z9_=$wgimgr$1z9;
if($wgimgr$1za===undefined){$wgimgr$1za=null;}
dd$.$wgimgr$1za_=$wgimgr$1za;
if($wgimgr$1zb===undefined){$wgimgr$1zb=null;}
dd$.$wgimgr$1zb_=$wgimgr$1zb;
if($wgimgr$1zc===undefined){$wgimgr$1zc=null;}
dd$.$wgimgr$1zc_=$wgimgr$1zc;
if($wgimgr$1zd===undefined){$wgimgr$1zd=null;}
dd$.$wgimgr$1zd_=$wgimgr$1zd;
if($wgimgr$1ze===undefined){$wgimgr$1ze=null;}
dd$.$wgimgr$1ze_=$wgimgr$1ze;
if($wgimgr$1zf===undefined){$wgimgr$1zf=null;}
dd$.$wgimgr$1zf_=$wgimgr$1zf;
if($wgimgr$1zg===undefined){$wgimgr$1zg=null;}
dd$.$wgimgr$1zg_=$wgimgr$1zg;
if($wgimgr$1zh===undefined){$wgimgr$1zh=null;}
dd$.$wgimgr$1zh_=$wgimgr$1zh;
if($wgimgr$1zi===undefined){$wgimgr$1zi=null;}
dd$.$wgimgr$1zi_=$wgimgr$1zi;
if($wgimgr$1zj===undefined){$wgimgr$1zj=null;}
dd$.$wgimgr$1zj_=$wgimgr$1zj;
if($wgimgr$1zk===undefined){$wgimgr$1zk=null;}
dd$.$wgimgr$1zk_=$wgimgr$1zk;
if($wgimgr$1zl===undefined){$wgimgr$1zl=null;}
dd$.$wgimgr$1zl_=$wgimgr$1zl;
if($wgimgr$1zm===undefined){$wgimgr$1zm=m$1.empty();}
dd$.$wgimgr$1zm_=$wgimgr$1zm;
if($wgimgr$1zn===undefined){$wgimgr$1zn=m$1.empty();}
dd$.$wgimgr$1zn_=$wgimgr$1zn;
if(children===undefined){children=m$1.empty();}
dd$.children_=children;
TextNode(dd$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},dd$);
BaseElement($wgimgr$1z6,$wgimgr$1z7,$wgimgr$1z8,$wgimgr$1z9,$wgimgr$1za,$wgimgr$1zb,$wgimgr$1zc,$wgimgr$1zd,$wgimgr$1ze,$wgimgr$1zf,$wgimgr$1zg,$wgimgr$1zh,$wgimgr$1zi,$wgimgr$1zj,$wgimgr$1zk,$wgimgr$1zl,$wgimgr$1zm,$wgimgr$1zn,dd$);
dd$.tag_=Tag("dd");
return dd$;
}
Dd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Dd'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Dl)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Dd']};};
ex$.Dd=Dd;
function $init$Dd(){
if(Dd.$$===undefined){
m$1.initTypeProto(Dd,'ceylon.html::Dd',$init$TextNode(),$init$ParentNode(),$init$BaseElement());
(function(dd$){
m$1.atr$(dd$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Dd,pa:3,d:['ceylon.html','Dd','$at','text']};});
m$1.atr$(dd$,'$wgimgr$1z6',function(){return this.$wgimgr$1z6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','id$h4y9se']};});
m$1.atr$(dd$,'$wgimgr$1z7',function(){return this.$wgimgr$1z7_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Dd,d:['ceylon.html','Dd','$at','classNames$xh7vvp']};});
m$1.atr$(dd$,'$wgimgr$1z8',function(){return this.$wgimgr$1z8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','style$ghonxw']};});
m$1.atr$(dd$,'$wgimgr$1z9',function(){return this.$wgimgr$1z9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','accessKey$5djrym']};});
m$1.atr$(dd$,'$wgimgr$1za',function(){return this.$wgimgr$1za_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','contextMenu$rjswfd']};});
m$1.atr$(dd$,'$wgimgr$1zb',function(){return this.$wgimgr$1zb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Dd,d:['ceylon.html','Dd','$at','dir$jbahm8']};});
m$1.atr$(dd$,'$wgimgr$1zc',function(){return this.$wgimgr$1zc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dd,d:['ceylon.html','Dd','$at','draggable$ddquuo']};});
m$1.atr$(dd$,'$wgimgr$1zd',function(){return this.$wgimgr$1zd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Dd,d:['ceylon.html','Dd','$at','dropZone$udlbn2']};});
m$1.atr$(dd$,'$wgimgr$1ze',function(){return this.$wgimgr$1ze_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dd,d:['ceylon.html','Dd','$at','inert$g0ii65']};});
m$1.atr$(dd$,'$wgimgr$1zf',function(){return this.$wgimgr$1zf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dd,d:['ceylon.html','Dd','$at','hidden$c7rrgl']};});
m$1.atr$(dd$,'$wgimgr$1zg',function(){return this.$wgimgr$1zg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','lang$l2d6y1']};});
m$1.atr$(dd$,'$wgimgr$1zh',function(){return this.$wgimgr$1zh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dd,d:['ceylon.html','Dd','$at','spellcheck$4an823']};});
m$1.atr$(dd$,'$wgimgr$1zi',function(){return this.$wgimgr$1zi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Dd,d:['ceylon.html','Dd','$at','tabIndex$rfzv34']};});
m$1.atr$(dd$,'$wgimgr$1zj',function(){return this.$wgimgr$1zj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dd,d:['ceylon.html','Dd','$at','title$tveh4z']};});
m$1.atr$(dd$,'$wgimgr$1zk',function(){return this.$wgimgr$1zk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dd,d:['ceylon.html','Dd','$at','translate$ceoegn']};});
m$1.atr$(dd$,'$wgimgr$1zl',function(){return this.$wgimgr$1zl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Dd,d:['ceylon.html','Dd','$at','aria$e0gamk']};});
m$1.atr$(dd$,'$wgimgr$1zm',function(){return this.$wgimgr$1zm_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Dd,d:['ceylon.html','Dd','$at','nonstandardAttributes$4pmv7g']};});
m$1.atr$(dd$,'$wgimgr$1zn',function(){return this.$wgimgr$1zn_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Dd,d:['ceylon.html','Dd','$at','data$fo9cqt']};});
m$1.atr$(dd$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Dd,pa:3,d:['ceylon.html','Dd','$at','children']};});
m$1.atr$(dd$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Dd,pa:3,d:['ceylon.html','Dd','$at','tag']};});
})(Dd.$$.prototype);
}
return Dd;
}
ex$.$init$Dd=$init$Dd;
$init$Dd();
function Media(src,autoPlay,controls,loop,muted,preload,$wgimgr$1zo,$wgimgr$1zp,$wgimgr$1zq,$wgimgr$1zr,$wgimgr$1zs,$wgimgr$1zt,$wgimgr$1zu,$wgimgr$1zv,$wgimgr$1zw,$wgimgr$1zx,$wgimgr$1zy,$wgimgr$1zz,$wgimgr$200,$wgimgr$201,$wgimgr$202,$wgimgr$203,$wgimgr$204,$wgimgr$205,children,media$){
$init$Media();
if(media$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::Media"),'?','?')
media$.$$targs$$={Child$ParentNode:{t:Source}};
media$.src_=src;
if(autoPlay===undefined){autoPlay=null;}
media$.autoPlay_=autoPlay;
if(controls===undefined){controls=null;}
media$.controls_=controls;
if(loop===undefined){loop=null;}
media$.loop_=loop;
if(muted===undefined){muted=null;}
media$.muted_=muted;
if(preload===undefined){preload=null;}
media$.preload_=preload;
if($wgimgr$1zo===undefined){$wgimgr$1zo=null;}
media$.$wgimgr$1zo_=$wgimgr$1zo;
if($wgimgr$1zp===undefined){$wgimgr$1zp=m$1.empty();}
media$.$wgimgr$1zp_=$wgimgr$1zp;
if($wgimgr$1zq===undefined){$wgimgr$1zq=null;}
media$.$wgimgr$1zq_=$wgimgr$1zq;
if($wgimgr$1zr===undefined){$wgimgr$1zr=null;}
media$.$wgimgr$1zr_=$wgimgr$1zr;
if($wgimgr$1zs===undefined){$wgimgr$1zs=null;}
media$.$wgimgr$1zs_=$wgimgr$1zs;
if($wgimgr$1zt===undefined){$wgimgr$1zt=null;}
media$.$wgimgr$1zt_=$wgimgr$1zt;
if($wgimgr$1zu===undefined){$wgimgr$1zu=null;}
media$.$wgimgr$1zu_=$wgimgr$1zu;
if($wgimgr$1zv===undefined){$wgimgr$1zv=null;}
media$.$wgimgr$1zv_=$wgimgr$1zv;
if($wgimgr$1zw===undefined){$wgimgr$1zw=null;}
media$.$wgimgr$1zw_=$wgimgr$1zw;
if($wgimgr$1zx===undefined){$wgimgr$1zx=null;}
media$.$wgimgr$1zx_=$wgimgr$1zx;
if($wgimgr$1zy===undefined){$wgimgr$1zy=null;}
media$.$wgimgr$1zy_=$wgimgr$1zy;
if($wgimgr$1zz===undefined){$wgimgr$1zz=null;}
media$.$wgimgr$1zz_=$wgimgr$1zz;
if($wgimgr$200===undefined){$wgimgr$200=null;}
media$.$wgimgr$200_=$wgimgr$200;
if($wgimgr$201===undefined){$wgimgr$201=null;}
media$.$wgimgr$201_=$wgimgr$201;
if($wgimgr$202===undefined){$wgimgr$202=null;}
media$.$wgimgr$202_=$wgimgr$202;
if($wgimgr$203===undefined){$wgimgr$203=null;}
media$.$wgimgr$203_=$wgimgr$203;
if($wgimgr$204===undefined){$wgimgr$204=m$1.empty();}
media$.$wgimgr$204_=$wgimgr$204;
if($wgimgr$205===undefined){$wgimgr$205=m$1.empty();}
media$.$wgimgr$205_=$wgimgr$205;
if(children===undefined){children=m$1.empty();}
media$.children_=children;
BlockElement(media$);
ParentNode({Child$ParentNode:{t:Source}},media$);
BaseElement($wgimgr$1zo,$wgimgr$1zp,$wgimgr$1zq,$wgimgr$1zr,$wgimgr$1zs,$wgimgr$1zt,$wgimgr$1zu,$wgimgr$1zv,$wgimgr$1zw,$wgimgr$1zx,$wgimgr$1zy,$wgimgr$1zz,$wgimgr$200,$wgimgr$201,$wgimgr$202,$wgimgr$203,$wgimgr$204,$wgimgr$205,media$);
return media$;
}
Media.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'src',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:src'),m$1.see("children","Source")];}},{nm:'autoPlay',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:autoPlay'),m$1.see("preload")];}},{nm:'controls',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:controls')];}},{nm:'loop',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:loop')];}},{nm:'muted',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:muted')];}},{nm:'preload',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:preload')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:Source}}}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media')];},d:['ceylon.html','Media']};};
ex$.Media=Media;
function $init$Media(){
if(Media.$$===undefined){
m$1.initTypeProto(Media,'ceylon.html::Media',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(media$){
m$1.atr$(media$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:src'),m$1.see("children","Source")];},d:['ceylon.html','Media','$at','src']};});
m$1.atr$(media$,'autoPlay',function(){return this.autoPlay_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:autoPlay'),m$1.see("preload")];},d:['ceylon.html','Media','$at','autoPlay']};});
m$1.atr$(media$,'controls',function(){return this.controls_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:controls')];},d:['ceylon.html','Media','$at','controls']};});
m$1.atr$(media$,'loop',function(){return this.loop_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:loop')];},d:['ceylon.html','Media','$at','loop']};});
m$1.atr$(media$,'muted',function(){return this.muted_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:muted')];},d:['ceylon.html','Media','$at','muted']};});
m$1.atr$(media$,'preload',function(){return this.preload_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]},$cont:Media,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Media:$at:preload')];},d:['ceylon.html','Media','$at','preload']};});
m$1.atr$(media$,'$wgimgr$1zo',function(){return this.$wgimgr$1zo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','id$ky6jbm']};});
m$1.atr$(media$,'$wgimgr$1zp',function(){return this.$wgimgr$1zp_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Media,d:['ceylon.html','Media','$at','classNames$tnzmch']};});
m$1.atr$(media$,'$wgimgr$1zq',function(){return this.$wgimgr$1zq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','style$kawxh4']};});
m$1.atr$(media$,'$wgimgr$1zr',function(){return this.$wgimgr$1zr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','accessKey$96s1hu']};});
m$1.atr$(media$,'$wgimgr$1zs',function(){return this.$wgimgr$1zs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','contextMenu$vd15yl']};});
m$1.atr$(media$,'$wgimgr$1zt',function(){return this.$wgimgr$1zt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Media,d:['ceylon.html','Media','$at','dir$n4ir5g']};});
m$1.atr$(media$,'$wgimgr$1zu',function(){return this.$wgimgr$1zu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,d:['ceylon.html','Media','$at','draggable$h6z4dw']};});
m$1.atr$(media$,'$wgimgr$1zv',function(){return this.$wgimgr$1zv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Media,d:['ceylon.html','Media','$at','dropZone$y6tl6a']};});
m$1.atr$(media$,'$wgimgr$1zw',function(){return this.$wgimgr$1zw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,d:['ceylon.html','Media','$at','inert$jtqrpd']};});
m$1.atr$(media$,'$wgimgr$1zx',function(){return this.$wgimgr$1zx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,d:['ceylon.html','Media','$at','hidden$g100zt']};});
m$1.atr$(media$,'$wgimgr$1zy',function(){return this.$wgimgr$1zy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','lang$ovlgh9']};});
m$1.atr$(media$,'$wgimgr$1zz',function(){return this.$wgimgr$1zz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,d:['ceylon.html','Media','$at','spellcheck$83vhlb']};});
m$1.atr$(media$,'$wgimgr$200',function(){return this.$wgimgr$200_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Media,d:['ceylon.html','Media','$at','tabIndex$nmrljw']};});
m$1.atr$(media$,'$wgimgr$201',function(){return this.$wgimgr$201_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Media,d:['ceylon.html','Media','$at','title$xomqo7']};});
m$1.atr$(media$,'$wgimgr$202',function(){return this.$wgimgr$202_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Media,d:['ceylon.html','Media','$at','translate$8lg4xf']};});
m$1.atr$(media$,'$wgimgr$203',function(){return this.$wgimgr$203_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Media,d:['ceylon.html','Media','$at','aria$htok5s']};});
m$1.atr$(media$,'$wgimgr$204',function(){return this.$wgimgr$204_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Media,d:['ceylon.html','Media','$at','nonstandardAttributes$welo8']};});
m$1.atr$(media$,'$wgimgr$205',function(){return this.$wgimgr$205_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Media,d:['ceylon.html','Media','$at','data$jhhma1']};});
m$1.atr$(media$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Media,pa:3,d:['ceylon.html','Media','$at','children']};});
m$1.atr$(media$,'attributes',function(){
var media$=this;
var $206=AttributeSequenceBuilder();
$206.addAttribute("src",media$.src);
$206.addNamedBooleanAttribute("autoplay",media$.autoPlay);
$206.addNamedBooleanAttribute("controls",media$.controls);
$206.addNamedBooleanAttribute("loop",media$.loop);
$206.addNamedBooleanAttribute("muted",media$.muted);
$206.addAttribute("preload",media$.preload);
$206.addAll(m$1.attrGetter(media$.getT$all()['ceylon.html::BaseElement'],'attributes').call(this));
return $206.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Media,pa:11,d:['ceylon.html','Media','$at','attributes']};});
})(Media.$$.prototype);
}
return Media;
}
ex$.$init$Media=$init$Media;
$init$Media();
function MediaPreload($wgimgr$207,mediaPreload$){
$init$MediaPreload();
if(mediaPreload$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::MediaPreload"),'?','?')
mediaPreload$.$wgimgr$207_=$wgimgr$207;
return mediaPreload$;
}
MediaPreload.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getAuto,$prop$getMetadata,$prop$getNone],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:MediaPreload')];},d:['ceylon.html','MediaPreload']};};
ex$.MediaPreload=MediaPreload;
function $init$MediaPreload(){
if(MediaPreload.$$===undefined){
m$1.initTypeProto(MediaPreload,'ceylon.html::MediaPreload',m$1.Basic);
(function(mediaPreload$){
m$1.atr$(mediaPreload$,'$wgimgr$207',function(){return this.$wgimgr$207_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:MediaPreload,d:['ceylon.html','MediaPreload','$at','name$hmzenf']};});
m$1.atr$(mediaPreload$,'string',function(){
var mediaPreload$=this;
return mediaPreload$.$wgimgr$207;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:MediaPreload,pa:3,d:['ceylon.html','MediaPreload','$at','string']};});
})(MediaPreload.$$.prototype);
}
return MediaPreload;
}
ex$.$init$MediaPreload=$init$MediaPreload;
$init$MediaPreload();
function $208(){
var auto$=new $208.$$;MediaPreload("auto",auto$);
return auto$;
};$208.$crtmm$=function(){return{mod:$CCMM$,'super':{t:MediaPreload},d:['ceylon.html','auto']};};
function $init$auto(){
if($208.$$===undefined){
m$1.initTypeProto($208,'ceylon.html::auto',$init$MediaPreload());
}
return $208;
}
ex$.$init$auto=$init$auto;
$init$auto();
var $20a;
function auto(){
if($20a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'auto\' before it was set"),'74:0-77:49','Media.ceylon');
if($20a===undefined){$20a=m$1.INIT$;$20a=$init$auto()();$20a.$crtmm$=auto.$crtmm$;}
return $20a;
}
ex$.auto=auto;
auto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$auto()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:auto')];},d:['ceylon.html','auto']};};
$prop$getAuto=auto;
ex$.$prop$getAuto=$prop$getAuto;
function $20b(){
var metadata$=new $20b.$$;MediaPreload("metadata",metadata$);
return metadata$;
};$20b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:MediaPreload},d:['ceylon.html','metadata']};};
function $init$metadata(){
if($20b.$$===undefined){
m$1.initTypeProto($20b,'ceylon.html::metadata',$init$MediaPreload());
}
return $20b;
}
ex$.$init$metadata=$init$metadata;
$init$metadata();
var $20d;
function metadata(){
if($20d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'metadata\' before it was set"),'79:0-83:57','Media.ceylon');
if($20d===undefined){$20d=m$1.INIT$;$20d=$init$metadata()();$20d.$crtmm$=metadata.$crtmm$;}
return $20d;
}
ex$.metadata=metadata;
metadata.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$metadata()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:metadata')];},d:['ceylon.html','metadata']};};
$prop$getMetadata=metadata;
ex$.$prop$getMetadata=$prop$getMetadata;
function $20e(){
var none$=new $20e.$$;MediaPreload("none",none$);
return none$;
};$20e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:MediaPreload},d:['ceylon.html','none']};};
function $init$none(){
if($20e.$$===undefined){
m$1.initTypeProto($20e,'ceylon.html::none',$init$MediaPreload());
}
return $20e;
}
ex$.$init$none=$init$none;
$init$none();
var $20g;
function none(){
if($20g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'none\' before it was set"),'85:0-88:49','Media.ceylon');
if($20g===undefined){$20g=m$1.INIT$;$20g=$init$none()();$20g.$crtmm$=none.$crtmm$;}
return $20g;
}
ex$.none=none;
none.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$none()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:none')];},d:['ceylon.html','none']};};
$prop$getNone=none;
ex$.$prop$getNone=$prop$getNone;
function Source(src,media,type,$wgimgr$20h,source$){
$init$Source();
if(source$===undefined)source$=new Source.$$;
source$.src_=src;
source$.media_=media;
source$.type_=type;
source$.$wgimgr$20h_=$wgimgr$20h;
Element($wgimgr$20h,source$);
source$.tag_=Tag("source",emptyTag());
return source$;
}
Source.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'src',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:src')];}},{nm:'media',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:media')];}},{nm:'type',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:type')];}},{nm:'id',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source')];},d:['ceylon.html','Source']};};
ex$.Source=Source;
function $init$Source(){
if(Source.$$===undefined){
m$1.initTypeProto(Source,'ceylon.html::Source',$init$Element());
(function(source$){
m$1.atr$(source$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Source,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:src')];},d:['ceylon.html','Source','$at','src']};});
m$1.atr$(source$,'media',function(){return this.media_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Source,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:media')];},d:['ceylon.html','Source','$at','media']};});
m$1.atr$(source$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Source,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Source:$at:type')];},d:['ceylon.html','Source','$at','type']};});
m$1.atr$(source$,'$wgimgr$20h',function(){return this.$wgimgr$20h_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Source,d:['ceylon.html','Source','$at','id$4zwm2p']};});
m$1.atr$(source$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Source,pa:3,d:['ceylon.html','Source','$at','tag']};});
})(Source.$$.prototype);
}
return Source;
}
ex$.$init$Source=$init$Source;
$init$Source();
function Audio($wgimgr$20i,$wgimgr$20j,$wgimgr$20k,$wgimgr$20l,$wgimgr$20m,$wgimgr$20n,$wgimgr$20o,$wgimgr$20p,$wgimgr$20q,$wgimgr$20r,$wgimgr$20s,$wgimgr$20t,$wgimgr$20u,$wgimgr$20v,$wgimgr$20w,$wgimgr$20x,$wgimgr$20y,$wgimgr$20z,$wgimgr$210,$wgimgr$211,$wgimgr$212,$wgimgr$213,$wgimgr$214,$wgimgr$215,$wgimgr$216,audio$){
$init$Audio();
if(audio$===undefined)audio$=new Audio.$$;
audio$.$wgimgr$20i_=$wgimgr$20i;
if($wgimgr$20j===undefined){$wgimgr$20j=null;}
audio$.$wgimgr$20j_=$wgimgr$20j;
if($wgimgr$20k===undefined){$wgimgr$20k=null;}
audio$.$wgimgr$20k_=$wgimgr$20k;
if($wgimgr$20l===undefined){$wgimgr$20l=null;}
audio$.$wgimgr$20l_=$wgimgr$20l;
if($wgimgr$20m===undefined){$wgimgr$20m=null;}
audio$.$wgimgr$20m_=$wgimgr$20m;
if($wgimgr$20n===undefined){$wgimgr$20n=null;}
audio$.$wgimgr$20n_=$wgimgr$20n;
if($wgimgr$20o===undefined){$wgimgr$20o=null;}
audio$.$wgimgr$20o_=$wgimgr$20o;
if($wgimgr$20p===undefined){$wgimgr$20p=m$1.empty();}
audio$.$wgimgr$20p_=$wgimgr$20p;
if($wgimgr$20q===undefined){$wgimgr$20q=null;}
audio$.$wgimgr$20q_=$wgimgr$20q;
if($wgimgr$20r===undefined){$wgimgr$20r=null;}
audio$.$wgimgr$20r_=$wgimgr$20r;
if($wgimgr$20s===undefined){$wgimgr$20s=null;}
audio$.$wgimgr$20s_=$wgimgr$20s;
if($wgimgr$20t===undefined){$wgimgr$20t=null;}
audio$.$wgimgr$20t_=$wgimgr$20t;
if($wgimgr$20u===undefined){$wgimgr$20u=null;}
audio$.$wgimgr$20u_=$wgimgr$20u;
if($wgimgr$20v===undefined){$wgimgr$20v=null;}
audio$.$wgimgr$20v_=$wgimgr$20v;
if($wgimgr$20w===undefined){$wgimgr$20w=null;}
audio$.$wgimgr$20w_=$wgimgr$20w;
if($wgimgr$20x===undefined){$wgimgr$20x=null;}
audio$.$wgimgr$20x_=$wgimgr$20x;
if($wgimgr$20y===undefined){$wgimgr$20y=null;}
audio$.$wgimgr$20y_=$wgimgr$20y;
if($wgimgr$20z===undefined){$wgimgr$20z=null;}
audio$.$wgimgr$20z_=$wgimgr$20z;
if($wgimgr$210===undefined){$wgimgr$210=null;}
audio$.$wgimgr$210_=$wgimgr$210;
if($wgimgr$211===undefined){$wgimgr$211=null;}
audio$.$wgimgr$211_=$wgimgr$211;
if($wgimgr$212===undefined){$wgimgr$212=null;}
audio$.$wgimgr$212_=$wgimgr$212;
if($wgimgr$213===undefined){$wgimgr$213=null;}
audio$.$wgimgr$213_=$wgimgr$213;
if($wgimgr$214===undefined){$wgimgr$214=m$1.empty();}
audio$.$wgimgr$214_=$wgimgr$214;
if($wgimgr$215===undefined){$wgimgr$215=m$1.empty();}
audio$.$wgimgr$215_=$wgimgr$215;
if($wgimgr$216===undefined){$wgimgr$216=m$1.empty();}
audio$.$wgimgr$216_=$wgimgr$216;
Media($wgimgr$20i,$wgimgr$20j,$wgimgr$20k,$wgimgr$20l,$wgimgr$20m,$wgimgr$20n,$wgimgr$20o,$wgimgr$20p,$wgimgr$20q,$wgimgr$20r,$wgimgr$20s,$wgimgr$20t,$wgimgr$20u,$wgimgr$20v,$wgimgr$20w,$wgimgr$20x,$wgimgr$20y,$wgimgr$20z,$wgimgr$210,$wgimgr$211,$wgimgr$212,$wgimgr$213,$wgimgr$214,$wgimgr$215,$wgimgr$216,audio$);
audio$.tag_=Tag("audio");
return audio$;
}
Audio.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Media},ps:[{nm:'src',mt:'prm',$t:{t:m$1.$_String}},{nm:'autoPlay',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'controls',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'loop',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'muted',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'preload',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Audio')];},d:['ceylon.html','Audio']};};
ex$.Audio=Audio;
function $init$Audio(){
if(Audio.$$===undefined){
m$1.initTypeProto(Audio,'ceylon.html::Audio',$init$Media());
(function(audio$){
m$1.atr$(audio$,'$wgimgr$20i',function(){return this.$wgimgr$20i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Audio,d:['ceylon.html','Audio','$at','src$s144wb']};});
m$1.atr$(audio$,'$wgimgr$20j',function(){return this.$wgimgr$20j_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','autoPlay$8f5qws']};});
m$1.atr$(audio$,'$wgimgr$20k',function(){return this.$wgimgr$20k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','controls$9tyw21']};});
m$1.atr$(audio$,'$wgimgr$20l',function(){return this.$wgimgr$20l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','loop$qb07bf']};});
m$1.atr$(audio$,'$wgimgr$20m',function(){return this.$wgimgr$20m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','muted$e0nv8c']};});
m$1.atr$(audio$,'$wgimgr$20n',function(){return this.$wgimgr$20n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]},$cont:Audio,d:['ceylon.html','Audio','$at','preload$3zbymq']};});
m$1.atr$(audio$,'$wgimgr$20o',function(){return this.$wgimgr$20o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','id$ujf2jw']};});
m$1.atr$(audio$,'$wgimgr$20p',function(){return this.$wgimgr$20p_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Audio,d:['ceylon.html','Audio','$at','classNames$a4h68v']};});
m$1.atr$(audio$,'$wgimgr$20q',function(){return this.$wgimgr$20q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','style$v6ooee']};});
m$1.atr$(audio$,'$wgimgr$20r',function(){return this.$wgimgr$20r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','accessKey$sqahlg']};});
m$1.atr$(audio$,'$wgimgr$20s',function(){return this.$wgimgr$20s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','contextMenu$k4kfwx']};});
m$1.atr$(audio$,'$wgimgr$20t',function(){return this.$wgimgr$20t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Audio,d:['ceylon.html','Audio','$at','dir$sd2uq2']};});
m$1.atr$(audio$,'$wgimgr$20u',function(){return this.$wgimgr$20u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','draggable$yamhhm']};});
m$1.atr$(audio$,'$wgimgr$20v',function(){return this.$wgimgr$20v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Audio,d:['ceylon.html','Audio','$at','dropZone$has0p8']};});
m$1.atr$(audio$,'$wgimgr$20w',function(){return this.$wgimgr$20w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','inert$vnuu65']};});
m$1.atr$(audio$,'$wgimgr$20x',function(){return this.$wgimgr$20x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','hidden$zglkvp']};});
m$1.atr$(audio$,'$wgimgr$20y',function(){return this.$wgimgr$20y_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','lang$qm05e9']};});
m$1.atr$(audio$,'$wgimgr$20z',function(){return this.$wgimgr$20z_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','spellcheck$rndxox']};});
m$1.atr$(audio$,'$wgimgr$210',function(){return this.$wgimgr$210_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Audio,d:['ceylon.html','Audio','$at','tabIndex$4395ga']};});
m$1.atr$(audio$,'$wgimgr$211',function(){return this.$wgimgr$211_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Audio,d:['ceylon.html','Audio','$at','title$hsyv7b']};});
m$1.atr$(audio$,'$wgimgr$212',function(){return this.$wgimgr$212_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Audio,d:['ceylon.html','Audio','$at','translate$ay2b67']};});
m$1.atr$(audio$,'$wgimgr$213',function(){return this.$wgimgr$213_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Audio,d:['ceylon.html','Audio','$at','aria$xnx1pq']};});
m$1.atr$(audio$,'$wgimgr$214',function(){return this.$wgimgr$214_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Audio,d:['ceylon.html','Audio','$at','nonstandardAttributes$in3ufe']};});
m$1.atr$(audio$,'$wgimgr$215',function(){return this.$wgimgr$215_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Audio,d:['ceylon.html','Audio','$at','data$w03zlh']};});
m$1.atr$(audio$,'$wgimgr$216',function(){return this.$wgimgr$216_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Audio,d:['ceylon.html','Audio','$at','children$x0wk88']};});
m$1.atr$(audio$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Audio,pa:3,d:['ceylon.html','Audio','$at','tag']};});
})(Audio.$$.prototype);
}
return Audio;
}
ex$.$init$Audio=$init$Audio;
$init$Audio();
function Video($wgimgr$217,$wgimgr$218,$wgimgr$219,$wgimgr$21a,$wgimgr$21b,$wgimgr$21c,poster,height,width,$wgimgr$21d,$wgimgr$21e,$wgimgr$21f,$wgimgr$21g,$wgimgr$21h,$wgimgr$21i,$wgimgr$21j,$wgimgr$21k,$wgimgr$21l,$wgimgr$21m,$wgimgr$21n,$wgimgr$21o,$wgimgr$21p,$wgimgr$21q,$wgimgr$21r,$wgimgr$21s,$wgimgr$21t,$wgimgr$21u,$wgimgr$21v,video$){
$init$Video();
if(video$===undefined)video$=new Video.$$;
video$.$wgimgr$217_=$wgimgr$217;
if($wgimgr$218===undefined){$wgimgr$218=null;}
video$.$wgimgr$218_=$wgimgr$218;
if($wgimgr$219===undefined){$wgimgr$219=null;}
video$.$wgimgr$219_=$wgimgr$219;
if($wgimgr$21a===undefined){$wgimgr$21a=null;}
video$.$wgimgr$21a_=$wgimgr$21a;
if($wgimgr$21b===undefined){$wgimgr$21b=null;}
video$.$wgimgr$21b_=$wgimgr$21b;
if($wgimgr$21c===undefined){$wgimgr$21c=null;}
video$.$wgimgr$21c_=$wgimgr$21c;
if(poster===undefined){poster=null;}
video$.poster_=poster;
if(height===undefined){height=null;}
video$.height_=height;
if(width===undefined){width=null;}
video$.width_=width;
if($wgimgr$21d===undefined){$wgimgr$21d=null;}
video$.$wgimgr$21d_=$wgimgr$21d;
if($wgimgr$21e===undefined){$wgimgr$21e=m$1.empty();}
video$.$wgimgr$21e_=$wgimgr$21e;
if($wgimgr$21f===undefined){$wgimgr$21f=null;}
video$.$wgimgr$21f_=$wgimgr$21f;
if($wgimgr$21g===undefined){$wgimgr$21g=null;}
video$.$wgimgr$21g_=$wgimgr$21g;
if($wgimgr$21h===undefined){$wgimgr$21h=null;}
video$.$wgimgr$21h_=$wgimgr$21h;
if($wgimgr$21i===undefined){$wgimgr$21i=null;}
video$.$wgimgr$21i_=$wgimgr$21i;
if($wgimgr$21j===undefined){$wgimgr$21j=null;}
video$.$wgimgr$21j_=$wgimgr$21j;
if($wgimgr$21k===undefined){$wgimgr$21k=null;}
video$.$wgimgr$21k_=$wgimgr$21k;
if($wgimgr$21l===undefined){$wgimgr$21l=null;}
video$.$wgimgr$21l_=$wgimgr$21l;
if($wgimgr$21m===undefined){$wgimgr$21m=null;}
video$.$wgimgr$21m_=$wgimgr$21m;
if($wgimgr$21n===undefined){$wgimgr$21n=null;}
video$.$wgimgr$21n_=$wgimgr$21n;
if($wgimgr$21o===undefined){$wgimgr$21o=null;}
video$.$wgimgr$21o_=$wgimgr$21o;
if($wgimgr$21p===undefined){$wgimgr$21p=null;}
video$.$wgimgr$21p_=$wgimgr$21p;
if($wgimgr$21q===undefined){$wgimgr$21q=null;}
video$.$wgimgr$21q_=$wgimgr$21q;
if($wgimgr$21r===undefined){$wgimgr$21r=null;}
video$.$wgimgr$21r_=$wgimgr$21r;
if($wgimgr$21s===undefined){$wgimgr$21s=null;}
video$.$wgimgr$21s_=$wgimgr$21s;
if($wgimgr$21t===undefined){$wgimgr$21t=m$1.empty();}
video$.$wgimgr$21t_=$wgimgr$21t;
if($wgimgr$21u===undefined){$wgimgr$21u=m$1.empty();}
video$.$wgimgr$21u_=$wgimgr$21u;
if($wgimgr$21v===undefined){$wgimgr$21v=m$1.empty();}
video$.$wgimgr$21v_=$wgimgr$21v;
Media($wgimgr$217,$wgimgr$218,$wgimgr$219,$wgimgr$21a,$wgimgr$21b,$wgimgr$21c,$wgimgr$21d,$wgimgr$21e,$wgimgr$21f,$wgimgr$21g,$wgimgr$21h,$wgimgr$21i,$wgimgr$21j,$wgimgr$21k,$wgimgr$21l,$wgimgr$21m,$wgimgr$21n,$wgimgr$21o,$wgimgr$21p,$wgimgr$21q,$wgimgr$21r,$wgimgr$21s,$wgimgr$21t,$wgimgr$21u,$wgimgr$21v,video$);
video$.tag_=Tag("video");
return video$;
}
Video.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Media},ps:[{nm:'src',mt:'prm',$t:{t:m$1.$_String}},{nm:'autoPlay',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'controls',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'loop',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'muted',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'preload',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]}},{nm:'poster',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:poster')];}},{nm:'height',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:height')];}},{nm:'width',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:width')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video')];},d:['ceylon.html','Video']};};
ex$.Video=Video;
function $init$Video(){
if(Video.$$===undefined){
m$1.initTypeProto(Video,'ceylon.html::Video',$init$Media());
(function(video$){
m$1.atr$(video$,'$wgimgr$217',function(){return this.$wgimgr$217_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Video,d:['ceylon.html','Video','$at','src$mknrgi']};});
m$1.atr$(video$,'$wgimgr$218',function(){return this.$wgimgr$218_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','autoPlay$c06epj']};});
m$1.atr$(video$,'$wgimgr$219',function(){return this.$wgimgr$219_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','controls$u9b1oc']};});
m$1.atr$(video$,'$wgimgr$21a',function(){return this.$wgimgr$21a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','loop$oarp1e']};});
m$1.atr$(video$,'$wgimgr$21b',function(){return this.$wgimgr$21b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','muted$yg00un']};});
m$1.atr$(video$,'$wgimgr$21c',function(){return this.$wgimgr$21c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MediaPreload}]},$cont:Video,d:['ceylon.html','Video','$at','preload$gg06zl']};});
m$1.atr$(video$,'poster',function(){return this.poster_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:poster')];},d:['ceylon.html','Video','$at','poster']};});
m$1.atr$(video$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Video,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:height')];},d:['ceylon.html','Video','$at','height']};});
m$1.atr$(video$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Video,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Video:$at:width')];},d:['ceylon.html','Video','$at','width']};});
m$1.atr$(video$,'$wgimgr$21d',function(){return this.$wgimgr$21d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','id$k2ctsx']};});
m$1.atr$(video$,'$wgimgr$21e',function(){return this.$wgimgr$21e_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Video,d:['ceylon.html','Video','$at','classNames$ujtbv6']};});
m$1.atr$(video$,'$wgimgr$21f',function(){return this.$wgimgr$21f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','style$jf37yf']};});
m$1.atr$(video$,'$wgimgr$21g',function(){return this.$wgimgr$21g_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','accessKey$8aybz5']};});
m$1.atr$(video$,'$wgimgr$21h',function(){return this.$wgimgr$21h_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','contextMenu$uh7gfw']};});
m$1.atr$(video$,'$wgimgr$21i',function(){return this.$wgimgr$21i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Video,d:['ceylon.html','Video','$at','dir$m8p1mr']};});
m$1.atr$(video$,'$wgimgr$21j',function(){return this.$wgimgr$21j_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','draggable$gb5ev7']};});
m$1.atr$(video$,'$wgimgr$21k',function(){return this.$wgimgr$21k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Video,d:['ceylon.html','Video','$at','dropZone$xazvnl']};});
m$1.atr$(video$,'$wgimgr$21l',function(){return this.$wgimgr$21l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','inert$ixx26o']};});
m$1.atr$(video$,'$wgimgr$21m',function(){return this.$wgimgr$21m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','hidden$f56bh4']};});
m$1.atr$(video$,'$wgimgr$21n',function(){return this.$wgimgr$21n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','lang$nzrqyk']};});
m$1.atr$(video$,'$wgimgr$21o',function(){return this.$wgimgr$21o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','spellcheck$781s2m']};});
m$1.atr$(video$,'$wgimgr$21p',function(){return this.$wgimgr$21p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Video,d:['ceylon.html','Video','$at','tabIndex$oilb2l']};});
m$1.atr$(video$,'$wgimgr$21q',function(){return this.$wgimgr$21q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Video,d:['ceylon.html','Video','$at','title$wst15i']};});
m$1.atr$(video$,'$wgimgr$21r',function(){return this.$wgimgr$21r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Video,d:['ceylon.html','Video','$at','translate$9h9ug4']};});
m$1.atr$(video$,'$wgimgr$21s',function(){return this.$wgimgr$21s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Video,d:['ceylon.html','Video','$at','aria$gxuun3']};});
m$1.atr$(video$,'$wgimgr$21t',function(){return this.$wgimgr$21t_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Video,d:['ceylon.html','Video','$at','nonstandardAttributes$1s8b6x']};});
m$1.atr$(video$,'$wgimgr$21u',function(){return this.$wgimgr$21u_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Video,d:['ceylon.html','Video','$at','data$ilnwrc']};});
m$1.atr$(video$,'$wgimgr$21v',function(){return this.$wgimgr$21v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Source},{t:m$1.Iterable,a:{Element$Iterable:{t:Source},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Source}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Video,d:['ceylon.html','Video','$at','children$hkvc4l']};});
m$1.atr$(video$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Video,pa:3,d:['ceylon.html','Video','$at','tag']};});
m$1.atr$(video$,'attributes',function(){
var video$=this;
var $21w=AttributeSequenceBuilder();
$21w.addAll(m$1.attrGetter(video$.getT$all()['ceylon.html::Media'],'attributes').call(this));
$21w.addAttribute("poster",video$.poster);
$21w.addAttribute("height",video$.height);
$21w.addAttribute("width",video$.width);
return $21w.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Video,pa:11,d:['ceylon.html','Video','$at','attributes']};});
})(Video.$$.prototype);
}
return Video;
}
ex$.$init$Video=$init$Video;
$init$Video();
function Meta(name,content,$wgimgr$21x,meta$){
$init$Meta();
if(meta$===undefined)meta$=new Meta.$$;
meta$.name_=name;
if(content===undefined){content="";}
meta$.content_=content;
if($wgimgr$21x===undefined){$wgimgr$21x=null;}
meta$.$wgimgr$21x_=$wgimgr$21x;
Element($wgimgr$21x,meta$);
meta$.tag_=Tag("meta",emptyTag());
return meta$;
}
Meta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Meta:$at:name')];}},{nm:'content',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Meta:$at:content')];}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Meta'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),CharsetMeta)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Meta']};};
ex$.Meta=Meta;
function $init$Meta(){
if(Meta.$$===undefined){
m$1.initTypeProto(Meta,'ceylon.html::Meta',$init$Element());
(function(meta$){
m$1.atr$(meta$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Meta,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Meta:$at:name')];},d:['ceylon.html','Meta','$at','name']};});
m$1.atr$(meta$,'content',function(){return this.content_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Meta,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Meta:$at:content')];},d:['ceylon.html','Meta','$at','content']};});
m$1.atr$(meta$,'$wgimgr$21x',function(){return this.$wgimgr$21x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Meta,d:['ceylon.html','Meta','$at','id$c6d7y3']};});
m$1.atr$(meta$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Meta,pa:3,d:['ceylon.html','Meta','$at','tag']};});
m$1.atr$(meta$,'attributes',function(){
var meta$=this;
return m$1.concatenate([m$1.attrGetter(meta$.getT$all()['ceylon.html::Element'],'attributes').call(this),m$1.tpl$([m$1.Entry("name",meta$.name,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("content",meta$.content,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})])].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}},m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}])])),{Element$concatenate:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Meta,pa:11,d:['ceylon.html','Meta','$at','attributes']};});
})(Meta.$$.prototype);
}
return Meta;
}
ex$.$init$Meta=$init$Meta;
$init$Meta();
function CharsetMeta(charset,charsetMeta$){
$init$CharsetMeta();
if(charsetMeta$===undefined)charsetMeta$=new CharsetMeta.$$;
if(charset===undefined){charset="utf-8";}
charsetMeta$.charset_=charset;
Meta("Content-Type","text/html; charset=".plus(charsetMeta$.charset).plus(";"),undefined,charsetMeta$);
return charsetMeta$;
}
CharsetMeta.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Meta},ps:[{nm:'charset',mt:'prm',def:1,$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:CharsetMeta:$at:charset')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:CharsetMeta')];},d:['ceylon.html','CharsetMeta']};};
ex$.CharsetMeta=CharsetMeta;
function $init$CharsetMeta(){
if(CharsetMeta.$$===undefined){
m$1.initTypeProto(CharsetMeta,'ceylon.html::CharsetMeta',$init$Meta());
(function(charsetMeta$){
m$1.atr$(charsetMeta$,'charset',function(){return this.charset_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:CharsetMeta,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:CharsetMeta:$at:charset')];},d:['ceylon.html','CharsetMeta','$at','charset']};});
m$1.atr$(charsetMeta$,'attributes',function(){
var charsetMeta$=this;
return m$1.concatenate([m$1.attrGetter(charsetMeta$.getT$all()['ceylon.html::Meta'],'attributes').call(this),m$1.tpl$([m$1.Entry("charset",charsetMeta$.charset,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})])].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}},m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}])])),{Element$concatenate:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:CharsetMeta,pa:11,d:['ceylon.html','CharsetMeta','$at','attributes']};});
})(CharsetMeta.$$.prototype);
}
return CharsetMeta;
}
ex$.$init$CharsetMeta=$init$CharsetMeta;
$init$CharsetMeta();
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Daniel Rochetti"].$sa$({t:m$1.$_String})),m$1.tagged(["web","html","template","layout"].$sa$({t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.2.0':[]
};};
function Node(node$){
}
Node.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Node'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.html'),ParentNode),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.html'),TextNode),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.html'),Document)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Node']};};
ex$.Node=Node;
function $init$Node(){
if(Node.$$===undefined){
m$1.initTypeProtoI(Node,'ceylon.html::Node');
(function(node$){
node$.$prop$getTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Node,pa:5,an:function(){return[m$1.doc("The tag name and type.")];},d:['ceylon.html','Node','$at','tag']};}};
m$1.atr$(node$,'string',function(){
var node$=this;
var $21y=m$1.StringBuilder();
NodeSerializer$serializer(m$1.$JsCallable(($21z=$21y,m$1.JsCallable($21z,m$1.nn$($21z)?$21z.append:null)),[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.StringBuilder}})).serialize(node$);
var $21z;
return $21y.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Node,pa:3,d:['ceylon.html','Node','$at','string']};});m$1.atr$(node$,'attributes',function(){
var node$=this;
return m$1.empty();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Node,pa:9,d:['ceylon.html','Node','$at','attributes']};});
})(Node.$$.prototype);
}
return Node;
}
ex$.$init$Node=$init$Node;
$init$Node();
function ParentNode($$targs$$,parentNode$){
m$1.set_type_args(parentNode$,$$targs$$,ParentNode);
Node(parentNode$);
}
ParentNode.$crtmm$=function(){return{mod:$CCMM$,tp:{Child$ParentNode:{dv:'out',sts:[{t:Node}]}},sts:[{t:Node}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:ParentNode')];},d:['ceylon.html','ParentNode']};};
ex$.ParentNode=ParentNode;
function $init$ParentNode(){
if(ParentNode.$$===undefined){
m$1.initTypeProtoI(ParentNode,'ceylon.html::ParentNode',$init$Node());
(function(parentNode$){
parentNode$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:['Child$ParentNode',{t:m$1.$_String},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:['Child$ParentNode',{t:m$1.$_String}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:'Child$ParentNode'}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:ParentNode,pa:5,d:['ceylon.html','ParentNode','$at','children']};}};
})(ParentNode.$$.prototype);
}
return ParentNode;
}
ex$.$init$ParentNode=$init$ParentNode;
$init$ParentNode();
function TextNode(textNode$){
Node(textNode$);
}
TextNode.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:Node}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextNode')];},d:['ceylon.html','TextNode']};};
ex$.TextNode=TextNode;
function $init$TextNode(){
if(TextNode.$$===undefined){
m$1.initTypeProtoI(TextNode,'ceylon.html::TextNode',$init$Node());
(function(textNode$){
textNode$.$prop$getText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TextNode,pa:5,d:['ceylon.html','TextNode','$at','text']};}};
})(TextNode.$$.prototype);
}
return TextNode;
}
ex$.$init$TextNode=$init$TextNode;
$init$TextNode();
function Document(document$){
Node(document$);
}
Document.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:Node}],of:[{t:Html}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Document')];},d:['ceylon.html','Document']};};
ex$.Document=Document;
function $init$Document(){
if(Document.$$===undefined){
m$1.initTypeProtoI(Document,'ceylon.html::Document',$init$Node());
(function(document$){
document$.$prop$getDoctype={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Doctype},$cont:Document,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Document:$at:doctype')];},d:['ceylon.html','Document','$at','doctype']};}};
})(Document.$$.prototype);
}
return Document;
}
ex$.$init$Document=$init$Document;
$init$Document();
function P(text,$wgimgr$220,$wgimgr$221,$wgimgr$222,$wgimgr$223,$wgimgr$224,$wgimgr$225,$wgimgr$226,$wgimgr$227,$wgimgr$228,$wgimgr$229,$wgimgr$22a,$wgimgr$22b,$wgimgr$22c,$wgimgr$22d,$wgimgr$22e,$wgimgr$22f,$wgimgr$22g,$wgimgr$22h,children,p$){
$init$P();
if(p$===undefined)p$=new P.$$;
p$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
p$.text_=text;
if($wgimgr$220===undefined){$wgimgr$220=null;}
p$.$wgimgr$220_=$wgimgr$220;
if($wgimgr$221===undefined){$wgimgr$221=m$1.empty();}
p$.$wgimgr$221_=$wgimgr$221;
if($wgimgr$222===undefined){$wgimgr$222=null;}
p$.$wgimgr$222_=$wgimgr$222;
if($wgimgr$223===undefined){$wgimgr$223=null;}
p$.$wgimgr$223_=$wgimgr$223;
if($wgimgr$224===undefined){$wgimgr$224=null;}
p$.$wgimgr$224_=$wgimgr$224;
if($wgimgr$225===undefined){$wgimgr$225=null;}
p$.$wgimgr$225_=$wgimgr$225;
if($wgimgr$226===undefined){$wgimgr$226=null;}
p$.$wgimgr$226_=$wgimgr$226;
if($wgimgr$227===undefined){$wgimgr$227=null;}
p$.$wgimgr$227_=$wgimgr$227;
if($wgimgr$228===undefined){$wgimgr$228=null;}
p$.$wgimgr$228_=$wgimgr$228;
if($wgimgr$229===undefined){$wgimgr$229=null;}
p$.$wgimgr$229_=$wgimgr$229;
if($wgimgr$22a===undefined){$wgimgr$22a=null;}
p$.$wgimgr$22a_=$wgimgr$22a;
if($wgimgr$22b===undefined){$wgimgr$22b=null;}
p$.$wgimgr$22b_=$wgimgr$22b;
if($wgimgr$22c===undefined){$wgimgr$22c=null;}
p$.$wgimgr$22c_=$wgimgr$22c;
if($wgimgr$22d===undefined){$wgimgr$22d=null;}
p$.$wgimgr$22d_=$wgimgr$22d;
if($wgimgr$22e===undefined){$wgimgr$22e=null;}
p$.$wgimgr$22e_=$wgimgr$22e;
if($wgimgr$22f===undefined){$wgimgr$22f=null;}
p$.$wgimgr$22f_=$wgimgr$22f;
if($wgimgr$22g===undefined){$wgimgr$22g=m$1.empty();}
p$.$wgimgr$22g_=$wgimgr$22g;
if($wgimgr$22h===undefined){$wgimgr$22h=m$1.empty();}
p$.$wgimgr$22h_=$wgimgr$22h;
if(children===undefined){children=m$1.empty();}
p$.children_=children;
TextNode(p$);
BlockElement(p$);
ParentNode({Child$ParentNode:{t:InlineElement}},p$);
BaseElement($wgimgr$220,$wgimgr$221,$wgimgr$222,$wgimgr$223,$wgimgr$224,$wgimgr$225,$wgimgr$226,$wgimgr$227,$wgimgr$228,$wgimgr$229,$wgimgr$22a,$wgimgr$22b,$wgimgr$22c,$wgimgr$22d,$wgimgr$22e,$wgimgr$22f,$wgimgr$22g,$wgimgr$22h,p$);
p$.tag_=Tag("p");
return p$;
}
P.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:P')];},d:['ceylon.html','P']};};
ex$.P=P;
function $init$P(){
if(P.$$===undefined){
m$1.initTypeProto(P,'ceylon.html::P',$init$TextNode(),$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(p$){
m$1.atr$(p$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:P,pa:3,d:['ceylon.html','P','$at','text']};});
m$1.atr$(p$,'$wgimgr$220',function(){return this.$wgimgr$220_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','id$17zg3i']};});
m$1.atr$(p$,'$wgimgr$221',function(){return this.$wgimgr$221_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:P,d:['ceylon.html','P','$at','classNames$lmxcej']};});
m$1.atr$(p$,'$wgimgr$222',function(){return this.$wgimgr$222_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','style$kpu90']};});
m$1.atr$(p$,'$wgimgr$223',function(){return this.$wgimgr$223_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','accessKey$ajf1qa']};});
m$1.atr$(p$,'$wgimgr$224',function(){return this.$wgimgr$224_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','contextMenu$bmu2qh']};});
m$1.atr$(p$,'$wgimgr$225',function(){return this.$wgimgr$225_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:P,d:['ceylon.html','P','$at','dir$3ebnxc']};});
m$1.atr$(p$,'$wgimgr$226',function(){return this.$wgimgr$226_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:P,d:['ceylon.html','P','$at','draggable$2j7yu8']};});
m$1.atr$(p$,'$wgimgr$227',function(){return this.$wgimgr$227_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:P,d:['ceylon.html','P','$at','dropZone$egmhy6']};});
m$1.atr$(p$,'$wgimgr$228',function(){return this.$wgimgr$228_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:P,d:['ceylon.html','P','$at','inert$3joh9']};});
m$1.atr$(p$,'$wgimgr$229',function(){return this.$wgimgr$229_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:P,d:['ceylon.html','P','$at','hidden$3p728b']};});
m$1.atr$(p$,'$wgimgr$22a',function(){return this.$wgimgr$22a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','lang$55ed95']};});
m$1.atr$(p$,'$wgimgr$22b',function(){return this.$wgimgr$22b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:P,d:['ceylon.html','P','$at','spellcheck$bmblmt']};});
m$1.atr$(p$,'$wgimgr$22c',function(){return this.$wgimgr$22c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:P,d:['ceylon.html','P','$at','tabIndex$ro5d74']};});
m$1.atr$(p$,'$wgimgr$22d',function(){return this.$wgimgr$22d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:P,d:['ceylon.html','P','$at','title$dyfng3']};});
m$1.atr$(p$,'$wgimgr$22e',function(){return this.$wgimgr$22e_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:P,d:['ceylon.html','P','$at','translate$sbn85j']};});
m$1.atr$(p$,'$wgimgr$22f',function(){return this.$wgimgr$22f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:P,d:['ceylon.html','P','$at','aria$1wij2c']};});
m$1.atr$(p$,'$wgimgr$22g',function(){return this.$wgimgr$22g_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:P,d:['ceylon.html','P','$at','nonstandardAttributes$kmlowc']};});
m$1.atr$(p$,'$wgimgr$22h',function(){return this.$wgimgr$22h_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:P,d:['ceylon.html','P','$at','data$8pgy3']};});
m$1.atr$(p$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:P,pa:3,d:['ceylon.html','P','$at','children']};});
m$1.atr$(p$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:P,pa:3,d:['ceylon.html','P','$at','tag']};});
})(P.$$.prototype);
}
return P;
}
ex$.$init$P=$init$P;
$init$P();
ex$.$pkg$ans$ceylon$html=function(){return[m$1.shared()];};
function Pre(text,$wgimgr$22i,$wgimgr$22j,$wgimgr$22k,$wgimgr$22l,$wgimgr$22m,$wgimgr$22n,$wgimgr$22o,$wgimgr$22p,$wgimgr$22q,$wgimgr$22r,$wgimgr$22s,$wgimgr$22t,$wgimgr$22u,$wgimgr$22v,$wgimgr$22w,$wgimgr$22x,$wgimgr$22y,$wgimgr$22z,children,pre$){
$init$Pre();
if(pre$===undefined)pre$=new Pre.$$;
pre$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
pre$.text_=text;
if($wgimgr$22i===undefined){$wgimgr$22i=null;}
pre$.$wgimgr$22i_=$wgimgr$22i;
if($wgimgr$22j===undefined){$wgimgr$22j=m$1.empty();}
pre$.$wgimgr$22j_=$wgimgr$22j;
if($wgimgr$22k===undefined){$wgimgr$22k=null;}
pre$.$wgimgr$22k_=$wgimgr$22k;
if($wgimgr$22l===undefined){$wgimgr$22l=null;}
pre$.$wgimgr$22l_=$wgimgr$22l;
if($wgimgr$22m===undefined){$wgimgr$22m=null;}
pre$.$wgimgr$22m_=$wgimgr$22m;
if($wgimgr$22n===undefined){$wgimgr$22n=null;}
pre$.$wgimgr$22n_=$wgimgr$22n;
if($wgimgr$22o===undefined){$wgimgr$22o=null;}
pre$.$wgimgr$22o_=$wgimgr$22o;
if($wgimgr$22p===undefined){$wgimgr$22p=null;}
pre$.$wgimgr$22p_=$wgimgr$22p;
if($wgimgr$22q===undefined){$wgimgr$22q=null;}
pre$.$wgimgr$22q_=$wgimgr$22q;
if($wgimgr$22r===undefined){$wgimgr$22r=null;}
pre$.$wgimgr$22r_=$wgimgr$22r;
if($wgimgr$22s===undefined){$wgimgr$22s=null;}
pre$.$wgimgr$22s_=$wgimgr$22s;
if($wgimgr$22t===undefined){$wgimgr$22t=null;}
pre$.$wgimgr$22t_=$wgimgr$22t;
if($wgimgr$22u===undefined){$wgimgr$22u=null;}
pre$.$wgimgr$22u_=$wgimgr$22u;
if($wgimgr$22v===undefined){$wgimgr$22v=null;}
pre$.$wgimgr$22v_=$wgimgr$22v;
if($wgimgr$22w===undefined){$wgimgr$22w=null;}
pre$.$wgimgr$22w_=$wgimgr$22w;
if($wgimgr$22x===undefined){$wgimgr$22x=null;}
pre$.$wgimgr$22x_=$wgimgr$22x;
if($wgimgr$22y===undefined){$wgimgr$22y=m$1.empty();}
pre$.$wgimgr$22y_=$wgimgr$22y;
if($wgimgr$22z===undefined){$wgimgr$22z=m$1.empty();}
pre$.$wgimgr$22z_=$wgimgr$22z;
if(children===undefined){children=m$1.empty();}
pre$.children_=children;
TextNode(pre$);
BlockElement(pre$);
ParentNode({Child$ParentNode:{t:InlineElement}},pre$);
BaseElement($wgimgr$22i,$wgimgr$22j,$wgimgr$22k,$wgimgr$22l,$wgimgr$22m,$wgimgr$22n,$wgimgr$22o,$wgimgr$22p,$wgimgr$22q,$wgimgr$22r,$wgimgr$22s,$wgimgr$22t,$wgimgr$22u,$wgimgr$22v,$wgimgr$22w,$wgimgr$22x,$wgimgr$22y,$wgimgr$22z,pre$);
pre$.tag_=Tag("pre");
return pre$;
}
Pre.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Pre')];},d:['ceylon.html','Pre']};};
ex$.Pre=Pre;
function $init$Pre(){
if(Pre.$$===undefined){
m$1.initTypeProto(Pre,'ceylon.html::Pre',$init$TextNode(),$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(pre$){
m$1.atr$(pre$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Pre,pa:3,d:['ceylon.html','Pre','$at','text']};});
m$1.atr$(pre$,'$wgimgr$22i',function(){return this.$wgimgr$22i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','id$i6bnex']};});
m$1.atr$(pre$,'$wgimgr$22j',function(){return this.$wgimgr$22j_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Pre,d:['ceylon.html','Pre','$at','classNames$wfui96']};});
m$1.atr$(pre$,'$wgimgr$22k',function(){return this.$wgimgr$22k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','style$hj21kf']};});
m$1.atr$(pre$,'$wgimgr$22l',function(){return this.$wgimgr$22l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','accessKey$6ex5l5']};});
m$1.atr$(pre$,'$wgimgr$22m',function(){return this.$wgimgr$22m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','contextMenu$sl6a1w']};});
m$1.atr$(pre$,'$wgimgr$22n',function(){return this.$wgimgr$22n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Pre,d:['ceylon.html','Pre','$at','dir$kcnv8r']};});
m$1.atr$(pre$,'$wgimgr$22o',function(){return this.$wgimgr$22o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Pre,d:['ceylon.html','Pre','$at','draggable$ef48h7']};});
m$1.atr$(pre$,'$wgimgr$22p',function(){return this.$wgimgr$22p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Pre,d:['ceylon.html','Pre','$at','dropZone$veyp9l']};});
m$1.atr$(pre$,'$wgimgr$22q',function(){return this.$wgimgr$22q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Pre,d:['ceylon.html','Pre','$at','inert$h1vvso']};});
m$1.atr$(pre$,'$wgimgr$22r',function(){return this.$wgimgr$22r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Pre,d:['ceylon.html','Pre','$at','hidden$d95534']};});
m$1.atr$(pre$,'$wgimgr$22s',function(){return this.$wgimgr$22s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','lang$m3qkkk']};});
m$1.atr$(pre$,'$wgimgr$22t',function(){return this.$wgimgr$22t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Pre,d:['ceylon.html','Pre','$at','spellcheck$5c0lom']};});
m$1.atr$(pre$,'$wgimgr$22u',function(){return this.$wgimgr$22u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Pre,d:['ceylon.html','Pre','$at','tabIndex$qemhgl']};});
m$1.atr$(pre$,'$wgimgr$22v',function(){return this.$wgimgr$22v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Pre,d:['ceylon.html','Pre','$at','title$uwruri']};});
m$1.atr$(pre$,'$wgimgr$22w',function(){return this.$wgimgr$22w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Pre,d:['ceylon.html','Pre','$at','translate$bdb0u4']};});
m$1.atr$(pre$,'$wgimgr$22x',function(){return this.$wgimgr$22x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Pre,d:['ceylon.html','Pre','$at','aria$f1to93']};});
m$1.atr$(pre$,'$wgimgr$22y',function(){return this.$wgimgr$22y_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Pre,d:['ceylon.html','Pre','$at','nonstandardAttributes$3o9hkx']};});
m$1.atr$(pre$,'$wgimgr$22z',function(){return this.$wgimgr$22z_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Pre,d:['ceylon.html','Pre','$at','data$gpmqdc']};});
m$1.atr$(pre$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Pre,pa:3,d:['ceylon.html','Pre','$at','children']};});
m$1.atr$(pre$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Pre,pa:3,d:['ceylon.html','Pre','$at','tag']};});
})(Pre.$$.prototype);
}
return Pre;
}
ex$.$init$Pre=$init$Pre;
$init$Pre();
function User(name,user$){
$init$User();
if(user$===undefined)user$=new User.$$;
user$.name_=name;
return user$;
}
User.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1}],d:['ceylon.html','User']};};
ex$.User=User;
function $init$User(){
if(User.$$===undefined){
m$1.initTypeProto(User,'ceylon.html::User',m$1.Basic);
(function(user$){
m$1.atr$(user$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:User,pa:1,d:['ceylon.html','User','$at','name']};});
})(User.$$.prototype);
}
return User;
}
ex$.$init$User=$init$User;
$init$User();
function UserRow($wgimgr$230,userRow$){
$init$UserRow();
if(userRow$===undefined)userRow$=new UserRow.$$;
userRow$.$$targs$$={Result$Snippet:{t:Tr}};
userRow$.$wgimgr$230_=$wgimgr$230;
Snippet({Result$Snippet:{t:Tr}},userRow$);
userRow$.content_=($231=[Td(userRow$.$wgimgr$230.hash.string),Td(userRow$.$wgimgr$230.name)].$sa$(m$1.mut$([{t:Th},{t:Td},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:Th},{t:Td}]),Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:Th},{t:Td}])}},{t:m$1.Null}]),1),Tr(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$231));
var $231;
return userRow$;
}
UserRow.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'user',mt:'prm',$t:{t:User}}],sts:[{t:Snippet,a:{Result$Snippet:{t:Tr}}}],d:['ceylon.html','UserRow']};};
ex$.UserRow=UserRow;
function $init$UserRow(){
if(UserRow.$$===undefined){
m$1.initTypeProto(UserRow,'ceylon.html::UserRow',m$1.Basic,$init$Snippet());
(function(userRow$){
m$1.atr$(userRow$,'$wgimgr$230',function(){return this.$wgimgr$230_;},undefined,function(){return{mod:$CCMM$,$t:{t:User},$cont:UserRow,d:['ceylon.html','UserRow','$at','user$g8bkcb']};});
m$1.atr$(userRow$,'content',function(){return this.content_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Tr},{t:m$1.Iterable,a:{Element$Iterable:{t:Tr},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Null}]},$cont:UserRow,pa:3,d:['ceylon.html','UserRow','$at','content']};});
})(UserRow.$$.prototype);
}
return UserRow;
}
ex$.$init$UserRow=$init$UserRow;
$init$UserRow();
var $232;function $valinit$$232(){if($232===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'users\' before it was set"),'20:0-24:2','run.ceylon');
if($232===undefined){$232=m$1.INIT$;$232=m$1.tpl$([($233="Daniel Rochetti",User($233)),($234="John Doe",User($234))])};return $232;};
function users(){return $valinit$$232();}
var $prop$getUsers={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:User}}},d:['ceylon.html','users']};}};
ex$.$prop$getUsers=$prop$getUsers;
$prop$getUsers.get=users;
var $233,$234;
var $235;function $valinit$$235(){if($235===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'page\' before it was set"),'26:0-62:1','run.ceylon');
if($235===undefined){$235=m$1.INIT$;$235=($236=html5(),$237=($238="Page Title",$239=[CharsetMeta("utf-8"),CssLink("http://fonts.googleapis.com/css?family=Open+Sans")].$sa$(m$1.mut$([HeadElements(),{t:m$1.Null},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:Title},{t:Meta},{t:Link},{t:Script}])}}]),1),Head($238,undefined,$239)),$23a=($23b=[($23c=m$1.tpl$(["wrapper","container"]),$23d=m$1.tpl$([m$1.Entry("ng-controller","UsersController",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$23e=[P(($23f=(users().empty?"No users...":null),m$1.nn$($23f)?$23f:"There are ".plus(users().size.string).plus(" users!"))),($23g="users",$23h=m$1.tpl$([m$1.Entry("total",users().size,{Item$Entry:{t:m$1.Integer},Key$Entry:{t:m$1.$_String}})]),$23i=m$1.sarg$(function($23j){switch($23j){case 0:return Th("#");case 1:return Th("Name");}return m$1.finished();},undefined,{Element$Iterable:{t:Th},Absent$Iterable:{t:m$1.Nothing}}),$23k=m$1.for$(function(){
var $23l=users().indexed.iterator(),$23m=m$1.finished(),$23n,$23o;
var n$23m=function(){
var $23p;
if(($23p=$23l.next())!==m$1.finished()){
$23n=$23p.key,$23o=$23p.item;
return $23p;
}
return undefined;
}
return function(){
if(n$23m()!==undefined){
var $23q=$23m,$23r=UserRow($23o);
return $23r;
}
return m$1.finished();
}
},{Element$Iterable:{t:UserRow},Absent$Iterable:{t:m$1.Null}}).sequence(),Table($23i,$23k,undefined,$23g,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$23h)),((users().size>1)?($23s="".plus(users().size.string).plus(" records"),$23t="pagination",Div($23s,undefined,$23t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)):null)].$sa$(m$1.mut$([{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:BlockElement},{t:InlineElement}]),Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:BlockElement},{t:InlineElement}])}},{t:m$1.Null}]),1),Div(undefined,undefined,$23c,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$23d,undefined,$23e))].$sa$(m$1.mut$([{t:m$1.$_String},BlockOrInline(),{t:m$1.Null},{t:Script},{t:Snippet,a:{Result$Snippet:m$1.mut$([{t:BlockElement},{t:InlineElement}])}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:BlockElement},{t:InlineElement}]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Iterable,a:{Element$Iterable:{t:Script},Absent$Iterable:{t:m$1.Null}}}]),1),Body(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$23b)),Html($236,$237,$23a,undefined))};return $235;};
function page(){return $valinit$$235();}
var $prop$getPage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Html},d:['ceylon.html','page']};}};
ex$.$prop$getPage=$prop$getPage;
$prop$getPage.get=page;
var $236,$237,$238,$239,$23a,$23b,$23c,$23d,$23e,$23f,$23g,$23h,$23i,$23k,$23s,$23t;
function run(){
consoleSerializer$serializer().serialize(page());
};run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],an:function(){return[m$1.doc$($CCMM$,'ceylon.html:run')];},d:['ceylon.html','run']};};
function Script(src,type,$wgimgr$23u,charset,async,defer,script$){
$init$Script();
if(script$===undefined)script$=new Script.$$;
if(src===undefined){src=null;}
script$.src_=src;
if(type===undefined){type=javascript();}
script$.type_=type;
if($wgimgr$23u===undefined){$wgimgr$23u=null;}
script$.$wgimgr$23u_=$wgimgr$23u;
if(charset===undefined){charset=null;}
script$.charset_=charset;
if(async===undefined){async=null;}
script$.async_=async;
if(defer===undefined){defer=null;}
script$.defer_=defer;
Element($wgimgr$23u,script$);
script$.tag_=Tag("script");
return script$;
}
Script.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Element},ps:[{nm:'src',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:src')];}},{nm:'type',mt:'prm',def:1,$t:{t:ScriptType},pa:1},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'charset',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:charset')];}},{nm:'async',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:async')];}},{nm:'defer',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:defer')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script')];},d:['ceylon.html','Script']};};
ex$.Script=Script;
function $init$Script(){
if(Script.$$===undefined){
m$1.initTypeProto(Script,'ceylon.html::Script',$init$Element());
(function(script$){
m$1.atr$(script$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Script,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:src')];},d:['ceylon.html','Script','$at','src']};});
m$1.atr$(script$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:ScriptType},$cont:Script,pa:1,d:['ceylon.html','Script','$at','type']};});
m$1.atr$(script$,'$wgimgr$23u',function(){return this.$wgimgr$23u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Script,d:['ceylon.html','Script','$at','id$lh17v3']};});
m$1.atr$(script$,'charset',function(){return this.charset_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Script,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:charset')];},d:['ceylon.html','Script','$at','charset']};});
m$1.atr$(script$,'async',function(){return this.async_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Script,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:async')];},d:['ceylon.html','Script','$at','async']};});
m$1.atr$(script$,'defer',function(){return this.defer_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Script,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Script:$at:defer')];},d:['ceylon.html','Script','$at','defer']};});
m$1.atr$(script$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Script,pa:3,d:['ceylon.html','Script','$at','tag']};});
m$1.atr$(script$,'attributes',function(){
var script$=this;
var $23v=AttributeSequenceBuilder();
$23v.addAttribute("src",script$.src);
$23v.addAttribute("type",script$.type);
$23v.addAll(m$1.attrGetter(script$.getT$all()['ceylon.html::Element'],'attributes').call(this));
$23v.addAttribute("charset",script$.charset);
$23v.addNamedBooleanAttribute("async",script$.async);
$23v.addNamedBooleanAttribute("defer",script$.defer);
return $23v.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Script,pa:11,d:['ceylon.html','Script','$at','attributes']};});
})(Script.$$.prototype);
}
return Script;
}
ex$.$init$Script=$init$Script;
$init$Script();
function ScriptType($wgimgr$23w,scriptType$){
$init$ScriptType();
if(scriptType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::ScriptType"),'?','?')
scriptType$.$wgimgr$23w_=$wgimgr$23w;
return scriptType$;
}
ScriptType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}}],pa:257,d:['ceylon.html','ScriptType']};};
ex$.ScriptType=ScriptType;
function $init$ScriptType(){
if(ScriptType.$$===undefined){
m$1.initTypeProto(ScriptType,'ceylon.html::ScriptType',m$1.Basic);
(function(scriptType$){
m$1.atr$(scriptType$,'$wgimgr$23w',function(){return this.$wgimgr$23w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ScriptType,d:['ceylon.html','ScriptType','$at','type$pp5nha']};});
m$1.atr$(scriptType$,'string',function(){
var scriptType$=this;
return scriptType$.$wgimgr$23w;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ScriptType,pa:3,d:['ceylon.html','ScriptType','$at','string']};});
})(ScriptType.$$.prototype);
}
return ScriptType;
}
ex$.$init$ScriptType=$init$ScriptType;
$init$ScriptType();
function $23x(){
var javascript$=new $23x.$$;ScriptType("text/javascript",javascript$);
return javascript$;
};$23x.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ScriptType},d:['ceylon.html','javascript']};};
function $init$javascript(){
if($23x.$$===undefined){
m$1.initTypeProto($23x,'ceylon.html::javascript',$init$ScriptType());
}
return $23x;
}
ex$.$init$javascript=$init$javascript;
$init$javascript();
var $23z;
function javascript(){
if($23z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'javascript\' before it was set"),'47:0-47:64','Script.ceylon');
if($23z===undefined){$23z=m$1.INIT$;$23z=$init$javascript()();$23z.$crtmm$=javascript.$crtmm$;}
return $23z;
}
ex$.javascript=javascript;
javascript.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$javascript()},pa:1,d:['ceylon.html','javascript']};};
$prop$getJavascript=javascript;
ex$.$prop$getJavascript=$prop$getJavascript;
function Article($wgimgr$240,$wgimgr$241,$wgimgr$242,$wgimgr$243,$wgimgr$244,$wgimgr$245,$wgimgr$246,$wgimgr$247,$wgimgr$248,$wgimgr$249,$wgimgr$24a,$wgimgr$24b,$wgimgr$24c,$wgimgr$24d,$wgimgr$24e,$wgimgr$24f,$wgimgr$24g,$wgimgr$24h,children,article$){
$init$Article();
if(article$===undefined)article$=new Article.$$;
article$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$240===undefined){$wgimgr$240=null;}
article$.$wgimgr$240_=$wgimgr$240;
if($wgimgr$241===undefined){$wgimgr$241=m$1.empty();}
article$.$wgimgr$241_=$wgimgr$241;
if($wgimgr$242===undefined){$wgimgr$242=null;}
article$.$wgimgr$242_=$wgimgr$242;
if($wgimgr$243===undefined){$wgimgr$243=null;}
article$.$wgimgr$243_=$wgimgr$243;
if($wgimgr$244===undefined){$wgimgr$244=null;}
article$.$wgimgr$244_=$wgimgr$244;
if($wgimgr$245===undefined){$wgimgr$245=null;}
article$.$wgimgr$245_=$wgimgr$245;
if($wgimgr$246===undefined){$wgimgr$246=null;}
article$.$wgimgr$246_=$wgimgr$246;
if($wgimgr$247===undefined){$wgimgr$247=null;}
article$.$wgimgr$247_=$wgimgr$247;
if($wgimgr$248===undefined){$wgimgr$248=null;}
article$.$wgimgr$248_=$wgimgr$248;
if($wgimgr$249===undefined){$wgimgr$249=null;}
article$.$wgimgr$249_=$wgimgr$249;
if($wgimgr$24a===undefined){$wgimgr$24a=null;}
article$.$wgimgr$24a_=$wgimgr$24a;
if($wgimgr$24b===undefined){$wgimgr$24b=null;}
article$.$wgimgr$24b_=$wgimgr$24b;
if($wgimgr$24c===undefined){$wgimgr$24c=null;}
article$.$wgimgr$24c_=$wgimgr$24c;
if($wgimgr$24d===undefined){$wgimgr$24d=null;}
article$.$wgimgr$24d_=$wgimgr$24d;
if($wgimgr$24e===undefined){$wgimgr$24e=null;}
article$.$wgimgr$24e_=$wgimgr$24e;
if($wgimgr$24f===undefined){$wgimgr$24f=null;}
article$.$wgimgr$24f_=$wgimgr$24f;
if($wgimgr$24g===undefined){$wgimgr$24g=m$1.empty();}
article$.$wgimgr$24g_=$wgimgr$24g;
if($wgimgr$24h===undefined){$wgimgr$24h=m$1.empty();}
article$.$wgimgr$24h_=$wgimgr$24h;
if(children===undefined){children=m$1.empty();}
article$.children_=children;
BlockElement(article$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},article$);
BaseElement($wgimgr$240,$wgimgr$241,$wgimgr$242,$wgimgr$243,$wgimgr$244,$wgimgr$245,$wgimgr$246,$wgimgr$247,$wgimgr$248,$wgimgr$249,$wgimgr$24a,$wgimgr$24b,$wgimgr$24c,$wgimgr$24d,$wgimgr$24e,$wgimgr$24f,$wgimgr$24g,$wgimgr$24h,article$);
article$.tag_=Tag("article");
return article$;
}
Article.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Article')];},d:['ceylon.html','Article']};};
ex$.Article=Article;
function $init$Article(){
if(Article.$$===undefined){
m$1.initTypeProto(Article,'ceylon.html::Article',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(article$){
m$1.atr$(article$,'$wgimgr$240',function(){return this.$wgimgr$240_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','id$yuayr8']};});
m$1.atr$(article$,'$wgimgr$241',function(){return this.$wgimgr$241_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Article,d:['ceylon.html','Article','$at','classNames$frv6wv']};});
m$1.atr$(article$,'$wgimgr$242',function(){return this.$wgimgr$242_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','style$y71cwq']};});
m$1.atr$(article$,'$wgimgr$243',function(){return this.$wgimgr$243_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','accessKey$n2wgxg']};});
m$1.atr$(article$,'$wgimgr$244',function(){return this.$wgimgr$244_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','contextMenu$prygkx']};});
m$1.atr$(article$,'$wgimgr$245',function(){return this.$wgimgr$245_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Article,d:['ceylon.html','Article','$at','dir$y0gve2']};});
m$1.atr$(article$,'$wgimgr$246',function(){return this.$wgimgr$246_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Article,d:['ceylon.html','Article','$at','draggable$v33jti']};});
m$1.atr$(article$,'$wgimgr$247',function(){return this.$wgimgr$247_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Article,d:['ceylon.html','Article','$at','dropZone$my61d8']};});
m$1.atr$(article$,'$wgimgr$248',function(){return this.$wgimgr$248_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Article,d:['ceylon.html','Article','$at','inert$xpv74z']};});
m$1.atr$(article$,'$wgimgr$249',function(){return this.$wgimgr$249_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Article,d:['ceylon.html','Article','$at','hidden$tx4gff']};});
m$1.atr$(article$,'$wgimgr$24a',function(){return this.$wgimgr$24a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','lang$w9e629']};});
m$1.atr$(article$,'$wgimgr$24b',function(){return this.$wgimgr$24b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Article,d:['ceylon.html','Article','$at','spellcheck$lzzx0x']};});
m$1.atr$(article$,'$wgimgr$24c',function(){return this.$wgimgr$24c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Article,d:['ceylon.html','Article','$at','tabIndex$9qn64a']};});
m$1.atr$(article$,'$wgimgr$24d',function(){return this.$wgimgr$24d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Article,d:['ceylon.html','Article','$at','title$ngcvvb']};});
m$1.atr$(article$,'$wgimgr$24e',function(){return this.$wgimgr$24e_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Article,d:['ceylon.html','Article','$at','translate$5aoai7']};});
m$1.atr$(article$,'$wgimgr$24f',function(){return this.$wgimgr$24f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Article,d:['ceylon.html','Article','$at','aria$vpszle']};});
m$1.atr$(article$,'$wgimgr$24g',function(){return this.$wgimgr$24g_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Article,d:['ceylon.html','Article','$at','nonstandardAttributes$czptre']};});
m$1.atr$(article$,'$wgimgr$24h',function(){return this.$wgimgr$24h_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Article,d:['ceylon.html','Article','$at','data$xdm1pn']};});
m$1.atr$(article$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Article,pa:3,d:['ceylon.html','Article','$at','children']};});
m$1.atr$(article$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Article,pa:3,d:['ceylon.html','Article','$at','tag']};});
})(Article.$$.prototype);
}
return Article;
}
ex$.$init$Article=$init$Article;
$init$Article();
function Aside($wgimgr$24i,$wgimgr$24j,$wgimgr$24k,$wgimgr$24l,$wgimgr$24m,$wgimgr$24n,$wgimgr$24o,$wgimgr$24p,$wgimgr$24q,$wgimgr$24r,$wgimgr$24s,$wgimgr$24t,$wgimgr$24u,$wgimgr$24v,$wgimgr$24w,$wgimgr$24x,$wgimgr$24y,$wgimgr$24z,children,aside$){
$init$Aside();
if(aside$===undefined)aside$=new Aside.$$;
aside$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$24i===undefined){$wgimgr$24i=null;}
aside$.$wgimgr$24i_=$wgimgr$24i;
if($wgimgr$24j===undefined){$wgimgr$24j=m$1.empty();}
aside$.$wgimgr$24j_=$wgimgr$24j;
if($wgimgr$24k===undefined){$wgimgr$24k=null;}
aside$.$wgimgr$24k_=$wgimgr$24k;
if($wgimgr$24l===undefined){$wgimgr$24l=null;}
aside$.$wgimgr$24l_=$wgimgr$24l;
if($wgimgr$24m===undefined){$wgimgr$24m=null;}
aside$.$wgimgr$24m_=$wgimgr$24m;
if($wgimgr$24n===undefined){$wgimgr$24n=null;}
aside$.$wgimgr$24n_=$wgimgr$24n;
if($wgimgr$24o===undefined){$wgimgr$24o=null;}
aside$.$wgimgr$24o_=$wgimgr$24o;
if($wgimgr$24p===undefined){$wgimgr$24p=null;}
aside$.$wgimgr$24p_=$wgimgr$24p;
if($wgimgr$24q===undefined){$wgimgr$24q=null;}
aside$.$wgimgr$24q_=$wgimgr$24q;
if($wgimgr$24r===undefined){$wgimgr$24r=null;}
aside$.$wgimgr$24r_=$wgimgr$24r;
if($wgimgr$24s===undefined){$wgimgr$24s=null;}
aside$.$wgimgr$24s_=$wgimgr$24s;
if($wgimgr$24t===undefined){$wgimgr$24t=null;}
aside$.$wgimgr$24t_=$wgimgr$24t;
if($wgimgr$24u===undefined){$wgimgr$24u=null;}
aside$.$wgimgr$24u_=$wgimgr$24u;
if($wgimgr$24v===undefined){$wgimgr$24v=null;}
aside$.$wgimgr$24v_=$wgimgr$24v;
if($wgimgr$24w===undefined){$wgimgr$24w=null;}
aside$.$wgimgr$24w_=$wgimgr$24w;
if($wgimgr$24x===undefined){$wgimgr$24x=null;}
aside$.$wgimgr$24x_=$wgimgr$24x;
if($wgimgr$24y===undefined){$wgimgr$24y=m$1.empty();}
aside$.$wgimgr$24y_=$wgimgr$24y;
if($wgimgr$24z===undefined){$wgimgr$24z=m$1.empty();}
aside$.$wgimgr$24z_=$wgimgr$24z;
if(children===undefined){children=m$1.empty();}
aside$.children_=children;
BlockElement(aside$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},aside$);
BaseElement($wgimgr$24i,$wgimgr$24j,$wgimgr$24k,$wgimgr$24l,$wgimgr$24m,$wgimgr$24n,$wgimgr$24o,$wgimgr$24p,$wgimgr$24q,$wgimgr$24r,$wgimgr$24s,$wgimgr$24t,$wgimgr$24u,$wgimgr$24v,$wgimgr$24w,$wgimgr$24x,$wgimgr$24y,$wgimgr$24z,aside$);
aside$.tag_=Tag("aside");
return aside$;
}
Aside.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Aside')];},d:['ceylon.html','Aside']};};
ex$.Aside=Aside;
function $init$Aside(){
if(Aside.$$===undefined){
m$1.initTypeProto(Aside,'ceylon.html::Aside',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(aside$){
m$1.atr$(aside$,'$wgimgr$24i',function(){return this.$wgimgr$24i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','id$nn5tmu']};});
m$1.atr$(aside$,'$wgimgr$24j',function(){return this.$wgimgr$24j_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Aside,d:['ceylon.html','Aside','$at','classNames$qz0c19']};});
m$1.atr$(aside$,'$wgimgr$24k',function(){return this.$wgimgr$24k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','style$mzw7sc']};});
m$1.atr$(aside$,'$wgimgr$24l',function(){return this.$wgimgr$24l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','accessKey$bvrbt2']};});
m$1.atr$(aside$,'$wgimgr$24m',function(){return this.$wgimgr$24m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','contextMenu$y20g9t']};});
m$1.atr$(aside$,'$wgimgr$24n',function(){return this.$wgimgr$24n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Aside,d:['ceylon.html','Aside','$at','dir$pti1go']};});
m$1.atr$(aside$,'$wgimgr$24o',function(){return this.$wgimgr$24o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Aside,d:['ceylon.html','Aside','$at','draggable$jvyep4']};});
m$1.atr$(aside$,'$wgimgr$24p',function(){return this.$wgimgr$24p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Aside,d:['ceylon.html','Aside','$at','dropZone$y5b6hm']};});
m$1.atr$(aside$,'$wgimgr$24q',function(){return this.$wgimgr$24q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Aside,d:['ceylon.html','Aside','$at','inert$miq20l']};});
m$1.atr$(aside$,'$wgimgr$24r',function(){return this.$wgimgr$24r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Aside,d:['ceylon.html','Aside','$at','hidden$ipzbb1']};});
m$1.atr$(aside$,'$wgimgr$24s',function(){return this.$wgimgr$24s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','lang$rkkqsh']};});
m$1.atr$(aside$,'$wgimgr$24t',function(){return this.$wgimgr$24t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Aside,d:['ceylon.html','Aside','$at','spellcheck$asurwj']};});
m$1.atr$(aside$,'$wgimgr$24u',function(){return this.$wgimgr$24u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Aside,d:['ceylon.html','Aside','$at','tabIndex$kxsb8o']};});
m$1.atr$(aside$,'$wgimgr$24v',function(){return this.$wgimgr$24v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Aside,d:['ceylon.html','Aside','$at','title$yni0zp']};});
m$1.atr$(aside$,'$wgimgr$24w',function(){return this.$wgimgr$24w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Aside,d:['ceylon.html','Aside','$at','translate$5wgum7']};});
m$1.atr$(aside$,'$wgimgr$24x',function(){return this.$wgimgr$24x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Aside,d:['ceylon.html','Aside','$at','aria$kinuh0']};});
m$1.atr$(aside$,'$wgimgr$24y',function(){return this.$wgimgr$24y_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Aside,d:['ceylon.html','Aside','$at','nonstandardAttributes$1skon0']};});
m$1.atr$(aside$,'$wgimgr$24z',function(){return this.$wgimgr$24z_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Aside,d:['ceylon.html','Aside','$at','data$m6gwl9']};});
m$1.atr$(aside$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Aside,pa:3,d:['ceylon.html','Aside','$at','children']};});
m$1.atr$(aside$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Aside,pa:3,d:['ceylon.html','Aside','$at','tag']};});
})(Aside.$$.prototype);
}
return Aside;
}
ex$.$init$Aside=$init$Aside;
$init$Aside();
function Header($wgimgr$250,$wgimgr$251,$wgimgr$252,$wgimgr$253,$wgimgr$254,$wgimgr$255,$wgimgr$256,$wgimgr$257,$wgimgr$258,$wgimgr$259,$wgimgr$25a,$wgimgr$25b,$wgimgr$25c,$wgimgr$25d,$wgimgr$25e,$wgimgr$25f,$wgimgr$25g,$wgimgr$25h,children,header$){
$init$Header();
if(header$===undefined)header$=new Header.$$;
header$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$250===undefined){$wgimgr$250=null;}
header$.$wgimgr$250_=$wgimgr$250;
if($wgimgr$251===undefined){$wgimgr$251=m$1.empty();}
header$.$wgimgr$251_=$wgimgr$251;
if($wgimgr$252===undefined){$wgimgr$252=null;}
header$.$wgimgr$252_=$wgimgr$252;
if($wgimgr$253===undefined){$wgimgr$253=null;}
header$.$wgimgr$253_=$wgimgr$253;
if($wgimgr$254===undefined){$wgimgr$254=null;}
header$.$wgimgr$254_=$wgimgr$254;
if($wgimgr$255===undefined){$wgimgr$255=null;}
header$.$wgimgr$255_=$wgimgr$255;
if($wgimgr$256===undefined){$wgimgr$256=null;}
header$.$wgimgr$256_=$wgimgr$256;
if($wgimgr$257===undefined){$wgimgr$257=null;}
header$.$wgimgr$257_=$wgimgr$257;
if($wgimgr$258===undefined){$wgimgr$258=null;}
header$.$wgimgr$258_=$wgimgr$258;
if($wgimgr$259===undefined){$wgimgr$259=null;}
header$.$wgimgr$259_=$wgimgr$259;
if($wgimgr$25a===undefined){$wgimgr$25a=null;}
header$.$wgimgr$25a_=$wgimgr$25a;
if($wgimgr$25b===undefined){$wgimgr$25b=null;}
header$.$wgimgr$25b_=$wgimgr$25b;
if($wgimgr$25c===undefined){$wgimgr$25c=null;}
header$.$wgimgr$25c_=$wgimgr$25c;
if($wgimgr$25d===undefined){$wgimgr$25d=null;}
header$.$wgimgr$25d_=$wgimgr$25d;
if($wgimgr$25e===undefined){$wgimgr$25e=null;}
header$.$wgimgr$25e_=$wgimgr$25e;
if($wgimgr$25f===undefined){$wgimgr$25f=null;}
header$.$wgimgr$25f_=$wgimgr$25f;
if($wgimgr$25g===undefined){$wgimgr$25g=m$1.empty();}
header$.$wgimgr$25g_=$wgimgr$25g;
if($wgimgr$25h===undefined){$wgimgr$25h=m$1.empty();}
header$.$wgimgr$25h_=$wgimgr$25h;
if(children===undefined){children=m$1.empty();}
header$.children_=children;
BlockElement(header$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},header$);
BaseElement($wgimgr$250,$wgimgr$251,$wgimgr$252,$wgimgr$253,$wgimgr$254,$wgimgr$255,$wgimgr$256,$wgimgr$257,$wgimgr$258,$wgimgr$259,$wgimgr$25a,$wgimgr$25b,$wgimgr$25c,$wgimgr$25d,$wgimgr$25e,$wgimgr$25f,$wgimgr$25g,$wgimgr$25h,header$);
header$.tag_=Tag("header");
return header$;
}
Header.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Header')];},d:['ceylon.html','Header']};};
ex$.Header=Header;
function $init$Header(){
if(Header.$$===undefined){
m$1.initTypeProto(Header,'ceylon.html::Header',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(header$){
m$1.atr$(header$,'$wgimgr$250',function(){return this.$wgimgr$250_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','id$bp7sn1']};});
m$1.atr$(header$,'$wgimgr$251',function(){return this.$wgimgr$251_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Header,d:['ceylon.html','Header','$at','classNames$8pq3o0']};});
m$1.atr$(header$,'$wgimgr$252',function(){return this.$wgimgr$252_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','style$cchehj']};});
m$1.atr$(header$,'$wgimgr$253',function(){return this.$wgimgr$253_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','accessKey$ngmagt']};});
m$1.atr$(header$,'$wgimgr$254',function(){return this.$wgimgr$254_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','contextMenu$1ad602']};});
m$1.atr$(header$,'$wgimgr$255',function(){return this.$wgimgr$255_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Header,d:['ceylon.html','Header','$at','dir$9ivkt7']};});
m$1.atr$(header$,'$wgimgr$256',function(){return this.$wgimgr$256_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Header,d:['ceylon.html','Header','$at','draggable$fgf7kr']};});
m$1.atr$(header$,'$wgimgr$257',function(){return this.$wgimgr$257_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Header,d:['ceylon.html','Header','$at','dropZone$1jf97n']};});
m$1.atr$(header$,'$wgimgr$258',function(){return this.$wgimgr$258_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Header,d:['ceylon.html','Header','$at','inert$ctnk9a']};});
m$1.atr$(header$,'$wgimgr$259',function(){return this.$wgimgr$259_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Header,d:['ceylon.html','Header','$at','hidden$gmeayu']};});
m$1.atr$(header$,'$wgimgr$25a',function(){return this.$wgimgr$25a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','lang$7rsvhe']};});
m$1.atr$(header$,'$wgimgr$25b',function(){return this.$wgimgr$25b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Header,d:['ceylon.html','Header','$at','spellcheck$ojiudc']};});
m$1.atr$(header$,'$wgimgr$25c',function(){return this.$wgimgr$25c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Header,d:['ceylon.html','Header','$at','tabIndex$eqy4gl']};});
m$1.atr$(header$,'$wgimgr$25d',function(){return this.$wgimgr$25d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Header,d:['ceylon.html','Header','$at','title$118epk']};});
m$1.atr$(header$,'$wgimgr$25e',function(){return this.$wgimgr$25e_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Header,d:['ceylon.html','Header','$at','translate$ts9l32']};});
m$1.atr$(header$,'$wgimgr$25f',function(){return this.$wgimgr$25f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Header,d:['ceylon.html','Header','$at','aria$etprsv']};});
m$1.atr$(header$,'$wgimgr$25g',function(){return this.$wgimgr$25g_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Header,d:['ceylon.html','Header','$at','nonstandardAttributes$xjsxmv']};});
m$1.atr$(header$,'$wgimgr$25h',function(){return this.$wgimgr$25h_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Header,d:['ceylon.html','Header','$at','data$d5wpom']};});
m$1.atr$(header$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Header,pa:3,d:['ceylon.html','Header','$at','children']};});
m$1.atr$(header$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Header,pa:3,d:['ceylon.html','Header','$at','tag']};});
})(Header.$$.prototype);
}
return Header;
}
ex$.$init$Header=$init$Header;
$init$Header();
function Footer($wgimgr$25i,$wgimgr$25j,$wgimgr$25k,$wgimgr$25l,$wgimgr$25m,$wgimgr$25n,$wgimgr$25o,$wgimgr$25p,$wgimgr$25q,$wgimgr$25r,$wgimgr$25s,$wgimgr$25t,$wgimgr$25u,$wgimgr$25v,$wgimgr$25w,$wgimgr$25x,$wgimgr$25y,$wgimgr$25z,children,footer$){
$init$Footer();
if(footer$===undefined)footer$=new Footer.$$;
footer$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$25i===undefined){$wgimgr$25i=null;}
footer$.$wgimgr$25i_=$wgimgr$25i;
if($wgimgr$25j===undefined){$wgimgr$25j=m$1.empty();}
footer$.$wgimgr$25j_=$wgimgr$25j;
if($wgimgr$25k===undefined){$wgimgr$25k=null;}
footer$.$wgimgr$25k_=$wgimgr$25k;
if($wgimgr$25l===undefined){$wgimgr$25l=null;}
footer$.$wgimgr$25l_=$wgimgr$25l;
if($wgimgr$25m===undefined){$wgimgr$25m=null;}
footer$.$wgimgr$25m_=$wgimgr$25m;
if($wgimgr$25n===undefined){$wgimgr$25n=null;}
footer$.$wgimgr$25n_=$wgimgr$25n;
if($wgimgr$25o===undefined){$wgimgr$25o=null;}
footer$.$wgimgr$25o_=$wgimgr$25o;
if($wgimgr$25p===undefined){$wgimgr$25p=null;}
footer$.$wgimgr$25p_=$wgimgr$25p;
if($wgimgr$25q===undefined){$wgimgr$25q=null;}
footer$.$wgimgr$25q_=$wgimgr$25q;
if($wgimgr$25r===undefined){$wgimgr$25r=null;}
footer$.$wgimgr$25r_=$wgimgr$25r;
if($wgimgr$25s===undefined){$wgimgr$25s=null;}
footer$.$wgimgr$25s_=$wgimgr$25s;
if($wgimgr$25t===undefined){$wgimgr$25t=null;}
footer$.$wgimgr$25t_=$wgimgr$25t;
if($wgimgr$25u===undefined){$wgimgr$25u=null;}
footer$.$wgimgr$25u_=$wgimgr$25u;
if($wgimgr$25v===undefined){$wgimgr$25v=null;}
footer$.$wgimgr$25v_=$wgimgr$25v;
if($wgimgr$25w===undefined){$wgimgr$25w=null;}
footer$.$wgimgr$25w_=$wgimgr$25w;
if($wgimgr$25x===undefined){$wgimgr$25x=null;}
footer$.$wgimgr$25x_=$wgimgr$25x;
if($wgimgr$25y===undefined){$wgimgr$25y=m$1.empty();}
footer$.$wgimgr$25y_=$wgimgr$25y;
if($wgimgr$25z===undefined){$wgimgr$25z=m$1.empty();}
footer$.$wgimgr$25z_=$wgimgr$25z;
if(children===undefined){children=m$1.empty();}
footer$.children_=children;
BlockElement(footer$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},footer$);
BaseElement($wgimgr$25i,$wgimgr$25j,$wgimgr$25k,$wgimgr$25l,$wgimgr$25m,$wgimgr$25n,$wgimgr$25o,$wgimgr$25p,$wgimgr$25q,$wgimgr$25r,$wgimgr$25s,$wgimgr$25t,$wgimgr$25u,$wgimgr$25v,$wgimgr$25w,$wgimgr$25x,$wgimgr$25y,$wgimgr$25z,footer$);
footer$.tag_=Tag("footer");
return footer$;
}
Footer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Footer')];},d:['ceylon.html','Footer']};};
ex$.Footer=Footer;
function $init$Footer(){
if(Footer.$$===undefined){
m$1.initTypeProto(Footer,'ceylon.html::Footer',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(footer$){
m$1.atr$(footer$,'$wgimgr$25i',function(){return this.$wgimgr$25i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','id$6kp70f']};});
m$1.atr$(footer$,'$wgimgr$25j',function(){return this.$wgimgr$25j_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Footer,d:['ceylon.html','Footer','$at','classNames$du8pam']};});
m$1.atr$(footer$,'$wgimgr$25k',function(){return this.$wgimgr$25k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','style$77ysux']};});
m$1.atr$(footer$,'$wgimgr$25l',function(){return this.$wgimgr$25l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','accessKey$ic3ou7']};});
m$1.atr$(footer$,'$wgimgr$25m',function(){return this.$wgimgr$25m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','contextMenu$3u5fmk']};});
m$1.atr$(footer$,'$wgimgr$25n',function(){return this.$wgimgr$25n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Footer,d:['ceylon.html','Footer','$at','dir$4ecz6l']};});
m$1.atr$(footer$,'$wgimgr$25o',function(){return this.$wgimgr$25o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Footer,d:['ceylon.html','Footer','$at','draggable$abwly5']};});
m$1.atr$(footer$,'$wgimgr$25p',function(){return this.$wgimgr$25p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Footer,d:['ceylon.html','Footer','$at','dropZone$6nxuu9']};});
m$1.atr$(footer$,'$wgimgr$25q',function(){return this.$wgimgr$25q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Footer,d:['ceylon.html','Footer','$at','inert$7p4ymo']};});
m$1.atr$(footer$,'$wgimgr$25r',function(){return this.$wgimgr$25r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Footer,d:['ceylon.html','Footer','$at','hidden$bhvpc8']};});
m$1.atr$(footer$,'$wgimgr$25s',function(){return this.$wgimgr$25s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','lang$2na9us']};});
m$1.atr$(footer$,'$wgimgr$25t',function(){return this.$wgimgr$25t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Footer,d:['ceylon.html','Footer','$at','spellcheck$jf08qq']};});
m$1.atr$(footer$,'$wgimgr$25u',function(){return this.$wgimgr$25u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Footer,d:['ceylon.html','Footer','$at','tabIndex$jvgq37']};});
m$1.atr$(footer$,'$wgimgr$25v',function(){return this.$wgimgr$25v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Footer,d:['ceylon.html','Footer','$at','title$65r0c6']};});
m$1.atr$(footer$,'$wgimgr$25w',function(){return this.$wgimgr$25w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Footer,d:['ceylon.html','Footer','$at','translate$yws6po']};});
m$1.atr$(footer$,'$wgimgr$25x',function(){return this.$wgimgr$25x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Footer,d:['ceylon.html','Footer','$at','aria$9p7669']};});
m$1.atr$(footer$,'$wgimgr$25y',function(){return this.$wgimgr$25y_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Footer,d:['ceylon.html','Footer','$at','nonstandardAttributes$sfac09']};});
m$1.atr$(footer$,'$wgimgr$25z',function(){return this.$wgimgr$25z_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Footer,d:['ceylon.html','Footer','$at','data$81e420']};});
m$1.atr$(footer$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Footer,pa:3,d:['ceylon.html','Footer','$at','children']};});
m$1.atr$(footer$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Footer,pa:3,d:['ceylon.html','Footer','$at','tag']};});
})(Footer.$$.prototype);
}
return Footer;
}
ex$.$init$Footer=$init$Footer;
$init$Footer();
function Nav($wgimgr$260,$wgimgr$261,$wgimgr$262,$wgimgr$263,$wgimgr$264,$wgimgr$265,$wgimgr$266,$wgimgr$267,$wgimgr$268,$wgimgr$269,$wgimgr$26a,$wgimgr$26b,$wgimgr$26c,$wgimgr$26d,$wgimgr$26e,$wgimgr$26f,$wgimgr$26g,$wgimgr$26h,children,nav$){
$init$Nav();
if(nav$===undefined)nav$=new Nav.$$;
nav$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$260===undefined){$wgimgr$260=null;}
nav$.$wgimgr$260_=$wgimgr$260;
if($wgimgr$261===undefined){$wgimgr$261=m$1.empty();}
nav$.$wgimgr$261_=$wgimgr$261;
if($wgimgr$262===undefined){$wgimgr$262=null;}
nav$.$wgimgr$262_=$wgimgr$262;
if($wgimgr$263===undefined){$wgimgr$263=null;}
nav$.$wgimgr$263_=$wgimgr$263;
if($wgimgr$264===undefined){$wgimgr$264=null;}
nav$.$wgimgr$264_=$wgimgr$264;
if($wgimgr$265===undefined){$wgimgr$265=null;}
nav$.$wgimgr$265_=$wgimgr$265;
if($wgimgr$266===undefined){$wgimgr$266=null;}
nav$.$wgimgr$266_=$wgimgr$266;
if($wgimgr$267===undefined){$wgimgr$267=null;}
nav$.$wgimgr$267_=$wgimgr$267;
if($wgimgr$268===undefined){$wgimgr$268=null;}
nav$.$wgimgr$268_=$wgimgr$268;
if($wgimgr$269===undefined){$wgimgr$269=null;}
nav$.$wgimgr$269_=$wgimgr$269;
if($wgimgr$26a===undefined){$wgimgr$26a=null;}
nav$.$wgimgr$26a_=$wgimgr$26a;
if($wgimgr$26b===undefined){$wgimgr$26b=null;}
nav$.$wgimgr$26b_=$wgimgr$26b;
if($wgimgr$26c===undefined){$wgimgr$26c=null;}
nav$.$wgimgr$26c_=$wgimgr$26c;
if($wgimgr$26d===undefined){$wgimgr$26d=null;}
nav$.$wgimgr$26d_=$wgimgr$26d;
if($wgimgr$26e===undefined){$wgimgr$26e=null;}
nav$.$wgimgr$26e_=$wgimgr$26e;
if($wgimgr$26f===undefined){$wgimgr$26f=null;}
nav$.$wgimgr$26f_=$wgimgr$26f;
if($wgimgr$26g===undefined){$wgimgr$26g=m$1.empty();}
nav$.$wgimgr$26g_=$wgimgr$26g;
if($wgimgr$26h===undefined){$wgimgr$26h=m$1.empty();}
nav$.$wgimgr$26h_=$wgimgr$26h;
if(children===undefined){children=m$1.empty();}
nav$.children_=children;
BlockElement(nav$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},nav$);
BaseElement($wgimgr$260,$wgimgr$261,$wgimgr$262,$wgimgr$263,$wgimgr$264,$wgimgr$265,$wgimgr$266,$wgimgr$267,$wgimgr$268,$wgimgr$269,$wgimgr$26a,$wgimgr$26b,$wgimgr$26c,$wgimgr$26d,$wgimgr$26e,$wgimgr$26f,$wgimgr$26g,$wgimgr$26h,nav$);
nav$.tag_=Tag("nav");
return nav$;
}
Nav.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Nav')];},d:['ceylon.html','Nav']};};
ex$.Nav=Nav;
function $init$Nav(){
if(Nav.$$===undefined){
m$1.initTypeProto(Nav,'ceylon.html::Nav',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(nav$){
m$1.atr$(nav$,'$wgimgr$260',function(){return this.$wgimgr$260_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','id$ufeqbt']};});
m$1.atr$(nav$,'$wgimgr$261',function(){return this.$wgimgr$261_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Nav,d:['ceylon.html','Nav','$at','classNames$k6rfca']};});
m$1.atr$(nav$,'$wgimgr$262',function(){return this.$wgimgr$262_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','style$ts54hb']};});
m$1.atr$(nav$,'$wgimgr$263',function(){return this.$wgimgr$263_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','accessKey$io08i1']};});
m$1.atr$(nav$,'$wgimgr$264',function(){return this.$wgimgr$264_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','contextMenu$u6up0c']};});
m$1.atr$(nav$,'$wgimgr$265',function(){return this.$wgimgr$265_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Nav,d:['ceylon.html','Nav','$at','dir$wlqy5n']};});
m$1.atr$(nav$,'$wgimgr$266',function(){return this.$wgimgr$266_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Nav,d:['ceylon.html','Nav','$at','draggable$qo7be3']};});
m$1.atr$(nav$,'$wgimgr$267',function(){return this.$wgimgr$267_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Nav,d:['ceylon.html','Nav','$at','dropZone$rd29sn']};});
m$1.atr$(nav$,'$wgimgr$268',function(){return this.$wgimgr$268_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Nav,d:['ceylon.html','Nav','$at','inert$tayypk']};});
m$1.atr$(nav$,'$wgimgr$269',function(){return this.$wgimgr$269_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Nav,d:['ceylon.html','Nav','$at','hidden$pi8800']};});
m$1.atr$(nav$,'$wgimgr$26a',function(){return this.$wgimgr$26a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','lang$yctnhg']};});
m$1.atr$(nav$,'$wgimgr$26b',function(){return this.$wgimgr$26b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Nav,d:['ceylon.html','Nav','$at','spellcheck$hl3oli']};});
m$1.atr$(nav$,'$wgimgr$26c',function(){return this.$wgimgr$26c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Nav,d:['ceylon.html','Nav','$at','tabIndex$e5jejp']};});
m$1.atr$(nav$,'$wgimgr$26d',function(){return this.$wgimgr$26d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Nav,d:['ceylon.html','Nav','$at','title$rv94aq']};});
m$1.atr$(nav$,'$wgimgr$26e',function(){return this.$wgimgr$26e_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Nav,d:['ceylon.html','Nav','$at','translate$vs22s']};});
m$1.atr$(nav$,'$wgimgr$26f',function(){return this.$wgimgr$26f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Nav,d:['ceylon.html','Nav','$at','aria$rawr5z']};});
m$1.atr$(nav$,'$wgimgr$26g',function(){return this.$wgimgr$26g_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Nav,d:['ceylon.html','Nav','$at','nonstandardAttributes$8ktlbz']};});
m$1.atr$(nav$,'$wgimgr$26h',function(){return this.$wgimgr$26h_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Nav,d:['ceylon.html','Nav','$at','data$sypta8']};});
m$1.atr$(nav$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Nav,pa:3,d:['ceylon.html','Nav','$at','children']};});
m$1.atr$(nav$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Nav,pa:3,d:['ceylon.html','Nav','$at','tag']};});
})(Nav.$$.prototype);
}
return Nav;
}
ex$.$init$Nav=$init$Nav;
$init$Nav();
function Section($wgimgr$26i,$wgimgr$26j,$wgimgr$26k,$wgimgr$26l,$wgimgr$26m,$wgimgr$26n,$wgimgr$26o,$wgimgr$26p,$wgimgr$26q,$wgimgr$26r,$wgimgr$26s,$wgimgr$26t,$wgimgr$26u,$wgimgr$26v,$wgimgr$26w,$wgimgr$26x,$wgimgr$26y,$wgimgr$26z,children,section$){
$init$Section();
if(section$===undefined)section$=new Section.$$;
section$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if($wgimgr$26i===undefined){$wgimgr$26i=null;}
section$.$wgimgr$26i_=$wgimgr$26i;
if($wgimgr$26j===undefined){$wgimgr$26j=m$1.empty();}
section$.$wgimgr$26j_=$wgimgr$26j;
if($wgimgr$26k===undefined){$wgimgr$26k=null;}
section$.$wgimgr$26k_=$wgimgr$26k;
if($wgimgr$26l===undefined){$wgimgr$26l=null;}
section$.$wgimgr$26l_=$wgimgr$26l;
if($wgimgr$26m===undefined){$wgimgr$26m=null;}
section$.$wgimgr$26m_=$wgimgr$26m;
if($wgimgr$26n===undefined){$wgimgr$26n=null;}
section$.$wgimgr$26n_=$wgimgr$26n;
if($wgimgr$26o===undefined){$wgimgr$26o=null;}
section$.$wgimgr$26o_=$wgimgr$26o;
if($wgimgr$26p===undefined){$wgimgr$26p=null;}
section$.$wgimgr$26p_=$wgimgr$26p;
if($wgimgr$26q===undefined){$wgimgr$26q=null;}
section$.$wgimgr$26q_=$wgimgr$26q;
if($wgimgr$26r===undefined){$wgimgr$26r=null;}
section$.$wgimgr$26r_=$wgimgr$26r;
if($wgimgr$26s===undefined){$wgimgr$26s=null;}
section$.$wgimgr$26s_=$wgimgr$26s;
if($wgimgr$26t===undefined){$wgimgr$26t=null;}
section$.$wgimgr$26t_=$wgimgr$26t;
if($wgimgr$26u===undefined){$wgimgr$26u=null;}
section$.$wgimgr$26u_=$wgimgr$26u;
if($wgimgr$26v===undefined){$wgimgr$26v=null;}
section$.$wgimgr$26v_=$wgimgr$26v;
if($wgimgr$26w===undefined){$wgimgr$26w=null;}
section$.$wgimgr$26w_=$wgimgr$26w;
if($wgimgr$26x===undefined){$wgimgr$26x=null;}
section$.$wgimgr$26x_=$wgimgr$26x;
if($wgimgr$26y===undefined){$wgimgr$26y=m$1.empty();}
section$.$wgimgr$26y_=$wgimgr$26y;
if($wgimgr$26z===undefined){$wgimgr$26z=m$1.empty();}
section$.$wgimgr$26z_=$wgimgr$26z;
if(children===undefined){children=m$1.empty();}
section$.children_=children;
BlockElement(section$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},section$);
BaseElement($wgimgr$26i,$wgimgr$26j,$wgimgr$26k,$wgimgr$26l,$wgimgr$26m,$wgimgr$26n,$wgimgr$26o,$wgimgr$26p,$wgimgr$26q,$wgimgr$26r,$wgimgr$26s,$wgimgr$26t,$wgimgr$26u,$wgimgr$26v,$wgimgr$26w,$wgimgr$26x,$wgimgr$26y,$wgimgr$26z,section$);
section$.tag_=Tag("section");
return section$;
}
Section.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:BlockElement},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Section')];},d:['ceylon.html','Section']};};
ex$.Section=Section;
function $init$Section(){
if(Section.$$===undefined){
m$1.initTypeProto(Section,'ceylon.html::Section',$init$BlockElement(),$init$ParentNode(),$init$BaseElement());
(function(section$){
m$1.atr$(section$,'$wgimgr$26i',function(){return this.$wgimgr$26i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','id$wu43kr']};});
m$1.atr$(section$,'$wgimgr$26j',function(){return this.$wgimgr$26j_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Section,d:['ceylon.html','Section','$at','classNames$hs223c']};});
m$1.atr$(section$,'$wgimgr$26k',function(){return this.$wgimgr$26k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','style$w6uhq9']};});
m$1.atr$(section$,'$wgimgr$26l',function(){return this.$wgimgr$26l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','accessKey$l2plqz']};});
m$1.atr$(section$,'$wgimgr$26m',function(){return this.$wgimgr$26m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','contextMenu$rs5bre']};});
m$1.atr$(section$,'$wgimgr$26n',function(){return this.$wgimgr$26n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Section,d:['ceylon.html','Section','$at','dir$z0gbel']};});
m$1.atr$(section$,'$wgimgr$26o',function(){return this.$wgimgr$26o_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Section,d:['ceylon.html','Section','$at','draggable$t2won1']};});
m$1.atr$(section$,'$wgimgr$26p',function(){return this.$wgimgr$26p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Section,d:['ceylon.html','Section','$at','dropZone$oycwjp']};});
m$1.atr$(section$,'$wgimgr$26q',function(){return this.$wgimgr$26q_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Section,d:['ceylon.html','Section','$at','inert$vpobyi']};});
m$1.atr$(section$,'$wgimgr$26r',function(){return this.$wgimgr$26r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Section,d:['ceylon.html','Section','$at','hidden$rwxl8y']};});
m$1.atr$(section$,'$wgimgr$26s',function(){return this.$wgimgr$26s_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','lang$y9l18q']};});
m$1.atr$(section$,'$wgimgr$26t',function(){return this.$wgimgr$26t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Section,d:['ceylon.html','Section','$at','spellcheck$jzt1ug']};});
m$1.atr$(section$,'$wgimgr$26u',function(){return this.$wgimgr$26u_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Section,d:['ceylon.html','Section','$at','tabIndex$bqu1ar']};});
m$1.atr$(section$,'$wgimgr$26v',function(){return this.$wgimgr$26v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Section,d:['ceylon.html','Section','$at','title$pgjr1s']};});
m$1.atr$(section$,'$wgimgr$26w',function(){return this.$wgimgr$26w_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Section,d:['ceylon.html','Section','$at','translate$3ahfbq']};});
m$1.atr$(section$,'$wgimgr$26x',function(){return this.$wgimgr$26x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Section,d:['ceylon.html','Section','$at','aria$tpm4ex']};});
m$1.atr$(section$,'$wgimgr$26y',function(){return this.$wgimgr$26y_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Section,d:['ceylon.html','Section','$at','nonstandardAttributes$aziykx']};});
m$1.atr$(section$,'$wgimgr$26z',function(){return this.$wgimgr$26z_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Section,d:['ceylon.html','Section','$at','data$vdf6j6']};});
m$1.atr$(section$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Section,pa:3,d:['ceylon.html','Section','$at','children']};});
m$1.atr$(section$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Section,pa:3,d:['ceylon.html','Section','$at','tag']};});
})(Section.$$.prototype);
}
return Section;
}
ex$.$init$Section=$init$Section;
$init$Section();
function Select($wgimgr$270,$wgimgr$271,$wgimgr$272,$wgimgr$273,$wgimgr$274,multiple,$wgimgr$275,$wgimgr$276,size,$wgimgr$277,$wgimgr$278,$wgimgr$279,$wgimgr$27a,$wgimgr$27b,$wgimgr$27c,$wgimgr$27d,$wgimgr$27e,$wgimgr$27f,$wgimgr$27g,$wgimgr$27h,$wgimgr$27i,$wgimgr$27j,$wgimgr$27k,$wgimgr$27l,$wgimgr$27m,$wgimgr$27n,$wgimgr$27o,$wgimgr$27p,children,select$){
$init$Select();
if(select$===undefined)select$=new Select.$$;
select$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Option},{t:OptionGroup}])};
if($wgimgr$270===undefined){$wgimgr$270=null;}
select$.$wgimgr$270_=$wgimgr$270;
if($wgimgr$271===undefined){$wgimgr$271=null;}
select$.$wgimgr$271_=$wgimgr$271;
if($wgimgr$272===undefined){$wgimgr$272=null;}
select$.$wgimgr$272_=$wgimgr$272;
if($wgimgr$273===undefined){$wgimgr$273=null;}
select$.$wgimgr$273_=$wgimgr$273;
if($wgimgr$274===undefined){$wgimgr$274=null;}
select$.$wgimgr$274_=$wgimgr$274;
if(multiple===undefined){multiple=null;}
select$.multiple_=multiple;
if($wgimgr$275===undefined){$wgimgr$275=null;}
select$.$wgimgr$275_=$wgimgr$275;
if($wgimgr$276===undefined){$wgimgr$276=null;}
select$.$wgimgr$276_=$wgimgr$276;
if(size===undefined){size=null;}
select$.size_=size;
if($wgimgr$277===undefined){$wgimgr$277=null;}
select$.$wgimgr$277_=$wgimgr$277;
if($wgimgr$278===undefined){$wgimgr$278=null;}
select$.$wgimgr$278_=$wgimgr$278;
if($wgimgr$279===undefined){$wgimgr$279=m$1.empty();}
select$.$wgimgr$279_=$wgimgr$279;
if($wgimgr$27a===undefined){$wgimgr$27a=null;}
select$.$wgimgr$27a_=$wgimgr$27a;
if($wgimgr$27b===undefined){$wgimgr$27b=null;}
select$.$wgimgr$27b_=$wgimgr$27b;
if($wgimgr$27c===undefined){$wgimgr$27c=null;}
select$.$wgimgr$27c_=$wgimgr$27c;
if($wgimgr$27d===undefined){$wgimgr$27d=null;}
select$.$wgimgr$27d_=$wgimgr$27d;
if($wgimgr$27e===undefined){$wgimgr$27e=null;}
select$.$wgimgr$27e_=$wgimgr$27e;
if($wgimgr$27f===undefined){$wgimgr$27f=null;}
select$.$wgimgr$27f_=$wgimgr$27f;
if($wgimgr$27g===undefined){$wgimgr$27g=null;}
select$.$wgimgr$27g_=$wgimgr$27g;
if($wgimgr$27h===undefined){$wgimgr$27h=null;}
select$.$wgimgr$27h_=$wgimgr$27h;
if($wgimgr$27i===undefined){$wgimgr$27i=null;}
select$.$wgimgr$27i_=$wgimgr$27i;
if($wgimgr$27j===undefined){$wgimgr$27j=null;}
select$.$wgimgr$27j_=$wgimgr$27j;
if($wgimgr$27k===undefined){$wgimgr$27k=null;}
select$.$wgimgr$27k_=$wgimgr$27k;
if($wgimgr$27l===undefined){$wgimgr$27l=null;}
select$.$wgimgr$27l_=$wgimgr$27l;
if($wgimgr$27m===undefined){$wgimgr$27m=null;}
select$.$wgimgr$27m_=$wgimgr$27m;
if($wgimgr$27n===undefined){$wgimgr$27n=null;}
select$.$wgimgr$27n_=$wgimgr$27n;
if($wgimgr$27o===undefined){$wgimgr$27o=m$1.empty();}
select$.$wgimgr$27o_=$wgimgr$27o;
if($wgimgr$27p===undefined){$wgimgr$27p=m$1.empty();}
select$.$wgimgr$27p_=$wgimgr$27p;
if(children===undefined){children=m$1.empty();}
select$.children_=children;
InlineElement(select$);
ParentNode({Child$ParentNode:m$1.mut$([{t:Option},{t:OptionGroup}])},select$);
FormElement($wgimgr$270,$wgimgr$271,$wgimgr$272,$wgimgr$273,$wgimgr$274,$wgimgr$275,$wgimgr$276,$wgimgr$277,$wgimgr$278,$wgimgr$279,$wgimgr$27a,$wgimgr$27b,$wgimgr$27c,$wgimgr$27d,$wgimgr$27e,$wgimgr$27f,$wgimgr$27g,$wgimgr$27h,$wgimgr$27i,$wgimgr$27j,$wgimgr$27k,$wgimgr$27l,$wgimgr$27m,$wgimgr$27n,$wgimgr$27o,$wgimgr$27p,select$);
select$.tag_=Tag("select");
return select$;
}
Select.$crtmm$=function(){return{mod:$CCMM$,'super':{t:FormElement},ps:[{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'multiple',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Select:$at:multiple')];}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'size',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Select:$at:size')];}},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Option},{t:OptionGroup},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Option},{t:OptionGroup}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Option},{t:OptionGroup}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[{t:Option},{t:OptionGroup}]}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Select'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Option),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),OptionGroup)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Select']};};
ex$.Select=Select;
function $init$Select(){
if(Select.$$===undefined){
m$1.initTypeProto(Select,'ceylon.html::Select',$init$InlineElement(),$init$ParentNode(),$init$FormElement());
(function(select$){
m$1.atr$(select$,'$wgimgr$270',function(){return this.$wgimgr$270_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','name$5xtw2u']};});
m$1.atr$(select$,'$wgimgr$271',function(){return this.$wgimgr$271_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','autoFocus$2mb2pk']};});
m$1.atr$(select$,'$wgimgr$272',function(){return this.$wgimgr$272_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','disabled$ecrndv']};});
m$1.atr$(select$,'$wgimgr$273',function(){return this.$wgimgr$273_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','form$b0zget']};});
m$1.atr$(select$,'$wgimgr$274',function(){return this.$wgimgr$274_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','formNoValidate$k8pj9y']};});
m$1.atr$(select$,'multiple',function(){return this.multiple_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Select:$at:multiple')];},d:['ceylon.html','Select','$at','multiple']};});
m$1.atr$(select$,'$wgimgr$275',function(){return this.$wgimgr$275_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','readOnly$j92vbt']};});
m$1.atr$(select$,'$wgimgr$276',function(){return this.$wgimgr$276_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','required$xeeisy']};});
m$1.atr$(select$,'size',function(){return this.size_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Select,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Select:$at:size')];},d:['ceylon.html','Select','$at','size']};});
m$1.atr$(select$,'$wgimgr$277',function(){return this.$wgimgr$277_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','valueOf$nv68sx']};});
m$1.atr$(select$,'$wgimgr$278',function(){return this.$wgimgr$278_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','id$b7s4gm']};});
m$1.atr$(select$,'$wgimgr$279',function(){return this.$wgimgr$279_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Select,d:['ceylon.html','Select','$at','classNames$975ruf']};});
m$1.atr$(select$,'$wgimgr$27a',function(){return this.$wgimgr$27a_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','style$bv1qb4']};});
m$1.atr$(select$,'$wgimgr$27b',function(){return this.$wgimgr$27b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','accessKey$mz6mae']};});
m$1.atr$(select$,'$wgimgr$27c',function(){return this.$wgimgr$27c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','contextMenu$sxhtn']};});
m$1.atr$(select$,'$wgimgr$27d',function(){return this.$wgimgr$27d_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Select,d:['ceylon.html','Select','$at','dir$91fwms']};});
m$1.atr$(select$,'$wgimgr$27e',function(){return this.$wgimgr$27e_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','draggable$eyzjec']};});
m$1.atr$(select$,'$wgimgr$27f',function(){return this.$wgimgr$27f_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Select,d:['ceylon.html','Select','$at','dropZone$20uxe2']};});
m$1.atr$(select$,'$wgimgr$27g',function(){return this.$wgimgr$27g_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','inert$cc7w2v']};});
m$1.atr$(select$,'$wgimgr$27h',function(){return this.$wgimgr$27h_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','hidden$g4ymsf']};});
m$1.atr$(select$,'$wgimgr$27i',function(){return this.$wgimgr$27i_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','lang$7ad7az']};});
m$1.atr$(select$,'$wgimgr$27j',function(){return this.$wgimgr$27j_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','spellcheck$o2366x']};});
m$1.atr$(select$,'$wgimgr$27k',function(){return this.$wgimgr$27k_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Select,d:['ceylon.html','Select','$at','tabIndex$f8dsn0']};});
m$1.atr$(select$,'$wgimgr$27l',function(){return this.$wgimgr$27l_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Select,d:['ceylon.html','Select','$at','title$1io2vz']};});
m$1.atr$(select$,'$wgimgr$27m',function(){return this.$wgimgr$27m_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Select,d:['ceylon.html','Select','$at','translate$u9p99h']};});
m$1.atr$(select$,'$wgimgr$27n',function(){return this.$wgimgr$27n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Select,d:['ceylon.html','Select','$at','aria$eca3mg']};});
m$1.atr$(select$,'$wgimgr$27o',function(){return this.$wgimgr$27o_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Select,d:['ceylon.html','Select','$at','nonstandardAttributes$x2d9gg']};});
m$1.atr$(select$,'$wgimgr$27p',function(){return this.$wgimgr$27p_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Select,d:['ceylon.html','Select','$at','data$coh1i7']};});
m$1.atr$(select$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Option},{t:OptionGroup},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Option},{t:OptionGroup}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Option},{t:OptionGroup}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Select,pa:3,d:['ceylon.html','Select','$at','children']};});
m$1.atr$(select$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Select,pa:3,d:['ceylon.html','Select','$at','tag']};});
m$1.atr$(select$,'attributes',function(){
var select$=this;
var $27q=AttributeSequenceBuilder();
$27q.addAll(m$1.attrGetter(select$.getT$all()['ceylon.html::FormElement'],'attributes').call(this));
$27q.addAttribute("size",select$.size);
$27q.addNamedBooleanAttribute("multiple",select$.multiple);
return $27q.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Select,pa:11,d:['ceylon.html','Select','$at','attributes']};});
})(Select.$$.prototype);
}
return Select;
}
ex$.$init$Select=$init$Select;
$init$Select();
function Option(text,$wgimgr$27r,disabled,selected,$_valueOf,$wgimgr$27s,$wgimgr$27t,option$){
$init$Option();
if(option$===undefined)option$=new Option.$$;
if(text===undefined){text="";}
option$.text_=text;
if($wgimgr$27r===undefined){$wgimgr$27r=null;}
option$.$wgimgr$27r_=$wgimgr$27r;
if(disabled===undefined){disabled=null;}
option$.disabled_=disabled;
if(selected===undefined){selected=null;}
option$.selected_=selected;
if($_valueOf===undefined){$_valueOf=null;}
option$.$_valueOf_=$_valueOf;
if($wgimgr$27s===undefined){$wgimgr$27s=m$1.empty();}
option$.$wgimgr$27s_=$wgimgr$27s;
if($wgimgr$27t===undefined){$wgimgr$27t=null;}
option$.$wgimgr$27t_=$wgimgr$27t;
TextNode(option$);
StyledElement($wgimgr$27r,$wgimgr$27s,$wgimgr$27t,option$);
option$.tag_=Tag("option");
return option$;
}
Option.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StyledElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1},{nm:'selected',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1},{nm:'valueOf',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],sts:[{t:TextNode}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Option')];},d:['ceylon.html','Option']};};
ex$.Option=Option;
function $init$Option(){
if(Option.$$===undefined){
m$1.initTypeProto(Option,'ceylon.html::Option',$init$TextNode(),$init$StyledElement());
(function(option$){
m$1.atr$(option$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Option,pa:3,d:['ceylon.html','Option','$at','text']};});
m$1.atr$(option$,'$wgimgr$27r',function(){return this.$wgimgr$27r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Option,d:['ceylon.html','Option','$at','id$2rnfv']};});
m$1.atr$(option$,'disabled',function(){return this.disabled_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Option,pa:1,d:['ceylon.html','Option','$at','disabled']};});
m$1.atr$(option$,'selected',function(){return this.selected_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Option,pa:1,d:['ceylon.html','Option','$at','selected']};});
m$1.atr$(option$,'$_valueOf',function(){return this.$_valueOf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Option,pa:1,d:['ceylon.html','Option','$at','valueOf']};});
m$1.atr$(option$,'$wgimgr$27s',function(){return this.$wgimgr$27s_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Option,d:['ceylon.html','Option','$at','classNames$khpjqw']};});
m$1.atr$(option$,'$wgimgr$27t',function(){return this.$wgimgr$27t_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Option,d:['ceylon.html','Option','$at','style$khyen']};});
m$1.atr$(option$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Option,pa:3,d:['ceylon.html','Option','$at','tag']};});
m$1.atr$(option$,'attributes',function(){
var option$=this;
var $27u=AttributeSequenceBuilder();
$27u.addAll(m$1.attrGetter(option$.getT$all()['ceylon.html::StyledElement'],'attributes').call(this));
$27u.addNamedBooleanAttribute("disabled",option$.disabled);
$27u.addNamedBooleanAttribute("selected",option$.selected);
$27u.addAttribute("value",option$.$_valueOf);
return $27u.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:Option,pa:11,d:['ceylon.html','Option','$at','attributes']};});
})(Option.$$.prototype);
}
return Option;
}
ex$.$init$Option=$init$Option;
$init$Option();
function OptionGroup(text,$wgimgr$27v,disabled,$wgimgr$27w,$wgimgr$27x,children,optionGroup$){
$init$OptionGroup();
if(optionGroup$===undefined)optionGroup$=new OptionGroup.$$;
optionGroup$.$$targs$$={Child$ParentNode:{t:Option}};
if(text===undefined){text="";}
optionGroup$.text_=text;
if($wgimgr$27v===undefined){$wgimgr$27v=null;}
optionGroup$.$wgimgr$27v_=$wgimgr$27v;
if(disabled===undefined){disabled=null;}
optionGroup$.disabled_=disabled;
if($wgimgr$27w===undefined){$wgimgr$27w=m$1.empty();}
optionGroup$.$wgimgr$27w_=$wgimgr$27w;
if($wgimgr$27x===undefined){$wgimgr$27x=null;}
optionGroup$.$wgimgr$27x_=$wgimgr$27x;
if(children===undefined){children=m$1.empty();}
optionGroup$.children_=children;
TextNode(optionGroup$);
ParentNode({Child$ParentNode:{t:Option}},optionGroup$);
StyledElement($wgimgr$27v,$wgimgr$27w,$wgimgr$27x,optionGroup$);
optionGroup$.tag_=Tag("optgroup");
return optionGroup$;
}
OptionGroup.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StyledElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},pa:1},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:Option},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:Option}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Option}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:{t:Option}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:OptionGroup')];},d:['ceylon.html','OptionGroup']};};
ex$.OptionGroup=OptionGroup;
function $init$OptionGroup(){
if(OptionGroup.$$===undefined){
m$1.initTypeProto(OptionGroup,'ceylon.html::OptionGroup',$init$TextNode(),$init$ParentNode(),$init$StyledElement());
(function(optionGroup$){
m$1.atr$(optionGroup$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OptionGroup,pa:3,d:['ceylon.html','OptionGroup','$at','text']};});
m$1.atr$(optionGroup$,'$wgimgr$27v',function(){return this.$wgimgr$27v_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:OptionGroup,d:['ceylon.html','OptionGroup','$at','id$v3yjhk']};});
m$1.atr$(optionGroup$,'disabled',function(){return this.disabled_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:OptionGroup,pa:1,d:['ceylon.html','OptionGroup','$at','disabled']};});
m$1.atr$(optionGroup$,'$wgimgr$27w',function(){return this.$wgimgr$27w_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:OptionGroup,d:['ceylon.html','OptionGroup','$at','classNames$ji7m6j']};});
m$1.atr$(optionGroup$,'$wgimgr$27x',function(){return this.$wgimgr$27x_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:OptionGroup,d:['ceylon.html','OptionGroup','$at','style$ugoxn2']};});
m$1.atr$(optionGroup$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:Option},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:Option}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Option}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:OptionGroup,pa:3,d:['ceylon.html','OptionGroup','$at','children']};});
m$1.atr$(optionGroup$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:OptionGroup,pa:3,d:['ceylon.html','OptionGroup','$at','tag']};});
m$1.atr$(optionGroup$,'attributes',function(){
var optionGroup$=this;
var $27y=AttributeSequenceBuilder();
$27y.addAll(m$1.attrGetter(optionGroup$.getT$all()['ceylon.html::StyledElement'],'attributes').call(this));
$27y.addNamedBooleanAttribute("disabled",optionGroup$.disabled);
return $27y.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:OptionGroup,pa:11,d:['ceylon.html','OptionGroup','$at','attributes']};});
})(OptionGroup.$$.prototype);
}
return OptionGroup;
}
ex$.$init$OptionGroup=$init$OptionGroup;
$init$OptionGroup();
var $27z$serializer;function $valinit$$27z$serializer(){if($27z$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'asciiCharacterRange\' before it was set"),'6:0-6:47','constants.ceylon');
if($27z$serializer===undefined){$27z$serializer=m$1.INIT$;$27z$serializer=m$1.span(m$1.Character(32,true),m$1.Character(126,true),{Element$span:{t:m$1.Character}})};return $27z$serializer;};
function asciiCharacterRange$serializer(){return $valinit$$27z$serializer();}
var $prop$getAsciiCharacterRange$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Range,a:{Element$Range:{t:m$1.Character}}},d:['ceylon.html.serializer','asciiCharacterRange']};}};
ex$.$prop$getAsciiCharacterRange$serializer=$prop$getAsciiCharacterRange$serializer;
$prop$getAsciiCharacterRange$serializer.get=asciiCharacterRange$serializer;
var $280$serializer;function $valinit$$280$serializer(){if($280$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xmlNameStartCharRanges\' before it was set"),'11:0-27:23','constants.ceylon');
if($280$serializer===undefined){$280$serializer=m$1.INIT$;$280$serializer=m$1.tpl$([m$1.span(m$1.Character(58,true).integer,m$1.Character(58,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span(m$1.Character(95,true).integer,m$1.Character(95,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span(m$1.Character(65,true).integer,m$1.Character(90,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span(m$1.Character(97,true).integer,m$1.Character(122,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span((192),(214),{Element$span:{t:m$1.Integer}}),m$1.span((216),(246),{Element$span:{t:m$1.Integer}}),m$1.span((248),(767),{Element$span:{t:m$1.Integer}}),m$1.span((880),(893),{Element$span:{t:m$1.Integer}}),m$1.span((895),(8191),{Element$span:{t:m$1.Integer}}),m$1.span((8204),(8205),{Element$span:{t:m$1.Integer}}),m$1.span((8304),(8591),{Element$span:{t:m$1.Integer}}),m$1.span((11264),(12271),{Element$span:{t:m$1.Integer}}),m$1.span((12289),(55295),{Element$span:{t:m$1.Integer}}),m$1.span((63744),(64975),{Element$span:{t:m$1.Integer}}),m$1.span((65008),(65533),{Element$span:{t:m$1.Integer}}),m$1.span((65536),(983039),{Element$span:{t:m$1.Integer}})])};return $280$serializer;};
function xmlNameStartCharRanges$serializer(){return $valinit$$280$serializer();}
var $prop$getXmlNameStartCharRanges$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}}},d:['ceylon.html.serializer','xmlNameStartCharRanges']};}};
ex$.$prop$getXmlNameStartCharRanges$serializer=$prop$getXmlNameStartCharRanges$serializer;
$prop$getXmlNameStartCharRanges$serializer.get=xmlNameStartCharRanges$serializer;
var $281$serializer;function $valinit$$281$serializer(){if($281$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'xmlNameCharRanges\' before it was set"),'30:0-37:32','constants.ceylon');
if($281$serializer===undefined){$281$serializer=m$1.INIT$;$281$serializer=m$1.tpl$([m$1.span(m$1.Character(45,true).integer,m$1.Character(45,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span(m$1.Character(46,true).integer,m$1.Character(46,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span(m$1.Character(48,true).integer,m$1.Character(57,true).integer,{Element$span:{t:m$1.Integer}}),m$1.span((183),(183),{Element$span:{t:m$1.Integer}}),m$1.span((768),(879),{Element$span:{t:m$1.Integer}}),m$1.span((8255),(8256),{Element$span:{t:m$1.Integer}})],xmlNameStartCharRanges$serializer())};return $281$serializer;};
function xmlNameCharRanges$serializer(){return $valinit$$281$serializer();}
var $prop$getXmlNameCharRanges$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}}},d:['ceylon.html.serializer','xmlNameCharRanges']};}};
ex$.$prop$getXmlNameCharRanges$serializer=$prop$getXmlNameCharRanges$serializer;
$prop$getXmlNameCharRanges$serializer.get=xmlNameCharRanges$serializer;
var $282$serializer;function $valinit$$282$serializer(){if($282$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'voidElements\' before it was set"),'40:0-43:43','constants.ceylon');
if($282$serializer===undefined){$282$serializer=m$1.INIT$;$282$serializer=m$2.unmodifiableSet(($283=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].$sa$(m$1.mut$([{/*NO PARENT*/t:m$1.Anything},{t:m$1.$_String}]),1),m$2.HashSet(undefined,undefined,$283,{Element$HashSet:{t:m$1.$_String}})),{Element$unmodifiableSet:{t:m$1.$_String}})};return $282$serializer;};
function voidElements$serializer(){return $valinit$$282$serializer();}
var $prop$getVoidElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','voidElements']};}};
ex$.$prop$getVoidElements$serializer=$prop$getVoidElements$serializer;
$prop$getVoidElements$serializer.get=voidElements$serializer;
var $283;
var $284$serializer;function $valinit$$284$serializer(){if($284$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rawTextElements\' before it was set"),'46:0-47:27','constants.ceylon');
if($284$serializer===undefined){$284$serializer=m$1.INIT$;$284$serializer=m$2.unmodifiableSet(($285=["script","style"].$sa$(m$1.mut$([{/*NO PARENT*/t:m$1.Anything},{t:m$1.$_String}]),1),m$2.HashSet(undefined,undefined,$285,{Element$HashSet:{t:m$1.$_String}})),{Element$unmodifiableSet:{t:m$1.$_String}})};return $284$serializer;};
function rawTextElements$serializer(){return $valinit$$284$serializer();}
var $prop$getRawTextElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','rawTextElements']};}};
ex$.$prop$getRawTextElements$serializer=$prop$getRawTextElements$serializer;
$prop$getRawTextElements$serializer.get=rawTextElements$serializer;
var $285;
var $286$serializer;function $valinit$$286$serializer(){if($286$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'escapableRawTextElements\' before it was set"),'50:0-51:29','constants.ceylon');
if($286$serializer===undefined){$286$serializer=m$1.INIT$;$286$serializer=m$2.unmodifiableSet(($287=["textarea","title"].$sa$(m$1.mut$([{/*NO PARENT*/t:m$1.Anything},{t:m$1.$_String}]),1),m$2.HashSet(undefined,undefined,$287,{Element$HashSet:{t:m$1.$_String}})),{Element$unmodifiableSet:{t:m$1.$_String}})};return $286$serializer;};
function escapableRawTextElements$serializer(){return $valinit$$286$serializer();}
var $prop$getEscapableRawTextElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','escapableRawTextElements']};}};
ex$.$prop$getEscapableRawTextElements$serializer=$prop$getEscapableRawTextElements$serializer;
$prop$getEscapableRawTextElements$serializer.get=escapableRawTextElements$serializer;
var $287;
var $288$serializer;function $valinit$$288$serializer(){if($288$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'blockElements\' before it was set"),'53:0-58:52','constants.ceylon');
if($288$serializer===undefined){$288$serializer=m$1.INIT$;$288$serializer=m$2.unmodifiableSet(($289=["address","article","aside","audio","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"].$sa$(m$1.mut$([{/*NO PARENT*/t:m$1.Anything},{t:m$1.$_String}]),1),m$2.HashSet(undefined,undefined,$289,{Element$HashSet:{t:m$1.$_String}})),{Element$unmodifiableSet:{t:m$1.$_String}})};return $288$serializer;};
function blockElements$serializer(){return $valinit$$288$serializer();}
var $prop$getBlockElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','blockElements']};}};
ex$.$prop$getBlockElements$serializer=$prop$getBlockElements$serializer;
$prop$getBlockElements$serializer.get=blockElements$serializer;
var $289;
var $28a$serializer;function $valinit$$28a$serializer(){if($28a$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'metadataElements\' before it was set"),'60:0-62:36','constants.ceylon');
if($28a$serializer===undefined){$28a$serializer=m$1.INIT$;$28a$serializer=m$2.unmodifiableSet(($28b=["base","command","link","meta","noscript","script","style","title"].$sa$(m$1.mut$([{/*NO PARENT*/t:m$1.Anything},{t:m$1.$_String}]),1),m$2.HashSet(undefined,undefined,$28b,{Element$HashSet:{t:m$1.$_String}})),{Element$unmodifiableSet:{t:m$1.$_String}})};return $28a$serializer;};
function metadataElements$serializer(){return $valinit$$28a$serializer();}
var $prop$getMetadataElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','metadataElements']};}};
ex$.$prop$getMetadataElements$serializer=$prop$getMetadataElements$serializer;
$prop$getMetadataElements$serializer.get=metadataElements$serializer;
var $28b;
var $28c$serializer;function $valinit$$28c$serializer(){if($28c$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'indentElements\' before it was set"),'64:0-70:4','constants.ceylon');
if($28c$serializer===undefined){$28c$serializer=m$1.INIT$;$28c$serializer=(function(){
var $28d=m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.$_String}});
$prop$get$28d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.$_String}}},$cont:0,d:['ceylon.html.serializer','indentElements','$at','set$wzj72q']};}};
$prop$get$28d.get=function(){return $28d};
$28d.addAll(blockElements$serializer());
$28d.addAll(metadataElements$serializer());
$28d.addAll(["html","head","body"].rt$({t:m$1.$_String},1));
return m$2.unmodifiableSet($28d,{Element$unmodifiableSet:{t:m$1.$_String}});
})()};return $28c$serializer;};
function indentElements$serializer(){return $valinit$$28c$serializer();}
var $prop$getIndentElements$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:m$1.$_String}}},d:['ceylon.html.serializer','indentElements']};}};
ex$.$prop$getIndentElements$serializer=$prop$getIndentElements$serializer;
$prop$getIndentElements$serializer.get=indentElements$serializer;
function EscapableType$serializer(escapableType$){
}
EscapableType$serializer.$crtmm$=function(){return{mod:$CCMM$,of:[$prop$getName$serializer,$prop$getAttributeValue$serializer,$prop$getText$serializer,$prop$getRawText$serializer,$prop$getEscapableRawText$serializer],d:['ceylon.html.serializer','EscapableType']};};
ex$.EscapableType$serializer=EscapableType$serializer;
function $init$EscapableType$serializer(){
if(EscapableType$serializer.$$===undefined){
m$1.initTypeProtoI(EscapableType$serializer,'ceylon.html.serializer::EscapableType');
(function(escapableType$){
escapableType$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:EscapableType$serializer,pa:5,d:['ceylon.html.serializer','EscapableType','$at','entities']};}};
})(EscapableType$serializer.$$.prototype);
}
return EscapableType$serializer;
}
ex$.$init$EscapableType$serializer=$init$EscapableType$serializer;
$init$EscapableType$serializer();
function $28e$serializer(){
var name$=new $28e$serializer.$$;EscapableType$serializer(name$);
name$.$wgimgr$28g_=m$1.emptyMap();
name$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28e$serializer,pa:3,d:['ceylon.html.serializer','name','$at','entities']};}};
name$.$prop$getEntities.get=function(){return entities};
return name$;
};$28e$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:EscapableType$serializer}],d:['ceylon.html.serializer','name']};};
function $init$name$serializer(){
if($28e$serializer.$$===undefined){
m$1.initTypeProto($28e$serializer,'ceylon.html.serializer::name',m$1.Basic,$init$EscapableType$serializer());
(function(name$){
m$1.atr$(name$,'entities',function(){return this.$wgimgr$28g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28e$serializer,pa:3,d:['ceylon.html.serializer','name','$at','entities']};});
name$.isValid=function($28h){var name$=this;
return function(){var $28i;
if(m$1.nn$(($28i=$28h.first))&&xmlNameStartCharRanges$serializer().any(m$1.$JsCallable((function($28j){return $28j.containsElement($28i.integer);}),[{nm:'range',mt:'prm',$t:{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}]),Return$Callable:{t:m$1.$_Boolean}}))&&$28h.rest.$_every(m$1.$JsCallable((function($28k){return xmlNameCharRanges$serializer().any(m$1.$JsCallable((function($28l){return $28l.containsElement($28k.integer);}),[{nm:'range',mt:'prm',$t:{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Range,a:{Element$Range:{t:m$1.Integer}}}]),Return$Callable:{t:m$1.$_Boolean}}));}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}})))return true;else return false}();};
name$.isValid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:$28e$serializer,pa:1,d:['ceylon.html.serializer','name','$m','isValid']};};
})($28e$serializer.$$.prototype);
}
return $28e$serializer;
}
ex$.$init$name$serializer=$init$name$serializer;
$init$name$serializer();
var $28m;
function name$serializer(){
if($28m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'name\' before it was set"),'14:0-30:0','EscapableType.ceylon');
if($28m===undefined){$28m=m$1.INIT$;$28m=$init$name$serializer()();$28m.$crtmm$=name$serializer.$crtmm$;}
return $28m;
}
name$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$name$serializer()},d:['ceylon.html.serializer','name']};};
$prop$getName$serializer=name$serializer;
ex$.$prop$getName$serializer=$prop$getName$serializer;
function $28n$serializer(){
var attributeValue$=new $28n$serializer.$$;EscapableType$serializer(attributeValue$);
attributeValue$.$wgimgr$28p_=m$2.unmodifiableMap(($28q=[m$1.Entry(m$1.Character(39,true),"&#39;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}),m$1.Entry(m$1.Character(34,true),"&quot;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}),m$1.Entry(m$1.Character(38,true),"&amp;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}})].$sa$(m$1.mut$([{t:m$1.Entry,a:{Item$Entry:{/*NO PARENT*/t:m$1.Anything},Key$Entry:{/*NO PARENT*/t:m$1.Anything}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}}]),1),m$2.HashMap(undefined,undefined,$28q,{Key$HashMap:{t:m$1.Character},Item$HashMap:{t:m$1.$_String}})),{Item$unmodifiableMap:{t:m$1.$_String},Key$unmodifiableMap:{t:m$1.Character}});
attributeValue$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28n$serializer,pa:3,d:['ceylon.html.serializer','attributeValue','$at','entities']};}};
attributeValue$.$prop$getEntities.get=function(){return entities};
var $28q;
return attributeValue$;
};$28n$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:EscapableType$serializer}],d:['ceylon.html.serializer','attributeValue']};};
function $init$attributeValue$serializer(){
if($28n$serializer.$$===undefined){
m$1.initTypeProto($28n$serializer,'ceylon.html.serializer::attributeValue',m$1.Basic,$init$EscapableType$serializer());
(function(attributeValue$){
m$1.atr$(attributeValue$,'entities',function(){return this.$wgimgr$28p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28n$serializer,pa:3,d:['ceylon.html.serializer','attributeValue','$at','entities']};});
})($28n$serializer.$$.prototype);
}
return $28n$serializer;
}
ex$.$init$attributeValue$serializer=$init$attributeValue$serializer;
$init$attributeValue$serializer();
var $28r;
function attributeValue$serializer(){
if($28r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'attributeValue\' before it was set"),'32:0-38:0','EscapableType.ceylon');
if($28r===undefined){$28r=m$1.INIT$;$28r=$init$attributeValue$serializer()();$28r.$crtmm$=attributeValue$serializer.$crtmm$;}
return $28r;
}
attributeValue$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$attributeValue$serializer()},d:['ceylon.html.serializer','attributeValue']};};
$prop$getAttributeValue$serializer=attributeValue$serializer;
ex$.$prop$getAttributeValue$serializer=$prop$getAttributeValue$serializer;
function $28s$serializer(){
var text$=new $28s$serializer.$$;EscapableType$serializer(text$);
text$.$wgimgr$28u_=m$2.unmodifiableMap(($28v=[m$1.Entry(m$1.Character(60,true),"&lt;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}),m$1.Entry(m$1.Character(38,true),"&amp;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}})].$sa$(m$1.mut$([{t:m$1.Entry,a:{Item$Entry:{/*NO PARENT*/t:m$1.Anything},Key$Entry:{/*NO PARENT*/t:m$1.Anything}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}}]),1),m$2.HashMap(undefined,undefined,$28v,{Key$HashMap:{t:m$1.Character},Item$HashMap:{t:m$1.$_String}})),{Item$unmodifiableMap:{t:m$1.$_String},Key$unmodifiableMap:{t:m$1.Character}});
text$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28s$serializer,pa:3,d:['ceylon.html.serializer','text','$at','entities']};}};
text$.$prop$getEntities.get=function(){return entities};
var $28v;
return text$;
};$28s$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:EscapableType$serializer}],d:['ceylon.html.serializer','text']};};
function $init$text$serializer(){
if($28s$serializer.$$===undefined){
m$1.initTypeProto($28s$serializer,'ceylon.html.serializer::text',m$1.Basic,$init$EscapableType$serializer());
(function(text$){
m$1.atr$(text$,'entities',function(){return this.$wgimgr$28u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28s$serializer,pa:3,d:['ceylon.html.serializer','text','$at','entities']};});
})($28s$serializer.$$.prototype);
}
return $28s$serializer;
}
ex$.$init$text$serializer=$init$text$serializer;
$init$text$serializer();
var $28w;
function text$serializer(){
if($28w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'text\' before it was set"),'40:0-49:0','EscapableType.ceylon');
if($28w===undefined){$28w=m$1.INIT$;$28w=$init$text$serializer()();$28w.$crtmm$=text$serializer.$crtmm$;}
return $28w;
}
text$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$text$serializer()},an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:text')];},d:['ceylon.html.serializer','text']};};
$prop$getText$serializer=text$serializer;
ex$.$prop$getText$serializer=$prop$getText$serializer;
function $28x$serializer(){
var rawText$=new $28x$serializer.$$;EscapableType$serializer(rawText$);
rawText$.$wgimgr$28z_=m$1.emptyMap();
rawText$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28x$serializer,pa:3,d:['ceylon.html.serializer','rawText','$at','entities']};}};
rawText$.$prop$getEntities.get=function(){return entities};
return rawText$;
};$28x$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:EscapableType$serializer}],d:['ceylon.html.serializer','rawText']};};
function $init$rawText$serializer(){
if($28x$serializer.$$===undefined){
m$1.initTypeProto($28x$serializer,'ceylon.html.serializer::rawText',m$1.Basic,$init$EscapableType$serializer());
(function(rawText$){
m$1.atr$(rawText$,'entities',function(){return this.$wgimgr$28z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$28x$serializer,pa:3,d:['ceylon.html.serializer','rawText','$at','entities']};});
})($28x$serializer.$$.prototype);
}
return $28x$serializer;
}
ex$.$init$rawText$serializer=$init$rawText$serializer;
$init$rawText$serializer();
var $290;
function rawText$serializer(){
if($290===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rawText\' before it was set"),'51:0-70:0','EscapableType.ceylon');
if($290===undefined){$290=m$1.INIT$;$290=$init$rawText$serializer()();$290.$crtmm$=rawText$serializer.$crtmm$;}
return $290;
}
rawText$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$rawText$serializer()},an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:rawText')];},d:['ceylon.html.serializer','rawText']};};
$prop$getRawText$serializer=rawText$serializer;
ex$.$prop$getRawText$serializer=$prop$getRawText$serializer;
function $291$serializer(){
var escapableRawText$=new $291$serializer.$$;EscapableType$serializer(escapableRawText$);
escapableRawText$.$wgimgr$293_=m$2.unmodifiableMap(($294=[m$1.Entry(m$1.Character(60,true),"&lt;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}),m$1.Entry(m$1.Character(38,true),"&amp;",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}})].$sa$(m$1.mut$([{t:m$1.Entry,a:{Item$Entry:{/*NO PARENT*/t:m$1.Anything},Key$Entry:{/*NO PARENT*/t:m$1.Anything}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.Character}}}]),1),m$2.HashMap(undefined,undefined,$294,{Key$HashMap:{t:m$1.Character},Item$HashMap:{t:m$1.$_String}})),{Item$unmodifiableMap:{t:m$1.$_String},Key$unmodifiableMap:{t:m$1.Character}});
escapableRawText$.$prop$getEntities={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$291$serializer,pa:3,d:['ceylon.html.serializer','escapableRawText','$at','entities']};}};
escapableRawText$.$prop$getEntities.get=function(){return entities};
var $294;
return escapableRawText$;
};$291$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:EscapableType$serializer}],d:['ceylon.html.serializer','escapableRawText']};};
function $init$escapableRawText$serializer(){
if($291$serializer.$$===undefined){
m$1.initTypeProto($291$serializer,'ceylon.html.serializer::escapableRawText',m$1.Basic,$init$EscapableType$serializer());
(function(escapableRawText$){
m$1.atr$(escapableRawText$,'entities',function(){return this.$wgimgr$293_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:{t:m$1.Character},Item$Map:{t:m$1.$_String}}},$cont:$291$serializer,pa:3,d:['ceylon.html.serializer','escapableRawText','$at','entities']};});
})($291$serializer.$$.prototype);
}
return $291$serializer;
}
ex$.$init$escapableRawText$serializer=$init$escapableRawText$serializer;
$init$escapableRawText$serializer();
var $295;
function escapableRawText$serializer(){
if($295===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'escapableRawText\' before it was set"),'72:0-84:0','EscapableType.ceylon');
if($295===undefined){$295=m$1.INIT$;$295=$init$escapableRawText$serializer()();$295.$crtmm$=escapableRawText$serializer.$crtmm$;}
return $295;
}
escapableRawText$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$escapableRawText$serializer()},an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:escapableRawText')];},d:['ceylon.html.serializer','escapableRawText']};};
$prop$getEscapableRawText$serializer=escapableRawText$serializer;
ex$.$prop$getEscapableRawText$serializer=$prop$getEscapableRawText$serializer;
function typeForElement$serializer($296){return function(){var $297=$296.lowercased;return (rawTextElements$serializer().contains($297))?rawText$serializer():(escapableRawTextElements$serializer().contains($297))?escapableRawText$serializer():text$serializer();}();};
typeForElement$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$init$text$serializer()},{t:$init$rawText$serializer()},{t:$init$escapableRawText$serializer()}]},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.html.serializer','typeForElement']};};
function htmlEscape$serializer($298,$299,$29a,$29b){
if($29b===undefined){$29b=null;}
var $29c;
if(m$1.is$(($29c=$299),{t:$init$name$serializer()})){
m$1.asrt$((name$serializer().isValid($298)),"Assertion failed: \'name.isValid(raw)\' at htmlEscape.ceylon (6:14-6:32)",'6:8-6:33','htmlEscape.ceylon');
if(($29a&&$298.any(m$1.$JsCallable((function($29d){return !asciiCharacterRange$serializer().contains($29d);}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}})))){
throw m$1.wrapexc(m$1.Exception("Unescapable non-ascii character found in tag name \'".plus($298).plus("\'.")),'9:12-10:79','ceylon/html/serializer/htmlEscape.ceylon');
}
return $298;
}
else{
var $29e;
if(m$1.is$(($29e=$29c),{t:$init$rawText$serializer()})){
var $29f;
m$1.asrt$((m$1.nn$(($29f=$29b))),"Assertion failed: \'exists forTag\' at htmlEscape.ceylon (15:15-15:29)",'15:8-15:30','htmlEscape.ceylon');
var $29g=$298.lowercased;
var $29h=$29f.lowercased;
if($29g.contains("</".plus($29h))){
throw m$1.wrapexc(m$1.Exception("Unescapable string \'</".plus($29f).plus("\' found in rawText content.")),'20:12-21:78','ceylon/html/serializer/htmlEscape.ceylon');
}
if($298.contains("<!--")){
throw m$1.wrapexc(m$1.Exception("Unescapable string \'<!--\' found in rawText content."),'25:12-26:70','ceylon/html/serializer/htmlEscape.ceylon');
}
if(($29a&&$298.any(m$1.$JsCallable((function($29i){return (((!asciiCharacterRange$serializer().contains($29i)&&(!$29i.equals(m$1.Character(13,true))))&&(!$29i.equals(m$1.Character(10,true))))&&(!$29i.equals(m$1.Character(9,true))));}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}})))){
throw m$1.wrapexc(m$1.Exception("Unescapable non-ascii character found in rawText content."),'32:12-33:76','ceylon/html/serializer/htmlEscape.ceylon');
}
}
}
var $29j=false;
var $29k=m$1.StringBuilder();
var $29l=$299.entities;
var $29n;for(var $29m=$298.iterator();($29n=$29m.next())!==m$1.finished();){
if($29j){
if((!$29n.equals(m$1.Character(10,true)))){
$29k.appendCharacter(m$1.Character(10,true));
}
$29j=false;
}
if($29n.equals(m$1.Character(13,true))){
$29j=true;
}
else{
var $29o;
if(m$1.nn$(($29o=$29l.$_get($29n)))){
$29k.append($29o);
}
else{
if(((($29a&&!asciiCharacterRange$serializer().containsElement($29n))&&(!$29n.equals(m$1.Character(9,true))))&&(!$29n.equals(m$1.Character(10,true))))){
$29k.append("&#");
$29k.append($29n.integer.string);
$29k.appendCharacter(m$1.Character(59,true));
}
else{
$29k.appendCharacter($29n);
}
}
}
}
if($29j){
$29k.appendCharacter(m$1.Character(10,true));
}
return $29k.string;
};htmlEscape$serializer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'raw',mt:'prm',$t:{t:m$1.$_String}},{nm:'type',mt:'prm',$t:{t:EscapableType$serializer}},{nm:'escapeNonAscii',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'forTag',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],d:['ceylon.html.serializer','htmlEscape']};};
function HtmlSerializer$serializer($wgimgr$29p,$wgimgr$29q,$wgimgr$29r,htmlSerializer$){
$init$HtmlSerializer$serializer();
if(htmlSerializer$===undefined)htmlSerializer$=new HtmlSerializer$serializer.$$;
htmlSerializer$.$wgimgr$29p_=$wgimgr$29p;
htmlSerializer$.$wgimgr$29q_=$wgimgr$29q;
if($wgimgr$29r===undefined){$wgimgr$29r=false;}
htmlSerializer$.$wgimgr$29r_=$wgimgr$29r;
htmlSerializer$.$wgimgr$29s_=true;
htmlSerializer$.$wgimgr$29t_=false;
htmlSerializer$.$wgimgr$29u_=null;
htmlSerializer$.$wgimgr$29v_=m$1.StringBuilder();
htmlSerializer$.$wgimgr$29w_=m$2.LinkedList(undefined,{Element$LinkedList:{t:m$1.$_String}});
return htmlSerializer$;
}
HtmlSerializer$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'print',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.Anything}}}},{nm:'prettyPrint',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'escapeNonAscii',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],d:['ceylon.html.serializer','HtmlSerializer']};};
ex$.HtmlSerializer$serializer=HtmlSerializer$serializer;
function $init$HtmlSerializer$serializer(){
if(HtmlSerializer$serializer.$$===undefined){
m$1.initTypeProto(HtmlSerializer$serializer,'ceylon.html.serializer::HtmlSerializer',m$1.Basic);
(function(htmlSerializer$){
m$1.atr$(htmlSerializer$,'$wgimgr$29p',function(){return this.$wgimgr$29p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.Anything}}},$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$at','print$2tc5g5']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29q',function(){return this.$wgimgr$29q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$at','prettyPrint$p89udh']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29r',function(){return this.$wgimgr$29r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$at','escapeNonAscii$m9uvc3']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29s',function(){return this.$wgimgr$29s_;},function($29x){return this.$wgimgr$29s_=$29x;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HtmlSerializer$serializer,pa:1027,d:['ceylon.html.serializer','HtmlSerializer','$at','lastOutputWasStartOrEndTag$c9hoyg']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29t',function(){return this.$wgimgr$29t_;},function($29y){return this.$wgimgr$29t_=$29y;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HtmlSerializer$serializer,pa:1027,d:['ceylon.html.serializer','HtmlSerializer','$at','previousStartOrEndTagWasBlock$6b1bjj']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29u',function(){return this.$wgimgr$29u_;},function($29z){return this.$wgimgr$29u_=$29z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.$_String},{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}]}]},$cont:HtmlSerializer$serializer,pa:1027,d:['ceylon.html.serializer','HtmlSerializer','$at','bufferedStartElement$k1yrh3']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29v',function(){return this.$wgimgr$29v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$at','bufferedText$bmyrce']};});
m$1.atr$(htmlSerializer$,'$wgimgr$29w',function(){return this.$wgimgr$29w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:{t:m$1.$_String}}},$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$at','elementStack$pi33xq']};});
htmlSerializer$.$wgimgr$2a0=function($2a1,$2a2){var htmlSerializer$=this;
return htmlEscape$serializer($2a1,$2a2,htmlSerializer$.$wgimgr$29r,htmlSerializer$.$wgimgr$29w.top);};
htmlSerializer$.$wgimgr$2a0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'raw',mt:'prm',$t:{t:m$1.$_String}},{nm:'type',mt:'prm',$t:{t:EscapableType$serializer}}],$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$m','escape$pvl3bz']};};
htmlSerializer$.$wgimgr$2a3=function(){
var htmlSerializer$=this;
if(!htmlSerializer$.$wgimgr$29v.empty){
var $2a4;
m$1.asrt$((m$1.nn$(($2a4=htmlSerializer$.$wgimgr$29w.top))),"Assertion failed: \'exists current = elementStack.top\' at HtmlSerializer.ceylon (29:18-29:52)",'29:12-29:53','HtmlSerializer.ceylon');
var $2a5=typeForElement$serializer($2a4);
htmlSerializer$.$wgimgr$29p(htmlSerializer$.$wgimgr$2a0(htmlSerializer$.$wgimgr$29v.string,$2a5));
htmlSerializer$.$wgimgr$29v.clear();
htmlSerializer$.$wgimgr$29s=false;
}
};htmlSerializer$.$wgimgr$2a3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$m','flushText$45k13l']};};
htmlSerializer$.$wgimgr$2a6$defs$end=function($2a7){return false;};
htmlSerializer$.$wgimgr$2a6=function($2a7){
var htmlSerializer$=this;
if($2a7===undefined){$2a7=htmlSerializer$.$wgimgr$2a6$defs$end($2a7);}
var $2a8,$2a9;
if(function($2aa){if(!m$1.nn$($2aa))return false;return($2a8=$2aa.$_get(0),$2a9=$2aa.$_get(1),true);}(htmlSerializer$.$wgimgr$29u)){
htmlSerializer$.$wgimgr$2ab($2a8,true);
htmlSerializer$.$wgimgr$29p("<");
htmlSerializer$.$wgimgr$29p(htmlSerializer$.$wgimgr$2a0($2a8,name$serializer()));
var $2ad;for(var $2ac=$2a9.iterator();($2ad=$2ac.next())!==m$1.finished();){
var $2ae=$2ad.key,$2af=$2ad.item;
htmlSerializer$.$wgimgr$29p(" ".plus(htmlSerializer$.$wgimgr$2a0($2ae,name$serializer())).plus("=\"").plus(htmlSerializer$.$wgimgr$2a0($2af.string,attributeValue$serializer())).plus("\""));
}
if($2a7){
if(voidElements$serializer().contains($2a8.lowercased)){
htmlSerializer$.$wgimgr$29p(">");
}
else{
htmlSerializer$.$wgimgr$29p("></".plus(htmlSerializer$.$wgimgr$2a0($2a8,name$serializer())).plus(">"));
}
htmlSerializer$.$wgimgr$29t=(htmlSerializer$.$wgimgr$29q&&indentElements$serializer().contains($2a8.lowercased));
}
else{
htmlSerializer$.$wgimgr$29p(">");
htmlSerializer$.$wgimgr$29w.$_push($2a8);
}
htmlSerializer$.$wgimgr$29u=null;
htmlSerializer$.$wgimgr$29s=true;
}
};htmlSerializer$.$wgimgr$2a6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'end',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$m','flushStartElement$2y083w']};};
htmlSerializer$.flush=function(){
var htmlSerializer$=this;
htmlSerializer$.$wgimgr$2a3();
htmlSerializer$.$wgimgr$2a6(true);
};htmlSerializer$.flush.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HtmlSerializer$serializer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:HtmlSerializer:$m:flush')];},d:['ceylon.html.serializer','HtmlSerializer','$m','flush']};};
htmlSerializer$.doctype=function($2ag){
var htmlSerializer$=this;
if((m$1.is$(htmlSerializer$.$wgimgr$29w.top,{t:m$1.Null})&&m$1.is$(htmlSerializer$.$wgimgr$29u,{t:m$1.Null}))){
htmlSerializer$.$wgimgr$29p($2ag);
htmlSerializer$.$wgimgr$29p("\n");
if(htmlSerializer$.$wgimgr$29q){
htmlSerializer$.$wgimgr$29p("\n");
}
}
};htmlSerializer$.doctype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'docType',mt:'prm',$t:{t:m$1.$_String}}],$cont:HtmlSerializer$serializer,pa:1,d:['ceylon.html.serializer','HtmlSerializer','$m','doctype']};};
htmlSerializer$.startElement$defs$attributes=function($2ah,$2ai){return m$1.empty();};
htmlSerializer$.startElement=function($2ah,$2ai){
var htmlSerializer$=this;
if($2ai===undefined){$2ai=htmlSerializer$.startElement$defs$attributes($2ah,$2ai);}
m$1.asrt$((name$serializer().isValid($2ah)),"Assertion failed: \'name.isValid(elementName)\' at HtmlSerializer.ceylon (97:14-97:40)",'97:8-97:41','HtmlSerializer.ceylon');
htmlSerializer$.$wgimgr$2a3();
htmlSerializer$.$wgimgr$2a6();
htmlSerializer$.$wgimgr$29u=m$1.tpl$([$2ah,$2ai]);
};htmlSerializer$.startElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elementName',mt:'prm',$t:{t:m$1.$_String}},{nm:'attributes',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}}],$cont:HtmlSerializer$serializer,pa:1,d:['ceylon.html.serializer','HtmlSerializer','$m','startElement']};};
htmlSerializer$.endElement=function(){
var htmlSerializer$=this;
if(m$1.nn$(htmlSerializer$.$wgimgr$29u)){
m$1.asrt$((htmlSerializer$.$wgimgr$29v.empty),"Assertion failed: \'bufferedText.empty\' at HtmlSerializer.ceylon (109:18-109:37)",'109:12-109:38','HtmlSerializer.ceylon');
htmlSerializer$.$wgimgr$2a6(true);
}
else{
htmlSerializer$.$wgimgr$2a3();
var $2aj;
m$1.asrt$((m$1.nn$(($2aj=htmlSerializer$.$wgimgr$29w.$_pop()))),"Assertion failed: \'exists elementName = elementStack.pop()\' at HtmlSerializer.ceylon (114:18-114:58)",'114:12-114:59','HtmlSerializer.ceylon');
htmlSerializer$.$wgimgr$2ab($2aj,false);
htmlSerializer$.$wgimgr$29p("</".plus(htmlSerializer$.$wgimgr$2a0($2aj,name$serializer())).plus(">"));
htmlSerializer$.$wgimgr$29s=true;
}
if((htmlSerializer$.$wgimgr$29q&&htmlSerializer$.$wgimgr$29w.empty)){
htmlSerializer$.$wgimgr$29p("\n");
}
};htmlSerializer$.endElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HtmlSerializer$serializer,pa:1,d:['ceylon.html.serializer','HtmlSerializer','$m','endElement']};};
htmlSerializer$.text=function($2ak){
var htmlSerializer$=this;
if(!$2ak.empty){
htmlSerializer$.$wgimgr$2a6();
htmlSerializer$.$wgimgr$29v.append($2ak);
}
};htmlSerializer$.text.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:HtmlSerializer$serializer,pa:1,d:['ceylon.html.serializer','HtmlSerializer','$m','text']};};
htmlSerializer$.$wgimgr$2ab=function($2al,$2am){
var htmlSerializer$=this;
if((((htmlSerializer$.$wgimgr$29q&&(!($2am&&htmlSerializer$.$wgimgr$29w.empty)))&&htmlSerializer$.$wgimgr$29s)&&(htmlSerializer$.$wgimgr$29t||indentElements$serializer().contains($2al.lowercased)))){
htmlSerializer$.$wgimgr$29p("\n".plus(" ".repeat(htmlSerializer$.$wgimgr$29w.size.times(2))));
}
htmlSerializer$.$wgimgr$29t=(htmlSerializer$.$wgimgr$29q&&indentElements$serializer().contains($2al.lowercased));
};htmlSerializer$.$wgimgr$2ab.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elementName',mt:'prm',$t:{t:m$1.$_String}},{nm:'isOpenTag',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:HtmlSerializer$serializer,d:['ceylon.html.serializer','HtmlSerializer','$m','printIndent$yr4e53']};};
})(HtmlSerializer$serializer.$$.prototype);
}
return HtmlSerializer$serializer;
}
ex$.$init$HtmlSerializer$serializer=$init$HtmlSerializer$serializer;
$init$HtmlSerializer$serializer();
function NodeSerializer$serializer($wgimgr$2an,$wgimgr$2ao,nodeSerializer$){
$init$NodeSerializer$serializer();
if(nodeSerializer$===undefined)nodeSerializer$=new NodeSerializer$serializer.$$;
nodeSerializer$.$wgimgr$2an_=$wgimgr$2an;
if($wgimgr$2ao===undefined){$wgimgr$2ao=SerializerConfig$serializer();}
nodeSerializer$.$wgimgr$2ao_=$wgimgr$2ao;
nodeSerializer$.$wgimgr$2ap_=HtmlSerializer$serializer(m$1.$JsCallable(m$1.JsCallable(nodeSerializer$,nodeSerializer$.$wgimgr$2an),[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Anything}}),nodeSerializer$.$wgimgr$2ao.prettyPrint,nodeSerializer$.$wgimgr$2ao.escapeNonAscii);
return nodeSerializer$;
}
NodeSerializer$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'print',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],an:function(){return[m$1.doc("A stream to direct output to")];}},{nm:'config',mt:'prm',def:1,$t:{t:SerializerConfig$serializer},an:function(){return[m$1.doc("Serialization options")];}}],pa:1,d:['ceylon.html.serializer','NodeSerializer']};};
ex$.NodeSerializer$serializer=NodeSerializer$serializer;
function $init$NodeSerializer$serializer(){
if(NodeSerializer$serializer.$$===undefined){
m$1.initTypeProto(NodeSerializer$serializer,'ceylon.html.serializer::NodeSerializer',m$1.Basic);
(function(nodeSerializer$){
m$1.atr$(nodeSerializer$,'$wgimgr$2an',function(){return this.$wgimgr$2an_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:NodeSerializer$serializer,an:function(){return[m$1.doc("A stream to direct output to")];},d:['ceylon.html.serializer','NodeSerializer','$m','print$ubj5za']};});
m$1.atr$(nodeSerializer$,'$wgimgr$2ao',function(){return this.$wgimgr$2ao_;},undefined,function(){return{mod:$CCMM$,$t:{t:SerializerConfig$serializer},$cont:NodeSerializer$serializer,an:function(){return[m$1.doc("Serialization options")];},d:['ceylon.html.serializer','NodeSerializer','$at','config$oix8hl']};});
m$1.atr$(nodeSerializer$,'$wgimgr$2ap',function(){return this.$wgimgr$2ap_;},undefined,function(){return{mod:$CCMM$,$t:{t:HtmlSerializer$serializer},$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$at','htmlSerializer$z44sd2']};});
nodeSerializer$.serialize=function($2aq){var nodeSerializer$=this;
return nodeSerializer$.$wgimgr$2ar($2aq);};
nodeSerializer$.serialize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'root',mt:'prm',$t:{t:Node}}],$cont:NodeSerializer$serializer,pa:1,d:['ceylon.html.serializer','NodeSerializer','$m','serialize']};};
nodeSerializer$.$wgimgr$2as=function($2at){
var nodeSerializer$=this;
var $2au=$2at;
if(m$1.is$($2au,{t:m$1.$_String})) {
nodeSerializer$.$wgimgr$2av($2au);
}
else if(m$1.is$($2au,{t:Node})) {
nodeSerializer$.$wgimgr$2ar($2au);
}
else{
var $2aw=$2au;
if(m$1.is$($2aw,{t:Snippet,a:{Result$Snippet:{t:Node}}})) {
var $2ax;
if(m$1.nn$(($2ax=$2aw.content))){
nodeSerializer$.$wgimgr$2as($2ax);
}
}
else{
nodeSerializer$.$wgimgr$2ay($2aw);
}
}
};nodeSerializer$.$wgimgr$2as.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'child',mt:'prm',$t:{t:'u',l:[{t:Node},{t:m$1.$_String},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Node},{t:m$1.$_String}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:Node}}}]}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','visitAny$tjanua']};};
nodeSerializer$.$wgimgr$2av=function($2az){
var nodeSerializer$=this;
nodeSerializer$.$wgimgr$2ap.text($2az);
};nodeSerializer$.$wgimgr$2av.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','visitString$pbc66n']};};
nodeSerializer$.$wgimgr$2ar=function($2b0){
var nodeSerializer$=this;
var $2b1;
if(m$1.is$(($2b1=$2b0),{t:Html})){
nodeSerializer$.$wgimgr$2ap.doctype($2b1.doctype.string);
}
nodeSerializer$.$wgimgr$2b2($2b0);
var $2b3;
if(m$1.is$(($2b3=$2b0),{t:TextNode})){
nodeSerializer$.$wgimgr$2ap.text($2b3.text);
}
var $2b4;
if(m$1.is$(($2b4=$2b0),{t:ParentNode,a:{Child$ParentNode:{t:Node}}})){
var $2b6;for(var $2b5=$2b4.children.iterator();($2b6=$2b5.next())!==m$1.finished();){
var $2b7;
if(m$1.nn$(($2b7=$2b6))){
nodeSerializer$.$wgimgr$2as($2b7);
}
}
}
nodeSerializer$.$wgimgr$2b8($2b0);
};nodeSerializer$.$wgimgr$2ar.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','visit$i8x04o']};};
nodeSerializer$.$wgimgr$2b2=function($2b9){
var nodeSerializer$=this;
var $2ba=function(){var $2bb;
if(m$1.is$(($2bb=$2b9),{t:Element}))return $2bb.attributes;else return m$1.empty()}();
var $2bc=$2ba.$_map(m$1.$JsCallable((function($2bd){return m$1.Entry($2bd.key,$2bd.item.string,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});}),[{nm:'attribute',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}]),Return$Callable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}}),{Result$map:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}}).$_filter(m$1.$JsCallable((function($2be){return !$2be.item.empty;}),[{nm:'attribute',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}}]),Return$Callable:{t:m$1.$_Boolean}}));
nodeSerializer$.$wgimgr$2ap.startElement($2b9.tag.name,$2bc);
};nodeSerializer$.$wgimgr$2b2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','openTag$atmsor']};};
nodeSerializer$.$wgimgr$2b8=function($2bf){var nodeSerializer$=this;
return nodeSerializer$.$wgimgr$2ap.endElement();};
nodeSerializer$.$wgimgr$2b8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','closeTag$cysnw9']};};
nodeSerializer$.$wgimgr$2ay=function($2bg){
var nodeSerializer$=this;
var $2bi;for(var $2bh=$2bg.iterator();($2bi=$2bh.next())!==m$1.finished();){
var $2bj=$2bi;
if(m$1.is$($2bj,{t:m$1.$_String})) {
nodeSerializer$.$wgimgr$2av($2bj);
}
else if(m$1.is$($2bj,{t:Node})) {
nodeSerializer$.$wgimgr$2ar($2bj);
}
}
};nodeSerializer$.$wgimgr$2ay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'nodes',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Node},{t:m$1.$_String}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:NodeSerializer$serializer,d:['ceylon.html.serializer','NodeSerializer','$m','visitNodes$rdbw1h']};};
})(NodeSerializer$serializer.$$.prototype);
}
return NodeSerializer$serializer;
}
ex$.$init$NodeSerializer$serializer=$init$NodeSerializer$serializer;
$init$NodeSerializer$serializer();
var $2bk$serializer;function $valinit$$2bk$serializer(){if($2bk$serializer===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'consoleSerializer\' before it was set"),'95:0-96:71','NodeSerializer.ceylon');
if($2bk$serializer===undefined){$2bk$serializer=m$1.INIT$;$2bk$serializer=NodeSerializer$serializer(m$1.$JsCallable(($2bl=m$1.$_process(),m$1.JsCallable($2bl,m$1.nn$($2bl)?$2bl.write:null)),[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Anything}}))};return $2bk$serializer;};
function consoleSerializer$serializer(){return $valinit$$2bk$serializer();}
ex$.consoleSerializer$serializer=consoleSerializer$serializer;
var $prop$getConsoleSerializer$serializer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:NodeSerializer$serializer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:consoleSerializer')];},d:['ceylon.html.serializer','consoleSerializer']};}};
ex$.$prop$getConsoleSerializer$serializer=$prop$getConsoleSerializer$serializer;
$prop$getConsoleSerializer$serializer.get=consoleSerializer$serializer;
consoleSerializer$serializer.$crtmm$=$prop$getConsoleSerializer$serializer.$crtmm$;
var $2bl;
ex$.$pkg$ans$ceylon$html$serializer=function(){return[m$1.shared()];};
function SerializerConfig$serializer(prettyPrint,defaultDoctype,escapeNonAscii,serializerConfig$){
$init$SerializerConfig$serializer();
if(serializerConfig$===undefined)serializerConfig$=new SerializerConfig$serializer.$$;
if(prettyPrint===undefined){prettyPrint=true;}
serializerConfig$.prettyPrint_=prettyPrint;
if(defaultDoctype===undefined){defaultDoctype=html5();}
serializerConfig$.defaultDoctype_=defaultDoctype;
if(escapeNonAscii===undefined){escapeNonAscii=false;}
serializerConfig$.escapeNonAscii_=escapeNonAscii;
return serializerConfig$;
}
SerializerConfig$serializer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'prettyPrint',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:prettyPrint')];}},{nm:'defaultDoctype',mt:'prm',def:1,$t:{t:Doctype},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:defaultDoctype')];}},{nm:'escapeNonAscii',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:escapeNonAscii')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html.serializer'),NodeSerializer$serializer)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html.serializer','SerializerConfig']};};
ex$.SerializerConfig$serializer=SerializerConfig$serializer;
function $init$SerializerConfig$serializer(){
if(SerializerConfig$serializer.$$===undefined){
m$1.initTypeProto(SerializerConfig$serializer,'ceylon.html.serializer::SerializerConfig',m$1.Basic);
(function(serializerConfig$){
m$1.atr$(serializerConfig$,'prettyPrint',function(){return this.prettyPrint_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:SerializerConfig$serializer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:prettyPrint')];},d:['ceylon.html.serializer','SerializerConfig','$at','prettyPrint']};});
m$1.atr$(serializerConfig$,'defaultDoctype',function(){return this.defaultDoctype_;},undefined,function(){return{mod:$CCMM$,$t:{t:Doctype},$cont:SerializerConfig$serializer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:defaultDoctype')];},d:['ceylon.html.serializer','SerializerConfig','$at','defaultDoctype']};});
m$1.atr$(serializerConfig$,'escapeNonAscii',function(){return this.escapeNonAscii_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:SerializerConfig$serializer,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html.serializer:SerializerConfig:$at:escapeNonAscii')];},d:['ceylon.html.serializer','SerializerConfig','$at','escapeNonAscii']};});
})(SerializerConfig$serializer.$$.prototype);
}
return SerializerConfig$serializer;
}
ex$.$init$SerializerConfig$serializer=$init$SerializerConfig$serializer;
$init$SerializerConfig$serializer();
function Snippet($$targs$$,snippet$){
m$1.set_type_args(snippet$,$$targs$$,Snippet);
}
Snippet.$crtmm$=function(){return{mod:$CCMM$,tp:{Result$Snippet:{dv:'out',sts:[{t:Node}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Snippet')];},d:['ceylon.html','Snippet']};};
ex$.Snippet=Snippet;
function $init$Snippet(){
if(Snippet.$$===undefined){
m$1.initTypeProtoI(Snippet,'ceylon.html::Snippet');
(function(snippet$){
snippet$.$prop$getContent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$Snippet',{t:m$1.Iterable,a:{Element$Iterable:'Result$Snippet',Absent$Iterable:{t:m$1.Null}}},{t:m$1.Null}]},$cont:Snippet,pa:5,an:function(){return[m$1.doc("Build the snippet content.")];},d:['ceylon.html','Snippet','$at','content']};}};
m$1.atr$(snippet$,'string',function(){
var snippet$=this;
var $2bm;
if(m$1.nn$(($2bm=snippet$.content))){
return $2bm.string;
}
return "null result from snippet ".plus(snippet$.string).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Snippet,pa:11,d:['ceylon.html','Snippet','$at','string']};});
})(Snippet.$$.prototype);
}
return Snippet;
}
ex$.$init$Snippet=$init$Snippet;
$init$Snippet();
function Span(text,$wgimgr$2bn,$wgimgr$2bo,$wgimgr$2bp,$wgimgr$2bq,$wgimgr$2br,$wgimgr$2bs,$wgimgr$2bt,$wgimgr$2bu,$wgimgr$2bv,$wgimgr$2bw,$wgimgr$2bx,$wgimgr$2by,$wgimgr$2bz,$wgimgr$2c0,$wgimgr$2c1,$wgimgr$2c2,$wgimgr$2c3,$wgimgr$2c4,children,span$){
$init$Span();
if(span$===undefined)span$=new Span.$$;
span$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
span$.text_=text;
if($wgimgr$2bn===undefined){$wgimgr$2bn=null;}
span$.$wgimgr$2bn_=$wgimgr$2bn;
if($wgimgr$2bo===undefined){$wgimgr$2bo=m$1.empty();}
span$.$wgimgr$2bo_=$wgimgr$2bo;
if($wgimgr$2bp===undefined){$wgimgr$2bp=null;}
span$.$wgimgr$2bp_=$wgimgr$2bp;
if($wgimgr$2bq===undefined){$wgimgr$2bq=null;}
span$.$wgimgr$2bq_=$wgimgr$2bq;
if($wgimgr$2br===undefined){$wgimgr$2br=null;}
span$.$wgimgr$2br_=$wgimgr$2br;
if($wgimgr$2bs===undefined){$wgimgr$2bs=null;}
span$.$wgimgr$2bs_=$wgimgr$2bs;
if($wgimgr$2bt===undefined){$wgimgr$2bt=null;}
span$.$wgimgr$2bt_=$wgimgr$2bt;
if($wgimgr$2bu===undefined){$wgimgr$2bu=null;}
span$.$wgimgr$2bu_=$wgimgr$2bu;
if($wgimgr$2bv===undefined){$wgimgr$2bv=null;}
span$.$wgimgr$2bv_=$wgimgr$2bv;
if($wgimgr$2bw===undefined){$wgimgr$2bw=null;}
span$.$wgimgr$2bw_=$wgimgr$2bw;
if($wgimgr$2bx===undefined){$wgimgr$2bx=null;}
span$.$wgimgr$2bx_=$wgimgr$2bx;
if($wgimgr$2by===undefined){$wgimgr$2by=null;}
span$.$wgimgr$2by_=$wgimgr$2by;
if($wgimgr$2bz===undefined){$wgimgr$2bz=null;}
span$.$wgimgr$2bz_=$wgimgr$2bz;
if($wgimgr$2c0===undefined){$wgimgr$2c0=null;}
span$.$wgimgr$2c0_=$wgimgr$2c0;
if($wgimgr$2c1===undefined){$wgimgr$2c1=null;}
span$.$wgimgr$2c1_=$wgimgr$2c1;
if($wgimgr$2c2===undefined){$wgimgr$2c2=null;}
span$.$wgimgr$2c2_=$wgimgr$2c2;
if($wgimgr$2c3===undefined){$wgimgr$2c3=m$1.empty();}
span$.$wgimgr$2c3_=$wgimgr$2c3;
if($wgimgr$2c4===undefined){$wgimgr$2c4=m$1.empty();}
span$.$wgimgr$2c4_=$wgimgr$2c4;
if(children===undefined){children=m$1.empty();}
span$.children_=children;
TextNode(span$);
InlineElement(span$);
ParentNode({Child$ParentNode:{t:InlineElement}},span$);
BaseElement($wgimgr$2bn,$wgimgr$2bo,$wgimgr$2bp,$wgimgr$2bq,$wgimgr$2br,$wgimgr$2bs,$wgimgr$2bt,$wgimgr$2bu,$wgimgr$2bv,$wgimgr$2bw,$wgimgr$2bx,$wgimgr$2by,$wgimgr$2bz,$wgimgr$2c0,$wgimgr$2c1,$wgimgr$2c2,$wgimgr$2c3,$wgimgr$2c4,span$);
span$.tag_=Tag("span");
return span$;
}
Span.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Span')];},d:['ceylon.html','Span']};};
ex$.Span=Span;
function $init$Span(){
if(Span.$$===undefined){
m$1.initTypeProto(Span,'ceylon.html::Span',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(span$){
m$1.atr$(span$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Span,pa:3,d:['ceylon.html','Span','$at','text']};});
m$1.atr$(span$,'$wgimgr$2bn',function(){return this.$wgimgr$2bn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','id$fkqld4']};});
m$1.atr$(span$,'$wgimgr$2bo',function(){return this.$wgimgr$2bo_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Span,d:['ceylon.html','Span','$at','classNames$z1fkaz']};});
m$1.atr$(span$,'$wgimgr$2bp',function(){return this.$wgimgr$2bp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','style$exgzim']};});
m$1.atr$(span$,'$wgimgr$2bq',function(){return this.$wgimgr$2bq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','accessKey$3tc3jc']};});
m$1.atr$(span$,'$wgimgr$2br',function(){return this.$wgimgr$2br_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','contextMenu$pzl803']};});
m$1.atr$(span$,'$wgimgr$2bs',function(){return this.$wgimgr$2bs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Span,d:['ceylon.html','Span','$at','dir$hr2t6y']};});
m$1.atr$(span$,'$wgimgr$2bt',function(){return this.$wgimgr$2bt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Span,d:['ceylon.html','Span','$at','draggable$btj6fe']};});
m$1.atr$(span$,'$wgimgr$2bu',function(){return this.$wgimgr$2bu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Span,d:['ceylon.html','Span','$at','dropZone$stdn7s']};});
m$1.atr$(span$,'$wgimgr$2bv',function(){return this.$wgimgr$2bv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Span,d:['ceylon.html','Span','$at','inert$egatqv']};});
m$1.atr$(span$,'$wgimgr$2bw',function(){return this.$wgimgr$2bw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Span,d:['ceylon.html','Span','$at','hidden$ank31b']};});
m$1.atr$(span$,'$wgimgr$2bx',function(){return this.$wgimgr$2bx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','lang$ji5iir']};});
m$1.atr$(span$,'$wgimgr$2by',function(){return this.$wgimgr$2by_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Span,d:['ceylon.html','Span','$at','spellcheck$2qfjmt']};});
m$1.atr$(span$,'$wgimgr$2bz',function(){return this.$wgimgr$2bz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Span,d:['ceylon.html','Span','$at','tabIndex$t07jie']};});
m$1.atr$(span$,'$wgimgr$2c0',function(){return this.$wgimgr$2c0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Span,d:['ceylon.html','Span','$at','title$sb6spp']};});
m$1.atr$(span$,'$wgimgr$2c1',function(){return this.$wgimgr$2c1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Span,d:['ceylon.html','Span','$at','translate$dyw2vx']};});
m$1.atr$(span$,'$wgimgr$2c2',function(){return this.$wgimgr$2c2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Span,d:['ceylon.html','Span','$at','aria$cg8m7a']};});
m$1.atr$(span$,'$wgimgr$2c3',function(){return this.$wgimgr$2c3_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Span,d:['ceylon.html','Span','$at','nonstandardAttributes$69ujmq']};});
m$1.atr$(span$,'$wgimgr$2c4',function(){return this.$wgimgr$2c4_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Span,d:['ceylon.html','Span','$at','data$e41obj']};});
m$1.atr$(span$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Span,pa:3,d:['ceylon.html','Span','$at','children']};});
m$1.atr$(span$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Span,pa:3,d:['ceylon.html','Span','$at','tag']};});
})(Span.$$.prototype);
}
return Span;
}
ex$.$init$Span=$init$Span;
$init$Span();
function Table(header,rows,footer,$wgimgr$2c5,$wgimgr$2c6,$wgimgr$2c7,$wgimgr$2c8,$wgimgr$2c9,$wgimgr$2ca,$wgimgr$2cb,$wgimgr$2cc,$wgimgr$2cd,$wgimgr$2ce,$wgimgr$2cf,$wgimgr$2cg,$wgimgr$2ch,$wgimgr$2ci,$wgimgr$2cj,$wgimgr$2ck,$wgimgr$2cl,$wgimgr$2cm,table$){
$init$Table();
if(table$===undefined)table$=new Table.$$;
table$.$$targs$$={Child$ParentNode:{t:TableElement}};
if(header===undefined){header=m$1.empty();}
table$.header_=header;
if(rows===undefined){rows=m$1.empty();}
table$.rows_=rows;
if(footer===undefined){footer=null;}
table$.footer_=footer;
if($wgimgr$2c5===undefined){$wgimgr$2c5=null;}
table$.$wgimgr$2c5_=$wgimgr$2c5;
if($wgimgr$2c6===undefined){$wgimgr$2c6=m$1.empty();}
table$.$wgimgr$2c6_=$wgimgr$2c6;
if($wgimgr$2c7===undefined){$wgimgr$2c7=null;}
table$.$wgimgr$2c7_=$wgimgr$2c7;
if($wgimgr$2c8===undefined){$wgimgr$2c8=null;}
table$.$wgimgr$2c8_=$wgimgr$2c8;
if($wgimgr$2c9===undefined){$wgimgr$2c9=null;}
table$.$wgimgr$2c9_=$wgimgr$2c9;
if($wgimgr$2ca===undefined){$wgimgr$2ca=null;}
table$.$wgimgr$2ca_=$wgimgr$2ca;
if($wgimgr$2cb===undefined){$wgimgr$2cb=null;}
table$.$wgimgr$2cb_=$wgimgr$2cb;
if($wgimgr$2cc===undefined){$wgimgr$2cc=null;}
table$.$wgimgr$2cc_=$wgimgr$2cc;
if($wgimgr$2cd===undefined){$wgimgr$2cd=null;}
table$.$wgimgr$2cd_=$wgimgr$2cd;
if($wgimgr$2ce===undefined){$wgimgr$2ce=null;}
table$.$wgimgr$2ce_=$wgimgr$2ce;
if($wgimgr$2cf===undefined){$wgimgr$2cf=null;}
table$.$wgimgr$2cf_=$wgimgr$2cf;
if($wgimgr$2cg===undefined){$wgimgr$2cg=null;}
table$.$wgimgr$2cg_=$wgimgr$2cg;
if($wgimgr$2ch===undefined){$wgimgr$2ch=null;}
table$.$wgimgr$2ch_=$wgimgr$2ch;
if($wgimgr$2ci===undefined){$wgimgr$2ci=null;}
table$.$wgimgr$2ci_=$wgimgr$2ci;
if($wgimgr$2cj===undefined){$wgimgr$2cj=null;}
table$.$wgimgr$2cj_=$wgimgr$2cj;
if($wgimgr$2ck===undefined){$wgimgr$2ck=null;}
table$.$wgimgr$2ck_=$wgimgr$2ck;
if($wgimgr$2cl===undefined){$wgimgr$2cl=m$1.empty();}
table$.$wgimgr$2cl_=$wgimgr$2cl;
if($wgimgr$2cm===undefined){$wgimgr$2cm=m$1.empty();}
table$.$wgimgr$2cm_=$wgimgr$2cm;
ParentNode({Child$ParentNode:{t:TableElement}},table$);
BlockElement(table$);
BaseElement($wgimgr$2c5,$wgimgr$2c6,$wgimgr$2c7,$wgimgr$2c8,$wgimgr$2c9,$wgimgr$2ca,$wgimgr$2cb,$wgimgr$2cc,$wgimgr$2cd,$wgimgr$2ce,$wgimgr$2cf,$wgimgr$2cg,$wgimgr$2ch,$wgimgr$2ci,$wgimgr$2cj,$wgimgr$2ck,$wgimgr$2cl,$wgimgr$2cm,table$);
table$.tag_=Tag("table");
return table$;
}
Table.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'header',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Th}]},Absent$Iterable:{t:m$1.Null}}},pa:1},{nm:'rows',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Tr},{t:'u',l:[{t:m$1.Null},{t:Snippet,a:{Result$Snippet:{t:Tr}}}]}]},Absent$Iterable:{t:m$1.Null}}},pa:1},{nm:'footer',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Null}]},pa:1},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:TableElement}}},{t:BlockElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Table')];},d:['ceylon.html','Table']};};
ex$.Table=Table;
function $init$Table(){
if(Table.$$===undefined){
m$1.initTypeProto(Table,'ceylon.html::Table',$init$ParentNode(),$init$BlockElement(),$init$BaseElement());
(function(table$){
m$1.atr$(table$,'header',function(){return this.header_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Th}]},Absent$Iterable:{t:m$1.Null}}},$cont:Table,pa:1,d:['ceylon.html','Table','$at','header']};});
m$1.atr$(table$,'rows',function(){return this.rows_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Tr},{t:'u',l:[{t:m$1.Null},{t:Snippet,a:{Result$Snippet:{t:Tr}}}]}]},Absent$Iterable:{t:m$1.Null}}},$cont:Table,pa:1,d:['ceylon.html','Table','$at','rows']};});
m$1.atr$(table$,'footer',function(){return this.footer_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Null}]},$cont:Table,pa:1,d:['ceylon.html','Table','$at','footer']};});
m$1.atr$(table$,'$wgimgr$2c5',function(){return this.$wgimgr$2c5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','id$flg5o']};});
m$1.atr$(table$,'$wgimgr$2c6',function(){return this.$wgimgr$2c6_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Table,d:['ceylon.html','Table','$at','classNames$kujcgp']};});
m$1.atr$(table$,'$wgimgr$2c7',function(){return this.$wgimgr$2c7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','style$7o5ou']};});
m$1.atr$(table$,'$wgimgr$2c8',function(){return this.$wgimgr$2c8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','accessKey$bbt1o4']};});
m$1.atr$(table$,'$wgimgr$2c9',function(){return this.$wgimgr$2c9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','contextMenu$aug2sn']};});
m$1.atr$(table$,'$wgimgr$2ca',function(){return this.$wgimgr$2ca_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Table,d:['ceylon.html','Table','$at','dir$2lxnzi']};});
m$1.atr$(table$,'$wgimgr$2cb',function(){return this.$wgimgr$2cb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Table,d:['ceylon.html','Table','$at','draggable$3blys2']};});
m$1.atr$(table$,'$wgimgr$2cc',function(){return this.$wgimgr$2cc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Table,d:['ceylon.html','Table','$at','dropZone$do8i0c']};});
m$1.atr$(table$,'$wgimgr$2cd',function(){return this.$wgimgr$2cd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Table,d:['ceylon.html','Table','$at','inert$oubgl']};});
m$1.atr$(table$,'$wgimgr$2ce',function(){return this.$wgimgr$2ce_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Table,d:['ceylon.html','Table','$at','hidden$4hl265']};});
m$1.atr$(table$,'$wgimgr$2cf',function(){return this.$wgimgr$2cf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','lang$4d0dbb']};});
m$1.atr$(table$,'$wgimgr$2cg',function(){return this.$wgimgr$2cg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Table,d:['ceylon.html','Table','$at','spellcheck$ceplkn']};});
m$1.atr$(table$,'$wgimgr$2ch',function(){return this.$wgimgr$2ch_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Table,d:['ceylon.html','Table','$at','tabIndex$qvrd9a']};});
m$1.atr$(table$,'$wgimgr$2ci',function(){return this.$wgimgr$2ci_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Table,d:['ceylon.html','Table','$at','title$d61ni9']};});
m$1.atr$(table$,'$wgimgr$2cj',function(){return this.$wgimgr$2cj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Table,d:['ceylon.html','Table','$at','translate$t4183d']};});
m$1.atr$(table$,'$wgimgr$2ck',function(){return this.$wgimgr$2ck_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Table,d:['ceylon.html','Table','$at','aria$2owj06']};});
m$1.atr$(table$,'$wgimgr$2cl',function(){return this.$wgimgr$2cl_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Table,d:['ceylon.html','Table','$at','nonstandardAttributes$lezou6']};});
m$1.atr$(table$,'$wgimgr$2cm',function(){return this.$wgimgr$2cm_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Table,d:['ceylon.html','Table','$at','data$113gvx']};});
m$1.atr$(table$,'children',function(){
var table$=this;
return m$1.sarg$(function($2cn){switch($2cn){case 0:return THead(table$.header);case 1:return TBody(table$.rows);case 2:return (m$1.nn$(table$.footer)?TFoot(($2co=table$.footer,m$1.nn$($2co)?$2co:m$1.empty())):null);}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:THead},{t:TBody},{t:m$1.Null},{t:TFoot}]),Absent$Iterable:{t:m$1.Nothing}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:TableElement},{t:m$1.Iterable,a:{Element$Iterable:{t:TableElement},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Table,pa:3,d:['ceylon.html','Table','$at','children']};});
m$1.atr$(table$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Table,pa:3,d:['ceylon.html','Table','$at','tag']};});
})(Table.$$.prototype);
}
return Table;
}
ex$.$init$Table=$init$Table;
$init$Table();
var $2co;
function THead($wgimgr$2cp,tHead$){
$init$THead();
if(tHead$===undefined)tHead$=new THead.$$;
tHead$.$$targs$$={Child$ParentNode:{t:Tr}};
if($wgimgr$2cp===undefined){$wgimgr$2cp=m$1.empty();}
tHead$.$wgimgr$2cp_=$wgimgr$2cp;
ParentNode({Child$ParentNode:{t:Tr}},tHead$);
TableElement(tHead$);
tHead$.tag_=Tag("thead");
return tHead$;
}
THead.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'headers',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Th}]},Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:Tr}}},{t:TableElement}],an:function(){return[m$1.doc$($CCMM$,'ceylon.html:THead'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.html'),$init$Table().$$.prototype.$prop$getHeader)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','THead']};};
ex$.THead=THead;
function $init$THead(){
if(THead.$$===undefined){
m$1.initTypeProto(THead,'ceylon.html::THead',m$1.Basic,$init$ParentNode(),$init$TableElement());
(function(tHead$){
m$1.atr$(tHead$,'$wgimgr$2cp',function(){return this.$wgimgr$2cp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Th}]},Absent$Iterable:{t:m$1.Null}}},$cont:THead,d:['ceylon.html','THead','$at','headers$2z2nor']};});
m$1.atr$(tHead$,'children',function(){
var tHead$=this;
return m$1.sarg$(function($2cq){switch($2cq){case 0:return ($2cr=tHead$.$wgimgr$2cp,Tr(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2cr));}return m$1.finished();},undefined,{Element$Iterable:{t:Tr},Absent$Iterable:{t:m$1.Nothing}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}},$cont:THead,pa:3,d:['ceylon.html','THead','$at','children']};});
m$1.atr$(tHead$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:THead,pa:3,d:['ceylon.html','THead','$at','tag']};});
})(THead.$$.prototype);
}
return THead;
}
ex$.$init$THead=$init$THead;
$init$THead();
var $2cr;
function TBody($wgimgr$2cs,tBody$){
$init$TBody();
if(tBody$===undefined)tBody$=new TBody.$$;
tBody$.$$targs$$={Child$ParentNode:{t:Tr}};
if($wgimgr$2cs===undefined){$wgimgr$2cs=m$1.empty();}
tBody$.$wgimgr$2cs_=$wgimgr$2cs;
ParentNode({Child$ParentNode:{t:Tr}},tBody$);
TableElement(tBody$);
tBody$.$wgimgr$2ct_=tBody$.$wgimgr$2cs;
tBody$.tag_=Tag("tbody");
return tBody$;
}
TBody.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'rows',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Tr},{t:'u',l:[{t:m$1.Null},{t:Snippet,a:{Result$Snippet:{t:Tr}}}]}]},Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:Tr}}},{t:TableElement}],an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TBody'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.html'),$init$Table().$$.prototype.$prop$getRows)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','TBody']};};
ex$.TBody=TBody;
function $init$TBody(){
if(TBody.$$===undefined){
m$1.initTypeProto(TBody,'ceylon.html::TBody',m$1.Basic,$init$ParentNode(),$init$TableElement());
(function(tBody$){
m$1.atr$(tBody$,'$wgimgr$2cs',function(){return this.$wgimgr$2cs_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Tr},{t:'u',l:[{t:m$1.Null},{t:Snippet,a:{Result$Snippet:{t:Tr}}}]}]},Absent$Iterable:{t:m$1.Null}}},$cont:TBody,d:['ceylon.html','TBody','$at','rows$icpeiq']};});
m$1.atr$(tBody$,'children',function(){return this.$wgimgr$2ct_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Tr},{t:'u',l:[{t:m$1.Null},{t:Snippet,a:{Result$Snippet:{t:Tr}}}]}]},Absent$Iterable:{t:m$1.Null}}},$cont:TBody,pa:3,d:['ceylon.html','TBody','$at','children']};});
m$1.atr$(tBody$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:TBody,pa:3,d:['ceylon.html','TBody','$at','tag']};});
})(TBody.$$.prototype);
}
return TBody;
}
ex$.$init$TBody=$init$TBody;
$init$TBody();
function TFoot($wgimgr$2cu,tFoot$){
$init$TFoot();
if(tFoot$===undefined)tFoot$=new TFoot.$$;
tFoot$.$$targs$$={Child$ParentNode:{t:Tr}};
if($wgimgr$2cu===undefined){$wgimgr$2cu=m$1.empty();}
tFoot$.$wgimgr$2cu_=$wgimgr$2cu;
ParentNode({Child$ParentNode:{t:Tr}},tFoot$);
TableElement(tFoot$);
tFoot$.$wgimgr$2cv_=tFoot$.$wgimgr$2cu;
tFoot$.tag_=Tag("tfoot");
return tFoot$;
}
TFoot.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'rows',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:Tr}}},{t:TableElement}],an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TFoot'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.html'),$init$Table().$$.prototype.$prop$getFooter)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','TFoot']};};
ex$.TFoot=TFoot;
function $init$TFoot(){
if(TFoot.$$===undefined){
m$1.initTypeProto(TFoot,'ceylon.html::TFoot',m$1.Basic,$init$ParentNode(),$init$TableElement());
(function(tFoot$){
m$1.atr$(tFoot$,'$wgimgr$2cu',function(){return this.$wgimgr$2cu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}},$cont:TFoot,d:['ceylon.html','TFoot','$at','rows$9ofw1a']};});
m$1.atr$(tFoot$,'children',function(){return this.$wgimgr$2cv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.Null},{t:Tr}]},Absent$Iterable:{t:m$1.Null}}},$cont:TFoot,pa:3,d:['ceylon.html','TFoot','$at','children']};});
m$1.atr$(tFoot$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:TFoot,pa:3,d:['ceylon.html','TFoot','$at','tag']};});
})(TFoot.$$.prototype);
}
return TFoot;
}
ex$.$init$TFoot=$init$TFoot;
$init$TFoot();
function Tr($wgimgr$2cw,$wgimgr$2cx,$wgimgr$2cy,$wgimgr$2cz,$wgimgr$2d0,$wgimgr$2d1,$wgimgr$2d2,$wgimgr$2d3,$wgimgr$2d4,$wgimgr$2d5,$wgimgr$2d6,$wgimgr$2d7,$wgimgr$2d8,$wgimgr$2d9,$wgimgr$2da,$wgimgr$2db,$wgimgr$2dc,$wgimgr$2dd,children,tr$){
$init$Tr();
if(tr$===undefined)tr$=new Tr.$$;
tr$.$$targs$$={Child$ParentNode:m$1.mut$([{t:Th},{t:Td}])};
if($wgimgr$2cw===undefined){$wgimgr$2cw=null;}
tr$.$wgimgr$2cw_=$wgimgr$2cw;
if($wgimgr$2cx===undefined){$wgimgr$2cx=m$1.empty();}
tr$.$wgimgr$2cx_=$wgimgr$2cx;
if($wgimgr$2cy===undefined){$wgimgr$2cy=null;}
tr$.$wgimgr$2cy_=$wgimgr$2cy;
if($wgimgr$2cz===undefined){$wgimgr$2cz=null;}
tr$.$wgimgr$2cz_=$wgimgr$2cz;
if($wgimgr$2d0===undefined){$wgimgr$2d0=null;}
tr$.$wgimgr$2d0_=$wgimgr$2d0;
if($wgimgr$2d1===undefined){$wgimgr$2d1=null;}
tr$.$wgimgr$2d1_=$wgimgr$2d1;
if($wgimgr$2d2===undefined){$wgimgr$2d2=null;}
tr$.$wgimgr$2d2_=$wgimgr$2d2;
if($wgimgr$2d3===undefined){$wgimgr$2d3=null;}
tr$.$wgimgr$2d3_=$wgimgr$2d3;
if($wgimgr$2d4===undefined){$wgimgr$2d4=null;}
tr$.$wgimgr$2d4_=$wgimgr$2d4;
if($wgimgr$2d5===undefined){$wgimgr$2d5=null;}
tr$.$wgimgr$2d5_=$wgimgr$2d5;
if($wgimgr$2d6===undefined){$wgimgr$2d6=null;}
tr$.$wgimgr$2d6_=$wgimgr$2d6;
if($wgimgr$2d7===undefined){$wgimgr$2d7=null;}
tr$.$wgimgr$2d7_=$wgimgr$2d7;
if($wgimgr$2d8===undefined){$wgimgr$2d8=null;}
tr$.$wgimgr$2d8_=$wgimgr$2d8;
if($wgimgr$2d9===undefined){$wgimgr$2d9=null;}
tr$.$wgimgr$2d9_=$wgimgr$2d9;
if($wgimgr$2da===undefined){$wgimgr$2da=null;}
tr$.$wgimgr$2da_=$wgimgr$2da;
if($wgimgr$2db===undefined){$wgimgr$2db=null;}
tr$.$wgimgr$2db_=$wgimgr$2db;
if($wgimgr$2dc===undefined){$wgimgr$2dc=m$1.empty();}
tr$.$wgimgr$2dc_=$wgimgr$2dc;
if($wgimgr$2dd===undefined){$wgimgr$2dd=m$1.empty();}
tr$.$wgimgr$2dd_=$wgimgr$2dd;
if(children===undefined){children=m$1.empty();}
tr$.children_=children;
ParentNode({Child$ParentNode:m$1.mut$([{t:Th},{t:Td}])},tr$);
TableElement(tr$);
BaseElement($wgimgr$2cw,$wgimgr$2cx,$wgimgr$2cy,$wgimgr$2cz,$wgimgr$2d0,$wgimgr$2d1,$wgimgr$2d2,$wgimgr$2d3,$wgimgr$2d4,$wgimgr$2d5,$wgimgr$2d6,$wgimgr$2d7,$wgimgr$2d8,$wgimgr$2d9,$wgimgr$2da,$wgimgr$2db,$wgimgr$2dc,$wgimgr$2dd,tr$);
tr$.tag_=Tag("tr");
return tr$;
}
Tr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Th},{t:Td},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Th},{t:Td}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Th},{t:Td}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:ParentNode,a:{Child$ParentNode:{t:'u',l:[{t:Th},{t:Td}]}}},{t:TableElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tr')];},d:['ceylon.html','Tr']};};
ex$.Tr=Tr;
function $init$Tr(){
if(Tr.$$===undefined){
m$1.initTypeProto(Tr,'ceylon.html::Tr',$init$ParentNode(),$init$TableElement(),$init$BaseElement());
(function(tr$){
m$1.atr$(tr$,'$wgimgr$2cw',function(){return this.$wgimgr$2cw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','id$6r3lac']};});
m$1.atr$(tr$,'$wgimgr$2cx',function(){return this.$wgimgr$2cx_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Tr,d:['ceylon.html','Tr','$at','classNames$dnub0p']};});
m$1.atr$(tr$,'$wgimgr$2cy',function(){return this.$wgimgr$2cy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','style$7ed74u']};});
m$1.atr$(tr$,'$wgimgr$2cz',function(){return this.$wgimgr$2cz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','accessKey$iii344']};});
m$1.atr$(tr$,'$wgimgr$2d0',function(){return this.$wgimgr$2d0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','contextMenu$3nr1cn']};});
m$1.atr$(tr$,'$wgimgr$2d1',function(){return this.$wgimgr$2d1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Tr,d:['ceylon.html','Tr','$at','dir$4krdgi']};});
m$1.atr$(tr$,'$wgimgr$2d2',function(){return this.$wgimgr$2d2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Tr,d:['ceylon.html','Tr','$at','draggable$aib082']};});
m$1.atr$(tr$,'$wgimgr$2d3',function(){return this.$wgimgr$2d3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Tr,d:['ceylon.html','Tr','$at','dropZone$6hjgkc']};});
m$1.atr$(tr$,'$wgimgr$2d4',function(){return this.$wgimgr$2d4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Tr,d:['ceylon.html','Tr','$at','inert$7vjcwl']};});
m$1.atr$(tr$,'$wgimgr$2d5',function(){return this.$wgimgr$2d5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Tr,d:['ceylon.html','Tr','$at','hidden$boa3m5']};});
m$1.atr$(tr$,'$wgimgr$2d6',function(){return this.$wgimgr$2d6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','lang$2too4p']};});
m$1.atr$(tr$,'$wgimgr$2d7',function(){return this.$wgimgr$2d7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Tr,d:['ceylon.html','Tr','$at','spellcheck$jlen0n']};});
m$1.atr$(tr$,'$wgimgr$2d8',function(){return this.$wgimgr$2d8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Tr,d:['ceylon.html','Tr','$at','tabIndex$jp2bta']};});
m$1.atr$(tr$,'$wgimgr$2d9',function(){return this.$wgimgr$2d9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tr,d:['ceylon.html','Tr','$at','title$5zcm29']};});
m$1.atr$(tr$,'$wgimgr$2da',function(){return this.$wgimgr$2da_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Tr,d:['ceylon.html','Tr','$at','translate$yqdsfr']};});
m$1.atr$(tr$,'$wgimgr$2db',function(){return this.$wgimgr$2db_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Tr,d:['ceylon.html','Tr','$at','aria$9vlkg6']};});
m$1.atr$(tr$,'$wgimgr$2dc',function(){return this.$wgimgr$2dc_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Tr,d:['ceylon.html','Tr','$at','nonstandardAttributes$sloqa6']};});
m$1.atr$(tr$,'$wgimgr$2dd',function(){return this.$wgimgr$2dd_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Tr,d:['ceylon.html','Tr','$at','data$87sibx']};});
m$1.atr$(tr$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Th},{t:Td},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:Th},{t:Td}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:'u',l:[{t:Th},{t:Td}]}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Tr,pa:3,d:['ceylon.html','Tr','$at','children']};});
m$1.atr$(tr$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Tr,pa:3,d:['ceylon.html','Tr','$at','tag']};});
})(Tr.$$.prototype);
}
return Tr;
}
ex$.$init$Tr=$init$Tr;
$init$Tr();
function Th(text,$wgimgr$2de,$wgimgr$2df,$wgimgr$2dg,$wgimgr$2dh,$wgimgr$2di,$wgimgr$2dj,$wgimgr$2dk,$wgimgr$2dl,$wgimgr$2dm,$wgimgr$2dn,$wgimgr$2do,$wgimgr$2dp,$wgimgr$2dq,$wgimgr$2dr,$wgimgr$2ds,$wgimgr$2dt,$wgimgr$2du,$wgimgr$2dv,children,th$){
$init$Th();
if(th$===undefined)th$=new Th.$$;
th$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(text===undefined){text="";}
th$.text_=text;
if($wgimgr$2de===undefined){$wgimgr$2de=null;}
th$.$wgimgr$2de_=$wgimgr$2de;
if($wgimgr$2df===undefined){$wgimgr$2df=m$1.empty();}
th$.$wgimgr$2df_=$wgimgr$2df;
if($wgimgr$2dg===undefined){$wgimgr$2dg=null;}
th$.$wgimgr$2dg_=$wgimgr$2dg;
if($wgimgr$2dh===undefined){$wgimgr$2dh=null;}
th$.$wgimgr$2dh_=$wgimgr$2dh;
if($wgimgr$2di===undefined){$wgimgr$2di=null;}
th$.$wgimgr$2di_=$wgimgr$2di;
if($wgimgr$2dj===undefined){$wgimgr$2dj=null;}
th$.$wgimgr$2dj_=$wgimgr$2dj;
if($wgimgr$2dk===undefined){$wgimgr$2dk=null;}
th$.$wgimgr$2dk_=$wgimgr$2dk;
if($wgimgr$2dl===undefined){$wgimgr$2dl=null;}
th$.$wgimgr$2dl_=$wgimgr$2dl;
if($wgimgr$2dm===undefined){$wgimgr$2dm=null;}
th$.$wgimgr$2dm_=$wgimgr$2dm;
if($wgimgr$2dn===undefined){$wgimgr$2dn=null;}
th$.$wgimgr$2dn_=$wgimgr$2dn;
if($wgimgr$2do===undefined){$wgimgr$2do=null;}
th$.$wgimgr$2do_=$wgimgr$2do;
if($wgimgr$2dp===undefined){$wgimgr$2dp=null;}
th$.$wgimgr$2dp_=$wgimgr$2dp;
if($wgimgr$2dq===undefined){$wgimgr$2dq=null;}
th$.$wgimgr$2dq_=$wgimgr$2dq;
if($wgimgr$2dr===undefined){$wgimgr$2dr=null;}
th$.$wgimgr$2dr_=$wgimgr$2dr;
if($wgimgr$2ds===undefined){$wgimgr$2ds=null;}
th$.$wgimgr$2ds_=$wgimgr$2ds;
if($wgimgr$2dt===undefined){$wgimgr$2dt=null;}
th$.$wgimgr$2dt_=$wgimgr$2dt;
if($wgimgr$2du===undefined){$wgimgr$2du=m$1.empty();}
th$.$wgimgr$2du_=$wgimgr$2du;
if($wgimgr$2dv===undefined){$wgimgr$2dv=m$1.empty();}
th$.$wgimgr$2dv_=$wgimgr$2dv;
if(children===undefined){children=m$1.empty();}
th$.children_=children;
TextNode(th$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},th$);
TableElement(th$);
BaseElement($wgimgr$2de,$wgimgr$2df,$wgimgr$2dg,$wgimgr$2dh,$wgimgr$2di,$wgimgr$2dj,$wgimgr$2dk,$wgimgr$2dl,$wgimgr$2dm,$wgimgr$2dn,$wgimgr$2do,$wgimgr$2dp,$wgimgr$2dq,$wgimgr$2dr,$wgimgr$2ds,$wgimgr$2dt,$wgimgr$2du,$wgimgr$2dv,th$);
th$.tag_=Tag("th");
return th$;
}
Th.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}},{t:TableElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Th')];},d:['ceylon.html','Th']};};
ex$.Th=Th;
function $init$Th(){
if(Th.$$===undefined){
m$1.initTypeProto(Th,'ceylon.html::Th',$init$TextNode(),$init$ParentNode(),$init$TableElement(),$init$BaseElement());
(function(th$){
m$1.atr$(th$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Th,pa:3,d:['ceylon.html','Th','$at','text']};});
m$1.atr$(th$,'$wgimgr$2de',function(){return this.$wgimgr$2de_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','id$4w3h3y']};});
m$1.atr$(th$,'$wgimgr$2df',function(){return this.$wgimgr$2df_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Th,d:['ceylon.html','Th','$at','classNames$fiuf73']};});
m$1.atr$(th$,'$wgimgr$2dg',function(){return this.$wgimgr$2dg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','style$5jd2yg']};});
m$1.atr$(th$,'$wgimgr$2dh',function(){return this.$wgimgr$2dh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','accessKey$gnhyxq']};});
m$1.atr$(th$,'$wgimgr$2di',function(){return this.$wgimgr$2di_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','contextMenu$5ir5j1']};});
m$1.atr$(th$,'$wgimgr$2dj',function(){return this.$wgimgr$2dj_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Th,d:['ceylon.html','Th','$at','dir$2pr9a4']};});
m$1.atr$(th$,'$wgimgr$2dk',function(){return this.$wgimgr$2dk_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Th,d:['ceylon.html','Th','$at','draggable$8naw1o']};});
m$1.atr$(th$,'$wgimgr$2dl',function(){return this.$wgimgr$2dl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Th,d:['ceylon.html','Th','$at','dropZone$8cjkqq']};});
m$1.atr$(th$,'$wgimgr$2dm',function(){return this.$wgimgr$2dm_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Th,d:['ceylon.html','Th','$at','inert$60j8q7']};});
m$1.atr$(th$,'$wgimgr$2dn',function(){return this.$wgimgr$2dn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Th,d:['ceylon.html','Th','$at','hidden$9t9zfr']};});
m$1.atr$(th$,'$wgimgr$2do',function(){return this.$wgimgr$2do_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','lang$yojyb']};});
m$1.atr$(th$,'$wgimgr$2dp',function(){return this.$wgimgr$2dp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Th,d:['ceylon.html','Th','$at','spellcheck$hqeiu9']};});
m$1.atr$(th$,'$wgimgr$2dq',function(){return this.$wgimgr$2dq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Th,d:['ceylon.html','Th','$at','tabIndex$lk2fzo']};});
m$1.atr$(th$,'$wgimgr$2dr',function(){return this.$wgimgr$2dr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Th,d:['ceylon.html','Th','$at','title$7ucq8n']};});
m$1.atr$(th$,'$wgimgr$2ds',function(){return this.$wgimgr$2ds_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Th,d:['ceylon.html','Th','$at','translate$yfq5cz']};});
m$1.atr$(th$,'$wgimgr$2dt',function(){return this.$wgimgr$2dt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Th,d:['ceylon.html','Th','$at','aria$80lg9s']};});
m$1.atr$(th$,'$wgimgr$2du',function(){return this.$wgimgr$2du_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Th,d:['ceylon.html','Th','$at','nonstandardAttributes$qqom3s']};});
m$1.atr$(th$,'$wgimgr$2dv',function(){return this.$wgimgr$2dv_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Th,d:['ceylon.html','Th','$at','data$6cse5j']};});
m$1.atr$(th$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Th,pa:3,d:['ceylon.html','Th','$at','children']};});
m$1.atr$(th$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Th,pa:3,d:['ceylon.html','Th','$at','tag']};});
})(Th.$$.prototype);
}
return Th;
}
ex$.$init$Th=$init$Th;
$init$Th();
function Td(text,$wgimgr$2dw,$wgimgr$2dx,$wgimgr$2dy,$wgimgr$2dz,$wgimgr$2e0,$wgimgr$2e1,$wgimgr$2e2,$wgimgr$2e3,$wgimgr$2e4,$wgimgr$2e5,$wgimgr$2e6,$wgimgr$2e7,$wgimgr$2e8,$wgimgr$2e9,$wgimgr$2ea,$wgimgr$2eb,$wgimgr$2ec,$wgimgr$2ed,children,td$){
$init$Td();
if(td$===undefined)td$=new Td.$$;
td$.$$targs$$={Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])};
if(text===undefined){text="";}
td$.text_=text;
if($wgimgr$2dw===undefined){$wgimgr$2dw=null;}
td$.$wgimgr$2dw_=$wgimgr$2dw;
if($wgimgr$2dx===undefined){$wgimgr$2dx=m$1.empty();}
td$.$wgimgr$2dx_=$wgimgr$2dx;
if($wgimgr$2dy===undefined){$wgimgr$2dy=null;}
td$.$wgimgr$2dy_=$wgimgr$2dy;
if($wgimgr$2dz===undefined){$wgimgr$2dz=null;}
td$.$wgimgr$2dz_=$wgimgr$2dz;
if($wgimgr$2e0===undefined){$wgimgr$2e0=null;}
td$.$wgimgr$2e0_=$wgimgr$2e0;
if($wgimgr$2e1===undefined){$wgimgr$2e1=null;}
td$.$wgimgr$2e1_=$wgimgr$2e1;
if($wgimgr$2e2===undefined){$wgimgr$2e2=null;}
td$.$wgimgr$2e2_=$wgimgr$2e2;
if($wgimgr$2e3===undefined){$wgimgr$2e3=null;}
td$.$wgimgr$2e3_=$wgimgr$2e3;
if($wgimgr$2e4===undefined){$wgimgr$2e4=null;}
td$.$wgimgr$2e4_=$wgimgr$2e4;
if($wgimgr$2e5===undefined){$wgimgr$2e5=null;}
td$.$wgimgr$2e5_=$wgimgr$2e5;
if($wgimgr$2e6===undefined){$wgimgr$2e6=null;}
td$.$wgimgr$2e6_=$wgimgr$2e6;
if($wgimgr$2e7===undefined){$wgimgr$2e7=null;}
td$.$wgimgr$2e7_=$wgimgr$2e7;
if($wgimgr$2e8===undefined){$wgimgr$2e8=null;}
td$.$wgimgr$2e8_=$wgimgr$2e8;
if($wgimgr$2e9===undefined){$wgimgr$2e9=null;}
td$.$wgimgr$2e9_=$wgimgr$2e9;
if($wgimgr$2ea===undefined){$wgimgr$2ea=null;}
td$.$wgimgr$2ea_=$wgimgr$2ea;
if($wgimgr$2eb===undefined){$wgimgr$2eb=null;}
td$.$wgimgr$2eb_=$wgimgr$2eb;
if($wgimgr$2ec===undefined){$wgimgr$2ec=m$1.empty();}
td$.$wgimgr$2ec_=$wgimgr$2ec;
if($wgimgr$2ed===undefined){$wgimgr$2ed=m$1.empty();}
td$.$wgimgr$2ed_=$wgimgr$2ed;
if(children===undefined){children=m$1.empty();}
td$.children_=children;
TextNode(td$);
ParentNode({Child$ParentNode:m$1.mut$([{t:BlockElement},{t:InlineElement}])},td$);
TableElement(td$);
BaseElement($wgimgr$2dw,$wgimgr$2dx,$wgimgr$2dy,$wgimgr$2dz,$wgimgr$2e0,$wgimgr$2e1,$wgimgr$2e2,$wgimgr$2e3,$wgimgr$2e4,$wgimgr$2e5,$wgimgr$2e6,$wgimgr$2e7,$wgimgr$2e8,$wgimgr$2e9,$wgimgr$2ea,$wgimgr$2eb,$wgimgr$2ec,$wgimgr$2ed,td$);
td$.tag_=Tag("td");
return td$;
}
Td.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:ParentNode,a:{Child$ParentNode:BlockOrInline()}},{t:TableElement}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Td')];},d:['ceylon.html','Td']};};
ex$.Td=Td;
function $init$Td(){
if(Td.$$===undefined){
m$1.initTypeProto(Td,'ceylon.html::Td',$init$TextNode(),$init$ParentNode(),$init$TableElement(),$init$BaseElement());
(function(td$){
m$1.atr$(td$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Td,pa:3,d:['ceylon.html','Td','$at','text']};});
m$1.atr$(td$,'$wgimgr$2dw',function(){return this.$wgimgr$2dw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','id$wk51tu']};});
m$1.atr$(td$,'$wgimgr$2dx',function(){return this.$wgimgr$2dx_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Td,d:['ceylon.html','Td','$at','classNames$c575it']};});
m$1.atr$(td$,'$wgimgr$2dy',function(){return this.$wgimgr$2dy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','style$x7enoc']};});
m$1.atr$(td$,'$wgimgr$2dz',function(){return this.$wgimgr$2dz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','accessKey$qpkibi']};});
m$1.atr$(td$,'$wgimgr$2e0',function(){return this.$wgimgr$2e0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','contextMenu$m5af6v']};});
m$1.atr$(td$,'$wgimgr$2e1',function(){return this.$wgimgr$2e1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Td,d:['ceylon.html','Td','$at','dir$udsu00']};});
m$1.atr$(td$,'$wgimgr$2e2',function(){return this.$wgimgr$2e2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Td,d:['ceylon.html','Td','$at','draggable$yprl7k']};});
m$1.atr$(td$,'$wgimgr$2e3',function(){return this.$wgimgr$2e3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Td,d:['ceylon.html','Td','$at','dropZone$jbhzz6']};});
m$1.atr$(td$,'$wgimgr$2e4',function(){return this.$wgimgr$2e4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Td,d:['ceylon.html','Td','$at','inert$xoktg3']};});
m$1.atr$(td$,'$wgimgr$2e5',function(){return this.$wgimgr$2e5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Td,d:['ceylon.html','Td','$at','hidden$xjshth']};});
m$1.atr$(td$,'$wgimgr$2e6',function(){return this.$wgimgr$2e6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','lang$smq4o7']};});
m$1.atr$(td$,'$wgimgr$2e7',function(){return this.$wgimgr$2e7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Td,d:['ceylon.html','Td','$at','spellcheck$pmnyez']};});
m$1.atr$(td$,'$wgimgr$2e8',function(){return this.$wgimgr$2e8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Td,d:['ceylon.html','Td','$at','tabIndex$63z4q8']};});
m$1.atr$(td$,'$wgimgr$2e9',function(){return this.$wgimgr$2e9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Td,d:['ceylon.html','Td','$at','title$jtouh9']};});
m$1.atr$(td$,'$wgimgr$2ea',function(){return this.$wgimgr$2ea_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Td,d:['ceylon.html','Td','$at','translate$8xcbw9']};});
m$1.atr$(td$,'$wgimgr$2eb',function(){return this.$wgimgr$2eb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Td,d:['ceylon.html','Td','$at','aria$zch0zg']};});
m$1.atr$(td$,'$wgimgr$2ec',function(){return this.$wgimgr$2ec_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Td,d:['ceylon.html','Td','$at','nonstandardAttributes$gmdv5g']};});
m$1.atr$(td$,'$wgimgr$2ed',function(){return this.$wgimgr$2ed_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Td,d:['ceylon.html','Td','$at','data$y0tyvf']};});
m$1.atr$(td$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline(),{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},BlockOrInline()]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:BlockOrInline()}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Td,pa:3,d:['ceylon.html','Td','$at','children']};});
m$1.atr$(td$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Td,pa:3,d:['ceylon.html','Td','$at','tag']};});
})(Td.$$.prototype);
}
return Td;
}
ex$.$init$Td=$init$Td;
$init$Td();
function TagType(tagType$){
$init$TagType();
if(tagType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::TagType"),'?','?')
return tagType$;
}
TagType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getBlockTag,$prop$getEmptyTag],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TagType')];},d:['ceylon.html','TagType']};};
ex$.TagType=TagType;
function $init$TagType(){
if(TagType.$$===undefined){
m$1.initTypeProto(TagType,'ceylon.html::TagType',m$1.Basic);
}
return TagType;
}
ex$.$init$TagType=$init$TagType;
$init$TagType();
function $2ee(){
var blockTag$=new $2ee.$$;TagType(blockTag$);
return blockTag$;
};$2ee.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TagType},d:['ceylon.html','blockTag']};};
function $init$blockTag(){
if($2ee.$$===undefined){
m$1.initTypeProto($2ee,'ceylon.html::blockTag',$init$TagType());
}
return $2ee;
}
ex$.$init$blockTag=$init$blockTag;
$init$blockTag();
var $2eg;
function blockTag(){
if($2eg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'blockTag\' before it was set"),'5:0-8:42','Tag.ceylon');
if($2eg===undefined){$2eg=m$1.INIT$;$2eg=$init$blockTag()();$2eg.$crtmm$=blockTag.$crtmm$;}
return $2eg;
}
ex$.blockTag=blockTag;
blockTag.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$blockTag()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:blockTag'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Div)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','blockTag']};};
$prop$getBlockTag=blockTag;
ex$.$prop$getBlockTag=$prop$getBlockTag;
function $2eh(){
var emptyTag$=new $2eh.$$;TagType(emptyTag$);
return emptyTag$;
};$2eh.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TagType},d:['ceylon.html','emptyTag']};};
function $init$emptyTag(){
if($2eh.$$===undefined){
m$1.initTypeProto($2eh,'ceylon.html::emptyTag',$init$TagType());
}
return $2eh;
}
ex$.$init$emptyTag=$init$emptyTag;
$init$emptyTag();
var $2ej;
function emptyTag(){
if($2ej===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'emptyTag\' before it was set"),'10:0-13:42','Tag.ceylon');
if($2ej===undefined){$2ej=m$1.INIT$;$2ej=$init$emptyTag()();$2ej.$crtmm$=emptyTag.$crtmm$;}
return $2ej;
}
ex$.emptyTag=emptyTag;
emptyTag.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$emptyTag()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:emptyTag'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Meta)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','emptyTag']};};
$prop$getEmptyTag=emptyTag;
ex$.$prop$getEmptyTag=$prop$getEmptyTag;
function Tag(name,type,namespacePrefix,tag$){
$init$Tag();
if(tag$===undefined)tag$=new Tag.$$;
tag$.name_=name;
if(type===undefined){type=blockTag();}
tag$.type_=type;
if(namespacePrefix===undefined){namespacePrefix=null;}
tag$.namespacePrefix_=namespacePrefix;
return tag$;
}
Tag.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tag:$at:name')];}},{nm:'type',mt:'prm',def:1,$t:{t:TagType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tag:$at:type')];}},{nm:'namespacePrefix',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tag')];},d:['ceylon.html','Tag']};};
ex$.Tag=Tag;
function $init$Tag(){
if(Tag.$$===undefined){
m$1.initTypeProto(Tag,'ceylon.html::Tag',m$1.Basic);
(function(tag$){
m$1.atr$(tag$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Tag,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tag:$at:name')];},d:['ceylon.html','Tag','$at','name']};});
m$1.atr$(tag$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:TagType},$cont:Tag,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Tag:$at:type')];},d:['ceylon.html','Tag','$at','type']};});
m$1.atr$(tag$,'namespacePrefix',function(){return this.namespacePrefix_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Tag,pa:1,d:['ceylon.html','Tag','$at','namespacePrefix']};});
m$1.atr$(tag$,'string',function(){
var tag$=this;
return ($2ek=(m$1.nn$(tag$.namespacePrefix)?"".plus(($2el=tag$.namespacePrefix,m$1.nn$($2el)?$2el:"")).plus(":").plus(tag$.name).plus(""):null),m$1.nn$($2ek)?$2ek:tag$.name);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Tag,pa:3,d:['ceylon.html','Tag','$at','string']};});
})(Tag.$$.prototype);
}
return Tag;
}
ex$.$init$Tag=$init$Tag;
$init$Tag();
var $2ek,$2el;
function TextArea(text,$wgimgr$2em,rows,cols,maxLength,minLength,placeholder,wrap,$wgimgr$2en,$wgimgr$2eo,$wgimgr$2ep,$wgimgr$2eq,$wgimgr$2er,$wgimgr$2es,$wgimgr$2et,$wgimgr$2eu,$wgimgr$2ev,$wgimgr$2ew,$wgimgr$2ex,$wgimgr$2ey,$wgimgr$2ez,$wgimgr$2f0,$wgimgr$2f1,$wgimgr$2f2,$wgimgr$2f3,$wgimgr$2f4,$wgimgr$2f5,$wgimgr$2f6,$wgimgr$2f7,$wgimgr$2f8,$wgimgr$2f9,$wgimgr$2fa,textArea$){
$init$TextArea();
if(textArea$===undefined)textArea$=new TextArea.$$;
if(text===undefined){text="";}
textArea$.text_=text;
if($wgimgr$2em===undefined){$wgimgr$2em=null;}
textArea$.$wgimgr$2em_=$wgimgr$2em;
if(rows===undefined){rows=null;}
textArea$.rows_=rows;
if(cols===undefined){cols=null;}
textArea$.cols_=cols;
if(maxLength===undefined){maxLength=null;}
textArea$.maxLength_=maxLength;
if(minLength===undefined){minLength=null;}
textArea$.minLength_=minLength;
if(placeholder===undefined){placeholder=null;}
textArea$.placeholder_=placeholder;
if(wrap===undefined){wrap=null;}
textArea$.wrap_=wrap;
if($wgimgr$2en===undefined){$wgimgr$2en=null;}
textArea$.$wgimgr$2en_=$wgimgr$2en;
if($wgimgr$2eo===undefined){$wgimgr$2eo=null;}
textArea$.$wgimgr$2eo_=$wgimgr$2eo;
if($wgimgr$2ep===undefined){$wgimgr$2ep=null;}
textArea$.$wgimgr$2ep_=$wgimgr$2ep;
if($wgimgr$2eq===undefined){$wgimgr$2eq=null;}
textArea$.$wgimgr$2eq_=$wgimgr$2eq;
if($wgimgr$2er===undefined){$wgimgr$2er=null;}
textArea$.$wgimgr$2er_=$wgimgr$2er;
if($wgimgr$2es===undefined){$wgimgr$2es=null;}
textArea$.$wgimgr$2es_=$wgimgr$2es;
if($wgimgr$2et===undefined){$wgimgr$2et=null;}
textArea$.$wgimgr$2et_=$wgimgr$2et;
if($wgimgr$2eu===undefined){$wgimgr$2eu=m$1.empty();}
textArea$.$wgimgr$2eu_=$wgimgr$2eu;
if($wgimgr$2ev===undefined){$wgimgr$2ev=null;}
textArea$.$wgimgr$2ev_=$wgimgr$2ev;
if($wgimgr$2ew===undefined){$wgimgr$2ew=null;}
textArea$.$wgimgr$2ew_=$wgimgr$2ew;
if($wgimgr$2ex===undefined){$wgimgr$2ex=null;}
textArea$.$wgimgr$2ex_=$wgimgr$2ex;
if($wgimgr$2ey===undefined){$wgimgr$2ey=null;}
textArea$.$wgimgr$2ey_=$wgimgr$2ey;
if($wgimgr$2ez===undefined){$wgimgr$2ez=null;}
textArea$.$wgimgr$2ez_=$wgimgr$2ez;
if($wgimgr$2f0===undefined){$wgimgr$2f0=null;}
textArea$.$wgimgr$2f0_=$wgimgr$2f0;
if($wgimgr$2f1===undefined){$wgimgr$2f1=null;}
textArea$.$wgimgr$2f1_=$wgimgr$2f1;
if($wgimgr$2f2===undefined){$wgimgr$2f2=null;}
textArea$.$wgimgr$2f2_=$wgimgr$2f2;
if($wgimgr$2f3===undefined){$wgimgr$2f3=null;}
textArea$.$wgimgr$2f3_=$wgimgr$2f3;
if($wgimgr$2f4===undefined){$wgimgr$2f4=null;}
textArea$.$wgimgr$2f4_=$wgimgr$2f4;
if($wgimgr$2f5===undefined){$wgimgr$2f5=null;}
textArea$.$wgimgr$2f5_=$wgimgr$2f5;
if($wgimgr$2f6===undefined){$wgimgr$2f6=null;}
textArea$.$wgimgr$2f6_=$wgimgr$2f6;
if($wgimgr$2f7===undefined){$wgimgr$2f7=null;}
textArea$.$wgimgr$2f7_=$wgimgr$2f7;
if($wgimgr$2f8===undefined){$wgimgr$2f8=null;}
textArea$.$wgimgr$2f8_=$wgimgr$2f8;
if($wgimgr$2f9===undefined){$wgimgr$2f9=m$1.empty();}
textArea$.$wgimgr$2f9_=$wgimgr$2f9;
if($wgimgr$2fa===undefined){$wgimgr$2fa=m$1.empty();}
textArea$.$wgimgr$2fa_=$wgimgr$2fa;
InlineElement(textArea$);
TextNode(textArea$);
FormElement($wgimgr$2em,$wgimgr$2en,$wgimgr$2eo,$wgimgr$2ep,$wgimgr$2eq,$wgimgr$2er,$wgimgr$2es,null,$wgimgr$2et,$wgimgr$2eu,$wgimgr$2ev,$wgimgr$2ew,$wgimgr$2ex,$wgimgr$2ey,$wgimgr$2ez,$wgimgr$2f0,$wgimgr$2f1,$wgimgr$2f2,$wgimgr$2f3,$wgimgr$2f4,$wgimgr$2f5,$wgimgr$2f6,$wgimgr$2f7,$wgimgr$2f8,$wgimgr$2f9,$wgimgr$2fa,textArea$);
var $2fb;
if(m$1.nn$(($2fb=textArea$.wrap))&&$2fb.equals(hard())){
var $2fc;
m$1.asrt$((m$1.nn$(($2fc=textArea$.cols))),"The number of columns must be specified when wrap mode is `hard`: \'exists cols\' at TextArea.ceylon (55:15-55:27)",'54:8-55:28','TextArea.ceylon');
}
textArea$.tag_=Tag("textarea");
return textArea$;
}
TextArea.$crtmm$=function(){return{mod:$CCMM$,'super':{t:FormElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'name',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'rows',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:rows')];}},{nm:'cols',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:cols')];}},{nm:'maxLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:maxLength')];}},{nm:'minLength',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:minLength')];}},{nm:'placeholder',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:placeholder')];}},{nm:'wrap',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextAreaWrap}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:wrap')];}},{nm:'autoFocus',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'disabled',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'formNoValidate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'readOnly',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'required',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()}],sts:[{t:InlineElement},{t:TextNode}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea')];},d:['ceylon.html','TextArea']};};
ex$.TextArea=TextArea;
function $init$TextArea(){
if(TextArea.$$===undefined){
m$1.initTypeProto(TextArea,'ceylon.html::TextArea',$init$InlineElement(),$init$TextNode(),$init$FormElement());
(function(textArea$){
m$1.atr$(textArea$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TextArea,pa:3,d:['ceylon.html','TextArea','$at','text']};});
m$1.atr$(textArea$,'$wgimgr$2em',function(){return this.$wgimgr$2em_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','name$f1n2ug']};});
m$1.atr$(textArea$,'rows',function(){return this.rows_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:rows')];},d:['ceylon.html','TextArea','$at','rows']};});
m$1.atr$(textArea$,'cols',function(){return this.cols_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:cols')];},d:['ceylon.html','TextArea','$at','cols']};});
m$1.atr$(textArea$,'maxLength',function(){return this.maxLength_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:maxLength')];},d:['ceylon.html','TextArea','$at','maxLength']};});
m$1.atr$(textArea$,'minLength',function(){return this.minLength_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:minLength')];},d:['ceylon.html','TextArea','$at','minLength']};});
m$1.atr$(textArea$,'placeholder',function(){return this.placeholder_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:placeholder')];},d:['ceylon.html','TextArea','$at','placeholder']};});
m$1.atr$(textArea$,'wrap',function(){return this.wrap_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextAreaWrap}]},$cont:TextArea,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextArea:$at:wrap')];},d:['ceylon.html','TextArea','$at','wrap']};});
m$1.atr$(textArea$,'$wgimgr$2en',function(){return this.$wgimgr$2en_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','autoFocus$id5w7q']};});
m$1.atr$(textArea$,'$wgimgr$2eo',function(){return this.$wgimgr$2eo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','disabled$zc8mb5']};});
m$1.atr$(textArea$,'$wgimgr$2ep',function(){return this.$wgimgr$2ep_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','form$9yhiih']};});
m$1.atr$(textArea$,'$wgimgr$2eq',function(){return this.$wgimgr$2eq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','formNoValidate$qrfnc']};});
m$1.atr$(textArea$,'$wgimgr$2er',function(){return this.$wgimgr$2er_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','readOnly$usk7q1']};});
m$1.atr$(textArea$,'$wgimgr$2es',function(){return this.$wgimgr$2es_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','required$cexjvo']};});
m$1.atr$(textArea$,'$wgimgr$2et',function(){return this.$wgimgr$2et_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','id$9rougo']};});
m$1.atr$(textArea$,'$wgimgr$2eu',function(){return this.$wgimgr$2eu_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:TextArea,d:['ceylon.html','TextArea','$at','classNames$u6mqrp']};});
m$1.atr$(textArea$,'$wgimgr$2ev',function(){return this.$wgimgr$2ev_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','style$94f8m6']};});
m$1.atr$(textArea$,'$wgimgr$2ew',function(){return this.$wgimgr$2ew_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','accessKey$1zpnd4']};});
m$1.atr$(textArea$,'$wgimgr$2ex',function(){return this.$wgimgr$2ex_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','contextMenu$k6jh3n']};});
m$1.atr$(textArea$,'$wgimgr$2ey',function(){return this.$wgimgr$2ey_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','dir$by12ai']};});
m$1.atr$(textArea$,'$wgimgr$2ez',function(){return this.$wgimgr$2ez_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','draggable$60hfiy']};});
m$1.atr$(textArea$,'$wgimgr$2f0',function(){return this.$wgimgr$2f0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','dropZone$n0bwbc']};});
m$1.atr$(textArea$,'$wgimgr$2f1',function(){return this.$wgimgr$2f1_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','inert$8n92uf']};});
m$1.atr$(textArea$,'$wgimgr$2f2',function(){return this.$wgimgr$2f2_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','hidden$4uic4v']};});
m$1.atr$(textArea$,'$wgimgr$2f3',function(){return this.$wgimgr$2f3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','lang$dp3rmb']};});
m$1.atr$(textArea$,'$wgimgr$2f4',function(){return this.$wgimgr$2f4_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','spellcheck$32m79n']};});
m$1.atr$(textArea$,'$wgimgr$2f5',function(){return this.$wgimgr$2f5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','tabIndex$yt9aeu']};});
m$1.atr$(textArea$,'$wgimgr$2f6',function(){return this.$wgimgr$2f6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','title$mi51t9']};});
m$1.atr$(textArea$,'$wgimgr$2f7',function(){return this.$wgimgr$2f7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','translate$jrxtsd']};});
m$1.atr$(textArea$,'$wgimgr$2f8',function(){return this.$wgimgr$2f8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:TextArea,d:['ceylon.html','TextArea','$at','aria$6n6vau']};});
m$1.atr$(textArea$,'$wgimgr$2f9',function(){return this.$wgimgr$2f9_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:TextArea,d:['ceylon.html','TextArea','$at','nonstandardAttributes$c2waj6']};});
m$1.atr$(textArea$,'$wgimgr$2fa',function(){return this.$wgimgr$2fa_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:TextArea,d:['ceylon.html','TextArea','$at','data$8azxf3']};});
m$1.atr$(textArea$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:TextArea,pa:3,d:['ceylon.html','TextArea','$at','tag']};});
m$1.atr$(textArea$,'attributes',function(){
var textArea$=this;
var $2fd=AttributeSequenceBuilder();
$2fd.addAttribute("rows",textArea$.rows);
$2fd.addAttribute("cols",textArea$.cols);
$2fd.addAttribute("maxlength",textArea$.maxLength);
$2fd.addAttribute("minlength",textArea$.minLength);
$2fd.addAttribute("placeholder",textArea$.placeholder);
$2fd.addAttribute("wrap",textArea$.wrap);
$2fd.addAll(m$1.attrGetter(textArea$.getT$all()['ceylon.html::FormElement'],'attributes').call(this));
return $2fd.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Object},Key$Entry:{t:m$1.$_String}}}}},$cont:TextArea,pa:11,d:['ceylon.html','TextArea','$at','attributes']};});
})(TextArea.$$.prototype);
}
return TextArea;
}
ex$.$init$TextArea=$init$TextArea;
$init$TextArea();
function TextAreaWrap($wgimgr$2fe,textAreaWrap$){
$init$TextAreaWrap();
if(textAreaWrap$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.html::TextAreaWrap"),'?','?')
textAreaWrap$.$wgimgr$2fe_=$wgimgr$2fe;
return textAreaWrap$;
}
TextAreaWrap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'mode',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getHard,$prop$getSoft],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:TextAreaWrap')];},d:['ceylon.html','TextAreaWrap']};};
ex$.TextAreaWrap=TextAreaWrap;
function $init$TextAreaWrap(){
if(TextAreaWrap.$$===undefined){
m$1.initTypeProto(TextAreaWrap,'ceylon.html::TextAreaWrap',m$1.Basic);
(function(textAreaWrap$){
m$1.atr$(textAreaWrap$,'$wgimgr$2fe',function(){return this.$wgimgr$2fe_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TextAreaWrap,d:['ceylon.html','TextAreaWrap','$at','mode$coyu2i']};});
m$1.atr$(textAreaWrap$,'string',function(){
var textAreaWrap$=this;
return textAreaWrap$.$wgimgr$2fe;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TextAreaWrap,pa:3,d:['ceylon.html','TextAreaWrap','$at','string']};});
})(TextAreaWrap.$$.prototype);
}
return TextAreaWrap;
}
ex$.$init$TextAreaWrap=$init$TextAreaWrap;
$init$TextAreaWrap();
function $2ff(){
var hard$=new $2ff.$$;TextAreaWrap("hard",hard$);
return hard$;
};$2ff.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextAreaWrap},d:['ceylon.html','hard']};};
function $init$hard(){
if($2ff.$$===undefined){
m$1.initTypeProto($2ff,'ceylon.html::hard',$init$TextAreaWrap());
}
return $2ff;
}
ex$.$init$hard=$init$hard;
$init$hard();
var $2fh;
function hard(){
if($2fh===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hard\' before it was set"),'88:0-91:49','TextArea.ceylon');
if($2fh===undefined){$2fh=m$1.INIT$;$2fh=$init$hard()();$2fh.$crtmm$=hard.$crtmm$;}
return $2fh;
}
ex$.hard=hard;
hard.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$hard()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:hard')];},d:['ceylon.html','hard']};};
$prop$getHard=hard;
ex$.$prop$getHard=$prop$getHard;
function $2fi(){
var soft$=new $2fi.$$;TextAreaWrap("soft",soft$);
return soft$;
};$2fi.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextAreaWrap},d:['ceylon.html','soft']};};
function $init$soft(){
if($2fi.$$===undefined){
m$1.initTypeProto($2fi,'ceylon.html::soft',$init$TextAreaWrap());
}
return $2fi;
}
ex$.$init$soft=$init$soft;
$init$soft();
var $2fk;
function soft(){
if($2fk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'soft\' before it was set"),'93:0-96:49','TextArea.ceylon');
if($2fk===undefined){$2fk=m$1.INIT$;$2fk=$init$soft()();$2fk.$crtmm$=soft.$crtmm$;}
return $2fk;
}
ex$.soft=soft;
soft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$soft()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:soft')];},d:['ceylon.html','soft']};};
$prop$getSoft=soft;
ex$.$prop$getSoft=$prop$getSoft;
function Abbr(text,$wgimgr$2fl,$wgimgr$2fm,$wgimgr$2fn,$wgimgr$2fo,$wgimgr$2fp,$wgimgr$2fq,$wgimgr$2fr,$wgimgr$2fs,$wgimgr$2ft,$wgimgr$2fu,$wgimgr$2fv,$wgimgr$2fw,$wgimgr$2fx,$wgimgr$2fy,$wgimgr$2fz,$wgimgr$2g0,$wgimgr$2g1,$wgimgr$2g2,children,abbr$){
$init$Abbr();
if(abbr$===undefined)abbr$=new Abbr.$$;
abbr$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
abbr$.text_=text;
if($wgimgr$2fl===undefined){$wgimgr$2fl=null;}
abbr$.$wgimgr$2fl_=$wgimgr$2fl;
if($wgimgr$2fm===undefined){$wgimgr$2fm=m$1.empty();}
abbr$.$wgimgr$2fm_=$wgimgr$2fm;
if($wgimgr$2fn===undefined){$wgimgr$2fn=null;}
abbr$.$wgimgr$2fn_=$wgimgr$2fn;
if($wgimgr$2fo===undefined){$wgimgr$2fo=null;}
abbr$.$wgimgr$2fo_=$wgimgr$2fo;
if($wgimgr$2fp===undefined){$wgimgr$2fp=null;}
abbr$.$wgimgr$2fp_=$wgimgr$2fp;
if($wgimgr$2fq===undefined){$wgimgr$2fq=null;}
abbr$.$wgimgr$2fq_=$wgimgr$2fq;
if($wgimgr$2fr===undefined){$wgimgr$2fr=null;}
abbr$.$wgimgr$2fr_=$wgimgr$2fr;
if($wgimgr$2fs===undefined){$wgimgr$2fs=null;}
abbr$.$wgimgr$2fs_=$wgimgr$2fs;
if($wgimgr$2ft===undefined){$wgimgr$2ft=null;}
abbr$.$wgimgr$2ft_=$wgimgr$2ft;
if($wgimgr$2fu===undefined){$wgimgr$2fu=null;}
abbr$.$wgimgr$2fu_=$wgimgr$2fu;
if($wgimgr$2fv===undefined){$wgimgr$2fv=null;}
abbr$.$wgimgr$2fv_=$wgimgr$2fv;
if($wgimgr$2fw===undefined){$wgimgr$2fw=null;}
abbr$.$wgimgr$2fw_=$wgimgr$2fw;
if($wgimgr$2fx===undefined){$wgimgr$2fx=null;}
abbr$.$wgimgr$2fx_=$wgimgr$2fx;
if($wgimgr$2fy===undefined){$wgimgr$2fy=null;}
abbr$.$wgimgr$2fy_=$wgimgr$2fy;
if($wgimgr$2fz===undefined){$wgimgr$2fz=null;}
abbr$.$wgimgr$2fz_=$wgimgr$2fz;
if($wgimgr$2g0===undefined){$wgimgr$2g0=null;}
abbr$.$wgimgr$2g0_=$wgimgr$2g0;
if($wgimgr$2g1===undefined){$wgimgr$2g1=m$1.empty();}
abbr$.$wgimgr$2g1_=$wgimgr$2g1;
if($wgimgr$2g2===undefined){$wgimgr$2g2=m$1.empty();}
abbr$.$wgimgr$2g2_=$wgimgr$2g2;
if(children===undefined){children=m$1.empty();}
abbr$.children_=children;
TextNode(abbr$);
InlineElement(abbr$);
ParentNode({Child$ParentNode:{t:InlineElement}},abbr$);
BaseElement($wgimgr$2fl,$wgimgr$2fm,$wgimgr$2fn,$wgimgr$2fo,$wgimgr$2fp,$wgimgr$2fq,$wgimgr$2fr,$wgimgr$2fs,$wgimgr$2ft,$wgimgr$2fu,$wgimgr$2fv,$wgimgr$2fw,$wgimgr$2fx,$wgimgr$2fy,$wgimgr$2fz,$wgimgr$2g0,$wgimgr$2g1,$wgimgr$2g2,abbr$);
abbr$.tag_=Tag("abbr");
return abbr$;
}
Abbr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Abbr')];},d:['ceylon.html','Abbr']};};
ex$.Abbr=Abbr;
function $init$Abbr(){
if(Abbr.$$===undefined){
m$1.initTypeProto(Abbr,'ceylon.html::Abbr',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(abbr$){
m$1.atr$(abbr$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Abbr,pa:3,d:['ceylon.html','Abbr','$at','text']};});
m$1.atr$(abbr$,'$wgimgr$2fl',function(){return this.$wgimgr$2fl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','id$j2718n']};});
m$1.atr$(abbr$,'$wgimgr$2fm',function(){return this.$wgimgr$2fm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Abbr,d:['ceylon.html','Abbr','$at','classNames$vjz4fg']};});
m$1.atr$(abbr$,'$wgimgr$2fn',function(){return this.$wgimgr$2fn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','style$iexfe5']};});
m$1.atr$(abbr$,'$wgimgr$2fo',function(){return this.$wgimgr$2fo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','accessKey$7asjev']};});
m$1.atr$(abbr$,'$wgimgr$2fp',function(){return this.$wgimgr$2fp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','contextMenu$th1nvm']};});
m$1.atr$(abbr$,'$wgimgr$2fq',function(){return this.$wgimgr$2fq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','dir$l8j92h']};});
m$1.atr$(abbr$,'$wgimgr$2fr',function(){return this.$wgimgr$2fr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','draggable$fazmax']};});
m$1.atr$(abbr$,'$wgimgr$2fs',function(){return this.$wgimgr$2fs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','dropZone$wau33b']};});
m$1.atr$(abbr$,'$wgimgr$2ft',function(){return this.$wgimgr$2ft_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','inert$hxr9me']};});
m$1.atr$(abbr$,'$wgimgr$2fu',function(){return this.$wgimgr$2fu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','hidden$e50iwu']};});
m$1.atr$(abbr$,'$wgimgr$2fv',function(){return this.$wgimgr$2fv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','lang$mzlyea']};});
m$1.atr$(abbr$,'$wgimgr$2fw',function(){return this.$wgimgr$2fw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','spellcheck$67vzic']};});
m$1.atr$(abbr$,'$wgimgr$2fx',function(){return this.$wgimgr$2fx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','tabIndex$pir3mv']};});
m$1.atr$(abbr$,'$wgimgr$2fy',function(){return this.$wgimgr$2fy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','title$vsn8l8']};});
m$1.atr$(abbr$,'$wgimgr$2fz',function(){return this.$wgimgr$2fz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','translate$ahfn0e']};});
m$1.atr$(abbr$,'$wgimgr$2g0',function(){return this.$wgimgr$2g0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Abbr,d:['ceylon.html','Abbr','$at','aria$fxp22t']};});
m$1.atr$(abbr$,'$wgimgr$2g1',function(){return this.$wgimgr$2g1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Abbr,d:['ceylon.html','Abbr','$at','nonstandardAttributes$2se3r7']};});
m$1.atr$(abbr$,'$wgimgr$2g2',function(){return this.$wgimgr$2g2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Abbr,d:['ceylon.html','Abbr','$at','data$hli472']};});
m$1.atr$(abbr$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Abbr,pa:3,d:['ceylon.html','Abbr','$at','children']};});
m$1.atr$(abbr$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Abbr,pa:3,d:['ceylon.html','Abbr','$at','tag']};});
})(Abbr.$$.prototype);
}
return Abbr;
}
ex$.$init$Abbr=$init$Abbr;
$init$Abbr();
function B(text,$wgimgr$2g3,$wgimgr$2g4,$wgimgr$2g5,$wgimgr$2g6,$wgimgr$2g7,$wgimgr$2g8,$wgimgr$2g9,$wgimgr$2ga,$wgimgr$2gb,$wgimgr$2gc,$wgimgr$2gd,$wgimgr$2ge,$wgimgr$2gf,$wgimgr$2gg,$wgimgr$2gh,$wgimgr$2gi,$wgimgr$2gj,$wgimgr$2gk,children,b$){
$init$B();
if(b$===undefined)b$=new B.$$;
b$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
b$.text_=text;
if($wgimgr$2g3===undefined){$wgimgr$2g3=null;}
b$.$wgimgr$2g3_=$wgimgr$2g3;
if($wgimgr$2g4===undefined){$wgimgr$2g4=m$1.empty();}
b$.$wgimgr$2g4_=$wgimgr$2g4;
if($wgimgr$2g5===undefined){$wgimgr$2g5=null;}
b$.$wgimgr$2g5_=$wgimgr$2g5;
if($wgimgr$2g6===undefined){$wgimgr$2g6=null;}
b$.$wgimgr$2g6_=$wgimgr$2g6;
if($wgimgr$2g7===undefined){$wgimgr$2g7=null;}
b$.$wgimgr$2g7_=$wgimgr$2g7;
if($wgimgr$2g8===undefined){$wgimgr$2g8=null;}
b$.$wgimgr$2g8_=$wgimgr$2g8;
if($wgimgr$2g9===undefined){$wgimgr$2g9=null;}
b$.$wgimgr$2g9_=$wgimgr$2g9;
if($wgimgr$2ga===undefined){$wgimgr$2ga=null;}
b$.$wgimgr$2ga_=$wgimgr$2ga;
if($wgimgr$2gb===undefined){$wgimgr$2gb=null;}
b$.$wgimgr$2gb_=$wgimgr$2gb;
if($wgimgr$2gc===undefined){$wgimgr$2gc=null;}
b$.$wgimgr$2gc_=$wgimgr$2gc;
if($wgimgr$2gd===undefined){$wgimgr$2gd=null;}
b$.$wgimgr$2gd_=$wgimgr$2gd;
if($wgimgr$2ge===undefined){$wgimgr$2ge=null;}
b$.$wgimgr$2ge_=$wgimgr$2ge;
if($wgimgr$2gf===undefined){$wgimgr$2gf=null;}
b$.$wgimgr$2gf_=$wgimgr$2gf;
if($wgimgr$2gg===undefined){$wgimgr$2gg=null;}
b$.$wgimgr$2gg_=$wgimgr$2gg;
if($wgimgr$2gh===undefined){$wgimgr$2gh=null;}
b$.$wgimgr$2gh_=$wgimgr$2gh;
if($wgimgr$2gi===undefined){$wgimgr$2gi=null;}
b$.$wgimgr$2gi_=$wgimgr$2gi;
if($wgimgr$2gj===undefined){$wgimgr$2gj=m$1.empty();}
b$.$wgimgr$2gj_=$wgimgr$2gj;
if($wgimgr$2gk===undefined){$wgimgr$2gk=m$1.empty();}
b$.$wgimgr$2gk_=$wgimgr$2gk;
if(children===undefined){children=m$1.empty();}
b$.children_=children;
TextNode(b$);
InlineElement(b$);
ParentNode({Child$ParentNode:{t:InlineElement}},b$);
BaseElement($wgimgr$2g3,$wgimgr$2g4,$wgimgr$2g5,$wgimgr$2g6,$wgimgr$2g7,$wgimgr$2g8,$wgimgr$2g9,$wgimgr$2ga,$wgimgr$2gb,$wgimgr$2gc,$wgimgr$2gd,$wgimgr$2ge,$wgimgr$2gf,$wgimgr$2gg,$wgimgr$2gh,$wgimgr$2gi,$wgimgr$2gj,$wgimgr$2gk,b$);
b$.tag_=Tag("b");
return b$;
}
B.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:B')];},d:['ceylon.html','B']};};
ex$.B=B;
function $init$B(){
if(B.$$===undefined){
m$1.initTypeProto(B,'ceylon.html::B',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(b$){
m$1.atr$(b$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:B,pa:3,d:['ceylon.html','B','$at','text']};});
m$1.atr$(b$,'$wgimgr$2g3',function(){return this.$wgimgr$2g3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','id$ol20g0']};});
m$1.atr$(b$,'$wgimgr$2g4',function(){return this.$wgimgr$2g4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:B,d:['ceylon.html','B','$at','classNames$46444z']};});
m$1.atr$(b$,'$wgimgr$2g5',function(){return this.$wgimgr$2g5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','style$p8bmai']};});
m$1.atr$(b$,'$wgimgr$2g6',function(){return this.$wgimgr$2g6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','accessKey$yonjpc']};});
m$1.atr$(b$,'$wgimgr$2g7',function(){return this.$wgimgr$2g7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','contextMenu$e67dt1']};});
m$1.atr$(b$,'$wgimgr$2g8',function(){return this.$wgimgr$2g8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:B,d:['ceylon.html','B','$at','dir$mepsm6']};});
m$1.atr$(b$,'$wgimgr$2g9',function(){return this.$wgimgr$2g9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:B,d:['ceylon.html','B','$at','draggable$sc9fdq']};});
m$1.atr$(b$,'$wgimgr$2ga',function(){return this.$wgimgr$2ga_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:B,d:['ceylon.html','B','$at','dropZone$bceylc']};});
m$1.atr$(b$,'$wgimgr$2gb',function(){return this.$wgimgr$2gb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:B,d:['ceylon.html','B','$at','inert$pphs29']};});
m$1.atr$(b$,'$wgimgr$2gc',function(){return this.$wgimgr$2gc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:B,d:['ceylon.html','B','$at','hidden$ti8irt']};});
m$1.atr$(b$,'$wgimgr$2gd',function(){return this.$wgimgr$2gd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','lang$knn3ad']};});
m$1.atr$(b$,'$wgimgr$2ge',function(){return this.$wgimgr$2ge_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:B,d:['ceylon.html','B','$at','spellcheck$xlqzst']};});
m$1.atr$(b$,'$wgimgr$2gf',function(){return this.$wgimgr$2gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:B,d:['ceylon.html','B','$at','tabIndex$1v3wnm']};});
m$1.atr$(b$,'$wgimgr$2gg',function(){return this.$wgimgr$2gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:B,d:['ceylon.html','B','$at','title$bult3f']};});
m$1.atr$(b$,'$wgimgr$2gh',function(){return this.$wgimgr$2gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:B,d:['ceylon.html','B','$at','translate$gwfda3']};});
m$1.atr$(b$,'$wgimgr$2gi',function(){return this.$wgimgr$2gi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:B,d:['ceylon.html','B','$at','aria$rpjzlu']};});
m$1.atr$(b$,'$wgimgr$2gj',function(){return this.$wgimgr$2gj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:B,d:['ceylon.html','B','$at','nonstandardAttributes$olgwja']};});
m$1.atr$(b$,'$wgimgr$2gk',function(){return this.$wgimgr$2gk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:B,d:['ceylon.html','B','$at','data$q1qxhl']};});
m$1.atr$(b$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:B,pa:3,d:['ceylon.html','B','$at','children']};});
m$1.atr$(b$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:B,pa:3,d:['ceylon.html','B','$at','tag']};});
})(B.$$.prototype);
}
return B;
}
ex$.$init$B=$init$B;
$init$B();
function Cite(text,$wgimgr$2gl,$wgimgr$2gm,$wgimgr$2gn,$wgimgr$2go,$wgimgr$2gp,$wgimgr$2gq,$wgimgr$2gr,$wgimgr$2gs,$wgimgr$2gt,$wgimgr$2gu,$wgimgr$2gv,$wgimgr$2gw,$wgimgr$2gx,$wgimgr$2gy,$wgimgr$2gz,$wgimgr$2h0,$wgimgr$2h1,$wgimgr$2h2,children,cite$){
$init$Cite();
if(cite$===undefined)cite$=new Cite.$$;
cite$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
cite$.text_=text;
if($wgimgr$2gl===undefined){$wgimgr$2gl=null;}
cite$.$wgimgr$2gl_=$wgimgr$2gl;
if($wgimgr$2gm===undefined){$wgimgr$2gm=m$1.empty();}
cite$.$wgimgr$2gm_=$wgimgr$2gm;
if($wgimgr$2gn===undefined){$wgimgr$2gn=null;}
cite$.$wgimgr$2gn_=$wgimgr$2gn;
if($wgimgr$2go===undefined){$wgimgr$2go=null;}
cite$.$wgimgr$2go_=$wgimgr$2go;
if($wgimgr$2gp===undefined){$wgimgr$2gp=null;}
cite$.$wgimgr$2gp_=$wgimgr$2gp;
if($wgimgr$2gq===undefined){$wgimgr$2gq=null;}
cite$.$wgimgr$2gq_=$wgimgr$2gq;
if($wgimgr$2gr===undefined){$wgimgr$2gr=null;}
cite$.$wgimgr$2gr_=$wgimgr$2gr;
if($wgimgr$2gs===undefined){$wgimgr$2gs=null;}
cite$.$wgimgr$2gs_=$wgimgr$2gs;
if($wgimgr$2gt===undefined){$wgimgr$2gt=null;}
cite$.$wgimgr$2gt_=$wgimgr$2gt;
if($wgimgr$2gu===undefined){$wgimgr$2gu=null;}
cite$.$wgimgr$2gu_=$wgimgr$2gu;
if($wgimgr$2gv===undefined){$wgimgr$2gv=null;}
cite$.$wgimgr$2gv_=$wgimgr$2gv;
if($wgimgr$2gw===undefined){$wgimgr$2gw=null;}
cite$.$wgimgr$2gw_=$wgimgr$2gw;
if($wgimgr$2gx===undefined){$wgimgr$2gx=null;}
cite$.$wgimgr$2gx_=$wgimgr$2gx;
if($wgimgr$2gy===undefined){$wgimgr$2gy=null;}
cite$.$wgimgr$2gy_=$wgimgr$2gy;
if($wgimgr$2gz===undefined){$wgimgr$2gz=null;}
cite$.$wgimgr$2gz_=$wgimgr$2gz;
if($wgimgr$2h0===undefined){$wgimgr$2h0=null;}
cite$.$wgimgr$2h0_=$wgimgr$2h0;
if($wgimgr$2h1===undefined){$wgimgr$2h1=m$1.empty();}
cite$.$wgimgr$2h1_=$wgimgr$2h1;
if($wgimgr$2h2===undefined){$wgimgr$2h2=m$1.empty();}
cite$.$wgimgr$2h2_=$wgimgr$2h2;
if(children===undefined){children=m$1.empty();}
cite$.children_=children;
TextNode(cite$);
InlineElement(cite$);
ParentNode({Child$ParentNode:{t:InlineElement}},cite$);
BaseElement($wgimgr$2gl,$wgimgr$2gm,$wgimgr$2gn,$wgimgr$2go,$wgimgr$2gp,$wgimgr$2gq,$wgimgr$2gr,$wgimgr$2gs,$wgimgr$2gt,$wgimgr$2gu,$wgimgr$2gv,$wgimgr$2gw,$wgimgr$2gx,$wgimgr$2gy,$wgimgr$2gz,$wgimgr$2h0,$wgimgr$2h1,$wgimgr$2h2,cite$);
cite$.tag_=Tag("cite");
return cite$;
}
Cite.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Cite')];},d:['ceylon.html','Cite']};};
ex$.Cite=Cite;
function $init$Cite(){
if(Cite.$$===undefined){
m$1.initTypeProto(Cite,'ceylon.html::Cite',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(cite$){
m$1.atr$(cite$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Cite,pa:3,d:['ceylon.html','Cite','$at','text']};});
m$1.atr$(cite$,'$wgimgr$2gl',function(){return this.$wgimgr$2gl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','id$z0eh99']};});
m$1.atr$(cite$,'$wgimgr$2gm',function(){return this.$wgimgr$2gm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Cite,d:['ceylon.html','Cite','$at','classNames$flroeu']};});
m$1.atr$(cite$,'$wgimgr$2gn',function(){return this.$wgimgr$2gn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','style$yd4ver']};});
m$1.atr$(cite$,'$wgimgr$2go',function(){return this.$wgimgr$2go_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','accessKey$n8zzfh']};});
m$1.atr$(cite$,'$wgimgr$2gp',function(){return this.$wgimgr$2gp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','contextMenu$pluy2w']};});
m$1.atr$(cite$,'$wgimgr$2gq',function(){return this.$wgimgr$2gq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Cite,d:['ceylon.html','Cite','$at','dir$xudcw1']};});
m$1.atr$(cite$,'$wgimgr$2gr',function(){return this.$wgimgr$2gr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Cite,d:['ceylon.html','Cite','$at','draggable$v972bj']};});
m$1.atr$(cite$,'$wgimgr$2gs',function(){return this.$wgimgr$2gs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Cite,d:['ceylon.html','Cite','$at','dropZone$ms2iv7']};});
m$1.atr$(cite$,'$wgimgr$2gt',function(){return this.$wgimgr$2gt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Cite,d:['ceylon.html','Cite','$at','inert$xvypn0']};});
m$1.atr$(cite$,'$wgimgr$2gu',function(){return this.$wgimgr$2gu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Cite,d:['ceylon.html','Cite','$at','hidden$u37yxg']};});
m$1.atr$(cite$,'$wgimgr$2gv',function(){return this.$wgimgr$2gv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','lang$w3ank8']};});
m$1.atr$(cite$,'$wgimgr$2gw',function(){return this.$wgimgr$2gw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Cite,d:['ceylon.html','Cite','$at','spellcheck$m63fiy']};});
m$1.atr$(cite$,'$wgimgr$2gx',function(){return this.$wgimgr$2gx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Cite,d:['ceylon.html','Cite','$at','tabIndex$9kjnm9']};});
m$1.atr$(cite$,'$wgimgr$2gy',function(){return this.$wgimgr$2gy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Cite,d:['ceylon.html','Cite','$at','title$na9dda']};});
m$1.atr$(cite$,'$wgimgr$2gz',function(){return this.$wgimgr$2gz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Cite,d:['ceylon.html','Cite','$at','translate$5grt08']};});
m$1.atr$(cite$,'$wgimgr$2h0',function(){return this.$wgimgr$2h0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Cite,d:['ceylon.html','Cite','$at','aria$vvwi3f']};});
m$1.atr$(cite$,'$wgimgr$2h1',function(){return this.$wgimgr$2h1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Cite,d:['ceylon.html','Cite','$at','nonstandardAttributes$d5tc9f']};});
m$1.atr$(cite$,'$wgimgr$2h2',function(){return this.$wgimgr$2h2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Cite,d:['ceylon.html','Cite','$at','data$xjpk7o']};});
m$1.atr$(cite$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Cite,pa:3,d:['ceylon.html','Cite','$at','children']};});
m$1.atr$(cite$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Cite,pa:3,d:['ceylon.html','Cite','$at','tag']};});
})(Cite.$$.prototype);
}
return Cite;
}
ex$.$init$Cite=$init$Cite;
$init$Cite();
function Code(text,$wgimgr$2h3,$wgimgr$2h4,$wgimgr$2h5,$wgimgr$2h6,$wgimgr$2h7,$wgimgr$2h8,$wgimgr$2h9,$wgimgr$2ha,$wgimgr$2hb,$wgimgr$2hc,$wgimgr$2hd,$wgimgr$2he,$wgimgr$2hf,$wgimgr$2hg,$wgimgr$2hh,$wgimgr$2hi,$wgimgr$2hj,$wgimgr$2hk,children,code$){
$init$Code();
if(code$===undefined)code$=new Code.$$;
code$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
code$.text_=text;
if($wgimgr$2h3===undefined){$wgimgr$2h3=null;}
code$.$wgimgr$2h3_=$wgimgr$2h3;
if($wgimgr$2h4===undefined){$wgimgr$2h4=m$1.empty();}
code$.$wgimgr$2h4_=$wgimgr$2h4;
if($wgimgr$2h5===undefined){$wgimgr$2h5=null;}
code$.$wgimgr$2h5_=$wgimgr$2h5;
if($wgimgr$2h6===undefined){$wgimgr$2h6=null;}
code$.$wgimgr$2h6_=$wgimgr$2h6;
if($wgimgr$2h7===undefined){$wgimgr$2h7=null;}
code$.$wgimgr$2h7_=$wgimgr$2h7;
if($wgimgr$2h8===undefined){$wgimgr$2h8=null;}
code$.$wgimgr$2h8_=$wgimgr$2h8;
if($wgimgr$2h9===undefined){$wgimgr$2h9=null;}
code$.$wgimgr$2h9_=$wgimgr$2h9;
if($wgimgr$2ha===undefined){$wgimgr$2ha=null;}
code$.$wgimgr$2ha_=$wgimgr$2ha;
if($wgimgr$2hb===undefined){$wgimgr$2hb=null;}
code$.$wgimgr$2hb_=$wgimgr$2hb;
if($wgimgr$2hc===undefined){$wgimgr$2hc=null;}
code$.$wgimgr$2hc_=$wgimgr$2hc;
if($wgimgr$2hd===undefined){$wgimgr$2hd=null;}
code$.$wgimgr$2hd_=$wgimgr$2hd;
if($wgimgr$2he===undefined){$wgimgr$2he=null;}
code$.$wgimgr$2he_=$wgimgr$2he;
if($wgimgr$2hf===undefined){$wgimgr$2hf=null;}
code$.$wgimgr$2hf_=$wgimgr$2hf;
if($wgimgr$2hg===undefined){$wgimgr$2hg=null;}
code$.$wgimgr$2hg_=$wgimgr$2hg;
if($wgimgr$2hh===undefined){$wgimgr$2hh=null;}
code$.$wgimgr$2hh_=$wgimgr$2hh;
if($wgimgr$2hi===undefined){$wgimgr$2hi=null;}
code$.$wgimgr$2hi_=$wgimgr$2hi;
if($wgimgr$2hj===undefined){$wgimgr$2hj=m$1.empty();}
code$.$wgimgr$2hj_=$wgimgr$2hj;
if($wgimgr$2hk===undefined){$wgimgr$2hk=m$1.empty();}
code$.$wgimgr$2hk_=$wgimgr$2hk;
if(children===undefined){children=m$1.empty();}
code$.children_=children;
TextNode(code$);
InlineElement(code$);
ParentNode({Child$ParentNode:{t:InlineElement}},code$);
BaseElement($wgimgr$2h3,$wgimgr$2h4,$wgimgr$2h5,$wgimgr$2h6,$wgimgr$2h7,$wgimgr$2h8,$wgimgr$2h9,$wgimgr$2ha,$wgimgr$2hb,$wgimgr$2hc,$wgimgr$2hd,$wgimgr$2he,$wgimgr$2hf,$wgimgr$2hg,$wgimgr$2hh,$wgimgr$2hi,$wgimgr$2hj,$wgimgr$2hk,code$);
code$.tag_=Tag("code");
return code$;
}
Code.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Code')];},d:['ceylon.html','Code']};};
ex$.Code=Code;
function $init$Code(){
if(Code.$$===undefined){
m$1.initTypeProto(Code,'ceylon.html::Code',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(code$){
m$1.atr$(code$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Code,pa:3,d:['ceylon.html','Code','$at','text']};});
m$1.atr$(code$,'$wgimgr$2h3',function(){return this.$wgimgr$2h3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','id$mftyl9']};});
m$1.atr$(code$,'$wgimgr$2h4',function(){return this.$wgimgr$2h4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Code,d:['ceylon.html','Code','$at','classNames$20w2a8']};});
m$1.atr$(code$,'$wgimgr$2h5',function(){return this.$wgimgr$2h5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','style$n33kfr']};});
m$1.atr$(code$,'$wgimgr$2h6',function(){return this.$wgimgr$2h6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','accessKey$y78gf1']};});
m$1.atr$(code$,'$wgimgr$2h7',function(){return this.$wgimgr$2h7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','contextMenu$c0zbya']};});
m$1.atr$(code$,'$wgimgr$2h8',function(){return this.$wgimgr$2h8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Code,d:['ceylon.html','Code','$at','dir$k9hqrf']};});
m$1.atr$(code$,'$wgimgr$2h9',function(){return this.$wgimgr$2h9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Code,d:['ceylon.html','Code','$at','draggable$q71diz']};});
m$1.atr$(code$,'$wgimgr$2ha',function(){return this.$wgimgr$2ha_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Code,d:['ceylon.html','Code','$at','dropZone$976wql']};});
m$1.atr$(code$,'$wgimgr$2hb',function(){return this.$wgimgr$2hb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Code,d:['ceylon.html','Code','$at','inert$nk9q7i']};});
m$1.atr$(code$,'$wgimgr$2hc',function(){return this.$wgimgr$2hc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Code,d:['ceylon.html','Code','$at','hidden$rd0gx2']};});
m$1.atr$(code$,'$wgimgr$2hd',function(){return this.$wgimgr$2hd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','lang$iif1fm']};});
m$1.atr$(code$,'$wgimgr$2he',function(){return this.$wgimgr$2he_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Code,d:['ceylon.html','Code','$at','spellcheck$za50bk']};});
m$1.atr$(code$,'$wgimgr$2hf',function(){return this.$wgimgr$2hf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Code,d:['ceylon.html','Code','$at','tabIndex$40byid']};});
m$1.atr$(code$,'$wgimgr$2hg',function(){return this.$wgimgr$2hg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Code,d:['ceylon.html','Code','$at','title$9pdr8o']};});
m$1.atr$(code$,'$wgimgr$2hh',function(){return this.$wgimgr$2hh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Code,d:['ceylon.html','Code','$at','translate$j1nf4u']};});
m$1.atr$(code$,'$wgimgr$2hi',function(){return this.$wgimgr$2hi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Code,d:['ceylon.html','Code','$at','aria$pkbxr3']};});
m$1.atr$(code$,'$wgimgr$2hj',function(){return this.$wgimgr$2hj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Code,d:['ceylon.html','Code','$at','nonstandardAttributes$qqoye1']};});
m$1.atr$(code$,'$wgimgr$2hk',function(){return this.$wgimgr$2hk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Code,d:['ceylon.html','Code','$at','data$nwivmu']};});
m$1.atr$(code$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Code,pa:3,d:['ceylon.html','Code','$at','children']};});
m$1.atr$(code$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Code,pa:3,d:['ceylon.html','Code','$at','tag']};});
})(Code.$$.prototype);
}
return Code;
}
ex$.$init$Code=$init$Code;
$init$Code();
function Del(text,$wgimgr$2hl,$wgimgr$2hm,$wgimgr$2hn,$wgimgr$2ho,$wgimgr$2hp,$wgimgr$2hq,$wgimgr$2hr,$wgimgr$2hs,$wgimgr$2ht,$wgimgr$2hu,$wgimgr$2hv,$wgimgr$2hw,$wgimgr$2hx,$wgimgr$2hy,$wgimgr$2hz,$wgimgr$2i0,$wgimgr$2i1,$wgimgr$2i2,children,del$){
$init$Del();
if(del$===undefined)del$=new Del.$$;
del$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
del$.text_=text;
if($wgimgr$2hl===undefined){$wgimgr$2hl=null;}
del$.$wgimgr$2hl_=$wgimgr$2hl;
if($wgimgr$2hm===undefined){$wgimgr$2hm=m$1.empty();}
del$.$wgimgr$2hm_=$wgimgr$2hm;
if($wgimgr$2hn===undefined){$wgimgr$2hn=null;}
del$.$wgimgr$2hn_=$wgimgr$2hn;
if($wgimgr$2ho===undefined){$wgimgr$2ho=null;}
del$.$wgimgr$2ho_=$wgimgr$2ho;
if($wgimgr$2hp===undefined){$wgimgr$2hp=null;}
del$.$wgimgr$2hp_=$wgimgr$2hp;
if($wgimgr$2hq===undefined){$wgimgr$2hq=null;}
del$.$wgimgr$2hq_=$wgimgr$2hq;
if($wgimgr$2hr===undefined){$wgimgr$2hr=null;}
del$.$wgimgr$2hr_=$wgimgr$2hr;
if($wgimgr$2hs===undefined){$wgimgr$2hs=null;}
del$.$wgimgr$2hs_=$wgimgr$2hs;
if($wgimgr$2ht===undefined){$wgimgr$2ht=null;}
del$.$wgimgr$2ht_=$wgimgr$2ht;
if($wgimgr$2hu===undefined){$wgimgr$2hu=null;}
del$.$wgimgr$2hu_=$wgimgr$2hu;
if($wgimgr$2hv===undefined){$wgimgr$2hv=null;}
del$.$wgimgr$2hv_=$wgimgr$2hv;
if($wgimgr$2hw===undefined){$wgimgr$2hw=null;}
del$.$wgimgr$2hw_=$wgimgr$2hw;
if($wgimgr$2hx===undefined){$wgimgr$2hx=null;}
del$.$wgimgr$2hx_=$wgimgr$2hx;
if($wgimgr$2hy===undefined){$wgimgr$2hy=null;}
del$.$wgimgr$2hy_=$wgimgr$2hy;
if($wgimgr$2hz===undefined){$wgimgr$2hz=null;}
del$.$wgimgr$2hz_=$wgimgr$2hz;
if($wgimgr$2i0===undefined){$wgimgr$2i0=null;}
del$.$wgimgr$2i0_=$wgimgr$2i0;
if($wgimgr$2i1===undefined){$wgimgr$2i1=m$1.empty();}
del$.$wgimgr$2i1_=$wgimgr$2i1;
if($wgimgr$2i2===undefined){$wgimgr$2i2=m$1.empty();}
del$.$wgimgr$2i2_=$wgimgr$2i2;
if(children===undefined){children=m$1.empty();}
del$.children_=children;
TextNode(del$);
InlineElement(del$);
ParentNode({Child$ParentNode:{t:InlineElement}},del$);
BaseElement($wgimgr$2hl,$wgimgr$2hm,$wgimgr$2hn,$wgimgr$2ho,$wgimgr$2hp,$wgimgr$2hq,$wgimgr$2hr,$wgimgr$2hs,$wgimgr$2ht,$wgimgr$2hu,$wgimgr$2hv,$wgimgr$2hw,$wgimgr$2hx,$wgimgr$2hy,$wgimgr$2hz,$wgimgr$2i0,$wgimgr$2i1,$wgimgr$2i2,del$);
del$.tag_=Tag("del");
return del$;
}
Del.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Del'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Ins)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Del']};};
ex$.Del=Del;
function $init$Del(){
if(Del.$$===undefined){
m$1.initTypeProto(Del,'ceylon.html::Del',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(del$){
m$1.atr$(del$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Del,pa:3,d:['ceylon.html','Del','$at','text']};});
m$1.atr$(del$,'$wgimgr$2hl',function(){return this.$wgimgr$2hl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','id$kkevpr']};});
m$1.atr$(del$,'$wgimgr$2hm',function(){return this.$wgimgr$2hm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Del,d:['ceylon.html','Del','$at','classNames$5gzeq']};});
m$1.atr$(del$,'$wgimgr$2hn',function(){return this.$wgimgr$2hn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','style$l7ohk9']};});
m$1.atr$(del$,'$wgimgr$2ho',function(){return this.$wgimgr$2ho_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','accessKey$wbtdjj']};});
m$1.atr$(del$,'$wgimgr$2hp',function(){return this.$wgimgr$2hp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','contextMenu$a5k92s']};});
m$1.atr$(del$,'$wgimgr$2hq',function(){return this.$wgimgr$2hq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Del,d:['ceylon.html','Del','$at','dir$ie2nvx']};});
m$1.atr$(del$,'$wgimgr$2hr',function(){return this.$wgimgr$2hr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Del,d:['ceylon.html','Del','$at','draggable$obmanh']};});
m$1.atr$(del$,'$wgimgr$2hs',function(){return this.$wgimgr$2hs_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Del,d:['ceylon.html','Del','$at','dropZone$7brtv3']};});
m$1.atr$(del$,'$wgimgr$2ht',function(){return this.$wgimgr$2ht_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Del,d:['ceylon.html','Del','$at','inert$lounc0']};});
m$1.atr$(del$,'$wgimgr$2hu',function(){return this.$wgimgr$2hu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Del,d:['ceylon.html','Del','$at','hidden$phle1k']};});
m$1.atr$(del$,'$wgimgr$2hv',function(){return this.$wgimgr$2hv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','lang$gmzyk4']};});
m$1.atr$(del$,'$wgimgr$2hw',function(){return this.$wgimgr$2hw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Del,d:['ceylon.html','Del','$at','spellcheck$xepxg2']};});
m$1.atr$(del$,'$wgimgr$2hx',function(){return this.$wgimgr$2hx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Del,d:['ceylon.html','Del','$at','tabIndex$5vr1dv']};});
m$1.atr$(del$,'$wgimgr$2hy',function(){return this.$wgimgr$2hy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Del,d:['ceylon.html','Del','$at','title$7tyod6']};});
m$1.atr$(del$,'$wgimgr$2hz',function(){return this.$wgimgr$2hz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Del,d:['ceylon.html','Del','$at','translate$kx2i0c']};});
m$1.atr$(del$,'$wgimgr$2i0',function(){return this.$wgimgr$2i0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Del,d:['ceylon.html','Del','$at','aria$nowuvl']};});
m$1.atr$(del$,'$wgimgr$2i1',function(){return this.$wgimgr$2i1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Del,d:['ceylon.html','Del','$at','nonstandardAttributes$sm419j']};});
m$1.atr$(del$,'$wgimgr$2i2',function(){return this.$wgimgr$2i2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Del,d:['ceylon.html','Del','$at','data$m13src']};});
m$1.atr$(del$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Del,pa:3,d:['ceylon.html','Del','$at','children']};});
m$1.atr$(del$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Del,pa:3,d:['ceylon.html','Del','$at','tag']};});
})(Del.$$.prototype);
}
return Del;
}
ex$.$init$Del=$init$Del;
$init$Del();
function Dfn(text,$wgimgr$2i3,$wgimgr$2i4,$wgimgr$2i5,$wgimgr$2i6,$wgimgr$2i7,$wgimgr$2i8,$wgimgr$2i9,$wgimgr$2ia,$wgimgr$2ib,$wgimgr$2ic,$wgimgr$2id,$wgimgr$2ie,$wgimgr$2if,$wgimgr$2ig,$wgimgr$2ih,$wgimgr$2ii,$wgimgr$2ij,$wgimgr$2ik,children,dfn$){
$init$Dfn();
if(dfn$===undefined)dfn$=new Dfn.$$;
dfn$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
dfn$.text_=text;
if($wgimgr$2i3===undefined){$wgimgr$2i3=null;}
dfn$.$wgimgr$2i3_=$wgimgr$2i3;
if($wgimgr$2i4===undefined){$wgimgr$2i4=m$1.empty();}
dfn$.$wgimgr$2i4_=$wgimgr$2i4;
if($wgimgr$2i5===undefined){$wgimgr$2i5=null;}
dfn$.$wgimgr$2i5_=$wgimgr$2i5;
if($wgimgr$2i6===undefined){$wgimgr$2i6=null;}
dfn$.$wgimgr$2i6_=$wgimgr$2i6;
if($wgimgr$2i7===undefined){$wgimgr$2i7=null;}
dfn$.$wgimgr$2i7_=$wgimgr$2i7;
if($wgimgr$2i8===undefined){$wgimgr$2i8=null;}
dfn$.$wgimgr$2i8_=$wgimgr$2i8;
if($wgimgr$2i9===undefined){$wgimgr$2i9=null;}
dfn$.$wgimgr$2i9_=$wgimgr$2i9;
if($wgimgr$2ia===undefined){$wgimgr$2ia=null;}
dfn$.$wgimgr$2ia_=$wgimgr$2ia;
if($wgimgr$2ib===undefined){$wgimgr$2ib=null;}
dfn$.$wgimgr$2ib_=$wgimgr$2ib;
if($wgimgr$2ic===undefined){$wgimgr$2ic=null;}
dfn$.$wgimgr$2ic_=$wgimgr$2ic;
if($wgimgr$2id===undefined){$wgimgr$2id=null;}
dfn$.$wgimgr$2id_=$wgimgr$2id;
if($wgimgr$2ie===undefined){$wgimgr$2ie=null;}
dfn$.$wgimgr$2ie_=$wgimgr$2ie;
if($wgimgr$2if===undefined){$wgimgr$2if=null;}
dfn$.$wgimgr$2if_=$wgimgr$2if;
if($wgimgr$2ig===undefined){$wgimgr$2ig=null;}
dfn$.$wgimgr$2ig_=$wgimgr$2ig;
if($wgimgr$2ih===undefined){$wgimgr$2ih=null;}
dfn$.$wgimgr$2ih_=$wgimgr$2ih;
if($wgimgr$2ii===undefined){$wgimgr$2ii=null;}
dfn$.$wgimgr$2ii_=$wgimgr$2ii;
if($wgimgr$2ij===undefined){$wgimgr$2ij=m$1.empty();}
dfn$.$wgimgr$2ij_=$wgimgr$2ij;
if($wgimgr$2ik===undefined){$wgimgr$2ik=m$1.empty();}
dfn$.$wgimgr$2ik_=$wgimgr$2ik;
if(children===undefined){children=m$1.empty();}
dfn$.children_=children;
TextNode(dfn$);
InlineElement(dfn$);
ParentNode({Child$ParentNode:{t:InlineElement}},dfn$);
BaseElement($wgimgr$2i3,$wgimgr$2i4,$wgimgr$2i5,$wgimgr$2i6,$wgimgr$2i7,$wgimgr$2i8,$wgimgr$2i9,$wgimgr$2ia,$wgimgr$2ib,$wgimgr$2ic,$wgimgr$2id,$wgimgr$2ie,$wgimgr$2if,$wgimgr$2ig,$wgimgr$2ih,$wgimgr$2ii,$wgimgr$2ij,$wgimgr$2ik,dfn$);
dfn$.tag_=Tag("dfn");
return dfn$;
}
Dfn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Dfn')];},d:['ceylon.html','Dfn']};};
ex$.Dfn=Dfn;
function $init$Dfn(){
if(Dfn.$$===undefined){
m$1.initTypeProto(Dfn,'ceylon.html::Dfn',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(dfn$){
m$1.atr$(dfn$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Dfn,pa:3,d:['ceylon.html','Dfn','$at','text']};});
m$1.atr$(dfn$,'$wgimgr$2i3',function(){return this.$wgimgr$2i3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','id$u45za2']};});
m$1.atr$(dfn$,'$wgimgr$2i4',function(){return this.$wgimgr$2i4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Dfn,d:['ceylon.html','Dfn','$at','classNames$ki06e1']};});
m$1.atr$(dfn$,'$wgimgr$2i5',function(){return this.$wgimgr$2i5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','style$tgwdfk']};});
m$1.atr$(dfn$,'$wgimgr$2i6',function(){return this.$wgimgr$2i6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','accessKey$icrhga']};});
m$1.atr$(dfn$,'$wgimgr$2i7',function(){return this.$wgimgr$2i7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','contextMenu$ui3g23']};});
m$1.atr$(dfn$,'$wgimgr$2i8',function(){return this.$wgimgr$2i8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','dir$wai73w']};});
m$1.atr$(dfn$,'$wgimgr$2i9',function(){return this.$wgimgr$2i9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','draggable$qcykcc']};});
m$1.atr$(dfn$,'$wgimgr$2ia',function(){return this.$wgimgr$2ia_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','dropZone$rob0ue']};});
m$1.atr$(dfn$,'$wgimgr$2ib',function(){return this.$wgimgr$2ib_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','inert$szq7nt']};});
m$1.atr$(dfn$,'$wgimgr$2ic',function(){return this.$wgimgr$2ic_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','hidden$p6zgy9']};});
m$1.atr$(dfn$,'$wgimgr$2id',function(){return this.$wgimgr$2id_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','lang$y1kwfp']};});
m$1.atr$(dfn$,'$wgimgr$2ie',function(){return this.$wgimgr$2ie_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','spellcheck$h9uxjr']};});
m$1.atr$(dfn$,'$wgimgr$2if',function(){return this.$wgimgr$2if_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','tabIndex$egs5lg']};});
m$1.atr$(dfn$,'$wgimgr$2ig',function(){return this.$wgimgr$2ig_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','title$s6hvch']};});
m$1.atr$(dfn$,'$wgimgr$2ih',function(){return this.$wgimgr$2ih_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','translate$kjb11']};});
m$1.atr$(dfn$,'$wgimgr$2ii',function(){return this.$wgimgr$2ii_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Dfn,d:['ceylon.html','Dfn','$at','aria$qzo048']};});
m$1.atr$(dfn$,'$wgimgr$2ij',function(){return this.$wgimgr$2ij_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Dfn,d:['ceylon.html','Dfn','$at','nonstandardAttributes$89kua8']};});
m$1.atr$(dfn$,'$wgimgr$2ik',function(){return this.$wgimgr$2ik_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Dfn,d:['ceylon.html','Dfn','$at','data$snh28h']};});
m$1.atr$(dfn$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Dfn,pa:3,d:['ceylon.html','Dfn','$at','children']};});
m$1.atr$(dfn$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Dfn,pa:3,d:['ceylon.html','Dfn','$at','tag']};});
})(Dfn.$$.prototype);
}
return Dfn;
}
ex$.$init$Dfn=$init$Dfn;
$init$Dfn();
function Em(text,$wgimgr$2il,$wgimgr$2im,$wgimgr$2in,$wgimgr$2io,$wgimgr$2ip,$wgimgr$2iq,$wgimgr$2ir,$wgimgr$2is,$wgimgr$2it,$wgimgr$2iu,$wgimgr$2iv,$wgimgr$2iw,$wgimgr$2ix,$wgimgr$2iy,$wgimgr$2iz,$wgimgr$2j0,$wgimgr$2j1,$wgimgr$2j2,children,em$){
$init$Em();
if(em$===undefined)em$=new Em.$$;
em$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
em$.text_=text;
if($wgimgr$2il===undefined){$wgimgr$2il=null;}
em$.$wgimgr$2il_=$wgimgr$2il;
if($wgimgr$2im===undefined){$wgimgr$2im=m$1.empty();}
em$.$wgimgr$2im_=$wgimgr$2im;
if($wgimgr$2in===undefined){$wgimgr$2in=null;}
em$.$wgimgr$2in_=$wgimgr$2in;
if($wgimgr$2io===undefined){$wgimgr$2io=null;}
em$.$wgimgr$2io_=$wgimgr$2io;
if($wgimgr$2ip===undefined){$wgimgr$2ip=null;}
em$.$wgimgr$2ip_=$wgimgr$2ip;
if($wgimgr$2iq===undefined){$wgimgr$2iq=null;}
em$.$wgimgr$2iq_=$wgimgr$2iq;
if($wgimgr$2ir===undefined){$wgimgr$2ir=null;}
em$.$wgimgr$2ir_=$wgimgr$2ir;
if($wgimgr$2is===undefined){$wgimgr$2is=null;}
em$.$wgimgr$2is_=$wgimgr$2is;
if($wgimgr$2it===undefined){$wgimgr$2it=null;}
em$.$wgimgr$2it_=$wgimgr$2it;
if($wgimgr$2iu===undefined){$wgimgr$2iu=null;}
em$.$wgimgr$2iu_=$wgimgr$2iu;
if($wgimgr$2iv===undefined){$wgimgr$2iv=null;}
em$.$wgimgr$2iv_=$wgimgr$2iv;
if($wgimgr$2iw===undefined){$wgimgr$2iw=null;}
em$.$wgimgr$2iw_=$wgimgr$2iw;
if($wgimgr$2ix===undefined){$wgimgr$2ix=null;}
em$.$wgimgr$2ix_=$wgimgr$2ix;
if($wgimgr$2iy===undefined){$wgimgr$2iy=null;}
em$.$wgimgr$2iy_=$wgimgr$2iy;
if($wgimgr$2iz===undefined){$wgimgr$2iz=null;}
em$.$wgimgr$2iz_=$wgimgr$2iz;
if($wgimgr$2j0===undefined){$wgimgr$2j0=null;}
em$.$wgimgr$2j0_=$wgimgr$2j0;
if($wgimgr$2j1===undefined){$wgimgr$2j1=m$1.empty();}
em$.$wgimgr$2j1_=$wgimgr$2j1;
if($wgimgr$2j2===undefined){$wgimgr$2j2=m$1.empty();}
em$.$wgimgr$2j2_=$wgimgr$2j2;
if(children===undefined){children=m$1.empty();}
em$.children_=children;
TextNode(em$);
InlineElement(em$);
ParentNode({Child$ParentNode:{t:InlineElement}},em$);
BaseElement($wgimgr$2il,$wgimgr$2im,$wgimgr$2in,$wgimgr$2io,$wgimgr$2ip,$wgimgr$2iq,$wgimgr$2ir,$wgimgr$2is,$wgimgr$2it,$wgimgr$2iu,$wgimgr$2iv,$wgimgr$2iw,$wgimgr$2ix,$wgimgr$2iy,$wgimgr$2iz,$wgimgr$2j0,$wgimgr$2j1,$wgimgr$2j2,em$);
em$.tag_=Tag("em");
return em$;
}
Em.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Em')];},d:['ceylon.html','Em']};};
ex$.Em=Em;
function $init$Em(){
if(Em.$$===undefined){
m$1.initTypeProto(Em,'ceylon.html::Em',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(em$){
m$1.atr$(em$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Em,pa:3,d:['ceylon.html','Em','$at','text']};});
m$1.atr$(em$,'$wgimgr$2il',function(){return this.$wgimgr$2il_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','id$9oxt2u']};});
m$1.atr$(em$,'$wgimgr$2im',function(){return this.$wgimgr$2im_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Em,d:['ceylon.html','Em','$at','classNames$u3vpdv']};});
m$1.atr$(em$,'$wgimgr$2in',function(){return this.$wgimgr$2in_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','style$91o78c']};});
m$1.atr$(em$,'$wgimgr$2io',function(){return this.$wgimgr$2io_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','accessKey$22goqy']};});
m$1.atr$(em$,'$wgimgr$2ip',function(){return this.$wgimgr$2ip_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','contextMenu$k3sfpt']};});
m$1.atr$(em$,'$wgimgr$2iq',function(){return this.$wgimgr$2iq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Em,d:['ceylon.html','Em','$at','dir$bva0wo']};});
m$1.atr$(em$,'$wgimgr$2ir',function(){return this.$wgimgr$2ir_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Em,d:['ceylon.html','Em','$at','draggable$5xqe54']};});
m$1.atr$(em$,'$wgimgr$2is',function(){return this.$wgimgr$2is_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Em,d:['ceylon.html','Em','$at','dropZone$mxkuxi']};});
m$1.atr$(em$,'$wgimgr$2it',function(){return this.$wgimgr$2it_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Em,d:['ceylon.html','Em','$at','inert$8ki1gl']};});
m$1.atr$(em$,'$wgimgr$2iu',function(){return this.$wgimgr$2iu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Em,d:['ceylon.html','Em','$at','hidden$4rrar1']};});
m$1.atr$(em$,'$wgimgr$2iv',function(){return this.$wgimgr$2iv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','lang$dmcq8h']};});
m$1.atr$(em$,'$wgimgr$2iw',function(){return this.$wgimgr$2iw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Em,d:['ceylon.html','Em','$at','spellcheck$35d8nh']};});
m$1.atr$(em$,'$wgimgr$2ix',function(){return this.$wgimgr$2ix_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Em,d:['ceylon.html','Em','$at','tabIndex$yw0bso']};});
m$1.atr$(em$,'$wgimgr$2iy',function(){return this.$wgimgr$2iy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Em,d:['ceylon.html','Em','$at','title$mfe0ff']};});
m$1.atr$(em$,'$wgimgr$2iz',function(){return this.$wgimgr$2iz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Em,d:['ceylon.html','Em','$at','translate$juov67']};});
m$1.atr$(em$,'$wgimgr$2j0',function(){return this.$wgimgr$2j0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Em,d:['ceylon.html','Em','$at','aria$6kftx0']};});
m$1.atr$(em$,'$wgimgr$2j1',function(){return this.$wgimgr$2j1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Em,d:['ceylon.html','Em','$at','nonstandardAttributes$c5nbx0']};});
m$1.atr$(em$,'$wgimgr$2j2',function(){return this.$wgimgr$2j2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Em,d:['ceylon.html','Em','$at','data$888w19']};});
m$1.atr$(em$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Em,pa:3,d:['ceylon.html','Em','$at','children']};});
m$1.atr$(em$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Em,pa:3,d:['ceylon.html','Em','$at','tag']};});
})(Em.$$.prototype);
}
return Em;
}
ex$.$init$Em=$init$Em;
$init$Em();
function I(text,$wgimgr$2j3,$wgimgr$2j4,$wgimgr$2j5,$wgimgr$2j6,$wgimgr$2j7,$wgimgr$2j8,$wgimgr$2j9,$wgimgr$2ja,$wgimgr$2jb,$wgimgr$2jc,$wgimgr$2jd,$wgimgr$2je,$wgimgr$2jf,$wgimgr$2jg,$wgimgr$2jh,$wgimgr$2ji,$wgimgr$2jj,$wgimgr$2jk,children,i$){
$init$I();
if(i$===undefined)i$=new I.$$;
i$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
i$.text_=text;
if($wgimgr$2j3===undefined){$wgimgr$2j3=null;}
i$.$wgimgr$2j3_=$wgimgr$2j3;
if($wgimgr$2j4===undefined){$wgimgr$2j4=m$1.empty();}
i$.$wgimgr$2j4_=$wgimgr$2j4;
if($wgimgr$2j5===undefined){$wgimgr$2j5=null;}
i$.$wgimgr$2j5_=$wgimgr$2j5;
if($wgimgr$2j6===undefined){$wgimgr$2j6=null;}
i$.$wgimgr$2j6_=$wgimgr$2j6;
if($wgimgr$2j7===undefined){$wgimgr$2j7=null;}
i$.$wgimgr$2j7_=$wgimgr$2j7;
if($wgimgr$2j8===undefined){$wgimgr$2j8=null;}
i$.$wgimgr$2j8_=$wgimgr$2j8;
if($wgimgr$2j9===undefined){$wgimgr$2j9=null;}
i$.$wgimgr$2j9_=$wgimgr$2j9;
if($wgimgr$2ja===undefined){$wgimgr$2ja=null;}
i$.$wgimgr$2ja_=$wgimgr$2ja;
if($wgimgr$2jb===undefined){$wgimgr$2jb=null;}
i$.$wgimgr$2jb_=$wgimgr$2jb;
if($wgimgr$2jc===undefined){$wgimgr$2jc=null;}
i$.$wgimgr$2jc_=$wgimgr$2jc;
if($wgimgr$2jd===undefined){$wgimgr$2jd=null;}
i$.$wgimgr$2jd_=$wgimgr$2jd;
if($wgimgr$2je===undefined){$wgimgr$2je=null;}
i$.$wgimgr$2je_=$wgimgr$2je;
if($wgimgr$2jf===undefined){$wgimgr$2jf=null;}
i$.$wgimgr$2jf_=$wgimgr$2jf;
if($wgimgr$2jg===undefined){$wgimgr$2jg=null;}
i$.$wgimgr$2jg_=$wgimgr$2jg;
if($wgimgr$2jh===undefined){$wgimgr$2jh=null;}
i$.$wgimgr$2jh_=$wgimgr$2jh;
if($wgimgr$2ji===undefined){$wgimgr$2ji=null;}
i$.$wgimgr$2ji_=$wgimgr$2ji;
if($wgimgr$2jj===undefined){$wgimgr$2jj=m$1.empty();}
i$.$wgimgr$2jj_=$wgimgr$2jj;
if($wgimgr$2jk===undefined){$wgimgr$2jk=m$1.empty();}
i$.$wgimgr$2jk_=$wgimgr$2jk;
if(children===undefined){children=m$1.empty();}
i$.children_=children;
TextNode(i$);
InlineElement(i$);
ParentNode({Child$ParentNode:{t:InlineElement}},i$);
BaseElement($wgimgr$2j3,$wgimgr$2j4,$wgimgr$2j5,$wgimgr$2j6,$wgimgr$2j7,$wgimgr$2j8,$wgimgr$2j9,$wgimgr$2ja,$wgimgr$2jb,$wgimgr$2jc,$wgimgr$2jd,$wgimgr$2je,$wgimgr$2jf,$wgimgr$2jg,$wgimgr$2jh,$wgimgr$2ji,$wgimgr$2jj,$wgimgr$2jk,i$);
i$.tag_=Tag("i");
return i$;
}
I.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:I')];},d:['ceylon.html','I']};};
ex$.I=I;
function $init$I(){
if(I.$$===undefined){
m$1.initTypeProto(I,'ceylon.html::I',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(i$){
m$1.atr$(i$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:I,pa:3,d:['ceylon.html','I','$at','text']};});
m$1.atr$(i$,'$wgimgr$2j3',function(){return this.$wgimgr$2j3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','id$boja69']};});
m$1.atr$(i$,'$wgimgr$2j4',function(){return this.$wgimgr$2j4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:I,d:['ceylon.html','I','$at','classNames$8qem4s']};});
m$1.atr$(i$,'$wgimgr$2j5',function(){return this.$wgimgr$2j5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','style$cbsw0r']};});
m$1.atr$(i$,'$wgimgr$2j6',function(){return this.$wgimgr$2j6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','accessKey$nfxs01']};});
m$1.atr$(i$,'$wgimgr$2j7',function(){return this.$wgimgr$2j7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','contextMenu$19onja']};});
m$1.atr$(i$,'$wgimgr$2j8',function(){return this.$wgimgr$2j8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:I,d:['ceylon.html','I','$at','dir$9i72cf']};});
m$1.atr$(i$,'$wgimgr$2j9',function(){return this.$wgimgr$2j9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:I,d:['ceylon.html','I','$at','draggable$ffqp3z']};});
m$1.atr$(i$,'$wgimgr$2ja',function(){return this.$wgimgr$2ja_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:I,d:['ceylon.html','I','$at','dropZone$1k3rof']};});
m$1.atr$(i$,'$wgimgr$2jb',function(){return this.$wgimgr$2jb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:I,d:['ceylon.html','I','$at','inert$csz1si']};});
m$1.atr$(i$,'$wgimgr$2jc',function(){return this.$wgimgr$2jc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:I,d:['ceylon.html','I','$at','hidden$glpsi2']};});
m$1.atr$(i$,'$wgimgr$2jd',function(){return this.$wgimgr$2jd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','lang$7r4d0m']};});
m$1.atr$(i$,'$wgimgr$2je',function(){return this.$wgimgr$2je_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:I,d:['ceylon.html','I','$at','spellcheck$oiubwk']};});
m$1.atr$(i$,'$wgimgr$2jf',function(){return this.$wgimgr$2jf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:I,d:['ceylon.html','I','$at','tabIndex$ermmxd']};});
m$1.atr$(i$,'$wgimgr$2jg',function(){return this.$wgimgr$2jg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:I,d:['ceylon.html','I','$at','title$11wx6c']};});
m$1.atr$(i$,'$wgimgr$2jh',function(){return this.$wgimgr$2jh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:I,d:['ceylon.html','I','$at','translate$tsy3ju']};});
m$1.atr$(i$,'$wgimgr$2ji',function(){return this.$wgimgr$2ji_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:I,d:['ceylon.html','I','$at','aria$et19c3']};});
m$1.atr$(i$,'$wgimgr$2jj',function(){return this.$wgimgr$2jj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:I,d:['ceylon.html','I','$at','nonstandardAttributes$xj4f63']};});
m$1.atr$(i$,'$wgimgr$2jk',function(){return this.$wgimgr$2jk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:I,d:['ceylon.html','I','$at','data$d5877u']};});
m$1.atr$(i$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:I,pa:3,d:['ceylon.html','I','$at','children']};});
m$1.atr$(i$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:I,pa:3,d:['ceylon.html','I','$at','tag']};});
})(I.$$.prototype);
}
return I;
}
ex$.$init$I=$init$I;
$init$I();
function Ins(text,$wgimgr$2jl,$wgimgr$2jm,$wgimgr$2jn,$wgimgr$2jo,$wgimgr$2jp,$wgimgr$2jq,$wgimgr$2jr,$wgimgr$2js,$wgimgr$2jt,$wgimgr$2ju,$wgimgr$2jv,$wgimgr$2jw,$wgimgr$2jx,$wgimgr$2jy,$wgimgr$2jz,$wgimgr$2k0,$wgimgr$2k1,$wgimgr$2k2,children,ins$){
$init$Ins();
if(ins$===undefined)ins$=new Ins.$$;
ins$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
ins$.text_=text;
if($wgimgr$2jl===undefined){$wgimgr$2jl=null;}
ins$.$wgimgr$2jl_=$wgimgr$2jl;
if($wgimgr$2jm===undefined){$wgimgr$2jm=m$1.empty();}
ins$.$wgimgr$2jm_=$wgimgr$2jm;
if($wgimgr$2jn===undefined){$wgimgr$2jn=null;}
ins$.$wgimgr$2jn_=$wgimgr$2jn;
if($wgimgr$2jo===undefined){$wgimgr$2jo=null;}
ins$.$wgimgr$2jo_=$wgimgr$2jo;
if($wgimgr$2jp===undefined){$wgimgr$2jp=null;}
ins$.$wgimgr$2jp_=$wgimgr$2jp;
if($wgimgr$2jq===undefined){$wgimgr$2jq=null;}
ins$.$wgimgr$2jq_=$wgimgr$2jq;
if($wgimgr$2jr===undefined){$wgimgr$2jr=null;}
ins$.$wgimgr$2jr_=$wgimgr$2jr;
if($wgimgr$2js===undefined){$wgimgr$2js=null;}
ins$.$wgimgr$2js_=$wgimgr$2js;
if($wgimgr$2jt===undefined){$wgimgr$2jt=null;}
ins$.$wgimgr$2jt_=$wgimgr$2jt;
if($wgimgr$2ju===undefined){$wgimgr$2ju=null;}
ins$.$wgimgr$2ju_=$wgimgr$2ju;
if($wgimgr$2jv===undefined){$wgimgr$2jv=null;}
ins$.$wgimgr$2jv_=$wgimgr$2jv;
if($wgimgr$2jw===undefined){$wgimgr$2jw=null;}
ins$.$wgimgr$2jw_=$wgimgr$2jw;
if($wgimgr$2jx===undefined){$wgimgr$2jx=null;}
ins$.$wgimgr$2jx_=$wgimgr$2jx;
if($wgimgr$2jy===undefined){$wgimgr$2jy=null;}
ins$.$wgimgr$2jy_=$wgimgr$2jy;
if($wgimgr$2jz===undefined){$wgimgr$2jz=null;}
ins$.$wgimgr$2jz_=$wgimgr$2jz;
if($wgimgr$2k0===undefined){$wgimgr$2k0=null;}
ins$.$wgimgr$2k0_=$wgimgr$2k0;
if($wgimgr$2k1===undefined){$wgimgr$2k1=m$1.empty();}
ins$.$wgimgr$2k1_=$wgimgr$2k1;
if($wgimgr$2k2===undefined){$wgimgr$2k2=m$1.empty();}
ins$.$wgimgr$2k2_=$wgimgr$2k2;
if(children===undefined){children=m$1.empty();}
ins$.children_=children;
TextNode(ins$);
InlineElement(ins$);
ParentNode({Child$ParentNode:{t:InlineElement}},ins$);
BaseElement($wgimgr$2jl,$wgimgr$2jm,$wgimgr$2jn,$wgimgr$2jo,$wgimgr$2jp,$wgimgr$2jq,$wgimgr$2jr,$wgimgr$2js,$wgimgr$2jt,$wgimgr$2ju,$wgimgr$2jv,$wgimgr$2jw,$wgimgr$2jx,$wgimgr$2jy,$wgimgr$2jz,$wgimgr$2k0,$wgimgr$2k1,$wgimgr$2k2,ins$);
ins$.tag_=Tag("ins");
return ins$;
}
Ins.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Ins'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.html'),Del)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.html','Ins']};};
ex$.Ins=Ins;
function $init$Ins(){
if(Ins.$$===undefined){
m$1.initTypeProto(Ins,'ceylon.html::Ins',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(ins$){
m$1.atr$(ins$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Ins,pa:3,d:['ceylon.html','Ins','$at','text']};});
m$1.atr$(ins$,'$wgimgr$2jl',function(){return this.$wgimgr$2jl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','id$230t78']};});
m$1.atr$(ins$,'$wgimgr$2jm',function(){return this.$wgimgr$2jm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Ins,d:['ceylon.html','Ins','$at','classNames$ibx33t']};});
m$1.atr$(ins$,'$wgimgr$2jn',function(){return this.$wgimgr$2jn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','style$2qaf1q']};});
m$1.atr$(ins$,'$wgimgr$2jo',function(){return this.$wgimgr$2jo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','accessKey$dufb10']};});
m$1.atr$(ins$,'$wgimgr$2jp',function(){return this.$wgimgr$2jp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','contextMenu$8bttfr']};});
m$1.atr$(ins$,'$wgimgr$2jq',function(){return this.$wgimgr$2jq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Ins,d:['ceylon.html','Ins','$at','dir$3bemm']};});
m$1.atr$(ins$,'$wgimgr$2jr',function(){return this.$wgimgr$2jr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ins,d:['ceylon.html','Ins','$at','draggable$5u884y']};});
m$1.atr$(ins$,'$wgimgr$2js',function(){return this.$wgimgr$2js_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Ins,d:['ceylon.html','Ins','$at','dropZone$b5m8ng']};});
m$1.atr$(ins$,'$wgimgr$2jt',function(){return this.$wgimgr$2jt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ins,d:['ceylon.html','Ins','$at','inert$37gkth']};});
m$1.atr$(ins$,'$wgimgr$2ju',function(){return this.$wgimgr$2ju_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ins,d:['ceylon.html','Ins','$at','hidden$707bj1']};});
m$1.atr$(ins$,'$wgimgr$2jv',function(){return this.$wgimgr$2jv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','lang$1ue3yf']};});
m$1.atr$(ins$,'$wgimgr$2jw',function(){return this.$wgimgr$2jw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ins,d:['ceylon.html','Ins','$at','spellcheck$exbuxj']};});
m$1.atr$(ins$,'$wgimgr$2jx',function(){return this.$wgimgr$2jx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Ins,d:['ceylon.html','Ins','$at','tabIndex$od53we']};});
m$1.atr$(ins$,'$wgimgr$2jy',function(){return this.$wgimgr$2jy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Ins,d:['ceylon.html','Ins','$at','title$anfe5d']};});
m$1.atr$(ins$,'$wgimgr$2jz',function(){return this.$wgimgr$2jz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Ins,d:['ceylon.html','Ins','$at','translate$vmnhg9']};});
m$1.atr$(ins$,'$wgimgr$2k0',function(){return this.$wgimgr$2k0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Ins,d:['ceylon.html','Ins','$at','aria$57isd2']};});
m$1.atr$(ins$,'$wgimgr$2k1',function(){return this.$wgimgr$2k1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Ins,d:['ceylon.html','Ins','$at','nonstandardAttributes$nxly72']};});
m$1.atr$(ins$,'$wgimgr$2k2',function(){return this.$wgimgr$2k2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Ins,d:['ceylon.html','Ins','$at','data$3jpq8t']};});
m$1.atr$(ins$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Ins,pa:3,d:['ceylon.html','Ins','$at','children']};});
m$1.atr$(ins$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Ins,pa:3,d:['ceylon.html','Ins','$at','tag']};});
})(Ins.$$.prototype);
}
return Ins;
}
ex$.$init$Ins=$init$Ins;
$init$Ins();
function Kbd(text,$wgimgr$2k3,$wgimgr$2k4,$wgimgr$2k5,$wgimgr$2k6,$wgimgr$2k7,$wgimgr$2k8,$wgimgr$2k9,$wgimgr$2ka,$wgimgr$2kb,$wgimgr$2kc,$wgimgr$2kd,$wgimgr$2ke,$wgimgr$2kf,$wgimgr$2kg,$wgimgr$2kh,$wgimgr$2ki,$wgimgr$2kj,$wgimgr$2kk,children,kbd$){
$init$Kbd();
if(kbd$===undefined)kbd$=new Kbd.$$;
kbd$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
kbd$.text_=text;
if($wgimgr$2k3===undefined){$wgimgr$2k3=null;}
kbd$.$wgimgr$2k3_=$wgimgr$2k3;
if($wgimgr$2k4===undefined){$wgimgr$2k4=m$1.empty();}
kbd$.$wgimgr$2k4_=$wgimgr$2k4;
if($wgimgr$2k5===undefined){$wgimgr$2k5=null;}
kbd$.$wgimgr$2k5_=$wgimgr$2k5;
if($wgimgr$2k6===undefined){$wgimgr$2k6=null;}
kbd$.$wgimgr$2k6_=$wgimgr$2k6;
if($wgimgr$2k7===undefined){$wgimgr$2k7=null;}
kbd$.$wgimgr$2k7_=$wgimgr$2k7;
if($wgimgr$2k8===undefined){$wgimgr$2k8=null;}
kbd$.$wgimgr$2k8_=$wgimgr$2k8;
if($wgimgr$2k9===undefined){$wgimgr$2k9=null;}
kbd$.$wgimgr$2k9_=$wgimgr$2k9;
if($wgimgr$2ka===undefined){$wgimgr$2ka=null;}
kbd$.$wgimgr$2ka_=$wgimgr$2ka;
if($wgimgr$2kb===undefined){$wgimgr$2kb=null;}
kbd$.$wgimgr$2kb_=$wgimgr$2kb;
if($wgimgr$2kc===undefined){$wgimgr$2kc=null;}
kbd$.$wgimgr$2kc_=$wgimgr$2kc;
if($wgimgr$2kd===undefined){$wgimgr$2kd=null;}
kbd$.$wgimgr$2kd_=$wgimgr$2kd;
if($wgimgr$2ke===undefined){$wgimgr$2ke=null;}
kbd$.$wgimgr$2ke_=$wgimgr$2ke;
if($wgimgr$2kf===undefined){$wgimgr$2kf=null;}
kbd$.$wgimgr$2kf_=$wgimgr$2kf;
if($wgimgr$2kg===undefined){$wgimgr$2kg=null;}
kbd$.$wgimgr$2kg_=$wgimgr$2kg;
if($wgimgr$2kh===undefined){$wgimgr$2kh=null;}
kbd$.$wgimgr$2kh_=$wgimgr$2kh;
if($wgimgr$2ki===undefined){$wgimgr$2ki=null;}
kbd$.$wgimgr$2ki_=$wgimgr$2ki;
if($wgimgr$2kj===undefined){$wgimgr$2kj=m$1.empty();}
kbd$.$wgimgr$2kj_=$wgimgr$2kj;
if($wgimgr$2kk===undefined){$wgimgr$2kk=m$1.empty();}
kbd$.$wgimgr$2kk_=$wgimgr$2kk;
if(children===undefined){children=m$1.empty();}
kbd$.children_=children;
TextNode(kbd$);
InlineElement(kbd$);
ParentNode({Child$ParentNode:{t:InlineElement}},kbd$);
BaseElement($wgimgr$2k3,$wgimgr$2k4,$wgimgr$2k5,$wgimgr$2k6,$wgimgr$2k7,$wgimgr$2k8,$wgimgr$2k9,$wgimgr$2ka,$wgimgr$2kb,$wgimgr$2kc,$wgimgr$2kd,$wgimgr$2ke,$wgimgr$2kf,$wgimgr$2kg,$wgimgr$2kh,$wgimgr$2ki,$wgimgr$2kj,$wgimgr$2kk,kbd$);
kbd$.tag_=Tag("kbd");
return kbd$;
}
Kbd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Kbd')];},d:['ceylon.html','Kbd']};};
ex$.Kbd=Kbd;
function $init$Kbd(){
if(Kbd.$$===undefined){
m$1.initTypeProto(Kbd,'ceylon.html::Kbd',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(kbd$){
m$1.atr$(kbd$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Kbd,pa:3,d:['ceylon.html','Kbd','$at','text']};});
m$1.atr$(kbd$,'$wgimgr$2k3',function(){return this.$wgimgr$2k3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','id$3nkejh']};});
m$1.atr$(kbd$,'$wgimgr$2k4',function(){return this.$wgimgr$2k4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Kbd,d:['ceylon.html','Kbd','$at','classNames$grdhrk']};});
m$1.atr$(kbd$,'$wgimgr$2k5',function(){return this.$wgimgr$2k5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','style$4au0dz']};});
m$1.atr$(kbd$,'$wgimgr$2k6',function(){return this.$wgimgr$2k6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','accessKey$feywd9']};});
m$1.atr$(kbd$,'$wgimgr$2k7',function(){return this.$wgimgr$2k7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','contextMenu$6ra83i']};});
m$1.atr$(kbd$,'$wgimgr$2k8',function(){return this.$wgimgr$2k8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','dir$1h86pn']};});
m$1.atr$(kbd$,'$wgimgr$2k9',function(){return this.$wgimgr$2k9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','draggable$7erth7']};});
m$1.atr$(kbd$,'$wgimgr$2ka',function(){return this.$wgimgr$2ka_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','dropZone$9l2nb7']};});
m$1.atr$(kbd$,'$wgimgr$2kb',function(){return this.$wgimgr$2kb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','inert$4s065q']};});
m$1.atr$(kbd$,'$wgimgr$2kc',function(){return this.$wgimgr$2kc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','hidden$8kqwva']};});
m$1.atr$(kbd$,'$wgimgr$2kd',function(){return this.$wgimgr$2kd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','lang$9uim6']};});
m$1.atr$(kbd$,'$wgimgr$2ke',function(){return this.$wgimgr$2ke_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','spellcheck$ghvg9s']};});
m$1.atr$(kbd$,'$wgimgr$2kf',function(){return this.$wgimgr$2kf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','tabIndex$mslik5']};});
m$1.atr$(kbd$,'$wgimgr$2kg',function(){return this.$wgimgr$2kg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','title$92vst4']};});
m$1.atr$(kbd$,'$wgimgr$2kh',function(){return this.$wgimgr$2kh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','translate$x772si']};});
m$1.atr$(kbd$,'$wgimgr$2ki',function(){return this.$wgimgr$2ki_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Kbd,d:['ceylon.html','Kbd','$at','aria$6s2dpb']};});
m$1.atr$(kbd$,'$wgimgr$2kj',function(){return this.$wgimgr$2kj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Kbd,d:['ceylon.html','Kbd','$at','nonstandardAttributes$pi5jjb']};});
m$1.atr$(kbd$,'$wgimgr$2kk',function(){return this.$wgimgr$2kk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Kbd,d:['ceylon.html','Kbd','$at','data$549bl2']};});
m$1.atr$(kbd$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Kbd,pa:3,d:['ceylon.html','Kbd','$at','children']};});
m$1.atr$(kbd$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Kbd,pa:3,d:['ceylon.html','Kbd','$at','tag']};});
})(Kbd.$$.prototype);
}
return Kbd;
}
ex$.$init$Kbd=$init$Kbd;
$init$Kbd();
function Mark(text,$wgimgr$2kl,$wgimgr$2km,$wgimgr$2kn,$wgimgr$2ko,$wgimgr$2kp,$wgimgr$2kq,$wgimgr$2kr,$wgimgr$2ks,$wgimgr$2kt,$wgimgr$2ku,$wgimgr$2kv,$wgimgr$2kw,$wgimgr$2kx,$wgimgr$2ky,$wgimgr$2kz,$wgimgr$2l0,$wgimgr$2l1,$wgimgr$2l2,children,mark$){
$init$Mark();
if(mark$===undefined)mark$=new Mark.$$;
mark$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
mark$.text_=text;
if($wgimgr$2kl===undefined){$wgimgr$2kl=null;}
mark$.$wgimgr$2kl_=$wgimgr$2kl;
if($wgimgr$2km===undefined){$wgimgr$2km=m$1.empty();}
mark$.$wgimgr$2km_=$wgimgr$2km;
if($wgimgr$2kn===undefined){$wgimgr$2kn=null;}
mark$.$wgimgr$2kn_=$wgimgr$2kn;
if($wgimgr$2ko===undefined){$wgimgr$2ko=null;}
mark$.$wgimgr$2ko_=$wgimgr$2ko;
if($wgimgr$2kp===undefined){$wgimgr$2kp=null;}
mark$.$wgimgr$2kp_=$wgimgr$2kp;
if($wgimgr$2kq===undefined){$wgimgr$2kq=null;}
mark$.$wgimgr$2kq_=$wgimgr$2kq;
if($wgimgr$2kr===undefined){$wgimgr$2kr=null;}
mark$.$wgimgr$2kr_=$wgimgr$2kr;
if($wgimgr$2ks===undefined){$wgimgr$2ks=null;}
mark$.$wgimgr$2ks_=$wgimgr$2ks;
if($wgimgr$2kt===undefined){$wgimgr$2kt=null;}
mark$.$wgimgr$2kt_=$wgimgr$2kt;
if($wgimgr$2ku===undefined){$wgimgr$2ku=null;}
mark$.$wgimgr$2ku_=$wgimgr$2ku;
if($wgimgr$2kv===undefined){$wgimgr$2kv=null;}
mark$.$wgimgr$2kv_=$wgimgr$2kv;
if($wgimgr$2kw===undefined){$wgimgr$2kw=null;}
mark$.$wgimgr$2kw_=$wgimgr$2kw;
if($wgimgr$2kx===undefined){$wgimgr$2kx=null;}
mark$.$wgimgr$2kx_=$wgimgr$2kx;
if($wgimgr$2ky===undefined){$wgimgr$2ky=null;}
mark$.$wgimgr$2ky_=$wgimgr$2ky;
if($wgimgr$2kz===undefined){$wgimgr$2kz=null;}
mark$.$wgimgr$2kz_=$wgimgr$2kz;
if($wgimgr$2l0===undefined){$wgimgr$2l0=null;}
mark$.$wgimgr$2l0_=$wgimgr$2l0;
if($wgimgr$2l1===undefined){$wgimgr$2l1=m$1.empty();}
mark$.$wgimgr$2l1_=$wgimgr$2l1;
if($wgimgr$2l2===undefined){$wgimgr$2l2=m$1.empty();}
mark$.$wgimgr$2l2_=$wgimgr$2l2;
if(children===undefined){children=m$1.empty();}
mark$.children_=children;
TextNode(mark$);
InlineElement(mark$);
ParentNode({Child$ParentNode:{t:InlineElement}},mark$);
BaseElement($wgimgr$2kl,$wgimgr$2km,$wgimgr$2kn,$wgimgr$2ko,$wgimgr$2kp,$wgimgr$2kq,$wgimgr$2kr,$wgimgr$2ks,$wgimgr$2kt,$wgimgr$2ku,$wgimgr$2kv,$wgimgr$2kw,$wgimgr$2kx,$wgimgr$2ky,$wgimgr$2kz,$wgimgr$2l0,$wgimgr$2l1,$wgimgr$2l2,mark$);
mark$.tag_=Tag("mark");
return mark$;
}
Mark.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Mark')];},d:['ceylon.html','Mark']};};
ex$.Mark=Mark;
function $init$Mark(){
if(Mark.$$===undefined){
m$1.initTypeProto(Mark,'ceylon.html::Mark',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(mark$){
m$1.atr$(mark$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Mark,pa:3,d:['ceylon.html','Mark','$at','text']};});
m$1.atr$(mark$,'$wgimgr$2kl',function(){return this.$wgimgr$2kl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','id$fmkjul']};});
m$1.atr$(mark$,'$wgimgr$2km',function(){return this.$wgimgr$2km_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Mark,d:['ceylon.html','Mark','$at','classNames$4sdcgg']};});
m$1.atr$(mark$,'$wgimgr$2kn',function(){return this.$wgimgr$2kn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','style$g9u5p3']};});
m$1.atr$(mark$,'$wgimgr$2ko',function(){return this.$wgimgr$2ko_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','accessKey$rdz1od']};});
m$1.atr$(mark$,'$wgimgr$2kp',function(){return this.$wgimgr$2kp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','contextMenu$57px7m']};});
m$1.atr$(mark$,'$wgimgr$2kq',function(){return this.$wgimgr$2kq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Mark,d:['ceylon.html','Mark','$at','dir$dg8c0r']};});
m$1.atr$(mark$,'$wgimgr$2kr',function(){return this.$wgimgr$2kr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Mark,d:['ceylon.html','Mark','$at','draggable$jdrysb']};});
m$1.atr$(mark$,'$wgimgr$2ks',function(){return this.$wgimgr$2ks_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Mark,d:['ceylon.html','Mark','$at','dropZone$2dxhzx']};});
m$1.atr$(mark$,'$wgimgr$2kt',function(){return this.$wgimgr$2kt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Mark,d:['ceylon.html','Mark','$at','inert$gr0bgu']};});
m$1.atr$(mark$,'$wgimgr$2ku',function(){return this.$wgimgr$2ku_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Mark,d:['ceylon.html','Mark','$at','hidden$kjr26e']};});
m$1.atr$(mark$,'$wgimgr$2kv',function(){return this.$wgimgr$2kv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','lang$bp5moy']};});
m$1.atr$(mark$,'$wgimgr$2kw',function(){return this.$wgimgr$2kw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Mark,d:['ceylon.html','Mark','$at','spellcheck$sgvlkw']};});
m$1.atr$(mark$,'$wgimgr$2kx',function(){return this.$wgimgr$2kx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Mark,d:['ceylon.html','Mark','$at','tabIndex$atld91']};});
m$1.atr$(mark$,'$wgimgr$2ky',function(){return this.$wgimgr$2ky_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Mark,d:['ceylon.html','Mark','$at','title$2w4ci0']};});
m$1.atr$(mark$,'$wgimgr$2kz',function(){return this.$wgimgr$2kz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Mark,d:['ceylon.html','Mark','$at','translate$puwtvi']};});
m$1.atr$(mark$,'$wgimgr$2l0',function(){return this.$wgimgr$2l0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Mark,d:['ceylon.html','Mark','$at','aria$ir2j0f']};});
m$1.atr$(mark$,'$wgimgr$2l1',function(){return this.$wgimgr$2l1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Mark,d:['ceylon.html','Mark','$at','nonstandardAttributes$xjyd4p']};});
m$1.atr$(mark$,'$wgimgr$2l2',function(){return this.$wgimgr$2l2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Mark,d:['ceylon.html','Mark','$at','data$h39gw6']};});
m$1.atr$(mark$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Mark,pa:3,d:['ceylon.html','Mark','$at','children']};});
m$1.atr$(mark$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Mark,pa:3,d:['ceylon.html','Mark','$at','tag']};});
})(Mark.$$.prototype);
}
return Mark;
}
ex$.$init$Mark=$init$Mark;
$init$Mark();
function Q(text,$wgimgr$2l3,$wgimgr$2l4,$wgimgr$2l5,$wgimgr$2l6,$wgimgr$2l7,$wgimgr$2l8,$wgimgr$2l9,$wgimgr$2la,$wgimgr$2lb,$wgimgr$2lc,$wgimgr$2ld,$wgimgr$2le,$wgimgr$2lf,$wgimgr$2lg,$wgimgr$2lh,$wgimgr$2li,$wgimgr$2lj,$wgimgr$2lk,children,q$){
$init$Q();
if(q$===undefined)q$=new Q.$$;
q$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
q$.text_=text;
if($wgimgr$2l3===undefined){$wgimgr$2l3=null;}
q$.$wgimgr$2l3_=$wgimgr$2l3;
if($wgimgr$2l4===undefined){$wgimgr$2l4=m$1.empty();}
q$.$wgimgr$2l4_=$wgimgr$2l4;
if($wgimgr$2l5===undefined){$wgimgr$2l5=null;}
q$.$wgimgr$2l5_=$wgimgr$2l5;
if($wgimgr$2l6===undefined){$wgimgr$2l6=null;}
q$.$wgimgr$2l6_=$wgimgr$2l6;
if($wgimgr$2l7===undefined){$wgimgr$2l7=null;}
q$.$wgimgr$2l7_=$wgimgr$2l7;
if($wgimgr$2l8===undefined){$wgimgr$2l8=null;}
q$.$wgimgr$2l8_=$wgimgr$2l8;
if($wgimgr$2l9===undefined){$wgimgr$2l9=null;}
q$.$wgimgr$2l9_=$wgimgr$2l9;
if($wgimgr$2la===undefined){$wgimgr$2la=null;}
q$.$wgimgr$2la_=$wgimgr$2la;
if($wgimgr$2lb===undefined){$wgimgr$2lb=null;}
q$.$wgimgr$2lb_=$wgimgr$2lb;
if($wgimgr$2lc===undefined){$wgimgr$2lc=null;}
q$.$wgimgr$2lc_=$wgimgr$2lc;
if($wgimgr$2ld===undefined){$wgimgr$2ld=null;}
q$.$wgimgr$2ld_=$wgimgr$2ld;
if($wgimgr$2le===undefined){$wgimgr$2le=null;}
q$.$wgimgr$2le_=$wgimgr$2le;
if($wgimgr$2lf===undefined){$wgimgr$2lf=null;}
q$.$wgimgr$2lf_=$wgimgr$2lf;
if($wgimgr$2lg===undefined){$wgimgr$2lg=null;}
q$.$wgimgr$2lg_=$wgimgr$2lg;
if($wgimgr$2lh===undefined){$wgimgr$2lh=null;}
q$.$wgimgr$2lh_=$wgimgr$2lh;
if($wgimgr$2li===undefined){$wgimgr$2li=null;}
q$.$wgimgr$2li_=$wgimgr$2li;
if($wgimgr$2lj===undefined){$wgimgr$2lj=m$1.empty();}
q$.$wgimgr$2lj_=$wgimgr$2lj;
if($wgimgr$2lk===undefined){$wgimgr$2lk=m$1.empty();}
q$.$wgimgr$2lk_=$wgimgr$2lk;
if(children===undefined){children=m$1.empty();}
q$.children_=children;
TextNode(q$);
InlineElement(q$);
ParentNode({Child$ParentNode:{t:InlineElement}},q$);
BaseElement($wgimgr$2l3,$wgimgr$2l4,$wgimgr$2l5,$wgimgr$2l6,$wgimgr$2l7,$wgimgr$2l8,$wgimgr$2l9,$wgimgr$2la,$wgimgr$2lb,$wgimgr$2lc,$wgimgr$2ld,$wgimgr$2le,$wgimgr$2lf,$wgimgr$2lg,$wgimgr$2lh,$wgimgr$2li,$wgimgr$2lj,$wgimgr$2lk,q$);
q$.tag_=Tag("q");
return q$;
}
Q.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Q')];},d:['ceylon.html','Q']};};
ex$.Q=Q;
function $init$Q(){
if(Q.$$===undefined){
m$1.initTypeProto(Q,'ceylon.html::Q',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(q$){
m$1.atr$(q$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Q,pa:3,d:['ceylon.html','Q','$at','text']};});
m$1.atr$(q$,'$wgimgr$2l3',function(){return this.$wgimgr$2l3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','id$rdk6pl']};});
m$1.atr$(q$,'$wgimgr$2l4',function(){return this.$wgimgr$2l4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Q,d:['ceylon.html','Q','$at','classNames$6ymaek']};});
m$1.atr$(q$,'$wgimgr$2l5',function(){return this.$wgimgr$2l5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','style$s0tsk3']};});
m$1.atr$(q$,'$wgimgr$2l6',function(){return this.$wgimgr$2l6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','accessKey$vw5dfr']};});
m$1.atr$(q$,'$wgimgr$2l7',function(){return this.$wgimgr$2l7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','contextMenu$gypk2m']};});
m$1.atr$(q$,'$wgimgr$2l8',function(){return this.$wgimgr$2l8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Q,d:['ceylon.html','Q','$at','dir$p77yvr']};});
m$1.atr$(q$,'$wgimgr$2l9',function(){return this.$wgimgr$2l9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Q,d:['ceylon.html','Q','$at','draggable$v4rlnb']};});
m$1.atr$(q$,'$wgimgr$2la',function(){return this.$wgimgr$2la_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Q,d:['ceylon.html','Q','$at','dropZone$e4x4ux']};});
m$1.atr$(q$,'$wgimgr$2lb',function(){return this.$wgimgr$2lb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Q,d:['ceylon.html','Q','$at','inert$shzybu']};});
m$1.atr$(q$,'$wgimgr$2lc',function(){return this.$wgimgr$2lc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Q,d:['ceylon.html','Q','$at','hidden$waqp1e']};});
m$1.atr$(q$,'$wgimgr$2ld',function(){return this.$wgimgr$2ld_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','lang$ng59jy']};});
m$1.atr$(q$,'$wgimgr$2le',function(){return this.$wgimgr$2le_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Q,d:['ceylon.html','Q','$at','spellcheck$ut8tj8']};});
m$1.atr$(q$,'$wgimgr$2lf',function(){return this.$wgimgr$2lf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Q,d:['ceylon.html','Q','$at','tabIndex$xe9lz']};});
m$1.atr$(q$,'$wgimgr$2lg',function(){return this.$wgimgr$2lg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Q,d:['ceylon.html','Q','$at','title$en3zd0']};});
m$1.atr$(q$,'$wgimgr$2lh',function(){return this.$wgimgr$2lh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Q,d:['ceylon.html','Q','$at','translate$e3x70i']};});
m$1.atr$(q$,'$wgimgr$2li',function(){return this.$wgimgr$2li_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Q,d:['ceylon.html','Q','$at','aria$ui25vf']};});
m$1.atr$(q$,'$wgimgr$2lj',function(){return this.$wgimgr$2lj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Q,d:['ceylon.html','Q','$at','nonstandardAttributes$lsyq9p']};});
m$1.atr$(q$,'$wgimgr$2lk',function(){return this.$wgimgr$2lk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Q,d:['ceylon.html','Q','$at','data$su93r6']};});
m$1.atr$(q$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Q,pa:3,d:['ceylon.html','Q','$at','children']};});
m$1.atr$(q$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Q,pa:3,d:['ceylon.html','Q','$at','tag']};});
})(Q.$$.prototype);
}
return Q;
}
ex$.$init$Q=$init$Q;
$init$Q();
function S(text,$wgimgr$2ll,$wgimgr$2lm,$wgimgr$2ln,$wgimgr$2lo,$wgimgr$2lp,$wgimgr$2lq,$wgimgr$2lr,$wgimgr$2ls,$wgimgr$2lt,$wgimgr$2lu,$wgimgr$2lv,$wgimgr$2lw,$wgimgr$2lx,$wgimgr$2ly,$wgimgr$2lz,$wgimgr$2m0,$wgimgr$2m1,$wgimgr$2m2,children,s$){
$init$S();
if(s$===undefined)s$=new S.$$;
s$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
s$.text_=text;
if($wgimgr$2ll===undefined){$wgimgr$2ll=null;}
s$.$wgimgr$2ll_=$wgimgr$2ll;
if($wgimgr$2lm===undefined){$wgimgr$2lm=m$1.empty();}
s$.$wgimgr$2lm_=$wgimgr$2lm;
if($wgimgr$2ln===undefined){$wgimgr$2ln=null;}
s$.$wgimgr$2ln_=$wgimgr$2ln;
if($wgimgr$2lo===undefined){$wgimgr$2lo=null;}
s$.$wgimgr$2lo_=$wgimgr$2lo;
if($wgimgr$2lp===undefined){$wgimgr$2lp=null;}
s$.$wgimgr$2lp_=$wgimgr$2lp;
if($wgimgr$2lq===undefined){$wgimgr$2lq=null;}
s$.$wgimgr$2lq_=$wgimgr$2lq;
if($wgimgr$2lr===undefined){$wgimgr$2lr=null;}
s$.$wgimgr$2lr_=$wgimgr$2lr;
if($wgimgr$2ls===undefined){$wgimgr$2ls=null;}
s$.$wgimgr$2ls_=$wgimgr$2ls;
if($wgimgr$2lt===undefined){$wgimgr$2lt=null;}
s$.$wgimgr$2lt_=$wgimgr$2lt;
if($wgimgr$2lu===undefined){$wgimgr$2lu=null;}
s$.$wgimgr$2lu_=$wgimgr$2lu;
if($wgimgr$2lv===undefined){$wgimgr$2lv=null;}
s$.$wgimgr$2lv_=$wgimgr$2lv;
if($wgimgr$2lw===undefined){$wgimgr$2lw=null;}
s$.$wgimgr$2lw_=$wgimgr$2lw;
if($wgimgr$2lx===undefined){$wgimgr$2lx=null;}
s$.$wgimgr$2lx_=$wgimgr$2lx;
if($wgimgr$2ly===undefined){$wgimgr$2ly=null;}
s$.$wgimgr$2ly_=$wgimgr$2ly;
if($wgimgr$2lz===undefined){$wgimgr$2lz=null;}
s$.$wgimgr$2lz_=$wgimgr$2lz;
if($wgimgr$2m0===undefined){$wgimgr$2m0=null;}
s$.$wgimgr$2m0_=$wgimgr$2m0;
if($wgimgr$2m1===undefined){$wgimgr$2m1=m$1.empty();}
s$.$wgimgr$2m1_=$wgimgr$2m1;
if($wgimgr$2m2===undefined){$wgimgr$2m2=m$1.empty();}
s$.$wgimgr$2m2_=$wgimgr$2m2;
if(children===undefined){children=m$1.empty();}
s$.children_=children;
TextNode(s$);
InlineElement(s$);
ParentNode({Child$ParentNode:{t:InlineElement}},s$);
BaseElement($wgimgr$2ll,$wgimgr$2lm,$wgimgr$2ln,$wgimgr$2lo,$wgimgr$2lp,$wgimgr$2lq,$wgimgr$2lr,$wgimgr$2ls,$wgimgr$2lt,$wgimgr$2lu,$wgimgr$2lv,$wgimgr$2lw,$wgimgr$2lx,$wgimgr$2ly,$wgimgr$2lz,$wgimgr$2m0,$wgimgr$2m1,$wgimgr$2m2,s$);
s$.tag_=Tag("s");
return s$;
}
S.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:S')];},d:['ceylon.html','S']};};
ex$.S=S;
function $init$S(){
if(S.$$===undefined){
m$1.initTypeProto(S,'ceylon.html::S',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(s$){
m$1.atr$(s$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:S,pa:3,d:['ceylon.html','S','$at','text']};});
m$1.atr$(s$,'$wgimgr$2ll',function(){return this.$wgimgr$2ll_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','id$djjecn']};});
m$1.atr$(s$,'$wgimgr$2lm',function(){return this.$wgimgr$2lm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:S,d:['ceylon.html','S','$at','classNames$6vehye']};});
m$1.atr$(s$,'$wgimgr$2ln',function(){return this.$wgimgr$2ln_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','style$e6t075']};});
m$1.atr$(s$,'$wgimgr$2lo',function(){return this.$wgimgr$2lo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','accessKey$paxw6f']};});
m$1.atr$(s$,'$wgimgr$2lp',function(){return this.$wgimgr$2lp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','contextMenu$34orpo']};});
m$1.atr$(s$,'$wgimgr$2lq',function(){return this.$wgimgr$2lq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:S,d:['ceylon.html','S','$at','dir$bd76it']};});
m$1.atr$(s$,'$wgimgr$2lr',function(){return this.$wgimgr$2lr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:S,d:['ceylon.html','S','$at','draggable$haqtad']};});
m$1.atr$(s$,'$wgimgr$2ls',function(){return this.$wgimgr$2ls_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:S,d:['ceylon.html','S','$at','dropZone$awchz']};});
m$1.atr$(s$,'$wgimgr$2lt',function(){return this.$wgimgr$2lt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:S,d:['ceylon.html','S','$at','inert$enz5yw']};});
m$1.atr$(s$,'$wgimgr$2lu',function(){return this.$wgimgr$2lu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:S,d:['ceylon.html','S','$at','hidden$igpwog']};});
m$1.atr$(s$,'$wgimgr$2lv',function(){return this.$wgimgr$2lv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','lang$9m4h70']};});
m$1.atr$(s$,'$wgimgr$2lw',function(){return this.$wgimgr$2lw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:S,d:['ceylon.html','S','$at','spellcheck$qdug2y']};});
m$1.atr$(s$,'$wgimgr$2lx',function(){return this.$wgimgr$2lx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:S,d:['ceylon.html','S','$at','tabIndex$cwmiqz']};});
m$1.atr$(s$,'$wgimgr$2ly',function(){return this.$wgimgr$2ly_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:S,d:['ceylon.html','S','$at','title$t3702']};});
m$1.atr$(s$,'$wgimgr$2lz',function(){return this.$wgimgr$2lz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:S,d:['ceylon.html','S','$at','translate$rxxzdg']};});
m$1.atr$(s$,'$wgimgr$2m0',function(){return this.$wgimgr$2m0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:S,d:['ceylon.html','S','$at','aria$go1dih']};});
m$1.atr$(s$,'$wgimgr$2m1',function(){return this.$wgimgr$2m1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:S,d:['ceylon.html','S','$at','nonstandardAttributes$ze4jch']};});
m$1.atr$(s$,'$wgimgr$2m2',function(){return this.$wgimgr$2m2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:S,d:['ceylon.html','S','$at','data$f08be8']};});
m$1.atr$(s$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:S,pa:3,d:['ceylon.html','S','$at','children']};});
m$1.atr$(s$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:S,pa:3,d:['ceylon.html','S','$at','tag']};});
})(S.$$.prototype);
}
return S;
}
ex$.$init$S=$init$S;
$init$S();
function Samp(text,$wgimgr$2m3,$wgimgr$2m4,$wgimgr$2m5,$wgimgr$2m6,$wgimgr$2m7,$wgimgr$2m8,$wgimgr$2m9,$wgimgr$2ma,$wgimgr$2mb,$wgimgr$2mc,$wgimgr$2md,$wgimgr$2me,$wgimgr$2mf,$wgimgr$2mg,$wgimgr$2mh,$wgimgr$2mi,$wgimgr$2mj,$wgimgr$2mk,children,samp$){
$init$Samp();
if(samp$===undefined)samp$=new Samp.$$;
samp$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
samp$.text_=text;
if($wgimgr$2m3===undefined){$wgimgr$2m3=null;}
samp$.$wgimgr$2m3_=$wgimgr$2m3;
if($wgimgr$2m4===undefined){$wgimgr$2m4=m$1.empty();}
samp$.$wgimgr$2m4_=$wgimgr$2m4;
if($wgimgr$2m5===undefined){$wgimgr$2m5=null;}
samp$.$wgimgr$2m5_=$wgimgr$2m5;
if($wgimgr$2m6===undefined){$wgimgr$2m6=null;}
samp$.$wgimgr$2m6_=$wgimgr$2m6;
if($wgimgr$2m7===undefined){$wgimgr$2m7=null;}
samp$.$wgimgr$2m7_=$wgimgr$2m7;
if($wgimgr$2m8===undefined){$wgimgr$2m8=null;}
samp$.$wgimgr$2m8_=$wgimgr$2m8;
if($wgimgr$2m9===undefined){$wgimgr$2m9=null;}
samp$.$wgimgr$2m9_=$wgimgr$2m9;
if($wgimgr$2ma===undefined){$wgimgr$2ma=null;}
samp$.$wgimgr$2ma_=$wgimgr$2ma;
if($wgimgr$2mb===undefined){$wgimgr$2mb=null;}
samp$.$wgimgr$2mb_=$wgimgr$2mb;
if($wgimgr$2mc===undefined){$wgimgr$2mc=null;}
samp$.$wgimgr$2mc_=$wgimgr$2mc;
if($wgimgr$2md===undefined){$wgimgr$2md=null;}
samp$.$wgimgr$2md_=$wgimgr$2md;
if($wgimgr$2me===undefined){$wgimgr$2me=null;}
samp$.$wgimgr$2me_=$wgimgr$2me;
if($wgimgr$2mf===undefined){$wgimgr$2mf=null;}
samp$.$wgimgr$2mf_=$wgimgr$2mf;
if($wgimgr$2mg===undefined){$wgimgr$2mg=null;}
samp$.$wgimgr$2mg_=$wgimgr$2mg;
if($wgimgr$2mh===undefined){$wgimgr$2mh=null;}
samp$.$wgimgr$2mh_=$wgimgr$2mh;
if($wgimgr$2mi===undefined){$wgimgr$2mi=null;}
samp$.$wgimgr$2mi_=$wgimgr$2mi;
if($wgimgr$2mj===undefined){$wgimgr$2mj=m$1.empty();}
samp$.$wgimgr$2mj_=$wgimgr$2mj;
if($wgimgr$2mk===undefined){$wgimgr$2mk=m$1.empty();}
samp$.$wgimgr$2mk_=$wgimgr$2mk;
if(children===undefined){children=m$1.empty();}
samp$.children_=children;
TextNode(samp$);
InlineElement(samp$);
ParentNode({Child$ParentNode:{t:InlineElement}},samp$);
BaseElement($wgimgr$2m3,$wgimgr$2m4,$wgimgr$2m5,$wgimgr$2m6,$wgimgr$2m7,$wgimgr$2m8,$wgimgr$2m9,$wgimgr$2ma,$wgimgr$2mb,$wgimgr$2mc,$wgimgr$2md,$wgimgr$2me,$wgimgr$2mf,$wgimgr$2mg,$wgimgr$2mh,$wgimgr$2mi,$wgimgr$2mj,$wgimgr$2mk,samp$);
samp$.tag_=Tag("samp");
return samp$;
}
Samp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Samp')];},d:['ceylon.html','Samp']};};
ex$.Samp=Samp;
function $init$Samp(){
if(Samp.$$===undefined){
m$1.initTypeProto(Samp,'ceylon.html::Samp',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(samp$){
m$1.atr$(samp$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Samp,pa:3,d:['ceylon.html','Samp','$at','text']};});
m$1.atr$(samp$,'$wgimgr$2m3',function(){return this.$wgimgr$2m3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','id$t5n493']};});
m$1.atr$(samp$,'$wgimgr$2m4',function(){return this.$wgimgr$2m4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Samp,d:['ceylon.html','Samp','$at','classNames$lgj1f0']};});
m$1.atr$(samp$,'$wgimgr$2m5',function(){return this.$wgimgr$2m5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','style$sidiel']};});
m$1.atr$(samp$,'$wgimgr$2m6',function(){return this.$wgimgr$2m6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','accessKey$he8mfb']};});
m$1.atr$(samp$,'$wgimgr$2m7',function(){return this.$wgimgr$2m7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','contextMenu$vgmb32']};});
m$1.atr$(samp$,'$wgimgr$2m8',function(){return this.$wgimgr$2m8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Samp,d:['ceylon.html','Samp','$at','dir$vbzc2x']};});
m$1.atr$(samp$,'$wgimgr$2m9',function(){return this.$wgimgr$2m9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Samp,d:['ceylon.html','Samp','$at','draggable$pefpbd']};});
m$1.atr$(samp$,'$wgimgr$2ma',function(){return this.$wgimgr$2ma_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Samp,d:['ceylon.html','Samp','$at','dropZone$smtvvd']};});
m$1.atr$(samp$,'$wgimgr$2mb',function(){return this.$wgimgr$2mb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Samp,d:['ceylon.html','Samp','$at','inert$s17cmu']};});
m$1.atr$(samp$,'$wgimgr$2mc',function(){return this.$wgimgr$2mc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Samp,d:['ceylon.html','Samp','$at','hidden$o8glxa']};});
m$1.atr$(samp$,'$wgimgr$2md',function(){return this.$wgimgr$2md_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','lang$x321eq']};});
m$1.atr$(samp$,'$wgimgr$2me',function(){return this.$wgimgr$2me_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Samp,d:['ceylon.html','Samp','$at','spellcheck$gbc2is']};});
m$1.atr$(samp$,'$wgimgr$2mf',function(){return this.$wgimgr$2mf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Samp,d:['ceylon.html','Samp','$at','tabIndex$ffb0mf']};});
m$1.atr$(samp$,'$wgimgr$2mg',function(){return this.$wgimgr$2mg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Samp,d:['ceylon.html','Samp','$at','title$t50qdg']};});
m$1.atr$(samp$,'$wgimgr$2mh',function(){return this.$wgimgr$2mh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Samp,d:['ceylon.html','Samp','$at','translate$dzjzy']};});
m$1.atr$(samp$,'$wgimgr$2mi',function(){return this.$wgimgr$2mi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Samp,d:['ceylon.html','Samp','$at','aria$q15539']};});
m$1.atr$(samp$,'$wgimgr$2mj',function(){return this.$wgimgr$2mj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Samp,d:['ceylon.html','Samp','$at','nonstandardAttributes$7b1z99']};});
m$1.atr$(samp$,'$wgimgr$2mk',function(){return this.$wgimgr$2mk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Samp,d:['ceylon.html','Samp','$at','data$roy77i']};});
m$1.atr$(samp$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Samp,pa:3,d:['ceylon.html','Samp','$at','children']};});
m$1.atr$(samp$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Samp,pa:3,d:['ceylon.html','Samp','$at','tag']};});
})(Samp.$$.prototype);
}
return Samp;
}
ex$.$init$Samp=$init$Samp;
$init$Samp();
function Small(text,$wgimgr$2ml,$wgimgr$2mm,$wgimgr$2mn,$wgimgr$2mo,$wgimgr$2mp,$wgimgr$2mq,$wgimgr$2mr,$wgimgr$2ms,$wgimgr$2mt,$wgimgr$2mu,$wgimgr$2mv,$wgimgr$2mw,$wgimgr$2mx,$wgimgr$2my,$wgimgr$2mz,$wgimgr$2n0,$wgimgr$2n1,$wgimgr$2n2,children,small$){
$init$Small();
if(small$===undefined)small$=new Small.$$;
small$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
small$.text_=text;
if($wgimgr$2ml===undefined){$wgimgr$2ml=null;}
small$.$wgimgr$2ml_=$wgimgr$2ml;
if($wgimgr$2mm===undefined){$wgimgr$2mm=m$1.empty();}
small$.$wgimgr$2mm_=$wgimgr$2mm;
if($wgimgr$2mn===undefined){$wgimgr$2mn=null;}
small$.$wgimgr$2mn_=$wgimgr$2mn;
if($wgimgr$2mo===undefined){$wgimgr$2mo=null;}
small$.$wgimgr$2mo_=$wgimgr$2mo;
if($wgimgr$2mp===undefined){$wgimgr$2mp=null;}
small$.$wgimgr$2mp_=$wgimgr$2mp;
if($wgimgr$2mq===undefined){$wgimgr$2mq=null;}
small$.$wgimgr$2mq_=$wgimgr$2mq;
if($wgimgr$2mr===undefined){$wgimgr$2mr=null;}
small$.$wgimgr$2mr_=$wgimgr$2mr;
if($wgimgr$2ms===undefined){$wgimgr$2ms=null;}
small$.$wgimgr$2ms_=$wgimgr$2ms;
if($wgimgr$2mt===undefined){$wgimgr$2mt=null;}
small$.$wgimgr$2mt_=$wgimgr$2mt;
if($wgimgr$2mu===undefined){$wgimgr$2mu=null;}
small$.$wgimgr$2mu_=$wgimgr$2mu;
if($wgimgr$2mv===undefined){$wgimgr$2mv=null;}
small$.$wgimgr$2mv_=$wgimgr$2mv;
if($wgimgr$2mw===undefined){$wgimgr$2mw=null;}
small$.$wgimgr$2mw_=$wgimgr$2mw;
if($wgimgr$2mx===undefined){$wgimgr$2mx=null;}
small$.$wgimgr$2mx_=$wgimgr$2mx;
if($wgimgr$2my===undefined){$wgimgr$2my=null;}
small$.$wgimgr$2my_=$wgimgr$2my;
if($wgimgr$2mz===undefined){$wgimgr$2mz=null;}
small$.$wgimgr$2mz_=$wgimgr$2mz;
if($wgimgr$2n0===undefined){$wgimgr$2n0=null;}
small$.$wgimgr$2n0_=$wgimgr$2n0;
if($wgimgr$2n1===undefined){$wgimgr$2n1=m$1.empty();}
small$.$wgimgr$2n1_=$wgimgr$2n1;
if($wgimgr$2n2===undefined){$wgimgr$2n2=m$1.empty();}
small$.$wgimgr$2n2_=$wgimgr$2n2;
if(children===undefined){children=m$1.empty();}
small$.children_=children;
TextNode(small$);
InlineElement(small$);
ParentNode({Child$ParentNode:{t:InlineElement}},small$);
BaseElement($wgimgr$2ml,$wgimgr$2mm,$wgimgr$2mn,$wgimgr$2mo,$wgimgr$2mp,$wgimgr$2mq,$wgimgr$2mr,$wgimgr$2ms,$wgimgr$2mt,$wgimgr$2mu,$wgimgr$2mv,$wgimgr$2mw,$wgimgr$2mx,$wgimgr$2my,$wgimgr$2mz,$wgimgr$2n0,$wgimgr$2n1,$wgimgr$2n2,small$);
small$.tag_=Tag("small");
return small$;
}
Small.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Small')];},d:['ceylon.html','Small']};};
ex$.Small=Small;
function $init$Small(){
if(Small.$$===undefined){
m$1.initTypeProto(Small,'ceylon.html::Small',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(small$){
m$1.atr$(small$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Small,pa:3,d:['ceylon.html','Small','$at','text']};});
m$1.atr$(small$,'$wgimgr$2ml',function(){return this.$wgimgr$2ml_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','id$adhyk3']};});
m$1.atr$(small$,'$wgimgr$2mm',function(){return this.$wgimgr$2mm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Small,d:['ceylon.html','Small','$at','classNames$a1fxqy']};});
m$1.atr$(small$,'$wgimgr$2mn',function(){return this.$wgimgr$2mn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','style$b0rkel']};});
m$1.atr$(small$,'$wgimgr$2mo',function(){return this.$wgimgr$2mo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','accessKey$m4wgdv']};});
m$1.atr$(small$,'$wgimgr$2mp',function(){return this.$wgimgr$2mp_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','contextMenu$1co2w']};});
m$1.atr$(small$,'$wgimgr$2mq',function(){return this.$wgimgr$2mq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Small,d:['ceylon.html','Small','$at','dir$875qq9']};});
m$1.atr$(small$,'$wgimgr$2mr',function(){return this.$wgimgr$2mr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Small,d:['ceylon.html','Small','$at','draggable$e4pdht']};});
m$1.atr$(small$,'$wgimgr$2ms',function(){return this.$wgimgr$2ms_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Small,d:['ceylon.html','Small','$at','dropZone$2v53al']};});
m$1.atr$(small$,'$wgimgr$2mt',function(){return this.$wgimgr$2mt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Small,d:['ceylon.html','Small','$at','inert$bhxq6c']};});
m$1.atr$(small$,'$wgimgr$2mu',function(){return this.$wgimgr$2mu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Small,d:['ceylon.html','Small','$at','hidden$faogvw']};});
m$1.atr$(small$,'$wgimgr$2mv',function(){return this.$wgimgr$2mv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','lang$6g31eg']};});
m$1.atr$(small$,'$wgimgr$2mw',function(){return this.$wgimgr$2mw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Small,d:['ceylon.html','Small','$at','spellcheck$n7t0ae']};});
m$1.atr$(small$,'$wgimgr$2mx',function(){return this.$wgimgr$2mx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Small,d:['ceylon.html','Small','$at','tabIndex$g2nyjj']};});
m$1.atr$(small$,'$wgimgr$2my',function(){return this.$wgimgr$2my_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Small,d:['ceylon.html','Small','$at','title$2cy8si']};});
m$1.atr$(small$,'$wgimgr$2mz',function(){return this.$wgimgr$2mz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Small,d:['ceylon.html','Small','$at','translate$v3zf60']};});
m$1.atr$(small$,'$wgimgr$2n0',function(){return this.$wgimgr$2n0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Small,d:['ceylon.html','Small','$at','aria$dhzxpx']};});
m$1.atr$(small$,'$wgimgr$2n1',function(){return this.$wgimgr$2n1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Small,d:['ceylon.html','Small','$at','nonstandardAttributes$w833jx']};});
m$1.atr$(small$,'$wgimgr$2n2',function(){return this.$wgimgr$2n2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Small,d:['ceylon.html','Small','$at','data$bu6vlo']};});
m$1.atr$(small$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Small,pa:3,d:['ceylon.html','Small','$at','children']};});
m$1.atr$(small$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Small,pa:3,d:['ceylon.html','Small','$at','tag']};});
})(Small.$$.prototype);
}
return Small;
}
ex$.$init$Small=$init$Small;
$init$Small();
function Strong(text,$wgimgr$2n3,$wgimgr$2n4,$wgimgr$2n5,$wgimgr$2n6,$wgimgr$2n7,$wgimgr$2n8,$wgimgr$2n9,$wgimgr$2na,$wgimgr$2nb,$wgimgr$2nc,$wgimgr$2nd,$wgimgr$2ne,$wgimgr$2nf,$wgimgr$2ng,$wgimgr$2nh,$wgimgr$2ni,$wgimgr$2nj,$wgimgr$2nk,children,strong$){
$init$Strong();
if(strong$===undefined)strong$=new Strong.$$;
strong$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
strong$.text_=text;
if($wgimgr$2n3===undefined){$wgimgr$2n3=null;}
strong$.$wgimgr$2n3_=$wgimgr$2n3;
if($wgimgr$2n4===undefined){$wgimgr$2n4=m$1.empty();}
strong$.$wgimgr$2n4_=$wgimgr$2n4;
if($wgimgr$2n5===undefined){$wgimgr$2n5=null;}
strong$.$wgimgr$2n5_=$wgimgr$2n5;
if($wgimgr$2n6===undefined){$wgimgr$2n6=null;}
strong$.$wgimgr$2n6_=$wgimgr$2n6;
if($wgimgr$2n7===undefined){$wgimgr$2n7=null;}
strong$.$wgimgr$2n7_=$wgimgr$2n7;
if($wgimgr$2n8===undefined){$wgimgr$2n8=null;}
strong$.$wgimgr$2n8_=$wgimgr$2n8;
if($wgimgr$2n9===undefined){$wgimgr$2n9=null;}
strong$.$wgimgr$2n9_=$wgimgr$2n9;
if($wgimgr$2na===undefined){$wgimgr$2na=null;}
strong$.$wgimgr$2na_=$wgimgr$2na;
if($wgimgr$2nb===undefined){$wgimgr$2nb=null;}
strong$.$wgimgr$2nb_=$wgimgr$2nb;
if($wgimgr$2nc===undefined){$wgimgr$2nc=null;}
strong$.$wgimgr$2nc_=$wgimgr$2nc;
if($wgimgr$2nd===undefined){$wgimgr$2nd=null;}
strong$.$wgimgr$2nd_=$wgimgr$2nd;
if($wgimgr$2ne===undefined){$wgimgr$2ne=null;}
strong$.$wgimgr$2ne_=$wgimgr$2ne;
if($wgimgr$2nf===undefined){$wgimgr$2nf=null;}
strong$.$wgimgr$2nf_=$wgimgr$2nf;
if($wgimgr$2ng===undefined){$wgimgr$2ng=null;}
strong$.$wgimgr$2ng_=$wgimgr$2ng;
if($wgimgr$2nh===undefined){$wgimgr$2nh=null;}
strong$.$wgimgr$2nh_=$wgimgr$2nh;
if($wgimgr$2ni===undefined){$wgimgr$2ni=null;}
strong$.$wgimgr$2ni_=$wgimgr$2ni;
if($wgimgr$2nj===undefined){$wgimgr$2nj=m$1.empty();}
strong$.$wgimgr$2nj_=$wgimgr$2nj;
if($wgimgr$2nk===undefined){$wgimgr$2nk=m$1.empty();}
strong$.$wgimgr$2nk_=$wgimgr$2nk;
if(children===undefined){children=m$1.empty();}
strong$.children_=children;
TextNode(strong$);
InlineElement(strong$);
ParentNode({Child$ParentNode:{t:InlineElement}},strong$);
BaseElement($wgimgr$2n3,$wgimgr$2n4,$wgimgr$2n5,$wgimgr$2n6,$wgimgr$2n7,$wgimgr$2n8,$wgimgr$2n9,$wgimgr$2na,$wgimgr$2nb,$wgimgr$2nc,$wgimgr$2nd,$wgimgr$2ne,$wgimgr$2nf,$wgimgr$2ng,$wgimgr$2nh,$wgimgr$2ni,$wgimgr$2nj,$wgimgr$2nk,strong$);
strong$.tag_=Tag("strong");
return strong$;
}
Strong.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Strong')];},d:['ceylon.html','Strong']};};
ex$.Strong=Strong;
function $init$Strong(){
if(Strong.$$===undefined){
m$1.initTypeProto(Strong,'ceylon.html::Strong',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(strong$){
m$1.atr$(strong$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Strong,pa:3,d:['ceylon.html','Strong','$at','text']};});
m$1.atr$(strong$,'$wgimgr$2n3',function(){return this.$wgimgr$2n3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','id$ie8fdv']};});
m$1.atr$(strong$,'$wgimgr$2n4',function(){return this.$wgimgr$2n4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Strong,d:['ceylon.html','Strong','$at','classNames$20pgx6']};});
m$1.atr$(strong$,'$wgimgr$2n5',function(){return this.$wgimgr$2n5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','style$j1i18d']};});
m$1.atr$(strong$,'$wgimgr$2n6',function(){return this.$wgimgr$2n6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','accessKey$u5mx7n']};});
m$1.atr$(strong$,'$wgimgr$2n7',function(){return this.$wgimgr$2n7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','contextMenu$7zdsqw']};});
m$1.atr$(strong$,'$wgimgr$2n8',function(){return this.$wgimgr$2n8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Strong,d:['ceylon.html','Strong','$at','dir$g7w7k1']};});
m$1.atr$(strong$,'$wgimgr$2n9',function(){return this.$wgimgr$2n9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Strong,d:['ceylon.html','Strong','$at','draggable$m5fubl']};});
m$1.atr$(strong$,'$wgimgr$2na',function(){return this.$wgimgr$2na_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Strong,d:['ceylon.html','Strong','$at','dropZone$55ldj7']};});
m$1.atr$(strong$,'$wgimgr$2nb',function(){return this.$wgimgr$2nb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Strong,d:['ceylon.html','Strong','$at','inert$jio704']};});
m$1.atr$(strong$,'$wgimgr$2nc',function(){return this.$wgimgr$2nc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Strong,d:['ceylon.html','Strong','$at','hidden$nbexpo']};});
m$1.atr$(strong$,'$wgimgr$2nd',function(){return this.$wgimgr$2nd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','lang$egti88']};});
m$1.atr$(strong$,'$wgimgr$2ne',function(){return this.$wgimgr$2ne_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Strong,d:['ceylon.html','Strong','$at','spellcheck$v8jh46']};});
m$1.atr$(strong$,'$wgimgr$2nf',function(){return this.$wgimgr$2nf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Strong,d:['ceylon.html','Strong','$at','tabIndex$81xhpr']};});
m$1.atr$(strong$,'$wgimgr$2ng',function(){return this.$wgimgr$2ng_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Strong,d:['ceylon.html','Strong','$at','title$5ns81a']};});
m$1.atr$(strong$,'$wgimgr$2nh',function(){return this.$wgimgr$2nh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Strong,d:['ceylon.html','Strong','$at','translate$n38yc8']};});
m$1.atr$(strong$,'$wgimgr$2ni',function(){return this.$wgimgr$2ni_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Strong,d:['ceylon.html','Strong','$at','aria$liqejp']};});
m$1.atr$(strong$,'$wgimgr$2nj',function(){return this.$wgimgr$2nj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Strong,d:['ceylon.html','Strong','$at','nonstandardAttributes$usahlf']};});
m$1.atr$(strong$,'$wgimgr$2nk',function(){return this.$wgimgr$2nk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Strong,d:['ceylon.html','Strong','$at','data$juxcfg']};});
m$1.atr$(strong$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Strong,pa:3,d:['ceylon.html','Strong','$at','children']};});
m$1.atr$(strong$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Strong,pa:3,d:['ceylon.html','Strong','$at','tag']};});
})(Strong.$$.prototype);
}
return Strong;
}
ex$.$init$Strong=$init$Strong;
$init$Strong();
function Sub(text,$wgimgr$2nl,$wgimgr$2nm,$wgimgr$2nn,$wgimgr$2no,$wgimgr$2np,$wgimgr$2nq,$wgimgr$2nr,$wgimgr$2ns,$wgimgr$2nt,$wgimgr$2nu,$wgimgr$2nv,$wgimgr$2nw,$wgimgr$2nx,$wgimgr$2ny,$wgimgr$2nz,$wgimgr$2o0,$wgimgr$2o1,$wgimgr$2o2,children,sub$){
$init$Sub();
if(sub$===undefined)sub$=new Sub.$$;
sub$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
sub$.text_=text;
if($wgimgr$2nl===undefined){$wgimgr$2nl=null;}
sub$.$wgimgr$2nl_=$wgimgr$2nl;
if($wgimgr$2nm===undefined){$wgimgr$2nm=m$1.empty();}
sub$.$wgimgr$2nm_=$wgimgr$2nm;
if($wgimgr$2nn===undefined){$wgimgr$2nn=null;}
sub$.$wgimgr$2nn_=$wgimgr$2nn;
if($wgimgr$2no===undefined){$wgimgr$2no=null;}
sub$.$wgimgr$2no_=$wgimgr$2no;
if($wgimgr$2np===undefined){$wgimgr$2np=null;}
sub$.$wgimgr$2np_=$wgimgr$2np;
if($wgimgr$2nq===undefined){$wgimgr$2nq=null;}
sub$.$wgimgr$2nq_=$wgimgr$2nq;
if($wgimgr$2nr===undefined){$wgimgr$2nr=null;}
sub$.$wgimgr$2nr_=$wgimgr$2nr;
if($wgimgr$2ns===undefined){$wgimgr$2ns=null;}
sub$.$wgimgr$2ns_=$wgimgr$2ns;
if($wgimgr$2nt===undefined){$wgimgr$2nt=null;}
sub$.$wgimgr$2nt_=$wgimgr$2nt;
if($wgimgr$2nu===undefined){$wgimgr$2nu=null;}
sub$.$wgimgr$2nu_=$wgimgr$2nu;
if($wgimgr$2nv===undefined){$wgimgr$2nv=null;}
sub$.$wgimgr$2nv_=$wgimgr$2nv;
if($wgimgr$2nw===undefined){$wgimgr$2nw=null;}
sub$.$wgimgr$2nw_=$wgimgr$2nw;
if($wgimgr$2nx===undefined){$wgimgr$2nx=null;}
sub$.$wgimgr$2nx_=$wgimgr$2nx;
if($wgimgr$2ny===undefined){$wgimgr$2ny=null;}
sub$.$wgimgr$2ny_=$wgimgr$2ny;
if($wgimgr$2nz===undefined){$wgimgr$2nz=null;}
sub$.$wgimgr$2nz_=$wgimgr$2nz;
if($wgimgr$2o0===undefined){$wgimgr$2o0=null;}
sub$.$wgimgr$2o0_=$wgimgr$2o0;
if($wgimgr$2o1===undefined){$wgimgr$2o1=m$1.empty();}
sub$.$wgimgr$2o1_=$wgimgr$2o1;
if($wgimgr$2o2===undefined){$wgimgr$2o2=m$1.empty();}
sub$.$wgimgr$2o2_=$wgimgr$2o2;
if(children===undefined){children=m$1.empty();}
sub$.children_=children;
TextNode(sub$);
InlineElement(sub$);
ParentNode({Child$ParentNode:{t:InlineElement}},sub$);
BaseElement($wgimgr$2nl,$wgimgr$2nm,$wgimgr$2nn,$wgimgr$2no,$wgimgr$2np,$wgimgr$2nq,$wgimgr$2nr,$wgimgr$2ns,$wgimgr$2nt,$wgimgr$2nu,$wgimgr$2nv,$wgimgr$2nw,$wgimgr$2nx,$wgimgr$2ny,$wgimgr$2nz,$wgimgr$2o0,$wgimgr$2o1,$wgimgr$2o2,sub$);
sub$.tag_=Tag("sub");
return sub$;
}
Sub.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Sub')];},d:['ceylon.html','Sub']};};
ex$.Sub=Sub;
function $init$Sub(){
if(Sub.$$===undefined){
m$1.initTypeProto(Sub,'ceylon.html::Sub',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(sub$){
m$1.atr$(sub$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Sub,pa:3,d:['ceylon.html','Sub','$at','text']};});
m$1.atr$(sub$,'$wgimgr$2nl',function(){return this.$wgimgr$2nl_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','id$ivqs26']};});
m$1.atr$(sub$,'$wgimgr$2nm',function(){return this.$wgimgr$2nm_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Sub,d:['ceylon.html','Sub','$at','classNames$vqfdlx']};});
m$1.atr$(sub$,'$wgimgr$2nn',function(){return this.$wgimgr$2nn_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','style$i8h67o']};});
m$1.atr$(sub$,'$wgimgr$2no',function(){return this.$wgimgr$2no_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','accessKey$74ca8e']};});
m$1.atr$(sub$,'$wgimgr$2np',function(){return this.$wgimgr$2np_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','contextMenu$talep5']};});
m$1.atr$(sub$,'$wgimgr$2nq',function(){return this.$wgimgr$2nq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Sub,d:['ceylon.html','Sub','$at','dir$l22zw0']};});
m$1.atr$(sub$,'$wgimgr$2nr',function(){return this.$wgimgr$2nr_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sub,d:['ceylon.html','Sub','$at','draggable$f4jd4g']};});
m$1.atr$(sub$,'$wgimgr$2ns',function(){return this.$wgimgr$2ns_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Sub,d:['ceylon.html','Sub','$at','dropZone$w4dtwu']};});
m$1.atr$(sub$,'$wgimgr$2nt',function(){return this.$wgimgr$2nt_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sub,d:['ceylon.html','Sub','$at','inert$hrb0fx']};});
m$1.atr$(sub$,'$wgimgr$2nu',function(){return this.$wgimgr$2nu_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sub,d:['ceylon.html','Sub','$at','hidden$dyk9qd']};});
m$1.atr$(sub$,'$wgimgr$2nv',function(){return this.$wgimgr$2nv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','lang$mt5p7t']};});
m$1.atr$(sub$,'$wgimgr$2nw',function(){return this.$wgimgr$2nw_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sub,d:['ceylon.html','Sub','$at','spellcheck$61fqbv']};});
m$1.atr$(sub$,'$wgimgr$2nx',function(){return this.$wgimgr$2nx_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Sub,d:['ceylon.html','Sub','$at','tabIndex$pp7ctc']};});
m$1.atr$(sub$,'$wgimgr$2ny',function(){return this.$wgimgr$2ny_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sub,d:['ceylon.html','Sub','$at','title$vm6zer']};});
m$1.atr$(sub$,'$wgimgr$2nz',function(){return this.$wgimgr$2nz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sub,d:['ceylon.html','Sub','$at','translate$anvw6v']};});
m$1.atr$(sub$,'$wgimgr$2o0',function(){return this.$wgimgr$2o0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Sub,d:['ceylon.html','Sub','$at','aria$fr8swc']};});
m$1.atr$(sub$,'$wgimgr$2o1',function(){return this.$wgimgr$2o1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Sub,d:['ceylon.html','Sub','$at','nonstandardAttributes$2yucxo']};});
m$1.atr$(sub$,'$wgimgr$2o2',function(){return this.$wgimgr$2o2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Sub,d:['ceylon.html','Sub','$at','data$hf1v0l']};});
m$1.atr$(sub$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Sub,pa:3,d:['ceylon.html','Sub','$at','children']};});
m$1.atr$(sub$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Sub,pa:3,d:['ceylon.html','Sub','$at','tag']};});
})(Sub.$$.prototype);
}
return Sub;
}
ex$.$init$Sub=$init$Sub;
$init$Sub();
function Sup(text,$wgimgr$2o3,$wgimgr$2o4,$wgimgr$2o5,$wgimgr$2o6,$wgimgr$2o7,$wgimgr$2o8,$wgimgr$2o9,$wgimgr$2oa,$wgimgr$2ob,$wgimgr$2oc,$wgimgr$2od,$wgimgr$2oe,$wgimgr$2of,$wgimgr$2og,$wgimgr$2oh,$wgimgr$2oi,$wgimgr$2oj,$wgimgr$2ok,children,sup$){
$init$Sup();
if(sup$===undefined)sup$=new Sup.$$;
sup$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
sup$.text_=text;
if($wgimgr$2o3===undefined){$wgimgr$2o3=null;}
sup$.$wgimgr$2o3_=$wgimgr$2o3;
if($wgimgr$2o4===undefined){$wgimgr$2o4=m$1.empty();}
sup$.$wgimgr$2o4_=$wgimgr$2o4;
if($wgimgr$2o5===undefined){$wgimgr$2o5=null;}
sup$.$wgimgr$2o5_=$wgimgr$2o5;
if($wgimgr$2o6===undefined){$wgimgr$2o6=null;}
sup$.$wgimgr$2o6_=$wgimgr$2o6;
if($wgimgr$2o7===undefined){$wgimgr$2o7=null;}
sup$.$wgimgr$2o7_=$wgimgr$2o7;
if($wgimgr$2o8===undefined){$wgimgr$2o8=null;}
sup$.$wgimgr$2o8_=$wgimgr$2o8;
if($wgimgr$2o9===undefined){$wgimgr$2o9=null;}
sup$.$wgimgr$2o9_=$wgimgr$2o9;
if($wgimgr$2oa===undefined){$wgimgr$2oa=null;}
sup$.$wgimgr$2oa_=$wgimgr$2oa;
if($wgimgr$2ob===undefined){$wgimgr$2ob=null;}
sup$.$wgimgr$2ob_=$wgimgr$2ob;
if($wgimgr$2oc===undefined){$wgimgr$2oc=null;}
sup$.$wgimgr$2oc_=$wgimgr$2oc;
if($wgimgr$2od===undefined){$wgimgr$2od=null;}
sup$.$wgimgr$2od_=$wgimgr$2od;
if($wgimgr$2oe===undefined){$wgimgr$2oe=null;}
sup$.$wgimgr$2oe_=$wgimgr$2oe;
if($wgimgr$2of===undefined){$wgimgr$2of=null;}
sup$.$wgimgr$2of_=$wgimgr$2of;
if($wgimgr$2og===undefined){$wgimgr$2og=null;}
sup$.$wgimgr$2og_=$wgimgr$2og;
if($wgimgr$2oh===undefined){$wgimgr$2oh=null;}
sup$.$wgimgr$2oh_=$wgimgr$2oh;
if($wgimgr$2oi===undefined){$wgimgr$2oi=null;}
sup$.$wgimgr$2oi_=$wgimgr$2oi;
if($wgimgr$2oj===undefined){$wgimgr$2oj=m$1.empty();}
sup$.$wgimgr$2oj_=$wgimgr$2oj;
if($wgimgr$2ok===undefined){$wgimgr$2ok=m$1.empty();}
sup$.$wgimgr$2ok_=$wgimgr$2ok;
if(children===undefined){children=m$1.empty();}
sup$.children_=children;
TextNode(sup$);
InlineElement(sup$);
ParentNode({Child$ParentNode:{t:InlineElement}},sup$);
BaseElement($wgimgr$2o3,$wgimgr$2o4,$wgimgr$2o5,$wgimgr$2o6,$wgimgr$2o7,$wgimgr$2o8,$wgimgr$2o9,$wgimgr$2oa,$wgimgr$2ob,$wgimgr$2oc,$wgimgr$2od,$wgimgr$2oe,$wgimgr$2of,$wgimgr$2og,$wgimgr$2oh,$wgimgr$2oi,$wgimgr$2oj,$wgimgr$2ok,sup$);
sup$.tag_=Tag("sup");
return sup$;
}
Sup.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Sup')];},d:['ceylon.html','Sup']};};
ex$.Sup=Sup;
function $init$Sup(){
if(Sup.$$===undefined){
m$1.initTypeProto(Sup,'ceylon.html::Sup',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(sup$){
m$1.atr$(sup$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Sup,pa:3,d:['ceylon.html','Sup','$at','text']};});
m$1.atr$(sup$,'$wgimgr$2o3',function(){return this.$wgimgr$2o3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','id$qcbtdg']};});
m$1.atr$(sup$,'$wgimgr$2o4',function(){return this.$wgimgr$2o4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Sup,d:['ceylon.html','Sup','$at','classNames$5xdx2f']};});
m$1.atr$(sup$,'$wgimgr$2o5',function(){return this.$wgimgr$2o5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','style$qzlf7y']};});
m$1.atr$(sup$,'$wgimgr$2o6',function(){return this.$wgimgr$2o6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','accessKey$wxdqrw']};});
m$1.atr$(sup$,'$wgimgr$2o7',function(){return this.$wgimgr$2o7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','contextMenu$fxh6qh']};});
m$1.atr$(sup$,'$wgimgr$2o8',function(){return this.$wgimgr$2o8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Sup,d:['ceylon.html','Sup','$at','dir$o5zljm']};});
m$1.atr$(sup$,'$wgimgr$2o9',function(){return this.$wgimgr$2o9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sup,d:['ceylon.html','Sup','$at','draggable$u3j8b6']};});
m$1.atr$(sup$,'$wgimgr$2oa',function(){return this.$wgimgr$2oa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Sup,d:['ceylon.html','Sup','$at','dropZone$d3oris']};});
m$1.atr$(sup$,'$wgimgr$2ob',function(){return this.$wgimgr$2ob_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sup,d:['ceylon.html','Sup','$at','inert$rgrkzp']};});
m$1.atr$(sup$,'$wgimgr$2oc',function(){return this.$wgimgr$2oc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sup,d:['ceylon.html','Sup','$at','hidden$v9ibp9']};});
m$1.atr$(sup$,'$wgimgr$2od',function(){return this.$wgimgr$2od_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','lang$meww7t']};});
m$1.atr$(sup$,'$wgimgr$2oe',function(){return this.$wgimgr$2oe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sup,d:['ceylon.html','Sup','$at','spellcheck$vuh6vd']};});
m$1.atr$(sup$,'$wgimgr$2of',function(){return this.$wgimgr$2of_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Sup,d:['ceylon.html','Sup','$at','tabIndex$3u3q6']};});
m$1.atr$(sup$,'$wgimgr$2og',function(){return this.$wgimgr$2og_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Sup,d:['ceylon.html','Sup','$at','title$dlvm0v']};});
m$1.atr$(sup$,'$wgimgr$2oh',function(){return this.$wgimgr$2oh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Sup,d:['ceylon.html','Sup','$at','translate$f55kcn']};});
m$1.atr$(sup$,'$wgimgr$2oi',function(){return this.$wgimgr$2oi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Sup,d:['ceylon.html','Sup','$at','aria$tgtsja']};});
m$1.atr$(sup$,'$wgimgr$2oj',function(){return this.$wgimgr$2oj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Sup,d:['ceylon.html','Sup','$at','nonstandardAttributes$mu73lu']};});
m$1.atr$(sup$,'$wgimgr$2ok',function(){return this.$wgimgr$2ok_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Sup,d:['ceylon.html','Sup','$at','data$rt0qf1']};});
m$1.atr$(sup$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Sup,pa:3,d:['ceylon.html','Sup','$at','children']};});
m$1.atr$(sup$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Sup,pa:3,d:['ceylon.html','Sup','$at','tag']};});
})(Sup.$$.prototype);
}
return Sup;
}
ex$.$init$Sup=$init$Sup;
$init$Sup();
function U(text,$wgimgr$2ol,$wgimgr$2om,$wgimgr$2on,$wgimgr$2oo,$wgimgr$2op,$wgimgr$2oq,$wgimgr$2or,$wgimgr$2os,$wgimgr$2ot,$wgimgr$2ou,$wgimgr$2ov,$wgimgr$2ow,$wgimgr$2ox,$wgimgr$2oy,$wgimgr$2oz,$wgimgr$2p0,$wgimgr$2p1,$wgimgr$2p2,children,u$){
$init$U();
if(u$===undefined)u$=new U.$$;
u$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
u$.text_=text;
if($wgimgr$2ol===undefined){$wgimgr$2ol=null;}
u$.$wgimgr$2ol_=$wgimgr$2ol;
if($wgimgr$2om===undefined){$wgimgr$2om=m$1.empty();}
u$.$wgimgr$2om_=$wgimgr$2om;
if($wgimgr$2on===undefined){$wgimgr$2on=null;}
u$.$wgimgr$2on_=$wgimgr$2on;
if($wgimgr$2oo===undefined){$wgimgr$2oo=null;}
u$.$wgimgr$2oo_=$wgimgr$2oo;
if($wgimgr$2op===undefined){$wgimgr$2op=null;}
u$.$wgimgr$2op_=$wgimgr$2op;
if($wgimgr$2oq===undefined){$wgimgr$2oq=null;}
u$.$wgimgr$2oq_=$wgimgr$2oq;
if($wgimgr$2or===undefined){$wgimgr$2or=null;}
u$.$wgimgr$2or_=$wgimgr$2or;
if($wgimgr$2os===undefined){$wgimgr$2os=null;}
u$.$wgimgr$2os_=$wgimgr$2os;
if($wgimgr$2ot===undefined){$wgimgr$2ot=null;}
u$.$wgimgr$2ot_=$wgimgr$2ot;
if($wgimgr$2ou===undefined){$wgimgr$2ou=null;}
u$.$wgimgr$2ou_=$wgimgr$2ou;
if($wgimgr$2ov===undefined){$wgimgr$2ov=null;}
u$.$wgimgr$2ov_=$wgimgr$2ov;
if($wgimgr$2ow===undefined){$wgimgr$2ow=null;}
u$.$wgimgr$2ow_=$wgimgr$2ow;
if($wgimgr$2ox===undefined){$wgimgr$2ox=null;}
u$.$wgimgr$2ox_=$wgimgr$2ox;
if($wgimgr$2oy===undefined){$wgimgr$2oy=null;}
u$.$wgimgr$2oy_=$wgimgr$2oy;
if($wgimgr$2oz===undefined){$wgimgr$2oz=null;}
u$.$wgimgr$2oz_=$wgimgr$2oz;
if($wgimgr$2p0===undefined){$wgimgr$2p0=null;}
u$.$wgimgr$2p0_=$wgimgr$2p0;
if($wgimgr$2p1===undefined){$wgimgr$2p1=m$1.empty();}
u$.$wgimgr$2p1_=$wgimgr$2p1;
if($wgimgr$2p2===undefined){$wgimgr$2p2=m$1.empty();}
u$.$wgimgr$2p2_=$wgimgr$2p2;
if(children===undefined){children=m$1.empty();}
u$.children_=children;
TextNode(u$);
InlineElement(u$);
ParentNode({Child$ParentNode:{t:InlineElement}},u$);
BaseElement($wgimgr$2ol,$wgimgr$2om,$wgimgr$2on,$wgimgr$2oo,$wgimgr$2op,$wgimgr$2oq,$wgimgr$2or,$wgimgr$2os,$wgimgr$2ot,$wgimgr$2ou,$wgimgr$2ov,$wgimgr$2ow,$wgimgr$2ox,$wgimgr$2oy,$wgimgr$2oz,$wgimgr$2p0,$wgimgr$2p1,$wgimgr$2p2,u$);
u$.tag_=Tag("u");
return u$;
}
U.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:U')];},d:['ceylon.html','U']};};
ex$.U=U;
function $init$U(){
if(U.$$===undefined){
m$1.initTypeProto(U,'ceylon.html::U',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(u$){
m$1.atr$(u$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:U,pa:3,d:['ceylon.html','U','$at','text']};});
m$1.atr$(u$,'$wgimgr$2ol',function(){return this.$wgimgr$2ol_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','id$ahe0b']};});
m$1.atr$(u$,'$wgimgr$2om',function(){return this.$wgimgr$2om_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:U,d:['ceylon.html','U','$at','classNames$kpfabc']};});
m$1.atr$(u$,'$wgimgr$2on',function(){return this.$wgimgr$2on_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','style$cs7u7']};});
m$1.atr$(u$,'$wgimgr$2oo',function(){return this.$wgimgr$2oo_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','accessKey$bgx3th']};});
m$1.atr$(u$,'$wgimgr$2op',function(){return this.$wgimgr$2op_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','contextMenu$apc0na']};});
m$1.atr$(u$,'$wgimgr$2oq',function(){return this.$wgimgr$2oq_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:U,d:['ceylon.html','U','$at','dir$2gtlu5']};});
m$1.atr$(u$,'$wgimgr$2or',function(){return this.$wgimgr$2or_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:U,d:['ceylon.html','U','$at','draggable$3gq0xf']};});
m$1.atr$(u$,'$wgimgr$2os',function(){return this.$wgimgr$2os_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:U,d:['ceylon.html','U','$at','dropZone$dj4fuz']};});
m$1.atr$(u$,'$wgimgr$2ot',function(){return this.$wgimgr$2ot_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:U,d:['ceylon.html','U','$at','inert$tydly']};});
m$1.atr$(u$,'$wgimgr$2ou',function(){return this.$wgimgr$2ou_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:U,d:['ceylon.html','U','$at','hidden$4mp4bi']};});
m$1.atr$(u$,'$wgimgr$2ov',function(){return this.$wgimgr$2ov_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','lang$47wb5y']};});
m$1.atr$(u$,'$wgimgr$2ow',function(){return this.$wgimgr$2ow_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:U,d:['ceylon.html','U','$at','spellcheck$cjtnq0']};});
m$1.atr$(u$,'$wgimgr$2ox',function(){return this.$wgimgr$2ox_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:U,d:['ceylon.html','U','$at','tabIndex$qqnb3x']};});
m$1.atr$(u$,'$wgimgr$2oy',function(){return this.$wgimgr$2oy_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:U,d:['ceylon.html','U','$at','title$d0xlcw']};});
m$1.atr$(u$,'$wgimgr$2oz',function(){return this.$wgimgr$2oz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:U,d:['ceylon.html','U','$at','translate$t95a8q']};});
m$1.atr$(u$,'$wgimgr$2p0',function(){return this.$wgimgr$2p0_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:U,d:['ceylon.html','U','$at','aria$2u0l5j']};});
m$1.atr$(u$,'$wgimgr$2p1',function(){return this.$wgimgr$2p1_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:U,d:['ceylon.html','U','$at','nonstandardAttributes$lk3qzj']};});
m$1.atr$(u$,'$wgimgr$2p2',function(){return this.$wgimgr$2p2_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:U,d:['ceylon.html','U','$at','data$167j1a']};});
m$1.atr$(u$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:U,pa:3,d:['ceylon.html','U','$at','children']};});
m$1.atr$(u$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:U,pa:3,d:['ceylon.html','U','$at','tag']};});
})(U.$$.prototype);
}
return U;
}
ex$.$init$U=$init$U;
$init$U();
function Var(text,$wgimgr$2p3,$wgimgr$2p4,$wgimgr$2p5,$wgimgr$2p6,$wgimgr$2p7,$wgimgr$2p8,$wgimgr$2p9,$wgimgr$2pa,$wgimgr$2pb,$wgimgr$2pc,$wgimgr$2pd,$wgimgr$2pe,$wgimgr$2pf,$wgimgr$2pg,$wgimgr$2ph,$wgimgr$2pi,$wgimgr$2pj,$wgimgr$2pk,children,var$){
$init$Var();
if(var$===undefined)var$=new Var.$$;
var$.$$targs$$={Child$ParentNode:{t:InlineElement}};
if(text===undefined){text="";}
var$.text_=text;
if($wgimgr$2p3===undefined){$wgimgr$2p3=null;}
var$.$wgimgr$2p3_=$wgimgr$2p3;
if($wgimgr$2p4===undefined){$wgimgr$2p4=m$1.empty();}
var$.$wgimgr$2p4_=$wgimgr$2p4;
if($wgimgr$2p5===undefined){$wgimgr$2p5=null;}
var$.$wgimgr$2p5_=$wgimgr$2p5;
if($wgimgr$2p6===undefined){$wgimgr$2p6=null;}
var$.$wgimgr$2p6_=$wgimgr$2p6;
if($wgimgr$2p7===undefined){$wgimgr$2p7=null;}
var$.$wgimgr$2p7_=$wgimgr$2p7;
if($wgimgr$2p8===undefined){$wgimgr$2p8=null;}
var$.$wgimgr$2p8_=$wgimgr$2p8;
if($wgimgr$2p9===undefined){$wgimgr$2p9=null;}
var$.$wgimgr$2p9_=$wgimgr$2p9;
if($wgimgr$2pa===undefined){$wgimgr$2pa=null;}
var$.$wgimgr$2pa_=$wgimgr$2pa;
if($wgimgr$2pb===undefined){$wgimgr$2pb=null;}
var$.$wgimgr$2pb_=$wgimgr$2pb;
if($wgimgr$2pc===undefined){$wgimgr$2pc=null;}
var$.$wgimgr$2pc_=$wgimgr$2pc;
if($wgimgr$2pd===undefined){$wgimgr$2pd=null;}
var$.$wgimgr$2pd_=$wgimgr$2pd;
if($wgimgr$2pe===undefined){$wgimgr$2pe=null;}
var$.$wgimgr$2pe_=$wgimgr$2pe;
if($wgimgr$2pf===undefined){$wgimgr$2pf=null;}
var$.$wgimgr$2pf_=$wgimgr$2pf;
if($wgimgr$2pg===undefined){$wgimgr$2pg=null;}
var$.$wgimgr$2pg_=$wgimgr$2pg;
if($wgimgr$2ph===undefined){$wgimgr$2ph=null;}
var$.$wgimgr$2ph_=$wgimgr$2ph;
if($wgimgr$2pi===undefined){$wgimgr$2pi=null;}
var$.$wgimgr$2pi_=$wgimgr$2pi;
if($wgimgr$2pj===undefined){$wgimgr$2pj=m$1.empty();}
var$.$wgimgr$2pj_=$wgimgr$2pj;
if($wgimgr$2pk===undefined){$wgimgr$2pk=m$1.empty();}
var$.$wgimgr$2pk_=$wgimgr$2pk;
if(children===undefined){children=m$1.empty();}
var$.children_=children;
TextNode(var$);
InlineElement(var$);
ParentNode({Child$ParentNode:{t:InlineElement}},var$);
BaseElement($wgimgr$2p3,$wgimgr$2p4,$wgimgr$2p5,$wgimgr$2p6,$wgimgr$2p7,$wgimgr$2p8,$wgimgr$2p9,$wgimgr$2pa,$wgimgr$2pb,$wgimgr$2pc,$wgimgr$2pd,$wgimgr$2pe,$wgimgr$2pf,$wgimgr$2pg,$wgimgr$2ph,$wgimgr$2pi,$wgimgr$2pj,$wgimgr$2pk,var$);
var$.tag_=Tag("var");
return var$;
}
Var.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BaseElement},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String},pa:3},{nm:'id',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'classNames',mt:'prm',def:1,$t:CssClass()},{nm:'style',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'accessKey',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'contextMenu',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'dir',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]}},{nm:'draggable',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'dropZone',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]}},{nm:'inert',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'hidden',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'lang',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'spellcheck',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'tabIndex',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'translate',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}},{nm:'aria',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]}},{nm:'nonstandardAttributes',mt:'prm',def:1,$t:NonstandardAttributes()},{nm:'data',mt:'prm',def:1,$t:DataContainer()},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},pa:3}],sts:[{t:TextNode},{t:InlineElement},{t:ParentNode,a:{Child$ParentNode:{t:InlineElement}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.html:Var')];},d:['ceylon.html','Var']};};
ex$.Var=Var;
function $init$Var(){
if(Var.$$===undefined){
m$1.initTypeProto(Var,'ceylon.html::Var',$init$TextNode(),$init$InlineElement(),$init$ParentNode(),$init$BaseElement());
(function(var$){
m$1.atr$(var$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Var,pa:3,d:['ceylon.html','Var','$at','text']};});
m$1.atr$(var$,'$wgimgr$2p3',function(){return this.$wgimgr$2p3_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','id$lpvrpv']};});
m$1.atr$(var$,'$wgimgr$2p4',function(){return this.$wgimgr$2p4_;},undefined,function(){return{mod:$CCMM$,$t:CssClass(),$cont:Var,d:['ceylon.html','Var','$at','classNames$1axveu']};});
m$1.atr$(var$,'$wgimgr$2p5',function(){return this.$wgimgr$2p5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','style$md5dkd']};});
m$1.atr$(var$,'$wgimgr$2p6',function(){return this.$wgimgr$2p6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','accessKey$xha9jn']};});
m$1.atr$(var$,'$wgimgr$2p7',function(){return this.$wgimgr$2p7_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','contextMenu$bb152w']};});
m$1.atr$(var$,'$wgimgr$2p8',function(){return this.$wgimgr$2p8_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TextDirection}]},$cont:Var,d:['ceylon.html','Var','$at','dir$jjjjw1']};});
m$1.atr$(var$,'$wgimgr$2p9',function(){return this.$wgimgr$2p9_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Var,d:['ceylon.html','Var','$at','draggable$ph36nl']};});
m$1.atr$(var$,'$wgimgr$2pa',function(){return this.$wgimgr$2pa_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DropZone}]},$cont:Var,d:['ceylon.html','Var','$at','dropZone$8h8pv7']};});
m$1.atr$(var$,'$wgimgr$2pb',function(){return this.$wgimgr$2pb_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Var,d:['ceylon.html','Var','$at','inert$mubjc4']};});
m$1.atr$(var$,'$wgimgr$2pc',function(){return this.$wgimgr$2pc_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Var,d:['ceylon.html','Var','$at','hidden$qn2a1o']};});
m$1.atr$(var$,'$wgimgr$2pd',function(){return this.$wgimgr$2pd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','lang$hsguk8']};});
m$1.atr$(var$,'$wgimgr$2pe',function(){return this.$wgimgr$2pe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Var,d:['ceylon.html','Var','$at','spellcheck$yk6tg6']};});
m$1.atr$(var$,'$wgimgr$2pf',function(){return this.$wgimgr$2pf_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Var,d:['ceylon.html','Var','$at','tabIndex$4qa5dr']};});
m$1.atr$(var$,'$wgimgr$2pg',function(){return this.$wgimgr$2pg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Var,d:['ceylon.html','Var','$at','title$8zfkda']};});
m$1.atr$(var$,'$wgimgr$2ph',function(){return this.$wgimgr$2ph_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Var,d:['ceylon.html','Var','$at','translate$jrlm08']};});
m$1.atr$(var$,'$wgimgr$2pi',function(){return this.$wgimgr$2pi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Aria}]},$cont:Var,d:['ceylon.html','Var','$at','aria$oudqvp']};});
m$1.atr$(var$,'$wgimgr$2pj',function(){return this.$wgimgr$2pj_;},undefined,function(){return{mod:$CCMM$,$t:NonstandardAttributes(),$cont:Var,d:['ceylon.html','Var','$at','nonstandardAttributes$rgn59f']};});
m$1.atr$(var$,'$wgimgr$2pk',function(){return this.$wgimgr$2pk_;},undefined,function(){return{mod:$CCMM$,$t:DataContainer(),$cont:Var,d:['ceylon.html','Var','$at','data$n6korg']};});
m$1.atr$(var$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement},{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:m$1.$_String},{t:InlineElement}]},Absent$Iterable:{t:m$1.Null}}},{t:Snippet,a:{Result$Snippet:{t:InlineElement}}},{t:m$1.Null}]},Absent$Iterable:{t:m$1.Null}}},$cont:Var,pa:3,d:['ceylon.html','Var','$at','children']};});
m$1.atr$(var$,'tag',function(){return this.tag_;},undefined,function(){return{mod:$CCMM$,$t:{t:Tag},$cont:Var,pa:3,d:['ceylon.html','Var','$at','tag']};});
})(Var.$$.prototype);
}
return Var;
}
ex$.$init$Var=$init$Var;
$init$Var();
ex$.$pkgunsh$ceylon$html={'AttributeSequenceBuilder':AttributeSequenceBuilder,'User':User,'UserRow':UserRow,'users':$prop$getUsers,'page':$prop$getPage,'run':run,'THead':THead,'TBody':TBody,'TFoot':TFoot};
ex$.$pkgunsh$ceylon$html$serializer={'asciiCharacterRange':$prop$getAsciiCharacterRange$serializer,'xmlNameStartCharRanges':$prop$getXmlNameStartCharRanges$serializer,'xmlNameCharRanges':$prop$getXmlNameCharRanges$serializer,'voidElements':$prop$getVoidElements$serializer,'rawTextElements':$prop$getRawTextElements$serializer,'escapableRawTextElements':$prop$getEscapableRawTextElements$serializer,'blockElements':$prop$getBlockElements$serializer,'metadataElements':$prop$getMetadataElements$serializer,'indentElements':$prop$getIndentElements$serializer,'EscapableType':EscapableType$serializer,'name':$prop$getName$serializer,'attributeValue':$prop$getAttributeValue$serializer,'text':$prop$getText$serializer,'rawText':$prop$getRawText$serializer,'escapableRawText':$prop$getEscapableRawText$serializer,'typeForElement':typeForElement$serializer,'htmlEscape':htmlEscape$serializer,'HtmlSerializer':HtmlSerializer$serializer};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
