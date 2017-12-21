const regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;

export default function ukPostcodeValidator(postcode) {

  return regex.test(postcode.replace(/\W/g, ""));

}
