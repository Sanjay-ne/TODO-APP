import { useUser } from "../Contexts/UserContext";

export default function Profile() {

    const { user } = useUser()

    return user ? <h1>TODO LIST</h1> : <h1>Please login..!</h1>

}