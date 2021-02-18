import React from 'react';
import booksData from './book.json';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import './design.css';

var booksList = booksData.books;


export default function Store(){
    return (

     <Grid container sm={12}>
       
      {
            booksList.map((b)=>{
                return (
                        <Grid sm={2} xs={6}>
                          <div>
                           <img className="storeImage" height="100px" src={b.image}/>
                           <h3>{b.title}</h3>
                           <h5>By {b.author}</h5>
                          </div> 
                        </Grid> 
                );

            })
            }
            
          
         </Grid>
        
    );
}