const regex = /^[\w]{10,}/i;

export default function messageValidator(messageString) {

  return regex.test(messageString.replace(/\W/g, ""));

}
