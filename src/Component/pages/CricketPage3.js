import React, { Component } from 'react';
import { Router, Route, Switch,Link } from "react-router-dom";
import Footer from "../Footer"

class CricketPage3 extends Component {
    render() {
        return (
            <>
                 <section class="mt-5">
  <div class="container">
  	<div class="row" style={{marginTop: "100px"}}>
  		<div class="col-lg-8">
  			<div class="media">
			  <img class="align-self-center mr-3 img-fluid" src="../../image/footballPic/pic10.jpg" alt="Generic placeholder image" style={{height: "200px",width: "230px"}}/>
			  <div class="media-body">
			    <h5 class="mt-0">Center-aligned media</h5>
			    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
			    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			  </div>
			</div>
  		</div>

  		<div class="col-lg-8 mt-4">
  			<div class="media">
			  <img class="align-self-center mr-3 img-fluid" src="../../image/footballPic/pic11.jpg" alt="Generic placeholder image" style={{height: "200px",width: "230px"}}/>
			  <div class="media-body">
			    <h5 class="mt-0">Center-aligned media</h5>
			    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
			    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			  </div>
			</div>
  		</div>

  		<div class="col-lg-8 mt-4">
  			<div class="media">
			  <img class="align-self-center mr-3 img-fluid" src="../../image/footballPic/pic12.jpg" alt="Generic placeholder image" style={{height: "200px",width: "230px"}}/>
			  <div class="media-body">
			    <h5 class="mt-0">Center-aligned media</h5>
			    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
			    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			  </div>
			</div>
  		</div>
  	</div>
  </div>

  <nav aria-label="...">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><Link class="page-link" to="/cricket">1</Link></li>
    <li class="page-item"><Link class="page-link" to="/CricketPage2">2</Link></li>
    <li class="page-item active">
      <span class="page-link">
        3
        <span class="sr-only">(current)</span>
      </span>
    </li>

    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
   </section> 
   <Footer></Footer>
            </>
        );
    }
}

export default CricketPage3;