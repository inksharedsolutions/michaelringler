import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/dummy-profile.jpg';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Stephen M. Ringler
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p style={{textAlign: "justify"}}>
                    Stephen M. Ringler has a master's degree in international business from the American Graduate School with a fluency in Spanish and specialty in Latin America. He lived in Puerto Rico and Venezuela, working extensively throughout South America. He resided in Mexico for ten years, operating in all thirty-two states developing an intimate knowledge of the country and culture.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
