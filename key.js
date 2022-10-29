/* KeyBoard */
function pick(value) {
		let pick = document.getElementById("inputs");
		pick.innerHTML += value;
		
		/* Capital Letter 
		capsIt = to get the last letter then uppercase it,
		capS.slice(0, -1) = to delete lowercase form of current last letter then make it uppercase
		*/
		document.getElementById("capS").onclick = function() {
				let capS = document.getElementById("inputs").innerHTML;
				capsIt = capS.charAt(capS.length - 1);
				document.getElementById("inputs").innerHTML = capS.slice(0, -1) + capsIt.toUpperCase();
				}
		
		//Count Letters
		let getTxts = pick.innerHTML;
		let lengthS = getTxts.length;
		document.getElementById("totalLetters").innerHTML = lengthS;
		
		/* Scroll to last when overflowing the "#inputs" box */
		let scrol = document.getElementById("input-box");
		scrol.scrollTop = scrol.scrollHeight;
}

/* Click and hold to get 2nd letter */
function holdThis(val2nd) {
		let holdTime = document.getElementById("ontouch");
		holdTime.innerHTML = 0;
		
		let plusPlus = setInterval(function() {
				holdTime.innerHTML = Number(holdTime.innerHTML) + 1;
				if (holdTime.innerHTML >= 100) {
						pick(val2nd);
						clearInterval(plusPlus);
				}
				this.ontouchend = function() {
						clearInterval(plusPlus);
						holdTime.innerHTML = 0;
				}
		}, 1);
}

/* Delete Last Letter */
function dlt(){
		let dEl = document.getElementById("inputs").innerHTML;
		//To count letters when deleting
		let total = document.getElementById("totalLetters").innerHTML = dEl.length - 1;
		if (total < 0) {
				document.getElementById("totalLetters").innerHTML = 0;
		}
		// Delete faster if it greater than 100ms
		let holdTime = document.getElementById("ontouch");
		holdTime.innerHTML = 0;
		//Delete Letters
		setX = setInterval(function() {
				dEl = dEl.slice(0, -1);
				document.getElementById("inputs").innerHTML = dEl;
				holdTime.innerHTML = Number(holdTime.innerHTML) + 1;
				if (holdTime.innerHTML >= 5) {
						dEl = dEl.slice(0, -4);
				document.getElementById("inputs").innerHTML = dEl;
				}
		}, 200);
}
//Delete one character only and clear Interval
function dltOne() {
		clearInterval(setX);
		let dEl = document.getElementById("inputs").innerHTML;
		dEl = dEl.slice(0, -1);
		document.getElementById("inputs").innerHTML = dEl;
		document.getElementById("ontouch").innerHTML = 0;
}
