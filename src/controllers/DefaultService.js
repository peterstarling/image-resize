'use strict';

exports.deleteImage = function(args, res, next) {
  /**
   * Delete an Image object
   *
   * id Long ID of Image object
   * no response value expected for this operation
   **/
  res.end();
}

exports.getImage = function(args, res, next) {
  /**
   * Return an Image object
   *
   * id Long ID of Image object
   * returns Image
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "image",
  "width" : 640,
  "id" : 1,
  "url" : "http://example.com/image-640x480.png",
  "height" : 480
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.listImages = function(args, res, next) {
  /**
   * Return all Image objects
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "image",
  "width" : 640,
  "id" : 1,
  "url" : "http://example.com/image-640x480.png",
  "height" : 480
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.resizeImage = function(args, res, next) {
  /**
   * Return an Image object resized according to query parameters
   *
   * id Long ID of image object to fetch
   * width Long Target width
   * height Long Target height
   * returns Image
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "image",
  "width" : 640,
  "id" : 1,
  "url" : "http://example.com/image-640x480.png",
  "height" : 480
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.uploadImage = function(args, res, next) {
  /**
   * Upload an image file and create a new Image object
   *
   * fileName String The image file name (optional)
   * fileData File The Image file to upload (optional)
   * returns Image
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "image",
  "width" : 640,
  "id" : 1,
  "url" : "http://example.com/image-640x480.png",
  "height" : 480
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

