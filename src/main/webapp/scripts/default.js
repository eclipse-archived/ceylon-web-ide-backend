var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition Foo at equality.ceylon (1:0-11:0)
function $Foo(){}
$$$cl15.initType($Foo,'Foo',$$$cl15.$IdentifiableObject);
$$$cl15.inheritProto($Foo,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');

//AttributeDeclaration t at equality.ceylon (2:4-2:11)
$Foo.prototype.getT$Foo$=function getT$Foo$(){
    return this.t$Foo;
}

//MethodDefinition equals at equality.ceylon (3:4-10:4)
$Foo.prototype.equals=function equals(that){
    var $$foo=this;
    if($$$cl15.isOfType(that,'Foo')===$$$cl15.getTrue()){
        function getThat(){return that}
        return $$foo.t$Foo.equals(getThat().getT$Foo$());
    }
    else {
        return $$$cl15.getFalse();
    }
    
}
function Foo(t$Foo, $$foo){
    if ($$foo===undefined)$$foo=new $Foo;
    $$foo.t$Foo=t$Foo;
    
    //AttributeDeclaration t at equality.ceylon (2:4-2:11)
    $$foo.t$Foo=$$foo.t$Foo;
    return $$foo;
}

//MethodDefinition equality at equality.ceylon (13:0-20:0)
function equality(){
    assert(Foo($$$cl15.Integer(1)).equals(Foo($$$cl15.Integer(1))),$$$cl15.String("Foo(1)==Foo(1)",14));
    assert(Foo($$$cl15.String("hi",2)).equals(Foo($$$cl15.String("hi",2))),$$$cl15.String("Foo(hi)==Foo(hi)",16));
    assert(Foo($$$cl15.Integer(1)).equals(Foo($$$cl15.Integer(2))).equals($$$cl15.getFalse()),$$$cl15.String("Foo(1)!=Foo(2)",14));
    assert(Foo($$$cl15.Integer(1)).equals(Foo($$$cl15.String("hello",5))).equals($$$cl15.getFalse()),$$$cl15.String("Foo(1)!=Foo(hello)",18));
    assert(Foo($$$cl15.Integer(0)).equals($$$cl15.Integer(0)).equals($$$cl15.getFalse()),$$$cl15.String("Foo(0)!=0",9));
    assert(Foo($$$cl15.String("hello",5)).equals($$$cl15.String("hello",5)).equals($$$cl15.getFalse()),$$$cl15.String("Foo(hello)!=hello",17));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition Pair at iterators.ceylon (1:0-12:0)
function $Pair(){}
$$$cl15.initType($Pair,'Pair',$$$cl15.$IdentifiableObject,$$$cl15.$Iterable);
$$$cl15.inheritProto($Pair,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
$$$cl15.inheritProto($Pair,$$$cl15.$Iterable,'$$$cl15$Iterable$');

//AttributeDeclaration empty at iterators.ceylon (11:4-11:39)
$Pair.prototype.getEmpty=function getEmpty(){
    return this.empty;
}
function Pair(one$Pair, two$Pair, $$pair){
    if ($$pair===undefined)$$pair=new $Pair;
    $$pair.one$Pair=one$Pair;
    $$pair.two$Pair=two$Pair;
    $$$cl15.Iterable($$pair);
    
    //ObjectDefinition iterator at iterators.ceylon (2:4-10:4)
    function $iterator(){}
    $$$cl15.initType($iterator,'Pair.iterator',$$$cl15.$IdentifiableObject,$$$cl15.$Iterator);
    $$$cl15.inheritProto($iterator,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
    $$$cl15.inheritProto($iterator,$$$cl15.$Iterator,'$$$cl15$Iterator$');
    
    //AttributeDeclaration i at iterators.ceylon (3:8-3:29)
    $iterator.prototype.getI$iterator$=function getI$iterator$(){
        return this.i$iterator;
    }
    $iterator.prototype.setI$iterator$=function setI$iterator$(i){
        this.i$iterator=i; return i;
    }
    
    //MethodDefinition next at iterators.ceylon (4:8-9:8)
    $iterator.prototype.next=function next(){
        var $$iterator=this;
        (function($){$$iterator.setI$iterator$($.getSuccessor());return $}($$iterator.getI$iterator$()));
        if (($$iterator.getI$iterator$().equals($$$cl15.Integer(1)))===$$$cl15.getTrue()){
            return $$pair.one$Pair;
        }
        
        if (($$iterator.getI$iterator$().equals($$$cl15.Integer(2)))===$$$cl15.getTrue()){
            return $$pair.two$Pair;
        }
        
        return $$$cl15.getExhausted();
    }
    var $iterator=function iterator(){
        var $$iterator=new $iterator;
        $$$cl15.Iterator($$iterator);
        
        //AttributeDeclaration i at iterators.ceylon (3:8-3:29)
        $$iterator.i$iterator=$$$cl15.Integer(0);
        return $$iterator;
    }();
    $$pair.getIterator=function getIterator(){
        return $iterator;
    }
    
    //AttributeDeclaration empty at iterators.ceylon (11:4-11:39)
    $$pair.empty=$$$cl15.getFalse();
    return $$pair;
}

//MethodDefinition test_foreach at iterators.ceylon (14:0-71:0)
function test_foreach(){
    
    //AttributeDeclaration list at iterators.ceylon (15:4-15:34)
    var $list=$$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3),$$$cl15.Integer(4),$$$cl15.Integer(5)]);
    function getList(){
        return $list;
    }
    
    //AttributeDeclaration sum at iterators.ceylon (16:4-16:29)
    var $sum=$$$cl15.Integer(0);
    function getSum(){
        return $sum;
    }
    function setSum(sum){
        $sum=sum; return sum;
    }
    (function(){
        var _iter = getList().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getI(){ return _item; }
            (setSum(getSum().plus(getI())),getSum());
        }
    }());
    
    assert(getSum().equals($$$cl15.Integer(15)),$$$cl15.String("simple foreach",14));
    
    //MethodDefinition hasEvens at iterators.ceylon (21:4-32:4)
    function hasEvens(l){
        
        //AttributeDeclaration found at iterators.ceylon (22:8-22:39)
        var $found=$$$cl15.getFalse();
        function getFound(){
            return $found;
        }
        function setFound(found){
            $found=found; return found;
        }
        (function(){
            var _iter = l.getIterator();
            var _item;
            while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
                function getI(){ return _item; }
                if ((getI().remainder($$$cl15.Integer(2)).equals($$$cl15.Integer(0)))===$$$cl15.getTrue()){
                    setFound($$$cl15.getTrue());
                    break;
                }
                
            }
            if ($$$cl15.getExhausted() === _item){
                $$$cl15.print($$$cl15.String("No even numbers",15));
            }
            
        }());
        
        return getFound();
    }
    
    //AttributeDeclaration odds at iterators.ceylon (33:4-33:28)
    var $odds=$$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(3),$$$cl15.Integer(5)]);
    function getOdds(){
        return $odds;
    }
    assert(hasEvens(getList()),$$$cl15.String("for/else 1",10));
    assert(hasEvens(getOdds()).equals($$$cl15.getFalse()),$$$cl15.String("for/else 2",10));
    assert(hasEvens($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(3),$$$cl15.Integer(5),$$$cl15.Integer(2)])),$$$cl15.String("for/else 3",10));
    assert(hasEvens($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(3),$$$cl15.Integer(2),$$$cl15.Integer(5)])),$$$cl15.String("for/else 4",10));
    setSum($$$cl15.Integer(0));
    (function(){
        var _iter = getOdds().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getI(){ return _item; }
            (setSum(getSum().plus(getI())),getSum());
            (function(){
                var _iter = $$$cl15.ArraySequence([$$$cl15.Integer(2),$$$cl15.Integer(4),$$$cl15.Integer(6)]).getIterator();
                var _item;
                while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
                    function getJ(){ return _item; }
                    (setSum(getSum().plus(getJ())),getSum());
                }
            }());
            
        }
    }());
    
    assert(getSum().equals($$$cl15.Integer(45)),$$$cl15.String("nested foreach",14));
    setSum($$$cl15.Integer(0));
    
    //AttributeDeclaration _entries at iterators.ceylon (49:4-49:44)
    var $_entries=$$$cl15.ArraySequence([$$$cl15.Entry($$$cl15.Integer(1),$$$cl15.Integer(10)),$$$cl15.Entry($$$cl15.Integer(2),$$$cl15.Integer(20)),$$$cl15.Entry($$$cl15.Integer(3),$$$cl15.Integer(30))]);
    function get_entries(){
        return $_entries;
    }
    (function(){
        var _iter = get_entries().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getIdx(){ return _item.getKey(); }
            function getElem(){ return _item.getItem(); }
            (setSum(getSum().plus(getIdx())),getSum());
            (setSum(getSum().plus(getElem())),getSum());
        }
    }());
    
    assert(getSum().equals($$$cl15.Integer(66)),$$$cl15.String("key-value foreach",17));
    setSum($$$cl15.Integer(0));
    
    //AttributeDeclaration did_else at iterators.ceylon (57:4-57:38)
    var $did_else=$$$cl15.getFalse();
    function getDid_else(){
        return $did_else;
    }
    function setDid_else(did_else){
        $did_else=did_else; return did_else;
    }
    (function(){
        var _iter = $$$cl15.entries($$$cl15.ArraySequence([$$$cl15.Integer(2),$$$cl15.Integer(4),$$$cl15.Integer(6)])).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getIdx(){ return _item.getKey(); }
            function getElem(){ return _item.getItem(); }
            (setSum(getSum().plus(getIdx().plus(getElem()))),getSum());
        }
        if ($$$cl15.getExhausted() === _item){
            setDid_else($$$cl15.getTrue());
        }
        
    }());
    
    assert(getSum().equals($$$cl15.Integer(15)),$$$cl15.String("foreach with iterator",21));
    assert(getDid_else(),$$$cl15.String("for/else with iterator",22));
    (function(){
        var _iter = $$$cl15.entries($$$cl15.ArraySequence([$$$cl15.Integer(2),$$$cl15.Integer(4),$$$cl15.Integer(6)])).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getIdx(){ return _item.getKey(); }
            function getElem(){ return _item.getItem(); }
            if ((getIdx().equals($$$cl15.Integer(0)))===$$$cl15.getTrue()){
                break;
            }
            
        }
        if ($$$cl15.getExhausted() === _item){
            setSum($$$cl15.Integer(0));
        }
        
    }());
    
    assert(getSum().equals($$$cl15.Integer(15)),$$$cl15.String("for/else with iterator",22));
}

