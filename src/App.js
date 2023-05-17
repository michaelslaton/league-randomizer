import mythicItems from './data/mythic-items';
import legendaryItems from './data/legendary-items';
import epicItems from './data/epic-items';
import boots from './data/boots';
import champions from './data/champions';
import './app.css';

function App() {
  return (
    <div>
      <div className="App">
        {mythicItems.map((item)=> (
          <img className='icon' alt={item.name} src={item.img}/>
        ))} {`${mythicItems.length}`}
      </div>
      
      <div className="App">
        {legendaryItems.map((item)=> (
          <img className='icon' alt={item.name} src={item.img}/>
        ))} {`${legendaryItems.length}`}
      </div>
      
      <div className="App">
        {epicItems.map((item)=> (
          <img className='icon' alt={item.name} src={item.img}/>
        ))} {`${epicItems.length}`}
      </div>

      <div>
        {champions.map((champ)=> (
          <img className='icon' alt={champ.name} src={champ.img}/>
        ))} {`${champions.length}`}
      </div>

      <div>
        {boots.map((boot)=> (
          <img className='icon' alt={boot.name} src={boot.img}/>
        ))} {`${boots.length}`}
      </div>
    </div>
  );
}

export default App;