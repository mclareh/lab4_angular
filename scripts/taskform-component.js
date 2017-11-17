(function(){
var taskForm = {

	controller: "FormController",
	template: `
	<div>
		<h1>TO DO List</h1>
		<h4>A place to store the things you have to do!</h4>
		<input type="text" placeholder="Filter your to-dos" ng-model="$ctrl.itemFilter">

		<task-list tasks="$ctrl.tasks" item-filter="$ctrl.itemFilter"></task-list>

		<input type="text" ng-model="$ctrl.newItem" placeholder="Add your to-do">
		<button button-directive ng-click="$ctrl.addTask($ctrl.newItem)">Add</button>
	</div>
	`
}
	
angular
	.module("app")
	.component("taskForm", taskForm)
})();