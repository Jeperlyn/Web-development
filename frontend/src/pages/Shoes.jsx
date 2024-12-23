import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchAllShoes = async () => {
            try {
                const res = await axios.get("http://localhost:8800/shoes");
                setShoes(res.data);
            } catch (err) {
                console.error("Error fetching shoes:", err);
            }
        };
        fetchAllShoes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/shoes/" + id);
            setShoes((prev) => prev.filter((shoe) => shoe.id !== id)); // Update state
        } catch (err) {
            console.error("Error deleting shoe:", err);
        }
    };

    return (
        <div>
            <h1>Marketplace</h1>
            <div className="shoes">
                {shoes.length === 0 && <p>No shoes available. Add some!</p>}
                {shoes.map((shoe) => (
                    <div className="shoe" key={shoe.id}>
                        {shoe.image && <img src={shoe.image} alt={shoe.prod_name || "Shoe image"} />}
                        <h2>{shoe.prod_name}</h2>
                        <p>{shoe.prod_description}</p>
                        <span>{shoe.price}</span>
                        <button className="delete" onClick={() => handleDelete(shoe.id)}>Delete</button>
                        <button className="update">
                            <Link to={`/update/${shoe.id}`}>Update</Link>
                        </button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new item</Link>
            </button>
        </div>
    );
};

export default Shoes;
