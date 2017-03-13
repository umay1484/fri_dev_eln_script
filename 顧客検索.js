try{
	importClass(java.util.HashMap);
	importClass(java.util.ArrayList);
	importPackage(Packages.httpRequest);
	var req           =    new HttpRequest();
	var mResult    = req.openCCDialog();
    if (mResult != null && !mResult.isEmpty()) {
        if (mResult.containsKey("CSTM_NAMEK") && mResult.get("CSTM_NAMEK") != null) {
            customerName.value    =    mResult.get("CSTM_NAMEK");
        }
	if (mResult.containsKey("CSTM_CSCD") && mResult.get("CSTM_CSCD") != null) {
            customerCode.value    =    mResult.get("CSTM_CSCD");
        }
    }
} catch(e) {
	alert(e);
}
