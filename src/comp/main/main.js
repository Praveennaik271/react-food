import style from "./main.module.css";
const Main=()=>{
    return(
        <>
         <div className={`${style.back1}`}>
                    <img src="back1.png" alt="error" 
                    width="600"
                    />

                </div>
                <div className={`${style.back2}`}>
                    <img src="back2.png" alt="error"
                    width="500" />

        </div>
         <div className={`${style.nav}`}>
                <div className={`${style.logo}`}>
                    <h1>FOODIE</h1>
                </div>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact us</li>
                </ul>
                
                <button  className={`${style.but1}`}> Buy Now</button>




         </div>

         <div className={`${style.hom}`}>

            <h1>Your Favourite Food</h1>
                    <h1>Delivered Hot &</h1>
                    <h1>Fresh</h1>
            
                    <br />
                    <p>Healthy switcher chefs do all the prep work, like 
                        peeding,</p>
                 <p>chopping & marinating, so you can cook
                       a fresh food.
                    </p>
                    <br />

                    <button  className={`${style.but2}`}>Order Now</button>
         </div>
         
               
        
        </>

    )
}
export default Main;