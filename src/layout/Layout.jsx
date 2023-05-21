import { useState } from 'react';
import mythicItems from '../data/mythic-items';
import legendaryItems from '../data/legendary-items';
import epicItems from '../data/epic-items';
import boots from '../data/boots';
import champions from '../data/champions';
import randomizer from '../utils/randomizer';
import SelectedItem from './selectedItem/SelectedItem';
import ChampionPortrait from './championPortrait/ChampionPortrait';
import './layout.css';

export default function Layout(){
  const [ items, setItems ] = useState({
    champion: 0,
    item1: 0,
    boots: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0
   });

   const buttonHandler = () => {
    let uniques = [];
    let results = [];
    
    results.push(randomizer(0,mythicItems.length));
    uniques = [...uniques, ...mythicItems[results[0]].unique]
    results.push(randomizer(1,boots.length));

    while(results.length < 6){
      let item = randomizer(0,legendaryItems.length);
      let itemsUniques = legendaryItems[item].unique;
      let uniquesTemp = uniques;
      let acceptable = true;

      itemsUniques.forEach((trait)=>{
        if (uniquesTemp.includes(trait)) acceptable = false;
      });

      if (acceptable) {
        uniques = [...uniques, ...legendaryItems[item].unique]
        results.push(item);
      };
    }

    results.push(randomizer(0,champions.length));
    console.log(`Uniques: `, uniques);

    setItems({
      champion: results[6],
      item1: results[0],
      boots: results[1],
      item2: results[2],
      item3: results[3],
      item4: results[4],
      item5: results[5]
     })
  }

  return (
    <div>

    <div>
      <ChampionPortrait champion={champions[items.champion]}/>
      <SelectedItem item={mythicItems[items.item1]}/>
      <SelectedItem item={boots[items.boots]}/>
      <SelectedItem item={legendaryItems[items.item2]}/>
      <SelectedItem item={legendaryItems[items.item3]}/>
      <SelectedItem item={legendaryItems[items.item4]}/>
      <SelectedItem item={legendaryItems[items.item5]}/>

      <button className='random_button' onClick={()=> buttonHandler()}>Randomize !!!</button>
    </div>
      These are words!
    </div>
  )
}