import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './appsystem/base/global'

import { HomePage, ButtonsPage, FormElementsPage, AuthPage, ChartsPage } from './pages'

import { MainNavigation } from './app/navigation'

function App() {

	return (
    <div className="App">
      <GlobalStyles/>
      <MainNavigation/>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/formelements" component={FormElementsPage} />
        <Route path="/charts" component={ChartsPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
	)
}

export default App
