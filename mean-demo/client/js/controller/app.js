angular.module('mean-demo', ['ngResource'])
    .controller('meetupsController', ['$scope', '$resource', function($scope, $resource){
      var Meetup = $resource('/api/meetups');

      Meetup.query(function(result){
        $scope.meetups = result;
      });
      $scope.meetups = [];

      $scope.meetupsCount = $scope.meetups.length;

      $scope.createMeetup = function(){
        //on pressing add button we will come here and then angular on behalf of client 
        //will make a post request to server using ngResource
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        //$save will trigger a post request 
        //once the server respondes to post request , that response comes here into the callback of $save
        meetup.$save(function(result){
          $scope.meetups.push(result);
          $scope.meetupName = "";
        });
      };          
    }]);