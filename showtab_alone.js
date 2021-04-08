function showTab(evt, cityName) {
    //Insert blank line for readibility
    console.log("           ");
    // Declare all variables
    console.log('--> Starting to open tab "'+cityName+'"...');
    console.log("--> Declaring variables...");
    var i, tabcontent, tablinks;
    console.log("SUCCESS: Variables loaded.");

    // Get all elements with class="tabcontent" and hide them
    console.log("--> Hiding unnecessary tabs...")
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    console.log("SUCCESS: Unwanted material hidden.");

    // Get all elements with class="tablinks" and remove the class "active"
    console.log("--> Removing active class on unwanted material...");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    console.log("SUCCESS: Unnecessary active classes removed.");

    // Show the current tab, and add an "active" class to the button that opened the tab
    console.log("--> Showing tab...");
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    console.log("SUCCESS: Display change completed.");
    console.log("SUCCESS: Tab change completed.");
    //Display empty console line
    console.log("             ");
}