import HomeScreen from '../pages'
import QrScreen from '../pages/qr'

export default [
	{ path: '/', component: HomeScreen },
	{ path: '/home', component: HomeScreen },
	{ path: '/scan-qr', component: QrScreen },
]
