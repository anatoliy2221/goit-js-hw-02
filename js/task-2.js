function formatMessage(message, maxLength) {
  const messageInput = message.length;
  const messageLength = message.slice(0, maxLength);
  if (messageInput <= maxLength) {
    return message;
  } else {
    return messageLength + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
