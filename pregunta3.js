// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let retorno;
    let i = 0;
    let numOrd =  nums.sort((a,b) => b-a);

    while(i < numOrd.length-1 && i < 3){
        if(numOrd[i]===numOrd[i+1]){
            numOrd.shift();
        } else {
            i++;
        }
        if(i==2){
            retorno = numOrd[i]
        }
    }
    return retorno;
}
console.log([4,3,4,5,1].sort((a,b) => b-a).splice(2,1));

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);