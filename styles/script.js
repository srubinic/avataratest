function topFunction() {
    'use strict'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    
}

function myFunction() {
    'use strict'
    var x = document.getElementById("navBAR");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
