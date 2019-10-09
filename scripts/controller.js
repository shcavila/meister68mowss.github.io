
//test

$(document).ready(function () {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    
    client.on('connect', function () {
        console.log('connected')
    })
    $('#btnOff').attr('disabled',true)
    $('p').text('The device is currently turned off')

   


    $('#btnOn').click(function () {
        let topic = 'sharmen/device/status';
        let payload = 'Turned On '+new Date($.now())
        client.publish(topic, payload)
        $('p').text('The device is currently turned on')
        $('#btnOn').attr('disabled',true)
        $('#btnOff').attr('disabled',false)
    })

    $('#btnOff').click(function () {
        let topic = 'sharmen/device/status';
        let payload = 'Turned Off '+new Date($.now())
        client.publish(topic, payload)
        $('p').text('The device is currently turned off')
        $('#btnOn').attr('disabled',false)
        $('#btnOff').attr('disabled',true)
    })


})
