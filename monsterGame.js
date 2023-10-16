const readline = require('readline-sync'); 



const player = { 
    name: '', 
    life: 100
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
 
    
}


welcomePlayer(); 
runOrFight(); 

