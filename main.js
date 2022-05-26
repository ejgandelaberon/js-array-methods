const players = [
    {ign: 'Harvex', job: 'Slayer', hp: 330000, atk: 4500, matk: 24000},
    {ign: 'khELogs', job: 'Lightbringer', hp: 490000, atk: 17000, matk: 2000},
    {ign: 'Jaicee', job: 'Novice Guardian', hp: 430000, atk: 19000, matk: 2100},
    {ign: 'RedJinx', job: 'Chronomancer', hp: 700000, atk: 3400, matk: 7000},
    {ign: 'dranoj', job: 'Divine Avenger', hp: 1450000, atk: 3900, matk: 2700},
    {ign: 'Damaso', job: 'Saint', hp: 800000, atk: 3400, matk: 4100},
]

const ages = [25, 37, 28, 32, 33, 23]

/** forEach */

function forLoop() {
    for(i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
}

function forEach() {
    players.forEach(function(player) {
        console.log(player.ign);
    })
}

/** filter */

function forLoopFilter() {
    let oldies = [];
    for(i = 0; i < ages.length; i++) {
        if(ages[i] >= 30) {
            oldies.push(ages[i])
        }
    }
    console.log(oldies);
}

function filterFn() {
    const oldies = ages.filter(function(age) {
        if(age >= 30) {
            return true;
        }
    })
    console.log(oldies);
}

function filterArrowFn(query = 'age' | 'player') {
    if(query === 'age') {
        const oldies = ages.filter(age => age >= 30)
        console.log(oldies);
    } else if (query === 'player') {
        const noob = players.filter(player => player.ign === 'khELogs')
        console.log(noob);
    }
}

/** map */
function map() {
    const members = players.map(function(player, index) {
        return `${index+1} - ${player.ign} - ${player.job}`;
    })
    console.log(members);
}

function mapArrowFn(query = 'age' | 'player') {
    if(query === 'age') {
        const ageMap = ages
            .map(age => age * 2)
            .map(age => Math.sqrt(age))
        console.log(ageMap);
    } else if (query === 'player') {
        const members = players.map((player, index) => `${index+1} - ${player.ign} - ${player.job}`)
        console.log(members);
    }
}

/** sort */
function sort(query = 'age' | 'player') {
    if(query === 'age') {
        const sortedAge = ages.sort((a,b) => (a - b))
        console.log(sortedAge);
    } else if (query === 'player') {
        const tankiest = players.sort((a, b) => (a.hp - b.hp))
        console.log(tankiest);
    }
}


/** reduce */
function forLoopReduce(query = 'age' | 'player') {
    if(query === 'age') {
        let ageSum = 0;
        for(i = 0; i < ages.length; i++) {
            ageSum += ages[i]
        }
        console.log(ageSum);
    } else if (query === 'player') {
        let totalAtk = 0;
        let totalMatk = 0;
        for(i = 0; i < players.length; i++) {
            totalAtk += players[i].atk
            totalMatk += players[i].matk
        }
        console.log(totalAtk+totalMatk);
    }
}

function reduce(query = 'age' | 'player') {
    if(query === 'age') {
        const ageSum = ages.reduce((total, age) => total+age, 0)
        console.log(ageSum);
    } else if (query === 'player') {
        const totalHp = players.reduce((total, player) => total+player.hp, 0)
        console.log(totalHp);
    }
}

/** COMBINED */

function combinedFn(query = 'age' | 'player') {
    if(query === 'age') {
        const combined = ages
            .map(age => age * 2)
            .filter(age => age >= 50)
            .sort((a, b) => b-a)
            .reduce((total, age) => total + (age^2), 0)
        console.log(combined);
    } else if (query === 'player') {
        const combined = players
            .filter(p => p.hp >= 490001)
            .sort((a, b) => (a.hp > b.hp ? -1 : 1))
            .map(p => `IGN: ${p.ign} || JOB: ${p.job}`)
        console.log(combined);
    }
}

combinedFn('player')