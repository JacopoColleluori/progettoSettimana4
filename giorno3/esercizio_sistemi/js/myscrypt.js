
function calcAnni(anni1, anni2) {

    if (anni1 >= 0 && anni2 >= 0) {

        return calcMagg();

        function calcMagg() {

            if (anni1 > anni2) {

                anni3 = anni1 - anni2;

            } else {

                anni3 = anni2 - anni1;

            }

            return anni3;
        }
    }

    else {
        return "riprova, gli anni vanno solo avanti";
    }
}

var frecciaWorld = () => { console.log("Hello Freak Bitches"); };

console.log(calcAnni(120, 93));
frecciaWorld();


