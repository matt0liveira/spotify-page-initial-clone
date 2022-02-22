import React from 'react'
import { FooterContainer } from '../AppStyle'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import PublicIcon from '@mui/icons-material/Public'
import CopyrightIcon from '@mui/icons-material/Copyright'

export default () => {
  return (
		<FooterContainer>
			<footer className="footer">
				<div className="footer-row1">
					<div className="footer--logoContainer">
						<img src="https://imagensfree.com.br/wp-content/uploads/2021/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
					</div>

					<div className="footer--navbar">
						<div className="navbar--menu">
							<h5 className="nav-header">EMPRESA</h5>
							<ul className="menu">
								<li><a href="#">Sobre</a></li>
								<li><a href="#">Empregos</a></li>
								<li><a href="#">For the Record</a></li>
							</ul>
						</div>

						<div className="navbar--menu">
						<h5 className="nav-header">COMUNIDADES</h5>
						<ul className="menu">
							<li><a href="#">Para artistas</a></li>
							<li><a href="#">Desenvolvedores</a></li>
							<li><a href="#">Publicidade</a></li>
							<li><a href="#">Investidores</a></li>
							<li><a href="#">Fornecedores</a></li>
						</ul>
						</div>

						<div className="navbar--menu">
							<h5 className="nav-header">LINKS ÚTEIS</h5>
							<ul className="menu">
								<li><a href="#">Suporte</a></li>
								<li><a href="#">Player da Web</a></li>
								<li><a href="#">Aplicativo móvel grátis</a></li>
							</ul>
						</div>
					</div>

					<div className="footer--socialIcons">
						<button className="btn-socialMedia"><InstagramIcon /></button>
						<button className="btn-socialMedia"><TwitterIcon /></button>
						<button className="btn-socialMedia"><FacebookIcon /></button>
					</div>
				</div>

				<div className="footer--country">
					<PublicIcon fontSize="12px" />
					<a href="#">Brasil</a>
				</div>

				<div className="footer--bottomLinks">
					<nav className="navbar">
						<ul className="menu">
							<li><a href="#">Legal</a></li>
							<li><a href="#">Centro de Privacidade</a></li>
							<li><a href="#">Política de privacidade</a></li>
							<li><a href="#">Cookies</a></li>
							<li><a href="#">Sobre anúncios</a></li>
						</ul>
					</nav>

					<div className="footer--copyright">
						<CopyrightIcon fontSize="12px" />
						<p>2022 Spotify AB</p>
					</div>
				</div>
			</footer>
		</FooterContainer>
	)
}