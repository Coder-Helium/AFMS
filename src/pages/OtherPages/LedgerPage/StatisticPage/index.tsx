import { Button, Col, Row, Statistic } from 'antd';

/* eslint-disable react/display-name */
export default () => {
  return (
    <Row gutter={16}>
    <Col span={12}>
      <Statistic title="今日收入" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="累计收入" value={6748764} />
      <Button style={{ marginTop: 16, width: 120 }} type="primary">
        刷新
      </Button>
    </Col>
  </Row>
  );
};
