(function(){
    'use strict';
     angular.module('flickerApp', [])
     
     .controller('FlickerAppController', ['$http','$sce','$scope',function($http,$sce,$scope){
         $scope.peoples = peoples;
         $scope.images=[];
         $scope.loadFlickerImages = function(flicker_id){
            $scope.images=[];
            var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK";
            var responsePromise = $http.jsonp(url, {params : {
                  id: flicker_id,
                  lang:'en-us',
                  format:'json'
                }
              });
            
            responsePromise.success(function(feed){
                var l = feed.items.length;
                var j=0,k=0;
                $scope.images[j] = [];
                    for(var i=0; i < l && i < 16; i++,k++) {
                        var img = feed.items[i].media.m.replace(/^(.*?)_m.jpg$/, 
                            '<a href="$1.jpg" data-lightbox='+flicker_id+'><img style="border:1px solid black" src="$1_s.jpg" alt="photo_not_available"></a>'
                        );
                        if(i%4 == 0){
                            j++;
                            k = 0;
                            $scope.images[j] = [];
                        }
                        $scope.images[j][k]=$sce.trustAsHtml(img);
                    }
            });

            responsePromise.error(function(){
                alert("Unable to fetch data from flicker..please try again");
            });
         };
     }]);

    var peoples = [
                    {   "name":"Jason Lengstorf", 
                        "id":"29080075@N02"
                    },
                    {   "name":"Lindsay Maddox",
                        "id":"15951645@N03"
                    },
                    {   "name":"Nick Shontz", 
                        "id":"33608338@N04"
                    },
                    {   "name":"Nazly Ahmed",
                        "id":"40608624@N00"
                    },
                    {   "name":"Mohamed Sheeraz",
                        "id":"29946260@N03"
                    },
                    {
                        "name":"Tanmay Mehrotra",
                        "id":"128007931@N08"
                    }
                ];
})();