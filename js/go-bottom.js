(function () {
  function addGoBottomButton() {
    if (document.getElementById('go-bottom')) return

    // Butterfly 右侧显示按钮组
    const rightsideShow = document.getElementById('rightside-config-show')
    if (!rightsideShow) return

    const btn = document.createElement('button')
    btn.id = 'go-bottom'
    btn.type = 'button'
    btn.title = '直达底部'
    btn.setAttribute('aria-label', '直达底部')
    btn.innerHTML = '<i class="fas fa-arrow-down"></i>'

    btn.addEventListener('click', function () {
      const bottom = document.documentElement.scrollHeight - window.innerHeight

      if (window.btf && typeof btf.scrollToDest === 'function') {
        btf.scrollToDest(bottom, 500)
      } else {
        window.scrollTo({
          top: bottom,
          behavior: 'smooth'
        })
      }
    })

    // 放到最下面，在回到顶部/百分比按钮下面
    rightsideShow.appendChild(btn)
  }

  document.addEventListener('DOMContentLoaded', addGoBottomButton)
  document.addEventListener('pjax:complete', addGoBottomButton)
})()