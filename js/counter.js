window.onscroll = function() {abc(4, 6, 4, 2)};
var countNumber = document.getElementsByClassName('counter-number');

var counterDiv = document.getElementsByClassName('counter-wrapper')[0];
var boundRect = counterDiv.getBoundingClientRect();
var counterOffset =  boundRect.top + window.pageYOffset - document.documentElement.clientTop;

var counts = []; 
counts[0] = counts[1] = counts[2] = counts[3] = 0;
var max = [];
function abc(max1, max2, max3, max4){
	max[0] = max1;
	max[1] = max2;
	max[2] = max3;
	max[3] = max4;
	var intervalId;
	if (document.body.scrollTop >= counterOffset){
		intervalId = setInterval(function(){
			for(i = 0; i<countNumber.length; i++){
			counts[i]++;
			console.log(counts[i]);
			if(counts[i] <= max[i]){
				console.log(i);
				countNumber[i].innerHTML = counts[i];
			}
			}
			if(counts[0] > max[0] && counts[1] > max[1] && counts[2] > max[2] && counts[3] > max[3]){
				clearInterval(intervalId);
			}
		}, 500);
	}
}
