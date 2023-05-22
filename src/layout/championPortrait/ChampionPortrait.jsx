import './championPortrait.css';

export default function ChampionPortrait ({ champion, activated }) {


  return (
    <div>
      { activated ? <img className='icon champion' title={champion.name} alt={champion.name} src={champion.img}/> : <div className='icon inactiveSpace champion'/>}
    </div>
  )
}