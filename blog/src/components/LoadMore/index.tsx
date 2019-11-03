import React, {useEffect, useRef, useState} from 'react';
import style from './style.less'
/**
 * @description 组件状态
 * @enum {number}
 */
enum LoadStatus {
  /**
   * 加载完成
   */
  COMPLETE,
  /**
   * 加载中
   */
  LOADING,
  /**
   * 没有更多数据
   */
  END
}

interface LoadMoreProp {
  loadDataHandler: (setEnd: () => void) => Promise<void>;
}
var LoadMoreStatus: LoadStatus = LoadStatus.COMPLETE
const setEnd: () => void = () => {
  LoadMoreStatus = LoadStatus.END
}
const LoadMore: React.FC<LoadMoreProp> = props => {
  // 组件dom节点
  let loadMore: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  // 组件状态
  let [status, changeStatus] = useState<LoadStatus>(LoadMoreStatus)


  const scollEventHandler: () => Promise<void> =  async () => {
    if (LoadMoreStatus === LoadStatus.COMPLETE && loadMore.current !== null && document.body.clientHeight > loadMore.current.getBoundingClientRect().top) {
      LoadMoreStatus = LoadStatus.LOADING
      changeStatus(LoadStatus.LOADING);
      await props.loadDataHandler(setEnd);
      if (LoadMoreStatus === LoadStatus.LOADING) {
        LoadMoreStatus = LoadStatus.COMPLETE
      }
      changeStatus(LoadMoreStatus);
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', scollEventHandler, false)
    return () => {
      document.removeEventListener('scroll', scollEventHandler)
    }
  }, [])
  return (
    <div className={style['load-more']} ref={loadMore}>
      <span className={style.status}>{status === LoadStatus.END ? '没有更多数据~' : '加载中....'}</span>
    </div>
  )
}

export default LoadMore
