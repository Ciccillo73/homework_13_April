// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//output :The murderer is Miss Scarlet
// reason :The function declareMurderer can access the object scenario and use one of his keys(murderer) through the return

// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
};

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// output: error
//reason The function changeMurder can t change the value of const murderer

// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//output: First Verdit:Mrs. Peacock..// Second Verdict: Professor Plum
//reason THe first function return the murder variable been declared in the function itself.The second log calls the variavbel at the top of the code(murder) which is assigned to 'Professor Plum'

//Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard// Suspect three is Mrs. Peacock
//reason: The function declareAllSuspects ,been assigned to the const suspects, returns three variable of which the suspetThree has been reassigned to 'Colonel Mustard' in the function itself.The second log refers the suspetThree const assigned at the top od the code.

//Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
};

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// Output: The weapon is the Revolver.
 // Reason: calling changeWeapon  changes the scenario’s weapon property to ‘Revolver’. The const verdict ,that has been assigned to delclareWeapon function, returns a string  and the scenario’s weapon property.





// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Output: The murderer is Mrs. White.
// Reason: changeMurder reassigns murderer to the value ‘Mr. Green’, then plotTwist is called, which reassigns murderer to the other value ‘Mrs. White’. finally declareMurderer returns a string and murder property.

Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Output: The murderer is Mr. Green.
// Reason: changeMurderer reassigns murderer to the value ‘Mr. Green’.
// Then calls plotTwist that creates a local variable murderer with another value:‘Colonel Mustard’,but been a locale variable in the function itself doesnt reassign the top murder const.
// unexpectedOutcome is then called which reassigns the local variable in the plotTwist function to be ‘Miss Scarlet’, but again, does not effect the initial murderer variable. When declareMurderer is called, it returns a string that refers to the initial murderer variable, which has only been reassigned once.

Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// ouput: The weapon is Candle Stick
// reason : when changeScenario is called  updates scenario.murderer key to ‘Mrs. Peacock’ and change the room key to ‘Dining Room’.
 // PlotTwist is called and checks if the scenario’s room key is equal to ‘Dining Room’, and in this case updates the scenario murderer property to be ‘Colonel Mustard’.
 // UnexpectedOutcome compares the function  parameter ‘Colonel Mustard’ with the object murder property been set in the plotTwist function  and if is true  updates the scenario’s weapon property to ‘Candle Stick’.
 //At the end, const calls  declareWeapon that returns a string and the weapon property.

Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Output: The murderer is Professor Plum.
 // reason:The murder varible in the if statement been a scope variable can t change the murder variable that is a global variable.

 
