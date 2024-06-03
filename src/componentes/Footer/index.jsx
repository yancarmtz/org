import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/carlos-ya%C3%B1ez-mtz/' target="_blank">
                <img src="/img/linkedin.png" alt='instagram' />
            </a>
            <a href='https://www.facebook.com/carlos.yanezmartinez.5/' target="_blank">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://x.com/CharlyYama/' target="_blank">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/yancarmtz/' target="_blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Carlos Yañez Martinez</strong>
    </footer>   

}

export default Footer