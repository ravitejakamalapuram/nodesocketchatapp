angular.module('awesome')

// .directive('nickname', function($q, $timeout) {
//   return {
//     require: 'ngModel',
//     scope:{
//       nicknames: '=data'
//     },
//     link: function(scope, elm, attrs, ctrl) {
//       var nicknames = scope.nicknames;
//       console.log(nicknames);

//       ctrl.$asyncValidators.nickname = function(modelValue, viewValue) {

//         if (ctrl.$isEmpty(modelValue)) {
//           return $q.when();
//         }


//           var def = $q.defer();
//         scope.$watch('nicknames', function(v) {


//           $timeout(function() {
//             if (nicknames.indexOf(modelValue) === -1) {
//               def.resolve();
//             } else {
//               def.reject();
//             }
//           }, 0);
//         });   

//         return def.promise;
//       };
//     }
//   };
// })
;