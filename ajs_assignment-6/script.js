let btn = document.getElementsByTagName('button')
let btnid1 = document.getElementById('buttom1').value;
let btnid2 = document.getElementById('buttom2').value;
let btnid3 = document.getElementById('buttom3').value;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (event) {
        let roundleft = parseInt(document.getElementById("round").value)
        roundleft = roundleft - 1;
        if (roundleft >= 0) {

            document.getElementById("round").value = roundleft;
            let a = btn[i].value
            if (a == btnid1) {
                document.getElementById("userchoss").innerHTML = btnid1
            }
            else if (a == btnid2) {
                document.getElementById("userchoss").innerHTML = btnid2
            }
            else {
                document.getElementById("userchoss").innerHTML = btnid3
            }


            let array = ["Rock", "Paper", "Scissor"];
            let randomItem = array[Math.floor(Math.random() * array.length)];
            let computer = document.getElementById("compuetchoss").innerHTML = randomItem;


            if (a == randomItem) {
                document.getElementById("result").innerHTML = "Winner: Tie"
            }
            else if (a == "Rock" && randomItem == "Paper") {
                document.getElementById("result").innerHTML = "Winner: Computer win"
                let cpoints = parseInt(document.getElementById("computerpoints").value);
                cpoints = cpoints + 1
                document.getElementById('computerpoints').value = cpoints
            }
            else if (a == "Rock" && randomItem == "Scissor") {
                document.getElementById("result").innerHTML = "Winner: User win"
                let points = parseInt(document.getElementById("userpoints").value);
                points = points + 1
                document.getElementById('userpoints').value = points
            }

            else if (a == "Paper" && randomItem == "Rock") {
                document.getElementById("result").innerHTML = "Winner: user win"
                let points = parseInt(document.getElementById("userpoints").value);
                points = points + 1
                document.getElementById('userpoints').value = points
            }
            else if (a == "Paper" && randomItem == "Scissor") {
                document.getElementById("result").innerHTML = "Winner: computer win"
                let cpoints = parseInt(document.getElementById("computerpoints").value);
                cpoints = cpoints + 1
                document.getElementById("computerpoints").value = cpoints
            }

            else if (a == "Scissor" && randomItem == "Paper") {
                document.getElementById("result").innerHTML = "Winner: user win"
                let points = parseInt(document.getElementById("userpoints").value);
                points = points + 1
                document.getElementById('userpoints').value = points
            }
            else if (a == "Scissor" && randomItem == "Rock") {
                document.getElementById("result").innerHTML = "Winner: computer win"
                let cpoints = parseInt(document.getElementById("computerpoints").value);
                cpoints = cpoints + 1
                document.getElementById("computerpoints").value = cpoints
            }
        }
        else {
            let totalUserPoints = parseInt(document.getElementById("userpoints").value);
            let TotalComputerPoints = parseInt(document.getElementById("computerpoints").value);
            if (totalUserPoints == TotalComputerPoints) {
                document.getElementById('result1').innerHTML = "TIE"
            }
            else if (totalUserPoints < TotalComputerPoints) {
                document.getElementById('result1').innerHTML = "YOU LOSE"
            }
            else {
                document.getElementById('result1').innerHTML = "YOU WON"
            }

        }
    }

    )
}

function refreshPage() {
    window.location.reload();
}