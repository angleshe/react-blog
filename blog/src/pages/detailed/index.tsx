import React, { useEffect } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Icon } from 'antd';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import styles from './index.less';
import { DetailedModelState } from '@/models/detailed';
import { ConnectState } from '@/models/connect';

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

interface IDetailed extends DetailedModelState {
  dispatch: Dispatch<AnyAction>;
}

const Detailed: React.FC<IDetailed> = props => {
  useEffect(() => {
    if (props.content !== markdown) {
      props.dispatch({
        type: 'detailed/setContent',
        payload: markdown,
      });
    }
    return () => {
      if (props.content) {
        props.dispatch({
          type: 'detailed/setContent',
          payload: '',
        });
      }
    };
  });
  return (
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
      <div className={styles.content}>
        <ReactMarkdown source={props.content} escapeHtml={false} />
      </div>
      <div>{props.content}</div>
    </div>
  );
};

export default connect((state: ConnectState) => ({
  ...state.detailed,
}))(Detailed);
