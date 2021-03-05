import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/1.jpg';

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
                    I lived in Anchorage Alaska 1999 I went to the gym to lift weights and they had an arm wrestling table there for arm wrestlers. I was predicted to be the next world champion arm wrestler for my weight class and age at the time. I was very much involved in sports growing up it was the only thing I enjoyed outside of creative writing in school. I competed in the Thursday night tough man competition in Anchorage Alaska and I won. so between being promoted to become a professional boxer with a professional boxing coach in Alaska to be prepared to become a professional boxer and go to Vegas I was also being prepared to go to Vegas for arm wrestling.
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
