import * as utils from '../utils/index.js'

export default ({ message, args }) => message.channel.send(utils.general.sanitize(args.join(' '))).then(() => message.delete())