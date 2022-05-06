import { useState } from 'react'
import { Divider } from '../Components/Divider'

export const TeamDetails = (props) => {
  const [playersPerTeam, setPlayersPerTeam] = useState('')

  const handleValues = (value, type) => {
    if (type === 'ppt') setPlayersPerTeam(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.history.push('/New/MatchSetting')
  }
  const handleBack = (event) => {
    event.preventDefault()
    props.history.push('/New/Details')
  }
  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='y_scroll w-100 h-100 pb-3'>
        <div>
          <h1 className='mb-4 mt-5 detail_title'>Team Details</h1>
        </div>
        <form>
          <div className='card mb-4 m-auto p-4 common_card'>
            <div className='form-floating'>
              <input
                type='number'
                className='form-control logsin_input input_focus'
                placeholder='Match Venue'
                value={playersPerTeam}
                onChange={(e) => handleValues(e.target.value, 'ppt')}
              />
              <label className='logsin_input_label'>Players per Team</label>
            </div>
            <div className='form-check mt-5 text_left'>
              <input
                className='form-check-input input_radio shadow-none'
                type='radio'
                name='options'
              />
              <span>Enter player names Now</span>
            </div>
            <Divider
              text='OR'
              margin='1.5rem'
              textMargin='0 10px'
              size={0.7}
              bold
              color='var(--text)'
              width='45%'
              height={1}
            />
            <div className='form-check text_left'>
              <input
                className='form-check-input input_radio shadow-none'
                type='radio'
                name='options'
              />
              <span>Enter player names during the match</span>
            </div>
          </div>
          <div className='w-50 m-auto justify-content-between d-flex'>
            <button
              type='submit'
              className='btn btn-outline-danger shadow-none'
              onClick={(e) => handleBack(e)}
            >
              BACK
            </button>
            <button
              type='submit'
              className='btn btn-outline-primary shadow-none'
              onClick={(e) => handleSubmit(e)}
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
