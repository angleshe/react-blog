import React from 'react';
// import { Dispatch, AnyAction } from 'redux';
import { Icon } from 'antd';
// import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import styles from './index.less';
import { getArticle } from '@/services/artice';
// import { DetailedModelState } from '@/models/detailed';
// import { ConnectState } from '@/models/connect';
import { ArticleDetail } from '@/dto/ArticleDto';

const markdown: string =
  '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '`console.log(111)` \n\n' +
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```';

// interface IDetailed extends DetailedModelState {
//   dispatch: Dispatch<AnyAction>;
// }

const Detailed: SSRFC<ArticleDetail> = props => {
  // useEffect(() => {
  //   console.log(props)
  //   // if (props.content !== markdown) {
  //   //   props.dispatch({
  //   //     type: 'detailed/setContent',
  //   //     payload: markdown,
  //   //   });
  //   // }
  //   // return () => {
  //   //   if (props.content) {
  //   //     props.dispatch({
  //   //       type: 'detailed/setContent',
  //   //       payload: '',
  //   //     });
  //   //   }
  //   // };

  // });
  return (
    <div className={styles.detailed}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.info}>
        <span>
          <Icon type="calendar" /> 2019-06-28
        </span>
        <span>
          <Icon type="folder" /> {props.typeName}
        </span>
        <span>
          <Icon type="fire" /> {props.view_count}人
        </span>
      </div>
      <div>{props.content}</div>
      <div className={styles.content}>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
      <div>{props.content}</div>
    </div>
  );
};

Detailed.getInitialProps = async ({ route, res }) => {
  const { code, data } = await getArticle(parseInt(route.params.id, 10));
  let result: Promise<ArticleDetail | void>;
  if (code === 0) {
    result = Promise.resolve(data as ArticleDetail);
  } else {
    result = Promise.resolve();
    if (res) {
      res.statusCode = 404;
      res.end('Not found');
    }
  }
  return result;
};

// export default connect((state: ConnectState) => ({
//   ...state.detailed,
// }))(Detailed);
export default Detailed;
