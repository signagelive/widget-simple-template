(function() {
    // Simple object to hold the preferences
    var preferences = {}

    // load the config file
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var configXmlDoc = xhttp.responseXML;
                // Load the preferences
                var preferenceElements = configXmlDoc.getElementsByTagName("preference");
                if (preferenceElements != null) {
                    for (var i = 0; i < preferenceElements.length; i++) {
                        var preference = preferenceElements[i];
                        // Note - You would want probably wan to do type checking and parsing here!
                        preferences[preference.attributes["name"].value] = preference.attributes["value"].value;
                    }
                }

                // display the value of the Text preference
                document.getElementById('output').innerText = preferences.Text;
            } else {
                document.getElementById('output').innerText = "Error loading preferences";
            }
        }
    };
    xhttp.open("GET", "config.xml");
    xhttp.send();
})();