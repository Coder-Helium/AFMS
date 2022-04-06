/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import './index.scss'
import TaskList from './TaskList';
import TaskInsert from './TaskInsert';
import TaskChart from './TaskChart';
export default (props:any) => {
  const msg = props;
  console.log(msg)
  return (
    <div className='testContainer'>

      <div className='upContainer'>
        <div className='chartContainer'>
          <label className='taskChartLabel'>任务类型分布</label>
          <TaskChart />
        </div>
        <div className='insertContainer'>
          <TaskInsert />
        </div>
      </div>
      <div className='downContainer'>
        <TaskList />
      </div>
        <label>{msg.value}</label>
    </div>
  )
}
