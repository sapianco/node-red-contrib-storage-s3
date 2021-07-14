require('dotenv').config()
var AWS = require('aws-sdk');

var s3  = new AWS.S3({
          accessKeyId: process.env.S3_ACCESS_KEY_ID ,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ,
          endpoint: process.env.S3_ENDPOIT ,
          s3ForcePathStyle: process.env.S3_FORCE_PATH_STYLE, // needed with minio?
          signatureVersion: process.env.S3_SIGNATURE_VERSION
});

// putObject operation.

var params = {Bucket: process.env.S3_BUCKET, Key: 'testobject', Body: 'Hello from MinIO!!'};

s3.putObject(params, function(err, data) {
      if (err)
       console.log(err)
      else   
       console.log("Successfully uploaded data to testbucket/testobject");
});

// getObject operation.

var params = {Bucket: process.env.S3_BUCKET, Key: 'testobject'};

var file = require('fs').createWriteStream('/tmp/mykey');

s3.getObject(params).
on('httpData', function(chunk) { file.write(chunk); }).
on('httpDone', function() { file.end(); }).
send();
