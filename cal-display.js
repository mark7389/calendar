var currentYear = moment().year();
var currentMonth = moment().month();
console.log(currentMonth);
generateCalendar(currentYear, currentMonth);
    
$(".findYM").on("click", function(){
        
        var colors = ["#fec45e", "#a24467", "#486b23" ];
        var cIndex = Math.floor(Math.random()*(2));
        findYearMonth($(this));
        $(".panel-heading").css({"background":colors[cIndex]});
});




function findYearMonth(element){
    
    var year, month;
    if(element.attr("id") === "nextYear"){

        year = parseInt($("#yr").text())+1;
        month = parseInt($("#mnth").data("value"));
        
        
    }
    else if(element.attr("id") === "previousYear"){
        year = parseInt($("#yr").text())-1;
        month = parseInt($("#mnth").data("value"));
        
        
        
    }
    else if(element.attr("id") === "previousMonth"){
        
      switch (parseInt($("#mnth").attr("data-value"))) {

          case 0: year = parseInt($("#yr").text())-1;month = 11;
          break;
          default: year = parseInt($("#yr").text());
                   month = parseInt($("#mnth").attr("data-value"))-1;
          break;
      }
       
    }
    else if(element.attr("id") === "nextMonth"){
          switch (parseInt($("#mnth").attr("data-value"))) {

              case 11: year = parseInt($("#yr").text())+1;month = 0;
              break;
              default: year = parseInt($("#yr").text());
                       month = parseInt($("#mnth").attr("data-value"))+1;
              break;
          }
    }
    generateCalendar(year, month);
    return false;

}

function generateCalendar(year,month){

    $(".grid").empty();

    var calendar = new Calendar(year, month);

    $("#yr").attr("data-value", year.toString()).text(year);
    $("#mnth").attr("data-value", month.toString()).text(calendar.months[parseInt(month)]);
    var c = 0;
    var rowCtr = 0;
    for(var i=0; i<7*6; i++){

        switch(i){

            case 7: rowCtr++;
            break;
            case 14: rowCtr++;
            break;
            case 21: rowCtr++;
            break;
            case 28: rowCtr++;
            break;
            case 35: rowCtr++;
            break;
        }



        if(i<7){
            var div = $("<div>").addClass("dayCell").attr("id", i).text(calendar.week[i]).attr("data-row",rowCtr);
        }
        else{
            var div = $("<a>").addClass("numCell").attr("id", i).attr("data-row",rowCtr);    
        }
        if(c>6){
            c = 0;
            div.attr("data-day", calendar.week[c]);
            c++;
        }
        else{
            div.attr("data-day", calendar.week[c]);
            c++;
        }
        $(".grid").append(div);

    }
    rowCtr = 1;
   
    for(var i=0; i<calendar.days.length; i++){

         if(rowCtr == 6){
            var div = $("<a>").addClass("numCell").attr("id", "extra").attr("data-row",rowCtr).appendTo(".grid").text(calendar.days[i].nDay);
            
         }

        $("[data-row="+rowCtr+"][data-day="+calendar.days[i].wDay+"]").text(calendar.days[i].nDay);
        if(calendar.days[i].wDay === "Sat"){
            rowCtr++;
        }
       
    }

}
addActivity(2,"Wed");
function addActivity(rowCtr, wDay){

    $("[data-row="+rowCtr+"][data-day="+wDay+"]").prepend("<div class='activity'><a href='#'>clean</a></div>").css({background:"rgba(224,229,235,0.4)"});
//    $("[data-row="+rowCtr+"][data-day="+wDay+"]").prepend("<a href='#'>Activity &oplus;</a>");

}

