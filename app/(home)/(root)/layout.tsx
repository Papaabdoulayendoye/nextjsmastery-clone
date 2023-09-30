import React , {FC} from 'react'

type childrenType = {
    children : React.ReactNode
}

const layout : FC<childrenType> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default layout
