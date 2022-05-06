import { useState, useEffect } from 'react'
import { Divider } from '../Components/Divider'

export const Theme = () => {
  const [Theme, setTheme] = useState('')

  const getFromStorage = () => {
    const theme = localStorage.getItem('TYPE_OF_THEME')
    setTheme(theme)
  }
  const setStorage = (value) => {
    localStorage.setItem('TYPE_OF_THEME', value)
    window.location.reload()
  }

  useEffect(() => {
    getFromStorage()
  }, [])

  const themes = [
    {
      value: 'Dark Night'
    },
    {
      value: 'Plain White'
    },
    {
      value: 'Sassy Cyan'
    },
    {
      value: 'Sunset Lover'
    },
    {
      value: 'The Matrix'
    },
    {
      value: 'Vampire Red'
    },
    {
      value: 'Violet Crush'
    }
  ]

  const displayThemes = themes.map((item, index) => {
    return (
      <div key={index}>
        <div
          className='setting_container'
          onClick={() => setStorage(item.value)}
          role='button'
        >
          <div
            style={{ backgroundImage: `url(${item.icon})` }}
            className='setting_option_icon mx-3'
          />
          <h2 className='setting_option_label' key={index}>
            {item.value}
          </h2>
          <div className={Theme === item.value ? 'selected' : 'd-none'} />
        </div>
        {!(index === 6) && (
          <Divider height={1} width='70%' color='red' margin='13px 4.4rem' />
        )}
      </div>
    )
  })

  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='h-100 y_scroll pb-4 pt-4'>
        {displayThemes}
      </div>
    </div>
  )
}
