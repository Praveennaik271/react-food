import style from "./about.module.css";
const About=()=>{
    return(

<>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
<br />
<div className={`${style.back1}`}>
                    <img src="back22.png" alt="error" 
                    width="300"
                    />

                </div>
                <div className={`${style.back2}`}>
                    <img src="back12.png" alt="error"
                    width="500" />

        </div>

        <div className={`${style.abo}`}>

            <h2>About</h2>
            <br />
            <h1>Food Is An Important</h1>
            <h1>Part Of A Balanced </h1> 
            <h1>Diet</h1>
            <br />

            <p>Lorem ipsum dolor adis Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <p> Sint, repellat. vero odit officiis! Sed eum beatae impedit inventore.</p>
            <br />
            <button  className={`${style.but2}`}> Learn More</button>
        </div>
        
</>

    )
}

export default About;