const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const fields = lines[0].split(',');

    console.log(`Number of students: ${lines.length - 1}`);
    
    fields.forEach((field, index) => {
      const students = lines.slice(1).map(line => line.split(',')[index]).filter(Boolean);
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });

  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
