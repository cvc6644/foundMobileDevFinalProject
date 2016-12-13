angular.module('starter.services', [])

.factory('wow', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var wowData = [
      {
          id:0,
          class: 'Druid',
          specs:[
              {name:'Balance'},
              {name:'Feral'},
              {name:'Guardian'},
              {name:'Restoration'}
          ]
      },
      {
          id:1,
          class:'Death Knight'
      }
      
  ];

  return {
    all: function() {
      return wowData;
    },
    remove: function(chat) {
      wowData.splice(wowData.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < wowData.length; i++) {
        if (wowData[i].id === parseInt(chatId)) {
          return wowData[i];
        }
      }
      return null;
    }
  };
})
.factory('gw2',function(){
    var gw2Data = [];
    return {
    all: function() {
      return gw2Data;
    },
    remove: function(chat) {
      gw2Data.splice(gw2Data.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < gw2Data.length; i++) {
        if (gw2Data[i].id === parseInt(chatId)) {
          return gw2Data[i];
        }
      }
      return null;
    }
  };
})
.factory('destiny',function(){
    var destinyData = [];
    return {
    all: function() {
      return destinyData;
    },
    remove: function(chat) {
      destinyData.splice(destinyData.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < destinyData.length; i++) {
        if (destinyData[i].id === parseInt(chatId)) {
          return destinyData[i];
        }
      }
      return null;
    }
  };
}).factory('swtor',function(){
    var swtorData = [];
    return {
    all: function() {
      return swtorData;
    },
    remove: function(chat) {
      swtorData.splice(swtorData.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < swtorData.length; i++) {
        if (swtorData[i].id === parseInt(chatId)) {
          return swtorData[i];
        }
      }
      return null;
    }
  };
});
