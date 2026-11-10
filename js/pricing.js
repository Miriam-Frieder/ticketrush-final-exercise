// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 4;
const MEMBER_DISCOUNT = 0.20;
const STUDENT_DISCOUNT = 0.15;

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (qty < 1 || qty > maxTickets(isMember)) return null;

  const discount = Math.max(
    isMember ? MEMBER_DISCOUNT : 0,
    isStudent ? STUDENT_DISCOUNT : 0
  );
  return qty * (TICKET_PRICE * (1 - discount) + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE,
    SERVICE_FEE,
    MAX_TICKETS,
    MEMBER_MAX_TICKETS,
    MEMBER_DISCOUNT,
    STUDENT_DISCOUNT,
    maxTickets,
    calcTotal
  };
}
