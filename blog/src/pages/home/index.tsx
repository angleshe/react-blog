import React from 'react';
import { List } from 'antd';
import Item, { IArticle } from './components/Item';
import { getArticleList } from '@/services/artice';

type IArticleList = IArticle[];

interface IHomeProps {
  list: IArticleList;
}

const Home: SSRFC<IHomeProps> = props => {
  return (
    <div>
      <List header="最新日志" dataSource={props.list} itemLayout="vertical" renderItem={Item} />
    </div>
  );
};
Home.getInitialProps = async () => {
  const { data } = await getArticleList();
  const list: IArticle[] = data
    ? data.map<IArticle>(item => ({
        title: item.title,
        context: item.introduce,
        typeName: item.typeName,
        viewCount: item.view_count,
        id: item.id,
      }))
    : [];
  return Promise.resolve({
    list,
  });
};
export default Home;
