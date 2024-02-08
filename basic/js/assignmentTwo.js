//Assignment 2 code is here

function checkName(name){
    //Unexpected handle start
    if(typeof name!=='string'){
        return "invalid";
    }
    //Unexpected handle end
    
    const lastChar = name.charAt(name.length - 1);
    const nametext = ['a', 'y', 'i', 'e', 'o', 'u', 'w','A','Y','I','E','O','U','W'];
    if (nametext.includes(lastChar)) {
        return 'Good Name';
    }
    else{
        return "Bad Name";

    }

}

const result = checkName('Salman');
console.log(result);
