//~ Temporary Machine Learning Output
var ML_output = 2;

function getMlData() {
	return ML_output;
}

function sendMlData(ML_output){
	document.getElementById("MachineLearing").disabled = ML_output;
}
