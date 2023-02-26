import React from 'react';
import { useMemo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import ArrowCircleUpOutlined from '@material-ui/icons/ArrowUpwardRounded';
import ArrowCircleDownOutlined from '@material-ui/icons/ArrowDownwardRounded';


const data = [{
    name: "BOMB-BTCB",
    dr: "2%",
    stake: "124.21",
    stake_total : "1171.62",
    earned: "6.4413",
    earned_total: "298.88",
    tvl : "1008430",
},
{
    name: "BSHARE-BNB",
    dr: "2%",
    stake: "124.21",
    stake_total : "1171.62",
    earned: "6.4413",
    earned_total: "298.88",
    tvl : "306732",
}]

const BombFarms = () => {
  return (
    <div style={{color: "white", fontFamily: 'Nunito'}}>
        <Grid container spacing={2} style={{ padding: "20px", color: "white", backgroundColor: "rgba(35, 40, 75, 0.75)", borderRadius: "5px"}}>
        <Grid item lg={12} md={12} xs={12}> 
            <Typography style={{display:"flex", justifyContent:"space-between", marginBottom : "20px"}}>
                <Typography>
                    <Typography style={{fontSize: "30px", marginRight:"10px"}}>Bomb Farms</Typography>
                    <Typography>Stake Bshare and earn BOMB every epoch</Typography>
                </Typography>
                <Typography>
                <Button  fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Claim All</Button>
                </Typography>
            </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12}> 
                {data && data.map((item) => (
                    <>
                        <FarmComponent data={item} />
                        <hr style={{width: "100%"}} color="black" /> <br /> <br />
                    </>
                ))}
            </Grid>
        </Grid>
    </div>
  )
}

export default BombFarms;

const FarmComponent = ({data}) => {
    return (
                <Grid container>
                    <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography style={{display:"flex", justifyContent:"space-between"}}>
                            <Typography style={{display: "flex",}}>
                                <Typography style={{fontSize: "30px", marginRight:"10px"}}>Icon {data?.name}</Typography>
                                <Button  style={{backgroundColor: "rgba(0, 232, 162, 0.5)", height: "22px", textTransform: "none", marginTop: "13px"}}>Recommended</Button>
                            </Typography>    
                            <Typography style={{marginTop: "13px"}}>TVL: ${data?.tvl}</Typography>
                        </Typography>
                        <hr style={{width: "87%"}}/>
                    </Grid>
                       <Grid item lg={2} md={2} xs={4}>
                            <Typography>
                                <Typography>Daily Returns:</Typography>
                                <Typography style={{fontSize: "25px"}}>{data?.dr}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={2} md={2} xs={4}>
                            <Typography>
                                <Typography>Your Stake:</Typography>
                                <Typography>{data?.stake} <br /> ≈ ${data?.stake_total}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={2} md={2} xs={4}>
                            <Typography>
                                <Typography>Earned:</Typography>
                                <Typography>{data?.earned} <br />  ≈ ${data?.earned_total}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={3} md={6} xs={4} style={{display: "flex", justifyContent:"center"}}>
                                    <Button  fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Deposit <ArrowCircleUpOutlined/> </Button>
                                </Grid>
                                <Grid item lg={3} md={6} xs={4} style={{display: "flex", justifyContent:"center"}}>
                                    <Button  fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Withdraw <ArrowCircleDownOutlined /> </Button>
                                </Grid>
                                <Grid item lg={6} md={12} xs={6} style={{display: "flex", justifyContent:"center"}}>
                                    <Grid item lg={7} md={8} sx = {10}>
                                        <Button  fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Claim Rewards</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
    )
}

const styles = {
    leftSide : {
        backgroundColor: "rgba(35, 40, 75, 0.75)",
        borderRadius: "10px",
        height: "300px",
        padding: "10px 20px",
    },
    btn : {
        backgroundColor: "rgba(0, 173, 232, 0.8)",
        color: "white",
        fontWeight: "600",
        fontSize: "20px",
        textTransform: 'none',
    },
    btn2 : {
        backgroundColor: "grey",
        fontWeight: "600",
        fontSize: "20px",
        textTransform: 'none',
    },
}