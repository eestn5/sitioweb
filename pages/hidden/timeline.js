import React from 'react';

import data from './timeline_events.json';






export default function Home() {

  
  let sorted_data = data;
    


  return (
    <React.Fragment>
      
        
     
        
        <title>CodePen - horizontal timeline</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'/>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css'/><link rel="stylesheet" href="../style.css"/>
      
      
      




<section class="cd-horizontal-timeline">
	<div class="timeline">
		<div class="events-wrapper">
			<div class="events">
				<ol>
					<li><a href="#0" data-date="16/01/1989" class="selected">16 Jan</a></li>
					{sorted_data.map(eventos =><li><a href="#0" data-date={eventos.date} >16 Jan</a></li> )}
				</ol>

				<span class="filling-line" aria-hidden="true"></span>
			</div> 
		</div> 
			
		<ul class="cd-timeline-navigation">
			<li><a href="#0" class="prev inactive">Prev</a></li>
			<li><a href="#0" class="next">Next</a></li>
		</ul> 
	</div> 

	<div class="events-content">
		<ol>
			<li class="selected" data-date="16/01/1989">
				<h2>Horizontal Timeline</h2>
				<em>January 16th, 2014</em>
				<p>	
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
				</p>
			</li>
      {sorted_data.map(eventos => 
    
      <li data-date={eventos.date}>
      <h2>{eventos.name}</h2>
      <em>{eventos.date}</em>
      <p>	
      {eventos.description}
      </p>
    </li>
      

		)}
		
		</ol>
	</div> 
</section>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.5/jquery.mobile.min.js'></script><script  src="../script.js"></script>

        
      

    </React.Fragment>
  );
}
