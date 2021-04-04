export default ({ message, args }) => 
  message.channel.send(args.join(' ')).then(() => message.delete())