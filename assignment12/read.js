
const fs = require('fs')
const readline = require('readline');



let readDirectoryAsynchronously = () => {

    const r = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r.question('Please enter name of source directory - ', (answer1) => {
        fs.readdir(answer1, (err, file1) => {
            if (err) {
                console.log(err)
                r.close();
            } else {
                if(file1.length==0){
                    console.log("Source directory is empty");
                    r.close();
                }else{
                for(let i=0;i<file1.length;i++){
                    console.log(` ${i+1}. ${file1[i]}`)
                }
                r.question('Please enter serial number of file you want to copy  - ', (answer) => {
                   let fileNumber = answer
                   if(fileNumber>file1.length){
                       console.log("Please enter valid serial number of file, as per on screen");
                       r.close();
                   }else{
                    r.question('Please enter name of destination directory - ', (answer) => {
                        fs.readdir(answer,(err,file)=>{
                            if(err){
                                console.log("Destination directory is not available");
                                r.close();
                            }else{
                                let sourcePath = `./${answer1}/${file1[fileNumber-1]}`
                                copyFile(sourcePath,answer,file1[fileNumber-1])
                                r.close()
                            }
                        })
                       
                    });
                   }
                })
              }
            }
        });

    })
}




  let copyFile = (source,destinationDirectory,fileName) => {
     
      let destPath = `./${destinationDirectory}/${fileName}`;
   
      fs.closeSync(fs.openSync(destPath, 'w'));

    let readStream = fs.createReadStream(source)
    let writeStream = fs.createWriteStream(destPath)
    readStream.on('data',(chunk)=>{
          
        writeStream.write(chunk)
        // writeStream.on('open', function(fd) {
        //     console.log("writing")
           
           
        // });
       
    })
    readStream.on('end',()=>{
        console.log('File Read Complete')
        writeStream.end()
        console.log('File Write Complete')
    })
}

module.exports = {
    readDirectory: readDirectoryAsynchronously
}