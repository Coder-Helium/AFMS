/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import './index.scss'
import ListPage from '../OtherPages/LedgerPage/ListPage';
export default (props:any) => {
  const msg = props;
  console.log(msg)
  return (
    <div className='testContainer'>

      <div className='upContainer'>
        <div className='upItemContainer'></div>
        <div className='upItemContainer'></div>
        <div className='upItemContainer'></div>
      </div>
      <div className='downContainer'>
        <ListPage />
      </div>
        <label>{msg.value}</label>
    </div>
  )
}
