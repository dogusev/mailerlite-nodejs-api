var ML_Rest = require('./base/ML_Rest');
var inherits = require('util').inherits;
function ML_Subscribers($api_key) {
    this.name = 'subscribers';
    ML_Rest.call(this, $api_key);
    this.add = function (subscriber, resubscribe, cb) {
        var $resubscribe = resubscribe || 0;
        var $subscriber = subscriber || {};
        $subscriber['resubscribe'] = $resubscribe;
        this.execute('POST', $subscriber, cb);
    };
    this.addAll = function ($subscribers, resubscribe, cb) {
        var $resubscribe = resubscribe || 0;
        var $data = {};
        $data['resubscribe'] = $resubscribe;
        $data['subscribers'] = $subscribers;
        this.path += 'import/';
        this.execute('POST', {form:$data}, cb);
    };
    this.get = function (email, history, cb) {
        var $history = history || 0;
        var $email = email || null;
        this.setId(null);
        this.path += '?email=' + $email;
        if ($history)
            this.path += '&history=1';
        this.execute('GET', false, cb);
    }
    this.remove = function (email, cb) {
        var $email = email || null;
        this.path += '?email=' + $email;
        this.execute('DEL', false, cb);
    };
    this.unsubscribe = function ($email, cb) {
        this.path += 'unsubscribe/';
        this.execute('POST', {form:{email:$email}}, cb);
    }

}
inherits(ML_Subscribers, ML_Rest);

module.exports = ML_Subscribers;




	