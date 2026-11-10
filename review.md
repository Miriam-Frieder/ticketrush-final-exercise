# Code review: refund calculation

`js/refund.js` includes `SERVICE_FEE` in the amount multiplied by `REFUND_RATE`. This refunds part of the service fee, despite the file's stated rule that the service fee is not refundable. Calculate the refund from `TICKET_PRICE` only, then apply the 90% refund rate.

Noa's refund tests fail: one ticket returns 325.8 instead of 315, and two tickets return 651.6 instead of 630. The existing price-format tests also fail on this branch because its base contains the previously identified price-format regression; that is unrelated to Noa's refund change.
