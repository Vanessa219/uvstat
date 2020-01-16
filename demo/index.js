import Uvstat from '../src/index'

const uvstat = new Uvstat()
uvstat.renderStat()
uvstat.renderCmtStat()
uvstat.getStat(['http://localhost:9219']).then(stats => {
  console.log('getStat: ', stats)
})
uvstat.addStat()
