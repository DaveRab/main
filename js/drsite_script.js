$(document).ready(function(){
    //Slide nav for mobile view
    $(".nav-handle").click(function(){
        $(".dropdown").slideToggle(1000);
    
    });
    
    
   //Generates random hex for BG color and animates transitions
	$(".name").click(function(){
		var color = randColor();
        // Fades between random colors using jqueryui .animate()
		$("body").animate({backgroundColor: color}, 500, "easeOutSine");
	});
   
   // This hex generator was found in a comment on Paul Irish's site, much more efficient.
    function randColor() {
	var color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	return color;
    }
   
   
/*
   //My original code to solve this issue, I left it in as a reminder to myself to always work towards more efficient ways to code.
   
   //Generates hex decimals array
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',  'c', 'd', 'e', 'f'];
    var pos = [];
   //Generates a random 6 digit hexidecimal code
    function hexGen() {
    for (i = 0 ; i < 6 ; i++){
        pos[i] = hex[Math.floor(Math.random() * 16)];
    };
}
   //Plugs the random hex code into a string output
    function hexCode() {
    hexGen();
    var output = "#"     
    for (i = 0 ; i < pos.length ; i++){
        output += pos[i];
    };
    return output;
}

*/

    
    /* Old Date Program */
    /* var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear();
    var todaysDate = "(" + currentMonth + "/" + currentDay + "/" + currentYear + ")";
    $(".date").text(todaysDate);*/
});

