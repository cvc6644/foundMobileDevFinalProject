angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('WowCtrl', function($scope, wow) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.wow = wow.all();
  $scope.updateClass = function (e){
      
      var spec =document.getElementById('spec');
      spec.innerHTML="";
      for(specss in $scope.wow[e].specs){
          var speccc = $scope.wow[e].specs[specss];
          var out = document.createElement('option');
          out.innerHTML = speccc.name;
          spec.appendChild(out);
      }
      spec.removeAttribute('disabled');
      
  };
  $scope.updateSpecs = function (e){
      
  };
})



.controller('GW2Ctrl', function($scope,gw2) {
  
})
.controller('DestinyCtrl', function($scope,destiny){
    
})
.controller('SwtorCtrl',function($scope,swtor){
    
});
