$('document').ready(function(){
    var tomb = new Array();
    for(var i=0; tomb.length != 6 ; i++){
        var x = Math.floor(Math.random() * 3)+1;
        var counter = 0;
        for(var j = 0; j < tomb.length; j++){
            if(tomb[j]==x){
                counter++;
            }
        }
        if(counter<2){
            tomb.push(x);
        }
    }
    
    var clickCounter=0;
    var clicks = new Array();
    var clickDisabled = false;
    $('img').click(function(){
        if (clickDisabled){
            return;
        }

        if(clickCounter % 2 == 0){
            $('.clear').text("Kattintson a második kártya hátlapjára a megfordításához!");
        }else{
            $('.clear').text("Kattintson az első kártya hátlapjára a megfordításához!");
        }

        var id = parseInt($(this).attr('id'));
        if(tomb[id]==1){
            if($(this).attr('src')!="js.png"){
                $(this).attr('src','js.png');
                $(this).addClass('blue');
                clickCounter++;
                clicks.push(id);
            }
        }
        else if(tomb[id]==2){
            if($(this).attr('src')!="css3.png"){
                $(this).attr('src','css3.png');
                $(this).addClass('blue');
                clickCounter++;
                clicks.push(id);
            }
        }
        else if(tomb[id]==3){
            if($(this).attr('src')!="html5.png"){
                $(this).attr('src','html5.png');
                $(this).addClass('blue');
                clickCounter++;
                clicks.push(id);
            }
        }


        if(clickCounter % 2 == 0){
            clickDisabled = true;
            setTimeout(function(){clickDisabled = false;}, 1000);
            
            if(tomb[clicks[clicks.length-1]]!=tomb[clicks[clicks.length-2]]){
                $('.clear').text("Nem egyeznek a kártyák, visszafordítjuk őket!");
                setTimeout(function() {
                    $('#' + clicks[clicks.length-1]).attr('src', 'web.png');}, 1000);
                setTimeout(function() {
                    $('#' + clicks[clicks.length-2]).attr('src', 'web.png');}, 1000);

                setTimeout(function() {
                    $('#' + clicks[clicks.length-1]).removeClass('blue');}, 1000);
                
                setTimeout(function() {
                    $('#' + clicks[clicks.length-2]).removeClass('blue');}, 1000);
                
                //visszaforgatni mert nem jó
            }else{
                $('.clear').text("Megtalált egy kártyapárt!");
                setTimeout(function() {
                    $('#' + clicks[clicks.length-1]).removeClass('blue');}, 1000);
                
                setTimeout(function() {
                    $('#' + clicks[clicks.length-2]).removeClass('blue');}, 1000);

                $('#' + clicks[clicks.length-1]).addClass('orange');
                $('#' + clicks[clicks.length-2]).addClass('orange');
            }
            setTimeout(function(){$('.clear').text("Kattintson az első kártya hátlapjára a megfordításához!");}, 1000);

            var tmb = new Array();
            $('img').each(function(){
                tmb.push($(this).attr('src'));
            })
            var win=true;
            for(var i = 0;i<tmb.length;i++){
                if(tmb[i]=="web.png"){
                    win=false;
                }
            }
            if(win){
                setTimeout(function(){$('.clear').text("Gratulálunk, Ön megtalálta az összes párt " + clickCounter + " fordítással!");}, 1000);
                setTimeout(function(){$('.clear').append('<br><button id="restart">Újra!</button>');}, 1000);
            }
        }
    });

    $('body').on('click', '#restart', function(){
        location.reload();
    });


    
})