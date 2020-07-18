/*
 * by - @OneDotSolutions
 * @author - @amanmandloi, @yogeshpatel
 * @date   - @ Jul 18, 2020
 * @component -  @HomePage
 * 
 *
 */

    // <h1>
    //   <FormattedMessage {...messages.header} />
    // </h1>

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Navbar from '../../components/Navbar/index';

// css
import '../../assets/css/home_page.css'

//image
import LOGO from '../../assets/image/logo/logo.png'


export default function HomePage() {
  return (

  	<div>
  		<section>
  			<div className="main-header-background">
  			<Navbar />
			<div className="header-title-text">  			
  				<div className="header-title-sub-part-one">
	  				<img className="bsd-logo-main" src={LOGO} alt="Logo | Bird of Paradise" />
	  			</div>

				<div className="header-title-sub-part-two">
					<div >
		  				<h3>We delight in creating gelato of the finest
							quality, inspired by the botanical flavours
							of nature.</h3>
		  			</div>
	  			</div>
	  		</div>
  			
  			<div className="bsd-logo-main-div">
  				<div className="bsd-logo-div">
	  			</div>
	  		</div>
  			
  			</div>
  		</section>
  	</div>

  );
}

