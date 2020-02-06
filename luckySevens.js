		
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function play(){
	var stBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = stBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWinnings = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	if(money<=0){
		alert("Starting bet needs to be greater than $0");
	}
	else{
		while(money > 0){
			firstDie = rollDice();
			secondDie = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;
			if(diceSum != 7){
				money--;
				console.log("lost");
			}
			else{
				money += 4;
				if(money > maxWinnings){
					maxWinnings += (money-maxWinnings);
					rollsAtMax = rolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = stBet;
	document.getElementById("totalRolls").innerText = rolls;
	document.getElementById("high").innerText = maxWinnings;
	document.getElementById("rollsAtHigh").innerText = rollsAtMax;
	return false;
}
		
		