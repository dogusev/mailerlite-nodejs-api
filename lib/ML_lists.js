var ML_Rest = require('./base/ML_Rest');
var inherits = require('util').inherits;
function ML_Lists($api_key) {
    this.name = 'lists';
    ML_Rest.call(this, $api_key);

    this.getActive = function (data,cb)
    {
        var $data = data || null;
        this.path += 'active/';
        this.execute('GET', $data,cb);
    };
    this.getUnsubscribed = function (data,cb)
    {
        var $data = data || null;
        this.path += 'unsubscribed/';
        this.execute('GET', $data,cb);
    };
    this.getBounced = function (data,cb)
    {
        var $data = data || null;
        this.path += 'bounced/';
        this.execute('GET', $data,cb);
    };

    

}
inherits(ML_Lists, ML_Rest);


module.exports = ML_Lists;