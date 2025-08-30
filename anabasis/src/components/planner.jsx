import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ClassSelect from './classselect/classselect.jsx';
import CalendarSelector from './calendarselector.jsx';
import Pto from './pto/pto.jsx';
import ServerSelect from './serverselect/serverselect.jsx';
import './planner.css';


function Planner() {
    const [availability, setAvailability] = useState([]);
    const [username, setUsername] = useState('');
    const [classes, setClasses] = useState([]);
    const [isCrafter, setIsCrafter] =  useState(false);

    const handleSelectionChange = (selection) => {
        setAvailability(selection);
    };

    const handleClassChange = selection => {
        setClasses(selection);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            classes: classes.join(', '),
            crafter: isCrafter,
            availability: availability.join(', ')
        }

        try {
            const response = await fetch('http://localhost/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send data');

            const result = await response.json();
            console.log('Server responded:', result);
        } catch (err) {
            console.error('Error: ', err);
        }
    };

    return (
        <>
            <div class='planner-container'>
                <div class='planner-user'>
                    <div class='planner-class'>
                        <TextField id="username" label="Username" variant="standard" onChange={input => setUsername(input)} />
                        <div className="classSelect">
                            <ClassSelect onSelectionChange={setClasses}/>
                        </div>
                    </div>
                    <div>
                        <ServerSelect/>
                        <div>
                            <h3>Crafter/Repair</h3>
                            <Checkbox disableRipple label="Crafter/Repair" onChange={() => setIsCrafter(!isCrafter)} />
                        </div>
                    </div>
                    <div class='planner-pto'>
                        <Pto/>
                    </div>
                </div>
                <CalendarSelector onSelectionChange={handleSelectionChange} />
                <div>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Planner

