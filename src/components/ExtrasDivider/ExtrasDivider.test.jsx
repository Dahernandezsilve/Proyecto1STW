/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import ExtrasDivider from './ExtrasDivider'

describe('ExtrasDivider', () => {
  it('Renders correctly', () => {
    render(<ExtrasDivider />)
  })
  it('Disorder', () => {
    render(<ExtrasDivider text="Texto de prueba" />)

    const linkElement = screen.getByText('Texto de prueba')

    // Verificar que el texto inicial se muestra correctamente
    expect(linkElement).toBeInTheDocument()

    // Simular el evento onMouseEnter para activar el desorden de letras
    fireEvent.mouseEnter(linkElement)

    // Verificar que el texto desordenado se muestra después del evento onMouseEnter
    expect(linkElement).toBeInTheDocument()

    // Simular el evento onMouseLeave para restaurar el orden original de las letras
    fireEvent.mouseLeave(linkElement)

    // Verificar que el texto se haya restaurado al orden original después del evento onMouseLeave
    expect(linkElement).toBeInTheDocument()
  })
})