//MethodDefinition iterators at iterators.ceylon (73:0-105:0)
function iterators(){
    
    //AttributeDeclaration i at iterators.ceylon (74:4-74:23)
    var $i=$$$cl15.Integer(0);
    function getI(){
        return $i;
    }
    function setI(i){
        $i=i; return i;
    }
    (function(){
        var _iter = Pair($$$cl15.String("hello",5),$$$cl15.String("world",5)).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getS(){ return _item; }
            if ((getI().equals($$$cl15.Integer(0)))===$$$cl15.getTrue()){
                assert(getS().equals($$$cl15.String("hello",5)),$$$cl15.String("iterator iteration",18));
            }
            
            if ((getI().equals($$$cl15.Integer(1)))===$$$cl15.getTrue()){
                assert(getS().equals($$$cl15.String("world",5)),$$$cl15.String("iterator iteration",18));
            }
            
            (function($){setI($.getSuccessor());return $}(getI()));
        }
    }());
    
    assert(getI().equals($$$cl15.Integer(2)),$$$cl15.String("iterator iteration",18));
    
    //AttributeDeclaration seq at iterators.ceylon (83:4-83:33)
    var $seq=$$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3),$$$cl15.Integer(4),$$$cl15.Integer(5)]);
    function getSeq(){
        return $seq;
    }
    
    //AttributeDeclaration range at iterators.ceylon (84:4-84:25)
    var $range=$$$cl15.Range($$$cl15.Integer(95),$$$cl15.Integer(100));
    function getRange(){
        return $range;
    }
    
    //AttributeDeclaration sing at iterators.ceylon (85:4-85:30)
    var $sing=$$$cl15.Singleton($$$cl15.Integer(10));
    function getSing(){
        return $sing;
    }
    
    //AttributeDeclaration iter1 at iterators.ceylon (86:4-86:30)
    var $iter1=getSeq().getIterator();
    function getIter1(){
        return $iter1;
    }
    
    //AttributeDeclaration iter2 at iterators.ceylon (87:4-87:32)
    var $iter2=getRange().getIterator();
    function getIter2(){
        return $iter2;
    }
    
    //AttributeDeclaration iter3 at iterators.ceylon (88:4-88:31)
    var $iter3=getSing().getIterator();
    function getIter3(){
        return $iter3;
    }
    assert(getIter1().next().equals($$$cl15.Integer(1)),$$$cl15.String("seq.iter",8));
    getIter1().next();
    getIter1().next();
    getIter1().next();
    assert(getIter1().next().equals($$$cl15.Integer(5)),$$$cl15.String("seq.iter",8));
    assert(getIter1().next().equals($$$cl15.getExhausted()),$$$cl15.String("seq.iter",8));
    assert(getIter1().next().equals($$$cl15.getExhausted()),$$$cl15.String("seq.iter",8));
    assert(getIter2().next().equals($$$cl15.Integer(95)),$$$cl15.String("range.iter",10));
    getIter2().next();
    getIter2().next();
    getIter2().next();
    getIter2().next();
    assert(getIter2().next().equals($$$cl15.Integer(100)),$$$cl15.String("range.iter",10));
    assert(getIter2().next().equals($$$cl15.getExhausted()),$$$cl15.String("range.iter",10));
    assert(getIter2().next().equals($$$cl15.getExhausted()),$$$cl15.String("range.iter",10));
    assert(getIter3().next().equals($$$cl15.Integer(10)),$$$cl15.String("singleton.iter",14));
    assert(getIter3().next().equals($$$cl15.getExhausted()),$$$cl15.String("singleton.iter",14));
    assert(getIter3().next().equals($$$cl15.getExhausted()),$$$cl15.String("singleton.iter",14));
    $$$cl15.print($$$cl15.String("Testing for/else loops",22));
    test_foreach();
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition strings at strings.ceylon (1:0-221:0)
function strings(){
    
    //AttributeDeclaration hello at strings.ceylon (2:4-2:25)
    var $hello=$$$cl15.String("hello",5);
    function getHello(){
        return $hello;
    }
    assert(getHello().getSize().equals($$$cl15.Integer(5)),$$$cl15.String("string size",11));
    assert($$$cl15.String("",0).getSize().equals($$$cl15.Integer(0)),$$$cl15.String("empty string size",17));
    assert($$$cl15.exists($$$cl15.String("",0).getLastIndex()).equals($$$cl15.getFalse()),$$$cl15.String("empty string last index",23));
    assert($$$cl15.exists($$$cl15.String("",0).item($$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("empty string first element exists",33));
    assert($$$cl15.String("abcd",4).getSize().equals($$$cl15.Integer(4)),$$$cl15.String("string size",11));
    assert(getHello().span($$$cl15.Integer(1),$$$cl15.Integer(3)).equals($$$cl15.String("ell",3)),$$$cl15.String("string span",11));
    assert(getHello().span($$$cl15.Integer(1),$$$cl15.getNull()).equals($$$cl15.String("ello",4)),$$$cl15.String("string span",11));
    assert(getHello().segment($$$cl15.Integer(1),$$$cl15.Integer(3)).equals($$$cl15.String("ell",3)),$$$cl15.String("string segment",14));
    assert($$$cl15.String("",0).span($$$cl15.Integer(1),$$$cl15.Integer(3)).equals($$$cl15.String("",0)),$$$cl15.String("empty string span",17));
    assert($$$cl15.String("",0).span($$$cl15.Integer(1),$$$cl15.getNull()).equals($$$cl15.String("",0)),$$$cl15.String("empty string span",17));
    assert($$$cl15.String("",0).segment($$$cl15.Integer(1),$$$cl15.Integer(3)).equals($$$cl15.String("",0)),$$$cl15.String("empty string segment",20));
    assert($$$cl15.exists(getHello().item($$$cl15.Integer(0))),$$$cl15.String("string first element exists",27));
    var $cond$;
    if(($cond$=getHello().getLastIndex())!==null){
        var $li=$cond$;
        function getLi(){return $li}
        assert($$$cl15.exists(getHello().item(getLi())),$$$cl15.String("string first element exists",27));
    }
    else {
        fail($$$cl15.String("string last index",17));
    }
    
    assert($$$cl15.exists(getHello().item(getHello().getSize())).equals($$$cl15.getFalse()),$$$cl15.String("string element not exists",25));
    var $cond$;
    if(($cond$=getHello().item($$$cl15.Integer(0)))!==null){
        var $c=$cond$;
        function getC(){return $c}
        assert(getC().equals($$$cl15.Character(104)),$$$cl15.String("string first element value",26));
    }
    else {
        fail($$$cl15.String("string first element exists",27));
    }
    
    var $cond$;
    if(($cond$=getHello().item(getHello().getSize().getPredecessor()))!==null){
        var $c=$cond$;
        function getC(){return $c}
        assert(getC().equals($$$cl15.Character(111)),$$$cl15.String("string last element value",25));
    }
    else {
        fail($$$cl15.String("string last element exists",26));
    }
    
    var $cond$;
    if(($cond$=getHello().item(getHello().getSize()))!==null){
        var $c=$cond$;
        function getC(){return $c}
        fail($$$cl15.String("string element out of range",27));
    }
    
    
    //AttributeDeclaration i at strings.ceylon (42:4-42:23)
    var $i=$$$cl15.Integer(0);
    function getI(){
        return $i;
    }
    function setI(i){
        $i=i; return i;
    }
    (function(){
        var _iter = getHello().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getC(){ return _item; }
            
            //AttributeDeclaration hc at strings.ceylon (44:8-44:27)
            var $hc=getHello().item(getI());
            function getHc(){
                return $hc;
            }
            if(getHc()!==null){
                assert(getHc().equals(getC()),$$$cl15.String("iterated string element",23));
            }
            
            (setI(getI().plus($$$cl15.Integer(1))),getI());
        }
    }());
    
    assert(getI().equals(getHello().getSize()),$$$cl15.String("string iteration",16));
    (function(){
        var _iter = $$$cl15.String("",0).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getC(){ return _item; }
            fail($$$cl15.String("empty string iteration",22));
        }
    }());
    
    assert($$$cl15.String("a",1).compare($$$cl15.String("z",1)).equals($$$cl15.getSmaller()),$$$cl15.String("string comparison",17));
    assert($$$cl15.String("abc",3).equals($$$cl15.String("abc",3)),$$$cl15.String("string equality",15));
    assert($$$cl15.String("hello",5).plus($$$cl15.String(" ",1)).plus($$$cl15.String("world",5)).equals($$$cl15.String("hello world",11)),$$$cl15.String("string concatenation",20));
    assert(getHello().getUppercased().equals($$$cl15.String("HELLO",5)),$$$cl15.String("uppercase",9));
    assert(getHello().getUppercased().getLowercased().equals(getHello()),$$$cl15.String("lowercase",9));
    assert($$$cl15.String("GoodBye",7).getLowercased().equals($$$cl15.String("goodbye",7)),$$$cl15.String("lowercase",9));
    assert(getHello().contains($$$cl15.String("ll",2)),$$$cl15.String("string contains",15));
    assert(getHello().contains($$$cl15.String("x",1)).equals($$$cl15.getFalse()),$$$cl15.String("string contains",15));
    assert(getHello().longerThan($$$cl15.Integer(4)),$$$cl15.String("string longer than",18));
    assert(getHello().longerThan($$$cl15.Integer(6)).equals($$$cl15.getFalse()),$$$cl15.String("string longer than",18));
    assert(getHello().longerThan($$$cl15.Integer(5)).equals($$$cl15.getFalse()),$$$cl15.String("string longer than",18));
    assert($$$cl15.String("  ",2).plus(getHello()).plus($$$cl15.String("\n")).getTrimmed().equals(getHello()),$$$cl15.String("string trim",11));
    assert($$$cl15.String("hello\n    world\ngoodbye   everyone!").getNormalized().equals($$$cl15.String("hello world goodbye everyone!",29)),$$$cl15.String("string normalize",16));
    assert(getHello().contains($$$cl15.Character(108)),$$$cl15.String("char in string",14));
    assert(getHello().contains($$$cl15.Character(120)).equals($$$cl15.getFalse()),$$$cl15.String("char not in string",18));
    assert(getHello().contains($$$cl15.String("ell",3)),$$$cl15.String("substring in string",19));
    assert(getHello().contains($$$cl15.String("goodbye",7)).equals($$$cl15.getFalse()),$$$cl15.String("substring not in string",23));
    var $cond$;
    if(($cond$=getHello().firstOccurrence($$$cl15.String("ll",2)))!==null){
        var $occ=$cond$;
        function getOcc(){return $occ}
        assert(getOcc().equals($$$cl15.Integer(2)),$$$cl15.String("string first occurrence",23));
    }
    else {
        fail($$$cl15.String("string first occurrence",23));
    }
    
    var $cond$;
    if(($cond$=getHello().firstOccurrence($$$cl15.String("x",1)))!==null){
        var $nocc=$cond$;
        function getNocc(){return $nocc}
        fail($$$cl15.String("string no first occurrence",26));
    }
    
    var $cond$;
    if(($cond$=$$$cl15.String("hello hello",11).lastOccurrence($$$cl15.String("hell",4)))!==null){
        var $locc=$cond$;
        function getLocc(){return $locc}
        assert(getLocc().equals($$$cl15.Integer(6)),$$$cl15.String("string last occurrence",22));
    }
    else {
        fail($$$cl15.String("string last occurrence",22));
    }
    
    var $cond$;
    if(($cond$=getHello().firstCharacterOccurrence($$$cl15.Character(108)))!==null){
        var $occ=$cond$;
        function getOcc(){return $occ}
        assert(getOcc().equals($$$cl15.Integer(2)),$$$cl15.String("string first occurrence",23));
    }
    else {
        fail($$$cl15.String("string first occurrence",23));
    }
    
    var $cond$;
    if(($cond$=getHello().firstCharacterOccurrence($$$cl15.Character(120)))!==null){
        var $nocc=$cond$;
        function getNocc(){return $nocc}
        fail($$$cl15.String("string no first occurrence",26));
    }
    
    var $cond$;
    if(($cond$=$$$cl15.String("hello hello",11).lastCharacterOccurrence($$$cl15.Character(104)))!==null){
        var $locc=$cond$;
        function getLocc(){return $locc}
        assert(getLocc().equals($$$cl15.Integer(6)),$$$cl15.String("string last occurrence",22));
    }
    else {
        fail($$$cl15.String("string last occurrence",22));
    }
    
    
    //AttributeDeclaration chars at strings.ceylon (106:4-106:34)
    var $chars=getHello().getCharacters();
    function getChars(){
        return $chars;
    }
    var $cond$;
    if(($cond$=getChars().item($$$cl15.Integer(0)))!==null){
        var $char=$cond$;
        function getChar(){return $char}
        assert(getChar().equals($$$cl15.Character(104)),$$$cl15.String("string characters",17));
    }
    else {
        fail($$$cl15.String("string characters",17));
    }
    
    var $cond$;
    if(($cond$=getChars().item($$$cl15.Integer(3)))!==null){
        var $char=$cond$;
        function getChar(){return $char}
        assert(getChar().equals($$$cl15.Character(108)),$$$cl15.String("string characters",17));
    }
    else {
        fail($$$cl15.String("string characters",17));
    }
    
    var $cond$;
    if(($cond$=getChars().item($$$cl15.Integer(5)))!==null){
        var $char=$cond$;
        function getChar(){return $char}
        fail($$$cl15.String("string characters",17));
    }
    
    var $cond$;
    if(($cond$=getChars().getFirst())!==null){
        var $c=$cond$;
        function getC(){return $c}
        assert(getC().equals($$$cl15.Character(104)),$$$cl15.String("string first character",22));
    }
    else {
        fail($$$cl15.String("string first character",22));
    }
    
    assert(getChars().getSize().equals($$$cl15.Integer(5)),$$$cl15.String("string characters size",22));
    if(getChars().getEmpty()===$$$cl15.getFalse()){
        assert(getChars().getLastIndex().equals($$$cl15.Integer(4)),$$$cl15.String("string characters last index",28));
    }
    else {
        fail($$$cl15.String("string characters nonempty",26));
    }
    
    var $cond$;
    if(($cond$=$$$cl15.String("",0).getCharacters()).getEmpty()===$$$cl15.getFalse()){
        var $nochars=$cond$;
        function getNochars(){return $nochars}
        fail($$$cl15.String("string characters empty",23));
    }
    
    assert(getHello().getKeys().contains($$$cl15.Integer(3)),$$$cl15.String("string keys",11));
    assert(getHello().getKeys().contains($$$cl15.Integer(6)).equals($$$cl15.getFalse()),$$$cl15.String("string keys",11));
    assert(getHello().getKeys().contains($$$cl15.Integer(5)).equals($$$cl15.getFalse()),$$$cl15.String("string keys",11));
    assert(getHello().getKeys().contains($$$cl15.Integer(0)),$$$cl15.String("string keys",11));
    assert(getHello().getHash().equals($$$cl15.String("HE",2).plus($$$cl15.String("LLO",3)).getLowercased().getHash()),$$$cl15.String("string hash",11));
    
    //AttributeDeclaration builder at strings.ceylon (147:4-147:35)
    var $builder=$$$cl15.StringBuilder();
    function getBuilder(){
        return $builder;
    }
    assert(getBuilder().getString().equals($$$cl15.String("",0)),$$$cl15.String("StringBuilder 1",15));
    getBuilder().append($$$cl15.String("hello",5));
    assert(getBuilder().getString().equals($$$cl15.String("hello",5)),$$$cl15.String("StringBuilder 2",15));
    getBuilder().appendCharacter($$$cl15.Character(32));
    getBuilder().append($$$cl15.String("world",5));
    
    //AttributeDeclaration s at strings.ceylon (153:4-153:29)
    var $s=getBuilder().getString();
    function getS(){
        return $s;
    }
    assert(getS().equals($$$cl15.String("hello world",11)),$$$cl15.String("string builder",14));
    getBuilder().appendAll();
    getBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String(" ",1)]));
    getBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("goodbye",7),$$$cl15.String(" ",1),$$$cl15.String("everyone",8)]));
    getBuilder().appendSpace();
    assert(getBuilder().getString().equals($$$cl15.String("hello world goodbye everyone ",29)),$$$cl15.String("string builder",14));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(0)).equals($$$cl15.String("",0)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(0)).equals($$$cl15.String("",0)),$$$cl15.String("string terminal",15));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(1)).equals($$$cl15.String("h",1)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(1)).equals($$$cl15.String("d",1)),$$$cl15.String("string terminal",15));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(5)).equals($$$cl15.String("hello",5)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(5)).equals($$$cl15.String("world",5)),$$$cl15.String("string terminal",15));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(20)).equals($$$cl15.String("hello world",11)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(20)).equals($$$cl15.String("hello world",11)),$$$cl15.String("string terminal",15));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(10)).equals($$$cl15.String("hello worl",10)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(10)).equals($$$cl15.String("ello world",10)),$$$cl15.String("string terminal",15));
    assert($$$cl15.String("hello world",11).initial($$$cl15.Integer(11)).equals($$$cl15.String("hello world",11)),$$$cl15.String("string initial",14));
    assert($$$cl15.String("hello world",11).terminal($$$cl15.Integer(11)).equals($$$cl15.String("hello world",11)),$$$cl15.String("string terminal",15));
    assert($$$cl15.min($$$cl15.ArraySequence([$$$cl15.String("abc",3),$$$cl15.String("xyz",3),$$$cl15.String("foo",3),$$$cl15.String("bar",3)])).equals($$$cl15.String("abc",3)),$$$cl15.String("strings min",11));
    assert($$$cl15.max($$$cl15.ArraySequence([$$$cl15.String("abc",3),$$$cl15.String("xyz",3),$$$cl15.String("foo",3),$$$cl15.String("bar",3)])).equals($$$cl15.String("xyz",3)),$$$cl15.String("strings max",11));
    assert($$$cl15.String(", ",2).join().equals($$$cl15.String("",0)),$$$cl15.String("string join no strings",22));
    assert($$$cl15.String(", ",2).join($$$cl15.ArraySequence([$$$cl15.String("foo",3)])).equals($$$cl15.String("foo",3)),$$$cl15.String("string join one string",22));
    assert($$$cl15.String(", ",2).join($$$cl15.ArraySequence([$$$cl15.String("foo",3),$$$cl15.String("bar",3),$$$cl15.String("baz",3)])).equals($$$cl15.String("foo, bar, baz",13)),$$$cl15.String("string join",11));
    assert($$$cl15.String("hello world",11).startsWith(getHello()),$$$cl15.String("string starts with",18));
    assert($$$cl15.String("hello world",11).endsWith($$$cl15.String("world",5)),$$$cl15.String("string ends with",16));
    assert($$$cl15.String("Hello world",11).startsWith(getHello()).equals($$$cl15.getFalse()),$$$cl15.String("string starts with",18));
    assert($$$cl15.String("hello World",11).endsWith($$$cl15.String("world",5)).equals($$$cl15.getFalse()),$$$cl15.String("string ends with",16));
    assert($$$cl15.String("",0).startsWith(getHello()).equals($$$cl15.getFalse()),$$$cl15.String("empty string starts with",24));
    assert($$$cl15.String("",0).endsWith($$$cl15.String("world",5)).equals($$$cl15.getFalse()),$$$cl15.String("empty string ends with",22));
    assert($$$cl15.exists($$$cl15.String("",0).split($$$cl15.getNull(),$$$cl15.getTrue()).getFirst()).equals($$$cl15.getFalse()),$$$cl15.String("string split first",18));
    assert($$$cl15.exists($$$cl15.String("hello",5).split($$$cl15.getNull(),$$$cl15.getTrue()).getFirst()),$$$cl15.String("string split first",18));
    assert(function($){return $!==null?$:$$$cl15.String("",0)}($$$cl15.String("hello world",11).split($$$cl15.getNull(),$$$cl15.getTrue()).getFirst()).equals($$$cl15.String("hello",5)),$$$cl15.String("string split first",18));
    
    //AttributeDeclaration count at strings.ceylon (191:4-191:27)
    var $count=$$$cl15.Integer(0);
    function getCount(){
        return $count;
    }
    function setCount(count){
        $count=count; return count;
    }
    (function(){
        var _iter = $$$cl15.String("hello world goodbye",19).split($$$cl15.String(" ",1),$$$cl15.getTrue()).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getTok(){ return _item; }
            (function($){setCount($.getSuccessor());return $}(getCount()));
            assert(getTok().getSize().compare($$$cl15.Integer(4)).equals($$$cl15.getLarger()),$$$cl15.String("string token",12));
        }
    }());
    
    assert(getCount().equals($$$cl15.Integer(3)),$$$cl15.String("string tokens",13));
    (function(){
        var _iter = $$$cl15.String("  ",2).split($$$cl15.String(" ",1),$$$cl15.getTrue()).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getTok(){ return _item; }
            fail($$$cl15.String("no string tokens",16));
        }
    }());
    
    assert($$$cl15.String("",0).getReversed().equals($$$cl15.String("",0)),$$$cl15.String("string reversed",15));
    assert($$$cl15.String("x",1).getReversed().equals($$$cl15.String("x",1)),$$$cl15.String("string reversed",15));
    assert(getHello().getReversed().equals($$$cl15.String("olleh",5)),$$$cl15.String("string reversed",15));
    assert($$$cl15.String("hello",5).repeat($$$cl15.Integer(0)).equals($$$cl15.String("",0)),$$$cl15.String("string repeat",13));
    assert($$$cl15.String("hello",5).repeat($$$cl15.Integer(1)).equals($$$cl15.String("hello",5)),$$$cl15.String("string repeat",13));
    assert($$$cl15.String("hello",5).repeat($$$cl15.Integer(3)).equals($$$cl15.String("hellohellohello",15)),$$$cl15.String("string repeat",13));
    assert($$$cl15.String("hello world",11).replace($$$cl15.String("hello",5),$$$cl15.String("goodbye",7)).equals($$$cl15.String("goodbye world",13)),$$$cl15.String("string replace",14));
    
    //AttributeDeclaration nlb at strings.ceylon (211:4-211:31)
    var $nlb=$$$cl15.StringBuilder();
    function getNlb(){
        return $nlb;
    }
    getNlb().appendNewline();
    getNlb().append($$$cl15.String("hello",5));
    getNlb().appendNewline();
    assert(getNlb().getString().getSize().equals($$$cl15.Integer(7)),$$$cl15.String("string builder newline",22));
    assert(getNlb().getString().equals($$$cl15.String("\nhello\n")),$$$cl15.String("string builder newline",22));
    
    //AttributeDeclaration s1 at strings.ceylon (218:4-218:29)
    var $s1=$$$cl15.String("as it should",12);
    function getS1(){
        return $s1;
    }
    
    //AttributeDeclaration interp at strings.ceylon (219:4-219:70)
    var $interp=$$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("String part ",12),$$$cl15.Integer(1).getString(),$$$cl15.String(" interpolation ",15),$$$cl15.Integer(2).getString(),$$$cl15.String(" works",6),getS1().getString(),$$$cl15.String("",0)])).getString();
    function getInterp(){
        return $interp;
    }
    assert(getInterp().equals($$$cl15.String("String part 1 interpolation 2 worksas it should",47)),$$$cl15.String("String Interpolation",20));
}
this.strings=strings;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition test_singleton at sequences.ceylon (1:0-62:0)
function test_singleton(){
    
    //AttributeDeclaration singleton at sequences.ceylon (2:4-2:43)
    var $singleton=$$$cl15.Singleton($$$cl15.String("hello",5));
    function getSingleton(){
        return $singleton;
    }
    assert(getSingleton().getSize().equals($$$cl15.Integer(1)),$$$cl15.String("singleton size",14));
    assert(getSingleton().getEmpty().equals($$$cl15.getFalse()),$$$cl15.String("singleton empty",15));
    assert(getSingleton().defines($$$cl15.Integer(0)),$$$cl15.String("singleton defines",17));
    assert(getSingleton().defines($$$cl15.Integer(1)).equals($$$cl15.getFalse()),$$$cl15.String("singleton defines",17));
    assert(getSingleton().getString().equals($$$cl15.String("{ hello }",9)),$$$cl15.String("singleton string",16));
    assert($$$cl15.nonempty(getSingleton()),$$$cl15.String("singleton nonempty",18));
    if(getSingleton().getEmpty()===$$$cl15.getFalse()){
        assert(getSingleton().getFirst().equals($$$cl15.String("hello",5)),$$$cl15.String("singleton first",15));
        assert(getSingleton().getLastIndex().equals($$$cl15.Integer(0)),$$$cl15.String("sequence last index",19));
        assert($$$cl15.nonempty(getSingleton().getRest()).equals($$$cl15.getFalse()),$$$cl15.String("singleton rest empty",20));
        var $cond$;
        if(($cond$=getSingleton().getRest()).getEmpty()===$$$cl15.getFalse()){
            var $rest=$cond$;
            function getRest(){return $rest}
            fail($$$cl15.String("singleton rest empty",20));
        }
        
    }
    else {
        fail($$$cl15.String("singleton nonempty",18));
    }
    
    
    //AttributeDeclaration j at sequences.ceylon (20:4-20:23)
    var $j=$$$cl15.Integer(0);
    function getJ(){
        return $j;
    }
    function setJ(j){
        $j=j; return j;
    }
    (function(){
        var _iter = getSingleton().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getX(){ return _item; }
            assert(getX().equals($$$cl15.String("hello",5)),$$$cl15.String("singleton iteration",19));
            setJ(getJ().plus($$$cl15.Integer(1)));
        }
    }());
    
    assert(getJ().equals($$$cl15.Integer(1)),$$$cl15.String("singleton iteration",19));
    var $cond$;
    if(($cond$=getSingleton().item($$$cl15.Integer(0)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        assert(getStr().equals($$$cl15.String("hello",5)),$$$cl15.String("singleton item",14));
    }
    else {
        fail($$$cl15.String("singleton item",14));
    }
    
    var $cond$;
    if(($cond$=getSingleton().item($$$cl15.Integer(0)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        assert(getStr().equals($$$cl15.String("hello",5)),$$$cl15.String("singleton item",14));
    }
    else {
        fail($$$cl15.String("singleton item",14));
    }
    
    var $cond$;
    if(($cond$=getSingleton().item($$$cl15.Integer(1)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        fail($$$cl15.String("singleton item",14));
    }
    
    var $cond$;
    if(($cond$=getSingleton().item($$$cl15.Integer(1)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        fail($$$cl15.String("singleton item",14));
    }
    
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(0),$$$cl15.Integer(1))),$$$cl15.String("nonempty singleton span(0,1)",28));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(0),$$$cl15.Integer(0))),$$$cl15.String("nonempty singleton span(0,0)",28));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(0),$$$cl15.getNull())),$$$cl15.String("nonempty singleton span(0, null)",32));
    assert($$$cl15.nonempty(getSingleton().segment($$$cl15.Integer(0),$$$cl15.Integer(1))),$$$cl15.String("nonempty singleton segment(0,1)",31));
    assert(getSingleton().span($$$cl15.Integer(0),$$$cl15.Integer(3)).getString().equals($$$cl15.String("{ hello }",9)),$$$cl15.String("singleton span(0,3).string",26));
    assert(getSingleton().segment($$$cl15.Integer(0),$$$cl15.Integer(3)).getString().equals($$$cl15.String("{ hello }",9)),$$$cl15.String("singleton segment(0,3).string",29));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(1),$$$cl15.Integer(1))).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty singleton span(1,1)",29));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(1),$$$cl15.getNull())).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty singleton span(1,null)",32));
    assert($$$cl15.nonempty(getSingleton().segment($$$cl15.Integer(1),$$$cl15.Integer(1))).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty singleton segment(1,1)",32));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(0),$$$cl15.Integer(0))),$$$cl15.String("nonempty singleton span(0,0)",28));
    assert($$$cl15.nonempty(getSingleton().span($$$cl15.Integer(0),$$$cl15.Integer(10))),$$$cl15.String("nonempty singleton span(0,10)",29));
    assert($$$cl15.nonempty(getSingleton().segment($$$cl15.Integer(0),$$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty singleton segment(0,0)",32));
    assert($$$cl15.nonempty(getSingleton().segment($$$cl15.Integer(0),$$$cl15.Integer(1).getNegativeValue())).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty singleton segment(0,-1)",33));
    assert(getSingleton().getKeys().contains($$$cl15.Integer(0)),$$$cl15.String("singleton keys.contains(0)",26));
    assert(getSingleton().getKeys().contains($$$cl15.Integer(1)).equals($$$cl15.getFalse()),$$$cl15.String("!singleton keys.contains(1)",27));
    assert(getSingleton().getKeys().contains($$$cl15.Integer(2)).equals($$$cl15.getFalse()),$$$cl15.String("!singleton keys.contains(2)",27));
}

//MethodDefinition test_join at sequences.ceylon (64:0-71:0)
function test_join(){
    
    //AttributeDeclaration l1 at sequences.ceylon (65:4-65:31)
    var $l1=$$$cl15.ArraySequence([$$$cl15.String("join",4),$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3)]);
    function getL1(){
        return $l1;
    }
    
    //AttributeDeclaration l2 at sequences.ceylon (66:4-66:24)
    var $l2=$$$cl15.ArraySequence([$$$cl15.Integer(4),$$$cl15.Integer(5),$$$cl15.Integer(6)]);
    function getL2(){
        return $l2;
    }
    
    //AttributeDeclaration l3 at sequences.ceylon (67:4-67:22)
    var $l3=$$$cl15.ArraySequence([$$$cl15.Integer(7),$$$cl15.Integer(8),$$$cl15.Integer(9)]);
    function getL3(){
        return $l3;
    }
    
    //AttributeDeclaration joint at sequences.ceylon (68:4-68:34)
    var $joint=$$$cl15.join($$$cl15.ArraySequence([getL1(),getL2(),getL3()]));
    function getJoint(){
        return $joint;
    }
    $$$cl15.print(getJoint());
    assert(getJoint().getSize().equals(getL1().getSize().plus(getL2().getSize()).plus(getL3().getSize())),$$$cl15.String("join",4));
}

//MethodDefinition test_zip at sequences.ceylon (73:0-82:0)
function test_zip(){
    
    //AttributeDeclaration keys at sequences.ceylon (74:4-74:37)
    var $keys=$$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3),$$$cl15.Integer(4),$$$cl15.Integer(5),$$$cl15.Integer(6)]);
    function getKeys(){
        return $keys;
    }
    
    //AttributeDeclaration items at sequences.ceylon (75:4-75:59)
    var $items=$$$cl15.ArraySequence([$$$cl15.String("one",3),$$$cl15.String("two",3),$$$cl15.String("three",5),$$$cl15.String("four",4),$$$cl15.String("five",4)]);
    function getItems(){
        return $items;
    }
    
    //AttributeDeclaration z1 at sequences.ceylon (76:4-76:31)
    var $z1=$$$cl15.zip(getKeys(),getItems());
    function getZ1(){
        return $z1;
    }
    
    //AttributeDeclaration z2 at sequences.ceylon (77:4-77:86)
    var $z2=$$$cl15.zip(getKeys(),$$$cl15.ArraySequence([$$$cl15.String("uno",3),$$$cl15.String("dos",3),$$$cl15.String("tres",4),$$$cl15.String("cuatro",6),$$$cl15.String("cinco",5),$$$cl15.String("seis",4),$$$cl15.String("siete",5)]));
    function getZ2(){
        return $z2;
    }
    $$$cl15.print(getZ1());
    $$$cl15.print(getZ2());
    assert(getZ1().getSize().equals($$$cl15.Integer(5)),$$$cl15.String("zip",3));
    assert(getZ2().getSize().equals($$$cl15.Integer(6)),$$$cl15.String("zip",3));
}

