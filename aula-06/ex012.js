var idade = 12 
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log(`Menor de idade`)
} else {
    if (idade >= 16 && idade < 18 || idade >=65){
        console.log(`Voto Opcional`)
        } else {
            console.log(`Voto obrigatorio`)
        }
}