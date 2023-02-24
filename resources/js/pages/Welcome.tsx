import * as React from 'react'
import Logo from '../components/Logo'

export default function Welcome() {
    return (
        <div className="p-10 space-y-6">
            <Logo />
            <h1 className="text-xl">
                Let's build something rad 😎 with Laravel!
            </h1>
        </div>
    )
}
