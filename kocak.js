<script>
window.onload = function() {
  this.Fire();
}

  
var disney = document.getElementById(&#39;disney&#39;);
var deezer = document.getElementById(&#39;deezer&#39;);
var crunchyroll = document.getElementById(&#39;crunchy&#39;);      
var duo = document.getElementById(&#39;duo&#39;);

function kocak(posts_div, snapshot) {
  var data = snapshot.val();
  var dataArr = Object.values(data);
  var randomIndex = Math.floor(Math.random() * dataArr.length);
  var randomData = dataArr[randomIndex];
  posts_div.innerHTML = &quot;<div class='eka'>&quot; +
    &quot;<div class='crd'>&quot; +
    &quot;<div class='card-body'><p class='txtagung'>Username : <span style='color: red;'>&quot; + randomData.user+ &quot;</span></p><p class='txtagung'>Password : <span style='color: red;'>&quot; + randomData.pw + &quot;</span></p>&quot; +
    &quot;</div></div></div>&quot; ;
}

if (disney) {
  function Fire() {
    firebase.database().ref(&#39;Disney&#39;).once(&#39;value&#39;).then(function(snapshot) {
      var posts_div = disney;
      kocak(posts_div, snapshot);
    });
  }
}

if (duo) {
  function Fire() {
    firebase.database().ref(&#39;Duolingo&#39;).once(&#39;value&#39;).then(function(snapshot) {
      var posts_div = duo;
      kocak(posts_div, snapshot);
    });
  }
}
      
      if (deezer) {
  function Fire() {
    firebase.database().ref(&#39;Deezer&#39;).once(&#39;value&#39;).then(function(snapshot) {
      var posts_div = deezer;
      kocak(posts_div, snapshot);
    });
  }
}
 
if (crunchy) {
  function Fire() {
    firebase.database().ref(&#39;Chuncyroll&#39;).once(&#39;value&#39;).then(function(snapshot) {
      var posts_div = crunchy;
      kocak(posts_div, snapshot);
    });
  }
}      
      
</script>
