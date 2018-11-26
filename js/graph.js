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
function getData(toggle) {
	return Math.random();
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
