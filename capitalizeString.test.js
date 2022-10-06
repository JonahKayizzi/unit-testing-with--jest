test('first character should be capital', () => {
    const mystring = 'jonathan';
    expect(capitalize(mystring)[0]).toEqual(mystring[0].toUpperCase())
 })

 const capitalize = (string) => string.toUpperCase()