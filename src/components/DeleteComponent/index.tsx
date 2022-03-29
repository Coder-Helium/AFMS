/* eslint-disable react/display-name */
import { Popconfirm, message } from 'antd';
import React from 'react'
import { postDataInfo } from '../../services/Axios';
export default (params:{url:string, body?:any}) => {
  const { url, body } = params;
  function confirm () {
    postDataInfo(url, body).then(res => {
      if (res.data.code === 0) {
        message.success('删除成功！');
      }
    });
  }
  function oncancel () {
    message.error('你取消了删除操作！');
  }
  return (
    <Popconfirm
    title="是否确定要删除该项数据?"
    onConfirm={confirm}
    onCancel={oncancel}
    okText="是"
    cancelText="否"
  >
    <a href="#">Delete</a>
  </Popconfirm>
  )
}
