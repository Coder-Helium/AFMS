/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import './index.scss'
import ListPage from './ListPage';
import ChartPage from './ChartPage';
import StatisticPage from './StatisticPage';
export default (props:any) => {
  const msg = props;
  console.log(msg)
  return (
    <div className='testContainer'>

      <div className='upContainer'>
        <div className='upItemContainer'>
          <ChartPage />
        </div>
        <div className='upItemContainer'>
          <StatisticPage />
        </div>
        <div className='upItemContainer'></div>
      </div>
      <div className='downContainer'>
        <ListPage />
      </div>
    </div>
  )
}
