import React, { Component } from 'react';
import pic12 from "../image/footballPic/pic12.jpg"
import pic13 from "../image/footballPic/pic13.jpg"

import Argentina from "../image/footballPic/Argentina.jpg"
import china from "../image/footballPic/china.jpg"

class FeaturesSection extends Component {
    render() {
        return (
            <>
            <section id="feauters" class="mt-5">
	<div class="container">
		<h2 class="">Feauters Section</h2>
		<hr/>
		<div class="row">
			<div class="col-lg-3">
				<div class="card border-0">
							<img src={pic12} alt="" class="img-fluid"/>
							<div class="card-body">
						<div class="card-title">
						<h2 class="">FCB</h2>
						</div>
						FC Barcelona back to the form wining by 2 Messi goal 
					</div>
				</div>
			</div>

			<div class="col-lg-3">
				<div class="card border-0">
							<img src={pic13} alt="" class="img-fluid"/>
							<div class="card-body">
						<div class="card-title">
						<h2 class="">Can Brasil win 2022 Quater World cup?</h2>
						</div>
						Hexa Mission of Brasil will be success because some talent player play very Much such Neymar jr,Coutinho,venisis Jr,Jessus,Allsion 
					</div>
				</div>
			</div>

			<div class="col-lg-3">
				<div class="card border-0">
							<img src={Argentina} alt="" class="img-fluid"/>
							<div class="card-body">
						<div class="card-title">
						<h2 class="">Arg Back to The form</h2>
						</div>
						Messi played very well recently he scored very much in FCB. 
					</div>
				</div>
			</div>

			<div class="col-lg-3">
				<div class="card border-0">
							<img src={china} alt="" class="img-fluid"/>
							<div class="card-body">
						<div class="card-title">
						<h2 class="">China Football is growing </h2>
						</div>
						I hope they can qualify for 2022 FIFA world Cup
					</div>
				</div>
			</div>
		</div>
	</div>

</section>    
            </>
        );
    }
}

export default FeaturesSection;