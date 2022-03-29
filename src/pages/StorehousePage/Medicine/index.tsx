/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataInfo } from '../../../services/Axios';
import Check from '../../../components/StoreCheck';
import Delete from '../../../components/DeleteComponent';
import Options from '../../../components/OptionComponent';

const checkParams = {
  itemId: 2
};
const deleteParams = {
  url: 'hmx',
  data: {}
};
const optionsParams = {
  itemId: 1,
  optionItems: {
    options: [
      {
        url: '/item/tool/lent',
        name: '取用'
      },
      {
        url: '/item/medicine/expire',
        name: '过期'
      },
      {
        url: '/item/medicine/deplete',
        name: '耗尽'
      }
    ]
  }
}

export default React.memo(() => {
  const [list, setList] = useState([]);
  const { Column, ColumnGroup } = Table;
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/list', { type: 3 }).then((res) => setList(res.data.list));
  };
  useEffect(getRequest, []);
  console.log(list);
  return (
    <Table dataSource={list}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Amount" dataIndex="amount" key="amount" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <Tag color="blue" key={tags}>
            {tags}
          </Tag>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Check {...checkParams} />
            <Delete {...deleteParams} />
            <Options {...optionsParams} />
          </Space>
        )}
      />
    </Table>
  );
})
