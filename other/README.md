# ECO --> Encyclopedia of Chess Openings.

The Alekhine Defense is a semi-open opening planned after the movement: pawn e4, knight f6.
In this opening, one side tries to avoid playing pawns on the center, not giving the oponent the posibility to attack. In contrast, it tries to eliminate the central pawns of the oponent, forcing them to defend or move forward in a early fase of the opening, so it tries to weaken the oponent acquiring advantage. This is a sharp opening, but due to it's restricted play, it is a play little seen on tournaments.

### Atributes 
* NAME --> Opening name
* ECO --> The B means it is a semi-open opening and the numbers 02 to 05 represents its the Alekhine Defense opening.
* FEN --> Forsyth-Edwards Notation --> Describes a Chess Position. It is an one-line ASCII-string.
* MOVES --> Most common moves to reach the root position based on master games, in UCI notation.

### Fen Notation
fen is composed of 3 field separated by spaces:
  * the first one is the Chess Position of the move indicated on the attribute "moves". Each row is divided by "/".
  * the second one indicates which piece (w = white, b = black) is next.
  * the last one indicates if it has rules. KQkq means that you can castling on king side or queen side of each piece.

### Meaning of letters in fen
If the piece is in uppercase, it means it belongs to white and if it is in lowercase it belongs to black.
* b -->bishop 
* k --> king 
* q --> queen 
* p --> pawn 
* r --> rook 
* n --> knight
* any number --> number of white space

Meaning of letters in moves
It follows the same nomenclature as in fen, but all the pieces are in uppercase with the exception of the pawns aren't mentioned, only the movement.

After this we gonna show some pictures from differents plays and one  play with a error

## Example play

### Normal Play
Here is an example of a movement with the sucessive plays:
```Javascript
{
    "name": "Alekhine Defense",
    "eco": "B02",
    "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6"
}
```

![alt text](https://github.com/ods883/chessmasterdra21/blob/main/other/Plays/Jugada%201.png)

```Javascript
{
    "name": "Alekhine Defense, 2. e5 Nd5 3. d4",
    "eco": "B03",
    "fen": "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4"
}
```

![alt text](https://github.com/ods883/chessmasterdra21/blob/main/other/Plays/Jugada%202.png)

```Javascript
{
    "name": "Alekhine Defense, 2. e5 Nd5 3. d4 d6",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6"
}
```

![alt text](https://github.com/ods883/chessmasterdra21/blob/main/other/Plays/Jugada%203.png)

```Javascript
{
    "name": "Alekhine Defense: Balogh Variation",
    "eco": "B03",
    "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/2BP4/8/PPP2PPP/RNBQK1NR b KQkq",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Bc4"
}
```

![alt text](https://github.com/ods883/chessmasterdra21/blob/main/other/Plays/Jugada%204.png)

### Error play
```Javascript
{
    "name": "Alekhine Defense: Exchange Variation, Karpov Variation",
    "eco": "B03",
    "fen": "r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1 b -",
    "moves": "1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6 cxd6 6. Nc3 g6 7. h3 Bg7 8. Nf3 O-O 9. Be2 Nc6 10. O-O Bf5 11. Bf4"
}
```
![alt text](https://github.com/ods883/chessmasterdra21/blob/main/other/Plays/Jugada%20Error.png)

