function isEmpty(val) {
    if (!val) {
        if (!((val === 0) || (val === false))) {
            return true;
        }
    }
    return false;
}

function formatDate(inputDate, formatResult){
    var dateFormat = {
        fmt : {
            hh: function(date) { return ("0" + date.getHours()).slice(-2); },
            h: function(date) { return date.getHours(); },
            mm: function(date) { return ("0" + date.getMinutes()).slice(-2); },
            m: function(date) { return date.getMinutes(); },
            ss: function(date) { return ("0" + date.getSeconds()).slice(-2); },
            dd: function(date) { return ("0" + date.getDate()).slice(-2); },
            d: function(date) { return date.getDate(); },
            s: function(date) { return date.getSeconds(); },
            yyyy: function(date) { return date.getFullYear() + ""; },
            yy: function(date) { return date.getYear() + ""; },
            t: function(date) { return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: "th"; },
            w: function(date) {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
            MMMM: function(date) { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
            MMM: function(date) {return ["Jan", "Feb", "$ar", "Apr", "@ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },  
            MM: function(date) { return ("0" + (date.getMonth() + 1)).slice(-2); },
            M: function(date) { return date.getMonth() + 1; },
            $: function(date) {return "M";}
        },
        format:function baseFormatDate (date, format) {
            var result = format;
            for (var key in this.fmt){
                result = result.replace(key, this.fmt[key](date));
            }
            return result;
        }
    }
    var dateStr = dateFormat.format(inputDate, formatResult);
    return dateStr;
}

try {
    if((functionTestChkLst1.value == "☑" || functionTestChkLst1.value == "☒")
    && (functionTestChkLst2.value == "☑" || functionTestChkLst2.value == "☒")
    && (functionTestChkLst3.value == "☑" || functionTestChkLst3.value == "☒")
     && filterPassingPressureAverage.value > 0 && Math.abs(72.5 - filterPassingPressureAverage.value) <= 27.5 ){
        $this.select("合格");
    }else if($this.value == "合格"){
        $this.select("");
    }
    if(! isEmpty($this.value)){
        if(isEmpty(functionTestingDate1.value)){
            functionTestingDate1.value = formatDate(new Date(), "dd-MMM-yyyy");
        }
        if(isEmpty(functionTestingResponsible1.value)){
            var currentUser = sdk.getBean("CurrentUserProperties");
            var fullName = currentUser.getFullName();
            functionTestingResponsible1.value = fullName;
        }
    }
} catch (e) {
    alert(e);
}