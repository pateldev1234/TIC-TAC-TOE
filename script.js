const pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let visited = new Array(9);
let data = new Array(9);
var counter = 0;

function restart() {
    for (i = 0; i < 9; i++) {
        document.querySelectorAll('.content')[i].innerText = "";
        visited[i] = false;
        data[i] = '.';
        document.querySelectorAll('.content')[i].style.color = "black";
    }
    counter = 0;
    document.querySelector('.winner').innerText = "ALL THE BEST";
}

restart();

// Restart button 
document.querySelector('.restart').addEventListener('click', () => { restart() });

// logic
function addingevent(x) {
    document.querySelectorAll('.content')[i].addEventListener('click', () => {
        disp(x);
    })
}

for (var i = 0; i < 9; i++) {
    addingevent(i);
}

// display X or 0
function disp(t) {
    if (visited[t] == false) {
        if (counter % 2 == 0) {
            document.querySelectorAll('.content')[t].innerText = 'X';
            data[t] = 'X';
        }
        else {
            document.querySelectorAll('.content')[t].innerText = '0';
            data[t] = '0';
        }
        counter++;
        visited[t] = true;

        if (counter > 4)
            resultcheck();
    }
}

// checking the result
function resultcheck() {
    for (i = 0; i < 8; i++) {
        if (data[pos[i][0]] === 'X' && data[pos[i][1]] === 'X' && data[pos[i][2]] === 'X')
            displayresult(1, pos[i][0], pos[i][1], pos[i][2])
        else if (data[pos[i][0]] === '0' && data[pos[i][1]] === '0' && data[pos[i][2]] === '0')
            displayresult(2, pos[i][0], pos[i][1], pos[i][2]);
        else if (counter == 9)
            displayresult(0);
    }
}

// display winner 
function displayresult(w, ...args) {
    if (w == 1) {
        document.querySelector('.winner').innerText = "Winner is Player-1";
    }
    else if (w == 2) {
        document.querySelector('.winner').innerText = "Winner is Player-2";
    }
    else {
        document.querySelector('.winner').innerText = "Match is drawn";
    }

    for (let i in args) {
        document.querySelectorAll('.content')[args[i]].style.color = "green";
    }

    for (let i = 0; i < 9; i++) {
        visited[i] = true;
    }

    setTimeout(() => { restart() }, 2000);

}
