import { Kafka } from 'kafkajs';
import { NewOrder } from './NewOrder';

class Producers {
  init(): void {
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092']
    });
    const producer = kafka.producer();

    new NewOrder(producer).exec();
  }
}

new Producers().init();
