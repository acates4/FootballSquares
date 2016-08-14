$(document).ready(function() {
                  
var players = [];
$('#playerinputs input.form').each(function() {
    players.push($(this).val());
});
console.log(players)
                  
//Get number of reps and remaining sample number
var reps = Math.floor(100 / players.length);
var remainder = Math.floor(100 % players.length);

//Create array of length num for all players
var rep_players = [];
$.each(players, function( index, value ) {
       rep_players = Array.apply(null, Array(reps)).map(function(){return players}).join();
       });

rep_players = rep_players.split(",")

//Append random sample of remainder to master array
var rem_players = _.sample(players,remainder);
rep_players = rep_players.concat(rem_players);
rep_players = _.sample(rep_players,rep_players.length);

$('#dynamictable').append('<table></table>');
var table = $('#dynamictable').children();
var counter = 0;
var string;
for(i=0; i<101; i++) {
    counter++;
    string = string + "<td>"+rep_players[i]+"</td>";
    if(counter === 10) {
        table.append("<tr>" + string + "</tr>");
        string = "";
        counter = 0;
    }
};
    
var colors = ["#3498DB","#2ECC71","#E74C3C","#16A085","#F39C12","#D35400","#7F8C8D","#8E44AD"];

$.each(players, function( index, value ) {
    $( "td:contains(" + value + ")" ).css('background-color', colors[index]);
});
    
//

for(i=0; i<11; i++) {
    $('table tr:nth-child(' + i + ')').prepend('<td style="background:#ffffff;color:#000000;">' + Number(i - 1) + '</td>');
};
    
$('table').prepend('<tr><td style="background:#ffffff;color:#000000;"></td></tr>');
    
for(i=0; i<10; i++) {
    $('table tr:nth-child(1)').append('<td style="background:#ffffff;color:#000000;">' + i  + '</td>');
};

//

$('table').prepend('<th id="col_header" colspan="12">' + $("#team1").val() + '</th>');
$('table').prepend('<tr><th id="row_header" rowspan="13">' + $("#team2").val() + '</th></tr>');

    
});
