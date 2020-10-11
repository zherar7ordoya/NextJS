import Link from 'next/link';
import { useEffect, useState} from 'react';

export default function List( {ownersList} ) {
    // const [owners, setOwners] = useState([]);

    // useEffect( () => {
    //     async function loadData() {
    //         const response = await fetch('https://raw.githubusercontent.com/bmvantunes/youtube-2020-feb-nextjs-part2/master/db.json');
    //         const ownersList = await response.json();
    //         console.log(ownersList);
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, [] );

    return(
        <div>
            {ownersList.map( (e, index) => (
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                        <a>
                            Navigate to {e.ownerName}'s {e.vehicle}
                        </a>
                    </Link>
                </div>
            ) )}
        </div>
    )



}

List.getInitialProps = async () => {
    const response = await fetch('http://localhost:3004/vehicles');
    const ownersList = await response.json();
    return {ownersList: ownersList}
}
