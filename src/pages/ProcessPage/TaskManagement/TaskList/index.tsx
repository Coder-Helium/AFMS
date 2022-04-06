/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataInfo } from '../../../../services/Axios';
import Check from '../../../../components/StoreCheck'
import Delete from '../../../../components/DeleteComponent';
export default React.memo(() => {
  const [list, setList] = useState([]);
  const checkParams = {
    itemId: 2
  };
  const deleteParams = {
    url: 'hmx',
    data: {}
  };
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/list', { type: 2 }).then((res) => setList(res.data.list));
  };
  useEffect(getRequest, []);
  const { Column, ColumnGroup } = Table;
  return (
    <Table dataSource={list}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="名称" dataIndex="name" key="name" />
      <Column title="类别" dataIndex="type" key="amount" />
      <Column title="级别" dataIndex="level" key="amount" />
      <Column
        title="操作"
        key="id"
        render={(text, record) => (
          <Space size="middle">
              <Check {...text}/>
              <Delete {...deleteParams}/>
          </Space>
        )}
      />
    </Table>
  );
});
