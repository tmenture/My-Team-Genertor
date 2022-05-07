const Manager = require('../lib/Manager');

// test that the manager object was created with office number property added
test('Creates Manager Object', () => {
    const manager = new Manager('Thomas', 1, 'thomas@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// tests that getRole() grabs the role 
test('Gets Role Of Employee', () => {
    const manager = new Manager('Thomas', 1, "thoams@gmail.com", 2);

    expect(manager.getRole()).toEqual('Manager');
});