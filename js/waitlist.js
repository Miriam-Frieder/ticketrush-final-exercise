function joinWaitlist(list, email) {
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');
  if (atIndex === -1 || normalizedEmail.indexOf('.', atIndex + 1) === -1) {
    return list.slice();
  }

  const alreadyJoined = list.some(function (entry) {
    return entry.trim().toLowerCase() === normalizedEmail;
  });
  return alreadyJoined ? list.slice() : list.concat(normalizedEmail);
}

module.exports = { joinWaitlist };
