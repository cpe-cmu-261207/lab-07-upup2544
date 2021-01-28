import Link from "next/link";
const Gallery=()=>{
    return(
        <div id="portfolio">
        <table style= {{width:" 100%;"}}>
        <tr align="center">
            <td><Link href={"/portfolio"}>Home</Link></td>
            <td><Link href={"/gallery"}>Gallery</Link></td>
            <td><Link href={"/contact"}>Contact</Link></td>
            <td><Link href={"/calgpa"}>GPA Calc</Link></td>
            <td><Link href={"/post"}>Post</Link></td>
        </tr>
    </table>
    <h1 style={{textAlign:" center",backgroundColor:"cadetblue",padding: "2%"}}>Gallery</h1>  
    <table style={{width:"100%"}}>
        <tr>
            <td><img src="l1.jpg"></img></td>
            <td><img src="l2.png"></img></td>
            <td><img src="l3.jpg"></img></td>
        </tr>
        <tr>
            <td>Rose</td>
            <td>IU</td>
            <td>Jisoo</td>
        </tr>
        <tr>
            <td><img src="l4.jpg"></img></td>
            <td><img src="l5.jpg"></img></td>
            <td><img src="l6.jpg"></img></td>
        </tr>
        <tr>
            <td>My daugther</td>
            <td>My father</td>
            <td>Me</td>
        </tr>
        <tr>
            <td><img src="l7.jpg"></img></td>
            <td><img src="l8.jpg"></img></td>
            <td><img src="l9.jfif"></img></td>
        </tr>
        <tr>
            <td>Wallpaper Iphone</td>
            <td>Log Screen Iphne</td>
            <td>Cat</td>
        </tr>
    </table>
    </div>
    )
}

export default Gallery