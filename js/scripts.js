new Vue({
      el: '#app',
      data: {
            todos: [
                  { text: 'Fare la spesa', done: false },
                  { text: 'Pulire la casa', done: true },
                  { text: 'Fare gli esercizi', done: false },
                  // Aggiungi altri "to do" secondo necessità
            ],
            newTodo: ''
      },
      methods: {
            addTodo: function() {
                  if (this.newTodo.trim() !== '') {
                  this.todos.push({ text: this.newTodo, done: false });
                  this.newTodo = '';
                  }
            },
            removeTodo: function(todo) {
                  const index = this.todos.indexOf(todo);
                  if (index !== -1) {
                  this.todos.splice(index, 1);
                  }
            }
      }
});