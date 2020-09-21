import React from 'react'

import './index.css'

export const ShadowPanel = ({ content = 'ShadowPanel' }) => {
  return <div className='shadow-box'>
    {content}
  </div>
}