/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { Modal, Form, Input, InputNumber, Button } from 'antd';
import React, { useState } from 'react';
import { getDataInfo } from '../../services/Axios';
export default React.memo((params:{itemId:number}) => {
  const { itemId } = params;
  const [inputState, setInputState] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm()
  const getRequest = async () => {
    // Todo:页码未添加
    const storeInfo = await getDataInfo('/item/info', { itemId }).then(res => { return res.data.list })
    console.log(storeInfo);
    form.setFieldsValue(storeInfo)
  }
  const showModal = () => {
    setIsModalVisible(true);
    getRequest();
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setInputState(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInputState(true);
  };
  const handleModify = () => {
    setInputState(!inputState);
  }
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };

  return (
    <>
      <a type="primary" onClick={showModal}>
        查看与编辑
      </a>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form {...layout} name="nest-messages" form = {form} onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={'id'} label="编号" >
            <Input disabled={inputState} />
          </Form.Item>
          <Form.Item name={'name'} label="名称" >
            <Input disabled={inputState} />
          </Form.Item>
          <Form.Item name={'amount'} label="数量" >
            <InputNumber disabled={inputState}/>
          </Form.Item>
          <Form.Item name={'status'} label="状态">
            <Input disabled={inputState}/>
          </Form.Item>
          <Form.Item name={'expireTime'} label="过期时间">
            <Input disabled={inputState} />
          </Form.Item>
          <Form.Item name={'maintainTime'} label="上次维护时间">
            <Input disabled={inputState}/>
          </Form.Item>
          <Form.Item name={'maintainInterval'} label="维护周期">
            <Input disabled={inputState}/>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
            <Button onClick={handleModify} type="primary" htmlType="submit">
              修改
            </Button>
            <Button style={{ margin: '0 80px' }} type="primary" htmlType="submit">
              提交
            </Button>
         </Form.Item>
        </Form>
      </Modal>
    </>
  )
})
