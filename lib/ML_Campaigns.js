var ML_Rest = require('./base/ML_Rest');
var inherits = require('util').inherits;
function ML_Campaigns($api_key) {
    this.name = 'campaigns';
    ML_Rest.call(this, $api_key);


}
inherits(ML_Campaigns, ML_Rest);

ML_Campaigns.prototype = {
    getRecipients: function (data, cb)
    {
        var $data = data || null;
        this.path += 'recipients/';
        return this.execute('GET', $data, cb);
    },
    getOpens: function (data, cb)
    {
        var $data = data || null;
        this.path += 'opens/';
        return this.execute('GET', $data, cb);
    },
    getClicks: function (data, cb)
    {
        var $data = data || null;
        this.path += 'clicks/';
        return this.execute('GET', $data, cb);
    },
    getUnsubscribes: function (data, cb)
    {
        var $data = data || null;
        this.path += 'unsubscribes/';
        return this.execute('GET', $data, cb);
    },
    getBounces: function (data,cb)
    {
        var $data = data || null;
        this.path += 'bounces/';
        return this.execute('GET', $data, cb);
    },
    getJunk: function (data,cb)
    {
        var $data = data || null;
        this.path += 'junk/';
        return this.execute('GET', $data, cb);
    }
};

module.exports = ML_Campaigns;