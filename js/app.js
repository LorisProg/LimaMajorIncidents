var main = function() {

/*
Add the class "current" to the selected line (li)
Display the description
Remove the class "current" from all other .incident
Hide the description of others
*/
	$(document).on("click", ".incident", function() {
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		$(".btn-supprimer").hide();
		$(this).addClass("current");
		$(this).children('.incident-main').children('.incident-description').show();
		$(this).children(".btn-supprimer").show();
	});

/*
Display the newIncident div when clicking the "Add" button
*/
	$(document).on("click", ".btn-ajouter", function() {
		$('.newIncident').toggle();
	});

/*
Delete the line (il) on which the delete button is.
*/
	$(document).on("click", ".btn-supprimer", function() {
		$(this).parent().remove();
	});

/*
Create a new li with the input of newIncident
Select the new Incident created as the current (a selectLine(.incident:last) would be better)
Hide the newIncident div
*/
	$('.btn-new').click(function() {
		var dateFrom = $('.dateFrom').val();
		var dateTo = $('.dateTo').val();
		var incidentTitle = $('.incidentTitle').val();
		var incidentDescription = $('.incidentDescription').val();
		$('.incident').removeClass("current");
		$('.incident-description').hide();
		$(".btn-supprimer").hide();

		$('<li>').addClass("incident current").appendTo('.incidents-list');
		$('<div>').addClass("incident-date").append("From : " + dateFrom + '<br>' + "To : " + dateTo).appendTo(".incident:last");
		$('<div>').addClass("incident-main").appendTo(".incident:last");
		$('<div>').addClass("incident-title").text(incidentTitle).appendTo(".incident-main:last");
		$('<div>').addClass("incident-description").text(incidentDescription).appendTo(".incident-main:last");
		$('<button>').addClass("btn-supprimer").append("- Supprimer").appendTo(".incident:last");

		$('.newIncident').hide();
	});

};

$(document).ready(main);
