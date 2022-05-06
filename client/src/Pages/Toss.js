import { useState } from 'react'
import { Ball, Bat, Alert } from '../Components/Icons'
import { Modal } from '../Components/Modal'

export const Toss = (props) => {
  const [wonByTabs, setWonByTabs] = useState([
    {
      label: 'Host Team',
      selected: false,
      id: 0
    },
    {
      label: 'Visitor Team',
      selected: false,
      id: 1
    }
  ])

  const [choseToTabs, setChoseToTabs] = useState([
    {
      icon: <Ball color='var(--svg-regular-black)' size='55' />,
      selected: false,
      id: 0
    },
    {
      icon: <Bat color='var(--svg-regular-black)' size='55' />,
      selected: false,
      id: 1
    }
  ])

  const wonByPanel = wonByTabs.map((item, index) => {
    return (
      <div
        key={index}
        className={`card p-3 team_name_card cursor_pointer ${
          item.selected && 'card_selected'
        }`}
        onClick={() => handleWonBySelect(index)}
      >
        {item.label}
      </div>
    )
  })

  const choseToPanel = choseToTabs.map((item, index) => {
    return (
      <div
        key={index}
        className={`card p-2 cursor_pointer ${
          item.selected && 'card_selected'
        }`}
        onClick={() => handleChoseToSelect(index)}
      >
        {item.icon}
      </div>
    )
  })

  const handleChoseToSelect = (index) => {
    setChoseToTabs(
      choseToTabs.map((item) =>
        item.id === index
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    )
  }

  const handleWonBySelect = (index) => {
    setWonByTabs(
      wonByTabs.map((item) =>
        item.id === index
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    )
  }

  const handleSubmit = () => {
    props.history.push('/New/PlayerDetails')
  }

  const handleBack = () => {
    props.history.push('/New/MatchSetting')
  }

  return (
    <>
      <Modal
        modalID='alertModal'
        modalIcon={
          <Alert
            color='var(--alert-icon)'
            size='55'
            borderColor='var(--alert-icon-border)'
            borderWidth='5'
            className='alert_symbol'
          />
        }
        modalMessage='Once the match is started, you cannot change the settings'
        modalButtons={[
          {
            label: 'go back',
            class: 'btn shadow-none me-2 no_back_button',
            clickFunction: (e) => handleBack(e)
          },
          {
            label: `Let's Start`,
            class: 'btn shadow-none match_button',
            clickFunction: (e) => handleSubmit(e)
          }
        ]}
      />
      <div className='app_body'>
        <div id='has-scrollbar' className='y_scroll w-100 h-100 pb-3'>
          <div>
            <h1 className='mb-4 mt-5 detail_title'>Toss</h1>
          </div>
          <form>
            <div className='mt-4'>
              <div className='fw-bold toss_subtitle'>Won By</div>
              <div className='d-flex justify-content-around mt-3'>
                {wonByPanel}
              </div>
            </div>
            <div className='mt-5'>
              <div className='fw-bold toss_subtitle'>Chose</div>
              <div className='d-flex justify-content-around mt-3'>
                {choseToPanel}
              </div>
            </div>
            <div className='w-75 m-auto justify-content-center d-flex mt-5'>
              <button
                type='submit'
                className='btn btn-outline-primary shadow-none'
                data-bs-toggle='modal'
                data-bs-target='#alertModal'
              >
                START MATCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
