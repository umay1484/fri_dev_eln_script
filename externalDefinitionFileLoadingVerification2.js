importPackage(Packages.test);
var req = new Test();


eval(req.readAll());
try {
    var foo = new Foo();
    if(foo.isEmpty(str1.value)){
        str1.value = "test";
    }
} catch (e) {
    alert(e);
}