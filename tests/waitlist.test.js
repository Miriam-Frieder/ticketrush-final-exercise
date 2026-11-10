const { joinWaitlist } = require('../js/waitlist');

test('adds a trimmed lowercase email without mutating the list', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, '  NEW@Example.COM  ');
  assertEq(result.length, 2);
  assertEq(result[1], 'new@example.com');
  if (result === original || original.length !== 1) throw new Error('expected a new array');
});

test('does not add an email already in the list', function () {
  const result = joinWaitlist(['user@example.com'], ' USER@Example.COM ');
  assertEq(result.length, 1);
});

test('returns a new unchanged list for invalid emails', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, 'invalid-email');
  assertEq(result.length, 1);
  if (result === original) throw new Error('expected a new array');
});
