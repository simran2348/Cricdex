import BackButton from 'bootstrap-icons/icons/arrow-left-circle.svg'

export const RateApp = (props) => {
  return (
    <div className='app_body'>
      <img
        className='icon_color'
        src={BackButton}
        alt='back-button'
        onClick={() => props.history.push('/Setting')}
      />
      <h1>Rate App</h1>
    </div>
  )
}
