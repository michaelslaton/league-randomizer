import aegisOfTheLegion from '../assets/items/aegisofthelegion.png';
import aetherWisp from '../assets/items/aetherwisp.png';
import bamisCinder from '../assets/items/bamiscinder.png';
import bandleglassMirror from '../assets/items/bandleglassmirror.png';
import blightingJewel from '../assets/items/blightingjewel.png'
import brambleVest from '../assets/items/bramblevest.png'
import catalystOfAeons from '../assets/items/catalystofaeons.png';
import caulfieldsWarhammer from '../assets/items/caulfieldswarhammer.png';
import chainVest from '../assets/items/chainvest.png';
import crystallineBracer from '../assets/items/crystallinebracer.png';
import executionersCalling from '../assets/items/executionerscalling.png';
import fiendishCodex from '../assets/items/fiendishcodex.png';
import forbiddenIdol from '../assets/items/forbiddenidol.png';
import frostfang from '../assets/items/frostfang.png';
import giantsBelt from '../assets/items/giantsbelt.png';
import glacialBuckler from '../assets/items/glacialbuckler.png';
import harrowingCrescent from '../assets/items/harrowingcrescent.png';
import hearthboundAxe from '../assets/items/hearthboundaxe.png';
import hexdrinker from '../assets/items/hexdrinker.png';
import hextechAlternator from '../assets/items/hextechalternator.png';
import ironspikeWhip from '../assets/items/ironspikewhip.png'
import kindlegem from '../assets/items/kindlegem.png';
import kircheisShard from '../assets/items/kircheisshard.png';
import lastWhisper from '../assets/items/lastwhisper.png';
import leechingLeer from '../assets/items/leechingleer.png';
import lostChapter from '../assets/items/lostchapter.png';
import negatronCloak from '../assets/items/negatroncloak.png';
import noonquiver from '../assets/items/noonquiver.png';
import oblivionOrb from '../assets/items/oblivionorb.png';
import phage from '../assets/items/phage.png';
import quicksilverSash from '../assets/items/quicksilversash.png';
import rageknife from '../assets/items/rageknife.png';
import recurveBow from '../assets/items/recurvebow.png';
import runesteelSpaulders from '../assets/items/runesteelspaulders.png';
import seekersArmguard from '../assets/items/seekersarmguard.png';
import serratedDirk from '../assets/items/serrateddirk.png';
import spectresCowl from '../assets/items/spectrescowl.png';
import targonsBuckler from '../assets/items/targonsbuckler.png';
import tiamat from '../assets/items/tiamat.png';
import vampiricScepter from '../assets/items/vampiricscepter.png';
import verdantBarrier from '../assets/items/verdantbarrier.png';
import wardensMail from '../assets/items/wardensmail.png';
import watchfulWardstone from '../assets/items/watchfulwardstone.png';
import wingedMoonplate from '../assets/items/wingedmoonplate.png';
import zeal from '../assets/items/zeal.png';
import chaliceofblessing from '../assets/items/chaliceofblessing.png';
import lifewellpendant from '../assets/items/lifewellpendant.png';

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
    unique: [ `glide` ],
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
    unique: [ `mythic Component` ],
  },
  {
    id: 5,
    name: `Blighting Jewel`,
    img: blightingJewel,
    unique: [ `void pen` ],
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
    unique: [ `eternity`, `mythic component` ],
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
    unique: [ `rend` ],
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
    unique: [ `support`, `warding`, `tribute`, `quest` ],
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
    unique: [ `support`, `jungle`, `warding`, `tribute`, `quest` ],
  },
  {
    id: 19,
    name: `Hearthbound Axe`,
    img: hearthboundAxe,
    unique: [ `nimble` ],
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
    unique: [ `revved` ],
  },
  {
    id: 22,
    name: `Ironspike Whip`,
    img: ironspikeWhip,
    unique: [ `mythic component`, `crescent` ],
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
    unique: [ `energized`, `jolt` ],
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
    unique: [ `flight` ],
  },
  {
    id: 28,
    name: `Lost Chapter`,
    img: lostChapter,
    unique: [ `mythic component`, `enlighten` ],
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
    unique: [],
  },
  {
    id: 31,
    name: `Oblivion Orb`,
    img: oblivionOrb,
    unique: [ `cursed` ],
  },
  {
    id: 32,
    name: `Phage`,
    img: phage,
    unique: [ `sturdy` ],
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
    unique: [ `crit modifier`, `wrath`, `seething strike`, `mythic component` ],
  },
  {
    id: 35,
    name: `Recurve Bow`,
    img: recurveBow,
    unique: [ `steeltipped` ],
  },
  {
    id: 36,
    name: `Runesteel Spaulders`,
    img: runesteelSpaulders,
    unique: [ `support`, `jungle`, `warding`, `spoils of war`, `quest` ],
  },
  {
    id: 37,
    name: `Seeker's Armguard`,
    img: seekersArmguard,
    unique: [ `witch's path` ],
  },
  {
    id: 38,
    name: `Serrated Dirk`,
    img: serratedDirk,
    unique: [ `gouge` ],
  },
  {
    id: 39,
    name: `Spectre's Cowl`,
    img: spectresCowl,
    unique: [ `incorporeal` ],
  },
  {
    id: 40,
    name: `Targon's Buckler`,
    img: targonsBuckler,
    unique: [ `support`, `jungle`, `warding`, `spoils of war`, `quest` ],
  },
  {
    id: 41,
    name: `Tiamat`,
    img: tiamat,
    unique: [ `hydra`, `cleave` ],
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
    unique: [ `adaptive` ],
  },
  {
    id: 44,
    name: `Warden's Mail`,
    img: wardensMail,
    unique: [ `rock solid` ],
  },
  {
    id: 45,
    name: `Watchful Wardstone`,
    img: watchfulWardstone,
    unique: [ `sightstone`, `arcane cache`, `blessing of ixtal`, `sightstone` ],
  },
  {
    id: 46,
    name: `Chalice of Blessing`,
    img: chaliceofblessing,
    unique: [ `Harmony` ],
  },
  {
    id: 47,
    name: `Lifewell Pendant`,
    img: lifewellpendant,
    unique: [ `Harmony` ],
  },
]

export default epicItems;