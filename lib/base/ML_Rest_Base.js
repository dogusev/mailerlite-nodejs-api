var request = require('request');
var _ = require('underscore');
var send = function (data, cb) {
    console.log('send data',JSON.stringify(data));
    request[data.method.toLowerCase()](data.url, data.data || {},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    cb && cb({success: true, data: JSON.parse(body)});
                } else {
                    cb && cb({success: false, message: body});
                }

            });
};
var getAsUriParameters = function (data) {
    return Object.keys(data).map(function (k) {
        if (_.isArray(data[k])) {
            var keyE = encodeURIComponent(k + '[]');
            //return keyE + '=' + encodeURIComponent(JSON.stringify(data[k]))
            return data[k].map(function (subData) {
                return keyE + '=' + encodeURIComponent(subData);
            }).join('&');
        } else {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        }
    }).join('&');
};

function ML_Rest_Base(url, verb) {
    this.$url;
    this.$verb;
    this.$requestBody;
    this.$requestLength;
    this.$username;
    this.$password;
    this.$acceptType;
    this.$responseBody;
    this.$responseInfo;
    this.apiKey = '';
    this.$path = '';

    var $this = this;

    this.flush = function ()
    {
        $this.requestBody = null;
        $this.requestLength = 0;
        $this.verb = 'GET';
        $this.responseBody = null;
        $this.responseInfo = null;
    };

    this.execute = function (method, data, cb) {
        var $method = method || null;
        var $data = data || null;

        var $ch = {};
        this.setAuth($ch);
        if ($method)
            $this.verb = $method;
        $this.requestBody = $data;



        switch (($this.verb).toUpperCase()) {
            case 'GET':
                $this.requestBody = $this.buildPostBody();
                this.executeGet($ch, cb);
                break;
            case 'POST':

                this.executePost($ch, cb);
                break;
            case 'PUT':
                this.executePut($ch, cb);
                break;
            case 'DEL':
                this.executeDelete($ch, cb);
                break;
        }


    }

    this.buildPostBody = function () {
        var $data = JSON.parse(JSON.stringify($this.requestBody)) || {};
        $data['apiKey'] = $this.apiKey;

        if (!$data instanceof Array)
        {
            console.error('Invalid data input for postBody.  Array expected');
            return;
        }
        return getAsUriParameters($data);

    }

    this.executeGet = function ($ch, cb) {
        $this.path += ($this.path.indexOf('?') < 0 ? '?' : '&') + $this.requestBody;
        this.doExecute($ch, cb);
    }

    this.executePost = function ($ch, cb) {
        var str = $this.buildPostBody();
        $this.path += ($this.path.indexOf('?') < 0 ? '?' : '&') + str;
        $ch.data = $this.requestBody;

        this.doExecute($ch, cb);
    }

    this.executePut = function ($ch, cb)
    {
        $this.path += ($this.path.indexOf('?') < 0 ? '?' : '&') + $this.buildPostBody();
        $ch.data = $this.requestBody;
        this.doExecute($ch, cb);

    }

    this.executeDelete = function ($ch, cb)
    {
        $this.path += ($this.path.indexOf('?') < 0 ? '?' : '&') + $this.buildPostBody();

        this.doExecute($ch, cb);
    }

    this.doExecute = function ($curlHandle, cb) {
        send({
            url: this.path,
            method: this.verb,
            data: $curlHandle.data,
        }, function (r) {
            $this.responseBody = r;
            cb && cb(r);
        });

    }

    this.setAuth = function ($curlHandle) {
        if ($this.username !== null && $this.password !== null)
        {
            //??$curlHandle.setopt('HTTPAUTH',CURLAUTH_DIGEST);
            $curlHandle['USERPWD'] = $this.username + ':' + $this.password;
        }
    }

    this.getAcceptType = function ()
    {
        return $this.acceptType;
    }

    this.setAcceptType = function ($acceptType)
    {
        $this.acceptType = $acceptType;
    }

    this.getPassword = function ()
    {
        return $this.password;
    }

    this.setPassword = function ($password)
    {
        $this.password = $password;
    }

    this.getResponseBody = function ()
    {
        return $this.responseBody;
    }

    this.getResponseInfo = function ()
    {
        return $this.responseInfo;
    }

    this.getUrl = function ()
    {
        return $this.url;
    }

    this.setUrl = function ($url)
    {
        $this.url = $url;
    }

    this.getUsername = function ()
    {
        return $this.username;
    }

    this.setUsername = function ($username)
    {
        $this.username = $username;
    }

    this.getVerb = function ()
    {
        return $this.verb;
    }

    this.setVerb = function ($verb)
    {
        $this.verb = $verb;
    }

    var $url = url || 'https://app.mailerlite.com/api/v1/';
    var $verb = verb || 'GET';
    $this.url = $url;
    $this.verb = $verb;
    $this.requestLength = 0;
    $this.username = null;
    $this.password = null;
    $this.acceptType = 'application/json';
    $this.responseBody = null;
    $this.responseInfo = null;


}

module.exports = ML_Rest_Base;
