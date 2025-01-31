/*

PROBLEM:
I: An array of objects
O: An array of objects, with data fixed

- Does not have to be the same array
- Band names are capitalized
- All dots removed from names
- All countries changed to Canada

ALGORITHM:
- Transform the objects within array to fixed version
    - map
    - Update name value to capitalized and without dots
    - Update country to Canada
    - return new obj
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

function processBands(data) {
  return data.map(band => {
    let newWord = band.name.split(' ')
                           .map(capitalize)
                           .join(' ')
                           .replace(/\./, '');

    return {
      name: newWord,
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));

/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/