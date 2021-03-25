//ECO --> Encyclopedia of Chess Openings.

//The Alekhine Defense is a semi-open opening planned after the movement: pawn e4, knight f6.
//In this opening, one side tries to avoid playing pawns on the center, not giving the oponent the posibility to attack. In contrast, it tries to eliminate the central pawns of the
// oponent, forcing them to defend or move forward in a early fase of the opening, so it tries to weaken the oponent acquiring advantage. This is a sharp opening, but due to it's 
//restrcited play, it is a play little seen on tournaments.

//Atributes
//NAME --> Opening name
//ECO --> The B means it is a semi-open opening and the numbers 02 to 05 represents its the Alekhine Defense opening.
//FEN --> Forsyth-Edwards Notation --> Describes a Chess Position. It is an one-line ASCII-string.
//MOVES --> Most common moves to reach the root position based on master games, in UCI notation.

//fen is composed of 3 field separated by spaces:
//  - the first one is the Chess Position of the move indicated on the attribute "moves". Each row is divided by "/".
//  - the second one indicates which piece (w = white, b = black) is next.
//  - the last one indicates if it has rules. KQkq means that you can castling on king side or queen side of each piece.

//Meaning of letters in fen.
//If the piece is in uppercase, it means it belongs to white and if it is in lowercase it belongs to black.
//b -->bishop 
//k --> king 
//q --> queen 
//p --> pawn 
//r --> rook 
//n --> knight
//any number --> number of white space

//Meaning of letters in moves
//It follows the same nomenclature as in fen, but all the pieces are in uppercase with the exception of the pawns aren't mentioned, only the movement.
