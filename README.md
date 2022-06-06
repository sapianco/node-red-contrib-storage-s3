# node-red-contrib-storage-s3

Node-Red module to support storage of node-red configuration data in AWS S3, Minio and Ceph RadosGW

This Node-red-contrib-storage-s3 Fork from Kieran Dolan (@kierandol) npm.js version, Change setting to use enviroments variables to work better whit Kubernetes.

Enviroment variables.

``` env
S3_ACCESS_KEY_ID=CHANGEME
S3_SECRET_ACCESS_KEY=CHANGEME
S3_ENDPOINT=https://ceph-rados-gw.example.com.co
S3_FORCE_PATH_STYLE=1
S3_SIGNATURE_VERSION=v4
S3_BUCKET=nodered-flows ;# Optional
S3_REGION=us-east-1
S3_APP_NAME=nodered ;# Directory on S3
```

Author
-------
Kieran Dolan (@kierandol)

Contributors
------------
Sebastian Rojo (@arpagon) sebatian.rojo at sapian.com.co

Copyright and license
----------------------
Copyright 2014, 2016 IBM Corp. under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0).
