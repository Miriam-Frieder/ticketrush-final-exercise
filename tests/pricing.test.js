const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive 20% off the ticket price', function () { assertEq(calcTotal(2, true), 584); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('members cannot buy more than 6 tickets', function () { assertEq(calcTotal(7, true), null); });
test('members may buy exactly 6 tickets', function () { assertEq(calcTotal(6, true), 1752); });
test('regular customers cannot buy more than 8 tickets', function () { assertEq(calcTotal(9), null); });
test('zero tickets is invalid', function () { assertEq(calcTotal(0), null); });
test('fractional ticket quantities are invalid', function () { assertEq(calcTotal(1.5), null); });
test('students receive 15% off the ticket price', function () { assertEq(calcTotal(2, false, true), 619); });
test('members and students receive only the larger discount', function () { assertEq(calcTotal(2, true, true), 584); });
