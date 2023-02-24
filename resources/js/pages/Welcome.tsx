import * as React from 'react'
import Logo from '../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons/faFaceGrinStars'

export default function Welcome() {
    return (
        <div className="p-10 space-y-6">
            <Logo />
            <h1 className="text-xl">
                Let's build a rad web app{' '}
                <FontAwesomeIcon icon={faFaceGrinStars} /> with Laravel!
            </h1>
        </div>
    )
}
