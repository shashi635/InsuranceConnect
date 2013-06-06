$(document).ready(function () {

    for (var i = 1; i < 6; i++) {
        $("#hTopic" + i + "").html("In jQuery Mobile, you can use new HTML5 input types such as email, tel, number, and more");
        $("#category" + i + "").html("HTML5");
        $("#pOwner" + i + "").html("D Talukdar - 04/26/2012");
        $("#spnCount" + i + "").html("7");
    }

    //$("#liDiscussion" + 1 + "").hide();

    $('#btnLogin').on('click',function () {
        debugger;
        window.location.assign("Home.htm");
    });

});