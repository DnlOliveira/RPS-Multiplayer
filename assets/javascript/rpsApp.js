$(document).ready(function(){

	var rps = {
		//keeps track of players who entered their names to play
		player1: false,
		player2: false,

		plyr1: "",
		plyr2: "",

		//creates initial page on startup
		start: function() {
			$("#user-input").html("Enter Name:");

			var form = $( "<input>" );
			form.attr("id", "form");
			$("#user-input").append(form);

			var button = $( "<button>" );
			button.attr("id", "submit-player");
			button.text("Enter");
			$("#user-input").append(button);
			},

		//registers players 1 & 2 for game
		//as names are entered
		players: function(value) {

			if (this.player1 === false) {				
				this.plyr1 = value;
				this.player1 = true;

				var rock = $( "<button>" );
				rock.text("Rock");
				rock.attr("id", "rock");

				var paper = $( "<button>" );
				paper.text("Paper");
				paper.attr("id", "paper");

				var scissors = $( "<button>" );
				scissors.text("Scissors");
				scissors.attr("id", "scissors");

				$("#l1").append(rock);
				$("#l1").append(paper);
				$("#l1").append(scissors);
			}
			else {
				this.plyr2 = value;
				this.player2 = true;

				var rock = $( "<button>" );
				rock.text("Rock");
				rock.attr("id", "rock");

				var paper = $( "<button>" );
				paper.text("Paper");
				paper.attr("id", "paper");

				var scissors = $( "<button>" );
				scissors.text("Scissors");
				scissors.attr("id", "scissors");
			}

			database.ref().set({
       	Player1: this.plyr1,
       	Player2: this.plyr2,
       	Status1: this.player1,
       	Status2: this.player2,
       	Blank: ""
      });

		}

	};//rps object

	var config = {
    apiKey: "AIzaSyDJp7Nh1K70VYL5Y079fAdUG39DpvXmgbc",
   	authDomain: "rps-multiplayer-3b1ae.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-3b1ae.firebaseio.com",
    storageBucket: "rps-multiplayer-3b1ae.appspot.com",
    messagingSenderId: "908504939862"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

	//Calls function to create start page
	rps.start();

	// --- Add player button on-click --- //
	$("#submit-player").on("click", function() {
		var value = $("#form").val();
		rps.players(value);
	});//on-click enter name

	// --- Database on-update --- //
	database.ref().on("value", function(snapshot) {
		$("#p1").empty();
		$("#p1").append(snapshot.val().Player1);
		$("#p2").append(snapshot.val().Player2);

		if ( snapshot.val().Status1 == true){

		}

		if ( snapshot.val().Status1 == true &&
			snapshot.val().Status2 == true ){

			$("#user-input").empty();
		}
	});//on database change


});//ready function













