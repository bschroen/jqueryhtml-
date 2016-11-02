$(document).ready(function () {

  $("#add").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".check").append('<div class="item">' + toAdd + '</div>');
    });

   $("#add").bind("click", function() {
        $("input[type=text], textarea").val("");
    });

    $(document).on("click",".item",function () {
        $(this).remove()
    });

});