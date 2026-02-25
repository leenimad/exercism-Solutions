// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
const str = /Chatbot/i ;
const result = command.match(str);
  if (result['index']===0){
    return true;
  }
  return false;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let word = 'emoji';
  let regex= new RegExp(word + "\\d+", "gi");
  let result = message.replace(regex,'');
  return result;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
const pattern = "^\\(\\+\\d{2}\\)\\s\\d{3}-\\d{3}-\\d{3}$";
  const regex = new RegExp(pattern);
  const res = regex.test(number);
  if (res === true){
    return 'Thanks! You can now download me to your phone.';
  }
  else{
    return `Oops, it seems like I can't reach out to ${number}` ;
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
 const urlPattern = "[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}\\b";
  const regex = new RegExp(urlPattern,'g');
  const res = userInput.match(regex);
  return res;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
 const nameRegex = new RegExp("^(\\w+),\\s(\\w+)$");
  const formattedName = fullName.replace(nameRegex, (match, p1, p2) => {
    const firstName = p2.charAt(0).toUpperCase() + p2.slice(1).toLowerCase();
    const lastName = p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase();
    return `${firstName} ${lastName}`;
  });
  return `Nice to meet you, ${formattedName}`;
}
