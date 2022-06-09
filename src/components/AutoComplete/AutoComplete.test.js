import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent } from '@testing-library/react'
import AutoComplete from './AutoComplete'

const pokemonMockedData = [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    },
    {
        name: 'bulbasaur2',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
    }
]

describe('AutoComplete', () => {
    it('Should display first pokemon name', async () => {
        render(<AutoComplete  
                    datas={pokemonMockedData} 
                />)
    
        const userInput = screen.getByRole('textbox')
        expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument()
        fireEvent.change(userInput, { target: { value: "bu"} })
        expect(screen.getByText('lbasaur')).toBeInTheDocument()
    })
})
