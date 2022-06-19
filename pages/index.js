
//destruction with curly braces because many components coming in exported from one file.
import { Button } from "antd";

//using state to store values
function Home () {
 //context hook to create global state  
    return (
        <div>
            <h1>Home</h1>
            <Button type="primary">Click me</Button>
            <br />
          
        </div>
    );
}

export default Home;


