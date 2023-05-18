import crownOfTheShatteredQueen from '../assets/items/crownoftheshatteredqueen.png';
import divineSunderer from '../assets/items/divinesunderer.png';
import duskbladeOfDraktharr from '../assets/items/duskbladeofdraktharr.png';
import eclipse from '../assets/items/eclipse.png';
import evenshroud from '../assets/items/evenshroud.png';
import everfrost from '../assets/items/everfrost.png';
import galeforce from '../assets/items/galeforce.png';
import goredrinker from '../assets/items/goredrinker.png';
import heartsteel from '../assets/items/heartsteel.png';
import hextechRocketbelt from '../assets/items/hextechrocketbelt.png';
import icebornGauntlet from '../assets/items/iceborngauntlet.png';
import jakshoTheProtean from '../assets/items/jakshotheprotean.png';
import liandrysAnguish from '../assets/items/liandryanguish.png';
import locketOfTheIronSolari from '../assets/items/locketoftheironsolari.png';
import ludensTempest from '../assets/items/ludentempest.png';
import moonstoneRenewer from '../assets/items/moonstonerenewer.png';
import nightHarvester from '../assets/items/nightharvester.png';
import radiantVirtue from '../assets/items/radiantvirtue.png';
import riftmaker from '../assets/items/riftmaker.png';
import rodOfAges from '../assets/items/rodofAges.png';
import shurelyasBattlesong from '../assets/items/shurelyabattlesong.png';
import stridebreaker from '../assets/items/stridebreaker.png';
import trinityForce from '../assets/items/trinityforce.png';
import guinsoosrageblade from '../assets/items/guinsoosrageblade.png';
import infinityedge from '../assets/items/infinityedge.png';
import navoriquickblades from '../assets/items/navoriquickblades.png';
import youmuusghostblade from '../assets/items/youmuusghostblade.png';
import echoesofhelia from '../assets/items/echoesofhelia.png';

 const mythicItems = [
  {
    id: 1,
    name: `Crown of the Shattered Queen`,
    img: crownOfTheShatteredQueen,
    unique: [ `safeguard`, `poise`, `mythic` ],
  },
  {
    id: 2,
    name: `Divine Sunderer`,
    img: divineSunderer,
    unique: [ `mythic`, `spellblade` ],
  },
  {
    id: 3,
    name: `Duskblade of Draktharr`,
    img: duskbladeOfDraktharr,
    unique: [ `mythic`, `nightstalker` ],
  },
  {
    id: 4,
    name: `Eclipse`,
    img: eclipse,
    unique: [ `mythic`, `ever rising moon` ],
  },
  {
    id: 5,
    name: `Evenshroud`,
    img: evenshroud,
    unique: [ `mythic`, `coruscation` ],
  },
  {
    id: 6,
    name: `Everfrost`,
    img: everfrost,
    unique: [ `mythic`, `glaciate` ],
  },
  {
    id: 7,
    name: `Galeforce`,
    img: galeforce,
    unique: [ `mythic`, `cloudburst` ],
  },
  {
    id: 8,
    name: `Goredrinker`,
    img: goredrinker,
    unique: [ `mythic`, `thirsting slash` ],
  },
  {
    id: 9,
    name: `Heartsteel`,
    img: heartsteel,
    unique: [ `mythic`, `colossal consumption` ],
  },
  {
    id: 10,
    name: `Hextech Rocketbelt`,
    img: hextechRocketbelt,
    unique: [ `mythic`, `supersonic` ],
  },
  {
    id: 11,
    name: `Iceborn Gauntlet`,
    img: icebornGauntlet,
    unique: [ `mythic`, `spellblade` ],
  },
  {
    id: 14,
    name: `Jak'Sho, The Protean`,
    img: jakshoTheProtean,
    unique: [ `mythic`, `voidborn resilience` ],
  },
  {
    id: 16,
    name: `Liandry's Anguish`,
    img: liandrysAnguish,
    unique: [ `mythic`, `torment`, `agony` ],
  },
  {
    id: 17,
    name: `Locket of the Iron Solari`,
    img: locketOfTheIronSolari,
    unique: [ `mythic`, `devotion`, `consecrate` ],
  },
  {
    id: 18,
    name: `Luden's Tempest`,
    img: ludensTempest,
    unique: [ `mythic`, `echo` ],
  },
  {
    id: 19,
    name: `Moonstone Renewer`,
    img: moonstoneRenewer,
    unique: [ `mythic`, `starlit grace` ],
  },
  {
    id: 20,
    name: `Night Harvester`,
    img: nightHarvester,
    unique: [ `mythic`, `soulrend` ],
  },
  {
    id: 22,
    name: `Radiant Virtue`,
    img: radiantVirtue,
    unique: [ `mythic`, `guiding light` ],
  },
  {
    id: 23,
    name: `Riftmaker`,
    img: riftmaker,
    unique: [ `mythic`, `void corruption` ],
  },
  {
    id: 24,
    name: `Rod of Ages`,
    img: rodOfAges,
    unique: [ `mythic`, `eternity` ],
  },
  {
    id: 25,
    name: `Shurelya's Battlesong`,
    img: shurelyasBattlesong,
    unique: [ `mythic`, `inspire`, `motivate` ],
  },
  {
    id: 26,
    name: `Stridebreaker`,
    img: stridebreaker,
    unique: [ `mythic`, `halting slash`, `heroic gait` ],
  },
  {
    id: 27,
    name: `Trinity Force`,
    img: trinityForce,
    unique: [ `mythic`, `threefold strike`, `spellblade` ],
  },
  {
    id: 48,
    name: `Guinsoo's Rageblade`,
    img: guinsoosrageblade,
    unique: [ `wrath`, `seething strike`, `mythic` ],
  },
  {
    id: 49,
    name: `Infinity Edge`,
    img: infinityedge,
    unique: [ `crit modifier`, `mythic` ],
  },
  {
    id: 50,
    name: `Navori Quickblades`,
    img: navoriquickblades,
    unique: [ `transcendence`, `impermanance`, `mythic` ],
  },
  {
    id: 51,
    name: `Youmuu's Ghostblade`,
    img: youmuusghostblade,
    unique: [ `wraith step`, `haunt`, `mythic` ],
  },
  {
    id: 52,
    name: `Echoes of Helia`,
    img: echoesofhelia,
    unique: [ `soul siphon`, `dissonance`, `mythic` ],
  },
]

export default mythicItems;