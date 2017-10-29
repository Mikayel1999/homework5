const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};


const createPoints =  function(tiv, laynutyun , bardzrutyun){
	const result = [];

	const loop = function(num) {
  	if(num ===0) {
    	return;
    }
    result.push({
    	x:rand(laynutyun-30),
      y:rand(bardzrutyun-30),
      width:30,
      height:30,
      xDelta:1,
      yDelta:1
    });
    loop(num-1);
  };
  
  loop(tiv);
  
  
  return result;
};


console.log(createPoints(5, 500,500));