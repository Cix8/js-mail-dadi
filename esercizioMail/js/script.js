const emailList = ['franco@mymail.com','ciccio@email.it','piero@libero.it','gino@gmail.com','anonimo@nomail.com'];
const userEmail = prompt('Inserisci la tua email');

let result = 'Spiacente, non sei in lista...';

for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
        result = `La tua email ${userEmail} è presente nella mia lista, puoi accedere!!!`;
    }
}

console.log(result);