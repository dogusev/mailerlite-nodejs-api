var ML_Subscribers = require('./lib/ML_Subscribers');
var ML_Campaigns = require('./lib/ML_Campaigns');
var ML_Lists = require('./lib/ML_lists');

module.exports = function ($apiKey) {

    this.subscribers = new ML_Subscribers($apiKey);

    this.campaigns = new ML_Campaigns($apiKey);

    this.lists = new ML_Lists($apiKey);

};