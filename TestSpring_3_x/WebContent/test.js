var qiuhe = function() {
    var shuiru1 = document.getElementById("shuiru1");
    var jiashui1 = Number(shuiru1.value);
    var shuiru2 = document.getElementById("shuiru1");
    var jiashui2 = Number(shuiru2.value);

    var he = jiashui1 + jiashui2;
    var dom = document.getElementById("jieguo");
    dom.innerHTML = he;
}
var add = function(ab) {
    var c = a + b;
    return c;
}
var res=add(3,2)
alert("aa");