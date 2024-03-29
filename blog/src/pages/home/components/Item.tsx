import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'umi';
import styles from './item.less';

export interface IArticle {
  id: number;
  title: string;
  context: string;
  typeName: string;
  viewCount: number;
}

const Item: (item: IArticle) => React.ReactNode = item => (
  <List.Item>
    <Link to={`/detailed/${item.id}`}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.info}>
        <span>
          <Icon type="calendar" />
          2019-06-28
        </span>
        <span>
          <Icon type="folder" />
          {item.typeName}
        </span>
        <span>
          <Icon type="fire" />
          {item.viewCount}人
        </span>
      </div>
      <div className={styles.context}>{item.context}</div>
    </Link>
  </List.Item>
);

export default Item;
