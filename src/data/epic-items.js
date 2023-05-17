import aegisOfTheLegion from '../assets/items/epic/aegisofthelegion.png';
import aetherWisp from '../assets/items/epic/aetherwisp.png';
import bamisCinder from '../assets/items/epic/bamiscinder.png';
import bandleglassMirror from '../assets/items/epic/bandleglassmirror.png';
import blightingJewel from '../assets/items/epic/blightingjewel.png'
import brambleVest from '../assets/items/epic/bramblevest.png'
import catalystOfAeons from '../assets/items/epic/catalystofaeons.png';
import caulfieldsWarhammer from '../assets/items/epic/caulfieldswarhammer.png';
import chainVest from '../assets/items/epic/chainvest.png';
import crystallineBracer from '../assets/items/epic/crystallinebracer.png';
import executionersCalling from '../assets/items/epic/executionerscalling.png';
import fiendishCodex from '../assets/items/epic/fiendishcodex.png';
import forbiddenIdol from '../assets/items/epic/forbiddenidol.png';
import frostfang from '../assets/items/epic/frostfang.png';
import giantsBelt from '../assets/items/epic/giantsbelt.png';
import glacialBuckler from '../assets/items/epic/glacialbuckler.png';
import harrowingCrescent from '../assets/items/epic/harrowingcrescent.png';
import hearthboundAxe from '../assets/items/epic/hearthboundaxe.png';
import hexdrinker from '../assets/items/epic/hexdrinker.png';
import hextechAlternator from '../assets/items/epic/hextechalternator.png';
import ironspikeWhip from '../assets/items/epic/ironspikewhip.png'
import kindlegem from '../assets/items/epic/kindlegem.png';
import kircheisShard from '../assets/items/epic/kircheisshard.png';
import lastWhisper from '../assets/items/epic/lastwhisper.png';
import leechingLeer from '../assets/items/epic/leechingleer.png';
import lostChapter from '../assets/items/epic/lostchapter.png';
import negatronCloak from '../assets/items/epic/negatroncloak.png';
import noonquiver from '../assets/items/epic/noonquiver.png';
import oblivionOrb from '../assets/items/epic/oblivionorb.png';
import phage from '../assets/items/epic/phage.png';
import quicksilverSash from '../assets/items/epic/quicksilversash.png';
import rageknife from '../assets/items/epic/rageknife.png';
import recurveBow from '../assets/items/epic/recurvebow.png';
import runesteelSpaulders from '../assets/items/epic/runesteelspaulders.png';
import seekersArmguard from '../assets/items/epic/seekersarmguard.png';
import serratedDirk from '../assets/items/epic/serrateddirk.png';
import spectresCowl from '../assets/items/epic/spectrescowl.png';
import targonsBuckler from '../assets/items/epic/targonsbuckler.png';
import tiamat from '../assets/items/epic/tiamat.png';
import vampiricScepter from '../assets/items/epic/vampiricscepter.png';
import verdantBarrier from '../assets/items/epic/verdantbarrier.png';
import wardensMail from '../assets/items/epic/wardensmail.png';
import watchfulWardstone from '../assets/items/epic/watchfulwardstone.png';
import wingedMoonplate from '../assets/items/epic/wingedmoonplate.png';
import zeal from '../assets/items/epic/zeal.png';

 const epicItems = [
  {
    id: 1,
    name: `Aegis of the Legion`,
    img: aegisOfTheLegion,
    unique: [],
  },
  {
    id: 2,
    name: `Aether Wisp`,
    img: aetherWisp,
    unique: [],
  },
  {
    id: 3,
    name: `Bami's Cinder`,
    img: bamisCinder,
    unique: [ `immolate` ],
  },
  {
    id: 4,
    name: `Bandleglass Mirror`,
    img: bandleglassMirror,
    unique: [ `Mythic Component` ],
  },
  {
    id: 5,
    name: `Blighting Jewel`,
    img: blightingJewel,
    unique: [ `Void Pen` ],
  },
  {
    id: 6,
    name: `Bramble Vest`,
    img: brambleVest,
    unique: [],
  },
  {
    id: 7,
    name: `Catalyst of Aeons`,
    img: catalystOfAeons,
    unique: [ `Eternity` ],
  },
  {
    id: 8,
    name: `Caulfield's Warhammer`,
    img: caulfieldsWarhammer,
    unique: [],
  },
  {
    id: 9,
    name: `Chain Vest`,
    img: chainVest,
    unique: [],
  },
  {
    id: 10,
    name: `Zeal`,
    img: zeal,
    unique: [],
  },
  {
    id: 11,
    name: `Crystalline Bracer`,
    img: crystallineBracer,
    unique: [],
  },
  {
    id: 12,
    name: `Executioner's Calling`,
    img: executionersCalling,
    unique: [],
  },
  {
    id: 13,
    name: `Fiendish Codex`,
    img: fiendishCodex,
    unique: [],
  },
  {
    id: 14,
    name: `Forbidden Idol`,
    img: forbiddenIdol,
    unique: [],
  },
  {
    id: 15,
    name: `Frostfang`,
    img: frostfang,
    unique: [ `support` ],
  },
  {
    id: 16,
    name: `Giant's Belt`,
    img: giantsBelt,
    unique: [],
  },
  {
    id: 17,
    name: `Glacial Buckler`,
    img: glacialBuckler,
    unique: [],
  },
  {
    id: 18,
    name: `Harrowing Crescent`,
    img: harrowingCrescent,
    unique: [ `support` ],
  },
  {
    id: 19,
    name: `Hearthbound Axe`,
    img: hearthboundAxe,
    unique: [],
  },
  {
    id: 20,
    name: `Hexdrinker`,
    img: hexdrinker,
    unique: [ `lifeline` ],
  },
  {
    id: 21,
    name: `Hextech Alternator`,
    img: hextechAlternator,
    unique: [],
  },
  {
    id: 22,
    name: `Ironspike Whip`,
    img: ironspikeWhip,
    unique: [ `mythic component` ],
  },
  {
    id: 23,
    name: `Kindlegem`,
    img: kindlegem,
    unique: [],
  },
  {
    id: 24,
    name: `Kircheis Shard`,
    img: kircheisShard,
    unique: [],
  },
  {
    id: 25,
    name: `Last Whisper`,
    img: lastWhisper,
    unique: [ `last whisper` ],
  },
  {
    id: 26,
    name: `Leeching Leer`,
    img: leechingLeer,
    unique: [ `mythic component` ],
  },
  {
    id: 27,
    name: `Winged Moonplate`,
    img: wingedMoonplate,
    unique: [],
  },
  {
    id: 28,
    name: `Lost Chapter`,
    img: lostChapter,
    unique: [ `mythic component` ],
  },
  {
    id: 29,
    name: `Negatron Cloak`,
    img: negatronCloak,
    unique: [],
  },
  {
    id: 30,
    name: `Noonquiver`,
    img: noonquiver,
    unique: [ `mythic component` ],
  },
  {
    id: 31,
    name: `Oblivion Orb`,
    img: oblivionOrb,
    unique: [],
  },
  {
    id: 32,
    name: `Phage`,
    img: phage,
    unique: [],
  },
  {
    id: 33,
    name: `Quicksilver Sash`,
    img: quicksilverSash,
    unique: [ `quicksilver` ],
  },
  {
    id: 34,
    name: `Rageknife`,
    img: rageknife,
    unique: [ `crit modifier` ],
  },
  {
    id: 35,
    name: `Recurve Bow`,
    img: recurveBow,
    unique: [],
  },
  {
    id: 36,
    name: `Runesteel Spaulders`,
    img: runesteelSpaulders,
    unique: [ `support` ],
  },
  {
    id: 37,
    name: `Seeker's Armguard`,
    img: seekersArmguard,
    unique: [],
  },
  {
    id: 38,
    name: `Serrated Dirk`,
    img: serratedDirk,
    unique: [],
  },
  {
    id: 39,
    name: `Spectre's Cowl`,
    img: spectresCowl,
    unique: [],
  },
  {
    id: 40,
    name: `Targon's Buckler`,
    img: targonsBuckler,
    unique: [ `support` ],
  },
  {
    id: 41,
    name: `Tiamat`,
    img: tiamat,
    unique: [ `hydra` ],
  },
  {
    id: 42,
    name: `Vampiric Scepter`,
    img: vampiricScepter,
    unique: [],
  },
  {
    id: 43,
    name: `Verdant Barrier`,
    img: verdantBarrier,
    unique: [],
  },
  {
    id: 44,
    name: `Warden's Mail`,
    img: wardensMail,
    unique: [],
  },
  {
    id: 45,
    name: `Watchful Wardstone`,
    img: watchfulWardstone,
    unique: [ `sightstone` ],
  },
]

export default epicItems;