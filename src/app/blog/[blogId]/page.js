 import React from 'react'
import Head from 'next/head'
 
 
 const page = ({params}) => {
   return (
     <div>
       <h1> DETAILS {params.blogId} </h1>
     </div>
   )
 }
 
 export default page
 