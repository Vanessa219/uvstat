import Uvstat from '../src/index'

const uvstat = new Uvstat()
uvstat.renderStat()
uvstat.renderCmtStat()
uvstat.getStat([{count: 0, url: "https://88250.b3log.org"}]).then(stats => {
  console.log('getStat: ', stats)
})
uvstat.addStat()
