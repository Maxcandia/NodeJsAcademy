const { palindrome, average } = require('../utils/utility-for-testing')
describe('metodos de Util', () => {
  
  test('palindrome of mindhub', () => {
    const result = palindrome('mindhub')
    expect(result).toBe('buhdnim')
  })

  test('palindrome of empty string', () => {
    const result = palindrome('')
    expect(result).toBe('')
  })

  test('palindrome of undefined', () => {
    const result = palindrome()
    expect(result).toBeUndefined()
  })

  test('average of 5 5 5 should be 5', () => {
    expect(average([5,5,5])).toBe(5);
  })

  test('average of 15 6 6 should be 9', () => {
    expect(average([15,6,6])).toBe(9);
  })

  

})
