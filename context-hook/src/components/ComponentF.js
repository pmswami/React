import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    const context = useContext(UserContext)
  return (
    <div>
        <UserContext.Consumer>
            {
                user =>{
                    return (<ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>User context value {user} channel context value {channel}</div>
                        }}
                    </ChannelContext.Consumer>)
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF