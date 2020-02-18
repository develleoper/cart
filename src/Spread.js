import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// import { AppContext } from '.'
import Page from './Page'
import './Spread.css'

import {shuffle} from './resources/utils'
import {CARDS, SPREADS} from './resources/lore'

export default function SpreadRoute(props) {
  return (
    <Switch>
      <Route path="/spread/:spreadId" component={SpreadPage} />
      <Route default render={() => <Page title="Spread" />} />
    </Switch>
  )
}

function SpreadPage(props) {
  const { match: { params: { spreadId } } } = props
  const [{deck = [], count = 0}, setState] = useState({})
  useEffect(() => setState(state => ({ ...state, deck: shuffle(CARDS) })), [setState])

  return (
    <Page title={spreadId}>
      <Link to="/">Home</Link>
      <ol className={`spread ${spreadId}`} onClick={() => count < SPREADS[spreadId] && setState(state => ({ ...state, count: count + 1 }))}>
        <li className="back"><img src={`${process.env.PUBLIC_URL}/media/RWS_Tarot.jpg`} alt="Card Back"/></li>
        {deck.map((card, index) => <li key={card.name} className={`${count > index ? 'dealt' : '' }`}><img src={`${process.env.PUBLIC_URL}${card.image}`} alt={card.name} /></li>)}
      </ol>
    </Page>
  )
}
