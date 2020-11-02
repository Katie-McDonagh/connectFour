document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid.div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for(var i = 0, len = squares.length; i < len; i++)

  (function(index){
    //add an onclick for each square of your grid
    squares[i].onclick = function(){
       //if the square below your current square has been taken, you can go on top of it)
       if(squares[index + 7].classList.contains('taken')){
         if(currentPlayer === 1){
           squares[index].classList.add('taken')
           squares[index].classList.add('player-one')
         }
       }
    }
  })

})