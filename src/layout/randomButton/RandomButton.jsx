import './randomButton.css';

export default function RandomButton({ buttonHandler }){

  return (
    <div>
      <button className='random_button' onClick={()=> buttonHandler()}>Randomize !!!</button>
    </div>
  )
}