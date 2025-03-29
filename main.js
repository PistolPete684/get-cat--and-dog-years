var humanYearsCatYearsDogYears = function(humanYears) {
  //Setup counting variables for dogs and cats
  let catYears = 0;
  let dogYears = 0;
  //If at least 1 year old, add 15 yesrs to the count
  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }
  //If at least 2 years old, add 9 yesrs to the count
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  //If over 2 years old, add 4 for every year over 2 for cats and 5 for every year over 2 for dogs
  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }
  
  //Return the count variables witht he total number of years for humans, cats and dogs
  return [humanYears, catYears, dogYears];
}