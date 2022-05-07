const Intern = require('../lib/Intern');

// tests that the intern object was created with school property added 
test('Creates Intern Object', () => {
    const intern = new Intern('Thomas', 1, 'thomas@gmial.com', 'Rutgers');

    expect(intern.school).toEqual(expect.any(String));
});

// test that getSchool() grabs school
test('Grabs Interns School', () => {
    const intern = new Intern('Thomas', 1, 'thomas@gmail.com', 'Rutgers');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// tests that getRole() grabs the role
test('Gets The Role Of Employee', () => {
    const intern = new Intern('Thomas', 1, 'thomas@gmail.com', 'Rutgers');

    expect(intern.getRole()).toEqual('Intern');
});