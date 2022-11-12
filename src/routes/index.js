import HomeScreen from '../pages'
import ScanQrScreen from '../pages/scanQR'

export default [
	{ path: '/', component: HomeScreen },
	{ path: '/home', component: HomeScreen },
	{ path: '/scan-qr', component: ScanQrScreen },
]
