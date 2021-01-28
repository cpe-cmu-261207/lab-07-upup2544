import Link from "next/link";
const Portfolio=()=>
{
    return(
        <div id="portfolio">
         <table style= {{width: "100%"}}>
        <tr align="center">
            <td><Link href={"/portfolio"}>Home</Link></td>
            <td><Link href={"/gallery"}>Gallery</Link></td>
            <td><Link href={"/contact"}>Contact</Link></td>
            <td><Link href={"/calgpa"}>GPA Calc</Link></td>
        </tr>
    </table>
    <h1 style={{textAlign: "center",backgroundColor:"cadetblue",padding:"2%"}}>Information</h1>  
    <table align="center">
        <tr style={{backgroundColor:" rgb(168, 228, 144)"}}>
            <td><h1>Thanachok Wirotsasithon</h1>
                <h2>Student</h2>
                <h2>thanachok_w@cmu.ac.th</h2></td>
            <td><img src="up.jpg" alt="" style={{width:"250px",height:"250px",alignItems:" baseline"}}></img></td>
        </tr>
    </table>
    <table align="center">
        <tr style={{backgroundColor:" rgb(168, 228, 144)"}}>
            <td><h2>ชื่อ : ธนโชค วิโรจน์ศศิธร</h2>
                <h2>การศึกษา : คณะวิศวกรรมศาสตร์สาขาคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่</h2>
                <h2>รหัสนักศึกษา : 620610791</h2>
                <h2>เบอร์ : 0994429653</h2>
                <h2>อีเมล์ : upup2544@hotmail.com</h2>
                <h2>กีฬาที่ชอบ : บาสเกตบอล</h2>
                <h2>Instagram : <a href="https://www.instagram.com/up_tnc/?hl=th">up_tnc</a></h2>
                <h2>facebook : <a href="https://www.facebook.com/upthanac/">Thanachok</a></h2>
            </td>
           
        </tr>
    </table>
        </div>
    )
}

export default Portfolio