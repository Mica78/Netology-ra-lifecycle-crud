import TCard from './Card.type'

type Props = {
  data: TCard,
  onRemove: (id: number) => void
}

const Card = (props: Props) => {
  const { id, content } = props.data
  return (
    <div className='card'>
      <button className='remove_button' onClick={() => { props.onRemove(id) }} type='button'>
        <i className="fa fa-remove"></i>
      </button>
      <div>{content}</div>
    </div>
  )
}

export default Card
