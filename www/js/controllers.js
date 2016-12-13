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
          out.setAttribute('value',specss);
          out.innerHTML = speccc.name;
          spec.appendChild(out);
      }
      spec.removeAttribute('disabled');
      $scope.updateSpecs(0);
      spec.onchange = function (e){
          $scope.updateSpecs(e.target.selectedOptions[0].value);
      }
  };
  $scope.updateSpecs = function (e){
      var list = document.getElementById('list');
      list.removeAttribute('hidden');
      var selectClass = document.getElementsByTagName('select')[0].selectedOptions[0].value;
      var talents = $scope.wow[selectClass].specs[e].ranks;
      var ss = document.getElementsByClassName('talentss');
      for(talent in talents){
          //1,3,5
          var talentss =[ss[talent].childNodes[1],ss[talent].childNodes[3],ss[talent].childNodes[5]];
          //talentss[0].childNodes[1].childNodes[0].childNodes[0].innerText = talents[talent].right.name;
          
          talentss[0].childNodes[1].childNodes[0].childNodes[0].innerText = "";
          var img = document.createElement('img');
          img.setAttribute('src',talents[talent].right.icon);
          
          talentss[0].childNodes[1].childNodes[0].appendChild(img);
          //talentss[0].childNodes[1].childNodes[0].childNodes[0].appendChild(img);
          talentss[1].childNodes[1].childNodes[0].childNodes[0].innerText = talents[talent].center.name;
          
          talentss[1].childNodes[1].childNodes[0].childNodes[0].innerText = "";
          img = document.createElement('img');
          img.setAttribute('src',talents[talent].center.icon);
          talentss[1].childNodes[1].childNodes[0].appendChild(img);
          talentss[2].childNodes[1].childNodes[0].childNodes[0].innerText = "";
          img = document.createElement('img');
          img.setAttribute('src',talents[talent].left.icon);
          talentss[2].childNodes[1].childNodes[0].appendChild(img);
          console.log(talents[talent].right.name);
      }
  };
})



.controller('GW2Ctrl', function($scope,gw2) {
    $scope.gw2 = gw2.all();
})
.controller('DestinyCtrl', function($scope,destiny){
    $scope.destiny = destiny.all();
})
.controller('SwtorCtrl',function($scope,swtor){
    
});
