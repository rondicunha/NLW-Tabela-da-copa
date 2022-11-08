let delay = -0.4
function createCard(date, dWeek, games) {
  delay = delay + 0.4
  return `
    <div class="card">
          <h2>${date} <span> ${dWeek}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
  `
}

function createMatch(player1, player2, time) {
  return `
    <li>
       <img class="img" src="./assets/images/flags/icon-${player1}.svg" alt="${player1}'s flag"/>
       <strong>${time}</strong>
       <img class="img" src="./assets/images/flags/icon-${player2}.svg" alt="${player2}'s flag"/>
    </li>
  `
}

document.querySelector("#cards").innerHTML = `

        ${createCard(
          "20/11",
          "domingo",
          createMatch("qatar", "ecuador", "13:00")
        )}
        ${createCard(
          "21/11",
          "segunda",
          createMatch("england", "iran", "10:00") +
            createMatch("senegal", "netherlands", "13:00") +
            createMatch("unitedStates", "wales", "16:00")
        )}
        ${createCard(
          "22/11",
          "terça",
          createMatch("argentina", "saudiArabia", "07:00") +
            createMatch("denmark", "tunisia", "10:00") +
            createMatch("mexico", "poland", "13:00") +
            createMatch("france", "australia", "16:00")
        )}
        ${createCard(
          "23/11",
          "quarta",
          createMatch("morocco", "croatia", "07:00") +
            createMatch("germany", "japan", "10:00") +
            createMatch("spain", "costaRica", "13:00") +
            createMatch("belgium", "canada", "16:00")
        )}
        ${createCard(
          "24/11",
          "quinta",
          createMatch("switzerland", "cameroon", "07:00") +
            createMatch("uruguay", "southKorea", "10:00") +
            createMatch("portugal", "ghana", "13:00") +
            createMatch("brazil", "serbia", "16:00")
        )}
        ${createCard(
          "25/11",
          "sexta",
          createMatch("wales", "iran", "07:00") +
            createMatch("qatar", "senegal", "10:00") +
            createMatch("poland", "ecuador", "13:00") +
            createMatch("england", "unitedStates", "16:00")
        )}
        ${createCard(
          "26/11",
          "sabado",
          createMatch("tunisia", "australia", "07:00") +
            createMatch("poland", "saudiArabia", "10:00") +
            createMatch("france", "denmark", "13:00") +
            createMatch("argentina", "mexico", "16:00")
        )}
        ${createCard(
          "27/11",
          "domingo",
          createMatch("japan", "costaRica", "07:00") +
            createMatch("belgium", "morocco", "10:00") +
            createMatch("croatia", "canada", "13:00") +
            createMatch("spain", "germany", "16:00")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createMatch("cameroon", "serbia", "07:00") +
            createMatch("southKorea", "ghana", "10:00") +
            createMatch("brazil", "switzerland", "13:00") +
            createMatch("portugal", "uruguay", "16:00")
        )}
        ${createCard(
          "29/11",
          "terça",
          createMatch("ecuador", "senegal", "12:00") +
            createMatch("poland", "qatar", "12:00") +
            createMatch("iran", "unitedStates", "16:00") +
            createMatch("wales", "england", "16:00")
        )}
        ${createCard(
          "30/11",
          "quarta",
          createMatch("tunisia", "france", "12:00") +
            createMatch("australia", "denmark", "12:00") +
            createMatch("poland", "argentina", "16:00") +
            createMatch("saudiArabia", "mexico", "16:00")
        )}
        ${createCard(
          "01/12",
          "quinta",
          createMatch("croatia", "belgium", "12:00") +
            createMatch("canada", "morocco", "12:00") +
            createMatch("japan", "spain", "16:00") +
            createMatch("costaRica", "germany", "16:00")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createMatch("southKorea", "portugal", "12:00") +
            createMatch("ghana", "uruguay", "12:00") +
            createMatch("serbia", "switzerland", "16:00") +
            createMatch("cameroon", "brazil", "16:00")
        )}
`
