

export default function SelectedItem ({ item }) {


  return (
    <img className='icon' title={item.name} alt={item.name} src={item.img}/>
  )
}