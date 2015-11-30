/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;

mod = angular.module('infinite-Paging', []);

mod.directive('infinitePaging', [
  '$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
    return {
      link: function(scope, elem, attrs) {
            var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
            $window = angular.element($window);
            scrollDistance = 0;
            if (attrs.infiniteScrollDistance != null) {
              scope.$watch(attrs.infiniteScrollDistance, function(value) {
                return scrollDistance = parseInt(value, 10);
              });
            }

          scrollEnabled = true;
          checkWhenEnabled = false;

          if (attrs.infiniteScrollDisabled != null) {
            scope.$watch(attrs.infiniteScrollDisabled, function(value) {
              scrollEnabled = !value;
              if (scrollEnabled && checkWhenEnabled) {
                checkWhenEnabled = false;
                return handler();
              }
            });
          }

          handler = function() {
            //alert("ppppppp");
            console.log("ppppp...");
              if (scrollEnabled) {
                    if ($rootScope.$$phase) {
                      return scope.$eval(attrs.infinitePaging);
                    } else {
                      return scope.$apply(attrs.infinitePaging);
                    }
                } else  {
                  return checkWhenEnabled = true;
                }
          };

          $window.on('scroll', handler);
            scope.$on('$destroy', function() {
                return $window.off('scroll', handler);
            });

          return $timeout((function() {
               return handler();
          }), 0);

      }//link 
    };//return
  }

]);
