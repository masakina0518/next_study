import React, { useContext } from 'react'

type User = {
    id: number
    name: string
}

const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
    //const user = useContext(UserContext)
    // return (
    //     user !== null ? <p>Hello, {user.name}</p> : null
    // )

    return (
        <UserContext.Consumer>
            {(user) => {
                return <p>Hello, {user !== null ? user.name: ""}</p>
            }}
        </UserContext.Consumer>
    )

}

const Child = () => {
    const now = new Date()
    return (
        <div>
            <p>Current: {now.toLocaleDateString()}</p>
            <GrandChild />
        </div>
    )
}

const Parent = () => {
    const user: User = {
        id: 1,
        name: 'Alice',
    }

    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}

export default Parent