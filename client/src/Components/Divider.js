import PropTypes from 'prop-types'

export const Divider = (props) => {
  return props.text ? (
    <div
      className='d-flex'
      style={{
        width: props.width,
        margin: `${props.margin} auto`
      }}
    >
      <div
        style={{
          height: `${props.height}px`,
          width: '100%',
          backgroundColor: props.color,
          margin: '6px 0 0 0',
          textAlign: 'center'
        }}
      />
      <h6
        style={{
          color: props.color,
          backgroundColor: props.background,
          height: 'max-content',
          width: 'max-content',
          margin: props.textMargin,
          position: 'relative',
          fontSize: `${props.size}rem`,
          fontWeight: props.bold ? 'bold' : ''
        }}
      >
        {props.text}
      </h6>
      <div
        style={{
          height: `${props.height}px`,
          width: '100%',
          backgroundColor: props.color,
          margin: '6px 0 0 0',
          textAlign: 'center'
        }}
      />
    </div>
  ) : (
    <div
      style={{
        height: `${props.height}px`,
        width: props.width,
        backgroundColor: props.color,
        margin: props.margin,
        textAlign: 'center'
      }}
    />
  )
}

Divider.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.string,
  margin: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.number,
  textMargin: PropTypes.string
}
