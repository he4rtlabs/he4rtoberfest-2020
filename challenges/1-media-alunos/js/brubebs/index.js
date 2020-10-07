function gradingStudents() {
	let result = 0;

	for (argument of arguments) {
		result += argument / arguments.length;
	}

	return result;
}

console.log(gradingStudents(22, 53));