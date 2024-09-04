function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello') === "olleh");
console.log(reverse('The quick brown fox') === "xof nworb kciuq ehT");