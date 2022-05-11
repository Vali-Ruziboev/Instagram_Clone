import { getProviders, signIn  } from "next-auth/react"


// Browser
const SingIn = ({ providers }) => {
    return ( 
        <>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
            </button>
            </div>
        ))}
    </>
    );
}


// Middle Server, server side render
export async function getServerSideProps(){
    const providers = await getProviders()

    return{
        props:{
            providers
        }
    }
}

export default SingIn;