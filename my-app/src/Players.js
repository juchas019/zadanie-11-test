import React from 'react'

function Players() {

    let players = [
        {username: 'Janusz', points: Math.floor(Math.random()*100)},
        {username: 'Marek', points: Math.floor(Math.random()*100)},
        {username: 'Zenek', points: Math.floor(Math.random()*100)},
        {username: 'Mateusz', points: Math.floor(Math.random()*100)},
        {username: 'Krzysiek', points: Math.floor(Math.random()*100)},
        {username: 'Jurek', points: Math.floor(Math.random()*100)},
        {username: 'Kasia', points: Math.floor(Math.random()*100)},
        {username: 'Ula', points: Math.floor(Math.random()*100)},
        {username: 'Zbyszek', points: Math.floor(Math.random()*100)},
        {username: 'Mariola', points: Math.floor(Math.random()*100)}
    ];


    return (
        players.map((player, index) => {
            return (
        <tr key={index}>
        <td>{player.username}</td>
    <td>{player.points}</td>
    </tr>
)
})
)
}

export default Players;
