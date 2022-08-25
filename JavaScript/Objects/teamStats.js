const team = {
    _players: [
       {firstName: 'Gabriel',lastName: 'Thiessen', age: 19,},
       {firstName: 'Rafael',lastName: 'Thiessen',age: 14},
       {firstName: 'Bruno',lastName: 'Pereira', age: 30}
    ],
    _games: [
       {opponent: 'União',teamPoints: 30,opponentPoints: 20},
       {opponent: 'Sogipa',teamPoints: 15,opponentPoints: 40},
       {opponent: 'Corinthians',teamPoints: 60,opponentPoints: 49},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    }
   }
   console.log(team.players)
   console.log(team.games)
   team.addPlayer('Pedro', 'Silva', 18)