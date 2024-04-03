import style from "./work.module.css";
const Work=()=>{
    return(
        <>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
<br />
        <br /><br /><br /><br />

<div className={`${style.abo}`}>

<h2>Work</h2>
<br />
<h1>How It Works</h1>

<br />

<p>You can order any food you like from this website and we are also providing</p>
 <p className={`${style.ab33}`}> fast delivery of product with no extra charges</p> <br /><br />    
<br />

</div>

<div className={`${style.but}`}>

            <div className={`${style.bu1}`}>
                <button><br />
                    <img src="pick-meals-image.png" alt="error"
                    width="100px" />
                    <br />
                    <br /><h2>Pick Meal</h2><br />
                
                <p>You can pick any meal which is available here.</p><br /></button>

            </div>
            <div className={`${style.bu2}`}>
                <button><br />
                    <img src="choose-image.png" alt="error"
                    width="100px" /> <br /><br />
                    <h2>Offers</h2><br />
                    <p>This are the some offers which you may select</p><br />
                 </button>

            </div>
            <div className={`${style.bu3}`}>
            <button><br />
                <img src="delivery-image.png" alt="error"
                width="100px" /> <br /><br /><h2>Fast Deliveries</h2><br />
            <p>We provide fast deliveries of product which you ordered </p><br /></button>

            </div>



</div>


        </>
    )
}

export default Work;