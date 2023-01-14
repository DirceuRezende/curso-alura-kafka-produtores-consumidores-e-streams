import { Consumer } from 'kafkajs';

export class FraudDetectorService {
  constructor(private consumer: Consumer) {}

  async exec(): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: 'ECOMMERCE_NEW_ORDER',
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
