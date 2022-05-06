import { useEffect } from 'react'
import { Typewriter } from '../Components/Typewriter'
import { FooterSpinner } from '../Components/FooterSpinner'

export const Home = () => {
  const skip = JSON.parse(localStorage.getItem('skip'))
  useEffect(() => {
    const SpinnerDiv = document.getElementById('spinner_div')
    const CardDiv = document.getElementById('card_div')
    const HasScrollbar = document.getElementById('has-scrollbar')
    setTimeout(() => {
      localStorage.setItem('skip', true)
    }, 6000)
    setTimeout(() => {
      SpinnerDiv && SpinnerDiv.classList.add('d-none')
    }, 6701)
    setTimeout(() => {
      CardDiv && CardDiv.classList.remove('d-none')
      HasScrollbar && HasScrollbar.classList.remove('no_scrollbar')
    }, 7000)

    !skip && CardDiv.classList.add('d-none')
    !skip && HasScrollbar.classList.add('no_scrollbar')
  }, [skip])

  const Card = () => {
    return (
      <div className='card w-75 mx-auto mb-4'>
        <div className='card-body'>This is a Card</div>
      </div>
    )
  }

  return (
    <div className='app_body'>
      <div id='has-scrollbar' className='y_scroll h-100 pt-4 position-relative'>
        <div
          className={skip ? 'd-none' : 'typewriter_div text-center'}
          id='typewriter_div'
        >
          <Typewriter text='Welcome to Cricdex.' size='1.7rem' />
        </div>
        <div className={skip ? 'd-none' : 'spinner_div'} id='spinner_div'>
          <FooterSpinner className='home_footer_spinner' />
        </div>
        <div className={skip ? 'd-block' : 'card_div'} id='card_div'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
