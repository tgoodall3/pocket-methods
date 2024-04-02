import React from 'react';
import '../../Styles/resources.css';
import Play from '../../Assets/images/play-image.png';
import Activity from '../../Assets/images/activity-image.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Resources() {
    return (
        <div className="resources-container">
            <div className="resources-head-container">
            <h1 data-aos='fade-up' className='resources-head'>Resources</h1>
            <h2 data-aos='fade-in' className='resources-h2-head'>One Tune, Four Domains</h2>
            <h2 data-aos='fade-in' className='resources-h2'>Domain: CREATE</h2>
            <h2 data-aos='fade-in' className='resources-h2-bottom'>Activity: I Know I've Been Changed</h2>
            </div>

        <div data-aos='fade-in' className='standards-section'>
            <p> 
                <b> National Standard: MU:Cr1.1.E.5a </b> Compose and improvise melodic and rhythmic ideas or motives that
                reflect characteristic(s) of music or text(s) studied in rehearsal. <br/><br/>
            </p>
            <p>
                <b> Enduring Understanding: </b> The creative ideas, concepts, and feelings that influence musicians' work emerge
                from a variety of sources. <br/><br/>
                <b> Essential Question: </b> How do musicians generate creative ideas? <br/><br/>
            </p>
        </div>

        <div data-aos='fade-in' className='objectives-section'>
            <p>
                <b>Objectives:</b> <br/>
                <ol type="1">
                    <li>
                        The student will improvise a 4-bar solo in the style of “I Know I’ve Been Changed” using the first 5 pitches of the C minor scale.  
                        <ol type='a'>
                            <li>
                                Assessment: (Formal) Each student will play a 2-bar solo in the <b> Improvisation Around the Room </b> exercise.
                            </li>
                        </ol>
                        <ul>
                            4-Bar Improvisation Rubric (see full table end of document)
                        </ul>
                    </li> <br/>
                <table data-aos='fade-up'>
                    <thead>
                        <tr>
                        <th>Student Name</th>
                        <th>Pitch Range</th>
                        <th>Rythmic Variation/Style</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Student 1</td>
                        <td>
                            <ul>
                                <li>1-2 pitches used</li>
                                <li>3-6 pitches used</li>
                                <li>No use of pitch bank/key sig.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Mostly whole notes and half notes used
                                </li>
                                <li>Quarter notes and eighth note explorations used
                                </li>
                            </ul>
                        </td>
                        </tr>
                        <tr>
                        <td>Student 2</td>
                        <td><ul>
                                <li>1-2 pitches used</li>
                                <li>3-6 pitches used</li>
                                <li>No use of pitch bank/key sig.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Mostly whole notes and half notes used
                                </li>
                                <li>Quarter notes and eighth note explorations used
                                </li>
                            </ul>
                        </td>
                        </tr>
                        <tr>
                        <td>Student 3</td>
                        <td><ul>
                                <li>1-2 pitches used</li>
                                <li>3-6 pitches used</li>
                                <li>No use of pitch bank/key sig.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Mostly whole notes and half notes used
                                </li>
                                <li>Quarter notes and eighth note explorations used
                                </li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table> <br/>

                    
                    <li> 
                        The student will demonstrate understanding of call and response form.
                        <ol type='a'>
                            <li>
                            Assessment: (Informal) Students sing or play the response in time at the tutti marking in the Improvisation Around the Room exercise.
                            </li>
                        </ol>
                    </li>
                    
                </ol>
            </p>
        </div>

        <div data-aos='fade-in' className='activity-section'>
            <p>
                <b>Activity</b> <br/>
                Call & Response of the melody led by the solo voice, LaShun Pace
            </p>

            <div className='activity-video'>
            <div className='left-text'>
            Watch LaShun Pace - I Know I've Been Changed <br/>
            Call & Response begins at 0:27 (chorus) <br/>
            Variation of musical phrasing in solo-- 1:21-2:21(verse) <br/> 
           <a href='https://www.youtube.com/watch?v=UzMKZcoFTrM'>https://www.youtube.com/watch?v=UzMKZcoFTrM</a> <br/>
            </div>
            <div data-aos='fade-up' className='right-video'>
                <img src={Activity}></img>
            </div>
            </div>
        </div>

        <div data-aos='fade-in' className='discuss-section'>
            <ul>
                <li>
                    What part do you hear the audience singing? Does it change? <br/>
                    (In the chorus: “know I've been changed”; In the verse: “angels in heaven done signed my name”)
                </li>
                <li>
                    How does the soloist change her part before the audience joins? Does it get more varied or less varied as the verse continues? Why?
                </li>
                <li>
                    Why did the audience sing the response, “know I've been changed,” the same time each time? What did this allow the singer to be able to do? How did the singer's melodic line change in the solo sections?
                </li>
                <li>
                    Listen to the singer's musical choices when she sang about stepping in the water (water was cold). Why do you think she sang it this way?
                </li>
            </ul>
        </div>

        <div data-aos='fade-in' className='history-section'>
            <p>
                <b>History of Call & Response</b> <br/>
                Many musical traditions across the continent of Africa incorporate improvisation and the nuanced and explosive
                call and response, or participation, as a basis for powerful human expression. Call and response forms involve a
                caller, or soloist, who “raises the song,” and the community chorus who respond, or “agree underneath the
                song.” In the case of the Igbo (Nigeria), the storyteller calls out the story in lines; the audience or chorus
                responds at regular intervals to the storyteller’s calls with a sala (the chorus’ response). In some cases, the Igbo
                sala is amanye, roughly equivalent to American English expressions of agreement such as “amen” or “right on!”
            </p> <br/>

            <p>
            On southern United States plantations, the roots of gospel and blues were introduced in work songs and “field
            hollers” based on the musical forms and rhythms of Africa. Through singing, call and response, and hollering,
            enslaved African people coordinated their labor, communicated with one another across adjacent fields,
            bolstered weary spirits, and commented on the oppressiveness of their masters. Spirituality and improvisation
            (“letting go and letting God”) were integral to the music. Call and response are still firmly entrenched in jazz
            and African American culture today—from blues to gospel, to R&B, to bebop, to reggae, to rap music, and
            more. Virtually every jazz genre has been influenced by these roots.
            </p> <br/>

            <p data-aos='fade-in' className='history-source'>
            Source: “Call and Response,” The Jazz History Tree. https://www.jazzhistorytree.com/call-and-response/
            </p>

        </div>
        
        <div data-aos='fade-in' className='play-section'>
            <b>Play: Improvisation Around the Room Exercise - “I Know I've Been Changed”</b> <br/>
            <div data-aos='fade-up' className='play-image'>
            <img src={Play}></img>
            </div> 
        </div>
            
        </div>
    );
}

export default Resources;
