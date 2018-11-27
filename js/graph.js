function checkFile(selectedFile){
	if (selectedFile == true){
		plotData();
		evaluateStatus(ML_output);
		//~ var elmnt = document.getElementById("statusDiv");
		//~ elmnt.scrollIntoView();
	}
	else{
		alert('File not yet selected. Please Select a the type of motor to test.');
	}
}
function getData() {
	if (ML_output == 1){
		//~ return Math.random();
		return getRandomInt(1430);
	}
	if (ML_output == 2){
		return getRandomInt(1000);
	}
}  
function plotData() {
	Plotly.plot('chart',[{
		y:[getData()],
		type:'line'
	}]);

	var cnt = 0;
	var maxcnt = 200;
	var interval = 0.001
	setInterval(function(){
		Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
		cnt++;
		if(cnt > maxcnt) {
		    Plotly.relayout('chart',{
		        xaxis: {
		            range: [cnt-maxcnt,cnt]
		        }
		    });
		}
	},interval);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
