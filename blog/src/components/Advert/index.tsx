import React from 'react';
import styles from './index.less';

const Advert: React.FC = () => (
  <div className={styles.advert}>
    <img
      src="http://blogimages.jspang.com/flutter_ad2.jpg"
      width="100%"
      alt=""
      className={styles.img}
    />
    <img
      src="http://blogimages.jspang.com/Vue_koa_ad1.jpg"
      width="100%"
      alt=""
      className={styles.img}
    />
    <img
      src="http://blogimages.jspang.com/WechatIMG12.jpeg"
      width="100%"
      alt=""
      className={styles.img}
    />
    <img src="https://jspang.com/images/ad_4.jpg" width="100%" alt="" className={styles.img} />
  </div>
);

export default Advert;
