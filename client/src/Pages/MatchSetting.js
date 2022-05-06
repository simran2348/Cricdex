import { useState, useEffect } from 'react'
import { Collapse } from 'bootstrap'
export const MatchSetting = (props) => {
  const [totalOvers, setTotalOvers] = useState('')
  const [noBall, setNoBall] = useState(false)
  const [wideBall, setWideBall] = useState(false)
  const [runsOnNo, setRunsOnNo] = useState('')
  const [runsOnWide, setRunsOnWide] = useState('')

  const handleValues = (value, type) => {
    if (type === 'overs') setTotalOvers(value)
    if (type === 'no') setRunsOnNo(value)
    if (type === 'wide') setRunsOnWide(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.history.push('/New/Toss')
  }

  const handleBack = (event) => {
    event.preventDefault()
    props.history.push('/New/TeamDetails')
  }

  const handleNoBall = (event) => {
    event.preventDefault()
    setNoBall(!noBall)
  }

  const handleWideBall = (event) => {
    event.preventDefault()
    setWideBall(!wideBall)
  }
  useEffect(() => {
    const noBallCollapse = document.getElementById('noBallCollapse')
    const tempNoBall = new Collapse(noBallCollapse, { toggle: false })
    noBall ? tempNoBall.show() : tempNoBall.hide()

    const wideBallCollapse = document.getElementById('wideBallCollapse')
    const tempWideBall = new Collapse(wideBallCollapse, { toggle: false })
    wideBall ? tempWideBall.show() : tempWideBall.hide()
  })
  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='y_scroll w-100 h-100 pb-3'>
        <div>
          <h1 className='mb-4 mt-5 detail_title'>Match Settings</h1>
        </div>
        <form>
          <div className='card mb-4 m-auto p-4 common_card'>
            <div className='form-floating'>
              <input
                type='number'
                className='form-control logsin_input input_focus'
                placeholder='Total Overs'
                value={totalOvers}
                onChange={(e) => handleValues(e.target.value, 'overs')}
              />
              <label className='logsin_input_label'>Total Overs</label>
            </div>
            <div>
              <button
                type='submit'
                className={`btn ${
                  noBall ? 'btn-primary' : 'btn-outline-secondary'
                } shadow-none w-100 mt-4`}
                onClick={(e) => handleNoBall(e)}
              >
                {noBall ? 'No Ball Enabled' : 'Enable No Ball'}
              </button>
              <div className='mt-2 collapse' id='noBallCollapse'>
                <div className='card card-body'>
                  <div className='form-switch p-0 d-flex justify-content-between'>
                    <label className='form-check-label'>Re-Ball</label>
                    <input
                      className='form-check-input ms-0 shadow-none'
                      type='checkbox'
                    />
                  </div>
                  <div className='d-flex justify-content-between mt-3'>
                    <label className='form-check-label'>Runs on no ball</label>
                    <input
                      className='shadow-none runs_input'
                      type='number'
                      value={runsOnNo}
                      onChange={(e) => handleValues(e.target.value, 'no')}
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className={`btn ${
                  wideBall ? 'btn-primary' : 'btn-outline-secondary'
                } shadow-none w-100 mt-4`}
                onClick={(e) => handleWideBall(e)}
              >
                {wideBall ? 'Wide Ball Enabled' : 'Enable Wide Ball'}
              </button>
              <div className='mt-2 collapse' id='wideBallCollapse'>
                <div className='card card-body'>
                  <div className='form-switch p-0 d-flex justify-content-between'>
                    <label className='form-check-label'>Re-Ball</label>
                    <input
                      className='form-check-input ms-0 shadow-none'
                      type='checkbox'
                    />
                  </div>
                  <div className='d-flex justify-content-between mt-3'>
                    <label className='form-check-label'>Runs on no ball</label>
                    <input
                      className='shadow-none runs_input'
                      type='number'
                      value={runsOnWide}
                      onChange={(e) => handleValues(e.target.value, 'wide')}
                    />
                  </div>
                </div>
              </div>
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
