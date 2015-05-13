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
		$('.newIncident').toggle();
	});
	
	
	$('.btn-new').click(function() {
		var dateFrom = $('.dateFrom').val();
		var dateTo = $('.dateTo').val();
		var incidentTitle = $('.incidentTitle').val();
		var incidentDescription = $('.incidentDescription').val();
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		
		$('<li>').addClass("incident current").appendTo('.incidents-list');
		$('<div>').addClass("incident-date").append("From : " + dateFrom + '<br>' + "To : " + dateTo).appendTo(".incident:last");
		$('<div>').addClass("incident-main").appendTo(".incident:last");
		$('<div>').addClass("incident-title").text(incidentTitle).appendTo(".incident-main:last");
		$('<div>').addClass("incident-description").text(incidentDescription).appendTo(".incident-main:last");
		/*$('<bouton>').addClass("btn-supprimer").append("- Supprimer").appendTo(".incident:last");*/
		
		$('.newIncident').hide();
		selectLigne();
		
	});
	
	/*
	$('.btn-supprimer').click(function() {
		$('.newIncident').toggle();
	});
	*/

};

$(document).ready(main);