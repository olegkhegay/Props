import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
        <Title>Guns</Title>
        <div className="wrap">
            <Card title="AK-45" photo="/AK-45.jpg" price="200$"/> 
            <Card title="AUG" photo="/i (1).webp" price="450$"/>
            <Card title="SVD" photo="/i.webp" price="350$"/>
            <Card/>
        </div>
    </>
  )
}

export default Header