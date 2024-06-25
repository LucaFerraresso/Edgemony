//esercizio 1: data una funzione......
function indicazioni(...directions){ //uso il rest operator perche' le indicazioni sono indefinite
    for(let i=0; i<directions.length; i++){ //itero gli elementi dell'array [...direction]
        console.log(directions[i]); //per ogni interazione, stampo l'elemento
    }
}
indicazioni("su","giu","sinistra","destra"); //in questo caso applico la funzione a 4 parametri, mi aspetto 4 risultati
