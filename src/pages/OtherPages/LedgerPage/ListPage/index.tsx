/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataInfo } from '../../../../services/Axios';
import Delete from '../../../../components/DeleteComponent';
import Check from '../../../../components/StoreCheck';
import Options from '../../../../components/OptionComponent';
// Todo: 以下参数为临时数据，注意后续视情况修改
const deleteParams = {
  url: 'hmx',
  data: {}
};
const checkParams = {
  id: 2
};
const optionsParams = {
  itemId: 1,
  optionItems: {
    options: [
      {
        url: '/item/tool/lent',
        name: '借用'
      },
      {
        url: '/item/tool/broken',
        name: '损坏'
      },
      {
        url: '/item/tool/upkeep',
        name: '维护'
      },
      {
        url: '/item/tool/active',
        name: '归还'
      }
    ]
  }
}
export default React.memo(() => {
  const [list, setList] = useState([]);
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/list', { type: 2 }).then((res) => setList(res.data.list));
  };
  useEffect(getRequest, []);
  const { Column, ColumnGroup } = Table;
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
});
