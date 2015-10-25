(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/time/1.2.0/ceylon.time-1.2.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.0/ceylon.language-1.2.0');
m$1.$addmod$(m$1,'ceylon.language/1.2.0');
m$1.$addmod$(ex$,'ceylon.time/1.2.0');
function UnitOfDate$base(unitOfDate$){
}
UnitOfDate$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfYear$base},{t:UnitOfMonth$base},{t:UnitOfDay$base}],pa:1,an:function(){return[m$1.doc("Represents units of Date")];},d:['ceylon.time.base','UnitOfDate']};};
ex$.UnitOfDate$base=UnitOfDate$base;
function $init$UnitOfDate$base(){
if(UnitOfDate$base.$$===undefined){
m$1.initTypeProtoI(UnitOfDate$base,'ceylon.time.base::UnitOfDate');
}
return UnitOfDate$base;
}
ex$.$init$UnitOfDate$base=$init$UnitOfDate$base;
$init$UnitOfDate$base();
function UnitOfYear$base(unitOfYear$){
UnitOfDate$base(unitOfYear$);
}
UnitOfYear$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfDate$base}],pa:1,d:['ceylon.time.base','UnitOfYear']};};
ex$.UnitOfYear$base=UnitOfYear$base;
function $init$UnitOfYear$base(){
if(UnitOfYear$base.$$===undefined){
m$1.initTypeProtoI(UnitOfYear$base,'ceylon.time.base::UnitOfYear',$init$UnitOfDate$base());
}
return UnitOfYear$base;
}
ex$.$init$UnitOfYear$base=$init$UnitOfYear$base;
$init$UnitOfYear$base();
function UnitOfMonth$base(unitOfMonth$){
UnitOfDate$base(unitOfMonth$);
}
UnitOfMonth$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfDate$base}],pa:1,d:['ceylon.time.base','UnitOfMonth']};};
ex$.UnitOfMonth$base=UnitOfMonth$base;
function $init$UnitOfMonth$base(){
if(UnitOfMonth$base.$$===undefined){
m$1.initTypeProtoI(UnitOfMonth$base,'ceylon.time.base::UnitOfMonth',$init$UnitOfDate$base());
}
return UnitOfMonth$base;
}
ex$.$init$UnitOfMonth$base=$init$UnitOfMonth$base;
$init$UnitOfMonth$base();
function UnitOfDay$base(unitOfDay$){
UnitOfDate$base(unitOfDay$);
}
UnitOfDay$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfDate$base}],pa:1,d:['ceylon.time.base','UnitOfDay']};};
ex$.UnitOfDay$base=UnitOfDay$base;
function $init$UnitOfDay$base(){
if(UnitOfDay$base.$$===undefined){
m$1.initTypeProtoI(UnitOfDay$base,'ceylon.time.base::UnitOfDay',$init$UnitOfDate$base());
}
return UnitOfDay$base;
}
ex$.$init$UnitOfDay$base=$init$UnitOfDay$base;
$init$UnitOfDay$base();
function UnitOfTime$base(unitOfTime$){
}
UnitOfTime$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfHour$base},{t:UnitOfMinute$base},{t:UnitOfSecond$base},{t:UnitOfMillisecond$base}],pa:1,an:function(){return[m$1.doc("Represents units of Time")];},d:['ceylon.time.base','UnitOfTime']};};
ex$.UnitOfTime$base=UnitOfTime$base;
function $init$UnitOfTime$base(){
if(UnitOfTime$base.$$===undefined){
m$1.initTypeProtoI(UnitOfTime$base,'ceylon.time.base::UnitOfTime');
}
return UnitOfTime$base;
}
ex$.$init$UnitOfTime$base=$init$UnitOfTime$base;
$init$UnitOfTime$base();
function UnitOfHour$base(unitOfHour$){
UnitOfTime$base(unitOfHour$);
}
UnitOfHour$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfTime$base}],pa:1,d:['ceylon.time.base','UnitOfHour']};};
ex$.UnitOfHour$base=UnitOfHour$base;
function $init$UnitOfHour$base(){
if(UnitOfHour$base.$$===undefined){
m$1.initTypeProtoI(UnitOfHour$base,'ceylon.time.base::UnitOfHour',$init$UnitOfTime$base());
}
return UnitOfHour$base;
}
ex$.$init$UnitOfHour$base=$init$UnitOfHour$base;
$init$UnitOfHour$base();
function UnitOfMinute$base(unitOfMinute$){
UnitOfTime$base(unitOfMinute$);
}
UnitOfMinute$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfTime$base}],pa:1,d:['ceylon.time.base','UnitOfMinute']};};
ex$.UnitOfMinute$base=UnitOfMinute$base;
function $init$UnitOfMinute$base(){
if(UnitOfMinute$base.$$===undefined){
m$1.initTypeProtoI(UnitOfMinute$base,'ceylon.time.base::UnitOfMinute',$init$UnitOfTime$base());
}
return UnitOfMinute$base;
}
ex$.$init$UnitOfMinute$base=$init$UnitOfMinute$base;
$init$UnitOfMinute$base();
function UnitOfSecond$base(unitOfSecond$){
UnitOfTime$base(unitOfSecond$);
}
UnitOfSecond$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfTime$base}],pa:1,d:['ceylon.time.base','UnitOfSecond']};};
ex$.UnitOfSecond$base=UnitOfSecond$base;
function $init$UnitOfSecond$base(){
if(UnitOfSecond$base.$$===undefined){
m$1.initTypeProtoI(UnitOfSecond$base,'ceylon.time.base::UnitOfSecond',$init$UnitOfTime$base());
}
return UnitOfSecond$base;
}
ex$.$init$UnitOfSecond$base=$init$UnitOfSecond$base;
$init$UnitOfSecond$base();
function UnitOfMillisecond$base(unitOfMillisecond$){
UnitOfTime$base(unitOfMillisecond$);
}
UnitOfMillisecond$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:UnitOfTime$base}],pa:1,d:['ceylon.time.base','UnitOfMillisecond']};};
ex$.UnitOfMillisecond$base=UnitOfMillisecond$base;
function $init$UnitOfMillisecond$base(){
if(UnitOfMillisecond$base.$$===undefined){
m$1.initTypeProtoI(UnitOfMillisecond$base,'ceylon.time.base::UnitOfMillisecond',$init$UnitOfTime$base());
}
return UnitOfMillisecond$base;
}
ex$.$init$UnitOfMillisecond$base=$init$UnitOfMillisecond$base;
$init$UnitOfMillisecond$base();
function $3kq$base(){
var years$=new $3kq$base.$$;UnitOfYear$base(years$);
years$.$wgb6s9$3ks_=(-283456);
years$.$prop$getMinimum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kq$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};}};
years$.$prop$getMinimum.get=function(){return minimum};
years$.$wgb6s9$3kt_=(287396);
years$.$prop$getMaximum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kq$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};}};
years$.$prop$getMaximum.get=function(){return maximum};
return years$;
};$3kq$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfYear$base}],d:['ceylon.time.base','years']};};
function $init$years$base(){
if($3kq$base.$$===undefined){
m$1.initTypeProto($3kq$base,'ceylon.time.base::years',m$1.Basic,$init$UnitOfYear$base());
(function(years$){
m$1.atr$(years$,'minimum',function(){return this.$wgb6s9$3ks_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kq$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};});
m$1.atr$(years$,'maximum',function(){return this.$wgb6s9$3kt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kq$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};});
})($3kq$base.$$.prototype);
}
return $3kq$base;
}
ex$.$init$years$base=$init$years$base;
$init$years$base();
var $3ku;
function years$base(){
if($3ku===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'years\' before it was set"),'16:0-26:0','constants.ceylon');
if($3ku===undefined){$3ku=m$1.INIT$;$3ku=$init$years$base()();$3ku.$crtmm$=years$base.$crtmm$;}
return $3ku;
}
ex$.years$base=years$base;
years$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$years$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years')];},d:['ceylon.time.base','years']};};
$prop$getYears$base=years$base;
ex$.$prop$getYears$base=$prop$getYears$base;
function $3kv$base(){
var months$=new $3kv$base.$$;UnitOfMonth$base(months$);
months$.$wgb6s9$3kx_=m$1.tpl$([january$base(),february$base(),march$base(),april$base(),may$base(),june$base(),july$base(),august$base(),september$base(),october$base(),november$base(),december$base()]);
months$.$prop$getAll={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$3kv$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};}};
months$.$prop$getAll.get=function(){return all};
months$.$wgb6s9$3ky_=months$.all.size;
months$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kv$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};}};
months$.$prop$getPerYear.get=function(){return perYear};
return months$;
};$3kv$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfMonth$base}],d:['ceylon.time.base','months']};};
function $init$months$base(){
if($3kv$base.$$===undefined){
m$1.initTypeProto($3kv$base,'ceylon.time.base::months',m$1.Basic,$init$UnitOfMonth$base());
(function(months$){
m$1.atr$(months$,'all',function(){return this.$wgb6s9$3kx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$3kv$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};});
m$1.atr$(months$,'perYear',function(){return this.$wgb6s9$3ky_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3kv$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};});
})($3kv$base.$$.prototype);
}
return $3kv$base;
}
ex$.$init$months$base=$init$months$base;
$init$months$base();
var $3kz;
function months$base(){
if($3kz===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'months\' before it was set"),'28:0-37:0','constants.ceylon');
if($3kz===undefined){$3kz=m$1.INIT$;$3kz=$init$months$base()();$3kz.$crtmm$=months$base.$crtmm$;}
return $3kz;
}
ex$.months$base=months$base;
months$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$months$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months')];},d:['ceylon.time.base','months']};};
$prop$getMonths$base=months$base;
ex$.$prop$getMonths$base=$prop$getMonths$base;
function $3l0$base(){
var days$=new $3l0$base.$$;UnitOfDay$base(days$);
days$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};}};
days$.$prop$getPerYear.get=function(){return perYear};
days$.$prop$getPerLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};}};
days$.$prop$getPerLeapYear.get=function(){return perLeapYear};
days$.$wgb6s9$3l2_=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()]);
days$.$prop$getOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$3l0$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};}};
days$.$prop$getOfWeek.get=function(){return ofWeek};
days$.$wgb6s9$3l3_=days$.ofWeek.size;
days$.$prop$getPerWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};}};
days$.$prop$getPerWeek.get=function(){return perWeek};
days$.$wgb6s9$3l4_=(146097);
days$.$prop$getPerCycle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};}};
days$.$prop$getPerCycle.get=function(){return perCycle};
days$.$prop$getPerFourCenturies={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};}};
days$.$prop$getPerFourCenturies.get=function(){return perFourCenturies};
days$.$wgb6s9$3l5_=(1461);
days$.$prop$getInFourYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};}};
days$.$prop$getInFourYears.get=function(){return inFourYears};
days$.$wgb6s9$3l6_=(36524);
days$.$prop$getPerCentury={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};}};
days$.$prop$getPerCentury.get=function(){return perCentury};
return days$;
};$3l0$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfDay$base}],d:['ceylon.time.base','days']};};
function $init$days$base(){
if($3l0$base.$$===undefined){
m$1.initTypeProto($3l0$base,'ceylon.time.base::days',m$1.Basic,$init$UnitOfDay$base());
(function(days$){
m$1.atr$(days$,'perYear',function(){
return 365
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};});
m$1.atr$(days$,'perLeapYear',function(){
return 366
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};});
days$.perMonth$defs$leapYear=function($3l7,$3l8){return false;};
days$.perMonth=function($3l7,$3l8){var days$=this;
if($3l8===undefined){$3l8=days$.perMonth$defs$leapYear($3l7,$3l8);}
return $3l7.numberOfDays($3l8);};
days$.perMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$3l0$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:perMonth')];},d:['ceylon.time.base','days','$m','perMonth']};};
days$.toMonth$defs$leapYear=function($3l9,$3la){return false;};
days$.toMonth=function($3l9,$3la){var days$=this;
if($3la===undefined){$3la=days$.toMonth$defs$leapYear($3l9,$3la);}
return $3l9.firstDayOfYear($3la).minus(1);};
days$.toMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$3l0$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:toMonth')];},d:['ceylon.time.base','days','$m','toMonth']};};
m$1.atr$(days$,'ofWeek',function(){return this.$wgb6s9$3l2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$3l0$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};});
m$1.atr$(days$,'perWeek',function(){return this.$wgb6s9$3l3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};});
m$1.atr$(days$,'perCycle',function(){return this.$wgb6s9$3l4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};});
m$1.atr$(days$,'perFourCenturies',function(){
var days$=this;
return days$.perCycle;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};});
m$1.atr$(days$,'inFourYears',function(){return this.$wgb6s9$3l5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};});
m$1.atr$(days$,'perCentury',function(){return this.$wgb6s9$3l6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3l0$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};});
days$.fromMilliseconds$defs$millisecondsIn=function($3lb){return 0;};
days$.fromMilliseconds=function($3lb){var days$=this;
if($3lb===undefined){$3lb=days$.fromMilliseconds$defs$millisecondsIn($3lb);}
return floorDiv$internal$math($3lb,milliseconds$base().perDay);};
days$.fromMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'millisecondsIn',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$3l0$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:fromMilliseconds')];},d:['ceylon.time.base','days','$m','fromMilliseconds']};};
})($3l0$base.$$.prototype);
}
return $3l0$base;
}
ex$.$init$days$base=$init$days$base;
$init$days$base();
var $3lc;
function days$base(){
if($3lc===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'days\' before it was set"),'39:0-74:0','constants.ceylon');
if($3lc===undefined){$3lc=m$1.INIT$;$3lc=$init$days$base()();$3lc.$crtmm$=days$base.$crtmm$;}
return $3lc;
}
ex$.days$base=days$base;
days$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$days$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days')];},d:['ceylon.time.base','days']};};
$prop$getDays$base=days$base;
ex$.$prop$getDays$base=$prop$getDays$base;
function $3ld$base(){
var hours$=new $3ld$base.$$;UnitOfHour$base(hours$);
hours$.$wgb6s9$3lf_=(24);
hours$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ld$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};}};
hours$.$prop$getPerDay.get=function(){return perDay};
return hours$;
};$3ld$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfHour$base}],d:['ceylon.time.base','hours']};};
function $init$hours$base(){
if($3ld$base.$$===undefined){
m$1.initTypeProto($3ld$base,'ceylon.time.base::hours',m$1.Basic,$init$UnitOfHour$base());
(function(hours$){
m$1.atr$(hours$,'perDay',function(){return this.$wgb6s9$3lf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ld$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};});
})($3ld$base.$$.prototype);
}
return $3ld$base;
}
ex$.$init$hours$base=$init$hours$base;
$init$hours$base();
var $3lg;
function hours$base(){
if($3lg===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hours\' before it was set"),'76:0-82:0','constants.ceylon');
if($3lg===undefined){$3lg=m$1.INIT$;$3lg=$init$hours$base()();$3lg.$crtmm$=hours$base.$crtmm$;}
return $3lg;
}
ex$.hours$base=hours$base;
hours$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$hours$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:hours')];},d:['ceylon.time.base','hours']};};
$prop$getHours$base=hours$base;
ex$.$prop$getHours$base=$prop$getHours$base;
function $3lh$base(){
var minutes$=new $3lh$base.$$;UnitOfMinute$base(minutes$);
minutes$.$wgb6s9$3lj_=(60);
minutes$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lh$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};}};
minutes$.$prop$getPerHour.get=function(){return perHour};
minutes$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lh$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};}};
minutes$.$prop$getPerDay.get=function(){return perDay};
return minutes$;
};$3lh$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfMinute$base}],d:['ceylon.time.base','minutes']};};
function $init$minutes$base(){
if($3lh$base.$$===undefined){
m$1.initTypeProto($3lh$base,'ceylon.time.base::minutes',m$1.Basic,$init$UnitOfMinute$base());
(function(minutes$){
m$1.atr$(minutes$,'perHour',function(){return this.$wgb6s9$3lj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lh$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};});
m$1.atr$(minutes$,'perDay',function(){
var minutes$=this;
return hours$base().perDay.times(minutes$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lh$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};});
})($3lh$base.$$.prototype);
}
return $3lh$base;
}
ex$.$init$minutes$base=$init$minutes$base;
$init$minutes$base();
var $3lk;
function minutes$base(){
if($3lk===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'minutes\' before it was set"),'84:0-92:0','constants.ceylon');
if($3lk===undefined){$3lk=m$1.INIT$;$3lk=$init$minutes$base()();$3lk.$crtmm$=minutes$base.$crtmm$;}
return $3lk;
}
ex$.minutes$base=minutes$base;
minutes$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$minutes$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:minutes')];},d:['ceylon.time.base','minutes']};};
$prop$getMinutes$base=minutes$base;
ex$.$prop$getMinutes$base=$prop$getMinutes$base;
function $3ll$base(){
var seconds$=new $3ll$base.$$;UnitOfSecond$base(seconds$);
seconds$.$wgb6s9$3ln_=(60);
seconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};}};
seconds$.$prop$getPerMinute.get=function(){return perMinute};
seconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};}};
seconds$.$prop$getPerHour.get=function(){return perHour};
seconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};}};
seconds$.$prop$getPerDay.get=function(){return perDay};
return seconds$;
};$3ll$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfSecond$base}],d:['ceylon.time.base','seconds']};};
function $init$seconds$base(){
if($3ll$base.$$===undefined){
m$1.initTypeProto($3ll$base,'ceylon.time.base::seconds',m$1.Basic,$init$UnitOfSecond$base());
(function(seconds$){
m$1.atr$(seconds$,'perMinute',function(){return this.$wgb6s9$3ln_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};});
m$1.atr$(seconds$,'perHour',function(){
var seconds$=this;
return minutes$base().perHour.times(seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};});
m$1.atr$(seconds$,'perDay',function(){
var seconds$=this;
return hours$base().perDay.times(seconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3ll$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};});
})($3ll$base.$$.prototype);
}
return $3ll$base;
}
ex$.$init$seconds$base=$init$seconds$base;
$init$seconds$base();
var $3lo;
function seconds$base(){
if($3lo===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'seconds\' before it was set"),'94:0-105:0','constants.ceylon');
if($3lo===undefined){$3lo=m$1.INIT$;$3lo=$init$seconds$base()();$3lo.$crtmm$=seconds$base.$crtmm$;}
return $3lo;
}
ex$.seconds$base=seconds$base;
seconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$seconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:seconds')];},d:['ceylon.time.base','seconds']};};
$prop$getSeconds$base=seconds$base;
ex$.$prop$getSeconds$base=$prop$getSeconds$base;
function $3lp$base(){
var milliseconds$=new $3lp$base.$$;UnitOfMillisecond$base(milliseconds$);
milliseconds$.$wgb6s9$3lr_=(1000);
milliseconds$.$prop$getPerSecond={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};}};
milliseconds$.$prop$getPerSecond.get=function(){return perSecond};
milliseconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};}};
milliseconds$.$prop$getPerMinute.get=function(){return perMinute};
milliseconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};}};
milliseconds$.$prop$getPerHour.get=function(){return perHour};
milliseconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};}};
milliseconds$.$prop$getPerDay.get=function(){return perDay};
return milliseconds$;
};$3lp$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:UnitOfMillisecond$base}],d:['ceylon.time.base','milliseconds']};};
function $init$milliseconds$base(){
if($3lp$base.$$===undefined){
m$1.initTypeProto($3lp$base,'ceylon.time.base::milliseconds',m$1.Basic,$init$UnitOfMillisecond$base());
(function(milliseconds$){
m$1.atr$(milliseconds$,'perSecond',function(){return this.$wgb6s9$3lr_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};});
m$1.atr$(milliseconds$,'perMinute',function(){
var milliseconds$=this;
return seconds$base().perMinute.times(milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};});
m$1.atr$(milliseconds$,'perHour',function(){
var milliseconds$=this;
return minutes$base().perHour.times(milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};});
m$1.atr$(milliseconds$,'perDay',function(){
var milliseconds$=this;
return hours$base().perDay.times(milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3lp$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};});
})($3lp$base.$$.prototype);
}
return $3lp$base;
}
ex$.$init$milliseconds$base=$init$milliseconds$base;
$init$milliseconds$base();
var $3ls;
function milliseconds$base(){
if($3ls===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'milliseconds\' before it was set"),'107:0-122:0','constants.ceylon');
if($3ls===undefined){$3ls=m$1.INIT$;$3ls=$init$milliseconds$base()();$3ls.$crtmm$=milliseconds$base.$crtmm$;}
return $3ls;
}
ex$.milliseconds$base=milliseconds$base;
milliseconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$milliseconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:milliseconds')];},d:['ceylon.time.base','milliseconds']};};
$prop$getMilliseconds$base=milliseconds$base;
ex$.$prop$getMilliseconds$base=$prop$getMilliseconds$base;
function DateBehavior$base($$targs$$,dateBehavior$){
m$1.set_type_args(dateBehavior$,$$targs$$,DateBehavior$base);
}
DateBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateBehavior:{sts:[{t:ReadableDate$base}]}},of:['Element$DateBehavior'],pa:1,an:function(){return[m$1.doc("Common behavior for date types.")];},d:['ceylon.time.base','DateBehavior']};};
ex$.DateBehavior$base=DateBehavior$base;
function $init$DateBehavior$base(){
if(DateBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateBehavior$base,'ceylon.time.base::DateBehavior');
(function(dateBehavior$){
dateBehavior$.withYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withYear')];},d:['ceylon.time.base','DateBehavior','$m','withYear']};}};dateBehavior$.withMonth={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withMonth')];},d:['ceylon.time.base','DateBehavior','$m','withMonth']};}};dateBehavior$.withDay={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDay')];},d:['ceylon.time.base','DateBehavior','$m','withDay']};}};dateBehavior$.withWeekOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withWeekOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withWeekOfYear']};}};dateBehavior$.withDayOfWeek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfWeek')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfWeek']};}};dateBehavior$.withDayOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfYear']};}};dateBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusYears')];},d:['ceylon.time.base','DateBehavior','$m','plusYears']};}};dateBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusMonths')];},d:['ceylon.time.base','DateBehavior','$m','plusMonths']};}};dateBehavior$.plusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','plusWeeks']};}};dateBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusDays')];},d:['ceylon.time.base','DateBehavior','$m','plusDays']};}};dateBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusYears')];},d:['ceylon.time.base','DateBehavior','$m','minusYears']};}};dateBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusMonths')];},d:['ceylon.time.base','DateBehavior','$m','minusMonths']};}};dateBehavior$.minusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','minusWeeks']};}};dateBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusDays')];},d:['ceylon.time.base','DateBehavior','$m','minusDays']};}};
})(DateBehavior$base.$$.prototype);
}
return DateBehavior$base;
}
ex$.$init$DateBehavior$base=$init$DateBehavior$base;
$init$DateBehavior$base();
function DateTimeBehavior$base($$targs$$,dateTimeBehavior$){
m$1.set_type_args(dateTimeBehavior$,$$targs$$,DateTimeBehavior$base);
DateBehavior$base({Element$DateBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
TimeBehavior$base({Element$TimeBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
}
DateTimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateTimeBehavior:{sts:[{t:ReadableDateTime$base}]},DateType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableDate$base}]},TimeType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableTime$base}]}},sts:[{t:DateBehavior$base,a:{Element$DateBehavior:'Element$DateTimeBehavior'}},{t:TimeBehavior$base,a:{Element$TimeBehavior:'Element$DateTimeBehavior'}}],of:['Element$DateTimeBehavior'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDateTime$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDate$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableTime$base)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.base','DateTimeBehavior']};};
ex$.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
if(DateTimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
(function(dateTimeBehavior$){
dateTimeBehavior$.$prop$getTime={$crtmm$:function(){return{mod:$CCMM$,$t:'TimeType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:time')];},d:['ceylon.time.base','DateTimeBehavior','$at','time']};}};
dateTimeBehavior$.$prop$getDate={$crtmm$:function(){return{mod:$CCMM$,$t:'DateType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:date')];},d:['ceylon.time.base','DateTimeBehavior','$at','date']};}};
})(DateTimeBehavior$base.$$.prototype);
}
return DateTimeBehavior$base;
}
ex$.$init$DateTimeBehavior$base=$init$DateTimeBehavior$base;
$init$DateTimeBehavior$base();
function DayOfWeek$base(integer,dayOfWeek$){
$init$DayOfWeek$base();
if(dayOfWeek$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::DayOfWeek"),'?','?')
dayOfWeek$.$$targs$$={Other$Ordinal:{t:DayOfWeek$base}};
dayOfWeek$.$$targs$$={Other$Comparable:{t:DayOfWeek$base}};
dayOfWeek$.$$targs$$={Other$Enumerable:{t:DayOfWeek$base}};
dayOfWeek$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Comparable({Other$Comparable:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Enumerable({Other$Enumerable:{t:DayOfWeek$base}},dayOfWeek$);
return dayOfWeek$;
}
DayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:DayOfWeek$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DayOfWeek$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DayOfWeek$base}}}],of:[$prop$getMonday$base,$prop$getTuesday$base,$prop$getWednesday$base,$prop$getThursday$base,$prop$getFriday$base,$prop$getSaturday$base,$prop$getSunday$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek')];},d:['ceylon.time.base','DayOfWeek']};};
ex$.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
if(DayOfWeek$base.$$===undefined){
m$1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(dayOfWeek$){
m$1.atr$(dayOfWeek$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];},d:['ceylon.time.base','DayOfWeek','$at','integer']};});
dayOfWeek$.plusDays=function($3lt){
var dayOfWeek$=this;
if(($3lu=$3lt,$3lu.compare((-7))===m$1.larger()&&$3lu.compare((7))===m$1.smaller())){
var $3lv=(7).plus(dayOfWeek$.integer).plus($3lt).remainder(7);
var $3lw;
m$1.asrt$((m$1.nn$(($3lw=weekdays$base().$_get($3lv)))),"Assertion failed: \'exists dow = weekdays[wd]\' at DayOfWeek.ceylon (32:19-32:45)",'32:12-32:46','DayOfWeek.ceylon');
return $3lw;
}
else{
return dayOfWeek$.plusDays($3lt.remainder(7));
}
};dayOfWeek$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:plusDays')];},d:['ceylon.time.base','DayOfWeek','$m','plusDays']};};
dayOfWeek$.minusDays=function($3lx){var dayOfWeek$=this;
return dayOfWeek$.plusDays((-$3lx));};
dayOfWeek$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:minusDays')];},d:['ceylon.time.base','DayOfWeek','$m','minusDays']};};
dayOfWeek$.compare=function($3ly){var dayOfWeek$=this;
return dayOfWeek$.integer.compare($3ly.integer);};
dayOfWeek$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc("Compare days of week.")];},d:['ceylon.time.base','DayOfWeek','$m','compare']};};
dayOfWeek$.offset=function($3lz){var dayOfWeek$=this;
return function(){var $3m0=dayOfWeek$.integer.minus($3lz.integer);return (($3m0<0))?$3m0.plus(7):$3m0;}();};
dayOfWeek$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:offset')];},d:['ceylon.time.base','DayOfWeek','$m','offset']};};
dayOfWeek$.neighbour=function($3m1){var dayOfWeek$=this;
return dayOfWeek$.plusDays($3m1);};
dayOfWeek$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:neighbour')];},d:['ceylon.time.base','DayOfWeek','$m','neighbour']};};
})(DayOfWeek$base.$$.prototype);
}
return DayOfWeek$base;
}
ex$.$init$DayOfWeek$base=$init$DayOfWeek$base;
$init$DayOfWeek$base();
var $3m2$base;function $valinit$$3m2$base(){if($3m2$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'weekdays\' before it was set"),'69:0-70:96','DayOfWeek.ceylon');
if($3m2$base===undefined){$3m2$base=m$1.INIT$;$3m2$base=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()])};return $3m2$base;};
function weekdays$base(){return $valinit$$3m2$base();}
ex$.weekdays$base=weekdays$base;
var $prop$getWeekdays$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:weekdays')];},d:['ceylon.time.base','weekdays']};}};
ex$.$prop$getWeekdays$base=$prop$getWeekdays$base;
$prop$getWeekdays$base.get=weekdays$base;
weekdays$base.$crtmm$=$prop$getWeekdays$base.$crtmm$;
function dayOfWeek$base($3m3){
var $3m4=$3m3;
if(m$1.is$($3m4,{t:DayOfWeek$base})) {
return $3m4;
}
else if(m$1.is$($3m4,{t:m$1.Integer})) {
m$1.asrt$((($3m5=$3m4,$3m5.compare((0))!==m$1.smaller()&&$3m5.compare((7))===m$1.smaller())),"Assertion failed: \'0 <= dayOfWeek < 7\' at DayOfWeek.ceylon (77:15-77:34)",'77:8-77:35','DayOfWeek.ceylon');
var $3m6;
m$1.asrt$((m$1.nn$(($3m6=weekdays$base().$_get($3m4)))),"Assertion failed: \'exists DayOfWeek dow = weekdays[dayOfWeek]\' at DayOfWeek.ceylon (78:15-78:58)",'78:8-78:59','DayOfWeek.ceylon');
return $3m6;
}
}
ex$.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:DayOfWeek$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:dayOfWeek')];},d:['ceylon.time.base','dayOfWeek']};};
function parseDayOfWeek$base($3m7){
var $3m8=$3m7.lowercased;
var $3ma;for(var $3m9=weekdays$base().iterator();($3ma=$3m9.next())!==m$1.finished();){
if($3ma.string.lowercased.equals($3m8)){
return $3ma;
}
}
return null;
}
ex$.parseDayOfWeek$base=parseDayOfWeek$base;
parseDayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:parseDayOfWeek')];},d:['ceylon.time.base','parseDayOfWeek']};};
function $3mb$base(){
var sunday$=new $3mb$base.$$;DayOfWeek$base(0,sunday$);
sunday$.$wgb6s9$3md_="sunday";
sunday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};}};
sunday$.$prop$getString.get=function(){return string};
sunday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};}};
sunday$.$prop$getPredecessor.get=function(){return predecessor};
sunday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};}};
sunday$.$prop$getSuccessor.get=function(){return successor};
return sunday$;
};$3mb$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','sunday']};};
function $init$sunday$base(){
if($3mb$base.$$===undefined){
m$1.initTypeProto($3mb$base,'ceylon.time.base::sunday',$init$DayOfWeek$base());
(function(sunday$){
m$1.atr$(sunday$,'string',function(){return this.$wgb6s9$3md_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};});
m$1.atr$(sunday$,'predecessor',function(){
var sunday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};});
m$1.atr$(sunday$,'successor',function(){
var sunday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mb$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};});
})($3mb$base.$$.prototype);
}
return $3mb$base;
}
ex$.$init$sunday$base=$init$sunday$base;
$init$sunday$base();
var $3me;
function sunday$base(){
if($3me===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'sunday\' before it was set"),'104:0-109:0','DayOfWeek.ceylon');
if($3me===undefined){$3me=m$1.INIT$;$3me=$init$sunday$base()();$3me.$crtmm$=sunday$base.$crtmm$;}
return $3me;
}
ex$.sunday$base=sunday$base;
sunday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$sunday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:sunday')];},d:['ceylon.time.base','sunday']};};
$prop$getSunday$base=sunday$base;
ex$.$prop$getSunday$base=$prop$getSunday$base;
function $3mf$base(){
var monday$=new $3mf$base.$$;DayOfWeek$base(1,monday$);
monday$.$wgb6s9$3mh_="monday";
monday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','string']};}};
monday$.$prop$getString.get=function(){return string};
monday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};}};
monday$.$prop$getPredecessor.get=function(){return predecessor};
monday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};}};
monday$.$prop$getSuccessor.get=function(){return successor};
return monday$;
};$3mf$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','monday']};};
function $init$monday$base(){
if($3mf$base.$$===undefined){
m$1.initTypeProto($3mf$base,'ceylon.time.base::monday',$init$DayOfWeek$base());
(function(monday$){
m$1.atr$(monday$,'string',function(){return this.$wgb6s9$3mh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','string']};});
m$1.atr$(monday$,'predecessor',function(){
var monday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};});
m$1.atr$(monday$,'successor',function(){
var monday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mf$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};});
})($3mf$base.$$.prototype);
}
return $3mf$base;
}
ex$.$init$monday$base=$init$monday$base;
$init$monday$base();
var $3mi;
function monday$base(){
if($3mi===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'monday\' before it was set"),'111:0-116:0','DayOfWeek.ceylon');
if($3mi===undefined){$3mi=m$1.INIT$;$3mi=$init$monday$base()();$3mi.$crtmm$=monday$base.$crtmm$;}
return $3mi;
}
ex$.monday$base=monday$base;
monday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$monday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monday')];},d:['ceylon.time.base','monday']};};
$prop$getMonday$base=monday$base;
ex$.$prop$getMonday$base=$prop$getMonday$base;
function $3mj$base(){
var tuesday$=new $3mj$base.$$;DayOfWeek$base(2,tuesday$);
tuesday$.$wgb6s9$3ml_="tuesday";
tuesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};}};
tuesday$.$prop$getString.get=function(){return string};
tuesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};}};
tuesday$.$prop$getPredecessor.get=function(){return predecessor};
tuesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};}};
tuesday$.$prop$getSuccessor.get=function(){return successor};
return tuesday$;
};$3mj$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','tuesday']};};
function $init$tuesday$base(){
if($3mj$base.$$===undefined){
m$1.initTypeProto($3mj$base,'ceylon.time.base::tuesday',$init$DayOfWeek$base());
(function(tuesday$){
m$1.atr$(tuesday$,'string',function(){return this.$wgb6s9$3ml_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};});
m$1.atr$(tuesday$,'predecessor',function(){
var tuesday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};});
m$1.atr$(tuesday$,'successor',function(){
var tuesday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mj$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};});
})($3mj$base.$$.prototype);
}
return $3mj$base;
}
ex$.$init$tuesday$base=$init$tuesday$base;
$init$tuesday$base();
var $3mm;
function tuesday$base(){
if($3mm===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tuesday\' before it was set"),'118:0-123:0','DayOfWeek.ceylon');
if($3mm===undefined){$3mm=m$1.INIT$;$3mm=$init$tuesday$base()();$3mm.$crtmm$=tuesday$base.$crtmm$;}
return $3mm;
}
ex$.tuesday$base=tuesday$base;
tuesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$tuesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:tuesday')];},d:['ceylon.time.base','tuesday']};};
$prop$getTuesday$base=tuesday$base;
ex$.$prop$getTuesday$base=$prop$getTuesday$base;
function $3mn$base(){
var wednesday$=new $3mn$base.$$;DayOfWeek$base(3,wednesday$);
wednesday$.$wgb6s9$3mp_="wednesday";
wednesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};}};
wednesday$.$prop$getString.get=function(){return string};
wednesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};}};
wednesday$.$prop$getPredecessor.get=function(){return predecessor};
wednesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};}};
wednesday$.$prop$getSuccessor.get=function(){return successor};
return wednesday$;
};$3mn$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','wednesday']};};
function $init$wednesday$base(){
if($3mn$base.$$===undefined){
m$1.initTypeProto($3mn$base,'ceylon.time.base::wednesday',$init$DayOfWeek$base());
(function(wednesday$){
m$1.atr$(wednesday$,'string',function(){return this.$wgb6s9$3mp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};});
m$1.atr$(wednesday$,'predecessor',function(){
var wednesday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};});
m$1.atr$(wednesday$,'successor',function(){
var wednesday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mn$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};});
})($3mn$base.$$.prototype);
}
return $3mn$base;
}
ex$.$init$wednesday$base=$init$wednesday$base;
$init$wednesday$base();
var $3mq;
function wednesday$base(){
if($3mq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'wednesday\' before it was set"),'125:0-130:0','DayOfWeek.ceylon');
if($3mq===undefined){$3mq=m$1.INIT$;$3mq=$init$wednesday$base()();$3mq.$crtmm$=wednesday$base.$crtmm$;}
return $3mq;
}
ex$.wednesday$base=wednesday$base;
wednesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$wednesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:wednesday')];},d:['ceylon.time.base','wednesday']};};
$prop$getWednesday$base=wednesday$base;
ex$.$prop$getWednesday$base=$prop$getWednesday$base;
function $3mr$base(){
var thursday$=new $3mr$base.$$;DayOfWeek$base(4,thursday$);
thursday$.$wgb6s9$3mt_="thursday";
thursday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};}};
thursday$.$prop$getString.get=function(){return string};
thursday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};}};
thursday$.$prop$getPredecessor.get=function(){return predecessor};
thursday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};}};
thursday$.$prop$getSuccessor.get=function(){return successor};
return thursday$;
};$3mr$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','thursday']};};
function $init$thursday$base(){
if($3mr$base.$$===undefined){
m$1.initTypeProto($3mr$base,'ceylon.time.base::thursday',$init$DayOfWeek$base());
(function(thursday$){
m$1.atr$(thursday$,'string',function(){return this.$wgb6s9$3mt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};});
m$1.atr$(thursday$,'predecessor',function(){
var thursday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};});
m$1.atr$(thursday$,'successor',function(){
var thursday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mr$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};});
})($3mr$base.$$.prototype);
}
return $3mr$base;
}
ex$.$init$thursday$base=$init$thursday$base;
$init$thursday$base();
var $3mu;
function thursday$base(){
if($3mu===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'thursday\' before it was set"),'132:0-137:0','DayOfWeek.ceylon');
if($3mu===undefined){$3mu=m$1.INIT$;$3mu=$init$thursday$base()();$3mu.$crtmm$=thursday$base.$crtmm$;}
return $3mu;
}
ex$.thursday$base=thursday$base;
thursday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$thursday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:thursday')];},d:['ceylon.time.base','thursday']};};
$prop$getThursday$base=thursday$base;
ex$.$prop$getThursday$base=$prop$getThursday$base;
function $3mv$base(){
var friday$=new $3mv$base.$$;DayOfWeek$base(5,friday$);
friday$.$wgb6s9$3mx_="friday";
friday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','string']};}};
friday$.$prop$getString.get=function(){return string};
friday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};}};
friday$.$prop$getPredecessor.get=function(){return predecessor};
friday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};}};
friday$.$prop$getSuccessor.get=function(){return successor};
return friday$;
};$3mv$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','friday']};};
function $init$friday$base(){
if($3mv$base.$$===undefined){
m$1.initTypeProto($3mv$base,'ceylon.time.base::friday',$init$DayOfWeek$base());
(function(friday$){
m$1.atr$(friday$,'string',function(){return this.$wgb6s9$3mx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','string']};});
m$1.atr$(friday$,'predecessor',function(){
var friday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};});
m$1.atr$(friday$,'successor',function(){
var friday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mv$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};});
})($3mv$base.$$.prototype);
}
return $3mv$base;
}
ex$.$init$friday$base=$init$friday$base;
$init$friday$base();
var $3my;
function friday$base(){
if($3my===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'friday\' before it was set"),'139:0-144:0','DayOfWeek.ceylon');
if($3my===undefined){$3my=m$1.INIT$;$3my=$init$friday$base()();$3my.$crtmm$=friday$base.$crtmm$;}
return $3my;
}
ex$.friday$base=friday$base;
friday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$friday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:friday')];},d:['ceylon.time.base','friday']};};
$prop$getFriday$base=friday$base;
ex$.$prop$getFriday$base=$prop$getFriday$base;
function $3mz$base(){
var saturday$=new $3mz$base.$$;DayOfWeek$base(6,saturday$);
saturday$.$wgb6s9$3n1_="saturday";
saturday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};}};
saturday$.$prop$getString.get=function(){return string};
saturday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};}};
saturday$.$prop$getPredecessor.get=function(){return predecessor};
saturday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};}};
saturday$.$prop$getSuccessor.get=function(){return successor};
return saturday$;
};$3mz$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','saturday']};};
function $init$saturday$base(){
if($3mz$base.$$===undefined){
m$1.initTypeProto($3mz$base,'ceylon.time.base::saturday',$init$DayOfWeek$base());
(function(saturday$){
m$1.atr$(saturday$,'string',function(){return this.$wgb6s9$3n1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};});
m$1.atr$(saturday$,'predecessor',function(){
var saturday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};});
m$1.atr$(saturday$,'successor',function(){
var saturday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$3mz$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};});
})($3mz$base.$$.prototype);
}
return $3mz$base;
}
ex$.$init$saturday$base=$init$saturday$base;
$init$saturday$base();
var $3n2;
function saturday$base(){
if($3n2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'saturday\' before it was set"),'146:0-151:0','DayOfWeek.ceylon');
if($3n2===undefined){$3n2=m$1.INIT$;$3n2=$init$saturday$base()();$3n2.$crtmm$=saturday$base.$crtmm$;}
return $3n2;
}
ex$.saturday$base=saturday$base;
saturday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$saturday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:saturday')];},d:['ceylon.time.base','saturday']};};
$prop$getSaturday$base=saturday$base;
ex$.$prop$getSaturday$base=$prop$getSaturday$base;
function Month$base(integer,month$){
$init$Month$base();
if(month$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::Month"),'?','?')
month$.$$targs$$={Other$Ordinal:{t:Month$base}};
month$.$$targs$$={Other$Comparable:{t:Month$base}};
month$.$$targs$$={Other$Enumerable:{t:Month$base}};
month$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:Month$base}},month$);
m$1.Comparable({Other$Comparable:{t:Month$base}},month$);
m$1.Enumerable({Other$Enumerable:{t:Month$base}},month$);
return month$;
}
Month$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:Month$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Month$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Month$base}}}],of:[$prop$getJanuary$base,$prop$getFebruary$base,$prop$getMarch$base,$prop$getApril$base,$prop$getMay$base,$prop$getJune$base,$prop$getJuly$base,$prop$getAugust$base,$prop$getSeptember$base,$prop$getOctober$base,$prop$getNovember$base,$prop$getDecember$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month')];},d:['ceylon.time.base','Month']};};
ex$.Month$base=Month$base;
function $init$Month$base(){
if(Month$base.$$===undefined){
m$1.initTypeProto(Month$base,'ceylon.time.base::Month',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(month$){
m$1.atr$(month$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];},d:['ceylon.time.base','Month','$at','integer']};});
month$.numberOfDays$defs$leapYear=function($3n3){return false;};
month$.numberOfDays=function($3n3){
var month$=this;
if($3n3===undefined){$3n3=month$.numberOfDays$defs$leapYear($3n3);}
var $3n4=month$;
if($3n4===february$base()) {
return ($3n5=($3n3?29:null),m$1.nn$($3n5)?$3n5:(28));
var $3n5;
}
else if($3n4===april$base() || $3n4===june$base() || $3n4===september$base() || $3n4===november$base()) {
return 30;
}
else if($3n4===january$base() || $3n4===march$base() || $3n4===may$base() || $3n4===july$base() || $3n4===august$base() || $3n4===october$base() || $3n4===december$base()) {
return 31;
}
};month$.numberOfDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc("Returns number of days in this month.")];},d:['ceylon.time.base','Month','$m','numberOfDays']};};
month$.firstDayOfYear$defs$leapYear=function($3n6){return false;};
month$.firstDayOfYear=function($3n6){
var month$=this;
if($3n6===undefined){$3n6=month$.firstDayOfYear$defs$leapYear($3n6);}
var $3n7;
m$1.asrt$((m$1.nn$(($3n7=firstDayOfMonth$base().$_get(month$.integer.minus(1))))),"Assertion failed: \'exists day = firstDayOfMonth[this.integer-1]\' at Month.ceylon (28:14-28:59)",'28:8-28:60','Month.ceylon');
if(($3n6&&month$.compare(february$base()).equals(m$1.larger()))){
return $3n7.plus(1);
}
return $3n7;
};month$.firstDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:firstDayOfYear')];},d:['ceylon.time.base','Month','$m','firstDayOfYear']};};
month$.compare=function($3n8){var month$=this;
return month$.integer.compare($3n8.integer);};
month$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:compare')];},d:['ceylon.time.base','Month','$m','compare']};};
month$.plusMonths=function($3n9){var month$=this;
return ($3na=((($3n9).valueOf()==(0).valueOf())?month$:null),m$1.nn$($3na)?$3na:month$.add($3n9).month);};
month$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:plusMonths')];},d:['ceylon.time.base','Month','$m','plusMonths']};};
month$.minusMonths=function($3nb){var month$=this;
return ($3nc=((($3nb).valueOf()==(0).valueOf())?month$:null),m$1.nn$($3nc)?$3nc:month$.add((-$3nb)).month);};
month$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:minusMonths')];},d:['ceylon.time.base','Month','$m','minusMonths']};};
month$.add=function($3nd){
var month$=this;
var $3ne=month$.integer.minus(1).plus($3nd);
var $3nf=floorMod$internal$math($3ne,months$base().perYear);
var $3ng;
m$1.asrt$((m$1.nn$(($3ng=months$base().all.$_get($3nf)))),"Assertion failed: \'exists month = months.all[nextMonth]\' at Month.ceylon (61:15-61:52)",'61:8-61:53','Month.ceylon');
var $3nh=floorDiv$internal$math($3ne,12);
return month$.Overflow$Month($3ng,$3nh);
};month$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:month$.Overflow$Month},ps:[{nm:'numberOfMonths',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:add')];},d:['ceylon.time.base','Month','$m','add']};};
month$.offset=function($3ni){var month$=this;
return function(){var $3nj=month$.integer.minus($3ni.integer);return (($3nj<0))?$3nj.plus(months$base().all.size):$3nj;}();};
month$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:offset')];},d:['ceylon.time.base','Month','$m','offset']};};
month$.neighbour=function($3nk){var month$=this;
return month$.add($3nk).month;};
month$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:neighbour')];},d:['ceylon.time.base','Month','$m','neighbour']};};
function Overflow$Month(month,years,overflow$Month$){
$init$Overflow$Month();
if(overflow$Month$===undefined)overflow$Month$=new this.Overflow$Month.$$;
overflow$Month$.outer$=this;
overflow$Month$.month_=month;
overflow$Month$.years_=years;
return overflow$Month$;
}
Overflow$Month.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'month',mt:'prm',$t:{t:Month$base},pa:1,an:function(){return[m$1.doc("New month value.")];}},{nm:'years',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$c:Overflow')];},d:['ceylon.time.base','Month','$c','Overflow']};};
function $init$Overflow$Month(){
if(Overflow$Month.$$===undefined){
m$1.initTypeProto(Overflow$Month,'ceylon.time.base::Month.Overflow',m$1.Basic);
Month$base.Overflow$Month=Overflow$Month;
(function(overflow$Month$){
m$1.atr$(overflow$Month$,'month',function(){return this.month_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("New month value.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};});
m$1.atr$(overflow$Month$,'years',function(){return this.years_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};});
})(Overflow$Month.$$.prototype);
}
return Overflow$Month;
}
month$.$init$Overflow$Month=$init$Overflow$Month;
month$.Overflow$Month=Overflow$Month;
$init$Overflow$Month();
})(Month$base.$$.prototype);
}
return Month$base;
}
ex$.$init$Month$base=$init$Month$base;
$init$Month$base();
var $3na,$3nc;
var $3nl$base;function $valinit$$3nl$base(){if($3nl$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'firstDayOfMonth\' before it was set"),'90:0-91:83','Month.ceylon');
if($3nl$base===undefined){$3nl$base=m$1.INIT$;$3nl$base=m$1.tpl$([1,32,60,91,121,152,182,213,244,274,305,335])};return $3nl$base;};
function firstDayOfMonth$base(){return $valinit$$3nl$base();}
var $prop$getFirstDayOfMonth$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Integer}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:firstDayOfMonth')];},d:['ceylon.time.base','firstDayOfMonth']};}};
ex$.$prop$getFirstDayOfMonth$base=$prop$getFirstDayOfMonth$base;
$prop$getFirstDayOfMonth$base.get=firstDayOfMonth$base;
function monthOf$base($3nm){
var $3nn=$3nm;
if(m$1.is$($3nn,{t:Month$base})) {
return $3nn;
}
else if(m$1.is$($3nn,{t:m$1.Integer})) {
m$1.asrt$((($3no=$3nn,$3no.compare(january$base().integer)!==m$1.smaller()&&$3no.compare(december$base().integer)!==m$1.larger())),"Invalid month.: \' january.integer <= month <= december.integer \' at Month.ceylon (105:15-105:62)",'104:8-105:63','Month.ceylon');
var $3np;
m$1.asrt$((m$1.nn$(($3np=months$base().all.$_get($3nn.minus(1))))),"Assertion failed: \' exists m = months.all[month-1] \' at Month.ceylon (106:15-106:48)",'106:8-106:49','Month.ceylon');
return $3np;
}
}
ex$.monthOf$base=monthOf$base;
monthOf$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monthOf')];},d:['ceylon.time.base','monthOf']};};
function $3nq$base(){
var january$=new $3nq$base.$$;Month$base(gregorian$chronology().january,january$);
january$.$wgb6s9$3ns_="january";
january$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','string']};}};
january$.$prop$getString.get=function(){return string};
january$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};}};
january$.$prop$getPredecessor.get=function(){return predecessor};
january$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','successor']};}};
january$.$prop$getSuccessor.get=function(){return successor};
return january$;
};$3nq$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','january']};};
function $init$january$base(){
if($3nq$base.$$===undefined){
m$1.initTypeProto($3nq$base,'ceylon.time.base::january',$init$Month$base());
(function(january$){
m$1.atr$(january$,'string',function(){return this.$wgb6s9$3ns_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','string']};});
m$1.atr$(january$,'predecessor',function(){
var january$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};});
m$1.atr$(january$,'successor',function(){
var january$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nq$base,pa:3,d:['ceylon.time.base','january','$at','successor']};});
})($3nq$base.$$.prototype);
}
return $3nq$base;
}
ex$.$init$january$base=$init$january$base;
$init$january$base();
var $3nt;
function january$base(){
if($3nt===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'january\' before it was set"),'111:0-116:0','Month.ceylon');
if($3nt===undefined){$3nt=m$1.INIT$;$3nt=$init$january$base()();$3nt.$crtmm$=january$base.$crtmm$;}
return $3nt;
}
ex$.january$base=january$base;
january$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$january$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:january')];},d:['ceylon.time.base','january']};};
$prop$getJanuary$base=january$base;
ex$.$prop$getJanuary$base=$prop$getJanuary$base;
function $3nu$base(){
var february$=new $3nu$base.$$;Month$base(gregorian$chronology().february,february$);
february$.$wgb6s9$3nw_="february";
february$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','string']};}};
february$.$prop$getString.get=function(){return string};
february$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};}};
february$.$prop$getPredecessor.get=function(){return predecessor};
february$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','successor']};}};
february$.$prop$getSuccessor.get=function(){return successor};
return february$;
};$3nu$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','february']};};
function $init$february$base(){
if($3nu$base.$$===undefined){
m$1.initTypeProto($3nu$base,'ceylon.time.base::february',$init$Month$base());
(function(february$){
m$1.atr$(february$,'string',function(){return this.$wgb6s9$3nw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','string']};});
m$1.atr$(february$,'predecessor',function(){
var february$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};});
m$1.atr$(february$,'successor',function(){
var february$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3nu$base,pa:3,d:['ceylon.time.base','february','$at','successor']};});
})($3nu$base.$$.prototype);
}
return $3nu$base;
}
ex$.$init$february$base=$init$february$base;
$init$february$base();
var $3nx;
function february$base(){
if($3nx===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'february\' before it was set"),'118:0-123:0','Month.ceylon');
if($3nx===undefined){$3nx=m$1.INIT$;$3nx=$init$february$base()();$3nx.$crtmm$=february$base.$crtmm$;}
return $3nx;
}
ex$.february$base=february$base;
february$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$february$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:february')];},d:['ceylon.time.base','february']};};
$prop$getFebruary$base=february$base;
ex$.$prop$getFebruary$base=$prop$getFebruary$base;
function $3ny$base(){
var march$=new $3ny$base.$$;Month$base(gregorian$chronology().march,march$);
march$.$wgb6s9$3o0_="march";
march$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','string']};}};
march$.$prop$getString.get=function(){return string};
march$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};}};
march$.$prop$getPredecessor.get=function(){return predecessor};
march$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','successor']};}};
march$.$prop$getSuccessor.get=function(){return successor};
return march$;
};$3ny$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','march']};};
function $init$march$base(){
if($3ny$base.$$===undefined){
m$1.initTypeProto($3ny$base,'ceylon.time.base::march',$init$Month$base());
(function(march$){
m$1.atr$(march$,'string',function(){return this.$wgb6s9$3o0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','string']};});
m$1.atr$(march$,'predecessor',function(){
var march$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};});
m$1.atr$(march$,'successor',function(){
var march$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ny$base,pa:3,d:['ceylon.time.base','march','$at','successor']};});
})($3ny$base.$$.prototype);
}
return $3ny$base;
}
ex$.$init$march$base=$init$march$base;
$init$march$base();
var $3o1;
function march$base(){
if($3o1===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'march\' before it was set"),'125:0-130:0','Month.ceylon');
if($3o1===undefined){$3o1=m$1.INIT$;$3o1=$init$march$base()();$3o1.$crtmm$=march$base.$crtmm$;}
return $3o1;
}
ex$.march$base=march$base;
march$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$march$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:march')];},d:['ceylon.time.base','march']};};
$prop$getMarch$base=march$base;
ex$.$prop$getMarch$base=$prop$getMarch$base;
function $3o2$base(){
var april$=new $3o2$base.$$;Month$base(gregorian$chronology().april,april$);
april$.$wgb6s9$3o4_="april";
april$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','string']};}};
april$.$prop$getString.get=function(){return string};
april$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};}};
april$.$prop$getPredecessor.get=function(){return predecessor};
april$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','successor']};}};
april$.$prop$getSuccessor.get=function(){return successor};
return april$;
};$3o2$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','april']};};
function $init$april$base(){
if($3o2$base.$$===undefined){
m$1.initTypeProto($3o2$base,'ceylon.time.base::april',$init$Month$base());
(function(april$){
m$1.atr$(april$,'string',function(){return this.$wgb6s9$3o4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','string']};});
m$1.atr$(april$,'predecessor',function(){
var april$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};});
m$1.atr$(april$,'successor',function(){
var april$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o2$base,pa:3,d:['ceylon.time.base','april','$at','successor']};});
})($3o2$base.$$.prototype);
}
return $3o2$base;
}
ex$.$init$april$base=$init$april$base;
$init$april$base();
var $3o5;
function april$base(){
if($3o5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'april\' before it was set"),'132:0-137:0','Month.ceylon');
if($3o5===undefined){$3o5=m$1.INIT$;$3o5=$init$april$base()();$3o5.$crtmm$=april$base.$crtmm$;}
return $3o5;
}
ex$.april$base=april$base;
april$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$april$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:april')];},d:['ceylon.time.base','april']};};
$prop$getApril$base=april$base;
ex$.$prop$getApril$base=$prop$getApril$base;
function $3o6$base(){
var may$=new $3o6$base.$$;Month$base(gregorian$chronology().may,may$);
may$.$wgb6s9$3o8_="may";
may$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','string']};}};
may$.$prop$getString.get=function(){return string};
may$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};}};
may$.$prop$getPredecessor.get=function(){return predecessor};
may$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','successor']};}};
may$.$prop$getSuccessor.get=function(){return successor};
return may$;
};$3o6$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','may']};};
function $init$may$base(){
if($3o6$base.$$===undefined){
m$1.initTypeProto($3o6$base,'ceylon.time.base::may',$init$Month$base());
(function(may$){
m$1.atr$(may$,'string',function(){return this.$wgb6s9$3o8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','string']};});
m$1.atr$(may$,'predecessor',function(){
var may$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};});
m$1.atr$(may$,'successor',function(){
var may$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3o6$base,pa:3,d:['ceylon.time.base','may','$at','successor']};});
})($3o6$base.$$.prototype);
}
return $3o6$base;
}
ex$.$init$may$base=$init$may$base;
$init$may$base();
var $3o9;
function may$base(){
if($3o9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'may\' before it was set"),'139:0-144:0','Month.ceylon');
if($3o9===undefined){$3o9=m$1.INIT$;$3o9=$init$may$base()();$3o9.$crtmm$=may$base.$crtmm$;}
return $3o9;
}
ex$.may$base=may$base;
may$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$may$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:may')];},d:['ceylon.time.base','may']};};
$prop$getMay$base=may$base;
ex$.$prop$getMay$base=$prop$getMay$base;
function $3oa$base(){
var june$=new $3oa$base.$$;Month$base(gregorian$chronology().june,june$);
june$.$wgb6s9$3oc_="june";
june$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','string']};}};
june$.$prop$getString.get=function(){return string};
june$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};}};
june$.$prop$getPredecessor.get=function(){return predecessor};
june$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','successor']};}};
june$.$prop$getSuccessor.get=function(){return successor};
return june$;
};$3oa$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','june']};};
function $init$june$base(){
if($3oa$base.$$===undefined){
m$1.initTypeProto($3oa$base,'ceylon.time.base::june',$init$Month$base());
(function(june$){
m$1.atr$(june$,'string',function(){return this.$wgb6s9$3oc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','string']};});
m$1.atr$(june$,'predecessor',function(){
var june$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};});
m$1.atr$(june$,'successor',function(){
var june$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oa$base,pa:3,d:['ceylon.time.base','june','$at','successor']};});
})($3oa$base.$$.prototype);
}
return $3oa$base;
}
ex$.$init$june$base=$init$june$base;
$init$june$base();
var $3od;
function june$base(){
if($3od===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'june\' before it was set"),'146:0-151:0','Month.ceylon');
if($3od===undefined){$3od=m$1.INIT$;$3od=$init$june$base()();$3od.$crtmm$=june$base.$crtmm$;}
return $3od;
}
ex$.june$base=june$base;
june$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$june$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:june')];},d:['ceylon.time.base','june']};};
$prop$getJune$base=june$base;
ex$.$prop$getJune$base=$prop$getJune$base;
function $3oe$base(){
var july$=new $3oe$base.$$;Month$base(gregorian$chronology().july,july$);
july$.$wgb6s9$3og_="july";
july$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','string']};}};
july$.$prop$getString.get=function(){return string};
july$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};}};
july$.$prop$getPredecessor.get=function(){return predecessor};
july$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','successor']};}};
july$.$prop$getSuccessor.get=function(){return successor};
return july$;
};$3oe$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','july']};};
function $init$july$base(){
if($3oe$base.$$===undefined){
m$1.initTypeProto($3oe$base,'ceylon.time.base::july',$init$Month$base());
(function(july$){
m$1.atr$(july$,'string',function(){return this.$wgb6s9$3og_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','string']};});
m$1.atr$(july$,'predecessor',function(){
var july$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};});
m$1.atr$(july$,'successor',function(){
var july$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oe$base,pa:3,d:['ceylon.time.base','july','$at','successor']};});
})($3oe$base.$$.prototype);
}
return $3oe$base;
}
ex$.$init$july$base=$init$july$base;
$init$july$base();
var $3oh;
function july$base(){
if($3oh===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'july\' before it was set"),'153:0-158:0','Month.ceylon');
if($3oh===undefined){$3oh=m$1.INIT$;$3oh=$init$july$base()();$3oh.$crtmm$=july$base.$crtmm$;}
return $3oh;
}
ex$.july$base=july$base;
july$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$july$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:july')];},d:['ceylon.time.base','july']};};
$prop$getJuly$base=july$base;
ex$.$prop$getJuly$base=$prop$getJuly$base;
function $3oi$base(){
var august$=new $3oi$base.$$;Month$base(gregorian$chronology().august,august$);
august$.$wgb6s9$3ok_="august";
august$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','string']};}};
august$.$prop$getString.get=function(){return string};
august$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};}};
august$.$prop$getPredecessor.get=function(){return predecessor};
august$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','successor']};}};
august$.$prop$getSuccessor.get=function(){return successor};
return august$;
};$3oi$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','august']};};
function $init$august$base(){
if($3oi$base.$$===undefined){
m$1.initTypeProto($3oi$base,'ceylon.time.base::august',$init$Month$base());
(function(august$){
m$1.atr$(august$,'string',function(){return this.$wgb6s9$3ok_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','string']};});
m$1.atr$(august$,'predecessor',function(){
var august$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};});
m$1.atr$(august$,'successor',function(){
var august$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oi$base,pa:3,d:['ceylon.time.base','august','$at','successor']};});
})($3oi$base.$$.prototype);
}
return $3oi$base;
}
ex$.$init$august$base=$init$august$base;
$init$august$base();
var $3ol;
function august$base(){
if($3ol===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'august\' before it was set"),'160:0-165:0','Month.ceylon');
if($3ol===undefined){$3ol=m$1.INIT$;$3ol=$init$august$base()();$3ol.$crtmm$=august$base.$crtmm$;}
return $3ol;
}
ex$.august$base=august$base;
august$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$august$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:august')];},d:['ceylon.time.base','august']};};
$prop$getAugust$base=august$base;
ex$.$prop$getAugust$base=$prop$getAugust$base;
function $3om$base(){
var september$=new $3om$base.$$;Month$base(gregorian$chronology().september,september$);
september$.$wgb6s9$3oo_="september";
september$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','string']};}};
september$.$prop$getString.get=function(){return string};
september$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};}};
september$.$prop$getPredecessor.get=function(){return predecessor};
september$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','successor']};}};
september$.$prop$getSuccessor.get=function(){return successor};
return september$;
};$3om$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','september']};};
function $init$september$base(){
if($3om$base.$$===undefined){
m$1.initTypeProto($3om$base,'ceylon.time.base::september',$init$Month$base());
(function(september$){
m$1.atr$(september$,'string',function(){return this.$wgb6s9$3oo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','string']};});
m$1.atr$(september$,'predecessor',function(){
var september$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};});
m$1.atr$(september$,'successor',function(){
var september$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3om$base,pa:3,d:['ceylon.time.base','september','$at','successor']};});
})($3om$base.$$.prototype);
}
return $3om$base;
}
ex$.$init$september$base=$init$september$base;
$init$september$base();
var $3op;
function september$base(){
if($3op===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'september\' before it was set"),'167:0-172:0','Month.ceylon');
if($3op===undefined){$3op=m$1.INIT$;$3op=$init$september$base()();$3op.$crtmm$=september$base.$crtmm$;}
return $3op;
}
ex$.september$base=september$base;
september$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$september$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:september')];},d:['ceylon.time.base','september']};};
$prop$getSeptember$base=september$base;
ex$.$prop$getSeptember$base=$prop$getSeptember$base;
function $3oq$base(){
var october$=new $3oq$base.$$;Month$base(gregorian$chronology().october,october$);
october$.$wgb6s9$3os_="october";
october$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','string']};}};
october$.$prop$getString.get=function(){return string};
october$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};}};
october$.$prop$getPredecessor.get=function(){return predecessor};
october$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','successor']};}};
october$.$prop$getSuccessor.get=function(){return successor};
return october$;
};$3oq$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','october']};};
function $init$october$base(){
if($3oq$base.$$===undefined){
m$1.initTypeProto($3oq$base,'ceylon.time.base::october',$init$Month$base());
(function(october$){
m$1.atr$(october$,'string',function(){return this.$wgb6s9$3os_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','string']};});
m$1.atr$(october$,'predecessor',function(){
var october$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};});
m$1.atr$(october$,'successor',function(){
var october$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oq$base,pa:3,d:['ceylon.time.base','october','$at','successor']};});
})($3oq$base.$$.prototype);
}
return $3oq$base;
}
ex$.$init$october$base=$init$october$base;
$init$october$base();
var $3ot;
function october$base(){
if($3ot===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'october\' before it was set"),'174:0-179:0','Month.ceylon');
if($3ot===undefined){$3ot=m$1.INIT$;$3ot=$init$october$base()();$3ot.$crtmm$=october$base.$crtmm$;}
return $3ot;
}
ex$.october$base=october$base;
october$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$october$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:october')];},d:['ceylon.time.base','october']};};
$prop$getOctober$base=october$base;
ex$.$prop$getOctober$base=$prop$getOctober$base;
function $3ou$base(){
var november$=new $3ou$base.$$;Month$base(gregorian$chronology().november,november$);
november$.$wgb6s9$3ow_="november";
november$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','string']};}};
november$.$prop$getString.get=function(){return string};
november$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};}};
november$.$prop$getPredecessor.get=function(){return predecessor};
november$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','successor']};}};
november$.$prop$getSuccessor.get=function(){return successor};
return november$;
};$3ou$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','november']};};
function $init$november$base(){
if($3ou$base.$$===undefined){
m$1.initTypeProto($3ou$base,'ceylon.time.base::november',$init$Month$base());
(function(november$){
m$1.atr$(november$,'string',function(){return this.$wgb6s9$3ow_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','string']};});
m$1.atr$(november$,'predecessor',function(){
var november$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};});
m$1.atr$(november$,'successor',function(){
var november$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3ou$base,pa:3,d:['ceylon.time.base','november','$at','successor']};});
})($3ou$base.$$.prototype);
}
return $3ou$base;
}
ex$.$init$november$base=$init$november$base;
$init$november$base();
var $3ox;
function november$base(){
if($3ox===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'november\' before it was set"),'181:0-186:0','Month.ceylon');
if($3ox===undefined){$3ox=m$1.INIT$;$3ox=$init$november$base()();$3ox.$crtmm$=november$base.$crtmm$;}
return $3ox;
}
ex$.november$base=november$base;
november$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$november$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:november')];},d:['ceylon.time.base','november']};};
$prop$getNovember$base=november$base;
ex$.$prop$getNovember$base=$prop$getNovember$base;
function $3oy$base(){
var december$=new $3oy$base.$$;Month$base(gregorian$chronology().december,december$);
december$.$wgb6s9$3p0_="december";
december$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','string']};}};
december$.$prop$getString.get=function(){return string};
december$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};}};
december$.$prop$getPredecessor.get=function(){return predecessor};
december$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','successor']};}};
december$.$prop$getSuccessor.get=function(){return successor};
return december$;
};$3oy$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','december']};};
function $init$december$base(){
if($3oy$base.$$===undefined){
m$1.initTypeProto($3oy$base,'ceylon.time.base::december',$init$Month$base());
(function(december$){
m$1.atr$(december$,'string',function(){return this.$wgb6s9$3p0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','string']};});
m$1.atr$(december$,'predecessor',function(){
var december$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};});
m$1.atr$(december$,'successor',function(){
var december$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$3oy$base,pa:3,d:['ceylon.time.base','december','$at','successor']};});
})($3oy$base.$$.prototype);
}
return $3oy$base;
}
ex$.$init$december$base=$init$december$base;
$init$december$base();
var $3p1;
function december$base(){
if($3p1===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'december\' before it was set"),'188:0-193:0','Month.ceylon');
if($3p1===undefined){$3p1=m$1.INIT$;$3p1=$init$december$base()();$3p1.$crtmm$=december$base.$crtmm$;}
return $3p1;
}
ex$.december$base=december$base;
december$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$december$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:december')];},d:['ceylon.time.base','december']};};
$prop$getDecember$base=december$base;
ex$.$prop$getDecember$base=$prop$getDecember$base;
ex$.$pkg$ans$ceylon$time$base=function(){return[m$1.doc$($CCMM$,'ceylon.time.base','$pkg-anns'),m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function PeriodBehavior$base($$targs$$,periodBehavior$){
m$1.set_type_args(periodBehavior$,$$targs$$,PeriodBehavior$base);
}
PeriodBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$PeriodBehavior:{sts:[{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},{t:ReadablePeriod$base}]}},of:['Self$PeriodBehavior'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior')];},d:['ceylon.time.base','PeriodBehavior']};};
ex$.PeriodBehavior$base=PeriodBehavior$base;
function $init$PeriodBehavior$base(){
if(PeriodBehavior$base.$$===undefined){
m$1.initTypeProtoI(PeriodBehavior$base,'ceylon.time.base::PeriodBehavior');
(function(periodBehavior$){
periodBehavior$.withYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withYears')];},d:['ceylon.time.base','PeriodBehavior','$m','withYears']};}};periodBehavior$.withMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'month',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','withMonths']};}};periodBehavior$.withDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'daysOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withDays')];},d:['ceylon.time.base','PeriodBehavior','$m','withDays']};}};periodBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','plusYears']};}};periodBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMonths']};}};periodBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','plusDays']};}};periodBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','minusYears']};}};periodBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMonths']};}};periodBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','minusDays']};}};periodBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withHours')];},d:['ceylon.time.base','PeriodBehavior','$m','withHours']};}};periodBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','withMinutes']};}};periodBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withSeconds']};}};periodBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withMilliseconds']};}};periodBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','plusHours']};}};periodBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMinutes']};}};periodBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusSeconds']};}};periodBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMilliseconds']};}};periodBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','minusHours']};}};periodBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMinutes']};}};periodBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusSeconds']};}};periodBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMilliseconds']};}};periodBehavior$.normalized={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},ps:[],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:normalized')];},d:['ceylon.time.base','PeriodBehavior','$m','normalized']};}};
})(PeriodBehavior$base.$$.prototype);
}
return PeriodBehavior$base;
}
ex$.$init$PeriodBehavior$base=$init$PeriodBehavior$base;
$init$PeriodBehavior$base();
function Range$base($$targs$$,range$){
m$1.set_type_args(range$,$$targs$$,Range$base);
m$1.Iterable({Element$Iterable:$$targs$$.Element$Range,Absent$Iterable:{t:m$1.Null}},range$);
}
Range$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Range:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Element$Range'}}]},StepBy$Range:{}},sts:[{t:m$1.Iterable,a:{Element$Iterable:'Element$Range',Absent$Iterable:{t:m$1.Null}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range')];},d:['ceylon.time.base','Range']};};
ex$.Range$base=Range$base;
function $init$Range$base(){
if(Range$base.$$===undefined){
m$1.initTypeProtoI(Range$base,'ceylon.time.base::Range',m$1.Iterable);
(function(range$){
range$.$prop$getFrom={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:from')];},d:['ceylon.time.base','Range','$at','from']};}};
range$.$prop$getTo={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:to')];},d:['ceylon.time.base','Range','$at','to']};}};
range$.$prop$getStep={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:step')];},d:['ceylon.time.base','Range','$at','step']};}};
range$.$prop$getDuration={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Duration},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:duration')];},d:['ceylon.time.base','Range','$at','duration']};}};
range$.$prop$getPeriod={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:period')];},d:['ceylon.time.base','Range','$at','period']};}};
range$.overlap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{Element$Range:'Element$Range',StepBy$Range:'StepBy$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:'Element$Range',StepBy$Range:'StepBy$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:overlap')];},d:['ceylon.time.base','Range','$m','overlap']};}};range$.gap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{Element$Range:'Element$Range',StepBy$Range:'StepBy$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:'Element$Range',StepBy$Range:'StepBy$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:gap')];},d:['ceylon.time.base','Range','$m','gap']};}};range$.equals=function($3p2){
var range$=this;
var $3p3;
if(m$1.is$(($3p3=$3p2),{t:Range$base,a:{Element$Range:range$.$$targs$$.Element$Range,StepBy$Range:range$.$$targs$$.StepBy$Range}})){
return (range$.from.equals($3p3.from)&&range$.to.equals($3p3.to));
}
function $3p4(){return $3p2;}
return false;
};range$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:equals')];},d:['ceylon.time.base','Range','$m','equals']};};
m$1.atr$(range$,'hash',function(){
var range$=this;
var $3p5=(31);
var $3p6=(1);
$3p6=$3p5.times($3p6).plus(range$.from.hash);
$3p6=$3p5.times($3p6).plus(range$.to.hash);
return $3p6;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:hash')];},d:['ceylon.time.base','Range','$at','hash']};});range$.stepBy={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Range$base,a:{Element$Range:'Element$Range',StepBy$Range:'StepBy$Range'}},ps:[{nm:'step',mt:'prm',$t:'StepBy$Range'}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:stepBy')];},d:['ceylon.time.base','Range','$m','stepBy']};}};m$1.atr$(range$,'string',function(){
var range$=this;
return "".plus(range$.from.string).plus("/").plus(range$.to.string).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:string')];},d:['ceylon.time.base','Range','$at','string']};});
})(Range$base.$$.prototype);
}
return Range$base;
}
ex$.$init$Range$base=$init$Range$base;
$init$Range$base();
function ReadableDate$base(readableDate$){
}
ReadableDate$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDate'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDate']};};
ex$.ReadableDate$base=ReadableDate$base;
function $init$ReadableDate$base(){
if(ReadableDate$base.$$===undefined){
m$1.initTypeProtoI(ReadableDate$base,'ceylon.time.base::ReadableDate');
(function(readableDate$){
readableDate$.$prop$getYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("The year of the date.")];},d:['ceylon.time.base','ReadableDate','$at','year']};}};
readableDate$.$prop$getMonth={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Month of the year value of the date.")];},d:['ceylon.time.base','ReadableDate','$at','month']};}};
readableDate$.$prop$getDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of month value of the date.")];},d:['ceylon.time.base','ReadableDate','$at','day']};}};
readableDate$.$prop$getDayOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of the week.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfWeek']};}};
readableDate$.$prop$getWeekOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the week of the date.")];},d:['ceylon.time.base','ReadableDate','$at','weekOfYear']};}};
readableDate$.$prop$getDayOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the day in year.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfYear']};}};
readableDate$.$prop$getDayOfEra={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of calendar days since ERA.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfEra']};}};
readableDate$.$prop$getLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("True if the year of the date is a leap year.")];},d:['ceylon.time.base','ReadableDate','$at','leapYear']};}};
})(ReadableDate$base.$$.prototype);
}
return ReadableDate$base;
}
ex$.$init$ReadableDate$base=$init$ReadableDate$base;
$init$ReadableDate$base();
function ReadableDateTime$base(readableDateTime$){
ReadableDate$base(readableDateTime$);
ReadableTime$base(readableDateTime$);
}
ReadableDateTime$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDateTime')];},d:['ceylon.time.base','ReadableDateTime']};};
ex$.ReadableDateTime$base=ReadableDateTime$base;
function $init$ReadableDateTime$base(){
if(ReadableDateTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableDateTime$base,'ceylon.time.base::ReadableDateTime',$init$ReadableDate$base(),$init$ReadableTime$base());
}
return ReadableDateTime$base;
}
ex$.$init$ReadableDateTime$base=$init$ReadableDateTime$base;
$init$ReadableDateTime$base();
function ReadableDuration$base(readableDuration$){
}
ReadableDuration$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDuration'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Duration)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDuration']};};
ex$.ReadableDuration$base=ReadableDuration$base;
function $init$ReadableDuration$base(){
if(ReadableDuration$base.$$===undefined){
m$1.initTypeProtoI(ReadableDuration$base,'ceylon.time.base::ReadableDuration');
(function(readableDuration$){
readableDuration$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDuration$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds.")];},d:['ceylon.time.base','ReadableDuration','$at','milliseconds']};}};
})(ReadableDuration$base.$$.prototype);
}
return ReadableDuration$base;
}
ex$.$init$ReadableDuration$base=$init$ReadableDuration$base;
$init$ReadableDuration$base();
function ReadableInstant$base(readableInstant$){
}
ReadableInstant$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant'),m$1.see([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Instant)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.base','ReadableInstant']};};
ex$.ReadableInstant$base=ReadableInstant$base;
function $init$ReadableInstant$base(){
if(ReadableInstant$base.$$===undefined){
m$1.initTypeProtoI(ReadableInstant$base,'ceylon.time.base::ReadableInstant');
(function(readableInstant$){
readableInstant$.$prop$getMillisecondsOfEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableInstant$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant:$at:millisecondsOfEpoch')];},d:['ceylon.time.base','ReadableInstant','$at','millisecondsOfEpoch']};}};
})(ReadableInstant$base.$$.prototype);
}
return ReadableInstant$base;
}
ex$.$init$ReadableInstant$base=$init$ReadableInstant$base;
$init$ReadableInstant$base();
function ReadablePeriod$base(readablePeriod$){
ReadableDatePeriod$base(readablePeriod$);
ReadableTimePeriod$base(readablePeriod$);
}
ReadablePeriod$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod')];},d:['ceylon.time.base','ReadablePeriod']};};
ex$.ReadablePeriod$base=ReadablePeriod$base;
function $init$ReadablePeriod$base(){
if(ReadablePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadablePeriod$base,'ceylon.time.base::ReadablePeriod',$init$ReadableDatePeriod$base(),$init$ReadableTimePeriod$base());
(function(readablePeriod$){
readablePeriod$.$prop$getDateOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:dateOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','dateOnly']};}};
readablePeriod$.$prop$getTimeOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:timeOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','timeOnly']};}};
})(ReadablePeriod$base.$$.prototype);
}
return ReadablePeriod$base;
}
ex$.$init$ReadablePeriod$base=$init$ReadablePeriod$base;
$init$ReadablePeriod$base();
function ReadableDatePeriod$base(readableDatePeriod$){
}
ReadableDatePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDatePeriod')];},d:['ceylon.time.base','ReadableDatePeriod']};};
ex$.ReadableDatePeriod$base=ReadableDatePeriod$base;
function $init$ReadableDatePeriod$base(){
if(ReadableDatePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableDatePeriod$base,'ceylon.time.base::ReadableDatePeriod');
(function(readableDatePeriod$){
readableDatePeriod$.$prop$getYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','years']};}};
readableDatePeriod$.$prop$getMonths={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','months']};}};
readableDatePeriod$.$prop$getDays={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','days']};}};
})(ReadableDatePeriod$base.$$.prototype);
}
return ReadableDatePeriod$base;
}
ex$.$init$ReadableDatePeriod$base=$init$ReadableDatePeriod$base;
$init$ReadableDatePeriod$base();
function ReadableTimePeriod$base(readableTimePeriod$){
}
ReadableTimePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTimePeriod')];},d:['ceylon.time.base','ReadableTimePeriod']};};
ex$.ReadableTimePeriod$base=ReadableTimePeriod$base;
function $init$ReadableTimePeriod$base(){
if(ReadableTimePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableTimePeriod$base,'ceylon.time.base::ReadableTimePeriod');
(function(readableTimePeriod$){
readableTimePeriod$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of hours")];},d:['ceylon.time.base','ReadableTimePeriod','$at','hours']};}};
readableTimePeriod$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of minutes")];},d:['ceylon.time.base','ReadableTimePeriod','$at','minutes']};}};
readableTimePeriod$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of seconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','seconds']};}};
readableTimePeriod$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of milliseconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','milliseconds']};}};
})(ReadableTimePeriod$base.$$.prototype);
}
return ReadableTimePeriod$base;
}
ex$.$init$ReadableTimePeriod$base=$init$ReadableTimePeriod$base;
$init$ReadableTimePeriod$base();
function ReadableTime$base(readableTime$){
}
ReadableTime$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.base','ReadableTime']};};
ex$.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
if(ReadableTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableTime$base,'ceylon.time.base::ReadableTime');
(function(readableTime$){
readableTime$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Hour of day.")];},d:['ceylon.time.base','ReadableTime','$at','hours']};}};
readableTime$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.base','ReadableTime','$at','minutes']};}};
readableTime$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.base','ReadableTime','$at','seconds']};}};
readableTime$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds since last second.")];},d:['ceylon.time.base','ReadableTime','$at','milliseconds']};}};
readableTime$.$prop$getMinutesOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:minutesOfDay')];},d:['ceylon.time.base','ReadableTime','$at','minutesOfDay']};}};
readableTime$.$prop$getSecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:secondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','secondsOfDay']};}};
readableTime$.$prop$getMillisecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:millisecondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','millisecondsOfDay']};}};
})(ReadableTime$base.$$.prototype);
}
return ReadableTime$base;
}
ex$.$init$ReadableTime$base=$init$ReadableTime$base;
$init$ReadableTime$base();
function TimeBehavior$base($$targs$$,timeBehavior$){
m$1.set_type_args(timeBehavior$,$$targs$$,TimeBehavior$base);
}
TimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$TimeBehavior:{sts:[{t:ReadableTime$base}]}},of:['Element$TimeBehavior'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior')];},d:['ceylon.time.base','TimeBehavior']};};
ex$.TimeBehavior$base=TimeBehavior$base;
function $init$TimeBehavior$base(){
if(TimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(TimeBehavior$base,'ceylon.time.base::TimeBehavior');
(function(timeBehavior$){
timeBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withHours')];},d:['ceylon.time.base','TimeBehavior','$m','withHours']};}};timeBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','withMinutes']};}};timeBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','withSeconds']};}};timeBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','withMilliseconds']};}};timeBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusHours')];},d:['ceylon.time.base','TimeBehavior','$m','plusHours']};}};timeBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','plusMinutes']};}};timeBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusSeconds']};}};timeBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusMilliseconds']};}};timeBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusHours')];},d:['ceylon.time.base','TimeBehavior','$m','minusHours']};}};timeBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','minusMinutes']};}};timeBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusSeconds']};}};timeBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusMilliseconds']};}};
})(TimeBehavior$base.$$.prototype);
}
return TimeBehavior$base;
}
ex$.$init$TimeBehavior$base=$init$TimeBehavior$base;
$init$TimeBehavior$base();
function rd$chronology($3p7){
var $3p8=(0);
return $3p7.minus($3p8);
}
ex$.rd$chronology=rd$chronology;
rd$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'t',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:rd')];},d:['ceylon.time.chronology','rd']};};
function $3p9$chronology(){
var unixTime$=new $3p9$chronology.$$;unixTime$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3p9$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};}};
unixTime$.$prop$getEpoch.get=function(){return epoch};
return unixTime$;
};$3p9$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.chronology','unixTime']};};
function $init$unixTime$chronology(){
if($3p9$chronology.$$===undefined){
m$1.initTypeProto($3p9$chronology,'ceylon.time.chronology::unixTime',m$1.Basic);
(function(unixTime$){
m$1.atr$(unixTime$,'epoch',function(){
var unixTime$=this;
return gregorian$chronology().fixedFrom(m$1.tpl$([1970,1,1]));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3p9$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};});
unixTime$.fixedFromTime=function($3pb){
var unixTime$=this;
return floorDiv$internal$math($3pb,milliseconds$base().perDay).plus(unixTime$.epoch);
};unixTime$.fixedFromTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3p9$chronology,pa:1,an:function(){return[m$1.doc("Returns a _fixed date_ from the _unix time_ value.")];},d:['ceylon.time.chronology','unixTime','$m','fixedFromTime']};};
unixTime$.timeFromFixed=function($3pc){
var unixTime$=this;
return $3pc.minus(unixTime$.epoch).times(milliseconds$base().perDay);
};unixTime$.timeFromFixed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3p9$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeFromFixed')];},d:['ceylon.time.chronology','unixTime','$m','timeFromFixed']};};
unixTime$.timeOfDay=function($3pd){
var unixTime$=this;
return floorMod$internal$math($3pd,milliseconds$base().perDay);
};unixTime$.timeOfDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3p9$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeOfDay')];},d:['ceylon.time.chronology','unixTime','$m','timeOfDay']};};
})($3p9$chronology.$$.prototype);
}
return $3p9$chronology;
}
ex$.$init$unixTime$chronology=$init$unixTime$chronology;
$init$unixTime$chronology();
var $3pe;
function unixTime$chronology(){
if($3pe===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unixTime\' before it was set"),'12:0-32:0','Chronology.ceylon');
if($3pe===undefined){$3pe=m$1.INIT$;$3pe=$init$unixTime$chronology()();$3pe.$crtmm$=unixTime$chronology.$crtmm$;}
return $3pe;
}
ex$.unixTime$chronology=unixTime$chronology;
unixTime$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unixTime$chronology()},pa:1,an:function(){return[m$1.doc("Common properties of _Unix time_.")];},d:['ceylon.time.chronology','unixTime']};};
$prop$getUnixTime$chronology=unixTime$chronology;
ex$.$prop$getUnixTime$chronology=$prop$getUnixTime$chronology;
function Chronology$chronology($$targs$$,chronology$){
m$1.set_type_args(chronology$,$$targs$$,Chronology$chronology);
}
Chronology$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Fields$Chronology:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology')];},d:['ceylon.time.chronology','Chronology']};};
ex$.Chronology$chronology=Chronology$chronology;
function $init$Chronology$chronology(){
if(Chronology$chronology.$$===undefined){
m$1.initTypeProtoI(Chronology$chronology,'ceylon.time.chronology::Chronology');
(function(chronology$){
chronology$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$at:epoch')];},d:['ceylon.time.chronology','Chronology','$at','epoch']};}};
chronology$.fixedFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:fixedFrom')];},d:['ceylon.time.chronology','Chronology','$m','fixedFrom']};}};chronology$.dateFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Fields$Chronology',ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:dateFrom')];},d:['ceylon.time.chronology','Chronology','$m','dateFrom']};}};chronology$.checkDate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc("Validate the given date.")];},d:['ceylon.time.chronology','Chronology','$m','checkDate']};}};
})(Chronology$chronology.$$.prototype);
}
return Chronology$chronology;
}
ex$.$init$Chronology$chronology=$init$Chronology$chronology;
$init$Chronology$chronology();
function LeapYear$chronology($$targs$$,leapYear$){
m$1.set_type_args(leapYear$,$$targs$$,LeapYear$chronology);
}
LeapYear$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$LeapYear:{sts:[{t:Chronology$chronology,a:{Fields$Chronology:'Fields$LeapYear'}}]},Fields$LeapYear:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},of:['Self$LeapYear'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear')];},d:['ceylon.time.chronology','LeapYear']};};
ex$.LeapYear$chronology=LeapYear$chronology;
function $init$LeapYear$chronology(){
if(LeapYear$chronology.$$===undefined){
m$1.initTypeProtoI(LeapYear$chronology,'ceylon.time.chronology::LeapYear');
(function(leapYear$){
leapYear$.leapYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'leapYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:LeapYear$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear:$m:leapYear')];},d:['ceylon.time.chronology','LeapYear','$m','leapYear']};}};
})(LeapYear$chronology.$$.prototype);
}
return LeapYear$chronology;
}
ex$.$init$LeapYear$chronology=$init$LeapYear$chronology;
$init$LeapYear$chronology();
function GregorianCalendar$chronology(gregorianCalendar$){
$init$GregorianCalendar$chronology();
if(gregorianCalendar$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.chronology::GregorianCalendar"),'?','?')
gregorianCalendar$.$$targs$$={Fields$Chronology:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])};
gregorianCalendar$.$$targs$$={Self$LeapYear:{t:GregorianCalendar$chronology},Fields$LeapYear:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])};
Chronology$chronology({Fields$Chronology:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])},gregorianCalendar$);
LeapYear$chronology({Self$LeapYear:{t:GregorianCalendar$chronology},Fields$LeapYear:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])},gregorianCalendar$);
return gregorianCalendar$;
}
GregorianCalendar$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Chronology$chronology,a:{Fields$Chronology:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}},{t:LeapYear$chronology,a:{Self$LeapYear:{t:GregorianCalendar$chronology},Fields$LeapYear:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}}],of:[$prop$getGregorian$chronology],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:GregorianCalendar')];},d:['ceylon.time.chronology','GregorianCalendar']};};
ex$.GregorianCalendar$chronology=GregorianCalendar$chronology;
function $init$GregorianCalendar$chronology(){
if(GregorianCalendar$chronology.$$===undefined){
m$1.initTypeProto(GregorianCalendar$chronology,'ceylon.time.chronology::GregorianCalendar',m$1.Basic,$init$Chronology$chronology(),$init$LeapYear$chronology());
}
return GregorianCalendar$chronology;
}
ex$.$init$GregorianCalendar$chronology=$init$GregorianCalendar$chronology;
$init$GregorianCalendar$chronology();
function $3pf$chronology(){
var gregorian$=new $3pf$chronology.$$;GregorianCalendar$chronology(gregorian$);
gregorian$.$wgb6s9$3ph_=rd$chronology(1);
gregorian$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};}};
gregorian$.$prop$getEpoch.get=function(){return epoch};
gregorian$.$wgb6s9$3pi_=(1);
gregorian$.$prop$getJanuary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};}};
gregorian$.$prop$getJanuary.get=function(){return january};
gregorian$.$wgb6s9$3pj_=(2);
gregorian$.$prop$getFebruary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};}};
gregorian$.$prop$getFebruary.get=function(){return february};
gregorian$.$wgb6s9$3pk_=(3);
gregorian$.$prop$getMarch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};}};
gregorian$.$prop$getMarch.get=function(){return march};
gregorian$.$wgb6s9$3pl_=(4);
gregorian$.$prop$getApril={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};}};
gregorian$.$prop$getApril.get=function(){return april};
gregorian$.$wgb6s9$3pm_=(5);
gregorian$.$prop$getMay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};}};
gregorian$.$prop$getMay.get=function(){return may};
gregorian$.$wgb6s9$3pn_=(6);
gregorian$.$prop$getJune={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};}};
gregorian$.$prop$getJune.get=function(){return june};
gregorian$.$wgb6s9$3po_=(7);
gregorian$.$prop$getJuly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};}};
gregorian$.$prop$getJuly.get=function(){return july};
gregorian$.$wgb6s9$3pp_=(8);
gregorian$.$prop$getAugust={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};}};
gregorian$.$prop$getAugust.get=function(){return august};
gregorian$.$wgb6s9$3pq_=(9);
gregorian$.$prop$getSeptember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};}};
gregorian$.$prop$getSeptember.get=function(){return september};
gregorian$.$wgb6s9$3pr_=(10);
gregorian$.$prop$getOctober={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};}};
gregorian$.$prop$getOctober.get=function(){return october};
gregorian$.$wgb6s9$3ps_=(11);
gregorian$.$prop$getNovember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};}};
gregorian$.$prop$getNovember.get=function(){return november};
gregorian$.$wgb6s9$3pt_=(12);
gregorian$.$prop$getDecember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};}};
gregorian$.$prop$getDecember.get=function(){return december};
return gregorian$;
};$3pf$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:GregorianCalendar$chronology},d:['ceylon.time.chronology','gregorian']};};
function $init$gregorian$chronology(){
if($3pf$chronology.$$===undefined){
m$1.initTypeProto($3pf$chronology,'ceylon.time.chronology::gregorian',$init$GregorianCalendar$chronology());
(function(gregorian$){
m$1.atr$(gregorian$,'epoch',function(){return this.$wgb6s9$3ph_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};});
m$1.atr$(gregorian$,'january',function(){return this.$wgb6s9$3pi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};});
m$1.atr$(gregorian$,'february',function(){return this.$wgb6s9$3pj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};});
m$1.atr$(gregorian$,'march',function(){return this.$wgb6s9$3pk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};});
m$1.atr$(gregorian$,'april',function(){return this.$wgb6s9$3pl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};});
m$1.atr$(gregorian$,'may',function(){return this.$wgb6s9$3pm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};});
m$1.atr$(gregorian$,'june',function(){return this.$wgb6s9$3pn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};});
m$1.atr$(gregorian$,'july',function(){return this.$wgb6s9$3po_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};});
m$1.atr$(gregorian$,'august',function(){return this.$wgb6s9$3pp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};});
m$1.atr$(gregorian$,'september',function(){return this.$wgb6s9$3pq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};});
m$1.atr$(gregorian$,'october',function(){return this.$wgb6s9$3pr_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};});
m$1.atr$(gregorian$,'november',function(){return this.$wgb6s9$3ps_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};});
m$1.atr$(gregorian$,'december',function(){return this.$wgb6s9$3pt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3pf$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};});
gregorian$.leapYear=function($3pu){
var gregorian$=this;
return ($3pv=((($3pu.remainder(100)).valueOf()==(0).valueOf())?(($3pu.remainder(400)).valueOf()==(0).valueOf()):null),m$1.nn$($3pv)?$3pv:(($3pu.remainder(4)).valueOf()==(0).valueOf()));
var $3pv;
};gregorian$.leapYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:leapYear')];},d:['ceylon.time.chronology','gregorian','$m','leapYear']};};
gregorian$.$wgb6s9$3pw=function($3px,$3py,$3pz){
var gregorian$=this;
return gregorian$.epoch.minus(1).plus((365).times($3px.minus(1))).plus(floor$internal$math($3px.minus(1).divided(m$1.Float(4.0)))).minus(floor$internal$math($3px.minus(1).divided(m$1.Float(100.0)))).plus(floor$internal$math($3px.minus(1).divided(m$1.Float(400.0)))).plus(floor$internal$math((367).times($3py).minus(362).divided(m$1.Float(12.0)))).plus(($3q0=(($3py>2)?($3q1=(gregorian$.leapYear($3px)?(-1):null),m$1.nn$($3q1)?$3q1:(-2)):null),m$1.nn$($3q0)?$3q0:(0))).plus($3pz);
var $3q0,$3q1;
};gregorian$.$wgb6s9$3pw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:m$1.Integer}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixed$jr0536']};};
gregorian$.fixedFrom=function($3q2){
var gregorian$=this;
return gregorian$.$wgb6s9$3pw($3q2.$_get(0),$3q2.$_get(1),$3q2.$_get(2));
};gregorian$.fixedFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixedFrom']};};
gregorian$.checkDate=function($3q3){
var gregorian$=this;
m$1.asrt$((((years$base().minimum<=$3q3.$_get(0))&&($3q3.$_get(0)<=years$base().maximum))),"Invalid year value: \'years.minimum <= date[0] && date[0] <= years.maximum\' at Chronology.ceylon (116:14-116:67)",'115:8-116:68','Chronology.ceylon');
m$1.asrt$(($3q3.equals(gregorian$.dateFrom(gregorian$.fixedFrom($3q3)))),"Invalid date value: \' date == dateFrom( fixedFrom(date) ) \' at Chronology.ceylon (119:14-119:52)",'118:8-119:53','Chronology.ceylon');
};gregorian$.checkDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:checkDate')];},d:['ceylon.time.chronology','gregorian','$m','checkDate']};};
gregorian$.newYear=function($3q4){
var gregorian$=this;
return gregorian$.$wgb6s9$3pw($3q4,gregorian$.january,1);
};gregorian$.newYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:newYear')];},d:['ceylon.time.chronology','gregorian','$m','newYear']};};
gregorian$.yearEnd=function($3q5){
var gregorian$=this;
return gregorian$.$wgb6s9$3pw($3q5,gregorian$.december,31);
};gregorian$.yearEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearEnd')];},d:['ceylon.time.chronology','gregorian','$m','yearEnd']};};
gregorian$.yearFrom=function($3q6){
var gregorian$=this;
var $3q7=$3q6.minus(gregorian$.epoch);
var $3q8=floorDiv$internal$math($3q7,days$base().perFourCenturies);
var $3q9=floorMod$internal$math($3q7,days$base().perFourCenturies);
var $3qa=floorDiv$internal$math($3q9,days$base().perCentury);
var $3qb=floorMod$internal$math($3q9,days$base().perCentury);
var $3qc=floorDiv$internal$math($3qb,days$base().inFourYears);
var $3qd=floorMod$internal$math($3qb,days$base().inFourYears);
var $3qe=floorDiv$internal$math($3qd,days$base().perYear);
var $3qf=(400).times($3q8).plus((100).times($3qa)).plus((4).times($3qc)).plus($3qe);
return ($3qg=(((($3qa).valueOf()==(4).valueOf())||(($3qe).valueOf()==(4).valueOf()))?$3qf:null),m$1.nn$($3qg)?$3qg:$3qf.plus(1));
var $3qg;
};gregorian$.yearFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearFrom')];},d:['ceylon.time.chronology','gregorian','$m','yearFrom']};};
gregorian$.dateFrom=function($3qh){
var gregorian$=this;
var $3qi=gregorian$.yearFrom($3qh);
var $3qj=$3qh.minus(gregorian$.newYear($3qi));
var $3qk=($3ql=(($3qh<gregorian$.$wgb6s9$3pw($3qi,gregorian$.march,1))?0:null),m$1.nn$($3ql)?$3ql:($3qm=(gregorian$.leapYear($3qi)?1:null),m$1.nn$($3qm)?$3qm:(2)));
var $3ql,$3qm;
var $3qn=floorDiv$internal$math((12).times($3qj.plus($3qk)).plus(373),367);
var $3qo=(1).plus($3qh).minus(gregorian$.$wgb6s9$3pw($3qi,$3qn,1));
return m$1.tpl$([$3qi,$3qn,$3qo]);
};gregorian$.dateFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dateFrom')];},d:['ceylon.time.chronology','gregorian','$m','dateFrom']};};
gregorian$.monthFrom=function($3qp){
var gregorian$=this;
return gregorian$.dateFrom($3qp).$_get(1);
};gregorian$.monthFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:monthFrom')];},d:['ceylon.time.chronology','gregorian','$m','monthFrom']};};
gregorian$.dayFrom=function($3qq){
var gregorian$=this;
return gregorian$.dateFrom($3qq).$_get(2);
};gregorian$.dayFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayFrom']};};
gregorian$.dayOfWeekFrom=function($3qr){
var gregorian$=this;
return floorMod$internal$math($3qr,7);
};gregorian$.dayOfWeekFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$3pf$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayOfWeekFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayOfWeekFrom']};};
})($3pf$chronology.$$.prototype);
}
return $3pf$chronology;
}
ex$.$init$gregorian$chronology=$init$gregorian$chronology;
$init$gregorian$chronology();
var $3qs;
function gregorian$chronology(){
if($3qs===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'gregorian\' before it was set"),'72:0-172:0','Chronology.ceylon');
if($3qs===undefined){$3qs=m$1.INIT$;$3qs=$init$gregorian$chronology()();$3qs.$crtmm$=gregorian$chronology.$crtmm$;}
return $3qs;
}
ex$.gregorian$chronology=gregorian$chronology;
gregorian$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$gregorian$chronology()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian')];},d:['ceylon.time.chronology','gregorian']};};
$prop$getGregorian$chronology=gregorian$chronology;
ex$.$prop$getGregorian$chronology=$prop$getGregorian$chronology;
ex$.$pkg$ans$ceylon$time$chronology=function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology','$pkg-anns'),m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function Clock(clock$){
}
Clock.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock')];},d:['ceylon.time','Clock']};};
ex$.Clock=Clock;
function $init$Clock(){
if(Clock.$$===undefined){
m$1.initTypeProtoI(Clock,'ceylon.time::Clock');
(function(clock$){
clock$.milliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:milliseconds')];},d:['ceylon.time','Clock','$m','milliseconds']};}};clock$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:instant')];},d:['ceylon.time','Clock','$m','instant']};}};
})(Clock.$$.prototype);
}
return Clock;
}
ex$.$init$Clock=$init$Clock;
$init$Clock();
function $3qt(){
var systemTime$=new $3qt.$$;Clock(systemTime$);
systemTime$.$wgb6s9$3qv_="System time";
systemTime$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3qt,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};}};
systemTime$.$prop$getString.get=function(){return string};
return systemTime$;
};$3qt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Clock}],d:['ceylon.time','systemTime']};};
function $init$systemTime(){
if($3qt.$$===undefined){
m$1.initTypeProto($3qt,'ceylon.time::systemTime',m$1.Basic,$init$Clock());
(function(systemTime$){
systemTime$.milliseconds=function(){return m$1.system().milliseconds;};
systemTime$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:$3qt,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:milliseconds')];},d:['ceylon.time','systemTime','$m','milliseconds']};};
systemTime$.instant=function(){var systemTime$=this;
return Instant(systemTime$.milliseconds());};
systemTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:$3qt,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:instant')];},d:['ceylon.time','systemTime','$m','instant']};};
m$1.atr$(systemTime$,'string',function(){return this.$wgb6s9$3qv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$3qt,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};});
})($3qt.$$.prototype);
}
return $3qt;
}
ex$.$init$systemTime=$init$systemTime;
$init$systemTime();
var $3qw;
function systemTime(){
if($3qw===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'systemTime\' before it was set"),'29:0-41:0','Clock.ceylon');
if($3qw===undefined){$3qw=m$1.INIT$;$3qw=$init$systemTime()();$3qw.$crtmm$=systemTime.$crtmm$;}
return $3qw;
}
ex$.systemTime=systemTime;
systemTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$systemTime()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime')];},d:['ceylon.time','systemTime']};};
$prop$getSystemTime=systemTime;
ex$.$prop$getSystemTime=$prop$getSystemTime;
function fixedTime($3qx){
var $3qy=$3qx;
if(m$1.is$($3qy,{t:Instant})) {
return FixedInstant($3qy);
}
else if(m$1.is$($3qy,{t:m$1.Integer})) {
return FixedMilliseconds($3qy);
}
}
ex$.fixedTime=fixedTime;
fixedTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'instant',mt:'prm',$t:{t:'u',l:[{t:Instant},{t:m$1.Integer}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:fixedTime')];},d:['ceylon.time','fixedTime']};};
function FixedInstant($wgb6s9$3qz,fixedInstant$){
$init$FixedInstant();
if(fixedInstant$===undefined)fixedInstant$=new FixedInstant.$$;
fixedInstant$.$wgb6s9$3qz_=$wgb6s9$3qz;
Clock(fixedInstant$);
fixedInstant$.$wgb6s9$3r0_="Fixed to ".plus(fixedInstant$.instant().string).plus("");
return fixedInstant$;
}
FixedInstant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedInstant',mt:'prm',$t:{t:Instant}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant')];},d:['ceylon.time','FixedInstant']};};
ex$.FixedInstant=FixedInstant;
function $init$FixedInstant(){
if(FixedInstant.$$===undefined){
m$1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',m$1.Basic,$init$Clock());
(function(fixedInstant$){
m$1.atr$(fixedInstant$,'$wgb6s9$3qz',function(){return this.$wgb6s9$3qz_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:FixedInstant,d:['ceylon.time','FixedInstant','$at','fixedInstant$dw5xdz']};});
fixedInstant$.milliseconds=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$3qz.millisecondsOfEpoch;};
fixedInstant$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$m:milliseconds')];},d:['ceylon.time','FixedInstant','$m','milliseconds']};};
fixedInstant$.instant=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$3qz;};
fixedInstant$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc("Returns the fixed instant.")];},d:['ceylon.time','FixedInstant','$m','instant']};};
m$1.atr$(fixedInstant$,'string',function(){return this.$wgb6s9$3r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$at:string')];},d:['ceylon.time','FixedInstant','$at','string']};});
})(FixedInstant.$$.prototype);
}
return FixedInstant;
}
ex$.$init$FixedInstant=$init$FixedInstant;
$init$FixedInstant();
function FixedMilliseconds($wgb6s9$3r1,fixedMilliseconds$){
$init$FixedMilliseconds();
if(fixedMilliseconds$===undefined)fixedMilliseconds$=new FixedMilliseconds.$$;
fixedMilliseconds$.$wgb6s9$3r1_=$wgb6s9$3r1;
Clock(fixedMilliseconds$);
fixedMilliseconds$.$wgb6s9$3r2_="Fixed to ".plus(fixedMilliseconds$.instant().string).plus("");
return fixedMilliseconds$;
}
FixedMilliseconds.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedMilliseconds',mt:'prm',$t:{t:m$1.Integer}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds')];},d:['ceylon.time','FixedMilliseconds']};};
ex$.FixedMilliseconds=FixedMilliseconds;
function $init$FixedMilliseconds(){
if(FixedMilliseconds.$$===undefined){
m$1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',m$1.Basic,$init$Clock());
(function(fixedMilliseconds$){
m$1.atr$(fixedMilliseconds$,'$wgb6s9$3r1',function(){return this.$wgb6s9$3r1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:FixedMilliseconds,d:['ceylon.time','FixedMilliseconds','$at','fixedMilliseconds$ip85yf']};});
fixedMilliseconds$.milliseconds=function(){var fixedMilliseconds$=this;
return fixedMilliseconds$.$wgb6s9$3r1;};
fixedMilliseconds$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc("Returns the fixed milliseconds.")];},d:['ceylon.time','FixedMilliseconds','$m','milliseconds']};};
fixedMilliseconds$.instant=function(){var fixedMilliseconds$=this;
return Instant(fixedMilliseconds$.$wgb6s9$3r1);};
fixedMilliseconds$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$m:instant')];},d:['ceylon.time','FixedMilliseconds','$m','instant']};};
m$1.atr$(fixedMilliseconds$,'string',function(){return this.$wgb6s9$3r2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$at:string')];},d:['ceylon.time','FixedMilliseconds','$at','string']};});
})(FixedMilliseconds.$$.prototype);
}
return FixedMilliseconds;
}
ex$.$init$FixedMilliseconds=$init$FixedMilliseconds;
$init$FixedMilliseconds();
function offsetTime($3r3,$3r4){return OffsetClock($3r3,$3r4);};
offsetTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:offsetTime')];},d:['ceylon.time','offsetTime']};};
ex$.offsetTime=offsetTime;
function OffsetClock($wgb6s9$3r5,$wgb6s9$3r6,offsetClock$){
$init$OffsetClock();
if(offsetClock$===undefined)offsetClock$=new OffsetClock.$$;
offsetClock$.$wgb6s9$3r5_=$wgb6s9$3r5;
offsetClock$.$wgb6s9$3r6_=$wgb6s9$3r6;
Clock(offsetClock$);
offsetClock$.$wgb6s9$3r7_="Offset of ".plus(offsetClock$.$wgb6s9$3r6.period.normalized().string).plus(" from ").plus(offsetClock$.$wgb6s9$3r5.string).plus("");
return offsetClock$;
}
OffsetClock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock')];},d:['ceylon.time','OffsetClock']};};
ex$.OffsetClock=OffsetClock;
function $init$OffsetClock(){
if(OffsetClock.$$===undefined){
m$1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',m$1.Basic,$init$Clock());
(function(offsetClock$){
m$1.atr$(offsetClock$,'$wgb6s9$3r5',function(){return this.$wgb6s9$3r5_;},undefined,function(){return{mod:$CCMM$,$t:{t:Clock},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','baseClock$wp0y7f']};});
m$1.atr$(offsetClock$,'$wgb6s9$3r6',function(){return this.$wgb6s9$3r6_;},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','offset$fimsw5']};});
offsetClock$.milliseconds=function(){var offsetClock$=this;
return offsetClock$.$wgb6s9$3r5.milliseconds().plus(offsetClock$.$wgb6s9$3r6.milliseconds);};
offsetClock$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','milliseconds']};};
offsetClock$.instant=function(){var offsetClock$=this;
return Instant(offsetClock$.milliseconds());};
offsetClock$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','instant']};};
m$1.atr$(offsetClock$,'string',function(){return this.$wgb6s9$3r7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetClock,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock:$at:string')];},d:['ceylon.time','OffsetClock','$at','string']};});
})(OffsetClock.$$.prototype);
}
return OffsetClock;
}
ex$.$init$OffsetClock=$init$OffsetClock;
$init$OffsetClock();
function $_Date(date$){
ReadableDate$base(date$);
DateBehavior$base({Element$DateBehavior:{t:$_Date}},date$);
m$1.Ordinal({Other$Ordinal:{t:$_Date}},date$);
m$1.Comparable({Other$Comparable:{t:$_Date}},date$);
m$1.Enumerable({Other$Enumerable:{t:$_Date}},date$);
}
$_Date.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:DateBehavior$base,a:{Element$DateBehavior:{t:$_Date}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:$_Date}}},{t:m$1.Comparable,a:{Other$Comparable:{t:$_Date}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:$_Date}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date')];},d:['ceylon.time','Date']};};
ex$.$_Date=$_Date;
function $init$$_Date(){
if($_Date.$$===undefined){
m$1.initTypeProtoI($_Date,'ceylon.time::Date',$init$ReadableDate$base(),$init$DateBehavior$base(),m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(date$){
date$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:plus')];},d:['ceylon.time','Date','$m','plus']};}};date$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:minus')];},d:['ceylon.time','Date','$m','minus']};}};date$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodFrom')];},d:['ceylon.time','Date','$m','periodFrom']};}};date$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodTo')];},d:['ceylon.time','Date','$m','periodTo']};}};date$.at={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:at')];},d:['ceylon.time','Date','$m','at']};}};date$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:rangeTo')];},d:['ceylon.time','Date','$m','rangeTo']};}};
})($_Date.$$.prototype);
}
return $_Date;
}
ex$.$init$$_Date=$init$$_Date;
$init$$_Date();
function today($3r8,$3r9){
if($3r8===undefined){$3r8=systemTime();}
if($3r9===undefined){$3r9=timeZone$timezone().system;}
return $3r8.instant().date($3r9);
}
ex$.today=today;
today.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:Clock}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:today')];},d:['ceylon.time','today']};};
function date($3ra,$3rb,$3rc){
return gregorianDate$internal($3ra,$3rb,$3rc);
}
ex$.date=date;
date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:date')];},d:['ceylon.time','date']};};
function DateRange(from,to,step,dateRange$){
$init$DateRange();
if(dateRange$===undefined)dateRange$=new DateRange.$$;
dateRange$.$$targs$$={Element$Range:{t:$_Date},StepBy$Range:{t:UnitOfDate$base}};
dateRange$.from_=from;
dateRange$.to_=to;
if(step===undefined){step=days$base();}
dateRange$.step_=step;
Range$base({Element$Range:{t:$_Date},StepBy$Range:{t:UnitOfDate$base}},dateRange$);
return dateRange$;
}
DateRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfDate$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];}}],sts:[{t:Range$base,a:{Element$Range:{t:$_Date},StepBy$Range:{t:UnitOfDate$base}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time','DateRange']};};
ex$.DateRange=DateRange;
function $init$DateRange(){
if(DateRange.$$===undefined){
m$1.initTypeProto(DateRange,'ceylon.time::DateRange',m$1.Basic,$init$Range$base());
(function(dateRange$){
m$1.atr$(dateRange$,'from',function(){return this.from_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];},d:['ceylon.time','DateRange','$at','from']};});
m$1.atr$(dateRange$,'to',function(){return this.to_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];},d:['ceylon.time','DateRange','$at','to']};});
m$1.atr$(dateRange$,'step',function(){return this.step_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfDate$base},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];},d:['ceylon.time','DateRange','$at','step']};});
m$1.atr$(dateRange$,'period',function(){
var dateRange$=this;
return dateRange$.from.periodTo(dateRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:period')];},d:['ceylon.time','DateRange','$at','period']};});
m$1.atr$(dateRange$,'duration',function(){
var dateRange$=this;
return Duration(dateRange$.to.dayOfEra.minus(dateRange$.from.dayOfEra).times(milliseconds$base().perDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:duration')];},d:['ceylon.time','DateRange','$at','duration']};});
dateRange$.equals=function($3rd){var dateRange$=this;
return dateRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateRange$,$3rd);};
dateRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:equals')];},d:['ceylon.time','DateRange','$m','equals']};};
m$1.atr$(dateRange$,'hash',function(){
var dateRange$=this;
return m$1.attrGetter(dateRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:hash')];},d:['ceylon.time','DateRange','$at','hash']};});
dateRange$.overlap=function($3re){
var dateRange$=this;
var $3rf=overlap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$3re.from,$3re.to]),{Value$overlap:{t:$_Date}});
var $3rg;
if(m$1.is$(($3rg=$3rf),m$1.mtt$([{t:$_Date},{t:$_Date}]))){
return DateRange($3rg.$_get(0),$3rg.$_get(1));
}
else{
return $3rg;
}
};dateRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:$_Date},StepBy$Range:{t:UnitOfDate$base}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:overlap')];},d:['ceylon.time','DateRange','$m','overlap']};};
dateRange$.gap=function($3rh){
var dateRange$=this;
var $3ri=gap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$3rh.from,$3rh.to]),{Value$gap:{t:$_Date}});
var $3rj=$3ri;
if(m$1.is$($3rj,m$1.mtt$([{t:$_Date},{t:$_Date}]))) {
return ($3rk=($3rj.$_get(0).successor.compare($3rj.$_get(1)).equals(m$1.smaller())?DateRange($3rj.$_get(0).successor,$3rj.$_get(1).predecessor):null),m$1.nn$($3rk)?$3rk:m$1.empty());
var $3rk;
}
else if(m$1.is$($3rj,{t:m$1.Empty})) {
return $3rj;
}
};dateRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:$_Date},StepBy$Range:{t:UnitOfDate$base}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:gap')];},d:['ceylon.time','DateRange','$m','gap']};};
dateRange$.iterator=function(){
var dateRange$=this;
function $3rl($$targs$$){
var $3rl$=new $3rl.$$;$3rl$.outer$=dateRange$;
$3rl$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:$_Date}},$3rl$);
$3rl$.$wgb6s9$3rn_=(0);
$3rl$.$prop$get$wgb6s9$3rn={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3rl,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};}};
$3rl$.$prop$get$wgb6s9$3rn.get=function(){return $wgb6s9$3rn};
return $3rl$;
};$3rl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}}],d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol']};};
function $init$$3rl(){
if($3rl.$$===undefined){
m$1.initTypeProto($3rl,'ceylon.time::DateRange.listIterator',m$1.Basic,m$1.Iterator);
(function($3rl$){
m$1.atr$($3rl$,'$wgb6s9$3rn',function(){return this.$wgb6s9$3rn_;},function($3ro){return this.$wgb6s9$3rn_=$3ro;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3rl,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};});
$3rl$.next=function(){
var $3rl$=this;
var $3rp=($3rq=(dateRange$.from.compare(dateRange$.to).equals(m$1.larger())?dateRange$.$wgb6s9$3rr(($3rs=$3rl$.$wgb6s9$3rn,$3rl$.$wgb6s9$3rn=$3rs.successor,$3rs)):null),m$1.nn$($3rq)?$3rq:dateRange$.$wgb6s9$3rt(($3ru=$3rl$.$wgb6s9$3rn,$3rl$.$wgb6s9$3rn=$3ru.successor,$3ru)));
var $3rq,$3rs,$3ru;
var $3rv=($3rw=((dateRange$.from.compare(dateRange$.to)!==m$1.larger())?($3rp.compare(dateRange$.to)!==m$1.larger()):null),m$1.nn$($3rw)?$3rw:($3rp.compare(dateRange$.to)!==m$1.smaller()));
var $3rw;
return ($3rx=($3rv?$3rp:null),m$1.nn$($3rx)?$3rx:m$1.finished());
var $3rx;
};$3rl$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$_Date},{t:m$1.Finished}]},ps:[],$cont:$3rl,pa:3,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$m','next']};};
})($3rl.$$.prototype);
}
return $3rl;
}
dateRange$.$init$$3rl=$init$$3rl;
$init$$3rl();
var $3ry;
function $3rm(){
if($3ry===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'122:8-129:8','DateRange.ceylon');
if($3ry===undefined){$3ry=m$1.INIT$;$3ry=$init$$3rl()({Element$Iterator:{t:$_Date}});$3ry.$crtmm$=$3rm.$crtmm$;}
return $3ry;
}
$3rm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$3rl()},$cont:dateRange$.iterator,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwom']};};
$prop$get$3rl=$3rm;
$3rm();
return $3rm();
};dateRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}},ps:[],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:iterator')];},d:['ceylon.time','DateRange','$m','iterator']};};
dateRange$.stepBy=function($3rz){
var dateRange$=this;
return ($3s0=($3rz.equals(dateRange$.step)?dateRange$:null),m$1.nn$($3s0)?$3s0:DateRange(dateRange$.from,dateRange$.to,$3rz));
var $3s0;
};dateRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfDate$base}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:stepBy')];},d:['ceylon.time','DateRange','$m','stepBy']};};
dateRange$.$wgb6s9$3rt$defs$jump=function($3s1){return 1;};
dateRange$.$wgb6s9$3rt=function($3s1){
var dateRange$=this;
if($3s1===undefined){$3s1=dateRange$.$wgb6s9$3rt$defs$jump($3s1);}
var $3s2=dateRange$.step;
if(m$1.is$($3s2,{t:UnitOfYear$base})) {
return dateRange$.from.plusYears($3s1);
}
else if(m$1.is$($3s2,{t:UnitOfMonth$base})) {
return dateRange$.from.plusMonths($3s1);
}
else if(m$1.is$($3s2,{t:UnitOfDay$base})) {
return dateRange$.from.plusDays($3s1);
}
};dateRange$.$wgb6s9$3rt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:nextByStep$x6l2vu')];},d:['ceylon.time','DateRange','$m','nextByStep$x6l2vu']};};
dateRange$.$wgb6s9$3rr$defs$jump=function($3s3){return 1;};
dateRange$.$wgb6s9$3rr=function($3s3){
var dateRange$=this;
if($3s3===undefined){$3s3=dateRange$.$wgb6s9$3rr$defs$jump($3s3);}
var $3s4=dateRange$.step;
if(m$1.is$($3s4,{t:UnitOfYear$base})) {
return dateRange$.from.minusYears($3s3);
}
else if(m$1.is$($3s4,{t:UnitOfMonth$base})) {
return dateRange$.from.minusMonths($3s3);
}
else if(m$1.is$($3s4,{t:UnitOfDay$base})) {
return dateRange$.from.minusDays($3s3);
}
};dateRange$.$wgb6s9$3rr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:previousByStep$lx41mm')];},d:['ceylon.time','DateRange','$m','previousByStep$lx41mm']};};
})(DateRange.$$.prototype);
}
return DateRange;
}
ex$.$init$DateRange=$init$DateRange;
$init$DateRange();
function DateTime(dateTime$){
ReadableDateTime$base(dateTime$);
DateTimeBehavior$base({TimeType$DateTimeBehavior:{t:Time},DateType$DateTimeBehavior:{t:$_Date},Element$DateTimeBehavior:{t:DateTime}},dateTime$);
m$1.Ordinal({Other$Ordinal:{t:DateTime}},dateTime$);
m$1.Enumerable({Other$Enumerable:{t:DateTime}},dateTime$);
m$1.Comparable({Other$Comparable:{t:DateTime}},dateTime$);
dateTime$.instant$defs$timeZone=function($3s5){return timeZone$timezone().system;};
}
DateTime.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDateTime$base},{t:DateTimeBehavior$base,a:{TimeType$DateTimeBehavior:{t:Time},DateType$DateTimeBehavior:{t:$_Date},Element$DateTimeBehavior:{t:DateTime}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:DateTime}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DateTime}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DateTime}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime')];},d:['ceylon.time','DateTime']};};
ex$.DateTime=DateTime;
function $init$DateTime(){
if(DateTime.$$===undefined){
m$1.initTypeProtoI(DateTime,'ceylon.time::DateTime',$init$ReadableDateTime$base(),$init$DateTimeBehavior$base(),m$1.Ordinal,m$1.Enumerable,m$1.Comparable);
(function(dateTime$){
dateTime$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:plus')];},d:['ceylon.time','DateTime','$m','plus']};}};dateTime$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:minus')];},d:['ceylon.time','DateTime','$m','minus']};}};dateTime$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodFrom')];},d:['ceylon.time','DateTime','$m','periodFrom']};}};dateTime$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodTo')];},d:['ceylon.time','DateTime','$m','periodTo']};}};dateTime$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:rangeTo')];},d:['ceylon.time','DateTime','$m','rangeTo']};}};dateTime$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:instant')];},d:['ceylon.time','DateTime','$m','instant']};}};
})(DateTime.$$.prototype);
}
return DateTime;
}
ex$.$init$DateTime=$init$DateTime;
$init$DateTime();
function dateTime($3s6,$3s7,$3s8,$3s9,$3sa,$3sb,$3sc){if($3s9===undefined){$3s9=(0);}
if($3sa===undefined){$3sa=(0);}
if($3sb===undefined){$3sb=(0);}
if($3sc===undefined){$3sc=(0);}
return ($3sd=date($3s6,$3s7,$3s8),$3se=time($3s9,$3sa,$3sb,$3sc),GregorianDateTime$internal($3sd,$3se));};
dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:dateTime')];},d:['ceylon.time','dateTime']};};
ex$.dateTime=dateTime;
var $3sd,$3se;
function DateTimeRange(from,to,step,dateTimeRange$){
$init$DateTimeRange();
if(dateTimeRange$===undefined)dateTimeRange$=new DateTimeRange.$$;
dateTimeRange$.$$targs$$={Element$Range:{t:DateTime},StepBy$Range:m$1.mut$([{t:UnitOfDate$base},{t:UnitOfTime$base}])};
dateTimeRange$.from_=from;
dateTimeRange$.to_=to;
if(step===undefined){step=milliseconds$base();}
dateTimeRange$.step_=step;
Range$base({Element$Range:{t:DateTime},StepBy$Range:m$1.mut$([{t:UnitOfDate$base},{t:UnitOfTime$base}])},dateTimeRange$);
return dateTimeRange$;
}
DateTimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];}}],sts:[{t:Range$base,a:{Element$Range:{t:DateTime},StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange')];},d:['ceylon.time','DateTimeRange']};};
ex$.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
if(DateTimeRange.$$===undefined){
m$1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',m$1.Basic,$init$Range$base());
(function(dateTimeRange$){
m$1.atr$(dateTimeRange$,'from',function(){return this.from_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];},d:['ceylon.time','DateTimeRange','$at','from']};});
m$1.atr$(dateTimeRange$,'to',function(){return this.to_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];},d:['ceylon.time','DateTimeRange','$at','to']};});
m$1.atr$(dateTimeRange$,'step',function(){return this.step_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];},d:['ceylon.time','DateTimeRange','$at','step']};});
m$1.atr$(dateTimeRange$,'period',function(){
var dateTimeRange$=this;
return dateTimeRange$.from.periodTo(dateTimeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:period')];},d:['ceylon.time','DateTimeRange','$at','period']};});
m$1.atr$(dateTimeRange$,'duration',function(){
var dateTimeRange$=this;
return Duration(dateTimeRange$.to.instant().millisecondsOfEpoch.minus(dateTimeRange$.from.instant().millisecondsOfEpoch));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:duration')];},d:['ceylon.time','DateTimeRange','$at','duration']};});
dateTimeRange$.equals=function($3sf){var dateTimeRange$=this;
return dateTimeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateTimeRange$,$3sf);};
dateTimeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:equals')];},d:['ceylon.time','DateTimeRange','$m','equals']};};
m$1.atr$(dateTimeRange$,'hash',function(){
var dateTimeRange$=this;
return m$1.attrGetter(dateTimeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:hash')];},d:['ceylon.time','DateTimeRange','$at','hash']};});
dateTimeRange$.overlap=function($3sg){
var dateTimeRange$=this;
var $3sh=overlap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$3sg.from,$3sg.to]),{Value$overlap:{t:DateTime}});
var $3si;
if(m$1.is$(($3si=$3sh),m$1.mtt$([{t:DateTime},{t:DateTime}]))){
return DateTimeRange(($3sj=$3si,$3sj.$_get(0)),$3sj.$_get(1),m$1.nn$($3sj.$_get(2))?$3sj.$_get(2):undefined);
}
else{
return $3si;
}
};dateTimeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:DateTime},StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:overlap')];},d:['ceylon.time','DateTimeRange','$m','overlap']};};
dateTimeRange$.gap=function($3sk){
var dateTimeRange$=this;
var $3sl=gap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$3sk.from,$3sk.to]),{Value$gap:{t:DateTime}});
var $3sm=$3sl;
if(m$1.is$($3sm,m$1.mtt$([{t:DateTime},{t:DateTime}]))) {
return ($3sn=($3sm.$_get(0).successor.compare($3sm.$_get(1)).equals(m$1.smaller())?DateTimeRange($3sm.$_get(0).successor,$3sm.$_get(1).predecessor):null),m$1.nn$($3sn)?$3sn:m$1.empty());
var $3sn;
}
else if(m$1.is$($3sm,{t:m$1.Empty})) {
return $3sm;
}
};dateTimeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:DateTime},StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:gap')];},d:['ceylon.time','DateTimeRange','$m','gap']};};
dateTimeRange$.iterator=function(){
var dateTimeRange$=this;
function $3so($$targs$$){
var $3so$=new $3so.$$;$3so$.outer$=dateTimeRange$;
$3so$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:DateTime}},$3so$);
$3so$.$wgb6s9$3sq_=(0);
$3so$.$prop$get$wgb6s9$3sq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3so,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};}};
$3so$.$prop$get$wgb6s9$3sq.get=function(){return $wgb6s9$3sq};
return $3so$;
};$3so.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateTimeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}}],d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg']};};
function $init$$3so(){
if($3so.$$===undefined){
m$1.initTypeProto($3so,'ceylon.time::DateTimeRange.listIterator',m$1.Basic,m$1.Iterator);
(function($3so$){
m$1.atr$($3so$,'$wgb6s9$3sq',function(){return this.$wgb6s9$3sq_;},function($3sr){return this.$wgb6s9$3sq_=$3sr;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$3so,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};});
$3so$.next=function(){
var $3so$=this;
var $3ss=($3st=(dateTimeRange$.from.compare(dateTimeRange$.to).equals(m$1.larger())?dateTimeRange$.$wgb6s9$3su(($3sv=$3so$.$wgb6s9$3sq,$3so$.$wgb6s9$3sq=$3sv.successor,$3sv)):null),m$1.nn$($3st)?$3st:dateTimeRange$.$wgb6s9$3sw(($3sx=$3so$.$wgb6s9$3sq,$3so$.$wgb6s9$3sq=$3sx.successor,$3sx)));
var $3st,$3sv,$3sx;
var $3sy=($3sz=((dateTimeRange$.from.compare(dateTimeRange$.to)!==m$1.larger())?($3ss.compare(dateTimeRange$.to)!==m$1.larger()):null),m$1.nn$($3sz)?$3sz:($3ss.compare(dateTimeRange$.to)!==m$1.smaller()));
var $3sz;
return ($3t0=($3sy?$3ss:null),m$1.nn$($3t0)?$3t0:m$1.finished());
var $3t0;
};$3so$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTime},{t:m$1.Finished}]},ps:[],$cont:$3so,pa:3,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$m','next']};};
})($3so.$$.prototype);
}
return $3so;
}
dateTimeRange$.$init$$3so=$init$$3so;
$init$$3so();
var $3t1;
function $3sp(){
if($3t1===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'121:8-128:8','DateTimeRange.ceylon');
if($3t1===undefined){$3t1=m$1.INIT$;$3t1=$init$$3so()({Element$Iterator:{t:DateTime}});$3t1.$crtmm$=$3sp.$crtmm$;}
return $3t1;
}
$3sp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$3so()},$cont:dateTimeRange$.iterator,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkh']};};
$prop$get$3so=$3sp;
$3sp();
return $3sp();
};dateTimeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}},ps:[],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:iterator')];},d:['ceylon.time','DateTimeRange','$m','iterator']};};
dateTimeRange$.stepBy=function($3t2){
var dateTimeRange$=this;
return ($3t3=($3t2.equals(dateTimeRange$.step)?dateTimeRange$:null),m$1.nn$($3t3)?$3t3:DateTimeRange(dateTimeRange$.from,dateTimeRange$.to,$3t2));
var $3t3;
};dateTimeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'step',mt:'prm',$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:stepBy')];},d:['ceylon.time','DateTimeRange','$m','stepBy']};};
dateTimeRange$.$wgb6s9$3sw$defs$jump=function($3t4){return 1;};
dateTimeRange$.$wgb6s9$3sw=function($3t4){
var dateTimeRange$=this;
if($3t4===undefined){$3t4=dateTimeRange$.$wgb6s9$3sw$defs$jump($3t4);}
var $3t5;
if(m$1.is$(($3t5=dateTimeRange$.step),{t:UnitOfDate$base})){
var $3t6=$3t5;
if(m$1.is$($3t6,{t:UnitOfYear$base})) {
return dateTimeRange$.from.plusYears($3t4);
}
else if(m$1.is$($3t6,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.plusMonths($3t4);
}
else if(m$1.is$($3t6,{t:UnitOfDay$base})) {
return dateTimeRange$.from.plusDays($3t4);
}
}
else{
var $3t7=$3t5;
if(m$1.is$($3t7,{t:UnitOfHour$base})) {
return dateTimeRange$.from.plusHours($3t4);
}
else if(m$1.is$($3t7,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.plusMinutes($3t4);
}
else if(m$1.is$($3t7,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.plusSeconds($3t4);
}
else if(m$1.is$($3t7,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.plusMilliseconds($3t4);
}
}
};dateTimeRange$.$wgb6s9$3sw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:nextByStep$cusa3f')];},d:['ceylon.time','DateTimeRange','$m','nextByStep$cusa3f']};};
dateTimeRange$.$wgb6s9$3su$defs$jump=function($3t8){return 1;};
dateTimeRange$.$wgb6s9$3su=function($3t8){
var dateTimeRange$=this;
if($3t8===undefined){$3t8=dateTimeRange$.$wgb6s9$3su$defs$jump($3t8);}
var $3t9;
if(m$1.is$(($3t9=dateTimeRange$.step),{t:UnitOfDate$base})){
var $3ta=$3t9;
if(m$1.is$($3ta,{t:UnitOfYear$base})) {
return dateTimeRange$.from.minusYears($3t8);
}
else if(m$1.is$($3ta,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.minusMonths($3t8);
}
else if(m$1.is$($3ta,{t:UnitOfDay$base})) {
return dateTimeRange$.from.minusDays($3t8);
}
}
else{
var $3tb=$3t9;
if(m$1.is$($3tb,{t:UnitOfHour$base})) {
return dateTimeRange$.from.minusHours($3t8);
}
else if(m$1.is$($3tb,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.minusMinutes($3t8);
}
else if(m$1.is$($3tb,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.minusSeconds($3t8);
}
else if(m$1.is$($3tb,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.minusMilliseconds($3t8);
}
}
};dateTimeRange$.$wgb6s9$3su.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:previousByStep$o49bcn')];},d:['ceylon.time','DateTimeRange','$m','previousByStep$o49bcn']};};
})(DateTimeRange.$$.prototype);
}
return DateTimeRange;
}
ex$.$init$DateTimeRange=$init$DateTimeRange;
$init$DateTimeRange();
function Duration(milliseconds,duration$){
$init$Duration();
if(duration$===undefined)duration$=new Duration.$$;
duration$.$$targs$$={Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}};
duration$.milliseconds_=milliseconds;
ReadableDuration$base(duration$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}},duration$);
return duration$;
}
Duration.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];}}],sts:[{t:ReadableDuration$base},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration')];},d:['ceylon.time','Duration']};};
ex$.Duration=Duration;
function $init$Duration(){
if(Duration.$$===undefined){
m$1.initTypeProto(Duration,'ceylon.time::Duration',m$1.Basic,$init$ReadableDuration$base(),m$1.Scalable);
(function(duration$){
m$1.atr$(duration$,'milliseconds',function(){return this.milliseconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];},d:['ceylon.time','Duration','$at','milliseconds']};});
m$1.atr$(duration$,'period',function(){
var duration$=this;
return ($3tc=duration$.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,$3tc));
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Duration,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:period')];},d:['ceylon.time','Duration','$at','period']};});
m$1.atr$(duration$,'string',function(){
var duration$=this;
return "".plus(duration$.milliseconds.string).plus("ms");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:string')];},d:['ceylon.time','Duration','$at','string']};});
duration$.equals=function($3td){
var duration$=this;
var $3te;
if(m$1.is$(($3te=$3td),{t:Duration})){
return ((duration$.milliseconds).valueOf()==($3te.milliseconds).valueOf());
}
function $3tf(){return $3td;}
return false;
};duration$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:equals')];},d:['ceylon.time','Duration','$m','equals']};};
m$1.atr$(duration$,'hash',function(){
var duration$=this;
var $3tg=(11);
var $3th=(3);
return $3tg.times($3th).plus(duration$.milliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:hash')];},d:['ceylon.time','Duration','$at','hash']};});duration$.scale=function($3ti){var duration$=this;
return Duration($3ti.times(duration$.milliseconds));};
duration$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:scale')];},d:['ceylon.time','Duration','$m','scale']};};
})(Duration.$$.prototype);
}
return Duration;
}
ex$.$init$Duration=$init$Duration;
$init$Duration();
var $3tc;
function now($3tj){
if($3tj===undefined){$3tj=null;}
var $3tk;
if(m$1.nn$(($3tk=$3tj))){
return $3tk.instant();
}
function $3tl(){return $3tj;}
return systemTime().instant();
}
ex$.now=now;
now.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Clock}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:now')];},d:['ceylon.time','now']};};
function Instant(millisecondsOfEpoch,instant$){
$init$Instant();
if(instant$===undefined)instant$=new Instant.$$;
instant$.$$targs$$={Other$Comparable:{t:Instant}};
instant$.$$targs$$={Other$Enumerable:{t:Instant}};
instant$.millisecondsOfEpoch_=millisecondsOfEpoch;
ReadableInstant$base(instant$);
m$1.Comparable({Other$Comparable:{t:Instant}},instant$);
m$1.Enumerable({Other$Enumerable:{t:Instant}},instant$);
return instant$;
}
Instant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'millisecondsOfEpoch',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];}}],sts:[{t:ReadableInstant$base},{t:m$1.Comparable,a:{Other$Comparable:{t:Instant}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Instant}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant')];},d:['ceylon.time','Instant']};};
ex$.Instant=Instant;
function $init$Instant(){
if(Instant.$$===undefined){
m$1.initTypeProto(Instant,'ceylon.time::Instant',m$1.Basic,$init$ReadableInstant$base(),m$1.Comparable,m$1.Enumerable);
(function(instant$){
m$1.atr$(instant$,'millisecondsOfEpoch',function(){return this.millisecondsOfEpoch_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};});
instant$.plus=function($3tm){
var instant$=this;
var $3tn=$3tm;
if(m$1.is$($3tn,{t:Duration})) {
return Instant(instant$.millisecondsOfEpoch.plus($3tn.milliseconds));
}
else if(m$1.is$($3tn,{t:Period})) {
return instant$.dateTime().plus($3tn).instant();
}
};instant$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:plus')];},d:['ceylon.time','Instant','$m','plus']};};
instant$.minus=function($3to){
var instant$=this;
var $3tp=$3to;
if(m$1.is$($3tp,{t:Duration})) {
return Instant(instant$.millisecondsOfEpoch.minus($3tp.milliseconds));
}
else if(m$1.is$($3tp,{t:Period})) {
return instant$.dateTime().minus($3tp).instant();
}
};instant$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:minus')];},d:['ceylon.time','Instant','$m','minus']};};
instant$.compare=function($3tq){
var instant$=this;
return instant$.millisecondsOfEpoch.compare($3tq.millisecondsOfEpoch);
};instant$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:compare')];},d:['ceylon.time','Instant','$m','compare']};};
instant$.dateTime$defs$timeZone=function($3tr){return timeZone$timezone().system;};
instant$.dateTime=function($3tr){
var instant$=this;
if($3tr===undefined){$3tr=instant$.dateTime$defs$timeZone($3tr);}
return GregorianDateTime$internal(instant$.date($3tr),instant$.time($3tr));
};instant$.dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:dateTime')];},d:['ceylon.time','Instant','$m','dateTime']};};
instant$.date$defs$timeZone=function($3ts){return timeZone$timezone().system;};
instant$.date=function($3ts){
var instant$=this;
if($3ts===undefined){$3ts=instant$.date$defs$timeZone($3ts);}
return GregorianDate$internal(unixTime$chronology().fixedFromTime(instant$.millisecondsOfEpoch.plus($3ts.offset(instant$))));
};instant$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:date')];},d:['ceylon.time','Instant','$m','date']};};
instant$.time$defs$timeZone=function($3tt){return timeZone$timezone().system;};
instant$.time=function($3tt){
var instant$=this;
if($3tt===undefined){$3tt=instant$.time$defs$timeZone($3tt);}
return TimeOfDay$internal(unixTime$chronology().timeOfDay(instant$.millisecondsOfEpoch.plus($3tt.offset(instant$))));
};instant$.time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:time')];},d:['ceylon.time','Instant','$m','time']};};
instant$.zoneDateTime$defs$timeZone=function($3tu){return timeZone$timezone().system;};
instant$.zoneDateTime=function($3tu){
var instant$=this;
if($3tu===undefined){$3tu=instant$.zoneDateTime$defs$timeZone($3tu);}
return GregorianZonedDateTime$internal(instant$,$3tu);
};instant$.zoneDateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:zoneDateTime')];},d:['ceylon.time','Instant','$m','zoneDateTime']};};
instant$.durationTo=function($3tv){
var instant$=this;
return Duration($3tv.millisecondsOfEpoch.minus(instant$.millisecondsOfEpoch));
};instant$.durationTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationTo')];},d:['ceylon.time','Instant','$m','durationTo']};};
instant$.durationFrom=function($3tw){
var instant$=this;
return Duration(instant$.millisecondsOfEpoch.minus($3tw.millisecondsOfEpoch));
};instant$.durationFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationFrom')];},d:['ceylon.time','Instant','$m','durationFrom']};};
instant$.equals=function($3tx){
var instant$=this;
var $3ty;
if(m$1.is$(($3ty=$3tx),{t:Instant})){
return ((instant$.millisecondsOfEpoch).valueOf()==($3ty.millisecondsOfEpoch).valueOf());
}
function $3tz(){return $3tx;}
return false;
};instant$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:equals')];},d:['ceylon.time','Instant','$m','equals']};};
m$1.atr$(instant$,'hash',function(){
var instant$=this;
return (31).plus(instant$.millisecondsOfEpoch.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:hash')];},d:['ceylon.time','Instant','$at','hash']};});m$1.atr$(instant$,'string',function(){
var instant$=this;
return instant$.zoneDateTime(timeZone$timezone().utc).string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:string')];},d:['ceylon.time','Instant','$at','string']};});
instant$.neighbour=function($3u0){var instant$=this;
return Instant(instant$.millisecondsOfEpoch.plus($3u0));};
instant$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','neighbour']};};
instant$.offset=function($3u1){var instant$=this;
return instant$.millisecondsOfEpoch.minus($3u1.millisecondsOfEpoch);};
instant$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','offset']};};
})(Instant.$$.prototype);
}
return Instant;
}
ex$.$init$Instant=$init$Instant;
$init$Instant();
function AbstractDate$internal(dayOfEra,abstractDate$){
$init$AbstractDate$internal();
if(abstractDate$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.internal::AbstractDate"),'?','?')
abstractDate$.dayOfEra_=dayOfEra;
$_Date(abstractDate$);
return abstractDate$;
}
AbstractDate$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'dayOfEra',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:AbstractDate:$at:dayOfEra')];}}],sts:[{t:$_Date}],pa:257,an:function(){return[m$1.doc("Common behaviors for _Date_ types.")];},d:['ceylon.time.internal','AbstractDate']};};
ex$.AbstractDate$internal=AbstractDate$internal;
function $init$AbstractDate$internal(){
if(AbstractDate$internal.$$===undefined){
m$1.initTypeProto(AbstractDate$internal,'ceylon.time.internal::AbstractDate',m$1.Basic,$init$$_Date());
(function(abstractDate$){
m$1.atr$(abstractDate$,'dayOfEra',function(){return this.dayOfEra_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:AbstractDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:AbstractDate:$at:dayOfEra')];},d:['ceylon.time.internal','AbstractDate','$at','dayOfEra']};});
abstractDate$.compare=function($3u2){
var abstractDate$=this;
return abstractDate$.dayOfEra.compare($3u2.dayOfEra);
};abstractDate$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:AbstractDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:AbstractDate:$m:compare')];},d:['ceylon.time.internal','AbstractDate','$m','compare']};};
abstractDate$.equals=function($3u3){
var abstractDate$=this;
var $3u4;
if(m$1.is$(($3u4=$3u3),{t:AbstractDate$internal})){
return abstractDate$.dayOfEra.equals($3u4.dayOfEra);
}
function $3u5(){return $3u3;}
return false;
};abstractDate$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AbstractDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:AbstractDate:$m:equals')];},d:['ceylon.time.internal','AbstractDate','$m','equals']};};
m$1.atr$(abstractDate$,'hash',function(){
var abstractDate$=this;
var $3u6=(31);
var $3u7=(7);
return $3u6.times($3u7).plus(abstractDate$.dayOfEra.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:AbstractDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:AbstractDate:$at:hash')];},d:['ceylon.time.internal','AbstractDate','$at','hash']};});
})(AbstractDate$internal.$$.prototype);
}
return AbstractDate$internal;
}
ex$.$init$AbstractDate$internal=$init$AbstractDate$internal;
$init$AbstractDate$internal();
function GregorianDate$internal($wgb6s9$3u8,gregorianDate$){
$init$GregorianDate$internal();
if(gregorianDate$===undefined)gregorianDate$=new GregorianDate$internal.$$;
gregorianDate$.$wgb6s9$3u8_=$wgb6s9$3u8;
AbstractDate$internal(gregorianDate$.$wgb6s9$3u8,gregorianDate$);
return gregorianDate$;
}
GregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AbstractDate$internal},ps:[{nm:'dayOfEra',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate')];},d:['ceylon.time.internal','GregorianDate']};};
ex$.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
if(GregorianDate$internal.$$===undefined){
m$1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',$init$AbstractDate$internal());
(function(gregorianDate$){
m$1.atr$(gregorianDate$,'$wgb6s9$3u8',function(){return this.$wgb6s9$3u8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,d:['ceylon.time.internal','GregorianDate','$at','dayOfEra$launx3']};});
m$1.atr$(gregorianDate$,'year',function(){
var gregorianDate$=this;
return gregorian$chronology().yearFrom(gregorianDate$.$wgb6s9$3u8);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','year']};});
m$1.atr$(gregorianDate$,'month',function(){
var gregorianDate$=this;
return monthOf$base(gregorian$chronology().monthFrom(gregorianDate$.$wgb6s9$3u8));
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','month']};});
m$1.atr$(gregorianDate$,'day',function(){
var gregorianDate$=this;
return gregorian$chronology().dayFrom(gregorianDate$.$wgb6s9$3u8);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:day')];},d:['ceylon.time.internal','GregorianDate','$at','day']};});
m$1.atr$(gregorianDate$,'leapYear',function(){
var gregorianDate$=this;
return gregorian$chronology().leapYear(gregorianDate$.year);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:leapYear')];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};});
m$1.atr$(gregorianDate$,'dayOfYear',function(){
var gregorianDate$=this;
return gregorianDate$.month.firstDayOfYear(gregorianDate$.leapYear).plus(gregorianDate$.day).minus(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};});
m$1.atr$(gregorianDate$,'predecessor',function(){
var gregorianDate$=this;
return gregorianDate$.minusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:predecessor')];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};});
m$1.atr$(gregorianDate$,'successor',function(){
var gregorianDate$=this;
return gregorianDate$.plusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:successor')];},d:['ceylon.time.internal','GregorianDate','$at','successor']};});
m$1.atr$(gregorianDate$,'dayOfWeek',function(){
var gregorianDate$=this;
return dayOfWeek$base(gregorian$chronology().dayOfWeekFrom(gregorianDate$.$wgb6s9$3u8));
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};});
gregorianDate$.plusDays=function($3u9){
var gregorianDate$=this;
if((($3u9).valueOf()==(0).valueOf())){
return gregorianDate$;
}
return GregorianDate$internal(gregorianDate$.$wgb6s9$3u8.plus($3u9));
};gregorianDate$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusDays')];},d:['ceylon.time.internal','GregorianDate','$m','plusDays']};};
gregorianDate$.minusDays=function($3ua){var gregorianDate$=this;
return gregorianDate$.plusDays((-$3ua));};
gregorianDate$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusDays')];},d:['ceylon.time.internal','GregorianDate','$m','minusDays']};};
gregorianDate$.plusWeeks=function($3ub){var gregorianDate$=this;
return gregorianDate$.plusDays($3ub.times(days$base().perWeek));};
gregorianDate$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','plusWeeks']};};
gregorianDate$.minusWeeks=function($3uc){var gregorianDate$=this;
return gregorianDate$.plusWeeks((-$3uc));};
gregorianDate$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','minusWeeks']};};
gregorianDate$.plusMonths=function($3ud){
var gregorianDate$=this;
if((($3ud).valueOf()==(0).valueOf())){
return gregorianDate$;
}
var $3ue=gregorianDate$.month.add($3ud);
var $3uf=gregorianDate$.year.plus($3ue.years);
var $3ug=$3ue.month.numberOfDays(gregorian$chronology().leapYear($3uf));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$3uf,$3ue.month.integer,m$1.min(m$1.tpl$([$3ug,gregorianDate$.day]),{Absent$min:{t:m$1.Nothing},Value$min:{t:m$1.Integer}})])));
};gregorianDate$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','plusMonths']};};
gregorianDate$.minusMonths=function($3uh){var gregorianDate$=this;
return gregorianDate$.plusMonths((-$3uh));};
gregorianDate$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','minusMonths']};};
gregorianDate$.plusYears=function($3ui){
var gregorianDate$=this;
if((($3ui).valueOf()==(0).valueOf())){
return gregorianDate$;
}
var $3uj=gregorianDate$.year.plus($3ui);
var $3uk=gregorianDate$.month.numberOfDays(gregorian$chronology().leapYear($3uj));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$3uj,gregorianDate$.month.integer,($3ul=[gregorianDate$.day,$3uk].$sa$(m$1.mut$([{t:m$1.Integer},{t:m$1.Integer}]),1),m$1.min($3ul,{Absent$min:{t:m$1.Nothing},Value$min:{t:m$1.Integer}}))])));
var $3ul;
};gregorianDate$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusYears')];},d:['ceylon.time.internal','GregorianDate','$m','plusYears']};};
gregorianDate$.minusYears=function($3um){var gregorianDate$=this;
return gregorianDate$.plusYears((-$3um));};
gregorianDate$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusYears')];},d:['ceylon.time.internal','GregorianDate','$m','minusYears']};};
gregorianDate$.withDay=function($3un){
var gregorianDate$=this;
if((($3un).valueOf()==(gregorianDate$.day).valueOf())){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,gregorianDate$.month.integer,$3un]));
return GregorianDate$internal(gregorianDate$.$wgb6s9$3u8.minus(gregorianDate$.day).plus($3un));
};gregorianDate$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withDay')];},d:['ceylon.time.internal','GregorianDate','$m','withDay']};};
gregorianDate$.withMonth=function($3uo){
var gregorianDate$=this;
var $3up=monthOf$base($3uo);
if($3up.equals(gregorianDate$.month)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,$3up.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([gregorianDate$.year,$3up.integer,gregorianDate$.day])));
};gregorianDate$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withMonth')];},d:['ceylon.time.internal','GregorianDate','$m','withMonth']};};
gregorianDate$.withYear=function($3uq){
var gregorianDate$=this;
if((($3uq).valueOf()==(gregorianDate$.year).valueOf())){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([$3uq,gregorianDate$.month.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$3uq,gregorianDate$.month.integer,gregorianDate$.day])));
};gregorianDate$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withYear')];},d:['ceylon.time.internal','GregorianDate','$m','withYear']};};
gregorianDate$.withWeekOfYear=function($3ur){
var gregorianDate$=this;
var $3us=gregorianDate$.weekOfYear;
if((($3ur).valueOf()==($3us).valueOf())){
return gregorianDate$;
}
m$1.asrt$((($3ut=$3ur,$3ut.compare((0))!==m$1.smaller()&&$3ut.compare((53))!==m$1.larger())),"Assertion failed: \'0 <= weekOfYear <= 53\' at GregorianDate.ceylon (162:14-162:36)",'162:8-162:37','GregorianDate.ceylon');
return gregorianDate$.plusWeeks($3ur.minus($3us));
};gregorianDate$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weekOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDate','$m','withWeekOfYear']};};
gregorianDate$.withDayOfWeek=function($3uu){
var gregorianDate$=this;
if($3uu.equals(gregorianDate$.dayOfWeek)){
return gregorianDate$;
}
return gregorianDate$.plusDays($3uu.integer.minus(gregorianDate$.dayOfWeek.integer));
};gregorianDate$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfWeek']};};
gregorianDate$.withDayOfYear=function($3uv){
var gregorianDate$=this;
if((($3uv).valueOf()==(gregorianDate$.dayOfYear).valueOf())){
return gregorianDate$;
}
var $3uw=($3ux=(gregorianDate$.leapYear?days$base().perLeapYear:null),m$1.nn$($3ux)?$3ux:days$base().perYear);
var $3ux;
m$1.asrt$((($3uy=$3uv,$3uy.compare((1))!==m$1.smaller()&&$3uy.compare($3uw)!==m$1.larger())),"Assertion failed: \'1 <= dayOfYear <= lastDayOfYear\' at GregorianDate.ceylon (180:14-180:46)",'180:8-180:47','GregorianDate.ceylon');
return gregorianDate$.plusDays($3uv.minus(gregorianDate$.dayOfYear));
};gregorianDate$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfYear']};};
gregorianDate$.plus=function($3uz){
var gregorianDate$=this;
return ($3v0=$3uz.years.times(months$base().perYear).plus($3uz.months),$3v1=$3uz.days,gregorianDate$.$wgb6s9$3v2($3v0,$3v1));
var $3v0,$3v1;
};gregorianDate$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plus')];},d:['ceylon.time.internal','GregorianDate','$m','plus']};};
gregorianDate$.minus=function($3v3){
var gregorianDate$=this;
return ($3v4=(-$3v3.years).times(months$base().perYear).plus((-$3v3.months)),$3v5=(-$3v3.days),gregorianDate$.$wgb6s9$3v2($3v4,$3v5));
var $3v4,$3v5;
};gregorianDate$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minus')];},d:['ceylon.time.internal','GregorianDate','$m','minus']};};
gregorianDate$.$wgb6s9$3v2=function($3v6,$3v7){
var gregorianDate$=this;
var $3v8=gregorianDate$;
if(($3v7<0)){
$3v8=$3v8.minusDays((-$3v7));
}
if(($3v6<0)){
$3v8=$3v8.minusMonths((-$3v6));
}
if(($3v6>0)){
$3v8=$3v8.plusMonths($3v6);
}
if(($3v7>0)){
$3v8=$3v8.plusDays($3v7);
}
return $3v8;
};gregorianDate$.$wgb6s9$3v2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:addPeriod$2sk1dc')];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod$2sk1dc']};};
m$1.atr$(gregorianDate$,'weekOfYear',function(){
var gregorianDate$=this;
function $3v9($3va){
var $3vb=gregorianDate$.withDay(1).withMonth(january$base()).withYear($3va);
var $3vc=$3vb.dayOfWeek.integer.minus(monday$base().integer);
return $3vb.minusDays($3vc).plusDays((($3vc>=4))?weekdays$base().size:(0));
};$3v9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek$7b8vj7']};};
var $3vd=function($3ve){return $3v9($3ve.plus(1)).minusDays(1);};
$3vd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek$ekrdod']};};
var $3vf=$3v9(gregorianDate$.year);
var $3vg=(1);
if(gregorianDate$.compare($3vf).equals(m$1.smaller())){
var $3vh=$3v9(gregorianDate$.year.minus(1));
var $3vi=gregorianDate$.offset($3vh).plus(1);
$3vg=$3vi.divided(weekdays$base().size).plus(($3vj=(($3vi.remainder(weekdays$base().size)>0)?1:null),m$1.nn$($3vj)?$3vj:(0)));
var $3vj;
}
else{
var $3vk=$3vd(gregorianDate$.year);
if((gregorianDate$.compare($3vk)!==m$1.larger())){
var $3vl=gregorianDate$.offset($3vf).plus(1);
$3vg=$3vl.divided(weekdays$base().size).plus(($3vm=(($3vl.remainder(weekdays$base().size)>0)?1:null),m$1.nn$($3vm)?$3vm:(0)));
var $3vm;
}
}
return $3vg;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear']};});gregorianDate$.at=function($3vn){var gregorianDate$=this;
return GregorianDateTime$internal(gregorianDate$,$3vn);};
gregorianDate$.at.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns new [[DateTime]] value.")];},d:['ceylon.time.internal','GregorianDate','$m','at']};};
m$1.atr$(gregorianDate$,'string',function(){
var gregorianDate$=this;
return "".plus(gregorianDate$.year.string.padLeading(4,m$1.Character(48,true))).plus("-").plus(gregorianDate$.month.integer.string.padLeading(2,m$1.Character(48,true))).plus("-").plus(gregorianDate$.day.string.padLeading(2,m$1.Character(48,true))).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:string')];},d:['ceylon.time.internal','GregorianDate','$at','string']};});
gregorianDate$.periodFrom=function($3vo){
var gregorianDate$=this;
var $3vp=($3vq=(gregorianDate$.compare($3vo).equals(m$1.smaller())?gregorianDate$:null),m$1.nn$($3vq)?$3vq:$3vo);
var $3vq;
var $3vr=($3vs=(gregorianDate$.compare($3vo).equals(m$1.smaller())?$3vo:null),m$1.nn$($3vs)?$3vs:gregorianDate$);
var $3vs;
var $3vt=$3vp.plusYears(1);
var $3vu=(0);
while(($3vt.compare($3vr)!==m$1.larger())){
$3vt=$3vt.plusYears(1);
($3vu=$3vu.plus(1));
}
var $3vv=(0);
$3vt=$3vp.plusYears($3vu).plusMonths($3vv.plus(1));
while(($3vt.compare($3vr)!==m$1.larger())){
($3vv=$3vv.plus(1));
$3vt=$3vp.plusYears($3vu).plusMonths($3vv.plus(1));
}
$3vt=$3vp.plusYears($3vu).plusMonths($3vv).plusDays(1);
var $3vw=(0);
while(($3vt.compare($3vr)!==m$1.larger())){
$3vt=$3vt.plusDays(1);
($3vw=$3vw.plus(1));
}
var $3vx=$3vo.compare(gregorianDate$).equals(m$1.smaller());
return ($3vy=($3vz=($3vx?$3vu:null),m$1.nn$($3vz)?$3vz:(-$3vu)),$3w0=($3w1=($3vx?$3vv:null),m$1.nn$($3w1)?$3w1:(-$3vv)),$3w2=($3w3=($3vx?$3vw:null),m$1.nn$($3w3)?$3w3:(-$3vw)),Period($3vy,$3w0,$3w2,undefined,undefined,undefined,undefined));
var $3vy,$3vz,$3w0,$3w1,$3w2,$3w3;
};gregorianDate$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom']};};
gregorianDate$.periodTo=function($3w4){var gregorianDate$=this;
return $3w4.periodFrom(gregorianDate$);};
gregorianDate$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodTo')];},d:['ceylon.time.internal','GregorianDate','$m','periodTo']};};
gregorianDate$.rangeTo=function($3w5){var gregorianDate$=this;
return DateRange(gregorianDate$,$3w5);};
gregorianDate$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDate','$m','rangeTo']};};
gregorianDate$.neighbour=function($3w6){var gregorianDate$=this;
return gregorianDate$.plusDays($3w6);};
gregorianDate$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','neighbour']};};
gregorianDate$.offset=function($3w7){var gregorianDate$=this;
return gregorianDate$.$wgb6s9$3u8.minus($3w7.dayOfEra);};
gregorianDate$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','offset']};};
})(GregorianDate$internal.$$.prototype);
}
return GregorianDate$internal;
}
ex$.$init$GregorianDate$internal=$init$GregorianDate$internal;
$init$GregorianDate$internal();
function gregorianDate$internal($3w8,$3w9,$3wa){
gregorian$chronology().checkDate(m$1.tpl$([$3w8,monthOf$base($3w9).integer,$3wa]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$3w8,monthOf$base($3w9).integer,$3wa])));
}
ex$.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("Year number of the date")];}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]},an:function(){return[m$1.doc("Month of the year")];}},{nm:'day',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("Day of month")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gregorianDate')];},d:['ceylon.time.internal','gregorianDate']};};
function GregorianDateTime$internal(date,time,gregorianDateTime$){
$init$GregorianDateTime$internal();
if(gregorianDateTime$===undefined)gregorianDateTime$=new GregorianDateTime$internal.$$;
gregorianDateTime$.date_=date;
gregorianDateTime$.time_=time;
DateTime(gregorianDateTime$);
return gregorianDateTime$;
}
GregorianDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];}},{nm:'time',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];}}],sts:[{t:DateTime}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime')];},d:['ceylon.time.internal','GregorianDateTime']};};
ex$.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
if(GregorianDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',m$1.Basic,$init$DateTime());
(function(gregorianDateTime$){
m$1.atr$(gregorianDateTime$,'date',function(){return this.date_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};});
m$1.atr$(gregorianDateTime$,'time',function(){return this.time_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};});
gregorianDateTime$.compare=function($3wb){
var gregorianDateTime$=this;
return ($3wc=((!gregorianDateTime$.date.equals($3wb.date))?gregorianDateTime$.date.compare($3wb.date):null),m$1.nn$($3wc)?$3wc:gregorianDateTime$.time.compare($3wb.time));
var $3wc;
};gregorianDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianDateTime','$m','compare']};};
m$1.atr$(gregorianDateTime$,'day',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:day')];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};});
m$1.atr$(gregorianDateTime$,'dayOfWeek',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianDateTime$,'dayOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianDateTime$,'dayOfEra',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianDateTime$,'year',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};});
m$1.atr$(gregorianDateTime$,'leapYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};});
m$1.atr$(gregorianDateTime$,'weekOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianDateTime$,'month',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};});
m$1.atr$(gregorianDateTime$,'hours',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};});
m$1.atr$(gregorianDateTime$,'milliseconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};});
m$1.atr$(gregorianDateTime$,'millisecondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianDateTime$,'minutes',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};});
m$1.atr$(gregorianDateTime$,'minutesOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianDateTime$,'seconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};});
m$1.atr$(gregorianDateTime$,'secondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};});
gregorianDateTime$.plusYears=function($3wd){var gregorianDateTime$=this;
return ($3we=gregorianDateTime$.date.plusYears($3wd),$3wf=gregorianDateTime$.time,GregorianDateTime$internal($3we,$3wf));};
gregorianDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusYears']};};
gregorianDateTime$.minusYears=function($3wg){var gregorianDateTime$=this;
return ($3wh=gregorianDateTime$.date.minusYears($3wg),$3wi=gregorianDateTime$.time,GregorianDateTime$internal($3wh,$3wi));};
gregorianDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusYears']};};
gregorianDateTime$.plusMonths=function($3wj){var gregorianDateTime$=this;
return ($3wk=gregorianDateTime$.date.plusMonths($3wj),$3wl=gregorianDateTime$.time,GregorianDateTime$internal($3wk,$3wl));};
gregorianDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMonths']};};
gregorianDateTime$.minusMonths=function($3wm){var gregorianDateTime$=this;
return gregorianDateTime$.plusMonths((-$3wm));};
gregorianDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMonths']};};
gregorianDateTime$.plusWeeks=function($3wn){var gregorianDateTime$=this;
return ($3wo=gregorianDateTime$.date.plusWeeks($3wn),$3wp=gregorianDateTime$.time,GregorianDateTime$internal($3wo,$3wp));};
gregorianDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusWeeks']};};
gregorianDateTime$.minusWeeks=function($3wq){var gregorianDateTime$=this;
return gregorianDateTime$.plusWeeks((-$3wq));};
gregorianDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusWeeks']};};
gregorianDateTime$.plusDays=function($3wr){var gregorianDateTime$=this;
return ($3ws=gregorianDateTime$.date.plusDays($3wr),$3wt=gregorianDateTime$.time,GregorianDateTime$internal($3ws,$3wt));};
gregorianDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusDays']};};
gregorianDateTime$.minusDays=function($3wu){var gregorianDateTime$=this;
return gregorianDateTime$.plusDays((-$3wu));};
gregorianDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusDays']};};
gregorianDateTime$.plusHours=function($3wv){
var gregorianDateTime$=this;
if((($3wv).valueOf()==(0).valueOf())){
return gregorianDateTime$;
}
var $3ww=($3wx=(($3wv>=0)?1:null),m$1.nn$($3wx)?$3wx:(-1));
var $3wx;
return ($3wy=$3wv.times($3ww),$3wz=$3ww,gregorianDateTime$.$wgb6s9$3x0($3wy,undefined,undefined,undefined,$3wz));
var $3wy,$3wz;
};gregorianDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours']};};
gregorianDateTime$.minusHours=function($3x1){var gregorianDateTime$=this;
return gregorianDateTime$.plusHours((-$3x1));};
gregorianDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusHours']};};
gregorianDateTime$.plusMinutes=function($3x2){
var gregorianDateTime$=this;
if((($3x2).valueOf()==(0).valueOf())){
return gregorianDateTime$;
}
var $3x3=($3x4=(($3x2>=0)?1:null),m$1.nn$($3x4)?$3x4:(-1));
var $3x4;
return ($3x5=$3x2.times($3x3),$3x6=$3x3,gregorianDateTime$.$wgb6s9$3x0(undefined,$3x5,undefined,undefined,$3x6));
var $3x5,$3x6;
};gregorianDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes']};};
gregorianDateTime$.minusMinutes=function($3x7){var gregorianDateTime$=this;
return gregorianDateTime$.plusMinutes((-$3x7));};
gregorianDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMinutes']};};
gregorianDateTime$.plusSeconds=function($3x8){
var gregorianDateTime$=this;
if((($3x8).valueOf()==(0).valueOf())){
return gregorianDateTime$;
}
var $3x9=($3xa=(($3x8>=0)?1:null),m$1.nn$($3xa)?$3xa:(-1));
var $3xa;
return ($3xb=$3x8.times($3x9),$3xc=$3x9,gregorianDateTime$.$wgb6s9$3x0(undefined,undefined,$3xb,undefined,$3xc));
var $3xb,$3xc;
};gregorianDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds']};};
gregorianDateTime$.minusSeconds=function($3xd){var gregorianDateTime$=this;
return gregorianDateTime$.plusSeconds((-$3xd));};
gregorianDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusSeconds']};};
gregorianDateTime$.plusMilliseconds=function($3xe){
var gregorianDateTime$=this;
if((($3xe).valueOf()==(0).valueOf())){
return gregorianDateTime$;
}
var $3xf=($3xg=(($3xe>=0)?1:null),m$1.nn$($3xg)?$3xg:(-1));
var $3xg;
return ($3xh=$3xe.times($3xf),$3xi=$3xf,gregorianDateTime$.$wgb6s9$3x0(undefined,undefined,undefined,$3xh,$3xi));
var $3xh,$3xi;
};gregorianDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds']};};
gregorianDateTime$.minusMilliseconds=function($3xj){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds((-$3xj));};
gregorianDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMilliseconds']};};
gregorianDateTime$.withDay=function($3xk){var gregorianDateTime$=this;
return ($3xl=gregorianDateTime$.date.withDay($3xk),$3xm=gregorianDateTime$.time,GregorianDateTime$internal($3xl,$3xm));};
gregorianDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDay']};};
gregorianDateTime$.withHours=function($3xn){var gregorianDateTime$=this;
return ($3xo=gregorianDateTime$.date,$3xp=gregorianDateTime$.time.withHours($3xn),GregorianDateTime$internal($3xo,$3xp));};
gregorianDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','withHours']};};
gregorianDateTime$.withYear=function($3xq){var gregorianDateTime$=this;
return ($3xr=gregorianDateTime$.date.withYear($3xq),$3xs=gregorianDateTime$.time,GregorianDateTime$internal($3xr,$3xs));};
gregorianDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withYear']};};
gregorianDateTime$.withMonth=function($3xt){var gregorianDateTime$=this;
return ($3xu=gregorianDateTime$.date.withMonth($3xt),$3xv=gregorianDateTime$.time,GregorianDateTime$internal($3xu,$3xv));};
gregorianDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMonth']};};
gregorianDateTime$.withWeekOfYear=function($3xw){var gregorianDateTime$=this;
return ($3xx=gregorianDateTime$.date.withWeekOfYear($3xw),$3xy=gregorianDateTime$.time,GregorianDateTime$internal($3xx,$3xy));};
gregorianDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withWeekOfYear']};};
gregorianDateTime$.withDayOfWeek=function($3xz){var gregorianDateTime$=this;
return ($3y0=gregorianDateTime$.date.withDayOfWeek($3xz),$3y1=gregorianDateTime$.time,GregorianDateTime$internal($3y0,$3y1));};
gregorianDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfWeek']};};
gregorianDateTime$.withDayOfYear=function($3y2){var gregorianDateTime$=this;
return ($3y3=gregorianDateTime$.date.withDayOfYear($3y2),$3y4=gregorianDateTime$.time,GregorianDateTime$internal($3y3,$3y4));};
gregorianDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfYear']};};
gregorianDateTime$.withMinutes=function($3y5){var gregorianDateTime$=this;
return ($3y6=gregorianDateTime$.date,$3y7=gregorianDateTime$.time.withMinutes($3y5),GregorianDateTime$internal($3y6,$3y7));};
gregorianDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMinutes']};};
gregorianDateTime$.withSeconds=function($3y8){var gregorianDateTime$=this;
return ($3y9=gregorianDateTime$.date,$3ya=gregorianDateTime$.time.withSeconds($3y8),GregorianDateTime$internal($3y9,$3ya));};
gregorianDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withSeconds']};};
gregorianDateTime$.withMilliseconds=function($3yb){var gregorianDateTime$=this;
return ($3yc=gregorianDateTime$.date,$3yd=gregorianDateTime$.time.withMilliseconds($3yb),GregorianDateTime$internal($3yc,$3yd));};
gregorianDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMilliseconds']};};
m$1.atr$(gregorianDateTime$,'predecessor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};});
m$1.atr$(gregorianDateTime$,'successor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};});
gregorianDateTime$.plus=function($3ye){var gregorianDateTime$=this;
return ($3yf=$3ye.years.times(months$base().perYear).plus($3ye.months),$3yg=$3ye.days,$3yh=$3ye.hours,$3yi=$3ye.minutes,$3yj=$3ye.seconds,$3yk=$3ye.milliseconds,gregorianDateTime$.$wgb6s9$3yl($3yf,$3yg,$3yh,$3yi,$3yj,$3yk));};
gregorianDateTime$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plus')];},d:['ceylon.time.internal','GregorianDateTime','$m','plus']};};
gregorianDateTime$.minus=function($3ym){var gregorianDateTime$=this;
return ($3yn=(-$3ym.years).times(months$base().perYear).plus((-$3ym.months)),$3yo=(-$3ym.days),$3yp=(-$3ym.hours),$3yq=(-$3ym.minutes),$3yr=(-$3ym.seconds),$3ys=(-$3ym.milliseconds),gregorianDateTime$.$wgb6s9$3yl($3yn,$3yo,$3yp,$3yq,$3yr,$3ys));};
gregorianDateTime$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minus')];},d:['ceylon.time.internal','GregorianDateTime','$m','minus']};};
gregorianDateTime$.$wgb6s9$3yl=function($3yt,$3yu,$3yv,$3yw,$3yx,$3yy){
var gregorianDateTime$=this;
var $3yz=gregorianDateTime$;
var $3z0=$3yv.times(milliseconds$base().perHour).plus($3yw.times(milliseconds$base().perMinute)).plus($3yx.times(milliseconds$base().perSecond)).plus($3yy);
if(($3z0<0)){
$3yz=$3yz.minusMilliseconds((-$3z0));
}
if(($3yu<0)){
$3yz=$3yz.minusDays((-$3yu));
}
if(($3yt<0)){
$3yz=$3yz.minusMonths((-$3yt));
}
if(($3yt>0)){
$3yz=$3yz.plusMonths($3yt);
}
if(($3yu>0)){
$3yz=$3yz.plusDays($3yu);
}
if(($3z0>0)){
$3yz=$3yz.plusMilliseconds($3z0);
}
return $3yz;
};gregorianDateTime$.$wgb6s9$3yl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:addPeriod$g15ssb')];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod$g15ssb']};};
gregorianDateTime$.instant=function($3z1){
var gregorianDateTime$=this;
if($3z1===undefined){$3z1=gregorianDateTime$.instant$defs$timeZone($3z1);}
var $3z2=Instant(unixTime$chronology().timeFromFixed(gregorianDateTime$.dayOfEra).plus(gregorianDateTime$.millisecondsOfDay));
return Instant($3z2.millisecondsOfEpoch.minus($3z1.offset($3z2)));
};gregorianDateTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:instant')];},d:['ceylon.time.internal','GregorianDateTime','$m','instant']};};
gregorianDateTime$.equals=function($3z3){
var gregorianDateTime$=this;
var $3z4;
if(m$1.is$(($3z4=$3z3),{t:GregorianDateTime$internal})){
if((gregorianDateTime$===$3z4)){
return true;
}
return (gregorianDateTime$.date.equals($3z4.date)&&gregorianDateTime$.time.equals($3z4.time));
}
function $3z5(){return $3z3;}
return false;
};gregorianDateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:equals')];},d:['ceylon.time.internal','GregorianDateTime','$m','equals']};};
m$1.atr$(gregorianDateTime$,'hash',function(){
var gregorianDateTime$=this;
var $3z6=(31);
var $3z7=(11);
$3z7=$3z6.times($3z7).plus(gregorianDateTime$.date.hash);
$3z7=$3z6.times($3z7).plus(gregorianDateTime$.time.hash);
return $3z7;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:hash')];},d:['ceylon.time.internal','GregorianDateTime','$at','hash']};});m$1.atr$(gregorianDateTime$,'string',function(){
var gregorianDateTime$=this;
return "".plus(gregorianDateTime$.date.string).plus("T").plus(gregorianDateTime$.time.string).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:string')];},d:['ceylon.time.internal','GregorianDateTime','$at','string']};});
gregorianDateTime$.periodFrom=function($3z8){
var gregorianDateTime$=this;
var $3z9=($3za=(gregorianDateTime$.compare($3z8).equals(m$1.smaller())?gregorianDateTime$:null),m$1.nn$($3za)?$3za:$3z8);
var $3za;
var $3zb=($3zc=(gregorianDateTime$.compare($3z8).equals(m$1.smaller())?$3z8:null),m$1.nn$($3zc)?$3zc:gregorianDateTime$);
var $3zc;
var $3zd=($3ze=($3zb.time.compare($3z9.time).equals(m$1.smaller())?1:null),m$1.nn$($3ze)?$3ze:(0));
var $3ze;
var $3zf=($3zg=(($3zb.millisecondsOfDay>=$3z9.millisecondsOfDay)?$3zb.millisecondsOfDay.minus($3z9.millisecondsOfDay):null),m$1.nn$($3zg)?$3zg:milliseconds$base().perDay.plus($3zb.millisecondsOfDay).minus($3z9.millisecondsOfDay));
var $3zg;
var $3zh=$3zf.divided(milliseconds$base().perHour);
$3zf=$3zf.remainder(milliseconds$base().perHour);
var $3zi=$3zf.divided(milliseconds$base().perMinute);
$3zf=$3zf.remainder(milliseconds$base().perMinute);
var $3zj=$3zf.divided(milliseconds$base().perSecond);
var $3zk=$3z8.compare(gregorianDateTime$).equals(m$1.smaller());
return ($3zl=($3zm=($3zk?$3zh:null),m$1.nn$($3zm)?$3zm:(-$3zh)),$3zn=($3zo=($3zk?$3zi:null),m$1.nn$($3zo)?$3zo:(-$3zi)),$3zp=($3zq=($3zk?$3zj:null),m$1.nn$($3zq)?$3zq:(-$3zj)),$3zr=($3zs=($3zk?$3zf.remainder(milliseconds$base().perSecond):null),m$1.nn$($3zs)?$3zs:(-$3zf.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$3zl,$3zn,$3zp,$3zr)).plus(($3zt=($3zk?$3zb.date.minusDays($3zd).periodFrom($3z9.date):null),m$1.nn$($3zt)?$3zt:$3zb.date.minusDays($3zd).periodTo($3z9.date)));
var $3zl,$3zm,$3zn,$3zo,$3zp,$3zq,$3zr,$3zs,$3zt;
};gregorianDateTime$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom']};};
gregorianDateTime$.periodTo=function($3zu){var gregorianDateTime$=this;
return $3zu.periodFrom(gregorianDateTime$);};
gregorianDateTime$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodTo']};};
gregorianDateTime$.rangeTo=function($3zv){var gregorianDateTime$=this;
return DateTimeRange(gregorianDateTime$,$3zv);};
gregorianDateTime$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','rangeTo']};};
gregorianDateTime$.$wgb6s9$3x0$defs$hours=function($3zw,$3zx,$3zy,$3zz,$400){return 0;};
gregorianDateTime$.$wgb6s9$3x0$defs$minutes=function($3zw,$3zx,$3zy,$3zz,$400){return 0;};
gregorianDateTime$.$wgb6s9$3x0$defs$seconds=function($3zw,$3zx,$3zy,$3zz,$400){return 0;};
gregorianDateTime$.$wgb6s9$3x0$defs$millis=function($3zw,$3zx,$3zy,$3zz,$400){return 0;};
gregorianDateTime$.$wgb6s9$3x0$defs$signal=function($3zw,$3zx,$3zy,$3zz,$400){return 1;};
gregorianDateTime$.$wgb6s9$3x0=function($3zw,$3zx,$3zy,$3zz,$400){
var gregorianDateTime$=this;
if($3zw===undefined){$3zw=gregorianDateTime$.$wgb6s9$3x0$defs$hours($3zw,$3zx,$3zy,$3zz,$400);}
if($3zx===undefined){$3zx=gregorianDateTime$.$wgb6s9$3x0$defs$minutes($3zw,$3zx,$3zy,$3zz,$400);}
if($3zy===undefined){$3zy=gregorianDateTime$.$wgb6s9$3x0$defs$seconds($3zw,$3zx,$3zy,$3zz,$400);}
if($3zz===undefined){$3zz=gregorianDateTime$.$wgb6s9$3x0$defs$millis($3zw,$3zx,$3zy,$3zz,$400);}
if($400===undefined){$400=gregorianDateTime$.$wgb6s9$3x0$defs$signal($3zw,$3zx,$3zy,$3zz,$400);}
var $401=$3zw.times(milliseconds$base().perHour).plus($3zx.times(milliseconds$base().perMinute)).plus($3zy.times(milliseconds$base().perSecond)).plus($3zz);
var $402=days$base().fromMilliseconds($401).times($400);
var $403=floorMod$internal$math($401,milliseconds$base().perDay).times($400).plus(gregorianDateTime$.time.millisecondsOfDay);
var $404=$402.plus(floorDiv$internal$math($403,milliseconds$base().perDay));
var $405=floorMod$internal$math($403,milliseconds$base().perDay);
var $406=($407=((($405).valueOf()==(gregorianDateTime$.time.millisecondsOfDay).valueOf())?gregorianDateTime$.time:null),m$1.nn$($407)?$407:TimeOfDay$internal($405));
var $407;
return GregorianDateTime$internal(gregorianDateTime$.date.plusDays($404),$406);
};gregorianDateTime$.$wgb6s9$3x0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'signal',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:fromTime$uyune6')];},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime$uyune6']};};
gregorianDateTime$.neighbour=function($408){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds($408);};
gregorianDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','neighbour']};};
gregorianDateTime$.offset=function($409){var gregorianDateTime$=this;
return gregorianDateTime$.instant(timeZone$timezone().utc).millisecondsOfEpoch.minus($409.instant(timeZone$timezone().utc).millisecondsOfEpoch);};
gregorianDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','offset']};};
})(GregorianDateTime$internal.$$.prototype);
}
return GregorianDateTime$internal;
}
ex$.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;
$init$GregorianDateTime$internal();
var $3we,$3wf,$3wh,$3wi,$3wk,$3wl,$3wo,$3wp,$3ws,$3wt,$3xl,$3xm,$3xo,$3xp,$3xr,$3xs,$3xu,$3xv,$3xx,$3xy,$3y0,$3y1,$3y3,$3y4,$3y6,$3y7,$3y9,$3ya,$3yc,$3yd,$3yf,$3yg,$3yh,$3yi,$3yj,$3yk,$3yn,$3yo,$3yp,$3yq,$3yr,$3ys;
function GregorianZonedDateTime$internal(instant,timeZone,gregorianZonedDateTime$){
$init$GregorianZonedDateTime$internal();
if(gregorianZonedDateTime$===undefined)gregorianZonedDateTime$=new GregorianZonedDateTime$internal.$$;
gregorianZonedDateTime$.instant_=instant;
if(timeZone===undefined){timeZone=timeZone$timezone().system;}
gregorianZonedDateTime$.timeZone_=timeZone;
ZoneDateTime$timezone(gregorianZonedDateTime$);
return gregorianZonedDateTime$;
}
GregorianZonedDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'instant',mt:'prm',$t:{t:Instant},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone},pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];}}],sts:[{t:ZoneDateTime$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime']};};
ex$.GregorianZonedDateTime$internal=GregorianZonedDateTime$internal;
function $init$GregorianZonedDateTime$internal(){
if(GregorianZonedDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianZonedDateTime$internal,'ceylon.time.internal::GregorianZonedDateTime',m$1.Basic,$init$ZoneDateTime$timezone());
(function(gregorianZonedDateTime$){
m$1.atr$(gregorianZonedDateTime$,'instant',function(){return this.instant_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};});
m$1.atr$(gregorianZonedDateTime$,'timeZone',function(){return this.timeZone_;},undefined,function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};});
gregorianZonedDateTime$.compare=function($40a){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.compare($40a.instant);
};gregorianZonedDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','compare']};};
m$1.atr$(gregorianZonedDateTime$,'day',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of month_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfEra',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfWeek',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'hours',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};});
m$1.atr$(gregorianZonedDateTime$,'leapYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};});
m$1.atr$(gregorianZonedDateTime$,'milliseconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};});
m$1.atr$(gregorianZonedDateTime$,'millisecondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'minutes',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};});
m$1.atr$(gregorianZonedDateTime$,'minutesOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'month',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};});
m$1.atr$(gregorianZonedDateTime$,'seconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};});
m$1.atr$(gregorianZonedDateTime$,'secondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'weekOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'year',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};});
m$1.atr$(gregorianZonedDateTime$,'date',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).date;
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:date')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};});
m$1.atr$(gregorianZonedDateTime$,'time',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).time;
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:time')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};});
m$1.atr$(gregorianZonedDateTime$,'dateTime',function(){
var gregorianZonedDateTime$=this;
return GregorianDateTime$internal(gregorianZonedDateTime$.date,gregorianZonedDateTime$.time);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:dateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dateTime']};});
gregorianZonedDateTime$.minusDays=function($40b){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusDays($40b));};
gregorianZonedDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusDays']};};
gregorianZonedDateTime$.minusHours=function($40d){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusHours($40d));};
gregorianZonedDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusHours']};};
gregorianZonedDateTime$.minusMilliseconds=function($40e){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMilliseconds($40e));};
gregorianZonedDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMilliseconds']};};
gregorianZonedDateTime$.minusMinutes=function($40f){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMinutes($40f));};
gregorianZonedDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMinutes']};};
gregorianZonedDateTime$.minusMonths=function($40g){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMonths($40g));};
gregorianZonedDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMonths']};};
gregorianZonedDateTime$.minusSeconds=function($40h){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusSeconds($40h));};
gregorianZonedDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusSeconds']};};
gregorianZonedDateTime$.minusWeeks=function($40i){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusWeeks($40i));};
gregorianZonedDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusWeeks']};};
gregorianZonedDateTime$.minusYears=function($40j){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusYears($40j));};
gregorianZonedDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusYears']};};
gregorianZonedDateTime$.plusDays=function($40k){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusDays($40k));};
gregorianZonedDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusDays']};};
gregorianZonedDateTime$.plusHours=function($40l){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusHours($40l));};
gregorianZonedDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusHours']};};
gregorianZonedDateTime$.plusMilliseconds=function($40m){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($40m));};
gregorianZonedDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMilliseconds']};};
gregorianZonedDateTime$.plusMinutes=function($40n){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMinutes($40n));};
gregorianZonedDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMinutes']};};
gregorianZonedDateTime$.plusMonths=function($40o){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMonths($40o));};
gregorianZonedDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMonths']};};
gregorianZonedDateTime$.plusSeconds=function($40p){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusSeconds($40p));};
gregorianZonedDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusSeconds']};};
gregorianZonedDateTime$.plusWeeks=function($40q){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusWeeks($40q));};
gregorianZonedDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusWeeks']};};
gregorianZonedDateTime$.plusYears=function($40r){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusYears($40r));};
gregorianZonedDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusYears']};};
gregorianZonedDateTime$.withDay=function($40s){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDay($40s));};
gregorianZonedDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDay']};};
gregorianZonedDateTime$.withHours=function($40t){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withHours($40t));};
gregorianZonedDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withHours']};};
gregorianZonedDateTime$.withMilliseconds=function($40u){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMilliseconds($40u));};
gregorianZonedDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMilliseconds']};};
gregorianZonedDateTime$.withMinutes=function($40v){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMinutes($40v));};
gregorianZonedDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMinutes']};};
gregorianZonedDateTime$.withMonth=function($40w){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMonth($40w));};
gregorianZonedDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMonth']};};
gregorianZonedDateTime$.withSeconds=function($40x){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withSeconds($40x));};
gregorianZonedDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withSeconds']};};
gregorianZonedDateTime$.withYear=function($40y){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withYear($40y));};
gregorianZonedDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withYear']};};
gregorianZonedDateTime$.withWeekOfYear=function($40z){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withWeekOfYear($40z));};
gregorianZonedDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withWeekOfYear']};};
gregorianZonedDateTime$.withDayOfWeek=function($410){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfWeek($410));};
gregorianZonedDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfWeek']};};
gregorianZonedDateTime$.withDayOfYear=function($411){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfYear($411));};
gregorianZonedDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfYear']};};
m$1.atr$(gregorianZonedDateTime$,'predecessor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).predecessor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};});
m$1.atr$(gregorianZonedDateTime$,'successor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).successor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};});
m$1.atr$(gregorianZonedDateTime$,'string',function(){
var gregorianZonedDateTime$=this;
return "".plus(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).string).plus("").plus(gregorianZonedDateTime$.timeZone.string).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:string')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string']};});
gregorianZonedDateTime$.equals=function($412){
var gregorianZonedDateTime$=this;
var $413;
if(m$1.is$(($413=$412),{t:GregorianZonedDateTime$internal})){
if((gregorianZonedDateTime$===$413)){
return true;
}
return (gregorianZonedDateTime$.instant.equals($413.instant)&&gregorianZonedDateTime$.timeZone.equals($413.timeZone));
}
function $414(){return $412;}
return false;
};gregorianZonedDateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:equals')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','equals']};};
m$1.atr$(gregorianZonedDateTime$,'hash',function(){
var gregorianZonedDateTime$=this;
var $415=(31);
var $416=(21);
$416=$415.times($416).plus(gregorianZonedDateTime$.instant.hash);
$416=$415.times($416).plus(gregorianZonedDateTime$.timeZone.hash);
return $416;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:hash')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hash']};});gregorianZonedDateTime$.$wgb6s9$40c=function($417){
var gregorianZonedDateTime$=this;
var $418=unixTime$chronology().timeFromFixed($417.dayOfEra).plus($417.millisecondsOfDay);
var $419=$418.minus(gregorianZonedDateTime$.timeZone.offset(gregorianZonedDateTime$.instant));
return GregorianZonedDateTime$internal(Instant($419),gregorianZonedDateTime$.timeZone);
};gregorianZonedDateTime$.$wgb6s9$40c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:GregorianZonedDateTime$internal},ps:[{nm:'resolved',mt:'prm',$t:{t:DateTime}}],$cont:GregorianZonedDateTime$internal,an:function(){return[m$1.doc("Fix [[DateTime]] zone absence.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust$npr8ju']};};
gregorianZonedDateTime$.neighbour=function($41a){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$40c(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($41a));};
gregorianZonedDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','neighbour']};};
gregorianZonedDateTime$.offset=function($41b){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.millisecondsOfEpoch.minus($41b.instant.millisecondsOfEpoch);};
gregorianZonedDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','offset']};};
})(GregorianZonedDateTime$internal.$$.prototype);
}
return GregorianZonedDateTime$internal;
}
ex$.$init$GregorianZonedDateTime$internal=$init$GregorianZonedDateTime$internal;
$init$GregorianZonedDateTime$internal();
function floor$internal$math($41c){
if(((!$41c.fractionalPart.equals(m$1.Float(0.0)))&&$41c.negative)){
return $41c.integer.minus(1);
}
var $41d=$41c.integer;
return $41d;
}
ex$.floor$internal$math=floor$internal$math;
floor$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floor')];},d:['ceylon.time.internal.math','floor']};};
function floorDiv$internal$math($41e,$41f){return floor$internal$math($41e.$_float.divided($41f.$_float));};
floorDiv$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorDiv')];},d:['ceylon.time.internal.math','floorDiv']};};
ex$.floorDiv$internal$math=floorDiv$internal$math;
function round$internal$math($41g){return floor$internal$math($41g.plus(m$1.Float(0.5)));};
round$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'f',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc("Returns nearest integer to x")];},d:['ceylon.time.internal.math','round']};};
ex$.round$internal$math=round$internal$math;
function floorMod$internal$math($41h,$41i){
var $41j=$41h.$_float;
var $41k=$41i.$_float;
return $41j.minus($41k.times(floor$internal$math($41j.divided($41k)))).integer;
}
ex$.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorMod')];},d:['ceylon.time.internal.math','floorMod']};};
function adjustedMod$internal$math($41l,$41m){
var $41n=floorMod$internal$math($41l,$41m);
if((($41n).valueOf()==(0).valueOf())){
return $41m;
}
return $41n;
}
ex$.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:adjustedMod')];},d:['ceylon.time.internal.math','adjustedMod']};};
ex$.$pkg$ans$ceylon$time$internal$math=function(){return[m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$internal=function(){return[m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function TimeOfDay$internal(millisecondsOfDay,timeOfDay$){
$init$TimeOfDay$internal();
if(timeOfDay$===undefined)timeOfDay$=new TimeOfDay$internal.$$;
timeOfDay$.millisecondsOfDay_=millisecondsOfDay;
Time(timeOfDay$);
return timeOfDay$;
}
TimeOfDay$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'millisecondsOfDay',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];}}],sts:[{t:Time}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay')];},d:['ceylon.time.internal','TimeOfDay']};};
ex$.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
if(TimeOfDay$internal.$$===undefined){
m$1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',m$1.Basic,$init$Time());
(function(timeOfDay$){
m$1.atr$(timeOfDay$,'millisecondsOfDay',function(){return this.millisecondsOfDay_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};});
m$1.atr$(timeOfDay$,'hours',function(){
var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.divided(milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:hours')];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};});
m$1.atr$(timeOfDay$,'minutes',function(){
var timeOfDay$=this;
return floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perHour).divided(milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};});
m$1.atr$(timeOfDay$,'seconds',function(){
var timeOfDay$=this;
return floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perMinute).divided(milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};});
m$1.atr$(timeOfDay$,'milliseconds',function(){
var timeOfDay$=this;
return floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};});
m$1.atr$(timeOfDay$,'secondsOfDay',function(){
var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.divided(milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};});
m$1.atr$(timeOfDay$,'minutesOfDay',function(){
var timeOfDay$=this;
return timeOfDay$.secondsOfDay.divided(seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};});
timeOfDay$.compare=function($41o){
var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.compare($41o.millisecondsOfDay);
};timeOfDay$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Compare two instances of _time of day_.")];},d:['ceylon.time.internal','TimeOfDay','$m','compare']};};
m$1.atr$(timeOfDay$,'predecessor',function(){
var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:predecessor')];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};});
m$1.atr$(timeOfDay$,'successor',function(){
var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:successor')];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};});
m$1.atr$(timeOfDay$,'string',function(){
var timeOfDay$=this;
return "".plus(timeOfDay$.hours.string.padLeading(2,m$1.Character(48,true))).plus(":").plus(timeOfDay$.minutes.string.padLeading(2,m$1.Character(48,true))).plus(":").plus(timeOfDay$.seconds.string.padLeading(2,m$1.Character(48,true))).plus(".").plus(timeOfDay$.milliseconds.string.padLeading(3,m$1.Character(48,true))).plus("");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:string')];},d:['ceylon.time.internal','TimeOfDay','$at','string']};});
timeOfDay$.plusHours=function($41p){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($41p.times(milliseconds$base().perHour));};
timeOfDay$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','plusHours']};};
timeOfDay$.minusHours=function($41q){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds($41q.times(milliseconds$base().perHour));};
timeOfDay$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','minusHours']};};
timeOfDay$.plusMinutes=function($41r){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($41r.times(milliseconds$base().perMinute));};
timeOfDay$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMinutes']};};
timeOfDay$.minusMinutes=function($41s){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds($41s.times(milliseconds$base().perMinute));};
timeOfDay$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMinutes']};};
timeOfDay$.plusSeconds=function($41t){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($41t.times(milliseconds$base().perSecond));};
timeOfDay$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusSeconds']};};
timeOfDay$.minusSeconds=function($41u){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds($41u.times(milliseconds$base().perSecond));};
timeOfDay$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusSeconds']};};
timeOfDay$.plusMilliseconds=function($41v){
var timeOfDay$=this;
if((($41v).valueOf()==(0).valueOf())){
return timeOfDay$;
}
var $41w=floorMod$internal$math(timeOfDay$.millisecondsOfDay.plus($41v),milliseconds$base().perDay);
return ($41x=((($41w).valueOf()==(timeOfDay$.millisecondsOfDay).valueOf())?timeOfDay$:null),m$1.nn$($41x)?$41x:TimeOfDay$internal($41w));
var $41x;
};timeOfDay$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds']};};
timeOfDay$.minusMilliseconds=function($41y){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds((-$41y));};
timeOfDay$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMilliseconds']};};
timeOfDay$.plus=function($41z){
var timeOfDay$=this;
var $420=timeOfDay$.millisecondsOfDay.plus($41z.milliseconds).plus($41z.seconds.times(milliseconds$base().perSecond)).plus($41z.minutes.times(milliseconds$base().perMinute)).plus($41z.hours.times(milliseconds$base().perHour));
var $421=floorMod$internal$math($420,milliseconds$base().perDay);
return ($422=((($421).valueOf()==(timeOfDay$.millisecondsOfDay).valueOf())?timeOfDay$:null),m$1.nn$($422)?$422:TimeOfDay$internal($421));
var $422;
};timeOfDay$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plus')];},d:['ceylon.time.internal','TimeOfDay','$m','plus']};};
timeOfDay$.minus=function($423){
var timeOfDay$=this;
var $424=timeOfDay$.millisecondsOfDay.minus($423.milliseconds).minus($423.seconds.times(milliseconds$base().perSecond)).minus($423.minutes.times(milliseconds$base().perMinute)).minus($423.hours.times(milliseconds$base().perHour));
var $425=floorMod$internal$math($424,milliseconds$base().perDay);
return ($426=((($425).valueOf()==(timeOfDay$.millisecondsOfDay).valueOf())?timeOfDay$:null),m$1.nn$($426)?$426:TimeOfDay$internal($425));
var $426;
};timeOfDay$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minus')];},d:['ceylon.time.internal','TimeOfDay','$m','minus']};};
timeOfDay$.withHours=function($427){
var timeOfDay$=this;
if(((timeOfDay$.hours).valueOf()==($427).valueOf())){
return timeOfDay$;
}
return time($427,timeOfDay$.minutes,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withHours')];},d:['ceylon.time.internal','TimeOfDay','$m','withHours']};};
timeOfDay$.withMinutes=function($428){
var timeOfDay$=this;
if(((timeOfDay$.minutes).valueOf()==($428).valueOf())){
return timeOfDay$;
}
return time(timeOfDay$.hours,$428,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','withMinutes']};};
timeOfDay$.withSeconds=function($429){
var timeOfDay$=this;
if(((timeOfDay$.seconds).valueOf()==($429).valueOf())){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,$429,timeOfDay$.milliseconds);
};timeOfDay$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withSeconds']};};
timeOfDay$.withMilliseconds=function($42a){
var timeOfDay$=this;
if(((timeOfDay$.milliseconds).valueOf()==($42a).valueOf())){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,timeOfDay$.seconds,$42a);
};timeOfDay$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withMilliseconds']};};
timeOfDay$.equals=function($42b){
var timeOfDay$=this;
var $42c;
if(m$1.is$(($42c=$42b),{t:TimeOfDay$internal})){
return ((timeOfDay$.millisecondsOfDay).valueOf()==($42c.millisecondsOfDay).valueOf());
}
function $42d(){return $42b;}
return false;
};timeOfDay$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:equals')];},d:['ceylon.time.internal','TimeOfDay','$m','equals']};};
m$1.atr$(timeOfDay$,'hash',function(){
var timeOfDay$=this;
var $42e=(31);
var $42f=(3);
return $42e.times($42f).plus(timeOfDay$.millisecondsOfDay.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:hash')];},d:['ceylon.time.internal','TimeOfDay','$at','hash']};});timeOfDay$.periodFrom=function($42g){
var timeOfDay$=this;
var $42h=($42i=(timeOfDay$.compare($42g).equals(m$1.smaller())?timeOfDay$:null),m$1.nn$($42i)?$42i:$42g);
var $42i;
var $42j=($42k=(timeOfDay$.compare($42g).equals(m$1.smaller())?$42g:null),m$1.nn$($42k)?$42k:timeOfDay$);
var $42k;
var $42l=$42j.millisecondsOfDay.minus($42h.millisecondsOfDay);
var $42m=$42l.divided(milliseconds$base().perHour);
$42l=$42l.remainder(milliseconds$base().perHour);
var $42n=$42l.divided(milliseconds$base().perMinute);
$42l=$42l.remainder(milliseconds$base().perMinute);
var $42o=$42l.divided(milliseconds$base().perSecond);
var $42p=$42g.compare(timeOfDay$).equals(m$1.smaller());
return ($42q=($42r=($42p?$42m:null),m$1.nn$($42r)?$42r:(-$42m)),$42s=($42t=($42p?$42n:null),m$1.nn$($42t)?$42t:(-$42n)),$42u=($42v=($42p?$42o:null),m$1.nn$($42v)?$42v:(-$42o)),$42w=($42x=($42p?$42l.remainder(milliseconds$base().perSecond):null),m$1.nn$($42x)?$42x:(-$42l.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$42q,$42s,$42u,$42w));
var $42q,$42r,$42s,$42t,$42u,$42v,$42w,$42x;
};timeOfDay$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodFrom')];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom']};};
timeOfDay$.periodTo=function($42y){var timeOfDay$=this;
return $42y.periodFrom(timeOfDay$);};
timeOfDay$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodTo')];},d:['ceylon.time.internal','TimeOfDay','$m','periodTo']};};
timeOfDay$.rangeTo=function($42z){var timeOfDay$=this;
return TimeRange(timeOfDay$,$42z);};
timeOfDay$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:rangeTo')];},d:['ceylon.time.internal','TimeOfDay','$m','rangeTo']};};
timeOfDay$.neighbour=function($430){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($430);};
timeOfDay$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','neighbour']};};
timeOfDay$.offset=function($431){var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.minus($431.millisecondsOfDay);};
timeOfDay$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','offset']};};
})(TimeOfDay$internal.$$.prototype);
}
return TimeOfDay$internal;
}
ex$.$init$TimeOfDay$internal=$init$TimeOfDay$internal;
$init$TimeOfDay$internal();
function intersect$internal($432,$433,$434,$435,$rshjet$){
return (($432.compare($435)!==m$1.larger())&&($433.compare($434)!==m$1.smaller()));
}
ex$.intersect$internal=intersect$internal;
intersect$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'start',mt:'prm',$t:'Value$intersect'},{nm:'end',mt:'prm',$t:'Value$intersect'},{nm:'otherStart',mt:'prm',$t:'Value$intersect'},{nm:'otherEnd',mt:'prm',$t:'Value$intersect'}],tp:{Value$intersect:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$intersect'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:intersect')];},d:['ceylon.time.internal','intersect']};};
function overlap$internal($436,$437,$l6u1r1$){
var $438=m$1.$_sort(m$1.concatenate([$436,$437].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:$l6u1r1$.Value$overlap,Absent$Iterable:{t:m$1.Null}}},m$1.mtt$([$l6u1r1$.Value$overlap,$l6u1r1$.Value$overlap])])),{Element$concatenate:$l6u1r1$.Value$overlap}),{Element$sort:$l6u1r1$.Value$overlap}).measure(1,2);
if((m$1.span(($439=$436,$439.$_get(0)),$439.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($438)&&m$1.span(($43a=$437,$43a.$_get(0)),$43a.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($438))){
var $43b;
m$1.asrt$((m$1.nn$(($43b=$438.first))),"Assertion failed: \'exists start = ordered.first\' at utils.ceylon (21:14-21:43)",'21:8-21:44','utils.ceylon');
var $43c;
m$1.asrt$((m$1.nn$(($43c=$438.last))),"Assertion failed: \'exists end = ordered.last\' at utils.ceylon (22:14-22:40)",'22:8-22:41','utils.ceylon');
return m$1.tpl$([$43b,$43c]);
}
return m$1.empty();
}
ex$.overlap$internal=overlap$internal;
overlap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:['Value$overlap','Value$overlap']},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}}],tp:{Value$overlap:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Value$overlap'}},{t:m$1.Comparable,a:{Other$Comparable:'Value$overlap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:overlap')];},d:['ceylon.time.internal','overlap']};};
function gap$internal($43d,$43e,$2l6pxq$){
var $43f=m$1.$_sort(m$1.concatenate([$43d,$43e].$sa$(m$1.mut$([{t:m$1.Iterable,a:{Element$Iterable:$2l6pxq$.Value$gap,Absent$Iterable:{t:m$1.Null}}},m$1.mtt$([$2l6pxq$.Value$gap,$2l6pxq$.Value$gap])])),{Element$concatenate:$2l6pxq$.Value$gap}),{Element$sort:$2l6pxq$.Value$gap}).measure(1,2);
if((m$1.span(($43g=$43d,$43g.$_get(0)),$43g.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($43f)&&m$1.span(($43h=$43e,$43h.$_get(0)),$43h.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($43f))){
return m$1.empty();
}
var $43i;
m$1.asrt$((m$1.nn$(($43i=$43f.first))),"Assertion failed: \'exists start = ordered.first\' at utils.ceylon (49:10-49:39)",'49:4-49:40','utils.ceylon');
var $43j;
m$1.asrt$((m$1.nn$(($43j=$43f.last))),"Assertion failed: \'exists end = ordered.last\' at utils.ceylon (50:10-50:36)",'50:4-50:37','utils.ceylon');
return m$1.tpl$([$43i,$43j]);
}
ex$.gap$internal=gap$internal;
gap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:['Value$gap','Value$gap']},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}}],tp:{Value$gap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$gap'}},{t:m$1.Enumerable,a:{Other$Enumerable:'Value$gap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gap')];},d:['ceylon.time.internal','gap']};};
ex$.$pkg$ans$ceylon$time$iso8601=function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601','$pkg-anns'),m$1.by(["Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function parseDate$iso8601($43k){
var $43l=$43k.indexesWhere(m$1.$JsCallable((function($43m){return $43m.equals(m$1.Character(45,true));}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}})).sequence();
if((($43k.size).valueOf()==(10).valueOf())){
var $43n,$43o,$43p;
if($43l.equals(m$1.tpl$([4,7]))&&m$1.nn$(($43n=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($43o=m$1.parseInteger($43k.span(5,6))))&&m$1.nn$(($43p=m$1.parseInteger($43k.span(8,9))))){
return date($43n,$43o,$43p);
}
else{
var $43q,$43r,$43s,$43t;
if($43l.equals(m$1.tpl$([4,8]))&&m$1.nn$(($43q=$43k.$_get(5)))&&$43q.equals(m$1.Character(87,true))&&m$1.nn$(($43r=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($43s=m$1.parseInteger($43k.span(6,7))))&&m$1.nn$(($43t=m$1.parseInteger($43k.span(9,9))))){
return date($43r,1,1).withWeekOfYear($43s).withDayOfWeek(dayOfWeek$base($43t));
}
}
}
else{
if((($43k.size).valueOf()==(8).valueOf())){
var $43u;
if(m$1.ne$(($43u=$43l))){
var $43v,$43w;
if($43u.equals(m$1.tpl$([4]))&&m$1.nn$(($43v=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($43w=m$1.parseInteger($43k.span(5,7))))){
return date($43v,1,1).withDayOfYear($43w);
}
}
else{
var $43x,$43y,$43z,$440;
if(m$1.nn$(($43x=$43k.$_get(4)))&&$43x.equals(m$1.Character(87,true))&&m$1.nn$(($43y=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($43z=m$1.parseInteger($43k.span(5,6))))&&m$1.nn$(($440=m$1.parseInteger($43k.span(7,7))))){
return date($43y,1,1).withWeekOfYear($43z).withDayOfWeek(dayOfWeek$base($440));
}
else{
var $441,$442,$443;
if(m$1.nn$(($441=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($442=m$1.parseInteger($43k.span(4,5))))&&m$1.nn$(($443=m$1.parseInteger($43k.span(6,7))))){
return date($441,$442,$443);
}
}
}
}
else{
var $444,$445;
if((($43k.size).valueOf()==(7).valueOf())&&$43l.empty&&m$1.nn$(($444=m$1.parseInteger($43k.span(0,3))))&&m$1.nn$(($445=m$1.parseInteger($43k.span(4,6))))){
return date($444,1,1).withDayOfYear($445);
}
}
}
return null;
}
ex$.parseDate$iso8601=parseDate$iso8601;
parseDate$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Date}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDate')];},d:['ceylon.time.iso8601','parseDate']};};
function parseDateTime$iso8601($446){
var $447;
if(m$1.nn$(($447=$446.firstOccurrence(m$1.Character(84,true))))){
var $448,$449;
if(m$1.nn$(($448=parseDate$iso8601($446.span(0,$447.minus(1)))))&&m$1.nn$(($449=parseTimeComponents$iso8601($446.spanFrom($447.plus(1)))))){
var $44a;
if(m$1.nn$(($44a=convertToTime$iso8601($449)))){
if((($449.$_get(0)).valueOf()==(24).valueOf())){
return createDateTime$iso8601($448.successor,$44a);
}
else{
return createDateTime$iso8601($448,$44a);
}
}
}
}
return null;
}
ex$.parseDateTime$iso8601=parseDateTime$iso8601;
parseDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DateTime}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDateTime'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseDateTime']};};
function createDateTime$iso8601($44b,$44c){return ($44d=$44b.year,$44e=$44b.month,$44f=$44b.day,$44g=$44c.hours,$44h=$44c.minutes,$44i=$44c.seconds,$44j=$44c.milliseconds,dateTime($44d,$44e,$44f,$44g,$44h,$44i,$44j));};
createDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'date',mt:'prm',$t:{t:$_Date}},{nm:'time',mt:'prm',$t:{t:Time}}],d:['ceylon.time.iso8601','createDateTime']};};
var $44d,$44e,$44f,$44g,$44h,$44i,$44j;
function parsePeriod$iso8601($44k){
var $44l;
if(m$1.nn$(($44l=$44k.first))&&$44l.equals(m$1.Character(80,true))&&!$44k.rest.empty){
var $44m=zero();
var $44n=(0);
var $44o=(0);
var $44q;for(var $44p=$44k.rest.indexed.iterator();($44q=$44p.next())!==m$1.finished();){
var $44r=$44q.key,$44s=$44q.item;
if($44s.digit&&($44o<7)&&!($44o==3)){
$44n=$44n.times(10).plus($44s.integer.minus(m$1.Character(48,true).integer));
continue;
}
if($44s.equals(m$1.Character(89,true))&&($44o<1)){
$44m=$44m.withYears($44n);
$44n=(0);
$44o=(1);
continue;
}
if($44s.equals(m$1.Character(77,true))&&($44o<2)){
$44m=$44m.withMonths($44n);
$44n=(0);
$44o=(2);
continue;
}
if($44s.equals(m$1.Character(68,true))&&($44o<3)){
$44m=$44m.withDays($44n);
$44n=(0);
$44o=(3);
continue;
}
if($44s.equals(m$1.Character(84,true))&&($44o<4)){
if(!($44n==0)){
return null;
}
$44o=(4);
continue;
}
if($44s.equals(m$1.Character(72,true))&&(($44o).valueOf()==(4).valueOf())){
$44m=$44m.withHours($44n);
$44n=(0);
$44o=(5);
continue;
}
if($44s.equals(m$1.Character(77,true))&&($44t=$44o,$44t.compare((4))!==m$1.smaller()&&$44t.compare((6))===m$1.smaller())){
$44m=$44m.withMinutes($44n);
$44n=(0);
$44o=(6);
continue;
}
if($44s.equals(m$1.Character(83,true))&&($44u=$44o,$44u.compare((4))!==m$1.smaller()&&$44u.compare((7))===m$1.smaller())){
$44m=$44m.withSeconds($44n);
$44n=(0);
$44o=(7);
continue;
}
return null;
}
if((($44n).valueOf()==(0).valueOf())){
return $44m;
}
}
return null;
}
ex$.parsePeriod$iso8601=parsePeriod$iso8601;
parsePeriod$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Period}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.iso8601','parsePeriod']};};
function parseTime$iso8601($44v){return convertToTime$iso8601(parseTimeComponents$iso8601($44v));};
parseTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTime')];},d:['ceylon.time.iso8601','parseTime']};};
ex$.parseTime$iso8601=parseTime$iso8601;
function convertToTime$iso8601($44w){
var $44x,$44y,$44z,$450;
if(function($451){if(!m$1.nn$($451))return false;return($44y=$451.$_get(0),$44x=$451.$_get(1),$44z=$451.$_get(2),$450=$451.$_get(3),true);}($44w)){
if(m$1.tpl$([24,0,0,0]).equals(m$1.tpl$([$44y,$44x,$44z,$450]))){
return time(0,0);
}
if(($452=$44y,$452.compare((0))!==m$1.smaller()&&$452.compare((23))!==m$1.larger())&&($453=$44x,$453.compare((0))!==m$1.smaller()&&$453.compare((59))!==m$1.larger())&&($454=$44z,$454.compare((0))!==m$1.smaller()&&$454.compare((59))!==m$1.larger())&&($455=$450,$455.compare((0))!==m$1.smaller()&&$455.compare((999))!==m$1.larger())){
return time($44y,$44x,$44z,$450);
}
}
return null;
}
ex$.convertToTime$iso8601=convertToTime$iso8601;
convertToTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'timeComponents',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]}}],pa:1,d:['ceylon.time.iso8601','convertToTime']};};
function parseTimeComponents$iso8601($456){
var $457=function($458,$459){return ($459.empty)?(0):function(){var $45a=m$1.parseFloat("0.".plus($459));return function(){var $45b;
if(m$1.nn$(($45b=$45a)))return $458.times($45b).integer;else return null}();}();};
$457.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'magnitude',mt:'prm',$t:{t:m$1.Integer}},{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','calculateFraction$k42vha']};};
var $45c=function($45d){return ($45d.empty)?(0):function(){var $45e;
if(m$1.nn$(($45e=m$1.parseInteger($45d))))return $45e;else return null}();};
$45c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','parseMilliseconds$4qjv03']};};
var $45f;
var $45g;
var $45h;
if(m$1.nn$(($45h=$456.firstIndexWhere(m$1.$JsCallable((function($45i){return m$1.tpl$([m$1.Character(46,true),m$1.Character(44,true)]).contains($45i);}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}}))))){
$45f=$456.spanTo($45h.minus(1));
$45g=$456.spanFrom($45h.plus(1));
}
else{
$45f=$456;
$45g="";
}
if((($45f.size).valueOf()==(2).valueOf())){
var $45j,$45k;
if(m$1.nn$(($45j=m$1.parseInteger($45f)))&&m$1.nn$(($45k=$457(minutes$base().perHour,$45g)))){
return m$1.tpl$([$45j,$45k,0,0]);
}
}
else{
if((($45f.size).valueOf()==(8).valueOf())){
if($45f.occursAt(2,m$1.Character(58,true))&&$45f.occursAt(5,m$1.Character(58,true))){
var $45l,$45m,$45n,$45o;
if(m$1.nn$(($45l=m$1.parseInteger($45f.span(0,1))))&&m$1.nn$(($45m=m$1.parseInteger($45f.span(3,4))))&&m$1.nn$(($45n=m$1.parseInteger($45f.span(6,7))))&&m$1.nn$(($45o=$45c($45g)))){
return m$1.tpl$([$45l,$45m,$45n,$45o]);
}
}
}
else{
if((($45f.size).valueOf()==(6).valueOf())){
var $45p,$45q,$45r,$45s;
if(m$1.nn$(($45p=m$1.parseInteger($45f.span(0,1))))&&m$1.nn$(($45q=m$1.parseInteger($45f.span(2,3))))&&m$1.nn$(($45r=m$1.parseInteger($45f.span(4,5))))&&m$1.nn$(($45s=$45c($45g)))){
return m$1.tpl$([$45p,$45q,$45r,$45s]);
}
}
else{
if((($45f.size).valueOf()==(5).valueOf())){
if($45f.occursAt(2,m$1.Character(58,true))){
var $45t,$45u,$45v;
if(m$1.nn$(($45t=m$1.parseInteger($45f.span(0,1))))&&m$1.nn$(($45u=m$1.parseInteger($45f.span(3,4))))&&m$1.nn$(($45v=$457(seconds$base().perMinute,$45g)))){
return m$1.tpl$([$45t,$45u,$45v,0]);
}
}
}
else{
if((($45f.size).valueOf()==(4).valueOf())){
var $45w,$45x,$45y;
if(m$1.nn$(($45w=m$1.parseInteger($45f.span(0,1))))&&m$1.nn$(($45x=m$1.parseInteger($45f.span(2,3))))&&m$1.nn$(($45y=$457(seconds$base().perMinute,$45g)))){
return m$1.tpl$([$45w,$45x,$45y,0]);
}
}
}
}
}
}
return null;
};parseTimeComponents$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseTimeComponents']};};
function parseTimeZone$iso8601($45z){
if($45z.equals("Z")){
return timeZone$timezone().utc;
}
var $460=function($461){if($461!==null&&$461.equals(m$1.Character(43,true)))return (1);else if($461!==null&&$461.equals(m$1.Character(45,true)))return (-1);else return null}($45z.$_get(0));
var $462;
if(m$1.nn$(($462=$460))){
var $463=(function(){var $464=$462;var $465=function($466,$467){return function(){var $468=$466.times(milliseconds$base().perHour).plus($467.times(milliseconds$base().perMinute));return ((($464).valueOf()==((-1)).valueOf())&&(($468).valueOf()==(0).valueOf()))?null:OffsetTimeZone$timezone($464.times($468));}();};
$465.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:OffsetTimeZone$timezone}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'mm',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeZone$iso8601,d:['ceylon.time.iso8601','parseTimeZone','$m','offsetTimeZone$mf7brt']};};
var $469=$45z.spanFrom(1);
var $46a,$46b;
if((($469.size).valueOf()==(5).valueOf())&&m$1.nn$(($46a=m$1.parseInteger($469.spanTo(1))))&&m$1.nn$(($46b=m$1.parseInteger($469.spanFrom(3))))){
return $465($46a,$46b);
}
else{
var $46c,$46d;
if((($469.size).valueOf()==(4).valueOf())&&m$1.nn$(($46c=m$1.parseInteger($469.spanTo(1))))&&m$1.nn$(($46d=m$1.parseInteger($469.spanFrom(2))))){
return $465($46c,$46d);
}
else{
var $46e;
if((($469.size).valueOf()==(2).valueOf())&&m$1.nn$(($46e=m$1.parseInteger($469.spanTo(1))))){
return $465($46e,0);
}
}
}
}());if($463!==undefined){return $463;}
}
return null;
}
ex$.parseTimeZone$iso8601=parseTimeZone$iso8601;
parseTimeZone$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTimeZone')];},d:['ceylon.time.iso8601','parseTimeZone']};};
function parseZoneDateTime$iso8601($46f){
var $46g;
if(m$1.nn$(($46g=$46f.last))&&$46g.equals(m$1.Character(90,true))){
var $46h;
if(m$1.nn$(($46h=parseDateTime$iso8601($46f.initial($46f.size.minus(1)))))){
return $46h.instant(timeZone$timezone().utc).zoneDateTime(timeZone$timezone().utc);
}
}
else{
var $46i;
if(m$1.nn$(($46i=$46f.lastIndexWhere(m$1.$JsCallable((function($46j){return m$1.tpl$([m$1.Character(43,true),m$1.Character(45,true)]).contains($46j);}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Character}]),Return$Callable:{t:m$1.$_Boolean}}))))){
var $46k,$46l;
if(m$1.is$(($46k=timeZone$timezone().parse($46f.spanFrom($46i))),{t:TimeZone$timezone})&&m$1.nn$(($46l=parseDateTime$iso8601($46f.spanTo($46i.minus(1)))))){
return $46l.instant($46k).zoneDateTime($46k);
}
}
}
return null;
}
ex$.parseZoneDateTime$iso8601=parseZoneDateTime$iso8601;
parseZoneDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:ZoneDateTime$timezone}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseZoneDateTime'),m$1.see([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTimeZone$iso8601)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseZoneDateTime']};};
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.2.0':[]
};};
ex$.$pkg$ans$ceylon$time=function(){return[m$1.doc$($CCMM$,'ceylon.time','$pkg-anns'),m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function Period(years,months,days,hours,minutes,seconds,milliseconds,period$){
$init$Period();
if(period$===undefined)period$=new Period.$$;
period$.$$targs$$={Self$PeriodBehavior:{t:Period}};
period$.$$targs$$={Other$Comparable:{t:Period}};
period$.$$targs$$={Other$Summable:{t:Period}};
period$.$$targs$$={Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}};
if(years===undefined){years=(0);}
period$.years_=years;
if(months===undefined){months=(0);}
period$.months_=months;
if(days===undefined){days=(0);}
period$.days_=days;
if(hours===undefined){hours=(0);}
period$.hours_=hours;
if(minutes===undefined){minutes=(0);}
period$.minutes_=minutes;
if(seconds===undefined){seconds=(0);}
period$.seconds_=seconds;
if(milliseconds===undefined){milliseconds=(0);}
period$.milliseconds_=milliseconds;
ReadableTimePeriod$base(period$);
ReadableDatePeriod$base(period$);
ReadablePeriod$base(period$);
PeriodBehavior$base({Self$PeriodBehavior:{t:Period}},period$);
m$1.Comparable({Other$Comparable:{t:Period}},period$);
m$1.Summable({Other$Summable:{t:Period}},period$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}},period$);
return period$;
}
Period.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'years',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of years.")];}},{nm:'months',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of months.")];}},{nm:'days',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of days.")];}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of hours.")];}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of minutes.")];}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of seconds.")];}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];}}],sts:[{t:ReadablePeriod$base},{t:ReadableTimePeriod$base},{t:ReadableDatePeriod$base},{t:PeriodBehavior$base,a:{Self$PeriodBehavior:{t:Period}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Period}}},{t:m$1.Summable,a:{Other$Summable:{t:Period}}},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period')];},d:['ceylon.time','Period']};};
ex$.Period=Period;
function $init$Period(){
if(Period.$$===undefined){
m$1.initTypeProto(Period,'ceylon.time::Period',m$1.Basic,$init$ReadableTimePeriod$base(),$init$ReadableDatePeriod$base(),$init$ReadablePeriod$base(),$init$PeriodBehavior$base(),m$1.Comparable,m$1.Summable,m$1.Scalable);
(function(period$){
m$1.atr$(period$,'years',function(){return this.years_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time','Period','$at','years']};});
m$1.atr$(period$,'months',function(){return this.months_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time','Period','$at','months']};});
m$1.atr$(period$,'days',function(){return this.days_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time','Period','$at','days']};});
m$1.atr$(period$,'hours',function(){return this.hours_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of hours.")];},d:['ceylon.time','Period','$at','hours']};});
m$1.atr$(period$,'minutes',function(){return this.minutes_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of minutes.")];},d:['ceylon.time','Period','$at','minutes']};});
m$1.atr$(period$,'seconds',function(){return this.seconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of seconds.")];},d:['ceylon.time','Period','$at','seconds']};});
m$1.atr$(period$,'milliseconds',function(){return this.milliseconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];},d:['ceylon.time','Period','$at','milliseconds']};});
period$.equals=function($46m){
var period$=this;
var $46n;
if(m$1.is$(($46n=$46m),{t:Period})){
if((period$===$46n)){
return true;
}
return ((((((((period$.years).valueOf()==($46n.years).valueOf())&&((period$.months).valueOf()==($46n.months).valueOf()))&&((period$.days).valueOf()==($46n.days).valueOf()))&&((period$.hours).valueOf()==($46n.hours).valueOf()))&&((period$.minutes).valueOf()==($46n.minutes).valueOf()))&&((period$.seconds).valueOf()==($46n.seconds).valueOf()))&&((period$.milliseconds).valueOf()==($46n.milliseconds).valueOf()));
}
function $46o(){return $46m;}
return false;
};period$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:equals')];},d:['ceylon.time','Period','$m','equals']};};
m$1.atr$(period$,'hash',function(){
var period$=this;
var $46p=(31);
var $46q=(17);
$46q=$46p.times($46q).plus(period$.years.hash);
$46q=$46p.times($46q).plus(period$.months.hash);
$46q=$46p.times($46q).plus(period$.days.hash);
$46q=$46p.times($46q).plus(period$.hours.hash);
$46q=$46p.times($46q).plus(period$.minutes.hash);
$46q=$46p.times($46q).plus(period$.seconds.hash);
$46q=$46p.times($46q).plus(period$.milliseconds.hash);
return $46q;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:hash')];},d:['ceylon.time','Period','$at','hash']};});period$.compare=function($46r){
var period$=this;
var $46s=period$.normalized();
var $46t=$46r.normalized();
return ($46u=(!($46s.years==$46t.years)?$46s.years.compare($46t.years):null),m$1.nn$($46u)?$46u:($46v=(!($46s.months==$46t.months)?$46s.months.compare($46t.months):null),m$1.nn$($46v)?$46v:($46w=(!($46s.days==$46t.days)?$46s.days.compare($46t.days):null),m$1.nn$($46w)?$46w:($46x=(!($46s.hours==$46t.hours)?$46s.hours.compare($46t.hours):null),m$1.nn$($46x)?$46x:($46y=(!($46s.minutes==$46t.minutes)?$46s.minutes.compare($46t.minutes):null),m$1.nn$($46y)?$46y:($46z=(!($46s.seconds==$46t.seconds)?$46s.seconds.compare($46t.seconds):null),m$1.nn$($46z)?$46z:$46s.milliseconds.compare($46t.milliseconds)))))));
var $46u,$46v,$46w,$46x,$46y,$46z;
};period$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:compare')];},d:['ceylon.time','Period','$m','compare']};};
period$.isZero=function(){
var period$=this;
return period$.equals(zero());
};period$.isZero.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Period,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:isZero')];},d:['ceylon.time','Period','$m','isZero']};};
period$.withYears=function($470){
var period$=this;
if((($470).valueOf()==(period$.years).valueOf())){
return period$;
}
return Period($470,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withYears')];},d:['ceylon.time','Period','$m','withYears']};};
period$.withMonths=function($471){
var period$=this;
if((($471).valueOf()==(period$.months).valueOf())){
return period$;
}
return Period(period$.years,$471,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMonths')];},d:['ceylon.time','Period','$m','withMonths']};};
period$.withDays=function($472){
var period$=this;
if((($472).valueOf()==(period$.days).valueOf())){
return period$;
}
return Period(period$.years,period$.months,$472,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withDays')];},d:['ceylon.time','Period','$m','withDays']};};
period$.withHours=function($473){
var period$=this;
if((($473).valueOf()==(period$.hours).valueOf())){
return period$;
}
return Period(period$.years,period$.months,period$.days,$473,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withHours')];},d:['ceylon.time','Period','$m','withHours']};};
period$.withMinutes=function($474){
var period$=this;
if((($474).valueOf()==(period$.minutes).valueOf())){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,$474,period$.seconds,period$.milliseconds);
};period$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMinutes')];},d:['ceylon.time','Period','$m','withMinutes']};};
period$.withSeconds=function($475){
var period$=this;
if((($475).valueOf()==(period$.seconds).valueOf())){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,$475,period$.milliseconds);
};period$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withSeconds')];},d:['ceylon.time','Period','$m','withSeconds']};};
period$.withMilliseconds=function($476){
var period$=this;
if((($476).valueOf()==(period$.milliseconds).valueOf())){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,$476);
};period$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMilliseconds')];},d:['ceylon.time','Period','$m','withMilliseconds']};};
period$.plusYears=function($477){
var period$=this;
return period$.withYears(period$.years.plus($477));
};period$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusYears')];},d:['ceylon.time','Period','$m','plusYears']};};
period$.plusMonths=function($478){
var period$=this;
return period$.withMonths(period$.months.plus($478));
};period$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMonths')];},d:['ceylon.time','Period','$m','plusMonths']};};
period$.plusDays=function($479){
var period$=this;
return period$.withDays(period$.days.plus($479));
};period$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusDays')];},d:['ceylon.time','Period','$m','plusDays']};};
period$.plusHours=function($47a){
var period$=this;
return period$.withHours(period$.hours.plus($47a));
};period$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusHours')];},d:['ceylon.time','Period','$m','plusHours']};};
period$.plusMinutes=function($47b){
var period$=this;
return period$.withMinutes(period$.minutes.plus($47b));
};period$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMinutes')];},d:['ceylon.time','Period','$m','plusMinutes']};};
period$.plusSeconds=function($47c){
var period$=this;
return period$.withSeconds(period$.seconds.plus($47c));
};period$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusSeconds')];},d:['ceylon.time','Period','$m','plusSeconds']};};
period$.plusMilliseconds=function($47d){
var period$=this;
return period$.withMilliseconds(period$.milliseconds.plus($47d));
};period$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMilliseconds')];},d:['ceylon.time','Period','$m','plusMilliseconds']};};
period$.minusYears=function($47e){
var period$=this;
return period$.plusYears((-$47e));
};period$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusYears')];},d:['ceylon.time','Period','$m','minusYears']};};
period$.minusMonths=function($47f){
var period$=this;
return period$.plusMonths((-$47f));
};period$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMonths')];},d:['ceylon.time','Period','$m','minusMonths']};};
period$.minusDays=function($47g){
var period$=this;
return period$.plusDays((-$47g));
};period$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusDays')];},d:['ceylon.time','Period','$m','minusDays']};};
period$.minusHours=function($47h){
var period$=this;
return period$.plusHours((-$47h));
};period$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusHours')];},d:['ceylon.time','Period','$m','minusHours']};};
period$.minusMinutes=function($47i){
var period$=this;
return period$.plusMinutes((-$47i));
};period$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMinutes')];},d:['ceylon.time','Period','$m','minusMinutes']};};
period$.minusSeconds=function($47j){
var period$=this;
return period$.plusSeconds((-$47j));
};period$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusSeconds')];},d:['ceylon.time','Period','$m','minusSeconds']};};
period$.minusMilliseconds=function($47k){
var period$=this;
return period$.plusMilliseconds((-$47k));
};period$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMilliseconds')];},d:['ceylon.time','Period','$m','minusMilliseconds']};};
period$.plus=function($47l){
var period$=this;
return ($47m=period$.years.plus($47l.years),$47n=period$.months.plus($47l.months),$47o=period$.days.plus($47l.days),$47p=period$.hours.plus($47l.hours),$47q=period$.minutes.plus($47l.minutes),$47r=period$.seconds.plus($47l.seconds),$47s=period$.milliseconds.plus($47l.milliseconds),Period($47m,$47n,$47o,$47p,$47q,$47r,$47s));
var $47m,$47n,$47o,$47p,$47q,$47r,$47s;
};period$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plus')];},d:['ceylon.time','Period','$m','plus']};};
m$1.atr$(period$,'dateOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:dateOnly')];},d:['ceylon.time','Period','$at','dateOnly']};});m$1.atr$(period$,'timeOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:timeOnly')];},d:['ceylon.time','Period','$at','timeOnly']};});period$.normalized=function(){
var period$=this;
if(period$.equals(zero())){
return zero();
}
var $47t=period$.years.plus(period$.months.divided(12));
var $47u=period$.months.remainder(12);
var $47v=period$.hours.times(seconds$base().perHour).plus(period$.minutes.times(seconds$base().perMinute)).plus(period$.seconds);
var $47w=period$.milliseconds.remainder(milliseconds$base().perSecond);
($47v=$47v.plus(period$.milliseconds.divided(milliseconds$base().perSecond)));
var $47x=$47v.remainder(seconds$base().perMinute);
$47v=$47v.divided(seconds$base().perMinute);
var $47y=$47v.remainder(minutes$base().perHour);
var $47z=$47v.divided(minutes$base().perHour);
return ($480=$47t,$481=$47u,$482=period$.days,$483=$47z,$484=$47y,$485=$47x,$486=$47w,Period($480,$481,$482,$483,$484,$485,$486));
var $480,$481,$482,$483,$484,$485,$486;
};period$.normalized.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:normalized')];},d:['ceylon.time','Period','$m','normalized']};};
m$1.atr$(period$,'string',function(){
var period$=this;
if(period$.equals(zero())){
return "PT0S";
}
else{
var $487=($488=m$1.for$(function(){
var $489=m$1.tpl$([m$1.tpl$([period$.years,"Y"]),m$1.tpl$([period$.months,"M"]),m$1.tpl$([period$.days,"D"])]).iterator(),$48a=m$1.finished();
var n$48a=function(){
while(($48a=$489.next())!==m$1.finished()){
if(!($48a.$_get(0)==0)){
return $48a;
}
}
return m$1.finished();
}
return function(){
if(n$48a()!==m$1.finished()){
var $48b=$48a,$48c="".$_join($48b);
return $48c;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}}).sequence(),($48d="",m$1.JsCallable($48d,m$1.nn$($48d)?$48d.$_join:null))($488));
var $488,$48d;
if(!(period$.hours.or(period$.minutes).or(period$.seconds).or(period$.milliseconds)==0)){
var $48e=($48f=m$1.for$(function(){
var $48g=m$1.tpl$([m$1.tpl$([period$.hours,0,"H"]),m$1.tpl$([period$.minutes,0,"M"]),m$1.tpl$([period$.seconds,period$.milliseconds,"S"])]).iterator(),$48h=m$1.finished();
var n$48h=function(){
while(($48h=$48g.next())!==m$1.finished()){
if(!($48h.$_get(0).or($48h.$_get(1))==0)){
return $48h;
}
}
return m$1.finished();
}
return function(){
if(n$48h()!==m$1.finished()){
var $48i=$48h,$48j=($48k=((($48i.$_get(1)).valueOf()==(0).valueOf())?$48i.$_get(0).string.plus($48i.$_get(2)):null),m$1.nn$($48k)?$48k:"".plus($48i.$_get(0).string).plus(".").plus($48i.$_get(1).string.padLeading(3,m$1.Character(48,true))).plus("").plus($48i.$_get(2)));
return $48j;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}}).sequence(),($48l="",m$1.JsCallable($48l,m$1.nn$($48l)?$48l.$_join:null))($48f));
var $48f,$48k,$48l;
return "P".plus($487).plus("T").plus($48e).plus("");
}
else{
return "P".plus($487).plus("");
}
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:string')];},d:['ceylon.time','Period','$at','string']};});period$.scale=function($48m){var period$=this;
return ($48n=$48m.times(period$.years),$48o=$48m.times(period$.months),$48p=$48m.times(period$.days),$48q=$48m.times(period$.hours),$48r=$48m.times(period$.minutes),$48s=$48m.times(period$.seconds),$48t=$48m.times(period$.milliseconds),Period($48n,$48o,$48p,$48q,$48r,$48s,$48t));};
period$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:scale')];},d:['ceylon.time','Period','$m','scale']};};
})(Period.$$.prototype);
}
return Period;
}
ex$.$init$Period=$init$Period;
$init$Period();
var $48n,$48o,$48p,$48q,$48r,$48s,$48t;
var $48u;function $valinit$$48u(){if($48u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'zero\' before it was set"),'319:0-320:29','Period.ceylon');
if($48u===undefined){$48u=m$1.INIT$;$48u=Period()};return $48u;};
function zero(){return $valinit$$48u();}
ex$.zero=zero;
var $prop$getZero={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:zero')];},d:['ceylon.time','zero']};}};
ex$.$prop$getZero=$prop$getZero;
$prop$getZero.get=zero;
zero.$crtmm$=$prop$getZero.$crtmm$;
function Time(time$){
ReadableTime$base(time$);
TimeBehavior$base({Element$TimeBehavior:{t:Time}},time$);
m$1.Comparable({Other$Comparable:{t:Time}},time$);
m$1.Ordinal({Other$Ordinal:{t:Time}},time$);
m$1.Enumerable({Other$Enumerable:{t:Time}},time$);
}
Time.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableTime$base},{t:TimeBehavior$base,a:{Element$TimeBehavior:{t:Time}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Time}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:Time}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Time}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time')];},d:['ceylon.time','Time']};};
ex$.Time=Time;
function $init$Time(){
if(Time.$$===undefined){
m$1.initTypeProtoI(Time,'ceylon.time::Time',$init$ReadableTime$base(),$init$TimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(time$){
time$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:plus')];},d:['ceylon.time','Time','$m','plus']};}};time$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:minus')];},d:['ceylon.time','Time','$m','minus']};}};time$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodFrom')];},d:['ceylon.time','Time','$m','periodFrom']};}};time$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodTo')];},d:['ceylon.time','Time','$m','periodTo']};}};time$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:rangeTo')];},d:['ceylon.time','Time','$m','rangeTo']};}};
})(Time.$$.prototype);
}
return Time;
}
ex$.$init$Time=$init$Time;
$init$Time();
function time($48v,$48w,$48x,$48y){
if($48x===undefined){$48x=(0);}
if($48y===undefined){$48y=(0);}
m$1.asrt$((($48z=$48v,$48z.compare((0))!==m$1.smaller()&&$48z.compare(hours$base().perDay)===m$1.smaller())),"Hours value should be between 0 and 23.: \' 0 <= hours < h.perDay \' at Time.ceylon (60:10-60:34)",'59:4-60:35','Time.ceylon');
m$1.asrt$((($490=$48w,$490.compare((0))!==m$1.smaller()&&$490.compare(minutes$base().perHour)===m$1.smaller())),"Minutes value should be between 0 and 59.: \' 0 <= minutes < min.perHour \' at Time.ceylon (63:10-63:39)",'62:4-63:40','Time.ceylon');
m$1.asrt$((($491=$48x,$491.compare((0))!==m$1.smaller()&&$491.compare(seconds$base().perMinute)===m$1.smaller())),"Seconds value should be between 0 and 59.: \' 0 <= seconds < sec.perMinute \' at Time.ceylon (66:10-66:41)",'65:4-66:42','Time.ceylon');
m$1.asrt$((($492=$48y,$492.compare((0))!==m$1.smaller()&&$492.compare(milliseconds$base().perSecond)===m$1.smaller())),"Milliseconds value should be between 0 and 999.: \' 0 <= milliseconds < ms.perSecond \' at Time.ceylon (69:10-69:45)",'68:4-69:46','Time.ceylon');
var $493=$48v.times(milliseconds$base().perHour);
var $494=$48w.times(milliseconds$base().perMinute);
var $495=$48x.times(milliseconds$base().perSecond);
return TimeOfDay$internal($493.plus($494).plus($495).plus($48y));
}
ex$.time=time;
time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("Hours of the day (0..23).")];}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc("Minutes of the hour (0..59).")];}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("Seconds of the minute (0..59).")];}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("Milliseconds of the second (0..999).")];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:time')];},d:['ceylon.time','time']};};
function TimeRange(from,to,step,timeRange$){
$init$TimeRange();
if(timeRange$===undefined)timeRange$=new TimeRange.$$;
timeRange$.$$targs$$={Element$Range:{t:Time},StepBy$Range:{t:UnitOfTime$base}};
timeRange$.from_=from;
timeRange$.to_=to;
if(step===undefined){step=milliseconds$base();}
timeRange$.step_=step;
Range$base({Element$Range:{t:Time},StepBy$Range:{t:UnitOfTime$base}},timeRange$);
return timeRange$;
}
TimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfTime$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];}}],sts:[{t:Range$base,a:{Element$Range:{t:Time},StepBy$Range:{t:UnitOfTime$base}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)].$sa$({t:m$1.Declaration$meta$declaration}))];},d:['ceylon.time','TimeRange']};};
ex$.TimeRange=TimeRange;
function $init$TimeRange(){
if(TimeRange.$$===undefined){
m$1.initTypeProto(TimeRange,'ceylon.time::TimeRange',m$1.Basic,$init$Range$base());
(function(timeRange$){
m$1.atr$(timeRange$,'from',function(){return this.from_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];},d:['ceylon.time','TimeRange','$at','from']};});
m$1.atr$(timeRange$,'to',function(){return this.to_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];},d:['ceylon.time','TimeRange','$at','to']};});
m$1.atr$(timeRange$,'step',function(){return this.step_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfTime$base},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];},d:['ceylon.time','TimeRange','$at','step']};});
m$1.atr$(timeRange$,'period',function(){
var timeRange$=this;
return timeRange$.from.periodTo(timeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:period')];},d:['ceylon.time','TimeRange','$at','period']};});
m$1.atr$(timeRange$,'duration',function(){
var timeRange$=this;
return Duration(timeRange$.to.millisecondsOfDay.minus(timeRange$.from.millisecondsOfDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:duration')];},d:['ceylon.time','TimeRange','$at','duration']};});
timeRange$.equals=function($496){var timeRange$=this;
return timeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(timeRange$,$496);};
timeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:equals')];},d:['ceylon.time','TimeRange','$m','equals']};};
m$1.atr$(timeRange$,'hash',function(){
var timeRange$=this;
return m$1.attrGetter(timeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:hash')];},d:['ceylon.time','TimeRange','$at','hash']};});
timeRange$.overlap=function($497){
var timeRange$=this;
var $498=overlap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$497.from,$497.to]),{Value$overlap:{t:Time}});
var $499;
if(m$1.is$(($499=$498),m$1.mtt$([{t:Time},{t:Time}]))){
return TimeRange($499.$_get(0),$499.$_get(1));
}
else{
return $499;
}
};timeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:Time},StepBy$Range:{t:UnitOfTime$base}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:overlap')];},d:['ceylon.time','TimeRange','$m','overlap']};};
timeRange$.gap=function($49a){
var timeRange$=this;
var $49b=gap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$49a.from,$49a.to]),{Value$gap:{t:Time}});
var $49c=$49b;
if(m$1.is$($49c,m$1.mtt$([{t:Time},{t:Time}]))) {
return ($49d=($49c.$_get(0).successor.compare($49c.$_get(1)).equals(m$1.smaller())?TimeRange($49c.$_get(0).successor,$49c.$_get(1).predecessor):null),m$1.nn$($49d)?$49d:m$1.empty());
var $49d;
}
else if(m$1.is$($49c,{t:m$1.Empty})) {
return $49c;
}
};timeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{Element$Range:{t:Time},StepBy$Range:{t:UnitOfTime$base}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:gap')];},d:['ceylon.time','TimeRange','$m','gap']};};
timeRange$.iterator=function(){
var timeRange$=this;
function $49e($$targs$$){
var $49e$=new $49e.$$;$49e$.outer$=timeRange$;
$49e$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:Time}},$49e$);
$49e$.$wgb6s9$49g_=(0);
$49e$.$prop$get$wgb6s9$49g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$49e,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};}};
$49e$.$prop$get$wgb6s9$49g.get=function(){return $wgb6s9$49g};
return $49e$;
};$49e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:timeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}}],d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha']};};
function $init$$49e(){
if($49e.$$===undefined){
m$1.initTypeProto($49e,'ceylon.time::TimeRange.listIterator',m$1.Basic,m$1.Iterator);
(function($49e$){
m$1.atr$($49e$,'$wgb6s9$49g',function(){return this.$wgb6s9$49g_;},function($49h){return this.$wgb6s9$49g_=$49h;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$49e,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};});
$49e$.next=function(){
var $49e$=this;
var $49i=($49j=(timeRange$.from.compare(timeRange$.to).equals(m$1.larger())?timeRange$.$wgb6s9$49k(($49l=$49e$.$wgb6s9$49g,$49e$.$wgb6s9$49g=$49l.successor,$49l)):null),m$1.nn$($49j)?$49j:timeRange$.$wgb6s9$49m(($49n=$49e$.$wgb6s9$49g,$49e$.$wgb6s9$49g=$49n.successor,$49n)));
var $49j,$49l,$49n;
var $49o=($49p=((timeRange$.from.compare(timeRange$.to)!==m$1.larger())?($49i.compare(timeRange$.to)!==m$1.larger()):null),m$1.nn$($49p)?$49p:(($49i.compare(timeRange$.to)!==m$1.smaller())&&($49i.compare(timeRange$.from)!==m$1.larger())));
var $49p;
return ($49q=($49o?$49i:null),m$1.nn$($49q)?$49q:m$1.finished());
var $49q;
};$49e$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Time},{t:m$1.Finished}]},ps:[],$cont:$49e,pa:3,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$m','next']};};
})($49e.$$.prototype);
}
return $49e;
}
timeRange$.$init$$49e=$init$$49e;
$init$$49e();
var $49r;
function $49f(){
if($49r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'121:8-128:8','TimeRange.ceylon');
if($49r===undefined){$49r=m$1.INIT$;$49r=$init$$49e()({Element$Iterator:{t:Time}});$49r.$crtmm$=$49f.$crtmm$;}
return $49r;
}
$49f.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$49e()},$cont:timeRange$.iterator,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwhb']};};
$prop$get$49e=$49f;
$49f();
return $49f();
};timeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}},ps:[],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:iterator')];},d:['ceylon.time','TimeRange','$m','iterator']};};
timeRange$.stepBy=function($49s){
var timeRange$=this;
return ($49t=($49s.equals(timeRange$.step)?timeRange$:null),m$1.nn$($49t)?$49t:TimeRange(timeRange$.from,timeRange$.to,$49s));
var $49t;
};timeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfTime$base}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:stepBy')];},d:['ceylon.time','TimeRange','$m','stepBy']};};
timeRange$.$wgb6s9$49m$defs$jump=function($49u){return 1;};
timeRange$.$wgb6s9$49m=function($49u){
var timeRange$=this;
if($49u===undefined){$49u=timeRange$.$wgb6s9$49m$defs$jump($49u);}
var $49v=timeRange$.step;
if(m$1.is$($49v,{t:UnitOfHour$base})) {
return timeRange$.from.plusHours($49u);
}
else if(m$1.is$($49v,{t:UnitOfMinute$base})) {
return timeRange$.from.plusMinutes($49u);
}
else if(m$1.is$($49v,{t:UnitOfSecond$base})) {
return timeRange$.from.plusSeconds($49u);
}
else if(m$1.is$($49v,{t:UnitOfMillisecond$base})) {
return timeRange$.from.plusMilliseconds($49u);
}
};timeRange$.$wgb6s9$49m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:nextByStep$9cla77')];},d:['ceylon.time','TimeRange','$m','nextByStep$9cla77']};};
timeRange$.$wgb6s9$49k$defs$jump=function($49w){return 1;};
timeRange$.$wgb6s9$49k=function($49w){
var timeRange$=this;
if($49w===undefined){$49w=timeRange$.$wgb6s9$49k$defs$jump($49w);}
var $49x=timeRange$.step;
if(m$1.is$($49x,{t:UnitOfHour$base})) {
return timeRange$.from.minusHours($49w);
}
else if(m$1.is$($49x,{t:UnitOfMinute$base})) {
return timeRange$.from.minusMinutes($49w);
}
else if(m$1.is$($49x,{t:UnitOfSecond$base})) {
return timeRange$.from.minusSeconds($49w);
}
else if(m$1.is$($49x,{t:UnitOfMillisecond$base})) {
return timeRange$.from.minusMilliseconds($49w);
}
};timeRange$.$wgb6s9$49k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:previousByStep$1wvr21')];},d:['ceylon.time','TimeRange','$m','previousByStep$1wvr21']};};
})(TimeRange.$$.prototype);
}
return TimeRange;
}
ex$.$init$TimeRange=$init$TimeRange;
$init$TimeRange();
function AtTime$timezone$model(time,letter,atTime$){
$init$AtTime$timezone$model();
if(atTime$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::AtTime"),'?','?')
atTime$.time_=time;
atTime$.letter_=letter;
return atTime$;
}
AtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'time',mt:'prm',$t:{t:Time},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],of:[{t:AtWallClockTime$timezone$model},{t:AtLocalMeanTime$timezone$model},{t:AtGmtTime$timezone$model},{t:AtUtcTime$timezone$model},{t:AtNauticalTime$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtTime')];},d:['ceylon.time.timezone.model','AtTime']};};
ex$.AtTime$timezone$model=AtTime$timezone$model;
function $init$AtTime$timezone$model(){
if(AtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtTime$timezone$model,'ceylon.time.timezone.model::AtTime',m$1.Basic);
(function(atTime$){
m$1.atr$(atTime$,'time',function(){return this.time_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','time']};});
m$1.atr$(atTime$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','letter']};});
atTime$.equals=function($49y){
var atTime$=this;
var $49z;
if(m$1.is$(($49z=$49y),{t:AtTime$timezone$model})){
return (atTime$.time.equals($49z.time)&&atTime$.letter.equals($49z.letter));
}
function $4a0(){return $49y;}
return false;
};atTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$m','equals']};};
m$1.atr$(atTime$,'string',function(){
var atTime$=this;
return "time: \'".plus(atTime$.time.string).plus("\', letter: \'").plus(atTime$.letter).plus("\'");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$at','string']};});
})(AtTime$timezone$model.$$.prototype);
}
return AtTime$timezone$model;
}
ex$.$init$AtTime$timezone$model=$init$AtTime$timezone$model;
$init$AtTime$timezone$model();
function AtWallClockTime$timezone$model($wgb6s9$4a1,atWallClockTime$){
$init$AtWallClockTime$timezone$model();
if(atWallClockTime$===undefined)atWallClockTime$=new AtWallClockTime$timezone$model.$$;
atWallClockTime$.$wgb6s9$4a1_=$wgb6s9$4a1;
AtTime$timezone$model($wgb6s9$4a1,"u",atWallClockTime$);
return atWallClockTime$;
}
AtWallClockTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtWallClockTime')];},d:['ceylon.time.timezone.model','AtWallClockTime']};};
ex$.AtWallClockTime$timezone$model=AtWallClockTime$timezone$model;
function $init$AtWallClockTime$timezone$model(){
if(AtWallClockTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtWallClockTime$timezone$model,'ceylon.time.timezone.model::AtWallClockTime',$init$AtTime$timezone$model());
(function(atWallClockTime$){
m$1.atr$(atWallClockTime$,'$wgb6s9$4a1',function(){return this.$wgb6s9$4a1_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtWallClockTime$timezone$model,d:['ceylon.time.timezone.model','AtWallClockTime','$at','time$h07jro']};});
})(AtWallClockTime$timezone$model.$$.prototype);
}
return AtWallClockTime$timezone$model;
}
ex$.$init$AtWallClockTime$timezone$model=$init$AtWallClockTime$timezone$model;
$init$AtWallClockTime$timezone$model();
function AtLocalMeanTime$timezone$model($wgb6s9$4a2,atLocalMeanTime$){
$init$AtLocalMeanTime$timezone$model();
if(atLocalMeanTime$===undefined)atLocalMeanTime$=new AtLocalMeanTime$timezone$model.$$;
atLocalMeanTime$.$wgb6s9$4a2_=$wgb6s9$4a2;
AtTime$timezone$model($wgb6s9$4a2,"s",atLocalMeanTime$);
return atLocalMeanTime$;
}
AtLocalMeanTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtLocalMeanTime')];},d:['ceylon.time.timezone.model','AtLocalMeanTime']};};
ex$.AtLocalMeanTime$timezone$model=AtLocalMeanTime$timezone$model;
function $init$AtLocalMeanTime$timezone$model(){
if(AtLocalMeanTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtLocalMeanTime$timezone$model,'ceylon.time.timezone.model::AtLocalMeanTime',$init$AtTime$timezone$model());
(function(atLocalMeanTime$){
m$1.atr$(atLocalMeanTime$,'$wgb6s9$4a2',function(){return this.$wgb6s9$4a2_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtLocalMeanTime$timezone$model,d:['ceylon.time.timezone.model','AtLocalMeanTime','$at','time$2ab90g']};});
})(AtLocalMeanTime$timezone$model.$$.prototype);
}
return AtLocalMeanTime$timezone$model;
}
ex$.$init$AtLocalMeanTime$timezone$model=$init$AtLocalMeanTime$timezone$model;
$init$AtLocalMeanTime$timezone$model();
function AtGmtTime$timezone$model($wgb6s9$4a3,atGmtTime$){
$init$AtGmtTime$timezone$model();
if(atGmtTime$===undefined)atGmtTime$=new AtGmtTime$timezone$model.$$;
atGmtTime$.$wgb6s9$4a3_=$wgb6s9$4a3;
AtTime$timezone$model($wgb6s9$4a3,"g",atGmtTime$);
return atGmtTime$;
}
AtGmtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("GMT time rule.")];},d:['ceylon.time.timezone.model','AtGmtTime']};};
ex$.AtGmtTime$timezone$model=AtGmtTime$timezone$model;
function $init$AtGmtTime$timezone$model(){
if(AtGmtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtGmtTime$timezone$model,'ceylon.time.timezone.model::AtGmtTime',$init$AtTime$timezone$model());
(function(atGmtTime$){
m$1.atr$(atGmtTime$,'$wgb6s9$4a3',function(){return this.$wgb6s9$4a3_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtGmtTime$timezone$model,d:['ceylon.time.timezone.model','AtGmtTime','$at','time$oxfz9q']};});
})(AtGmtTime$timezone$model.$$.prototype);
}
return AtGmtTime$timezone$model;
}
ex$.$init$AtGmtTime$timezone$model=$init$AtGmtTime$timezone$model;
$init$AtGmtTime$timezone$model();
function AtUtcTime$timezone$model($wgb6s9$4a4,atUtcTime$){
$init$AtUtcTime$timezone$model();
if(atUtcTime$===undefined)atUtcTime$=new AtUtcTime$timezone$model.$$;
atUtcTime$.$wgb6s9$4a4_=$wgb6s9$4a4;
AtTime$timezone$model($wgb6s9$4a4,"u",atUtcTime$);
return atUtcTime$;
}
AtUtcTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("UTC time rule.")];},d:['ceylon.time.timezone.model','AtUtcTime']};};
ex$.AtUtcTime$timezone$model=AtUtcTime$timezone$model;
function $init$AtUtcTime$timezone$model(){
if(AtUtcTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtUtcTime$timezone$model,'ceylon.time.timezone.model::AtUtcTime',$init$AtTime$timezone$model());
(function(atUtcTime$){
m$1.atr$(atUtcTime$,'$wgb6s9$4a4',function(){return this.$wgb6s9$4a4_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtUtcTime$timezone$model,d:['ceylon.time.timezone.model','AtUtcTime','$at','time$cqe33g']};});
})(AtUtcTime$timezone$model.$$.prototype);
}
return AtUtcTime$timezone$model;
}
ex$.$init$AtUtcTime$timezone$model=$init$AtUtcTime$timezone$model;
$init$AtUtcTime$timezone$model();
function AtNauticalTime$timezone$model($wgb6s9$4a5,atNauticalTime$){
$init$AtNauticalTime$timezone$model();
if(atNauticalTime$===undefined)atNauticalTime$=new AtNauticalTime$timezone$model.$$;
atNauticalTime$.$wgb6s9$4a5_=$wgb6s9$4a5;
AtTime$timezone$model($wgb6s9$4a5,"z",atNauticalTime$);
return atNauticalTime$;
}
AtNauticalTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("Nautical time rule.")];},d:['ceylon.time.timezone.model','AtNauticalTime']};};
ex$.AtNauticalTime$timezone$model=AtNauticalTime$timezone$model;
function $init$AtNauticalTime$timezone$model(){
if(AtNauticalTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtNauticalTime$timezone$model,'ceylon.time.timezone.model::AtNauticalTime',$init$AtTime$timezone$model());
(function(atNauticalTime$){
m$1.atr$(atNauticalTime$,'$wgb6s9$4a5',function(){return this.$wgb6s9$4a5_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtNauticalTime$timezone$model,d:['ceylon.time.timezone.model','AtNauticalTime','$at','time$5xyi0b']};});
})(AtNauticalTime$timezone$model.$$.prototype);
}
return AtNauticalTime$timezone$model;
}
ex$.$init$AtNauticalTime$timezone$model=$init$AtNauticalTime$timezone$model;
$init$AtNauticalTime$timezone$model();
function RealName$timezone$model(){var $4a6={t:m$1.$_String};$4a6.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:RealName')];},d:['ceylon.time.timezone.model','RealName']};};return $4a6;}
ex$.RealName$timezone$model=RealName$timezone$model;
function AliasName$timezone$model(){var $4a7={t:m$1.$_String};$4a7.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AliasName')];},d:['ceylon.time.timezone.model','AliasName']};};return $4a7;}
ex$.AliasName$timezone$model=AliasName$timezone$model;
function Link$timezone$model(){var $4a8=m$1.mtt$([{t:m$1.$_String},{t:m$1.$_String}]);$4a8.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Link')];},d:['ceylon.time.timezone.model','Link']};};return $4a8;}
ex$.Link$timezone$model=Link$timezone$model;
function DayOfMonth$timezone$model(){var $4a9={t:m$1.Integer};$4a9.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc("Alias to represent a specific day.")];},d:['ceylon.time.timezone.model','DayOfMonth']};};return $4a9;}
ex$.DayOfMonth$timezone$model=DayOfMonth$timezone$model;
function OnDay$timezone$model(onDay$){
$init$OnDay$timezone$model();
if(onDay$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::OnDay"),'?','?')
return onDay$;
}
OnDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[{t:OnFixedDay$timezone$model},{t:OnFirstOfMonth$timezone$model},{t:OnLastOfMonth$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnDay')];},d:['ceylon.time.timezone.model','OnDay']};};
ex$.OnDay$timezone$model=OnDay$timezone$model;
function $init$OnDay$timezone$model(){
if(OnDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnDay$timezone$model,'ceylon.time.timezone.model::OnDay',m$1.Basic);
(function(onDay$){
onDay$.date={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnDay$timezone$model,pa:5,d:['ceylon.time.timezone.model','OnDay','$m','date']};}};
})(OnDay$timezone$model.$$.prototype);
}
return OnDay$timezone$model;
}
ex$.$init$OnDay$timezone$model=$init$OnDay$timezone$model;
$init$OnDay$timezone$model();
function OnFixedDay$timezone$model(fixedDate,onFixedDay$){
$init$OnFixedDay$timezone$model();
if(onFixedDay$===undefined)onFixedDay$=new OnFixedDay$timezone$model.$$;
onFixedDay$.fixedDate_=fixedDate;
OnDay$timezone$model(onFixedDay$);
return onFixedDay$;
}
OnFixedDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'fixedDate',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFixedDay')];},d:['ceylon.time.timezone.model','OnFixedDay']};};
ex$.OnFixedDay$timezone$model=OnFixedDay$timezone$model;
function $init$OnFixedDay$timezone$model(){
if(OnFixedDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnFixedDay$timezone$model,'ceylon.time.timezone.model::OnFixedDay',$init$OnDay$timezone$model());
(function(onFixedDay$){
m$1.atr$(onFixedDay$,'fixedDate',function(){return this.fixedDate_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFixedDay$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFixedDay','$at','fixedDate']};});
onFixedDay$.equals=function($4aa){
var onFixedDay$=this;
var $4ab;
if(m$1.is$(($4ab=$4aa),{t:OnFixedDay$timezone$model})){
return ((onFixedDay$.fixedDate).valueOf()==($4ab.fixedDate).valueOf());
}
function $4ac(){return $4aa;}
return false;
};onFixedDay$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','equals']};};
onFixedDay$.date=function($4ad,$4ae){
var onFixedDay$=this;
return date($4ad,$4ae,onFixedDay$.fixedDate);
};onFixedDay$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','date']};};
})(OnFixedDay$timezone$model.$$.prototype);
}
return OnFixedDay$timezone$model;
}
ex$.$init$OnFixedDay$timezone$model=$init$OnFixedDay$timezone$model;
$init$OnFixedDay$timezone$model();
function OnFirstOfMonth$timezone$model(dayOfWeek,onDateOrAfter,onFirstOfMonth$){
$init$OnFirstOfMonth$timezone$model();
if(onFirstOfMonth$===undefined)onFirstOfMonth$=new OnFirstOfMonth$timezone$model.$$;
onFirstOfMonth$.dayOfWeek_=dayOfWeek;
onFirstOfMonth$.onDateOrAfter_=onDateOrAfter;
OnDay$timezone$model(onFirstOfMonth$);
return onFirstOfMonth$;
}
OnFirstOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1},{nm:'onDateOrAfter',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFirstOfMonth')];},d:['ceylon.time.timezone.model','OnFirstOfMonth']};};
ex$.OnFirstOfMonth$timezone$model=OnFirstOfMonth$timezone$model;
function $init$OnFirstOfMonth$timezone$model(){
if(OnFirstOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnFirstOfMonth$timezone$model,'ceylon.time.timezone.model::OnFirstOfMonth',$init$OnDay$timezone$model());
(function(onFirstOfMonth$){
m$1.atr$(onFirstOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','dayOfWeek']};});
m$1.atr$(onFirstOfMonth$,'onDateOrAfter',function(){return this.onDateOrAfter_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','onDateOrAfter']};});
onFirstOfMonth$.equals=function($4af){
var onFirstOfMonth$=this;
var $4ag;
if(m$1.is$(($4ag=$4af),{t:OnFirstOfMonth$timezone$model})){
return (((onFirstOfMonth$.onDateOrAfter).valueOf()==($4ag.onDateOrAfter).valueOf())&&onFirstOfMonth$.dayOfWeek.equals($4ag.dayOfWeek));
}
function $4ah(){return $4af;}
return false;
};onFirstOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','equals']};};
onFirstOfMonth$.date=function($4ai,$4aj){
var onFirstOfMonth$=this;
var $4ak=date($4ai,$4aj,onFirstOfMonth$.onDateOrAfter);
var $4al;
m$1.asrt$((m$1.nn$(($4al=$4ak.rangeTo($4ak.withDay($4aj.numberOfDays($4ak.leapYear))).find(m$1.$JsCallable(m$1.JsCallable(onFirstOfMonth$,onFirstOfMonth$.$wgb6s9$4am),[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],{Arguments$Callable:m$1.mtt$([{t:$_Date}]),Return$Callable:{t:m$1.$_Boolean}}))))),"onDateOrAfter should always be a valid day for the month: \'exists result = initial.rangeTo(initial.withDay(month.numberOfDays(initial.leapYear))).find(matchesDayOfWeekAndDay)\' at OnDay.ceylon (66:14-66:130)",'65:8-66:131','OnDay.ceylon');
return $4al;
};onFirstOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','date']};};
onFirstOfMonth$.$wgb6s9$4am=function($4an){
var onFirstOfMonth$=this;
return (($4an.day>=onFirstOfMonth$.onDateOrAfter)&&$4an.dayOfWeek.equals(onFirstOfMonth$.dayOfWeek));
};onFirstOfMonth$.$wgb6s9$4am.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],$cont:OnFirstOfMonth$timezone$model,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','matchesDayOfWeekAndDay$42vt2u']};};
})(OnFirstOfMonth$timezone$model.$$.prototype);
}
return OnFirstOfMonth$timezone$model;
}
ex$.$init$OnFirstOfMonth$timezone$model=$init$OnFirstOfMonth$timezone$model;
$init$OnFirstOfMonth$timezone$model();
function OnLastOfMonth$timezone$model(dayOfWeek,onLastOfMonth$){
$init$OnLastOfMonth$timezone$model();
if(onLastOfMonth$===undefined)onLastOfMonth$=new OnLastOfMonth$timezone$model.$$;
onLastOfMonth$.dayOfWeek_=dayOfWeek;
OnDay$timezone$model(onLastOfMonth$);
return onLastOfMonth$;
}
OnLastOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnLastOfMonth')];},d:['ceylon.time.timezone.model','OnLastOfMonth']};};
ex$.OnLastOfMonth$timezone$model=OnLastOfMonth$timezone$model;
function $init$OnLastOfMonth$timezone$model(){
if(OnLastOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnLastOfMonth$timezone$model,'ceylon.time.timezone.model::OnLastOfMonth',$init$OnDay$timezone$model());
(function(onLastOfMonth$){
m$1.atr$(onLastOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnLastOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnLastOfMonth','$at','dayOfWeek']};});
onLastOfMonth$.equals=function($4ao){
var onLastOfMonth$=this;
var $4ap;
if(m$1.is$(($4ap=$4ao),{t:OnLastOfMonth$timezone$model})){
return onLastOfMonth$.dayOfWeek.equals($4ap.dayOfWeek);
}
function $4aq(){return $4ao;}
return false;
};onLastOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','equals']};};
onLastOfMonth$.date=function($4ar,$4as){
var onLastOfMonth$=this;
var $4at=date($4ar,$4as,$4as.numberOfDays(gregorian$chronology().leapYear($4ar)));
var $4au=$4at.rangeTo($4at.withDay(1)).find(m$1.$JsCallable((function($4av){return $4av.dayOfWeek.equals(onLastOfMonth$.dayOfWeek);}),[{nm:'element',mt:'prm',$t:{t:$_Date}}],{Arguments$Callable:m$1.mtt$([{t:$_Date}]),Return$Callable:{t:m$1.$_Boolean}}));
var $4aw;
m$1.asrt$((m$1.nn$(($4aw=$4au))),"Assertion failed: \'exists result\' at OnDay.ceylon (98:14-98:28)",'98:8-98:29','OnDay.ceylon');
return $4aw;
};onLastOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','date']};};
})(OnLastOfMonth$timezone$model.$$.prototype);
}
return OnLastOfMonth$timezone$model;
}
ex$.$init$OnLastOfMonth$timezone$model=$init$OnLastOfMonth$timezone$model;
$init$OnLastOfMonth$timezone$model();
ex$.$pkg$ans$ceylon$time$timezone$model=function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model','$pkg-anns'),m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function Year$timezone$model(){var $4ax={t:m$1.Integer};$4ax.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Year')];},d:['ceylon.time.timezone.model','Year']};};return $4ax;}
ex$.Year$timezone$model=Year$timezone$model;
function Rule$timezone$model(fromYear,toYear,inMonth,onDay,atTime,save,letter,rule$){
$init$Rule$timezone$model();
if(rule$===undefined)rule$=new Rule$timezone$model.$$;
rule$.fromYear_=fromYear;
rule$.toYear_=toYear;
rule$.inMonth_=inMonth;
rule$.onDay_=onDay;
rule$.atTime_=atTime;
rule$.save_=save;
rule$.letter_=letter;
return rule$;
}
Rule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fromYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'toYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'inMonth',mt:'prm',$t:{t:Month$base},pa:1},{nm:'onDay',mt:'prm',$t:{t:OnDay$timezone$model},pa:1},{nm:'atTime',mt:'prm',$t:{t:AtTime$timezone$model},pa:1},{nm:'save',mt:'prm',$t:{t:Period},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,an:function(){return[m$1.doc("Timezone transition rule.")];},d:['ceylon.time.timezone.model','Rule']};};
ex$.Rule$timezone$model=Rule$timezone$model;
function $init$Rule$timezone$model(){
if(Rule$timezone$model.$$===undefined){
m$1.initTypeProto(Rule$timezone$model,'ceylon.time.timezone.model::Rule',m$1.Basic);
(function(rule$){
m$1.atr$(rule$,'fromYear',function(){return this.fromYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','fromYear']};});
m$1.atr$(rule$,'toYear',function(){return this.toYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','toYear']};});
m$1.atr$(rule$,'inMonth',function(){return this.inMonth_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','inMonth']};});
m$1.atr$(rule$,'onDay',function(){return this.onDay_;},undefined,function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','onDay']};});
m$1.atr$(rule$,'atTime',function(){return this.atTime_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','atTime']};});
m$1.atr$(rule$,'save',function(){return this.save_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','save']};});
m$1.atr$(rule$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','letter']};});
rule$.equals=function($4ay){
var rule$=this;
var $4az;
if(m$1.is$(($4az=$4ay),{t:Rule$timezone$model})){
return ((((((((rule$.fromYear).valueOf()==($4az.fromYear).valueOf())&&((rule$.toYear).valueOf()==($4az.toYear).valueOf()))&&rule$.inMonth.equals($4az.inMonth))&&rule$.onDay.equals($4az.onDay))&&rule$.atTime.equals($4az.atTime))&&rule$.save.equals($4az.save))&&rule$.letter.equals($4az.letter));
}
function $4b0(){return $4ay;}
return false;
};rule$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$m','equals']};};
m$1.atr$(rule$,'string',function(){
var rule$=this;
return "fromYear: \'".plus(rule$.fromYear.string).plus("\', toYear: \'").plus(rule$.toYear.string).plus("\', inMonth: \'").plus(rule$.inMonth.string).plus("\',\nonDay: \'").plus(rule$.onDay.string).plus("\', atTime: \'").plus(rule$.atTime.string).plus("\', save: \'").plus(rule$.save.string).plus("\', letter: \'").plus(rule$.letter).plus("\'");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$at','string']};});
})(Rule$timezone$model.$$.prototype);
}
return Rule$timezone$model;
}
ex$.$init$Rule$timezone$model=$init$Rule$timezone$model;
$init$Rule$timezone$model();
function ZoneFormat$timezone$model(zoneFormat$){
$init$ZoneFormat$timezone$model();
if(zoneFormat$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneFormat"),'?','?')
return zoneFormat$;
}
ZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneFormat$timezone$model,{t:AbbreviationZoneFormat$timezone$model},{t:PairAbbreviationZoneFormat$timezone$model},{t:ReplacedZoneFormat$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneFormat')];},d:['ceylon.time.timezone.model','ZoneFormat']};};
ex$.ZoneFormat$timezone$model=ZoneFormat$timezone$model;
function $init$ZoneFormat$timezone$model(){
if(ZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneFormat$timezone$model,'ceylon.time.timezone.model::ZoneFormat',m$1.Basic);
}
return ZoneFormat$timezone$model;
}
ex$.$init$ZoneFormat$timezone$model=$init$ZoneFormat$timezone$model;
$init$ZoneFormat$timezone$model();
function $4b1$timezone$model(){
var standardZoneFormat$=new $4b1$timezone$model.$$;ZoneFormat$timezone$model(standardZoneFormat$);
return standardZoneFormat$;
};$4b1$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},d:['ceylon.time.timezone.model','standardZoneFormat']};};
function $init$standardZoneFormat$timezone$model(){
if($4b1$timezone$model.$$===undefined){
m$1.initTypeProto($4b1$timezone$model,'ceylon.time.timezone.model::standardZoneFormat',$init$ZoneFormat$timezone$model());
}
return $4b1$timezone$model;
}
ex$.$init$standardZoneFormat$timezone$model=$init$standardZoneFormat$timezone$model;
$init$standardZoneFormat$timezone$model();
var $4b3;
function standardZoneFormat$timezone$model(){
if($4b3===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneFormat\' before it was set"),'12:0-12:54','ZoneFormat.ceylon');
if($4b3===undefined){$4b3=m$1.INIT$;$4b3=$init$standardZoneFormat$timezone$model()();$4b3.$crtmm$=standardZoneFormat$timezone$model.$crtmm$;}
return $4b3;
}
ex$.standardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
standardZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneFormat$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneFormat']};};
$prop$getStandardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
ex$.$prop$getStandardZoneFormat$timezone$model=$prop$getStandardZoneFormat$timezone$model;
function AbbreviationZoneFormat$timezone$model(abbreviation,abbreviationZoneFormat$){
$init$AbbreviationZoneFormat$timezone$model();
if(abbreviationZoneFormat$===undefined)abbreviationZoneFormat$=new AbbreviationZoneFormat$timezone$model.$$;
abbreviationZoneFormat$.abbreviation_=abbreviation;
ZoneFormat$timezone$model(abbreviationZoneFormat$);
return abbreviationZoneFormat$;
}
AbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'abbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat']};};
ex$.AbbreviationZoneFormat$timezone$model=AbbreviationZoneFormat$timezone$model;
function $init$AbbreviationZoneFormat$timezone$model(){
if(AbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(AbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::AbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(abbreviationZoneFormat$){
m$1.atr$(abbreviationZoneFormat$,'abbreviation',function(){return this.abbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$at','abbreviation']};});
abbreviationZoneFormat$.equals=function($4b4){
var abbreviationZoneFormat$=this;
var $4b5;
if(m$1.is$(($4b5=$4b4),{t:AbbreviationZoneFormat$timezone$model})){
return abbreviationZoneFormat$.abbreviation.equals($4b5.abbreviation);
}
function $4b6(){return $4b4;}
return false;
};abbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$m','equals']};};
})(AbbreviationZoneFormat$timezone$model.$$.prototype);
}
return AbbreviationZoneFormat$timezone$model;
}
ex$.$init$AbbreviationZoneFormat$timezone$model=$init$AbbreviationZoneFormat$timezone$model;
$init$AbbreviationZoneFormat$timezone$model();
function PairAbbreviationZoneFormat$timezone$model(standardAbbreviation,daylightAbbreviation,pairAbbreviationZoneFormat$){
$init$PairAbbreviationZoneFormat$timezone$model();
if(pairAbbreviationZoneFormat$===undefined)pairAbbreviationZoneFormat$=new PairAbbreviationZoneFormat$timezone$model.$$;
pairAbbreviationZoneFormat$.standardAbbreviation_=standardAbbreviation;
pairAbbreviationZoneFormat$.daylightAbbreviation_=daylightAbbreviation;
ZoneFormat$timezone$model(pairAbbreviationZoneFormat$);
return pairAbbreviationZoneFormat$;
}
PairAbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'standardAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'daylightAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat']};};
ex$.PairAbbreviationZoneFormat$timezone$model=PairAbbreviationZoneFormat$timezone$model;
function $init$PairAbbreviationZoneFormat$timezone$model(){
if(PairAbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(PairAbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::PairAbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(pairAbbreviationZoneFormat$){
m$1.atr$(pairAbbreviationZoneFormat$,'standardAbbreviation',function(){return this.standardAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','standardAbbreviation']};});
m$1.atr$(pairAbbreviationZoneFormat$,'daylightAbbreviation',function(){return this.daylightAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','daylightAbbreviation']};});
pairAbbreviationZoneFormat$.equals=function($4b7){
var pairAbbreviationZoneFormat$=this;
var $4b8;
if(m$1.is$(($4b8=$4b7),{t:PairAbbreviationZoneFormat$timezone$model})){
return (pairAbbreviationZoneFormat$.standardAbbreviation.equals($4b8.standardAbbreviation)&&pairAbbreviationZoneFormat$.daylightAbbreviation.equals($4b8.daylightAbbreviation));
}
function $4b9(){return $4b7;}
return false;
};pairAbbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:PairAbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$m','equals']};};
})(PairAbbreviationZoneFormat$timezone$model.$$.prototype);
}
return PairAbbreviationZoneFormat$timezone$model;
}
ex$.$init$PairAbbreviationZoneFormat$timezone$model=$init$PairAbbreviationZoneFormat$timezone$model;
$init$PairAbbreviationZoneFormat$timezone$model();
function ReplacedZoneFormat$timezone$model(format,replacedZoneFormat$){
$init$ReplacedZoneFormat$timezone$model();
if(replacedZoneFormat$===undefined)replacedZoneFormat$=new ReplacedZoneFormat$timezone$model.$$;
replacedZoneFormat$.format_=format;
ZoneFormat$timezone$model(replacedZoneFormat$);
return replacedZoneFormat$;
}
ReplacedZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'format',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat']};};
ex$.ReplacedZoneFormat$timezone$model=ReplacedZoneFormat$timezone$model;
function $init$ReplacedZoneFormat$timezone$model(){
if(ReplacedZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ReplacedZoneFormat$timezone$model,'ceylon.time.timezone.model::ReplacedZoneFormat',$init$ZoneFormat$timezone$model());
(function(replacedZoneFormat$){
m$1.atr$(replacedZoneFormat$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ReplacedZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$at','format']};});
replacedZoneFormat$.equals=function($4ba){
var replacedZoneFormat$=this;
var $4bb;
if(m$1.is$(($4bb=$4ba),{t:ReplacedZoneFormat$timezone$model})){
return replacedZoneFormat$.format.equals($4bb.format);
}
function $4bc(){return $4ba;}
return false;
};replacedZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ReplacedZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$m','equals']};};
})(ReplacedZoneFormat$timezone$model.$$.prototype);
}
return ReplacedZoneFormat$timezone$model;
}
ex$.$init$ReplacedZoneFormat$timezone$model=$init$ReplacedZoneFormat$timezone$model;
$init$ReplacedZoneFormat$timezone$model();
function ZoneRule$timezone$model(zoneRule$){
$init$ZoneRule$timezone$model();
if(zoneRule$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneRule"),'?','?')
return zoneRule$;
}
ZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneRule$timezone$model,{t:PeriodZoneRule$timezone$model},{t:BasedZoneRule$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneRule')];},d:['ceylon.time.timezone.model','ZoneRule']};};
ex$.ZoneRule$timezone$model=ZoneRule$timezone$model;
function $init$ZoneRule$timezone$model(){
if(ZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneRule$timezone$model,'ceylon.time.timezone.model::ZoneRule',m$1.Basic);
}
return ZoneRule$timezone$model;
}
ex$.$init$ZoneRule$timezone$model=$init$ZoneRule$timezone$model;
$init$ZoneRule$timezone$model();
function $4bd$timezone$model(){
var standardZoneRule$=new $4bd$timezone$model.$$;ZoneRule$timezone$model(standardZoneRule$);
return standardZoneRule$;
};$4bd$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},d:['ceylon.time.timezone.model','standardZoneRule']};};
function $init$standardZoneRule$timezone$model(){
if($4bd$timezone$model.$$===undefined){
m$1.initTypeProto($4bd$timezone$model,'ceylon.time.timezone.model::standardZoneRule',$init$ZoneRule$timezone$model());
}
return $4bd$timezone$model;
}
ex$.$init$standardZoneRule$timezone$model=$init$standardZoneRule$timezone$model;
$init$standardZoneRule$timezone$model();
var $4bf;
function standardZoneRule$timezone$model(){
if($4bf===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneRule\' before it was set"),'15:0-15:50','ZoneRule.ceylon');
if($4bf===undefined){$4bf=m$1.INIT$;$4bf=$init$standardZoneRule$timezone$model()();$4bf.$crtmm$=standardZoneRule$timezone$model.$crtmm$;}
return $4bf;
}
ex$.standardZoneRule$timezone$model=standardZoneRule$timezone$model;
standardZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneRule$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneRule']};};
$prop$getStandardZoneRule$timezone$model=standardZoneRule$timezone$model;
ex$.$prop$getStandardZoneRule$timezone$model=$prop$getStandardZoneRule$timezone$model;
function PeriodZoneRule$timezone$model(period,periodZoneRule$){
$init$PeriodZoneRule$timezone$model();
if(periodZoneRule$===undefined)periodZoneRule$=new PeriodZoneRule$timezone$model.$$;
periodZoneRule$.period_=period;
ZoneRule$timezone$model(periodZoneRule$);
return periodZoneRule$;
}
PeriodZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'period',mt:'prm',$t:{t:Period},pa:1}],pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule']};};
ex$.PeriodZoneRule$timezone$model=PeriodZoneRule$timezone$model;
function $init$PeriodZoneRule$timezone$model(){
if(PeriodZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(PeriodZoneRule$timezone$model,'ceylon.time.timezone.model::PeriodZoneRule',$init$ZoneRule$timezone$model());
(function(periodZoneRule$){
m$1.atr$(periodZoneRule$,'period',function(){return this.period_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:PeriodZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule','$at','period']};});
})(PeriodZoneRule$timezone$model.$$.prototype);
}
return PeriodZoneRule$timezone$model;
}
ex$.$init$PeriodZoneRule$timezone$model=$init$PeriodZoneRule$timezone$model;
$init$PeriodZoneRule$timezone$model();
function BasedZoneRule$timezone$model(ruleName,basedZoneRule$){
$init$BasedZoneRule$timezone$model();
if(basedZoneRule$===undefined)basedZoneRule$=new BasedZoneRule$timezone$model.$$;
basedZoneRule$.ruleName_=ruleName;
ZoneRule$timezone$model(basedZoneRule$);
return basedZoneRule$;
}
BasedZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'ruleName',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','BasedZoneRule']};};
ex$.BasedZoneRule$timezone$model=BasedZoneRule$timezone$model;
function $init$BasedZoneRule$timezone$model(){
if(BasedZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(BasedZoneRule$timezone$model,'ceylon.time.timezone.model::BasedZoneRule',$init$ZoneRule$timezone$model());
(function(basedZoneRule$){
m$1.atr$(basedZoneRule$,'ruleName',function(){return this.ruleName_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BasedZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','BasedZoneRule','$at','ruleName']};});
})(BasedZoneRule$timezone$model.$$.prototype);
}
return BasedZoneRule$timezone$model;
}
ex$.$init$BasedZoneRule$timezone$model=$init$BasedZoneRule$timezone$model;
$init$BasedZoneRule$timezone$model();
function ZoneTimeline$timezone$model(offset,rule,format,until,zoneTimeline$){
$init$ZoneTimeline$timezone$model();
if(zoneTimeline$===undefined)zoneTimeline$=new ZoneTimeline$timezone$model.$$;
zoneTimeline$.offset_=offset;
zoneTimeline$.rule_=rule;
zoneTimeline$.format_=format;
zoneTimeline$.until_=until;
return zoneTimeline$;
}
ZoneTimeline$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offset',mt:'prm',$t:{t:Period},pa:1},{nm:'rule',mt:'prm',$t:{t:ZoneRule$timezone$model},pa:1},{nm:'format',mt:'prm',$t:{t:ZoneFormat$timezone$model},pa:1},{nm:'until',mt:'prm',$t:{t:ZoneUntil$timezone$model},pa:1}],pa:1,d:['ceylon.time.timezone.model','ZoneTimeline']};};
ex$.ZoneTimeline$timezone$model=ZoneTimeline$timezone$model;
function $init$ZoneTimeline$timezone$model(){
if(ZoneTimeline$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneTimeline$timezone$model,'ceylon.time.timezone.model::ZoneTimeline',m$1.Basic);
(function(zoneTimeline$){
m$1.atr$(zoneTimeline$,'offset',function(){return this.offset_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','offset']};});
m$1.atr$(zoneTimeline$,'rule',function(){return this.rule_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','rule']};});
m$1.atr$(zoneTimeline$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','format']};});
m$1.atr$(zoneTimeline$,'until',function(){return this.until_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','until']};});
zoneTimeline$.equals=function($4bg){
var zoneTimeline$=this;
var $4bh;
if(m$1.is$(($4bh=$4bg),{t:ZoneTimeline$timezone$model})){
return (((zoneTimeline$.offset.equals($4bh.offset)&&zoneTimeline$.rule.equals($4bh.rule))&&zoneTimeline$.format.equals($4bh.format))&&zoneTimeline$.until.equals($4bh.until));
}
function $4bi(){return $4bg;}
return false;
};zoneTimeline$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneTimeline$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneTimeline','$m','equals']};};
})(ZoneTimeline$timezone$model.$$.prototype);
}
return ZoneTimeline$timezone$model;
}
ex$.$init$ZoneTimeline$timezone$model=$init$ZoneTimeline$timezone$model;
$init$ZoneTimeline$timezone$model();
var $4bj$timezone$model;function $valinit$$4bj$timezone$model(){if($4bj$timezone$model===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'untilPresent\' before it was set"),'11:0-11:113','ZoneUntil.ceylon');
if($4bj$timezone$model===undefined){$4bj$timezone$model=m$1.INIT$;$4bj$timezone$model=ZoneUntil$timezone$model(date(years$base().maximum,december$base(),31),AtWallClockTime$timezone$model(time(23,59,59,999)))};return $4bj$timezone$model;};
function untilPresent$timezone$model(){return $valinit$$4bj$timezone$model();}
ex$.untilPresent$timezone$model=untilPresent$timezone$model;
var $prop$getUntilPresent$timezone$model={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},pa:1,d:['ceylon.time.timezone.model','untilPresent']};}};
ex$.$prop$getUntilPresent$timezone$model=$prop$getUntilPresent$timezone$model;
$prop$getUntilPresent$timezone$model.get=untilPresent$timezone$model;
untilPresent$timezone$model.$crtmm$=$prop$getUntilPresent$timezone$model.$crtmm$;
function ZoneUntil$timezone$model(date,ruleDefinition,zoneUntil$){
$init$ZoneUntil$timezone$model();
if(zoneUntil$===undefined)zoneUntil$=new ZoneUntil$timezone$model.$$;
zoneUntil$.date_=date;
zoneUntil$.ruleDefinition_=ruleDefinition;
return zoneUntil$;
}
ZoneUntil$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:1},{nm:'ruleDefinition',mt:'prm',$t:{t:AtTime$timezone$model},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneUntil')];},d:['ceylon.time.timezone.model','ZoneUntil']};};
ex$.ZoneUntil$timezone$model=ZoneUntil$timezone$model;
function $init$ZoneUntil$timezone$model(){
if(ZoneUntil$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneUntil$timezone$model,'ceylon.time.timezone.model::ZoneUntil',m$1.Basic);
(function(zoneUntil$){
m$1.atr$(zoneUntil$,'date',function(){return this.date_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','date']};});
m$1.atr$(zoneUntil$,'ruleDefinition',function(){return this.ruleDefinition_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','ruleDefinition']};});
zoneUntil$.equals=function($4bk){
var zoneUntil$=this;
var $4bl;
if(m$1.is$(($4bl=$4bk),{t:ZoneUntil$timezone$model})){
return (zoneUntil$.date.equals($4bl.date)&&zoneUntil$.ruleDefinition.equals($4bl.ruleDefinition));
}
function $4bm(){return $4bk;}
return false;
};zoneUntil$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneUntil$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneUntil','$m','equals']};};
})(ZoneUntil$timezone$model.$$.prototype);
}
return ZoneUntil$timezone$model;
}
ex$.$init$ZoneUntil$timezone$model=$init$ZoneUntil$timezone$model;
$init$ZoneUntil$timezone$model();
ex$.$pkg$ans$ceylon$time$timezone=function(){return[m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone$parser$iana=function(){return[m$1.by(["Diego Coronel","Roland Tepp"].$sa$({t:m$1.$_String})),m$1.shared()];};
function parseLinkLine$timezone$parser$iana($4bn){
var $4bo=$4bn.$_split(m$1.JsCallable(0,tokenDelimiter$timezone$parser$iana)).iterator();
var $4bp;
m$1.asrt$((m$1.is$(($4bp=$4bo.next()),{t:m$1.$_String})&&$4bp.equals("Link")),"Assertion failed: \'is String link = token.next(), link == \"Link\"\' at parseLinkLine.ceylon (10:10-10:56)",'10:4-10:57','parseLinkLine.ceylon');
var $4bq;
m$1.asrt$((m$1.is$(($4bq=$4bo.next()),RealName$timezone$model())),"Assertion failed: \'is RealName realId = token.next()\' at parseLinkLine.ceylon (12:11-12:45)",'12:4-12:46','parseLinkLine.ceylon');
var $4br;
m$1.asrt$((m$1.is$(($4br=$4bo.next()),AliasName$timezone$model())),"Assertion failed: \'is AliasName aliasId = token.next()\' at parseLinkLine.ceylon (13:11-13:47)",'13:4-13:48','parseLinkLine.ceylon');
return m$1.tpl$([$4bq,$4br]);
}
ex$.parseLinkLine$timezone$parser$iana=parseLinkLine$timezone$parser$iana;
parseLinkLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:Link$timezone$model(),ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseLinkLine']};};
function parseMonth$timezone$parser$iana($4bs){
var $4bt;
m$1.asrt$((m$1.nn$(($4bt=months$base().all.find(m$1.$JsCallable((function($4bu){return $4bu.string.lowercased.startsWith($4bs.trimmed.lowercased);}),[{nm:'elem',mt:'prm',$t:{t:Month$base}}],{Arguments$Callable:m$1.mtt$([{t:Month$base}]),Return$Callable:{t:m$1.$_Boolean}}))))),"Invalid Month for parse in timeZone: \'exists currentMonth = months.all.find((Month elem) \n        => elem.string.lowercased.startsWith(month.trimmed.lowercased))\' at parseMonth.ceylon (8:10-9:71)",'7:4-9:72','parseMonth.ceylon');
return $4bt;
}
ex$.parseMonth$timezone$parser$iana=parseMonth$timezone$parser$iana;
parseMonth$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseMonth']};};
function parseOnDay$timezone$parser$iana($4bv){
var $4bw=parseOnDayToken$timezone$parser$iana($4bv);
var $4bx;
if(m$1.nn$(($4bx=$4bw.$_get(0)))){
var $4by;
if(m$1.nn$(($4by=$4bw.$_get(1)))){
return OnFirstOfMonth$timezone$model($4by,$4bx);
}
else{
return OnFixedDay$timezone$model($4bx);
}
}
var $4bz;
m$1.asrt$((m$1.nn$(($4bz=$4bw.$_get(1)))),"Assertion failed: \'exists dayOfWeek = result[1]\' at parseOnDay.ceylon (24:10-24:39)",'24:4-24:40','parseOnDay.ceylon');
return OnLastOfMonth$timezone$model($4bz);
}
ex$.parseOnDay$timezone$parser$iana=parseOnDay$timezone$parser$iana;
parseOnDay$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseOnDay']};};
function parseOnDayToken$timezone$parser$iana($4c0){
var $4c1=m$1.tpl$([null,null,m$1.equal()]);
if($4c0.startsWith("last")){
$4c1=m$1.tpl$([null,findDayOfWeek$timezone$parser$iana($4c0.spanFrom(4)),m$1.larger()]);
}
else{
var $4c2=$4c0.firstInclusion(">=");
var $4c3=$4c0.firstInclusion("<=");
var $4c4;
if(m$1.nn$(($4c4=$4c2))&&($4c4>0)){
$4c1=m$1.tpl$([m$1.parseInteger($4c0.spanFrom($4c4.plus(2)).trimmed),findDayOfWeek$timezone$parser$iana($4c0.span(0,$4c4.minus(1))),m$1.larger()]);
}
else{
var $4c5;
if(m$1.nn$(($4c5=$4c3))&&($4c5>0)){
$4c1=m$1.tpl$([m$1.parseInteger($4c0.spanFrom($4c5.plus(2))),findDayOfWeek$timezone$parser$iana($4c0.span(0,$4c5.minus(1))),m$1.smaller()]);
}
else{
$4c1=m$1.tpl$([m$1.parseInteger($4c0),null,m$1.equal()]);
}
}
}
return $4c1;
};parseOnDayToken$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:'u',l:[{t:m$1.Null},DayOfMonth$timezone$model()]},{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},{t:m$1.Comparison}]},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseOnDayToken']};};
function RuleName$timezone$parser$iana(){var $4c6={t:m$1.$_String};$4c6.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:RuleName')];},d:['ceylon.time.timezone.parser.iana','RuleName']};};return $4c6;}
ex$.RuleName$timezone$parser$iana=RuleName$timezone$parser$iana;
function parseRuleLine$timezone$parser$iana($4c7){
var $4c8=$4c7.$_split(m$1.JsCallable(0,tokenDelimiter$timezone$parser$iana)).iterator();
var $4c9;
m$1.asrt$((m$1.is$(($4c9=$4c8.next()),{t:m$1.$_String})&&$4c9.equals("Rule")),"Assertion failed: \' is String rule = token.next(), rule == \"Rule\" \' at parseRuleLine.ceylon (14:10-14:58)",'14:4-14:59','parseRuleLine.ceylon');
var $4ca;
m$1.asrt$((m$1.is$(($4ca=$4c8.next()),RuleName$timezone$parser$iana())),"Assertion failed: \' is RuleName name = token.next() \' at parseRuleLine.ceylon (16:10-16:44)",'16:4-16:45','parseRuleLine.ceylon');
var $4cb;
m$1.asrt$((m$1.is$(($4cb=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String startYearText = token.next() \' at parseRuleLine.ceylon (17:10-17:51)",'17:4-17:52','parseRuleLine.ceylon');
var $4cc;
m$1.asrt$((m$1.is$(($4cc=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String endYearText = token.next() \' at parseRuleLine.ceylon (18:10-18:49)",'18:4-18:50','parseRuleLine.ceylon');
var $4cd;
m$1.asrt$((m$1.is$(($4cd=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String typeText = token.next() \' at parseRuleLine.ceylon (19:10-19:46)",'19:4-19:47','parseRuleLine.ceylon');
var $4ce;
m$1.asrt$((m$1.is$(($4ce=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String monthText = token.next() \' at parseRuleLine.ceylon (20:10-20:47)",'20:4-20:48','parseRuleLine.ceylon');
var $4cf;
m$1.asrt$((m$1.is$(($4cf=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String dayRuleText = token.next() \' at parseRuleLine.ceylon (21:10-21:49)",'21:4-21:50','parseRuleLine.ceylon');
var $4cg;
m$1.asrt$((m$1.is$(($4cg=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String timeRuleText = token.next() \' at parseRuleLine.ceylon (22:10-22:50)",'22:4-22:51','parseRuleLine.ceylon');
var $4ch;
m$1.asrt$((m$1.is$(($4ch=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String savingAmountsText = token.next() \' at parseRuleLine.ceylon (23:10-23:55)",'23:4-23:56','parseRuleLine.ceylon');
var $4ci;
m$1.asrt$((m$1.is$(($4ci=$4c8.next()),{t:m$1.$_String})),"Assertion failed: \' is String letterText = token.next() \' at parseRuleLine.ceylon (24:10-24:48)",'24:4-24:49','parseRuleLine.ceylon');
var $4cj=parseYear$timezone$parser$iana($4cb,0);
return m$1.tpl$([$4ca,($4ck=$4cj,$4cl=parseYear$timezone$parser$iana($4cc,$4cj),$4cm=parseMonth$timezone$parser$iana($4ce),$4cn=parseOnDay$timezone$parser$iana($4cf.trimmed),$4co=parseTime$timezone$parser$iana($4cg.trimmed).$_get(0),$4cp=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($4ch.trimmed)),$4cq=$4ci.trimmed,Rule$timezone$model($4ck,$4cl,$4cm,$4cn,$4co,$4cp,$4cq))]);
var $4ck,$4cl,$4cm,$4cn,$4co,$4cp,$4cq;
}
ex$.parseRuleLine$timezone$parser$iana=parseRuleLine$timezone$parser$iana;
parseRuleLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[RuleName$timezone$parser$iana(),{t:Rule$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseRuleLine']};};
function Signal$timezone$parser$iana(){var $4cr={t:m$1.Integer};$4cr.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:Signal')];},d:['ceylon.time.timezone.parser.iana','Signal']};};return $4cr;}
ex$.Signal$timezone$parser$iana=Signal$timezone$parser$iana;
function parseTime$timezone$parser$iana($4cs){
if($4cs.equals("-")){
return m$1.tpl$([AtWallClockTime$timezone$model(time(0,0)),1]);
}
var $4ct=($4cu=($4cs.startsWith("-")?(-1):null),m$1.nn$($4cu)?$4cu:(1));
var $4cu;
var $4cv=($4cw=($4cs.startsWith("-")?1:null),m$1.nn$($4cw)?$4cw:(0));
var $4cw;
if(!m$1.nn$($4cs.firstOccurrence(m$1.Character(58,true)))){
var $4cx;
m$1.asrt$((m$1.nn$(($4cx=m$1.parseInteger($4cs.spanFrom($4cv))))),"Assertion failed: \'exists hours = parseInteger(atTime.spanFrom(position))\' at parseTime.ceylon (27:14-27:69)",'27:8-27:70','parseTime.ceylon');
return m$1.tpl$([AtWallClockTime$timezone$model(adjustToEndOfDayIfNecessary$timezone$parser$iana($4cx,0)),$4ct]);
}
var $4cy=$4cs.indexesWhere(m$1.$JsCallable(($4cz=m$1.Character(58,true),m$1.JsCallable($4cz,m$1.nn$($4cz)?$4cz.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}]),Return$Callable:{t:m$1.$_Boolean}})).sequence();
var $4cz;
var $4d0;
m$1.asrt$((m$1.nn$(($4d0=$4cy.$_get(0)))),"Assertion failed: \' exists firstIndex = indexes[0] \' at parseTime.ceylon (33:10-33:43)",'33:4-33:44','parseTime.ceylon');
var $4d1;
m$1.asrt$((m$1.nn$(($4d1=m$1.parseInteger($4cs.span($4cv,$4d0.minus(1)))))),"Assertion failed: \' exists hours = parseInteger(atTime.span(position, firstIndex-1))\' at parseTime.ceylon (34:10-34:76)",'34:4-34:77','parseTime.ceylon');
var $4d2;
m$1.asrt$((m$1.nn$(($4d2=m$1.parseInteger($4cs.span($4d0.plus(1),$4d0.plus(2)))))),"Assertion failed: \' exists minutes = parseInteger(atTime.span(firstIndex +1,firstIndex  + 2 ))\' at parseTime.ceylon (35:10-35:86)",'35:4-35:87','parseTime.ceylon');
var $4d3=adjustToEndOfDayIfNecessary$timezone$parser$iana($4d1,$4d2);
var $4d4;
if((($4cy.size).valueOf()==(1).valueOf())){
$4d4=atTimeDefinition$timezone$parser$iana($4d3,$4cs.spanFrom($4d0.plus(3)));
}
else{
var $4d5;
m$1.asrt$((m$1.nn$(($4d5=$4cy.$_get(1)))),"Assertion failed: \' exists secondIndex = indexes[1] \' at parseTime.ceylon (41:14-41:48)",'41:8-41:49','parseTime.ceylon');
var $4d6;
m$1.asrt$((m$1.nn$(($4d6=m$1.parseInteger($4cs.span($4d5.plus(1),$4d5.plus(2)))))),"Assertion failed: \' exists seconds = parseInteger(atTime.span(secondIndex + 1 ,secondIndex  + 2 ))\' at parseTime.ceylon (42:14-42:94)",'42:8-42:95','parseTime.ceylon');
$4d3=$4d3.plusSeconds($4d6);
$4d4=atTimeDefinition$timezone$parser$iana($4d3,$4cs.spanFrom($4d5.plus(3)));
}
return m$1.tpl$([$4d4,$4ct]);
};parseTime$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]},ps:[{nm:'atTime',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseTime']};};
function atTimeDefinition$timezone$parser$iana($4d7,$4d8){
var $4d9=$4d8;
if("s".equals($4d9) || "S".equals($4d9)) {
return AtLocalMeanTime$timezone$model($4d7);
}
else if("u".equals($4d9) || "U".equals($4d9)) {
return AtUtcTime$timezone$model($4d7);
}
else if("z".equals($4d9) || "Z".equals($4d9)) {
return AtNauticalTime$timezone$model($4d7);
}
else if("g".equals($4d9) || "G".equals($4d9)) {
return AtGmtTime$timezone$model($4d7);
}
else if("w".equals($4d9) || "W".equals($4d9)) {
return AtWallClockTime$timezone$model($4d7);
}
else{
return AtWallClockTime$timezone$model($4d7);
}
};atTimeDefinition$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}},{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','atTimeDefinition']};};
function adjustToEndOfDayIfNecessary$timezone$parser$iana($4da,$4db){
if(((($4da).valueOf()==(24).valueOf())&&(($4db).valueOf()==(0).valueOf()))){
return time(23,59,59,999);
}
return time($4da,$4db);
};adjustToEndOfDayIfNecessary$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:adjustToEndOfDayIfNecessary')];},d:['ceylon.time.timezone.parser.iana','adjustToEndOfDayIfNecessary']};};
function parseUntil$timezone$parser$iana($4dc){
var $4dd=date(0,january$base(),1);
var $4de;
if(m$1.nn$(($4de=$4dc.$_get(0)))&&(!$4de.equals(""))){
var $4df;
m$1.asrt$((m$1.nn$(($4df=m$1.parseInteger($4de)))),"Assertion failed: \'exists year = parseInteger(yearText)\' at parseUntil.ceylon (22:14-22:51)",'22:8-22:52','parseUntil.ceylon');
$4dd=$4dd.withYear($4df);
}
else{
return untilPresent$timezone$model();
}
var $4dg;
if(m$1.nn$(($4dg=$4dc.$_get(1)))&&(!$4dg.equals(""))){
$4dd=$4dd.withMonth(parseMonth$timezone$parser$iana($4dg));
}
var $4dh;
if(m$1.nn$(($4dh=$4dc.$_get(2)))&&(!$4dh.equals(""))){
var $4di=parseOnDay$timezone$parser$iana($4dh);
var $4dj=$4di;
if(m$1.is$($4dj,{t:OnFixedDay$timezone$model})) {
$4dd=$4dd.withDay($4dj.fixedDate);
}
else if(m$1.is$($4dj,{t:OnFirstOfMonth$timezone$model})) {
$4dd=$4dd.withDay($4dj.date($4dd.year,$4dd.month).day);
}
else if(m$1.is$($4dj,{t:OnLastOfMonth$timezone$model})) {
$4dd=$4dd.withDay($4dj.date($4dd.year,$4dd.month).day);
}
}
var $4dk;
var $4dl;
if(m$1.nn$(($4dl=$4dc.$_get(3)))&&(!$4dl.equals(""))){
var $4dm=parseTime$timezone$parser$iana($4dl);
$4dk=$4dm.$_get(0);
}
else{
$4dk=AtWallClockTime$timezone$model(time(0,0));
}
return ZoneUntil$timezone$model($4dd,$4dk);
}
ex$.parseUntil$timezone$parser$iana=parseUntil$timezone$parser$iana;
parseUntil$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseUntil']};};
function findDayOfWeek$timezone$parser$iana($4dn){
var $4do;
m$1.asrt$((m$1.nn$(($4do=weekdays$base().find(m$1.$JsCallable((function($4dp){return $4dp.string.lowercased.startsWith($4dn.trimmed.lowercased);}),[{nm:'elem',mt:'prm',$t:{t:DayOfWeek$base}}],{Arguments$Callable:m$1.mtt$([{t:DayOfWeek$base}]),Return$Callable:{t:m$1.$_Boolean}}))))),"Assertion failed: \'exists dow = weekdays.find((DayOfWeek elem) => elem.string.lowercased.startsWith(dayOfWeek.trimmed.lowercased))\' at parseUtils.ceylon (13:10-13:122)",'13:4-13:123','parseUtils.ceylon');
return $4do;
};findDayOfWeek$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','findDayOfWeek']};};
function toPeriod$timezone$parser$iana($4dq){
var $4dr=$4dq,$4ds=$4dr.$_get(0),$4dt=$4dr.$_get(1);
return ($4du=$4ds.time.hours.times($4dt),$4dv=$4ds.time.minutes.times($4dt),$4dw=$4ds.time.seconds.times($4dt),$4dx=$4ds.time.milliseconds.times($4dt),Period(undefined,undefined,undefined,$4du,$4dv,$4dw,$4dx));
var $4du,$4dv,$4dw,$4dx;
};toPeriod$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'signedTime',mt:'prm',$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:toPeriod')];},d:['ceylon.time.timezone.parser.iana','toPeriod']};};
function tokenDelimiter$timezone$parser$iana($4dy){
return ($4dy.equals(m$1.Character(32,true))||$4dy.equals(m$1.Character(9,true)));
}
ex$.tokenDelimiter$timezone$parser$iana=tokenDelimiter$timezone$parser$iana;
tokenDelimiter$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'char',mt:'prm',$t:{t:m$1.Character}}],pa:1,d:['ceylon.time.timezone.parser.iana','tokenDelimiter']};};
function parseYear$timezone$parser$iana($4dz,$4e0){
if("minimum".startsWith($4dz.trimmed.lowercased)){
return years$base().minimum;
}
else{
if("maximum".startsWith($4dz.trimmed.lowercased)){
return years$base().maximum;
}
else{
if($4dz.equals("only")){
return $4e0;
}
}
}
var $4e1;
m$1.asrt$((m$1.nn$(($4e1=m$1.parseInteger($4dz)))),"Assertion failed: \'exists resultYear = parseInteger(year) \' at parseYear.ceylon (14:10-14:50)",'14:4-14:51','parseYear.ceylon');
return $4e1;
};parseYear$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.$_String}},{nm:'defaultYear',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.time.timezone.parser.iana','parseYear']};};
function parseZoneFormat$timezone$parser$iana($4e2){
if($4e2.equals("zzz")){
return standardZoneFormat$timezone$model();
}
else{
var $4e3;
if(m$1.nn$(($4e3=$4e2.firstOccurrence(m$1.Character(47,true))))){
var $4e4=$4e2.spanTo($4e3.minus(1));
var $4e5=$4e2.spanFrom($4e3.plus(1));
return PairAbbreviationZoneFormat$timezone$model($4e4,$4e5);
}
else{
var $4e6;
if(m$1.nn$(($4e6=$4e2.firstInclusion("%s")))){
return ReplacedZoneFormat$timezone$model($4e2);
}
else{
if(!$4e2.empty){
return AbbreviationZoneFormat$timezone$model($4e2);
}
}
}
}
return standardZoneFormat$timezone$model();
}
ex$.parseZoneFormat$timezone$parser$iana=parseZoneFormat$timezone$parser$iana;
parseZoneFormat$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneFormat']};};
function ZoneName$timezone$parser$iana(){var $4e7={t:m$1.$_String};$4e7.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.time.timezone.parser.iana','ZoneName']};};return $4e7;}
ex$.ZoneName$timezone$parser$iana=ZoneName$timezone$parser$iana;
function parseZoneLine$timezone$parser$iana($4e8,$4e9){
if($4e9===undefined){$4e9=null;}
var $4ea=$4e8.$_split(m$1.JsCallable(0,tokenDelimiter$timezone$parser$iana)).iterator();
var $4eb;
var $4ec;
if(m$1.nn$(($4ec=$4e9))){
$4eb=$4ec;
}
else{
var $4ed;
m$1.asrt$((m$1.is$(($4ed=$4ea.next()),{t:m$1.$_String})&&$4ed.equals("Zone")),"Assertion failed: \'is String zone = token.next(), zone == \"Zone\"\' at parseZoneLine.ceylon (17:14-17:60)",'17:8-17:61','parseZoneLine.ceylon');
var $4ee;
m$1.asrt$((m$1.is$(($4ee=$4ea.next()),ZoneName$timezone$parser$iana())),"Assertion failed: \'is ZoneName nameText = token.next()\' at parseZoneLine.ceylon (18:14-18:50)",'18:8-18:51','parseZoneLine.ceylon');
$4eb=$4ee;
}
var $4ef;
m$1.asrt$((m$1.is$(($4ef=$4ea.next()),{t:m$1.$_String})),"Assertion failed: \'is String offsetText = token.next()\' at parseZoneLine.ceylon (22:10-22:46)",'22:4-22:47','parseZoneLine.ceylon');
var $4eg;
m$1.asrt$((m$1.is$(($4eg=$4ea.next()),{t:m$1.$_String})),"Assertion failed: \'is String ruleText = token.next()\' at parseZoneLine.ceylon (23:10-23:44)",'23:4-23:45','parseZoneLine.ceylon');
var $4eh;
m$1.asrt$((m$1.is$(($4eh=$4ea.next()),{t:m$1.$_String})),"Assertion failed: \'is String formatText     = token.next()\' at parseZoneLine.ceylon (24:10-24:50)",'24:4-24:51','parseZoneLine.ceylon');
var $4ei=m$1.empty();
var $4ej;
while(m$1.is$(($4ej=$4ea.next()),{t:m$1.$_String})){
$4ei=m$1.tpl$([$4ej],$4ei);
}
return m$1.tpl$([$4eb,($4ek=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($4ef.trimmed)),$4el=parseZoneRule$timezone$parser$iana($4eg.trimmed),$4em=parseZoneFormat$timezone$parser$iana($4eh.trimmed),$4en=parseUntil$timezone$parser$iana($4ei.reversed),ZoneTimeline$timezone$model($4ek,$4el,$4em,$4en))]);
var $4ek,$4el,$4em,$4en;
}
ex$.parseZoneLine$timezone$parser$iana=parseZoneLine$timezone$parser$iana;
parseZoneLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[ZoneName$timezone$parser$iana(),{t:ZoneTimeline$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}},{nm:'zoneName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},ZoneName$timezone$parser$iana()]}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneLine']};};
function parseZoneRule$timezone$parser$iana($4eo){
if($4eo.equals("-")){
return standardZoneRule$timezone$model();
}
var $4ep="".indexesWhere(m$1.$JsCallable(($4eq=m$1.Character(58,true),m$1.JsCallable($4eq,m$1.nn$($4eq)?$4eq.equals:null)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_Object}]),Return$Callable:{t:m$1.$_Boolean}})).sequence();
var $4eq;
var $4er;
if(m$1.ne$(($4er=$4ep))){
return PeriodZoneRule$timezone$model(toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($4eo)));
}
else{
return standardZoneRule$timezone$model();
}
}
ex$.parseZoneRule$timezone$parser$iana=parseZoneRule$timezone$parser$iana;
parseZoneRule$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneRule']};};
function ReadableTimeZone$timezone(readableTimeZone$){
}
ReadableTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableTimeZone')];},d:['ceylon.time.timezone','ReadableTimeZone']};};
ex$.ReadableTimeZone$timezone=ReadableTimeZone$timezone;
function $init$ReadableTimeZone$timezone(){
if(ReadableTimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableTimeZone$timezone,'ceylon.time.timezone::ReadableTimeZone');
(function(readableTimeZone$){
readableTimeZone$.$prop$getTimeZone={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:ReadableTimeZone$timezone,pa:5,an:function(){return[m$1.doc("Time zone value.")];},d:['ceylon.time.timezone','ReadableTimeZone','$at','timeZone']};}};
})(ReadableTimeZone$timezone.$$.prototype);
}
return ReadableTimeZone$timezone;
}
ex$.$init$ReadableTimeZone$timezone=$init$ReadableTimeZone$timezone;
$init$ReadableTimeZone$timezone();
function ReadableZoneDateTime$timezone(readableZoneDateTime$){
ReadableDate$base(readableZoneDateTime$);
ReadableTime$base(readableZoneDateTime$);
ReadableTimeZone$timezone(readableZoneDateTime$);
}
ReadableZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base},{t:ReadableTimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableZoneDateTime')];},d:['ceylon.time.timezone','ReadableZoneDateTime']};};
ex$.ReadableZoneDateTime$timezone=ReadableZoneDateTime$timezone;
function $init$ReadableZoneDateTime$timezone(){
if(ReadableZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableZoneDateTime$timezone,'ceylon.time.timezone::ReadableZoneDateTime',$init$ReadableDate$base(),$init$ReadableTime$base(),$init$ReadableTimeZone$timezone());
}
return ReadableZoneDateTime$timezone;
}
ex$.$init$ReadableZoneDateTime$timezone=$init$ReadableZoneDateTime$timezone;
$init$ReadableZoneDateTime$timezone();
function TimeZone$timezone(timeZone$){
}
TimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,of:[{t:OffsetTimeZone$timezone},{t:RuleBasedTimezone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone')];},d:['ceylon.time.timezone','TimeZone']};};
ex$.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
if(TimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
(function(timeZone$){
timeZone$.offset={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:TimeZone$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone:$m:offset')];},d:['ceylon.time.timezone','TimeZone','$m','offset']};}};
})(TimeZone$timezone.$$.prototype);
}
return TimeZone$timezone;
}
ex$.$init$TimeZone$timezone=$init$TimeZone$timezone;
$init$TimeZone$timezone();
function OffsetTimeZone$timezone(offsetMilliseconds,offsetTimeZone$){
$init$OffsetTimeZone$timezone();
if(offsetTimeZone$===undefined)offsetTimeZone$=new OffsetTimeZone$timezone.$$;
offsetTimeZone$.offsetMilliseconds_=offsetMilliseconds;
TimeZone$timezone(offsetTimeZone$);
return offsetTimeZone$;
}
OffsetTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offsetMilliseconds',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];}}],sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone')];},d:['ceylon.time.timezone','OffsetTimeZone']};};
ex$.OffsetTimeZone$timezone=OffsetTimeZone$timezone;
function $init$OffsetTimeZone$timezone(){
if(OffsetTimeZone$timezone.$$===undefined){
m$1.initTypeProto(OffsetTimeZone$timezone,'ceylon.time.timezone::OffsetTimeZone',m$1.Basic,$init$TimeZone$timezone());
(function(offsetTimeZone$){
m$1.atr$(offsetTimeZone$,'offsetMilliseconds',function(){return this.offsetMilliseconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};});
offsetTimeZone$.offset=function($4es){var offsetTimeZone$=this;
return offsetTimeZone$.offsetMilliseconds;};
offsetTimeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:offset')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','offset']};};
offsetTimeZone$.equals=function($4et){
var offsetTimeZone$=this;
var $4eu;
if(m$1.is$(($4eu=$4et),{t:OffsetTimeZone$timezone})){
return ((offsetTimeZone$.offsetMilliseconds).valueOf()==($4eu.offsetMilliseconds).valueOf());
}
function $4ev(){return $4et;}
return false;
};offsetTimeZone$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:equals')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','equals']};};
m$1.atr$(offsetTimeZone$,'hash',function(){
var offsetTimeZone$=this;
var $4ew=(31);
var $4ex=(7);
return $4ew.times($4ex).plus(offsetTimeZone$.offsetMilliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:hash')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','hash']};});m$1.atr$(offsetTimeZone$,'string',function(){
var offsetTimeZone$=this;
var $4ey=offsetTimeZone$.offsetMilliseconds.magnitude.divided(milliseconds$base().perHour).string.padLeading(2,m$1.Character(48,true));
var $4ez=offsetTimeZone$.offsetMilliseconds.magnitude.remainder(milliseconds$base().perHour).divided(milliseconds$base().perMinute).string.padLeading(2,m$1.Character(48,true));
if((offsetTimeZone$.offsetMilliseconds>=0)){
return "+".plus($4ey).plus(":").plus($4ez).plus("");
}
else{
return "-".plus($4ey).plus(":").plus($4ez).plus("");
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetTimeZone$timezone,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:string')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','string']};});
})(OffsetTimeZone$timezone.$$.prototype);
}
return OffsetTimeZone$timezone;
}
ex$.$init$OffsetTimeZone$timezone=$init$OffsetTimeZone$timezone;
$init$OffsetTimeZone$timezone();
function RuleBasedTimezone$timezone(ruleBasedTimezone$){
TimeZone$timezone(ruleBasedTimezone$);
}
RuleBasedTimezone$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:RuleBasedTimezone')];},d:['ceylon.time.timezone','RuleBasedTimezone']};};
ex$.RuleBasedTimezone$timezone=RuleBasedTimezone$timezone;
function $init$RuleBasedTimezone$timezone(){
if(RuleBasedTimezone$timezone.$$===undefined){
m$1.initTypeProtoI(RuleBasedTimezone$timezone,'ceylon.time.timezone::RuleBasedTimezone',$init$TimeZone$timezone());
}
return RuleBasedTimezone$timezone;
}
ex$.$init$RuleBasedTimezone$timezone=$init$RuleBasedTimezone$timezone;
$init$RuleBasedTimezone$timezone();
function $4f0$timezone(){
var timeZone$=new $4f0$timezone.$$;timeZone$.$wgb6s9$4f2_=timeZone$.$wgb6s9$4f3();
timeZone$.$wgb6s9$4f4_=timeZone$.$wgb6s9$4f5();
return timeZone$;
};$4f0$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.timezone','timeZone']};};
function $init$timeZone$timezone(){
if($4f0$timezone.$$===undefined){
m$1.initTypeProto($4f0$timezone,'ceylon.time.timezone::timeZone',m$1.Basic);
(function(timeZone$){
function $wgb6s9$4f3(){
var timeZone$=this;
var system$timeZone$=new this.$wgb6s9$4f3.$$;system$timeZone$.outer$=this;
OffsetTimeZone$timezone(m$1.system().timezoneOffset,system$timeZone$);
return system$timeZone$;
};$wgb6s9$4f3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$4f0$timezone,d:['ceylon.time.timezone','timeZone','$o','system']};};
function $init$system(){
if($wgb6s9$4f3.$$===undefined){
m$1.initTypeProto($wgb6s9$4f3,'ceylon.time.timezone::timeZone.system',$init$OffsetTimeZone$timezone());
$4f0$timezone.$wgb6s9$4f3=$wgb6s9$4f3;
}
return $wgb6s9$4f3;
}
timeZone$.$init$system=$init$system;
m$1.atr$(timeZone$,'system',function(){return this.$wgb6s9$4f2_;},undefined,function(){return{mod:$CCMM$,$t:{t:$4f0$timezone.$$.prototype.$init$system()},$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};});
timeZone$.$wgb6s9$4f3=$wgb6s9$4f3;timeZone$.$wgb6s9$4f3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4f0$timezone.$$.prototype.$init$system()},$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};};
function $wgb6s9$4f5(){
var timeZone$=this;
var utc$timeZone$=new this.$wgb6s9$4f5.$$;utc$timeZone$.outer$=this;
OffsetTimeZone$timezone(0,utc$timeZone$);
utc$timeZone$.$wgb6s9$4f7_="Z";
utc$timeZone$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$4f5,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};}};
utc$timeZone$.$prop$getString.get=function(){return string};
return utc$timeZone$;
};$wgb6s9$4f5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$4f0$timezone,d:['ceylon.time.timezone','timeZone','$o','utc']};};
function $init$utc(){
if($wgb6s9$4f5.$$===undefined){
m$1.initTypeProto($wgb6s9$4f5,'ceylon.time.timezone::timeZone.utc',$init$OffsetTimeZone$timezone());
$4f0$timezone.$wgb6s9$4f5=$wgb6s9$4f5;
(function(utc$timeZone$){
m$1.atr$(utc$timeZone$,'string',function(){return this.$wgb6s9$4f7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$4f5,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};});
})($wgb6s9$4f5.$$.prototype);
}
return $wgb6s9$4f5;
}
timeZone$.$init$utc=$init$utc;
m$1.atr$(timeZone$,'utc',function(){return this.$wgb6s9$4f4_;},undefined,function(){return{mod:$CCMM$,$t:{t:$4f0$timezone.$$.prototype.$init$utc()},$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};});
timeZone$.$wgb6s9$4f5=$wgb6s9$4f5;timeZone$.$wgb6s9$4f5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4f0$timezone.$$.prototype.$init$utc()},$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};};
timeZone$.parse=function($4f9){
var timeZone$=this;
return parseTimeZone$iso8601($4f9);
};timeZone$.parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'zone',mt:'prm',$t:{t:m$1.$_String}}],$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:parse')];},d:['ceylon.time.timezone','timeZone','$m','parse']};};
timeZone$.offset$defs$minutes=function($4fa,$4fb,$4fc){return 0;};
timeZone$.offset$defs$milliseconds=function($4fa,$4fb,$4fc){return 0;};
timeZone$.offset=function($4fa,$4fb,$4fc){
var timeZone$=this;
if($4fb===undefined){$4fb=timeZone$.offset$defs$minutes($4fa,$4fb,$4fc);}
if($4fc===undefined){$4fc=timeZone$.offset$defs$milliseconds($4fa,$4fb,$4fc);}
var $4fd=$4fa.times(milliseconds$base().perHour).plus($4fb.times(milliseconds$base().perMinute)).plus($4fc);
m$1.asrt$((($4fe=$4fd,$4fe.compare((-12).times(milliseconds$base().perHour))!==m$1.smaller()&&$4fe.compare((12).times(milliseconds$base().perHour))!==m$1.larger())),"Assertion failed: \'-12 * ms.perHour <= offsetMilliseconds <= 12 * ms.perHour\' at TimeZone.ceylon (88:15-88:73)",'88:8-88:74','TimeZone.ceylon');
if((($4fd).valueOf()==(0).valueOf())){
return timeZone$.utc;
}
return OffsetTimeZone$timezone($4fd);
};timeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OffsetTimeZone$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$4f0$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:offset')];},d:['ceylon.time.timezone','timeZone','$m','offset']};};
$init$system();
$init$utc();
})($4f0$timezone.$$.prototype);
}
return $4f0$timezone;
}
ex$.$init$timeZone$timezone=$init$timeZone$timezone;
$init$timeZone$timezone();
var $4ff;
function timeZone$timezone(){
if($4ff===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'timeZone\' before it was set"),'63:0-95:0','TimeZone.ceylon');
if($4ff===undefined){$4ff=m$1.INIT$;$4ff=$init$timeZone$timezone()();$4ff.$crtmm$=timeZone$timezone.$crtmm$;}
return $4ff;
}
ex$.timeZone$timezone=timeZone$timezone;
timeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$timeZone$timezone()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone')];},d:['ceylon.time.timezone','timeZone']};};
$prop$getTimeZone$timezone=timeZone$timezone;
ex$.$prop$getTimeZone$timezone=$prop$getTimeZone$timezone;
function ZoneDateTime$timezone(zoneDateTime$){
ReadableZoneDateTime$timezone(zoneDateTime$);
ReadableDateTime$base(zoneDateTime$);
ReadableTimeZone$timezone(zoneDateTime$);
DateTimeBehavior$base({TimeType$DateTimeBehavior:{t:Time},DateType$DateTimeBehavior:{t:$_Date},Element$DateTimeBehavior:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Comparable({Other$Comparable:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Ordinal({Other$Ordinal:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Enumerable({Other$Enumerable:{t:ZoneDateTime$timezone}},zoneDateTime$);
}
ZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableZoneDateTime$timezone},{t:ReadableDateTime$base},{t:ReadableTimeZone$timezone},{t:DateTimeBehavior$base,a:{TimeType$DateTimeBehavior:{t:Time},DateType$DateTimeBehavior:{t:$_Date},Element$DateTimeBehavior:{t:ZoneDateTime$timezone}}},{t:m$1.Comparable,a:{Other$Comparable:{t:ZoneDateTime$timezone}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:ZoneDateTime$timezone}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:ZoneDateTime$timezone}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime')];},d:['ceylon.time.timezone','ZoneDateTime']};};
ex$.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
if(ZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$init$ReadableZoneDateTime$timezone(),$init$ReadableDateTime$base(),$init$ReadableTimeZone$timezone(),$init$DateTimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(zoneDateTime$){
zoneDateTime$.$prop$getInstant={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc("Instant used as base.")];},d:['ceylon.time.timezone','ZoneDateTime','$at','instant']};}};
m$1.atr$(zoneDateTime$,'currentOffsetMilliseconds',function(){
var zoneDateTime$=this;
return zoneDateTime$.timeZone.offset(zoneDateTime$.instant);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ZoneDateTime$timezone,pa:9,an:function(){return[m$1.doc("Returns current time zone offset from UTC in milliseconds")];},d:['ceylon.time.timezone','ZoneDateTime','$at','currentOffsetMilliseconds']};});
zoneDateTime$.$prop$getDateTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$at:dateTime')];},d:['ceylon.time.timezone','ZoneDateTime','$at','dateTime']};}};
})(ZoneDateTime$timezone.$$.prototype);
}
return ZoneDateTime$timezone;
}
ex$.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;
$init$ZoneDateTime$timezone();
function zoneDateTime$timezone($4fg,$4fh,$4fi,$4fj,$4fk,$4fl,$4fm,$4fn){
if($4fk===undefined){$4fk=(0);}
if($4fl===undefined){$4fl=(0);}
if($4fm===undefined){$4fm=(0);}
if($4fn===undefined){$4fn=(0);}
var $4fo=dateTime($4fh,$4fi,$4fj,$4fk,$4fl,$4fm,$4fn);
var $4fp=unixTime$chronology().timeFromFixed($4fo.dayOfEra).plus($4fo.millisecondsOfDay);
var $4fq=$4fp.minus($4fg.offset(Instant($4fp)));
return GregorianZonedDateTime$internal(Instant($4fq),$4fg);
}
ex$.zoneDateTime$timezone=zoneDateTime$timezone;
zoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',$t:{t:TimeZone$timezone}},{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'date',mt:'prm',$t:{t:m$1.Integer}},{nm:'hour',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:zoneDateTime')];},d:['ceylon.time.timezone','zoneDateTime']};};
ex$.$pkgunsh$ceylon$time={'FixedInstant':FixedInstant,'FixedMilliseconds':FixedMilliseconds,'OffsetClock':OffsetClock};
ex$.$pkgunsh$ceylon$time$base={'firstDayOfMonth':$prop$getFirstDayOfMonth$base};
ex$.$pkgunsh$ceylon$time$iso8601={'createDateTime':createDateTime$iso8601,'parseTimeComponents':parseTimeComponents$iso8601};
ex$.$pkgunsh$ceylon$time$timezone$parser$iana={'parseOnDayToken':parseOnDayToken$timezone$parser$iana,'parseTime':parseTime$timezone$parser$iana,'atTimeDefinition':atTimeDefinition$timezone$parser$iana,'adjustToEndOfDayIfNecessary':adjustToEndOfDayIfNecessary$timezone$parser$iana,'findDayOfWeek':findDayOfWeek$timezone$parser$iana,'toPeriod':toPeriod$timezone$parser$iana,'parseYear':parseYear$timezone$parser$iana};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
