import React from 'react';
import Header from '@/components/Header';
import { Row, Col } from 'antd';
import styles from './MainLayout.less';

const MainLayout: React.FC = props => (
  <div className={styles['main-layout']}>
    <Header />
    <Row type="flex" justify="center" className={styles['comm-main']}>
      <Col xs={24} sm={24} md={16} lg={18} xl={14} className={styles['comm-left']}>
        {props.children}
      </Col>
      <Col xs={0} sm={0} md={7} lg={5} xl={4} className={styles['comm-right']}>
        右侧
      </Col>
    </Row>
  </div>
);

export default MainLayout;
