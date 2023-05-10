import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <img src="/imagens/fb.png" alt="logo facebook" />
                        </a>
                        <a href="twitter.com" target='_blank'>
                            <img src="/imagens/tw.png" alt="logo twitter" />
                        </a>
                        <a href="instagram.com" target='_blank'>
                            <img src="/imagens/ig.png" alt="logo instagram" />
                        </a>
                    </li>
                </ul>                
            </section>

            <section>
                <img src="/imagens/logo.png" alt="logo organo" />
            </section>

            <section>
                <p>
                    Desenvolvido por Nayla Prilla
                </p>
            </section>

        </footer>
    )

}

export default Rodape