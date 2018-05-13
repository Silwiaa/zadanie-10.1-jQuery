$(function(){
    var span = $('span');
    
    span.each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        }     
    });

    var paragraphs = $('p');
    
    paragraphs.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';            
        $(element).append(button);
    }).css('padding', '10px');
    
     $('button').click(function() {
        alert($(this).attr('data-tmp'));
     }).css('margin-left', '10px');
});