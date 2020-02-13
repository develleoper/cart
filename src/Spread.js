import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppContext } from '.'
import Page from './Page'

export default function SpreadRoute(props) {
  const [context, setContext] = useContext(AppContext)
  return (
    <Switch>
      <Route path="/spread/:spreadId" component={SpreadPage} />
      <Route default render={() => <Page title="Spread" />} />
    </Switch>
  )
}

function SpreadPage(props) {
  const { match: { params: { spreadId } } } = props
  return (
    <Page title={spreadId} />
  )
}
