modal从html结构划分可分为modal内容和modal mask，modal内容层级应该比mask大，
modal内容层级又可分为三大块，分为header，body，footer，如果需要自定义header或者自定义footer需加props来自定义，所以现在的html结构就是以下
```html
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
```

这里面其他的一些变量都是为了自定义修改header，footer之类的。

modal最简单的功能就是实现显隐，接受一个state visible，然后将其置为内部state，时刻监听state变化；这里有一个问题就是点击蒙层或者点击icon关闭的时候，我们会setShow(false),此时modal的确会关闭，但是带来一个问题，此时visible是true，但是show的状态是false，这两者会不一致，此时再点击按钮打开modal会发现打不开，因为visible的状态没有变化，还是true，因为刚才关闭的时候只是改变了show的状态，此时解决得办法是关闭modal的时候把onCancel执行一下，onCancel会把visible置为false，所以此时再打开modal的时候就能监听到visible的变化了

modal内容是否销毁可以通过一个state来判断，若该值为true，则不展示children，否则展示children。默认给个false，在show为false且destroyOnClose为true的情况下将该state设为true
