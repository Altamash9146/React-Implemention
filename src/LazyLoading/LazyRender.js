import React, { Suspense, lazy} from 'react'

const LazyBuild = lazy(() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve( import("./Lazy"))
        }, 2000);
    });
})


const LazyRender = () => {


  return (
    <>
    <Suspense fallback={<div>....Loading</div>}>
       <LazyBuild/> 
    </Suspense>
    
    </>
  )
}

export default LazyRender