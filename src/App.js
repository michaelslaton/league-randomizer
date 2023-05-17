import mythicItems from './data/mythic-items';
import legendaryItems from './data/legendary-items';
import epicItems from './data/epic-items';
import boots from './data/boots';
import champions from './data/champions';
import './app.css';

function App() {
  return (
    <div>
      <div>
        {mythicItems.map((item)=> (
          <img key={item.id} className='icon' alt={item.name} src={item.img}/>
        ))} {`${mythicItems.length}`}
      </div>
      
      <div>
        {legendaryItems.map((item)=> (
          <img key={item.id} className='icon' alt={item.name} src={item.img}/>
        ))} {`${legendaryItems.length}`}
      </div>
      
      <div>
        {epicItems.map((item)=> (
          <img key={item.id} className='icon' alt={item.name} src={item.img}/>
        ))} {`${epicItems.length}`}
      </div>

      <div>
        {boots.map((boot)=> (
          <img key={boot.id} className='icon' alt={boot.name} src={boot.img}/>
        ))} {`${boots.length}`}
      </div>

      <div>
        {champions.map((champ)=> (
          <img key={champ.id} className='icon' alt={champ.name} src={champ.img}/>
        ))} {`${champions.length}`}
      </div>
    </div>
  );
}

export default App;