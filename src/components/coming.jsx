import comingSoonMovie1 from '../assets/images/coming-soon1.jpg';
import comingSoonMovie2 from '../assets/images/coming-soon2.jpg';
function Coming(){
    return(
        <>
            <div id="coming">
                <div className="head">
                <h3>COMING SOON<strong>!</strong></h3>
                <p className="text-right"><a href="#">See all</a></p>
                </div>
                <div className="content">
                <h4>The Princess and the Frog </h4>
                <a href="#"><img src={comingSoonMovie1} alt="" /></a>
                <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
                <a href="#">Read more</a> </div>
                <div className="cl">&nbsp;</div>
                <div className="content">
                <h4>The Princess and the Frog </h4>
                <a href="#"><img src={comingSoonMovie2} alt="" /></a>
                <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
                <a href="#">Read more</a> </div>
            </div>
            <div className="cl">&nbsp;</div>  
        </>
    )
}
export default Coming