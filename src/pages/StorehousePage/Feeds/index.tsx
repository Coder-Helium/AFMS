/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataInfo } from '../../../services/Axios';
import Delete from '../../../components/DeleteComponent';
import Check from '../../../components/StoreCheck';
export default React.memo(() => {
  const [list, setList] = useState([]);
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/list', { type: 2 }).then(res => setList(res.data.list))
  }
  useEffect(getRequest, []);
  const { Column, ColumnGroup } = Table;
  const deleteParams = {
    url: 'hmx',
    data: {}
  };
  const checkParams = {
    itemId: 2
  }
  return (
      <Table dataSource={list}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Amount" dataIndex="amount" key="amount" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map((tag:any) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Check {...checkParams}/>
              <Delete {...deleteParams} />
            </Space>
          )}
        />
      </Table>
  )
})
