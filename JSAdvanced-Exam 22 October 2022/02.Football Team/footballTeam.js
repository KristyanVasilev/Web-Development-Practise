class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.map(p => {
            let [name, age, playerValue] = p.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(p => p.name == name);
            if (player) {

                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            }
            else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        });

        let result = [];
        this.invitedPlayers.map(p => {
            result.push(p.name);
        });
        return `You Successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let currPlayer = this.invitedPlayers.find(p => p.name == name);
        if (currPlayer == undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(playerOffer - currPlayer.playerValue)} million more are needed to sign the contract!`);
        }

        currPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currPlayer = this.invitedPlayers.find(p => p.name == name);
        if (currPlayer == undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currPlayer.age < age) {
            if (age - currPlayer.age < 5) {
                return `${name} will sign a contract for ${Math.abs(currPlayer.age - age)} years with ${this.clubName} in ${this.country}!`;
            }
            else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult(){
        const result = [`Players list:`,
        ...this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name)).map(p => `Player ${p.name}-${p.playerValue}"`)];

        return result.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



