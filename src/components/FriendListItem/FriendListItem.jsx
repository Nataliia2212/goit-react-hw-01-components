import React from 'react';
import PropTypes from 'prop-types'
import css from './FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem({friends}) {
    return (<>
        {friends.map(({id, avatar, name, isOnline}) => (
            <li className={css.item} key={id}>
                <span className={clsx(css.status, isOnline ? css.green : css.red)}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{ name}</p>
            </li>
        ))}
    </>
  )
}

FriendListItem.propTypes = {
   friends : PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar : PropTypes.string,
            isOnline: PropTypes.bool,
            name : PropTypes.string
        })
    )
           
}