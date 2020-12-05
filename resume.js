import React, { Component } from 'react';
import{ Grid ,Cell } from 'react-mdl';
import Education from './education';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />

                        </div>
                        
                        <h2 style={{paddingTop: '2em'}} >Varsha</h2>
                        <h4 style ={{color: 'grey'}}>Fresher</h4>
                        <hr style={{borderTop: '3px solid #833fb2' ,width: '50%'}}/>
                        <p>Seeking oppurtinity to bring knowledge of programming languages like html ,css , python and C. Looking for a challenging startup like environment that provides me with a good oppurtinity for growth and learning .</p>
                        <hr style={{borderTop: '3px solid #833fb2' ,width: '50%'}}/>
                        <h5>Address</h5>
                        <p>house- no 15-4-2 , rampure colony , kumbarwada road , bidar , karnataka </p>
                        <hr style={{borderTop: '3px solid #833fb2' ,width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>98765432</p>
                        <hr style={{borderTop: '3px solid #833fb2' ,width: '50%'}}/>
                        <h5>Email</h5>
                        <p>someone@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2' ,width: '50%'}}/>
                        
                        </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                         startYear={2017}
                         endYear={2021}
                         schoolName="Presidency University "
                         schoolDescription="The Presidency University, Bangalore is a private research university in Itgalpur Rajanakunte, Yelahanka, Bangalore. The university offers courses in engineering, management, design, computer applications, commerce and law."
                        
                        
                        />
                        <Education
                         startYear={2015}
                         endYear={2017}
                         schoolName="Guru Nanak Independent Pre University College "
                         schoolDescription="GURUNANAK P.U COLLEGE BIDAR was established in 1988 and it is managed by the Pvt. Unaided. It is located in Urban area. It is located in BIDAR "
                        
                        />
                        <Education
                         startYear={2014}
                         endYear={2015}
                         schoolName="Guru Nanak Public School "
                         schoolDescription="GURUNANAK public school is in  BIDAR was established in 1988 and it is managed by the Pvt. Unaided. It is located in Urban area. It is located in BIDAR "
                        
                        />
                        

                        




                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;