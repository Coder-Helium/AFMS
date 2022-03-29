/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { getDataInfo } from '../../../services/Axios';
export default () => {
  const [list, setList] = useState([]);
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/client/all', { type: 2 }).then(res => setList(res.data.list))
  }
  useEffect(getRequest, []);
  const { Column } = Table;
  return (
      <Table dataSource={list}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="姓名" dataIndex="name" key="name" />
        <Column title="电话" dataIndex="phone" key="phone" />
        <Column title="身份证" dataIndex="cardId" key="cardId" />
        <Column title="状态" dataIndex="status" key="status" />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>查看</a>
              <a>编辑</a>
              <a>删除</a>
            </Space>
          )}
        />
      </Table>
  )
}
