var Pieces = {
    startingPieces : function () {
        return [
            pawn(1,0,true),
            pawn(1,1,true),
            pawn(1,2,true),
            pawn(1,3,true),
            pawn(1,4,true),
            pawn(1,5,true),
            pawn(1,6,true),
            pawn(1,7,true),
            rook(0,0,true),
            knight(0,1,true),
            bishop(0,2,true),
            queen(0,3,true),
            king(0,4,true),
            bishop(0,5,true),
            knight(0,6,true),
            rook(0,7,true),
            pawn(6,0,false),
            pawn(6,1,false),
            pawn(6,2,false),
            pawn(6,3,false),
            pawn(6,4,false),
            pawn(6,5,false),
            pawn(6,6,false),
            pawn(6,7,false),
            rook(7,0,false),
            knight(7,1,false),
            bishop(7,2,false),
            queen(7,3,false),
            king(7,4,false),
            bishop(7,5,false),
            knight(7,6,false),
            rook(7,7,false)
        ]
    }
}

function Piece(rowIndex,columnIndex, isWhite) {
    return {
        rowIndex,
        columnIndex,
        isWhite,
        onBoard : true
    }
}

function pawn(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'Pawn',
        symbol : isWhite ? String.fromCharCode(9817) : String.fromCharCode(9823),
    }
}

function king(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'King',
        symbol : isWhite ? String.fromCharCode(9812) : String.fromCharCode(9818)
    }
}
function rook(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'Rook',
        symbol : isWhite ? String.fromCharCode(9814) : String.fromCharCode(9820)
    }
}
function knight(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'Knight',
        symbol : isWhite ? String.fromCharCode(9816) : String.fromCharCode(9822)
    }
}
function bishop(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'Bishop',
        symbol : isWhite ? String.fromCharCode(9815) : String.fromCharCode(9821)
    }
}
function queen(rowIndex,columnIndex, isWhite) {
    return{
        ...Piece(rowIndex,columnIndex, isWhite),
        name : 'Queen',
        symbol : isWhite ? String.fromCharCode(9813) : String.fromCharCode(9819)
    }
}

export default Pieces;