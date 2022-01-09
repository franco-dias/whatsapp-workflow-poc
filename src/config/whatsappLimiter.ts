const whatsappLimiter = {
  max: Number(process.env.MESSAGE_LIMIT_RATE),
  duration: Number(process.env.MESSAGE_LIMIT_TIME),
};

export default whatsappLimiter;
