import Uastat from '../src/index'

const uastat = new Uastat()
uastat.renderStat()
uastat.getStat(['http://localhost:9219']).then(stats => {
  console.log('getStat: ', stats)
})
uastat.setStat()
