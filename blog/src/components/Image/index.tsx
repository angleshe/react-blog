import React, {useRef, useEffect, useState, useCallback} from 'react';
import defaultImage from '@/assets/default.png'
import {debounce} from '@/utils/utils'

interface IImageProp {
 className?: string;
 src: string;
 alt: string;
 defaultSrc?: string;
}
function isShow (dom: HTMLElement): boolean {
  let top: number = dom.getBoundingClientRect().top + dom.offsetHeight
  return top > 0 && top < document.body.clientHeight
}
const Image: React.FC<IImageProp> = props => {
  let imgRef: React.RefObject<HTMLImageElement>  = useRef<HTMLImageElement>(null);
  let [imageSrc, setImageSrc] = useState<string>(props.defaultSrc ? props.defaultSrc : defaultImage)
  const loadImgHandler: () => void = useCallback<() => void>(debounce(() => {
    if (imgRef.current && isShow(imgRef.current)) {
      setImageSrc(props.src)
      document.removeEventListener('scroll', loadImgHandler)
    }
  }), [props.src])
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current && isShow(imgRef.current)) {
        setImageSrc(props.src)
      } else {
        document.addEventListener('scroll', loadImgHandler, false)
      }
    }
    return () => {
      document.removeEventListener('scroll', loadImgHandler)
    }
  }, [props.src])
  return (
    <img src={imageSrc} alt={props.alt} className={props.className} ref={imgRef}/>
  )
}

export default Image
