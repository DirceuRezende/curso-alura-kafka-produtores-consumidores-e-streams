import { Consumer } from 'kafkajs';

export class EmailService {
  constructor(private consumer: Consumer) {}

  async exec(): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: 'ECOMMERCE_SEND_EMAIL',
      fromBeginning: true
    });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value?.toString(),
          topic
        });
      }
    });
  }
}
