const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  // let result =tutorials.map((tutorial) => tutorial.split(" ").map((passdss)=>passdss[0].toUpperCase() + passdss.slice(1)).join(" "))


  // first map splits the elements in the array where there is a single space - 
  // Split - change a string into an array of substring and returns the array

  // second map takes the charAt(0) and puts turns it into UpperCase the concatinates with the remaining string finally joins the substrings into one array

  return tutorials.map((tutorial) => tutorial.split(" ").map((passedString)=>passedString.charAt(0).toUpperCase() + passedString.slice(1)).join(" "))
}
