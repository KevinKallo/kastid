import inquirer from 'inquirer';
inquirer
    .prompt([
        {type:'input',name:'age',message:'How old are you?'},  
        {type:'input',name:'gender',message:'What is your gender?'},
        {type:'input',name:'name',message:'What is your name?'},
        {type:'input',name:'lastname',message:'What is your lastname?'},
        {type:'input',name:'eyecolor',message:'What is your eyecolor?'},        
    ])
    .then((answer)=> {
        console.log('I am ' + answer.age + ' years old');
        console.log('I am ' + answer.gender);
        console.log('My name is ' + answer.name);
        console.log('My last name is ' + answer.lastname);
        console.log('My eyecolor is ' + answer.eyecolor);
    })
