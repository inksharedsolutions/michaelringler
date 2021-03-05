import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/1.jpg'
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

					 			<h4>
									Shut your eyes, learn to Love more; and we'll see all we need to know
					 			</h4>

					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
                                  I lived in Anchorage Alaska 1999 I went to the gym to lift weights and they had an arm wrestling table there for arm wrestlers. I was predicted to be the next world champion arm wrestler for my weight class and age at the time. I was very much involved in sports growing up it was the only thing I enjoyed outside of creative writing in school. I competed in the Thursday night tough man competition in Anchorage Alaska and I won. so between being promoted to become a professional boxer with a professional boxing coach in Alaska to be prepared to become a professional boxer and go to Vegas I was also being prepared to go to Vegas for arm wrestling.
								</p>

								<p style={{textAlign: 'justify'}}>
									When I was in high school I was involved in weightlifting, football, basketball, and as soon as the sixth grade I got into arm wrestling during lunch time... We got in trouble and had to serve detention for doing that from time to time. As early as the I believe the 9th grade I was dead lifting 360 lb and bench pressing 210. I weighed 171 lb. before I landed in Anchorage Alaska how I ended up there was crab fishing. I traveled from Lompoc California to Seattle Washington. I found work on a crab fishing boat , that's how I ended up going to Anchorage Alaska and not returning to California until a year and a half later. when I was into weightlifting I used to bench press 450 lb do a competition curl of 165 lb, deadlift 550 lb, squat about 600 lb, leg press 1,900 lb. I didn't do many competitions I didn't get into my competitive life with powerlifting at all I barely scratched the surface of my potential and I left it behind and was no longer interested in competition in life all together. I was interested in becoming a more peaceful harmonious human being and I found that that would have more strength than all the muscle in the world.
								</p>

								<p style={{textAlign: 'justify'}}>
									I have 10 to 12 years of experience camping outside in the forest as a majority. I averaged half of the year living outside and the other half I usually found some kind of work trade situation for the winter time or I had money to rent a place. in retrospect I see a lot of people in this world are unhappy because they are too comfortable. A lot of people in this world take life for granted and so therefore they miss out on life all together, people are so busy chasing money and they forget about their health and they wonder why they are unhappy.
								</p>

			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor