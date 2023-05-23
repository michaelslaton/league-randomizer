import './championPortrait.css';

export default function ChampionPortrait ({ champion, activated }) {


  return (
    <div>
      { activated ? <img className='champion icon-border ' title={champion.name} alt={champion.name} src={champion.img}/> : <div className='icon-border-inactive inactive-champion'/>}
    </div>
  )
}