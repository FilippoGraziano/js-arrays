const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i++) {
  let teachersElement;
  if (teachers[i].length >= 5) {
    teachersElement = teachers[i];
    longNames.push(teachersElement);
  }
};
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(-2, 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = `No`;
for (i = 0; i < teachers.length; i++) {

  if (teachers[i] === `Fabio`) {
    isFabioPresent = `Yes`;
    break;
  };
};

if (isFabioPresent === `Yes`) {
  
  console.log(`is Fabio present? ${isFabioPresent}, Fabio is present`);
} else {

  console.log(`is fabio present? ${isFabioPresent}, Fabio isn't present`);
};

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = teachers.toString();
console.log(teachersString);