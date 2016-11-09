angular.module('awesome')
.controller('awesome', function($scope, $rootScope,fetchDataService, $uibModal, $log) {

  var $cont = $('#content');

  var socket = io();
  var typingFin = true;
  socket.on('fetchuser', function() {
    socket.emit('newuser', $scope.nickname);
  });

  socket.on('welcome', function(data) {
    $('#messages').append($('<li class="welcomemessage">'+data.message+'</li>'));
  });

  socket.on('connected', function(data) {
    $('#messages').append($('<li class="userconnected">Connected: '+data.message+'</li>'));
    $cont[0].scrollTop = $cont[0].scrollHeight;
  });

  socket.on('disconnected', function(data) {
    if (data.message != undefined){
      $('#messages').append($('<li class="userdisconnected">Disconnected: '+data.message+'</li>'));
      $cont[0].scrollTop = $cont[0].scrollHeight;
    }
  });

  $('.submitMessage').submit(function(){
    console.log($('#m').val());
    if($('#m').val() != '') {
    socket.emit('chat message', {msg : $('#m').val() , sender : $scope.nickname});
    $('#m').val('');
    $cont[0].scrollTop = $cont[0].scrollHeight;
    return false;
  }
  });


  $('.submitMessage').keypress(function(){
    if(typingFin == true){
      typingFin = false;
      socket.emit('typing message', {msg : "  is typing ........." , sender : $scope.nickname});
      setTimeout(function(){ typingFin = true; }, 1000);
    }
    else {
      typingFin = true;
    }
  }); 

  socket.on('chat message', function(msg){
    var time = new Date()
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if($('#messages li').length > 150){
      $('#messages li').remove();
    }
    $('#messages').append($("<li><span class='messagesender'>"+msg.sender+"</span>:&nbsp;&nbsp;&nbsp;"+msg.msg+"<span class='pull-right time'>"+hour+" :"+min+" :"+sec+"</span></li>"));
    $cont[0].scrollTop = $cont[0].scrollHeight;
  });

  socket.on('typing message', function(msg){
   $('#messages').append($("<li class='typing'><span>"+msg.sender+msg.msg+"</span></li>"));
   $cont[0].scrollTop = $cont[0].scrollHeight;
   setTimeout(function(){ $('#messages .typing').remove(); }, 1000);
 });

  socket.on('onlineusers' , function(data) {
    $scope.$apply(function() {
      $scope.nicknames = data.list;
      console.log(data.list);
    });
  });

});

