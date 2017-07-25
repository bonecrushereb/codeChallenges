// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.
//
// Can you solve this kata? Suuure-You-Can!
//
// UPDATE: a new kata's harder version is available here.
//
// The Kata
//
// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
//
// alt text
//
// Selection Grid Layout in text:
//
// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input
//
// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output
//
// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

function streetFighterSelection(fighters, position, moves){
  var result = [];

  moves.forEach(function(move) {
    if (move === "up") {
      position[0] = 0;
    }
    else if (move === "down") {
      position[0] = 1;
    }
    else if (move === "right") {
      position[1] = (position[1] === 5) ? 0 : position[1] + 1;
    }
    else if (move === "left") {
      position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}
