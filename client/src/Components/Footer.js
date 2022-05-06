import { FooterSpinner } from './FooterSpinner'
import { Home, Archive, BarChart, More } from './Icons'
import { useEffect } from 'react'

export const Footer = (props) => {
  const skip = localStorage.getItem('skip')
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('footer_spinner').style.animation =
        'BallRotate 800s linear infinite'
    }, 7000)
  }, [])
  const tabs = [
    {
      label: 'Home',
      icon: <Home size='22' color='var(--svg-regular-black)' />,
      component: {
        hasComponent: false
      },
      path: '/Home'
    },
    {
      label: 'Matches',
      icon: <Archive size='22' color='var(--svg-regular-black)' />,
      component: {
        hasComponent: false
      },
      path: '/Matches'
    },
    {
      label: '',
      icon: '',
      component: {
        hasComponent: true,
        content: (
          <FooterSpinner
            id='footer_spinner'
            className={
              skip
                ? 'footer_spinner ballrotate_animation'
                : 'footer_spinner portal_animation'
            }
          />
        )
      },
      path: '/New/Details'
    },
    {
      label: 'Records',
      icon: <BarChart size='22' color='var(--svg-regular-black)' />,
      component: {
        hasComponent: false
      },
      path: '/Records'
    },
    {
      label: 'More',
      icon: <More size='22' color='var(--svg-regular-black)' />,
      component: {
        hasComponent: false
      },
      path: '/Setting'
    }
  ]

  const displayTabs = tabs.map((item, index) => {
    if (item.component.hasComponent) {
      return (
        <div
          key={index}
          className='app_home_container round_border'
          onClick={() => props.history.push(item.path)}
        >
          {item.component.content}
        </div>
      )
    } else {
      return (
        <div
          key={index}
          className='app_home_container'
          onClick={() => props.history.push(item.path)}
        >
          <div>{item.icon}</div>
          <div className='menu_label'>{item.label}</div>
        </div>
      )
    }
  })

  return <div className='app_footer px-2'>{displayTabs}</div>
}
