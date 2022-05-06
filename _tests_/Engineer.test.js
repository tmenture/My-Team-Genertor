const Engineer=  require('../lib/Engineer');

// tests engineer object was created with github username property added
test('Creates Engineer Object', () => {
    const engineer = new Engineer('Thomas', 1, 'thomas@gmail.com', 'tmenture');

    expect(engineer.github).toEqual(expect.any(String));
});

// tests that getGithub() grabs github info
test('Gets Engineers Github Info', () => {
    const engineer = new Engineer('Thomas', 1, 'thomas@gmail.com', 'tmenture');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// tests that getRole() grabs the role 
test('Gets the role of employee', () => {
    const engineer = new Engineer('Thomas', 1, 'thomas@gmail.com', 'tmenture');

    expect(engineer.getRole()).toEqual('Engineer');
});