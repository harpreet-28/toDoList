var myController = function myController() {
    var self = this;
    self.editMode = false;
    self.todos = [
        "List 1",
        "List 2",
        "List 3"

    ];
    self.addNewTodo = function() {
        self.todos.push(self.newTodo);
        self.newTodo = "";
    }

    self.triggerEditMode = function() {
        self.editMode = !self.editMode;
    };

   self.deleteTodo = function(index){
   	self.todos.splice(index, 1);
   }

}
angular
    .module('myApp')
    .controller('myController', myController);
