var ML_Rest_Base = require('./ML_Rest_Base');
var inherits = require('util').inherits;
function ML_Rest($api_key) {
    ML_Rest_Base.call(this);


    this.apiKey = $api_key;
    this.path = this.url + this.name + '/';


    this.setId = function ($id) {
        this.id = $id;
        if (this.id)
            this.path = this.url + this.name + '/' + $id + '/';
        else
            this.path = this.url + this.name + '/';
        return this;
    };
    this.getAll = function (data, cb) {
        this.path = this.url + this.name + '/';
        var $data = data || null;
        this.execute('GET', $data, cb);
    };
    this.get = function (data, cb)
    {
        var $data = data || null;
        if (!this.id)
            throw new InvalidArgumentException('ID is not set.');
        this.execute('GET', $data, cb);
    };
    this.add = function (data, cb)
    {
        var $data = data || null;
        this.path = this.url + this.name + '/';
        this.execute('POST', $data, cb);
    };
    this.put = function (data, cb)
    {
        var $data = data || null;
        this.path = this.url + this.name + '/';
        this.execute('PUT', $data, cb);
    };
    this.remove = function (data, cb)
    {
        var $data = data || {id: this.id};
        $data.id = this.id;
        this.path = this.url + this.name + '/';
        this.execute('DEL', $data, cb);
    };



}
inherits(ML_Rest, ML_Rest_Base);


module.exports = ML_Rest;