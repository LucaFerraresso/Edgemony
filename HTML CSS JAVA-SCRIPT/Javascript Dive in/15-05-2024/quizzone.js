//QUIZZONE

let score = 0
let domanda1 = prompt("quanti giorni ci sono in una settimana")
switch (domanda1) {case "risposta1":
        console.log("10");
        break
        case "risposta2":
            console.log("20");
            break
            case "risposta3":
                console.log("30");
                break
                case "risposta4":
                    console.log("7");
                    break
}
if (domanda1==risposta4){
    score = score+3;
}else{
    score = score-1;
}
console.log("score domanda1:", score)

let score2 = 0;
let domanda2 = prompt("quanti ore ci sono in un giorno")
switch (domanda2) {case "domanda2":
        console.log("10");
        break
        case "risposta2":
            console.log("20");
            break
            case "risposta3":
                console.log("30")
                break
                case "risposta4":
                    console.log("24");
                    break
}
if (domanda2==risposta4){
    score2 = score2+3;
}else{
    score2 = score2-1
}
console.log("score domanda2:", score2);

let score3 = 0;
let domanda3 = prompt("quanti giorni ci sono in un anno")
switch (domanda3) {case "domanda-3":
        console.log("10");
        break
        case "risposta2":
            console.log("20");
            break
            case "risposta3":
                console.log("30")
                break
                case "risposta4":
                    console.log("365.25");
                    break   
}
if (domanda3==risposta4){
    score3= score3+3;
}else{
    score3= score3-1;
}
console.log("score domanda3:", score3);
let domanda4 = prompt("quante settimane ci sono in un anno")
switch (domanda4) {case "domanda-4":
        console.log("10");
        break
        case "risposta2":
            console.log("20");
            break
            case "risposta3":
                console.log("30")
                break
                case "risposta4":
                    console.log("52");
                    break
}
if (domanda4==risposta4){
    score4 = score4+3
}else{
    score4 = score4-1
}
console.log("score domanda4:", score4);

const risultatofinale = Number(score1)+Number(score2)+Number(score3)+Number(score4);
console.log("risultato finale:", risultatofinale);

if (risultatofinale==12){
    console.log("sei un campione");
}else{
    console.log("ritenta e concentrati")
}
