function checaIdade(idade){
    return new Promise(function (resolve,reject){
        setTimeout(4000);
        if(idade >= 18){
            resolve('Maior que 18')
        }
        else{
            reject('Menor que 18')
        }
    });
}

checaIdade(20)  
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });