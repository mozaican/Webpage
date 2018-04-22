setInterval(function () {
    ticker();
}, (1000));

function ticker() {
    var options = $('#options');
    var elements = options.children();
    $(elements[0]).fadeOut('slow', function () {
        options.append($(this));
        $(elements[1]).show();
    });
}