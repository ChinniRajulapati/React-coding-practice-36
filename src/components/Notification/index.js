import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="li-container">
      {children}
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
