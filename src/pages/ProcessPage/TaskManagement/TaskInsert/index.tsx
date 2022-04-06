/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { Form, Input, Button, message } from 'antd';
import { postDataInfo } from '../../../../services/Axios';
export default () => {
  const { TextArea } = Input;
  const validateMessages = {
    required: '${label} is required!'
  };
  const onFinish = (values: any) => {
    postDataInfo('/user/insert', { data: values }).then(res => message.success(res))
    console.log(values);
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item name={'name'} label="名称" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'type'} label="类型" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'level'} label="级别" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'content'} label="内容" rules={[{ required: true }]}>
      <TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
      <Button type="primary" htmlType="submit">
        添加任务
      </Button>
    </Form.Item>
  </Form>
  )
}
