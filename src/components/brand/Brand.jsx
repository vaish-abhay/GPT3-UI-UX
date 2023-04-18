import React from 'react'
import './Brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
      </div>
        <img src={google} alt="Google" />
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand