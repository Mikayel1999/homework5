<!DOCTYPE html>
<html>
<head>
<title> Hello </title>
<body>
<script src="Hello.js">
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};


const createPoints =  function(count, width , height){
	const result = [];
	const colorArray = ['red', 'blue', 'orange'];
	const loop = function(num) {
  	if(num ===0) {
    	return;
    }
    result.push({
    	x:rand(width-30),
      y:rand(height-30),
      width:30,
      height:30,
      xDelta:1,
      yDelta:1,
      color: colorArray[rand(3)-1]
    });
    loop(num-1);
  };
  
  loop(count);
  
  
  return result;
};

console.log(createPoints(5, 500,500));
</script>
  </body>
  </html>