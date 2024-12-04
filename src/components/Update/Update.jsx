import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loaderUser = useLoaderData();

    const updateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        console.log(name, email)
    }

    return (
        <div>
            <h3>{loaderUser.name}</h3>

            <form onSubmit={updateUser} >
                <input type="text" name="name" defaultValue={loaderUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loaderUser.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;