type Teacher = {
	firstname: string;
	lastname: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any; // for any additional attribute
};


const teacher1: Teacher = {
  firstName: 'Samuel',
  fullTimeEmployee: false,
  lastName: 'Amsalu',
  location: 'Oromia',
  contract: false, // Additional attribute
};

console.log(teacher1);

interface Directors extends Teacher {
	numberOfReports: number;
}

const dir1: Directos = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(dir1);
