//Javascript Commons File


			function defineCookie(cookie_name, cookie_result) {
                if (document.cookie != document.cookie) {index = document.cookie.indexOf(cookie_name);} else { index = -1;}
                if (index == -1) { document.cookie=cookie_name+"="+cookie_result+"; expires=Monday, 04-Apr-2020 05:00:00 GMT"; }
            }

            function close_accordion_section() {
                jQuery('.accordion .accordion-section-title').removeClass('active');
                jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
            }

            function passCookie(id,value){
                if (value != ''){
                    document.getElementById(id).innerHTML = value;
                    defineCookie(id, value);
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