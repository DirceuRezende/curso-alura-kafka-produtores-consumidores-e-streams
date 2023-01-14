import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
const logConsumer = kafka.consumer({ groupId: 'log' });
const emailConsumer = kafka.consumer({ groupId: 'email' });
const fraudDetectorConsumer = kafka.consumer({ groupId: 'fraud-detector' });
