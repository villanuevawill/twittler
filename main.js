

      


      $(document).ready(function(){
        var userstream=streams.home;
        var $tweets = $('.tweets');
        var data ={'shawndrost':'Just Shawnin\' it','sharksforcheap':'Just Sharkin\' it','mracus':'Just Mracin\' it','douglascalhoun':'Just Dougin\' it'};
        var showusertweets = function(userOrMessage,user){
          $tweets.children('div').remove();
          var index = userOrMessage.length - 1;
          var today=new Date();
        var day;
        while(index >= 0){
          var tweet = userOrMessage[index];
          var time = tweet.created_at;
          var diff= today-time;
          if (diff/1000/60<59) {
            day=Math.ceil(diff/1000/60)+'m';
          } else if ((diff/1000/60/60) < 24){
            day=Math.floor(diff/1000/60/60)+'h';
          } else {
            day=time.toString().slice(4,10)
          }
          var $tweet = $('<div><h1>'+tweet.user+'</h1><h2>@'+tweet.user+' - '+day+'</h2><p>'+tweet.message+'</p</div>');
  
          $tweet.appendTo($tweets);
          index -= 1;

        }
        $('.tweets div').click(displayUser)
        $('#user').click(function (evt) {evt.preventDefault(); showusertweets(userstream);});
        $('#crunch img').click(function (evt) {evt.preventDefault(); showusertweets(userstream);});
        $(window).scrollTop(0)
        if (typeof user === 'string') {
          userstream=streams.users[user];
        }

      };



        
        /*var showtweets = function(evt){
        $tweets.children('div').remove();
        var index = streams.home.length - 1;
        var today=new Date();
        var day;
        while(index >= 0){
          var tweet = streams.home[index];
          var time = tweet.created_at;
          var diff= today-time;
          if (diff/1000/60<59) {
            day=Math.ceil(diff/1000/60)+'m';
          } else if ((diff/1000/60/60) < 24){
            day=Math.floor(diff/1000/60/60)+'h';
          } else {
            day=time.toString().slice(4,10)
          }
          var $tweet = $('<div><h1>'+tweet.user+'</h1><h2>@'+tweet.user+' - '+day+'</h2><p>'+tweet.message+'</p</div>');
  
          $tweet.appendTo($tweets);
          index -= 1;

        }
        evt.preventDefault();
        $('.tweets div').click(displayUser)
      };*/
        
        var homestream = function (evt) {
          $('#crunch').hide();
          $('#header').css('height','230px');
          $('#center').css('top','85px');
          userstream=streams.home;
          showusertweets(userstream);
          evt.preventDefault();
        }


        $('#center').click(function (evt) {evt.preventDefault(); showusertweets(userstream);});
        $('.tweets div').click(displayUser)
        $('#homeicon').click(homestream);
        $('#twitcontain').click(homestream);


        function displayUser() {
          $('#crunch').html('');
          var user=($(this).find('h1').text());
          $('#crunch').append('<img src='+user+'.jpg>')
          $('#crunch').append('<div id=user>. . . '+data[user]+'</div>')
          $('#crunch').append('<div id=user>@'+user+'</div>')
          $('#crunch').show();
          $('#header').css('height','380px');
          $('#center').css('top','30px');
          userstream=streams.users[user];
          showusertweets(userstream,user);

        }


      });

    