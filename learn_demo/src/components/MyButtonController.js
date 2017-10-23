var React = require('react');
var createReactClass = require('create-react-class');
var MyButton = require('./MyButton');
var BtnActions = require('../actions/BtnActions');
var ListStore = require('../store/ListStore');

var MyButtonController = createReactClass({
    getInitialState: function(){
        return {
            items: ListStore.getItems()
        };
    },
    componentDidMount: function (){
        ListStore.addChangeListener(this._onChange);
    },
    ComponentWillUnmount: function () {
        ListStore.removeChangeListener(this._onChange);
    },
    _onChange:function () {
      this.setState({items: ListStore.getItems()});
    },
    render: function(){
        return (
            <MyButton onClick={this.createNewItem} items={this.state.items} />
        )
    },
    createNewItem: function (event) {
        BtnActions.addItem('New Item');
        console.log("btnControl create...");
    }
});

module.exports = MyButtonController;