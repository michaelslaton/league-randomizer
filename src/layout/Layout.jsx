import { useState } from 'react';
import mythicItems from '../data/mythic-items';
import legendaryItems from '../data/legendary-items';
import epicItems from '../data/epic-items';
import boots from '../data/boots';
import champions from '../data/champions';
import randomizer from '../utils/randomizer';
import SelectedItem from './selectedItem/SelectedItem';
import ChampionPortrait from './championPortrait/ChampionPortrait';
import RandomButton from './randomButton/RandomButton';
import './layout.css';

export default function Layout(){
  const [ items, setItems ] = useState({
    activated: false,
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
      activated: true,
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
      <div className='game-window'>
        <div>
          <ChampionPortrait champion={champions[items.champion]} activated={items.activated}/>
          <SelectedItem item={mythicItems[items.item1]} activated={items.activated}/>
          <SelectedItem item={boots[items.boots]} activated={items.activated}/>
          <SelectedItem item={legendaryItems[items.item2]} activated={items.activated}/>
          <SelectedItem item={legendaryItems[items.item3]} activated={items.activated}/>
          <SelectedItem item={legendaryItems[items.item4]} activated={items.activated}/>
          <SelectedItem item={legendaryItems[items.item5]} activated={items.activated}/>

          <RandomButton buttonHandler={buttonHandler}/>
        </div>
      </div>
    </div>
  )
}