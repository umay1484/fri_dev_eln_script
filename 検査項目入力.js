importClass(java.util.HashMap);
importClass(java.util.ArrayList);
importPackage(Packages.httpRequest);
var req      =    new HttpRequest();
var fm             =    sdk.getBean("FormManager");

function removeAll(){
	try {
		if(fm.existsField("F01328.entryTable")){
			var tbl    =    fm.getField("F01328.entryTable");
			tbl.removeAll(false);
		}
			       var lFormName =    new ArrayList();
                   lFormName.add("F0132");
                   lFormName.add("F0133");
                   lFormName.add("F0134");
                   lFormName.add("F0135");
                   lFormName.add("F0136");
                   lFormName.add("F0137");
                   lFormName.add("F0138");
                   lFormName.add("F0139");
                   lFormName.add("F01310");
                   lFormName.add("F01311");
                   lFormName.add("F01312");
                   lFormName.add("F01313");
                   lFormName.add("F01314");
                   lFormName.add("F01315");
                   lFormName.add("F01316");
                   lFormName.add("F01317");
                   lFormName.add("F01318");
                   lFormName.add("F01319");
                   lFormName.add("F01320");
                   lFormName.add("F01321");
                   lFormName.add("F01322");
                   lFormName.add("F01323");
                   lFormName.add("F01324");
                   lFormName.add("F01325");
                   lFormName.add("F01327");
		for (var i = 0; i < lFormName.size(); i++) { 
			for (var j = 1; j <= 4; j++) { 
	            var obj                        =    fm.getField(lFormName.get(i) + ".i" + j );
				var cObj                       =    fm.getField(lFormName.get(i) + ".c" + j );
				obj.value                      =    null;
				obj.label                      =    null;
				obj.visible                    =    false;
				cObj.visible                   =    false;
			}
		}
	} catch (e) {
		alert(e);
	}
}

