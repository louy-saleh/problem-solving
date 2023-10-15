/*
    Your start-up's BA has told marketing that your website has
    a large audience in Scandinavia and surrounding countries. 
    Marketing thinks it would be great to welcome visitors to 
    the site in their own language. Luckily you already use an API
    that detects the user's location, so this is an easy win.

    * The Task
    Think of a way to store the languages as a database. 
    The languages are listed below so you can copy and paste!
    Write a 'welcome' function that takes a parameter 'language',
    with a type String, and returns a greeting - if you have
    it in your database.
    It should default to English if the language is not in
    the database, or in 
    the event of an invalid input.

    ! Possible invalid inputs include:
    IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
    IP_ADDRESS_NOT_FOUND - ip address not in the database
    IP_ADDRESS_REQUIRED - no ip address was supplied
*/
let database_languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  //   return database_languages[language] || "Welcome";
  // Another way to solve using object method => hasOwnProperty()
  return database_languages.hasOwnProperty(language)
    ? database_languages[language]
    : "Welcome";
}

console.log(greet("welsh"));
