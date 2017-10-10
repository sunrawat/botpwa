if("serviceWorker" in navigator){

	navigator.serviceWorker
		.register('./sw.js' , {scope : './'})
		.then(function(registeration){
			console.log("serviceWorker registeration success !");
		})
		.catch(function(err){
			console.log("serviceWorker notsuccess !" + err);
		});


		//document.getElementById('load').src = "http://manifesto.co.uk/wp-content/uploads/2014/06/happy-user-experience-design.jpg";

}

window.setInterval(function(){
	if(navigator.onLine){
		$('.offlinebox').hide().focus();
		$('span.status').removeClass('offline');
		$('span.status').text('online').addClass('online');
	}else{
		$('.offlinebox').show().focus();
		$('span.status').removeClass('online');
		$('span.status').text('offline').addClass('offline');
	}
},1000)