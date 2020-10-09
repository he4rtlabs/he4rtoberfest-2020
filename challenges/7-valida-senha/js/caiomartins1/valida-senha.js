const password = process.argv.slice(2)[0];

if (process.argv.slice(2).length > 2) {
  console.log('Senha Invalida');
  return;
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function validatePassword(password) {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;

  if (/[.!?\\-]/.test(password)) return 'Senha Invalida';
  if (password.length < 6 || password.length > 32) return 'Senha Invalida';
  if (!/[A-Za-z]/.test(password)) return 'Senha Invalida';

  const splitedPass = password.split('');

  splitedPass.forEach((char) => {
    if (isUpperCase(char)) hasUpperCase = true;
    if (isLowerCase(char)) hasLowerCase = true;
    if (!isNaN(Number(char))) hasNumber = true;
  });

  if (hasLowerCase && hasUpperCase && hasNumber) {
    return 'Senha Valida';
  }
}

console.log(validatePassword(password));
