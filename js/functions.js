$(document).ready(function()
{
	data: ""
	$.get('portions/home.html', function(data) {
			$("#content").empty()
			$('#content').html(data)
			$(".home").fadeIn(700)
	});
	
	$("div.roundl").corner("left");
	$("div.roundr").corner();
	//$("ul#sliding-navigation > li a").corner();
	
	$("ul#sliding-navigation > li a").click(function(){
			$("ul#sliding-navigation > li a").removeClass("selected")
			$(this).addClass("selected");
	})
	
	$("div#logo").fadeIn(700)
	slide("#menu")

});

function slide(navigation_id)
{
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";

	$(link_elements).each(function(i)
	{
		$(this).parent().click(function(){
				var lastattr = $('#container > #content > div').attr("class")
				//$("#content").empty()
				$("."+lastattr).fadeOut(700)
		     	var attr = $(this).attr("id");
				$.get('portions/'+attr+'.html', function(data) {
				$("#container > #content").empty()
				//$("#content").height("auto")
				  $('#container > #content').html(data)
				  $("."+attr).fadeIn(700)
				});
			})
	});
}
