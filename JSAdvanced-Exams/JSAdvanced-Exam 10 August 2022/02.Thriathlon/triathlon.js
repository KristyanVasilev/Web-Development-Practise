class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (!this.participants[participantName] === undefined) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (this.participants[participantName] === undefined) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error( `${participantName} is not well prepared and cannot finish any discipline`);
        }

        let finishedDisciplinesCount = Math.floor(condition / 30);

        if (finishedDisciplinesCount > 0 && finishedDisciplinesCount < 3) {
            return `${participantName} could only complete ${finishedDisciplinesCount} of the disciplines`;
        } else if (finishedDisciplinesCount === 3) {
            let participantGender = this.participants[participantName];
            this.listOfFinalists.push({
                name: participantName,
                gender: participantGender,
            });
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding(participantName) {
        const participant = this.listOfFinalists.find(p => p.name == participantName);
        if (participant === undefined) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return "There are no finalists in this competition";

        } else if (criteria === "all") {
            let sortedFinalists = this.listOfFinalists.map(finalist => finalist.name).sort();
            let output = "List of all " + this.competitionName + " finalists:\n";
            output += sortedFinalists.join("\n");
            return output;
        } 
        else {
            let filteredFinalists = this.listOfFinalists.filter(finalist => finalist.gender === criteria);
            if (filteredFinalists.length === 0) {
                return `There are no ${criteria}'s that finished the competition`;
            } else {
                let firstFinalist = filteredFinalists[0];
                return `${firstFinalist.name} is the first ${criteria} that finished the ${competitionName} triathlon`;
            }
        }
    }
}


const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"), "A new participant has been added - Peter");
console.log(contest.addParticipant("Sasha", "female"), "A new participant has been added - Sasha");
console.log(contest.completeness("Peter", 100), "Congratulations, Peter finished the whole competition");
console.log(contest.completeness("Sasha", 70), "Sasha could only complete 2 of the disciplines");
console.log(contest.rewarding("Peter"), "Peter was rewarded with a trophy for his performance");
console.log(contest.rewarding("Sasha"), "Sasha is not in the current finalists list");
