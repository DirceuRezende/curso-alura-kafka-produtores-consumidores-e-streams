import { Producer } from 'kafkajs';

export class NewOrder {
  constructor(private producer: Producer) {}

  async exec(): Promise<void> {
    await this.producer.connect();
    const newOrderRecord = await this.producer.send({
      topic: 'ECOMMERCE_NEW_ORDER',
      messages: [{ value: 'ORDER' }]
    });

    console.log('New Order Record', newOrderRecord[0].topicName);

    const sendEmailRecord = await this.producer.send({
      topic: 'ECOMMERCE_SEND_EMAIL',
      messages: [{ value: 'EMAIL' }]
    });

    console.log('Send Email Record', sendEmailRecord[0].topicName);
  }
}
