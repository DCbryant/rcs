import React, { PropsWithChildren, CSSProperties, ReactNode, useState, useEffect } from 'react'
import classNames from "classnames";
import { createPortal } from 'react-dom';
import Button from '../Button';
import Icon from '../Icon';

interface ModalProps {
  afterClose?: () => void;
  bodyStyle?: CSSProperties;
  cancelText?: ReactNode;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  destroyOnClose?: () => void;
  footer?: ReactNode;
  keyboard?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  okText?:ReactNode,
  title: ReactNode | string;
  visible: boolean;
  width?: string | number;
  onCancel: () => void;
  onOk: () => void;
}

const baseClass = 'rc-modal'

function Modal(props: PropsWithChildren<ModalProps>) {
  const {
    afterClose,
    bodyStyle,
    cancelText,
    centered,
    closable,
    closeIcon,
    destroyOnClose,
    footer,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    okText,
    title,
    visible,
    width,
    onCancel,
    onOk,
    children
  } = props;
  // afterClose todo
  // 不能直接传visible,因为visible无论怎么变，直接传进来后都没变
  const [show, setShow] = useState(visible);
  const [destroyChild, setDestroyChild] = useState(false)
  useEffect(() => {
    // 因为刚才就是true，此时点击按钮打开modal还是true所以visible没变化监听不到
    // 解决办法是handleClose里面传一个onCancel，onCancel会自动把状态变一下，但是会多执行一次onCancel
    setShow(visible);
  }, [visible])

  useEffect(() => {
    if(visible && destroyOnClose) {
      setDestroyChild(true)
    }
  }, [visible, destroyOnClose])

  useEffect(() => {
    if (keyboard) {
      document.addEventListener('keydown', closeModal, false)
    }
    return () => {
      if(keyboard) {
        document.removeEventListener('keydown', closeModal, false)
      }
    }
  }, []);

  function closeModal(e: KeyboardEvent) {
    if (e && e.keyCode === 27) {
      handleClose();
    }
  }

  const hiddenModal = () => {
    setShow(false)
  }

  const closeMask = () => {
    if (maskClosable) {
      // 关闭model
      handleClose()
    }
  }

  const handleClose = () => {
    hiddenModal()
    if (destroyOnClose) {
      setDestroyChild(true)
    }
    document.body.style.overflow = 'auto'
    onCancel && onCancel()
  }

  return show ? createPortal(
    <div className={baseClass}>
      <div 
        className={`${baseClass}-content ${centered ? 'centered' : ''}`}
        style={{width: width}}
      >
        <div className={`${baseClass}-header`} >
          <div className={`${baseClass}-title`} >
            {title}
          </div>
        </div>
        {closable && (
          <span className={`${baseClass}-close`} onClick={() => handleClose()}>
            {closeIcon || <Icon icon="coffee" className={`${baseClass}-close-x`} />}
          </span>
        )}
        <div className={`${baseClass}-body`} style={bodyStyle} >
          { destroyChild ? null : children }
        </div>
        {
          footer === null ? null : (
            <div className={`${baseClass}-footer`}>
              {
                footer ? footer : (
                  <div className={`${baseClass}-footer-buttons`}>
                    <Button onClick={onCancel}>
                      {cancelText}
                    </Button>
                    <Button onClick={onOk}>
                      {okText}
                    </Button>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
      {
        mask && (
          <div 
            className={`${baseClass}-mask`} 
            style={maskStyle} 
            onClick={closeMask}
          />
        )
      }
    </div>,
    document.body
  ) : null
}

Modal.defaultProps = {
  okText: '确定',
  cancelText: '取消',
  mask: true,
  closable: true,
  visible: false,
  width: 520
}

export default Modal;