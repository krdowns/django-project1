$("a.button").hover(function() {
    $(this).siblings(".unchecked").addClass(".checked");
}, function() {
    $(this).siblings(".unchecked").removeClass(".unchecked");
});

$("a.button").hover(function() {
    $(this).siblings(".checked").addClass(".unchecked");
}, function() {
    $(this).siblings(".checked").removeClass(".checked");
});