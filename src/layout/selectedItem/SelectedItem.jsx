import './selectedItem.css';

export default function SelectedItem ({ item, activated }) {


  return (
    <>
      { activated ? <img className='icon-border item' title={item.name} alt={item.name} src={item.img}/> : <div className='icon-border-inactive inactive-item'/>}
    </>
  )
}