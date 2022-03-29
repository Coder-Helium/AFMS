/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { Modal, Button, message } from 'antd';
import React, { useState, useCallback } from 'react';
import { postDataInfo } from '../../services/Axios';
import { Options } from '../../services/APIModel/options'
export default React.memo((params:{itemId:number, optionItems: Options}) => {
  const { itemId, optionItems } = params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOptionClick = (url: string) => {
    postDataInfo(url, { itemId }).then(res => {
      if (res.data.code === 0) {
        message.success('操作成功')
      }
    })
  }

  return (
    <>
      <a type="primary" onClick={showModal}>
        操作
      </a>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className='option-buttonStyle'>
            {
              optionItems?.options.map((item, index) => {
                return (
                  <Button onClick={() => handleOptionClick(item.url)} key={index} >{item.name}</Button>
                )
              })
            }
        </div>
      </Modal>
    </>
  )
})
