var spiller1 = "X";
var spiller2 = "O";
var spillernaa = spiller1;

var b1El = document.querySelector("#b1");
var b2El = document.querySelector('#b2');
var b3El = document.querySelector('#b3');
var b4El = document.querySelector('#b4');
var b5El = document.querySelector('#b5');
var b6El = document.querySelector('#b6');
var b7El = document.querySelector('#b7');
var b8El = document.querySelector('#b8');
var b9El = document.querySelector('#b9');

b1El.addEventListener("click", spill);
b2El.addEventListener('click', spill);
b3El.addEventListener('click', spill);
b4El.addEventListener('click', spill);
b5El.addEventListener('click', spill);
b6El.addEventListener('click', spill);
b7El.addEventListener('click', spill);
b8El.addEventListener('click', spill);
b9El.addEventListener('click', spill);

function klikktur() {
    if (spillernaa === spiller1) {
        spillernaa = spiller2;
    } else {
        spillernaa = spiller1;
    }
}
function spill() {
    klikktur();
    if (spillernaa === spiller1) {
        this.innerHTML = spiller1;
    }
    else {
        this.innerHTML = spiller2;
    }
}