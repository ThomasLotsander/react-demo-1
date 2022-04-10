import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {

    const onClick = () => {
        console.log('Header click')
    }

  return (
    <header className='header'>        
        <h1 style={HeadingStyle}>{title}</h1>  
        <Button color='green' text='Add' onClick={onClick}/> 
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