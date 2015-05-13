var main = function() {
	
		var selectLigne = function() {
		$('.incident').click(function() {
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		$(this).addClass("current");
		$(this).children('.incident-main').children('.incident-description').show();						 
	});
	};
	
	selectLigne();

	$('.btn-ajouter').click(function() {
		$('.newIncident').show();
	});
	
	$('.btn-new').click(function() {
		var dateFrom = $('.dateFrom').val();
		var dateTo = $('.dateTo').val();
		var incidentTitle = $('.incidentTitle').val();
		var incidentDescription = $('.incidentDescription').val();
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		
		$('<li>').addClass("incident current").appendTo('.incidents-list');
		$('<div>').addClass("incident-date").appendTo(".incident:last");
		$(".incident-date:last").append("From : " + dateFrom + '<br>' + "To : " + dateTo);
		$('<div>').addClass("incident-main").appendTo(".incident:last");
		$('<div>').addClass("incident-title").appendTo(".incident-main:last");
		$(".incident-title:last").text(incidentTitle);
		$('<div>').addClass("incident-description").appendTo(".incident-main:last");
		$(".incident-description:last").text(incidentDescription);
		
		$('.newIncident').hide();
		selectLigne();
	});

};

$(document).ready(main);