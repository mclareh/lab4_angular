(function() {
function greyDirective() {
	return {
		controller: "FormController as test",
		restrict: "A",
		link: function($scope, $element, $attrs) {
			$element.on("mouseenter", function() {
				$element.css("background-color", "#eee").css("border-radius", "3px");
			}).on("mouseleave", function() {
				$element.css("background-color", "white").css("border-radius", "3px");
			});
		}
	};
}
	
angular
	.module("app")
	.directive("greyDirective", greyDirective)
})();