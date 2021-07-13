function alternatingSums(a) {
    let team1 = 0
    let team2 = 0
    for (i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            team1 += a[i]
            console.log(team1);
        }
        else {
            team2 += a[i]
            console.log(team2);
        }
    }
    return [team1, team2]
}

console.log(alternatingSums([60, 40, 55, 75, 64]))