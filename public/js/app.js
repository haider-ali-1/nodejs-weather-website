const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const temp = document.querySelector('#temp')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading ....'
    messageTwo.textContent = ''
    temp.textContent = ''

    fetch(`/weather?address=${search.value}`).then((response) => {
    response.json().then((data) => {
        
        if (data.error) {
            return messageOne.textContent = data.error
        }
        
        messageOne.textContent = data.location
        messageTwo.textContent = `${data.one_day_summary} It is currently ${data.current_temp} degree out. There is a ${data.rain_probability_percent}% chance of rain.`
        temp.textContent = `${data.current_temp} (°C)`

    })
})

})