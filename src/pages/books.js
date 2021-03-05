import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/adult-milkshake.png'
import Book2 from '../assets/img/books/philosophical-poetry.png'
import Book3 from '../assets/img/books/noahs-other-ark.png'
import Book4 from '../assets/img/books/fled-to-mexico.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'stephen-m-ringler',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Jonny Burgess</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Books</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Books | Stephen M. Ringler" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns" id="adult-milkshake">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="you-can-too" alt="main-book" src={Book} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										 <h1>Adult Milkshake</h1>
									 	<p>Creative Milkshakes for Adults, 21 and Older</p>
								    </div>

									<p>
                                    Simple and easy recipes with tips from the test kitchen.
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Adult-Milkshake-Stephen-M-Ringler-ebook/dp/B08Q6LSV7C/ref=sr_1_1?dchild=1&keywords=9781648952678&qid=1611081320&s=books&sr=1-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/adult-milkshake-stephen-m-ringler/1138403248?ean=9781648952678">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Adult-Milkshake-Stephen-M-Ringler/dp/1648952666/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1611081320&sr=1-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/adult-milkshake-stephen-m-ringler/1138403248?ean=9781648952661">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Adult-Milkshake/Stephen-M-Ringler/9781648952661?id=8147396224924">Books A Million</a></li>
								</nav>
							</div>
						</div>



						<div className="columns" id="philosophical-poetry">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="snowbear" alt="main-book" src={Book2} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>Philosophical Poetry</h1>
										<p></p>
									</div>

									<p>
									Whoever you may or may not be as a reader of these words of wisdom in this book, everything you experience while reading this book is a positive experience. It is an accomplishment as a writer and reader equally.
									</p>
									
									<p>
									And so it is, abracadabra.
									</p>

								</section>

								<nav className="booklinkBlocks">
									<span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/B08HSP7BH3/ref=sr_1_1?dchild=1&keywords=9781648951756&qid=1599769837&sr=8-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/noahs-other-ark-stephen-m-ringler/1137659618?ean=9781648951794">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Philosophical-Poetry-Chaitanya-Das-Ma/dp/1648951740/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600197365&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/philosophical-poetry-chaitanya-das-ma/1137619716?ean=9781648951749">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Philosophical-Poetry/Chaitanya-Das-Ma/9781648951749?id=8147396224924">Books A Million</a></li>
								</nav>
							</div>
						</div>

						<div className="columns" id="noahs-other-ark">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="snowbear" alt="main-book" src={Book3} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>Noah's Other Ark</h1>
										<p>A Collection of FUN POEMS for Mature Children and Immature Adults</p>
									</div>

									<p>
									The Worm that Couldn't Turn<br />
									The Lactose Intolerant Cow<br />
									The Fear of Heights Giraffe<br />
									The Fear of Water Fish<br />
									The Hemophiliac Porcupine<br />
									The Leopard Who Changed His Spots<br />
									The Fear of Sleep Cat<br />
									The Vegan Vulture<br />
									The Alleged Killer Bee<br />
									The Butterfly with the Margarine Complex<br />
									The Unwise Old Owl<br />
									The Neat Freak Pristine Pig<br />
									The Opossum that Wouldn't Play<br />
									The Albino Polar Bear<br />
									The Atheist Praying Mantis<br />
									The Fear of Getting Fat Turkey<br />
									The Frog that Skipped<br />
									The 20/20 Vision Bat<br />
									The Lady Bug Who was No Lady<br />
									The Thin-skinned Rhino
									The Hummingbird that Knew the Words<br />
									The Super-sonic Snail<br />
									The Laughing Hyena without a Sense of Humor<br />
									The Lion that Meows<br />
									The Not So Great White Shark<br />
									The Two Horned Unicorn
									</p>

								</section>

								<nav className="booklinkBlocks">
									<span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Noahs-Other-Ark-Stephen-Ringler-ebook/dp/B08HVY7DMR/ref=sr_1_1?dchild=1&keywords=9781648951794&qid=1600367669&sr=8-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/noahs-other-ark-stephen-m-ringler/1137659618?ean=9781648951794">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Noahs-Other-Ark-Collection-Children/dp/1648951783/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600367695&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/noahs-other-ark-stephen-m-ringler/1137659618?ean=9781648951787">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Noahs-Other-Ark/Stephen-M-Ringler/9781648951787?id=8147396224924">Books A Million</a></li>
								</nav>
							</div>
						</div>
						<div className="columns" id="fled-to-mexico">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="snowbear" alt="main-book" src={Book4} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>Fled to Mexico</h1>
										<p>If No One Knows They Were There Then It Didn't Happen</p>
									</div>

									<p>
									Posing as recreational birders, a group of former US Special Forces enter Mexico to capture and extract six Mexican fugitives who murdered six innocent citizens in Santa Barbara then fled to Mexico with impunity, untouchable until now.
									</p>

								</section>

								<nav className="booklinkBlocks">
									<span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Fled-Mexico-Knows-There-Happen-ebook/dp/B08KYJ7XZH/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1603724996&sr=8-1#detailBullets_feature_div">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/fled-to-mexico-stephen-m-ringler/1111349025?ean=9781648951961">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Fled-Mexico-Knows-There-Happen/dp/1648951953/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1614739651&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/fled-to-mexico-stephen-m-ringler/1111349025?ean=9781648951954">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Fled-Mexico/Stephen-M-Ringler/9781648951954?id=8147396224924">Books A Million</a></li>
								</nav>
							</div>
						</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor