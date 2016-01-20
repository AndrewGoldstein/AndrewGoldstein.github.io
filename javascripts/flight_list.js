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
home:'JFK', 
dest:"SEA"
}
];

//[{'dest': 'JFK', 'h0': '11', 'h1': '20', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '36'}, {'dest': 'JFK', 'h0': '07', 'h1': '15', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '22', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '14', 'h1': '22', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '23', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '15', 'h1': '00', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '45'}, {'dest': 'JFK', 'h0': '21', 'h1': '05', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '30', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '10'}, {'dest': 'JFK', 'h0': '00', 'h1': '09', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '18', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '59'}, {'dest': 'JFK', 'h0': '21', 'h1': '05', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '30', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '10'}, {'dest': 'JFK', 'h0': '11', 'h1': '20', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '36'}, {'dest': 'JFK', 'h0': '07', 'h1': '15', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '22', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '00', 'h1': '09', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '18', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '59'}, {'dest': 'JFK', 'h0': '14', 'h1': '22', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '23', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '07', 'h1': '15', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '22', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '15', 'h1': '00', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '45'}, {'dest': 'JFK', 'h0': '14', 'h1': '22', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '23', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '21', 'h1': '05', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '30', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '10'}, {'dest': 'JFK', 'h0': '11', 'h1': '20', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '36'}, {'dest': 'JFK', 'h0': '00', 'h1': '09', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '18', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '59'}, {'dest': 'JFK', 'h0': '21', 'h1': '05', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-02', 'carrier': 'B6', 'm1': '30', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Tuesday', 'home': 'SFO', 'm0': '10'}, {'dest': 'JFK', 'h0': '11', 'h1': '20', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '36'}, {'dest': 'JFK', 'h0': '14', 'h1': '22', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '23', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '00'}, {'dest': 'JFK', 'h0': '15', 'h1': '00', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-02', 'carrier': 'B6', 'm1': '06', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Tuesday', 'home': 'SFO', 'm0': '45'}, {'dest': 'JFK', 'h0': '07', 'h1': '15', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '22', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '00'}, {'dest': 'SFO', 'h0': '20', 'h1': '23', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '40', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '06', 'h1': '10', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '26', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'JFK', 'm0': '50'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '48', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'JFK', 'm0': '10'}, {'dest': 'SFO', 'h0': '15', 'h1': '19', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '42', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'JFK', 'm0': '59'}, {'dest': 'SFO', 'h0': '21', 'h1': '00', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '54', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Saturday', 'home': 'JFK', 'm0': '20'}, {'dest': 'SFO', 'h0': '11', 'h1': '14', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'B6', 'm1': '31', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '48', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'JFK', 'm0': '10'}, {'dest': 'SFO', 'h0': '15', 'h1': '19', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '42', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'JFK', 'm0': '59'}, {'dest': 'SFO', 'h0': '20', 'h1': '23', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '40', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '06', 'h1': '10', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'B6', 'm1': '26', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'JFK', 'm0': '50'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '48', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'JFK', 'm0': '10'}, {'dest': 'SFO', 'h0': '06', 'h1': '10', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '26', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'JFK', 'm0': '50'}, {'dest': 'SFO', 'h0': '21', 'h1': '00', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '54', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '20'}, {'dest': 'SFO', 'h0': '11', 'h1': '14', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '31', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '15', 'h1': '19', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '42', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'JFK', 'm0': '59'}, {'dest': 'SFO', 'h0': '20', 'h1': '23', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'B6', 'm1': '40', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '20', 'h1': '23', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '40', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SFO', 'h0': '15', 'h1': '19', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '42', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '59'}, {'dest': 'SFO', 'h0': '06', 'h1': '10', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '26', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '50'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '48', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '10'}, {'dest': 'SFO', 'h0': '21', 'h1': '00', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-02', 'carrier': 'B6', 'm1': '54', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Tuesday', 'home': 'JFK', 'm0': '20'}, {'dest': 'SFO', 'h0': '11', 'h1': '14', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'B6', 'm1': '31', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'JFK', 'm0': '00'}, {'dest': 'SEA', 'h0': '19', 'h1': '21', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '30', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '08', 'h1': '10', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '35', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '06', 'h1': '08', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '45'}, {'dest': 'SEA', 'h0': '13', 'h1': '15', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '00'}, {'dest': 'SEA', 'h0': '18', 'h1': '20', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '07', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '05'}, {'dest': 'SEA', 'h0': '16', 'h1': '18', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '38', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '35'}, {'dest': 'SEA', 'h0': '09', 'h1': '12', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '55'}, {'dest': 'SEA', 'h0': '20', 'h1': '22', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '25', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '20', 'h1': '22', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '25', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '18', 'h1': '20', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '10', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '05'}, {'dest': 'SEA', 'h0': '15', 'h1': '17', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '00'}, {'dest': 'SEA', 'h0': '19', 'h1': '21', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '30', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '16', 'h1': '18', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '38', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '35'}, {'dest': 'SEA', 'h0': '06', 'h1': '08', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '45'}, {'dest': 'SEA', 'h0': '08', 'h1': '10', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '35', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '06', 'h1': '08', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '45'}, {'dest': 'SEA', 'h0': '07', 'h1': '09', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '55', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '45'}, {'dest': 'SEA', 'h0': '16', 'h1': '18', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '38', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '35'}, {'dest': 'SEA', 'h0': '19', 'h1': '21', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '30', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '18', 'h1': '20', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '07', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '05'}, {'dest': 'SEA', 'h0': '13', 'h1': '15', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '00'}, {'dest': 'SEA', 'h0': '09', 'h1': '12', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '55'}, {'dest': 'SEA', 'h0': '20', 'h1': '22', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '25', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '06', 'h1': '08', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '45'}, {'dest': 'SEA', 'h0': '09', 'h1': '12', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '55'}, {'dest': 'SEA', 'h0': '16', 'h1': '18', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '38', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '35'}, {'dest': 'SEA', 'h0': '18', 'h1': '20', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '07', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '05'}, {'dest': 'SEA', 'h0': '13', 'h1': '15', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '00'}, {'dest': 'SEA', 'h0': '20', 'h1': '22', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '25', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '08', 'h1': '10', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '35', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SEA', 'h0': '19', 'h1': '21', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '30', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SFO', 'm0': '30'}, {'dest': 'SFO', 'h0': '15', 'h1': '17', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '18', 'h1': '20', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '49', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '35'}, {'dest': 'SFO', 'h0': '06', 'h1': '08', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '10', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '06', 'h1': '09', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '55'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '13', 'h1': '15', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '45'}, {'dest': 'SFO', 'h0': '11', 'h1': '13', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '40', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '30'}, {'dest': 'SFO', 'h0': '21', 'h1': '23', 'departureWeekday': 'Friday', 'arrivalDate': '2016-01-29', 'carrier': 'AS', 'm1': '59', 'departureDate': '2016-01-29', 'arrivalWeekday': 'Friday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '06', 'h1': '08', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '10', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '13', 'h1': '15', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '45'}, {'dest': 'SFO', 'h0': '21', 'h1': '23', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '59', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '18', 'h1': '20', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '49', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '35'}, {'dest': 'SFO', 'h0': '11', 'h1': '13', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '40', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '30'}, {'dest': 'SFO', 'h0': '06', 'h1': '09', 'departureWeekday': 'Saturday', 'arrivalDate': '2016-01-30', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-30', 'arrivalWeekday': 'Saturday', 'home': 'SEA', 'm0': '55'}, {'dest': 'SFO', 'h0': '21', 'h1': '23', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '59', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '11', 'h1': '13', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '40', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '30'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '06', 'h1': '08', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '10', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '06', 'h1': '09', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '55'}, {'dest': 'SFO', 'h0': '13', 'h1': '15', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '45'}, {'dest': 'SFO', 'h0': '15', 'h1': '17', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '18', 'h1': '20', 'departureWeekday': 'Sunday', 'arrivalDate': '2016-01-31', 'carrier': 'AS', 'm1': '49', 'departureDate': '2016-01-31', 'arrivalWeekday': 'Sunday', 'home': 'SEA', 'm0': '35'}, {'dest': 'SFO', 'h0': '09', 'h1': '12', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '00', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '21', 'h1': '23', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '59', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '50'}, {'dest': 'SFO', 'h0': '18', 'h1': '20', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '49', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '35'}, {'dest': 'SFO', 'h0': '15', 'h1': '17', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '06', 'h1': '09', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '05', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '55'}, {'dest': 'SFO', 'h0': '06', 'h1': '08', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '10', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '00'}, {'dest': 'SFO', 'h0': '11', 'h1': '13', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '40', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '30'}, {'dest': 'SFO', 'h0': '13', 'h1': '15', 'departureWeekday': 'Monday', 'arrivalDate': '2016-02-01', 'carrier': 'AS', 'm1': '50', 'departureDate': '2016-02-01', 'arrivalWeekday': 'Monday', 'home': 'SEA', 'm0': '45'}]