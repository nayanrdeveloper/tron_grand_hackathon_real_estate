import Image from 'next/image'
import React from 'react'

function NavLogo() {
  return (
    <div>
        <Image src={'/logo.svg'} alt="logo" height={50} width={50} />
    </div>
  )
}

export default NavLogo