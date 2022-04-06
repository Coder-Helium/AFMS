/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space, Button, Checkbox, Switch } from 'antd';
import React, { Component } from 'react';
import { getDataInfo } from '../../../../services/Axios';

export default class taskSelect extends Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
      list: [],
      rows: [],
      checkStrictly: false
    };
  }

  getList = () => {
    return this.state.list;
  }

  getRows = () => {
    return this.state.rows;
  }

  getRequest = () => {
    // Todo:页码未添加
    getDataInfo('/list', { type: 2 }).then((res) => this.setState({ list: res.data.list }));
  };

  getCheckStrictly ():boolean {
    return this.state.checkStrictly;
  }

  componentDidMount () {
    this.getRequest();
  }

  render () {
    const rowSelection = {
      onChange: async (selectedRowKeys: any, selectedRows: any) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        await this.setState({ rows: selectedRows });
        console.log('?????', this.getRows())
      },
      onSelect: async (record: any, selected: any, selectedRows: any) => {
        // console.log(record, selected, selectedRows);
        await this.setState({ rows: selectedRows });
      },
      onSelectAll: async (selected: any, selectedRows: any, changeRows: any) => {
        // console.log(selected, selectedRows, changeRows);
        await this.setState({ rows: selectedRows });
      }
    };

    const { Column } = Table;
    return (
    <Table
      rowSelection={{ ...rowSelection }}
      dataSource={this.state.list}
    >
        <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly: <Switch />
      </Space>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="名称" dataIndex="name" key="name" />
      <Column title="类别" dataIndex="type" key="amount" />
      <Column title="级别" dataIndex="level" key="amount" />
    </Table>
    );
  }
}
