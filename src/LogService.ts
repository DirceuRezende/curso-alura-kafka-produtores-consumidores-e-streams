import { Consumer } from 'kafkajs';

export class LogService {
  constructor(private consumer: Consumer) {}

  async exec(): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: /ECOMMERCE*/, fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          log: true,
          value: message.value?.toString(),
          topic
        });
      }
    });
  }
}
