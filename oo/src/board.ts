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

const BoardListener = (checker:()=>{}, move:Move):BoardEvent<T> => {
let bool = checker(move)
 return new BoardEvent<Match>
}


export class Board<T> {
    private x : number = 4//col
    private y : number = 3//row

    addListener(listener: BoardListener<T>) {
    }

    

    piece(p: Position): T | undefined {
        return 
    }

    canMove(first: Position, second: Position): boolean {
        if(first.col >= 0 && first.col < this.width() && second.col >= 0 && second.row < this.height())
        {
            let firstSum = first.col + first.row
            let secondSum =  second.col + second.row
            if((firstSum - secondSum == 1) || (firstSum - secondSum == -1) )
            {
                let p: Position = {col:second.col, row:second.row}
                if(this.piece(p) == first && this.piece{})
                return true
            }
        }
        return false
    }

    move(first: Position, second: Position) {
        let temporary = second
        second = first
        first = temporary
    }

    height() : number {
        return this.x
    }

    width() : number {
        return this.y
    }
}



