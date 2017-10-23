var AppDispatcher = require('../dispatcher/AppDispatcher');

var BtnActions = {
    addItem: function (text) {
        AppDispatcher.dispatch({
           actionType: 'ADD_NEW_ITEM',
           text: text
        });
    }
};

module.exports = BtnActions;