//MethodDefinition test_exists_nonempty at sequences.ceylon (85:0-97:0)
function test_exists_nonempty(){
    
    //AttributeDeclaration yes at sequences.ceylon (86:4-86:23)
    var $yes=$$$cl15.String("yes",3);
    function getYes(){
        return $yes;
    }
    
    //AttributeDeclaration no at sequences.ceylon (87:4-87:21)
    var $no=$$$cl15.getNull();
    function getNo(){
        return $no;
    }
    
    //AttributeDeclaration empties at sequences.ceylon (88:4-88:47)
    var $empties=$$$cl15.Singleton($$$cl15.Integer(1));
    function getEmpties(){
        return $empties;
    }
    function setEmpties(empties){
        $empties=empties; return empties;
    }
    
    //AttributeDeclaration t1 at sequences.ceylon (89:4-89:54)
    var $t1=function($){return $!==null?$:$$$cl15.String("WTF",3)}(($$$cl15.exists(getYes())===$$$cl15.getTrue()?$$$cl15.String("yes exists",10):null));
    function getT1(){
        return $t1;
    }
    assert(getT1().equals($$$cl15.String("yes exists",10)),$$$cl15.String("exists 1",8));
    
    //AttributeDeclaration t2 at sequences.ceylon (91:4-91:59)
    var $t2=function($){return $!==null?$:$$$cl15.String("no doesn't exist",16)}(($$$cl15.exists(getNo())===$$$cl15.getTrue()?$$$cl15.String("WTF",3):null));
    function getT2(){
        return $t2;
    }
    assert(getT2().equals($$$cl15.String("no doesn't exist",16)),$$$cl15.String("exists 2",8));
    
    //AttributeDeclaration t3 at sequences.ceylon (93:4-93:76)
    var $t3=function($){return $!==null?$:$$$cl15.String("nonempty broken",15)}(($$$cl15.nonempty(getEmpties())===$$$cl15.getTrue()?$$$cl15.String("nonempty works",14):null));
    function getT3(){
        return $t3;
    }
    assert(getT3().equals($$$cl15.String("nonempty works",14)),$$$cl15.String("nonempty 1",10));
    
    //AttributeDeclaration t4 at sequences.ceylon (95:4-95:65)
    var $t4=function($){return $!==null?$:$$$cl15.String("works",5)}(($$$cl15.nonempty($$$cl15.ArraySequence([]))===$$$cl15.getTrue()?$$$cl15.String("nonempty is broken",18):null));
    function getT4(){
        return $t4;
    }
    assert(getT4().equals($$$cl15.String("works",5)),$$$cl15.String("nonempty 2",10));
}

