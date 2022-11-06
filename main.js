function createGame(player1, hour, player2, resultplayer1, resultplayer2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    <div class="resultado"> 
    <p>${resultplayer1}</P>
    <strong>resultado</strong>
    <p>${resultplayer2}</P>
    </div>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

    createCard(
      "24/11", "quinta-feira", 
      createGame("brazil", "16:00", "serbia" , "0", "0")
      
      ) 
      
      +
      
      createCard(
      "28/11","segunda-feira",
      createGame("brazil", "13:00", "switzerland", "0", "0") 
   )
      
      +
      
      createCard(
        "02/12", "sexta-feira", 
      createGame("brazil", "16:00", "cameroon", "0", "0")
)

