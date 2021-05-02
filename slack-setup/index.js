const { WebClient } = require('@slack/web-api');
const TOKEN = 'bot-token'
const usersToInvite = 'U020NQM8BJP'
const channels = [
  { name: '_twitter', topic: '何でも呟ける気軽なチャンネルです。もくもく会っぽい雰囲気を演出するために誕生しました' },
  { name: '_stack-overflow', topic: 'チームを横断して技術的に困ったことや、技術的な発見を共有する場です' },
  { name: '_atcoder', topic: '毎週土曜日の21時に競プロを楽しむための場です' },
  { name: '_questions', topic: 'PrAha Challengeを進める上で生じた不明点をメンターに質問する場です' },
  { name: '_game', topic: '有志でゲームを遊ぶ時に使う場です' },
  { name: 'pair-1a', topic: 'pair-1a用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-1b', topic: 'pair-1b用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-1c', topic: 'pair-1c用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-1d', topic: 'pair-1d用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-2a', topic: 'pair-2a用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-2b', topic: 'pair-2b用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-2c', topic: 'pair-2c用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-3a', topic: 'pair-3a用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-3b', topic: 'pair-3b用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-3c', topic: 'pair-3c用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-4a', topic: 'pair-4a用のチャンネルです。他の方も閲覧可能です' },
  { name: 'pair-4b', topic: 'pair-4b用のチャンネルです。他の方も閲覧可能です' },
  { name: 'team-1', topic: 'team-1用のチャンネルです。他の方も閲覧可能です' },
  { name: 'team-2', topic: 'team-2用のチャンネルです。他の方も閲覧可能です' },
  { name: 'team-3', topic: 'team-3用のチャンネルです。他の方も閲覧可能です' },
  { name: 'team-4', topic: 'team-4用のチャンネルです。他の方も閲覧可能です' }
]

const web = new WebClient(TOKEN)

for (const channel of channels) {
  web.conversations.create({ name: channel.name, }).then((result) => {
    const id = result.channel.id
    web.conversations.invite({
      channel: id,
      users: usersToInvite
    })
    web.conversations.setTopic({
      channel: id,
      topic: channel.topic
    })
  }).catch((e) => console.error(e))
}
