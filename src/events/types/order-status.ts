export enum OrderStatus 
{
  //When the order has been created, but the ticket it is trying to order has not been reserved
  Created = 'created',
  //The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  //The order has reserved the ticket and the user has completed the payment
  Complete = 'complete',
  //The order has been cancelled by the user or because the ticket it was trying to order was already reserved
  Cancelled = 'cancelled'
}