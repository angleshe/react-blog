import React from 'react';
import styles from './index.less';
import { Row, Col, Menu, Icon } from 'antd';

const Header: React.FC = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className={styles['header-logo']}>技术胖</span>
        <span className={styles['header-text']}>专注前端开发,每年100集免费视频。</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item>
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item>
            <Icon type="youtube" />
            视频
          </Menu.Item>
          <Menu.Item>
            <Icon type="smile" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
