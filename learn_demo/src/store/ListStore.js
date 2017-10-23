var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items:[],
    getItems: function () {
        return this.items;
    },
       addNewItemHandler: function (txt) {
        this.items.push(txt);
    },
    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = ListStore;