exports.min = function min (array) {
	if(!array){
		return 0;
	}
	if(array){
		var min = 0;
		for (var i = 0; i < array.length; i++) {
			if(array[i] < min){
				min = array[i];
			}
		}
		return min;
	}
}

exports.max = function max (array) {
	if(!array){
		return 0;
	}
	if(array){
		var max = 0;
		for (var i = 0; i < array.length; i++) {
			if(array[i] > max){
				max = array[i];
			}
		}
		return max;
	}
}

exports.avg = function avg (array) {
	if(!array){
		return 0;
	}
	if(array.length > 0){
		var avg = 0;
		for (var i = 0; i < array.length; i++) {
			avg = avg + array[i];
		}
		return avg/array.length;
	}else{
		return 0;
	}
}
