import { useRouter } from 'next/router';

export default function Person( {ownersList} ) {
    const router = useRouter();
    return <pre>{ ownersList[0].details }</pre>
}

Person.getInitialProps = async (ctx) => {

    const { query } = ctx;
    const response = await fetch('http://localhost:3004/vehicles?ownerName=' + query.person + '&vehicle=' + query.vehicle);
    const ownersList = await response.json();
    return {ownersList: ownersList}
}