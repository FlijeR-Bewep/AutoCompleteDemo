import '@testing-library/jest-dom/extend-expect'
import { waitForElementToBeRemoved, screen, render } from '@testing-library/react'
import App from './App'
    
it('Should display input after loader is removed', async () => {
    render(<App />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
        
})