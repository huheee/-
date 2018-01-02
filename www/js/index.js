
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
         

        console.log('Received Event: ' + id);
    }
};

app.initialize();






function detail_val(cnt){
	d_name = "detail.html?"+$("#dept"+cnt).val()+"&"+$("#num"+cnt).val()+"&"+$("#jpg"+cnt).val();
	//d_name =  encodeURI(d_name, "UTF-8"); 

	location.href = d_name;
}

function poly_val(poly,name){
	alert(poly);
	d_name = "menuSearch.html?"+poly+"&"+name;
	//d_name =  encodeURI(d_name, "UTF-8"); 
	location.href = d_name;
}


function local_val(localnum,name){
	alert(localnum);
	d_name = "menuSearchLocal.html?"+localnum+"&"+name;
	//d_name =  encodeURI(d_name, "UTF-8"); 
	location.href = d_name;
}

