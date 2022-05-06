import { Divider } from '../Components/Divider'
import {
  Envelope,
  HalfStar,
  Info,
  Logout,
  FileImage
} from '../Components/Icons'

export const Setting = (props) => {
  const options = [
    {
      label: 'Themes',
      icon: <FileImage size='19' color='var(--svg-regular-black)' />,
      path: '/Setting/Theme'
    },
    {
      label: 'FeedBack',
      icon: <Envelope size='19' color='var(--svg-regular-black)' />,
      path: '/Feedback'
    },
    {
      label: 'Rate App',
      icon: <HalfStar size='19' color='var(--svg-regular-black)' />,
      path: '/RateApp'
    },
    {
      label: 'About Creator',
      icon: <Info size='19' color='var(--svg-regular-black)' />,
      path: '/About'
    },
    {
      label: 'Loader',
      icon: <FileImage size='19' color='var(--svg-regular-black)' />,
      path: '/Loader'
    },
    {
      label: 'Logout',
      icon: <Logout size='19' color='var(--svg-regular-black)' />,
      path: '/Home'
    }
  ]

  const Distinguish = (label, path) => {
    if (label === 'Logout') {
      localStorage.setItem('LoggedIn', false)
      return props.history.push(path)
    } else {
      return props.history.push(path)
    }
  }

  const displayOptions = options.map((item, index) => {
    return (
      <div key={index}>
        <div
          className='setting_container'
          onClick={() => Distinguish(item.label, item.path)}
          role='button'
        >
          <div className='setting_option_icon mx-3'>{item.icon}</div>
          <h2 className='setting_option_label' key={index}>
            {item.label}
          </h2>
        </div>
        {!(index === options.length - 1) && (
          <Divider height={1} width='70%' color='red' margin='13px 4.4rem' />
        )}
      </div>
    )
  })
  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='h-100 y_scroll pb-4 pt-4'>
        {displayOptions}
      </div>
    </div>
  )
}
