export type Generator<T>= { next:() => T } 

export type Position = {
    row: number,
    col: number
}

export type Match<T> = {
    matched: T,
    positions: Position[]
}
// {
//     matched:string
//     positions:[{row:number, col: number},{row:number, col: number},{row:number, col: number},]
// }

export type BoardEvent<T> = {
    kind:'Match'| 'Refill'
    match?:Match<T>
}

export type BoardListener<T> = {
    
};
//my type piece
type Piece<T> ={
    value:T
    position:Position
}

const BoardListener = (checker:()=>{}, move:Move):BoardEvent<T> => {
let bool = checker(move)
 return new BoardEvent<Match>
}


export class Board<T> {
    private generator: Generator<T>
    private _width: number
    private _height: number

    //private arrayOfPieces: Array<T>

    constructor(generator: Generator<T>, width, height) {
        this.generator = generator
        this._height = height
        this._width = width
        //this.arrayOfPieces.push(generator.next())
    }

    addListener(listener: BoardListener<T>) {
    }

    //Method that feeds the array with the pieces and assigns the position
    //creatingBoard = () => {
    //for(i:number = 0; i < generator.sequence.length;i++){
        //p:Piece<T> = {value:generator.next(),position:??????}
        //arrayOfPieces.push(p)
    //}
    // }


    checkPositionOnBorder = (p:Position) => {
        return p.col >= 0 && p.col < this.width() && p.row >= 0 && p.row < this.height();

    }

    piece(p: Position): T | undefined {
        if(this.checkPositionOnBorder(p)) {
            //iterate through arrayOfPieces or smth that holds the pieces and find the one that is at such position and return the piece
            return
        }
        return undefined
    }

    canMove(first: Position, second: Position): boolean {
        if(this.checkPositionOnBorder(first) && this.checkPositionOnBorder(second))
        {
            let firstSum = first.col + first.row
            let secondSum =  second.col + second.row
            if((firstSum - secondSum == 1) || (firstSum - secondSum == -1) )
            {
                let left: Position = {row : second.row, col : second.col - 1}
                let top: Position = {row : second.row - 1, col : second.col}
                let right: Position = {row : second.row, col : second.col + 1}
                let down: Position = {row : second.row + 1, col : second.col}
                let flag : number = 0
                if(this.piece(left) == this.piece(first) && first != left)
                {
                    flag++
                }
                if(this.piece(top) == this.piece(first) && first != top)
                {
                    flag++
                }
                if(this.piece(right) == this.piece(first) && first != right)
                {
                    flag++
                }
                if(this.piece(down) == this.piece(first) && first != down)
                {
                    flag++
                }
                if(flag > 1)
                {
                    return true
                }

            }

            //should we check if it is on board?


        }
        return false
    }

    move(first: Position, second: Position) {
        let temporary = second
        second = first
        first = temporary
    }

    height() : number {
        return this._height
    }

    width() : number {
        return this._width
    }
}



