const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',()=>{
        if(err){
            return;
        }
        const second = result
        writeFile('./content/result-saync.txt',
        `Here is the result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');



