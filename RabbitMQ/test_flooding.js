const amqp = require('amqplib');

async function sendMessage() {
  const queue = 'message_queue';
  const msg = 'Hello, RabbitMQ!';

  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://user:password@localhost:5672');
    const channel = await connection.createChannel();

    // Ensure the queue exists
    await channel.assertQueue(queue, { durable: true });

    // Send the message
    channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });
    console.log(`Sent message: "${msg}" to queue: "${queue}"`);

    // Close connection after short delay
    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (err) {
    console.error('Failed to send message:', err);
  }
}

sendMessage();
