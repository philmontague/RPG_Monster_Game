const readline = require('readline-sync'); 

const player = { 
    name: '', 
    life: 100, 
    weapon: "Bare Hands", 
    shield: "None", 
    armor: "None"
}

const monsters = ["Thornclaw", "Frostbite", "Gloomfang"];

function welcomePlayer() { 
    const playerName = readline.question("What is your name?---> "); 
    player.name = playerName; 
    console.log(`Welcome ${playerName}, there are monsters for you to fight!`); 
}

function getRandomMonster() { 
    const randomIndex = Math.floor(Math.random() * monsters.length); 
    return monsters[randomIndex];  
}

function runOrFight() { 
    const randomMonster = getRandomMonster(); 
    const action = readline.keyIn(`OH NO, a wild ${randomMonster} appeared! Would you like to [r]un or [f]ight?--> `, { limit: 'rf' });
 
    if (action === 'r') {
        if (Math.random() < 2 / 3) { 
            console.log('Wow, you are fast! You escaped from the monster!'); 
        } else { 
            console.log('Oops, you are slow and the monster caught you!'); 
            if (player.armor === 'Armor') {
                console.log('Fortunately, your armor softened the blow.'); 
                player.life -= 10; 
            } else { 
                player.life -= 20; 
            }
            console.log(`You lost ${player.armor === "Armor" ? 10: 20} life points. Your life is now ${player.life}`); 
        }
    }
}


welcomePlayer(); 
runOrFight(); 

