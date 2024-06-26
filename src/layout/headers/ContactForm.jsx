import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formOpen, setFormOpen] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const addDataToFirestore = async (name, email, message) => {
        try {
            const docRef = await addDoc(collection(db, 'contact'), {
                name: name,
                email: email,
                message: message,
            });
            console.log('Document written with ID: ', docRef.id);
            return true;
        } catch (error) {
            console.error('Error adding document: ', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        const { name, email, message } = formData;
        const added = await addDataToFirestore(name, email, message);
        if (added) {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setFormOpen(false);
        }
    };

    if (!formOpen) {
        return <p style={{
            fontFamily: 'Arial', fontSize: '16px', color: 'blue', fontWeight: 'bold', width: ' 500px',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>Thank you for your submission!</p>;
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', animation: 'fadeIn 1s ease-in' }}>
            <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', animation: 'fadeIn 1s ease-in' }}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ marginBottom: '5px' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="message" style={{ marginBottom: '5px' }}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            width: '100%',
                            minHeight: '150px',
                        }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
