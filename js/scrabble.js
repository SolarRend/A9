/* 
 * Author: Joshua Rodriguez
 * Contact: joshua_rodriguez@student.uml.edu
 * UMass Lowell student in GUI Programming 1 
 * Date Created: 11.30.2016
 * 
 * Implements one line of the Scrabble game without word validation.
 */

//document ready
$(function () {
   
   /**
    * Function for setting up scrabble board row
    */
   function setUpBoard() {

      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Triple.jpg",
         title: "Triple Space",
         width: "60",
         height: "60"
      })));

      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));

      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Double.jpg",
         title: "Double Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Star.jpg",
         title: "Star Space",
         width: "60",
         height: "60"
      })));

      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));

      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Double.jpg",
         title: "Double Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Blank.png",
         title: "Blank Space",
         width: "60",
         height: "60"
      })));
      $(".board").append($("<div>", {
         class: "droppableBoardSlot"
      }).append($("<img>", {
         src: "images/Scrabble_Board_Triple.jpg",
         title: "Triple Space",
         width: "60",
         height: "60"
      })));

      // setting droppable properties
      $(".droppableBoardSlot").droppable({
         drop: function (event, ui) {
            //console.log($("img", this).attr("title"));
            //console.log($("img", ui.draggable).attr("title"));

            $(this).css({
               border: "solid yellow"
            });

            //console.log(ScrabbleTiles[$("img", ui.draggable).attr("title")].value);


            // **adding score**
            var letter = $("img", ui.draggable).attr("title");

            //checking for double letter score
            if ($("img", this).attr("title") === "Double Space") {
               rawScore += (ScrabbleTiles[letter].value * 2);
            } else {
               rawScore += (ScrabbleTiles[letter].value);
            }

            //checking for triple word score
            if ($("img", this).attr("title") === "Triple Space") {
               tripleCount++;
            }

            //setting board space image as tile image
            $("img", this).attr("src", $("img", ui.draggable).attr("src"));

            //removing tile
            $("img", ui.draggable).remove();
         }
      });
   }

   // setting up one row of scrabble
   setUpBoard();


   //making tile data structure 
   //source: Prof Jesse Heines - https://teaching.cs.uml.edu/~heines/jessehome.jsp
   var ScrabbleTiles = [];
   ScrabbleTiles["A"] = {"value": 1, "originalDistribution": 9, "numberRemaining": 9};
   ScrabbleTiles["B"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["C"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["D"] = {"value": 2, "originalDistribution": 4, "numberRemaining": 4};
   ScrabbleTiles["E"] = {"value": 1, "originalDistribution": 12, "numberRemaining": 12};
   ScrabbleTiles["F"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["G"] = {"value": 2, "originalDistribution": 3, "numberRemaining": 3};
   ScrabbleTiles["H"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["I"] = {"value": 1, "originalDistribution": 9, "numberRemaining": 9};
   ScrabbleTiles["J"] = {"value": 8, "originalDistribution": 1, "numberRemaining": 1};
   ScrabbleTiles["K"] = {"value": 5, "originalDistribution": 1, "numberRemaining": 1};
   ScrabbleTiles["L"] = {"value": 1, "originalDistribution": 4, "numberRemaining": 4};
   ScrabbleTiles["M"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["N"] = {"value": 1, "originalDistribution": 6, "numberRemaining": 6};
   ScrabbleTiles["O"] = {"value": 1, "originalDistribution": 8, "numberRemaining": 8};
   ScrabbleTiles["P"] = {"value": 3, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["Q"] = {"value": 10, "originalDistribution": 1, "numberRemaining": 1};
   ScrabbleTiles["R"] = {"value": 1, "originalDistribution": 6, "numberRemaining": 6};
   ScrabbleTiles["S"] = {"value": 1, "originalDistribution": 4, "numberRemaining": 4};
   ScrabbleTiles["T"] = {"value": 1, "originalDistribution": 6, "numberRemaining": 6};
   ScrabbleTiles["U"] = {"value": 1, "originalDistribution": 4, "numberRemaining": 4};
   ScrabbleTiles["V"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["W"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["X"] = {"value": 8, "originalDistribution": 1, "numberRemaining": 1};
   ScrabbleTiles["Y"] = {"value": 4, "originalDistribution": 2, "numberRemaining": 2};
   ScrabbleTiles["Z"] = {"value": 10, "originalDistribution": 1, "numberRemaining": 1};


   /**
    * refills the rack with tiles
    */
   // source: http://stackoverflow.com/questions/8425580/picking-a-random-array-element-from-an-associative-array
   function replenishRack() {
      // keep making tiles until rack is full
      for (var i = 0; i < 7; i++) {

         var a = [];
         var k;

         for (k in ScrabbleTiles) {
            // check if tile has not be depleted
            if (ScrabbleTiles.hasOwnProperty(k) &&
                    ScrabbleTiles[k].numberRemaining > 0) {
               a.push(k);

            }
         }

         var key = a[Math.floor(Math.random() * a.length)];

         //decrement number remaining of this tile
         ScrabbleTiles[key].numberRemaining = (ScrabbleTiles[key].numberRemaining - 1);

         // make the tile and append it to the rack
         makeTile(key);
         //console.log("Making " + key);
         //console.log("Remaining " + ScrabbleTiles[key].numberRemaining);
         
      }
      // setting draggable properties
      $(".draggableTile").draggable({
         snap: ".droppableBoardSlot"
      });
   }

   /**
    * makes a tile and appends it to the rac with the character passed
    * @param letter is a character
    */
   function makeTile(letter) {

      if (letter === "A") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_A.jpg",
            title: "A",
            width: "50",
            height: "50"
         })));
      } else if (letter === "B") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_B.jpg",
            title: "B",
            width: "50",
            height: "50"
         })));
      } else if (letter === "C") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_C.jpg",
            title: "C",
            width: "50",
            height: "50"
         })));
      } else if (letter === "D") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_D.jpg",
            title: "D",
            width: "50",
            height: "50"
         })));
      } else if (letter === "E") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_E.jpg",
            title: "E",
            width: "50",
            height: "50"
         })));
      } else if (letter === "F") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_F.jpg",
            title: "F",
            width: "50",
            height: "50"
         })));
      } else if (letter === "G") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_G.jpg",
            title: "G",
            width: "50",
            height: "50"
         })));
      } else if (letter === "H") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_H.jpg",
            title: "H",
            width: "50",
            height: "50"
         })));
      } else if (letter === "I") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_I.jpg",
            title: "I",
            width: "50",
            height: "50"
         })));
      } else if (letter === "J") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_J.jpg",
            title: "J",
            width: "50",
            height: "50"
         })));
      } else if (letter === "K") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_K.jpg",
            title: "K",
            width: "50",
            height: "50"
         })));
      } else if (letter === "L") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_L.jpg",
            title: "L",
            width: "50",
            height: "50"
         })));
      } else if (letter === "M") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_M.jpg",
            title: "M",
            width: "50",
            height: "50"
         })));
      } else if (letter === "N") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_N.jpg",
            title: "N",
            width: "50",
            height: "50"
         })));
      } else if (letter === "O") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_O.jpg",
            title: "O",
            width: "50",
            height: "50"
         })));
      } else if (letter === "P") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_P.jpg",
            title: "P",
            width: "50",
            height: "50"
         })));
      } else if (letter === "Q") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_Q.jpg",
            title: "Q",
            width: "50",
            height: "50"
         })));
      } else if (letter === "R") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_R.jpg",
            title: "R",
            width: "50",
            height: "50"
         })));
      } else if (letter === "S") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_S.jpg",
            title: "S",
            width: "50",
            height: "50"
         })));
      } else if (letter === "T") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_T.jpg",
            title: "T",
            width: "50",
            height: "50"
         })));
      } else if (letter === "U") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_U.jpg",
            title: "U",
            width: "50",
            height: "50"
         })));
      } else if (letter === "V") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_V.jpg",
            title: "V",
            width: "50",
            height: "50"
         })));
      } else if (letter === "W") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_W.jpg",
            title: "W",
            width: "50",
            height: "50"
         })));
      } else if (letter === "X") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_X.jpg",
            title: "X",
            width: "50",
            height: "50"
         })));
      } else if (letter === "Y") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_Y.jpg",
            title: "Y",
            width: "50",
            height: "50"
         })));
      } else if (letter === "Z") {
         $(".innerRack").append($("<div>", {
            class: "draggableTile"
         }).append($("<img>", {
            src: "images/Scrabble_Tiles/Scrabble_Tile_Z.jpg",
            title: "Z",
            width: "50",
            height: "50"
         })));
      }
   }


   var rawScore = 0;
   var tripleCount = 0;
   
   /**
    * Tallies up score and updates the label 
    */
   function submitTurn() {

      for (var i = 0; i < tripleCount; i++) {
         rawScore = rawScore * 3;
      }
      // update score on label
      $("#score").text("Score: " + rawScore);
      
      
      // re setup board
      $(".board").children().each(function () {
         $(this).remove();
      });
      setUpBoard();
      
      // re setup rack
       $(".innerRack").children().each(function () {
         $(this).remove();
      });
      replenishRack();
   }

   //make initial rack
   replenishRack();

   // adding clickable action to end a turn
   var submitTurnButton = document.getElementById("submit");
   submitTurnButton.addEventListener("click", submitTurn);



});
