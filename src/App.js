import { useState } from 'react';
import mythicItems from './data/mythic-items';
import legendaryItems from './data/legendary-items';
import epicItems from './data/epic-items';
import boots from './data/boots';
import champions from './data/champions';
import randomizer from './utils/randomizer';
import './app.css';

function App() {
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
      let acceptable = true;

      itemsUniques.forEach((trait)=>{
        if (uniques.includes(trait)) acceptable = false;
      })

      if (acceptable) {
        uniques = [...uniques, ...legendaryItems[item].unique]
        results.push(item);
      }
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
      Mythic Items: {`${mythicItems.length}`}<br/>
      Legendary Items: {`${legendaryItems.length}`}<br/>
      Epic Items: {`${epicItems.length}`}<br/>
      Boots: {`${boots.length}`}<br/>
      Champions: {`${champions.length}`}<br/>
      </div>

    <div>
      <img title={champions[items.champion].name} src={champions[items.champion].img}/>
      <img title={mythicItems[items.item1].name} src={mythicItems[items.item1].img}/>
      <img title={boots[items.boots].name} src={boots[items.boots].img}/>
      <img title={legendaryItems[items.item2].name} src={legendaryItems[items.item2].img}/>
      <img title={legendaryItems[items.item3].name} src={legendaryItems[items.item3].img}/>
      <img title={legendaryItems[items.item4].name} src={legendaryItems[items.item4].img}/>
      <img title={legendaryItems[items.item5].name} src={legendaryItems[items.item5].img}/><br/>
      <button onClick={()=> buttonHandler()}>Randomize !!!</button>
    </div>

    </div>
  );
}

export default App;