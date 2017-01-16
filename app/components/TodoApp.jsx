let React = require('react');
let TodoList = require('TodoList');

let TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
          {
              id: 1,
              text: 'Do something'
          },
          {
              id: 2,
              text: 'Clean the yard'
          },
          {
              id: 3,
              text: 'Learn more React'
          }
      ]
    };
  },

  render: function() {
      let {todos} = this.state;
    return (
        <div>
          <TodoList todos={todos}/>
        </div>
    )
  }
});

module.exports = TodoApp;
