module.exports = function() {
'use strict';
var myVault = {};
  return {
    setValue : function(key, value) {
     myVault[key] = value;
    },
    getValue : function (key) {
      if (myVault.hasOwnProperty(key)){
        return myVault[key];
      }
      return null;
    }
  };
};