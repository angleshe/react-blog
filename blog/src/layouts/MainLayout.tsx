import React from 'react';
import MarkNav from 'markdown-navbar';
import { Row, Col, Affix } from 'antd';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';
import styles from './MainLayout.less';
import Header from '@/components/Header';
import Author from '@/components/Author';
import Advert from '@/components/Advert';
import Footer from '@/components/Footer';
import { ConnectState } from '@/models/connect';
import { DetailedModelState } from '@/models/detailed';

interface IMainLayout extends DetailedModelState {
  dispatch: Dispatch<AnyAction>;
}

const MainLayout: React.FC<IMainLayout> = props => (
  <div className={styles['main-layout']}>
    <Header />
    <Row type="flex" justify="center" className={styles['comm-main']}>
      <Col xs={24} sm={24} md={16} lg={18} xl={14}>
        <div className={styles['comm-left']}>{props.children}</div>
      </Col>
      <Col xs={0} sm={0} md={7} lg={5} xl={4} className={styles['comm-right']}>
        <Author />
        <Advert />
        {props.content ? (
          <Affix offsetTop={5}>
            <MarkNav source={props.content} ordered={false} className={styles['article-menu']} />
          </Affix>
        ) : (
          ''
        )}
      </Col>
    </Row>
    <Footer />
  </div>
);

export default connect((state: ConnectState) => ({
  ...state.detailed,
}))(MainLayout);
