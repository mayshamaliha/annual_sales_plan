import React, {Component} from 'react';
import './Quarter.css';
import {Grid} from '@material-ui/core';
import {spacing} from '@material-ui/system';

class Quarter extends Component{

    constructor(props){
        super(props)
        this.state = {
            amount: 0,
            gp:0,
            profit:0,
            monthAmount : 0,
            monthProfit: 0
        }
        this.handleAmount = this.handleAmount.bind(this);   
    }

    handleAmount = (event) =>{
       var amount = event.target.value;
       
       var monthAmount = (amount / 6);
       /*monthAmount.toFixed(2)*/
      
       this.setState({
           amount:amount,
           monthAmount: monthAmount.toFixed(2),
       });
    }

    handleGP = (event) =>{
         var gp = event.target.value;

         var profit = (this.state.amount * gp)/100;

         var monthProfit = (this.state.monthAmount * (1/gp));

         this.setState({
             gp: gp,
             profit: profit,
             monthProfit:monthProfit.toFixed(2)
         })
    }
 
    render(){
        return(
            <div>
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
                            <input onChange={(event)=>this.handleAmount(event)} value={this.state.amount}
                             style={{marginTop:'30px', marginBottom:'30px', width: '80%', height:'50px',borderRadius:'10px', border:'#f5d0d4 1px solid', paddingRight:'50px', textAlign:'right'}} placeholder='Enter the amount'></input>
                        </Grid>

                        <Grid item xs={3} className='GP'>
                            GP
                        </Grid>
                        <Grid item xs={3} >
                            <input value={this.state.gp} onChange={(event)=>this.handleGP(event)} style={{padding:'30px'}} style={{marginTop:'0px', height:'50px',  width: '70%',borderRadius:'10px', border:'#f5d0d4 1px solid',marginLeft:'10px', paddingRight:'20px', textAlign:'right'}} placeholder='0'></input>
                        </Grid>
                        <Grid item xs={6}>
                            <input value={this.state.profit} style={{backgroundColor:'#D3D3D3', marginTop:'0px', height:'50px', width: '80%', borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'30px', textAlign:'right'}} placeholder='0'></input>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </div>

            <div className='Quarter'>
                <Grid container spacing={24}>
                    <Grid item xs={6} className='QuarterDiv' style={{maxWidth: '48%', flexBasis: '48%', marginRight: '15px'}}>
                        <Grid item xs={12} className='QHeading' style ={{marginLeft:'60px'}}>
                            <h3>Q1 - First Quarter</h3>
                        </Grid>

                        <Grid item xs={12} className='months'>
                            
                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        January 1
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount} style={{backgroundColor:'#D3D3D3', width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>


                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        February 2
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount}  style={{backgroundColor:'#D3D3D3',width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px',  width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>

                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        March 3
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount} style={{backgroundColor:'#D3D3D3',width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px',  width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>
                        
                            
                        </Grid>
                    </Grid>



                    <Grid item xs={6} className='QuarterDiv' style={{maxWidth: '48%', flexBasis: '48%', marginRight: '15px'}}>
                        <Grid item xs={12} className='QHeading' style ={{marginLeft:'60px'}}>
                            <h3>Q2 - Second Quarter</h3>
                        </Grid>

                        <Grid item xs={12} className='months'>
                            
                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        April 4
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid  item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount} style={{backgroundColor:'#D3D3D3',width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px',  width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>


                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        May 5
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount}  style={{backgroundColor:'#D3D3D3',width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px',width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px',  width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>

                            <Grid container spacing={24}>
                                <Grid item xs={3}  style={{paddingRight:'20px'}} className='monthName'>
                                    <div className='half1'>
                                        June 6
                                    </div>
                                    <div style={{paddingRight:'20px'}} className='half2'></div>                                   
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            A
                                        </Grid>
                                        <Grid item xs={11} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthAmount} style={{backgroundColor:'#D3D3D3',width: '85%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid',paddingRight:'10px', textAlign:'right'}} placeholder='Enter the amount'></input>
                                        </Grid>
                                        <Grid item xs={1} style={{paddingTop:'10px', paddingBottom: '10px'}} className='a'>
                                            P
                                        </Grid>
                                        <Grid item xs={3} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.gp} style={{backgroundColor:'#D3D3D3',textAlign:'right', paddingRight:'10px', marginRight:'10px', width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                        <Grid item xs={8} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                                            <input value={this.state.monthProfit} style={{backgroundColor:'#D3D3D3',textAlign:'right',paddingRight:'10px',marginRight:'20px',  width: '80%', height:'30px',borderRadius:'10px', border:'#f5d0d4 1px solid'}} placeholder='0'></input>
                                        </Grid>
                                    </Grid>
                                

                                </Grid>

                                
                                
                            </Grid>
                        
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}
export default Quarter;