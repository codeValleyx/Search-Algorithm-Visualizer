import Title from './Title'
import { useSelector } from 'react-redux'

const Header = () => {

  const hasBegun = useSelector(store=>store.nodeSlice.hasBegun)

  return (
    <div className='header'>
        <Title />
    </div>
  )
}

export default Header