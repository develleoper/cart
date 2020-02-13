import React, { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppContext } from '.'
import Page from './Page'
import './Spread.css'

import {shuffle} from './resources/utils'
import {CARDS} from './resources/lore'

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
  const [{deck = []}, setContext] = useContext(AppContext)
  useEffect(() => setContext(prevContext => ({ ...prevContext, deck: shuffle(CARDS) })), [setContext])
  return (
    <Page title={spreadId}>
      <ul>
        <li className="deck"><img src={`${process.env.PUBLIC_URL}/media/RWS_Tarot.jpg`} alt="Card Back"/></li>
        {deck.map(card => <li key={card.name}><img src={`${process.env.PUBLIC_URL}${card.image}`} alt={card.name} /></li>)}
      </ul>
    </Page>
  )
}
