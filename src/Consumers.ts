import { Kafka } from 'kafkajs';
import { EmailService } from './EmailService';
import { FraudDetectorService } from './FraudDetectorService';
import { LogService } from './LogService';

class Consumers {
  init(): void {
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092']
    });
    const logConsumer = kafka.consumer({ groupId: 'log' });
    const emailConsumer = kafka.consumer({ groupId: 'email' });
    const fraudDetectorConsumer = kafka.consumer({ groupId: 'fraud-detector' });

    new EmailService(emailConsumer).exec();
    new FraudDetectorService(fraudDetectorConsumer).exec();
    new LogService(logConsumer).exec();
  }
}

new Consumers().init();
