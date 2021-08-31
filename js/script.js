/**let chase={
    name:'Serge',
    age:'21',
}
console.log(chase)

let personNames = ['Serge', 'Tuyambaze'];
console.log(personNames[0]);

function greatings(name, surname){
    console.log('Good Morning' +''+ name +''+ surname);
}
greatings(name="Serge", surname="Chase");*/

function bmi(weight, height){
    return weight/(height*height);
}

function results(name, surname){
    console.log('Hello'+''+name+''+surname+''+'your Body mass index is'+ ''+(bmi(70,1.7)));
}

results(' Chase', ' Serge');