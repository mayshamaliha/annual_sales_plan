import React, {Component} from 'react';
import './Amount.css';
import {Grid} from '@material-ui/core';

class Amount extends Component {
    render(){
        return(
            <div className='amountDetail'>
                <Grid container spacing={24}>
                    <Grid item xs={6} className = 'year'>
                        <div className ='yearArea1'>
                        2021
                        </div>
                        <div className='yearArea2'>
                            
                        </div>                
                    </Grid>



                    <Grid item xs={6} className='amountArea'>
                        <Grid container spacing={24}>
                            <Grid item xs={3} style={{padding:'50px'}}  className='amount'>
                                Amount
                            </Grid>
                            <Grid item xs={9} >
                                <input  style={{marginTop:'30px', marginBottom:'30px', width: '100%', height:'50px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='Enter the amount'></input>
                            </Grid>

                            <Grid item xs={3} style={{padding:'30px'}} className='GP'>
                                GP
                            </Grid>
                            <Grid item xs={3} >
                                <input style={{marginTop:'0px', height:'50px',  width: '100%',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                            </Grid>
                            <Grid item xs={6}>
                                <input style={{marginTop:'0px', height:'50px', width: '90%', borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </div>


        )
            
        
    }
}
export default Amount;