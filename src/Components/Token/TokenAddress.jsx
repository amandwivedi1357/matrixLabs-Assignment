import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


import { InnerLayout } from '../../styles/Layouts';
import App from '../web3/App';


function TokenAddress() {
    const BaseUrl = 'https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const [results,setResults] = useState([])
    const [input,setInput] = useState('');
    


    const handleInput = async(e)=>{
   
        await getFilteredResults()
        
      
    }
    const getResults = async()=>{
        const res = await fetch(BaseUrl)
        const data = await res.json()
        setResults(data.pairs)
        
    }
    const getFilteredResults = async()=>{
        const res = await fetch(BaseUrl)
        const data = await res.json()
       const newData =data.pairs.filter((el)=>el.pairAddress===input?el:null)
        // data.pairs.filter((el)=>{
        //     if(el.pairAddress===input){ return el}
        // })
        setResults(newData)
        
    }
    useEffect(() => {
        getResults()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
            <div className="nav">
                    <div className="top-nav">
                        <input
                          type="text"
                          placeholder='Search'
                          value={input}
                          onChange={(e) => {
                            setInput(e.target.value);
                            handleInput();
                        }}/>
                        <App/>
                    </div>
                    </div>
                    <h3 style={{color:'#fff'}}>Token Search Results</h3>
                <div className='results'>
                {results?.map((item)=>(
                    <div  className='one-data'>
                        <div className='container info'>
                            <h4>Basic info</h4>
                            <div className='inner-cont'>
                                <div className='flex'>
                                    <span>Pair created</span>   <span>{item.baseToken.name}</span>
                                </div>
                                <div className='flex'>
                                    <span>symbol</span>   <span>{item.baseToken.symbol}</span>
                                </div>
                                <div className='flex'>
                                    <span>Dex id</span>   <span>{item.dexId}</span>
                                </div>
                                <div className='flex'>
                                    <span>Pair Address</span>   <span>#{item.pairAddress.slice(-4)}</span>
                                </div>
                            </div>
                        </div >
                        <div className='container base'>
                        <h4>Base token</h4>
                            <div className='inner-cont'>
                            <div className='flex'>
                                    <span>name</span>   <span>{item.baseToken.name}</span>
                                </div>
                                <div className='flex'>
                                    <span>symbol</span>   <span>{item.baseToken.symbol}</span>
                                </div>
                                
                                <div className='flex'>
                                    <span>Pair Address</span>   <span>#{item.pairAddress.slice(-4)}</span>
                                </div>
                            </div>
                        </div>
                        <div className='container quote'>
                        <h4>Quote token</h4>
                            <div className='inner-cont'>
                            <div className='flex'>
                                    <span>name</span>   <span>{item.baseToken.name}</span>
                                </div>
                                <div className='flex'>
                                    <span>symbol</span>   <span>{item.baseToken.symbol}</span>
                                </div>
                                
                                <div className='flex'>
                                    <span>Pair Address</span>   <span>#{item.pairAddress.slice(-4)}</span>
                                </div>
                            </div>
                        </div>
                        <div className='container price'>
                        <h4>Price</h4>
                            <div className='inner-cont'>
                                <div className='flex'>
                                    <span>Price Native</span>   <span>{item.priceNative}</span>
                                </div>
                                
                                <div className='flex'>
                                    <span>Price USD</span>   <span>$ {item.priceUsd}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

    h3{
        margin-left: 20px;
    }
    .top-nav{
        display: flex;
        justify-content: space-between;

      input{
        margin-left: 20px;
        height: 40px;
        width: 350px;
        border: 2px solid black;
        border-radius: 20px;
        background-color: transparent;
        
      } 
      input::placeholder{
        color: #fff;
        padding-left: 10px;
        font-weight: bolder;
        font-size: large;
      } 
    }
    .results{
        display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 20px; 
    padding: 20px;

    .one-data{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 10px;
    }
    }
    
    .container{
        color: #fff;
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        
        padding-right: 20px;
        border-radius: 10px;
        background-color: purple;
    }
    .info{
        
        h4{
            color: #fff;
            margin: 20px;
        }
        .flex{
            padding-bottom: 10px;
            
            
            span{
                text-align: left;
                
            }
        }
        
    }
    .base{
        h4{
            color: #fff;
            margin: 20px;
        }
        .flex{
            padding-bottom: 10px;
        }
    }
    .quote{
        h4{
            color: #fff;
            margin: 20px;
        }
        .flex{
            padding-bottom: 10px;
        }
        
    }
    .price{
            h4{
            color: #fff;
            margin: 20px;
        }
        .flex{
            padding-bottom: 10px;
        }
        }
    .inner-cont{
           
            width: auto;
            height: auto;
            margin-left: 20px;
        }
        .flex{
            display: grid;
            /* justify-content: space-between; */
            grid-template-columns: repeat(2,1fr);
            span{
              font-size:12px ;
            }
        }

`;

export default TokenAddress