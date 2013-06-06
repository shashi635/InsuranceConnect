$(document).ready(function () {

    getTopic("104");
    var noOfReplies = 0;
    //    $(document).bind('mobileinit', function () {
    //        $.mobile.loader.prototype.options.theme = "a";
    //    });

    //            var replies = "<div data-role=\"collapsible\" data-collapsed=\"false\" data-theme=\"b\" data-content-theme=\"e\">       <h3>Ravi Bhushan - 04/26/2012: I'm the collapsible content with a themed content block set to \"B\".</h3>       <h5>I'm the collapsible content with a themed content block set to \"B\".</h5>    </div>    <div data-role=\"collapsible\" data-collapsed=\"true\" data-theme=\"b\" data-content-theme=\"b\">       <h3>Rohit Bansal - 04/26/2012: I'm the collapsible content with a themed content block set to \"B\".</h3>       <h5>I'm the collapsible content with a themed content block set to \"B\".</h5>    </div>    <div data-role=\"collapsible\" data-collapsed=\"true\" data-theme=\"b\" data-content-theme=\"b\">       <h3>Gaurav Kumar - 04/26/2012: I'm the collapsible content with a themed content block set to \"B\".</h3>       <h5>I'm the collapsible content with a themed content block set to \"B\".</h5>    </div>";
    //            var reply1 = "<h3>Ravi Bhushan - 04/26/2012: I'm the collapsible content with a themed content block set to \"B\".</h3>       <h5>I'm the collapsible content with a themed content block set to \"B\".</h5>";

    //            $('#reply').append(reply1);
    //            $('#reply').trigger('enhance');
    //            $('#dvReplies').html(replies);
    //            $('#dvReplies').trigger('create');

    //            $('#header1').append("I'm the collapsible content with a themed content block set to \"B\".");
    //            $('#header1').trigger('create');
    //            $('#content1').append("I'm the collapsible content with a themed content block set to \"B\".");
    //            $('#body1').trigger('create');
    $('#dvPostReply').hide();

    var rply = "<div class=\"ui-bar ui-bar-b\" id=\"header6\">S B Singh - 04/26/2012:</div>            <div class=\"ui-body ui-body-d\" id=\"body6\"><small id=\"reply6\">supported in iOS5. As of version 1.1, jQuery Mobile no longer uses this CSS property at all. We've removed all internal usage of this property</small></div>            <br />";
    rply += "<div class=\"ui-bar ui-bar-b\" id=\"header7\" onclick=\"$('#body7').toggle();\">S B Singh - 04/26/2012:</div>            <div class=\"ui-body ui-body-d\" id=\"body7\"><small id=\"reply7\">supported in iOS5. As of version 1.1, jQuery Mobile no longer uses this CSS property at all. We've removed all internal usage of this property</small></div>            <br />";

    $('#dvReplies').append(rply);
    for (var i = 2; i < 8; i++) {
        $('#body' + i + '').toggle();
    }

    //$('#body'+7+'').toggle();
    //            $('#header1').click(function () {
    //                $('#body1').toggle();
    //            });
    $('#header2').click(function () {
        $('#body2').toggle();
    });
    $('#header3').click(function () {
        $('#body3').toggle();
    });
    $('#header4').click(function () {
        $('#body4').toggle();
    });
    $('#header5').click(function () {
        $('#body5').toggle();
    });
    $('#header6').click(function () {
        $('#body6').toggle();
    });
    //            $('#header7').click(function () {
    //                $('#body7').toggle();
    //            });


    $('#btnReply').click(function () {
        $('#taPostReply').val('');
        $('#taPostReply').css('height', '5em');
        $('#taPostReply').css('width', '95%');
        $('#dvPostReply').show();
    });
    $('#btnPostReply').click(function () {
        var rply = "<div class=\"ui-bar ui-bar-b\" id=\"header7\" onclick=\"$('#body7').toggle();\">S B Singh - 04/26/2012:</div>            <div class=\"ui-body ui-body-d\" id=\"body7\"><small id=\"reply7\">supported in iOS5. As of version 1.1, jQuery Mobile no longer uses this CSS property at all. We've removed all internal usage of this property</small></div>            <br />";
        rply += $('#dvReplies').html();
        $('#dvReplies').html("");
        $('#dvReplies').append(rply);
        $('#dvPostReply').hide();
    });

    $('#btnCancelReply').click(function () {
        $('#dvPostReply').hide();
    });
    $('#btnNext').click(function () {
        $('#header1').focus();
    });


});


