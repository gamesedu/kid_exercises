    var lines;
    var lineNumber=0;
    var lastLineNumber=0;
	
  var images = [
"asbos.jpg","batman.jpg","bugs1.jpg","capatain-america1.jpg","capatain-america2.jpg","capatain-america3.jpg","capatain-america4.jpg",
"cartman.jpg","goofy1.jpg","homersimpson.jpg","hulk1.jpg","hulk2.jpg","ironman1.jpg","ironman2kid.jpg","jerry.jpg","mickey.png",
"mightymouse.jpg","minimouse.jpg","nanos-mickey.jpg","pickatsu.png","pinkpanther.jpg","popeye.jpg","robot.jpg","sam-bugs.jpg",
"smurf1.jpg","smurf2.jpg","speedygonzales.jpg","spiderman1.jpg","spiderman2.jpg","spiderman3.jpg","superman1.jpg",
"taz.jpg","thor1kid.jpg","thor2.jpg","thro1bigger.jpg","tom.jpg","viking.jpg","weirblond.jpg"
  ];	

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}	
    
    $(document.body).ready(function () {
      
      // load the textfile from the server
      $.ajax({
        url: 'askiseis_glwssikes.txt'
      }).done(function(content) {
        
        // normalize the line breaks, then split into lines
        lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
        
        // only set up the click handler if there were lines found
        if (lines && lines.length) {
		
          $('#showLine,#showLine2,#showLine3').on('click', function () {
            // loop to prevent repeating the last random number
            while (lineNumber === lastLineNumber) {
              //lineNumber = parseInt(Math.random() * lines.length);
			   lineNumber = lastLineNumber+1;
              // check to prevent infinite loop
              if (lines.length === 1) { break; }
            }
            // keep track of the last random number
            lastLineNumber = lineNumber;
            
            // show the corresponding line
           // $('#trivia').text(lines[lineNumber]);
			$('#trivia').html("<h2>"+lines[lineNumber]+"</h2>");
			//$('#showLine3').html("images/" + getRandomImage());
			$('#showLine3').html('<input id="showLine3" type="image" src="images/'+getRandomImage()+'" name="correct" value="ΣΩΣΤΑ" alt="" />');
			
          });
	  
		  
        }
      });
    });