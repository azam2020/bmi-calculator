
$("h1").addClass("big-title");
$("button").on("click",function(){
    var x = prompt("Enter your weight in kg");
    var y = prompt("Enter your height in cm");
    y = y/100;
    ans = x/(y*y);
    ans = ans.toFixed(2);
    $("#ans").html("Your BMI is "+ ans);
})


