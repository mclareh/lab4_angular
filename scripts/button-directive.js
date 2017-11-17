(function() {
function buttonDirective() {
	return {
		controller: "FormController as test",
		restrict: "A",
		link: function($scope, $element, $attrs) {
			$element.on("mouseenter", function() {
				$element.css("filter", "opacity(100%)");
			}).on("mouseleave", function() {
				$element.css("filter", "opacity(50%)");
			});
		}
	};
}
	
angular
	.module("app")
	.directive("buttonDirective", buttonDirective)
})();