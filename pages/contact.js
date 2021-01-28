import Link from "next/link";
const Contact=()=>{
    return(
        <div id="portfolio">
         <table style= {{width:" 100%;"}}>
        <tr align="center">
            <td><Link href={"/portfolio"}>Home</Link></td>
            <td><Link href={"/gallery"}>Gallery</Link></td>
            <td><Link href={"/contact"}>Contact</Link></td>
            <td><Link href={"/calgpa"}>GPA Calc</Link></td>
        </tr>
    </table>
    <h1 style={{textAlign:" center",backgroundColor:"cadetblue",padding: "2%"}}>Contact</h1>  
    <tr>
        <td><h3> <label>ข้อความ:</label></h3></td>
        <td> <textarea name="msg"></textarea> </td>
    </tr>
    <tr>
        <td><h3><label>ชื่อ:</label></h3></td>
        <td><input type="text" name="fullname" value=""></input> </td>
    </tr>
    <tr>
        <td><h3><label>เบอร์โทร:</label></h3></td>
        <td><input type="tel" name="phone" value=""></input> </td>
    </tr>
    <tr>
        <td><h3><label>อีเมล:</label></h3></td>
        <td><input type="email" value=""></input></td>
    </tr>
    <tr>
        <td><h3> <label>ที่อยู่:</label></h3></td>
        <td> <textarea name="home"></textarea> </td>
    </tr>
    <tr>
    <p><td><input type="submit" name="submit" value="ตกลง"></input></td></p>
    </tr>
        </div>
    )
}

export default Contact