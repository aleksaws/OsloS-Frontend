import { Avatar, List } from 'antd';
import React from 'react';


const Idrettslag = (props) => {
  return (
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.nettside}>{item.navn}</a>}
            />
          </List.Item>
        )}
      />
  );
}



export default Idrettslag;
