/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { Steps, Button, message } from 'antd';
import { createRef, useState } from 'react';
import './index.scss'
import TaskSelect from './StepOne';
import PoolSelect from './StepTwo';
import CycleSelect from './StepThree'
export default () => {
  const [current, setCurrent] = useState(0);
  const { Step } = Steps;
  const [rows, setRows] = useState([]);
  const taskChildRef = createRef<TaskSelect>();
  const poolChildRef = createRef<PoolSelect>();
  const next = () => {
    setCurrent(current + 1);
    setRows(taskChildRef.current?.getRows())
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: '任务选择',
      content: 'First-content'
    },
    {
      title: '养殖池/负责人选择',
      content: 'Second-content'
    },
    {
      title: '周期制订',
      content: 'Last-content'
    }
  ];
  const poolParams = {
    list: rows
  }
  return (
    <div className='planFormulateContainer'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {current === 0 && (
          <TaskSelect ref={taskChildRef}/>
        )}
        {current === 1 && (
          <PoolSelect ref={poolChildRef} {...poolParams}/>
        )}
        {current === 2 && (
          <CycleSelect/>
        )}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
