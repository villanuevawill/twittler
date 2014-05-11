

      


      $(document).ready(function(){
        var $tweets = $('.tweets');
        var showtweets = function(evt){
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
      };
             
        $('#center').click(showtweets);
        $('.tweets div').click(displayUser)

        function displayUser() {
          $('#crunch').show();
          $('#header').css('height','380px')
          $('#center').css('top','30px')
        }


      });

    