//flight list

var flights_oldest =[
{outbound:"Friday"
,

o1:18
,

o2:20
,

ret:"Sunday"
,

r1:19
,

r2:21
,

home:"SFO"
,

dest:"SEA"}
,
 {
outbound:"Friday"
,

o1:20
,

o2:22
,

ret:"Sunday"
,

r1:21
,

r2:23
,

home:"SFO"
,

dest:"SEA"}
,
{
outbound:"Friday"
,

o1:22
,

o2:6
,

ret:"Monday"
,

r1:7
,

r2:10
,

home:"SEA"
,

dest:"JFK"}];


var flights_old =[
{
'departureWeekday':"Friday"
,

'h0':18
,

'h1':20
,

'home':"SFO"
,

'dest':"SEA"
}
,
{
departureWeekday:"Sunday"
,

h0:19
,

h1:21
,

home:"SEA"
,

dest:"SFO"
}
,
{
departureWeekday:"Friday"
,

h0:20
,

h1:22
,

home:"SFO"
,

dest:"SEA"
}
,
{
departureWeekday:"Sunday"
,

h0:21
,

h1:23
,

home:"SEA"
,

dest:"SFO"
}
,
{
departureWeekday:"Friday"
,

h0:22
,

h1:6
,

home:"SEA"
,

dest:"JFK"
}
,
{
departureWeekday:"Monday"
,

h0:7
,

h1:10
,

home:'JFK'
,

dest:"SEA"
}
];

