import './App.css';
import { Pelicula } from './Pelicula';
import { PageWrapper } from './PageWrapper';
import { Paginacion } from './Paginacion.js';
import { useEffect, useState } from 'react';

function Blog() {
  

  return(
    <>
    <PageWrapper>
      
    <div className="col-md-9 col-sm-12 col-xs-12">
				<div className="blog-detail-ct">
					<h1>New Character Posters For Pirates Of The Caribbean</h1>
					<span className="time">27 Mar 2017</span>
					<img src="images/uploads/blog-detail.jpg" alt="" />
					<p>
					Joss Whedon has a little bit of a history with superhero movies, and for creating layered female characters. After his documented frustrations with Wonder Woman, he's getting another chance at the DC Extended Universe and Warner Bros., closing in on a deal to write direct and produce a Batgirl movie.</p>

					<p>It's a somewhat surprising, but welcome move, given that Whedon has taken a long break to write something original, but has now pivoted to focus on developing the Batgirl project. First appearing in 1967 in Gardner Fox and Carmine Infantino's story run The Million Dollar Debut Of Batgirl, she's the superhero alias of Barbara Gordon, daughter of Gotham City Police Commissioner James Gordon. So we can likely expect J.K. Simmons' take on Gordon to appear along with other Bat-related characters.</p>

					<p>Based on Lissa Evans’ novel “Their Finest Hour and a Half” and directed by Lone Scherfig (“An Education”), the film is set in London during World War II when the British ministry was utilizing propaganda films to boost morale. Arterton plays Catrin Cole, a scriptwriter who is brought on to handle the women’s dialogue — commonly referred to as “the nausea.” The film, opening this week, features an outstanding ensemble, including Bill Nighy as a washed-up actor and Sam Claflin as Catrin’s fellow writer and sparring partner.</p>
					<div className="flex-it flex-ct">
						<p>
							Arterton is next set to play Vita Sackville-West in Vita and Virginia about her relationship with Virginia Woolf. She spoke to Variety about working with female directors, remarkable women, and why she shies away from the
							term “strong female character.” <br />

							I’m friends with the producer who I worked with on Byzantium and he sent it to me. I read the book as well, which is fantastic. You’re always looking for untold stories and many times they’re women’s stories. What surprised me is that it centers around a woman who’s really quite timid. I guess she’s allowed to be because all of the other characters.
						</p>
						<img src="images/uploads/blog-detail2.jpg" alt="" />
					</div>
					<p>Man Down debuted simultaneously on digital platforms in the U.K., meaning it was never going to be a big earner in theaters. But no one expected only one ticket sale. As of Tuesday, the Reel Cinema in Burnley was still carrying Man Down, which also stars Gary Oldman, Jai Courtney and Kate Mara.</p>
					<p>In the film, LaBeouf stars as a war veteran suffering from PTSD following his return from Afghanistan. The indie project, reuniting the star with A Guide to Recognizing Your Saints director Dito Montile, made its world premiere at the 2016 Venice Film Festival before making making a stop at the Toronto International Film Festival.</p>
					<div className="flex-it share-tag">
						<div className="social-link">
							<h4>Share it</h4>
							<a href="#"><i className="ion-social-facebook"></i></a>
							<a href="#"><i className="ion-social-twitter"></i></a>
							<a href="#"><i className="ion-social-googleplus"></i></a>
							<a href="#"><i className="ion-social-pinterest"></i></a>
							<a href="#"><i className="ion-social-linkedin"></i></a>
						</div>
						<div className="right-it">
							<h4>Tags</h4>
							<a href="#">Gray,</a>
							<a href="#">Film,</a>
							<a href="#">Poster</a>
						</div>
					</div>
					<div className="comments">
						<h4>04 Comments</h4>
						<div className="cmt-item flex-it">
							<img src="images/uploads/author.png" alt="" />
							<div className="author-infor">
								<div className="flex-it2">
									<h6><a href="#">Steve Perry</a></h6> <span className="time"> - 27 Mar 2017</span>
								</div>
								<p>Even though Journey's classic vocalist Steve Perry didn’t reunite with the band during their Rock Hall performance (to the dismay of hopeful fans), he did offer up a touching speech.</p>
								<p><a className="rep-btn" href="#">+ Reply</a></p>
							</div>
						</div>
						<div className="cmt-item flex-it reply">
							<img src="images/uploads/author2.png" alt="" />
							<div className="author-infor">
								<div className="flex-it2">
									<h6><a href="#">Joss Whedon</a></h6> <span className="time"> - 27 Mar 2017</span>
								</div>
								<p>Prince died not long after the 2016 Rock Hall ceremony, so this year's edition featured Lenny Kravitz and a full gospel choir performing a swamp-funk take on When Doves Cry.</p>
							</div>
						</div>
						<div className="cmt-item flex-it reply">
							<img src="images/uploads/author3.png" alt="" />
							<div className="author-infor">
								<div className="flex-it2">
									<h6><a href="#">Dave McNary</a></h6> <span className="time"> - 27 Mar 2017</span>
								</div>
								<p>Blue Sky Studios is one of the world’s leading digital animation movie studios and we are proud of their commitment to stay and grow in Connecticut.</p>
							</div>
						</div>
						<div className="cmt-item flex-it">
							<img src="images/uploads/author4.png" alt="" />
							<div className="author-infor">
								<div className="flex-it2">
									<h6><a href="#">Margot Robbie</a></h6> <span className="time"> - 27 Mar 2017</span>
								</div>
								<p>Joan Baez was the sharpest of the Rock Hall inductees, singing about deportees and talking social activism as well as joking about her age and the likelihood that a good portion of the Barclays. </p>
								<p><a className="rep-btn" href="#">+ Reply</a></p>
							</div>
						</div>
					</div>
					<div className="comment-form">
						<h4>Leave a comment</h4>
						<form action="#">
							<div className="row">
								<div className="col-md-4">
									<input type="text" placeholder="Your name" />
								</div>
								<div className="col-md-4">
									<input type="text" placeholder="Your email" />
								</div>
								<div className="col-md-4">
									<input type="text" placeholder="Website" />
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<textarea name="message" id="" placeholder="Message"></textarea>
								</div>
							</div>
							<input className="submit" type="submit" placeholder="submit" />
						</form>
					</div>
					
				</div>
			</div>

    </PageWrapper>
    </>
  )
}

export default Blog;
