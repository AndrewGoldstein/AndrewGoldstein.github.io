//flight list

var flights_old =[
{outbound:"Friday",
o1:18,
o2:20,
ret:"Sunday",
r1:19,
r2:21,
home:"SFO", 
dest:"SEA"}, {
outbound:"Friday",
o1:20,
o2:22,
ret:"Sunday",
r1:21,
r2:23,
home:"SFO", 
dest:"SEA"},{
outbound:"Friday",
o1:22,
o2:6,
ret:"Monday",
r1:7,
r2:10,
home:"SEA", 
dest:"JFK"}];


var flights_new =[
{
outbound:"Friday",
o1:18,
o2:20,
home:"SFO", 
dest:"SEA"
},{
outbound:"Sunday",
o1:19,
o2:21,
home:"SEA", 
dest:"SFO"
},{
outbound:"Friday",
o1:20,
o2:22,
home:"SFO", 
dest:"SEA"
},{
outbound:"Sunday",
o1:21,
o2:23,
home:"SEA", 
dest:"SFO"
},{
outbound:"Friday",
o1:22,
o2:6,
home:"SEA", 
dest:"JFK"
},{
outbound:"Monday",
o1:7,
o2:10,
home:"JFK", 
dest:"SEA"
}
];


function myFunction() {
    var d = new Date(2016,0,20);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}