// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  function compare (x, y) {
    if (x == y) {
      return true;
    }
  }
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0);
    if (compare(firstLetter, "J") == true || compare(firstLetter, "j") == true ) {
      byeSpeaker.speak(names[i]);
    } 
    else {
      helloSpeaker.speak(names[i]);
    }  
  }

})(window);

  
