/* 

PROBLEM
I: A string (email address)
O: A boolean, rep whether the address is valid or not

- Criteria
    - Must be 1 @
    - First part but contain 1+ letters/digits
    - First part must have no special chars
    - Second part must have 2+ with a dot between each
        - Each component must have 1+ letters (not digit)

EXAMPLE
- foo@baz.com
    - true
- HELLO0123@baz
    - false (domain only have 1 component)

ALGORITHM
isValidEmail
- Separate local and domain into 2 separate variables
- Validate localPart
    - return false if there are any special chars or length is 0
- Validate domainPart
    - Separate into 2 sections
    Validate sections
        - return false if there are any numbers/special or length is 0
- return true
*/

function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/i);
}

function isValidEmail2(email) {
  let [local, domain] = email.split('@');
  if (invalidLocal(local) || invalidDomain(domain)) return false;
  return true;
}

function invalidLocal(local) {
  return local.length === 0 || local.match(/[^a-z0-9]/i);
}

function invalidDomain(domain) {
  if (!(domain.match(/\./))) return true;

  let components = domain.split('.');
  return components.some(comp => comp.length === 0 || comp.match(/[^a-z]/i));
}

console.log(isValidEmail('Foo@baz.com.ph') === true);
console.log(isValidEmail('Foo@mx.baz.com.ph') === true);
console.log(isValidEmail('foo@baz.com') === true);
console.log(isValidEmail('foo@baz.ph') === true);
console.log(isValidEmail('HELLO123@baz') === false);
console.log(isValidEmail('foo.bar@baz.to') === false);
console.log(isValidEmail('foo@baz.') === false);
console.log(isValidEmail('foo_bat@baz') === false);
console.log(isValidEmail('foo@bar.a12') === false);
console.log(isValidEmail('foo_bar@baz.com') === false);
console.log(isValidEmail('foo@bar.....com') === false);