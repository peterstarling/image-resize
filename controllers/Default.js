'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.deleteImage = function deleteImage (req, res, next) {
  Default.deleteImage(req.swagger.params, res, next);
};

module.exports.getImage = function getImage (req, res, next) {
  Default.getImage(req.swagger.params, res, next);
};

module.exports.listImages = function listImages (req, res, next) {
  Default.listImages(req.swagger.params, res, next);
};

module.exports.resizeImage = function resizeImage (req, res, next) {
  Default.resizeImage(req.swagger.params, res, next);
};

module.exports.uploadImage = function uploadImage (req, res, next) {
  Default.uploadImage(req.swagger.params, res, next);
};