var flights_new = 
[
{'dest': 'JFK',
 'h0': 11,
 'h1': 20,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 36},
 {'dest': 'JFK',
 'h0': 7,
 'h1': 15,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 22,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 14,
 'h1': 22,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 23,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 15,
 'h1': 0,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'JFK',
 'h0': 21,
 'h1': 5,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 30,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 10},
 {'dest': 'JFK',
 'h0': 0,
 'h1': 9,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 18,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 59},
 {'dest': 'JFK',
 'h0': 21,
 'h1': 5,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 30,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 10},
 {'dest': 'JFK',
 'h0': 11,
 'h1': 20,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 36},
 {'dest': 'JFK',
 'h0': 7,
 'h1': 15,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 22,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 0,
 'h1': 9,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 18,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 59},
 {'dest': 'JFK',
 'h0': 14,
 'h1': 22,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 23,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 7,
 'h1': 15,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 22,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 15,
 'h1': 0,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'JFK',
 'h0': 14,
 'h1': 22,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 23,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 21,
 'h1': 5,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 30,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 10},
 {'dest': 'JFK',
 'h0': 11,
 'h1': 20,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 36},
 {'dest': 'JFK',
 'h0': 0,
 'h1': 9,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 18,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 59},
 {'dest': 'JFK',
 'h0': 21,
 'h1': 5,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-02',
 'carrier': 'B6',
 'm1': 30,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Tuesday',
 'home': 'SFO',
 'm0': 10},
 {'dest': 'JFK',
 'h0': 11,
 'h1': 20,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 36},
 {'dest': 'JFK',
 'h0': 14,
 'h1': 22,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 23,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'JFK',
 'h0': 15,
 'h1': 0,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-02',
 'carrier': 'B6',
 'm1': 6,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Tuesday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'JFK',
 'h0': 7,
 'h1': 15,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 22,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 20,
 'h1': 23,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 40,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 10,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 26,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'JFK',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 48,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'JFK',
 'm0': 10},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 19,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 42,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'JFK',
 'm0': 59},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 0,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 54,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Saturday',
 'home': 'JFK',
 'm0': 20},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 14,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'B6',
 'm1': 31,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 48,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'JFK',
 'm0': 10},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 19,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 42,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'JFK',
 'm0': 59},
 {'dest': 'SFO',
 'h0': 20,
 'h1': 23,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 40,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 10,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'B6',
 'm1': 26,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'JFK',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 48,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'JFK',
 'm0': 10},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 10,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 26,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'JFK',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 0,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 54,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 20},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 14,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 31,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 19,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 42,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'JFK',
 'm0': 59},
 {'dest': 'SFO',
 'h0': 20,
 'h1': 23,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'B6',
 'm1': 40,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 20,
 'h1': 23,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 40,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 19,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 42,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 59},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 10,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 26,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 48,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 10},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 0,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-02',
 'carrier': 'B6',
 'm1': 54,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Tuesday',
 'home': 'JFK',
 'm0': 20},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 14,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'B6',
 'm1': 31,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'JFK',
 'm0': 0},
 {'dest': 'SEA',
 'h0': 19,
 'h1': 21,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 30,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 8,
 'h1': 10,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 35,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'SEA',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'SEA',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 7,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 5},
 {'dest': 'SEA',
 'h0': 16,
 'h1': 18,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 38,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 35},
 {'dest': 'SEA',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 55},
 {'dest': 'SEA',
 'h0': 20,
 'h1': 22,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 25,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 20,
 'h1': 22,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 25,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 10,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 5},
 {'dest': 'SEA',
 'h0': 15,
 'h1': 17,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'SEA',
 'h0': 19,
 'h1': 21,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 30,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 16,
 'h1': 18,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 38,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 35},
 {'dest': 'SEA',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'SEA',
 'h0': 8,
 'h1': 10,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 35,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'SEA',
 'h0': 7,
 'h1': 9,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 55,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'SEA',
 'h0': 16,
 'h1': 18,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 38,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 35},
 {'dest': 'SEA',
 'h0': 19,
 'h1': 21,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 30,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 7,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 5},
 {'dest': 'SEA',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'SEA',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 55},
 {'dest': 'SEA',
 'h0': 20,
 'h1': 22,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 25,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 45},
 {'dest': 'SEA',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 55},
 {'dest': 'SEA',
 'h0': 16,
 'h1': 18,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 38,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 35},
 {'dest': 'SEA',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 7,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 5},
 {'dest': 'SEA',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 0},
 {'dest': 'SEA',
 'h0': 20,
 'h1': 22,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 25,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 8,
 'h1': 10,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 35,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SEA',
 'h0': 19,
 'h1': 21,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 30,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SFO',
 'm0': 30},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 17,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 49,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 35},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 10,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 9,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 55},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 45},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 13,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 40,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 30},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 23,
 'departureWeekday': 'Friday',
 'arrivalDate': '2016-01-29',
 'carrier': 'AS',
 'm1': 59,
 'departureDate': '2016-01-29',
 'arrivalWeekday': 'Friday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 10,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 45},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 23,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 59,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 49,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 35},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 13,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 40,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 30},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 9,
 'departureWeekday': 'Saturday',
 'arrivalDate': '2016-01-30',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-30',
 'arrivalWeekday': 'Saturday',
 'home': 'SEA',
 'm0': 55},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 23,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 59,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 13,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 40,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 30},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 10,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 9,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 55},
 {'dest': 'SFO',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 45},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 17,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Sunday',
 'arrivalDate': '2016-01-31',
 'carrier': 'AS',
 'm1': 49,
 'departureDate': '2016-01-31',
 'arrivalWeekday': 'Sunday',
 'home': 'SEA',
 'm0': 35},
 {'dest': 'SFO',
 'h0': 9,
 'h1': 12,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 0,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 21,
 'h1': 23,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 59,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 50},
 {'dest': 'SFO',
 'h0': 18,
 'h1': 20,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 49,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 35},
 {'dest': 'SFO',
 'h0': 15,
 'h1': 17,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 9,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 5,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 55},
 {'dest': 'SFO',
 'h0': 6,
 'h1': 8,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 10,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 0},
 {'dest': 'SFO',
 'h0': 11,
 'h1': 13,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 40,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 30},
 {'dest': 'SFO',
 'h0': 13,
 'h1': 15,
 'departureWeekday': 'Monday',
 'arrivalDate': '2016-02-01',
 'carrier': 'AS',
 'm1': 50,
 'departureDate': '2016-02-01',
 'arrivalWeekday': 'Monday',
 'home': 'SEA',
 'm0': 45}]