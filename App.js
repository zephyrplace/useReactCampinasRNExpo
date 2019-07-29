import WelcomePage from './pages/Welcome'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Welcome: WelcomePage,
  Login: LoginPage,
  Dashboard: DashboardPage
}, {
  headerMode: 'none'
})

export default createAppContainer(AppNavigator)
