function isEmpty(val) {
    if (!val) {
        if (!((val === 0) || (val === false))) {
            return true;
        }
    }
    return false;
}
var debugFlg = true;
try {
    var result = $this.value;
    if($this.value == "20"){
        samplingNumber.value = 6;
    }else if($this.value == "5" 
          || $this.value == "10"){
        samplingNumber.value = 12;
    }else{
        samplingNumber.valueObject = null;
    }
} catch (e) {
    alert(e);
}