import React,{useState} from 'react';
import Slider from 'react-slick';
import gswlogo from './images/logogsw.png';
import Dubthevote from './images/dubthevote.jpg';
import skd from './images/Skd.jpeg';
import dallas from './images/dallas.png'
import blue from './images/blue.avif'
import klayh from './images/klayh.avif'
import hat from './images/hat.avif'
import commone from './images/commone.avif'
import commtwo from './images/commtwo.avif'
import commthree from './images/commthree.avif'
import gswceltics from './images/gswceltics.jpeg'
import gswdenver from './images/gswdenver.gif'
import gold from './images/gold.avif'
import choodie from './images/choodie.avif'
import City from './images/Cityedition.avif'
import tryace from './images/trayce.jpeg'
import denver from './images/denver.png'
import chris from './images/chris.avif'
import brandin from './images/Brandin.png'
import gswnets from './images/gswnets.gif'
import dario from './images/dario.jpeg'
import gswport from './images/gswport.gif'
import steve from './images/steve.png'
import jersey from './images/jersey.jpg';
import warriormail from './images/warriormail.png'
import chase from './images/chaser.png'
import lakers from './images/lakers.png'
import community from "./images/community.png"
import curryarticle from './images/curryarticle.avif'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import shop from './images/warriorsshoplogo.png'
import './Landing.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Landing() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Invalid email format');
      return;
    }
    toast.success(' Subscribed Successfully');
    setEmail('');
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slides = [
    { imgSrc: Dubthevote, link: 'https://vote.nba.com/en?cid=nba:team:social:na:asv:asvote:global:t-warriors&utm_medium=team_social&utm_source=not-applicable_na&utm_campaign=all-star-voting_all-star-vote&utm_content=nba:team:social:na:asv:asvote:global:t-warriors&pid=201939,202691,203110,203952,1626172' },
    { imgSrc: skd, link: 'https://www.youtube.com/watch?v=bcwFG9r95aY&ab_channel=GoldenStateWarriors' },
    { imgSrc: community, link: 'https://community.warriors.com/community/' },
    { imgSrc: jersey, link: 'https://shop.warriors.com/' },
  ];

  return (
    <div className='gsw-landing'>
      <nav className='gsw-navbar'>
        <div className='gsw-logo'>
          <img src={gswlogo} alt='gswlogo' />
        </div>
        <h1>GSW</h1>
        <ul className='gsw-navbar-right'>
          <li>
            <a href='/' className='navlink'>
              TICKETS
            </a>
          </li>
          <li>
            <a href='/' className='navlink'>
              SHOP
            </a>
          </li>
          <li>
            <a href='/' className='navlink'>
              TEAM
            </a>
          </li>
          <li>
            <a href='/' className='navlink'>
              SCHEDULE
            </a>
          </li>
        </ul>
      </nav>

      <Slider {...sliderSettings} className='slider'>
        {slides.map((slide, index) => (
          <div className='slide' key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </Slider>
      <div className='matches'>
        <div className='match'>
           <h1>UPCOMING</h1>
           <img src={chase} alt='chase'></img>
           <h3>SCHEDULE</h3>
        </div>
        <div className='match1'>
          <p>Thu, Jan 4, 7:00 AM PST</p>
          <div className='teamimg'>
          <img src={gswlogo} alt='gsw'></img>
          <h1>VS</h1>
          <img src={lakers} alt='gsw'></img>
          </div>
          <div className='tv'><i class="fa fa-tv"></i> NBA TV, NBC Sports</div>
          <div className='buytickets'>
            <a href='https://www.ticketmaster.com/event/1C005F1079F01217?brand=warriors&artistid=805946&wt.mc_id=NBA_TEAM_GSW_CSB_GM18' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-ticket-simple"></i>BUY TICKETS</a>
          </div>
        </div>
        <div className='match1'>
          <p>Thu, Jan 6, 4:00 AM PST</p>
          <div className='teamimg'>
          <img src={gswlogo} alt='gsw'></img>
          <h1>VS</h1>
          <img src={dallas} alt='dallas'></img>
          </div>
          <div className='tv'><i class="fa fa-tv"></i> TNT,NBC SPORTS</div>
          <div className='buytickets'>
          <a href='https://www.ticketmaster.com/event/1C005F1079F01217?brand=warriors&artistid=805946&wt.mc_id=NBA_TEAM_GSW_CSB_GM18' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-ticket-simple"></i>BUY TICKETS</a>
          </div>
        </div>
        <div className='match1'>
        <p>Thu, Jan 16, 2:00 AM PST</p>
          <div className='teamimg'>
          <img src={gswlogo} alt='gsw'></img>
          <h1>VS</h1>
          <img src={denver} alt='denver'></img>
          </div>
          <div className='tv'><i class="fa fa-tv"></i>ESPN,NBA TV</div>
          <div className='buytickets'>
          <a href='https://www.ticketmaster.com/event/1C005F1079F01217?brand=warriors&artistid=805946&wt.mc_id=NBA_TEAM_GSW_CSB_GM18' target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-ticket-simple"></i>BUY TICKETS</a>
          </div>
        </div>
      </div>
      <div className='teamnews'>
            <div className='news'>
                    <div className='news-container'>
                        <img src={gswlogo} alt='gswlogo'></img><span><h1>TEAM NEWS</h1></span>
                    </div>
          <div className='article'>
                <div className='article-left'>
                   <img src={curryarticle} alt='curryy'></img>
                        <h1>Results: Gsw Vs Washington</h1>
                        <p>Steph Curry Guides Warriors to another Home Victory Against Washington Wizards</p>
                    <div className='read'>
                       <i class="fa-brands fa-readme"></i><a href='/'>Read More</a>
                    </div>
                </div>
                <div className='article-right'>
                    <div className='article-rightone'>
                    <img src={chris} alt='chris'></img>
                        <p>Chris Paul set to miss 2 Weeks of action due to hamstring</p>
                    </div>
                    <div className='article-rightone'>
                    <img src={brandin} alt='curryy'></img>
                        <p>Rookie Brandin Podziemski rocks the NBA world with his unbelivable Plays</p>
                    </div>
                    <div className='article-rightone'>
                    <img src={steve} alt='curryy'></img>
                        <p>Coach Steve Kerr reflects on the Team's Progress</p>
                    </div>
                </div>
             </div>
          </div>
      </div>
      <div className='warriors-insider'>
           <div className='warriors-box'>
            <div className='warriors-box-left'>
            <img src={warriormail} alt='warriormail'></img>
            </div>
            <div className='warriors-box-right'>
              <p>Get presale access to tickets, Dubs news, offers and more!</p>
            <input
        type='email'
        placeholder='Enter Your Email'
        value={email}
        onChange={handleInputChange}
      />
     
      <button onClick={handleSubmit}>SUBSCRIBE</button>
            </div>
           </div>
      </div>
      <div className='highlights'>
        <div className='highlight'>
                  <div className='highlight-container'>
                        <img src={gswlogo} alt='gswlogo'></img><span><h1>HIGHLIGHTS</h1></span>
                  </div>
                 <div className='rows'>
                  <div className='row1'>
                     <div className='video1'>
                      <img src={gswceltics} alt='video1'></img>
                      <p>Watch:Curry Slays The Celtics with a Clutch Three</p>
                     </div>
                     <div className='video1'>
                      <img src={gswdenver} alt='video2'></img>
                      <p>Defending Champs Takes on the Golden State in a Christmas Clash</p>
                     </div>
                     <div className='video1'>
                      <img src={tryace} alt='video3'></img>
                      <p>Rookie Trayce Jackson Records Yet Another Double-Double </p>
                     </div>
                  </div>
                  <div className='row2'>
                  <div className='video1'>
                      <img src={gswport} alt='video1'></img>
                      <p>Golden State Out Scores Portland on the Paint and Secure a Huge Win on the Road</p>
                     </div>
                     <div className='video1'>
                      <img src={dario} alt='video2'></img>
                      <p>Watch Dario Saric and ChrisPaul's Impactful Plays off the Bench</p>
                     </div>
                     <div className='video1'>
                      <img src={gswnets} alt='video3'></img>
                      <p>Watch the Best Plays of the Recent Encounter between the Warriors and the Nets </p>
                     </div>
                  </div>
                 </div>
           </div>
      </div>
      <div className='shop'>
        <div className='shopimg'>
        <img src={shop} alt='shop'></img>
        </div>
        <div className='shopcards'>
          <div className='shopcard'>
            <img src={choodie} alt='choodie'></img>
            <a href='https://shop.warriors.com/' className='link'>Stephen Curry City Edition Hoodie</a>
          </div>
          <div className='shopcard'>
          <img src={gold} alt='gold'></img>
            <a href='https://shop.warriors.com/' className='linkone'>Gold Classic GSW Edition</a>
          </div>
          <div className='shopcard'>
          <img src={City} alt='city'></img>
            <a href='https://shop.warriors.com/' className='link'>Nike Black GSW City Edition</a>
          </div>
        </div>
        <div className='shopcardone'>
        <div className='shopcard'>
            <img src={klayh} alt='klayh'></img>
            <a href='https://shop.warriors.com/' className='linkone'>Klay Thompson  City Edition Hoodie</a>
          </div>
          <div className='shopcard'>
          <img src={hat} alt='hat'></img>
            <a href='https://shop.warriors.com/' className='link'>GSW City Edition Hat</a>
          </div>
          <div className='shopcard'>
          <img src={blue} alt='blue'></img>
            <a href='https://shop.warriors.com/' className='linkone'>Blue Classic Practice Hoodie</a>
          </div>
        </div>
      </div>
      <div className='warriors-community'>
      <div className='community'>
                    <div className='community-container'>
                        <img src={gswlogo} alt='gswlogo'></img><span><h1>WARRIORS IN COMMUNITY</h1></span>
                    </div>
                    <div className='cards'>
                    <div className='commcard'>
                       <img src={commone} alt='comm1'></img>
                       <h1>Warriors Community Foundation Grants Record $3.5 Million to 62 Local Nonprofits</h1>
                       <p>The Golden State Warriors have announced that the Warriors Community Foundation will donate a record $3.5 million as part of its annual grants slate this season, which tops last year’s $2.4 million as the most-ever awarded in a single season.</p>
                    </div>
                    <div className='commcard'>
                    <img src={commtwo} alt='comm1'></img>
                    <h1>Generation Thrive Announces Completion of Second Bridging the Bay Cohort</h1>
                    <p>Generation Thrive has announced the graduation of the second cohort for the Bridging The Bay, Igniting Leaders of Change, presented by Rocket Lawyer, a leadership program for 16 non-profit leaders working to attain educational equity in the Bay</p>
                    </div>
                    <div className='commcard'>
                    <img src={commthree} alt='comm1'></img>
                    <h1>Warriors, Kaiser Permanente and the Athletes’ Corner Donate Over 1.1 Million Meals During 2022-23 Season</h1>
                    <p>Nearly 3.3 Million Meals Have Been Donated To Bay Area Food Banks Over The Past Three Seasons</p>
                    </div>
                </div>
        </div>
      </div>
      <div className='footer'>
        <div className='COM'>
          <div className='Warriors'>
          <a href='/' className='main'>WARRIORS.COM</a>
          <a href='https://www.nba.com/warriors/gsw-sports-llc?utm_source=gsw-web&utm_medium=nav&utm_campaign=bottom' className='one' target="_blank" rel="noopener noreferrer">GSW Sports LLC</a>
          <a href='https://www.teamworkonline.com/sites/golden-state-warriors' className='two' target="_blank" rel="noopener noreferrer">Career Opportunities</a>
          <a href='https://am.ticketmaster.com/warriors/?utm_source=gsw-web&utm_medium=nav&utm_campaign=bottom&_ga=2.14574839.1540193197.1704017255-1476218283.1703830339&_gl=1*gtm6uo*_ga*MTQ3NjIxODI4My4xNzAzODMwMzM5*_ga_RY9H8ZP8MH*MTcwNDAxNzI1NS44LjEuMTcwNDAxNzMwMi4xMy4wLjA.' target="_blank" rel="noopener noreferrer" className='three'>My Warriors Account</a>
          </div>
          <div className='Warriorstwo'>
          <a href='/' className='main'>COMMUNITY</a>
          <a href='https://community.warriors.com/foundation/?_gl=1*ol2962*_ga*MTQ3NjIxODI4My4xNzAzODMwMzM5*_ga_RY9H8ZP8MH*MTcwNDAxNzI1NS44LjEuMTcwNDAxNzMwMi4xMy4wLjA.' className='one' target="_blank" rel="noopener noreferrer">Community Foundation</a>
          <a href='https://app.smartsheet.com/b/form/cce59674762d4002b994f02c62dbba45' className='two' target="_blank" rel="noopener noreferrer">Donation Requests</a>
          </div>
          <div className='Warriorsthree'>
          <a href='/' className='main'>STAY CONNECTED</a>
          <a href='https://www.nba.com/warriors/connect?utm_source=gsw-web&utm_medium=nav&utm_campaign=bottom' target="_blank" rel="noopener noreferrer" className='one'>Social Media</a>
          <a href='https://www.nba.com/warriors/app?utm_source=gsw-web&utm_medium=nav&utm_campaign=bottom'  target="_blank" rel="noopener noreferrer" className='two'>Get Mobile App</a>
          </div>
          <div className='Warriorsfour'>
          <a href='/' className='main'>CONNECT</a>
          <div className='socialicons'>
          <a href='https://www.facebook.com/warriors?utm_source=gsw-web&utm_medium=nav&utm_campaign=top'target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/warriors?utm_source=gsw-web&utm_medium=nav&utm_campaign=top' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
          <a href='https://www.snapchat.com/add/warriors?utm_source=gsw-web&utm_medium=nav&utm_campaign=top' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-snapchat"></i></a>
          <a href='https://www.youtube.com/warriors' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
          <a href='https://www.instagram.com/warriors/?utm_source=gsw-web&utm_medium=nav&utm_campaign=top' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
          </div>
          </div>
        </div>
        <p>Copyright © 2024 NBA Media Ventures, LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Landing;
