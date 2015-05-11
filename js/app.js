var main = function() {

	$('.incident').click(function() {
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		$(this).addClass("current");
		$(this).children('.incident-main').children('.incident-description').show();
	});

	$('.btn-ajouter').click(function() {
		$('.newIncident').toggle();
	});
	
	$('.btn-new').click(function() {
		var dateFrom = $('.dateFrom').val();
		var dateTo = $(this).children('.dateTo').val();
		var incidentTitle = $(this).children('.incidentTitle').val();
		var incidentDescription = $(this).children('incidentDescription').val();
		
		$('<li>').text(dateFrom).appendTo('.incidents-list');
		
	});

};

$(document).ready(main);