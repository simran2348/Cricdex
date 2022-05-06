import { BackArrow } from '../Components/Icons'

export const Feedback = (props) => {
  return (
    <div className='app_body'>
      <div onClick={() => props.history.push('/Setting')}>
        <BackArrow size='22' color='var(--svg-regular-black)' />
      </div>
      <h1>Feedback</h1>
    </div>
  )
}
