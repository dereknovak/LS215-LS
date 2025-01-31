/*
Problem:
I: An array of movie data
O: A new array with only specific movies/properties

Rules:
- Keep only movies that have both the `id` and `title` present
- Keep only the `id` and `title` for each movie

Example:

Data Structure:
- Array of all the movies
- Returning a new array
- Each movie is an object

Algorithm:
- Find all movies that have the `id` and `title` props
    - filter by if it has the props
- Of those movies, remove all other properties
    - map, transform to just the correct props
- Return the new set of movies
*/

function processReleaseData(data) {
  return data.filter(movie => movie.id >= 0 && movie.title)
             .map(movie => {
               return {
                 id: movie.id,
                 title: movie.title,
               };
             });
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];