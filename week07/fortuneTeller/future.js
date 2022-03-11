var job = ["Teacher", "Designer", "Journalist", "Programmer"];
var city = ["Dallas", "Houston", "Lubbock", "McAllen"];
var spouse = ["Michelle", "Valerie", "Melissa", "Lilly"];
var numKikds = [0,3,5,1];


var xx = Math.floor(Math.random()*4);

function tellFortune(job, city, spouse, numKids) {
    document.write("You will be a " + jobTitle + " in " + location + " and married to ' + partner + " " + " with " + numKids + " kids.");
}

fortune(job[xx], city[xx], spouse[xx], numKids[xx]);
