import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import { VehiclePerson } from '../api/VehiclePerson';

export interface PersonProps {
    ownersList?: VehiclePerson[];
}


export default function Person({ ownersList }: PersonProps) {
    const router = useRouter();
    const [owners, setOwners] = useState(ownersList);

    useEffect(() => {
        async function loadData() {
            const response = await fetch(
                'http://localhost:3004/vehicles?ownerName=' +
                router.query.person +
                '&vehicle=' +
                router.query.vehicle);
            const ownersList: VehiclePerson[] | undefined = await response.json();
            console.log(ownersList);
            setOwners(ownersList);
        }

        if (ownersList?.length == 0) {
            loadData();
        }
    }, []);

    if (!owners?.[0]) {
        return <blockquote>Cargando...</blockquote>
    }

    return <pre>{owners[0]?.details}</pre>
}


interface MyNextPageContext extends NextPageContext {
    query: {
        person: string;
        vehicle: string;
    }
}

Person.getInitialProps = async ({query, req}: MyNextPageContext) => {
    if (!req) {
        return { ownersList: [] };
    }
    const response = await fetch(
        'http://localhost:3004/vehicles?ownerName=' +
        query.person +
        '&vehicle=' +
        query.vehicle);
        const ownersList: VehiclePerson[] | undefined = await response.json();
    return { ownersList: ownersList }
}