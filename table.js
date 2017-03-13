function isEmpty(val) {
    if (!val) {
        if (!((val === 0) || (val === false))) {
            return true;
        }
    }
    return false;
}

var debugFlg = false;

try {
    var pTTT = sdk.getBean("FormManager").getField("plasticTransparencyTestTable");
    var cnt = 0;
    var maxRow = pTTT.rowCount;
    var wlCol = 1;
    var sum = 0;
if(debugFlg) alert( "pTTT = " + pTTT + "\n"
                  + "cnt = " + cnt + "\n"
                  + "maxRow = " + maxRow + "\n"
                  + "wlCol = " + maxRow + "\n"
                  + "sum = " + maxRow + "\n");
    for(cnt=0; cnt < maxRow; cnt++){
        pTTT.getField(cnt,wlCol).value = 53 + cnt; 
        sum += pTTT.getField(cnt,wlCol).value;
    }

    plasticTransparencyTestTransmittance.value = sum / (maxRow);
    
} catch (e) {
    alert(e);
}