var box_1 = document.getElementById('1');
var box_2 = document.getElementById('2');
var box_3 = document.getElementById('3');
var box_4 = document.getElementById('4');
var box_5 = document.getElementById('5');
var box_6 = document.getElementById('6');
var box_7 = document.getElementById('7');
var box_8 = document.getElementById('8');
var box_9 = document.getElementById('9');
var turn = 1;
var play = 1;
var arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

document.getElementById('play_chk').addEventListener('click',()=>location.reload());
setInterval(() => {

    if (play == 1) {
        if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) {
            play = 0;
            box_1.style.backgroundColor = '#66f75c';
            box_2.style.backgroundColor = '#66f75c';
            box_3.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2) {
            play = 0;
            box_1.style.backgroundColor = 'red';
            box_2.style.backgroundColor = 'red';
            box_3.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) {
            play = 0;
            box_4.style.backgroundColor = '#66f75c';
            box_5.style.backgroundColor = '#66f75c';
            box_6.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2) {
            play = 0;
            box_4.style.backgroundColor = 'red';
            box_5.style.backgroundColor = 'red';
            box_6.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) {
            play = 0;
            box_7.style.backgroundColor = '#66f75c';
            box_8.style.backgroundColor = '#66f75c';
            box_9.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2) {
            play = 0;
            box_7.style.backgroundColor = 'red';
            box_8.style.backgroundColor = 'red';
            box_9.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) {
            play = 0;
            box_1.style.backgroundColor = '#66f75c';
            box_4.style.backgroundColor = '#66f75c';
            box_7.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2) {
            play = 0;
            box_1.style.backgroundColor = 'red';
            box_4.style.backgroundColor = 'red';
            box_7.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) {
            play = 0;
            box_2.style.backgroundColor = '#66f75c';
            box_5.style.backgroundColor = '#66f75c';
            box_8.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2) {
            play = 0;
            box_2.style.backgroundColor = 'red';
            box_5.style.backgroundColor = 'red';
            box_8.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) {
            play = 0;
            box_3.style.backgroundColor = '#66f75c';
            box_6.style.backgroundColor = '#66f75c';
            box_9.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2) {
            play = 0;
            box_3.style.backgroundColor = 'red';
            box_6.style.backgroundColor = 'red';
            box_9.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) {
            play = 0;
            box_1.style.backgroundColor = '#66f75c';
            box_5.style.backgroundColor = '#66f75c';
            box_9.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2) {
            play = 0;
            box_1.style.backgroundColor = 'red';
            box_5.style.backgroundColor = 'red';
            box_9.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        if (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1) {
            play = 0;
            box_3.style.backgroundColor = '#66f75c';
            box_5.style.backgroundColor = '#66f75c';
            box_7.style.backgroundColor = '#66f75c';
            document.getElementById('score').innerHTML='User is winner!!';
        }
        else if (arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2) {
            play = 0;
            box_3.style.backgroundColor = 'red';
            box_5.style.backgroundColor = 'red';
            box_7.style.backgroundColor = 'red';
            document.getElementById('score').innerHTML='Computer is winner!!';
        }
        else {
            let flag = 1;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (arr[i][j] == 0) {
                        flag = 0;
                        break;
                    }
                }
            }
            if (flag == 1) {
                play = 0;
                document.getElementById('score').innerHTML='Draw';

            }
        }
    }



    box_1.addEventListener('click', () => {
        if (turn == 1 && arr[0][0] == 0 && play == 1) {
            turn = -1;
            arr[0][0] = 1;
            box_1.innerHTML = 'X';
        }
    });
    box_2.addEventListener('click', () => {
        if (turn == 1 && arr[0][1] == 0 && play == 1) {
            turn = -1;
            arr[0][1] = 1;
            box_2.innerHTML = 'X';
        }
    });
    box_3.addEventListener('click', () => {
        if (turn == 1 && arr[0][2] == 0 && play == 1) {
            turn = -1;
            arr[0][2] = 1;
            box_3.innerHTML = 'X';
        }
    });
    box_4.addEventListener('click', () => {
        if (turn == 1 && arr[1][0] == 0 && play == 1) {
            turn = -1;
            arr[1][0] = 1;
            box_4.innerHTML = 'X';
        }
    });
    box_5.addEventListener('click', () => {
        if (turn == 1 && arr[1][1] == 0 && play == 1) {
            turn = -1;
            arr[1][1] = 1;
            box_5.innerHTML = 'X';
        }
    });
    box_6.addEventListener('click', () => {
        if (turn == 1 && arr[1][2] == 0 && play == 1) {
            turn = -1;
            arr[1][2] = 1;
            box_6.innerHTML = 'X';
        }
    });
    box_7.addEventListener('click', () => {
        if (turn == 1 && arr[2][0] == 0 && play == 1) {
            turn = -1;
            arr[2][0] = 1;
            box_7.innerHTML = 'X';
        }
    });
    box_8.addEventListener('click', () => {
        if (turn == 1 && arr[2][1] == 0 && play == 1) {
            turn = -1;
            arr[2][1] = 1;
            box_8.innerHTML = 'X';
        }
    });
    box_9.addEventListener('click', () => {
        if (turn == 1 && arr[2][2] == 0 && play == 1) {
            turn = -1;
            arr[2][2] = 1;
            box_9.innerHTML = 'X';
        }
    });

    while (turn == -1 && play == 1) {
        console.log('Hi')
        let x = Math.floor(Math.random() * 9 + 1);
        if (x == 1 && arr[0][0] == 0) {
            turn = 1;
            arr[0][0] = 2;
            box_1.innerHTML = 'O';
            break;
        }
        else if (x == 2 && arr[0][1] == 0) {
            turn = 1;
            arr[0][1] = 2;
            box_2.innerHTML = 'O';
            break;
        }
        else if (x == 3 && arr[0][2] == 0) {
            turn = 1;
            arr[0][2] = 2;
            box_3.innerHTML = 'O';
            break;
        }
        else if (x == 4 && arr[1][0] == 0) {
            turn = 1;
            arr[1][0] = 2;
            box_4.innerHTML = 'O';
            break;
        }
        else if (x == 5 && arr[1][1] == 0) {
            turn = 1;
            arr[1][1] = 2;
            box_5.innerHTML = 'O';
            break;
        }
        else if (x == 6 && arr[1][2] == 0) {
            turn = 1;
            arr[1][2] = 2;
            box_6.innerHTML = 'O';
            break;
        }
        else if (x == 7 && arr[2][0] == 0) {
            turn = 1;
            arr[2][0] = 2;
            box_7.innerHTML = 'O';
            break;
        }
        else if (x == 8 && arr[2][1] == 0) {
            turn = 1;
            arr[2][1] = 2;
            box_8.innerHTML = 'O';
            break;
        }
        else if (x == 9 && arr[2][2] == 0) {
            turn = 1;
            arr[2][2] = 2;
            box_9.innerHTML = 'O';
            break;
        }
    }



}, 50);
