'use strict';

// Methor 1
const handel1 = value1 => {
  return (handel2 = value2 => {
    console.log(`${value1} ${value2}`);
  });
};

// Methor 2
const handel2 = value1 => value2 => {
  console.log(`${value1} ${value2}`);
};
