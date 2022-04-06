/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Table, Tag, Space, Button, Checkbox, Switch } from 'antd';
import React, { Component } from 'react';
import { getDataInfo } from '../../../../services/Axios';
import InsertMessage from './InsertMessage';
export default class taskSelect extends Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
      list: [],
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
    this.setState({ list: this.props.list })
  };

  getCheckStrictly ():boolean {
    return this.state.checkStrictly;
  }

  componentDidMount () {
    this.getRequest();
  }

  render () {
    const { Column } = Table;
    return (
    <Table
      dataSource={this.state.list}
    >
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="名称" dataIndex="name" key="name" />
      <Column title="类别" dataIndex="type" key="amount" />
      <Column title="级别" dataIndex="level" key="amount" />
      <Column
        title="操作"
        key="id"
        render={(text, record) => (
          <Space size="middle">
            <InsertMessage {...this.props.list}/>
          </Space>
        )}
      />
    </Table>
    );
  }
}
