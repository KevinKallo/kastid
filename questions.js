import inquirer from 'inquirer';
import Checkbox from 'prompt-checkbox';
inquirer
    .prompt([
        {type:'confirm',name:'confirm',message:'Are you real?'},  
        {type:'password',name:'password',message:'Say something?', mask:''},
        {type:'checkbox',name:'checkbox',message:'What is your sex?', choices: ['female','male','other',]},
        {type:'rawlist',name:'rawlist',message:'Millise neist valiksid?', choices: ['Sinine','Punane','Kollane',]},
        {type:'input',name:'eyecolor',message:'Kus su ema on?'},
        {type:'list',name:'list',message:'What is your eyecolor?', choices: ["Sinine","roheline","pruun","hall",]},
        {type:'editor',name:'editor',message:''}, 
        {type:'expand',name:'expand',message:'gay või mitte?', choices: [{key:"y",value:"yes"},{key:"n",value:"no"}]},
        {type:'number',name:'number',message:'mis on sinu IQ?'}, 

    ])
    .then((answer)=> {
        console.log(answer.confirm);
        console.log(`sa ütlesid ${answer.password}`);
        console.log(`You are ${answer.checkbox}`);
        console.log(`You like ${answer.rawlist}`);
        console.log(answer.eyecolor);
        console.log(`Mu silma värv on ${answer.list}`);
        console.log(` ${answer.editor}`);
        console.log(` ${answer.expand}`);
        console.log(` ${answer.number}`);
        



    })
    

    
