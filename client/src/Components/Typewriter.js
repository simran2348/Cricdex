export const Typewriter = (props) => {
  return (
    <h2 className='typewriter' id='typewriter' style={{ fontSize: props.size }}>
      {props.text}
    </h2>
  )
}
