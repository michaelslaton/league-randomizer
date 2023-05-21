import './championPortrait.css';

export default function ChampionPortrait ({ champion }) {


  return (
    <img className='icon champion' title={champion.name} alt={champion.name} src={champion.img}/>
  )
}