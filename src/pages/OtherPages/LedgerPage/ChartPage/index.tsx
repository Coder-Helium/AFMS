import { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';
/* eslint-disable react/display-name */
export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding: 50,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5
    }
  };

  return <Line {...config} />;
};
