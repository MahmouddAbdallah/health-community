import io from 'socket.io-client'
const endpoint = import.meta.env.VITE_API_BASE_URL
const socket = io(endpoint)
export default socket 