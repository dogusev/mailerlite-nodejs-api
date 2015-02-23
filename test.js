var $apiKey = '2cf51f2d9681f009556a5d3a6e2e662e';
/* ML Subscribers API */
var Mailerlite = require('./index');
var mailerlite = new Mailerlite($apiKey);

var $ML_Subscribers = mailerlite.subscribers;
var $ML_Campaigns = mailerlite.campaigns;
var $ML_lists = mailerlite.lists;

/*var $subscriber = [
        {
            'email': 'v.polonik@gmail.com',
            'name': 'First name'
        },
        {
            'email': 'v.polonik.netpeak@gmail.com',
            'name': 'First name'
        }
    ];

$ML_Subscribers.setId('1654219').addAll($subscriber, 1, function (r) {
    console.log(r);
});
*/




//$ML_Subscribers.unsubscribe('v.polonik.netpeak@gmail.com', function (r) {
//    console.log(r);
//});


/*
$ML_Subscribers.setId('1654219').remove('d.o.gusev@gmail.com', function (r) {
    console.log(r);
});
*/

/*
$ML_Subscribers.get('d.o.gusev@gmail.com', true, function (r) {
   console.log(r);
});
*/

/*
var $subscriber = {
    form: {
        'email': 'v.polonik.netpeak@gmail.com',
        'name': 'v.polonik'
    }
};
$ML_Subscribers.setId('1654219').add($subscriber, 1 ,function(r){
    console.log(r);
});
*/

/* ML CAMPAINGNS API  */

//$ML_Campaigns.setId('1290337').getJunk(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.setId('1290337').getBounces(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.setId('1290337').getUnsubscribes(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.setId('1290337').getClicks(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.setId('1290337').getOpens(false, function (r) {
//    console.log(r);
//});


//$ML_Campaigns.setId('1290337').getRecipients(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.setId('1290337').get(false, function (r) {
//    console.log(r);
//});

//$ML_Campaigns.getAll(false, function (r) {
//    console.log('getAll', r);
//});





/* ML LISTS API  */

//$ML_lists.setId('1650199').getBounced(false,function (r) {
//    console.log('getBounced', r);
//})

//$ML_lists.setId('1650199').getUnsubscribed(false,function (r) {
//    console.log('getUnsubscribed', r);
//});

//$ML_lists.setId('1650199').getActive(false,function (r) {
//    console.log('getActive', r);
//});

//$ML_lists.getAll(false, function (r) {
//    console.log('getAll', r);
//});

//$ML_lists.setId('1654135').remove(false, function (r) {
//    console.log('remove', r);
//});

//$ML_lists.setId('1650199').put({name:"New name"}, function (r) {
//    console.log('put', r);
//});

//$ML_lists.add({form:{"name": "new list name"}}, function (r) {
//    console.log('add ', r);
//});
//
//$ML_lists.setId('1650199').get(false, function (r) {
//    console.log('get', r);
//});