

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