export function emailIsValid(email = "") {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return valid;
}

export function passwordIsValid(password = "") {
  return password.length > 7;
}
