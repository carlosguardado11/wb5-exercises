let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
   ];


   //finding name of member with ID of 187
   let findMemId = academyMembers.find((member) => member.memID === 187);
        console.log('name of member with id of 187 is ', findMemId.name);

    console.log('---');

    //who has been in at least 3 films
    console.log('');
    console.log('actors who have been in at least three films');
    const actorsIn3orMoreFilms = academyMembers.filter((member) => member.films.length >= 3);
    actorsIn3orMoreFilms.forEach ((member) => console.log(member.name));

    //actors who start with Bob
    console.log('actors whose name starts with Bob');
    const actorsWhoStartWithBob = academyMembers.filter((member) => member.name.startsWith('Bob'));
    actorsWhoStartWithBob.forEach((member) => console.log(member.name));


    console.log('');
    console.log('Actors who have been in a film starting with "A"');
    
    const startsWithA = (filmName) => filmName.startsWithA('A');
    const containsTitleThatStartsWithA = (films) => films.find(startsWithA);
   
    const actorsInA = academyMembers.filter(member => containsTitleThatStartsWithA(member.films));

    actorsInA.forEach((actor) => console.log('-', actor.name));
