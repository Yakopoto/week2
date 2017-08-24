notation = ['+','-','*','/']
prob = []
name = prompt("What's your name ?")
correctAnswer = "";
player = {name : name, score:0}

console.log("Hello,"+player.name+" Let's start the game!");

function generateProb()
{
	prob = []
	x=0;
	if (player.score<50){
		for (i=1;i<=5;i++){
			if(i%2 != 0){
				prob.push(Math.floor((Math.random() * 10) + 1));
			}else{
				prob.push(notation[Math.floor(Math.random() * notation.length)]);
			}
		}
		question = []
		question = prob
		total = calculateProb(prob)
		question.push("=",total)
		hiddenPart = Math.floor((Math.random() * prob.length-1) + 1);

		while(question[hiddenPart] === "="){
			hiddenPart = Math.floor((Math.random() * prob.length-1) + 1);
		}
			correctAnswer = question[hiddenPart];
			question[hiddenPart] = "?"

	  }else {
		for (i=1;i<=9;i++){
			if(i%2 != 0){
				prob.push(Math.floor((Math.random() * 10) + 1));
			}else{
				prob.push(notation[Math.floor(Math.random() * notation.length)]);
			}
		}
		question = []
		question = prob
		//total = calculateProb(prob)
		question.push("=",total)
		hiddenPart = Math.floor((Math.random() * prob.length-1) + 1);

		while(question[hiddenPart] == "="){
			hiddenPart = Math.floor((Math.random() * prob.length-1) + 1);
		}
		
		correctAnswer = question[hiddenPart];
		question[hiddenPart] = "?"
	}

		answ = prompt(question.join(" "))
		checkAnswer(prob,answ)
		console.log(question.join(" ")+", the correct answer is ("+correctAnswer+")")
}

function calculateProb(prob)
{
	total = 0;
	y = Math.floor(eval(prob.join(""))) % 1
	if(y != 0)
	{
		total = parseFloat(Math.floor(eval(prob.join("")))).toFixed(2);
	}else{
		total = Math.floor(eval(prob.join("")));
	}
	return total;
}

function checkAnswer(prob,answer)
{
  probInString = prob.join("");
  if(answer == correctAnswer){
  	player['score'] = 10;
  	console.log('your answer is correct');
  }else{
  	console.log('your answer is wrong');
  }
}

for(b= 0 ; b<10 ; b++){
	generateProb()
}

console.log("Your final score is "+player.score+","+player.name)

