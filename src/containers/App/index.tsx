import { ConnectedRouter as Router } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopPage from '../../pages/TopPage'

export const history = createHistory()

type Props = {}

class App extends React.Component<Props> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={TopPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
