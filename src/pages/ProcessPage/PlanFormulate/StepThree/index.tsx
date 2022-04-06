/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { Form, Input, Button, message } from 'antd';
import { postDataInfo } from '../../../../services/Axios';
export default () => {
  const validateMessages = {
    required: '${label} is required!'
  };
  const onFinish = (values: any) => {
    postDataInfo('/user/insert', { data: values }).then(res => message.success(res))
    console.log(values);
  };
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 }
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item name={'cardId'} label="计划名称" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'cardId'} label="任务开始时间" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'name'} label="任务持续时长" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'email'} label="任务发布间隔" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
  )
}
