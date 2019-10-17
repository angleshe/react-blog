import React from 'react';
import { List, Icon } from 'antd';
import styles from './item.less';

export interface IArticle {
  title: string;
  context: string;
}

const Item: (item: IArticle) => React.ReactNode = item => (
  <List.Item>
    <div className={styles.title}>{item.title}</div>
    <div className={styles.info}>
      <span>
        <Icon type="calendar" />
        2019-06-28
      </span>
      <span>
        <Icon type="folder" />
        视频教程
      </span>
      <span>
        <Icon type="fire" />
        5498人
      </span>
    </div>
    <div className={styles.context}>{item.context}</div>
  </List.Item>
);

export default Item;
