import io from 'socket.io-client';
import { useAuth } from './AuthContext';
import React, { createContext, useContext, useMemo } from 'react';
import { chat_base_url } from '../config/Constants';

const SocketContext = createContext();
const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    const { user } = useAuth();
    const token = user;
    console.log(user)

    const createSocket = () => {
        if (token) {
            return io(chat_base_url, { withCredentials: true, query: { token } });
        } else {
            return null;
        }
    };

    const socket = useMemo(createSocket, [token]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketProvider, getSocket };
