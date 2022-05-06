import BackButton from 'bootstrap-icons/icons/arrow-left-circle.svg'

export const PlayerDetails = (props) => {
  return (
    <div className='app_body'>
      <img
        className='icon_color'
        src={BackButton}
        alt='back-button'
        onClick={() => props.history.push('/New/Toss')}
      />
      <h1>Player Details</h1>
      <button
        className='btn btn-outline-primary'
        onClick={() => props.history.push('/New/Details')}
      >
        NEXT
      </button>
    </div>
  )
}
