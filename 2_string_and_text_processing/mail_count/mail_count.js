/* 

PROBLEM
I: A string, containing email data
O: Logs to console (see example)
    - Total number of emails
    - A date range of the messages (weekday, month, day, year)

- Emails are separated by ##||##
- Each email part is separated by #/#

HYPOTHESIS
- To get count, split string into separate emails and count
- To get date:
    - Find dates
    - Sort Dates
    - Determine weekday of dates

DS
- An array for all the emails
- An array for all the dates

ALGORITHM
- Split string into separate emails
    - Split using ##||##
- Count size of emails
    - Log to console
- Transform emails into their respective dates
    - map
    - Find the date category
        - Matching using 00-00-0000
- Sort the dates
- Determine max/min dates
- Transform into their respective weekdays
    - Format Date to XXX XXX day year
    - Log range to console
*/

let emailData = require('./email_data.js');
const emailRegex = /##\|\|##/;
const dateRegex = /\d\d-\d\d-\d{4}/g;

function mailCount(emailData) {
  let emails = emailData.split(emailRegex);
  console.log(`Count of Email: ${emails.length}`);

  let dates = emails.map(parseDate).sort(ascending).map(formatDate);
  console.log(`Date Range: ${dates[0]} - ${dates[dates.length - 1]}`);
}

function formatDate(num) {
  return new Date(num).toDateString();
}

const parseDate = email => Date.parse(email.match(dateRegex)[0])
const ascending = (a, b) => a - b;

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016