import React from 'react'

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.data) {
        return { Authorization: 'Bearer ' + user.data }
    } else { }
}

export default authHeader