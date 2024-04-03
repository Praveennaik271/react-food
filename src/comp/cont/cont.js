import style from "./cont.module.css";
const Cont=()=>{
    return(
        <>
        <br />

        <br /><br /><br /><br /><br /><br /><b><br /></b>
        <div className={`${style.abo}`}>
        

<h2>Contact</h2>
<br />

            <h1 className={`${style.ab}`}>Have Question In Mind?</h1>
            <br />
            <h1 className={`${style.a}`}>Let Us Help You</h1>
        </div>
        <br /><br />
        
            <div className={`${style.co}`}>
                    <div className={`${style.c1}`}>
                        <img src="github.png" alt="error"
                        width="80px" />
                    </div>

                     <div className={`${style.c2}`}>
                        <img src="linkedin.png" alt="error"
                        width="80px" />
                     </div>

                     <div className={`${style.c3}`}>
                        <img src="instagram.png" alt="error"
                        width="80px" />
                     </div>
                   

            </div>
            <br /><br /><br /><br /><br /><br />
        
        
        </>


    )
}

export default Cont;