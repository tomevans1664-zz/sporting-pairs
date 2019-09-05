const hobbyMap = {
    tom: ['football', 'tennis', 'pool'],
    jamie: ['football', 'pool'],
    dave: ['pool'],
    johanna: ['tennis']
};

function mapHobbies (hobbyMap) {
    const people = Object.keys(hobbyMap);
    //console.log(people);
    const result = {};
    for (let i = 0; i < people.length ; i++) {
    for (let j = i + 1; j < people.length; j++) {
            const name1 = people[i];
            const name2 = people[j];
            const key = `${name1},${name2}`;
            //get common sports
            const sports1 = hobbyMap[name1];
            const sports2 = hobbyMap[name2];
            const commonSports = findCommonSportsUsingSet(sports1, sports2);
            result[key] = commonSports;
        }
    }
    //console.log(result);
}

function findCommonSports(sports1, sports2) {
    return sports1.filter((sport) => {
        return sports2.includes(sport)
    });
}

function findCommonSportsUsingSet(sports1, sports2) {
    const set1 = new Set(sports1);
    const set2 = new Set([...sports2]);
    const intersection = new Set(
        [...set1].filter((sport) => {
            return set2.has(sport);
        })
    );
    console.log(intersection)
}

mapHobbies(hobbyMap);

/*
expectedResult = {
    'tom,jamie': ['football', 'pool'],
    'tom,dave': ['pool'],
    'tom,johanna': ['tennis'],
    'jamie,dave': ['pool'],
    'jamie,johanna': [],
    'dave,johanna': [],
};
*/