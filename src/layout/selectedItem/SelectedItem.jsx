

export default function SelectedItem ({ item, activated }) {


  return (
    <div className='icon-wrapper'>
      { activated ? <img className='icon' title={item.name} alt={item.name} src={item.img}/> : <div className='icon inactiveSpace'/>}
    </div>
  )
}