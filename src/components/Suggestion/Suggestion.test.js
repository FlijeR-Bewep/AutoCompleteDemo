import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Suggestion from './Suggestion'

const pokemonMockedData = 
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    }

describe('Suggestion', () => {
    it('Should display pokemon name', async () => {
        render(<Suggestion  
                    suggestion={pokemonMockedData.name} 
                    texttoHighlight={pokemonMockedData.name.toLowerCase()}
                    isActive={false}
                />)
    
        expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    })
    it('Should be active', async () => {
        render(<Suggestion  
                    suggestion={pokemonMockedData.name} 
                    texttoHighlight={pokemonMockedData.name.toLowerCase()}
                    isActive={true}
                />)
    
        expect(screen.queryByTestId('suggest').classList.contains('active')).toBe(true)
    })
    it('Should be not active', async () => {
        render(<Suggestion  
                    suggestion={pokemonMockedData.name} 
                    texttoHighlight={pokemonMockedData.name.toLowerCase()}
                    isActive={false}
                />)
    
        expect(screen.queryByTestId('suggest').classList.contains('active')).toBe(false)
    })
})
