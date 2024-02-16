import React from 'react';

import css from './FriendList.module.css'

export default function FriendList({ children }) {
    return (
        <ul className="friend-list">
           {children}
        </ul>
    )
}
