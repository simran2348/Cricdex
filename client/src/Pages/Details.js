import { useState } from 'react'

export const Details = (props) => {
  const [venue, setVenue] = useState('')
  const [hostTeam, setHostTeam] = useState('')
  const [visitiorTeam, setVisitorTeam] = useState('')

  const handleValues = (value, type) => {
    if (type === 'venue') setVenue(value)
    if (type === 'team1') setHostTeam(value)
    if (type === 'team2') setVisitorTeam(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.history.push('/New/TeamDetails')
  }
  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='y_scroll w-100 h-100 pb-3'>
        <h1 className='mb-4 mt-5 detail_title'>Please Enter Details</h1>
        <form>
          <div className='card mb-4 m-auto p-4 common_card'>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control logsin_input input_focus'
                placeholder='Match Venue'
                value={venue}
                onChange={(e) => handleValues(e.target.value, 'venue')}
              />
              <label className='logsin_input_label'>Match Venue</label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='text'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Team 1 Name, Host Team'
                value={hostTeam}
                onChange={(e) => handleValues(e.target.value, 'team1')}
              />
              <label className='logsin_input_label'>
                Team 1 Name, Host Team
              </label>
            </div>
            <div className='form-floating mt-4'>
              <input
                type='text'
                className='form-control mt-1 logsin_input input_focus'
                placeholder='Team 2 Name, Visitor Team'
                value={visitiorTeam}
                onChange={(e) => handleValues(e.target.value, 'team2')}
              />
              <label className='logsin_input_label'>
                Team 2 Name, Visitor Team
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-outline-primary'
            onClick={(e) => handleSubmit(e)}
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  )
}
