import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {

    
    

  return (
    <header className='header'>        
        <h1 style={HeadingStyle}>{title}</h1>  
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/> 
    </header>
  )
}

// Default props if not sent to component 
Header.defaultProps = {
    title: 'Task Tracker',
    creator: 'Thomas'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const HeadingStyle = {
    color: 'red',    
}

export default Header