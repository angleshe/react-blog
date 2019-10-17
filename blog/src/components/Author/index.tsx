import React from 'react';
import styles from './index.less';
import { Avatar, Divider } from 'antd';

const Author: React.FC = () => (
  <div className={styles.author}>
    <div>
      <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" />
    </div>
    <div className={styles.introduction}>
      光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
    </div>
    <Divider>社交账号</Divider>
    <div className={styles['account-list']}>
      <Avatar className={styles.item} size={28} icon="github" />
      <Avatar className={styles.item} size={28} icon="qq" />
      <Avatar className={styles.item} size={28} icon="wechat" />
    </div>
  </div>
);

export default Author;
