type Teacher = {
	firstname: string;
	lastname: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any; // for any additional attribute
};


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional attribute
};

consolo.log(teacher3);
