(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/test/1.2.0/ceylon.test-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.test/1.2.0');
var m$2=require('ceylon/collection/1.2.0/ceylon.collection-1.2.0');
m$1.$addmod$(m$2,'ceylon.collection/1.2.0');
function test(){return TestAnnotation();};
test.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestAnnotation},ps:[],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:test')];},d:['ceylon.test','test']};};
ex$.test=test;
function testSuite($36b){return TestSuiteAnnotation($36b);};
testSuite.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestSuiteAnnotation},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Declaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.test:testSuite:$at:sources$u6zqyo')];}}],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:testSuite')];},d:['ceylon.test','testSuite']};};
ex$.testSuite=testSuite;
function testExecutor($36c){return TestExecutorAnnotation($36c);};
testExecutor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestExecutorAnnotation},ps:[{nm:'executor',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration},an:function(){return[m$1.doc("The class declaration of [[TestExecutor]].")];}}],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:testExecutor')];},d:['ceylon.test','testExecutor']};};
ex$.testExecutor=testExecutor;
function testListeners($36d){return TestListenersAnnotation($36d);};
testListeners.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestListenersAnnotation},ps:[{nm:'listeners',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.ClassDeclaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},an:function(){return[m$1.doc("The class declarations of [[TestListener]]s")];}}],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:testListeners')];},d:['ceylon.test','testListeners']};};
ex$.testListeners=testListeners;
function beforeTest(){return BeforeTestAnnotation();};
beforeTest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:BeforeTestAnnotation},ps:[],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:beforeTest')];},d:['ceylon.test','beforeTest']};};
ex$.beforeTest=beforeTest;
function afterTest(){return AfterTestAnnotation();};
afterTest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:AfterTestAnnotation},ps:[],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:afterTest')];},d:['ceylon.test','afterTest']};};
ex$.afterTest=afterTest;
function ignore($36e){if($36e===undefined){$36e="";}
return IgnoreAnnotation($36e);};
ignore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IgnoreAnnotation},ps:[{nm:'reason',mt:'prm',def:1,$t:{t:m$1.$_String},an:function(){return[m$1.doc("Reason why the test is ignored.")];}}],pa:513,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ignore')];},d:['ceylon.test','ignore']};};
ex$.ignore=ignore;
function TestAnnotation(testAnnotation$){
$init$TestAnnotation();
if(testAnnotation$===undefined)testAnnotation$=new TestAnnotation.$$;
testAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}};
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}},testAnnotation$);
return testAnnotation$;
}
TestAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestAnnotation')];},d:['ceylon.test','TestAnnotation']};};
ex$.TestAnnotation=TestAnnotation;
function $init$TestAnnotation(){
if(TestAnnotation.$$===undefined){
m$1.initTypeProto(TestAnnotation,'ceylon.test::TestAnnotation',m$1.Basic,m$1.OptionalAnnotation);
}
return TestAnnotation;
}
ex$.$init$TestAnnotation=$init$TestAnnotation;
$init$TestAnnotation();
function TestSuiteAnnotation(sources,testSuiteAnnotation$){
$init$TestSuiteAnnotation();
if(testSuiteAnnotation$===undefined)testSuiteAnnotation$=new TestSuiteAnnotation.$$;
testSuiteAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestSuiteAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}};
testSuiteAnnotation$.sources_=sources;
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestSuiteAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}},testSuiteAnnotation$);
return testSuiteAnnotation$;
}
TestSuiteAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Declaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestSuiteAnnotation:$at:sources')];}}],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestSuiteAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestSuiteAnnotation')];},d:['ceylon.test','TestSuiteAnnotation']};};
ex$.TestSuiteAnnotation=TestSuiteAnnotation;
function $init$TestSuiteAnnotation(){
if(TestSuiteAnnotation.$$===undefined){
m$1.initTypeProto(TestSuiteAnnotation,'ceylon.test::TestSuiteAnnotation',m$1.Basic,m$1.OptionalAnnotation);
(function(testSuiteAnnotation$){
m$1.atr$(testSuiteAnnotation$,'sources',function(){return this.sources_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Declaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},$cont:TestSuiteAnnotation,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestSuiteAnnotation:$at:sources')];},d:['ceylon.test','TestSuiteAnnotation','$at','sources']};});
})(TestSuiteAnnotation.$$.prototype);
}
return TestSuiteAnnotation;
}
ex$.$init$TestSuiteAnnotation=$init$TestSuiteAnnotation;
$init$TestSuiteAnnotation();
function TestExecutorAnnotation(executor,testExecutorAnnotation$){
$init$TestExecutorAnnotation();
if(testExecutorAnnotation$===undefined)testExecutorAnnotation$=new TestExecutorAnnotation.$$;
testExecutorAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestExecutorAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])};
testExecutorAnnotation$.executor_=executor;
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestExecutorAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])},testExecutorAnnotation$);
return testExecutorAnnotation$;
}
TestExecutorAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'executor',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration},pa:1,an:function(){return[m$1.doc("The class declaration of [[TestExecutor]].")];}}],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestExecutorAnnotation},ProgramElement$OptionalAnnotation:{t:'u',l:[{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}]}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestExecutorAnnotation')];},d:['ceylon.test','TestExecutorAnnotation']};};
ex$.TestExecutorAnnotation=TestExecutorAnnotation;
function $init$TestExecutorAnnotation(){
if(TestExecutorAnnotation.$$===undefined){
m$1.initTypeProto(TestExecutorAnnotation,'ceylon.test::TestExecutorAnnotation',m$1.Basic,m$1.OptionalAnnotation);
(function(testExecutorAnnotation$){
m$1.atr$(testExecutorAnnotation$,'executor',function(){return this.executor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.ClassDeclaration$meta$declaration},$cont:TestExecutorAnnotation,pa:1,an:function(){return[m$1.doc("The class declaration of [[TestExecutor]].")];},d:['ceylon.test','TestExecutorAnnotation','$at','executor']};});
})(TestExecutorAnnotation.$$.prototype);
}
return TestExecutorAnnotation;
}
ex$.$init$TestExecutorAnnotation=$init$TestExecutorAnnotation;
$init$TestExecutorAnnotation();
function TestListenersAnnotation(listeners,testListenersAnnotation$){
$init$TestListenersAnnotation();
if(testListenersAnnotation$===undefined)testListenersAnnotation$=new TestListenersAnnotation.$$;
testListenersAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestListenersAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])};
testListenersAnnotation$.listeners_=listeners;
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestListenersAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])},testListenersAnnotation$);
return testListenersAnnotation$;
}
TestListenersAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'listeners',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.ClassDeclaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},pa:1,an:function(){return[m$1.doc("The class declarations of [[TestListener]]s")];}}],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:TestListenersAnnotation},ProgramElement$OptionalAnnotation:{t:'u',l:[{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}]}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListenersAnnotation')];},d:['ceylon.test','TestListenersAnnotation']};};
ex$.TestListenersAnnotation=TestListenersAnnotation;
function $init$TestListenersAnnotation(){
if(TestListenersAnnotation.$$===undefined){
m$1.initTypeProto(TestListenersAnnotation,'ceylon.test::TestListenersAnnotation',m$1.Basic,m$1.OptionalAnnotation);
(function(testListenersAnnotation$){
m$1.atr$(testListenersAnnotation$,'listeners',function(){return this.listeners_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.ClassDeclaration$meta$declaration},Absent$Iterable:{t:m$1.Nothing}}},$cont:TestListenersAnnotation,pa:1,an:function(){return[m$1.doc("The class declarations of [[TestListener]]s")];},d:['ceylon.test','TestListenersAnnotation','$at','listeners']};});
})(TestListenersAnnotation.$$.prototype);
}
return TestListenersAnnotation;
}
ex$.$init$TestListenersAnnotation=$init$TestListenersAnnotation;
$init$TestListenersAnnotation();
function BeforeTestAnnotation(beforeTestAnnotation$){
$init$BeforeTestAnnotation();
if(beforeTestAnnotation$===undefined)beforeTestAnnotation$=new BeforeTestAnnotation.$$;
beforeTestAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:BeforeTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}};
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:BeforeTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}},beforeTestAnnotation$);
return beforeTestAnnotation$;
}
BeforeTestAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:BeforeTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:BeforeTestAnnotation')];},d:['ceylon.test','BeforeTestAnnotation']};};
ex$.BeforeTestAnnotation=BeforeTestAnnotation;
function $init$BeforeTestAnnotation(){
if(BeforeTestAnnotation.$$===undefined){
m$1.initTypeProto(BeforeTestAnnotation,'ceylon.test::BeforeTestAnnotation',m$1.Basic,m$1.OptionalAnnotation);
}
return BeforeTestAnnotation;
}
ex$.$init$BeforeTestAnnotation=$init$BeforeTestAnnotation;
$init$BeforeTestAnnotation();
function AfterTestAnnotation(afterTestAnnotation$){
$init$AfterTestAnnotation();
if(afterTestAnnotation$===undefined)afterTestAnnotation$=new AfterTestAnnotation.$$;
afterTestAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:AfterTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}};
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:AfterTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}},afterTestAnnotation$);
return afterTestAnnotation$;
}
AfterTestAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:AfterTestAnnotation},ProgramElement$OptionalAnnotation:{t:m$1.FunctionDeclaration$meta$declaration}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:AfterTestAnnotation')];},d:['ceylon.test','AfterTestAnnotation']};};
ex$.AfterTestAnnotation=AfterTestAnnotation;
function $init$AfterTestAnnotation(){
if(AfterTestAnnotation.$$===undefined){
m$1.initTypeProto(AfterTestAnnotation,'ceylon.test::AfterTestAnnotation',m$1.Basic,m$1.OptionalAnnotation);
}
return AfterTestAnnotation;
}
ex$.$init$AfterTestAnnotation=$init$AfterTestAnnotation;
$init$AfterTestAnnotation();
function IgnoreAnnotation(reason,ignoreAnnotation$){
$init$IgnoreAnnotation();
if(ignoreAnnotation$===undefined)ignoreAnnotation$=new IgnoreAnnotation.$$;
ignoreAnnotation$.$$targs$$={Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:IgnoreAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])};
ignoreAnnotation$.reason_=reason;
m$1.OptionalAnnotation({Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:IgnoreAnnotation},ProgramElement$OptionalAnnotation:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}])},ignoreAnnotation$);
return ignoreAnnotation$;
}
IgnoreAnnotation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("Reason why the test is ignored.")];}}],sts:[{t:m$1.OptionalAnnotation,a:{Type$OptionalAnnotation:{t:m$1.Anything},Value$OptionalAnnotation:{t:IgnoreAnnotation},ProgramElement$OptionalAnnotation:{t:'u',l:[{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.Module$meta$declaration}]}}}],pa:545,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:IgnoreAnnotation')];},d:['ceylon.test','IgnoreAnnotation']};};
ex$.IgnoreAnnotation=IgnoreAnnotation;
function $init$IgnoreAnnotation(){
if(IgnoreAnnotation.$$===undefined){
m$1.initTypeProto(IgnoreAnnotation,'ceylon.test::IgnoreAnnotation',m$1.Basic,m$1.OptionalAnnotation);
(function(ignoreAnnotation$){
m$1.atr$(ignoreAnnotation$,'reason',function(){return this.reason_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:IgnoreAnnotation,pa:1,an:function(){return[m$1.doc("Reason why the test is ignored.")];},d:['ceylon.test','IgnoreAnnotation','$at','reason']};});
})(IgnoreAnnotation.$$.prototype);
}
return IgnoreAnnotation;
}
ex$.$init$IgnoreAnnotation=$init$IgnoreAnnotation;
$init$IgnoreAnnotation();
function AssertionComparisonError($wgb9lg$36f,actualValue,expectedValue,assertionComparisonError$){
$init$AssertionComparisonError();
if(assertionComparisonError$===undefined)assertionComparisonError$=new AssertionComparisonError.$$;
assertionComparisonError$.$wgb9lg$36f_=$wgb9lg$36f;
assertionComparisonError$.actualValue_=actualValue;
assertionComparisonError$.expectedValue_=expectedValue;
m$1.AssertionError($wgb9lg$36f,assertionComparisonError$);
return assertionComparisonError$;
}
AssertionComparisonError.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.AssertionError},ps:[{nm:'message',mt:'prm',$t:{t:m$1.$_String},an:function(){return[m$1.doc("The message describing the problem.")];}},{nm:'actualValue',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The actual string value.")];}},{nm:'expectedValue',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The expected string value.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:AssertionComparisonError'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.test'),assertEquals),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.test'),assertNotEquals)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.test','AssertionComparisonError']};};
ex$.AssertionComparisonError=AssertionComparisonError;
function $init$AssertionComparisonError(){
if(AssertionComparisonError.$$===undefined){
m$1.initTypeProto(AssertionComparisonError,'ceylon.test::AssertionComparisonError',m$1.AssertionError);
(function(assertionComparisonError$){
m$1.atr$(assertionComparisonError$,'$wgb9lg$36f',function(){return this.$wgb9lg$36f_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AssertionComparisonError,an:function(){return[m$1.doc("The message describing the problem.")];},d:['ceylon.test','AssertionComparisonError','$at','message$8zncdi']};});
m$1.atr$(assertionComparisonError$,'actualValue',function(){return this.actualValue_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AssertionComparisonError,pa:1,an:function(){return[m$1.doc("The actual string value.")];},d:['ceylon.test','AssertionComparisonError','$at','actualValue']};});
m$1.atr$(assertionComparisonError$,'expectedValue',function(){return this.expectedValue_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AssertionComparisonError,pa:1,an:function(){return[m$1.doc("The expected string value.")];},d:['ceylon.test','AssertionComparisonError','$at','expectedValue']};});
})(AssertionComparisonError.$$.prototype);
}
return AssertionComparisonError;
}
ex$.$init$AssertionComparisonError=$init$AssertionComparisonError;
$init$AssertionComparisonError();
function fail($36g){
if($36g===undefined){$36g=null;}
throw m$1.wrapexc(m$1.AssertionError(($36h=$36g,m$1.nn$($36h)?$36h:"assertion failed")),'32:4-32:57','ceylon/test/assertions.ceylon');
var $36h;
}
ex$.fail=fail;
fail.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:fail'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"always")];},d:['ceylon.test','fail']};};
function assertTrue($36i,$36j){
if($36j===undefined){$36j=null;}
if(!$36i){
throw m$1.wrapexc(m$1.AssertionError(($36k=$36j,m$1.nn$($36k)?$36k:"assertion failed: expected true")),'43:8-43:76','ceylon/test/assertions.ceylon');
var $36k;
}
}
ex$.assertTrue=assertTrue;
assertTrue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'condition',mt:'prm',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The condition to be checked.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertTrue'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _condition_ is false.")];},d:['ceylon.test','assertTrue']};};
function assertFalse($36l,$36m){
if($36m===undefined){$36m=null;}
if($36l){
throw m$1.wrapexc(m$1.AssertionError(($36n=$36m,m$1.nn$($36n)?$36n:"assertion failed: expected false")),'55:8-55:77','ceylon/test/assertions.ceylon');
var $36n;
}
}
ex$.assertFalse=assertFalse;
assertFalse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'condition',mt:'prm',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The condition to be checked.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertFalse'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _condition_ is true.")];},d:['ceylon.test','assertFalse']};};
function assertNull($36o,$36p){
if($36p===undefined){$36p=null;}
var $36q;
if(m$1.nn$(($36q=$36o))){
throw m$1.wrapexc(m$1.AssertionError(($36r=$36p,m$1.nn$($36r)?$36r:"assertion failed: expected null, but was ".plus($36q.string).plus(""))),'67:8-67:93','ceylon/test/assertions.ceylon');
var $36r;
}
}
ex$.assertNull=assertNull;
assertNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The value to be checked.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertNull'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _val_ is not null.")];},d:['ceylon.test','assertNull']};};
function assertNotNull($36s,$36t){
if($36t===undefined){$36t=null;}
if(!m$1.nn$($36s)){
throw m$1.wrapexc(m$1.AssertionError(($36u=$36t,m$1.nn$($36u)?$36u:"assertion failed: expected not null")),'79:8-79:80','ceylon/test/assertions.ceylon');
var $36u;
}
}
ex$.assertNotNull=assertNotNull;
assertNotNull.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The value to be checked.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertNotNull'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _val_ is null.")];},d:['ceylon.test','assertNotNull']};};
function assertEquals($36v,$36w,$36x,$36y){
if($36x===undefined){$36x=null;}
if($36y===undefined){$36y=function($36z,$370){return equalsCompare($36v,$36w);};}
if(!$36y($36v,$36w)){
var $371=nullSafeString($36v);
var $372=nullSafeString($36w);
var $373="".plus(($374=$36x,m$1.nn$($374)?$374:"assertion failed")).plus(": expected <").plus($372).plus("> but was <").plus($371).plus(">");
var $374;
throw m$1.wrapexc(AssertionComparisonError($373,$371,$372),'98:8-98:82','ceylon/test/assertions.ceylon');
}
}
ex$.assertEquals=assertEquals;
assertEquals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'actual',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The actual value to be checked.")];}},{nm:'expected',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The expected value.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}},{nm:'compare',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Anything},{t:m$1.Anything}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'val1',mt:'prm',$t:{t:m$1.Anything}},{nm:'val2',mt:'prm',$t:{t:m$1.Anything}}],an:function(){return[m$1.doc("The compare function.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertEquals'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.test'),AssertionComparisonError),"When _actual_ != _expected_.")];},d:['ceylon.test','assertEquals']};};
function assertNotEquals($375,$376,$377,$378){
if($377===undefined){$377=null;}
if($378===undefined){$378=function($379,$37a){return equalsCompare($375,$376);};}
if($378($375,$376)){
var $37b=nullSafeString($375);
var $37c="".plus(($37d=$377,m$1.nn$($37d)?$37d:"assertion failed")).plus(": expected not equals <").plus($37b).plus(">");
var $37d;
throw m$1.wrapexc(m$1.AssertionError($37c),'116:8-116:46','ceylon/test/assertions.ceylon');
}
}
ex$.assertNotEquals=assertNotEquals;
assertNotEquals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'actual',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The actual value to be checked.")];}},{nm:'unexpected',mt:'prm',$t:{t:m$1.Anything},an:function(){return[m$1.doc("The expected value.")];}},{nm:'message',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},an:function(){return[m$1.doc("The message describing the problem.")];}},{nm:'compare',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Anything},{t:m$1.Anything}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'val1',mt:'prm',$t:{t:m$1.Anything}},{nm:'val2',mt:'prm',$t:{t:m$1.Anything}}],an:function(){return[m$1.doc("The compare function.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertNotEquals'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.test'),AssertionComparisonError),"When _actual_ == _unexpected_.")];},d:['ceylon.test','assertNotEquals']};};
function assertThatException($37e){
var $37f;
if(m$1.is$(($37f=$37e),{t:m$1.Throwable})){
return ExceptionAssert($37f);
}
else{
var $37g;
m$1.asrt$((m$1.is$(($37g=$37e),{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}})),"Assertion failed: \'is Anything() exceptionCallback = exceptionSource\' at assertions.ceylon (128:15-128:65)",'128:8-128:66','assertions.ceylon');
try{
$37g();
}
catch($37h){
if($37h.getT$name===undefined)$37h=m$1.NatErr($37h);
if(m$1.is$($37h,{t:m$1.Throwable})){
return ExceptionAssert($37h);
}else{throw $37h}
}
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected exception will be thrown"),'134:8-134:83','ceylon/test/assertions.ceylon');
}
}
ex$.assertThatException=assertThatException;
assertThatException.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ExceptionAssert},ps:[{nm:'exceptionSource',mt:'prm',$t:{t:'u',l:[{t:m$1.Throwable},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]},an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertThatException:$at:exceptionSource$24q0v6')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:assertThatException'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _exceptionSource()_ doesn\'t throw an Exception")];},d:['ceylon.test','assertThatException']};};
function ExceptionAssert($wgb9lg$37i,exceptionAssert$){
$init$ExceptionAssert();
if(exceptionAssert$===undefined)exceptionAssert$=new ExceptionAssert.$$;
exceptionAssert$.$wgb9lg$37i_=$wgb9lg$37i;
return exceptionAssert$;
}
ExceptionAssert.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'exception',mt:'prm',$t:{t:m$1.Throwable},an:function(){return[m$1.doc("The exception to be checked.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ExceptionAssert')];},d:['ceylon.test','ExceptionAssert']};};
ex$.ExceptionAssert=ExceptionAssert;
function $init$ExceptionAssert(){
if(ExceptionAssert.$$===undefined){
m$1.initTypeProto(ExceptionAssert,'ceylon.test::ExceptionAssert',m$1.Basic);
(function(exceptionAssert$){
m$1.atr$(exceptionAssert$,'$wgb9lg$37i',function(){return this.$wgb9lg$37i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Throwable},$cont:ExceptionAssert,an:function(){return[m$1.doc("The exception to be checked.")];},d:['ceylon.test','ExceptionAssert','$at','exception$m677t2']};});
exceptionAssert$.hasType=function($37j){
var exceptionAssert$=this;
var $37k;
if(m$1.is$(($37k=$37j),{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Nothing},Type$Class:{t:m$1.Throwable}}})){
var $37l=m$1.type$meta(exceptionAssert$.$wgb9lg$37i,{Type$type:{t:m$1.Throwable}});
if((!$37l.equals($37k))){
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected exception with type ".plus($37k.string).plus(", but has ").plus($37l.string).plus("")),'151:16-151:128','ceylon/test/assertions.ceylon');
}
}
else{
if(!$37k(m$1.type$meta(exceptionAssert$.$wgb9lg$37i,{Type$type:{t:m$1.Throwable}}))){
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected exception with different type than ".plus(m$1.type$meta(exceptionAssert$.$wgb9lg$37i,{Type$type:{t:m$1.Throwable}}).string).plus("")),'155:16-155:121','ceylon/test/assertions.ceylon');
}
}
return exceptionAssert$;
};exceptionAssert$.hasType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ExceptionAssert},ps:[{nm:'typeCondition',mt:'prm',$t:{t:'u',l:[{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Nothing},Type$Class:{t:m$1.Throwable}}},{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.ClassModel$meta$model,a:{Type$ClassModel:{t:m$1.Throwable},Arguments$ClassModel:{t:m$1.Nothing}}}]},Return$Callable:{t:m$1.$_Boolean}}}]},an:function(){return[m$1.doc("The expected type or type predicate.")];}}],$cont:ExceptionAssert,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ExceptionAssert:$m:hasType'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _exception_ hasn\'t expected type.")];},d:['ceylon.test','ExceptionAssert','$m','hasType']};};
exceptionAssert$.hasMessage=function($37m){
var exceptionAssert$=this;
var $37n=$37m;
if(m$1.is$($37n,{t:m$1.$_String})) {
if((!exceptionAssert$.$wgb9lg$37i.message.equals($37n))){
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected exception with message ".plus($37n).plus(", but has ").plus(exceptionAssert$.$wgb9lg$37i.message).plus("")),'169:16-169:141','ceylon/test/assertions.ceylon');
}
}
else if(m$1.is$($37n,{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.$_Boolean}}})) {
if(!$37n(exceptionAssert$.$wgb9lg$37i.message)){
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected different exception message than ".plus(exceptionAssert$.$wgb9lg$37i.message).plus("")),'174:16-174:121','ceylon/test/assertions.ceylon');
}
}
return exceptionAssert$;
};exceptionAssert$.hasMessage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ExceptionAssert},ps:[{nm:'messageCondition',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.$_Boolean}}}]},an:function(){return[m$1.doc("The expected message or message predicate.")];}}],$cont:ExceptionAssert,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ExceptionAssert:$m:hasMessage'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _exception_ hasn\'t expected message.")];},d:['ceylon.test','ExceptionAssert','$m','hasMessage']};};
exceptionAssert$.hasNoCause=function(){
var exceptionAssert$=this;
var $37o;
if(m$1.nn$(($37o=exceptionAssert$.$wgb9lg$37i.cause))){
throw m$1.wrapexc(m$1.AssertionError("assertion failed: expected exception without cause, but has ".plus($37o.string).plus("")),'184:12-184:105','ceylon/test/assertions.ceylon');
}
return exceptionAssert$;
};exceptionAssert$.hasNoCause.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ExceptionAssert},ps:[],$cont:ExceptionAssert,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ExceptionAssert:$m:hasNoCause'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.AssertionError),"When _exception_ has some cause.")];},d:['ceylon.test','ExceptionAssert','$m','hasNoCause']};};
})(ExceptionAssert.$$.prototype);
}
return ExceptionAssert;
}
ex$.$init$ExceptionAssert=$init$ExceptionAssert;
$init$ExceptionAssert();
function equalsCompare($37p,$37q){
var $37r;
if(m$1.nn$(($37r=$37p))){
var $37s;
if(m$1.nn$(($37s=$37q))){
return $37r.equals($37s);
}
}
return ((m$1.nn$($37p)).valueOf()==(m$1.nn$($37q)).valueOf());
}
ex$.equalsCompare=equalsCompare;
equalsCompare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'obj1',mt:'prm',$t:{t:m$1.Anything}},{nm:'obj2',mt:'prm',$t:{t:m$1.Anything}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:equalsCompare')];},d:['ceylon.test','equalsCompare']};};
function nullSafeString($37t){
var $37u;
if(m$1.nn$(($37u=$37t))){
return $37u.string;
}
function $37v(){return $37t;}
return "null";
};nullSafeString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'obj',mt:'prm',$t:{t:m$1.Anything}}],d:['ceylon.test','nullSafeString']};};
function DefaultLoggingListener$core($wgb9lg$37w,defaultLoggingListener$){
$init$DefaultLoggingListener$core();
if(defaultLoggingListener$===undefined)defaultLoggingListener$=new DefaultLoggingListener$core.$$;
if($wgb9lg$37w===undefined){$wgb9lg$37w=function($37x){return m$1.print($37x);};}
defaultLoggingListener$.$wgb9lg$37w_=$wgb9lg$37w;
TestListener(defaultLoggingListener$);
return defaultLoggingListener$;
}
DefaultLoggingListener$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'write',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.$_String}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],an:function(){return[m$1.doc("A function that log the given line.")];}}],sts:[{t:TestListener}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.core:DefaultLoggingListener')];},d:['ceylon.test.core','DefaultLoggingListener']};};
ex$.DefaultLoggingListener$core=DefaultLoggingListener$core;
function $init$DefaultLoggingListener$core(){
if(DefaultLoggingListener$core.$$===undefined){
m$1.initTypeProto(DefaultLoggingListener$core,'ceylon.test.core::DefaultLoggingListener',m$1.Basic,$init$TestListener());
(function(defaultLoggingListener$){
m$1.atr$(defaultLoggingListener$,'$wgb9lg$37w',function(){return this.$wgb9lg$37w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],$cont:DefaultLoggingListener$core,an:function(){return[m$1.doc("A function that log the given line.")];},d:['ceylon.test.core','DefaultLoggingListener','$m','write$77nnww']};});
defaultLoggingListener$.testRunStart=function($37y){
var defaultLoggingListener$=this;
defaultLoggingListener$.writeBannerStart();
};defaultLoggingListener$.testRunStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunStartEvent$event}}],$cont:DefaultLoggingListener$core,pa:3,d:['ceylon.test.core','DefaultLoggingListener','$m','testRunStart']};};
defaultLoggingListener$.testRunFinish=function($37z){
var defaultLoggingListener$=this;
defaultLoggingListener$.writeBannerResults($37z.result);
if(m$1.ne$($37z.result.results)){
defaultLoggingListener$.writeSummary($37z.result);
if($37z.result.isSuccess){
defaultLoggingListener$.writeBannerSuccess($37z.result);
}
else{
defaultLoggingListener$.writeFailures($37z.result);
defaultLoggingListener$.writeBannerFailed($37z.result);
}
}
};defaultLoggingListener$.testRunFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunFinishEvent$event}}],$cont:DefaultLoggingListener$core,pa:3,d:['ceylon.test.core','DefaultLoggingListener','$m','testRunFinish']};};
defaultLoggingListener$.testStart=function($380){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w("running: ".plus($380.description.name).plus(""));
};defaultLoggingListener$.testStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestStartEvent$event}}],$cont:DefaultLoggingListener$core,pa:3,d:['ceylon.test.core','DefaultLoggingListener','$m','testStart']};};
defaultLoggingListener$.testFinish=function($381){
var defaultLoggingListener$=this;
if(($381.result.state.equals(error())||$381.result.state.equals(failure()))){
var $382;
if(m$1.nn$(($382=$381.result.exception))){
$382.printStackTrace();
}
}
};defaultLoggingListener$.testFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event}}],$cont:DefaultLoggingListener$core,pa:3,d:['ceylon.test.core','DefaultLoggingListener','$m','testFinish']};};
defaultLoggingListener$.testError=function($383){
var defaultLoggingListener$=this;
if(($383.result.state.equals(error())||$383.result.state.equals(failure()))){
var $384;
if(m$1.nn$(($384=$383.result.exception))){
$384.printStackTrace();
}
}
};defaultLoggingListener$.testError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event}}],$cont:DefaultLoggingListener$core,pa:3,d:['ceylon.test.core','DefaultLoggingListener','$m','testError']};};
defaultLoggingListener$.writeBannerStart=function(){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w(defaultLoggingListener$.banner("TESTS STARTED"));
};defaultLoggingListener$.writeBannerStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeBannerStart']};};
defaultLoggingListener$.writeBannerResults=function($385){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w(defaultLoggingListener$.banner("TEST RESULTS"));
if($385.results.empty){
defaultLoggingListener$.$wgb9lg$37w("There were no tests!");
}
};defaultLoggingListener$.writeBannerResults.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestRunResult}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeBannerResults']};};
defaultLoggingListener$.writeBannerSuccess=function($386){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w(defaultLoggingListener$.banner("TESTS SUCCESS"));
};defaultLoggingListener$.writeBannerSuccess.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestRunResult}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeBannerSuccess']};};
defaultLoggingListener$.writeBannerFailed=function($387){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w(defaultLoggingListener$.banner("TESTS FAILED !"));
};defaultLoggingListener$.writeBannerFailed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestRunResult}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeBannerFailed']};};
defaultLoggingListener$.writeSummary=function($388){
var defaultLoggingListener$=this;
defaultLoggingListener$.$wgb9lg$37w("run:     ".plus($388.runCount.string).plus(""));
defaultLoggingListener$.$wgb9lg$37w("success: ".plus($388.successCount.string).plus(""));
defaultLoggingListener$.$wgb9lg$37w("failure: ".plus($388.failureCount.string).plus(""));
defaultLoggingListener$.$wgb9lg$37w("error:   ".plus($388.errorCount.string).plus(""));
defaultLoggingListener$.$wgb9lg$37w("ignored: ".plus($388.ignoreCount.string).plus(""));
defaultLoggingListener$.$wgb9lg$37w("time:    ".plus($388.elapsedTime.divided(1000).string).plus("s"));
defaultLoggingListener$.$wgb9lg$37w("");
};defaultLoggingListener$.writeSummary.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestRunResult}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeSummary']};};
defaultLoggingListener$.writeFailures=function($389){
var defaultLoggingListener$=this;
var $38b;for(var $38a=$389.results.iterator();($38b=$38a.next())!==m$1.finished();){
if((($38b.state.equals(failure())||$38b.state.equals(error()))&&$38b.description.children.empty)){
defaultLoggingListener$.$wgb9lg$37w($38b.string);
}
}
defaultLoggingListener$.$wgb9lg$37w("");
};defaultLoggingListener$.writeFailures.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestRunResult}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','writeFailures']};};
defaultLoggingListener$.banner=function($38c){
var defaultLoggingListener$=this;
var $38d=m$1.StringBuilder();
var $38e=(60);
var $38f=$38e.minus($38c.size).minus(2);
var $38h=(0),$38g=$38f.divided(2),$38i=$38h.compare($38g),$38j=$38i===m$1.smaller()?'successor':'predecessor';for(var $38k=m$1.eorl$($38i);$38k($38g,$38h);$38h=$38h[$38j]){
$38d.appendCharacter(m$1.Character(61,true));
}
if((($38f.remainder(2)).valueOf()==(1).valueOf())){
$38d.appendCharacter(m$1.Character(61,true));
}
$38d.append(" ").append($38c).append(" ");
var $38m=(0),$38l=$38f.divided(2),$38n=$38m.compare($38l),$38o=$38n===m$1.smaller()?'successor':'predecessor';for(var $38p=m$1.eorl$($38n);$38p($38l,$38m);$38m=$38m[$38o]){
$38d.appendCharacter(m$1.Character(61,true));
}
return $38d.string;
};defaultLoggingListener$.banner.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'title',mt:'prm',$t:{t:m$1.$_String}}],$cont:DefaultLoggingListener$core,pa:9,d:['ceylon.test.core','DefaultLoggingListener','$m','banner']};};
})(DefaultLoggingListener$core.$$.prototype);
}
return DefaultLoggingListener$core;
}
ex$.$init$DefaultLoggingListener$core=$init$DefaultLoggingListener$core;
$init$DefaultLoggingListener$core();
function DefaultTestExecutor$core($wgb9lg$38q,$wgb9lg$38r,defaultTestExecutor$){
$init$DefaultTestExecutor$core();
if(defaultTestExecutor$===undefined)defaultTestExecutor$=new DefaultTestExecutor$core.$$;
defaultTestExecutor$.$wgb9lg$38q_=$wgb9lg$38q;
defaultTestExecutor$.$wgb9lg$38r_=$wgb9lg$38r;
TestExecutor(defaultTestExecutor$);
return defaultTestExecutor$;
}
DefaultTestExecutor$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'functionDeclaration',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'classDeclaration',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]}}],sts:[{t:TestExecutor}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.core:DefaultTestExecutor')];},d:['ceylon.test.core','DefaultTestExecutor']};};
ex$.DefaultTestExecutor$core=DefaultTestExecutor$core;
function $init$DefaultTestExecutor$core(){
if(DefaultTestExecutor$core.$$===undefined){
m$1.initTypeProto(DefaultTestExecutor$core,'ceylon.test.core::DefaultTestExecutor',m$1.Basic,$init$TestExecutor());
(function(defaultTestExecutor$){
m$1.atr$(defaultTestExecutor$,'$wgb9lg$38q',function(){return this.$wgb9lg$38q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.FunctionDeclaration$meta$declaration},$cont:DefaultTestExecutor$core,d:['ceylon.test.core','DefaultTestExecutor','$at','functionDeclaration$wv1xn3']};});
m$1.atr$(defaultTestExecutor$,'$wgb9lg$38r',function(){return this.$wgb9lg$38r_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]},$cont:DefaultTestExecutor$core,d:['ceylon.test.core','DefaultTestExecutor','$at','classDeclaration$brvm6p']};});
m$1.atr$(defaultTestExecutor$,'description',function(){
var defaultTestExecutor$=this;
return TestDescription(defaultTestExecutor$.getName(),defaultTestExecutor$.$wgb9lg$38q,defaultTestExecutor$.$wgb9lg$38r);
},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:DefaultTestExecutor$core,pa:11,d:['ceylon.test.core','DefaultTestExecutor','$at','description']};});
defaultTestExecutor$.execute=function($38s){
var defaultTestExecutor$=this;
if((defaultTestExecutor$.verify($38s)&&!defaultTestExecutor$.handleIgnored($38s))){
var $38t=defaultTestExecutor$.getInstance();
var $38u=m$1.$JsCallable(defaultTestExecutor$.handleTestExecution($38s,$38t,m$1.$JsCallable(defaultTestExecutor$.handleAfterCallbacks($38s,$38t,m$1.$JsCallable(defaultTestExecutor$.handleBeforeCallbacks($38s,$38t,m$1.$JsCallable(defaultTestExecutor$.handleTestInvocation($38s,$38t),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}})),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}})),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}})),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}});
$38u();
}
};defaultTestExecutor$.execute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}}],$cont:DefaultTestExecutor$core,pa:11,d:['ceylon.test.core','DefaultTestExecutor','$m','execute']};};
defaultTestExecutor$.verify=function($38v){
var defaultTestExecutor$=this;
try{
var $38w;
if(m$1.nn$(($38w=defaultTestExecutor$.$wgb9lg$38r))){
defaultTestExecutor$.verifyClassAttributes($38w);
defaultTestExecutor$.verifyClassParameters($38w);
defaultTestExecutor$.verifyClassTypeParameters($38w);
}
defaultTestExecutor$.verifyFunctionAnnotations();
defaultTestExecutor$.verifyFunctionParameters();
defaultTestExecutor$.verifyFunctionTypeParameters();
defaultTestExecutor$.verifyFunctionReturnType();
defaultTestExecutor$.verifyBeforeCallbacks();
defaultTestExecutor$.verifyAfterCallbacks();
return true;
}
catch($38x){
if($38x.getT$name===undefined)$38x=m$1.NatErr($38x);
if(m$1.is$($38x,{t:m$1.Exception})){
$38v.fireTestError(TestErrorEvent$event(TestResult(defaultTestExecutor$.description,error(),$38x)));
return false;
}else{throw $38x}
}
};defaultTestExecutor$.verify.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}}],$cont:DefaultTestExecutor$core,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.core:DefaultTestExecutor:$m:verify')];},d:['ceylon.test.core','DefaultTestExecutor','$m','verify']};};
defaultTestExecutor$.verifyClassAttributes=function($38y){
var defaultTestExecutor$=this;
if(!$38y.toplevel){
throw m$1.wrapexc(m$1.Exception("class ".plus($38y.qualifiedName).plus(" should be toplevel")),'62:12-62:90','ceylon/test/core/DefaultTestExecutor.ceylon');
}
if($38y.$_abstract){
throw m$1.wrapexc(m$1.Exception("class ".plus($38y.qualifiedName).plus(" should not be abstract")),'65:12-65:94','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyClassAttributes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'classDeclaration',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyClassAttributes']};};
defaultTestExecutor$.verifyClassParameters=function($38z){
var defaultTestExecutor$=this;
if(!$38z.anonymous){
var $390;
if(m$1.nn$(($390=$38z.parameterDeclarations))){
if(!$390.empty){
throw m$1.wrapexc(m$1.Exception("class ".plus($38z.qualifiedName).plus(" should have no parameters")),'73:20-73:105','ceylon/test/core/DefaultTestExecutor.ceylon');
}
}
else{
throw m$1.wrapexc(m$1.Exception("class ".plus($38z.qualifiedName).plus(" should either have a parameter list or have a default constructor")),'76:16-76:141','ceylon/test/core/DefaultTestExecutor.ceylon');
}
}
};defaultTestExecutor$.verifyClassParameters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'classDeclaration',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyClassParameters']};};
defaultTestExecutor$.verifyClassTypeParameters=function($391){
var defaultTestExecutor$=this;
if(!$391.typeParameterDeclarations.empty){
throw m$1.wrapexc(m$1.Exception("class ".plus($391.qualifiedName).plus(" should have no type parameters")),'83:12-83:102','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyClassTypeParameters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'classDeclaration',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyClassTypeParameters']};};
defaultTestExecutor$.verifyFunctionAnnotations=function(){
var defaultTestExecutor$=this;
if(defaultTestExecutor$.$wgb9lg$38q.annotations({Annotation$annotations:{t:TestAnnotation}}).empty){
throw m$1.wrapexc(m$1.Exception("function ".plus(defaultTestExecutor$.$wgb9lg$38q.qualifiedName).plus(" should be annotated with test")),'89:12-89:107','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyFunctionAnnotations.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyFunctionAnnotations']};};
defaultTestExecutor$.verifyFunctionParameters=function(){
var defaultTestExecutor$=this;
if(!defaultTestExecutor$.$wgb9lg$38q.parameterDeclarations.empty){
throw m$1.wrapexc(m$1.Exception("function ".plus(defaultTestExecutor$.$wgb9lg$38q.qualifiedName).plus(" should have no parameters")),'95:12-95:103','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyFunctionParameters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyFunctionParameters']};};
defaultTestExecutor$.verifyFunctionTypeParameters=function(){
var defaultTestExecutor$=this;
if(!defaultTestExecutor$.$wgb9lg$38q.typeParameterDeclarations.empty){
throw m$1.wrapexc(m$1.Exception("function ".plus(defaultTestExecutor$.$wgb9lg$38q.qualifiedName).plus(" should have no type parameters")),'101:12-101:108','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyFunctionTypeParameters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyFunctionTypeParameters']};};
defaultTestExecutor$.verifyFunctionReturnType=function(){
var defaultTestExecutor$=this;
var $392;
if(m$1.is$(($392=defaultTestExecutor$.$wgb9lg$38q.openType),{t:m$1.OpenClassOrInterfaceType$meta$declaration})&&(!$392.declaration.equals(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Anything)))){
throw m$1.wrapexc(m$1.Exception("function ".plus(defaultTestExecutor$.$wgb9lg$38q.qualifiedName).plus(" should be void")),'107:12-107:92','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyFunctionReturnType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyFunctionReturnType']};};
defaultTestExecutor$.verifyBeforeCallbacks=function(){
var defaultTestExecutor$=this;
var $393=defaultTestExecutor$.$wgb9lg$394({CallbackType$findCallbacks:{t:BeforeTestAnnotation}});
var $396;for(var $395=$393.iterator();($396=$395.next())!==m$1.finished();){
defaultTestExecutor$.verifyCallback($396,"before callback ".plus($396.qualifiedName).plus(""));
}
};defaultTestExecutor$.verifyBeforeCallbacks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyBeforeCallbacks']};};
defaultTestExecutor$.verifyAfterCallbacks=function(){
var defaultTestExecutor$=this;
var $397=defaultTestExecutor$.$wgb9lg$394({CallbackType$findCallbacks:{t:AfterTestAnnotation}});
var $399;for(var $398=$397.iterator();($399=$398.next())!==m$1.finished();){
defaultTestExecutor$.verifyCallback($399,"after callback ".plus($399.qualifiedName).plus(""));
}
};defaultTestExecutor$.verifyAfterCallbacks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyAfterCallbacks']};};
defaultTestExecutor$.verifyCallback=function($39a,$39b){
var defaultTestExecutor$=this;
if(!$39a.parameterDeclarations.empty){
throw m$1.wrapexc(m$1.Exception("".plus($39b).plus(" should have no parameters")),'127:12-127:73','ceylon/test/core/DefaultTestExecutor.ceylon');
}
if(!$39a.typeParameterDeclarations.empty){
throw m$1.wrapexc(m$1.Exception("".plus($39b).plus(" should have no type parameters")),'130:12-130:78','ceylon/test/core/DefaultTestExecutor.ceylon');
}
var $39c;
if(m$1.is$(($39c=$39a.openType),{t:m$1.OpenClassOrInterfaceType$meta$declaration})&&(!$39c.declaration.equals(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Anything)))){
throw m$1.wrapexc(m$1.Exception("".plus($39b).plus(" should be void")),'133:12-133:62','ceylon/test/core/DefaultTestExecutor.ceylon');
}
};defaultTestExecutor$.verifyCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'callbackDeclaration',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'callbackName',mt:'prm',$t:{t:m$1.$_String}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','verifyCallback']};};
defaultTestExecutor$.handleIgnored=function($39d){
var defaultTestExecutor$=this;
var $39e=findAnnotation$core(defaultTestExecutor$.$wgb9lg$38q,defaultTestExecutor$.$wgb9lg$38r,{A$findAnnotation:{t:IgnoreAnnotation}});
var $39f;
if(m$1.nn$(($39f=$39e))){
$39d.fireTestIgnore(TestIgnoreEvent$event(TestResult(defaultTestExecutor$.description,ignored(),IgnoreException$core($39f.reason))));
return true;
}
function $39g(){return $39e;}
return false;
};defaultTestExecutor$.handleIgnored.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','handleIgnored']};};
defaultTestExecutor$.handleTestExecution=function($39h,$39i,$39j){
var defaultTestExecutor$=this;
var $39k=function(){
var $39l=m$1.system().milliseconds;
function $39m(){return m$1.system().milliseconds.minus($39l);};
try{
$39h.fireTestStart(TestStartEvent$event(defaultTestExecutor$.description,$39i));
$39j();
$39h.fireTestFinish(TestFinishEvent$event(TestResult(defaultTestExecutor$.description,success(),null,$39m()),$39i));
}
catch($39n){
if($39n.getT$name===undefined)$39n=m$1.NatErr($39n);
if(m$1.is$($39n,{t:m$1.Throwable})){
if(m$1.is$($39n,{t:IgnoreException$core})){
$39h.fireTestIgnore(TestIgnoreEvent$event(TestResult(defaultTestExecutor$.description,ignored(),$39n)));
}
else{
if(m$1.is$($39n,{t:m$1.AssertionError})){
$39h.fireTestFinish(TestFinishEvent$event(TestResult(defaultTestExecutor$.description,failure(),$39n,$39m()),$39i));
}
else{
$39h.fireTestFinish(TestFinishEvent$event(TestResult(defaultTestExecutor$.description,error(),$39n,$39m()),$39i));
}
}
}else{throw $39n}
}
};
$39k.$crtmm$=function(){return{ps:[],$t:{t:m$1.Anything}};};return m$1.JsCallable(0,$39k);
};defaultTestExecutor$.handleTestExecution.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}},{nm:'instance',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}},{nm:'execute',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','handleTestExecution']};};
defaultTestExecutor$.handleBeforeCallbacks=function($39o,$39p,$39q){
var defaultTestExecutor$=this;
var $39r=function(){
var $39s=defaultTestExecutor$.$wgb9lg$394({CallbackType$findCallbacks:{t:BeforeTestAnnotation}}).reversed;
var $39u;for(var $39t=$39s.iterator();($39u=$39t.next())!==m$1.finished();){
defaultTestExecutor$.$wgb9lg$39v($39u,$39p);
}
$39q();
};
$39r.$crtmm$=function(){return{ps:[],$t:{t:m$1.Anything}};};return m$1.JsCallable(0,$39r);
};defaultTestExecutor$.handleBeforeCallbacks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}},{nm:'instance',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}},{nm:'execute',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','handleBeforeCallbacks']};};
defaultTestExecutor$.handleAfterCallbacks=function($39w,$39x,$39y){
var defaultTestExecutor$=this;
var $39z=function(){
var $3a0=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Throwable}});
try{
$39y();
}
catch($3a1){
if($3a1.getT$name===undefined)$3a1=m$1.NatErr($3a1);
if(m$1.is$($3a1,{t:m$1.Throwable})){
$3a0.add($3a1);
}else{throw $3a1}
}
finally{
var $3a2=defaultTestExecutor$.$wgb9lg$394({CallbackType$findCallbacks:{t:AfterTestAnnotation}});
var $3a4;for(var $3a3=$3a2.iterator();($3a4=$3a3.next())!==m$1.finished();){
try{
defaultTestExecutor$.$wgb9lg$39v($3a4,$39x);
}
catch($3a5){
if($3a5.getT$name===undefined)$3a5=m$1.NatErr($3a5);
if(m$1.is$($3a5,{t:m$1.Throwable})){
$3a0.add($3a5);
}else{throw $3a5}
}
}
}
if((($3a0.size).valueOf()==(1).valueOf())){
var $3a6;
m$1.asrt$((m$1.nn$(($3a6=$3a0.first))),"Assertion failed: \'exists e = exceptions.first\' at DefaultTestExecutor.ceylon (197:19-197:47)",'197:12-197:48','DefaultTestExecutor.ceylon');
throw m$1.wrapexc($3a6,'198:12-198:19','ceylon/test/core/DefaultTestExecutor.ceylon');
}
else{
if(($3a0.size>1)){
throw m$1.wrapexc(MultipleFailureException$core($3a0.sequence()),'200:12-200:65','ceylon/test/core/DefaultTestExecutor.ceylon');
}
}
};
$39z.$crtmm$=function(){return{ps:[],$t:{t:m$1.Anything}};};return m$1.JsCallable(0,$39z);
};defaultTestExecutor$.handleAfterCallbacks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}},{nm:'instance',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}},{nm:'execute',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','handleAfterCallbacks']};};
defaultTestExecutor$.handleTestInvocation=function($3a7,$3a8){
var defaultTestExecutor$=this;
var $3a9=function(){
defaultTestExecutor$.$wgb9lg$39v(defaultTestExecutor$.$wgb9lg$38q,$3a8);
};
$3a9.$crtmm$=function(){return{ps:[],$t:{t:m$1.Anything}};};return m$1.JsCallable(0,$3a9);
};defaultTestExecutor$.handleTestInvocation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}},{nm:'instance',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}}],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','handleTestInvocation']};};
defaultTestExecutor$.getName=function(){
var defaultTestExecutor$=this;
if(defaultTestExecutor$.$wgb9lg$38q.toplevel){
return defaultTestExecutor$.$wgb9lg$38q.qualifiedName;
}
else{
var $3aa;
m$1.asrt$((m$1.nn$(($3aa=defaultTestExecutor$.$wgb9lg$38r))),"Assertion failed: \'exists classDeclaration\' at DefaultTestExecutor.ceylon (212:19-212:43)",'212:12-212:44','DefaultTestExecutor.ceylon');
return $3aa.qualifiedName.plus(".").plus(defaultTestExecutor$.$wgb9lg$38q.name);
}
};defaultTestExecutor$.getName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','getName']};};
defaultTestExecutor$.getInstance=function(){
var defaultTestExecutor$=this;
var $3ab;
if(m$1.nn$(($3ab=defaultTestExecutor$.$wgb9lg$38r))){
if($3ab.anonymous){
var $3ac;
m$1.asrt$((m$1.nn$(($3ac=($3ad=$3ab.objectValue,m$1.JsCallable($3ad,m$1.nn$($3ad)?$3ad.$_get:null))()))),"Assertion failed: \'exists objectInstance = classDeclaration.objectValue?.get()\' at DefaultTestExecutor.ceylon (220:22-220:82)",'220:16-220:83','DefaultTestExecutor.ceylon');
var $3ad;
return $3ac;
}
else{
var $3ae;
m$1.asrt$((m$1.is$(($3ae=$3ab.$_apply(undefined,{Type$apply:{t:m$1.$_Object}})),{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Empty},Type$Class:{t:m$1.$_Object}}})),"Assertion failed: \'is Class<Object,[]> classModel = classDeclaration.apply<Object>()\' at DefaultTestExecutor.ceylon (223:23-223:89)",'223:16-223:90','DefaultTestExecutor.ceylon');
return $3ae();
}
}
else{
return null;
}
};defaultTestExecutor$.getInstance.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},ps:[],$cont:DefaultTestExecutor$core,pa:9,d:['ceylon.test.core','DefaultTestExecutor','$m','getInstance']};};
defaultTestExecutor$.$wgb9lg$394=function($n48is4$){
var defaultTestExecutor$=this;
return callbackCache$core().$_get(($3af=defaultTestExecutor$.$wgb9lg$38r,m$1.nn$($3af)?$3af:defaultTestExecutor$.$wgb9lg$38q.containingPackage),m$1.typeLiteral$meta({Type$typeLiteral:$n48is4$.CallbackType$findCallbacks}),{CallbackType$get:$n48is4$.CallbackType$findCallbacks});
var $3af;
};defaultTestExecutor$.$wgb9lg$394.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}},ps:[],$cont:DefaultTestExecutor$core,tp:{CallbackType$findCallbacks:{sts:[{t:m$1.Annotation}]}},d:['ceylon.test.core','DefaultTestExecutor','$m','findCallbacks$o26xm2']};};
defaultTestExecutor$.$wgb9lg$39v=function($3ag,$3ah){
var defaultTestExecutor$=this;
if($3ag.toplevel){
$3ag.invoke();
}
else{
var $3ai;
m$1.asrt$((m$1.nn$(($3ai=$3ah))),"Assertion failed: \'exists i = instance\' at DefaultTestExecutor.ceylon (239:18-239:38)",'239:12-239:39','DefaultTestExecutor.ceylon');
$3ag.memberInvoke($3ai);
}
};defaultTestExecutor$.$wgb9lg$39v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'f',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'instance',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}}],$cont:DefaultTestExecutor$core,d:['ceylon.test.core','DefaultTestExecutor','$m','invokeFunction$vvhr5f']};};
})(DefaultTestExecutor$core.$$.prototype);
}
return DefaultTestExecutor$core;
}
ex$.$init$DefaultTestExecutor$core=$init$DefaultTestExecutor$core;
$init$DefaultTestExecutor$core();
function doFindCallbacks$core($3aj,$3ak,$6z0gax$){
function $3al($3am,$3an){
$3an($3am);
var $3ao=($3ap=$3am.extendedType,m$1.nn$($3ap)?$3ap.declaration:null);
var $3ap;
var $3aq;
if(m$1.nn$(($3aq=$3ao))&&(!$3aq.equals(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.0','$'),m$1.Basic)))){
$3al($3aq,m$1.JsCallable(0,$3an));
}
var $3as;for(var $3ar=$3am.satisfiedTypes.iterator();($3as=$3ar.next())!==m$1.finished();){
$3al($3as.declaration,m$1.JsCallable(0,$3an));
}
};$3al.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'decl',mt:'prm',$t:{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}},{nm:'do',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'decl',mt:'prm',$t:{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}}]}],$cont:doFindCallbacks$core,d:['ceylon.test.core','doFindCallbacks','$m','visit$ejgra7']};};
var $3at=$3aj;
if(m$1.is$($3at,{t:m$1.ClassOrInterfaceDeclaration$meta$declaration})) {
var $3au=(function(){var $3av=($3aw=m$1.sarg$(function($3ax){switch($3ax){case 0:return m$1.Entry(m$1.Character(99,true),m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}),{Item$Entry:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}},Key$Entry:{t:m$1.Character}});case 1:return m$1.Entry(m$1.Character(105,true),m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}),{Item$Entry:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}},Key$Entry:{t:m$1.Character}});case 2:return m$1.Entry(m$1.Character(112,true),m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}),{Item$Entry:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}},Key$Entry:{t:m$1.Character}});}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}},Key$Entry:{t:m$1.Character}}},Absent$Iterable:{t:m$1.Nothing}}),m$2.HashMap(undefined,undefined,$3aw,{Key$HashMap:{t:m$1.Character},Item$HashMap:{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}}}));
var $3aw;
$3al($3at,m$1.$JsCallable((function($3ay){
var $3az=($3b0=(m$1.is$($3ay,{t:m$1.ClassDeclaration$meta$declaration})?m$1.Character(99,true):null),m$1.nn$($3b0)?$3b0:m$1.Character(105,true));
$prop$get$3az={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},$cont:doFindCallbacks$core,d:['ceylon.test.core','doFindCallbacks','$at','key$h2ng03']};}};
$prop$get$3az.get=function(){return $3az};
var $3b0;
($3b1=$3av.$_get($3az),m$1.JsCallable($3b1,m$1.nn$($3b1)?$3b1.addAll:null))($3ay.annotatedDeclaredMemberDeclarations({Annotation$annotatedDeclaredMemberDeclarations:$6z0gax$.CallbackType$doFindCallbacks,Kind$annotatedDeclaredMemberDeclarations:{t:m$1.FunctionDeclaration$meta$declaration}}));
var $3b1;
($3b2=$3av.$_get(m$1.Character(112,true)),m$1.JsCallable($3b2,m$1.nn$($3b2)?$3b2.addAll:null))(callbackCache$core().$_get($3ay.containingPackage,$3ak,{CallbackType$get:$6z0gax$.CallbackType$doFindCallbacks}));
var $3b2;
}),[{nm:'decl',mt:'prm',$t:{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}}],{Arguments$Callable:m$1.mtt$([{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}]),Return$Callable:{t:m$1.Anything}}));
return m$1.concatenate([($3b3=$3av.$_get(m$1.Character(99,true)),m$1.nn$($3b3)?$3b3:m$1.empty()),($3b4=$3av.$_get(m$1.Character(105,true)),m$1.nn$($3b4)?$3b4:m$1.empty()),($3b5=$3av.$_get(m$1.Character(112,true)),m$1.nn$($3b5)?$3b5:m$1.empty())].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.FunctionDeclaration$meta$declaration},Absent$Iterable:{t:m$1.Null}}},{t:m$2.HashSet,a:{Element$HashSet:{t:m$1.FunctionDeclaration$meta$declaration}}}])),{Element$concatenate:{t:m$1.FunctionDeclaration$meta$declaration}});
var $3b3,$3b4,$3b5;
}());if($3au!==undefined){return $3au;}
}
else if(m$1.is$($3at,{t:m$1.Package$meta$declaration})) {
return $3at.annotatedMembers({Annotation$annotatedMembers:$6z0gax$.CallbackType$doFindCallbacks,Kind$annotatedMembers:{t:m$1.FunctionDeclaration$meta$declaration}});
}
};doFindCallbacks$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}},ps:[{nm:'declaration',mt:'prm',$t:{t:'u',l:[{t:m$1.Package$meta$declaration},{t:m$1.ClassOrInterfaceDeclaration$meta$declaration}]}},{nm:'type',mt:'prm',$t:{t:m$1.Type$meta$model,a:{Target$Type:'CallbackType$doFindCallbacks'}}}],tp:{CallbackType$doFindCallbacks:{sts:[{t:m$1.Annotation}]}},d:['ceylon.test.core','doFindCallbacks']};};
function $3b6$core(){
var callbackCache$=new $3b6$core.$$;callbackCache$.$wgb9lg$3b8_=m$2.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$1.$_String},Item$HashMap:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}}});
callbackCache$.$prop$get$wgb9lg$3b8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.HashMap,a:{Key$HashMap:{t:m$1.$_String},Item$HashMap:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}}}},$cont:$3b6$core,d:['ceylon.test.core','callbackCache','$at','cache$fv2nil']};}};
callbackCache$.$prop$get$wgb9lg$3b8.get=function(){return $wgb9lg$3b8};
return callbackCache$;
};$3b6$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.test.core','callbackCache']};};
function $init$callbackCache$core(){
if($3b6$core.$$===undefined){
m$1.initTypeProto($3b6$core,'ceylon.test.core::callbackCache',m$1.Basic);
(function(callbackCache$){
m$1.atr$(callbackCache$,'$wgb9lg$3b8',function(){return this.$wgb9lg$3b8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.HashMap,a:{Key$HashMap:{t:m$1.$_String},Item$HashMap:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}}}},$cont:$3b6$core,d:['ceylon.test.core','callbackCache','$at','cache$fv2nil']};});
callbackCache$.$_get=function($3b9,$3ba,$spnucc$){
var callbackCache$=this;
var $3bb=$3b9.string.plus($3ba.string);
var $3bc=callbackCache$.$wgb9lg$3b8.$_get($3bb);
var $3bd;
if(m$1.nn$(($3bd=$3bc))){
return $3bd;
}
function $3be(){return $3bc;}
var $3bf=doFindCallbacks$core($3b9,$3ba,{CallbackType$doFindCallbacks:$spnucc$.CallbackType$get});
callbackCache$.$wgb9lg$3b8.put($3bb,$3bf);
return $3bf;
};callbackCache$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.FunctionDeclaration$meta$declaration}}},ps:[{nm:'declaration',mt:'prm',$t:{t:'u',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.Package$meta$declaration}]}},{nm:'callbackType',mt:'prm',$t:{t:m$1.Type$meta$model,a:{Target$Type:'CallbackType$get'}}}],$cont:$3b6$core,tp:{CallbackType$get:{sts:[{t:m$1.Annotation}]}},pa:1,d:['ceylon.test.core','callbackCache','$m','get']};};
})($3b6$core.$$.prototype);
}
return $3b6$core;
}
ex$.$init$callbackCache$core=$init$callbackCache$core;
$init$callbackCache$core();
var $3bg;
function callbackCache$core(){
if($3bg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'callbackCache\' before it was set"),'278:0-294:0','DefaultTestExecutor.ceylon');
if($3bg===undefined){$3bg=m$1.INIT$;$3bg=$init$callbackCache$core()();$3bg.$crtmm$=callbackCache$core.$crtmm$;}
return $3bg;
}
callbackCache$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$callbackCache$core()},d:['ceylon.test.core','callbackCache']};};
$prop$getCallbackCache$core=callbackCache$core;
ex$.$prop$getCallbackCache$core=$prop$getCallbackCache$core;
function DefaultTestRunner$core($wgb9lg$3bh,$wgb9lg$3bi,$wgb9lg$3bj,$wgb9lg$3bk,defaultTestRunner$){
$init$DefaultTestRunner$core();
if(defaultTestRunner$===undefined)defaultTestRunner$=new DefaultTestRunner$core.$$;
defaultTestRunner$.$wgb9lg$3bh_=$wgb9lg$3bh;
defaultTestRunner$.$wgb9lg$3bi_=$wgb9lg$3bi;
defaultTestRunner$.$wgb9lg$3bj_=$wgb9lg$3bj;
defaultTestRunner$.$wgb9lg$3bk_=$wgb9lg$3bk;
TestRunner(defaultTestRunner$);
defaultTestRunner$.$wgb9lg$3bl_=defaultTestRunner$.$wgb9lg$3bm();
return defaultTestRunner$;
}
DefaultTestRunner$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:TestSource()}}},{nm:'listeners',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}}},{nm:'filter',mt:'prm',$t:TestFilter()},{nm:'comparator',mt:'prm',$t:TestComparator()}],sts:[{t:TestRunner}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.core:DefaultTestRunner')];},d:['ceylon.test.core','DefaultTestRunner']};};
ex$.DefaultTestRunner$core=DefaultTestRunner$core;
function $init$DefaultTestRunner$core(){
if(DefaultTestRunner$core.$$===undefined){
m$1.initTypeProto(DefaultTestRunner$core,'ceylon.test.core::DefaultTestRunner',m$1.Basic,$init$TestRunner());
(function(defaultTestRunner$){
m$1.atr$(defaultTestRunner$,'$wgb9lg$3bh',function(){return this.$wgb9lg$3bh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:TestSource()}},$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$at','sources$u3gr8m']};});
m$1.atr$(defaultTestRunner$,'$wgb9lg$3bi',function(){return this.$wgb9lg$3bi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}},$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$at','listeners$twt4on']};});
m$1.atr$(defaultTestRunner$,'$wgb9lg$3bj',function(){return this.$wgb9lg$3bj_;},undefined,function(){return{mod:$CCMM$,$t:TestFilter(),$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$at','filter$e3f7l2']};});
m$1.atr$(defaultTestRunner$,'$wgb9lg$3bk',function(){return this.$wgb9lg$3bk_;},undefined,function(){return{mod:$CCMM$,$t:TestComparator(),$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$at','comparator$dx3x4o']};});
defaultTestRunner$.$wgb9lg$3bn=function($3bo){
var defaultTestRunner$=this;
var $3bp=defaultTestRunner$.$wgb9lg$3bj($3bo.description);
if(!$3bp){
m$1.JsCallableList(defaultTestRunner$.$wgb9lg$3bi,function(e,a){return e.testExclude.apply(e,a);})(TestExcludeEvent$event($3bo.description));
}
return $3bp;
};defaultTestRunner$.$wgb9lg$3bn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'e',mt:'prm',$t:{t:TestExecutor}}],$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$m','filterExecutor$nptbf']};};
defaultTestRunner$.$wgb9lg$3bq=function($3br,$3bs){
var defaultTestRunner$=this;
return defaultTestRunner$.$wgb9lg$3bk($3br.description,$3bs.description);
};defaultTestRunner$.$wgb9lg$3bq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'e1',mt:'prm',$t:{t:TestExecutor}},{nm:'e2',mt:'prm',$t:{t:TestExecutor}}],$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$m','compareExecutors$cd8z5n']};};
defaultTestRunner$.$wgb9lg$3bm=function(){
var defaultTestRunner$=this;
return createExecutors$core(defaultTestRunner$.$wgb9lg$3bh,m$1.$JsCallable(m$1.JsCallable(defaultTestRunner$,defaultTestRunner$.$wgb9lg$3bn),[{nm:'e',mt:'prm',$t:{t:TestExecutor}}],{Arguments$Callable:m$1.mtt$([{t:TestExecutor}]),Return$Callable:{t:m$1.$_Boolean}}),m$1.$JsCallable(m$1.JsCallable(defaultTestRunner$,defaultTestRunner$.$wgb9lg$3bq),[{nm:'e1',mt:'prm',$t:{t:TestExecutor}},{nm:'e2',mt:'prm',$t:{t:TestExecutor}}],{Arguments$Callable:m$1.mtt$([{t:TestExecutor},{t:TestExecutor}]),Return$Callable:{t:m$1.Comparison}}));
};defaultTestRunner$.$wgb9lg$3bm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestExecutor}}},ps:[],$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$m','initExecutors$ynov3m']};};
m$1.atr$(defaultTestRunner$,'$wgb9lg$3bl',function(){return this.$wgb9lg$3bl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestExecutor}}},$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$at','executors$l7lcma']};});
m$1.atr$(defaultTestRunner$,'description',function(){
var defaultTestRunner$=this;
return TestDescription("root",null,null,defaultTestRunner$.$wgb9lg$3bl.collect(function(e){return e.description;},{Result$collect:{t:TestDescription}}));
},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:DefaultTestRunner$core,pa:3,d:['ceylon.test.core','DefaultTestRunner','$at','description']};});
defaultTestRunner$.run=function(){
var defaultTestRunner$=this;
defaultTestRunner$.$wgb9lg$3bt();
try{
runningRunners$core().add(defaultTestRunner$);
var $3bu=TestRunResultImpl$internal();
var $3bv=TestRunContextImpl$internal(defaultTestRunner$,$3bu);
$3bv.addTestListener([$3bu.listener].$sa$({t:TestListener}).chain(defaultTestRunner$.$wgb9lg$3bi,{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:TestListener}}).sequence());
$3bv.fireTestRunStart(TestRunStartEvent$event(defaultTestRunner$,defaultTestRunner$.description));
m$1.JsCallableList(defaultTestRunner$.$wgb9lg$3bl,function(e,a){return e.execute.apply(e,a);})($3bv);
$3bv.fireTestRunFinish(TestRunFinishEvent$event(defaultTestRunner$,$3bu));
$3bv.removeTestListener([$3bu.listener].$sa$({t:TestListener}).chain(defaultTestRunner$.$wgb9lg$3bi,{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:TestListener}}).sequence());
return $3bu;
}
finally{
runningRunners$core().remove(defaultTestRunner$);
}
};defaultTestRunner$.run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestRunResult},ps:[],$cont:DefaultTestRunner$core,pa:3,d:['ceylon.test.core','DefaultTestRunner','$m','run']};};
defaultTestRunner$.$wgb9lg$3bt=function(){
var defaultTestRunner$=this;
var $3bx;for(var $3bw=runningRunners$core().iterator();($3bx=$3bw.next())!==m$1.finished();){
if($3bx.description.equals(defaultTestRunner$.description)){
throw m$1.wrapexc(m$1.Exception("cycle in TestRunner execution was detected, TestRunner.run() is probably invoked from inside test function"),'75:16-75:141','ceylon/test/core/DefaultTestRunner.ceylon');
}
}
};defaultTestRunner$.$wgb9lg$3bt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:DefaultTestRunner$core,d:['ceylon.test.core','DefaultTestRunner','$m','verifyCycle$b1uc1l']};};
})(DefaultTestRunner$core.$$.prototype);
}
return DefaultTestRunner$core;
}
ex$.$init$DefaultTestRunner$core=$init$DefaultTestRunner$core;
$init$DefaultTestRunner$core();
function TestCandidate$core(){var $3by=m$1.mut$([m$1.mtt$([{t:m$1.FunctionDeclaration$meta$declaration},m$1.mut$([{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}])]),{t:ErrorTestExecutor$internal}]);$3by.$crtmm$=function(){return{mod:$CCMM$,d:['ceylon.test.core','TestCandidate']};};return $3by;}
function createExecutors$core($3bz,$3c0,$3c1){
var $3c2=findCandidates$core($3bz);
var $3c3=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestExecutor}});
var $3c4=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mtt$([{t:m$1.ClassDeclaration$meta$declaration},{t:m$2.ArrayList,a:{Element$ArrayList:{t:TestExecutor}}}])});
var $3c6;for(var $3c5=$3c2.iterator();($3c6=$3c5.next())!==m$1.finished();){
var $3c7=$3c6;
if(m$1.is$($3c7,m$1.mtt$([{t:m$1.FunctionDeclaration$meta$declaration},m$1.mut$([{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}])]))) {
var $3c8=$3c7.$_get(0);
var $3c9=$3c7.$_get(1);
var $3ca;
if(m$1.nn$(($3ca=$3c8.annotations({Annotation$annotations:{t:TestSuiteAnnotation}}).$_get(0)))){
var $3cb=createSuiteExecutor$core($3c8,$3ca,m$1.JsCallable(0,$3c0),m$1.JsCallable(0,$3c1));
if($3c0($3cb)){
$3c3.add($3cb);
}
}
else{
var $3cc=createExecutor$core($3c8,$3c9);
if($3c0($3cc)){
var $3cd;
if(m$1.nn$(($3cd=$3c9))){
var $3ce=(function(){var $3cf=$3cd;var $3cg=$3c4.sequence().find(m$1.$JsCallable((function($3ch){return $3ch.$_get(0).equals($3cf);}),[{nm:'elem',mt:'prm',$t:{t:'T',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$2.ArrayList,a:{Element$ArrayList:{t:TestExecutor}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mtt$([{t:m$1.ClassDeclaration$meta$declaration},{t:m$2.ArrayList,a:{Element$ArrayList:{t:TestExecutor}}}])]),Return$Callable:{t:m$1.$_Boolean}}));
var $3ci;
if(m$1.nn$(($3ci=$3cg))){
$3ci.$_get(1).add($3cc);
}
else{
var $3cj=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestExecutor}});
$3cj.add($3cc);
$3c4.add(m$1.tpl$([$3cf,$3cj]));
}
}());if($3ce!==undefined){return $3ce;}
}
else{
$3c3.add($3cc);
}
}
}
}
else if(m$1.is$($3c7,{t:ErrorTestExecutor$internal})) {
$3c3.add($3c7);
}
}
var $3cl;for(var $3ck=$3c4.sequence().iterator();($3cl=$3ck.next())!==m$1.finished();){
var $3cm=$3cl.$_get(1).sequence().$_sort(m$1.JsCallable(0,$3c1));
$3c3.add(GroupTestExecutor$internal(TestDescription($3cl.$_get(0).qualifiedName,null,$3cl.$_get(0),$3cm.collect(function(e){return e.description;},{Result$collect:{t:TestDescription}})),$3cm));
}
return $3c3.sequence().$_sort(m$1.JsCallable(0,$3c1));
};createExecutors$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestExecutor}}},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:TestSource()}}},{nm:'filter',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestExecutor}]},Return$Callable:{t:m$1.$_Boolean}}}},{nm:'comparator',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestExecutor},{t:TestExecutor}]},Return$Callable:{t:m$1.Comparison}}}}],d:['ceylon.test.core','createExecutors']};};
function createExecutor$core($3cn,$3co){
var $3cp=findAnnotation$core($3cn,$3co,{A$findAnnotation:{t:TestExecutorAnnotation}});
var $3cq=($3cr=($3cs=$3cp,m$1.nn$($3cs)?$3cs.executor:null),m$1.nn$($3cr)?$3cr:m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.test.core'),DefaultTestExecutor$core));
var $3cr,$3cs;
var $3ct=$3cq.instantiate(m$1.empty(),[$3cn,$3co].$sa$({t:m$1.Anything}));
var $3cu;
m$1.asrt$((m$1.is$(($3cu=$3ct),{t:TestExecutor})),"Assertion failed: \'is TestExecutor executor\' at DefaultTestRunner.ceylon (136:11-136:36)",'136:4-136:37','DefaultTestRunner.ceylon');
return $3cu;
};createExecutor$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestExecutor},ps:[{nm:'funcDecl',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'classDecl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]}}],d:['ceylon.test.core','createExecutor']};};
function createSuiteExecutor$core($3cv,$3cw,$3cx,$3cy){
var $3cz=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestExecutor}});
var $3d0=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Nothing},Type$Class:{t:m$1.Anything}}},{t:m$1.FunctionModel$meta$model,a:{Type$FunctionModel:{t:m$1.Anything},Arguments$FunctionModel:{t:m$1.Nothing}}},{t:m$1.$_String}])});
var $3d2;for(var $3d1=$3cw.sources.iterator();($3d2=$3d1.next())!==m$1.finished();){
var $3d3;
if(m$1.is$(($3d3=$3d2),{t:m$1.ClassDeclaration$meta$declaration})){
$3d0.add($3d3);
}
else{
var $3d4;
if(m$1.is$(($3d4=$3d3),{t:m$1.FunctionDeclaration$meta$declaration})){
$3d0.add($3d4);
}
else{
var $3d5;
if(m$1.is$(($3d5=$3d4),{t:m$1.Package$meta$declaration})){
$3d0.add($3d5);
}
else{
var $3d6;
if(m$1.is$(($3d6=$3d5),{t:m$1.Module$meta$declaration})){
$3d0.add($3d6);
}
else{
$3cz.add(ErrorTestExecutor$internal(TestDescription($3d6.qualifiedName),m$1.Exception("declaration ".plus($3d6.qualifiedName).plus(" is invalid test suite source (only functions, classes, packages and modules are allowed)"))));
}
}
}
}
}
$3cz.addAll(createExecutors$core($3d0.sequence(),m$1.JsCallable(0,$3cx),m$1.JsCallable(0,$3cy)));
if($3cz.empty){
return ErrorTestExecutor$internal(TestDescription($3cv.qualifiedName,$3cv),m$1.Exception("test suite ".plus($3cv.qualifiedName).plus(" does not contains any tests")));
}
else{
return GroupTestExecutor$internal(TestDescription($3cv.qualifiedName,$3cv,null,$3cz.collect(function(e){return e.description;},{Result$collect:{t:TestDescription}})),$3cz.sequence());
}
};createSuiteExecutor$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestExecutor},ps:[{nm:'funcDecl',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'suiteAnnotation',mt:'prm',$t:{t:TestSuiteAnnotation}},{nm:'filter',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestExecutor}]},Return$Callable:{t:m$1.$_Boolean}}}},{nm:'comparator',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestExecutor},{t:TestExecutor}]},Return$Callable:{t:m$1.Comparison}}}}],d:['ceylon.test.core','createSuiteExecutor']};};
function findCandidates$core($3d7){
var $3d8=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mut$([m$1.mtt$([{t:m$1.FunctionDeclaration$meta$declaration},m$1.mut$([{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}])]),{t:ErrorTestExecutor$internal}])});
var $3da;for(var $3d9=$3d7.iterator();($3da=$3d9.next())!==m$1.finished();){
var $3db;
if(m$1.is$(($3db=$3da),{t:m$1.Module$meta$declaration})){
findCandidatesInModule$core($3d8,$3db);
}
else{
var $3dc;
if(m$1.is$(($3dc=$3db),{t:m$1.Package$meta$declaration})){
findCandidatesInPackage$core($3d8,$3dc);
}
else{
var $3dd;
if(m$1.is$(($3dd=$3dc),{t:m$1.ClassDeclaration$meta$declaration})){
findCandidatesInClass$core($3d8,$3dd);
}
else{
var $3de;
if(m$1.is$(($3de=$3dd),{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Empty},Type$Class:{t:m$1.Anything}}})){
findCandidatesInClass$core($3d8,$3de.declaration);
}
else{
var $3df;
if(m$1.is$(($3df=$3de),{t:m$1.FunctionDeclaration$meta$declaration})){
findCandidatesInFunction$core($3d8,$3df);
}
else{
var $3dg,$3dh;
if(m$1.is$(($3dg=$3df),{t:m$1.FunctionModel$meta$model,a:{Type$FunctionModel:{t:m$1.Anything},Arguments$FunctionModel:{t:m$1.Nothing}}})&&m$1.is$(($3dh=$3dg.declaration),{t:m$1.FunctionDeclaration$meta$declaration})){
findCandidatesInFunction$core($3d8,$3dh);
}
else{
var $3di;
if(m$1.is$(($3di=$3df),{t:m$1.$_String})){
findCandidatesInTypeLiteral$core($3d8,$3di);
}
}
}
}
}
}
}
}
return $3d8.sequence();
};findCandidates$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:TestCandidate$core()}},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:TestSource()}}}],d:['ceylon.test.core','findCandidates']};};
function findCandidatesInModule$core($3dj,$3dk){
var $3dm;for(var $3dl=$3dk.members.iterator();($3dm=$3dl.next())!==m$1.finished();){
findCandidatesInPackage$core($3dj,$3dm);
}
};findCandidatesInModule$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'mod',mt:'prm',$t:{t:m$1.Module$meta$declaration}}],d:['ceylon.test.core','findCandidatesInModule']};};
function findCandidatesInPackage$core($3dn,$3do){
var $3dq;for(var $3dp=$3do.annotatedMembers({Annotation$annotatedMembers:{t:TestAnnotation},Kind$annotatedMembers:{t:m$1.FunctionDeclaration$meta$declaration}}).iterator();($3dq=$3dp.next())!==m$1.finished();){
$3dn.add(m$1.tpl$([$3dq,null]));
}
var $3ds;for(var $3dr=$3do.members({Kind$members:{t:m$1.ClassDeclaration$meta$declaration}}).iterator();($3ds=$3dr.next())!==m$1.finished();){
findCandidatesInClass$core($3dn,$3ds);
}
};findCandidatesInPackage$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'pkg',mt:'prm',$t:{t:m$1.Package$meta$declaration}}],d:['ceylon.test.core','findCandidatesInPackage']};};
function findCandidatesInClass$core($3dt,$3du){
if(!$3du.$_abstract){
var $3dw;for(var $3dv=$3du.annotatedMemberDeclarations({Kind$annotatedMemberDeclarations:{t:m$1.FunctionDeclaration$meta$declaration},Annotation$annotatedMemberDeclarations:{t:TestAnnotation}}).iterator();($3dw=$3dv.next())!==m$1.finished();){
$3dt.add(m$1.tpl$([$3dw,$3du]));
}
}
};findCandidatesInClass$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'classDecl',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration}}],d:['ceylon.test.core','findCandidatesInClass']};};
function findCandidatesInFunction$core($3dx,$3dy,$3dz){
if($3dz===undefined){$3dz=null;}
if(($3dy.annotations({Annotation$annotations:{t:TestAnnotation}}).empty&&$3dy.annotations({Annotation$annotations:{t:TestSuiteAnnotation}}).empty)){
$3dx.add(ErrorTestExecutor$internal(TestDescription($3dy.qualifiedName,$3dy),m$1.Exception("function ".plus($3dy.qualifiedName).plus(" should be annotated with test or testSuite"))));
return;
}
if($3dy.toplevel){
$3dx.add(m$1.tpl$([$3dy,null]));
}
else{
var $3e0;
if(m$1.nn$(($3e0=$3dz))){
$3dx.add(m$1.tpl$([$3dy,$3e0]));
}
else{
var $3e1;
if(m$1.is$(($3e1=$3dy.container),{t:m$1.ClassDeclaration$meta$declaration})){
$3dx.add(m$1.tpl$([$3dy,$3e1]));
}
else{
$3dx.add(ErrorTestExecutor$internal(TestDescription($3dy.qualifiedName,$3dy),m$1.Exception("function ".plus($3dy.qualifiedName).plus(" should be toplevel function or class method"))));
}
}
}
};findCandidatesInFunction$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'funcDecl',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'classDecl',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]}}],d:['ceylon.test.core','findCandidatesInFunction']};};
function findCandidatesInTypeLiteral$core($3e2,$3e3){
if($3e3.startsWith("module ")){
if(findCandidatesInModuleLiteral$core($3e2,$3e3.spanFrom(7))){
return;
}
}
else{
if($3e3.startsWith("package ")){
if(findCandidatesInPackageLiteral$core($3e2,$3e3.spanFrom(8))){
return;
}
}
else{
if($3e3.startsWith("class ")){
if(findCandidatesInClassLiteral$core($3e2,$3e3.spanFrom(6))){
return;
}
}
else{
if($3e3.startsWith("function ")){
if(findCandidatesInFunctionLiteral$core($3e2,$3e3.spanFrom(9))){
return;
}
}
else{
if(findCandidatesInFullQualifiedName$core($3e2,$3e3)){
return;
}
}
}
}
}
$3e2.add(ErrorTestExecutor$internal(TestDescription($3e3),m$1.Exception("invalid type literal: ".plus($3e3).plus(" (allowed syntax is prefix function, class, package or module followed with qualified name of declaration)"))));
};findCandidatesInTypeLiteral$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'typeLiteral',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInTypeLiteral']};};
function findCandidatesInModuleLiteral$core($3e4,$3e5){
var $3e6=m$1.modules$meta().list.find(m$1.$JsCallable((function($3e7){return $3e7.name.equals($3e5);}),[{nm:'m',mt:'prm',$t:{t:m$1.Module$meta$declaration}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Module$meta$declaration}]),Return$Callable:{t:m$1.$_Boolean}}));
var $3e8;
if(m$1.nn$(($3e8=$3e6))){
findCandidatesInModule$core($3e4,$3e8);
return true;
}
function $3e9(){return $3e6;}
return false;
};findCandidatesInModuleLiteral$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'modName',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInModuleLiteral']};};
function findCandidatesInPackageLiteral$core($3ea,$3eb){
var $3ec=findPackage$core($3eb);
var $3ed;
if(m$1.nn$(($3ed=$3ec))){
findCandidatesInPackage$core($3ea,$3ed);
return true;
}
function $3ee(){return $3ec;}
return false;
};findCandidatesInPackageLiteral$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'pkgName',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInPackageLiteral']};};
function findCandidatesInClassLiteral$core($3ef,$3eg){
var $3eh=$3eg.firstInclusion("::");
var $3ei;
if(m$1.nn$(($3ei=$3eh))){
var $3ej=$3eg.span(0,$3ei.minus(1));
var $3ek=$3eg.spanFrom($3ei.plus(2));
var $3el;
if(m$1.nn$(($3el=findPackage$core($3ej)))){
var $3em=$3el.getMember($3ek,{Kind$getMember:{t:m$1.ClassDeclaration$meta$declaration}});
var $3en;
if(m$1.nn$(($3en=$3em))){
findCandidatesInClass$core($3ef,$3en);
return true;
}
}
}
return false;
};findCandidatesInClassLiteral$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'fqn',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInClassLiteral']};};
function findCandidatesInFunctionLiteral$core($3eo,$3ep){
var $3eq=$3ep.firstInclusion("::");
var $3er;
if(m$1.nn$(($3er=$3eq))){
var $3es=$3ep.span(0,$3er.minus(1));
var $3et;
if(m$1.nn$(($3et=findPackage$core($3es)))){
var $3eu=$3ep.spanFrom($3er.plus(2));
var $3ev=$3eu.firstInclusion(".");
var $3ew;
if(m$1.nn$(($3ew=$3ev))){
var $3ex=$3eu.span(0,$3ew.minus(1));
var $3ey=$3eu.spanFrom($3ew.plus(1));
var $3ez=$3et.getMember($3ex,{Kind$getMember:{t:m$1.ClassDeclaration$meta$declaration}});
var $3f0;
if(m$1.nn$(($3f0=$3ez))){
var $3f1=$3f0.getMemberDeclaration($3ey,{Kind$getMemberDeclaration:{t:m$1.FunctionDeclaration$meta$declaration}});
var $3f2;
if(m$1.nn$(($3f2=$3f1))){
findCandidatesInFunction$core($3eo,$3f2,$3f0);
return true;
}
}
}
else{
var $3f3=$3eu;
var $3f4=$3et.getMember($3f3,{Kind$getMember:{t:m$1.FunctionDeclaration$meta$declaration}});
var $3f5;
if(m$1.nn$(($3f5=$3f4))){
findCandidatesInFunction$core($3eo,$3f5);
return true;
}
}
}
}
return false;
};findCandidatesInFunctionLiteral$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'fqn',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInFunctionLiteral']};};
function findCandidatesInFullQualifiedName$core($3f6,$3f7){
var $3f8=$3f7.firstInclusion("::");
var $3f9;
if(m$1.nn$(($3f9=$3f8))){
var $3fa=$3f7.span(0,$3f9.minus(1));
var $3fb=$3f7.spanFrom($3f9.plus(2));
var $3fc;
if(m$1.nn$(($3fc=findPackage$core($3fa)))){
var $3fd=$3fb.firstInclusion(".");
var $3fe;
if(m$1.nn$(($3fe=$3fd))){
var $3ff=$3fb.span(0,$3fe.minus(1));
var $3fg=$3fb.spanFrom($3fe.plus(1));
var $3fh=$3fc.getMember($3ff,{Kind$getMember:{t:m$1.ClassDeclaration$meta$declaration}});
var $3fi;
if(m$1.nn$(($3fi=$3fh))){
var $3fj=$3fi.getMemberDeclaration($3fg,{Kind$getMemberDeclaration:{t:m$1.FunctionDeclaration$meta$declaration}});
var $3fk;
if(m$1.nn$(($3fk=$3fj))){
findCandidatesInFunction$core($3f6,$3fk,$3fi);
return true;
}
}
}
else{
var $3fl=$3fc.getMember($3fb,{Kind$getMember:m$1.mut$([{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration}])});
var $3fm;
if(m$1.is$(($3fm=$3fl),{t:m$1.FunctionDeclaration$meta$declaration})){
findCandidatesInFunction$core($3f6,$3fm);
return true;
}
else{
var $3fn;
if(m$1.is$(($3fn=$3fm),{t:m$1.ClassDeclaration$meta$declaration})){
findCandidatesInClass$core($3f6,$3fn);
return true;
}
}
}
}
}
else{
if(findCandidatesInPackageLiteral$core($3f6,$3f7)){
return true;
}
}
return false;
};findCandidatesInFullQualifiedName$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'candidates',mt:'prm',$t:{t:m$2.ArrayList,a:{Element$ArrayList:TestCandidate$core()}}},{nm:'fqn',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findCandidatesInFullQualifiedName']};};
function findPackage$core($3fo){
var $3fq;for(var $3fp=m$1.modules$meta().list.iterator();($3fq=$3fp.next())!==m$1.finished();){
if($3fo.startsWith($3fq.name)){
var $3fr;
if(m$1.nn$(($3fr=$3fq.findPackage($3fo)))){
return $3fr;
}
}
}
return null;
};findPackage$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Package$meta$declaration}]},ps:[{nm:'pkgName',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.test.core','findPackage']};};
function findAnnotation$core($3fs,$3ft,$8sk5zr$){
var $3fu=$3fs.annotations({Annotation$annotations:$8sk5zr$.A$findAnnotation}).$_get(0);
if((!m$1.nn$($3fu))){
var $3fv;
if(m$1.nn$(($3fv=$3ft))){
$3fu=findAnnotations$core($3fv,{A$findAnnotations:$8sk5zr$.A$findAnnotation}).$_get(0);
if((!m$1.nn$($3fu))){
$3fu=$3fv.containingPackage.annotations({Annotation$annotations:$8sk5zr$.A$findAnnotation}).$_get(0);
if((!m$1.nn$($3fu))){
$3fu=$3fv.containingModule.annotations({Annotation$annotations:$8sk5zr$.A$findAnnotation}).$_get(0);
}
}
}
else{
$3fu=$3fs.containingPackage.annotations({Annotation$annotations:$8sk5zr$.A$findAnnotation}).$_get(0);
if((!m$1.nn$($3fu))){
$3fu=$3fs.containingModule.annotations({Annotation$annotations:$8sk5zr$.A$findAnnotation}).$_get(0);
}
}
}
return $3fu;
};findAnnotation$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'A$findAnnotation']},ps:[{nm:'funcDecl',mt:'prm',$t:{t:m$1.FunctionDeclaration$meta$declaration}},{nm:'classDecl',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]}}],tp:{A$findAnnotation:{dv:'out',sts:[{t:m$1.Annotation}]}},d:['ceylon.test.core','findAnnotation']};};
function findAnnotations$core($3fw,$bj327e$){
var $3fx=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bj327e$.A$findAnnotations});
var $3fy=$3fw;
var $3fz;
while(m$1.nn$(($3fz=$3fy))){
$3fx.addAll($3fz.annotations({Annotation$annotations:$bj327e$.A$findAnnotations}));
$3fy=($3g0=$3fz.extendedType,m$1.nn$($3g0)?$3g0.declaration:null);
var $3g0;
}
return $3fx.sequence();
};findAnnotations$core.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'A$findAnnotations'}},ps:[{nm:'classDecl',mt:'prm',$t:{t:m$1.ClassDeclaration$meta$declaration}}],tp:{A$findAnnotations:{dv:'out',sts:[{t:m$1.Annotation}]}},d:['ceylon.test.core','findAnnotations']};};
var $3g1$core;function $valinit$$3g1$core(){if($3g1$core===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'runningRunners\' before it was set"),'403:0-403:80','DefaultTestRunner.ceylon');
if($3g1$core===undefined){$3g1$core=m$1.INIT$;$3g1$core=m$2.IdentitySet(undefined,undefined,{Element$IdentitySet:{t:DefaultTestRunner$core}})};return $3g1$core;};
function runningRunners$core(){return $valinit$$3g1$core();}
var $prop$getRunningRunners$core={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.IdentitySet,a:{Element$IdentitySet:{t:DefaultTestRunner$core}}},d:['ceylon.test.core','runningRunners']};}};
ex$.$prop$getRunningRunners$core=$prop$getRunningRunners$core;
$prop$getRunningRunners$core.get=runningRunners$core;
function IgnoreException$core(reason,ignoreException$){
$init$IgnoreException$core();
if(ignoreException$===undefined)ignoreException$=new IgnoreException$core.$$;
ignoreException$.reason_=reason;
m$1.Exception(reason,undefined,ignoreException$);
return ignoreException$;
}
IgnoreException$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'reason',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("Reason why the test is ignored.")];}}],pa:1,an:function(){return[m$1.doc("Thrown when test is ignored.")];},d:['ceylon.test.core','IgnoreException']};};
ex$.IgnoreException$core=IgnoreException$core;
function $init$IgnoreException$core(){
if(IgnoreException$core.$$===undefined){
m$1.initTypeProto(IgnoreException$core,'ceylon.test.core::IgnoreException',m$1.Exception);
(function(ignoreException$){
m$1.atr$(ignoreException$,'reason',function(){return this.reason_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:IgnoreException$core,pa:1,an:function(){return[m$1.doc("Reason why the test is ignored.")];},d:['ceylon.test.core','IgnoreException','$at','reason']};});
})(IgnoreException$core.$$.prototype);
}
return IgnoreException$core;
}
ex$.$init$IgnoreException$core=$init$IgnoreException$core;
$init$IgnoreException$core();
function MultipleFailureException$core(exceptions,multipleFailureException$){
$init$MultipleFailureException$core();
if(multipleFailureException$===undefined)multipleFailureException$=new MultipleFailureException$core.$$;
multipleFailureException$.exceptions_=exceptions;
m$1.Exception(undefined,undefined,multipleFailureException$);
return multipleFailureException$;
}
MultipleFailureException$core.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'exceptions',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Throwable}}},pa:1,an:function(){return[m$1.doc("The collected exceptions.")];}}],pa:1,an:function(){return[m$1.doc("Thrown when multiple exceptions occurs.")];},d:['ceylon.test.core','MultipleFailureException']};};
ex$.MultipleFailureException$core=MultipleFailureException$core;
function $init$MultipleFailureException$core(){
if(MultipleFailureException$core.$$===undefined){
m$1.initTypeProto(MultipleFailureException$core,'ceylon.test.core::MultipleFailureException',m$1.Exception);
(function(multipleFailureException$){
m$1.atr$(multipleFailureException$,'exceptions',function(){return this.exceptions_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Throwable}}},$cont:MultipleFailureException$core,pa:1,an:function(){return[m$1.doc("The collected exceptions.")];},d:['ceylon.test.core','MultipleFailureException','$at','exceptions']};});
m$1.atr$(multipleFailureException$,'message',function(){
var multipleFailureException$=this;
var $3g2=m$1.StringBuilder();
$3g2.append("There were ".plus(multipleFailureException$.exceptions.size.string).plus(" exceptions:"));
var $3g4;for(var $3g3=multipleFailureException$.exceptions.iterator();($3g4=$3g3.next())!==m$1.finished();){
$3g2.appendNewline();
$3g2.append("    ");
$3g2.append(m$1.type$meta($3g4,{Type$type:{t:m$1.Throwable}}).declaration.qualifiedName);
$3g2.append("(");
$3g2.append($3g4.message);
$3g2.append(")");
}
return $3g2.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:MultipleFailureException$core,pa:3,d:['ceylon.test.core','MultipleFailureException','$at','message']};});
})(MultipleFailureException$core.$$.prototype);
}
return MultipleFailureException$core;
}
ex$.$init$MultipleFailureException$core=$init$MultipleFailureException$core;
$init$MultipleFailureException$core();
ex$.$pkg$ans$ceylon$test$core=function(){return[m$1.doc$($CCMM$,'ceylon.test.core','$pkg-anns'),m$1.shared()];};
function TestRunStartEvent$event(runner,description,testRunStartEvent$){
$init$TestRunStartEvent$event();
if(testRunStartEvent$===undefined)testRunStartEvent$=new TestRunStartEvent$event.$$;
testRunStartEvent$.runner_=runner;
testRunStartEvent$.description_=description;
return testRunStartEvent$;
}
TestRunStartEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'runner',mt:'prm',$t:{t:TestRunner},pa:1,an:function(){return[m$1.doc("The current test runner.")];}},{nm:'description',mt:'prm',$t:{t:TestDescription},pa:1,an:function(){return[m$1.doc("The description of all tests to be run.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestRunStartEvent')];},d:['ceylon.test.event','TestRunStartEvent']};};
ex$.TestRunStartEvent$event=TestRunStartEvent$event;
function $init$TestRunStartEvent$event(){
if(TestRunStartEvent$event.$$===undefined){
m$1.initTypeProto(TestRunStartEvent$event,'ceylon.test.event::TestRunStartEvent',m$1.Basic);
(function(testRunStartEvent$){
m$1.atr$(testRunStartEvent$,'runner',function(){return this.runner_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunner},$cont:TestRunStartEvent$event,pa:1,an:function(){return[m$1.doc("The current test runner.")];},d:['ceylon.test.event','TestRunStartEvent','$at','runner']};});
m$1.atr$(testRunStartEvent$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestRunStartEvent$event,pa:1,an:function(){return[m$1.doc("The description of all tests to be run.")];},d:['ceylon.test.event','TestRunStartEvent','$at','description']};});
m$1.atr$(testRunStartEvent$,'string',function(){
var testRunStartEvent$=this;
return $_toString$event(testRunStartEvent$);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestRunStartEvent$event,pa:3,d:['ceylon.test.event','TestRunStartEvent','$at','string']};});
})(TestRunStartEvent$event.$$.prototype);
}
return TestRunStartEvent$event;
}
ex$.$init$TestRunStartEvent$event=$init$TestRunStartEvent$event;
$init$TestRunStartEvent$event();
function TestRunFinishEvent$event(runner,result,testRunFinishEvent$){
$init$TestRunFinishEvent$event();
if(testRunFinishEvent$===undefined)testRunFinishEvent$=new TestRunFinishEvent$event.$$;
testRunFinishEvent$.runner_=runner;
testRunFinishEvent$.result_=result;
return testRunFinishEvent$;
}
TestRunFinishEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'runner',mt:'prm',$t:{t:TestRunner},pa:1,an:function(){return[m$1.doc("The current test runner.")];}},{nm:'result',mt:'prm',$t:{t:TestRunResult},pa:1,an:function(){return[m$1.doc("The summary result of the test run.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestRunFinishEvent')];},d:['ceylon.test.event','TestRunFinishEvent']};};
ex$.TestRunFinishEvent$event=TestRunFinishEvent$event;
function $init$TestRunFinishEvent$event(){
if(TestRunFinishEvent$event.$$===undefined){
m$1.initTypeProto(TestRunFinishEvent$event,'ceylon.test.event::TestRunFinishEvent',m$1.Basic);
(function(testRunFinishEvent$){
m$1.atr$(testRunFinishEvent$,'runner',function(){return this.runner_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunner},$cont:TestRunFinishEvent$event,pa:1,an:function(){return[m$1.doc("The current test runner.")];},d:['ceylon.test.event','TestRunFinishEvent','$at','runner']};});
m$1.atr$(testRunFinishEvent$,'result',function(){return this.result_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunResult},$cont:TestRunFinishEvent$event,pa:1,an:function(){return[m$1.doc("The summary result of the test run.")];},d:['ceylon.test.event','TestRunFinishEvent','$at','result']};});
m$1.atr$(testRunFinishEvent$,'string',function(){
var testRunFinishEvent$=this;
return $_toString$event(testRunFinishEvent$);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestRunFinishEvent$event,pa:3,d:['ceylon.test.event','TestRunFinishEvent','$at','string']};});
})(TestRunFinishEvent$event.$$.prototype);
}
return TestRunFinishEvent$event;
}
ex$.$init$TestRunFinishEvent$event=$init$TestRunFinishEvent$event;
$init$TestRunFinishEvent$event();
function TestStartEvent$event(description,instance,testStartEvent$){
$init$TestStartEvent$event();
if(testStartEvent$===undefined)testStartEvent$=new TestStartEvent$event.$$;
testStartEvent$.description_=description;
if(instance===undefined){instance=null;}
testStartEvent$.instance_=instance;
return testStartEvent$;
}
TestStartEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription},pa:1,an:function(){return[m$1.doc("The description of the test.")];}},{nm:'instance',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestStartEvent:$at:instance')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestStartEvent')];},d:['ceylon.test.event','TestStartEvent']};};
ex$.TestStartEvent$event=TestStartEvent$event;
function $init$TestStartEvent$event(){
if(TestStartEvent$event.$$===undefined){
m$1.initTypeProto(TestStartEvent$event,'ceylon.test.event::TestStartEvent',m$1.Basic);
(function(testStartEvent$){
m$1.atr$(testStartEvent$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestStartEvent$event,pa:1,an:function(){return[m$1.doc("The description of the test.")];},d:['ceylon.test.event','TestStartEvent','$at','description']};});
m$1.atr$(testStartEvent$,'instance',function(){return this.instance_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},$cont:TestStartEvent$event,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestStartEvent:$at:instance')];},d:['ceylon.test.event','TestStartEvent','$at','instance']};});
m$1.atr$(testStartEvent$,'string',function(){
var testStartEvent$=this;
return $_toString$event(testStartEvent$,[testStartEvent$.description].$sa$(m$1.mut$([{t:m$1.Null},{t:m$1.$_Object}])));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestStartEvent$event,pa:3,d:['ceylon.test.event','TestStartEvent','$at','string']};});
})(TestStartEvent$event.$$.prototype);
}
return TestStartEvent$event;
}
ex$.$init$TestStartEvent$event=$init$TestStartEvent$event;
$init$TestStartEvent$event();
function TestFinishEvent$event(result,instance,testFinishEvent$){
$init$TestFinishEvent$event();
if(testFinishEvent$===undefined)testFinishEvent$=new TestFinishEvent$event.$$;
testFinishEvent$.result_=result;
if(instance===undefined){instance=null;}
testFinishEvent$.instance_=instance;
return testFinishEvent$;
}
TestFinishEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'result',mt:'prm',$t:{t:TestResult},pa:1,an:function(){return[m$1.doc("The result of the test.")];}},{nm:'instance',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestFinishEvent:$at:instance')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestFinishEvent')];},d:['ceylon.test.event','TestFinishEvent']};};
ex$.TestFinishEvent$event=TestFinishEvent$event;
function $init$TestFinishEvent$event(){
if(TestFinishEvent$event.$$===undefined){
m$1.initTypeProto(TestFinishEvent$event,'ceylon.test.event::TestFinishEvent',m$1.Basic);
(function(testFinishEvent$){
m$1.atr$(testFinishEvent$,'result',function(){return this.result_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestResult},$cont:TestFinishEvent$event,pa:1,an:function(){return[m$1.doc("The result of the test.")];},d:['ceylon.test.event','TestFinishEvent','$at','result']};});
m$1.atr$(testFinishEvent$,'instance',function(){return this.instance_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},$cont:TestFinishEvent$event,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestFinishEvent:$at:instance')];},d:['ceylon.test.event','TestFinishEvent','$at','instance']};});
m$1.atr$(testFinishEvent$,'string',function(){
var testFinishEvent$=this;
return $_toString$event(testFinishEvent$,[testFinishEvent$.result].$sa$(m$1.mut$([{t:m$1.Null},{t:m$1.$_Object}])));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestFinishEvent$event,pa:3,d:['ceylon.test.event','TestFinishEvent','$at','string']};});
})(TestFinishEvent$event.$$.prototype);
}
return TestFinishEvent$event;
}
ex$.$init$TestFinishEvent$event=$init$TestFinishEvent$event;
$init$TestFinishEvent$event();
function TestIgnoreEvent$event(result,testIgnoreEvent$){
$init$TestIgnoreEvent$event();
if(testIgnoreEvent$===undefined)testIgnoreEvent$=new TestIgnoreEvent$event.$$;
testIgnoreEvent$.result_=result;
return testIgnoreEvent$;
}
TestIgnoreEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'result',mt:'prm',$t:{t:TestResult},pa:1,an:function(){return[m$1.doc("The result of the test.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestIgnoreEvent')];},d:['ceylon.test.event','TestIgnoreEvent']};};
ex$.TestIgnoreEvent$event=TestIgnoreEvent$event;
function $init$TestIgnoreEvent$event(){
if(TestIgnoreEvent$event.$$===undefined){
m$1.initTypeProto(TestIgnoreEvent$event,'ceylon.test.event::TestIgnoreEvent',m$1.Basic);
(function(testIgnoreEvent$){
m$1.atr$(testIgnoreEvent$,'result',function(){return this.result_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestResult},$cont:TestIgnoreEvent$event,pa:1,an:function(){return[m$1.doc("The result of the test.")];},d:['ceylon.test.event','TestIgnoreEvent','$at','result']};});
m$1.atr$(testIgnoreEvent$,'string',function(){
var testIgnoreEvent$=this;
return $_toString$event(testIgnoreEvent$,[testIgnoreEvent$.result].$sa$(m$1.mut$([{t:m$1.Null},{t:m$1.$_Object}])));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestIgnoreEvent$event,pa:3,d:['ceylon.test.event','TestIgnoreEvent','$at','string']};});
})(TestIgnoreEvent$event.$$.prototype);
}
return TestIgnoreEvent$event;
}
ex$.$init$TestIgnoreEvent$event=$init$TestIgnoreEvent$event;
$init$TestIgnoreEvent$event();
function TestErrorEvent$event(result,testErrorEvent$){
$init$TestErrorEvent$event();
if(testErrorEvent$===undefined)testErrorEvent$=new TestErrorEvent$event.$$;
testErrorEvent$.result_=result;
return testErrorEvent$;
}
TestErrorEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'result',mt:'prm',$t:{t:TestResult},pa:1,an:function(){return[m$1.doc("The result of the test.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestErrorEvent')];},d:['ceylon.test.event','TestErrorEvent']};};
ex$.TestErrorEvent$event=TestErrorEvent$event;
function $init$TestErrorEvent$event(){
if(TestErrorEvent$event.$$===undefined){
m$1.initTypeProto(TestErrorEvent$event,'ceylon.test.event::TestErrorEvent',m$1.Basic);
(function(testErrorEvent$){
m$1.atr$(testErrorEvent$,'result',function(){return this.result_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestResult},$cont:TestErrorEvent$event,pa:1,an:function(){return[m$1.doc("The result of the test.")];},d:['ceylon.test.event','TestErrorEvent','$at','result']};});
m$1.atr$(testErrorEvent$,'string',function(){
var testErrorEvent$=this;
return $_toString$event(testErrorEvent$,[testErrorEvent$.result].$sa$(m$1.mut$([{t:m$1.Null},{t:m$1.$_Object}])));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestErrorEvent$event,pa:3,d:['ceylon.test.event','TestErrorEvent','$at','string']};});
})(TestErrorEvent$event.$$.prototype);
}
return TestErrorEvent$event;
}
ex$.$init$TestErrorEvent$event=$init$TestErrorEvent$event;
$init$TestErrorEvent$event();
function TestExcludeEvent$event(description,testExcludeEvent$){
$init$TestExcludeEvent$event();
if(testExcludeEvent$===undefined)testExcludeEvent$=new TestExcludeEvent$event.$$;
testExcludeEvent$.description_=description;
return testExcludeEvent$;
}
TestExcludeEvent$event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription},pa:1,an:function(){return[m$1.doc("The description of the test.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test.event:TestExcludeEvent')];},d:['ceylon.test.event','TestExcludeEvent']};};
ex$.TestExcludeEvent$event=TestExcludeEvent$event;
function $init$TestExcludeEvent$event(){
if(TestExcludeEvent$event.$$===undefined){
m$1.initTypeProto(TestExcludeEvent$event,'ceylon.test.event::TestExcludeEvent',m$1.Basic);
(function(testExcludeEvent$){
m$1.atr$(testExcludeEvent$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestExcludeEvent$event,pa:1,an:function(){return[m$1.doc("The description of the test.")];},d:['ceylon.test.event','TestExcludeEvent','$at','description']};});
m$1.atr$(testExcludeEvent$,'string',function(){
var testExcludeEvent$=this;
return $_toString$event(testExcludeEvent$,[testExcludeEvent$.description].$sa$(m$1.mut$([{t:m$1.Null},{t:m$1.$_Object}])));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestExcludeEvent$event,pa:3,d:['ceylon.test.event','TestExcludeEvent','$at','string']};});
})(TestExcludeEvent$event.$$.prototype);
}
return TestExcludeEvent$event;
}
ex$.$init$TestExcludeEvent$event=$init$TestExcludeEvent$event;
$init$TestExcludeEvent$event();
function $_toString$event($3g5,$3g6){
if($3g6===undefined){$3g6=m$1.empty();}
return m$1.type$meta($3g5,{Type$type:{t:m$1.$_Object}}).declaration.name.plus(($3g7=(!$3g6.empty?"[".plus(", ".$_join(m$1.for$(function(){
var $3g8=$3g6.iterator(),$3g9=m$1.finished();
var n$3g9=function(){return $3g9=$3g8.next();}
return function(){
if(n$3g9()!==m$1.finished()){
var $3ga=$3g9,$3gb=($3gc=($3gd=$3ga,m$1.nn$($3gd)?$3gd.string:null),m$1.nn$($3gc)?$3gc:"null");
return $3gb;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}}))).plus("]"):null),m$1.nn$($3g7)?$3g7:""));
var $3g7,$3gc,$3gd;
};$_toString$event.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'obj',mt:'prm',$t:{t:m$1.$_Object}},{nm:'attributes',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]}}}}],d:['ceylon.test.event','toString']};};
ex$.$pkg$ans$ceylon$test$event=function(){return[m$1.doc$($CCMM$,'ceylon.test.event','$pkg-anns'),m$1.shared()];};
function GroupTestExecutor$internal(description,$wgb9lg$3ge,groupTestExecutor$){
$init$GroupTestExecutor$internal();
if(groupTestExecutor$===undefined)groupTestExecutor$=new GroupTestExecutor$internal.$$;
groupTestExecutor$.description_=description;
groupTestExecutor$.$wgb9lg$3ge_=$wgb9lg$3ge;
TestExecutor(groupTestExecutor$);
return groupTestExecutor$;
}
GroupTestExecutor$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription},pa:3},{nm:'children',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestExecutor}}}}],sts:[{t:TestExecutor}],pa:1,d:['ceylon.test.internal','GroupTestExecutor']};};
ex$.GroupTestExecutor$internal=GroupTestExecutor$internal;
function $init$GroupTestExecutor$internal(){
if(GroupTestExecutor$internal.$$===undefined){
m$1.initTypeProto(GroupTestExecutor$internal,'ceylon.test.internal::GroupTestExecutor',m$1.Basic,$init$TestExecutor());
(function(groupTestExecutor$){
m$1.atr$(groupTestExecutor$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:GroupTestExecutor$internal,pa:3,d:['ceylon.test.internal','GroupTestExecutor','$at','description']};});
m$1.atr$(groupTestExecutor$,'$wgb9lg$3ge',function(){return this.$wgb9lg$3ge_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestExecutor}}},$cont:GroupTestExecutor$internal,d:['ceylon.test.internal','GroupTestExecutor','$at','children$v6kjcg']};});
groupTestExecutor$.execute=function($3gf){
var groupTestExecutor$=this;
var $3gg=ignored();
function $3gh($3gi){
if(groupTestExecutor$.$wgb9lg$3gj($3gg,$3gi).equals(m$1.smaller())){
$3gg=$3gi;
}
};$3gh.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'state',mt:'prm',$t:{t:TestState}}],$cont:groupTestExecutor$.execute,d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$m','updateWorstState$1h9h85']};};
function $3gk(){
var $3gk$=new $3gk.$$;$3gk$.outer$=groupTestExecutor$;
TestListener($3gk$);
return $3gk$;
};$3gk.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:groupTestExecutor$.execute,sts:[{t:TestListener}],d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$o','updateWorstStateListener$g62biw']};};
function $init$$3gk(){
if($3gk.$$===undefined){
m$1.initTypeProto($3gk,'ceylon.test.internal::GroupTestExecutor.updateWorstStateListener',m$1.Basic,$init$TestListener());
(function($3gk$){
$3gk$.testFinish=function($3gm){var $3gk$=this;
return $3gh($3gm.result.state);};
$3gk$.testFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event}}],$cont:$3gk,pa:3,d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$o','updateWorstStateListener$g62biw','$m','testFinish']};};
$3gk$.testError=function($3gn){var $3gk$=this;
return $3gh($3gn.result.state);};
$3gk$.testError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event}}],$cont:$3gk,pa:3,d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$o','updateWorstStateListener$g62biw','$m','testError']};};
$3gk$.testIgnore=function($3go){var $3gk$=this;
return $3gh(ignored());};
$3gk$.testIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestIgnoreEvent$event}}],$cont:$3gk,pa:3,d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$o','updateWorstStateListener$g62biw','$m','testIgnore']};};
})($3gk.$$.prototype);
}
return $3gk;
}
groupTestExecutor$.$init$$3gk=$init$$3gk;
$init$$3gk();
var $3gp;
function $3gl(){
if($3gp===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'updateWorstStateListener\' before it was set"),'19:8-23:8','executors.ceylon');
if($3gp===undefined){$3gp=m$1.INIT$;$3gp=$init$$3gk()();$3gp.$crtmm$=$3gl.$crtmm$;}
return $3gp;
}
$3gl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$3gk()},$cont:groupTestExecutor$.execute,d:['ceylon.test.internal','GroupTestExecutor','$m','execute','$o','updateWorstStateListener$g62biv']};};
$prop$get$3gk=$3gl;
$3gl();
$3gf.addTestListener([$3gl()].$sa$({t:TestListener}));
try{
$3gf.fireTestStart(TestStartEvent$event(groupTestExecutor$.description));
var $3gq=m$1.system().milliseconds;
m$1.JsCallableList(groupTestExecutor$.$wgb9lg$3ge,function(e,a){return e.execute.apply(e,a);})($3gf);
var $3gr=m$1.system().milliseconds;
$3gf.fireTestFinish(TestFinishEvent$event(TestResult(groupTestExecutor$.description,$3gg,null,$3gr.minus($3gq))));
}
finally{
$3gf.removeTestListener([$3gl()].$sa$({t:TestListener}));
}
};groupTestExecutor$.execute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}}],$cont:GroupTestExecutor$internal,pa:3,d:['ceylon.test.internal','GroupTestExecutor','$m','execute']};};
groupTestExecutor$.$wgb9lg$3gj=function($3gs,$3gt){
var groupTestExecutor$=this;
if($3gs.equals($3gt)){
return m$1.equal();
}
else{
if(($3gs.equals(ignored())&&(($3gt.equals(success())||$3gt.equals(failure()))||$3gt.equals(error())))){
return m$1.smaller();
}
else{
if(($3gs.equals(success())&&($3gt.equals(failure())||$3gt.equals(error())))){
return m$1.smaller();
}
else{
if(($3gs.equals(failure())&&$3gt.equals(error()))){
return m$1.smaller();
}
else{
return m$1.larger();
}
}
}
}
};groupTestExecutor$.$wgb9lg$3gj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'state1',mt:'prm',$t:{t:TestState}},{nm:'state2',mt:'prm',$t:{t:TestState}}],$cont:GroupTestExecutor$internal,d:['ceylon.test.internal','GroupTestExecutor','$m','compareStates$3va12g']};};
})(GroupTestExecutor$internal.$$.prototype);
}
return GroupTestExecutor$internal;
}
ex$.$init$GroupTestExecutor$internal=$init$GroupTestExecutor$internal;
$init$GroupTestExecutor$internal();
function ErrorTestExecutor$internal(description,$wgb9lg$3gu,errorTestExecutor$){
$init$ErrorTestExecutor$internal();
if(errorTestExecutor$===undefined)errorTestExecutor$=new ErrorTestExecutor$internal.$$;
errorTestExecutor$.description_=description;
errorTestExecutor$.$wgb9lg$3gu_=$wgb9lg$3gu;
TestExecutor(errorTestExecutor$);
return errorTestExecutor$;
}
ErrorTestExecutor$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription},pa:3},{nm:'exception',mt:'prm',$t:{t:m$1.Throwable}}],sts:[{t:TestExecutor}],pa:1,d:['ceylon.test.internal','ErrorTestExecutor']};};
ex$.ErrorTestExecutor$internal=ErrorTestExecutor$internal;
function $init$ErrorTestExecutor$internal(){
if(ErrorTestExecutor$internal.$$===undefined){
m$1.initTypeProto(ErrorTestExecutor$internal,'ceylon.test.internal::ErrorTestExecutor',m$1.Basic,$init$TestExecutor());
(function(errorTestExecutor$){
m$1.atr$(errorTestExecutor$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:ErrorTestExecutor$internal,pa:3,d:['ceylon.test.internal','ErrorTestExecutor','$at','description']};});
m$1.atr$(errorTestExecutor$,'$wgb9lg$3gu',function(){return this.$wgb9lg$3gu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Throwable},$cont:ErrorTestExecutor$internal,d:['ceylon.test.internal','ErrorTestExecutor','$at','exception$va2kfl']};});
errorTestExecutor$.execute=function($3gv){
var errorTestExecutor$=this;
$3gv.fireTestError(TestErrorEvent$event(TestResult(errorTestExecutor$.description,error(),errorTestExecutor$.$wgb9lg$3gu)));
};errorTestExecutor$.execute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext}}],$cont:ErrorTestExecutor$internal,pa:3,d:['ceylon.test.internal','ErrorTestExecutor','$m','execute']};};
})(ErrorTestExecutor$internal.$$.prototype);
}
return ErrorTestExecutor$internal;
}
ex$.$init$ErrorTestExecutor$internal=$init$ErrorTestExecutor$internal;
$init$ErrorTestExecutor$internal();
ex$.$pkg$ans$ceylon$test$internal=function(){return[m$1.doc$($CCMM$,'ceylon.test.internal','$pkg-anns')];};
function TestRunContextImpl$internal(runner,result,testRunContextImpl$){
$init$TestRunContextImpl$internal();
if(testRunContextImpl$===undefined)testRunContextImpl$=new TestRunContextImpl$internal.$$;
testRunContextImpl$.runner_=runner;
testRunContextImpl$.result_=result;
TestRunContext(testRunContextImpl$);
testRunContextImpl$.$wgb9lg$3gw_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestListener}});
testRunContextImpl$.$wgb9lg$3gx_=m$2.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$1.ClassDeclaration$meta$declaration},Item$HashMap:{t:TestListener}});
return testRunContextImpl$;
}
TestRunContextImpl$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'runner',mt:'prm',$t:{t:TestRunner},pa:3},{nm:'result',mt:'prm',$t:{t:TestRunResult},pa:3}],sts:[{t:TestRunContext}],pa:1,d:['ceylon.test.internal','TestRunContextImpl']};};
ex$.TestRunContextImpl$internal=TestRunContextImpl$internal;
function $init$TestRunContextImpl$internal(){
if(TestRunContextImpl$internal.$$===undefined){
m$1.initTypeProto(TestRunContextImpl$internal,'ceylon.test.internal::TestRunContextImpl',m$1.Basic,$init$TestRunContext());
(function(testRunContextImpl$){
m$1.atr$(testRunContextImpl$,'runner',function(){return this.runner_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunner},$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$at','runner']};});
m$1.atr$(testRunContextImpl$,'result',function(){return this.result_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunResult},$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$at','result']};});
m$1.atr$(testRunContextImpl$,'$wgb9lg$3gw',function(){return this.$wgb9lg$3gw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:TestListener}}},$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$at','listenersList$7lxy1s']};});
m$1.atr$(testRunContextImpl$,'$wgb9lg$3gx',function(){return this.$wgb9lg$3gx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.HashMap,a:{Key$HashMap:{t:m$1.ClassDeclaration$meta$declaration},Item$HashMap:{t:TestListener}}},$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$at','listenersCache$r83bg6']};});
testRunContextImpl$.addTestListener=function($3gy){var testRunContextImpl$=this;
if($3gy===undefined){$3gy=m$1.empty();}
return testRunContextImpl$.$wgb9lg$3gw.addAll($3gy);};
testRunContextImpl$.addTestListener.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'listeners',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','addTestListener']};};
testRunContextImpl$.removeTestListener=function($3gz){var testRunContextImpl$=this;
if($3gz===undefined){$3gz=m$1.empty();}
return testRunContextImpl$.$wgb9lg$3gw.removeAll($3gz);};
testRunContextImpl$.removeTestListener.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'listeners',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','removeTestListener']};};
testRunContextImpl$.fireTestRunStart=function($3h0){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3h0.runner.description,m$1.$JsCallable((function($3h2){return $3h2.testRunStart($3h0);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestRunStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunStartEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestRunStart']};};
testRunContextImpl$.fireTestRunFinish=function($3h3){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3h3.runner.description,m$1.$JsCallable((function($3h4){return $3h4.testRunFinish($3h3);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestRunFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunFinishEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestRunFinish']};};
testRunContextImpl$.fireTestStart=function($3h5){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3h5.description,m$1.$JsCallable((function($3h6){return $3h6.testStart($3h5);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}),true);};
testRunContextImpl$.fireTestStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestStartEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestStart']};};
testRunContextImpl$.fireTestFinish=function($3h7){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3h7.result.description,m$1.$JsCallable((function($3h8){return $3h8.testFinish($3h7);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestFinish']};};
testRunContextImpl$.fireTestError=function($3h9){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3h9.result.description,m$1.$JsCallable((function($3ha){return $3ha.testError($3h9);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestError']};};
testRunContextImpl$.fireTestIgnore=function($3hb){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1($3hb.result.description,m$1.$JsCallable((function($3hc){return $3hc.testIgnore($3hb);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestIgnoreEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestIgnore']};};
testRunContextImpl$.fireTestExclude=function($3hd){var testRunContextImpl$=this;
return testRunContextImpl$.$wgb9lg$3h1(null,m$1.$JsCallable((function($3he){return $3he.testExclude($3hd);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}));};
testRunContextImpl$.fireTestExclude.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestExcludeEvent$event}}],$cont:TestRunContextImpl$internal,pa:3,d:['ceylon.test.internal','TestRunContextImpl','$m','fireTestExclude']};};
testRunContextImpl$.$wgb9lg$3h1$defs$propagateException=function($3hf,$3hg,$3hh){return false;};
testRunContextImpl$.$wgb9lg$3h1=function($3hf,$3hg,$3hh){
var testRunContextImpl$=this;
if($3hh===undefined){$3hh=testRunContextImpl$.$wgb9lg$3h1$defs$propagateException($3hf,$3hg,$3hh);}
var $3hi=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestListener}});
$3hi.addAll(testRunContextImpl$.$wgb9lg$3gw);
$3hi.addAll(testRunContextImpl$.$wgb9lg$3hj($3hf));
testRunContextImpl$.$wgb9lg$3hk($3hi,m$1.JsCallable(testRunContextImpl$,$3hg),$3hh);
};testRunContextImpl$.$wgb9lg$3h1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'description',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TestDescription}]}},{nm:'handler',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestListener}]},Return$Callable:{t:m$1.Anything}}}},{nm:'propagateException',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$m','fire$rsc2rz']};};
testRunContextImpl$.$wgb9lg$3hk=function($3hl,$3hm,$3hn,$3ho){
var testRunContextImpl$=this;
if($3ho===undefined){$3ho=m$1.empty();}
var $3hq;for(var $3hp=$3hl.iterator();($3hq=$3hp.next())!==m$1.finished();){
if(!$3ho.contains($3hq)){
try{
$3hm($3hq);
}
catch($3hr){
if($3hr.getT$name===undefined)$3hr=m$1.NatErr($3hr);
if(m$1.is$($3hr,{t:m$1.Throwable})){
if($3hn){
throw m$1.wrapexc($3hr,'67:24-67:31','ceylon/test/internal/TestRunContextImpl.ceylon');
}
else{
var $3hs=(function(){var $3ht=($3hu=($3hv=TestDescription("test mechanism"),$3hw=error(),$3hx=$3hr,TestResult($3hv,$3hw,$3hx,undefined)),TestErrorEvent$event($3hu));
var $3hu,$3hv,$3hw,$3hx;
testRunContextImpl$.$wgb9lg$3hk($3hl,m$1.$JsCallable((function($3hy){return $3hy.testError($3ht);}),[{nm:'l',mt:'prm',$t:{t:TestListener}}],{Arguments$Callable:m$1.mtt$([{t:TestListener}]),Return$Callable:{t:m$1.Anything}}),false,[$3hq].$sa$({t:TestListener}).chain($3ho,{OtherAbsent$chain:{t:m$1.Nothing},Other$chain:{t:TestListener}}).sequence());
}());if($3hs!==undefined){return $3hs;}
}
}else{throw $3hr}
}
}
}
};testRunContextImpl$.$wgb9lg$3hk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'listeners',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:TestListener},Absent$Iterable:{t:m$1.Null}}}},{nm:'handler',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:TestListener}]},Return$Callable:{t:m$1.Anything}}}},{nm:'propagateException',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'problematicListeners',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}}}],$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$m','fire2$nrjy49']};};
testRunContextImpl$.$wgb9lg$3hj=function($3hz){
var testRunContextImpl$=this;
var $3i0=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestListener}});
var $3i1;
if(m$1.nn$(($3i1=$3hz))){
var $3i2=m$2.HashSet(undefined,undefined,undefined,{Element$HashSet:{t:m$1.ClassDeclaration$meta$declaration}});
testRunContextImpl$.$wgb9lg$3i3($3i1,$3i2);
var $3i5;for(var $3i4=$3i2.iterator();($3i5=$3i4.next())!==m$1.finished();){
if(testRunContextImpl$.$wgb9lg$3gx.keys.contains($3i5)){
var $3i6;
m$1.asrt$((m$1.nn$(($3i6=testRunContextImpl$.$wgb9lg$3gx.$_get($3i5)))),"Assertion failed: \'exists listener = listenersCache.get(listenerClass)\' at TestRunContextImpl.ceylon (92:27-92:79)",'92:20-92:80','TestRunContextImpl.ceylon');
$3i0.add($3i6);
}
else{
if($3i5.anonymous){
var $3i7;
m$1.asrt$((m$1.is$(($3i7=($3i8=$3i5.objectValue,m$1.JsCallable($3i8,m$1.nn$($3i8)?$3i8.$_get:null))()),{t:TestListener})),"Assertion failed: \'is TestListener listener = listenerClass.objectValue?.get()\' at TestRunContextImpl.ceylon (96:30-96:90)",'96:24-96:91','TestRunContextImpl.ceylon');
var $3i8;
$3i0.add($3i7);
}
else{
var $3i9;
m$1.asrt$((m$1.is$(($3i9=$3i5.instantiate()),{t:TestListener})),"Assertion failed: \'is TestListener listener = listenerClass.instantiate()\' at TestRunContextImpl.ceylon (99:31-99:86)",'99:24-99:87','TestRunContextImpl.ceylon');
testRunContextImpl$.$wgb9lg$3gx.put($3i5,$3i9);
$3i0.add($3i9);
}
}
}
}
return $3i0;
};testRunContextImpl$.$wgb9lg$3hj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:TestListener},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'description',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TestDescription}]}}],$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$m','findListeners$xakzlr']};};
testRunContextImpl$.$wgb9lg$3i3=function($3ia,$3ib){
var testRunContextImpl$=this;
var $3ic;
if(m$1.nn$(($3ic=$3ia.functionDeclaration))){
var $3id;
if(m$1.nn$(($3id=$3ia.classDeclaration))){
testRunContextImpl$.$wgb9lg$3ie($3ic,$3ib);
testRunContextImpl$.$wgb9lg$3ie($3id,$3ib);
testRunContextImpl$.$wgb9lg$3ie($3id.containingPackage,$3ib);
testRunContextImpl$.$wgb9lg$3ie($3id.containingModule,$3ib);
}
else{
testRunContextImpl$.$wgb9lg$3ie($3ic,$3ib);
testRunContextImpl$.$wgb9lg$3ie($3ic.containingPackage,$3ib);
testRunContextImpl$.$wgb9lg$3ie($3ic.containingModule,$3ib);
}
}
var $3ig;for(var $3if=$3ia.children.iterator();($3ig=$3if.next())!==m$1.finished();){
testRunContextImpl$.$wgb9lg$3i3($3ig,$3ib);
}
};testRunContextImpl$.$wgb9lg$3i3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription}},{nm:'listenerClasses',mt:'prm',$t:{t:m$2.MutableSet,a:{Element$MutableSet:{t:m$1.ClassDeclaration$meta$declaration}}}}],$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$m','findListenerClasses$yfs38k']};};
testRunContextImpl$.$wgb9lg$3ie=function($3ih,$3ii){
var testRunContextImpl$=this;
var $3ij;
if(m$1.is$(($3ij=$3ih),{t:m$1.ClassDeclaration$meta$declaration})){
var $3ik=$3ij;
var $3il;
while(m$1.nn$(($3il=$3ik))){
var $3in;for(var $3im=$3il.annotations({Annotation$annotations:{t:TestListenersAnnotation}}).iterator();($3in=$3im.next())!==m$1.finished();){
$3ii.addAll($3in.listeners);
}
$3ik=($3io=$3il.extendedType,m$1.nn$($3io)?$3io.declaration:null);
var $3io;
}
}
else{
var $3iq;for(var $3ip=$3ij.annotations({Annotation$annotations:{t:TestListenersAnnotation}}).iterator();($3iq=$3ip.next())!==m$1.finished();){
$3ii.addAll($3iq.listeners);
}
}
};testRunContextImpl$.$wgb9lg$3ie.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'declaration',mt:'prm',$t:{t:m$1.AnnotatedDeclaration$meta$declaration}},{nm:'listenerClasses',mt:'prm',$t:{t:m$2.MutableSet,a:{Element$MutableSet:{t:m$1.ClassDeclaration$meta$declaration}}}}],$cont:TestRunContextImpl$internal,d:['ceylon.test.internal','TestRunContextImpl','$m','findListenerClasses2$gv06h0']};};
})(TestRunContextImpl$internal.$$.prototype);
}
return TestRunContextImpl$internal;
}
ex$.$init$TestRunContextImpl$internal=$init$TestRunContextImpl$internal;
$init$TestRunContextImpl$internal();
function TestRunResultImpl$internal(testRunResultImpl$){
$init$TestRunResultImpl$internal();
if(testRunResultImpl$===undefined)testRunResultImpl$=new TestRunResultImpl$internal.$$;
TestRunResult(testRunResultImpl$);
testRunResultImpl$.$wgb9lg$3ir_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:TestResult}});
testRunResultImpl$.$wgb9lg$3is_=(0);
testRunResultImpl$.$wgb9lg$3it_=(0);
testRunResultImpl$.$wgb9lg$3iu_=(0);
testRunResultImpl$.$wgb9lg$3iv_=(0);
testRunResultImpl$.$wgb9lg$3iw_=(0);
testRunResultImpl$.$wgb9lg$3ix_=(0);
testRunResultImpl$.$wgb9lg$3iy_=(0);
testRunResultImpl$.$wgb9lg$3iz_=testRunResultImpl$.$wgb9lg$3j0();
return testRunResultImpl$;
}
TestRunResultImpl$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:TestRunResult}],pa:1,d:['ceylon.test.internal','TestRunResultImpl']};};
ex$.TestRunResultImpl$internal=TestRunResultImpl$internal;
function $init$TestRunResultImpl$internal(){
if(TestRunResultImpl$internal.$$===undefined){
m$1.initTypeProto(TestRunResultImpl$internal,'ceylon.test.internal::TestRunResultImpl',m$1.Basic,$init$TestRunResult());
(function(testRunResultImpl$){
m$1.atr$(testRunResultImpl$,'$wgb9lg$3ir',function(){return this.$wgb9lg$3ir_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.ArrayList,a:{Element$ArrayList:{t:TestResult}}},$cont:TestRunResultImpl$internal,d:['ceylon.test.internal','TestRunResultImpl','$at','resultsList$mj2s01']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3is',function(){return this.$wgb9lg$3is_;},function($3j1){return this.$wgb9lg$3is_=$3j1;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','runCounter$e3kf04']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3it',function(){return this.$wgb9lg$3it_;},function($3j2){return this.$wgb9lg$3it_=$3j2;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','successCounter$9169c4']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3iu',function(){return this.$wgb9lg$3iu_;},function($3j3){return this.$wgb9lg$3iu_=$3j3;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','errorCounter$cvci01']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3iv',function(){return this.$wgb9lg$3iv_;},function($3j4){return this.$wgb9lg$3iv_=$3j4;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','failureCounter$auhlzn']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3iw',function(){return this.$wgb9lg$3iw_;},function($3j5){return this.$wgb9lg$3iw_=$3j5;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCounter$sp9nxh']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3ix',function(){return this.$wgb9lg$3ix_;},function($3j6){return this.$wgb9lg$3ix_=$3j6;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','startTimeMilliseconds$ck75ac']};});
m$1.atr$(testRunResultImpl$,'$wgb9lg$3iy',function(){return this.$wgb9lg$3iy_;},function($3j7){return this.$wgb9lg$3iy_=$3j7;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:1024,d:['ceylon.test.internal','TestRunResultImpl','$at','endTimeMilliseconds$efqgdn']};});
m$1.atr$(testRunResultImpl$,'runCount',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3is;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','runCount']};});
m$1.atr$(testRunResultImpl$,'successCount',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3it;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','successCount']};});
m$1.atr$(testRunResultImpl$,'errorCount',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3iu;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','errorCount']};});
m$1.atr$(testRunResultImpl$,'failureCount',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3iv;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','failureCount']};});
m$1.atr$(testRunResultImpl$,'ignoreCount',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3iw;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','ignoreCount']};});
m$1.atr$(testRunResultImpl$,'isSuccess',function(){
var testRunResultImpl$=this;
return ((!(testRunResultImpl$.successCount==0)&&((testRunResultImpl$.errorCount).valueOf()==(0).valueOf()))&&((testRunResultImpl$.failureCount).valueOf()==(0).valueOf()));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','isSuccess']};});
m$1.atr$(testRunResultImpl$,'startTime',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3ix;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','startTime']};});
m$1.atr$(testRunResultImpl$,'endTime',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3iy;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','endTime']};});
m$1.atr$(testRunResultImpl$,'elapsedTime',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.endTime.minus(testRunResultImpl$.startTime);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','elapsedTime']};});
m$1.atr$(testRunResultImpl$,'results',function(){
var testRunResultImpl$=this;
return testRunResultImpl$.$wgb9lg$3ir.sequence();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestResult}}},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','results']};});
m$1.atr$(testRunResultImpl$,'string',function(){
var testRunResultImpl$=this;
var $3j8=m$1.StringBuilder();
$3j8.append("TEST RESULTS").appendNewline();
if(testRunResultImpl$.results.empty){
$3j8.append("There were no tests!").appendNewline();
}
else{
$3j8.append("run:     ".plus(testRunResultImpl$.runCount.string).plus("")).appendNewline();
$3j8.append("success: ".plus(testRunResultImpl$.successCount.string).plus("")).appendNewline();
$3j8.append("failure: ".plus(testRunResultImpl$.failureCount.string).plus("")).appendNewline();
$3j8.append("error:   ".plus(testRunResultImpl$.errorCount.string).plus("")).appendNewline();
$3j8.append("ignored: ".plus(testRunResultImpl$.ignoreCount.string).plus("")).appendNewline();
$3j8.append("time:    ".plus(testRunResultImpl$.elapsedTime.divided(1000).string).plus("s")).appendNewline();
$3j8.appendNewline();
if(testRunResultImpl$.isSuccess){
$3j8.append("TESTS SUCCESS").appendNewline();
}
else{
var $3ja;for(var $3j9=testRunResultImpl$.results.iterator();($3ja=$3j9.next())!==m$1.finished();){
if((($3ja.state.equals(failure())||$3ja.state.equals(error()))&&$3ja.description.children.empty)){
$3j8.append($3ja.string).appendNewline();
}
}
$3j8.appendNewline();
$3j8.append("TESTS FAILED !").appendNewline();
}
}
return $3j8.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestRunResultImpl$internal,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$at','string']};});function $wgb9lg$3j0(){
var testRunResultImpl$=this;
var listener$TestRunResultImpl$=new this.$wgb9lg$3j0.$$;listener$TestRunResultImpl$.outer$=this;
TestListener(listener$TestRunResultImpl$);
return listener$TestRunResultImpl$;
};$wgb9lg$3j0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TestRunResultImpl$internal,sts:[{t:TestListener}],d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};};
function $init$listener(){
if($wgb9lg$3j0.$$===undefined){
m$1.initTypeProto($wgb9lg$3j0,'ceylon.test.internal::TestRunResultImpl.listener',m$1.Basic,$init$TestListener());
TestRunResultImpl$internal.$wgb9lg$3j0=$wgb9lg$3j0;
(function(listener$TestRunResultImpl$){
listener$TestRunResultImpl$.testRunStart=function($3jb){var listener$TestRunResultImpl$=this;
return (listener$TestRunResultImpl$.outer$.$wgb9lg$3ix=m$1.system().milliseconds);};
listener$TestRunResultImpl$.testRunStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunStartEvent$event}}],$cont:testRunResultImpl$.$wgb9lg$3j0,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testRunStart']};};
listener$TestRunResultImpl$.testRunFinish=function($3jc){var listener$TestRunResultImpl$=this;
return (listener$TestRunResultImpl$.outer$.$wgb9lg$3iy=m$1.system().milliseconds);};
listener$TestRunResultImpl$.testRunFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunFinishEvent$event}}],$cont:testRunResultImpl$.$wgb9lg$3j0,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testRunFinish']};};
listener$TestRunResultImpl$.testFinish=function($3jd){var listener$TestRunResultImpl$=this,testRunResultImpl$=listener$TestRunResultImpl$.outer$;
return listener$TestRunResultImpl$.$wgb9lg$3je($3jd.result,true);};
listener$TestRunResultImpl$.testFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event}}],$cont:testRunResultImpl$.$wgb9lg$3j0,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testFinish']};};
listener$TestRunResultImpl$.testError=function($3jf){var listener$TestRunResultImpl$=this,testRunResultImpl$=listener$TestRunResultImpl$.outer$;
return listener$TestRunResultImpl$.$wgb9lg$3je($3jf.result,false);};
listener$TestRunResultImpl$.testError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event}}],$cont:testRunResultImpl$.$wgb9lg$3j0,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testError']};};
listener$TestRunResultImpl$.testIgnore=function($3jg){var listener$TestRunResultImpl$=this,testRunResultImpl$=listener$TestRunResultImpl$.outer$;
return listener$TestRunResultImpl$.$wgb9lg$3je($3jg.result,false);};
listener$TestRunResultImpl$.testIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestIgnoreEvent$event}}],$cont:testRunResultImpl$.$wgb9lg$3j0,pa:3,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','testIgnore']};};
listener$TestRunResultImpl$.$wgb9lg$3je=function($3jh,$3ji){
var listener$TestRunResultImpl$=this,testRunResultImpl$=listener$TestRunResultImpl$.outer$;
listener$TestRunResultImpl$.outer$.$wgb9lg$3ir.add($3jh);
if(($3jh.state.equals(success())&&$3jh.description.children.empty)){
($3jj=listener$TestRunResultImpl$.outer$.$wgb9lg$3it,listener$TestRunResultImpl$.outer$.$wgb9lg$3it=$3jj.successor,$3jj);
var $3jj;
(listener$TestRunResultImpl$.outer$.$wgb9lg$3is=listener$TestRunResultImpl$.outer$.$wgb9lg$3is.plus(($3jk=($3ji?1:null),m$1.nn$($3jk)?$3jk:(0))));
var $3jk;
}
else{
if(($3jh.state.equals(failure())&&m$1.nn$($3jh.exception))){
($3jl=listener$TestRunResultImpl$.outer$.$wgb9lg$3iv,listener$TestRunResultImpl$.outer$.$wgb9lg$3iv=$3jl.successor,$3jl);
var $3jl;
(listener$TestRunResultImpl$.outer$.$wgb9lg$3is=listener$TestRunResultImpl$.outer$.$wgb9lg$3is.plus(($3jm=($3ji?1:null),m$1.nn$($3jm)?$3jm:(0))));
var $3jm;
}
else{
if(($3jh.state.equals(error())&&m$1.nn$($3jh.exception))){
($3jn=listener$TestRunResultImpl$.outer$.$wgb9lg$3iu,listener$TestRunResultImpl$.outer$.$wgb9lg$3iu=$3jn.successor,$3jn);
var $3jn;
(listener$TestRunResultImpl$.outer$.$wgb9lg$3is=listener$TestRunResultImpl$.outer$.$wgb9lg$3is.plus(($3jo=($3ji?1:null),m$1.nn$($3jo)?$3jo:(0))));
var $3jo;
}
else{
if(($3jh.state.equals(ignored())&&m$1.nn$($3jh.exception))){
($3jp=listener$TestRunResultImpl$.outer$.$wgb9lg$3iw,listener$TestRunResultImpl$.outer$.$wgb9lg$3iw=$3jp.successor,$3jp);
var $3jp;
}
}
}
}
};listener$TestRunResultImpl$.$wgb9lg$3je.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'result',mt:'prm',$t:{t:TestResult}},{nm:'wasRun',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:testRunResultImpl$.$wgb9lg$3j0,d:['ceylon.test.internal','TestRunResultImpl','$o','listener','$m','handleResult$ltsldy']};};
})($wgb9lg$3j0.$$.prototype);
}
return $wgb9lg$3j0;
}
testRunResultImpl$.$init$listener=$init$listener;
m$1.atr$(testRunResultImpl$,'listener',function(){return this.$wgb9lg$3iz_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestRunResultImpl$internal.$$.prototype.$init$listener()},$cont:TestRunResultImpl$internal,pa:1,d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};});
testRunResultImpl$.$wgb9lg$3j0=$wgb9lg$3j0;testRunResultImpl$.$wgb9lg$3j0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestRunResultImpl$internal.$$.prototype.$init$listener()},$cont:TestRunResultImpl$internal,pa:1,d:['ceylon.test.internal','TestRunResultImpl','$o','listener']};};
$init$listener();
})(TestRunResultImpl$internal.$$.prototype);
}
return TestRunResultImpl$internal;
}
ex$.$init$TestRunResultImpl$internal=$init$TestRunResultImpl$internal;
$init$TestRunResultImpl$internal();
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Tom Bentley","Tomáš Hradec"].$sa$({t:m$1.$_String})),m$1.license("Apache Software License")];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.2.0':[]
};};
ex$.$pkg$ans$ceylon$test=function(){return[m$1.doc$($CCMM$,'ceylon.test','$pkg-anns'),m$1.shared()];};
function TestDescription(name,functionDeclaration,classDeclaration,children,testDescription$){
$init$TestDescription();
if(testDescription$===undefined)testDescription$=new TestDescription.$$;
testDescription$.name_=name;
if(functionDeclaration===undefined){functionDeclaration=null;}
testDescription$.functionDeclaration_=functionDeclaration;
if(classDeclaration===undefined){classDeclaration=null;}
testDescription$.classDeclaration_=classDeclaration;
if(children===undefined){children=m$1.empty();}
testDescription$.children_=children;
return testDescription$;
}
TestDescription.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The user friendly name of this test.")];}},{nm:'functionDeclaration',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.FunctionDeclaration$meta$declaration}]},pa:1,an:function(){return[m$1.doc("The function declaration of this test, if one exists.")];}},{nm:'classDeclaration',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestDescription:$at:classDeclaration')];}},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestDescription}}},pa:1,an:function(){return[m$1.doc("The children of this test, if any.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestDescription')];},d:['ceylon.test','TestDescription']};};
ex$.TestDescription=TestDescription;
function $init$TestDescription(){
if(TestDescription.$$===undefined){
m$1.initTypeProto(TestDescription,'ceylon.test::TestDescription',m$1.Basic);
(function(testDescription$){
m$1.atr$(testDescription$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestDescription,pa:1,an:function(){return[m$1.doc("The user friendly name of this test.")];},d:['ceylon.test','TestDescription','$at','name']};});
m$1.atr$(testDescription$,'functionDeclaration',function(){return this.functionDeclaration_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.FunctionDeclaration$meta$declaration}]},$cont:TestDescription,pa:1,an:function(){return[m$1.doc("The function declaration of this test, if one exists.")];},d:['ceylon.test','TestDescription','$at','functionDeclaration']};});
m$1.atr$(testDescription$,'classDeclaration',function(){return this.classDeclaration_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.ClassDeclaration$meta$declaration}]},$cont:TestDescription,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestDescription:$at:classDeclaration')];},d:['ceylon.test','TestDescription','$at','classDeclaration']};});
m$1.atr$(testDescription$,'children',function(){return this.children_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestDescription}}},$cont:TestDescription,pa:1,an:function(){return[m$1.doc("The children of this test, if any.")];},d:['ceylon.test','TestDescription','$at','children']};});
testDescription$.equals=function($3jr){
var testDescription$=this;
var $3js;
if(m$1.is$(($3js=$3jr),{t:TestDescription})){
return (((testDescription$.name.equals($3js.name)&&equalsCompare(testDescription$.functionDeclaration,$3js.functionDeclaration))&&equalsCompare(testDescription$.classDeclaration,$3js.classDeclaration))&&testDescription$.children.equals($3js.children));
}
function $3jt(){return $3jr;}
return false;
};testDescription$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TestDescription,pa:3,d:['ceylon.test','TestDescription','$m','equals']};};
m$1.atr$(testDescription$,'hash',function(){
var testDescription$=this;
return testDescription$.name.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestDescription,pa:3,d:['ceylon.test','TestDescription','$at','hash']};});
m$1.atr$(testDescription$,'string',function(){
var testDescription$=this;
return testDescription$.name;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestDescription,pa:3,d:['ceylon.test','TestDescription','$at','string']};});
})(TestDescription.$$.prototype);
}
return TestDescription;
}
ex$.$init$TestDescription=$init$TestDescription;
$init$TestDescription();
function TestExecutor(testExecutor$){
}
TestExecutor.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestExecutor')];},d:['ceylon.test','TestExecutor']};};
ex$.TestExecutor=TestExecutor;
function $init$TestExecutor(){
if(TestExecutor.$$===undefined){
m$1.initTypeProtoI(TestExecutor,'ceylon.test::TestExecutor');
(function(testExecutor$){
testExecutor$.$prop$getDescription={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestExecutor,pa:5,an:function(){return[m$1.doc("The description of the test to be run.")];},d:['ceylon.test','TestExecutor','$at','description']};}};
testExecutor$.execute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'context',mt:'prm',$t:{t:TestRunContext},an:function(){return[m$1.doc("The context of this test.")];}}],$cont:TestExecutor,pa:5,an:function(){return[m$1.doc("Run the test.")];},d:['ceylon.test','TestExecutor','$m','execute']};}};
})(TestExecutor.$$.prototype);
}
return TestExecutor;
}
ex$.$init$TestExecutor=$init$TestExecutor;
$init$TestExecutor();
function TestListener(testListener$){
}
TestListener.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener')];},d:['ceylon.test','TestListener']};};
ex$.TestListener=TestListener;
function $init$TestListener(){
if(TestListener.$$===undefined){
m$1.initTypeProtoI(TestListener,'ceylon.test::TestListener');
(function(testListener$){
testListener$.testRunStart=function($3ju){
var testListener$=this;
};testListener$.testRunStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunStartEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc("Called before any tests have been run.")];},d:['ceylon.test','TestListener','$m','testRunStart']};};
testListener$.testRunFinish=function($3jv){
var testListener$=this;
};testListener$.testRunFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunFinishEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc("Called after all tests have finished.")];},d:['ceylon.test','TestListener','$m','testRunFinish']};};
testListener$.testStart=function($3jw){
var testListener$=this;
};testListener$.testStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestStartEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener:$m:testStart')];},d:['ceylon.test','TestListener','$m','testStart']};};
testListener$.testFinish=function($3jx){
var testListener$=this;
};testListener$.testFinish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener:$m:testFinish')];},d:['ceylon.test','TestListener','$m','testFinish']};};
testListener$.testIgnore=function($3jy){
var testListener$=this;
};testListener$.testIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestIgnoreEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener:$m:testIgnore')];},d:['ceylon.test','TestListener','$m','testIgnore']};};
testListener$.testError=function($3jz){
var testListener$=this;
};testListener$.testError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener:$m:testError')];},d:['ceylon.test','TestListener','$m','testError']};};
testListener$.testExclude=function($3k0){
var testListener$=this;
};testListener$.testExclude.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestExcludeEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestListener,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestListener:$m:testExclude')];},d:['ceylon.test','TestListener','$m','testExclude']};};
})(TestListener.$$.prototype);
}
return TestListener;
}
ex$.$init$TestListener=$init$TestListener;
$init$TestListener();
function TestResult(description,state,exception,elapsedTime,testResult$){
$init$TestResult();
if(testResult$===undefined)testResult$=new TestResult.$$;
testResult$.description_=description;
testResult$.state_=state;
if(exception===undefined){exception=null;}
testResult$.exception_=exception;
if(elapsedTime===undefined){elapsedTime=(0);}
testResult$.elapsedTime_=elapsedTime;
return testResult$;
}
TestResult.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription},pa:1,an:function(){return[m$1.doc("The test this is the result for.")];}},{nm:'state',mt:'prm',$t:{t:TestState},pa:1,an:function(){return[m$1.doc("The result state of this test.")];}},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestResult:$at:exception')];}},{nm:'elapsedTime',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The total elapsed time in milliseconds.")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestResult'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.test'),TestRunResult)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.test','TestResult']};};
ex$.TestResult=TestResult;
function $init$TestResult(){
if(TestResult.$$===undefined){
m$1.initTypeProto(TestResult,'ceylon.test::TestResult',m$1.Basic);
(function(testResult$){
m$1.atr$(testResult$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestResult,pa:1,an:function(){return[m$1.doc("The test this is the result for.")];},d:['ceylon.test','TestResult','$at','description']};});
m$1.atr$(testResult$,'state',function(){return this.state_;},undefined,function(){return{mod:$CCMM$,$t:{t:TestState},$cont:TestResult,pa:1,an:function(){return[m$1.doc("The result state of this test.")];},d:['ceylon.test','TestResult','$at','state']};});
m$1.atr$(testResult$,'exception',function(){return this.exception_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:TestResult,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestResult:$at:exception')];},d:['ceylon.test','TestResult','$at','exception']};});
m$1.atr$(testResult$,'elapsedTime',function(){return this.elapsedTime_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestResult,pa:1,an:function(){return[m$1.doc("The total elapsed time in milliseconds.")];},d:['ceylon.test','TestResult','$at','elapsedTime']};});
m$1.atr$(testResult$,'string',function(){
var testResult$=this;
return "".plus(testResult$.description.string).plus(" - ").plus(testResult$.state.string).plus("").plus(($3k1=(m$1.nn$(testResult$.exception)?" (".plus(($3k2=($3k3=testResult$.exception,m$1.nn$($3k3)?$3k3.string:null),m$1.nn$($3k2)?$3k2:"")).plus(")"):null),m$1.nn$($3k1)?$3k1:"")).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestResult,pa:3,d:['ceylon.test','TestResult','$at','string']};});
})(TestResult.$$.prototype);
}
return TestResult;
}
ex$.$init$TestResult=$init$TestResult;
$init$TestResult();
var $3k1,$3k2,$3k3;
function TestRunContext(testRunContext$){
}
TestRunContext.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunContext')];},d:['ceylon.test','TestRunContext']};};
ex$.TestRunContext=TestRunContext;
function $init$TestRunContext(){
if(TestRunContext.$$===undefined){
m$1.initTypeProtoI(TestRunContext,'ceylon.test::TestRunContext');
(function(testRunContext$){
testRunContext$.$prop$getRunner={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TestRunner},$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("The current test runner.")];},d:['ceylon.test','TestRunContext','$at','runner']};}};
testRunContext$.$prop$getResult={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TestRunResult},$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("The summary result of the test run.")];},d:['ceylon.test','TestRunContext','$at','result']};}};
testRunContext$.addTestListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'listeners',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}},an:function(){return[m$1.doc("The listeners for adding.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Add given listeners into test context.")];},d:['ceylon.test','TestRunContext','$m','addTestListener']};}};testRunContext$.removeTestListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'listeners',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}},an:function(){return[m$1.doc("The listeners for removing.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Remove given listeners into test context.")];},d:['ceylon.test','TestRunContext','$m','removeTestListener']};}};testRunContext$.fireTestRunStart={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunStartEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testRunStart]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestRunStart']};}};testRunContext$.fireTestRunFinish={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestRunFinishEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testRunFinish]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestRunFinish']};}};testRunContext$.fireTestStart={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestStartEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testStart]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestStart']};}};testRunContext$.fireTestFinish={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestFinishEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testFinish]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestFinish']};}};testRunContext$.fireTestIgnore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestIgnoreEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testIgnore]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestIgnore']};}};testRunContext$.fireTestError={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestErrorEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testError]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestError']};}};testRunContext$.fireTestExclude={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:TestExcludeEvent$event},an:function(){return[m$1.doc("The event object.")];}}],$cont:TestRunContext,pa:5,an:function(){return[m$1.doc("Fire [[TestListener.testExclude]] event.")];},d:['ceylon.test','TestRunContext','$m','fireTestExclude']};}};
})(TestRunContext.$$.prototype);
}
return TestRunContext;
}
ex$.$init$TestRunContext=$init$TestRunContext;
$init$TestRunContext();
function TestSource(){var $3k4=m$1.mut$([{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration},{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.FunctionDeclaration$meta$declaration},{t:m$1.Class$meta$model,a:{Arguments$Class:{t:m$1.Nothing},Type$Class:{t:m$1.Anything}}},{t:m$1.FunctionModel$meta$model,a:{Type$FunctionModel:{t:m$1.Anything},Arguments$FunctionModel:{t:m$1.Nothing}}},{t:m$1.$_String}]);$3k4.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestSource')];},d:['ceylon.test','TestSource']};};return $3k4;}
ex$.TestSource=TestSource;
function TestFilter(){var $3k5={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:TestDescription}]),Return$Callable:{t:m$1.$_Boolean}}};$3k5.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestFilter')];},d:['ceylon.test','TestFilter']};};return $3k5;}
ex$.TestFilter=TestFilter;
function TestComparator(){var $3k6={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:TestDescription},{t:TestDescription}]),Return$Callable:{t:m$1.Comparison}}};$3k6.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestComparator')];},d:['ceylon.test','TestComparator']};};return $3k6;}
ex$.TestComparator=TestComparator;
function TestRunner(testRunner$){
}
TestRunner.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunner')];},d:['ceylon.test','TestRunner']};};
ex$.TestRunner=TestRunner;
function $init$TestRunner(){
if(TestRunner.$$===undefined){
m$1.initTypeProtoI(TestRunner,'ceylon.test::TestRunner');
(function(testRunner$){
testRunner$.$prop$getDescription={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TestDescription},$cont:TestRunner,pa:5,an:function(){return[m$1.doc("The description of all tests to be run.")];},d:['ceylon.test','TestRunner','$at','description']};}};
testRunner$.run={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:TestRunResult},ps:[],$cont:TestRunner,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunner:$m:run')];},d:['ceylon.test','TestRunner','$m','run']};}};
})(TestRunner.$$.prototype);
}
return TestRunner;
}
ex$.$init$TestRunner=$init$TestRunner;
$init$TestRunner();
function createTestRunner($3k7,$3k8,$3k9,$3ka){if($3k8===undefined){$3k8=m$1.empty();}
if($3k9===undefined){$3k9=m$1.JsCallable(0,defaultTestFilter);}
if($3ka===undefined){$3ka=m$1.JsCallable(0,defaultTestComparator);}
return DefaultTestRunner$core($3k7,$3k8,$3k9,$3ka);};
createTestRunner.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TestRunner},ps:[{nm:'sources',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:TestSource()}},an:function(){return[m$1.doc$($CCMM$,'ceylon.test:createTestRunner:$at:sources$4mrvgo')];}},{nm:'listeners',mt:'prm',def:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestListener}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.test:createTestRunner:$at:listeners$4g48wp')];}},{nm:'filter',mt:'prm',def:1,$t:TestFilter(),an:function(){return[m$1.doc$($CCMM$,'ceylon.test:createTestRunner:$at:filter$bd9o6w')];}},{nm:'comparator',mt:'prm',def:1,$t:TestComparator(),an:function(){return[m$1.doc$($CCMM$,'ceylon.test:createTestRunner:$at:comparator$bjkyna')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:createTestRunner')];},d:['ceylon.test','createTestRunner']};};
ex$.createTestRunner=createTestRunner;
function defaultTestFilter($3kb){return true;};
defaultTestFilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'description',mt:'prm',$t:{t:TestDescription}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:defaultTestFilter')];},d:['ceylon.test','defaultTestFilter']};};
ex$.defaultTestFilter=defaultTestFilter;
function defaultTestComparator($3kc,$3kd){return $3kc.name.compare($3kd.name);};
defaultTestComparator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'description1',mt:'prm',$t:{t:TestDescription}},{nm:'description2',mt:'prm',$t:{t:TestDescription}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:defaultTestComparator')];},d:['ceylon.test','defaultTestComparator']};};
ex$.defaultTestComparator=defaultTestComparator;
function TestRunResult(testRunResult$){
}
TestRunResult.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult')];},d:['ceylon.test','TestRunResult']};};
ex$.TestRunResult=TestRunResult;
function $init$TestRunResult(){
if(TestRunResult.$$===undefined){
m$1.initTypeProtoI(TestRunResult,'ceylon.test::TestRunResult');
(function(testRunResult$){
testRunResult$.$prop$getIsSuccess={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:isSuccess')];},d:['ceylon.test','TestRunResult','$at','isSuccess']};}};
testRunResult$.$prop$getRunCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc("The number of executed tests.")];},d:['ceylon.test','TestRunResult','$at','runCount']};}};
testRunResult$.$prop$getSuccessCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:successCount')];},d:['ceylon.test','TestRunResult','$at','successCount']};}};
testRunResult$.$prop$getFailureCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:failureCount')];},d:['ceylon.test','TestRunResult','$at','failureCount']};}};
testRunResult$.$prop$getErrorCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:errorCount')];},d:['ceylon.test','TestRunResult','$at','errorCount']};}};
testRunResult$.$prop$getIgnoreCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:ignoreCount')];},d:['ceylon.test','TestRunResult','$at','ignoreCount']};}};
testRunResult$.$prop$getStartTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:startTime')];},d:['ceylon.test','TestRunResult','$at','startTime']};}};
testRunResult$.$prop$getEndTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestRunResult:$at:endTime')];},d:['ceylon.test','TestRunResult','$at','endTime']};}};
testRunResult$.$prop$getElapsedTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc("The total elapsed time in milliseconds.")];},d:['ceylon.test','TestRunResult','$at','elapsedTime']};}};
testRunResult$.$prop$getResults={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:TestResult}}},$cont:TestRunResult,pa:5,an:function(){return[m$1.doc("The detailed results of each test.")];},d:['ceylon.test','TestRunResult','$at','results']};}};
})(TestRunResult.$$.prototype);
}
return TestRunResult;
}
ex$.$init$TestRunResult=$init$TestRunResult;
$init$TestRunResult();
function TestState(string,testState$){
$init$TestState();
if(testState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.test::TestState"),'?','?')
testState$.string_=string;
return testState$;
}
TestState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String},pa:3}],of:[$prop$getSuccess,$prop$getFailure,$prop$getError,$prop$getIgnored],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:TestState')];},d:['ceylon.test','TestState']};};
ex$.TestState=TestState;
function $init$TestState(){
if(TestState.$$===undefined){
m$1.initTypeProto(TestState,'ceylon.test::TestState',m$1.Basic);
(function(testState$){
m$1.atr$(testState$,'string',function(){return this.string_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TestState,pa:3,d:['ceylon.test','TestState','$at','string']};});
})(TestState.$$.prototype);
}
return TestState;
}
ex$.$init$TestState=$init$TestState;
$init$TestState();
function $3ke(){
var success$=new $3ke.$$;TestState("success",success$);
return success$;
};$3ke.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TestState},d:['ceylon.test','success']};};
function $init$success(){
if($3ke.$$===undefined){
m$1.initTypeProto($3ke,'ceylon.test::success',$init$TestState());
}
return $3ke;
}
ex$.$init$success=$init$success;
$init$success();
var $3kg;
function success(){
if($3kg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'success\' before it was set"),'5:0-6:52','TestState.ceylon');
if($3kg===undefined){$3kg=m$1.INIT$;$3kg=$init$success()();$3kg.$crtmm$=success.$crtmm$;}
return $3kg;
}
ex$.success=success;
success.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$success()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:success')];},d:['ceylon.test','success']};};
$prop$getSuccess=success;
ex$.$prop$getSuccess=$prop$getSuccess;
function $3kh(){
var failure$=new $3kh.$$;TestState("failure",failure$);
return failure$;
};$3kh.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TestState},d:['ceylon.test','failure']};};
function $init$failure(){
if($3kh.$$===undefined){
m$1.initTypeProto($3kh,'ceylon.test::failure',$init$TestState());
}
return $3kh;
}
ex$.$init$failure=$init$failure;
$init$failure();
var $3kj;
function failure(){
if($3kj===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'failure\' before it was set"),'8:0-9:52','TestState.ceylon');
if($3kj===undefined){$3kj=m$1.INIT$;$3kj=$init$failure()();$3kj.$crtmm$=failure.$crtmm$;}
return $3kj;
}
ex$.failure=failure;
failure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$failure()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:failure')];},d:['ceylon.test','failure']};};
$prop$getFailure=failure;
ex$.$prop$getFailure=$prop$getFailure;
function $3kk(){
var error$=new $3kk.$$;TestState("error",error$);
return error$;
};$3kk.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TestState},d:['ceylon.test','error']};};
function $init$error(){
if($3kk.$$===undefined){
m$1.initTypeProto($3kk,'ceylon.test::error',$init$TestState());
}
return $3kk;
}
ex$.$init$error=$init$error;
$init$error();
var $3km;
function error(){
if($3km===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'error\' before it was set"),'11:0-12:48','TestState.ceylon');
if($3km===undefined){$3km=m$1.INIT$;$3km=$init$error()();$3km.$crtmm$=error.$crtmm$;}
return $3km;
}
ex$.error=error;
error.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$error()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:error')];},d:['ceylon.test','error']};};
$prop$getError=error;
ex$.$prop$getError=$prop$getError;
function $3kn(){
var ignored$=new $3kn.$$;TestState("ignored",ignored$);
return ignored$;
};$3kn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TestState},d:['ceylon.test','ignored']};};
function $init$ignored(){
if($3kn.$$===undefined){
m$1.initTypeProto($3kn,'ceylon.test::ignored',$init$TestState());
}
return $3kn;
}
ex$.$init$ignored=$init$ignored;
$init$ignored();
var $3kp;
function ignored(){
if($3kp===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ignored\' before it was set"),'14:0-15:52','TestState.ceylon');
if($3kp===undefined){$3kp=m$1.INIT$;$3kp=$init$ignored()();$3kp.$crtmm$=ignored.$crtmm$;}
return $3kp;
}
ex$.ignored=ignored;
ignored.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$ignored()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.test:ignored')];},d:['ceylon.test','ignored']};};
$prop$getIgnored=ignored;
ex$.$prop$getIgnored=$prop$getIgnored;
ex$.$pkgunsh$ceylon$test={'nullSafeString':nullSafeString};
ex$.$pkgunsh$ceylon$test$core={'doFindCallbacks':doFindCallbacks$core,'callbackCache':$prop$getCallbackCache$core,'TestCandidate':TestCandidate$core(),'createExecutors':createExecutors$core,'createExecutor':createExecutor$core,'createSuiteExecutor':createSuiteExecutor$core,'findCandidates':findCandidates$core,'findCandidatesInModule':findCandidatesInModule$core,'findCandidatesInPackage':findCandidatesInPackage$core,'findCandidatesInClass':findCandidatesInClass$core,'findCandidatesInFunction':findCandidatesInFunction$core,'findCandidatesInTypeLiteral':findCandidatesInTypeLiteral$core,'findCandidatesInModuleLiteral':findCandidatesInModuleLiteral$core,'findCandidatesInPackageLiteral':findCandidatesInPackageLiteral$core,'findCandidatesInClassLiteral':findCandidatesInClassLiteral$core,'findCandidatesInFunctionLiteral':findCandidatesInFunctionLiteral$core,'findCandidatesInFullQualifiedName':findCandidatesInFullQualifiedName$core,'findPackage':findPackage$core,'findAnnotation':findAnnotation$core,'findAnnotations':findAnnotations$core,'runningRunners':$prop$getRunningRunners$core};
ex$.$pkgunsh$ceylon$test$event={'toString':$_toString$event};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
