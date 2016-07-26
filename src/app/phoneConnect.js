'Use Strict'

let PhoneConnect = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        PhoneConnect.receivedEvent('deviceready');
        console.log("App Ready");
    }
};
