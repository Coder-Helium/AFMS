/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getDataInfo } from '../../../services/Axios';
export default () => {
  const [list, setList] = useState([]);
  const getRequest = () => {
    // Todo:页码未添加
    getDataInfo(' /store/all', { type: 1 }).then((res) =>
      setList(res.data.list)
    );
  };
  useEffect(getRequest, []);
  console.log(list);
  const { Column, ColumnGroup } = Table;
  return (
    <Table dataSource={list}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            <Tag color="blue" key={tags}>
              {tags}
            </Tag>
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Invite</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};
