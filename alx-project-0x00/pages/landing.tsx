import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small" styles="bg-blue-500 text-sm rounded-sm" />
            <Button title="Medium" styles="bg-green-500 text-base rounded-md" />
            <Button title="Large" styles="bg-red-500 text-lg rounded-lg" />
            <Button title="Large" styles="bg-red-500 text-lg rounded-full" />

        </div>
        
    )
}

export default Landing;