$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	var awesomeness = $(this).attr('data-heading');
  	$('#awesomeness_holder').text(awesomeness);
  });

  $('.skill_teller').on('click', function() {
  	var skill = $(this).attr('data-heading');
  	$('#skill_holder').text(skill);
  });

  $('.meal_teller').on('click', function() {
  	var meal = meals[Math.floor(Math.random()*meals.length)]
  	$('#meal_holder').text(meal);
  });
});
