app.controller('MessageController', function($http) {
  console.log('Rent angular sourced');
  var mc = this;

  getList();
  //this controller loads when For Rent is clicked on the nav.html
  function getMessages() {
    $http.get('/message').then(function(response) {
      //console.log(response.data);
      mc.messageList = response.data;
      console.log(mc.messageList);
    });
  }

  mc.submitMessage = function() {
      $http({method: 'POST',
            url: '/message',
            data: mc.responseObject
            }).then(function(response){
              console.log(response);

              mc.messageList = "";

            });
    }; //end of search
});
