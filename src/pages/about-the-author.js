import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Stephen M. Ringler</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | Stephen M. Ringler"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Stephen M. Ringler
					 				</span>
					 			</div>

					 			{/* <h4>
									Shut your eyes, learn to Love more; and we'll see all we need to know
					 			</h4>

					 			<span className="ata-span-fx">author quote</span> */}
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
                                  Stephen M. Ringler has a master's degree in international business from the American Graduate School with a fluency in Spanish and specialty in Latin America. He lived in Puerto Rico and Venezuela, working extensively throughout South America. He resided in Mexico for ten years, operating in all thirty-two states developing an intimate knowledge of the country and culture. Ringler has authored Discovering Mexico City, published in 1981 in Spanish by Editorial Novaro (Discubriendo La Ciudad de Mexico), and A Dictionary of Cinema Quotations from Filmmakers and Critics, published in 2000 by McFarland Publishing, Jefferson, NC (www.mcfarlandpub.com).
								</p>

			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor