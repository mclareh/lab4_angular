(function(){
var taskList = {
	bindings: {
		tasks: "<",
		itemFilter: "<"
	},
	controller: "FormController",
	template: `
		<ol>
			<li grey-directive ng-repeat="item in $ctrl.tasks | filter: $ctrl.itemFilter">{{ item }}<a task-directive class="material-icons" ng-click="$ctrl.removeItem($index)" >close</a></li>
		</ol>
	`
}
	
angular
	.module("app")
	.component("taskList", taskList)
})();