/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Form, Input, Button, Modal, message } from 'antd';
import { postDataInfo } from '../../../services/Axios';
export default () => {
  const validateMessages = {
    required: '${label} is required!'
  };
  const onFinish = (values: any) => {
    postDataInfo('/user/insert', { data: values }).then(res => message.success(res))
    console.log(values);
  };
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 }
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'email'} label="Phone" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'cardId'} label="CardId" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}
