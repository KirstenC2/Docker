const amqp = require('amqplib');

const queue = 'message_queue';

const totalMessages = 1000; // Total messages to send
const batchSize = 100;      // Messages per batch
const interval = 1000;      // Delay between batches in milliseconds


function generateMessage(index) {
  return {
    id: index,
    timestamp: new Date().toISOString(),
    type: 'test',
    payload: {
      text: `Message #${index}`,
      value: Math.random()
    }
  };
}

async function floodMessages() {
  try {
    const connection = await amqp.connect('amqp://user:password@localhost:5672');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    let sent = 0;

    const sendBatch = async () => {
      const currentBatchSize = Math.min(batchSize, totalMessages - sent);
      if (currentBatchSize <= 0) {
        console.log('All messages sent.');
        await channel.close();
        await connection.close();
        return;
      }

      for (let i = 0; i < currentBatchSize; i++) {
        const index = sent + i;
        const msg = JSON.stringify(generateMessage(index));
        channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });
      }

      console.log(`Sent batch: ${sent} ~ ${sent + currentBatchSize - 1}`);
      sent += currentBatchSize;

      setTimeout(sendBatch, interval);
    };

    sendBatch();
  } catch (err) {
    console.error('Failed to flood messages:', err);
  }
}

floodMessages();
