var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "user" && password == "pass"){
		alert ("Login successfully");
		window.location = "../html/index.html"; // Redirecting to other page.
		return false;
		}
		else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}


function validateMotor(){
	var amp = document.getElementById("amperage").value;
	var volt = document.getElementById("voltage").value;
	var wire = document.getElementById("wiring").value;
	var brand = document.getElementById("brand").value;
	var model = document.getElementById("model").value;
	var connect = document.getElementById("connector").value;
	
	if (amp != "" & volt != "" & volt != "" & wire != "" & brand != "" & model != "" & connect != ""){
		setTimeout(alert("File succesfully loaded"), 1000);
	}
	else {
		alert("Need to fully fill out form.");
	}
}
//~ function validateMotor(){
	//~ var amp = document.getElementById("amperage").value;
	//~ var volt = document.getElementById("voltage").value;
	//~ var wire = document.getElementById("wiring").value;
	//~ var brand = document.getElementById("brand").value;
	//~ var model = document.getElementById("model").value;
	//~ var connect = document.getElementById("connector").value;
	
	//~ if (amp != "" & volt != "" & volt != "" & wire != "" & brand != "" & model != "" & connect != ""){
		//~ set fso = CreateObject("Scripting.FileSystemObject"); 
		//~ set s   = fso.CreateTextFile("../files/filename.txt", True);s.writeline();
		
		//~ s.writeline("amperage :" + amp);
		//~ s.writeline("voltage :" + volt);
		//~ s.writeline("wiring :" + wire);
		//~ s.writeline("brand :" + brand);
		//~ s.writeline("model :" + model);
		//~ s.writeline("connect :" + connect);
		
		//~ s.Close()
		
		//~ setTimeout(alert("File succesfully loaded"), 1000);	
	//~ }
	//~ else {
		//~ alert("Need to fully fill out form.");
	//~ }
//~ }