//MethodDefinition sequences at sequences.ceylon (99:0-327:0)
function sequences(){
    
    //AttributeDeclaration builder at sequences.ceylon (100:4-100:45)
    var $builder=$$$cl15.SequenceBuilder();
    function getBuilder(){
        return $builder;
    }
    
    //AttributeDeclaration empty at sequences.ceylon (101:4-101:34)
    var $empty=getBuilder().getSequence();
    function getEmpty(){
        return $empty;
    }
    assert(getEmpty().getSize().equals($$$cl15.Integer(0)),$$$cl15.String("empty sequence",14));
    assert($$$cl15.nonempty(getEmpty()).equals($$$cl15.getFalse()),$$$cl15.String("empty sequence",14));
    if(getEmpty().getEmpty()===$$$cl15.getFalse()){
        fail($$$cl15.String("empty sequence",14));
    }
    
    assert($$$cl15.nonempty(getEmpty().span($$$cl15.Integer(1),$$$cl15.Integer(2))).equals($$$cl15.getFalse()),$$$cl15.String("empty.span(1,2)",15));
    assert($$$cl15.nonempty(getEmpty().span($$$cl15.Integer(1),$$$cl15.getNull())).equals($$$cl15.getFalse()),$$$cl15.String("empty.span(1,null)",18));
    assert($$$cl15.nonempty(getEmpty().segment($$$cl15.Integer(1),$$$cl15.Integer(2))).equals($$$cl15.getFalse()),$$$cl15.String("empty sequence segment",22));
    assert(getEmpty().getString().equals($$$cl15.String("{}",2)),$$$cl15.String("empty.string",12));
    getBuilder().append($$$cl15.String("hello",5));
    getBuilder().append($$$cl15.String("world",5));
    
    //AttributeDeclaration result at sequences.ceylon (114:4-114:35)
    var $result=getBuilder().getSequence();
    function getResult(){
        return $result;
    }
    assert(getResult().getSize().equals($$$cl15.Integer(2)),$$$cl15.String("sequence size",13));
    assert($$$cl15.nonempty(getResult()),$$$cl15.String("nonempty sequence",17));
    if(getResult().getEmpty()===$$$cl15.getFalse()){
        assert(getResult().getLastIndex().equals($$$cl15.Integer(1)),$$$cl15.String("sequence last index",19));
    }
    else {
        fail($$$cl15.String("sequence nonempty",17));
    }
    
    var $cond$;
    if(($cond$=getResult().getFirst())!==null){
        var $first=$cond$;
        function getFirst(){return $first}
        assert(getFirst().equals($$$cl15.String("hello",5)),$$$cl15.String("sequence first",14));
    }
    else {
        fail($$$cl15.String("sequence first",14));
    }
    
    assert(getResult().getString().equals($$$cl15.String("{ hello, world }",16)),$$$cl15.String("sequence.string",15));
    assert(getResult().span($$$cl15.Integer(1),$$$cl15.Integer(1)).getString().equals($$$cl15.String("{ world }",9)),$$$cl15.String("sequence.span(1,1).string",25));
    assert(getResult().span($$$cl15.Integer(1),$$$cl15.getNull()).getString().equals($$$cl15.String("{ world }",9)),$$$cl15.String("sequence.span(1,null).string",28));
    assert(getResult().span($$$cl15.Integer(0),$$$cl15.Integer(3)).getString().equals($$$cl15.String("{ hello, world }",16)),$$$cl15.String("sequence.span(0,3).string",25));
    assert(getResult().span($$$cl15.Integer(1),$$$cl15.Integer(0)).getString().equals($$$cl15.String("{ world, hello }",16)),$$$cl15.String("sequence reverse span.string",28));
    assert($$$cl15.nonempty(getResult().span($$$cl15.Integer(1),$$$cl15.Integer(1))),$$$cl15.String("nonempty sequence.span(1,1)",27));
    assert($$$cl15.nonempty(getResult().span($$$cl15.Integer(0),$$$cl15.Integer(0))),$$$cl15.String("nonempty sequence.span(0,0)",27));
    assert(getResult().segment($$$cl15.Integer(1),$$$cl15.Integer(1)).getString().equals($$$cl15.String("{ world }",9)),$$$cl15.String("sequence.segment(1,1).string",28));
    assert(getResult().segment($$$cl15.Integer(0),$$$cl15.Integer(3)).getString().equals($$$cl15.String("{ hello, world }",16)),$$$cl15.String("sequence.segment(0,3).string",28));
    assert($$$cl15.nonempty(getResult().segment($$$cl15.Integer(1),$$$cl15.Integer(1))),$$$cl15.String("nonempty sequence.segment(1,1)",30));
    assert($$$cl15.nonempty(getResult().segment($$$cl15.Integer(0),$$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty sequence.segment(0,0)",31));
    assert($$$cl15.nonempty(getResult().segment($$$cl15.Integer(1),$$$cl15.Integer(1).getNegativeValue())).equals($$$cl15.getFalse()),$$$cl15.String("!nonempty sequence.segment(1,-1)",32));
    var $cond$;
    if(($cond$=getResult().item($$$cl15.Integer(0)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        assert(getStr().equals($$$cl15.String("hello",5)),$$$cl15.String("sequence item",13));
    }
    else {
        fail($$$cl15.String("sequence item",13));
    }
    
    var $cond$;
    if(($cond$=getResult().item($$$cl15.Integer(1)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        assert(getStr().equals($$$cl15.String("world",5)),$$$cl15.String("sequence item",13));
    }
    else {
        fail($$$cl15.String("sequence item",13));
    }
    
    var $cond$;
    if(($cond$=getResult().item($$$cl15.Integer(2)))!==null){
        var $str=$cond$;
        function getStr(){return $str}
        fail($$$cl15.String("sequence item",13));
    }
    
    assert(getResult().getKeys().contains($$$cl15.Integer(0)),$$$cl15.String("sequence keys",13));
    assert(getResult().getKeys().contains($$$cl15.Integer(1)),$$$cl15.String("sequence keys",13));
    assert(getResult().getKeys().contains($$$cl15.Integer(2)).equals($$$cl15.getFalse()),$$$cl15.String("sequence keys",13));
    assert(((getResult().defines($$$cl15.Integer(0))===$$$cl15.getTrue()?getResult().defines($$$cl15.Integer(1)):$$$cl15.getFalse())===$$$cl15.getTrue()?getResult().defines($$$cl15.Integer(2)).equals($$$cl15.getFalse()):$$$cl15.getFalse()),$$$cl15.String("sequence defines",16));
    assert(getResult().definesEvery($$$cl15.ArraySequence([$$$cl15.Integer(0),$$$cl15.Integer(1)])),$$$cl15.String("sequence definesEvery",21));
    assert(getResult().definesEvery($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)])).equals($$$cl15.getFalse()),$$$cl15.String("sequence definesEvery",21));
    assert(getResult().definesAny($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)])),$$$cl15.String("sequence definesAny",19));
    assert(getResult().definesAny($$$cl15.ArraySequence([$$$cl15.Integer(2),$$$cl15.Integer(3)])).equals($$$cl15.getFalse()),$$$cl15.String("sequence definesAny",19));
    assert(getResult().items($$$cl15.ArraySequence([$$$cl15.Integer(0),$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3)])).getString().equals($$$cl15.String("{ hello, world, null, null }",28)),$$$cl15.String("sequence.items 1",16));
    assert(getResult().items($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(0)])).getString().equals($$$cl15.String("{ world, hello }",16)),$$$cl15.String("sequence.items 2",16));
    assert(getResult().items($$$cl15.ArraySequence([$$$cl15.Integer(5),$$$cl15.Integer(6),$$$cl15.Integer(7)])).getString().equals($$$cl15.String("{ null, null, null }",20)),$$$cl15.String("sequence.items 3",16));
    if(getResult().getEmpty()===$$$cl15.getFalse()){
        
        //AttributeDeclaration rest at sequences.ceylon (182:8-182:32)
        var $rest=getResult().getRest();
        function getRest(){
            return $rest;
        }
        assert(getRest().getSize().equals($$$cl15.Integer(1)),$$$cl15.String("rest size",9));
        assert(getRest().getKeys().contains($$$cl15.Integer(0)),$$$cl15.String("rest keys",9));
        assert(getRest().getKeys().contains($$$cl15.Integer(1)).equals($$$cl15.getFalse()),$$$cl15.String("rest keys",9));
        var $cond$;
        if(($cond$=getRest().item($$$cl15.Integer(0)))!==null){
            var $str=$cond$;
            function getStr(){return $str}
            assert(getStr().equals($$$cl15.String("world",5)),$$$cl15.String("rest item",9));
        }
        else {
            fail($$$cl15.String("rest item",9));
        }
        
        var $cond$;
        if(($cond$=getRest().item($$$cl15.Integer(1)))!==null){
            var $str=$cond$;
            function getStr(){return $str}
            fail($$$cl15.String("rest item",9));
        }
        
        assert($$$cl15.nonempty(getRest()),$$$cl15.String("empty rest",10));
        if(getRest().getEmpty()===$$$cl15.getFalse()){
            assert(getRest().getFirst().equals($$$cl15.String("world",5)),$$$cl15.String("rest first",10));
            var $cond$;
            if(($cond$=getRest().getRest()).getEmpty()===$$$cl15.getFalse()){
                var $rr=$cond$;
                function getRr(){return $rr}
                fail($$$cl15.String("rest rest",9));
            }
            
            assert($$$cl15.nonempty(getRest().getRest()).equals($$$cl15.getFalse()),$$$cl15.String("empty rest",10));
        }
        else {
            fail($$$cl15.String("rest nonempty",13));
        }
        
    }
    
    if(getResult().getEmpty()===$$$cl15.getFalse()){
        
        //AttributeDeclaration appender at sequences.ceylon (209:8-209:49)
        var $appender=$$$cl15.SequenceAppender(getResult());
        function getAppender(){
            return $appender;
        }
        getAppender().append($$$cl15.String("goodbye",7));
        
        //AttributeDeclaration more at sequences.ceylon (211:8-211:38)
        var $more=getAppender().getSequence();
        function getMore(){
            return $more;
        }
        assert(getMore().getSize().equals($$$cl15.Integer(3)),$$$cl15.String("sequence size",13));
        assert(getMore().getFirst().equals($$$cl15.String("hello",5)),$$$cl15.String("sequence first",14));
        assert(getMore().getString().equals($$$cl15.String("{ hello, world, goodbye }",25)),$$$cl15.String("sequence.string",15));
        getAppender().appendAll();
        getAppender().appendAll($$$cl15.ArraySequence([$$$cl15.String("everyone",8),$$$cl15.String("good luck!",10)]));
        
        //AttributeDeclaration evenMore at sequences.ceylon (219:8-219:42)
        var $evenMore=getAppender().getSequence();
        function getEvenMore(){
            return $evenMore;
        }
        assert(getEvenMore().getSize().equals($$$cl15.Integer(5)),$$$cl15.String("sequence size",13));
        assert(getEvenMore().getString().equals($$$cl15.String("{ hello, world, goodbye, everyone, good luck! }",47)),$$$cl15.String("sequence.string",15));
    }
    
    
    //AttributeDeclaration seq at sequences.ceylon (224:4-224:30)
    var $seq=$$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3),$$$cl15.Integer(4)]);
    function getSeq(){
        return $seq;
    }
    assert(getSeq().getSize().equals($$$cl15.Integer(4)),$$$cl15.String("sequence size",13));
    assert(getSeq().getString().equals($$$cl15.String("{ 1, 2, 3, 4 }",14)),$$$cl15.String("sequence.string",15));
    assert(getSeq().getFirst().equals($$$cl15.Integer(1)),$$$cl15.String("sequence first",14));
    assert(getSeq().getRest().getString().equals($$$cl15.String("{ 2, 3, 4 }",11)),$$$cl15.String("sequence.rest.string",20));
    
    //AttributeDeclaration i at sequences.ceylon (229:4-229:23)
    var $i=$$$cl15.Integer(0);
    function getI(){
        return $i;
    }
    function setI(i){
        $i=i; return i;
    }
    (function(){
        var _iter = getSeq().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getS(){ return _item; }
            var $cond$;
            if(($cond$=getSeq().item(getI()))!==null){
                var $it=$cond$;
                function getIt(){return $it}
                assert(getIt().equals(getS()),$$$cl15.String("sequence iteration",18));
            }
            else {
                fail($$$cl15.String("sequence iteration",18));
            }
            
            setI(getI().plus($$$cl15.Integer(1)));
        }
    }());
    
    assert(getI().equals($$$cl15.Integer(4)),$$$cl15.String("sequence iteration",18));
    
    //AttributeDeclaration union at sequences.ceylon (241:4-241:49)
    var $union=$$$cl15.SequenceBuilder();
    function getUnion(){
        return $union;
    }
    getUnion().append($$$cl15.String("x",1));
    getUnion().append($$$cl15.Float(5.0));
    getUnion().appendAll($$$cl15.ArraySequence([$$$cl15.String("y",1),$$$cl15.Float(1.0).getNegativeValue()]));
    
    //AttributeDeclaration useq at sequences.ceylon (245:4-245:31)
    var $useq=getUnion().getSequence();
    function getUseq(){
        return $useq;
    }
    assert(getUseq().getSize().equals($$$cl15.Integer(4)),$$$cl15.String("union sequence builder",22));
    assert(getUseq().getString().equals($$$cl15.String("{ x, 5.0, y, -1.0 }",19)),$$$cl15.String("union sequence builder.string",29));
    
    //AttributeDeclaration s at sequences.ceylon (248:4-248:23)
    var $s=$$$cl15.Integer(0);
    function getS(){
        return $s;
    }
    function setS(s){
        $s=s; return s;
    }
    
    //AttributeDeclaration f at sequences.ceylon (249:4-249:23)
    var $f=$$$cl15.Integer(0);
    function getF(){
        return $f;
    }
    function setF(f){
        $f=f; return f;
    }
    (function(){
        var _iter = getUseq().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getE(){ return _item; }
            if($$$cl15.isOfType(getE(),'ceylon.language.String')===$$$cl15.getTrue()){
                setS(getS().plus($$$cl15.Integer(1)));
            }
            
            if($$$cl15.isOfType(getE(),'ceylon.language.Float')===$$$cl15.getTrue()){
                setF(getF().plus($$$cl15.Integer(1)));
            }
            
        }
    }());
    
    assert((getS().equals($$$cl15.Integer(2))===$$$cl15.getTrue()?getF().equals($$$cl15.Integer(2)):$$$cl15.getFalse()),$$$cl15.String("union sequence iteration",24));
    test_singleton();
    
    //AttributeDeclaration nulls at sequences.ceylon (262:4-262:50)
    var $nulls=$$$cl15.ArraySequence([$$$cl15.getNull(),$$$cl15.String("hello",5),$$$cl15.getNull(),$$$cl15.String("world",5)]);
    function getNulls(){
        return $nulls;
    }
    var $cond$;
    if(($cond$=getNulls().item($$$cl15.Integer(0)))!==null){
        var $n0=$cond$;
        function getN0(){return $n0}
        fail($$$cl15.String("sequence with nulls",19));
    }
    
    var $cond$;
    if(($cond$=getNulls().item($$$cl15.Integer(1)))!==null){}else {
        fail($$$cl15.String("sequence with nulls",19));
    }
    
    assert(getNulls().getString().equals($$$cl15.String("{ null, hello, null, world }",28)),$$$cl15.String("sequence with nulls.string",26));
    
    //AttributeDeclaration nonnull at sequences.ceylon (266:4-266:29)
    var $nonnull=$$$cl15.Integer(0);
    function getNonnull(){
        return $nonnull;
    }
    function setNonnull(nonnull){
        $nonnull=nonnull; return nonnull;
    }
    (function(){
        var _iter = getNulls().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getO(){ return _item; }
            if(getO()!==null){
                (function($){setNonnull($.getSuccessor());return $}(getNonnull()));
            }
            
        }
    }());
    
    assert(getNonnull().equals($$$cl15.Integer(2)),$$$cl15.String("iterate sequence with nulls",27));
    
    //AttributeDeclaration coalesced at sequences.ceylon (272:4-272:37)
    var $coalesced=$$$cl15.coalesce(getNulls());
    function getCoalesced(){
        return $coalesced;
    }
    assert(getCoalesced().getSize().equals($$$cl15.Integer(2)),$$$cl15.String("coalesce size",13));
    assert(getCoalesced().getString().equals($$$cl15.String("{ hello, world }",16)),$$$cl15.String("coalesce.string",15));
    assert(getCoalesced().getKeys().contains($$$cl15.Integer(0)),$$$cl15.String("coalesced keys",14));
    assert(getCoalesced().getKeys().contains($$$cl15.Integer(1)),$$$cl15.String("coalesced keys",14));
    assert(getCoalesced().getKeys().contains($$$cl15.Integer(2)).equals($$$cl15.getFalse()),$$$cl15.String("coalesced keys",14));
    assert(((getCoalesced().defines($$$cl15.Integer(0))===$$$cl15.getTrue()?getCoalesced().defines($$$cl15.Integer(1)):$$$cl15.getFalse())===$$$cl15.getTrue()?getCoalesced().defines($$$cl15.Integer(2)).equals($$$cl15.getFalse()):$$$cl15.getFalse()),$$$cl15.String("coalesce defines",16));
    assert($$$cl15.nonempty(getCoalesced()),$$$cl15.String("nonempty coalesced",18));
    
    //AttributeDeclaration entriesBuilder at sequences.ceylon (282:4-282:61)
    var $entriesBuilder=$$$cl15.SequenceBuilder();
    function getEntriesBuilder(){
        return $entriesBuilder;
    }
    getEntriesBuilder().append($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("hello",5)));
    getEntriesBuilder().append($$$cl15.Entry($$$cl15.Integer(2),$$$cl15.String("world",5)));
    
    //AttributeDeclaration entrySequence at sequences.ceylon (285:4-285:49)
    var $entrySequence=getEntriesBuilder().getSequence();
    function getEntrySequence(){
        return $entrySequence;
    }
    assert(getEntrySequence().getString().equals($$$cl15.String("{ 1->hello, 2->world }",22)),$$$cl15.String("entries sequence.string",23));
    
    //AttributeDeclaration cntr at sequences.ceylon (287:4-287:26)
    var $cntr=$$$cl15.Integer(0);
    function getCntr(){
        return $cntr;
    }
    function setCntr(cntr){
        $cntr=cntr; return cntr;
    }
    (function(){
        var _iter = getEntrySequence().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getNat(){ return _item.getKey(); }
            function getStr(){ return _item.getItem(); }
            (function($){setCntr($.getSuccessor());return $}(getCntr()));
            assert((getNat().equals($$$cl15.Integer(1))===$$$cl15.getTrue()?$$$cl15.getTrue():getNat().equals($$$cl15.Integer(2))),$$$cl15.String("entry key iteration",19));
            assert((getStr().equals($$$cl15.String("hello",5))===$$$cl15.getTrue()?$$$cl15.getTrue():getStr().equals($$$cl15.String("world",5))),$$$cl15.String("entry key iteration",19));
        }
    }());
    
    assert(getCntr().equals($$$cl15.Integer(2)),$$$cl15.String("entry iteration",15));
    (function(){
        var _iter = $$$cl15.ArraySequence([$$$cl15.Entry($$$cl15.String("Gavin",5),$$$cl15.Character(71)),$$$cl15.Entry($$$cl15.String("Tom",3),$$$cl15.Character(84))]).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getName(){ return _item.getKey(); }
            function getInitial(){ return _item.getItem(); }
            assert(getName().initial($$$cl15.Integer(1)).equals(getInitial().getString()),$$$cl15.String("entry iteration",15));
        }
    }());
    
    
    //AttributeDeclaration sequenceEntries at sequences.ceylon (299:4-299:53)
    var $sequenceEntries=$$$cl15.entries($$$cl15.ArraySequence([$$$cl15.String("X1",2),$$$cl15.String("X2",2),$$$cl15.String("X3",2)]));
    function getSequenceEntries(){
        return $sequenceEntries;
    }
    assert(getSequenceEntries().getSize().equals($$$cl15.Integer(3)),$$$cl15.String("entries size",12));
    assert($$$cl15.nonempty(getSequenceEntries()),$$$cl15.String("nonempty entries",16));
    if(getSequenceEntries().getEmpty()===$$$cl15.getFalse()){
        assert(getSequenceEntries().getFirst().equals($$$cl15.Entry($$$cl15.Integer(0),$$$cl15.String("X1",2))),$$$cl15.String("entries first",13));
    }
    else {
        fail($$$cl15.String("entries empty",13));
    }
    
    (function(){
        var _iter = getSequenceEntries().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getNat(){ return _item.getKey(); }
            function getStr(){ return _item.getItem(); }
            assert($$$cl15.String("X",1).plus(getNat().plus($$$cl15.Integer(1)).getString()).equals(getStr()),$$$cl15.String("entries iteration",17));
        }
    }());
    
    assert($$$cl15.append($$$cl15.ArraySequence([]),$$$cl15.String("foo",3)).getString().equals($$$cl15.String("{ foo }",7)),$$$cl15.String("append to empty.string",22));
    assert($$$cl15.prepend($$$cl15.ArraySequence([]),$$$cl15.String("foo",3)).getString().equals($$$cl15.String("{ foo }",7)),$$$cl15.String("prepend to empty.string",23));
    assert($$$cl15.append($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)]),$$$cl15.String("foo",3)).getString().equals($$$cl15.String("{ 1, 2, foo }",13)),$$$cl15.String("append.string",13));
    assert($$$cl15.prepend($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)]),$$$cl15.String("foo",3)).getString().equals($$$cl15.String("{ foo, 1, 2 }",13)),$$$cl15.String("prepend.string",14));
    assert($$$cl15.append($$$cl15.ArraySequence([]),$$$cl15.String("foo",3)).getSize().equals($$$cl15.Integer(1)),$$$cl15.String("append to empty.size",20));
    assert($$$cl15.prepend($$$cl15.ArraySequence([]),$$$cl15.String("foo",3)).getSize().equals($$$cl15.Integer(1)),$$$cl15.String("prepend to empty.size",21));
    assert($$$cl15.append($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)]),$$$cl15.String("foo",3)).getSize().equals($$$cl15.Integer(3)),$$$cl15.String("append.size",11));
    assert($$$cl15.prepend($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2)]),$$$cl15.String("foo",3)).getSize().equals($$$cl15.Integer(3)),$$$cl15.String("prepend.size",12));
    assert($$$cl15.append($$$cl15.ArraySequence([$$$cl15.String("one",3),$$$cl15.String("two",3),$$$cl15.String("three",5)]),$$$cl15.String("four",4)).getSize().equals($$$cl15.Integer(4)),$$$cl15.String("append",6));
    test_join();
    test_zip();
    test_exists_nonempty();
}
this.sequences=sequences;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition numbers at numbers.ceylon (1:0-247:0)
function numbers(){
    assert($$$cl15.Integer(1).equals($$$cl15.Integer(1)),$$$cl15.String("natural equals",14));
    assert($$$cl15.Integer(1).equals($$$cl15.Integer(2)).equals($$$cl15.getFalse()),$$$cl15.String("natural not equals",18));
    assert($$$cl15.Integer(1).getPositiveValue().equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("integer equals",14));
    assert($$$cl15.Integer(1).getPositiveValue().equals($$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.getFalse()),$$$cl15.String("integer not equals",18));
    assert($$$cl15.Float(1.0).equals($$$cl15.Float(1.0)),$$$cl15.String("float equals",12));
    assert($$$cl15.Float(1.0).equals($$$cl15.Float(2.0)).equals($$$cl15.getFalse()),$$$cl15.String("float not equals",16));
    assert($$$cl15.Integer(1).equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("natural equals integer",22));
    assert($$$cl15.Integer(1).equals($$$cl15.Float(1.0)),$$$cl15.String("natural equals float",20));
    assert($$$cl15.Integer(1).getPositiveValue().equals($$$cl15.Float(1.0)),$$$cl15.String("integer equals float",20));
    assert($$$cl15.Integer(1).getPositiveValue().equals($$$cl15.Integer(1)),$$$cl15.String("natural equals integer",22));
    assert($$$cl15.Float(1.0).equals($$$cl15.Integer(1)),$$$cl15.String("natural equals float",20));
    assert($$$cl15.Float(1.0).equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("integer equals float",20));
    assert($$$cl15.Integer(1).compare($$$cl15.Integer(2)).equals($$$cl15.getSmaller()),$$$cl15.String("natural comparison",18));
    assert($$$cl15.Integer(1).getNegativeValue().compare($$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.getSmaller()),$$$cl15.String("integer comparison",18));
    assert($$$cl15.Float(0.5).getNegativeValue().compare($$$cl15.Float(0.0)).equals($$$cl15.getSmaller()),$$$cl15.String("float comparison",16));
    assert($$$cl15.Integer(1).plus($$$cl15.Integer(1)).equals($$$cl15.Integer(2)),$$$cl15.String("natural addition",16));
    assert($$$cl15.Integer(1).minus($$$cl15.Integer(1)).equals($$$cl15.Integer(0).getPositiveValue()),$$$cl15.String("natural subtraction",19));
    assert($$$cl15.Integer(2).times($$$cl15.Integer(2)).equals($$$cl15.Integer(4)),$$$cl15.String("natural multiplication",22));
    assert($$$cl15.Integer(2).power($$$cl15.Integer(3)).equals($$$cl15.Integer(8)),$$$cl15.String("natural exponentiation",22));
    assert($$$cl15.Integer(1).getPositiveValue().plus($$$cl15.Integer(1).getNegativeValue()).equals($$$cl15.Integer(0).getPositiveValue()),$$$cl15.String("integer addition",16));
    assert($$$cl15.Integer(1).getPositiveValue().minus($$$cl15.Integer(1).getNegativeValue()).equals($$$cl15.Integer(2).getPositiveValue()),$$$cl15.String("integer subtraction",19));
    assert($$$cl15.Integer(2).getNegativeValue().times($$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.Integer(4).getNegativeValue()),$$$cl15.String("integer multiplication",22));
    assert($$$cl15.Integer(2).power($$$cl15.Integer(3).getPositiveValue()).getNegativeValue().equals($$$cl15.Integer(8).getNegativeValue()),$$$cl15.String("integer exponentiation",22));
    assert($$$cl15.Float(1.0).plus($$$cl15.Float(0.5)).equals($$$cl15.Float(1.5)),$$$cl15.String("float addition",14));
    assert($$$cl15.Float(1.5).minus($$$cl15.Float(0.5)).equals($$$cl15.Float(1.0)),$$$cl15.String("float subtraction",17));
    assert($$$cl15.Float(2.0).times($$$cl15.Float(2.0)).equals($$$cl15.Float(4.0)),$$$cl15.String("float multiplication",20));
    assert($$$cl15.Float(2.0).power($$$cl15.Float(3.0)).equals($$$cl15.Float(8.0)),$$$cl15.String("float exponentiation",20));
    assert($$$cl15.Integer(2).times($$$cl15.Float(2.5)).equals($$$cl15.Float(5.0)),$$$cl15.String("natural times float",19));
    assert($$$cl15.Float(2.5).times($$$cl15.Integer(3)).equals($$$cl15.Float(7.5)),$$$cl15.String("natural times float",19));
    assert($$$cl15.Integer(1).getNegativeValue().times($$$cl15.Integer(3)).equals($$$cl15.Integer(3).getNegativeValue()),$$$cl15.String("natural times integer",21));
    assert($$$cl15.Integer(2).times($$$cl15.Integer(3).getNegativeValue()).equals($$$cl15.Integer(6).getNegativeValue()),$$$cl15.String("natural times integer",21));
    assert($$$cl15.Integer(1).getNegativeValue().times($$$cl15.Float(1.5)).equals($$$cl15.Float(1.5).getNegativeValue()),$$$cl15.String("integer times float",19));
    assert($$$cl15.Float(1.5).getNegativeValue().times($$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.Float(3.0).getNegativeValue()),$$$cl15.String("integer times float",19));
    assert($$$cl15.isOfType($$$cl15.Integer(1).plus($$$cl15.Integer(1)),'ceylon.language.Integer'),$$$cl15.String("natural addition",16));
    assert($$$cl15.isOfType($$$cl15.Integer(1).minus($$$cl15.Integer(2)),'ceylon.language.Integer'),$$$cl15.String("natural subtraction",19));
    assert($$$cl15.isOfType($$$cl15.Integer(1).getPositiveValue().plus($$$cl15.Integer(1)),'ceylon.language.Integer'),$$$cl15.String("integer addition",16));
    assert($$$cl15.isOfType($$$cl15.Integer(1).getPositiveValue().minus($$$cl15.Integer(2)),'ceylon.language.Integer'),$$$cl15.String("integer subtraction",19));
    assert($$$cl15.Integer(1).getNegativeValue().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("natural negative",16));
    assert($$$cl15.Integer(1).getNegativeValue().getNegativeValue().equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("integer negative",16));
    assert($$$cl15.Float(1.0).getNegativeValue().equals($$$cl15.Float(1.0).getNegativeValue()),$$$cl15.String("float negative",14));
    assert($$$cl15.Integer(1).getPositiveValue().equals($$$cl15.Integer(1)),$$$cl15.String("natural positive",16));
    assert($$$cl15.Integer(1).getPositiveValue().getNegativeValue().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("integer positive",16));
    assert($$$cl15.Float(1.0).getPositiveValue().equals($$$cl15.Float(1.0)),$$$cl15.String("float positive",14));
    assert($$$cl15.Integer(12).getString().equals($$$cl15.String("12",2)),$$$cl15.String("natural string 12",17));
    assert($$$cl15.Integer(12).getNegativeValue().getString().equals($$$cl15.String("-12",3)),$$$cl15.String("integer string -12",18));
    assert($$$cl15.Float(5.5).getNegativeValue().getString().equals($$$cl15.String("-5.5",4)),$$$cl15.String("float string -5.5",17));
    assert($$$cl15.Float(1.0).getString().equals($$$cl15.String("1.0",3)),$$$cl15.String("float string 1.0",16));
    assert($$$cl15.Integer(1).getUnit(),$$$cl15.String("natural unit",12));
    assert($$$cl15.Integer(2).getUnit().equals($$$cl15.getFalse()),$$$cl15.String("natural unit",12));
    assert($$$cl15.Integer(0).getZero(),$$$cl15.String("natural zero",12));
    assert($$$cl15.Integer(1).getZero().equals($$$cl15.getFalse()),$$$cl15.String("natural zero",12));
    assert($$$cl15.Integer(2).getSuccessor().equals($$$cl15.Integer(3)),$$$cl15.String("natural successor",17));
    assert($$$cl15.Integer(2).getPredecessor().equals($$$cl15.Integer(1)),$$$cl15.String("natural predecessor",19));
    assert($$$cl15.Integer(1).getPositiveValue().getUnit(),$$$cl15.String("integer unit",12));
    assert($$$cl15.Integer(1).getNegativeValue().getUnit().equals($$$cl15.getFalse()),$$$cl15.String("integer unit",12));
    assert($$$cl15.Integer(0).getPositiveValue().getZero(),$$$cl15.String("integer zero",12));
    assert($$$cl15.Integer(1).getPositiveValue().getZero().equals($$$cl15.getFalse()),$$$cl15.String("integer zero",12));
    assert($$$cl15.Integer(2).getNegativeValue().getSuccessor().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("integer successor",17));
    assert($$$cl15.Integer(2).getNegativeValue().getPredecessor().equals($$$cl15.Integer(3).getNegativeValue()),$$$cl15.String("integer predecessor",19));
    assert($$$cl15.Integer(2).getFractionalPart().equals($$$cl15.Integer(0)),$$$cl15.String("natural fractional",18));
    assert($$$cl15.Integer(1).getNegativeValue().getFractionalPart().equals($$$cl15.Integer(0)),$$$cl15.String("integer fractional",18));
    assert($$$cl15.Float(1.5).getFractionalPart().equals($$$cl15.Float(0.5)),$$$cl15.String("float fractional",16));
    assert($$$cl15.Integer(2).getWholePart().equals($$$cl15.Integer(2)),$$$cl15.String("natural fractional",18));
    assert($$$cl15.Integer(1).getNegativeValue().getWholePart().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("integer fractional",18));
    assert($$$cl15.Float(1.5).getWholePart().equals($$$cl15.Float(1.0)),$$$cl15.String("float fractional",16));
    assert($$$cl15.Integer(2).getPositiveValue().getSign().equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("integer sign",12));
    assert($$$cl15.Integer(3).getNegativeValue().getSign().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("integer sign",12));
    assert($$$cl15.Float(2.0).getSign().equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("integer sign",12));
    assert($$$cl15.Float(3.0).getNegativeValue().getSign().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("integer sign",12));
    
    //MethodDefinition add at numbers.ceylon (78:4-80:4)
    function add(x,y){
        return x.plus(y);
    }
    
    //MethodDefinition exp at numbers.ceylon (81:4-83:4)
    function exp(x,y){
        return x.power(y);
    }
    
    //MethodDefinition addIntegers at numbers.ceylon (85:4-87:4)
    function addIntegers(x,y){
        return x.plus(y);
    }
    
    //MethodDefinition addFloats at numbers.ceylon (88:4-90:4)
    function addFloats(x,y){
        return x.plus(y);
    }
    
    //MethodDefinition multiplyIntegerByFloat at numbers.ceylon (91:4-93:4)
    function multiplyIntegerByFloat(x,y){
        return x.times(y);
    }
    
    //MethodDefinition multiplyFloatByInteger at numbers.ceylon (94:4-96:4)
    function multiplyFloatByInteger(x,y){
        return x.times(y);
    }
    
    //MethodDefinition multiplyIntegerByInteger at numbers.ceylon (97:4-99:4)
    function multiplyIntegerByInteger(x,y){
        return x.times(y);
    }
    assert(add($$$cl15.Integer(1),$$$cl15.Integer(2)).equals($$$cl15.Integer(3)),$$$cl15.String("add(1,2)==3",11));
    assert(add($$$cl15.Integer(1).getNegativeValue(),$$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("add(-1,+2)==+1",14));
    assert(add($$$cl15.Float(1.5),$$$cl15.Float(2.5).getNegativeValue()).equals($$$cl15.Float(1.0).getNegativeValue()),$$$cl15.String("add(1.5,-2.5)==-1.0",19));
    assert(exp($$$cl15.Integer(1),$$$cl15.Integer(2)).equals($$$cl15.Integer(1)),$$$cl15.String("exp(1,2)==1",11));
    assert(exp($$$cl15.Integer(1).getNegativeValue(),$$$cl15.Integer(2).getPositiveValue()).equals($$$cl15.Integer(1).getPositiveValue()),$$$cl15.String("exp(-1,+2)==+1",14));
    assert(exp($$$cl15.Float(2.0),$$$cl15.Float(2.0)).equals($$$cl15.Float(4.0)),$$$cl15.String("exp(2.0,2.0)==4.0",17));
    assert(addIntegers($$$cl15.Integer(2),$$$cl15.Integer(4)).equals($$$cl15.Integer(6)),$$$cl15.String("addIntegers(2, 4)==6",20));
    assert(addIntegers($$$cl15.Integer(2).getNegativeValue(),$$$cl15.Integer(4).getNegativeValue()).equals($$$cl15.Integer(6).getNegativeValue()),$$$cl15.String("addIntegers(-2, -4)==-6",23));
    assert(addFloats($$$cl15.Float(1.0).getNegativeValue(),$$$cl15.Float(1.0)).equals($$$cl15.Float(0.0)),$$$cl15.String("addFloats(-1.0, 1.0)==0.0",25));
    assert(multiplyIntegerByFloat($$$cl15.Integer(3),$$$cl15.Float(1.5)).equals($$$cl15.Float(4.5)),$$$cl15.String("multiplyIntegerByFloat(3, 1.5)==4.5",35));
    assert(multiplyFloatByInteger($$$cl15.Float(1.5),$$$cl15.Integer(1).getNegativeValue()).equals($$$cl15.Float(1.5).getNegativeValue()),$$$cl15.String("multiplyFloatByInteger(1.5, -1)==-1.5",37));
    assert(multiplyIntegerByInteger($$$cl15.Integer(1),$$$cl15.Integer(1).getNegativeValue()).equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("multiplyIntegerByInteger(1, -1)==-1",35));
    assert($$$cl15.Integer(1).getHash().equals($$$cl15.Integer(3).minus($$$cl15.Integer(1)).divided($$$cl15.Integer(2).getHash())),$$$cl15.String("natural hash",12));
    assert($$$cl15.Integer(0).getPositiveValue().getHash().equals($$$cl15.Integer(1).getNegativeValue().plus($$$cl15.Integer(1).getPositiveValue()).times($$$cl15.Integer(100).getHash().getPositiveValue())),$$$cl15.String("integer hash",12));
    assert($$$cl15.Float(2.2).times($$$cl15.Float(2.2)).times($$$cl15.Float(2.2)).getHash().equals($$$cl15.Float(2.2).power($$$cl15.Float(3.0)).getHash()),$$$cl15.String("float hash",10));
    assert($$$cl15.Float(1.6).getInteger().equals($$$cl15.Integer(2)),$$$cl15.String("float natural",13));
    assert($$$cl15.Float(1.1).getInteger().equals($$$cl15.Integer(1)),$$$cl15.String("float natural",13));
    assert($$$cl15.Float(1.6).getNegativeValue().getInteger().equals($$$cl15.Integer(2).getNegativeValue()),$$$cl15.String("float integer",13));
    assert($$$cl15.Float(1.1).getNegativeValue().getInteger().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("float integer",13));
    assert($$$cl15.Integer(2).getFloat().equals($$$cl15.Float(2.0)),$$$cl15.String("natural float",13));
    assert($$$cl15.Integer(3).getNegativeValue().getFloat().equals($$$cl15.Float(3.0).getNegativeValue()),$$$cl15.String("integer float",13));
    assert($$$cl15.Integer(4).getInteger().equals($$$cl15.Integer(4).getPositiveValue()),$$$cl15.String("natural integer",15));
    assert((function (){var $that=$$$cl15.Integer(3);return (function (){var $other=$$$cl15.Integer(2);return $$$cl15.Integer(1).plus($other)}()).equals($that)}()),$$$cl15.String("natural named args",18));
    
    //AttributeDeclaration i at numbers.ceylon (131:4-131:23)
    var $i=$$$cl15.Integer(0);
    function getI(){
        return $i;
    }
    function setI(i){
        $i=i; return i;
    }
    (function(){
        var _iter = $$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(10)).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getX(){ return _item; }
            setI(getI().plus($$$cl15.Integer(1)));
            assert(((getX().compare($$$cl15.Integer(1))!==$$$cl15.getSmaller()?$$$cl15.getTrue():$$$cl15.getFalse())===$$$cl15.getTrue()?(getX().compare($$$cl15.Integer(10))!==$$$cl15.getLarger()?$$$cl15.getTrue():$$$cl15.getFalse()):$$$cl15.getFalse()),$$$cl15.String("natural range",13));
        }
    }());
    
    assert(getI().equals($$$cl15.Integer(10)),$$$cl15.String("natural range",13));
    setI($$$cl15.Integer(0));
    (function(){
        var _iter = $$$cl15.Range($$$cl15.Integer(5).getNegativeValue(),$$$cl15.Integer(5).getPositiveValue()).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getX(){ return _item; }
            setI(getI().plus($$$cl15.Integer(1)));
            assert(((getX().compare($$$cl15.Integer(5).getNegativeValue())!==$$$cl15.getSmaller()?$$$cl15.getTrue():$$$cl15.getFalse())===$$$cl15.getTrue()?(getX().compare($$$cl15.Integer(5).getPositiveValue())!==$$$cl15.getLarger()?$$$cl15.getTrue():$$$cl15.getFalse()):$$$cl15.getFalse()),$$$cl15.String("integer range",13));
        }
    }());
    
    assert(getI().equals($$$cl15.Integer(11)),$$$cl15.String("integer range",13));
    assert($$$cl15.min($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(5)])).equals($$$cl15.Integer(1)),$$$cl15.String("min naturals",12));
    assert($$$cl15.min($$$cl15.ArraySequence([$$$cl15.Integer(1).getNegativeValue(),$$$cl15.Integer(5).getPositiveValue()])).equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("min integers",12));
    assert($$$cl15.min($$$cl15.ArraySequence([$$$cl15.Float(1.5).getNegativeValue(),$$$cl15.Float(5.2)])).equals($$$cl15.Float(1.5).getNegativeValue()),$$$cl15.String("min floats",10));
    assert($$$cl15.max($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(5)])).equals($$$cl15.Integer(5)),$$$cl15.String("max naturals",12));
    assert($$$cl15.max($$$cl15.ArraySequence([$$$cl15.Integer(1).getNegativeValue(),$$$cl15.Integer(5).getPositiveValue()])).equals($$$cl15.Integer(5).getPositiveValue()),$$$cl15.String("max integers",12));
    assert($$$cl15.max($$$cl15.ArraySequence([$$$cl15.Float(1.5).getNegativeValue(),$$$cl15.Float(5.2)])).equals($$$cl15.Float(5.2)),$$$cl15.String("max floats",10));
    assert($$$cl15.max($$$cl15.ArraySequence([$$$cl15.Integer(2),$$$cl15.Integer(4),$$$cl15.Integer(6),$$$cl15.Integer(8),$$$cl15.Integer(7),$$$cl15.Integer(250),$$$cl15.Integer(5),$$$cl15.Integer(3),$$$cl15.Integer(1)])).equals($$$cl15.Integer(250)),$$$cl15.String("max",3));
    assert($$$cl15.min($$$cl15.ArraySequence([$$$cl15.Integer(200),$$$cl15.Integer(400),$$$cl15.Integer(600),$$$cl15.Integer(800),$$$cl15.Integer(700),$$$cl15.Integer(500),$$$cl15.Integer(300),$$$cl15.Integer(150)])).equals($$$cl15.Integer(150)),$$$cl15.String("min",3));
    assert($$$cl15.smallest($$$cl15.Integer(1),$$$cl15.Integer(2)).equals($$$cl15.Integer(1)),$$$cl15.String("smallest naturals",17));
    assert($$$cl15.smallest($$$cl15.Integer(100).getNegativeValue(),$$$cl15.Integer(100)).equals($$$cl15.Integer(100).getNegativeValue()),$$$cl15.String("smallest integers",17));
    assert($$$cl15.smallest($$$cl15.Float(1.5).getNegativeValue(),$$$cl15.Float(5.2)).equals($$$cl15.Float(1.5).getNegativeValue()),$$$cl15.String("smallest floats",15));
    assert($$$cl15.largest($$$cl15.Integer(1),$$$cl15.Integer(2)).equals($$$cl15.Integer(2)),$$$cl15.String("largest naturals",16));
    assert($$$cl15.largest($$$cl15.Integer(100).getNegativeValue(),$$$cl15.Integer(100)).equals($$$cl15.Integer(100)),$$$cl15.String("largest integers",16));
    assert($$$cl15.largest($$$cl15.Float(1.5).getNegativeValue(),$$$cl15.Float(5.2)).equals($$$cl15.Float(5.2)),$$$cl15.String("largest floats",14));
    
    //AttributeDeclaration count at numbers.ceylon (163:4-163:29)
    var $count=$$$cl15.Integer(0);
    function getCount(){
        return $count;
    }
    function setCount(count){
        $count=count; return count;
    }
    (function($){setCount($.getSuccessor());return $}(getCount()));
    (setCount(getCount().getSuccessor()),getCount());
    (setCount(getCount().plus($$$cl15.Integer(2))),getCount());
    (setCount(getCount().times($$$cl15.Integer(3))),getCount());
    assert(getCount().equals($$$cl15.Integer(12)),$$$cl15.String("natural increment",17));
    assert((setCount(getCount().getPredecessor()),getCount()).equals($$$cl15.Integer(11)),$$$cl15.String("natural decrement",17));
    assert((function($){setCount($.getPredecessor());return $}(getCount())).equals($$$cl15.Integer(11)),$$$cl15.String("natural decrement",17));
    
    //AttributeDeclaration intcount at numbers.ceylon (172:4-172:33)
    var $intcount=$$$cl15.Integer(0).getPositiveValue();
    function getIntcount(){
        return $intcount;
    }
    function setIntcount(intcount){
        $intcount=intcount; return intcount;
    }
    (function($){setIntcount($.getSuccessor());return $}(getIntcount()));
    (setIntcount(getIntcount().getSuccessor()),getIntcount());
    (setIntcount(getIntcount().plus($$$cl15.Integer(2))),getIntcount());
    (setIntcount(getIntcount().times($$$cl15.Integer(3).getNegativeValue())),getIntcount());
    (function($){setIntcount($.getPredecessor());return $}(getIntcount()));
    assert(getIntcount().equals($$$cl15.Integer(13).getNegativeValue()),$$$cl15.String("integer increment",17));
    assert((setIntcount(getIntcount().getPredecessor()),getIntcount()).equals($$$cl15.Integer(14).getNegativeValue()),$$$cl15.String("integer decrement",17));
    assert((function($){setIntcount($.getPredecessor());return $}(getIntcount())).equals($$$cl15.Integer(14).getNegativeValue()),$$$cl15.String("integer decrement",17));
    
    //AttributeDeclaration floatcount at numbers.ceylon (182:4-182:36)
    var $floatcount=$$$cl15.Float(0.0);
    function getFloatcount(){
        return $floatcount;
    }
    function setFloatcount(floatcount){
        $floatcount=floatcount; return floatcount;
    }
    (setFloatcount(getFloatcount().plus($$$cl15.Float(2.0))),getFloatcount());
    (setFloatcount(getFloatcount().times($$$cl15.Float(3.0))),getFloatcount());
    (setFloatcount(getFloatcount().divided($$$cl15.Float(1.5))),getFloatcount());
    assert(getFloatcount().equals($$$cl15.Float(4.0)),$$$cl15.String("float increment",15));
    assert((setFloatcount(getFloatcount().times($$$cl15.Float(2.5))),getFloatcount()).equals($$$cl15.Float(10.0)),$$$cl15.String("float scale",11));
    assert((setFloatcount(getFloatcount().divided($$$cl15.Float(2.0))),getFloatcount()).equals($$$cl15.Float(5.0)),$$$cl15.String("float scale",11));
    assert(setFloatcount($$$cl15.Float(2.0).getNegativeValue()).equals($$$cl15.Float(2.0).getNegativeValue()),$$$cl15.String("float assign",12));
    
    //AttributeDeclaration vi at numbers.ceylon (191:4-191:23)
    var $vi;
    function getVi(){
        return $vi;
    }
    function setVi(vi){
        $vi=vi; return vi;
    }
    
    //AttributeDeclaration vj at numbers.ceylon (192:4-192:23)
    var $vj;
    function getVj(){
        return $vj;
    }
    function setVj(vj){
        $vj=vj; return vj;
    }
    setVi(setVj($$$cl15.Integer(2)));
    assert((getVi().equals($$$cl15.Integer(2))===$$$cl15.getTrue()?getVj().equals($$$cl15.Integer(2)):$$$cl15.getFalse()),$$$cl15.String("multi assign",12));
    (setVi(getVi().plus($$$cl15.Integer(1))),getVi());
    (setVj(getVj().times($$$cl15.Integer(2))),getVj());
    
    //ClassDefinition Inner at numbers.ceylon (198:4-201:4)
    function $Inner(){}
    $$$cl15.initType($Inner,'numbers.Inner',$$$cl15.$IdentifiableObject);
    $$$cl15.inheritProto($Inner,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
    
    //AttributeDeclaration vi at numbers.ceylon (199:8-199:37)
    $Inner.prototype.getVi=function getVi(){
        return this.vi;
    }
    $Inner.prototype.setVi=function setVi(vi){
        this.vi=vi; return vi;
    }
    
    //AttributeDeclaration vj at numbers.ceylon (200:8-200:37)
    $Inner.prototype.getVj=function getVj(){
        return this.vj;
    }
    $Inner.prototype.setVj=function setVj(vj){
        this.vj=vj; return vj;
    }
    function Inner($$inner){
        if ($$inner===undefined)$$inner=new $Inner;
        
        //AttributeDeclaration vi at numbers.ceylon (199:8-199:37)
        $$inner.vi=$$$cl15.Integer(0);
        
        //AttributeDeclaration vj at numbers.ceylon (200:8-200:37)
        $$inner.vj=$$$cl15.Integer(0);
        return $$inner;
    }
    
    //AttributeDeclaration inner at numbers.ceylon (202:4-202:25)
    var $inner=Inner();
    function getInner(){
        return $inner;
    }
    setVi(setVj($$$cl15.Integer(2)));
    (function($1,$2){var $=$1.getVi().plus($2);$1.setVi($);return $}(getInner(),$$$cl15.Integer(1)));
    (function($1,$2){var $=$1.getVj().times($2);$1.setVj($);return $}(getInner(),$$$cl15.Integer(2)));
    assert($$$cl15.Integer(1000).equals($$$cl15.Integer(1000)),$$$cl15.String("integer literal",15));
    assert($$$cl15.Integer(1000000).equals($$$cl15.Integer(1000000)),$$$cl15.String("integer literal",15));
    assert($$$cl15.Integer(1000000000).equals($$$cl15.Integer(1000000000)),$$$cl15.String("integer literal",15));
    assert($$$cl15.Integer(1000000000000).equals($$$cl15.Integer(1000000000000)),$$$cl15.String("integer literal",15));
    assert($$$cl15.Integer(1000000000000000).equals($$$cl15.Integer(1000000000000000)),$$$cl15.String("integer literal",15));
    assert(($$$cl15.Float(1000.0).equals($$$cl15.Float(1.0e+3))===$$$cl15.getTrue()?$$$cl15.Float(1.0e+3).equals($$$cl15.Float(1.0e+3)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(1000000.0).equals($$$cl15.Float(1.0e+6))===$$$cl15.getTrue()?$$$cl15.Float(1.0e+6).equals($$$cl15.Float(1.0e6)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(1000000000.0).equals($$$cl15.Float(1.0e+9))===$$$cl15.getTrue()?$$$cl15.Float(1.0e+9).equals($$$cl15.Float(1.0e+9)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(1000000000000.0).equals($$$cl15.Float(1.0e+12))===$$$cl15.getTrue()?$$$cl15.Float(1.0e+12).equals($$$cl15.Float(1.0e+12)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(1000000000000000.0).equals($$$cl15.Float(1.0e+15))===$$$cl15.getTrue()?$$$cl15.Float(1.0e+15).equals($$$cl15.Float(1.0e+15)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(0.001).equals($$$cl15.Float(1.0e-3))===$$$cl15.getTrue()?$$$cl15.Float(1.0e-3).equals($$$cl15.Float(1.0e-3)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(0.000001).equals($$$cl15.Float(1.0e-6))===$$$cl15.getTrue()?$$$cl15.Float(1.0e-6).equals($$$cl15.Float(1.0e-6)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(0.000000001).equals($$$cl15.Float(1.0e-9))===$$$cl15.getTrue()?$$$cl15.Float(1.0e-9).equals($$$cl15.Float(1.0e-9)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(0.000000000001).equals($$$cl15.Float(1.0e-12))===$$$cl15.getTrue()?$$$cl15.Float(1.0e-12).equals($$$cl15.Float(1.0e-12)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(($$$cl15.Float(0.000000000000001).equals($$$cl15.Float(1.0e-15))===$$$cl15.getTrue()?$$$cl15.Float(1.0e-15).equals($$$cl15.Float(1.0e-15)):$$$cl15.getFalse()),$$$cl15.String("float literal",13));
    assert(function($){return $!==null?$:$$$cl15.Integer(0)}($$$cl15.parseInteger($$$cl15.String("-123",4))).equals($$$cl15.Integer(123).getNegativeValue()),$$$cl15.String("parse integer",13));
    assert(function($){return $!==null?$:$$$cl15.Float(0.0)}($$$cl15.parseFloat($$$cl15.String("12.34e3",7))).equals($$$cl15.Float(12.34e3)),$$$cl15.String("parse float",11));
    assert($$$cl15.Float(1.0).divided($$$cl15.Float(0.0)).equals($$$cl15.getInfinity()),$$$cl15.String("infinity == infinity",20));
    assert($$$cl15.Float(1.0).equals($$$cl15.getInfinity()).equals($$$cl15.getFalse()),$$$cl15.String("1 != infinity",13));
    assert($$$cl15.Float(1.0).getNegativeValue().divided($$$cl15.Float(0.0)).equals($$$cl15.getInfinity().getNegativeValue()),$$$cl15.String("-infinity == -infinity",22));
    assert($$$cl15.Float(1.0).equals($$$cl15.getInfinity().getNegativeValue()).equals($$$cl15.getFalse()),$$$cl15.String("1 != -infinity",14));
    assert($$$cl15.Float(0.0).divided($$$cl15.Float(0.0)).getUndefined(),$$$cl15.String("NaN undefined",13));
    assert($$$cl15.Float(1.0).getUndefined().equals($$$cl15.getFalse()),$$$cl15.String("1 not undefined",15));
    assert($$$cl15.getInfinity().getUndefined().equals($$$cl15.getFalse()),$$$cl15.String("infinity not undefined",22));
    assert($$$cl15.Float(1.0).getFinite(),$$$cl15.String("1 finite",8));
    assert($$$cl15.getInfinity().getFinite().equals($$$cl15.getFalse()),$$$cl15.String("infinity is not finite",22));
    assert($$$cl15.getInfinity().getNegativeValue().getFinite().equals($$$cl15.getFalse()),$$$cl15.String("-infinity is not finite",23));
    assert($$$cl15.Float(0.0).divided($$$cl15.Float(0.0)).getFinite().equals($$$cl15.getFalse()),$$$cl15.String("NaN not finite",14));
    assert($$$cl15.Float(1.0).getInfinite().equals($$$cl15.getFalse()),$$$cl15.String("1 not infinite",14));
    assert($$$cl15.getInfinity().getInfinite(),$$$cl15.String("infinity is infinite",20));
    assert($$$cl15.getInfinity().getNegativeValue().getInfinite(),$$$cl15.String("-infinity is infinite",21));
    assert($$$cl15.Float(0.0).divided($$$cl15.Float(0.0)).getInfinite().equals($$$cl15.getFalse()),$$$cl15.String("NaN not infinite",16));
}
this.numbers=numbers;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition characters at characters.ceylon (1:0-28:0)
function characters(){
    
    //AttributeDeclaration c at characters.ceylon (2:4-2:17)
    var $c=$$$cl15.Character(97);
    function getC(){
        return $c;
    }
    assert(getC().getLowercase(),$$$cl15.String("lowercase char",14));
    assert(getC().getUppercase().equals($$$cl15.getFalse()),$$$cl15.String("lowercase char",14));
    assert($$$cl15.Character(65).getUppercase(),$$$cl15.String("uppercase char",14));
    assert($$$cl15.Character(65).getLowercase().equals($$$cl15.getFalse()),$$$cl15.String("uppercase char",14));
    assert(getC().getUppercased().equals($$$cl15.Character(65)),$$$cl15.String("uppercased char",15));
    assert($$$cl15.Character(65).getLowercased().equals($$$cl15.Character(97)),$$$cl15.String("lowercased char",15));
    assert(getC().getString().equals($$$cl15.String("a",1)),$$$cl15.String("character string",16));
    assert(getC().getWhitespace().equals($$$cl15.getFalse()),$$$cl15.String("character not whitespace",24));
    assert(getC().getDigit().equals($$$cl15.getFalse()),$$$cl15.String("character not whitespace",24));
    assert($$$cl15.Character(32).getWhitespace(),$$$cl15.String("character whitespace",20));
    assert($$$cl15.Character(49).getDigit(),$$$cl15.String("character digt",14));
    assert($$$cl15.Character(97).compare($$$cl15.Character(122)).equals($$$cl15.getSmaller()),$$$cl15.String("char order",10));
    assert($$$cl15.Character(97).getSuccessor().equals($$$cl15.Character(98)),$$$cl15.String("char successor",14));
    assert($$$cl15.Character(90).getPredecessor().equals($$$cl15.Character(89)),$$$cl15.String("char predecessor",16));
    
    //AttributeDeclaration i at characters.ceylon (18:4-18:23)
    var $i=$$$cl15.Integer(0);
    function getI(){
        return $i;
    }
    function setI(i){
        $i=i; return i;
    }
    (function(){
        var _iter = $$$cl15.Range($$$cl15.Character(97),$$$cl15.Character(122)).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getX(){ return _item; }
            setI(getI().plus($$$cl15.Integer(1)));
            assert(((getX().compare($$$cl15.Character(97))!==$$$cl15.getSmaller()?$$$cl15.getTrue():$$$cl15.getFalse())===$$$cl15.getTrue()?(getX().compare($$$cl15.Character(122))!==$$$cl15.getLarger()?$$$cl15.getTrue():$$$cl15.getFalse()):$$$cl15.getFalse()),$$$cl15.String("character range",15));
        }
    }());
    
    assert(getI().equals($$$cl15.Integer(26)),$$$cl15.String("character range",15));
    assert(getC().getInteger().getCharacter().equals(getC()),$$$cl15.String("integer/character conversion",28));
    assert($$$cl15.Integer(69).getCharacter().getInteger().equals($$$cl15.Integer(69)),$$$cl15.String("integer/character conversion",28));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition operators at operators.ceylon (1:0-49:0)
function operators(){
    
    //AttributeDeclaration maybe at operators.ceylon (3:4-3:27)
    var $maybe=$$$cl15.String("hello",5);
    function getMaybe(){
        return $maybe;
    }
    
    //AttributeDeclaration maybeNot at operators.ceylon (4:4-4:27)
    var $maybeNot=$$$cl15.getNull();
    function getMaybeNot(){
        return $maybeNot;
    }
    assert($$$cl15.exists((function($){return $===null?null:$.getUppercased()}(getMaybe()))),$$$cl15.String("?.",2));
    assert($$$cl15.exists((function($){return $===null?null:$.getUppercased()}(getMaybeNot()))).equals($$$cl15.getFalse()),$$$cl15.String("?.",2));
    assert(function($){return $!==null?$:$$$cl15.String("goodbye",7)}(getMaybe()).equals($$$cl15.String("hello",5)),$$$cl15.String("?",1));
    assert(function($){return $!==null?$:$$$cl15.String("goodbye",7)}(getMaybeNot()).equals($$$cl15.String("goodbye",7)),$$$cl15.String("?",1));
    assert($$$cl15.exists($$$cl15.exists(getMaybe())===$$$cl15.getTrue()?getMaybe().item($$$cl15.Integer(0)):$$$cl15.getNull()),$$$cl15.String("?[]",3));
    assert($$$cl15.exists($$$cl15.exists(getMaybe())===$$$cl15.getTrue()?getMaybe().item($$$cl15.Integer(4)):$$$cl15.getNull()),$$$cl15.String("?[]",3));
    assert($$$cl15.exists($$$cl15.exists(getMaybe())===$$$cl15.getTrue()?getMaybe().item($$$cl15.Integer(10)):$$$cl15.getNull()).equals($$$cl15.getFalse()),$$$cl15.String("?[]",3));
    assert($$$cl15.exists($$$cl15.exists(getMaybeNot())===$$$cl15.getTrue()?getMaybeNot().item($$$cl15.Integer(0)):$$$cl15.getNull()).equals($$$cl15.getFalse()),$$$cl15.String("?[]",3));
    assert($$$cl15.exists($$$cl15.exists(getMaybeNot())===$$$cl15.getTrue()?getMaybeNot().item($$$cl15.Integer(10)):$$$cl15.getNull()).equals($$$cl15.getFalse()),$$$cl15.String("?[]",3));
    
    //AttributeDeclaration empty at operators.ceylon (15:4-15:23)
    var $empty=$$$cl15.ArraySequence([]);
    function getEmpty(){
        return $empty;
    }
    
    //AttributeDeclaration full at operators.ceylon (16:4-16:40)
    var $full=$$$cl15.ArraySequence([$$$cl15.String("hello",5),$$$cl15.String("world",5)]);
    function getFull(){
        return $full;
    }
    assert($$$cl15.String("hello world",11).contains($$$cl15.String("hello",5)),$$$cl15.String("in",2));
    assert($$$cl15.String("hello world",11).contains($$$cl15.String("world",5)),$$$cl15.String("in",2));
    
    //AttributeDeclaration c1 at operators.ceylon (22:4-22:43)
    var $c1=$$$cl15.ArraySequence([]);
    function getC1(){
        return $c1;
    }
    assert($$$cl15.exists(getC1().item($$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("empty correspondence",20));
    
    //AttributeDeclaration sequence at operators.ceylon (25:4-25:54)
    var $sequence=$$$cl15.ArraySequence([$$$cl15.String("foo",3),$$$cl15.String("bar",3)]);
    function getSequence(){
        return $sequence;
    }
    
    //AttributeDeclaration subrange at operators.ceylon (26:4-26:38)
    var $subrange=getSequence().span($$$cl15.Integer(1),$$$cl15.Integer(2));
    function getSubrange(){
        return $subrange;
    }
    assert(getSubrange().getSize().equals($$$cl15.Integer(1)),$$$cl15.String("subrange size",13));
    assert($$$cl15.nonempty(getSubrange()),$$$cl15.String("subrange nonempty",17));
    assert(getSequence().span($$$cl15.Integer(1)).getSize().equals($$$cl15.Integer(1)),$$$cl15.String("open subrange size",18));
    assert(getSequence().span($$$cl15.Integer(0)).getSize().equals($$$cl15.Integer(2)),$$$cl15.String("open subrange size",18));
    assert($$$cl15.nonempty(getSequence().span($$$cl15.Integer(1))),$$$cl15.String("open subrange nonempty",22));
    assert($$$cl15.nonempty(getSequence().span($$$cl15.Integer(2))).equals($$$cl15.getFalse()),$$$cl15.String("open subrange empty",19));
    
    //AttributeDeclaration x at operators.ceylon (34:4-34:17)
    var $x=$$$cl15.Float(0.5);
    function getX(){
        return $x;
    }
    assert($$$cl15.exists((getX().compare($$$cl15.Float(0.0)).equals($$$cl15.getLarger())===$$$cl15.getTrue()?getX():null)),$$$cl15.String("then not null",13));
    assert($$$cl15.exists((getX().compare($$$cl15.Float(0.0)).equals($$$cl15.getSmaller())===$$$cl15.getTrue()?getX():null)).equals($$$cl15.getFalse()),$$$cl15.String("then null",9));
    assert(function($){return $!==null?$:$$$cl15.Float(1.0)}((getX().compare($$$cl15.Float(0.0)).equals($$$cl15.getSmaller())===$$$cl15.getTrue()?getX():null)).equals($$$cl15.Float(1.0)),$$$cl15.String("then else",9));
    assert(function($){return $!==null?$:$$$cl15.Float(1.0)}((getX().compare($$$cl15.Float(0.0)).equals($$$cl15.getLarger())===$$$cl15.getTrue()?getX():null)).equals($$$cl15.Float(0.5)),$$$cl15.String("then",4));
    assert(function($){return $!==null?$:$$$cl15.String("goodbye",7)}(getMaybe()).equals($$$cl15.String("hello",5)),$$$cl15.String("else",4));
    assert(function($){return $!==null?$:$$$cl15.String("goodbye",7)}(getMaybeNot()).equals($$$cl15.String("goodbye",7)),$$$cl15.String("else",4));
    
    //ClassDefinition X at operators.ceylon (43:4-43:15)
    function $X(){}
    $$$cl15.initType($X,'operators.X',$$$cl15.$IdentifiableObject);
    $$$cl15.inheritProto($X,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
    function X($$x){
        if ($$x===undefined)$$x=new $X;
        return $$x;
    }
    
    //AttributeDeclaration xx at operators.ceylon (44:4-44:15)
    var $xx=X();
    function getXx(){
        return $xx;
    }
    assert($$$cl15.isOfType(function($){return $!==null?$:X()}(getXx()),'operators.X'),$$$cl15.String("something",9));
    assert($$$cl15.isOfType(($$$cl15.getTrue()===$$$cl15.getTrue()?X():null),'operators.X'),$$$cl15.String("something",9));
    assert($$$cl15.isOfType(function($){return $!==null?$:X()}(($$$cl15.getTrue()===$$$cl15.getTrue()?X():null)),'operators.X'),$$$cl15.String("something",9));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition T at types.ceylon (1:0-3:0)
function $T(){}
$$$cl15.initType($T,'T',$$$cl15.$Object);
$$$cl15.inheritProto($T,$$$cl15.$Object,'$$$cl15$Object$');

//AttributeDeclaration string at types.ceylon (2:4-2:41)
$T.prototype.getString=function getString(){
    return this.string;
}
function T($$t){
    if ($$t===undefined)$$t=new $T;
    $$$cl15.Object($$t);
    
    //AttributeDeclaration string at types.ceylon (2:4-2:41)
    $$t.string=$$$cl15.String("hello",5);
    return $$t;
}

//InterfaceDefinition Format at types.ceylon (5:0-5:18)
function $Format(){}
$$$cl15.initType($Format,'Format');
function Format($$format){
    if ($$format===undefined)$$format=new $Format;
    return $$format;
}

//MethodDefinition types at types.ceylon (7:0-128:0)
function types(){
    
    //AttributeDeclaration bool at types.ceylon (8:4-8:20)
    var $bool=$$$cl15.getTrue();
    function getBool(){
        return $bool;
    }
    
    //AttributeDeclaration entry at types.ceylon (9:4-9:21)
    var $entry=$$$cl15.Entry($$$cl15.Integer(1),$$$cl15.Integer(2));
    function getEntry(){
        return $entry;
    }
    
    //AttributeDeclaration nothing at types.ceylon (10:4-10:23)
    var $nothing=$$$cl15.getNull();
    function getNothing(){
        return $nothing;
    }
    
    //AttributeDeclaration one at types.ceylon (11:4-11:16)
    var $one=$$$cl15.Integer(1);
    function getOne(){
        return $one;
    }
    
    //AttributeDeclaration t at types.ceylon (12:4-12:16)
    var $t=T();
    function getT(){
        return $t;
    }
    
    //AttributeDeclaration c at types.ceylon (13:4-13:16)
    var $c=$$$cl15.Character(99);
    function getC(){
        return $c;
    }
    
    //AttributeDeclaration str at types.ceylon (14:4-14:23)
    var $str=$$$cl15.String("string",6);
    function getStr(){
        return $str;
    }
    assert($$$cl15.isOfType(getBool(),'ceylon.language.Object'),$$$cl15.String("boolean type is object",22));
    assert($$$cl15.isOfType(getBool(),'ceylon.language.IdentifiableObject'),$$$cl15.String("boolean type is identifiable",28));
    assert($$$cl15.isOfType(getBool(),'ceylon.language.Equality'),$$$cl15.String("boolean type is equality",24));
    assert($$$cl15.isOfType(getBool(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("not null boolean type is not nothing",36));
    assert($$$cl15.isOfType(getBool(),'ceylon.language.Boolean'),$$$cl15.String("boolean type 1",14));
    assert($$$cl15.isOfType(getBool(),'ceylon.language.Void'),$$$cl15.String("boolean type 2",14));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.Nothing'),$$$cl15.String("null type 1",11));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.Equality').equals($$$cl15.getFalse()),$$$cl15.String("null type 2",11));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.Object').equals($$$cl15.getFalse()),$$$cl15.String("null type 3",11));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("null type 4",11));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.Void'),$$$cl15.String("null type 5",11));
    assert($$$cl15.isOfType(getEntry(),'ceylon.language.Object'),$$$cl15.String("entry type 1",12));
    assert($$$cl15.isOfType(getEntry(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("not entry type",14));
    assert($$$cl15.isOfType(getEntry(),'ceylon.language.Equality'),$$$cl15.String("entry type 2",12));
    assert($$$cl15.isOfType(getEntry(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("not null entry type",19));
    assert($$$cl15.isOfType(getEntry(),'ceylon.language.Void'),$$$cl15.String("entry type 4",12));
    assert($$$cl15.isOfType(getOne(),'ceylon.language.Object'),$$$cl15.String("not natural type 1",18));
    assert($$$cl15.isOfType(getOne(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("not natural type 2",18));
    assert($$$cl15.isOfType(getOne(),'ceylon.language.Equality'),$$$cl15.String("natural type 1",14));
    assert($$$cl15.isOfType(getOne(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("not null natural type",21));
    assert($$$cl15.isOfType(getOne(),'ceylon.language.Integer'),$$$cl15.String("natural type 2",14));
    assert($$$cl15.isOfType(getNothing(),'ceylon.language.Void'),$$$cl15.String("natural type 3",14));
    assert($$$cl15.isOfType(getC(),'ceylon.language.Object'),$$$cl15.String("not char type 1",15));
    assert($$$cl15.isOfType(getC(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("not char type 1",15));
    assert($$$cl15.isOfType(getC(),'ceylon.language.Equality'),$$$cl15.String("char type 1",11));
    assert($$$cl15.isOfType(getC(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("not null char type",18));
    assert($$$cl15.isOfType(getC(),'ceylon.language.Character'),$$$cl15.String("char type 2",11));
    assert($$$cl15.isOfType(getC(),'ceylon.language.Void'),$$$cl15.String("char type 3",11));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.Object'),$$$cl15.String("not string type 1",17));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("not string type 1",17));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.Equality'),$$$cl15.String("string type 1",13));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("not null string type",20));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.String'),$$$cl15.String("string type 2",13));
    assert($$$cl15.isOfType(getStr(),'ceylon.language.Void'),$$$cl15.String("string type 3",13));
    assert($$$cl15.isOfType(getT(),'ceylon.language.Equality').equals($$$cl15.getFalse()),$$$cl15.String("not eq custom type",18));
    assert($$$cl15.isOfType(getT(),'ceylon.language.IdentifiableObject').equals($$$cl15.getFalse()),$$$cl15.String("not id custom type",18));
    assert($$$cl15.isOfType(getT(),'ceylon.language.Nothing').equals($$$cl15.getFalse()),$$$cl15.String("custom type 1",13));
    assert($$$cl15.isOfType(getT(),'ceylon.language.Object'),$$$cl15.String("custom type 2",13));
    assert($$$cl15.isOfType(getT(),'T'),$$$cl15.String("custom type 3",13));
    assert($$$cl15.isOfType(getT(),'ceylon.language.Void'),$$$cl15.String("custom type 4",13));
    if($$$cl15.isOfType(getBool(),'ceylon.language.Equality')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("boolean type 4",14));
    }
    
    if($$$cl15.isOfType(getBool(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("boolean type 5",14));
    }
    
    if($$$cl15.isOfType(getBool(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("boolean type 6",14));
    }
    
    if($$$cl15.isOfType(getBool(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 6",11));
    }
    
    if($$$cl15.isOfAnyType(getBool(),['ceylon.language.Nothing', 'ceylon.language.Boolean'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("optional boolean type 7",23));
    }
    
    if($$$cl15.isOfType(getOne(),'ceylon.language.Equality')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("natural type 4",14));
    }
    
    if($$$cl15.isOfType(getOne(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("natural type 5",14));
    }
    
    if($$$cl15.isOfType(getOne(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("natural type 6",14));
    }
    
    if($$$cl15.isOfType(getOne(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 7",11));
    }
    
    if($$$cl15.isOfType(getOne(),'ceylon.language.Integer')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("natural type 7",14));
    }
    
    if($$$cl15.isOfAnyType(getOne(),['ceylon.language.Nothing', 'ceylon.language.Integer'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("optional natural type 8",23));
    }
    
    if($$$cl15.isOfType(getC(),'ceylon.language.Equality')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("character type 1",16));
    }
    
    if($$$cl15.isOfType(getC(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("character type 2",16));
    }
    
    if($$$cl15.isOfType(getC(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("character type 3",16));
    }
    
    if($$$cl15.isOfType(getC(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 8",11));
    }
    
    if($$$cl15.isOfType(getC(),'ceylon.language.Character')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("character type 4",16));
    }
    
    if($$$cl15.isOfAnyType(getC(),['ceylon.language.Nothing', 'ceylon.language.Character'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("optional character type 5",25));
    }
    
    if($$$cl15.isOfType(getStr(),'ceylon.language.Equality')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("string type 4",13));
    }
    
    if($$$cl15.isOfType(getStr(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("string type 5",13));
    }
    
    if($$$cl15.isOfType(getStr(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("string type 6",13));
    }
    
    if($$$cl15.isOfType(getStr(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 9",11));
    }
    
    if($$$cl15.isOfAnyType(getStr(),['ceylon.language.Nothing', 'ceylon.language.String'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("optional string type 7",22));
    }
    
    if($$$cl15.isOfType(getT(),'ceylon.language.Equality')===$$$cl15.getTrue()){
        fail($$$cl15.String("custom type 5",13));
    }
    
    if($$$cl15.isOfType(getT(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("custom type 6",13));
    }
    
    if($$$cl15.isOfType(getT(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("custom type 7",13));
    }
    
    if($$$cl15.isOfType(getT(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 10",12));
    }
    
    if($$$cl15.isOfAnyType(getT(),['ceylon.language.Nothing', 'T'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("optional custom type 8",22));
    }
    
    if($$$cl15.isOfType(getEntry(),'ceylon.language.Equality')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("entry type 5",12));
    }
    
    if($$$cl15.isOfType(getEntry(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("entry type 6",12));
    }
    
    if($$$cl15.isOfType(getEntry(),'ceylon.language.Object')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("entry type 7",12));
    }
    
    if($$$cl15.isOfType(getEntry(),'ceylon.language.Nothing')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 11",12));
    }
    
    if($$$cl15.isOfType(getNothing(),'ceylon.language.Equality')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 12",12));
    }
    
    if($$$cl15.isOfType(getNothing(),'ceylon.language.IdentifiableObject')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 13",12));
    }
    
    if($$$cl15.isOfType(getNothing(),'ceylon.language.Object')===$$$cl15.getTrue()){
        fail($$$cl15.String("null type 14",12));
    }
    
    if($$$cl15.isOfType(getNothing(),'ceylon.language.Nothing')===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("null type 15",12));
    }
    
    if($$$cl15.isOfAnyType(getNothing(),['ceylon.language.Nothing', 'ceylon.language.Character'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("null is optional type",21));
    }
    
    if($$$cl15.isOfAnyType(getBool(),['ceylon.language.Boolean', 'ceylon.language.Character', 'T'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("union type",10));
    }
    
    if($$$cl15.isOfAnyType(getT(),['ceylon.language.Boolean', 'ceylon.language.Character', 'T'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("union type",10));
    }
    
    if($$$cl15.isOfAnyType(getStr(),['ceylon.language.Boolean', 'ceylon.language.Character', 'T'])===$$$cl15.getTrue()){
        fail($$$cl15.String("union type",10));
    }
    else {}
    
    if($$$cl15.isOfAnyType(getNothing(),['ceylon.language.Boolean', 'ceylon.language.Character', 'T'])===$$$cl15.getTrue()){
        fail($$$cl15.String("union type",10));
    }
    else {}
    
    if($$$cl15.isOfAllTypes(getOne(),['ceylon.language.Equality', 'ceylon.language.Castable'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("intersection type",17));
    }
    
    if($$$cl15.isOfAllTypes(getBool(),['ceylon.language.Equality', 'ceylon.language.Castable'])===$$$cl15.getTrue()){
        fail($$$cl15.String("intersection type",17));
    }
    else {}
    
    if($$$cl15.isOfAllTypes(getStr(),['ceylon.language.Sized', 'ceylon.language.Category', 'ceylon.language.Ordered'])===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("intersection type",17));
    }
    
    if($$$cl15.isOfAllTypes(getT(),['ceylon.language.Sized', 'ceylon.language.Category', 'ceylon.language.Ordered'])===$$$cl15.getTrue()){
        fail($$$cl15.String("intersection type",17));
    }
    else {}
    
    assert($$$cl15.className($$$cl15.Integer(1)).equals($$$cl15.String("ceylon.language.Integer",23)),$$$cl15.String("natural classname",17));
    assert($$$cl15.className($$$cl15.Float(1.0)).equals($$$cl15.String("ceylon.language.Float",21)),$$$cl15.String("float classname",15));
    assert($$$cl15.className($$$cl15.String("hello",5)).equals($$$cl15.String("ceylon.language.String",22)),$$$cl15.String("string classname",16));
    assert($$$cl15.className($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("hello",5))).equals($$$cl15.String("ceylon.language.Entry",21)),$$$cl15.String("entry classname",15));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition run at run.ceylon (1:0-32:0)
function run(){
    $$$cl15.print($$$cl15.String("Testing equality",16));
    equality();
    $$$cl15.print($$$cl15.String("Testing booleans",16));
    booleans();
    $$$cl15.print($$$cl15.String("Testing numbers",15));
    numbers();
    $$$cl15.print($$$cl15.String("Testing sequences",17));
    sequences();
    $$$cl15.print($$$cl15.String("Testing characters",18));
    characters();
    $$$cl15.print($$$cl15.String("Testing strings",15));
    strings();
    $$$cl15.print($$$cl15.String("Testing iterators",17));
    iterators();
    $$$cl15.print($$$cl15.String("Testing entries and ranges",26));
    entriesAndRanges();
    $$$cl15.print($$$cl15.String("Testing comparables",19));
    comparables();
    $$$cl15.print($$$cl15.String("Testing clones",14));
    clones();
    $$$cl15.print($$$cl15.String("Testing types",13));
    types();
    $$$cl15.print($$$cl15.String("Testing exceptions",18));
    exceptions();
    $$$cl15.print($$$cl15.String("Testing operators",17));
    operators();
    $$$cl15.print($$$cl15.String("Misc tests",10));
    misc();
    results();
}
this.run=run;

//MethodDefinition test at run.ceylon (34:0-34:28)
function test(){
    run();
}
this.test=test;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition C at comparables.ceylon (1:0-6:0)
function $C(){}
$$$cl15.initType($C,'C',$$$cl15.$IdentifiableObject,$$$cl15.$Comparable);
$$$cl15.inheritProto($C,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
$$$cl15.inheritProto($C,$$$cl15.$Comparable,'$$$cl15$Comparable$');

//MethodDefinition compare at comparables.ceylon (2:4-4:4)
$C.prototype.compare=function compare(other){
    var $$c=this;
    return $$c.f$C.compare(other.f$C);
}

//AttributeDeclaration string at comparables.ceylon (5:4-5:51)
$C.prototype.getString=function getString(){
    return this.string;
}
function C(f$C, $$c){
    if ($$c===undefined)$$c=new $C;
    $$c.f$C=f$C;
    $$$cl15.Comparable($$c);
    
    //AttributeDeclaration string at comparables.ceylon (5:4-5:51)
    $$c.string=$$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("C(",2),$$c.f$C.getString().getString(),$$$cl15.String(")",1)])).getString();
    return $$c;
}

//MethodDefinition comparables at comparables.ceylon (8:0-18:0)
function comparables(){
    
    //AttributeDeclaration cs at comparables.ceylon (9:4-9:40)
    var $cs=$$$cl15.ArraySequence([C($$$cl15.Float(0.0)),C($$$cl15.Float(1.0)),C($$$cl15.Float(2.0).getNegativeValue())]);
    function getCs(){
        return $cs;
    }
    
    //AttributeDeclaration comparables at comparables.ceylon (10:4-10:36)
    var $comparables=getCs();
    function getComparables(){
        return $comparables;
    }
    (function(){
        var _iter = getComparables().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getC(){ return _item; }
            assert(getC().compare(C($$$cl15.Float(0.5))).equals($$$cl15.getEqual()).equals($$$cl15.getFalse()),$$$cl15.String("custom comparables 1",20));
        }
    }());
    
    
    //AttributeDeclaration cs2 at comparables.ceylon (14:4-14:40)
    var $cs2=$$$cl15.ArraySequence([C($$$cl15.Float(1.0)),C($$$cl15.Float(2.0)),C($$$cl15.Float(0.0))]);
    function getCs2(){
        return $cs2;
    }
    (function(){
        var _iter = $$$cl15.zip(getCs(),getCs2()).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getZ(){ return _item; }
            assert(getZ().getKey().compare(getZ().getItem()).equals($$$cl15.getSmaller()),$$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("custom comparables 2: ",22),getZ().getKey().getString(),$$$cl15.String(" < ",3),getZ().getItem().getString(),$$$cl15.String("?",1)])).getString());
        }
    }());
    
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition misc at misc.ceylon (1:0-40:0)
function misc(){
    
    //MethodDefinition stringify at misc.ceylon (3:4-9:4)
    function stringify(chars){
        
        //AttributeDeclaration sb at misc.ceylon (4:8-4:42)
        var $sb=$$$cl15.StringBuilder();
        function getSb(){
            return $sb;
        }
        (function(){
            var _iter = chars.getIterator();
            var _item;
            while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
                function getC(){ return _item; }
                getSb().appendCharacter(getC());
            }
        }());
        
        return getSb().getString();
    }
    assert(stringify($$$cl15.ArraySequence([$$$cl15.String("hello",5).getCharacters()])).equals($$$cl15.String("hello",5)),$$$cl15.String("args",4));
    assert(stringify($$$cl15.ArraySequence([$$$cl15.Character(104),$$$cl15.Character(105)])).equals($$$cl15.String("hi",2)),$$$cl15.String("sequenced args",14));
    assert((function (){var $chars=$$$cl15.String("hello",5).getCharacters();return stringify($chars)}()).equals($$$cl15.String("hello",5)),$$$cl15.String("named args",10));
    assert((function (){var $chars=$$$cl15.ArraySequence([$$$cl15.Character(104),$$$cl15.Character(105)]);return stringify($chars)}()).equals($$$cl15.String("hi",2)),$$$cl15.String("named sequenced args",20));
    assert(stringify().equals($$$cl15.String("",0)),$$$cl15.String("no args",7));
    assert((function (){return stringify($chars)}()).equals($$$cl15.String("",0)),$$$cl15.String("no named args",13));
    
    //AttributeDeclaration x at misc.ceylon (18:4-18:28)
    var $x=$$$cl15.Integer(0);
    function getX(){
        return $x;
    }
    function setX(x){
        $x=x; return x;
    }
    var $cond$;
    while(($cond$=getX())!==null){
        var $y=$cond$;
        function getY(){return $y}
        setX($$$cl15.getNull());
    }
    
    assert($$$cl15.exists(getX()).equals($$$cl15.getFalse()),$$$cl15.String("while exists",12));
    
    //AttributeDeclaration s at misc.ceylon (24:4-24:31)
    var $s=$$$cl15.String("hello",5);
    function getS(){
        return $s;
    }
    function setS(s){
        $s=s; return s;
    }
    var $cond$;
    while(($cond$=getS().getCharacters()).getEmpty()===$$$cl15.getFalse()){
        var $chars=$cond$;
        function getChars(){return $chars}
        setS($$$cl15.String("",0));
    }
    
    assert(getS().equals($$$cl15.String("",0)),$$$cl15.String("while nonempty",14));
    
    //AttributeDeclaration bs at misc.ceylon (30:4-30:41)
    var $bs=$$$cl15.SequenceBuilder();
    function getBs(){
        return $bs;
    }
    (function(){
        var _iter = $$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(10)).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getI(){ return _item; }
            assert(getBs().getSize().equals(getI()),$$$cl15.String("builder size",12));
            getBs().append(getI());
        }
    }());
    
    assert(getBs().getSize().equals($$$cl15.Integer(11)),$$$cl15.String("builder size",12));
    (function(){
        var _iter = $$$cl15.entries($$$cl15.ArraySequence([getBs().getSequence()])).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getN(){ return _item.getKey(); }
            function getE(){ return _item.getItem(); }
            assert(getN().equals(getE()),$$$cl15.String("entry iteration",15));
        }
    }());
    
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition MyException at exceptions.ceylon (1:0-1:61)
function $MyException(){}
$$$cl15.initType($MyException,'MyException',$$$cl15.$Exception);
$$$cl15.inheritProto($MyException,$$$cl15.$Exception,'$$$cl15$Exception$');
function MyException($$myException){
    if ($$myException===undefined)$$myException=new $MyException;
    $$$cl15.Exception($$$cl15.String("my exception",12),$$$cl15.getNull(),$$myException);
    return $$myException;
}

//ClassDefinition OtherException at exceptions.ceylon (2:0-2:67)
function $OtherException(){}
$$$cl15.initType($OtherException,'OtherException',$$$cl15.$Exception);
$$$cl15.inheritProto($OtherException,$$$cl15.$Exception,'$$$cl15$Exception$');
function OtherException($$otherException){
    if ($$otherException===undefined)$$otherException=new $OtherException;
    $$$cl15.Exception($$$cl15.String("other exception",15),$$$cl15.getNull(),$$otherException);
    return $$otherException;
}

//MethodDefinition exceptions at exceptions.ceylon (4:0-83:0)
function exceptions(){
    
    //AttributeDeclaration caught at exceptions.ceylon (5:4-5:34)
    var $caught=$$$cl15.getFalse();
    function getCaught(){
        return $caught;
    }
    function setCaught(caught){
        $caught=caught; return caught;
    }
    try{
        throw MyException();
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfType($ex$,'OtherException')===$$$cl15.getTrue()){
            function getOe(){return $ex$}
            fail($$$cl15.String("other exception",15));
        }
        else if($$$cl15.isOfType($ex$,'MyException')===$$$cl15.getTrue()){
            function getMe(){return $ex$}
            setCaught($$$cl15.getTrue());
            assert(getMe().getMessage().equals($$$cl15.String("my exception",12)),$$$cl15.String("exception message",17));
            assert($$$cl15.exists(getMe().getCause()).equals($$$cl15.getFalse()),$$$cl15.String("exception cause",15));
        }
        else{throw $ex$}
    }
    
    assert(getCaught(),$$$cl15.String("caught",6));
    setCaught($$$cl15.getFalse());
    try{
        throw MyException();
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfType($ex$,'OtherException')===$$$cl15.getTrue()){
            function getOe(){return $ex$}
            fail($$$cl15.String("other exception",15));
        }
        else if($$$cl15.isOfType($ex$,'ceylon.language.Exception')===$$$cl15.getTrue()){
            function getMe(){return $ex$}
            setCaught($$$cl15.getTrue());
            assert(getMe().getMessage().equals($$$cl15.String("my exception",12)),$$$cl15.String("exception message",17));
            assert($$$cl15.exists(getMe().getCause()).equals($$$cl15.getFalse()),$$$cl15.String("exception cause",15));
        }
        else{throw $ex$}
    }
    
    assert(getCaught(),$$$cl15.String("caught",6));
    setCaught($$$cl15.getFalse());
    try{
        throw MyException();
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfAnyType($ex$,['OtherException', 'MyException'])===$$$cl15.getTrue()){
            function getE(){return $ex$}
            setCaught($$$cl15.getTrue());
            assert(getE().getMessage().equals($$$cl15.String("my exception",12)),$$$cl15.String("exception message",17));
            assert($$$cl15.exists(getE().getCause()).equals($$$cl15.getFalse()),$$$cl15.String("exception cause",15));
        }
        else if($$$cl15.isOfType($ex$,'ceylon.language.Exception')===$$$cl15.getTrue()){
            function getMe(){return $ex$}
            fail($$$cl15.String("any exception",13));
        }
        else{throw $ex$}
    }
    
    assert(getCaught(),$$$cl15.String("caught",6));
    setCaught($$$cl15.getFalse());
    try{
        throw $$$cl15.Exception($$$cl15.String("hello",5),$$$cl15.getNull());
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfAnyType($ex$,['OtherException', 'MyException'])===$$$cl15.getTrue()){
            function getE(){return $ex$}
            fail($$$cl15.String("any exception",13));
        }
        else if($$$cl15.isOfType($ex$,'ceylon.language.Exception')===$$$cl15.getTrue()){
            function getMe(){return $ex$}
            setCaught($$$cl15.getTrue());
        }
        else{throw $ex$}
    }
    
    assert(getCaught(),$$$cl15.String("caught",6));
    setCaught($$$cl15.getFalse());
    try{
        throw $$$cl15.Exception($$$cl15.String("hello",5),MyException());
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfType($ex$,'ceylon.language.Exception')===$$$cl15.getTrue()){
            function getE(){return $ex$}
            setCaught($$$cl15.getTrue());
            assert(getE().getMessage().equals($$$cl15.String("hello",5)),$$$cl15.String("exception message",17));
            assert($$$cl15.exists(getE().getCause()),$$$cl15.String("exception cause",15));
            assert($$$cl15.isOfType(getE().getCause(),'MyException'),$$$cl15.String("exception cause",15));
        }
        else{throw $ex$}
    }
    
    assert(getCaught(),$$$cl15.String("caught",6));
    setCaught($$$cl15.getFalse());
    try{
        try{
            throw $$$cl15.Exception($$$cl15.getNull(),$$$cl15.getNull());
        }
        catch($ex0$){
            var $ex$=$ex0$;
            if($$$cl15.isOfType($ex$,'MyException')===$$$cl15.getTrue()){
                function getMe(){return $ex$}
                setCaught($$$cl15.getTrue());
            }
            else{throw $ex$}
        }
        
    }
    catch($ex0$){
        var $ex$=$ex0$;
        if($$$cl15.isOfType($ex$,'ceylon.language.Exception')===$$$cl15.getTrue()){}else{throw $ex$}
    }
    
    assert(getCaught().equals($$$cl15.getFalse()),$$$cl15.String("caught",6));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//MethodDefinition booleans at booleans.ceylon (1:0-44:0)
function booleans(){
    assert($$$cl15.getTrue().equals($$$cl15.getTrue()),$$$cl15.String("boolean equals",14));
    assert(($$$cl15.getTrue()===$$$cl15.getTrue()?$$$cl15.getTrue():$$$cl15.getFalse()),$$$cl15.String("boolean identical",17));
    assert($$$cl15.getFalse().equals($$$cl15.getTrue()).equals($$$cl15.getFalse()),$$$cl15.String("boolean not equals",18));
    assert(($$$cl15.getFalse()===$$$cl15.getTrue()?$$$cl15.getTrue():$$$cl15.getFalse()).equals($$$cl15.getFalse()),$$$cl15.String("boolean not identical",21));
    assert($$$cl15.getTrue().getString().equals($$$cl15.String("true",4)),$$$cl15.String("true string",11));
    assert($$$cl15.getFalse().getString().equals($$$cl15.String("false",5)),$$$cl15.String("false string",12));
    assert($$$cl15.Integer(1).equals($$$cl15.Integer(1)).equals($$$cl15.getTrue()),$$$cl15.String("boolean equals",14));
    assert($$$cl15.Integer(1).equals($$$cl15.Integer(2)).equals($$$cl15.getFalse()),$$$cl15.String("boolean equals",14));
    assert($$$cl15.getTrue().equals($$$cl15.String("true",4)).equals($$$cl15.getFalse()),$$$cl15.String("boolean equals",14));
    assert($$$cl15.getTrue().equals($$$cl15.getTrue()),$$$cl15.String("boolean equals",14));
    assert($$$cl15.getTrue().equals($$$cl15.String("true",4)).equals($$$cl15.getFalse()),$$$cl15.String("boolean equals",14));
    if (($$$cl15.getTrue())===$$$cl15.getTrue()){}
    
    if (($$$cl15.getTrue())===$$$cl15.getTrue()){}
    else {
        fail($$$cl15.String("if true",7));
    }
    
    if (($$$cl15.getFalse())===$$$cl15.getTrue()){
        fail($$$cl15.String("if false",8));
    }
    
    while ((($$$cl15.getFalse()===$$$cl15.getTrue()?$$$cl15.Integer(1).equals($$$cl15.Integer(1)):$$$cl15.getFalse()))===$$$cl15.getTrue()){
        fail($$$cl15.String("while false",11));
    }
    
    if (($$$cl15.getFalse())===$$$cl15.getTrue()){
        fail($$$cl15.String("if false",8));
    }
    else {}
    
    while (($$$cl15.getTrue())===$$$cl15.getTrue()){
        break;
    }
    
    
    //MethodDefinition obj at booleans.ceylon (36:4-38:4)
    function obj(o){
        return o;
    }
    
    //MethodDefinition bool at booleans.ceylon (39:4-41:4)
    function bool(b){
        return b;
    }
    
    //AttributeDeclaration o at booleans.ceylon (42:4-42:22)
    var $o=obj($$$cl15.getTrue());
    function getO(){
        return $o;
    }
    
    //AttributeDeclaration b at booleans.ceylon (43:4-43:25)
    var $b=bool($$$cl15.getFalse());
    function getB(){
        return $b;
    }
    
}
this.booleans=booleans;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition Prototype at clones.ceylon (1:0-4:0)
function $Prototype(){}
$$$cl15.initType($Prototype,'Prototype',$$$cl15.$IdentifiableObject,$$$cl15.$Cloneable);
$$$cl15.inheritProto($Prototype,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');
$$$cl15.inheritProto($Prototype,$$$cl15.$Cloneable,'$$$cl15$Cloneable$');

//AttributeGetterDefinition clone at clones.ceylon (3:3-3:57)
$Prototype.prototype.getClone=function getClone(){
    var $$prototype=this;
    return $$prototype;
}
function Prototype(e$Prototype, $$prototype){
    if ($$prototype===undefined)$$prototype=new $Prototype;
    $$$cl15.Cloneable($$prototype);
    return $$prototype;
}

//MethodDefinition clones at clones.ceylon (6:0-9:0)
function clones(){
    
    //AttributeDeclaration prot at clones.ceylon (7:4-7:35)
    var $prot=Prototype($$$cl15.String("hello",5));
    function getProt(){
        return $prot;
    }
    assert((getProt()===getProt().getClone()?$$$cl15.getTrue():$$$cl15.getFalse()),$$$cl15.String("clone",5));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//AttributeDeclaration assertionCount at assert.ceylon (1:0-1:34)
var $assertionCount=$$$cl15.Integer(0);
function getAssertionCount(){
    return $assertionCount;
}
this.getAssertionCount=getAssertionCount;
function setAssertionCount(assertionCount){
    $assertionCount=assertionCount; return assertionCount;
}
this.setAssertionCount=setAssertionCount;

//AttributeDeclaration failureCount at assert.ceylon (2:0-2:32)
var $failureCount=$$$cl15.Integer(0);
function getFailureCount(){
    return $failureCount;
}
this.getFailureCount=getFailureCount;
function setFailureCount(failureCount){
    $failureCount=failureCount; return failureCount;
}
this.setFailureCount=setFailureCount;

//MethodDefinition assert at assert.ceylon (4:0-10:0)
function assert(assertion,message){
    (setAssertionCount(getAssertionCount().plus($$$cl15.Integer(1))),getAssertionCount());
    if ((assertion.equals($$$cl15.getFalse()))===$$$cl15.getTrue()){
        (setFailureCount(getFailureCount().plus($$$cl15.Integer(1))),getFailureCount());
        $$$cl15.print($$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("assertion failed \""),message.getString(),$$$cl15.String("\"")])).getString());
    }
    
}
this.assert=assert;

//MethodDefinition fail at assert.ceylon (12:0-14:0)
function fail(message){
    assert($$$cl15.getFalse(),message);
}
this.fail=fail;

//MethodDefinition results at assert.ceylon (16:0-19:0)
function results(){
    $$$cl15.print($$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("assertions ",11),getAssertionCount().getString(),$$$cl15.String(", failures ",11),getFailureCount().getString(),$$$cl15.String("",0)])).getString());
}
this.results=results;
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//ClassDefinition OrderedPair at complex.ceylon (1:0-17:0)
function $OrderedPair(){}
$$$cl15.initType($OrderedPair,'OrderedPair',$$$cl15.$IdentifiableObject);
$$$cl15.inheritProto($OrderedPair,$$$cl15.$IdentifiableObject,'$$$cl15$IdentifiableObject$');

//AttributeDeclaration x at complex.ceylon (4:4-4:18)
$OrderedPair.prototype.getX=function getX(){
    return this.x;
}

//AttributeDeclaration y at complex.ceylon (5:4-5:18)
$OrderedPair.prototype.getY=function getY(){
    return this.y;
}

//AttributeGetterDefinition string at complex.ceylon (6:4-8:4)
$OrderedPair.prototype.getString=function getString(){
    var $$orderedPair=this;
    return $$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("(",1),$$orderedPair.x$OrderedPair.getString(),$$$cl15.String(", ",2),$$orderedPair.y$OrderedPair.getString(),$$$cl15.String(")",1)])).getString();
}

//MethodDefinition equals at complex.ceylon (9:4-16:4)
$OrderedPair.prototype.equals=function equals(other){
    var $$orderedPair=this;
    if($$$cl15.isOfType(other,'OrderedPair')===$$$cl15.getTrue()){
        function getOther(){return other}
        return ($$orderedPair.x$OrderedPair.equals(getOther().getX())===$$$cl15.getTrue()?$$orderedPair.y$OrderedPair.equals(getOther().getY()):$$$cl15.getFalse());
    }
    else {
        return $$$cl15.getFalse();
    }
    
}
function OrderedPair(x$OrderedPair, y$OrderedPair, $$orderedPair){
    if ($$orderedPair===undefined)$$orderedPair=new $OrderedPair;
    $$orderedPair.x$OrderedPair=x$OrderedPair;
    $$orderedPair.y$OrderedPair=y$OrderedPair;
    
    //AttributeDeclaration x at complex.ceylon (4:4-4:18)
    $$orderedPair.x=$$orderedPair.x$OrderedPair;
    
    //AttributeDeclaration y at complex.ceylon (5:4-5:18)
    $$orderedPair.y=$$orderedPair.y$OrderedPair;
    return $$orderedPair;
}

//ClassDefinition Complex at complex.ceylon (19:0-28:0)
function $Complex(){}
$$$cl15.initType($Complex,'Complex',$OrderedPair,$$$cl15.$Summable);
$$$cl15.inheritProto($Complex,$OrderedPair,'$OrderedPair$');
$$$cl15.inheritProto($Complex,$$$cl15.$Summable,'$$$cl15$Summable$');

//AttributeGetterDefinition string at complex.ceylon (22:4-24:4)
$Complex.prototype.getString=function getString(){
    var $$complex=this;
    return $$$cl15.StringBuilder().appendAll($$$cl15.ArraySequence([$$$cl15.String("",0),$$complex.re$Complex.getString(),$$$cl15.String("+",1),$$complex.im$Complex.getString(),$$$cl15.String("i",1)])).getString();
}

//MethodDefinition plus at complex.ceylon (25:4-27:4)
$Complex.prototype.plus=function plus(other){
    var $$complex=this;
    return Complex($$complex.re$Complex.plus(other.re$Complex),$$complex.im$Complex.plus(other.im$Complex));
}
function Complex(re$Complex, im$Complex, $$complex){
    if ($$complex===undefined)$$complex=new $Complex;
    $$complex.re$Complex=re$Complex;
    $$complex.im$Complex=im$Complex;
    OrderedPair($$complex.re$Complex,$$complex.im$Complex,$$complex);
    $$$cl15.Summable($$complex);
    return $$complex;
}

//MethodDefinition complex at complex.ceylon (30:0-34:0)
function complex(){
    assert(Complex($$$cl15.Float(0.0),$$$cl15.Float(1.0)).plus(Complex($$$cl15.Float(1.0),$$$cl15.Float(0.0))).equals(Complex($$$cl15.Float(1.0),$$$cl15.Float(1.0))),$$$cl15.String("",0));
    assert(Complex($$$cl15.Float(0.0),$$$cl15.Float(1.0)).plus(Complex($$$cl15.Float(1.0),$$$cl15.Float(0.0))).equals(Complex($$$cl15.Float(0.0),$$$cl15.Float(0.0))).equals($$$cl15.getFalse()),$$$cl15.String("",0));
    assert(Complex($$$cl15.Float(0.0),$$$cl15.Float(1.0)).equals(OrderedPair($$$cl15.Float(0.0),$$$cl15.Float(1.0))),$$$cl15.String("",0));
}
var $$$cl15=require('ceylon/language/0.1/ceylon.language');

//AttributeDeclaration entry at entries.ceylon (1:0-4:0)
var $entry=(function (){var $item=$$$cl15.String("hello",5);var $key=$$$cl15.Integer(1);return $$$cl15.Entry($key,$item)}());
function getEntry(){
    return $entry;
}
this.getEntry=getEntry;

//AttributeDeclaration range at entries.ceylon (6:0-9:0)
var $range=(function (){var $first=$$$cl15.Integer(3).getNegativeValue();var $last=$$$cl15.Integer(10).getPositiveValue();return $$$cl15.Range($first,$last)}());
function getRange(){
    return $range;
}
this.getRange=getRange;

//MethodDefinition test_entries_function at entries.ceylon (23:0-31:0)
function test_entries_function(){
    
    //AttributeDeclaration e at entries.ceylon (24:4-24:81)
    var $e=$$$cl15.entries($$$cl15.ArraySequence([$$$cl15.String("a",1),$$$cl15.String("b",1),$$$cl15.String("c",1),$$$cl15.String("X",1),$$$cl15.String("Y",1),$$$cl15.String("Z",1),$$$cl15.String("1",1),$$$cl15.String("2",1),$$$cl15.String("3",1),$$$cl15.String("d",1),$$$cl15.String("e",1),$$$cl15.String("f",1)]));
    function getE(){
        return $e;
    }
    
    //AttributeDeclaration _e at entries.ceylon (25:4-25:32)
    var $_e=$$$cl15.Entry($$$cl15.Integer(1).getNegativeValue(),$$$cl15.String("null",4));
    function get_e(){
        return $_e;
    }
    $$$cl15.print(getE());
    assert(function($){return $!==null?$:get_e()}(getE().item($$$cl15.Integer(2))).getKey().equals($$$cl15.Integer(2)),$$$cl15.String("entries",7));
    assert(function($){return $!==null?$:get_e()}(getE().item($$$cl15.Integer(2))).getItem().equals($$$cl15.String("c",1)),$$$cl15.String("entries",7));
    assert($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("a",1)).equals($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("a",1))),$$$cl15.String("entry.equals",12));
    assert($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("a",1)).equals($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("b",1))).equals($$$cl15.getFalse()),$$$cl15.String("entry.equals",12));
}

//MethodDefinition entriesAndRanges at entries.ceylon (33:0-178:0)
function entriesAndRanges(){
    
    //AttributeDeclaration e at entries.ceylon (45:4-45:39)
    var $e=getEntry();
    function getE(){
        return $e;
    }
    assert(getE().getString().equals($$$cl15.String("1->hello",8)),$$$cl15.String("entry string",12));
    assert(getE().getKey().equals($$$cl15.Integer(1)),$$$cl15.String("entry key",9));
    assert(getE().getItem().equals($$$cl15.String("hello",5)),$$$cl15.String("entry item",10));
    assert(getEntry().equals($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("hello",5))),$$$cl15.String("entry equals",12));
    assert(getEntry().equals($$$cl15.Entry($$$cl15.Integer(2),$$$cl15.String("hello",5))).equals($$$cl15.getFalse()),$$$cl15.String("entry equals",12));
    assert(getEntry().equals($$$cl15.Entry($$$cl15.Integer(1),$$$cl15.String("bye",3))).equals($$$cl15.getFalse()),$$$cl15.String("entry equals",12));
    assert(getRange().getSize().equals($$$cl15.Integer(14)),$$$cl15.String("range size",10));
    assert(getRange().getLastIndex().equals($$$cl15.Integer(13)),$$$cl15.String("range last index",16));
    assert(getRange().getString().equals($$$cl15.String("-3..10",6)),$$$cl15.String("range string",12));
    assert(getRange().getFirst().equals($$$cl15.Integer(3).getNegativeValue()),$$$cl15.String("range first",11));
    assert(getRange().getLast().equals($$$cl15.Integer(10).getPositiveValue()),$$$cl15.String("range last",10));
    assert(getRange().getDecreasing().equals($$$cl15.getFalse()),$$$cl15.String("range decreasing",16));
    assert(getRange().equals($$$cl15.Range($$$cl15.Integer(3).getNegativeValue(),$$$cl15.Integer(10).getPositiveValue())),$$$cl15.String("range equals",12));
    assert($$$cl15.exists(getRange().item($$$cl15.Integer(5))),$$$cl15.String("range element",13));
    assert($$$cl15.exists(getRange().item($$$cl15.Integer(14))).equals($$$cl15.getFalse()),$$$cl15.String("range element",13));
    
    //AttributeDeclaration r at entries.ceylon (63:4-63:23)
    var $r=getRange();
    function getR(){
        return $r;
    }
    assert($$$cl15.nonempty(getR()),$$$cl15.String("range nonempty",14));
    var $cond$;
    if(($cond$=getR().item($$$cl15.Integer(0)))!==null){
        var $el=$cond$;
        function getEl(){return $el}
        assert(getEl().equals($$$cl15.Integer(3).getNegativeValue()),$$$cl15.String("range first element",19));
    }
    else {
        fail($$$cl15.String("range first element",19));
    }
    
    var $cond$;
    if(($cond$=getR().item($$$cl15.Integer(13)))!==null){
        var $el=$cond$;
        function getEl(){return $el}
        assert(getEl().equals($$$cl15.Integer(10).getPositiveValue()),$$$cl15.String("range last element",18));
    }
    else {
        fail($$$cl15.String("range last element",18));
    }
    
    var $cond$;
    if(($cond$=getR().item($$$cl15.Integer(5)))!==null){
        var $el=$cond$;
        function getEl(){return $el}
        assert(getEl().equals($$$cl15.Integer(2)),$$$cl15.String("range element",13));
    }
    else {
        fail($$$cl15.String("range element",13));
    }
    
    var $cond$;
    if(($cond$=getR().item($$$cl15.Integer(14)))!==null){
        var $el=$cond$;
        function getEl(){return $el}
        fail($$$cl15.String("out of range element",20));
    }
    
    
    //AttributeDeclaration j at entries.ceylon (91:4-91:23)
    var $j=$$$cl15.Integer(0);
    function getJ(){
        return $j;
    }
    function setJ(j){
        $j=j; return j;
    }
    (function(){
        var _iter = getRange().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getI(){ return _item; }
            assert(getI().plus($$$cl15.Integer(3)).equals((function($){setJ($.getSuccessor());return $}(getJ()))),$$$cl15.String("range iteration",15));
        }
    }());
    
    assert(getJ().equals($$$cl15.Integer(14)),$$$cl15.String("range iteration",15));
    setJ($$$cl15.Integer(10).getPositiveValue());
    (function(){
        var _iter = $$$cl15.Range($$$cl15.Integer(10),$$$cl15.Integer(0)).getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getI(){ return _item; }
            assert(getI().equals((function($){setJ($.getPredecessor());return $}(getJ()))),$$$cl15.String("decreasing range iteration",26));
        }
    }());
    
    assert(getJ().equals($$$cl15.Integer(1).getNegativeValue()),$$$cl15.String("decreasing range iteration",26));
    
    //AttributeDeclaration ent at entries.ceylon (103:4-103:64)
    var $ent=$$$cl15.Entry($$$cl15.String("hello",5),$$$cl15.Entry($$$cl15.getTrue(),$$$cl15.String("hello",5)));
    function getEnt(){
        return $ent;
    }
    assert(getEnt().getItem().getItem().equals($$$cl15.String("hello",5)),$$$cl15.String("entry item item",15));
    assert($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(10)).segment($$$cl15.Integer(2),$$$cl15.Integer(3)).getString().equals($$$cl15.String("2..4",4)),$$$cl15.String("range segment",13));
    assert($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(10)).span($$$cl15.Integer(2),$$$cl15.Integer(5)).getString().equals($$$cl15.String("2..5",4)),$$$cl15.String("range span",10));
    assert($$$cl15.Range($$$cl15.Integer(2),$$$cl15.Integer(10)).segment($$$cl15.Integer(1),$$$cl15.Integer(3)).getString().equals($$$cl15.String("3..5",4)),$$$cl15.String("range segment",13));
    assert($$$cl15.Range($$$cl15.Integer(2),$$$cl15.Integer(10)).span($$$cl15.Integer(2),$$$cl15.Integer(7)).getString().equals($$$cl15.String("4..9",4)),$$$cl15.String("range span",10));
    assert($$$cl15.nonempty($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).segment($$$cl15.Integer(11),$$$cl15.Integer(10))).equals($$$cl15.getFalse()),$$$cl15.String("(0..9).segment(11,10) is empty",30));
    assert($$$cl15.nonempty($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).segment($$$cl15.Integer(3),$$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("(0..9).segment(3,0) is empty",28));
    assert($$$cl15.nonempty($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).span($$$cl15.Integer(11),$$$cl15.Integer(12))).equals($$$cl15.getFalse()),$$$cl15.String("(0..9).span(11,12) is NOT empty",31));
    assert($$$cl15.nonempty($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).span($$$cl15.Integer(5),$$$cl15.Integer(3))),$$$cl15.String("(0..9).span(5,3) is empty",25));
    assert($$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(1)).by($$$cl15.Integer(5)).getString().equals($$$cl15.String("1..1",4)),$$$cl15.String("range by",8));
    assert($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).by($$$cl15.Integer(1)).getString().equals($$$cl15.String("0..9",4)),$$$cl15.String("range by 1",10));
    assert($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).by($$$cl15.Integer(3)).getString().equals($$$cl15.String("{ 0, 3, 6, 9 }",14)),$$$cl15.String("range by",8));
    assert($$$cl15.Range($$$cl15.Integer(2),$$$cl15.Integer(11)).by($$$cl15.Integer(3)).getString().equals($$$cl15.String("{ 2, 5, 8, 11 }",15)),$$$cl15.String("range by",8));
    assert($$$cl15.Range($$$cl15.Integer(0),$$$cl15.Integer(9)).by($$$cl15.Integer(4)).getString().equals($$$cl15.String("{ 0, 4, 8 }",11)),$$$cl15.String("range by",8));
    assert($$$cl15.Range($$$cl15.Integer(2),$$$cl15.Integer(11)).by($$$cl15.Integer(4)).getString().equals($$$cl15.String("{ 2, 6, 10 }",12)),$$$cl15.String("range by",8));
    assert($$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(10)).getString().equals($$$cl15.String("1..10",5)),$$$cl15.String("range.string",12));
    
    //AttributeDeclaration r1 at entries.ceylon (124:4-124:18)
    var $r1=$$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(5));
    function getR1(){
        return $r1;
    }
    assert(getR1().getSize().equals($$$cl15.Integer(5)),$$$cl15.String("range.size",10));
    
    //AttributeDeclaration r2 at entries.ceylon (126:4-126:19)
    var $r2=$$$cl15.Range($$$cl15.Integer(7),$$$cl15.Integer(4));
    function getR2(){
        return $r2;
    }
    assert(getR2().getSize().equals($$$cl15.Integer(4)),$$$cl15.String("range.size",10));
    
    //AttributeDeclaration r3 at entries.ceylon (128:4-128:22)
    var $r3=$$$cl15.Range($$$cl15.Integer(10).getNegativeValue(),$$$cl15.Integer(5).getNegativeValue());
    function getR3(){
        return $r3;
    }
    assert(getR3().getSize().equals($$$cl15.Integer(6)),$$$cl15.String("range.size",10));
    
    //AttributeDeclaration r4 at entries.ceylon (130:4-130:23)
    var $r4=$$$cl15.Range($$$cl15.Integer(123),$$$cl15.Integer(123));
    function getR4(){
        return $r4;
    }
    assert(getR4().getSize().equals($$$cl15.Integer(1)),$$$cl15.String("range.size",10));
    assert(getR1().includes($$$cl15.Integer(3)),$$$cl15.String("range.includes",14));
    assert(getR1().includes($$$cl15.Integer(6)).equals($$$cl15.getFalse()),$$$cl15.String("range.includes",14));
    assert(getR2().includes($$$cl15.Integer(5)),$$$cl15.String("range.includes",14));
    assert(getR2().includes($$$cl15.Integer(3)).equals($$$cl15.getFalse()),$$$cl15.String("range.includes",14));
    assert(getR4().getFirst().equals(getR4().getLast()),$$$cl15.String("range first == last",19));
    assert(getR1().equals(getR2()).equals($$$cl15.getFalse()),$$$cl15.String("range.equals",12));
    assert(getR1().equals($$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(5))),$$$cl15.String("range.equals",12));
    
    //AttributeDeclaration r1r at entries.ceylon (139:4-139:23)
    var $r1r=getR1().getRest();
    function getR1r(){
        return $r1r;
    }
    
    //AttributeDeclaration r2r at entries.ceylon (140:4-140:23)
    var $r2r=getR2().getRest();
    function getR2r(){
        return $r2r;
    }
    assert(getR1r().getSize().equals(getR1().getSize().minus($$$cl15.Integer(1))),$$$cl15.String("range.rest.size 1",17));
    assert(getR2r().getSize().equals(getR2().getSize().minus($$$cl15.Integer(1))),$$$cl15.String("range.rest.size 2",17));
    assert(function($){return $!==null?$:$$$cl15.Integer(0)}(getR1r().getFirst()).equals(function($){return $!==null?$:$$$cl15.Integer(1)}(getR1().item($$$cl15.Integer(1)))),$$$cl15.String("range.rest.first",16));
    assert(function($){return $!==null?$:$$$cl15.Integer(0)}(getR2r().getFirst()).equals(function($){return $!==null?$:$$$cl15.Integer(1)}(getR2().item($$$cl15.Integer(1)))),$$$cl15.String("range.rest.first",16));
    assert($$$cl15.nonempty(getR4().getRest()),$$$cl15.String("nonempty range.rest",19));
    assert(getR1().getLastIndex().equals($$$cl15.Integer(4)),$$$cl15.String("range.lastIndex",15));
    assert(getR2().getLastIndex().equals($$$cl15.Integer(3)),$$$cl15.String("range.lastIndex",15));
    assert(getR1().by($$$cl15.Integer(2)).getString().equals($$$cl15.String("{ 1, 3, 5 }",11)),$$$cl15.String("range.by",8));
    assert(getR1().by($$$cl15.Integer(3)).getString().equals($$$cl15.String("{ 1, 4 }",8)),$$$cl15.String("range.by",8));
    assert(getR2().by($$$cl15.Integer(2)).getString().equals($$$cl15.String("{ 7, 5 }",8)),$$$cl15.String("range.by",8));
    assert(getR2().by($$$cl15.Integer(3)).getString().equals($$$cl15.String("{ 7, 4 }",8)),$$$cl15.String("range.by",8));
    assert(getR4().by($$$cl15.Integer(10)).getString().equals($$$cl15.String("123..123",8)),$$$cl15.String("range.by",8));
    assert(getR1().segment($$$cl15.Integer(2),$$$cl15.Integer(2)).getString().equals($$$cl15.String("3..4",4)),$$$cl15.String("range.segment",13));
    assert($$$cl15.nonempty(getR1().segment($$$cl15.Integer(1),$$$cl15.Integer(0))).equals($$$cl15.getFalse()),$$$cl15.String("range.segment",13));
    assert(getR1().segment($$$cl15.Integer(1),$$$cl15.Integer(1).getNegativeValue()).getEmpty(),$$$cl15.String("range.segment",13));
    assert(getR1().segment($$$cl15.Integer(3),$$$cl15.Integer(1)).getString().equals($$$cl15.String("4..4",4)),$$$cl15.String("range.segment",13));
    assert(getR1().segment($$$cl15.Integer(0),$$$cl15.Integer(1)).getString().equals($$$cl15.String("1..1",4)),$$$cl15.String("range.segment",13));
    assert(getR1().span($$$cl15.Integer(1),$$$cl15.Integer(3)).getString().equals($$$cl15.String("2..4",4)),$$$cl15.String("range.span",10));
    assert(getR1().span($$$cl15.Integer(3),$$$cl15.Integer(1)).getString().equals($$$cl15.String("4..2",4)),$$$cl15.String("range.span",10));
    assert(getR1().span($$$cl15.Integer(2),$$$cl15.Integer(2)).getString().equals($$$cl15.String("3..3",4)),$$$cl15.String("range.span",10));
    assert(getR1().span($$$cl15.Integer(3),$$$cl15.getNull()).getString().equals($$$cl15.String("4..5",4)),$$$cl15.String("range.span",10));
    assert(getR1().span($$$cl15.Integer(3),$$$cl15.Integer(1000)).getString().equals($$$cl15.String("4..5",4)),$$$cl15.String("range.span",10));
    assert(getR1().span($$$cl15.Integer(0),$$$cl15.Integer(0)).getString().equals($$$cl15.String("1..1",4)),$$$cl15.String("range.span",10));
    assert($$$cl15.nonempty($$$cl15.Range($$$cl15.Integer(1),$$$cl15.Integer(2)).span($$$cl15.Integer(4),$$$cl15.Integer(5))).equals($$$cl15.getFalse()),$$$cl15.String("range.span (out of bounds)",26));
    assert(getR1().definesEvery($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3)])),$$$cl15.String("range.definesEvery",18));
    assert(getR1().definesEvery($$$cl15.ArraySequence([$$$cl15.Integer(4),$$$cl15.Integer(5),$$$cl15.Integer(6),$$$cl15.Integer(7)])).equals($$$cl15.getFalse()),$$$cl15.String("range.definesEvery",18));
    assert(getR1().definesAny($$$cl15.ArraySequence([$$$cl15.Integer(1),$$$cl15.Integer(2),$$$cl15.Integer(3)])),$$$cl15.String("range.definesAny",16));
    assert(getR1().definesAny($$$cl15.ArraySequence([$$$cl15.Integer(7),$$$cl15.Integer(6),$$$cl15.Integer(5)])).equals($$$cl15.getFalse()),$$$cl15.String("range.definesAny",16));
    assert(getR1().definesAny($$$cl15.ArraySequence([$$$cl15.Integer(6),$$$cl15.Integer(5),$$$cl15.Integer(4)])),$$$cl15.String("range.definesAny",16));
    
    //AttributeDeclaration sum at entries.ceylon (170:4-170:29)
    var $sum=$$$cl15.Integer(0);
    function getSum(){
        return $sum;
    }
    function setSum(sum){
        $sum=sum; return sum;
    }
    (function(){
        var _iter = getR1().getIterator();
        var _item;
        while ((_item = _iter.next()) !== $$$cl15.getExhausted()){
            function getX(){ return _item; }
            (setSum(getSum().plus(getX())),getSum());
        }
    }());
    
    assert(getSum().equals($$$cl15.Integer(15)),$$$cl15.String("range iteration",15));
    test_entries_function();
}
