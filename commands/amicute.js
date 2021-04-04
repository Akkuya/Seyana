import * as utils from '../utils/index.js'

export default async ({ message }) => {
  await message.channel.send(':robot: beep boop').then(async afterMessage => {
    await utils.time.sleep(Math.floor(Math.random() * 1000))
    afterMessage.edit(`Your cuteness score is **${Math.floor(Math.random() * 101)}** out of **100**!`)
  })
}