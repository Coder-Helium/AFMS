/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Carousel, Image } from 'antd';
import { EllipsisOutlined, IdcardOutlined, InboxOutlined, NodeExpandOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Nav from '../../components/Nav';
export default () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79'
  };
  const navigate = useNavigate()
  const handelProcessClick = () => {
    navigate('/process')
  }
  const handelStoreClick = () => {
    navigate('/item')
  }
  const handelPersonnelClick = () => {
    navigate('/personnel')
  }
  const handelOthersClick = () => {
    navigate('/others')
  }
  return (
    <div className = 'homeContainer'>
        <Nav/>
        <div className = 'homeCarousel' >
        <Carousel autoplay>
            <div>
                <h3 className='homeH3'>1</h3>
            </div>
            <div>
                <h3 className='homeH3'>2</h3>
            </div>
            <div>
                <h3 className='homeH3'>3</h3>
            </div>
            <div>
                <h3 className='homeH3'>4</h3>
            </div>
        </Carousel>
        </div>
        <div className = 'homeCardsContainer'>
            <div className = 'homeCardBox' onClick = {handelProcessClick} >
                <div className = 'front'>
                    <NodeExpandOutlined twoToneColor = "#eb2f96" style = {{ fontSize: '70px' }}/>
                    <span>养殖流程管理</span>
                </div>
                <div className = 'back'>
                    <p>养殖流程</p>
                </div>
            </div>
            <div className = 'homeCardBox' onClick = {handelStoreClick}>
                <div className = 'front'>
                    <InboxOutlined style = {{ fontSize: '70px' }}/>
                    <span>物资管理</span>
                </div>
                <div className = 'back'>
                    <p>查阅物资</p>
                </div>
            </div>
            <div className = 'homeCardBox' onClick = {handelPersonnelClick}>
                <div className = 'front'>
                   <IdcardOutlined style = {{ fontSize: '70px' }}/>
                   <span>人员管理</span>
                </div>
                <div className = 'back'>
                    <p>人员</p>
                </div>
            </div>
            <div className = 'homeCardBox' onClick = {handelOthersClick}>
                <div className = 'front'>
                   <EllipsisOutlined style = {{ fontSize: '70px' }}/>
                   <span>其他</span>
                </div>
                <div className = 'back'>
                    <p>查阅日志/财报</p>
                </div>
            </div>
        </div>
    </div>
  )
}
