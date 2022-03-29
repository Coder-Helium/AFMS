/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import './index.scss'
export default (props:any) => {
  const msg = props;
  console.log(msg)
  return (
    <div className='testContainer'>
        <label>{msg.value}</label>
    </div>
  )
}
