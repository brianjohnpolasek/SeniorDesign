function evaluateStatus(status){
	document.getElementById("status").innerHTML = "Loading...";
	
	if (status == 0){
		setTimeout(offline, 2000);
	}
	if (status == 1){
		setTimeout(healthy, 4000);
	}
	if (status == 2){
		setTimeout(unhealthy, 6000);
	}
}

function offline(){
	document.getElementById("status").innerHTML = "Offline";
	document.getElementById("status").style.color = "grey";
}

function healthy(){
	document.getElementById("status").innerHTML = "Healthy";
	document.getElementById("status").style.color = "green";
}

function unhealthy(){
	document.getElementById("status").innerHTML = "Potential Failure";
	document.getElementById("status").style.color = "red";
	alert("Potential Failure!");
	addRow();
}