try {
    var cCode    =    D001.F001.customerCode.value;
    if (!isNaN(cCode) && cCode > -1) {
        cCode               =    parseInt(cCode, 10);
        var maxEntry         =    100;
		var list             =    req.openIIIDialog(cCode);
	    if (list != null && !list.isEmpty()) {
				   list          =    list.size() > 100 ? new ArrayList(list.subList(0, 100)) : list;
	    	       var lFormName =    new ArrayList();
                   var lItem     =    new ArrayList();
                   lFormName.add("F0132");
                   lFormName.add("F0133");
                   lFormName.add("F0134");
                   lFormName.add("F0135");
                   lFormName.add("F0136");
                   lFormName.add("F0137");
                   lFormName.add("F0138");
                   lFormName.add("F0139");
                   lFormName.add("F01310");
                   lFormName.add("F01311");
                   lFormName.add("F01312");
                   lFormName.add("F01313");
                   lFormName.add("F01314");
                   lFormName.add("F01315");
                   lFormName.add("F01316");
                   lFormName.add("F01317");
                   lFormName.add("F01318");
                   lFormName.add("F01319");
                   lFormName.add("F01320");
                   lFormName.add("F01321");
                   lFormName.add("F01322");
                   lFormName.add("F01323");
                   lFormName.add("F01324");
                   lFormName.add("F01325");
                   lFormName.add("F01327");
                   //lFormName.add("F01328");
                   
                   if(fm.existsField("F01328.entryTable")){
                   	 var tbl    =    fm.getField("F01328.entryTable");
                   	   var isLClass   =    false;
                       var isMClass   =    false;
                       var isSClass   =    false;
                   	 for (var i = 0; i < list.size(); i++) {  
                       	   var _mObj    =    list.get(i);
                           isLClass      =    _mObj.containsKey("DBM_DBK");
                           isMClass      =    _mObj.containsKey("TBM_TBK");
                           isSClass      =    _mObj.containsKey("SBM_SBK");
                   	   }

                   	   if ((isLClass && _mObj.get("DBM_DBK")) || (isMClass && _mObj.get("TBM_TBK")) || (isSClass && _mObj.get("SBM_SBK")) /*|| LargeClassification.value != null || MiddleClassification.value != null || SmallClassification.value != null*/) {
	                   	   removeAll();
	                   }

                       for (var i = 0; i < tbl.rowCount; i++) { 
                           var mEnt    =    new HashMap();
		     				mEnt.put("itemcd",  tbl.getField(i, 1).value);
                           lItem.add(mEnt.get("itemcd"));
                       }
                       var addCnt    =    1;
                       var lName      =    null;
                       var mName      =    null;
                       var sName      =    null;
                       var lCode      =    null;
                       var mCode      =    null;
                       var sCode      =    null;
                       isLClass   =    false;
                       isMClass   =    false;
                       isSClass   =    false;
                       for (var i = 0; i < list.size(); i++) {  
                          var itemCnt          =    (lItem.size() + addCnt);
                          var itemBaseCnt    =    Math.ceil(itemCnt / 4) -1;
	                      if (itemBaseCnt > 24) {
	                      	  continue;
	                      }
                          var itemFCnt         =    itemCnt % 4;
                          itemFCnt              = itemFCnt == 0 ? 4 : itemFCnt; 
                          var itemFName      =    lFormName.get(itemBaseCnt);
                           var _mObj    =    list.get(i);
                           isLClass      =    _mObj.containsKey("DBM_DBK");
                           isMClass      =    _mObj.containsKey("TBM_TBK");
                           isSClass      =    _mObj.containsKey("SBM_SBK");
                           lName         =    isLClass ? _mObj.get("DBM_DBM") : null;
                           mName         =    isMClass ? _mObj.get("TBM_TBM") : null;
                           sName         =    isSClass ? _mObj.get("SBM_SBM") : null;
                           lCode         =    isLClass ? _mObj.get("DBM_DBK") : null;
                           mCode         =    isMClass ? _mObj.get("TBM_TBK") : null;
                           sCode         =    isSClass ? _mObj.get("SBM_SBK") : null;
                           var num       =    i+1;
                           var itemcd    =    _mObj.get("ITEM_ITEMCD");
                           var itemm    =    _mObj.get("ITEM_NM2K");
                           var itemgi    =    _mObj.get("ITEM_GAICD");
                           var itemkm   =    _mObj.get("ITEM_KMSYU");
                           var itemkb    =    _mObj.get("ITEM_KBUNCD");
                           var itemsy    =    _mObj.get("ITEM_SYDY");
                           var itemrf    =    _mObj.get("ITEM_DSRF");
                           var itemkf    =    _mObj.get("ITEM_DHKF");
                           if (!lItem.contains(itemcd)) {
                               if ((lItem.size() + addCnt ) <= maxEntry) {
                                   if (tbl.rowCount < itemCnt) {
                                       tbl.add();
                                   }
                                   tbl.getField(tbl.rowCount - 1, 0).value    =    itemm;//項目
                                   tbl.getField(tbl.rowCount - 1, 1).value    =    itemcd;//項目
                                   tbl.getField(tbl.rowCount - 1, 2).value    =    itemsy;//所要日数
                                   tbl.getField(tbl.rowCount - 1, 3).value    =    itemkb;//区分
                                   tbl.getField(tbl.rowCount - 1, 4).value    =    itemgi;//外注
                                   tbl.getField(tbl.rowCount - 1, 5).value    =    itemkm;//種別
                                   tbl.getField(tbl.rowCount - 1, 6).value    =    itemrf;//請求フラグ
                                   tbl.getField(tbl.rowCount - 1, 7).value    =    itemkf;//報告フラグ
                                   var obj                         =    fm.getField(itemFName + ".i" + itemFCnt );
                                   var cObj                       =    fm.getField(itemFName + ".c" + itemFCnt );
                                   obj.parentForm.visible    =    true;
                                   obj.value                      =    itemm;
                                   obj.label                       =    itemcd;
                                   obj.visible                     =    true;
                                   obj.labelVisible                 = true;
                                   obj.labelHorizontalAlignment     = "LEFT";
                                   obj.labelPosition                = "TOP";
			  obj.maxSize                    =    40;
                                   cObj.visible                   =    true;
                                   addCnt++;
                               }
                           }
                       }
if (lName || mName || sName) {
                       LargeClassification.value     =    lName;
                       MiddleClassification.value    =    mName;
                       SmallClassification.value     =    sName;
                       LargeClassification.label     =    lCode;
                       MiddleClassification.label    =    mCode;
                       SmallClassification.label     =    sCode;
}
/*
                       if ( lItem.size() + addCnt + (addCnt > 1 ? - 1 : 0) >= maxEntry){
                           alert("検査項目の最大設定数を超えました※1検体につき" + maxEntry + "個まで設定可能");
                       }
*/
                   }
	    }
    }
} catch (e) {
    alert(e);
}
