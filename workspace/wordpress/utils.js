module.exports = templateHandler = (slug) => {
    if (slug === 'about')
        return './src/templates/about.js'
    if (slug === 'contact-us')
        return './src/templates/contact-us.js'
    if (slug === 'home')
        return `./src/templates/home.js`
}
