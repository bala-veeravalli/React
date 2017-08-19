var Pieces = {
    startingPieces : function () {
        return {
            'a1' : rook({rowIndex : '1',columnIndex : 'a',isWhite : true}),
            'b1' : knight({rowIndex : '1',columnIndex : 'b',isWhite : true}),
            'c1' : bishop({rowIndex : '1',columnIndex : 'c',isWhite : true}),
            'd1' : queen({rowIndex : '1',columnIndex : 'd',isWhite : true}),
            'e1' : king({rowIndex : '1',columnIndex : 'e',isWhite : true}),
            'f1' : bishop({rowIndex : '1',columnIndex : 'f',isWhite : true}),
            'g1' : knight({rowIndex : '1',columnIndex : 'g',isWhite : true}),
            'h1' : rook({rowIndex : '1',columnIndex : 'h',isWhite : true}),
            'a2' : pawn({rowIndex : '2',columnIndex : 'a',isWhite : true}),
            'b2' : pawn({rowIndex : '2',columnIndex : 'b',isWhite : true}),
            'c2' : pawn({rowIndex : '2',columnIndex : 'c',isWhite : true}),
            'd2' : pawn({rowIndex : '2',columnIndex : 'd',isWhite : true}),
            'e2' : pawn({rowIndex : '2',columnIndex : 'e',isWhite : true}),
            'f2' : pawn({rowIndex : '2',columnIndex : 'f',isWhite : true}),
            'g2' : pawn({rowIndex : '2',columnIndex : 'g',isWhite : true}),
            'h2' : pawn({rowIndex : '2',columnIndex : 'h',isWhite : true}),
            'a8' : rook({rowIndex : '8',columnIndex : 'a',isWhite : false}),
            'b8' : knight({rowIndex : '8',columnIndex : 'b',isWhite : false}),
            'c8' : bishop({rowIndex : '8',columnIndex : 'c',isWhite : false}),
            'd8' : queen({rowIndex : '8',columnIndex : 'd',isWhite : false}),
            'e8' : king({rowIndex : '8',columnIndex : 'e',isWhite : false}),
            'f8' : bishop({rowIndex : '8',columnIndex : 'f',isWhite : false}),
            'g8' : knight({rowIndex : '8',columnIndex : 'g',isWhite : false}),
            'h8' : rook({rowIndex : '8',columnIndex : 'h',isWhite : false}),
            'a7' : pawn({rowIndex : '7',columnIndex : 'a',isWhite : false}),
            'b7' : pawn({rowIndex : '7',columnIndex : 'b',isWhite : false}),
            'c7' : pawn({rowIndex : '7',columnIndex : 'c',isWhite : false}),
            'd7' : pawn({rowIndex : '7',columnIndex : 'd',isWhite : false}),
            'e7' : pawn({rowIndex : '7',columnIndex : 'e',isWhite : false}),
            'f7' : pawn({rowIndex : '7',columnIndex : 'f',isWhite : false}),
            'g7' : pawn({rowIndex : '7',columnIndex : 'g',isWhite : false}),
            'h7' : pawn({rowIndex : '7',columnIndex : 'h',isWhite : false}),
        }
    }
}

function Piece(piece = {}) {
    return {
        rowIndex : piece.rowIndex,
        columnIndex : piece.columnIndex,
        isWhite : piece.isWhite,
        onBoard : true
    }
}

function pawn(piece) {
    return{
        ...Piece(piece),
        name : 'Pawn',
        symbol : piece.isWhite ? String.fromCharCode(9817) : String.fromCharCode(9823),
    }
}

function king(piece) {
    return{
        ...Piece(piece),
        name : 'King',
        symbol : piece.isWhite ? String.fromCharCode(9812) : String.fromCharCode(9818)
    }
}
function rook(piece) {
    return{
        ...Piece(piece),
        name : 'Rook',
        symbol : piece.isWhite ? String.fromCharCode(9814) : String.fromCharCode(9820)
    }
}
function knight(piece) {
    return{
        ...Piece(piece),
        name : 'Knight',
        symbol : piece.isWhite ? String.fromCharCode(9816) : String.fromCharCode(9822)
    }
}
function bishop(piece) {
    return{
        ...Piece(piece),
        name : 'Bishop',
        symbol : piece.isWhite ? String.fromCharCode(9815) : String.fromCharCode(9821)
    }
}
function queen(piece) {
    return{
        ...Piece(piece),
        name : 'Queen',
        symbol : piece.isWhite ? String.fromCharCode(9813) : String.fromCharCode(9819)
    }
}

export default Pieces;