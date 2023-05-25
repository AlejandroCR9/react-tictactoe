import { Square } from "./Square.jsx"
export const Board = ({board, updateBoard})=>{

    return (
        <section className='game'>
            {
            board.map((_, index) =>{
                return (
                <Square
                index={index}
                key={index}
                updateBoard={updateBoard}>
                    {board[index]}
                </Square>
                )
            })
            }
        </section>
    )
}
