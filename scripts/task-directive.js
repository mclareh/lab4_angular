(function() {
function taskDirective() {
	return {
		controller: "FormController as test",
		restrict: "A",
		link: function($scope, $element, $attrs) {
			$element.on("mouseenter", function() {
				$element.css("color", "red");
			}).on("mouseleave", function() {
				$element.css("color", "black");
			});
		}
	};
}
	
angular
	.module("app")
	.directive("taskDirective", taskDirective)
})();