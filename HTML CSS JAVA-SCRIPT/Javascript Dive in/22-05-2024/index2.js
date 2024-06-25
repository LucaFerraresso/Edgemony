//esercizio 2:

function contaIndicazioni(...directions){
    const conteggio = {su:0,giu:0,sinistra:0,destra:0}; //oggetto conteggio
    const arrayconteggio = Object.keys(directions); //creo array dall'object
    for(let i=0; i<arrayconteggio.length;i++){
        console.log(directions); 
        }
        return directions;
    }
contaIndicazioni("su","giu","sinistra","destra");
