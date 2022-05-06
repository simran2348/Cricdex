import '../Style/Loader.scss'

export const Loader = () => {
  return (
    <div className='loader_base'>
      <div className='loader_text'>Please wait...</div>
      <div className='loader_container'>
        <div className='planet'>
          <div className='ring'></div>
          <div className='moon'></div>
          <div className='cover_ring_container'>
            <div className='cover_ring'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
