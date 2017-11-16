(function(){
function FormController() {
	var vm = this;
	vm.tasks = [];
	vm.addTask = function(newItem) {
		console.log(newItem);
		vm.tasks.push(newItem);
		vm.newItem = "";
	};
	vm.removeItem = function(index) {
		vm.tasks.splice(index, 1);	
	};
}	
	
angular
	.module("app")
	.controller("FormController", FormController);
})();