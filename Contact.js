import React, { Component } from 'react';
import { Grid , Cell, List,ListItem,ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> 
                    <h2>Varsha</h2>
                    <img
                     src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                     alt="avatar"
                     style={{height: '250px'}}
                     />
                    <p style={{width: '75%' ,  paddingTop: '1em' }}>To know more you can contact me on any of these numbers .</p>
                    
                    </Cell>
                    <Cell col={6}> 
                    <h2> contact me</h2>
                    <hr/>

                    <div className="contact-List">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" arin-hidden="true"/>
                                91 - 9768557656
                        varsha halmandge</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" arin-hidden="true"/>
                            (012-3456789)
                                Landline</ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
export default Contact;