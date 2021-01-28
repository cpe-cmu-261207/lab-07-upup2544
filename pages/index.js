import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <h1 className="bg-red-500 text-center text-4xl p-3 tracking-widest">HOMEPAGE</h1>
      <table style= {{width:" 100%;"}}>
        <tr align="center">
            <td><Link href={"/portfolio"}>Home</Link></td>
            <td><Link href={"/gallery"}>Gallery</Link></td>
            <td><Link href={"/contact"}>Contact</Link></td>
            <td><Link href={"/calgpa"}>GPA Calc</Link></td>
            <td><Link href={"/post"}>Post</Link></td>
        </tr>
    </table>
    </>
  )
}

export default Home
