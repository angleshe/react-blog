import React from 'react';
import styles from './index.less';
import { Icon } from 'antd';

const Detailed: React.FC = () => (
  <div className={styles.detailed}>
    <div className={styles.title}>React实战视频教程-技术胖Blog开发(更新08集)</div>
    <div className={styles.info}>
      <span>
        <Icon type="calendar" /> 2019-06-28
      </span>
      <span>
        <Icon type="folder" /> 视频教程
      </span>
      <span>
        <Icon type="fire" /> 5498人
      </span>
    </div>
    <div className={styles.content}></div>
  </div>
);

export default Detailed;
