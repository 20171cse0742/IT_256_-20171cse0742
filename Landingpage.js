import React , { Component } from 'react';
import {Grid , Cell} from 'react-mdl';


class Landing extends Component {
  render() {
        return(
            <div style = {{width: '100%' , margin: 'auto'}}>
              <Grid className = "landing-grid">
                  <Cell col={12}>
                      <img 
                         src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                         alt="avatar"
                         className="avatar-img"
                         />
                         <div className="banner-text">
                             <h1>Hello ! My name is  Varsha</h1>

                             <hr/>

                             <p> Key skills : HTML /css |     Python   |    Javascript | C  </p>


                         </div>


                  </Cell>
              </Grid>
            </div>
        );
    }
}
export default Landing;