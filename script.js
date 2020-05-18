const todos = ["Go to market", "Buy food", "Make dinner"];
const lists = [];
for (var todo of todos) {
  let list = React.createElement("li", null, todo);
  lists.push(list);
}
const App = React.createElement("ul", null, ...lists);
const root = document.getElementById("root");
ReactDOM.render(App, root);
