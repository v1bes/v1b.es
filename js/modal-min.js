$(function(){var a=$("#subdomains"),n=$("#modal"),o=n.find(".close"),d=n.find(".modal-content");a.on("click",function(){n.css("display","block"),d.removeClass("modal-animated-out").addClass("modal-animated-in")}),$(document).on("click",function(a){var i=$(a.target);(i.is(n)||i.is(o))&&d.removeClass("modal-animated-in").addClass("modal-animated-out").delay(300).queue(function(a){n.css("display","none"),a()})})});