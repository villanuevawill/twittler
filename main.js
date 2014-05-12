$(document).ready(function(){
  //initial definitions
  var userstream=streams.home;
  var $tweets = $('.tweets');
  var data ={'shawndrost':'Just Shawnin\' it','sharksforcheap':'Just Sharkin\' it','mracus':'Just Mracin\' it','douglascalhoun':'Just Dougin\' it'};
  
  //functions
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
    };
    $('.tweets div').click(displayUser)
    $('#user').click(function (evt) {evt.preventDefault(); showusertweets(userstream);});
    $('#crunch img').click(function (evt) {evt.preventDefault(); showusertweets(userstream);});
    $(window).scrollTop(0)
    if (typeof user === 'string') {
      userstream=streams.users[user];
    }
  };


  var homestream = function (evt) {
    $('#crunch').hide();
    $('#header').css('height','230px');
    $('#center').css('top','45px');
    $('#texttweet').show();
    userstream=streams.home;
    showusertweets(userstream);
    evt.preventDefault();
  };


  var displayUser = function() {
    $('#crunch').html('');
    var user=($(this).find('h1').text());
    if (user==='Me') {
      showusertweets(userstream);
    } else {
      $('#crunch').append('<img src='+user+'.jpg id="portrait">')
      $('#crunch').append('<div id=user>. . . '+data[user]+'</div>')
      $('#crunch').append('<div id=user>@'+user+'</div>')
      $('#header').css('height','380px');
      $('#center').css('top','30px');
      $('#texttweet').hide();
      $('#crunch').show();
      userstream=streams.users[user];
      showusertweets(userstream,user);
    }
  };

//event Handlers
    
  $('#texttweet').focus(function (){
    $('#texttweet').attr('rows',3);
    $('#box').show();});
    $('#texttweet').blur(function(){
    setTimeout(function(){$('#texttweet').attr('rows',1);
    $('#box').hide(); $('#texttweet').val('')},300);});
          

  $('#center').click(function (evt) {
    evt.preventDefault(); 
    showusertweets(userstream);});

  $('.tweets div').click(displayUser)
  $('#homeicon').click(homestream);
  $('#twitcontain').click(homestream);

  $('#send').click(function(){
    var message=$('#texttweet').val();
    var time=new Date();
    var user='Me';
    newTweet={created_at:time,message:message,user:user};
    streams.home.push(newTweet);
    showusertweets(userstream);
    });

});

    