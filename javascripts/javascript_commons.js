//Javascript Commons File


			function defineCookie(cookie_name, cookie_result) {
                if (document.cookie != document.cookie) {index = document.cookie.indexOf(cookie_name);} else { index = -1;}
                if (index == -1) { document.cookie=cookie_name+"="+cookie_result+"; expires=Monday, 04-Apr-2020 05:00:00 GMT"; }
                console.log("hello");
                console.log(cookie_name);
                console.log(cookie_result);
                console.log("hello");
            }

            function close_accordion_section() {
                jQuery('.accordion .accordion-section-title').removeClass('active');
                jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
            }

            function passCookie(id,value){
                if (value != ''){
                    document.getElementById(id).innerHTML = value;
                    defineCookie(id, value);
                    console.log(id);
                    console.log(value);
                    close_accordion_section();
                }
            }

		  function getCookie(cookie_name) {
		    if(document.cookie) {
		      index = document.cookie.indexOf(cookie_name);
		      if (index != -1) {
		        namestart = (document.cookie.indexOf("=", index) + 1);
		        nameend = document.cookie.indexOf(";", index);
		      if (nameend == -1) {nameend = document.cookie.length;}
		        return document.cookie.substring(namestart, nameend);
		      }
		    }
		  }


                                            function haversineDistance(lat1,lon1, lat2,lon2) {
                                              function toRad(x) {
                                                return x * Math.PI / 180;
                                              }

                                              var R = 6371; // km

                                              var x1 = lat2 - lat1;
                                              var dLat = toRad(x1);
                                              var x2 = lon2 - lon1;
                                              var dLon = toRad(x2)
                                              var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                                                Math.sin(dLon / 2) * Math.sin(dLon / 2);
                                              var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                                              var d = R * c;
                                              return d;
                                            } 
                                            function closest_airport(lat,lon)  {
                                                var home_airport = '';
                                                var dist = 1000000;
                                                for (i = 0; i < airports.length; i++) {
                                                  distance_from_airport = haversineDistance(airports[i].lat, airports[i].lon, lat, lon);
                                                  if (distance_from_airport < dist) {
                                                    dist = distance_from_airport;
                                                    home_airport = airports[i].city
                                                  }
                                                }
                                                if (home_airport != ''){
                                                  console.log(home_airport)
                                                  return home_airport
                                                }
                                                else {
                                                  return false
                                                }
                                            }