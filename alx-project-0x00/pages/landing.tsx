import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small" style="bg-blue-500 text-sm rounded-sm" />
            <Button title="Medium" style="bg-green-500 text-base rounded-md" />
            <Button title="Large" style="bg-red-500 text-lg rounded-full" />
        </div>
        
    )
}

export default Landing;