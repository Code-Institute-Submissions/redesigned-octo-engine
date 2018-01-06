const regex = /^[\w]{3,}/i;

export default function nameValidator(inputString) {

  return regex.test(inputString.replace(/\W/g, ""));

}
