export default ({ message, args }) => {
  args = args.join(' ').toLowerCase()

  let matches = args.match(/not/gm)?.length ?? 0

  if (matches % 2)
    message.channel.send('yes')
  else
    message.channel.send('no')
}