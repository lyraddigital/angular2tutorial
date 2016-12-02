export class Team {
    teamName: string;
    numberOfWins: string;
    numberOfLosses: string;
    winPercentage: string;
    gamesBehind: string;

    constructor(teamName: string, numberOfWins: string, numberOfLosses: string, winPercentage: string, gamesBehind: string) {
        this.teamName = teamName;
        this.numberOfWins = numberOfWins;
        this.numberOfLosses = numberOfLosses;
        this.winPercentage = winPercentage;
        this.gamesBehind = gamesBehind;
    }
}