class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources <= 0) {
            return `You don't have enough resources to start the hike`;
        }

        const difference = time * 10;
        if (this.resources - difference < 0) {
            return `You don't have enough resources to complete the hike`;
        }

        this.resources -= difference;
        this.listOfHikes.push({
            peak, time, difficultyLevel
        });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
          return `${this.username} has not done any hiking yet`;
        }
      
        let filteredHikes;
        if (criteria === 'hard' || criteria === 'easy') {
          filteredHikes = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);
          if (filteredHikes.length === 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
          }
        } else if (criteria === 'all') {
          let allHikes = 'All hiking records:\n';
          this.listOfHikes.forEach(hike => {
            allHikes += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
          });
          return allHikes.trim();
        } else {
          return `${criteria} is not a valid criterion`;
        }
      
        const bestHike = filteredHikes.reduce((prev, curr) => {
          return prev.time <= curr.time ? prev : curr;
        });
      
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak}, for ${bestHike.time} hours`;
      }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
