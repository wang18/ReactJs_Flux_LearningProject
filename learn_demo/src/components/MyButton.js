var React = require('react');
var createReactClass = require('create-react-class');

var MyButton=createReactClass({
    itemHTML: function () {
      return this.props.items.map((res, i) => {
          return <li key={i}>{res}->{i}</li>
      });
    },
    render: function () {
        return (
            <div>
                <ul>{this.itemHTML()}</ul>
                <button onClick={this.props.onClick}>New Item</button>
            </div>
        );
    }
});

module.exports = MyButton;