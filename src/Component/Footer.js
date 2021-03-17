import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
               <footer class="bg-dark mt-5 pt-5" style={{marginTop:"600px"}}>
	<div class="container">
		<div class="row ">
				<div class="col-lg-4 col-md-12 text-center">
				<div class="text-light">
					<div class="p-5">
						<h3 class=""> Sports 𝓝𝓮𝔀𝓼 𝓹𝓸𝓻𝓽𝓪𝓵</h3>
						<div class="">
							<img src="images/rahi.jpg" alt="" class="img-fluid"/>
						</div>
						<a href="#" class="mt-3">www.newsportal.com</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-12 text-center">
				<div class="text-light">
					<div class="p-5">
						<h3 class="">FOLLOW US</h3>
						<div class="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam magni, reiciendis consequatur. Fuga harum laboriosam vel repellat hic consequatur ut sint temporibus! Unde, eveniet dolorum beatae dicta odio dolore totam?
						</div>
						<div class="mt-2">
							<a href="http:/www.facebook.com" class="" target="_blank">
								<i class="fa fa-facebook-square text-primary"  style={{fontSize: "25px" }}></i>
							</a>
							<a href="http:/www.twitter.com" class="" target="_blank">
								<i class="fa fa-twitter text-primary" style={{fontSize: "25px" }}></i>
							</a>
							<a href="http:/www.youtube.com" class="" target="_blank">
								<i class="fa fa-youtube-square text-danger" style={{fontSize: "25px" }}></i>
							</a>
							<a href="http:/www.instagram.com" class="" target="_blank">
								<i class="fa fa-instagram text-danger" style={{fontSize: "25px" }}></i> 
							</a>

						</div>
					</div>
				</div>
			</div>


			<div class="col-lg-4 col-md-12 text-center">
				<div class="text-light">
					<div class="p-5">
						<h3 class="">OUR CHANNEL</h3>
						<div class="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem eius, id vero debitis atque soluta minima sunt iste voluptates nobis reiciendis earum illum modi, perspiciatis animi voluptatum ea. Accusamus!
						</div>
						<div class="">
							<a href="" class="btn btn-danger"><i class=""></i>Subscribe</a>
						</div>
					</div>
				</div>
			</div>

			</div>
			
		
		</div>
	</footer> 
            </>
        );
    }
}

export default Footer;