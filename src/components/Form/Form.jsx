import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeCIty = (e) => {
        setCity(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Fill this form:</h3>
            <input className={"input"} type="text" placeholder={"Country"} value={country} onChange={onChangeCountry} />
            <input className={"input"} type="text" placeholder={"City"} value={city} onChange={onChangeCIty} />
            <select className={"select"} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Physical</option>
                <option value={'legal'}>Legal</option>
            </select>
        </div>
    )
}

export default Form;