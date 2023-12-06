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










interface printTeacherFunction {
	(fisrtName: string, lastName: string): string;
};

const printTeacher: PrintTeacherFunction = (fisrName, lastName) => {
	const firstLetter = firstName.charAt(0).toUpperCase();
	const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
	return `${firstLetter}. ${fullLastName}`
};

const result: string = printTeacher("Samuel", "Amsalu");
console.log(result);















interface StudentConstructor {
	firstName: string;
	lastName: string;
};

interface StudentMethods {
	workOnHomework(): string;
	displayName(): string;
};

interface StudentClass extends StudentConstructor, StudentMethods {}

class Student implements StudentClass {
	firstName: string;
	lastName: string;

	constructor({firstName, lastName}: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working!';
	}

	displayName(): string {
		return this.firstName;
	}
};

const studentInstance = new Student({firstName: 'Samuel', lastName: 'Amsalu'});

console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());



