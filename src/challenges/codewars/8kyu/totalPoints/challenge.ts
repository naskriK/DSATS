enum MatchResult {
  "WIN" = 3,
  "LOSE" = 0,
  "TIE" = 1,
}

export function points(games: string[]): number {
  const mappedMatchResults = games.map((game) => {
    const [firstTeamGoals, secondTeamGoals] = game
      .split(":")
      .map((goals) => Number(goals));

    if (firstTeamGoals > secondTeamGoals) return MatchResult.WIN;
    if (firstTeamGoals < secondTeamGoals) return MatchResult.LOSE;
    return MatchResult.TIE;
  });

  const totalPoints = mappedMatchResults.reduce(
    (acc, next) => (acc += next),
    0
  );

  return totalPoints;
}
