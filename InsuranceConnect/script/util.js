function setSessionObject(sessionObject) {
    debugger;
    if (sessionObject == null) {
        var sessionObject = new Object();
        sessionObject.u = "";
        sessionObject.p = "";
        sessionObject.surl = document.location.href; //  this.startPage;
        sessionObject.purl = "home.htm";
        sessionObject.curl = "home.htm";
        sessionObject.status = false;
    }
    if (typeof (sessionStorage) == 'undefined') {
        $("#hdnAuthenticate").val(JSON.stringify(sessionObject));
        //        alert('Your browser does not support HTML5 sessionStorage. Try upgrading.');
    } else {
        sessionStorage.setItem("loggedInUser", JSON.stringify(sessionObject));
    }
}
function loadChildPage(pagename) {
    //pagename with htm
    
    if (isAuthenticated() == true) {
     
            var obj = getSessionObject();
            obj.curl = pagename;
            setSessionObject(obj);
            window.navigate(pagename);
            $('#lblLogedinUserGroup').text(obj.Name);
    }
  
       
    
}
function isAuthenticated() {
    debugger;
    var auth = getSessionObject();

    if ((auth != undefined)) {
        if ((auth.status == true)) {
            if (MasterAuthenticate(auth.u, auth.p) == true) {
                return true;
            }
            else return false;
        }
        else return false;
    }
    else return false;
}
function MasterAuthenticate(uid, pwd) {

    var len = 6; //represent length of char for userid/password        
    var r = (pwd !== "") && (uid !== "") ? true : false;
    var l = ((pwd.length >= len) && (uid.length >= len) ? true : false);
    var res = false;
    if (r == true) {
        if (l == true) res = true;
        else res = false;
    }
    else {
        //setError("Blank value not allowed !");
        res = false;
    }
    return res;
}

function getSessionObject() {
    if (typeof (sessionStorage) == 'undefined') {
        if ($("#hdnAuthenticate").val() != '') {
            return eval("(" + $("#hdnAuthenticate").val() + ')');
        }
    }
    else {
        if (sessionStorage.getItem("loggedInUser") != null) {
            return JSON.parse(sessionStorage.getItem("loggedInUser"));
        }
    }
}