function getTopic(topicID) {
    $.ajax({
        type: "GET",
        url: '../Service/associatemobile.svc/discussion/' + topicID,
        contentType: 'application/json; charset=utf-8',
        //  dataType: 'json',
        success: function (result) {
            result.uid = uid;
            callbackTopic(result);
        },
        error: function (e, xhr) {
            errorcallback(e, xhr);
        }
    });
}

function callbackTopic(result) {

    var topicData = result;
    if (topicData != null) {

        $('#topicHeader').html(topicData.TopicHeader);
        
        var topic_text = '';
        topic_text = topic_text + '<tr><td colspan="4" style="width:100%;">&nbsp;</td></tr>';
        topic_text = topic_text + '<tr class="header1">';
        topic_text = topic_text + '<td colspan="2" align="left" width="60%"><label class="topicHeader">' + topicData.TopicHeader.substr(0, 40) + '..</label></td>';
        topic_text = topic_text + '<td  style=""width:20%; text-align:center;"><label class="topicHeader1">' + topicData.Category.CategoryDesc + '</label></td>';
        topic_text = topic_text + '<td  style=""width:20%; text-align:center;"><label class="topicHeader2"><a  href="#" id="lnktopicid' + topicData.TopicID + '-' + topicData.CreatedBy + '" class="linkAssociateNameMenu" >' + topicData.CreatedByname + '</a></label></td>';
        topic_text = topic_text + '</tr>';
        topic_text = topic_text + '<tr>';
        topic_text = topic_text + '<td colspan="4" style="width:100%; font:calibri;"><label class="topicHeader2">' + topicData.TopicDesc + '</label></td>';
        topic_text = topic_text + '</tr>';
        topic_text = topic_text + '<tr style="background-color:#EFEFEF; vertical-align:bottom;">';
        topic_text = topic_text + '<td align="left" style="width:30%;"><label class="topicFooter1">Replies : ' + topicData.CommentCount + '</label></td>';
        topic_text = topic_text + '<td align="center" colspan="2"><label class="topicFooter2">Date:' + topicData.PostDateTimeString + '</label></td>';
        topic_text = topic_text + '<td align="right" style="width:20%; font:calibri;"><img alt="Reply" src="Images/reply.bmp" class="imgMenuBtn" onclick="replyToPostQueryDetails(\'forumDetailDivReplyToPost\',\'' + topicData.TopicID + '\');" /></td>';
        topic_text = topic_text + '</tr>';
        topic_text = topic_text + '<tr style="background-color:#F2F2F2;">';
        topic_text = topic_text + '<td colspan="4" align="left" style="width:100%;"> <hr> </td>';
        topic_text = topic_text + '</tr>';

        $("#topic").html($(topic_text));
        $(".linkAssociateNameMenu").click(function (e) {
            showAssociatePopUpdiv(e);
        });
    }
}

function getRepliesToTopic(topicID) {
    $.ajax({
        type: "GET",
        url: '../Service/associatemobile.svc/discussion/' + topicid,
        contentType: 'application/json; charset=utf-8',
        //  dataType: 'json',
        success: function (result) {
            result.uid = uid;
            callbackTopic(result);
        },
        error: function (e, xhr) {
            errorcallback(e, xhr);
        }
    });
}