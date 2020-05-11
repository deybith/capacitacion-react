import React, { useState, useContext } from "react";
import Articles from "./containers/Articles"
import AddArticle from "./components/AddArticle/AddArticle";
import ArticleProvider from "./context/articleContext";
import Label from "./components/Label/Label";
import Button from "./components/Button/Button";


export default function App() {   //  / / / /
   

   return <div> 
      <ArticleProvider>
         <AddArticle />
         <Articles />
         <Button />
      </ArticleProvider>



      {/* <Label>
         asdasdasdasdasda asdsadas
         <div>
            asdasdasdasd asd asdasd
         </div>
      </Label> */}

   </div>
}